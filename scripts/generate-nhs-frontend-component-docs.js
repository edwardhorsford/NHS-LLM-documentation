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
  - nhs-frontend-component-reference-short.instructions.md  Quick reference with examples
  - nhs-frontend-component-reference.instructions.md        Complete parameter documentation
`);
  process.exit(0);
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
  if (typeof obj === 'string') return `'${obj}'`;
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
 * Dynamically import and parse a macro-options.mjs file
 */
async function parseComponentFile(filePath) {
  try {
    // Convert to file:// URL for dynamic import
    const fileUrl = `file://${path.resolve(filePath)}`;
    const module = await import(fileUrl);

    return {
      name: module.name || path.basename(path.dirname(filePath)),
      params: module.params || {},
      examples: module.examples || {},
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
  if (!example.context) return null;

  const componentName = component.name.toLowerCase().replace(/\s+/g, '');

  // Check if this example has a callBlock (content inside the component)
  if (example.callBlock && typeof example.callBlock === 'string' && example.callBlock.trim().length > 0) {
    // Show as a Nunjucks call block
    let output = `{% call ${componentName}(${formatAsNunjucks(example.context)}) %}\n`;
    // Clean up the callBlock content
    const cleanCallBlock = example.callBlock
      .replace(/^\s*outdent`/, '') // Remove outdent` at start
      .replace(/`\s*$/, '') // Remove ` at end
      .trim();
    output += cleanCallBlock.replace(/^/gm, '  '); // Indent each line
    output += `\n{% endcall %}`;
    return output;
  } else {
    // Show wrapped in component macro syntax
    return `{{ ${componentName}(${formatAsNunjucks(example.context)}) }}`;
  }
}

/**
 * Get example value based on parameter type and name
 */
function getExampleValue(type, name) {
  switch (type) {
    case 'string':
      if (name.includes('id') || name.includes('Id')) return "'example-id'";
      if (name === 'name') return "'example-name'";
      if (name === 'text') return "'Example text'";
      if (name === 'href') return "'#example'";
      if (name === 'classes') return "'nhsuk-example-class'";
      return "'example'";
    case 'boolean':
      return 'false';
    case 'array':
      return '[]';
    case 'object':
      return '{}';
    case 'integer':
      return '1';
    default:
      return "'example'";
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
 * Generate both short and full reference in one pass
 */
function generateDocumentation(components, version, gitInfo, generatedAt) {
  const header = generateHeader(version, gitInfo, generatedAt);
  
  // Initialize both outputs
  let shortReference = `# NHS Frontend Components - Quick Reference

${header}This is a quick reference guide for NHS Frontend components, generated from macro-options.mjs files.

## Components Overview

| Component | Required Params | Optional Key Params |
|-----------|----------------|-------------------|
`;

  let fullReference = `# NHS Frontend Components - Detailed Reference

${header}This comprehensive reference guide for NHS Frontend components includes all parameters and examples.

`;

  // Generate overview table for short reference
  for (const component of components) {
    const flatParams = flattenParams(component.params);
    const requiredParams = flatParams
      .filter(param => param.required)
      .map(param => param.name)
      .slice(0, 3); // Limit to avoid wide tables

    const keyOptionalParams = flatParams
      .filter(param => !param.required && ['items', 'text', 'html', 'href', 'classes', 'fieldset', 'hint'].includes(param.name))
      .map(param => param.name)
      .slice(0, 3);

    shortReference += `| **${component.name}** | ${requiredParams.join(', ') || 'None'} | ${keyOptionalParams.join(', ') || 'None'} |\n`;
  }

  shortReference += `\n## Quick Usage Examples\n\n`;

  // Process each component once
  for (const component of components) {
    // Add to short reference
    shortReference += `### ${component.name}\n\n`;

    // Add to full reference
    fullReference += `## ${component.name}\n\n`;

    // Add component description if available in examples
    const defaultExample = component.examples.default || component.examples[Object.keys(component.examples)[0]];
    if (defaultExample?.description) {
      fullReference += `${defaultExample.description}\n\n`;
    }

    // Parameters section (full reference only)
    if (Object.keys(component.params).length > 0) {
      fullReference += `### Parameters\n\n`;
      fullReference += `| Parameter | Type | Required | Description |\n`;
      fullReference += `|-----------|------|----------|-------------|\n`;

      const flatParams = flattenParams(component.params);

      for (const param of flatParams) {
        const type = param.type || 'unknown';
        const required = param.required ? '✓' : '';
        const description = param.description || '';

        fullReference += `| \`${param.name}\` | ${type} | ${required} | ${description} |\n`;
      }

      fullReference += `\n`;
    }

    // Examples section
    const exampleKeys = Object.keys(component.examples);
    let hasValidExample = false;

    if (exampleKeys.length > 0) {
      fullReference += `### Examples\n\n`;

      // Process each example
      for (let i = 0; i < exampleKeys.length; i++) {
        const exampleKey = exampleKeys[i];
        const example = component.examples[exampleKey];
        const formattedExample = formatExample(component, exampleKey, example);

        if (formattedExample) {
          // Add to full reference (all examples)
          fullReference += `#### ${exampleKey}\n\n`;
          fullReference += `\`\`\`njk\n`;
          fullReference += formattedExample;
          fullReference += `\n\`\`\`\n\n`;

          // Add to short reference (first example only)
          if (i === 0) {
            hasValidExample = true;
            shortReference += `\`\`\`njk\n`;
            shortReference += formattedExample;
            shortReference += `\n\`\`\`\n\n`;
          }
        }
      }
    }

    // If no valid examples found, use fallback for short reference
    if (!hasValidExample) {
      const fallback = generateFallbackExample(component);
      if (fallback !== '*No required parameters*') {
        shortReference += `\`\`\`njk\n`;
        shortReference += fallback;
        shortReference += `\n\`\`\`\n\n`;
      } else {
        shortReference += `${fallback}\n\n`;
      }
    }

    fullReference += `---\n\n`;
  }

  return { shortReference, fullReference };
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
  console.log(`✓ NHS Frontend v${version} (${gitInfo.branch}@${gitInfo.commitHash})\n`);

  // Generate both documents in one pass
  console.log('📝 Generating documentation...');
  const { shortReference, fullReference } = generateDocumentation(components, version, gitInfo, generatedAt);

  // Write files with .instructions.md suffix for Copilot compatibility
  await fs.writeFile(path.join(CONFIG.outputDir, 'nhs-frontend-component-reference-short.instructions.md'), shortReference);
  await fs.writeFile(path.join(CONFIG.outputDir, 'nhs-frontend-component-reference.instructions.md'), fullReference);

  console.log(`✓ Short reference: ${CONFIG.outputDir}/nhs-frontend-component-reference-short.instructions.md`);
  console.log(`✓ Full reference: ${CONFIG.outputDir}/nhs-frontend-component-reference.instructions.md`);
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