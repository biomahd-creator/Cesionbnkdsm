import type { Preview, Decorator } from "@storybook/react";
import { withThemeByClassName } from "@storybook/addon-themes";
import React from "react";

// ── Import DSM tokens & base styles ─────────────────────────────
// This loads ALL CSS custom properties, @theme, @layer base, utilities, Satoshi font
import "../styles/globals.css";

// ── Dark Mode Decorator ─────────────────────────────────────────
// Uses @storybook/addon-themes to toggle .dark class on the HTML element,
// matching the ThemeProvider pattern used in production.
const withDarkMode = withThemeByClassName({
  themes: {
    Light: "",
    Dark: "dark",
  },
  defaultTheme: "Light",
  parentSelector: "html",
});

// ── Centering Decorator ─────────────────────────────────────────
// Wraps each story in a padded container with the DSM body font
const withCenterLayout: Decorator = (Story) => (
  <div
    style={{
      fontFamily: "'Satoshi', sans-serif",
      letterSpacing: "0.025em",
      padding: "2rem",
      minHeight: "100vh",
    }}
  >
    <Story />
  </div>
);

// ── Preview Configuration ───────────────────────────────────────
const preview: Preview = {
  decorators: [withCenterLayout, withDarkMode],

  parameters: {
    // ── Controls: smart matchers ──
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /date$/i,
      },
      sort: "requiredFirst",
      expanded: true,
    },

    // ── Actions: auto-detect event handlers ──
    actions: {
      argTypesRegex: "^on[A-Z].*",
    },

    // ── Layout ──
    layout: "padded",

    // ── Backgrounds: match DSM light/dark tokens ──
    backgrounds: {
      default: "DSM Light",
      values: [
        { name: "DSM Light", value: "#ffffff" },
        { name: "DSM Dark", value: "#0f172a" },
        { name: "Card Light", value: "#f8fafc" },
        { name: "Card Dark", value: "#1e293b" },
        { name: "Muted", value: "#f4f4f5" },
      ],
    },

    // ── Viewport presets ──
    viewport: {
      viewports: {
        mobile: {
          name: "Mobile (375px)",
          styles: { width: "375px", height: "812px" },
        },
        tablet: {
          name: "Tablet (768px)",
          styles: { width: "768px", height: "1024px" },
        },
        desktop: {
          name: "Desktop (1280px)",
          styles: { width: "1280px", height: "800px" },
        },
        wide: {
          name: "Wide (1536px)",
          styles: { width: "1536px", height: "900px" },
        },
      },
    },

    // ── Docs: autodocs sort ──
    docs: {
      toc: true,
    },

    // ── Options: story sorting ──
    options: {
      storySort: {
        method: "alphabetical",
        order: [
          "Docs",            // MDX documentation pages first
          "UI",              // Layer 1: Atoms & Molecules
          "Advanced",        // Layer 2: Complex Organisms
          "Patterns",        // Layer 3: Business Organisms
          [
            "*",
            "Factoring",     // Sub-group within Patterns
          ],
          "Widgets",         // Layer 4: Functional Blocks
          "Factoring",       // Module-level factoring components
          [
            "*",
            "Components",    // Sub-components (StatusBadge, dashboards)
            "C-Financia",    // C-Financia branded flow
            "Views",         // Page-level views
            "Modals",        // Dialogs
            "Playground",    // Experimental screens
          ],
          "Accessibility",   // A11y components
          "Help",            // Help system
        ],
      },
    },
  },

  // ── Tags: control autodocs ──
  tags: ["autodocs"],
};

export default preview;