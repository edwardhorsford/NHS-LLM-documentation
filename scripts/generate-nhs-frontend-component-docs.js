#!/usr/bin/env node

// Generates one file per component, their variants and the index from the installed nhsuk-frontend package.

import fs from 'node:fs/promises'
import path from 'node:path'
import {
  attribution,
  exampleCode,
  frontendVersion,
  headingAnchor,
  loadComponents,
  loadNunjucksLib,
  outputDir,
  writeFileCreatingFolders
} from './lib.js'

const categories = {
  'Form inputs': ['character-count', 'checkboxes', 'date-input', 'file-upload', 'input', 'password-input', 'radios', 'search-input', 'select', 'textarea'],
  'Form controls': ['button', 'error-message', 'fieldset', 'hint', 'label', 'legend'],
  Navigation: ['back-link', 'breadcrumb', 'contents-list', 'link', 'pagination', 'skip-link'],
  Layout: ['footer', 'header'],
  Notifications: ['environment-banner', 'error-summary', 'notification-banner', 'warning-callout']
}

const categoryOf = slug =>
  Object.keys(categories).find(category => categories[category].includes(slug)) || 'Content'

const escapeTableCell = text => (text || '').replace(/\|/g, '\\|').replace(/\n+/g, ' ')

function parameterRows(params, componentSlugs, prefix = '')
{
  return params.flatMap(param =>
  {
    const name = prefix + param.name
    // Upstream keeps required: true on deprecated params that have a replacement
    const required = param.required && !param.deprecated ? '✓' : ''
    let description = param.description || ''

    if (param.isComponent)
    {
      const slug = param.name.replace(/([A-Z])/g, '-$1').toLowerCase()
      const pointer = componentSlugs.has(slug)
        ? `*(accepts nested component params, see [${slug}](${slug}.md))*`
        : '*(accepts nested component params)*'
      description = `${description} ${pointer}`.trim()
    }
    if (param.deprecated)
    {
      description = `**Deprecated in ${param.deprecated}, do not use.** ${description}`.trim()
    }

    return [
      `| \`${name}\` | ${param.type || 'unknown'} | ${required} | ${escapeTableCell(description)} |`,
      ...parameterRows(param.params || [], componentSlugs, `${name}.`)
    ]
  })
}

const codeBlock = code => ['```njk', code, '```', '']

function renderComponent(component, componentSlugs, nunjucksLib)
{
  const lines = [
    `# ${component.name}`,
    '',
    `> ${attribution} [How to read this file](../index.md#reading-the-parameter-tables).`,
    '',
    `**Macro name:** \`${component.macroName}\``,
    ''
  ]

  if (component.params.length)
  {
    lines.push(
      '## Parameters',
      '',
      '| Parameter | Type | Required | Description |',
      '|-----------|------|----------|-------------|',
      ...parameterRows(component.params, componentSlugs),
      ''
    )
  }

  if (component.examples.length)
  {
    lines.push('## Examples', '')
  }

  for (const { name, variants } of component.examples)
  {
    const [first, ...others] = variants
    lines.push(`### ${name}`, '')
    if (first.description)
    {
      lines.push(first.description, '')
    }
    lines.push(...codeBlock(exampleCode(nunjucksLib, component, first)))
    if (others.length)
    {
      lines.push(`[${others.length} more ${others.length === 1 ? 'variant' : 'variants'} of this example](variants/${component.slug}.md#${headingAnchor(name)})`, '')
    }
  }

  return lines.join('\n')
}

function renderVariants(component, nunjucksLib)
{
  const examplesWithVariants = component.examples.filter(({ variants }) => variants.length > 1)
  if (!examplesWithVariants.length)
  {
    return null
  }

  const lines = [
    `# ${component.name} variants`,
    '',
    `> ${attribution} Parameters and main examples are in [${component.slug}.md](../${component.slug}.md).`,
    ''
  ]

  for (const { name, variants } of examplesWithVariants)
  {
    lines.push(`## ${name}`, '')
    variants.slice(1).forEach((variant, index) =>
    {
      lines.push(`### ${variant.description || `Variant ${index + 2}`}`, '')
      lines.push(...codeBlock(exampleCode(nunjucksLib, component, variant)))
    })
  }

  return lines.join('\n')
}

function renderIndex(components)
{
  return [
    '# NHS Frontend reference',
    '',
    `> Describes NHS Frontend v${frontendVersion}. ${attribution}`,
    '',
    '## How to use these docs',
    '',
    '- Before writing or changing a macro call, read that component\'s file. Do not guess parameter names: names from memory are often out of date.',
    '- Use only the parameters listed in a component\'s table.',
    '- Use the macros. Do not hand-write component HTML when a macro exists.',
    '- Read only the files you need. Each component\'s main file has its parameters and examples, and links to more variants where they exist.',
    '- Check the `nhsuk-frontend` version in the project\'s `package.json` against the version above. Older versions may not support everything listed here.',
    '',
    '## Other references',
    '',
    '- [Utility classes](utility-classes.md): every `nhsuk-u-` class and what it does, including the spacing and type scales',
    '- [Sass reference](sass-reference.md): every mixin, function and variable, with a line-numbered table of contents',
    '',
    '## Components',
    '',
    '| Component | Macro | Category | File |',
    '|-----------|-------|----------|------|',
    ...components.map(({ name, macroName, slug }) => `| ${name} | \`${macroName}()\` | ${categoryOf(slug)} | [components/${slug}.md](components/${slug}.md) |`),
    '',
    '## Reading the parameter tables',
    '',
    '- Options listed as `object` with nested `text` and `html` usually also accept a plain string when only text is needed, for example `label: "Full name"`, `hint: "..."` or `errorMessage: "..."`. This includes labels, legends, hints, error messages, headings, captions, descriptions and summaries, and table, summary list and tab content. The examples show which options accept a string.',
    '- A plain string is always escaped. For HTML, use the `html` option, including for HTML built in a `set` block.',
    '- Options marked as deprecated still work but will be removed. Use their replacement.',
    ''
  ].join('\n')
}

async function main()
{
  const components = await loadComponents()
  const nunjucksLib = await loadNunjucksLib()
  const componentSlugs = new Set(components.map(({ slug }) => slug))

  // Removes files for components that upstream has renamed or deleted
  await fs.rm(path.join(outputDir, 'components'), { recursive: true, force: true })

  for (const component of components)
  {
    const componentFile = path.join(outputDir, 'components', `${component.slug}.md`)
    await writeFileCreatingFolders(componentFile, renderComponent(component, componentSlugs, nunjucksLib))

    const variants = renderVariants(component, nunjucksLib)
    if (variants)
    {
      await writeFileCreatingFolders(path.join(outputDir, 'components/variants', `${component.slug}.md`), variants)
    }
  }

  await writeFileCreatingFolders(path.join(outputDir, 'index.md'), renderIndex(components))
  console.log(`Wrote ${components.length} components for NHS Frontend v${frontendVersion}`)

  // @prettier/sync, loaded by NHS Frontend's lib, keeps a worker thread alive
  process.exit(0)
}

main().catch(error =>
{
  console.error(error)
  process.exit(1)
})
