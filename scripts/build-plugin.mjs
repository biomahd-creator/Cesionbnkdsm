/**
 * build-plugin.mjs
 *
 * Genera plugin/code.js desde tokens/brands/*.json
 * El plugin crea Variables nativas en Figma al correrlo.
 *
 * Uso: node scripts/build-plugin.mjs
 *      (también corre automáticamente con npm run tokens:build)
 */

import fs   from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT      = path.resolve(__dirname, "..");
const TOKENS    = path.join(ROOT, "tokens");

// ─── Tenants ───────────────────────────────────────────────────────────────
const TENANTS = [
  { id: "cesionbnk",     name: "CESIONBNK"     },
  { id: "c-financia",    name: "C-Financia"    },
  { id: "eurocapital",   name: "Eurocapital"   },
  { id: "iris",          name: "IRIS"           },
  { id: "lulo-empresas", name: "Lulo Empresas" },
];

// ─── Token path → Figma variable name ──────────────────────────────────────
const GROUP_PREFIX = {
  brand:    "Brand",
  surface:  "Surface",
  neutral:  "Neutral",
  form:     "Form",
  sidebar:  "Sidebar",
  chart:    "Chart",
  gradient: "Gradient",
  semantic: "Feedback",
  kpi:      "KPI",
};

// camelCase → Title Case words: "primaryForeground" → "Primary Foreground"
function camelToTitle(str) {
  return str
    .replace(/([A-Z])/g, " $1")
    .replace(/^./, s => s.toUpperCase())
    .trim();
}

function tokenPathToFigmaName(dotPath) {
  const [group, ...rest] = dotPath.split(".");
  const prefix = GROUP_PREFIX[group] ?? camelToTitle(group);
  const label  = rest.map(camelToTitle).join(" ");
  return `${prefix}/${label}`;
}

// ─── Read + flatten tokens ──────────────────────────────────────────────────
function readJSON(p) {
  try { return JSON.parse(fs.readFileSync(p, "utf-8")); } catch { return {}; }
}

function flatten(obj, prefix = "") {
  const out = {};
  for (const [k, v] of Object.entries(obj)) {
    if (k.startsWith("$")) continue;
    const p = prefix ? `${prefix}.${k}` : k;
    if (v && typeof v === "object" && "value" in v) out[p] = v;
    else if (v && typeof v === "object") Object.assign(out, flatten(v, p));
  }
  return out;
}

// ─── Build per-tenant color token list ─────────────────────────────────────
const COLOR_GROUPS   = ["brand", "surface", "neutral", "form", "sidebar", "chart", "gradient", "semantic", "kpi"];
const FLOAT_GROUPS   = ["radius"];
const STRING_GROUPS  = ["typography"];

function isHex(v) { return typeof v === "string" && /^#[0-9a-fA-F]{3,8}$/.test(v); }

function buildTenantTokens(tenantId) {
  const global    = flatten(readJSON(path.join(TOKENS, "global.json")));
  const lightRaw  = flatten(readJSON(path.join(TOKENS, "brands", `${tenantId}.json`)));
  const darkRaw   = flatten(readJSON(path.join(TOKENS, "brands", `${tenantId}-dark.json`)));

  const light = { ...global, ...lightRaw };
  const dark  = { ...global, ...lightRaw, ...darkRaw };

  const colors  = [];
  const floats  = [];
  const strings = [];

  for (const path of Object.keys(light)) {
    const group = path.split(".")[0];
    const lv    = light[path]?.value;
    const dv    = dark[path]?.value ?? lv;

    if (COLOR_GROUPS.includes(group) && isHex(lv)) {
      colors.push({ name: tokenPathToFigmaName(path), light: lv, dark: isHex(dv) ? dv : lv });
    } else if (FLOAT_GROUPS.includes(group)) {
      const n = parseFloat(lv) * (String(lv).endsWith("rem") ? 16 : 1);
      if (!isNaN(n)) floats.push({ name: tokenPathToFigmaName(path), value: n });
    } else if (STRING_GROUPS.includes(group) && path.endsWith("fontSans")) {
      strings.push({ name: tokenPathToFigmaName(path), value: lv });
    }
  }

  return { colors, floats, strings };
}

// ─── Primitives palette (Tailwind + brand custom — estático) ───────────────
const PRIMITIVES = {
  "Slate/50":"#f8fafc","Slate/100":"#f1f5f9","Slate/200":"#e2e8f0","Slate/300":"#cbd5e1","Slate/400":"#94a3b8",
  "Slate/500":"#64748b","Slate/600":"#475569","Slate/700":"#334155","Slate/800":"#1e293b","Slate/900":"#0f172a",
  "Gray/50":"#f9fafb","Gray/100":"#f3f4f6","Gray/200":"#e5e7eb","Gray/300":"#d1d5db","Gray/400":"#9ca3af",
  "Gray/500":"#6b7280","Gray/600":"#4b5563","Gray/700":"#374151","Gray/800":"#1f2937","Gray/900":"#111827",
  "Zinc/50":"#fafafa","Zinc/100":"#f4f4f5","Zinc/200":"#e4e4e7","Zinc/300":"#d4d4d8","Zinc/400":"#a1a1aa",
  "Zinc/500":"#71717a","Zinc/600":"#52525b","Zinc/700":"#3f3f46","Zinc/800":"#27272a","Zinc/900":"#18181b",
  "Green/50":"#f0fdf4","Green/100":"#dcfce7","Green/200":"#bbf7d0","Green/300":"#86efac","Green/400":"#4ade80",
  "Green/500":"#22c55e","Green/600":"#16a34a","Green/700":"#15803d","Green/800":"#166534","Green/900":"#14532d",
  "Blue/50":"#eff6ff","Blue/100":"#dbeafe","Blue/200":"#bfdbfe","Blue/300":"#93c5fd","Blue/400":"#60a5fa",
  "Blue/500":"#3b82f6","Blue/600":"#2563eb","Blue/700":"#1d4ed8","Blue/800":"#1e40af","Blue/900":"#1e3a8a",
  "Red/50":"#fef2f2","Red/100":"#fee2e2","Red/200":"#fecaca","Red/300":"#fca5a5","Red/400":"#f87171",
  "Red/500":"#ef4444","Red/600":"#dc2626","Red/700":"#b91c1c","Red/800":"#991b1b","Red/900":"#7f1d1d",
  "Amber/50":"#fffbeb","Amber/100":"#fef3c7","Amber/200":"#fde68a","Amber/300":"#fcd34d","Amber/400":"#fbbf24",
  "Amber/500":"#f59e0b","Amber/600":"#d97706","Amber/700":"#b45309","Amber/800":"#92400e","Amber/900":"#78350f",
  "Teal/400":"#2dd4bf","Teal/500":"#14b8a6","Cyan/400":"#22d3ee","Cyan/500":"#06b6d4",
  "Violet/400":"#a78bfa","Violet/500":"#8b5cf6","Violet/600":"#7c3aed",
  "Neutral/White":"#ffffff","Neutral/Black":"#000000","Neutral/Gray":"#cbced4","Neutral/Charcoal":"#222222",
};

// ─── Component tokens (shared, with per-tenant radius) ─────────────────────
const SPACING = [
  ["Spacing/0",0],["Spacing/0-5",2],["Spacing/1",4],["Spacing/1-5",6],["Spacing/2",8],
  ["Spacing/2-5",10],["Spacing/3",12],["Spacing/3-5",14],["Spacing/4",16],["Spacing/5",20],
  ["Spacing/6",24],["Spacing/7",28],["Spacing/8",32],["Spacing/9",36],["Spacing/10",40],
  ["Spacing/12",48],["Spacing/14",56],["Spacing/16",64],["Spacing/20",80],
];
const BORDER_WIDTHS = [
  ["BorderWidth/none",0],["BorderWidth/thin",1],["BorderWidth/default",1],
  ["BorderWidth/medium",1.5],["BorderWidth/thick",2],["BorderWidth/heavy",4],
];
const ICON_SIZES = [
  ["Size/Icon/xs",12],["Size/Icon/sm",16],["Size/Icon/md",20],["Size/Icon/lg",24],["Size/Icon/xl",32],
  ["Size/Avatar/sm",32],["Size/Avatar/default",40],["Size/Avatar/lg",48],
];
const OPACITY = [0,5,8,10,16,20,25,30,40,50,60,70,80,90,100].map(n => [`Opacity/${n}`, n/100]);

// ─── Code generator ────────────────────────────────────────────────────────
function generatePluginCode(tenantData, date) {
  const totalColors = tenantData.reduce((s, t) => s + t.tokens.colors.length, 0);

  const primLines  = Object.entries(PRIMITIVES)
    .map(([k, v]) => `    '${k}':'${v}'`)
    .join(",\n");

  const tenantBlocks = tenantData.map(({ name, tokens }) => {
    const semLines = tokens.colors
      .map(t => `  sem('${t.name}', '${t.light}', '${t.dark}');`)
      .join("\n");

    const floatLines = tokens.floats
      .map(t => `  compFloat('${t.name}', ${t.value});`)
      .join("\n");

    return `
  // ── ${name} ──────────────────────────────────────────────
  {
    const col = figma.variables.createVariableCollection('${name}');
    col.renameMode(col.defaultModeId, 'Light');
    const L = col.defaultModeId;
    const D = col.addMode('Dark');
    function sem(name, lv, dv) {
      const v = figma.variables.createVariable(name, col, 'COLOR');
      v.setValueForMode(L, rgb(lv));
      v.setValueForMode(D, rgb(dv));
      return v;
    }
    function compFloat(name, val) {
      const v = figma.variables.createVariable(name, col, 'FLOAT');
      v.setValueForMode(L, val);
      return v;
    }
${semLines}
${floatLines}
  }`;
  }).join("\n");

  const spacingLines     = SPACING.map(([n,v])      => `  compFloat('${n}', ${v});`).join("\n");
  const borderWidthLines = BORDER_WIDTHS.map(([n,v]) => `  compFloat('${n}', ${v});`).join("\n");
  const iconSizeLines    = ICON_SIZES.map(([n,v])    => `  compFloat('${n}', ${v});`).join("\n");
  const opacityLines     = OPACITY.map(([n,v])       => `  compFloat('${n}', ${v});`).join("\n");

  return `// CESIONBNK DSM — Tokens Plugin
// AUTO-GENERADO por scripts/build-plugin.mjs — NO editar manualmente
// Fuente: tokens/brands/*.json (${date})
// Para actualizar: npm run tokens:build
(async () => {
  try {

  // ── HELPERS ──────────────────────────────────────────────
  function rgb(hex) {
    const c = hex.replace('#', '');
    return { r: parseInt(c.slice(0,2),16)/255, g: parseInt(c.slice(2,4),16)/255, b: parseInt(c.slice(4,6),16)/255, a: 1 };
  }
  async function font(family, style) {
    try { await figma.loadFontAsync({ family, style }); return { family, style }; }
    catch (e) {
      try { await figma.loadFontAsync({ family: 'Inter', style }); return { family: 'Inter', style }; }
      catch (e2) { await figma.loadFontAsync({ family: 'Inter', style: 'Regular' }); return { family: 'Inter', style: 'Regular' }; }
    }
  }

  // ── 1. PRIMITIVES ────────────────────────────────────────
  const PC = figma.variables.createVariableCollection('1. Primitives');
  PC.renameMode(PC.defaultModeId, 'Value');
  const PV = PC.defaultModeId;
  const primData = {
${primLines}
  };
  for (const [name, color] of Object.entries(primData)) {
    const v = figma.variables.createVariable(name, PC, 'COLOR');
    v.setValueForMode(PV, rgb(color));
  }

  // ── 2–6. TENANT COLLECTIONS ──────────────────────────────
${tenantBlocks}

  // ── 7. COMPONENT (shared) ────────────────────────────────
  {
    const CC = figma.variables.createVariableCollection('7. Component');
    CC.renameMode(CC.defaultModeId, 'Value');
    const CV = CC.defaultModeId;
    function compFloat(name, val) {
      const v = figma.variables.createVariable(name, CC, 'FLOAT');
      v.setValueForMode(CV, val);
      return v;
    }
${spacingLines}
${borderWidthLines}
${iconSizeLines}
${opacityLines}
  }

  // ── 8. TEXT STYLES ───────────────────────────────────────
  const wMap = { 400:'Regular', 500:'Medium', 600:'SemiBold', 700:'Bold' };
  for (const [name, size, weight, lh] of [
    ['Display',48,700,150],['H1/Page Title',30,600,150],['H2/Section',24,600,150],
    ['H3/Subsection',20,500,150],['H4/Card Title',18,500,150],['Body/Default',16,400,150],
    ['Body/Small',14,400,150],['Caption',12,400,150],['Label',14,500,150],
    ['Button',16,500,150],['KPI Value',36,700,125],
  ]) {
    const fn = await font('Inter', wMap[weight]);
    const s = figma.createTextStyle();
    s.name = name; s.fontName = fn; s.fontSize = size;
    s.lineHeight = { unit:'PERCENT', value:lh };
    s.letterSpacing = { unit:'PERCENT', value:2.5 };
  }

  // ── 9. EFFECT STYLES ─────────────────────────────────────
  const sh = (y,b,sp,a) => ({ type:'DROP_SHADOW', color:{r:34/255,g:34/255,b:34/255,a}, offset:{x:0,y}, radius:b, spread:sp, visible:true, blendMode:'NORMAL' });
  for (const [name, layers] of [
    ['Elevation/1', [sh(1,2,0,0.05)]],
    ['Elevation/2', [sh(4,6,-1,0.1), sh(2,4,-2,0.1)]],
    ['Elevation/3', [sh(10,15,-3,0.1), sh(4,6,-4,0.1)]],
    ['Elevation/4', [sh(20,25,-5,0.1), sh(8,10,-6,0.1)]],
  ]) {
    const s = figma.createEffectStyle();
    s.name = name; s.effects = layers;
  }

  figma.closePlugin(
    '\\u2705 CESIONBNK DSM Tokens: ' +
    Object.keys(primData).length + ' primitivos \\xb7 ' +
    '${totalColors} semánticos (5 tenants \\xb7 Light+Dark) \\xb7 ' +
    'Component \\xb7 Text Styles \\xb7 Effect Styles'
  );

  } catch (err) {
    figma.closePlugin('\\u274c Error: ' + (err.message || err));
  }
})();
`;
}

// ─── Main ───────────────────────────────────────────────────────────────────
function build() {
  const tenantData = TENANTS.map(t => ({
    name:   t.name,
    tokens: buildTenantTokens(t.id),
  }));

  const date = new Date().toISOString().slice(0, 10);
  const code = generatePluginCode(tenantData, date);

  const outPath = path.join(ROOT, "plugin", "code.js");
  fs.writeFileSync(outPath, code, "utf-8");

  const totalColors  = tenantData.reduce((s, t) => s + t.tokens.colors.length, 0);
  const totalFloats  = tenantData.reduce((s, t) => s + t.tokens.floats.length, 0);

  console.log(`  ✓  plugin/code.js          → ${totalColors} color vars + ${totalFloats} float vars (5 tenants)`);
}

build();
