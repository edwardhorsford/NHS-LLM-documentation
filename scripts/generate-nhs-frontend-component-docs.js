#!/usr/bin/env node

// Generate documentation for NHS Frontend components
// Usage: node generate-nhs-frontend-component-docs.js

import fs from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';
import readline from 'readline';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Find project root (parent of scripts/ directory)
const projectRoot = path.resolve(__dirname, '..');

// Configuration - all paths relative to project root
const CONFIG = {
  repoPath: process.env.NHS_FRONTEND_PATH || path.join(projectRoot, '../nhsuk-frontend'),
  outputDir: path.join(projectRoot, 'dist'),
  componentsPath: 'packages/nhsuk-frontend/src/nhsuk/components'
};

/**
 * Prompt user for input
 */
function prompt(question) {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });

  return new Promise(resolve => {
    rl.question(question, answer => {
      rl.close();
      resolve(answer.trim());
    });
  });
}

/**
 * Show help message
 */
function showHelp() {
  console.log(`
NHS Frontend Documentation Generator
====================================

Generates comprehensive documentation from NHS Frontend components.

USAGE:
  node generate-nhs-frontend-component-docs.js [options]

OPTIONS:
  --help              Show this help message
  --allow-internal    Allow generation from *-internal.* versions

ENVIRONMENT VARIABLES:
  NHS_FRONTEND_PATH   Path to NHS Frontend repository
                      Default: ../nhsuk-frontend (relative to project root)

EXAMPLES:
  # Use default repository location
  node generate-nhs-frontend-component-docs.js

  # Use custom repository location
  NHS_FRONTEND_PATH=/path/to/nhsuk-frontend node generate-nhs-frontend-component-docs.js

OUTPUT:
  Files are generated in ./dist/
  - nhs-frontend-component-reference.md  Complete component documentation with parameters and examples

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
    // Get commit hash
    const headPath = path.join(repoPath, '.git', 'HEAD');
    const headContent = await fs.readFile(headPath, 'utf-8');
    
    let commitHash = 'unknown';
    let branch = 'unknown';
    
    // Check if HEAD points to a branch or is detached
    if (headContent.startsWith('ref: ')) {
      // HEAD points to a branch
      const refPath = headContent.trim().substring(5); // Remove 'ref: '
      branch = refPath.split('/').pop(); // Get branch name from refs/heads/main
      
      const refFullPath = path.join(repoPath, '.git', refPath);
      const commitContent = await fs.readFile(refFullPath, 'utf-8');
      commitHash = commitContent.trim().substring(0, 7); // Short hash
    } else {
      // Detached HEAD - HEAD contains the commit hash directly
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
 * Generate documentation header
 */
function generateHeader(version, gitInfo, generatedAt) {
  return `---
**Auto-generated Documentation**

- **NHS Frontend Version:** ${version}
- **Git Branch:** ${gitInfo.branch}
- **Git Commit:** ${gitInfo.commitHash}
- **Generated:** ${generatedAt}
- **Source:** [NHS Frontend Repository](https://github.com/nhsuk/nhsuk-frontend)

*This documentation is automatically extracted from NHS Frontend component definitions. Do not edit manually.*

---

`;
}

/**
 * Format object as Nunjucks-style with unquoted keys
 */
function formatAsNunjucks(obj, indent = 0) {
  if (obj === null) return 'null';
  if (typeof obj === 'undefined') return 'undefined';
  if (typeof obj === 'string') return `"${obj}"`;
  if (typeof obj === 'number' || typeof obj === 'boolean') return String(obj);

  if (Array.isArray(obj)) {
    if (obj.length === 0) return '[]';
    const items = obj.map(item => '  '.repeat(indent + 1) + formatAsNunjucks(item, indent + 1));
    return '[\n' + items.join(',\n') + '\n' + '  '.repeat(indent) + ']';
  }

  if (typeof obj === 'object') {
    const keys = Object.keys(obj);
    if (keys.length === 0) return '{}';

    const items = keys.map(key => {
      const value = formatAsNunjucks(obj[key], indent + 1);
      return '  '.repeat(indent + 1) + `${key}: ${value}`;
    });

    return '{\n' + items.join(',\n') + '\n' + '  '.repeat(indent) + '}';
  }

  return String(obj);
}

/**
 * Extract the macro name from a macro.njk file
 */
async function extractMacroName(componentDir) {
  try {
    const macroPath = path.join(componentDir, 'macro.njk');
    const macroContent = await fs.readFile(macroPath, 'utf-8');
    
    // Match {% macro macroName(params) %}
    const match = macroContent.match(/\{%\s*macro\s+(\w+)\s*\(/);
    if (match) {
      return match[1];
    }
    return null;
  } catch (error) {
    return null;
  }
}

/**
 * Dynamically import examples from a fixtures.mjs file (separate from macro-options.mjs)
 */
async function loadFixtures(componentDir) {
  try {
    const fixturesPath = path.join(componentDir, 'fixtures.mjs');
    const fixturesUrl = `file://${path.resolve(fixturesPath)}`;
    const fixturesModule = await import(fixturesUrl);
    return fixturesModule.examples || {};
  } catch (error) {
    // No fixtures file, or it failed to import - return empty
    return {};
  }
}

/**
 * Dynamically import and parse a macro-options.mjs file
 */
async function parseComponentFile(filePath) {
  try {
    // Convert to file:// URL for dynamic import
    const fileUrl = `file://${path.resolve(filePath)}`;
    const module = await import(fileUrl);

    const componentDir = path.dirname(filePath);
    const macroName = await extractMacroName(componentDir);

    // Examples live in fixtures.mjs (separate from macro-options.mjs)
    const examples = await loadFixtures(componentDir);

    return {
      name: module.name || path.basename(path.dirname(filePath)),
      macroName: macroName,
      params: module.params || {},
      examples,
      options: module.options || {},
      filePath
    };
  } catch (error) {
    // Silently skip files that can't be imported
    return null;
  }
}

/**
 * Extract flattened parameters including nested ones
 */
function flattenParams(params, prefix = '') {
  const flattened = [];

  for (const [name, param] of Object.entries(params)) {
    const fullName = prefix ? `${prefix}.${name}` : name;

    flattened.push({
      name: fullName,
      ...param
    });

    // Recursively flatten nested params
    if (param.params && typeof param.params === 'object') {
      flattened.push(...flattenParams(param.params, fullName));
    }
  }

  return flattened;
}

/**
 * Format a single example for display
 */
function formatExample(component, exampleName, example) {
  // Some examples (e.g. inset-text) use only a callBlock with no context params — treat as {}
  if (!example.context && !example.callBlock) return null;
  const context = example.context ?? {};

  // Use the actual macro name if available, otherwise derive from component name
  const macroName = component.macroName || component.name.toLowerCase().replace(/\s+/g, '');

  // Check if this example has a callBlock (content inside the component)
  if (example.callBlock && typeof example.callBlock === 'string' && example.callBlock.trim().length > 0) {
    // Show as a Nunjucks call block
    // Note: callBlock is already a processed string (outdent template literals
    // are evaluated at import time in fixtures.mjs)
    let output = `{% call ${macroName}(${formatAsNunjucks(context)}) %}\n`;
    output += example.callBlock.trim().replace(/^/gm, '  '); // Indent each line
    output += `\n{% endcall %}`;
    return output;
  } else {
    // Show wrapped in component macro syntax
    return `{{ ${macroName}(${formatAsNunjucks(context)}) }}`;
  }
}

/**
 * Get example value based on parameter type and name
 */
function getExampleValue(type, name) {
  switch (type) {
    case 'string':
      if (name.includes('id') || name.includes('Id')) return '"example-id"';
      if (name === 'name') return '"example-name"';
      if (name === 'text') return '"Example text"';
      if (name === 'href') return '"#example"';
      if (name === 'classes') return '"nhsuk-example-class"';
      return '"example"';
    case 'boolean':
      return 'false';
    case 'array':
      return '[]';
    case 'object':
      return '{}';
    case 'integer':
      return '1';
    default:
      return '"example"';
  }
}

/**
 * Generate fallback example when no real examples exist
 */
function generateFallbackExample(component) {
  const flatParams = flattenParams(component.params);
  const requiredParams = flatParams
    .filter(param => param.required)
    .slice(0, 5);

  if (requiredParams.length > 0) {
    let output = `{\n`;
    for (const param of requiredParams) {
      const exampleValue = getExampleValue(param.type, param.name);
      output += `  ${param.name}: ${exampleValue},\n`;
    }
    output += `  // ... other optional params\n`;
    output += `}`;
    return output;
  } else {
    return '*No required parameters*';
  }
}

/**
 * Create URL-safe slug from component name
 */
function slugify(text) {
  return text.toLowerCase().replace(/\s+/g, '-');
}

/**
 * Intelligently categorize a component based on its characteristics
 */
function categorizeComponent(component) {
  const slug = component.name.toLowerCase().replace(/\s+/g, '-');
  const flatParams = flattenParams(component.params);
  const paramNames = flatParams.map(p => p.name);
  
  // Static mapping for known components (takes precedence)
  const knownCategories = {
    // Form Inputs
    'input': 'Form Inputs',
    'textarea': 'Form Inputs',
    'select': 'Form Inputs',
    'radios': 'Form Inputs',
    'checkboxes': 'Form Inputs',
    'date-input': 'Form Inputs',
    'file-upload': 'Form Inputs',
    'character-count': 'Form Inputs',
    
    // Form Controls
    'button': 'Form Controls',
    'fieldset': 'Form Controls',
    'label': 'Form Controls',
    'hint': 'Form Controls',
    'error-message': 'Form Controls',
    'error-summary': 'Form Controls',
    
    // Navigation
    'back-link': 'Navigation',
    'breadcrumb': 'Navigation',
    'breadcrumbs': 'Navigation',
    'pagination': 'Navigation',
    'skip-link': 'Navigation',
    'contents-list': 'Navigation',
    
    // Layout
    'header': 'Layout',
    'footer': 'Layout',
    'width-container': 'Layout',
    'container': 'Layout',
    
    // Notifications
    'warning-callout': 'Notifications',
    'care-card': 'Notifications',
    'error-summary': 'Notifications',
    
    // Content
    'action-link': 'Content',
    'card': 'Content',
    'details': 'Content',
    'expander': 'Content',
    'images': 'Content',
    'image': 'Content',
    'inset-text': 'Content',
    'summary-list': 'Content',
    'table': 'Content',
    'tag': 'Content',
    'do-dont-list': 'Content',
    'review-date': 'Content'
  };
  
  // Check known categories first
  if (knownCategories[slug]) {
    return knownCategories[slug];
  }
  
  // Dynamic categorization based on characteristics
  
  // Check if it's a form input (has input-like parameters)
  if (paramNames.includes('name') && paramNames.includes('id') && 
      (paramNames.includes('value') || paramNames.includes('items'))) {
    return 'Form Inputs';
  }
  
  // Check if it's navigation (has href or items for navigation)
  if (slug.includes('nav') || slug.includes('link') || slug.includes('menu') ||
      (paramNames.includes('href') && (slug.includes('back') || slug.includes('skip')))) {
    return 'Navigation';
  }
  
  // Check if it's a notification/callout (has visual prominence indicators)
  if (slug.includes('alert') || slug.includes('warning') || slug.includes('callout') || 
      slug.includes('banner') || slug.includes('notification')) {
    return 'Notifications';
  }
  
  // Check if it's layout (has structural role)
  if (slug.includes('container') || slug.includes('wrapper') || slug.includes('grid') ||
      slug.includes('header') || slug.includes('footer')) {
    return 'Layout';
  }
  
  // Check if it's a form control (has label, error, hint type params)
  if ((slug.includes('label') || slug.includes('error') || slug.includes('hint')) ||
      (paramNames.includes('label') && paramNames.includes('errorMessage'))) {
    return 'Form Controls';
  }
  
  // Default to Content
  return 'Content';
}

/**
 * Categorize all components and return organized structure
 */
function categorizeComponents(components) {
  const categories = {
    'Form Inputs': [],
    'Form Controls': [],
    'Navigation': [],
    'Content': [],
    'Layout': [],
    'Notifications': []
  };
  
  const uncategorizedComponents = [];

  for (const component of components) {
    const category = categorizeComponent(component);
    
    if (categories[category]) {
      categories[category].push(component);
    } else {
      // Shouldn't happen with current logic, but safe fallback
      categories['Content'].push(component);
      uncategorizedComponents.push(component.name);
    }
  }

  // Remove empty categories
  for (const [category, comps] of Object.entries(categories)) {
    if (comps.length === 0) {
      delete categories[category];
    }
  }
  
  // Log any components that might need manual categorization
  if (uncategorizedComponents.length > 0) {
    console.log(`ℹ️  Note: The following components were auto-categorized to 'Content':`);
    console.log(`   ${uncategorizedComponents.join(', ')}`);
  }

  return categories;
}

/**
 * Generate detailed component reference.
 *
 * Uses a two-pass approach so the TOC table can contain accurate line numbers:
 *  Pass 1 – build the full document with a single-line %%TOC%% placeholder.
 *            Scan that text to find the line number of every ## heading.
 *  Pass 2 – build the real TOC table. The placeholder (1 line) expands into
 *            (4 + N) lines, so shift every recorded line number by (3 + N).
 *            Replace the placeholder with the finished table.
 */
function generateDocumentation(components, version, gitInfo, generatedAt) {
  const header = generateHeader(version, gitInfo, generatedAt);
  
  // Categorize components
  const categories = categorizeComponents(components);

  // Build a flat ordered list of { comp, category } matching the TOC order
  const tocRows = [];
  for (const [category, comps] of Object.entries(categories)) {
    for (const comp of comps) {
      tocRows.push({ comp, category });
    }
  }

  // ── PASS 1 ───────────────────────────────────────────────────────────────
  // Build full document with a one-line placeholder where the TOC table will go.

  const TOC_PLACEHOLDER = '%%TOC%%';

  let doc = `# NHS Frontend Component Reference

${header}Use the component reference table below to find the line number for any component, then read it with a file tool.

## Table of Contents

${TOC_PLACEHOLDER}

---

`;

  // Process each component
  for (const component of components) {
    doc += `## ${component.name}\n\n`;
    doc += `[↑ Back to top](#table-of-contents)\n\n`;

    if (component.macroName) {
      doc += `**Macro name:** \`${component.macroName}\`\n\n`;
    }

    // Add component description if available in examples
    const defaultExample = component.examples.default || component.examples[Object.keys(component.examples)[0]];
    if (defaultExample?.description) {
      doc += `${defaultExample.description}\n\n`;
    }

    // Parameters section
    if (Object.keys(component.params).length > 0) {
      doc += `### Parameters\n\n`;
      doc += `| Parameter | Type | Required | Description |\n`;
      doc += `|-----------|------|----------|-------------|\n`;

      const flatParams = flattenParams(component.params);

      for (const param of flatParams) {
        const type = param.type || 'unknown';
        const required = param.required ? '✓' : '';
        let description = param.description || '';
        if (param.isComponent) {
          description = description ? `${description} *(accepts nested component params)*` : '*(accepts nested component params)*';
        }

        doc += `| \`${param.name}\` | ${type} | ${required} | ${description} |\n`;
      }

      doc += `\n`;
    }

    // Examples section
    const exampleKeys = Object.keys(component.examples);

    if (exampleKeys.length > 0) {
      doc += `### Examples\n\n`;

      for (const exampleKey of exampleKeys) {
        const example = component.examples[exampleKey];
        const formattedExample = formatExample(component, exampleKey, example);

        if (formattedExample) {
          doc += `#### ${exampleKey}\n\n`;
          doc += `\`\`\`njk\n`;
          doc += formattedExample;
          doc += `\n\`\`\`\n\n`;
        }
      }
    }

    doc += `---\n\n`;
  }

  // ── PASS 2 ───────────────────────────────────────────────────────────────
  // Scan the placeholder document to find where each ## heading landed.
  const lines = doc.split('\n');
  const headingLineMap = {};
  for (let i = 0; i < lines.length; i++) {
    const match = lines[i].match(/^## (.+)$/);
    if (match && match[1] !== 'Table of Contents') {
      headingLineMap[match[1]] = i + 1; // 1-based
    }
  }

  // The placeholder (1 line) will be replaced by the TOC table.
  // The replacement has: 1 column-header row + 1 separator row + N data rows = (2+N) content lines.
  // The trailing \n on tocTable creates an extra blank before the following \n\n in the template,
  // adding 1 more line. Net shift = (2+N+1) - 1 = 2+N.
  const lineOffset = 2 + tocRows.length;

  // Build the TOC table with corrected line numbers.
  let tocTable = `| Component | Macro | Category | Line |\n`;
  tocTable    += `|-----------|-------|----------|------|\n`;
  for (const { comp, category } of tocRows) {
    const macroLabel = comp.macroName ? `\`${comp.macroName}()\`` : '—';
    const lineNum = (headingLineMap[comp.name] ?? 0) + lineOffset;
    tocTable += `| ${comp.name} | ${macroLabel} | ${category} | ${lineNum} |\n`;
  }

  return doc.replace(TOC_PLACEHOLDER, tocTable);
}

/**
 * Find all component directories
 */
async function findComponents(componentsDir) {
  try {
    const entries = await fs.readdir(componentsDir, { withFileTypes: true });
    const componentDirs = entries
      .filter(entry => entry.isDirectory())
      .map(entry => entry.name);

    return componentDirs;
  } catch (error) {
    console.error('Error reading components directory:', error.message);
    return [];
  }
}

/**
 * Main execution function
 */
async function main() {
  // Check for help flag
  if (process.argv.includes('--help') || process.argv.includes('-h')) {
    showHelp();
  }

  console.log('🏥 NHS Frontend Component Documentation Generator');
  console.log('==================================================\n');

  // Resolve paths
  let repoPath = path.resolve(CONFIG.repoPath);
  let componentsDir = path.join(repoPath, CONFIG.componentsPath);

  // Verify repository exists - prompt if not found
  let pathValid = false;
  while (!pathValid) {
    try {
      await fs.access(componentsDir);
      console.log(`✓ Found NHS Frontend at: ${repoPath}\n`);
      pathValid = true;
    } catch (error) {
      console.error(`✗ NHS Frontend not found at: ${repoPath}`);
      console.error(`   Looking for: ${componentsDir}\n`);
      
      const userPath = await prompt('Enter path to NHS Frontend repository (or press Ctrl+C to cancel): ');
      
      if (!userPath) {
        console.error('No path provided. Exiting.\n');
        process.exit(1);
      }

      // Update paths with user input
      repoPath = path.resolve(userPath);
      componentsDir = path.join(repoPath, CONFIG.componentsPath);
    }
  }

  // Create output directory
  await fs.mkdir(CONFIG.outputDir, { recursive: true });

  // Find all components
  console.log('🔍 Scanning for components...');
  const componentDirs = await findComponents(componentsDir);

  if (componentDirs.length === 0) {
    console.error('✗ No component directories found. Check repository structure.');
    process.exit(1);
  }

  // Parse each component
  const components = [];
  let successCount = 0;

  for (const componentDir of componentDirs) {
    const macroOptionsPath = path.join(componentsDir, componentDir, 'macro-options.mjs');

    try {
      await fs.access(macroOptionsPath);
      
      const componentData = await parseComponentFile(macroOptionsPath);
      if (componentData) {
        components.push(componentData);
        successCount++;
        process.stdout.write('.');
      }
    } catch (error) {
      // Component doesn't have macro-options.mjs, skip silently
    }
  }

  console.log(''); // New line after dots
  console.log(`✓ Found ${successCount} components\n`);

  if (components.length === 0) {
    console.error('✗ No components were successfully parsed. Check repository structure.');
    process.exit(1);
  }

  // Sort components alphabetically
  components.sort((a, b) => a.name.localeCompare(b.name));

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
  console.log('📝 Generating documentation...');
  const fullReference = generateDocumentation(components, version, gitInfo, generatedAt);

  await fs.writeFile(path.join(CONFIG.outputDir, 'nhs-frontend-component-reference.md'), fullReference);

  console.log(`✓ Component reference: ${CONFIG.outputDir}/nhs-frontend-component-reference.md`);
  console.log('\n✅ Documentation generation complete!\n');
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

export { main, parseComponentFile, generateDocumentation };