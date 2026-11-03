#!/usr/bin/env node

// Fails if the generated docs drop a fixture, an example doesn't render to upstream's HTML,
// a link is broken, or the guides name something that NHS Frontend doesn't have.

import fs from 'node:fs/promises'
import path from 'node:path'
import {
  compiledCssPath,
  exclusionReason,
  guidesDir,
  headingAnchor,
  loadComponents,
  loadNunjucksLib,
  outputDir
} from './lib.js'

const failures = []
const fail = message => failures.push(message)

const normaliseHtml = html => String(html).replace(/\s+/g, ' ').replace(/\s*(<|>)\s*/g, '$1').trim()
const codeBlocks = (markdown, language) =>
  [...markdown.matchAll(new RegExp('^```' + language + '\\n([\\s\\S]*?)^```$', 'gm'))].map(match => match[1].trim())

async function readIfExists(filePath)
{
  return fs.readFile(filePath, 'utf8').catch(() => null)
}

async function markdownFiles(directory)
{
  const entries = await fs.readdir(directory, { withFileTypes: true, recursive: true })
  return entries
    .filter(entry => entry.isFile() && entry.name.endsWith('.md'))
    .map(entry => path.join(entry.parentPath, entry.name))
}

async function checkExamples(components, nunjucksLib)
{
  let rendered = 0
  let excluded = 0

  for (const component of components)
  {
    const main = await readIfExists(path.join(outputDir, 'components', `${component.slug}.md`))
    const variantsFile = await readIfExists(path.join(outputDir, 'components/variants', `${component.slug}.md`))
    if (main === null)
    {
      fail(`${component.slug}: no component file`)
      continue
    }

    const shown = [
      ...component.examples.map(({ variants }) => variants[0]),
      ...component.examples.flatMap(({ variants }) => variants.slice(1))
    ]
    const blocks = [...codeBlocks(main, 'njk'), ...codeBlocks(variantsFile || '', 'njk')]

    excluded += component.fixtures.filter(exclusionReason).length
    if (blocks.length !== shown.length)
    {
      fail(`${component.slug}: ${blocks.length} examples in the docs, ${shown.length} fixtures to show`)
      continue
    }

    shown.forEach((fixture, index) =>
    {
      const source = `{% from "${component.slug}/macro.njk" import ${component.macroName} %}${blocks[index]}`
      const html = nunjucksLib.renderString(source, {})
      if (normaliseHtml(html) !== normaliseHtml(fixture.html))
      {
        fail(`${component.slug} / ${fixture.name}: example doesn't render to the fixture HTML`)
      }
      rendered++
    })

    if (shown.length + component.fixtures.filter(exclusionReason).length !== component.fixtures.length)
    {
      fail(`${component.slug}: fixtures unaccounted for`)
    }
  }

  console.log(`Examples: ${rendered} rendered and compared, ${excluded} left out as hidden or deprecated`)
}

async function checkOrphanFiles(components)
{
  const slugs = new Set(components.map(({ slug }) => slug))
  const index = await fs.readFile(path.join(outputDir, 'index.md'), 'utf8')

  for (const slug of slugs)
  {
    if (!index.includes(`(components/${slug}.md)`))
    {
      fail(`${slug}: not in the index`)
    }
  }
  for (const file of await markdownFiles(path.join(outputDir, 'components')))
  {
    if (!slugs.has(path.basename(file, '.md')))
    {
      fail(`${path.relative(outputDir, file)}: no matching component`)
    }
  }
}

async function checkLinks()
{
  const files = [...await markdownFiles(outputDir), ...await markdownFiles(guidesDir)]
  let checked = 0

  for (const file of files)
  {
    const markdown = (await fs.readFile(file, 'utf8')).replace(/^```[\s\S]*?^```$/gm, '')
    for (const [, target] of markdown.matchAll(/\]\(([^)\s]+)\)/g))
    {
      if (/^[a-z]+:/.test(target))
      {
        continue
      }
      checked++
      const [relativePath, anchor] = target.split('#')
      const targetFile = relativePath ? path.resolve(path.dirname(file), relativePath) : file
      const content = await readIfExists(targetFile)
      if (content === null)
      {
        fail(`${path.basename(file)}: broken link to ${target}`)
        continue
      }
      if (anchor)
      {
        const anchors = [...content.matchAll(/^#+ (.+)$/gm)].map(([, heading]) => headingAnchor(heading))
        if (!anchors.includes(anchor))
        {
          fail(`${path.basename(file)}: no heading for ${target}`)
        }
      }
    }
  }

  console.log(`Links: ${checked} relative links checked`)
}

async function checkSassContents()
{
  const lines = (await fs.readFile(path.join(outputDir, 'sass-reference.md'), 'utf8')).split('\n')
  let checked = 0

  for (const line of lines)
  {
    const match = line.match(/^\| (.+?)(?: \(deprecated\))? \| .+? \| .+? \| (\d+) \|$/)
    if (!match)
    {
      continue
    }
    checked++
    if (lines[Number(match[2]) - 1] !== `### ${match[1]}`)
    {
      fail(`Sass reference: contents line for ${match[1]} points at line ${match[2]}`)
    }
  }

  console.log(`Sass contents: ${checked} line numbers checked`)
}

async function checkGuides(components, nunjucksLib)
{
  const css = await fs.readFile(compiledCssPath, 'utf8')
  const sass = await fs.readFile(path.join(outputDir, 'sass-reference.md'), 'utf8')
  const imports = components
    .map(({ slug, macroName }) => `{% from "${slug}/macro.njk" import ${macroName} %}`)
    .join('')
  const counts = { classes: 0, sassNames: 0, examples: 0, skipped: 0 }

  for (const file of await markdownFiles(guidesDir))
  {
    const guide = path.basename(file)
    const markdown = await fs.readFile(file, 'utf8')

    // A trailing hyphen or asterisk marks a pattern, such as nhsuk-u-margin-*
    for (const [className] of markdown.matchAll(/nhsuk-u-[a-z0-9-]*[a-z0-9](?![a-z0-9-]|\*)/g))
    {
      counts.classes++
      if (!new RegExp(`\\.${className}(?![\\w-])`).test(css))
      {
        fail(`${guide}: class ${className} isn't in the CSS`)
      }
    }

    for (const block of codeBlocks(markdown, 'scss'))
    {
      for (const [, name] of block.matchAll(/(?:@include |[\s(:])(\$?nhsuk-[a-z0-9-]+)/g))
      {
        counts.sassNames++
        if (!sass.includes(`### ${name.replace('$', '')}`))
        {
          fail(`${guide}: Sass name ${name} isn't in the Sass reference`)
        }
      }
    }

    // Whole pages need the kit's layouts, so only standalone snippets can render here
    for (const block of [...codeBlocks(markdown, 'njk'), ...codeBlocks(markdown, 'nunjucks')])
    {
      if (/\{%-?\s*(extends|block)\b/.test(block))
      {
        counts.skipped++
        continue
      }
      counts.examples++
      try
      {
        nunjucksLib.renderString(imports + block, {})
      }
      catch (error)
      {
        fail(`${guide}: example doesn't render: ${error.message.split('\n').slice(0, 3).join(' ').slice(0, 160)} -- ${block.split('\n')[0]}`)
      }
    }
  }

  console.log(`Guides: ${counts.classes} class names, ${counts.sassNames} Sass names and ${counts.examples} examples checked, ${counts.skipped} page examples skipped`)
}

async function main()
{
  const components = await loadComponents()
  const nunjucksLib = await loadNunjucksLib()

  await checkExamples(components, nunjucksLib)
  await checkOrphanFiles(components)
  await checkLinks()
  await checkSassContents()
  await checkGuides(components, nunjucksLib)

  if (failures.length)
  {
    console.error(`\n${failures.length} problems:\n${failures.join('\n')}`)
    process.exit(1)
  }
  console.log('All checks passed')
  process.exit(0)
}

main().catch(error =>
{
  console.error(error)
  process.exit(1)
})
