import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import dts from 'vite-plugin-dts';

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

  // Form
  'react-hook-form',
  'zod',
];

const isExternal = (id: string) =>
  EXTERNAL_PACKAGES.some(
    (pkg) => id === pkg || id.startsWith(`${pkg}/`) || id.startsWith(`${pkg}@`)
  );

/**
 * Library entry points.
 * Each entry produces a separate chunk tree for sub-path imports.
 */
const LIB_ENTRIES: Record<string, string> = {
  // Root entry: re-exports everything
  index: path.resolve(__dirname, 'src/index.ts'),

  // Layer entries: allow `import ... from 'pkg/ui'` etc.
  'components/ui/index': path.resolve(__dirname, 'src/components/ui/index.ts'),
  'components/patterns/index': path.resolve(__dirname, 'src/components/patterns/index.ts'),
  'components/advanced/index': path.resolve(__dirname, 'src/components/advanced/index.ts'),
  'components/widgets/index': path.resolve(__dirname, 'src/components/widgets/index.ts'),
  'components/providers/index': path.resolve(__dirname, 'src/components/providers/index.ts'),

  // Utility layers
  'hooks/index': path.resolve(__dirname, 'src/hooks/index.ts'),
  'lib/index': path.resolve(__dirname, 'src/lib/index.ts'),
};

export default defineConfig({
  plugins: [
    react(),
    dts({
      insertTypesEntry: true,
      // Generate types for library-only code
      include: ['src/components', 'src/hooks', 'src/lib', 'src/index.ts'],
      // Exclude app-only code from type generation
      exclude: [
        'src/components/factoring/**',
        'src/pages/**',
        'src/App.tsx',
        'src/main.tsx',
        'src/tests/**',
        '**/*.test.*',
        '**/*.spec.*',
      ],
    }),
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
        preserveModulesRoot: 'src',
        entryFileNames: '[name].js',
        // Ensure consistent chunk naming
        chunkFileNames: '[name].js',
        // No need for globals in ESM
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
      '@': path.resolve(__dirname, './src'),
    },
  },
});