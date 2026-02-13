#!/usr/bin/env node

/**
 * strip-versioned-imports.mjs
 *
 * Strips Figma Make versioned import specifiers from all source files.
 *
 * Figma Make pins dependency versions using "package@version" syntax:
 *   import { Slot } from "@radix-ui/react-slot@1.1.2";
 *   import { cva } from "class-variance-authority@0.7.1";
 *
 * Vite/Node cannot resolve these because node_modules uses plain names.
 *
 * This script rewrites:
 *   "@radix-ui/react-slot@1.1.2"  ->  "@radix-ui/react-slot"
 *   "lucide-react@0.487.0"        ->  "lucide-react"
 *   "sonner@2.0.3"                ->  "sonner"
 *
 * Also replaces "figma:asset/*" imports with a 1x1 transparent GIF data URI.
 *
 * Usage:
 *   node scripts/strip-versioned-imports.mjs
 *
 * Safe to run multiple times (idempotent).
 */

import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

var scriptPath = fileURLToPath(import.meta.url);
var scriptDir = path.dirname(scriptPath);
var ROOT = path.resolve(scriptDir, "..");

var SCAN_DIRS = ["components", "pages", "hooks", "lib"];
var ROOT_FILES = ["App.tsx", "main.tsx", "index.ts"];
var EXTENSIONS = [".ts", ".tsx", ".js", ".jsx", ".mjs"];

// "package@1.2.3" or "@scope/pkg@1.2.3" or "@scope/pkg@1.2.3/subpath"
var VERSIONED_RE = /(["'])(@[a-z0-9-]+\/[a-z0-9.-]+|[a-z][a-z0-9.-]*)@\d+\.\d+\.\d+([^"']*)\1/g;

// figma:asset/* imports
var FIGMA_ASSET_RE = /(["'])figma:asset\/[^"']+\1/g;

var GIF_PLACEHOLDER = "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7";

var filesProcessed = 0;
var filesChanged = 0;
var importsStripped = 0;
var figmaAssetsReplaced = 0;

function hasExtension(filePath) {
  var ext = path.extname(filePath);
  return EXTENSIONS.indexOf(ext) !== -1;
}

function processFile(filePath) {
  if (!hasExtension(filePath)) return;

  filesProcessed++;
  var original = fs.readFileSync(filePath, "utf8");
  var content = original;
  var localStripped = 0;
  var localFigma = 0;

  content = content.replace(VERSIONED_RE, function (_match, quote, pkg, subpath) {
    localStripped++;
    return quote + pkg + subpath + quote;
  });

  content = content.replace(FIGMA_ASSET_RE, function (_match, quote) {
    localFigma++;
    return quote + GIF_PLACEHOLDER + quote;
  });

  if (content !== original) {
    fs.writeFileSync(filePath, content, "utf8");
    filesChanged++;
    importsStripped += localStripped;
    figmaAssetsReplaced += localFigma;
    var rel = path.relative(ROOT, filePath);
    var msg = "  [OK] " + rel + " (" + localStripped + " imports";
    if (localFigma) msg += ", " + localFigma + " figma:asset";
    msg += ")";
    console.log(msg);
  }
}

function scanDir(dirPath) {
  if (!fs.existsSync(dirPath)) return;

  var entries = fs.readdirSync(dirPath, { withFileTypes: true });
  for (var i = 0; i < entries.length; i++) {
    var entry = entries[i];
    var fullPath = path.join(dirPath, entry.name);
    if (entry.isDirectory()) {
      if (entry.name === "node_modules") continue;
      if (entry.name === "dist") continue;
      if (entry.name === "dist-lib") continue;
      if (entry.name === ".git") continue;
      if (entry.name === ".github") continue;
      scanDir(fullPath);
    } else if (entry.isFile()) {
      processFile(fullPath);
    }
  }
}

// -- Main --
console.log("");
console.log("[strip-versions] Stripping Figma Make versioned imports...");
console.log("");

for (var d = 0; d < SCAN_DIRS.length; d++) {
  scanDir(path.join(ROOT, SCAN_DIRS[d]));
}

for (var f = 0; f < ROOT_FILES.length; f++) {
  var fp = path.join(ROOT, ROOT_FILES[f]);
  if (fs.existsSync(fp)) {
    processFile(fp);
  }
}

console.log("");
if (filesChanged === 0) {
  console.log("[strip-versions] No versioned imports found -- source files are already clean.");
} else {
  console.log("[strip-versions] Done! " + filesChanged + "/" + filesProcessed + " files updated.");
  console.log("  " + importsStripped + " versioned imports stripped.");
  if (figmaAssetsReplaced > 0) {
    console.log("  " + figmaAssetsReplaced + " figma:asset references replaced.");
  }
}
console.log("");
