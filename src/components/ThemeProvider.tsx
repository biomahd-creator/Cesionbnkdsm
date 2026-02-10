import { createContext, useContext, useState, useEffect, ReactNode } from "react";

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
  styleTheme: string;
  availableStyleThemes: readonly StyleThemeOption[];
  updateConfig: (updates: Partial<ThemeConfig>) => void;
  resetToDefaults: () => void;
  exportConfig: () => string;
  importConfig: (jsonString: string) => void;
  applyPreset: (preset: string) => void;
  toggleTheme: () => void;
  setStyleTheme: (themeId: string) => void;
}

/**
 * Style Theme metadata — cada entrada corresponde a un CSS file
 * en /styles/themes/. Eliminar un tema = borrar su CSS + quitar de aquí.
 */
export interface StyleThemeOption {
  id: string;
  name: string;
  description: string;
  icon: string; // emoji for simple UI
}

export const STYLE_THEMES: readonly StyleThemeOption[] = [
  {
    id: "default",
    name: "CESIONBNK",
    description: "Look original: Green + Dark Blue, bancario profesional",
    icon: "🏦",
  },
  {
    id: "premium",
    name: "Premium",
    description: "Inspirado en Linear/Vercel: zinc neutrals, bordes sutiles",
    icon: "✨",
  },
  {
    id: "glass",
    name: "Glass",
    description: "Glassmorphism: blur, transparencias, bordes luminosos",
    icon: "🪟",
  },
  {
    id: "minimal",
    name: "Minimal",
    description: "Ultra limpio: stone neutrals, casi sin bordes, flat",
    icon: "◻️",
  },
  {
    id: "tailwindpro",
    name: "Tailwind Pro",
    description: "Tailwind UI: slate neutrals, bordes crisp, ring focus, SaaS dashboard",
    icon: "🎨",
  },
  {
    id: "heroui",
    name: "Hero UI Pro",
    description: "HeroUI/NextUI: corners generosos, sombras soft, moderno premium",
    icon: "🚀",
  },
  {
    id: "soft",
    name: "Soft",
    description: "Pastel y acogedor: warm tones, super rounded, amigable",
    icon: "🌸",
  },
  {
    id: "highcontrast",
    name: "High Contrast",
    description: "WCAG AAA: contraste máximo, bordes gruesos, accesibilidad extrema",
    icon: "♿",
  },
] as const;

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

const presets = {
  default: defaultConfig,
  ocean: {
    ...defaultConfig,
    primary: "#06B6D4",
    secondary: "#0E7490",
    chart1: "#06B6D4",
    chart2: "#0891B2",
    chart3: "#0E7490",
    chart4: "#155E75",
    chart5: "#164E63",
  },
  sunset: {
    ...defaultConfig,
    primary: "#F59E0B",
    secondary: "#DC2626",
    chart1: "#F59E0B",
    chart2: "#EF4444",
    chart3: "#DC2626",
    chart4: "#FB923C",
    chart5: "#FBBF24",
  },
  forest: {
    ...defaultConfig,
    primary: "#84CC16",
    secondary: "#15803D",
    chart1: "#84CC16",
    chart2: "#22C55E",
    chart3: "#16A34A",
    chart4: "#15803D",
    chart5: "#65A30D",
  },
  purple: {
    ...defaultConfig,
    primary: "#A855F7",
    secondary: "#7C3AED",
    chart1: "#A855F7",
    chart2: "#9333EA",
    chart3: "#7C3AED",
    chart4: "#6D28D9",
    chart5: "#C084FC",
  },
};

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [config, setConfig] = useState<ThemeConfig>(() => {
    const saved = localStorage.getItem("theme-config");
    // If saved config exists, merge it with defaultConfig to ensure new defaults (like primary color) take effect if not explicitly overridden by user previous choices,
    // OR just use defaultConfig if we want to force the update.
    // Given the user wants the new default to be active immediately even if they visited before, we should be careful.
    // However, usually "saved" implies user preference.
    // If we want to FORCE the new default on everyone, we can ignore saved.
    // But better: check if the saved primary is the OLD default (#DEFB49) and if so, migrate it to new default.
    
    if (saved) {
      const parsed = JSON.parse(saved);
      // Migration logic: If user has the old yellow or old green as primary, update to new green
      if (parsed.primary === "#DEFB49" || parsed.primary === "#84CC16") {
        return {
          ...parsed,
          primary: "#00c951",
          primaryForeground: "#ffffff",
          focusRing: "#00c951",
          selection: "#00c951",
          linkHover: "#00c951"
        };
      }
      
      // Ensure contrast is correct if user already has the correct green but wrong foreground
      if (parsed.primary === "#00c951" && parsed.primaryForeground !== "#ffffff") {
        return {
          ...parsed,
          primaryForeground: "#ffffff"
        };
      }
      return parsed;
    }
    return defaultConfig;
  });

  const [theme, setTheme] = useState<"light" | "dark">(() => {
    const savedTheme = localStorage.getItem("theme");
    return savedTheme ? (savedTheme as "light" | "dark") : "light";
  });

  /**
   * Style Theme — controla el data-theme attribute en <html>.
   * "default" = sin atributo (globals.css original, punto de restauración).
   * Otros valores activan los CSS files en /styles/themes/.
   */
  const [styleTheme, setStyleThemeState] = useState<string>(() => {
    return localStorage.getItem("style-theme") || "default";
  });

  // Apply style theme to DOM
  useEffect(() => {
    const root = document.documentElement;
    if (styleTheme === "default") {
      root.removeAttribute("data-theme");
    } else {
      root.setAttribute("data-theme", styleTheme);
    }
    localStorage.setItem("style-theme", styleTheme);
    // Re-apply inline styles after data-theme attribute changes,
    // so applyThemeToDOM sees the correct isStyled value
    applyThemeToDOM(config, theme);
  }, [styleTheme]);

  useEffect(() => {
    localStorage.setItem("theme-config", JSON.stringify(config));
    applyThemeToDOM(config, theme);
  }, [config]);

  useEffect(() => {
    localStorage.setItem("theme", theme);
    
    // Apply dark class to document root FIRST so CSS .dark {} is active
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
    
    // Then apply inline properties (dark-mode-aware)
    applyThemeToDOM(config, theme);
  }, [theme, config]);

  /**
   * applyThemeToDOM — Sets CSS custom properties on <html>.
   *
   * CRITICAL: root.style.setProperty() creates INLINE STYLES on <html>,
   * which have the highest CSS specificity and override EVERYTHING —
   * including .dark {} rules in the stylesheet.
   *
   * Therefore, properties that change between light/dark mode must be
   * REMOVED from inline styles in dark mode so the CSS .dark {} values
   * take effect via normal cascade.
   *
   * Mode-independent properties (--primary, --radius, font weights, etc.)
   * are safe to always set inline because they're the same in both modes.
   */
  const applyThemeToDOM = (themeConfig: ThemeConfig, currentTheme: "light" | "dark") => {
    const root = document.documentElement;

    // When a non-default style theme is active, only apply --primary, --ring,
    // --font-size, font-weights, and input source vars inline.
    // All other tokens come from the theme CSS file via cascade.
    const isStyled = styleTheme !== "default";

    // ── Mode-independent: safe to always set inline ──
    root.style.setProperty("--primary", themeConfig.primary);
    root.style.setProperty("--primary-foreground", themeConfig.primaryForeground);
    root.style.setProperty("--font-size", themeConfig.fontSize);
    root.style.setProperty("--font-weight-light", themeConfig.fontWeightLight);
    root.style.setProperty("--font-weight-normal", themeConfig.fontWeightNormal);
    root.style.setProperty("--font-weight-medium", themeConfig.fontWeightMedium);
    root.style.setProperty("--font-weight-semibold", themeConfig.fontWeightSemibold);
    root.style.setProperty("--font-weight-bold", themeConfig.fontWeightBold);
    root.style.setProperty("--ring", themeConfig.focusRing);

    // Radius: only set inline if default theme (styled themes control it via CSS)
    if (!isStyled) {
      root.style.setProperty("--radius", themeConfig.radius);
    } else {
      root.style.removeProperty("--radius");
    }

    // Input SOURCE variables (CSS uses these with var() to derive actual values)
    root.style.setProperty("--input-background-light", themeConfig.inputBackgroundLight);
    root.style.setProperty("--input-background-dark", themeConfig.inputBackgroundDark);
    root.style.setProperty("--input-border-light", themeConfig.inputBorderLight);
    root.style.setProperty("--input-border-dark", themeConfig.inputBorderDark);
    root.style.setProperty("--input-border-width", themeConfig.inputBorderWidth);

    // ── Mode-dependent: set in light, REMOVE in dark ──
    // These properties have different values in .dark {} (globals.css).
    // Inline styles would override .dark {}, breaking dark mode.
    // When a style theme is active, ALSO remove in light mode so CSS cascade wins.
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

    if (currentTheme === "light" && !isStyled) {
      // Light mode + default theme: set inline (overrides :root CSS defaults for customization)
      for (const [prop, value] of modeDependentProps) {
        root.style.setProperty(prop, value);
      }
    } else {
      // Dark mode OR styled theme: REMOVE inline so CSS cascade takes effect
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

  const applyPreset = (preset: string) => {
    const presetConfig = presets[preset as keyof typeof presets];
    if (presetConfig) {
      setConfig(presetConfig);
    }
  };

  const setStyleTheme = (themeId: string) => {
    setStyleThemeState(themeId);
  };

  const toggleTheme = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  };

  return (
    <ThemeContext.Provider
      value={{
        config,
        theme,
        styleTheme,
        availableStyleThemes: STYLE_THEMES,
        updateConfig,
        resetToDefaults,
        exportConfig,
        importConfig,
        applyPreset,
        toggleTheme,
        setStyleTheme,
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