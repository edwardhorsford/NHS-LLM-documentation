#!/usr/bin/env node

// Generates the utility class reference from NHS Frontend's compiled CSS, so the values match what the classes really do.

import fs from 'node:fs/promises'
import path from 'node:path'
import { attribution, compiledCssPath, outputDir, writeFileCreatingFolders } from './lib.js'

const prefix = 'nhsuk-u-'

// Returns { className: { base, 'media query': declarations } } for rules that start with a utility class
function parseUtilityRules(css)
{
  const classes = new Map()
  const source = css.replace(/\/\*[\s\S]*?\*\//g, '')

  function addRule(selectors, body, media)
  {
    const declarations = body.split(';').map(part => part.trim()).filter(Boolean).map(part => part.replace(' !important', '')).join('; ')
    for (const selector of selectors.split(','))
    {
      const match = selector.trim().match(/^\.(nhsuk-u-[\w-]+)(.*)$/)
      if (!match)
      {
        continue
      }
      const [, className, suffix] = match
      if (!classes.has(className))
      {
        classes.set(className, new Map())
      }
      const key = [media, suffix.trim()].filter(Boolean).join(' ') || 'base'
      classes.get(className).set(key, declarations)
    }
  }

  function walk(text, media)
  {
    let position = 0
    while (position < text.length)
    {
      const open = text.indexOf('{', position)
      if (open === -1)
      {
        return
      }
      const selector = text.slice(position, open).trim().replace(/^[^@.\w#:[*]+/, '')
      let depth = 1
      let close = open + 1
      while (depth > 0 && close < text.length)
      {
        if (text[close] === '{')
        {
          depth++
        }
        else if (text[close] === '}')
        {
          depth--
        }
        close++
      }
      const body = text.slice(open + 1, close - 1)
      if (selector.startsWith('@media'))
      {
        walk(body, selector.replace('@media', '').trim())
      }
      else if (!selector.startsWith('@'))
      {
        addRule(selector, body, media)
      }
      position = close
    }
  }

  walk(source, null)
  return classes
}

const code = text => `\`${text}\``

const table = (head, rows) => [
  `| ${head.join(' | ')} |`,
  `| ${head.map(() => '---').join(' | ')} |`,
  ...rows.map(row => `| ${row.join(' | ')} |`)
].join('\n')

const describeRules = rules => [...rules]
  .map(([key, declarations]) => (key === 'base' ? code(declarations) : `${key}: ${code(declarations)}`))
  .join(', ')
  .replace(/\|/g, '\\|')

const tabletQuery = '(min-width: 40.0625em)'

// Only the value of a single-property rule, such as "16px" from "margin: 16px"
const valueOf = declarations => declarations?.split(': ')[1] || ''

function spacingSection(classes)
{
  const points = [...classes.keys()]
    .filter(name => /^nhsuk-u-margin-\d+$/.test(name))
    .map(name => name.replace('nhsuk-u-margin-', ''))
    .sort((first, second) => Number(first) - Number(second))

  return [
    '## Spacing',
    '',
    'Replace `<point>` with a point from the scale, for example `nhsuk-u-margin-bottom-6`. Responsive spacing changes at the tablet breakpoint, and static spacing is the same at every screen size.',
    '',
    table(
      ['Responsive', 'Static'],
      ['margin', 'padding'].flatMap(property => ['', '-top', '-right', '-bottom', '-left'].map(direction => [
        code(`nhsuk-u-${property}${direction}-<point>`),
        code(`nhsuk-u-static-${property}${direction}-<point>`)
      ]))
    ),
    '',
    table(
      ['Point', 'Responsive: small screens', 'Responsive: tablet and up', 'Static'],
      points.map(point =>
      {
        const responsive = classes.get(`nhsuk-u-margin-${point}`)
        const fixed = classes.get(`nhsuk-u-static-margin-${point}`)
        const small = valueOf(responsive.get('base'))
        return [code(point), small, valueOf(responsive.get(tabletQuery)) || small, valueOf(fixed?.get('base'))]
      })
    ),
    ''
  ]
}

function fontSizeSection(classes)
{
  const names = [...classes.keys()]
    .filter(name => /^nhsuk-u-font-size-\d+$/.test(name))
    .sort((first, second) => Number(second.split('-').pop()) - Number(first.split('-').pop()))

  return [
    '## Font size',
    '',
    table(
      ['Class', 'Small screens', 'Tablet and up', 'Print'],
      names.map(name =>
      {
        const rules = classes.get(name)
        const small = rules.get('base')
        return [code(name), code(small), code(rules.get(tabletQuery) || small), rules.get('print') ? code(rules.get('print')) : '']
      })
    ),
    ''
  ]
}

const isSpacing = name => /^nhsuk-u-(static-)?(margin|padding)(-(top|right|bottom|left))?-\d+$/.test(name)
const isFontSize = name => /^nhsuk-u-font-size-\d+$/.test(name)

const groups = [
  ['Display', name => name.startsWith(`${prefix}display-`)],
  ['Width', name => /^nhsuk-u-(width-|one-|two-|three-|reading-width)/.test(name)],
  ['Text', name => /^nhsuk-u-(font-|text-|nowrap|wrap|secondary-text)/.test(name)],
  ['Visually hidden', name => name.startsWith(`${prefix}visually-hidden`)],
  ['Other', () => true]
]

function otherSections(classes)
{
  const remaining = [...classes.keys()].filter(name => !isSpacing(name) && !isFontSize(name)).sort()
  const claimed = new Set()

  return groups.flatMap(([title, belongs]) =>
  {
    const names = remaining.filter(name => !claimed.has(name) && belongs(name))
    names.forEach(name => claimed.add(name))
    return names.length
      ? [`## ${title}`, '', table(['Class', 'CSS'], names.map(name => [code(name), describeRules(classes.get(name))])), '']
      : []
  })
}

async function main()
{
  const classes = parseUtilityRules(await fs.readFile(compiledCssPath, 'utf8'))

  const document = [
    '# NHS Frontend utility classes',
    '',
    `> ${attribution} Read from the compiled CSS.`,
    '',
    'Prefer a component option or typography class where one exists. Most of these rules use `!important`, which is left out here. Media queries are shown as written in the CSS: `(min-width: 40.0625em)` is the tablet breakpoint.',
    '',
    ...spacingSection(classes),
    ...fontSizeSection(classes),
    ...otherSections(classes)
  ].join('\n')

  await writeFileCreatingFolders(path.join(outputDir, 'utility-classes.md'), document)
  console.log(`Wrote ${classes.size} utility classes`)
}

main().catch(error =>
{
  console.error(error)
  process.exit(1)
})
