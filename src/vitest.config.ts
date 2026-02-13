import { defineConfig } from 'vitest/config';
import react from '@vitejs/plugin-react';
import path from 'path';

/**
 * vitest.config.ts - Test Configuration (G2)
 *
 * Runs unit and component tests for the design system.
 * Uses jsdom for React component testing with Testing Library.
 *
 * Usage:
 *   npm test           - Run all tests once
 *   npm run test:watch  - Run tests in watch mode
 *   npm run test:coverage - Run with coverage report
 *
 * @version 0.1.1
 */
export default defineConfig({
  plugins: [react()],
  test: {
    // Use jsdom for DOM simulation
    environment: 'jsdom',

    // Global test setup (Testing Library matchers, etc.)
    setupFiles: ['./src/tests/setup.ts'],

    // Test file patterns
    include: [
      'src/tests/**/*.{test,spec}.{ts,tsx}',
      'src/components/**/*.{test,spec}.{ts,tsx}',
    ],

    // Exclude app-only code from tests (factoring has its own test suite)
    exclude: [
      'node_modules',
      'dist-lib',
      'src/components/factoring/**',
    ],

    // Coverage configuration
    coverage: {
      provider: 'v8',
      reporter: ['text', 'json-summary', 'html'],
      include: [
        'src/components/ui/**',
        'src/components/patterns/**',
        'src/components/advanced/**',
        'src/components/widgets/**',
        'src/components/providers/**',
        'src/hooks/**',
        'src/lib/**',
      ],
      exclude: [
        '**/*.d.ts',
        '**/index.ts',
        'src/components/factoring/**',
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
      '@': path.resolve(__dirname, './src'),
    },
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
});