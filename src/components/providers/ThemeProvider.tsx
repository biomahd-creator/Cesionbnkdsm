import { createContext, useContext, useState, useEffect, ReactNode } from "react";

/**
 * THEME PROVIDER — Multi-Tenant + Dark Mode
 *
 * Manages two orthogonal axes:
 *   1. Tenant (brand):  data-theme attribute on <html>  → drives CSS overrides from themes.css
 *   2. Color mode:      .dark class on <html>           → drives light/dark tokens from globals.css
 *
 * No style.setProperty() — all theming is pure CSS cascade.
 *
 * @version 0.5.0
 */

/* ── Tenant definitions ── */

export type TenantId = "default" | "c-financia" | "eurocapital" | "iris" | "lulo-empresas";
export type ColorMode = "light" | "dark";

export interface TenantInfo {
  id: TenantId;
  name: string;
  primary: string;
  secondary: string;
  font: string;
}

export const TENANTS: TenantInfo[] = [
  { id: "default",        name: "CESIONBNK",      primary: "#374151", secondary: "#52525b",  font: "Inter" },
  { id: "c-financia",     name: "C-Financia",     primary: "#00C951", secondary: "#1C2D3A",  font: "Satoshi" },
  { id: "eurocapital",    name: "Eurocapital",    primary: "#1A7FD9", secondary: "#9FB3BC",  font: "Montserrat" },
  { id: "iris",           name: "IRIS",           primary: "#00B388", secondary: "#004646",  font: "System sans-serif" },
  { id: "lulo-empresas",  name: "Lulo Empresas",  primary: "#00C4FF", secondary: "#1C2A49",  font: "Poppins" },
];

/* ── Context type ── */

interface ThemeContextType {
  /** Current tenant brand */
  tenant: TenantId;
  /** Switch tenant */
  setTenant: (id: TenantId) => void;
  /** Available tenants registry */
  tenants: TenantInfo[];

  /** Current color mode — backward compat alias */
  theme: ColorMode;
  /** Toggle light ↔ dark — backward compat alias */
  toggleTheme: () => void;

  /** Color mode (canonical name) */
  colorMode: ColorMode;
  /** Toggle color mode (canonical name) */
  toggleColorMode: () => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

/* ── Provider ── */

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [tenant, setTenantState] = useState<TenantId>(() => {
    const saved = localStorage.getItem("tenant");
    return (saved as TenantId) || "default";
  });

  const [colorMode, setColorMode] = useState<ColorMode>(() => {
    const saved = localStorage.getItem("theme");
    return saved === "dark" ? "dark" : "light";
  });

  /* ── Sync tenant → <html data-theme> ── */
  useEffect(() => {
    localStorage.setItem("tenant", tenant);
    const root = document.documentElement;

    if (tenant === "default") {
      root.removeAttribute("data-theme");
    } else {
      root.setAttribute("data-theme", tenant);
    }
  }, [tenant]);

  /* ── Sync color mode → <html class="dark"> ── */
  useEffect(() => {
    localStorage.setItem("theme", colorMode);
    const root = document.documentElement;

    if (colorMode === "dark") {
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
    }
  }, [colorMode]);

  /* ── Clean up legacy keys from old ThemeProvider ── */
  useEffect(() => {
    localStorage.removeItem("theme-config");
    localStorage.removeItem("style-theme");
  }, []);

  const setTenant = (id: TenantId) => {
    setTenantState(id);
  };

  const toggleColorMode = () => {
    setColorMode((prev) => (prev === "light" ? "dark" : "light"));
  };

  return (
    <ThemeContext.Provider
      value={{
        tenant,
        setTenant,
        tenants: TENANTS,
        theme: colorMode,
        toggleTheme: toggleColorMode,
        colorMode,
        toggleColorMode,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
}

/* ── Hook ── */

export function useTheme() {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useTheme must be used within ThemeProvider");
  }
  return context;
}