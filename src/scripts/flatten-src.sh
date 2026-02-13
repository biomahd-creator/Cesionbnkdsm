#!/usr/bin/env bash
# =============================================================================
# flatten-src.sh — Flatten Figma Make src/ wrapper to root structure
# =============================================================================
#
# Figma Make pushes all project files inside a src/ directory when syncing
# to GitHub. This project uses a flat root structure (no src/) as defined
# in Guidelines.md (v0.2.3). This script moves everything from src/ to
# the repository root so that all configs (vite, tsconfig, postcss, etc.)
# resolve correctly.
#
# Usage:
#   bash scripts/flatten-src.sh          # from repo root
#   npm run flatten                      # via package.json script
#
# Safety:
#   - Only runs if src/package.json exists (confirms Figma Make wrapper)
#   - Preserves root-level files (.github/, .gitignore, etc.)
#   - Overwrites root files with src/ versions when conflicts exist
#   - Idempotent: safe to run multiple times
#
# =============================================================================

set -euo pipefail

# Colors for output (CI-safe: only if terminal supports it)
if [ -t 1 ]; then
  GREEN='\033[0;32m'
  YELLOW='\033[1;33m'
  NC='\033[0m'
else
  GREEN=''
  YELLOW=''
  NC=''
fi

# Navigate to repo root (script lives in scripts/)
SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
REPO_ROOT="$(cd "$SCRIPT_DIR/.." && pwd)"
cd "$REPO_ROOT"

# Check if src/ wrapper exists
if [ ! -d "src" ] || [ ! -f "src/package.json" ]; then
  echo -e "${GREEN}Root structure detected — no flattening needed.${NC}"
  exit 0
fi

echo -e "${YELLOW}Detected Figma Make src/ wrapper — flattening to root...${NC}"

# Enable dotglob to include hidden files (e.g., .env, .npmrc)
shopt -s dotglob

# Copy all contents from src/ to root, overwriting conflicts
# Using cp -r instead of mv to handle the case where root already
# has files (like .github/, .gitignore, LICENSE, README.md)
cp -rf src/* . 2>/dev/null || true

# Remove the now-redundant src/ directory
rm -rf src/

# Fix known Figma Make bug: LICENSE directory
# Figma Make sometimes creates /LICENSE/main.tsx instead of /LICENSE file
if [ -d "LICENSE" ]; then
  echo -e "${YELLOW}Fixing LICENSE directory bug (Figma Make known issue)...${NC}"
  rm -rf LICENSE
  # Create a proper MIT LICENSE file
  YEAR=$(date +%Y)
  cat > LICENSE << EOF
MIT License

Copyright (c) $YEAR CESIONBNK

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
EOF
  echo "  LICENSE file restored"
fi

# Verify critical files exist at root
CRITICAL_FILES=("package.json" "tsconfig.json" "vite.config.ts" "vite.config.lib.ts" "index.ts" "App.tsx" "main.tsx")
MISSING=0
for f in "${CRITICAL_FILES[@]}"; do
  if [ ! -f "$f" ]; then
    echo "  WARNING: $f not found at root after flattening"
    MISSING=$((MISSING + 1))
  fi
done

if [ $MISSING -gt 0 ]; then
  echo -e "${YELLOW}WARNING: $MISSING critical file(s) missing after flatten. Check the src/ contents.${NC}"
  exit 1
fi

echo -e "${GREEN}Structure flattened successfully. All critical files at root.${NC}"
