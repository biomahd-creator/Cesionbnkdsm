import { createContext, useContext, useState, useEffect, useCallback, ReactNode } from "react";

/**
 * THEME PROVIDER — Multi-tenant + Dark Mode  v2.0.0
 *
 * Two axes:
 *   1. Tenant (brand): default | c-financia | eurocapital | iris | lulo-empresas
 *   2. Color mode: light | dark
 *
 * Mechanism (v2.0.0 — pure CSS):
 *   - Sets data-theme="<tenant-id>" on <html> (or removes it for "default")
 *   - Toggles .dark class on <html> for dark mode
 *   - Token values live in /styles/themes/*.css using [data-theme] selectors
 *   - No more style.setProperty() — pure CSS cascade handles everything
 *
 * CSS Specificity:
 *   :root (CESIONBNK default) < html[data-theme="x"] (tenant override)
 *   .dark (CESIONBNK dark)    < html[data-theme="x"].dark (tenant dark)
 */

/* ── Types ── */

export type TenantId = "default" | "c-financia" | "eurocapital" | "iris" | "lulo-empresas";
export type ColorMode = "light" | "dark";

export interface TenantInfo {
  id:        TenantId;
  name:      string;
  primary:   string;
  secondary: string;
  font:      string;
}

/* ── Tenant registry ── */

export const TENANTS: TenantInfo[] = [
  { id: "default",        name: "CESIONBNK",      primary: "#374151", secondary: "#52525b",  font: "Gotham" },
  { id: "c-financia",     name: "C-Financia",     primary: "#22c55e", secondary: "#0f172a",  font: "Satoshi" },
  { id: "eurocapital",    name: "Eurocapital",    primary: "#1A7FD9", secondary: "#9FB3BC",  font: "Montserrat" },
  { id: "iris",           name: "IRIS",           primary: "#00B388", secondary: "#004646",  font: "System" },
  { id: "lulo-empresas",  name: "Lulo Empresas",  primary: "#00C4FF", secondary: "#1C2A49",  font: "Poppins" },
];

/* ── Context ── */

interface ThemeContextType {
  tenant:          TenantId;
  setTenant:       (id: TenantId) => void;
  tenants:         TenantInfo[];
  colorMode:       ColorMode;
  toggleColorMode: () => void;
  /** Aliases for backward compat */
  theme:           ColorMode;
  toggleTheme:     () => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

/* ── Provider ── */

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [tenant, setTenantState] = useState<TenantId>(() => {
    const saved = localStorage.getItem("tenant");
    if (saved && TENANTS.some((t) => t.id === saved)) return saved as TenantId;
    return "default";
  });

  const [colorMode, setColorMode] = useState<ColorMode>(() => {
    const saved = localStorage.getItem("theme");
    return saved === "dark" ? "dark" : "light";
  });

  /* ── Persist tenant ── */
  const setTenant = useCallback((id: TenantId) => {
    localStorage.setItem("tenant", id);
    setTenantState(id);
  }, []);

  /* ── Sync color mode → <html class="dark"> ── */
  useEffect(() => {
    localStorage.setItem("theme", colorMode);
    document.documentElement.classList.toggle("dark", colorMode === "dark");
  }, [colorMode]);

  /* ── Sync tenant → <html data-theme="..."> ── */
  useEffect(() => {
    const root = document.documentElement;
    if (tenant === "default") {
      root.removeAttribute("data-theme");
    } else {
      root.setAttribute("data-theme", tenant);
    }
  }, [tenant]);

  const toggleColorMode = useCallback(() =>
    setColorMode((prev) => (prev === "light" ? "dark" : "light")),
  []);

  return (
    <ThemeContext.Provider
      value={{
        tenant,
        setTenant,
        tenants:         TENANTS,
        colorMode,
        toggleColorMode,
        theme:           colorMode,
        toggleTheme:     toggleColorMode,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
}

/* ── Hook ── */

export function useTheme() {
  const context = useContext(ThemeContext);
  if (!context) throw new Error("useTheme must be used within ThemeProvider");
  return context;
}
