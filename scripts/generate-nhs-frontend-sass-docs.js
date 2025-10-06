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
  - nhs-frontend-sass-reference.json  Complete Sass documentation with metadata

REQUIREMENTS:
  - sassdoc must be installed: npm install -g sassdoc
    or use npx: npx sassdoc (automatically used by this script)
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
  
  return JSON.stringify(output, null, 2);
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
  console.log(`✓ NHS Frontend v${version} (${gitInfo.branch}@${gitInfo.commitHash})\n`);

  // Generate documentation
  console.log('📝 Generating Sass reference documentation...');
  const jsonOutput = await generateDocumentation(
    CONFIG.tempJsonPath,
    version,
    gitInfo,
    generatedAt
  );

  // Write output
  const outputPath = path.join(CONFIG.outputDir, 'nhs-frontend-sass-reference.json');
  await fs.writeFile(outputPath, jsonOutput);

  // Clean up temp JSON file
  await fs.unlink(CONFIG.tempJsonPath);

  console.log(`✓ Generated: ${outputPath}`);
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