// Paths and fixture rules shared by the generators and the checks.

import fs from 'node:fs/promises'
import { createRequire } from 'node:module'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const require = createRequire(import.meta.url)

export const projectRoot = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..')
export const outputDir = path.join(projectRoot, 'docs/nhsuk-frontend')
export const guidesDir = path.join(projectRoot, 'guides')
export const packageRoot = path.dirname(require.resolve('nhsuk-frontend/package.json'))
export const frontendVersion = require('nhsuk-frontend/package.json').version
export const compiledCssPath = path.join(packageRoot, 'dist/nhsuk/nhsuk-frontend.css')
export const sassSourcePath = path.join(packageRoot, 'src/nhsuk')

const componentsSourceDir = path.join(packageRoot, 'dist/nhsuk/components')

// No version or date here, so a release only changes the files it really affects
export const attribution = 'Generated from [NHS Frontend](https://github.com/nhsuk/nhsuk-frontend), © NHS England, MIT licence. Do not edit by hand.'

// Upstream keeps fixtures that exercise deprecated options, and hides edge cases from its own review app
export function exclusionReason(fixture)
{
  if (fixture.name.toLowerCase().includes('deprecated'))
  {
    return 'deprecated'
  }
  if (fixture.options?.hidden)
  {
    return 'hidden'
  }
  return null
}

// fixtures.json repeats an example's name once per variant
export function groupByExample(fixtures)
{
  const examples = new Map()
  for (const fixture of fixtures)
  {
    if (exclusionReason(fixture))
    {
      continue
    }
    if (!examples.has(fixture.name))
    {
      examples.set(fixture.name, [])
    }
    examples.get(fixture.name).push(fixture)
  }
  return [...examples].map(([name, variants]) => ({ name, variants }))
}

export async function loadComponents()
{
  const entries = await fs.readdir(componentsSourceDir, { withFileTypes: true })
  const slugs = entries.filter(entry => entry.isDirectory()).map(entry => entry.name)

  const components = await Promise.all(slugs.map(async slug =>
  {
    const directory = path.join(componentsSourceDir, slug)
    const macroSource = await fs.readFile(path.join(directory, 'macro.njk'), 'utf8')
    const fixtureFile = JSON.parse(await fs.readFile(path.join(directory, 'fixtures.json'), 'utf8'))
    const params = JSON.parse(await fs.readFile(path.join(directory, 'macro-options.json'), 'utf8'))

    return {
      slug,
      name: fixtureFile.name || slug,
      macroName: macroSource.match(/\{%-?\s*macro\s+(\w+)\s*\(/)[1],
      params,
      fixtures: fixtureFile.fixtures,
      examples: groupByExample(fixtureFile.fixtures)
    }
  }))

  return components.sort((first, second) => first.name.localeCompare(second.name))
}

// NHS Frontend's own formatter, the code its review app uses to display examples
export async function loadNunjucksLib()
{
  return import(require.resolve('nhsuk-frontend/lib/nunjucks/index.mjs'))
}

// The import line is dropped because the prototype kit makes every macro available globally
export function exampleCode(nunjucksLib, component, fixture)
{
  const options = { callBlock: fixture.callBlock }
  if (fixture.context !== undefined)
  {
    options.context = fixture.context
  }
  return nunjucksLib
    .macro(component.macroName, `${component.slug}/macro.njk`, options)
    .replace(/^\{% from [^\n]*%\}\s*\n+/, '')
    .trim()
}

// Matches how GitHub and most markdown tools build heading anchors
export function headingAnchor(heading)
{
  return heading
    .toLowerCase()
    .replace(/[^\w\s-]/g, '')
    .trim()
    .replace(/\s/g, '-')
}

export async function writeFileCreatingFolders(filePath, content)
{
  await fs.mkdir(path.dirname(filePath), { recursive: true })
  await fs.writeFile(filePath, content)
}
