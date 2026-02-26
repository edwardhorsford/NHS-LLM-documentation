#!/usr/bin/env node

// Generate documentation from NHS Frontend Sass documentation
// Usage: node generate-nhs-sass-docs.js

import fs from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';
import { execSync } from 'child_process';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Find project root (parent of scripts/ directory)
const projectRoot = path.resolve(__dirname, '..');

// Configuration - all paths relative to project root
const CONFIG = {
  repoPath: process.env.NHS_FRONTEND_PATH || path.join(projectRoot, '../nhsuk-frontend'),
  outputDir: path.join(projectRoot, 'dist'),
  tempJsonPath: path.join(projectRoot, 'dist', 'nhs-frontend-sassdocs.temp.json')
};

/**
 * Show help message
 */
function showHelp() {
  console.log(`
NHS Frontend Sass Documentation Generator
=========================================

Generates comprehensive Sass documentation from NHS Frontend.

USAGE:
  node generate-nhs-sass-docs.js [options]

OPTIONS:
  --help              Show this help message
  --allow-internal    Allow generation from *-internal.* versions
  --include-json      Also write raw JSON output

ENVIRONMENT VARIABLES:
  NHS_FRONTEND_PATH   Path to NHS Frontend repository
                      Default: ../nhsuk-frontend (relative to project root)

EXAMPLES:
  # Use default repository location
  node generate-nhs-sass-docs.js

  # Use custom repository location
  NHS_FRONTEND_PATH=/path/to/nhsuk-frontend node generate-nhs-sass-docs.js

OUTPUT:
  Files are generated in ./dist/
  - nhs-frontend-sass-reference.instructions.md  LLM-friendly Sass reference
  - nhs-frontend-sass-reference.json  Raw Sass documentation (only with --include-json)

REQUIREMENTS:
  - sassdoc must be installed: npm install -g sassdoc
    or use npx: npx sassdoc (automatically used by this script)

NOTE:
  By default, this script exits if the NHS Frontend version contains "-internal.".
  Use --allow-internal (or ALLOW_INTERNAL_NHS_FRONTEND=1) to override.
`);
  process.exit(0);
}

function isInternalVersion(version) {
  return typeof version === 'string' && version.includes('-internal.');
}

function shouldAllowInternal() {
  return process.argv.includes('--allow-internal') || process.env.ALLOW_INTERNAL_NHS_FRONTEND === '1';
}

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

  const lines = ['#### Used By', ''];
  for (const item of usedBy) {
    const contextType = item?.context?.type || 'unknown';
    const contextName = item?.context?.name || 'unknown';
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

  const code = normalizeText(context.code);
  if (!code) return '';
  return ['#### Implementation', '', '```scss', code, '```', ''].join('\n');
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
  const items = Array.isArray(data.items) ? data.items : [];

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

  const lines = [
    '# NHS Frontend Sass Reference',
    '',
    '> Auto-generated from NHS Frontend Sass documentation. Do not edit manually.',
    '',
    '## Metadata',
    '',
    `- NHS Frontend Version: ${escapeMarkdownInline(metadata.nhsFrontendVersion || 'unknown')}`,
    `- Git Branch: ${escapeMarkdownInline(metadata.gitBranch || 'unknown')}`,
    `- Git Commit: ${escapeMarkdownInline(metadata.gitCommit || 'unknown')}`,
    `- Generated: ${escapeMarkdownInline(metadata.generated || 'unknown')}`,
    `- Source: ${metadata.source || 'unknown'}`,
    '',
    '## Contents',
    ''
  ];

  for (const type of discoveredTypes) {
    const typeItems = byType.get(type) || [];
    lines.push(`- ${formatTypeSectionTitle(type)} (${typeItems.length})`);
  }
  lines.push('');

  for (const type of discoveredTypes) {
    const typeItems = (byType.get(type) || []).slice().sort((left, right) => {
      const leftName = normalizeText(left?.context?.name) || '';
      const rightName = normalizeText(right?.context?.name) || '';
      return leftName.localeCompare(rightName);
    });

    lines.push(`## ${formatTypeSectionTitle(type)}`, '');
    for (const item of typeItems) {
      lines.push(renderItem(item));
    }
  }

  return lines.join('\n').replace(/\n{3,}/g, '\n\n').trim() + '\n';
}

/**
 * Get NHS Frontend version from package.json
 */
async function getNHSFrontendVersion(repoPath) {
  try {
    const packageJsonPath = path.join(repoPath, 'packages/nhsuk-frontend/package.json');
    const packageJson = await fs.readFile(packageJsonPath, 'utf-8');
    const parsed = JSON.parse(packageJson);
    return parsed.version || 'unknown';
  } catch (error) {
    return 'unknown';
  }
}

/**
 * Get git commit hash and branch from NHS Frontend repo
 */
async function getGitInfo(repoPath) {
  try {
    const headPath = path.join(repoPath, '.git', 'HEAD');
    const headContent = await fs.readFile(headPath, 'utf-8');
    
    let commitHash = 'unknown';
    let branch = 'unknown';
    
    if (headContent.startsWith('ref: ')) {
      const refPath = headContent.trim().substring(5);
      branch = refPath.split('/').pop();
      
      const refFullPath = path.join(repoPath, '.git', refPath);
      const commitContent = await fs.readFile(refFullPath, 'utf-8');
      commitHash = commitContent.trim().substring(0, 7);
    } else {
      commitHash = headContent.trim().substring(0, 7);
      branch = 'detached';
    }
    
    return { commitHash, branch };
  } catch (error) {
    return { commitHash: 'unknown', branch: 'unknown' };
  }
}

/**
 * Format current date and time
 */
function formatDateTime() {
  const now = new Date();
  return now.toISOString().replace('T', ' ').substring(0, 19) + ' UTC';
}

/**
 * Run sassdoc to generate JSON
 */
async function runSassdoc(repoPath, outputPath) {
  const sassPath = path.join(repoPath, 'packages/nhsuk-frontend/src/nhsuk');
  
  console.log('Running sassdoc...');
  try {
    execSync(`npx sassdoc --parse "${sassPath}" > "${outputPath}"`, {
      stdio: 'inherit'
    });
    return true;
  } catch (error) {
    console.error('Error running sassdoc:', error.message);
    return false;
  }
}

/**
 * Generate JSON documentation with metadata from sassdoc JSON
 */
async function generateDocumentation(jsonPath, version, gitInfo, generatedAt) {
  const jsonContent = await fs.readFile(jsonPath, 'utf-8');
  const sassData = JSON.parse(jsonContent);
  
  // Create structured output with metadata
  const output = {
    metadata: {
      nhsFrontendVersion: version,
      gitBranch: gitInfo.branch,
      gitCommit: gitInfo.commitHash,
      generated: generatedAt,
      source: 'https://github.com/nhsuk/nhsuk-frontend',
      description: 'Auto-generated Sass documentation from NHS Frontend. This contains all Sass mixins, functions, variables, and placeholders extracted using sassdoc.'
    },
    items: sassData
  };
  
  return output;
}

/**
 * Main execution function
 */
async function main() {
  if (process.argv.includes('--help') || process.argv.includes('-h')) {
    showHelp();
  }

  console.log('🏥 NHS Frontend Sass Documentation Generator');
  console.log('============================================\n');

  // Resolve paths
  const repoPath = path.resolve(CONFIG.repoPath);
  
  // Verify repository exists
  try {
    await fs.access(repoPath);
    console.log(`✓ Found NHS Frontend at: ${repoPath}\n`);
  } catch (error) {
    console.error(`✗ NHS Frontend not found at: ${repoPath}`);
    console.error(`   Set NHS_FRONTEND_PATH environment variable or run with --help\n`);
    process.exit(1);
  }

  // Create output directory
  await fs.mkdir(CONFIG.outputDir, { recursive: true });

  // Run sassdoc
  console.log('📋 Running sassdoc to extract Sass documentation...');
  const success = await runSassdoc(repoPath, CONFIG.tempJsonPath);
  
  if (!success) {
    console.error('\n✗ Failed to run sassdoc. Is it installed?');
    console.error('   Install with: npm install -g sassdoc');
    console.error('   Or this script will use: npx sassdoc\n');
    process.exit(1);
  }
  
  console.log('✓ Sassdoc parsing complete\n');

  // Get NHS Frontend version and git info
  console.log('📋 Reading NHS Frontend version and git info...');
  const version = await getNHSFrontendVersion(repoPath);
  const gitInfo = await getGitInfo(repoPath);
  const generatedAt = formatDateTime();

  if (isInternalVersion(version) && !shouldAllowInternal()) {
    console.error(`✗ Refusing to generate docs from internal NHS Frontend version: ${version}`);
    console.error('   This usually means you are on an unreleased branch/commit (for example main).');
    console.error('   To generate docs for latest release, checkout a stable tag in your nhsuk-frontend clone, e.g.:');
    console.error('   git fetch --all --tags');
    console.error("   git checkout \"$(git tag --sort=-v:refname | grep -E '^v[0-9]+\\.[0-9]+\\.[0-9]+$' | head -n1)\"");
    console.error('   If you really want internal docs, rerun with --allow-internal or ALLOW_INTERNAL_NHS_FRONTEND=1.\n');
    process.exit(1);
  }

  console.log(`✓ NHS Frontend v${version} (${gitInfo.branch}@${gitInfo.commitHash})\n`);

  // Generate documentation
  console.log('📝 Generating Sass reference documentation...');
  const outputData = await generateDocumentation(
    CONFIG.tempJsonPath,
    version,
    gitInfo,
    generatedAt
  );

  const markdownOutput = generateMarkdownDocumentation(outputData);

  // Write output (Markdown is always generated)
  const markdownPath = path.join(CONFIG.outputDir, 'nhs-frontend-sass-reference.instructions.md');
  await fs.writeFile(markdownPath, markdownOutput);

  if (shouldIncludeJson()) {
    const jsonPath = path.join(CONFIG.outputDir, 'nhs-frontend-sass-reference.json');
    await fs.writeFile(jsonPath, JSON.stringify(outputData, null, 2));
    console.log(`✓ Generated: ${jsonPath}`);
  }

  // Clean up temp JSON file
  await fs.unlink(CONFIG.tempJsonPath);

  console.log(`✓ Generated: ${markdownPath}`);
  console.log('\n✅ Sass documentation generation complete!\n');
}

// Run the script
if (import.meta.url === `file://${process.argv[1]}`) {
  main().catch(error => {
    console.error('\n✗ Error generating documentation:');
    console.error(error.message);
    console.error('\nRun with --help for usage information.\n');
    process.exit(1);
  });
}

export { main };