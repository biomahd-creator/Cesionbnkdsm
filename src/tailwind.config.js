/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ['class'],
  content: [
    './index.html',
    './App.tsx',
    './main.tsx',
    './**/*.{ts,tsx}',
    '!./node_modules/**',
    '!./dist/**',
    '!./dist-lib/**',
  ],
  theme: {
    extend: {
      // Los colores, fuentes y demás tokens se definen en /styles/globals.css
      // usando @theme. Esta config solo especifica los archivos a escanear.
    }
  },
  plugins: []
};