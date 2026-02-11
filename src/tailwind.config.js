/**
 * tailwind.config.js - LEGACY / REFERENCE ONLY
 * 
 * IMPORTANT: This file is NOT used by Tailwind CSS v4.
 * In Tailwind v4, all configuration is done via @theme directives
 * in /styles/globals.css and PostCSS via @tailwindcss/postcss.
 * 
 * This file is kept for reference and tooling compatibility only.
 * To modify design tokens, edit /styles/globals.css instead.
 * 
 * @see /styles/globals.css - @theme and @theme inline blocks
 * @see /postcss.config.js - @tailwindcss/postcss plugin
 */

/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ['class'],
  content: [
    './index.html',
    './*.{ts,tsx,js,jsx}',
    './components/**/*.{ts,tsx,js,jsx}',
    './pages/**/*.{ts,tsx,js,jsx}',
    './factoring/**/*.{ts,tsx,js,jsx}',
    './imports/**/*.{ts,tsx,js,jsx}',
    './hooks/**/*.{ts,tsx,js,jsx}',
    './lib/**/*.{ts,tsx,js,jsx}',
    '!./node_modules/**',
    '!./dist/**',
    '!./dist-lib/**',
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
