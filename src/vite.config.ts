import { defineConfig, Plugin } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

/**
 * Figma Make Compatibility Plugin for local development.
 *
 * Figma Make pins dependency versions using "package@version" syntax
 * (e.g., "lucide-react@0.487.0", "@radix-ui/react-dialog@1.1.6").
 * This works in the Figma Make runtime, but Vite cannot resolve them
 * because node_modules uses plain package names.
 *
 * This plugin uses resolveId to intercept versioned specifiers and
 * redirect them to the plain package name that node_modules can resolve.
 *
 * Also handles "figma:asset/*" virtual imports that only exist
 * in the Figma Make environment.
 */
function figmaMakeCompat(): Plugin {
  // Matches: @scope/package@1.2.3  or  package@1.2.3  (with optional /subpath)
  const VERSIONED_RE =
    /^(@[a-z0-9-]+\/[a-z0-9.-]+|[a-z][a-z0-9.-]*)@\d+\.\d+\.\d+(\/.*)?$/;

  return {
    name: 'figma-make-compat',
    enforce: 'pre',

    /**
     * resolveId runs BEFORE vite:import-analysis.
     * When Vite encounters `import { X } from "pkg@1.2.3"`,
     * this hook strips the version and lets Vite re-resolve
     * the plain package name through the normal pipeline.
     */
    resolveId(source, importer, options) {
      // Handle figma:asset/* virtual modules
      if (source.startsWith('figma:asset/')) {
        return '\0figma-asset-placeholder';
      }

      // Check if this is a versioned import specifier
      const match = source.match(VERSIONED_RE);
      if (match) {
        // Reconstruct without the version: "@scope/pkg" + optional "/subpath"
        const plainSpecifier = match[1] + (match[2] || '');
        // Let Vite resolve the plain specifier through its normal pipeline
        return this.resolve(plainSpecifier, importer, {
          ...options,
          skipSelf: true,
        });
      }

      return null;
    },

    // Return a transparent 1x1 GIF placeholder for figma:asset imports
    load(id) {
      if (id === '\0figma-asset-placeholder') {
        return 'export default "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7"';
      }
      return null;
    },
  };
}

// Basic Vite config for development server (npm run dev)
export default defineConfig({
  plugins: [figmaMakeCompat(), react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './'),
    },
  },
  optimizeDeps: {
    // Force optimization of prop-types to avoid module resolution issues
    include: ['prop-types'],
  },
});
