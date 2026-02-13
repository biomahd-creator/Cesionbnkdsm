/**
 * tailwind-preset.cjs - DEPRECATED (Tailwind CSS v3 only)
 *
 * ============================================================
 * THIS FILE IS DEPRECATED as of v0.0.3.
 * It uses Tailwind CSS v3 syntax which is INCOMPATIBLE with v4.
 *
 * For Tailwind CSS v4 consumers, use the CSS-based theme instead:
 *
 *   @import "tailwindcss";
 *   @import "@biomahd-creator/financio-design-system/theme.css";
 *
 * The CSS theme file provides identical tokens via @theme / @theme inline
 * directives that Tailwind v4 understands natively.
 *
 * This file is kept ONLY for backward compatibility with v3 consumers.
 * It will be removed in a future major version.
 * ============================================================
 *
 * @deprecated Use `@import "@biomahd-creator/financio-design-system/theme.css"` instead.
 * @see /styles/theme.css
 */

console.warn(
  '[@biomahd-creator/financio-design-system] tailwind-preset is DEPRECATED. ' +
  'For Tailwind CSS v4, use: @import "@biomahd-creator/financio-design-system/theme.css" ' +
  'in your CSS file instead. This JS preset will be removed in a future major version.'
);

/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        border: "var(--border)",
        input: "var(--input)",
        ring: "var(--ring)",
        background: "var(--background)",
        foreground: "var(--foreground)",
        primary: {
          DEFAULT: "var(--primary)",
          foreground: "var(--primary-foreground)",
        },
        secondary: {
          DEFAULT: "var(--secondary)",
          foreground: "var(--secondary-foreground)",
        },
        destructive: {
          DEFAULT: "var(--destructive)",
          foreground: "var(--destructive-foreground)",
        },
        muted: {
          DEFAULT: "var(--muted)",
          foreground: "var(--muted-foreground)",
        },
        accent: {
          DEFAULT: "var(--accent)",
          foreground: "var(--accent-foreground)",
        },
        popover: {
          DEFAULT: "var(--popover)",
          foreground: "var(--popover-foreground)",
        },
        card: {
          DEFAULT: "var(--card)",
          foreground: "var(--card-foreground)",
        },
        success: {
          DEFAULT: "var(--success)",
          foreground: "var(--success-foreground)",
        },
        warning: {
          DEFAULT: "var(--warning)",
          foreground: "var(--warning-foreground)",
        },
        info: {
          DEFAULT: "var(--info)",
          foreground: "var(--info-foreground)",
        },
        sidebar: {
          DEFAULT: "var(--sidebar)",
          foreground: "var(--sidebar-foreground)",
          primary: "var(--sidebar-primary)",
          "primary-foreground": "var(--sidebar-primary-foreground)",
          accent: "var(--sidebar-accent)",
          "accent-foreground": "var(--sidebar-accent-foreground)",
          border: "var(--sidebar-border)",
          ring: "var(--sidebar-ring)",
        },
        kpi: {
          yellow: "rgb(var(--kpi-yellow))",
          "yellow-dark": "rgb(var(--kpi-yellow-dark))",
          "yellow-bg": "rgb(var(--kpi-yellow-bg))",
          orange: "rgb(var(--kpi-orange))",
          "orange-dark": "rgb(var(--kpi-orange-dark))",
          "orange-bg": "rgb(var(--kpi-orange-bg))",
          blue: "rgb(var(--kpi-blue))",
          "blue-dark": "rgb(var(--kpi-blue-dark))",
          "blue-bg": "rgb(var(--kpi-blue-bg))",
          lime: "rgb(var(--kpi-lime))",
          "lime-dark": "rgb(var(--kpi-lime-dark))",
          "lime-bg": "rgb(var(--kpi-lime-bg))",
        },
        cfinancia: {
          accent: "rgb(var(--cfinancia-accent))",
          "accent-hover": "rgb(var(--cfinancia-accent-hover))",
          navy: "rgb(var(--cfinancia-navy))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        "skeleton-pulse": {
          "0%, 100%": { opacity: "0.6" },
          "50%": { opacity: "1" },
        },
        "fade-in": {
          from: { opacity: "0", transform: "translateY(10px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "skeleton-pulse": "skeleton-pulse 1.5s ease-in-out infinite",
        "fade-in": "fade-in 0.3s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
