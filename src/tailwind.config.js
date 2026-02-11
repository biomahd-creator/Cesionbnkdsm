/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ['class'],
  content: [
    './index.html',
    './src/index.html',
    './src/**/*.{ts,tsx,js,jsx}',
    '!./node_modules/**',
    '!./dist/**',
    '!./dist-lib/**',
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};