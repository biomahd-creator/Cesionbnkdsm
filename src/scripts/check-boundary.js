#!/usr/bin/env node

/**
 * check-boundary.js - Library Boundary Enforcement (G1)
 *
 * Validates that the library build output (dist-lib/) does NOT contain
 * app-only code that should be excluded from the published package.
 *
 * Boundaries:
 *   INCLUDED in library: /components/ui, /components/patterns, /components/advanced,
 *                        /components/widgets, /components/providers, /hooks, /lib
 *   EXCLUDED from library: /components/factoring, /pages, /App.tsx, /main.tsx,
 *                          /components/PageRenderer, /components/DSMSidebarNav
 *
 * Usage:
 *   node scripts/check-boundary.js
 *
 * @version 0.1.0
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const ROOT = path.resolve(__dirname, '..');

// Patterns that must NOT appear in dist-lib/
const FORBIDDEN_PATTERNS = [
  'factoring/',
  'factoring\\',
  'FactoringApp',
  'FactoringHeader',
  'FactoringSidebar',
  'FactoringViewRenderer',
  'CFinanciaFlow',
  'CFinanciaClientFlow',
  'CFinanciaNavbar',
  'LoginScreen',
  'ModulosScreen',
  'FactoringWorkspace',
  'pages/',
  'pages\\',
  'PageRenderer',
  'DSMSidebarNav',    // app-only sidebar
  'App.tsx',
  'main.tsx',
];

// Files that should exist in dist-lib/ (sanity check)
const REQUIRED_FILES = [
  'index.js',
  'index.d.ts',
];

function getAllFiles(dir, fileList = []) {
  if (!fs.existsSync(dir)) return fileList;
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const filePath = path.join(dir, file);
    if (fs.statSync(filePath).isDirectory()) {
      getAllFiles(filePath, fileList);
    } else {
      fileList.push(filePath);
    }
  }
  return fileList;
}

function checkBoundary() {
  const distDir = path.join(ROOT, 'dist-lib');

  console.log('=== Library Boundary Check (G1) ===\n');

  // 1. Check dist-lib exists
  if (!fs.existsSync(distDir)) {
    console.log('SKIP: dist-lib/ does not exist. Run `npm run build:lib` first.');
    console.log('Checking source boundaries instead...\n');
    return checkSourceBoundary();
  }

  let errors = 0;
  let warnings = 0;

  // 2. Check required files exist
  console.log('Checking required output files...');
  for (const required of REQUIRED_FILES) {
    const fullPath = path.join(distDir, required);
    if (fs.existsSync(fullPath)) {
      console.log(`  OK: ${required}`);
    } else {
      console.error(`  FAIL: ${required} missing`);
      errors++;
    }
  }

  // 3. Scan dist-lib for forbidden patterns in file paths
  console.log('\nChecking for app-only code leaks...');
  const allFiles = getAllFiles(distDir);
  const relativeFiles = allFiles.map((f) => path.relative(distDir, f));

  for (const relFile of relativeFiles) {
    for (const pattern of FORBIDDEN_PATTERNS) {
      if (relFile.includes(pattern)) {
        console.error(`  LEAK: ${relFile} matches forbidden pattern "${pattern}"`);
        errors++;
      }
    }
  }

  if (errors === 0) {
    console.log('  OK: No app-only code detected in dist-lib/');
  }

  // 4. Summary
  console.log(`\n=== Summary ===`);
  console.log(`Files scanned: ${allFiles.length}`);
  console.log(`Errors: ${errors}`);
  console.log(`Warnings: ${warnings}`);

  if (errors > 0) {
    console.error('\nBoundary check FAILED. App-only code leaked into library output.');
    process.exit(1);
  }

  console.log('\nBoundary check PASSED.');
}

function checkSourceBoundary() {
  // Validate that index.ts doesn't import forbidden modules
  const indexPath = path.join(ROOT, 'index.ts');
  if (!fs.existsSync(indexPath)) {
    console.error('FAIL: index.ts not found');
    process.exit(1);
  }

  const indexContent = fs.readFileSync(indexPath, 'utf-8');
  let errors = 0;

  const SOURCE_FORBIDDEN = [
    'factoring',
    'pages',
    'App',
    'main',
    'PageRenderer',
    'DSMSidebarNav',
  ];

  console.log('Checking index.ts for forbidden imports...');
  for (const pattern of SOURCE_FORBIDDEN) {
    // Match import statements containing the pattern
    const regex = new RegExp(`from\\s+['"].*${pattern}.*['"]`, 'i');
    if (regex.test(indexContent)) {
      console.error(`  LEAK: index.ts imports "${pattern}"`);
      errors++;
    }
  }

  if (errors === 0) {
    console.log('  OK: index.ts has clean library-only imports');
  }

  // Check components/index.ts
  const componentsIndexPath = path.join(ROOT, 'components', 'index.ts');
  if (fs.existsSync(componentsIndexPath)) {
    const content = fs.readFileSync(componentsIndexPath, 'utf-8');
    console.log('\nChecking components/index.ts...');
    for (const pattern of SOURCE_FORBIDDEN) {
      const regex = new RegExp(`from\\s+['"].*${pattern}.*['"]`, 'i');
      if (regex.test(content)) {
        console.error(`  LEAK: components/index.ts imports "${pattern}"`);
        errors++;
      }
    }
    if (errors === 0) {
      console.log('  OK: components/index.ts has clean exports');
    }
  }

  console.log(`\nSource boundary check: ${errors === 0 ? 'PASSED' : 'FAILED'}`);
  if (errors > 0) process.exit(1);
}

checkBoundary();