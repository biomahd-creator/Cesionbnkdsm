import { create } from "@storybook/theming/create";

/**
 * CESIONBNK Storybook Theme
 * ──────────────────────────
 * Custom theme for the Storybook manager UI (sidebar, toolbar, panels).
 * Uses the DSM brand colors: Primary Green (#00c951) + Secondary Dark Blue (#1C2D3A).
 *
 * Docs: https://storybook.js.org/docs/configure/theming
 */
export const cesionbnkTheme = create({
  base: "light",

  // Brand
  brandTitle: "CESIONBNK Design System",
  brandUrl: "https://github.com/biomahd-creator/financio-design-system",
  // brandImage: "/path-to-logo.svg",  // Uncomment when logo is available
  brandTarget: "_blank",

  // Colors — Primary Green + Secondary Dark Blue
  colorPrimary: "#00c951",
  colorSecondary: "#1C2D3A",

  // UI
  appBg: "#f8fafc",
  appContentBg: "#ffffff",
  appPreviewBg: "#ffffff",
  appBorderColor: "#e4e4e7",
  appBorderRadius: 10,  // matches --radius: 0.625rem

  // Text
  textColor: "#1C2D3A",
  textInverseColor: "#ffffff",
  textMutedColor: "#52525b",

  // Toolbar
  barTextColor: "#52525b",
  barSelectedColor: "#00c951",
  barHoverColor: "#1C2D3A",
  barBg: "#ffffff",

  // Inputs (controls panel)
  inputBg: "#ffffff",
  inputBorder: "#e4e4e7",
  inputTextColor: "#1C2D3A",
  inputBorderRadius: 6,

  // Buttons
  buttonBg: "#f4f4f5",
  buttonBorder: "#e4e4e7",

  // Booleans
  booleanBg: "#f4f4f5",
  booleanSelectedBg: "#00c951",
});

/**
 * Dark variant for the manager UI.
 * Enable by switching manager theme in manager.ts.
 */
export const cesionbnkThemeDark = create({
  base: "dark",

  brandTitle: "CESIONBNK Design System",
  brandUrl: "https://github.com/biomahd-creator/financio-design-system",
  brandTarget: "_blank",

  colorPrimary: "#00c951",
  colorSecondary: "#00c951",

  appBg: "#0f172a",
  appContentBg: "#1e293b",
  appPreviewBg: "#0f172a",
  appBorderColor: "#334155",
  appBorderRadius: 10,

  textColor: "#f8fafc",
  textInverseColor: "#1C2D3A",
  textMutedColor: "#94a3b8",

  barTextColor: "#94a3b8",
  barSelectedColor: "#00c951",
  barHoverColor: "#f8fafc",
  barBg: "#1e293b",

  inputBg: "#334155",
  inputBorder: "#475569",
  inputTextColor: "#f8fafc",
  inputBorderRadius: 6,

  buttonBg: "#334155",
  buttonBorder: "#475569",

  booleanBg: "#334155",
  booleanSelectedBg: "#00c951",
});
