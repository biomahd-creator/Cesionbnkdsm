import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import dts from 'vite-plugin-dts';
import fs from 'fs';

/**
 * vite.config.lib.ts - Library Build Configuration
 *
 * ARCHITECTURE (G1 + G3):
 * - ESM-only output with preserveModules for maximum tree-shaking
 * - Each component gets its own output file, allowing consumers
 *   to import at any granularity:
 *
 *   // Full import (all components)
 *   import { Button } from '@biomahd-creator/financio-design-system';
 *
 *   // Layer import (better tree-shaking)
 *   import { Button } from '@biomahd-creator/financio-design-system/ui';
 *
 *   // Direct component import (best tree-shaking)
 *   import { Button } from '@biomahd-creator/financio-design-system/ui/button';
 *
 * BOUNDARY (G1):
 * - ONLY /components/, /hooks/, /lib/ are included in the library build.
 * - /pages/, /components/factoring/, /App.tsx are EXCLUDED (app-only).
 * - The entry point is /index.ts which re-exports the library surface.
 *
 * @version 0.1.0
 */

/**
 * Externals: all peerDependencies that must NOT be bundled.
 * Uses a function to catch pinned version imports (@x.y.z).
 */
const EXTERNAL_PACKAGES = [
  // Core
  'react',
  'react-dom',
  'react/jsx-runtime',
  'react/jsx-dev-runtime',
  'tailwindcss',

  // Radix UI primitives
  '@radix-ui/',

  // Icons
  'lucide-react',

  // Charts
  'recharts',

  // Animation
  'motion',

  // Date utilities
  'date-fns',
  'react-day-picker',

  // UI primitives
  'class-variance-authority',
  'cmdk',
  'embla-carousel-react',
  'vaul',
  'input-otp',
  'sonner',

  // Utilities
  'clsx',
  'tailwind-merge',

  // Drag & Drop
  'react-dnd',
  'react-dnd-html5-backend',

  // Layout
  'react-responsive-masonry',
  'react-resizable-panels',

  // Form
  'react-hook-form',
  'zod',

  // Data table
  '@tanstack/react-table',

  // Spreadsheet (dynamic import)
  'xlsx',

  // Onboarding tours (dynamic import)
  'driver.js',

  // Form validation
  '@hookform/resolvers',
];

const isExternal = (id: string) => {
  // Figma Make versioned imports (e.g., "lucide-react@0.487.0",
  // "@radix-ui/react-dialog@1.1.6") — always external
  if (/^(@[a-z0-9-]+\/[a-z0-9.-]+|[a-z][a-z0-9.-]*)@\d+/.test(id)) return true;

  return EXTERNAL_PACKAGES.some((pkg) => {
    // Prefix patterns (e.g., "@radix-ui/") — match any sub-package
    if (pkg.endsWith('/')) return id === pkg.slice(0, -1) || id.startsWith(pkg);
    // Exact or sub-path match
    return id === pkg || id.startsWith(`${pkg}/`);
  });
};

/**
 * Library entry points.
 * Each entry produces a separate chunk tree for sub-path imports.
 */
const LIB_ENTRIES: Record<string, string> = {
  // Root entry: re-exports everything
  index: path.resolve(__dirname, 'index.ts'),

  // Layer entries: allow `import ... from 'pkg/ui'` etc.
  'components/ui/index': path.resolve(__dirname, 'components/ui/index.ts'),
  'components/patterns/index': path.resolve(__dirname, 'components/patterns/index.ts'),
  'components/advanced/index': path.resolve(__dirname, 'components/advanced/index.ts'),
  'components/widgets/index': path.resolve(__dirname, 'components/widgets/index.ts'),
  'components/providers/index': path.resolve(__dirname, 'components/providers/index.ts'),

  // Utility layers
  'hooks/index': path.resolve(__dirname, 'hooks/index.ts'),
  'lib/index': path.resolve(__dirname, 'lib/index.ts'),
};

export default defineConfig({
  plugins: [
    react(),
    dts({
      tsconfigPath: './tsconfig.build.json',
      insertTypesEntry: true,
      // Generate types for library-only code
      include: ['components', 'hooks', 'lib', 'index.ts', 'versioned-imports.d.ts'],
      // Exclude app-only code from type generation
      exclude: [
        'components/factoring/**',
        'components/patterns/factoring/**',
        'components/PageRenderer.tsx',
        'components/SidebarNew.tsx',
        'pages/**',
        'App.tsx',
        'main.tsx',
        'tests/**',
        '**/*.test.*',
        '**/*.spec.*',
      ],
      // Skip diagnostics — safety net in case dts still can't resolve some
      // Figma Make versioned imports. The primary fix is including
      // versioned-imports.d.ts in the include array above.
      skipDiagnostics: true,
    }),
    // Post-process .d.ts files: strip Figma Make version suffixes from import paths
    // so consumers see standard package names (e.g., "lucide-react" not "lucide-react@0.487.0").
    // Uses closeBundle hook to guarantee dts plugin has already written its files.
    {
      name: 'strip-versioned-dts-imports',
      closeBundle() {
        const outDir = path.resolve(__dirname, 'dist-lib');
        if (fs.existsSync(outDir)) {
          stripVersionedImports(outDir);
        }
      },
    },
  ],
  build: {
    outDir: 'dist-lib',
    // ESM-only: modern consumers use bundlers that handle ESM natively.
    // UMD dropped in v0.1.0 — see CHANGELOG.
    lib: {
      entry: LIB_ENTRIES,
      formats: ['es'],
    },
    rollupOptions: {
      external: isExternal,
      output: {
        // preserveModules: each source file → one output file.
        // This enables per-component tree-shaking without any bundler magic.
        preserveModules: true,
        preserveModulesRoot: '.',
        entryFileNames: '[name].js',
        // Ensure consistent chunk naming
        chunkFileNames: '[name].js',
        // Rewrite versioned external imports to base package names for consumers.
        // e.g., "lucide-react@0.487.0" → "lucide-react"
        //       "@radix-ui/react-dialog@1.1.6" → "@radix-ui/react-dialog"
        paths: (id) => {
          const match = id.match(/^(@[a-z0-9-]+\/[a-z0-9.-]+|[a-z][a-z0-9.-]*)@\d+/);
          return match ? match[1] : id;
        },
      },
    },
    // Disable CSS code splitting — consumers import theme.css separately
    cssCodeSplit: false,
    // Generate sourcemaps for debugging
    sourcemap: true,
    // Minification off: consumers' bundlers will minify
    minify: false,
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './'),
    },
  },
});

/**
 * Strips version suffixes from import paths in .d.ts files.
 * @param dir - The directory containing .d.ts files.
 */
function stripVersionedImports(dir: string) {
  const files = fs.readdirSync(dir);
  files.forEach((file) => {
    const filePath = path.join(dir, file);
    const stats = fs.statSync(filePath);
    if (stats.isDirectory()) {
      stripVersionedImports(filePath);
    } else if (file.endsWith('.d.ts')) {
      const content = fs.readFileSync(filePath, 'utf8');
      const strippedContent = content.replace(
        /"(@[a-z0-9-]+\/[a-z0-9.-]+|[a-z][a-z0-9.-]*)@\d+\.\d+\.\d+"/g,
        '"$1"'
      );
      fs.writeFileSync(filePath, strippedContent, 'utf8');
    }
  });
}