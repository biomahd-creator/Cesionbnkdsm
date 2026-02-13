# PUBLISH GUIDE — From Figma Make to npm to AI

> Step-by-step instructions to publish `@biomahd-creator/financio-design-system` to npm via GitHub, and connect it to Claude / VS Code / Copilot so AI tools respect your DSM.

---

## Architecture Summary

```
Figma Make (source of truth)
    |  Push to GitHub (files land inside src/)
GitHub (biomahd-creator/Cesionbnkdsm)
    |  GitHub Actions: flatten src/ -> root, strip versioned imports, validate, build
    |  git tag -> publish workflow
npm (@biomahd-creator/financio-design-system)
    |  npm install in consumer project
AI Tools (Claude, Copilot, Cursor, Figma Make)
    |  Read llms.txt -> generate code using your DSM
```

---

## PHASE 0: UNDERSTAND FIGMA MAKE QUIRKS

Figma Make generates code with several non-standard patterns that break in local dev / CI:

| Quirk | Description | Fix |
|---|---|---|
| **src/ wrapper** | All files pushed inside `src/` directory | `scripts/flatten-src.sh` (auto in CI) |
| **Versioned imports** | `"sonner@2.0.3"`, `"@radix-ui/react-slot@1.1.2"` | `vite.config.ts` resolveId plugin (dev) + `strip-versioned-imports.mjs` (CI) |
| **figma:asset/** | Virtual image imports that don't exist locally | Same plugins above |
| **LICENSE bug** | LICENSE file becomes a directory | `flatten-src.sh` handles it |
| **PostCSS revert** | Sometimes reverts to Tailwind v3 config | Manual check (see Phase 1) |
| **Missing runtime packages** | Some packages only exist in Figma Make's runtime | Added to `devDependencies` in package.json |

### Figma Make Runtime Packages

These packages are used by DSM Showcase / Factoring app components but only exist in
Figma Make's bundled runtime. They are listed as `devDependencies` in `package.json`
so `npm install` includes them automatically:

```
@hookform/resolvers    - Zod resolver for react-hook-form
@tanstack/react-table  - Headless table engine (DataTable, MasterDataGrid)
driver.js              - Product tour / onboarding overlays
react-dnd              - Drag & drop core
react-dnd-html5-backend - HTML5 drag & drop backend
react-responsive-masonry - Masonry grid layout
xlsx                   - Excel file export (ExportData component)
```

If for any reason they're missing after `npm install`, install manually:

```bash
npm install -D @hookform/resolvers @tanstack/react-table driver.js react-dnd react-dnd-html5-backend react-responsive-masonry xlsx
```

---

## PHASE 1: PUSH TO GITHUB

### Method A: Push from Figma Make (Recommended)

1. In Figma Make, click the **GitHub** icon (or "Push to GitHub").
2. Select your repo: `biomahd-creator/Cesionbnkdsm`.
3. Write a commit message (e.g., `v0.2.3: dashboard-comercial + flatten workflow`).
4. Click **Push**.

> **Note**: Figma Make places all files inside a `src/` directory. This is normal and expected — the GitHub Actions workflows automatically flatten `src/` -> root before building.

### Method B: Download + Local Push (when you need more control)

```bash
# 1. Download ZIP from Figma Make -> extract to your project folder
# 2. Navigate to the project
cd C:\Users\arcal\Documents\GitHub\Cesionbnkdsm

# 3. If files are inside src/, flatten them
npm run flatten
#    Or manually: bash scripts/flatten-src.sh

# 4. Fix LICENSE bug (Figma Make converts LICENSE file to directory)
#    The flatten script handles this automatically, but verify:
dir LICENSE
#    Should show: LICENSE  (file, ~1KB)
#    Should NOT show: <DIR> LICENSE

# 5. Verify postcss.config.cjs (Figma Make sometimes reverts to v3 config)
type postcss.config.cjs
#    MUST contain: '@tailwindcss/postcss': {}
#    Must NOT contain: tailwindcss: {} + autoprefixer: {}

# 6. Install dependencies (includes Figma Make runtime packages)
npm install

# 7. Start dev server to verify everything works
npm run dev
#    The vite.config.ts resolveId plugin handles versioned imports
#    automatically — no need to run strip-versioned-imports.mjs for dev

# 8. (Optional) Full validation before pushing
npm run strip-versions
npm run validate

# 9. Push to GitHub
git add .
git commit -m "v0.2.3: description of changes"
git push
```

### Method B: Step-by-Step with PowerShell (Windows, first time)

For users cloning the repo for the first time on Windows:

```powershell
# -- STEP 1: Clone the repository --
git clone https://github.com/biomahd-creator/Cesionbnkdsm.git
cd Cesionbnkdsm

# -- STEP 2: Flatten src/ if it exists (Figma Make wrapper) --
#    On Windows without bash, check manually:
if (Test-Path "src\package.json") {
    Write-Host "Figma Make src/ wrapper detected. Run flatten script."
    # Option A: If you have Git Bash / WSL:
    bash scripts/flatten-src.sh
    # Option B: Manual — move everything from src/ to root (except node_modules, .git)
}

# -- STEP 3: Install all dependencies --
npm install
#    This installs everything including the 7 Figma Make runtime packages
#    (@hookform/resolvers, @tanstack/react-table, driver.js, react-dnd,
#     react-dnd-html5-backend, react-responsive-masonry, xlsx)

# -- STEP 4: Verify postcss.config.cjs --
Get-Content postcss.config.cjs
#    Must show: '@tailwindcss/postcss': {}
#    If it shows tailwindcss + autoprefixer, replace with:
#      module.exports = { plugins: { '@tailwindcss/postcss': {} } }

# -- STEP 5: Start dev server --
npm run dev
#    Open http://localhost:5173
#    The Vite resolveId plugin automatically strips "@version" from imports
#    and stubs "figma:asset/*" — no extra steps needed

# -- STEP 6: (If dev server shows errors about missing modules) --
#    Check the error message for the package name, then:
npm install -D <missing-package>

# -- STEP 7: Verify full pipeline (before committing changes) --
#    Strip versioned imports from source files (needed for tsc/vitest):
npm run strip-versions
#    Run full validation:
npm run validate

# -- STEP 8: Commit and push --
git add .
git commit -m "chore: local setup verified"
git push
```

---

## PHASE 2: GITHUB ACTIONS SETUP (one-time)

### Step 2.1: Copy Workflows to .github/workflows/

GitHub only recognizes workflows in `/.github/workflows/`. Figma Make stores them in `/workflows/`.

```bash
# From your local repo root:
mkdir -p .github/workflows
copy workflows\validate.yml .github\workflows\validate.yml
copy workflows\publish.yml .github\workflows\publish.yml
git add .github/
git commit -m "ci: add GitHub Actions workflows with src/ flatten"
git push
```

> **Important**: Every time you push from Figma Make, the `/workflows/` directory gets updated. But `/.github/workflows/` does NOT get auto-synced. After a Figma Make push, re-copy if the workflows changed:
> ```bash
> copy workflows\validate.yml .github\workflows\validate.yml
> copy workflows\publish.yml .github\workflows\publish.yml
> ```

### Step 2.2: Add NPM_TOKEN Secret

1. Go to https://www.npmjs.com/settings/tokens
2. Click **Generate New Token** -> **Classic Token** -> **Automation**
3. Copy the token
4. Go to https://github.com/biomahd-creator/Cesionbnkdsm/settings/secrets/actions
5. Click **New repository secret**
6. Name: `NPM_TOKEN` | Value: paste the token

### Step 2.3: Verify Workflows Run

1. Go to https://github.com/biomahd-creator/Cesionbnkdsm/actions
2. After a push, you should see **"Validate Design System"** running
3. The workflow now automatically:
   - Detects `src/package.json` (Figma Make wrapper)
   - Flattens `src/` -> root
   - Installs dependencies (including Figma Make runtime packages)
   - Strips versioned imports from source files
   - Runs: typecheck -> tests -> build:lib -> boundary check -> circular deps -> package dry-run

**If a job fails**: Click on the failed job -> expand the step that failed -> read the error. Common issues:

| Error | Fix |
|---|---|
| `scripts/flatten-src.sh: No such file` | Copy from Figma Make: ensure `scripts/flatten-src.sh` is committed |
| `Cannot find module '@tailwindcss/postcss'` | `npm install -D @tailwindcss/postcss@^4.0.0` |
| `Cannot find module 'vite-plugin-dts'` | `npm install -D vite-plugin-dts@^3.7.3` |
| `Cannot find module '@tanstack/react-table'` | Already in devDependencies — run `npm install` again |
| `Cannot find module '@hookform/resolvers'` | Already in devDependencies — run `npm install` again |
| TypeScript errors in factoring/ | These are app-only files, safe to ignore for lib build |

---

## PHASE 3: PUBLISH TO NPM

### Option A: Automated via Release Script (Recommended)

```bash
# From your local machine, with all changes committed and pushed:

# Patch release (0.2.3 -> 0.2.4)
npm run release

# Minor release (0.2.3 -> 0.3.0)
npm run release:minor

# Major release (0.2.3 -> 1.0.0)
npm run release:major
```

This does: `validate -> npm version patch -> git push --follow-tags`
The pushed tag triggers `.github/workflows/publish.yml` automatically.

### Option B: Manual Publish (first time or debugging)

```bash
# 1. Login to npm (only once ever)
npm login

# 2. Strip versioned imports (required for tsc)
npm run strip-versions

# 3. Build
npm run build:lib

# 4. Dry-run
npm publish --dry-run

# 5. Publish
npm publish --access public
```

### Step 3.1: Verify Publication

```bash
# Check the package is live
npm view @biomahd-creator/financio-design-system

# Test install in a temporary project
mkdir /tmp/test-dsm && cd /tmp/test-dsm
npm init -y
npm install @biomahd-creator/financio-design-system
```

---

## PHASE 4: CONNECT TO AI TOOLS

Your DSM ships with `llms.txt` — a file that tells AI tools exactly how to use your design system. This is the key to making Claude, Copilot, and Cursor generate code that respects your DSM.

### 4.1: Claude (claude.ai)

#### Method A: Claude Project (Best — persistent context)

1. Go to https://claude.ai
2. Click **Projects** (left sidebar) -> **New Project**
3. Name it: `CESIONBNK DSM Development`
4. In **Project Knowledge**, click **Add content** -> **Upload files**
5. Upload these files from your repo:
   - `llms.txt` (the most important — full component catalog + rules)
   - `guidelines/Guidelines.md` (architecture + roadmap)
   - `guidelines/TOKENS.md` (colors, typography, spacing)
   - `guidelines/COMPONENTS.md` (component inventory)
6. In **Project Instructions** (custom instructions), paste:

```
You are a senior React developer working on the CESIONBNK Design System.

CRITICAL RULES:
1. Always use components from @biomahd-creator/financio-design-system — never create custom Button, Card, Input, etc.
2. Always use semantic Tailwind classes (bg-background, text-foreground, border-border) — never raw colors (bg-white, text-gray-500).
3. Font is Satoshi (loaded automatically). Primary: #00c951 (green). Secondary: #1C2D3A (navy).
4. Use Tailwind CSS v4 conventions. PostCSS uses @tailwindcss/postcss.
5. Flat root structure — no src/ directory.
6. Library components are in English. Factoring app components are in Spanish (es-CO).
7. Read the llms.txt file for the complete component catalog and composition patterns.
```

7. Now every conversation in this project will have full context of your DSM.

#### Method B: Claude Chat (quick, no persistence)

1. Start a new chat on claude.ai
2. Attach `llms.txt` as a file
3. Say: "Read this llms.txt file. It's my design system. Use these components and rules for all code you generate."

### 4.2: VS Code + Claude Extension

1. Install the **Claude** extension for VS Code (by Anthropic)
2. Open your project folder in VS Code
3. Claude can read files from your workspace — reference them in prompts:
   - "Read `llms.txt` and generate a new dashboard page using my DSM components"
   - "Following the patterns in `llms.txt`, create a form for client onboarding"
4. For persistent instructions, create `.claude/instructions.md` in your repo root:

```bash
mkdir -p .claude
```

Then create `.claude/instructions.md`:

```markdown
# Claude Instructions for CESIONBNK DSM

Read `/llms.txt` for the complete design system reference.

## Key Rules
- Use components from `@biomahd-creator/financio-design-system`
- Use semantic Tailwind classes (bg-background, text-foreground, border-border)
- Never use raw Tailwind colors (bg-white, bg-gray-500, etc.)
- Font: Satoshi | Primary: #00c951 | Secondary: #1C2D3A
- Flat root structure (no src/ directory)
- Library = English | Factoring App = Spanish (es-CO)
```

### 4.3: GitHub Copilot (VS Code)

1. Create `.github/copilot-instructions.md` in your repo:

```bash
mkdir -p .github
```

Then create `.github/copilot-instructions.md`:

```markdown
# Copilot Instructions — CESIONBNK Design System

This project is a React + Tailwind CSS v4 Design System published as `@biomahd-creator/financio-design-system`.

## Component Usage
- Import from: `@biomahd-creator/financio-design-system` (full) or `/ui`, `/patterns`, `/advanced`, `/widgets`
- Never create custom Button, Card, Input, Badge, Table components — use the library's
- See `/llms.txt` for the complete component catalog

## Styling Rules
- ALWAYS use semantic classes: bg-background, text-foreground, border-border, bg-muted, text-muted-foreground
- NEVER use raw Tailwind colors: bg-white, bg-gray-500, text-black, bg-green-500
- Primary color: bg-primary (#00c951 green)
- Secondary color: bg-secondary (#1C2D3A navy)
- Font: Satoshi (loaded via theme.css)
- Border radius: rounded-xl (cards), rounded-lg (buttons), rounded-md (inputs)
- Shadows: shadow-elevation-1 through shadow-elevation-4

## Architecture
- Flat root structure (NO src/ directory)
- PostCSS: @tailwindcss/postcss (v4), NOT tailwindcss + autoprefixer (v3)
- Library code: English | Factoring app: Spanish (es-CO)
```

2. Commit and push:
```bash
git add .github/copilot-instructions.md
git commit -m "docs: add Copilot instructions for DSM"
git push
```

3. Copilot will now read this file and follow your DSM rules when generating code.

### 4.4: Cursor IDE

1. Create `.cursorrules` in your repo root:

```
You are working on the CESIONBNK Design System (@biomahd-creator/financio-design-system).

Read /llms.txt for the complete component catalog, design tokens, and composition patterns.

RULES:
- Use components from the DSM library, never create duplicates
- Use semantic Tailwind classes (bg-background, text-foreground, border-border)
- Never use raw Tailwind colors (bg-white, bg-gray-500, etc.)
- Font: Satoshi | Primary: #00c951 | Secondary: #1C2D3A
- Tailwind CSS v4 with @tailwindcss/postcss
- Flat root structure, no src/ directory
- Library components in English, Factoring app in Spanish (es-CO)
```

2. Cursor automatically reads `.cursorrules` for every conversation.

### 4.5: Figma Make

Figma Make already reads your `guidelines/Guidelines.md` automatically. No additional setup needed. The `llms.txt` file ships with the npm package for external consumers.

### 4.6: Consumer Projects (people who install your npm package)

When someone installs your package, they get `llms.txt` in `node_modules/@biomahd-creator/financio-design-system/llms.txt`. They can:

1. Tell their AI: "Read `node_modules/@biomahd-creator/financio-design-system/llms.txt` for the component library I'm using"
2. Or copy it to their project root for easier AI access

---

## PHASE 5: COMPLETE WORKFLOW (Day-to-Day)

### Daily Development in Figma Make

```
1. Make changes in Figma Make
2. Push to GitHub -> files go to src/
3. GitHub Actions auto-flatten + strip versions + validate
4. Check Actions tab for green checkmark
```

### Local Development (after cloning from GitHub)

```
1. git clone / git pull
2. npm install                    (all deps including Figma Make runtime packages)
3. npm run dev                    (Vite resolveId plugin handles versioned imports)
4. Make changes
5. npm run strip-versions         (strip @version before typecheck/test)
6. npm run validate               (full pipeline)
7. git add . && git commit && git push
```

### Publishing a New Version

```
1. Clone/pull latest from GitHub
2. npm run flatten (if needed)
3. npm install
4. npm run strip-versions         (required before validate)
5. npm run validate               (local check)
6. npm run release                (or release:minor / release:major)
7. GitHub Actions auto-publish to npm
8. Verify: npm view @biomahd-creator/financio-design-system
```

### Updating AI Context

After publishing a new version with new components:
1. Update `llms.txt` with any new components
2. Re-upload to Claude Project Knowledge
3. `.github/copilot-instructions.md` and `.cursorrules` auto-sync via git

---

## Versioned Imports: How They Are Handled

Figma Make generates imports like `"sonner@2.0.3"` and `"figma:asset/abc123.png"`. These are handled at two levels:

### Level 1: Vite Dev Server (vite.config.ts)

The `figmaMakeCompat()` plugin uses a **resolveId** hook to intercept versioned imports at the module resolution level — before `vite:import-analysis` runs. This means:

- Source files are **never modified** during dev
- `"sonner@2.0.3"` is resolved to `"sonner"` in memory
- `"figma:asset/*"` returns a transparent 1x1 GIF data URI
- Works with HMR and fast refresh

### Level 2: CI / Build / Typecheck (strip-versioned-imports.mjs)

For `tsc --noEmit`, `vitest`, `madge`, and `vite build --config vite.config.lib.ts`, the versioned specifiers must be stripped from the actual source files because those tools don't use the Vite resolveId plugin. The script:

- Rewrites `"pkg@1.2.3"` -> `"pkg"` in all `.ts/.tsx` files
- Replaces `"figma:asset/*"` with a 1x1 GIF data URI
- Is idempotent (safe to run multiple times)
- Runs automatically in all CI workflow jobs

### Level 3: Library Build (vite.config.lib.ts)

The library build config has `external()` with a regex that marks versioned imports as external, preventing them from being bundled. Combined with `strip-versioned-imports.mjs` running before the build, this ensures clean output.

---

## Quick Reference Card

| Action | Command |
|---|---|
| Flatten src/ | `npm run flatten` |
| Strip versioned imports | `npm run strip-versions` |
| Install deps | `npm install` |
| Dev server | `npm run dev` |
| Build library | `npm run build:lib` |
| Run tests | `npm test` |
| Type check | `npm run typecheck` |
| Full validation | `npm run validate` |
| Package dry-run | `npm pack --dry-run` |
| Publish (manual) | `npm publish --access public` |
| Release patch | `npm run release` |
| Release minor | `npm run release:minor` |
| Release major | `npm run release:major` |

---

## Troubleshooting

| Problem | Cause | Solution |
|---|---|---|
| `Failed to resolve import "sonner@2.0.3"` | Vite resolveId plugin not loaded | Verify `vite.config.ts` has `figmaMakeCompat()` in plugins array |
| `Cannot find module '@tanstack/react-table'` | Missing Figma Make runtime package | `npm install` (now in devDependencies) |
| `SyntaxError: Invalid or unexpected token` when running `.mjs` script | BOM or emoji encoding on Windows | Use the ASCII-only version of `strip-versioned-imports.mjs` |
| `postcss.config.cjs` error about tailwindcss | Figma Make reverted to v3 config | Replace content with `module.exports = { plugins: { '@tailwindcss/postcss': {} } }` |
| LICENSE is a directory | Figma Make bug | `rm -rf LICENSE && echo "MIT" > LICENSE` or run `flatten-src.sh` |
| Files inside `src/` after push | Normal Figma Make behavior | `npm run flatten` or CI handles it automatically |
| `npm run validate` fails on versioned imports | Source files still have `@version` | Run `npm run strip-versions` first |
| Node.js v24+ crashes on `.mjs` with emojis | Unicode encoding issue in PowerShell | Script now uses ASCII-only output (no emojis) |

---

## DO NOT List

| Do NOT | Why |
|---|---|
| Create a `src/` directory | Flat root structure (auto-flattened by CI) |
| Change PostCSS to `tailwindcss` + `autoprefixer` | Project uses Tailwind v4 (`@tailwindcss/postcss`) |
| Edit `/LICENSE` in Figma Make | Bug converts it to directory; flatten script fixes it |
| Let Copilot change `package.json` name | `@biomahd-creator/financio-design-system` is correct |
| Run `npm publish` from `src/` | Publish from root only |
| Use Storybook, Vercel, Netlify, etc. | Not permitted (Guidelines.md) |
| Use raw Tailwind colors in components | Always use semantic tokens (bg-background, etc.) |
| Remove packages from devDependencies | Figma Make runtime packages are needed for dev/CI |
| Use `transform` hook for versioned imports | Must use `resolveId` — runs before `vite:import-analysis` |

---

*Updated: February 13, 2026 — v0.2.3 (resolveId plugin, Figma Make runtime packages, ASCII script, troubleshooting)*
