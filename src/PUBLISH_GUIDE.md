# PUBLISH GUIDE — From Figma Make to npm

> Step-by-step instructions to publish `@biomahd-creator/financio-design-system` to npm via GitHub.

---

## Architecture Summary

```
Figma Make (source of truth)
    ↓  export/download
Local Machine (flat root, NO src/)
    ↓  git push
GitHub (biomahd-creator/Cesionbnkdsm)
    ↓  git tag → GitHub Actions
npm (@biomahd-creator/financio-design-system)
```

---

## STEP 1: Download from Figma Make

1. In Figma Make, click **"Code"** → **"Download"** (or export to ZIP).
2. Extract the ZIP somewhere on your machine, e.g.:
   ```
   C:\Users\arcal\Projects\Cesionbnkdsm\
   ```

### CRITICAL: Flat Root Structure

The extracted files MUST be at the root level — **NOT inside a `src/` folder**.

**Correct structure:**
```
Cesionbnkdsm/
├── App.tsx              ← at root
├── main.tsx             ← at root
├── index.ts             ← at root
├── index.html           ← at root
├── package.json         ← at root (name: @biomahd-creator/financio-design-system)
├── postcss.config.cjs   ← at root
├── vite.config.ts       ← at root
├── vite.config.lib.ts   ← at root
├── tsconfig.json        ← at root
├── LICENSE              ← at root (plain file, NOT a directory)
├── components/          ← at root
├── pages/               ← at root
├── styles/              ← at root
├── hooks/               ← at root
├── lib/                 ← at root
└── ...
```

**WRONG structure (what Figma Make sometimes does):**
```
Cesionbnkdsm/
├── package.json         ← wrapper/empty (WRONG)
└── src/
    ├── App.tsx          ← buried in src/ (WRONG)
    ├── package.json     ← real one is here (WRONG)
    └── ...
```

**If you see a `src/` folder**: Move everything from `src/` to root, delete `src/`, and delete the outer `package.json` if it's different from the one inside `src/`.

### How to fix the `src/` problem (Windows CMD):

```cmd
cd C:\Users\arcal\Projects\Cesionbnkdsm

:: If there's a src/ folder with the real files:
:: 1. Backup first
xcopy . backup\ /E /I /Y

:: 2. Move src/* contents to root (overwrites root package.json with the real one)
xcopy src\* . /E /Y

:: 3. Remove the now-empty src/ folder
rmdir src /S /Q
```

### How to fix the `src/` problem (PowerShell):

```powershell
cd C:\Users\arcal\Projects\Cesionbnkdsm

# If there's a src/ folder with the real files:
# 1. Backup first
Copy-Item -Path . -Destination .\backup -Recurse

# 2. Move src/* contents to root
Copy-Item -Path src\* -Destination . -Recurse -Force

# 3. Remove src/
Remove-Item -Path src -Recurse -Force
```

---

## STEP 2: Verify the LICENSE file

Figma Make has a bug where `/LICENSE` becomes a directory instead of a file. Check this EVERY time:

```cmd
:: Windows CMD
dir LICENSE
:: Should show: LICENSE    1,072 bytes (a file)
:: Should NOT show: <DIR> LICENSE (a directory)

:: If it's a directory, delete and recreate:
rmdir LICENSE /S /Q
```

Then create `LICENSE` as a plain text file with this content:

```
MIT License

Copyright (c) 2026 biomahd-creator

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
```

---

## STEP 3: Verify package.json

Open `package.json` at the root and confirm these fields:

```json
{
  "name": "@biomahd-creator/financio-design-system",
  "version": "0.2.3",
  "private": false,
  "license": "MIT",
  "publishConfig": {
    "access": "public",
    "provenance": true
  }
}
```

**Important**: The name `@biomahd-creator/financio-design-system` is 100% valid for npm. It's a scoped package. Ignore any AI/tool that says otherwise.

---

## STEP 4: Verify postcss.config.cjs

This project uses **Tailwind CSS v4**. The PostCSS config MUST use `@tailwindcss/postcss`, NOT the old `tailwindcss` + `autoprefixer` combo.

```js
// postcss.config.cjs — CORRECT for Tailwind v4
module.exports = {
  plugins: {
    '@tailwindcss/postcss': {},
  },
};
```

**WRONG (Tailwind v3 — do NOT use):**
```js
// postcss.config.cjs — WRONG
module.exports = {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  },
};
```

If Copilot or any AI changed this, revert it.

---

## STEP 5: Install dependencies

```bash
cd C:\Users\arcal\Projects\Cesionbnkdsm

# Clean install
rm -rf node_modules package-lock.json
npm install

# Verify @tailwindcss/postcss is installed
npm ls @tailwindcss/postcss
# Should show: @tailwindcss/postcss@4.x.x
```

---

## STEP 6: Build the library

```bash
# Build the library (this creates dist-lib/)
npm run build:lib

# Verify the output
dir dist-lib
# Should show: index.js, index.d.ts, components/, hooks/, lib/
```

### If `npm run build:lib` fails

The script runs `tsc && vite build --config vite.config.lib.ts`. Common issues:

1. **TypeScript errors**: There may be ~10-20 residual TS errors in factoring files. These are in app-only code and don't affect the library build. If `tsc` blocks the build, you can temporarily skip it:
   ```bash
   npx vite build --config vite.config.lib.ts
   ```

2. **Missing `vite-plugin-dts`**: 
   ```bash
   npm install -D vite-plugin-dts@^3.7.3
   ```

---

## STEP 7: Test the package locally

```bash
# Dry-run to see what would be published
npm pack --dry-run

# Check the tarball
npm pack
# Creates: biomahd-creator-financio-design-system-0.2.3.tgz

# Inspect contents
tar -tzf biomahd-creator-financio-design-system-0.2.3.tgz | head -30
# Should include:
#   package/dist-lib/index.js
#   package/dist-lib/index.d.ts
#   package/styles/theme.css
#   package/LICENSE
#   package/README.md
#   package/llms.txt

# Clean up
del biomahd-creator-financio-design-system-0.2.3.tgz
```

---

## STEP 8: Push to GitHub

### First time (new repo):

```bash
cd C:\Users\arcal\Projects\Cesionbnkdsm

git init
git remote add origin https://github.com/biomahd-creator/Cesionbnkdsm.git
git branch -M main

# Create .gitignore if missing
echo node_modules > .gitignore
echo dist-lib >> .gitignore
echo *.tgz >> .gitignore

git add .
git commit -m "v0.2.3: initial push from Figma Make"
git push -u origin main
```

### Subsequent pushes:

```bash
git add .
git commit -m "description of changes"
git push
```

### GitHub Actions Workflows

Your workflow files are in `/workflows/` in Figma Make. GitHub expects them at `/.github/workflows/`. Copy them:

```bash
mkdir -p .github/workflows
copy workflows\validate.yml .github\workflows\validate.yml
copy workflows\publish.yml .github\workflows\publish.yml
git add .github/
git commit -m "ci: add GitHub Actions workflows"
git push
```

---

## STEP 9: Publish to npm

### Option A: Manual publish (first time)

```bash
# 1. Login to npm (only once)
npm login
# Enter your npm username, password, and email
# For scoped packages, you need an npm account

# 2. Ensure dist-lib/ is built
npm run build:lib

# 3. Dry-run first
npm publish --dry-run

# 4. Publish for real
npm publish --access public
```

### Option B: Automated publish via GitHub Actions (recommended)

After setting up the workflows (Step 8), publishing is automated:

```bash
# 1. Add your npm token as a GitHub secret
#    Go to: https://github.com/biomahd-creator/Cesionbnkdsm/settings/secrets/actions
#    Click "New repository secret"
#    Name: NPM_TOKEN
#    Value: (your npm access token from https://www.npmjs.com/settings/tokens)

# 2. Use the release script to bump version + push tag
npm run release           # patch: 0.2.3 → 0.2.4
npm run release:minor     # minor: 0.2.3 → 0.3.0
npm run release:major     # major: 0.2.3 → 1.0.0

# 3. The tag push triggers .github/workflows/publish.yml automatically
#    It will: typecheck → test → build:lib → verify → publish to npm
```

### Getting an npm token

1. Go to https://www.npmjs.com/ and sign in (or create account)
2. Click your avatar → **Access Tokens**
3. Click **Generate New Token** → **Classic Token**
4. Select **Automation** type
5. Copy the token
6. Add it as `NPM_TOKEN` secret in your GitHub repo settings

---

## STEP 10: Verify publication

```bash
# Check that the package is live
npm view @biomahd-creator/financio-design-system

# Test installing in a new project
mkdir /tmp/test-install && cd /tmp/test-install
npm init -y
npm install @biomahd-creator/financio-design-system
```

---

## Troubleshooting

### "npm ERR! 402 Payment Required"
Your npm account needs to be on the free plan with public packages enabled. Scoped packages (`@scope/name`) default to private — that's why `--access public` is required.

### "npm ERR! 403 Forbidden"
You haven't logged in, or your token doesn't have publish permissions. Run `npm login` or generate a new token.

### "Cannot find module 'vite-plugin-dts'"
```bash
npm install -D vite-plugin-dts@^3.7.3
```

### "Cannot find module '@tailwindcss/postcss'"
```bash
npm install -D @tailwindcss/postcss@^4.0.0
```

### TypeScript errors blocking build
Known residual TS errors exist in app-only files (factoring/). To bypass for library build:
```bash
npx vite build --config vite.config.lib.ts
```

### LICENSE is a directory
```bash
rmdir LICENSE /S /Q
# Then recreate as a file (see Step 2)
```

---

## Quick Reference Card

| Action | Command |
|---|---|
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

## DO NOT list

| Do NOT | Why |
|---|---|
| Create a `src/` directory | Flat root structure (Guidelines.md) |
| Change PostCSS to `tailwindcss` + `autoprefixer` | Project uses Tailwind v4 (`@tailwindcss/postcss`) |
| Edit `/LICENSE` in Figma Make | Bug converts it to directory; edit locally only |
| Let Copilot change `package.json` name | `@biomahd-creator/financio-design-system` is valid |
| Run `npm publish` from `src/` | Publish from root only |
| Use Storybook, Vercel, Netlify, etc. | Not permitted (Guidelines.md) |

---

*Created: February 13, 2026 — v0.2.3*
