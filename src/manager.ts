import { addons } from "@storybook/manager-api";
import { cesionbnkTheme } from "./cesionbnk-theme";

/**
 * Manager configuration
 * ─────────────────────
 * Applies the CESIONBNK brand theme to the Storybook shell
 * (sidebar, toolbar, panels). For dark manager UI, swap to cesionbnkThemeDark.
 */
addons.setConfig({
  theme: cesionbnkTheme,

  // Sidebar configuration
  sidebar: {
    showRoots: true,  // Show top-level categories (UI, Advanced, Patterns, etc.)
    collapsedRoots: ["accessibility", "help"], // Collapse less-used sections by default
  },

  // Panel position
  panelPosition: "bottom",

  // Enable keyboard shortcuts
  enableShortcuts: true,
});
