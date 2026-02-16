import { defineConfig } from 'vitest/config';
import type { Plugin } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

/**
 * vitest.config.ts - Test Configuration (G2)
 *
 * Runs unit and component tests for the design system.
 * Uses jsdom for React component testing with Testing Library.
 *
 * Includes the figmaMakeCompat plugin to resolve versioned imports
 * (e.g. "@radix-ui/react-dialog@1.1.6") that Figma Make adds to component files.
 *
 * Usage:
 *   npm test           - Run all tests once
 *   npm run test:watch  - Run tests in watch mode
 *   npm run test:coverage - Run with coverage report
 *
 * @version 0.2.3
 */

/**
 * Figma Make Compatibility Plugin (shared logic with vite.config.ts).
 * Strips version suffixes from import specifiers so Vitest can resolve them.
 */
function figmaMakeCompat(): Plugin {
  const VERSIONED_RE =
    /^(@[a-z0-9-]+\/[a-z0-9.-]+|[a-z][a-z0-9.-]*)@\d+\.\d+\.\d+(\/.*)?$/;

  return {
    name: 'figma-make-compat',
    enforce: 'pre',

    resolveId(source: string, importer: string | undefined, options: { skipSelf?: boolean }) {
      // Handle figma:asset/* virtual modules
      if (source.startsWith('figma:asset/')) {
        return '\0figma-asset-placeholder';
      }

      // Check if this is a versioned import specifier
      const match = source.match(VERSIONED_RE);
      if (match) {
        const plainSpecifier = match[1] + (match[2] || '');
        return this.resolve(plainSpecifier, importer, {
          ...options,
          skipSelf: true,
        });
      }

      return null;
    },

    load(id: string) {
      if (id === '\0figma-asset-placeholder') {
        return 'export default "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7"';
      }
      return null;
    },
  };
}

export default defineConfig({
  plugins: [figmaMakeCompat(), react()],
  test: {
    // Use jsdom for DOM simulation
    environment: 'jsdom',

    // Expose describe, it, expect, vi as globals (required by @testing-library/jest-dom)
    globals: true,

    // Global test setup (Testing Library matchers, etc.)
    setupFiles: ['./tests/setup.ts'],

    // Test file patterns
    include: [
      'tests/**/*.{test,spec}.{ts,tsx}',
      'components/**/*.{test,spec}.{ts,tsx}',
    ],

    // Exclude app-only code from tests (factoring has its own test suite)
    exclude: [
      'node_modules',
      'dist-lib',
      'components/factoring/**',
    ],

    // Coverage configuration
    coverage: {
      provider: 'v8',
      reporter: ['text', 'json-summary', 'html'],
      include: [
        'components/ui/**',
        'components/patterns/**',
        'components/advanced/**',
        'components/widgets/**',
        'components/providers/**',
        'components/help/**',
        'components/accessibility/**',
        'hooks/**',
        'lib/**',
      ],
      exclude: [
        '**/*.d.ts',
        '**/index.ts',
        'components/factoring/**',
        'components/patterns/factoring/**',
      ],
      thresholds: {
        // Raised from 10% in v0.1.0 → 20% in v0.1.1
        statements: 20,
        branches: 15,
        functions: 20,
        lines: 20,
      },
    },

    // TypeScript path aliases
    alias: {
      '@': path.resolve(__dirname, './'),
    },
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './'),
    },
  },
});