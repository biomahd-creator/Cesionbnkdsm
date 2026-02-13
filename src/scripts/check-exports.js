#!/usr/bin/env node

/**
 * check-exports.js - Package Exports Validation
 *
 * Verifies that all export paths defined in package.json resolve to actual files.
 * This catches mismatches between package.json exports and the build output.
 *
 * Checks:
 * 1. All non-wildcard exports in package.json point to existing files
 * 2. Required metadata files (LICENSE, README, llms.txt) exist
 * 3. TypeScript declarations (.d.ts) exist alongside .js files
 *
 * Usage:
 *   node scripts/check-exports.js
 *
 * @version 0.2.2
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const ROOT = path.resolve(__dirname, '..');

function checkExports() {
  console.log('=== Package Exports Validation ===\n');

  const pkg = JSON.parse(fs.readFileSync(path.join(ROOT, 'package.json'), 'utf-8'));
  let errors = 0;
  let checked = 0;

  // 1. Check non-wildcard exports
  console.log('Checking package.json exports...');
  for (const [exportPath, exportValue] of Object.entries(pkg.exports || {})) {
    // Skip wildcard exports (e.g., "./ui/*")
    if (exportPath.includes('*')) continue;

    if (typeof exportValue === 'string') {
      // Simple string export (e.g., "./theme.css": "./styles/theme.css")
      const filePath = path.join(ROOT, exportValue);
      checked++;
      if (fs.existsSync(filePath)) {
        console.log(`  OK: ${exportPath} -> ${exportValue}`);
      } else {
        console.error(`  MISSING: ${exportPath} -> ${exportValue}`);
        errors++;
      }
    } else if (typeof exportValue === 'object') {
      // Conditional export (e.g., { import: "...", types: "..." })
      for (const [condition, filePart] of Object.entries(exportValue)) {
        const filePath = path.join(ROOT, filePart);
        checked++;
        if (fs.existsSync(filePath)) {
          console.log(`  OK: ${exportPath}[${condition}] -> ${filePart}`);
        } else {
          console.error(`  MISSING: ${exportPath}[${condition}] -> ${filePart}`);
          errors++;
        }
      }
    }
  }

  // 2. Check required metadata files
  console.log('\nChecking required metadata files...');
  const REQUIRED_FILES = [
    'LICENSE',
    'README.md',
    'CHANGELOG.md',
    'llms.txt',
    'styles/theme.css',
    'styles/globals.css',
  ];

  for (const file of REQUIRED_FILES) {
    const filePath = path.join(ROOT, file);
    checked++;
    if (fs.existsSync(filePath)) {
      console.log(`  OK: ${file}`);
    } else {
      console.error(`  MISSING: ${file}`);
      errors++;
    }
  }

  // 3. Check that files listed in "files" array exist
  console.log('\nChecking package.json "files" entries...');
  for (const fileEntry of pkg.files || []) {
    const filePath = path.join(ROOT, fileEntry);
    checked++;
    if (fs.existsSync(filePath)) {
      const stat = fs.statSync(filePath);
      const type = stat.isDirectory() ? 'dir' : 'file';
      console.log(`  OK: ${fileEntry} (${type})`);
    } else {
      console.error(`  MISSING: ${fileEntry}`);
      errors++;
    }
  }

  // 4. Check TypeScript declarations alongside JS entry points
  console.log('\nChecking TypeScript declarations...');
  const ENTRY_POINTS = [
    'dist-lib/index',
    'dist-lib/components/ui/index',
    'dist-lib/components/patterns/index',
    'dist-lib/components/advanced/index',
    'dist-lib/components/widgets/index',
    'dist-lib/components/providers/index',
    'dist-lib/hooks/index',
    'dist-lib/lib/index',
  ];

  for (const entry of ENTRY_POINTS) {
    const jsPath = path.join(ROOT, `${entry}.js`);
    const dtsPath = path.join(ROOT, `${entry}.d.ts`);
    checked += 2;

    if (fs.existsSync(jsPath)) {
      console.log(`  OK: ${entry}.js`);
    } else {
      console.error(`  MISSING: ${entry}.js`);
      errors++;
    }

    if (fs.existsSync(dtsPath)) {
      console.log(`  OK: ${entry}.d.ts`);
    } else {
      console.error(`  MISSING: ${entry}.d.ts`);
      errors++;
    }
  }

  // Summary
  console.log(`\n=== Summary ===`);
  console.log(`Checked: ${checked}`);
  console.log(`Errors: ${errors}`);

  if (errors > 0) {
    console.error('\nExports validation FAILED.');
    process.exit(1);
  }

  console.log('\nExports validation PASSED.');
}

checkExports();
