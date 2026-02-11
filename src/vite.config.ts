import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

// Basic Vite config for development server (npm run dev)
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./"),
    },
  },
  optimizeDeps: {
    // Force optimization of prop-types to avoid module resolution issues
    include: ['prop-types'],
  },
});
