#!/usr/bin/env node

// Generates the Sass reference from the installed nhsuk-frontend package using sassdoc.

import fs from 'fs/promises';
import os from 'os';
import path from 'path';
import { execSync } from 'child_process';
import { attribution, frontendVersion, outputDir, projectRoot, sassSourcePath } from './lib.js';

function shouldIncludeJson() {
  return process.argv.includes('--include-json');
}

function normalizeText(value) {
  if (value === null || typeof value === 'undefined') return '';
  return String(value).trim();
}

function escapeMarkdownInline(value) {
  return String(value)
    .replace(/\\/g, '\\\\')
    .replace(/\|/g, '\\|')
    .replace(/`/g, '\\`');
}

function formatLineRange(lineInfo) {
  if (!lineInfo || typeof lineInfo.start !== 'number') return 'unknown';
  if (typeof lineInfo.end !== 'number' || lineInfo.end === lineInfo.start) return `L${lineInfo.start}`;
  return `L${lineInfo.start}-L${lineInfo.end}`;
}

function formatTypeSectionTitle(type) {
  switch (type) {
    case 'function':
      return 'Functions';
    case 'mixin':
      return 'Mixins';
    case 'variable':
      return 'Variables';
    case 'placeholder':
      return 'Placeholders';
    default:
      return `${type.charAt(0).toUpperCase()}${type.slice(1)}s`;
  }
}

function renderParameterTable(parameters) {
  if (!Array.isArray(parameters) || parameters.length === 0) return '';

  const lines = [
    '#### Parameters',
    '',
    '| Name | Type | Required | Default | Description |',
    '| --- | --- | --- | --- | --- |'
  ];

  for (const parameter of parameters) {
    const name = escapeMarkdownInline(parameter.name || '-');
    const type = escapeMarkdownInline(parameter.type || '-');
    const required = parameter.required === true ? 'Yes' : 'No';
    const defaultValue = escapeMarkdownInline(normalizeText(parameter.default) || '-');
    const description = escapeMarkdownInline(normalizeText(parameter.description) || '-');
    lines.push(`| ${name} | ${type} | ${required} | ${defaultValue} | ${description} |`);
  }

  lines.push('');
  return lines.join('\n');
}

function renderRequires(requirements) {
  if (!Array.isArray(requirements) || requirements.length === 0) return '';

  const unique = new Set();
  const lines = ['#### Requires', ''];

  for (const requirement of requirements) {
    const key = `${requirement.type || 'unknown'}:${requirement.name || 'unknown'}`;
    if (unique.has(key)) continue;
    unique.add(key);

    const type = escapeMarkdownInline(requirement.type || 'unknown');
    const name = escapeMarkdownInline(requirement.name || 'unknown');
    lines.push(`- ${type}: ${name}`);
  }

  lines.push('');
  return lines.join('\n');
}

function renderLinks(links) {
  if (!Array.isArray(links) || links.length === 0) return '';

  const lines = ['#### Links', ''];
  for (const link of links) {
    if (!link?.url) continue;
    const caption = normalizeText(link.caption) || link.url;
    lines.push(`- [${escapeMarkdownInline(caption)}](${link.url})`);
  }

  if (lines.length === 2) return '';
  lines.push('');
  return lines.join('\n');
}

function renderUsedBy(usedBy) {
  if (!Array.isArray(usedBy) || usedBy.length === 0) return '';

  const unique = new Set();
  const lines = ['#### Used By', ''];
  for (const item of usedBy) {
    const contextType = item?.context?.type || 'unknown';
    const contextName = item?.context?.name || 'unknown';
    const key = `${contextType}:${contextName}`;
    if (unique.has(key)) continue;
    unique.add(key);
    lines.push(`- ${escapeMarkdownInline(contextType)}: ${escapeMarkdownInline(contextName)}`);
  }

  lines.push('');
  return lines.join('\n');
}

function renderThrows(throwsList) {
  if (!Array.isArray(throwsList) || throwsList.length === 0) return '';

  const lines = ['#### Throws', ''];
  for (const throwMessage of throwsList) {
    lines.push(`- ${escapeMarkdownInline(normalizeText(throwMessage) || 'Unknown error')}`);
  }

  lines.push('');
  return lines.join('\n');
}

function renderReturn(returnData) {
  if (!returnData) return '';

  const lines = ['#### Returns', ''];
  const type = escapeMarkdownInline(returnData.type || 'unknown');
  const description = normalizeText(returnData.description);

  if (description) {
    lines.push(`- Type: ${type}`);
    lines.push(`- Description: ${escapeMarkdownInline(description)}`);
  } else {
    lines.push(`- ${type}`);
  }

  lines.push('');
  return lines.join('\n');
}

function renderContextSnippet(context) {
  if (!context) return '';

  if (typeof context.value !== 'undefined') {
    return ['#### Value', '', '```scss', String(context.value), '```', ''].join('\n');
  }

  // Implementation bodies for functions and mixins are omitted - parameters
  // and examples are enough for usage, and full code inflates the file
  return '';
}

function renderExamples(examples) {
  if (!Array.isArray(examples) || examples.length === 0) return '';

  const lines = ['#### Examples', ''];
  for (const example of examples) {
    if (example?.description) {
      lines.push(escapeMarkdownInline(normalizeText(example.description)), '');
    }

    const language = normalizeText(example?.type) || 'scss';
    const code = normalizeText(example?.code);
    if (!code) continue;

    lines.push(`\`\`\`${language}`, code, '\`\`\`', '');
  }

  if (lines.length === 2) return '';
  return lines.join('\n');
}

function renderItem(item) {
  const context = item.context || {};
  const type = normalizeText(context.type) || 'unknown';
  const name = normalizeText(context.name) || 'unknown';
  const description = normalizeText(item.description);
  const filePath = normalizeText(item?.file?.path) || 'unknown';
  const access = normalizeText(item.access) || 'unknown';
  const validGroups = Array.isArray(item.group)
    ? item.group
      .map(group => normalizeText(group))
      .filter(group => group && group !== 'undefined' && group !== 'null')
    : [];
  const groups = validGroups.length > 0
    ? validGroups.map(group => escapeMarkdownInline(group)).join(', ')
    : 'none';
  const lineRange = formatLineRange(context.line);

  const parts = [
    `### ${escapeMarkdownInline(name)}`,
    '',
    `- Type: ${escapeMarkdownInline(type)}`,
    `- Access: ${escapeMarkdownInline(access)}`,
    `- Group: ${groups}`,
    `- File: ${escapeMarkdownInline(filePath)} (${lineRange})`
  ];

  // Surface @deprecated and @alias annotations so LLMs avoid outdated APIs
  if ('deprecated' in item) {
    const deprecatedNote = normalizeText(item.deprecated);
    parts.push(deprecatedNote
      ? `- **Deprecated:** ${escapeMarkdownInline(deprecatedNote)}`
      : '- **Deprecated**');
  }
  if (item.alias) {
    parts.push(`- Alias of: ${escapeMarkdownInline(String(item.alias))} (prefer the original)`);
  }

  if (description) {
    parts.push('', description, '');
  } else {
    parts.push('');
  }

  const contextSnippet = renderContextSnippet(context);
  if (contextSnippet) parts.push(contextSnippet);

  const parameterTable = renderParameterTable(item.parameter);
  if (parameterTable) parts.push(parameterTable);

  const returnSection = renderReturn(item.return);
  if (returnSection) parts.push(returnSection);

  const throwsSection = renderThrows(item.throw);
  if (throwsSection) parts.push(throwsSection);

  const requiresSection = renderRequires(item.require);
  if (requiresSection) parts.push(requiresSection);

  const linksSection = renderLinks(item.link);
  if (linksSection) parts.push(linksSection);

  const usedBySection = renderUsedBy(item.usedBy);
  if (usedBySection) parts.push(usedBySection);

  const examplesSection = renderExamples(item.example);
  if (examplesSection) parts.push(examplesSection);

  parts.push('---', '');
  return parts.join('\n');
}

function generateMarkdownDocumentation(data) {
  const metadata = data.metadata || {};
  // Exclude vendored third-party code (sass-mq) - it is internal plumbing,
  // not part of NHS Frontend's public Sass API. NHS Frontend's own wrapper
  // in core/tools/_sass-mq.scss (nhsuk-media-query) is kept.
  const items = (Array.isArray(data.items) ? data.items : []).filter(item => {
    const filePath = normalizeText(item?.file?.path);
    return !/(^|\/)vendor\//.test(filePath);
  });

  const byType = new Map();
  for (const item of items) {
    const type = normalizeText(item?.context?.type) || 'unknown';
    if (!byType.has(type)) byType.set(type, []);
    byType.get(type).push(item);
  }

  const typeOrder = ['function', 'mixin', 'variable', 'placeholder', 'unknown'];
  const discoveredTypes = Array.from(byType.keys()).sort((a, b) => {
    const aIndex = typeOrder.indexOf(a);
    const bIndex = typeOrder.indexOf(b);
    if (aIndex === -1 && bIndex === -1) return a.localeCompare(b);
    if (aIndex === -1) return 1;
    if (bIndex === -1) return -1;
    return aIndex - bIndex;
  });

  // Pre-sort items per type so the TOC and document body use the same order.
  const sortedByType = new Map();
  for (const type of discoveredTypes) {
    sortedByType.set(type, (byType.get(type) || []).slice().sort((left, right) => {
      const leftName = normalizeText(left?.context?.name) || '';
      const rightName = normalizeText(right?.context?.name) || '';
      return leftName.localeCompare(rightName);
    }));
  }

  // Flat list of all items in document order (type order, alphabetical within type).
  const tocRows = [];
  for (const type of discoveredTypes) {
    for (const item of sortedByType.get(type)) {
      tocRows.push({ item, type });
    }
  }

  const TOC_PLACEHOLDER = '%%TOC%%';

  // ── PASS 1 ─────────────────────────────────────────────────────────────
  // Build full document with a one-line placeholder where the TOC table will go.
  // Scan that text to find the line number of every ### heading.
  // Pass 2 builds the real TOC table and replaces the placeholder.

  const lines = [
    '# NHS Frontend Sass reference',
    '',
    `> Describes NHS Frontend v${escapeMarkdownInline(metadata.nhsFrontendVersion || 'unknown')}. ${attribution}`,
    '',
    '## Table of contents',
    '',
    TOC_PLACEHOLDER,
    '',
  ];

  for (const type of discoveredTypes) {
    lines.push(`## ${formatTypeSectionTitle(type)}`, '');
    for (const item of sortedByType.get(type)) {
      lines.push(renderItem(item));
    }
  }

  const doc = lines.join('\n').replace(/\n{3,}/g, '\n\n').trim() + '\n';

  // ── PASS 2 ─────────────────────────────────────────────────────────────
  // Scan placeholder document to find line numbers of each ### item heading.
  // Item headings use exactly 3 hashes; sub-section headings use 4 hashes (####).
  const docLines = doc.split('\n');
  const headingLineNums = [];
  for (let i = 0; i < docLines.length; i++) {
    if (/^### /.test(docLines[i])) {
      headingLineNums.push(i + 1); // 1-based
    }
  }

  // The placeholder (1 line) expands to: 1 header row + 1 separator row + N data rows = (2+N) lines.
  // The trailing \n on tocTable adds 1 more blank line. Net shift = 2+N.
  const lineOffset = 2 + tocRows.length;

  // Build the TOC table with corrected line numbers.
  let tocTable = `| Name | Type | Group | Line |\n`;
  tocTable    += `|------|------|-------|------|\n`;
  for (let i = 0; i < tocRows.length; i++) {
    const { item, type } = tocRows[i];
    const name = escapeMarkdownInline(normalizeText(item?.context?.name) || 'unknown');
    const validGroups = Array.isArray(item.group)
      ? item.group.map(g => normalizeText(g)).filter(g => g && g !== 'undefined' && g !== 'null')
      : [];
    const groups = validGroups.length > 0
      ? validGroups.map(g => escapeMarkdownInline(g)).join(', ')
      : 'none';
    const lineNum = (headingLineNums[i] ?? 0) + lineOffset;
    const nameCell = 'deprecated' in item ? `${name} (deprecated)` : name;
    tocTable += `| ${nameCell} | ${escapeMarkdownInline(type)} | ${groups} | ${lineNum} |\n`;
  }

  return doc.replace(TOC_PLACEHOLDER, tocTable);
}

async function main() {
  const temporaryJsonPath = path.join(await fs.mkdtemp(path.join(os.tmpdir(), 'nhs-sassdoc-')), 'sassdoc.json');
  execSync(`"${path.join(projectRoot, 'node_modules/.bin/sassdoc')}" --parse --no-update-notifier "${sassSourcePath}" > "${temporaryJsonPath}"`, { stdio: 'inherit' });

  const items = JSON.parse(await fs.readFile(temporaryJsonPath, 'utf-8'));
  const outputData = {
    metadata: { nhsFrontendVersion: frontendVersion },
    items
  };

  await fs.mkdir(outputDir, { recursive: true });
  await fs.writeFile(path.join(outputDir, 'sass-reference.md'), generateMarkdownDocumentation(outputData));
  console.log(`Wrote the Sass reference, ${items.length} items`);

  if (shouldIncludeJson()) {
    await fs.writeFile(path.join(outputDir, 'sass-reference.json'), JSON.stringify(outputData, null, 2));
  }

  await fs.rm(path.dirname(temporaryJsonPath), { recursive: true, force: true });
}

main().catch(error => {
  console.error(error);
  process.exit(1);
});
