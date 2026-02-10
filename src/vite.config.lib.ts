import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import dts from 'vite-plugin-dts';

/**
 * Externals: todas las dependencias peer que NO deben bundlearse.
 * Usamos una función para capturar versiones pinneadas (@x.y.z) en imports.
 */
const EXTERNAL_PACKAGES = [
  // Core
  'react',
  'react-dom',
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
];

const isExternal = (id: string) =>
  EXTERNAL_PACKAGES.some((pkg) => id === pkg || id.startsWith(`${pkg}/`) || id.startsWith(`${pkg}@`));

export default defineConfig({
  plugins: [
    react(),
    dts({ 
      insertTypesEntry: true,
      include: ['components'], // Solo genera tipos para la carpeta components
    }),
  ],
  build: {
    outDir: 'dist-lib',
    lib: {
      entry: path.resolve(__dirname, 'components/index.ts'),
      name: 'FigmaMakeDS',
      fileName: (format) => `figma-make-ds.${format}.js`,
    },
    rollupOptions: {
      // Externalizamos TODAS las peerDependencies para que el consumidor las provea
      external: isExternal,
      output: {
        globals: {
          react: 'React',
          'react-dom': 'ReactDOM',
          tailwindcss: 'tailwindcss',
          'lucide-react': 'LucideReact',
          recharts: 'Recharts',
          motion: 'Motion',
          'date-fns': 'DateFns',
          clsx: 'clsx',
          'tailwind-merge': 'tailwindMerge',
          'class-variance-authority': 'cva',
          'react-day-picker': 'ReactDayPicker',
          'embla-carousel-react': 'EmblaCarouselReact',
          cmdk: 'cmdk',
          vaul: 'vaul',
          'input-otp': 'InputOTP',
          sonner: 'Sonner',
          'react-dnd': 'ReactDnD',
          'react-dnd-html5-backend': 'ReactDnDHTML5Backend',
          'react-responsive-masonry': 'ReactResponsiveMasonry',
        },
      },
    },
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./"),
    },
  },
});