/**
 * build-tokens.mjs
 *
 * Single source of truth: tokens/*.json → styles/themes/*.css
 *
 * Usage:
 *   node scripts/build-tokens.mjs          # build once
 *   node scripts/build-tokens.mjs --watch  # rebuild on token changes
 *
 * Figma sync workflow:
 *   1. Designer updates tokens in Figma via Token Studio plugin
 *   2. Token Studio pushes JSON to this repo (GitHub sync)
 *   3. `npm run tokens:build` regenerates CSS → commit
 */

import fs   from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT      = path.resolve(__dirname, "..");
const TOKENS    = path.join(ROOT, "tokens");
const THEMES    = path.join(ROOT, "styles", "themes");

// ─────────────────────────────────────────────────────────────
// TOKEN PATH → CSS VARIABLE NAME
// Covers every token group used in the brand files.
// ─────────────────────────────────────────────────────────────
const VAR_MAP = {
  // Brand
  "brand.primary":             "--primary",
  "brand.primaryForeground":   "--primary-foreground",
  "brand.secondary":           "--secondary",
  "brand.secondaryForeground": "--secondary-foreground",

  // Surface
  "surface.background":        "--background",
  "surface.foreground":        "--foreground",
  "surface.card":              "--card",
  "surface.cardForeground":    "--card-foreground",
  "surface.popover":           "--popover",
  "surface.popoverForeground": "--popover-foreground",

  // Neutral
  "neutral.muted":             "--muted",
  "neutral.mutedForeground":   "--muted-foreground",
  "neutral.accent":            "--accent",
  "neutral.accentForeground":  "--accent-foreground",

  // Semantic (defaults live in global.json, tenants may override)
  "semantic.destructive":           "--destructive",
  "semantic.destructiveForeground": "--destructive-foreground",
  "semantic.success":               "--success",
  "semantic.successForeground":     "--success-foreground",
  "semantic.warning":               "--warning",
  "semantic.warningForeground":     "--warning-foreground",
  "semantic.info":                  "--info",
  "semantic.infoForeground":        "--info-foreground",

  // Forms
  "form.border":           "--border",
  "form.input":            "--input",
  "form.inputBackground":  "--input-background",
  "form.switchBackground": "--switch-background",
  "form.ring":             "--ring",

  // Radius
  "radius.base":   "--radius",
  "radius.button": "--button-radius",
  "radius.card":   "--card-radius",

  // Button (Lulo Empresas specific)
  "button.background": "--button-bg",
  "button.hover":      "--button-hover",

  // Sidebar
  "sidebar.background":        "--sidebar",
  "sidebar.foreground":        "--sidebar-foreground",
  "sidebar.primary":           "--sidebar-primary",
  "sidebar.primaryForeground": "--sidebar-primary-foreground",
  "sidebar.accent":            "--sidebar-accent",
  "sidebar.accentForeground":  "--sidebar-accent-foreground",
  "sidebar.border":            "--sidebar-border",
  "sidebar.ring":              "--sidebar-ring",

  // Charts
  "chart.1": "--chart-1",
  "chart.2": "--chart-2",
  "chart.3": "--chart-3",
  "chart.4": "--chart-4",
  "chart.5": "--chart-5",

  // Gradient
  "gradient.from": "--gradient-from",
  "gradient.to":   "--gradient-to",

  // Typography
  "typography.fontSans":          "--font-sans",
  "typography.letterSpacingBase": "--letter-spacing-base",

  // KPI (defined in global.json)
  "kpi.yellow":     "--kpi-yellow",
  "kpi.yellowDark": "--kpi-yellow-dark",
  "kpi.yellowBg":   "--kpi-yellow-bg",
  "kpi.orange":     "--kpi-orange",
  "kpi.orangeDark": "--kpi-orange-dark",
  "kpi.orangeBg":   "--kpi-orange-bg",
  "kpi.blue":       "--kpi-blue",
  "kpi.blueDark":   "--kpi-blue-dark",
  "kpi.blueBg":     "--kpi-blue-bg",
  "kpi.lime":       "--kpi-lime",
  "kpi.limeDark":   "--kpi-lime-dark",
  "kpi.limeBg":     "--kpi-lime-bg",
};

// Full font stacks — token stores the primary family, we expand here
const FONT_STACKS = {
  "DM Sans":    "'DM Sans', ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
  "Satoshi":    "'Satoshi', ui-sans-serif, system-ui, sans-serif",
  "Montserrat": "'Montserrat', ui-sans-serif, system-ui, sans-serif",
  "Poppins":    "'Poppins', ui-sans-serif, system-ui, sans-serif",
  "system-ui":  "ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
};

// ─────────────────────────────────────────────────────────────
// TENANT DEFINITIONS
// ─────────────────────────────────────────────────────────────
const TENANTS = [
  { id: "default",       name: "CESIONBNK",     file: "cesionbnk",     selector: ":root",                          darkSelector: ".dark" },
  { id: "c-financia",    name: "C-Financia",    file: "c-financia",    selector: 'html[data-theme="c-financia"]',   darkSelector: 'html[data-theme="c-financia"].dark' },
  { id: "eurocapital",   name: "Eurocapital",   file: "eurocapital",   selector: 'html[data-theme="eurocapital"]',  darkSelector: 'html[data-theme="eurocapital"].dark' },
  { id: "iris",          name: "IRIS",           file: "iris",          selector: 'html[data-theme="iris"]',         darkSelector: 'html[data-theme="iris"].dark' },
  { id: "lulo-empresas", name: "Lulo Empresas", file: "lulo-empresas", selector: 'html[data-theme="lulo-empresas"]', darkSelector: 'html[data-theme="lulo-empresas"].dark' },
];

// ─────────────────────────────────────────────────────────────
// HELPERS
// ─────────────────────────────────────────────────────────────

function readJSON(filePath) {
  try {
    return JSON.parse(fs.readFileSync(filePath, "utf-8"));
  } catch {
    return {};
  }
}

/**
 * Flatten a nested token object into { "group.key": tokenNode } pairs.
 * Skips meta keys like $description.
 */
function flattenTokens(obj, prefix = "") {
  const result = {};
  for (const [key, val] of Object.entries(obj)) {
    if (key.startsWith("$")) continue;
    const path = prefix ? `${prefix}.${key}` : key;
    if (val && typeof val === "object" && "value" in val) {
      result[path] = val;
    } else if (val && typeof val === "object") {
      Object.assign(result, flattenTokens(val, path));
    }
  }
  return result;
}

/**
 * Resolve token value — expand font stacks, pass through everything else.
 */
function resolveValue(tokenPath, token) {
  if (tokenPath === "typography.fontSans") {
    return FONT_STACKS[token.value] ?? token.value;
  }
  return token.value;
}

/**
 * Convert flattened tokens to CSS variable declarations, in VAR_MAP order.
 */
function toCSSVars(flatTokens, indent = "  ") {
  const lines = [];
  for (const [tokenPath, cssVar] of Object.entries(VAR_MAP)) {
    if (tokenPath in flatTokens) {
      const value = resolveValue(tokenPath, flatTokens[tokenPath]);
      lines.push(`${indent}${cssVar.padEnd(32)}: ${value};`);
    }
  }
  return lines.join("\n");
}

/**
 * Build CSS block: selector + declarations.
 */
function cssBlock(selector, declarations) {
  if (!declarations.trim()) return "";
  return `${selector} {\n${declarations}\n}`;
}

// ─────────────────────────────────────────────────────────────
// GLOBAL → CESIONBNK :root extras (KPI, semantic defaults)
// ─────────────────────────────────────────────────────────────
function buildGlobalBlock(global) {
  const flat = flattenTokens(global);
  return toCSSVars(flat);
}

// ─────────────────────────────────────────────────────────────
// BUILD ONE TENANT FILE
// ─────────────────────────────────────────────────────────────
function buildTenant(tenant, global) {
  const lightPath = path.join(TOKENS, "brands", `${tenant.file}.json`);
  const darkPath  = path.join(TOKENS, "brands", `${tenant.file}-dark.json`);

  const lightTokens = readJSON(lightPath);
  const darkTokens  = readJSON(darkPath);

  const globalFlat = flattenTokens(global);
  const lightFlat  = flattenTokens(lightTokens);
  const darkFlat   = flattenTokens(darkTokens);

  // Light = global defaults merged with brand light overrides
  const mergedLight = { ...globalFlat, ...lightFlat };

  // Dark = global defaults + brand light + brand dark overrides
  const mergedDark = { ...globalFlat, ...lightFlat, ...darkFlat };

  // Only emit dark vars that actually change vs light
  const changedDark = {};
  for (const key of Object.keys(darkFlat)) {
    changedDark[key] = mergedDark[key];
  }

  const lightVars = toCSSVars(mergedLight);
  const darkVars  = toCSSVars(changedDark);

  // File header
  const header = [
    `/**`,
    ` * TENANT: ${tenant.name}`,
    ` *`,
    ` * AUTO-GENERATED — do not edit manually.`,
    ` * Source of truth: tokens/brands/${tenant.file}.json`,
    ` *`,
    ` * To update: edit the JSON files, then run:`,
    ` *   npm run tokens:build`,
    ` */`,
  ].join("\n");

  const lightBlock = cssBlock(tenant.selector, lightVars);
  const darkBlock  = cssBlock(tenant.darkSelector, darkVars);

  return [header, "", lightBlock, "", `/* ── Dark Mode ── */`, darkBlock, ""].join("\n");
}

// ─────────────────────────────────────────────────────────────
// GENERATE SINGLE tokens.json FOR FIGMA (Token Studio)
// All sets merged into one file — import this in Figma.
// ─────────────────────────────────────────────────────────────

/** Strip $ meta-keys (e.g. $description) from a token set object.
 *  Token Studio only allows $themes and $metadata at root level —
 *  any other $key inside a set breaks parsing and shows the set empty. */
function stripMeta(obj) {
  const out = {};
  for (const [k, v] of Object.entries(obj)) {
    if (!k.startsWith("$")) out[k] = v;
  }
  return out;
}

function buildFigmaTokens() {
  const brandFiles = [
    "cesionbnk", "cesionbnk-dark",
    "c-financia", "c-financia-dark",
    "eurocapital", "eurocapital-dark",
    "iris", "iris-dark",
    "lulo-empresas", "lulo-empresas-dark",
  ];

  const merged = {
    global: stripMeta(readJSON(path.join(TOKENS, "global.json"))),
  };

  for (const file of brandFiles) {
    const data = readJSON(path.join(TOKENS, "brands", `${file}.json`));
    merged[`brands/${file}`] = stripMeta(data);
  }

  merged["$themes"]   = readJSON(path.join(TOKENS, "$themes.json"));
  merged["$metadata"] = readJSON(path.join(TOKENS, "$metadata.json"));

  const outPath = path.join(ROOT, "tokens.json");
  fs.writeFileSync(outPath, JSON.stringify(merged, null, 2), "utf-8");
  console.log(`  ✓  tokens.json             → tokens.json  ← importa este en Figma`);
}

// ─────────────────────────────────────────────────────────────
// MAIN
// ─────────────────────────────────────────────────────────────
function build() {
  const global = readJSON(path.join(TOKENS, "global.json"));
  let count = 0;

  for (const tenant of TENANTS) {
    const css      = buildTenant(tenant, global);
    const outPath  = path.join(THEMES, `${tenant.file}.css`);
    fs.writeFileSync(outPath, css, "utf-8");
    console.log(`  ✓  ${tenant.name.padEnd(16)} → styles/themes/${tenant.file}.css`);
    count++;
  }

  buildFigmaTokens();
  console.log(`\n  ${count} CSS + 1 Figma file generados desde tokens/\n`);
}

// ─────────────────────────────────────────────────────────────
// WATCH MODE
// ─────────────────────────────────────────────────────────────
const isWatch = process.argv.includes("--watch");

console.log("\n  CESIONBNK — Design Token Builder");
console.log("  ──────────────────────────────────");
build();

if (isWatch) {
  console.log("  Watching tokens/ for changes… (Ctrl+C to stop)\n");
  fs.watch(TOKENS, { recursive: true }, (event, filename) => {
    if (filename?.endsWith(".json") && !filename.startsWith("$")) {
      console.log(`  ↻  ${filename} changed — rebuilding…`);
      try {
        build();
      } catch (err) {
        console.error("  ✗  Build error:", err.message);
      }
    }
  });
}
