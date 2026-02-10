import type { StorybookConfig } from "@storybook/react-vite";
import path from "path";

const config: StorybookConfig = {
  // ── Stories: cover all 4 DSM layers + factoring ───────────────
  stories: [
    // Layer 1: UI (atoms/molecules)
    "../components/ui/**/*.stories.@(ts|tsx)",
    // Layer 2: Advanced (complex organisms)
    "../components/advanced/**/*.stories.@(ts|tsx)",
    // Layer 3: Patterns (business organisms)
    "../components/patterns/**/*.stories.@(ts|tsx)",
    // Layer 4: Widgets (functional blocks)
    "../components/widgets/**/*.stories.@(ts|tsx)",
    // Factoring module components
    "../factoring/**/*.stories.@(ts|tsx)",
    // Accessibility & Help
    "../components/accessibility/**/*.stories.@(ts|tsx)",
    "../components/help/**/*.stories.@(ts|tsx)",
    // MDX docs (future)
    "../docs/**/*.mdx",
  ],

  // ── Addons ────────────────────────────────────────────────────
  addons: [
    "@storybook/addon-essentials",   // docs, controls, actions, viewport, backgrounds, toolbars
    "@storybook/addon-a11y",         // accessibility audits per story
    "@storybook/addon-themes",       // light/dark mode toggle in toolbar
    "@storybook/addon-interactions", // play functions & testing
  ],

  // ── Framework: React + Vite ───────────────────────────────────
  framework: {
    name: "@storybook/react-vite",
    options: {},
  },

  // ── Docs: autodocs for all stories with 'autodocs' tag ────────
  docs: {
    autodocs: "tag",
  },

  // ── TypeScript ────────────────────────────────────────────────
  typescript: {
    reactDocgen: "react-docgen-typescript",
    reactDocgenTypescriptOptions: {
      shouldExtractLiteralValuesFromEnum: true,
      shouldRemoveUndefinedFromOptional: true,
      // Filter out node_modules props (Radix, HTML intrinsics)
      propFilter: (prop) =>
        prop.parent
          ? !/node_modules\/(?!@radix-ui)/.test(prop.parent.fileName)
          : true,
    },
  },

  // ── Vite overrides ────────────────────────────────────────────
  async viteFinal(config) {
    return {
      ...config,
      resolve: {
        ...config.resolve,
        alias: {
          ...config.resolve?.alias,
          "@": path.resolve(__dirname, "../"),
        },
      },
    };
  },
};

export default config;
