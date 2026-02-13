import { createContext, useContext, useState, useEffect, ReactNode } from "react";

/**
 * THEME PROVIDER
 * Single-theme provider for CESIONBNK Design System.
 * Manages light/dark mode toggle and runtime CSS custom property injection.
 *
 * Theme: CESIONBNK default (Primary Green #00c951 + Secondary Navy #1C2D3A)
 * No multi-theme presets — the project uses exclusively the default CESIONBNK theme.
 */

interface ThemeConfig {
  // Brand Colors
  primary: string;
  primaryForeground: string;
  secondary: string;
  secondaryForeground: string;

  // Chart Colors
  chart1: string;
  chart2: string;
  chart3: string;
  chart4: string;
  chart5: string;

  // UI Colors
  destructive: string;
  accent: string;
  muted: string;

  // Link Colors
  link: string;
  linkHover: string;
  linkVisited: string;

  // Additional UI Elements
  success: string;
  warning: string;
  info: string;

  // Focus/Selection
  focusRing: string;
  selection: string;

  // Input Colors
  inputBackgroundLight: string;
  inputBackgroundDark: string;
  inputBorderLight: string;
  inputBorderDark: string;
  inputBorderWidth: string;

  // Layout
  radius: string;

  // Typography
  fontSize: string;
  fontWeightLight: string;
  fontWeightNormal: string;
  fontWeightMedium: string;
  fontWeightSemibold: string;
  fontWeightBold: string;

  // Branding
  logoUrl?: string;
}

interface ThemeContextType {
  config: ThemeConfig;
  theme: "light" | "dark";
  updateConfig: (updates: Partial<ThemeConfig>) => void;
  resetToDefaults: () => void;
  exportConfig: () => string;
  importConfig: (jsonString: string) => void;
  toggleTheme: () => void;
}

const defaultConfig: ThemeConfig = {
  primary: "#00c951",
  primaryForeground: "#ffffff",
  secondary: "#1C2D3A",
  secondaryForeground: "#ffffff",
  chart1: "#FF6B6B",
  chart2: "#4ECDC4",
  chart3: "#45B7D1",
  chart4: "#FFA07A",
  chart5: "#98D8C8",
  destructive: "#ef4444",
  accent: "#f4f4f5",
  muted: "#f4f4f5",
  link: "#0E7490",
  linkHover: "#00c951",
  linkVisited: "#164E63",
  success: "#22C55E",
  warning: "#F59E0B",
  info: "#06B6D4",
  focusRing: "#00c951",
  selection: "#00c951",
  inputBackgroundLight: "#ffffff",
  inputBackgroundDark: "#334155",
  inputBorderLight: "#e4e4e7",
  inputBorderDark: "#334155",
  inputBorderWidth: "1px",
  radius: "0.625rem",
  fontSize: "16px",
  fontWeightLight: "300",
  fontWeightNormal: "400",
  fontWeightMedium: "500",
  fontWeightSemibold: "600",
  fontWeightBold: "700",
  logoUrl: "",
};

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [config, setConfig] = useState<ThemeConfig>(() => {
    const saved = localStorage.getItem("theme-config");
    if (saved) {
      const parsed = JSON.parse(saved);
      // Migration: update old default colors to current green
      if (parsed.primary === "#DEFB49" || parsed.primary === "#84CC16") {
        return {
          ...parsed,
          primary: "#00c951",
          primaryForeground: "#ffffff",
          focusRing: "#00c951",
          selection: "#00c951",
          linkHover: "#00c951",
        };
      }
      if (parsed.primary === "#00c951" && parsed.primaryForeground !== "#ffffff") {
        return { ...parsed, primaryForeground: "#ffffff" };
      }
      return parsed;
    }
    return defaultConfig;
  });

  const [theme, setTheme] = useState<"light" | "dark">(() => {
    const savedTheme = localStorage.getItem("theme");
    return savedTheme ? (savedTheme as "light" | "dark") : "light";
  });

  // Clean up any leftover style-theme data from previous versions
  useEffect(() => {
    localStorage.removeItem("style-theme");
    document.documentElement.removeAttribute("data-theme");
  }, []);

  useEffect(() => {
    localStorage.setItem("theme-config", JSON.stringify(config));
    applyThemeToDOM(config, theme);
  }, [config]);

  useEffect(() => {
    localStorage.setItem("theme", theme);
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
    applyThemeToDOM(config, theme);
  }, [theme, config]);

  /**
   * applyThemeToDOM - Sets CSS custom properties on <html>.
   *
   * Mode-independent properties are always set inline.
   * Mode-dependent properties are set only in light mode;
   * in dark mode they are removed so CSS .dark {} values take effect.
   */
  const applyThemeToDOM = (themeConfig: ThemeConfig, currentTheme: "light" | "dark") => {
    const root = document.documentElement;

    // Mode-independent: safe to always set inline
    root.style.setProperty("--primary", themeConfig.primary);
    root.style.setProperty("--primary-foreground", themeConfig.primaryForeground);
    root.style.setProperty("--font-size", themeConfig.fontSize);
    root.style.setProperty("--font-weight-light", themeConfig.fontWeightLight);
    root.style.setProperty("--font-weight-normal", themeConfig.fontWeightNormal);
    root.style.setProperty("--font-weight-medium", themeConfig.fontWeightMedium);
    root.style.setProperty("--font-weight-semibold", themeConfig.fontWeightSemibold);
    root.style.setProperty("--font-weight-bold", themeConfig.fontWeightBold);
    root.style.setProperty("--ring", themeConfig.focusRing);
    root.style.setProperty("--radius", themeConfig.radius);

    // Input SOURCE variables
    root.style.setProperty("--input-background-light", themeConfig.inputBackgroundLight);
    root.style.setProperty("--input-background-dark", themeConfig.inputBackgroundDark);
    root.style.setProperty("--input-border-light", themeConfig.inputBorderLight);
    root.style.setProperty("--input-border-dark", themeConfig.inputBorderDark);
    root.style.setProperty("--input-border-width", themeConfig.inputBorderWidth);

    // Mode-dependent: set in light, REMOVE in dark so CSS .dark {} values take effect
    const modeDependentProps = [
      ["--secondary", themeConfig.secondary],
      ["--secondary-foreground", themeConfig.secondaryForeground],
      ["--destructive", themeConfig.destructive],
      ["--accent", themeConfig.accent],
      ["--muted", themeConfig.muted],
      ["--chart-1", themeConfig.chart1],
      ["--chart-2", themeConfig.chart2],
      ["--chart-3", themeConfig.chart3],
      ["--chart-4", themeConfig.chart4],
      ["--chart-5", themeConfig.chart5],
      ["--success", themeConfig.success],
      ["--warning", themeConfig.warning],
      ["--info", themeConfig.info],
      ["--link", themeConfig.link],
      ["--link-hover", themeConfig.linkHover],
      ["--link-visited", themeConfig.linkVisited],
      ["--focus-ring", themeConfig.focusRing],
      ["--selection", themeConfig.selection],
    ] as const;

    if (currentTheme === "light") {
      for (const [prop, value] of modeDependentProps) {
        root.style.setProperty(prop, value);
      }
    } else {
      for (const [prop] of modeDependentProps) {
        root.style.removeProperty(prop);
      }
    }
  };

  const updateConfig = (updates: Partial<ThemeConfig>) => {
    setConfig((prev) => ({ ...prev, ...updates }));
  };

  const resetToDefaults = () => {
    setConfig(defaultConfig);
  };

  const exportConfig = () => {
    return JSON.stringify(config, null, 2);
  };

  const importConfig = (jsonString: string) => {
    try {
      const imported = JSON.parse(jsonString);
      setConfig(imported);
    } catch (error) {
      console.error("Invalid JSON configuration", error);
    }
  };

  const toggleTheme = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  };

  return (
    <ThemeContext.Provider
      value={{
        config,
        theme,
        updateConfig,
        resetToDefaults,
        exportConfig,
        importConfig,
        toggleTheme,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useTheme must be used within ThemeProvider");
  }
  return context;
}
