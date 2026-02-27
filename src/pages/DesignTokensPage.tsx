/**
 * DesignTokensPage
 * ─────────────────
 * Token Reference — Single source of truth visual.
 * Displays every CSS custom property with its LIVE rendered value,
 * CSS var name, Tailwind class. Values update dynamically when the
 * active tenant or color mode changes.
 *
 * Sections: Colors · Typography · Shape · Shadows · Animations · Utilities
 *
 * @version 2.0.0 — Tenant-aware: reads live computed values via getComputedStyle
 */
import { useState, useEffect, useMemo } from "react";
import { toast } from "sonner@2.0.3";
import { Copy, Check, Sun, Moon, Palette, Monitor } from "lucide-react";
import { Badge } from "../components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../components/ui/tabs";
import { Separator } from "../components/ui/separator";
import { Card, CardContent } from "../components/ui/card";
import { Button } from "../components/ui/button";
import { useTheme, TENANTS, type TenantId } from "../components/providers/ThemeProvider";
import { copyToClipboard } from "../lib/utils";

// ─────────────────────────────────────────────
// COPY HELPER
// ─────────────────────────────────────────────
function useCopy() {
  const [copied, setCopied] = useState<string | null>(null);
  const copy = (text: string) => {
    copyToClipboard(text).then(() => {
      setCopied(text);
      toast.success("Copied!", { description: text, duration: 1500 });
      setTimeout(() => setCopied(null), 1500);
    });
  };
  return { copy, copied };
}

// ─────────────────────────────────────────────
// LIVE TOKEN READER
// ─────────────────────────────────────────────
/**
 * Reads all CSS custom properties from :root at runtime.
 * Re-reads whenever tenant or colorMode changes.
 */
function useLiveTokens(cssVars: string[]) {
  const { tenant, colorMode } = useTheme();
  const [values, setValues] = useState<Record<string, string>>({});

  useEffect(() => {
    // Small delay to let CSS cascade settle after theme/mode switch
    const raf = requestAnimationFrame(() => {
      const computed = getComputedStyle(document.documentElement);
      const result: Record<string, string> = {};
      for (const v of cssVars) {
        result[v] = computed.getPropertyValue(v).trim();
      }
      setValues(result);
    });
    return () => cancelAnimationFrame(raf);
  }, [tenant, colorMode, cssVars.join(",")]);

  return values;
}

/**
 * Attempts to normalize a CSS color value to hex.
 * Falls back to the raw string if conversion isn't possible.
 */
function toHex(raw: string): string {
  if (!raw) return "";
  // Already hex
  if (raw.startsWith("#")) return raw;
  // oklch / rgb — try canvas conversion
  try {
    const ctx = document.createElement("canvas").getContext("2d");
    if (ctx) {
      ctx.fillStyle = raw;
      const result = ctx.fillStyle;
      if (result.startsWith("#")) return result;
    }
  } catch {
    // ignore
  }
  return raw;
}

// ─────────────────────────────────────────────
// TENANT FONT HELPER
// ─────────────────────────────────────────────
const TENANT_FONTS: Record<TenantId, { name: string; source: string; weights: string }> = {
  default:        { name: "Gotham",     source: "jsDelivr CDN",   weights: "300–700" },
  "c-financia":   { name: "Satoshi",    source: "Fontshare",      weights: "300–700" },
  eurocapital:    { name: "Montserrat", source: "Google Fonts",   weights: "300–700" },
  iris:           { name: "System UI",  source: "OS built-in",    weights: "300–700" },
  "lulo-empresas":{ name: "Poppins",    source: "Google Fonts",   weights: "300–700" },
};

// ─────────────────────────────────────────────
// TOKEN DATA
// ─────────────────────────────────────────────
interface ColorToken {
  name: string;
  cssVar: string;
  twBg?: string;
  twText?: string;
  twBorder?: string;
  fgVar?: string; // optional foreground CSS var for "Aa" preview
}

interface ColorGroup {
  title: string;
  description: string;
  tokens: ColorToken[];
}

const colorGroups: ColorGroup[] = [
  {
    title: "Brand",
    description: "Core identity colors — adapts to the active tenant.",
    tokens: [
      { name: "primary", cssVar: "--primary", twBg: "bg-primary", twText: "text-primary", fgVar: "--primary-foreground" },
      { name: "primary-foreground", cssVar: "--primary-foreground", twText: "text-primary-foreground" },
      { name: "secondary", cssVar: "--secondary", twBg: "bg-secondary", twText: "text-secondary", fgVar: "--secondary-foreground" },
      { name: "secondary-foreground", cssVar: "--secondary-foreground", twText: "text-secondary-foreground" },
    ],
  },
  {
    title: "Surfaces",
    description: "Background and card surfaces for page and component layers.",
    tokens: [
      { name: "background", cssVar: "--background", twBg: "bg-background" },
      { name: "foreground", cssVar: "--foreground", twText: "text-foreground" },
      { name: "card", cssVar: "--card", twBg: "bg-card", fgVar: "--card-foreground" },
      { name: "card-foreground", cssVar: "--card-foreground", twText: "text-card-foreground" },
      { name: "popover", cssVar: "--popover", twBg: "bg-popover", fgVar: "--popover-foreground" },
      { name: "popover-foreground", cssVar: "--popover-foreground", twText: "text-popover-foreground" },
      { name: "muted", cssVar: "--muted", twBg: "bg-muted", fgVar: "--muted-foreground" },
      { name: "muted-foreground", cssVar: "--muted-foreground", twText: "text-muted-foreground" },
      { name: "accent", cssVar: "--accent", twBg: "bg-accent", fgVar: "--accent-foreground" },
      { name: "accent-foreground", cssVar: "--accent-foreground", twText: "text-accent-foreground" },
    ],
  },
  {
    title: "Semantic",
    description: "Status and feedback signals — destructive, success, warning, info.",
    tokens: [
      { name: "destructive", cssVar: "--destructive", twBg: "bg-destructive", fgVar: "--destructive-foreground" },
      { name: "destructive-foreground", cssVar: "--destructive-foreground", twText: "text-destructive-foreground" },
      { name: "success", cssVar: "--success", twBg: "bg-success", fgVar: "--success-foreground" },
      { name: "success-foreground", cssVar: "--success-foreground", twText: "text-success-foreground" },
      { name: "warning", cssVar: "--warning", twBg: "bg-warning", fgVar: "--warning-foreground" },
      { name: "warning-foreground", cssVar: "--warning-foreground", twText: "text-warning-foreground" },
      { name: "info", cssVar: "--info", twBg: "bg-info", fgVar: "--info-foreground" },
      { name: "info-foreground", cssVar: "--info-foreground", twText: "text-info-foreground" },
    ],
  },
  {
    title: "Forms",
    description: "Input, border and ring colors for form controls.",
    tokens: [
      { name: "border", cssVar: "--border", twBorder: "border-border" },
      { name: "input", cssVar: "--input", twBorder: "border-input" },
      { name: "input-background", cssVar: "--input-background", twBg: "bg-input-background" },
      { name: "switch-background", cssVar: "--switch-background", twBg: "bg-switch-background" },
      { name: "ring", cssVar: "--ring" },
    ],
  },
  {
    title: "Sidebar",
    description: "Navigation sidebar layer tokens.",
    tokens: [
      { name: "sidebar", cssVar: "--sidebar", twBg: "bg-sidebar", fgVar: "--sidebar-foreground" },
      { name: "sidebar-foreground", cssVar: "--sidebar-foreground", twText: "text-sidebar-foreground" },
      { name: "sidebar-primary", cssVar: "--sidebar-primary", twBg: "bg-sidebar-primary", fgVar: "--sidebar-primary-foreground" },
      { name: "sidebar-primary-foreground", cssVar: "--sidebar-primary-foreground", twText: "text-sidebar-primary-foreground" },
      { name: "sidebar-accent", cssVar: "--sidebar-accent", twBg: "bg-sidebar-accent", fgVar: "--sidebar-accent-foreground" },
      { name: "sidebar-accent-foreground", cssVar: "--sidebar-accent-foreground", twText: "text-sidebar-accent-foreground" },
      { name: "sidebar-border", cssVar: "--sidebar-border", twBorder: "border-sidebar-border" },
      { name: "sidebar-ring", cssVar: "--sidebar-ring" },
    ],
  },
  {
    title: "Charts",
    description: "5-stop data visualization palette. Adapts between light and dark mode.",
    tokens: [
      { name: "chart-1", cssVar: "--chart-1", twBg: "bg-chart-1" },
      { name: "chart-2", cssVar: "--chart-2", twBg: "bg-chart-2" },
      { name: "chart-3", cssVar: "--chart-3", twBg: "bg-chart-3" },
      { name: "chart-4", cssVar: "--chart-4", twBg: "bg-chart-4" },
      { name: "chart-5", cssVar: "--chart-5", twBg: "bg-chart-5" },
    ],
  },
];

// Collect all CSS vars for the live reader
const ALL_COLOR_VARS = colorGroups.flatMap((g) =>
  g.tokens.flatMap((t) => [t.cssVar, ...(t.fgVar ? [t.fgVar] : [])])
);

// KPI colors (tenant-aware CSS vars)
interface KpiToken { name: string; cssVar: string; darkVar: string; bgVar: string; }
const kpiTokens: KpiToken[] = [
  { name: "kpi-yellow", cssVar: "--kpi-yellow", darkVar: "--kpi-yellow-dark", bgVar: "--kpi-yellow-bg" },
  { name: "kpi-orange", cssVar: "--kpi-orange", darkVar: "--kpi-orange-dark", bgVar: "--kpi-orange-bg" },
  { name: "kpi-blue", cssVar: "--kpi-blue", darkVar: "--kpi-blue-dark", bgVar: "--kpi-blue-bg" },
  { name: "kpi-lime", cssVar: "--kpi-lime", darkVar: "--kpi-lime-dark", bgVar: "--kpi-lime-bg" },
];

const KPI_VARS = kpiTokens.flatMap((t) => [t.cssVar, t.darkVar, t.bgVar]);

// Radius tokens
const radiusTokens = [
  { name: "radius-sm", cssVar: "--radius-sm", twClass: "rounded-sm", computed: "calc(var(--radius) - 4px)", px: "~6px" },
  { name: "radius-md", cssVar: "--radius-md", twClass: "rounded-md", computed: "calc(var(--radius) - 2px)", px: "~8px" },
  { name: "radius-lg (base)", cssVar: "--radius", twClass: "rounded-lg", computed: "var(--radius)", px: "10px" },
  { name: "radius-xl", cssVar: "--radius-xl", twClass: "rounded-xl", computed: "calc(var(--radius) + 4px)", px: "~14px" },
  { name: "radius-full", cssVar: "—", twClass: "rounded-full", computed: "9999px", px: "9999px" },
];

// Shadow tokens
const shadowTokens = [
  {
    name: "elevation-1",
    cssVar: "--shadow-elevation-1",
    twClass: "shadow-elevation-1",
    usage: "Subtle. Cards at rest, default state.",
  },
  {
    name: "elevation-2",
    cssVar: "--shadow-elevation-2",
    twClass: "shadow-elevation-2",
    usage: "Dropdowns, popovers, focused cards.",
  },
  {
    name: "elevation-3",
    cssVar: "--shadow-elevation-3",
    twClass: "shadow-elevation-3",
    usage: "Modals, dialogs, hover lifted cards.",
  },
  {
    name: "elevation-4",
    cssVar: "--shadow-elevation-4",
    twClass: "shadow-elevation-4",
    usage: "Sheets, drawers, top-level overlays.",
  },
];

// Animation tokens
const animationTokens = [
  { name: "fade-in", cssClass: "fade-in", duration: "0.3s ease-out", desc: "Fades in + slides up 10px. Entry for panels, cards, alerts." },
  { name: "slide-in-right", cssClass: "slide-in-right", duration: "0.3s ease-out", desc: "Slides in from right (100%). Entry for drawers, sheets." },
  { name: "slide-in-left", cssClass: "slide-in-left", duration: "0.3s ease-out", desc: "Slides in from left (-100%). Entry for sidebars, back transitions." },
  { name: "skeleton-pulse", cssClass: "skeleton-pulse", duration: "1.5s ease-in-out ∞", desc: "Opacity pulse 0.6 → 1 → 0.6. Loading skeleton indicator." },
  { name: "loading-dots", cssClass: "loading-dots", duration: "1.4s ∞", desc: "3-dot staggered opacity cycle. Use with 3 <span> children." },
  { name: "accordion-down", cssClass: "animate-accordion-down", duration: "0.2s ease-out", desc: "Height 0 → content height. Radix Accordion open." },
  { name: "accordion-up", cssClass: "animate-accordion-up", duration: "0.2s ease-out", desc: "Height content → 0. Radix Accordion close." },
];

// Utility classes
const utilityTokens = [
  { name: "hover-lift", cssClass: ".hover-lift", desc: "translateY(-2px) + elevation-3 shadow on :hover. 0.3s cubic.", demo: "Hover me" },
  { name: "hover-scale", cssClass: ".hover-scale", desc: "scale(1.02) on :hover. 0.3s cubic. Subtle zoom effect.", demo: "Hover me" },
  { name: "hover-brightness", cssClass: ".hover-brightness", desc: "brightness(1.1) on :hover. 0.3s cubic. Ideal for images.", demo: "Hover me" },
  { name: "glass-effect", cssClass: ".glass-effect", desc: "70% opaque bg + backdrop-blur(12px) + semi-transparent border.", demo: "Glass" },
  { name: "focus-ring", cssClass: ".focus-ring", desc: "outline-none + focus-visible:ring-2/ring/ring-offset-2.", demo: "Focus me" },
  { name: "focus-ring-inset", cssClass: ".focus-ring-inset", desc: "outline-none + focus-visible:ring-2 ring-inset.", demo: "Focus me" },
  { name: "transition-colors-smooth", cssClass: ".transition-colors-smooth", desc: "color, bg, border 0.3s cubic transition.", demo: "Hover me" },
  { name: "no-scrollbar", cssClass: ".no-scrollbar", desc: "Hides scrollbar on WebKit and Firefox. overflow still works.", demo: "Scroll hidden" },
];

// Typography scale
const typeScale = [
  { tag: "h1", twClass: "text-2xl font-medium", size: "1.5rem / 24px", weight: "500 Medium", lh: "1.5" },
  { tag: "h2", twClass: "text-xl font-medium", size: "1.25rem / 20px", weight: "500 Medium", lh: "1.5" },
  { tag: "h3", twClass: "text-lg font-medium", size: "1.125rem / 18px", weight: "500 Medium", lh: "1.5" },
  { tag: "h4", twClass: "text-base font-medium", size: "1rem / 16px", weight: "500 Medium", lh: "1.5" },
  { tag: "p (body)", twClass: "text-sm", size: "0.875rem / 14px", weight: "400 Regular", lh: "1.5" },
  { tag: "small", twClass: "text-xs", size: "0.75rem / 12px", weight: "400 Regular", lh: "1.5" },
  { tag: "label/button", twClass: "text-base font-medium", size: "1rem / 16px", weight: "500 Medium", lh: "1.5" },
  { tag: "input", twClass: "text-base font-normal", size: "1rem / 16px", weight: "400 Regular", lh: "1.5" },
];

// ─────────────────────────────────────────────
// SUB-COMPONENTS
// ─────────────────────────────────────────────

function CopyButton({ text, className = "" }: { text: string; className?: string }) {
  const { copy, copied } = useCopy();
  return (
    <button
      onClick={() => copy(text)}
      className={`inline-flex items-center gap-1 text-[10px] font-mono text-muted-foreground hover:text-primary transition-colors ${className}`}
    >
      {copied === text ? <Check className="h-3 w-3 text-success" /> : <Copy className="h-3 w-3" />}
      {text}
    </button>
  );
}

/** Color swatch that reads its LIVE computed hex from the DOM */
function ColorSwatch({ token, liveValues }: { token: ColorToken; liveValues: Record<string, string> }) {
  const liveHex = toHex(liveValues[token.cssVar] || "");

  return (
    <div className="flex flex-col gap-2 min-w-0">
      {/* Swatch */}
      <div
        className="h-14 w-full rounded-[10px] border border-border/50 relative overflow-hidden flex items-center justify-center"
        style={{ backgroundColor: `var(${token.cssVar})` }}
      >
        {token.fgVar && (
          <span className="text-xs select-none opacity-70" style={{ color: `var(${token.fgVar})` }}>
            Aa
          </span>
        )}
      </div>

      {/* Meta */}
      <div className="space-y-0.5">
        <p className="text-xs font-medium truncate">{token.name}</p>
        <CopyButton text={token.cssVar} />
        {token.twBg && <CopyButton text={token.twBg} />}
        {token.twText && !token.twBg && <CopyButton text={token.twText} />}
        {token.twBorder && !token.twBg && !token.twText && <CopyButton text={token.twBorder} />}

        {/* Live computed value */}
        {liveHex && (
          <div className="flex items-center gap-1.5 mt-1">
            <Monitor className="h-2.5 w-2.5 text-muted-foreground shrink-0" />
            <CopyButton text={liveHex} />
          </div>
        )}
      </div>
    </div>
  );
}

function SectionHeader({ title, description }: { title: string; description: string }) {
  return (
    <div className="mb-4">
      <h3 className="text-base font-medium">{title}</h3>
      <p className="text-sm text-muted-foreground">{description}</p>
    </div>
  );
}

/** Banner showing active tenant + color mode */
function TenantBanner() {
  const { tenant, colorMode } = useTheme();
  const info = TENANTS.find((t) => t.id === tenant) ?? TENANTS[0];

  return (
    <div className="flex items-center gap-3 px-4 py-2.5 rounded-[10px] border border-primary/20 bg-primary/5">
      <Palette className="h-4 w-4 text-primary shrink-0" />
      <div className="flex items-center gap-2 flex-wrap">
        <span
          className="h-3.5 w-3.5 rounded-full shrink-0 border border-border"
          style={{ backgroundColor: info.primary }}
        />
        <span className="text-sm font-medium">{info.name}</span>
        <Badge variant="outline" className="text-[10px]">{info.font}</Badge>
        <Badge variant="outline" className="text-[10px]">
          {colorMode === "dark" ? <Moon className="h-2.5 w-2.5 mr-1" /> : <Sun className="h-2.5 w-2.5 mr-1" />}
          {colorMode}
        </Badge>
      </div>
      <p className="text-xs text-muted-foreground ml-auto hidden md:block">
        Values shown are live-computed for the active tenant and mode.
      </p>
    </div>
  );
}

// ────────────────────────────────────────────
// TABS CONTENT
// ─────────────────────────────────────────────

function ColorsTab() {
  const { copy } = useCopy();
  const liveValues = useLiveTokens([...ALL_COLOR_VARS, ...KPI_VARS]);

  return (
    <div className="space-y-10">
      {/* Main color groups */}
      {colorGroups.map((group) => (
        <div key={group.title}>
          <SectionHeader title={group.title} description={group.description} />
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4">
            {group.tokens.map((token) => (
              <ColorSwatch key={token.name} token={token} liveValues={liveValues} />
            ))}
          </div>
          <Separator className="mt-8" />
        </div>
      ))}

      {/* KPI Colors */}
      <div>
        <SectionHeader
          title="KPI Colors"
          description="Tenant-aware KPI colors with light/dark mode support. Usage: className='bg-kpi-yellow text-kpi-blue'. Each tenant can override these values."
        />
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          {kpiTokens.map((t) => {
            const liveBase = toHex(liveValues[t.cssVar] || "");
            const liveDark = toHex(liveValues[t.darkVar] || "");
            const liveBg = toHex(liveValues[t.bgVar] || "");
            return (
              <div key={t.name} className="space-y-2">
                <div className="h-14 rounded-[10px] border border-border/50" style={{ backgroundColor: `var(${t.cssVar})` }} />
                <p className="text-xs font-medium">{t.name}</p>
                <button
                  onClick={() => copy(t.cssVar)}
                  className="flex items-center gap-1 text-[10px] font-mono text-muted-foreground hover:text-primary"
                >
                  <Copy className="h-3 w-3" /> {t.cssVar}
                </button>
                <div className="flex gap-2">
                  <span className="flex items-center gap-1 text-[10px] text-muted-foreground">
                    <Monitor className="h-2.5 w-2.5" />{liveBase || "—"}
                  </span>
                  <span className="text-[10px] text-muted-foreground/30">·</span>
                  <span className="flex items-center gap-1 text-[10px] text-muted-foreground">
                    dark: {liveDark || "—"}
                  </span>
                </div>
                <div className="h-6 rounded-md" style={{ backgroundColor: `var(${t.bgVar})` }} />
                <p className="text-[10px] text-muted-foreground font-mono">{t.bgVar} → {liveBg || "—"}</p>
              </div>
            );
          })}
        </div>
        <Separator className="mt-8" />
      </div>

    </div>
  );
}

function TypographyTab() {
  const { copy } = useCopy();
  const { tenant } = useTheme();
  const fontInfo = TENANT_FONTS[tenant] || TENANT_FONTS.default;
  const tenantName = TENANTS.find((t) => t.id === tenant)?.name ?? "CESIONBNK";

  // Read live --font-sans and --letter-spacing-base
  const liveTypo = useLiveTokens(["--font-sans", "--letter-spacing-base", "--radius"]);
  const liveFontSans = liveTypo["--font-sans"] || fontInfo.name;
  const liveLetterSpacing = liveTypo["--letter-spacing-base"] || "0.025em";
  const liveRadius = liveTypo["--radius"] || "0.625rem";

  const weights = [
    { label: "Light", weight: "300", class: "font-light" },
    { label: "Regular", weight: "400", class: "font-normal" },
    { label: "Medium", weight: "500", class: "font-medium" },
    { label: "SemiBold", weight: "600", class: "font-semibold" },
    { label: "Bold", weight: "700", class: "font-bold" },
  ];
  return (
    <div className="space-y-10">
      {/* Font Family */}
      <div>
        <SectionHeader title="Font Family" description={`Active typeface for ${tenantName}. Changes per tenant via --font-sans.`} />
        <Card>
          <CardContent className="p-6 space-y-4">
            <div className="flex items-start justify-between gap-4 flex-wrap">
              <div>
                <p style={{ fontFamily: liveFontSans }} className="text-5xl font-medium tracking-tight">
                  {fontInfo.name}
                </p>
                <p style={{ fontFamily: liveFontSans }} className="text-lg text-muted-foreground mt-1">
                  The quick brown fox jumps over the lazy dog.
                </p>
                <p style={{ fontFamily: liveFontSans }} className="text-sm text-muted-foreground">
                  ABCDEFGHIJKLMNOPQRSTUVWXYZ · abcdefghijklmnopqrstuvwxyz · 0123456789
                </p>
                <p style={{ fontFamily: liveFontSans }} className="text-sm text-muted-foreground">
                  !@#$%^&amp;*()_+-=[]{}|;':",&lt;&gt;?/ · AEIOU Ñ ü (Latin Extended)
                </p>
              </div>
              <div className="space-y-1 text-xs text-muted-foreground">
                <button onClick={() => copy("--font-sans")} className="flex items-center gap-1 hover:text-primary font-mono">
                  <Copy className="h-3 w-3" /> --font-sans
                </button>
                <button onClick={() => copy("font-sans")} className="flex items-center gap-1 hover:text-primary font-mono">
                  <Copy className="h-3 w-3" /> font-sans
                </button>
                <p className="text-[10px]">Source: {fontInfo.source}</p>
                <Badge variant="outline" className="text-[10px]">Weights: {fontInfo.weights}</Badge>
                <Badge variant="outline" className="text-[10px] mt-1">{tenantName}</Badge>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Weights */}
      <div>
        <SectionHeader title="Font Weights" description={`5 weights available for ${fontInfo.name}.`} />
        <div className="grid grid-cols-2 sm:grid-cols-5 gap-3">
          {weights.map((w) => (
            <Card key={w.weight}>
              <CardContent className="p-4 text-center">
                <p style={{ fontFamily: liveFontSans, fontWeight: w.weight }} className="text-2xl mb-2">
                  Aa
                </p>
                <p className="text-xs font-medium">{w.label}</p>
                <p className="text-[10px] text-muted-foreground font-mono">{w.weight}</p>
                <button
                  onClick={() => copy(w.class)}
                  className="flex items-center justify-center gap-1 text-[10px] font-mono text-muted-foreground hover:text-primary mx-auto mt-1"
                >
                  <Copy className="h-3 w-3" /> {w.class}
                </button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Type Scale */}
      <div>
        <SectionHeader title="Type Scale" description="Default scale defined in config.css @layer base. Apply Tailwind text-* classes to override." />
        <div className="rounded-[10px] border overflow-hidden">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b bg-muted/40">
                <th className="text-left px-4 py-2 font-medium text-xs text-muted-foreground">Element</th>
                <th className="text-left px-4 py-2 font-medium text-xs text-muted-foreground">Preview</th>
                <th className="text-left px-4 py-2 font-medium text-xs text-muted-foreground">Size</th>
                <th className="text-left px-4 py-2 font-medium text-xs text-muted-foreground">Weight</th>
                <th className="text-left px-4 py-2 font-medium text-xs text-muted-foreground">Line Height</th>
                <th className="text-left px-4 py-2 font-medium text-xs text-muted-foreground">Class</th>
              </tr>
            </thead>
            <tbody>
              {typeScale.map((row, i) => (
                <tr key={i} className="border-b last:border-0 hover:bg-muted/20">
                  <td className="px-4 py-3">
                    <Badge variant="outline" className="text-[10px] font-mono">{row.tag}</Badge>
                  </td>
                  <td className="px-4 py-3">
                    <span style={{ fontSize: row.size.split(" / ")[0], fontFamily: liveFontSans }} className={row.twClass}>
                      {tenantName}
                    </span>
                  </td>
                  <td className="px-4 py-3 text-xs text-muted-foreground font-mono">{row.size}</td>
                  <td className="px-4 py-3 text-xs text-muted-foreground">{row.weight}</td>
                  <td className="px-4 py-3 text-xs text-muted-foreground">{row.lh}</td>
                  <td className="px-4 py-3">
                    <button
                      onClick={() => copy(row.twClass)}
                      className="flex items-center gap-1 text-[10px] font-mono text-muted-foreground hover:text-primary"
                    >
                      <Copy className="h-3 w-3" />{row.twClass}
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Letter Spacing */}
        <div className="mt-4 p-4 rounded-[10px] border bg-muted/20 flex items-center justify-between flex-wrap gap-3">
          <div>
            <p className="text-sm font-medium">Letter Spacing — Global</p>
            <p className="text-xs text-muted-foreground mt-0.5">
              Applied to all typographic elements via <code className="font-mono bg-muted px-1 rounded">letter-spacing: var(--letter-spacing-base)</code>
            </p>
          </div>
          <div className="text-right space-y-1">
            <button onClick={() => copy("--letter-spacing-base")} className="flex items-center gap-1 text-xs font-mono text-muted-foreground hover:text-primary ml-auto">
              <Copy className="h-3 w-3" /> --letter-spacing-base
            </button>
            <p className="text-xs font-mono text-primary">{liveLetterSpacing}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function ShapeTab() {
  const { copy } = useCopy();
  const liveShape = useLiveTokens(["--radius"]);
  const liveRadius = liveShape["--radius"] || "0.625rem";

  return (
    <div className="space-y-10">
      <div>
        <SectionHeader
          title="Border Radius"
          description={`Base radius is ${liveRadius}. All variants are computed from --radius via calc(). The design rule is: consistent rounding, no sharp corners.`}
        />

        {/* Visual Preview */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4 mb-8">
          {radiusTokens.map((r) => (
            <div key={r.name} className="flex flex-col items-center gap-3">
              <div
                className="h-20 w-20 bg-primary/15 border-2 border-primary/30 flex items-center justify-center"
                style={{ borderRadius: r.cssVar === "—" ? "9999px" : `var(${r.cssVar === "--radius" ? "--radius" : r.cssVar === "--radius-xl" ? "--radius-xl" : r.cssVar})` }}
              >
                <span className="text-xs font-medium text-primary">{r.px}</span>
              </div>
              <div className="text-center space-y-0.5">
                <p className="text-xs font-medium">{r.name}</p>
                {r.cssVar !== "—" && (
                  <button onClick={() => copy(r.cssVar)} className="flex items-center gap-1 text-[10px] font-mono text-muted-foreground hover:text-primary mx-auto">
                    <Copy className="h-3 w-3" />{r.cssVar}
                  </button>
                )}
                <button onClick={() => copy(r.twClass)} className="flex items-center gap-1 text-[10px] font-mono text-muted-foreground hover:text-primary mx-auto">
                  <Copy className="h-3 w-3" />{r.twClass}
                </button>
                <p className="text-[10px] text-muted-foreground font-mono">{r.computed}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Reference Table */}
        <div className="rounded-[10px] border overflow-hidden">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b bg-muted/40">
                {["Token", "CSS Var", "Tailwind", "Value", "Pixels"].map((h) => (
                  <th key={h} className="text-left px-4 py-2 font-medium text-xs text-muted-foreground">{h}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {radiusTokens.map((r, i) => (
                <tr key={i} className="border-b last:border-0 hover:bg-muted/20">
                  <td className="px-4 py-2.5 text-xs font-medium">{r.name}</td>
                  <td className="px-4 py-2.5">
                    {r.cssVar !== "—" ? (
                      <button onClick={() => copy(r.cssVar)} className="flex items-center gap-1 text-[10px] font-mono text-muted-foreground hover:text-primary">
                        <Copy className="h-3 w-3" />{r.cssVar}
                      </button>
                    ) : (
                      <span className="text-[10px] text-muted-foreground">—</span>
                    )}
                  </td>
                  <td className="px-4 py-2.5">
                    <button onClick={() => copy(r.twClass)} className="flex items-center gap-1 text-[10px] font-mono text-muted-foreground hover:text-primary">
                      <Copy className="h-3 w-3" />{r.twClass}
                    </button>
                  </td>
                  <td className="px-4 py-2.5 text-[10px] font-mono text-muted-foreground">{r.computed}</td>
                  <td className="px-4 py-2.5">
                    <Badge variant="outline" className="text-[10px] font-mono">{r.px}</Badge>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

function ShadowsTab() {
  const { copy } = useCopy();
  return (
    <div className="space-y-8">
      <SectionHeader
        title="Elevation & Shadows"
        description="4-level elevation system. Shadows adapt per tenant (foreground-based rgba in light, pure black in dark). CSS var: --shadow-elevation-N"
      />

      {/* Visual Previews */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {shadowTokens.map((s) => (
          <div key={s.name} className="flex flex-col gap-3">
            <div
              className="h-24 rounded-[10px] bg-card flex items-center justify-center"
              style={{ boxShadow: `var(${s.cssVar})` }}
            >
              <p className="text-xs font-medium text-muted-foreground">{s.name}</p>
            </div>
            <div className="space-y-1">
              <p className="text-xs font-medium">{s.name}</p>
              <button onClick={() => copy(s.cssVar)} className="flex items-center gap-1 text-[10px] font-mono text-muted-foreground hover:text-primary">
                <Copy className="h-3 w-3" />{s.cssVar}
              </button>
              <button onClick={() => copy(s.twClass)} className="flex items-center gap-1 text-[10px] font-mono text-primary hover:text-primary/70">
                <Copy className="h-3 w-3" />{s.twClass}
              </button>
              <p className="text-[10px] text-muted-foreground">{s.usage}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Detail Table */}
      <div className="rounded-[10px] border overflow-hidden">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b bg-muted/40">
              {["Token", "CSS Var", "Tailwind class", "Usage"].map((h) => (
                <th key={h} className="text-left px-4 py-2 font-medium text-xs text-muted-foreground">{h}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {shadowTokens.map((s, i) => (
              <tr key={i} className="border-b last:border-0 hover:bg-muted/20">
                <td className="px-4 py-2.5 text-xs font-medium">{s.name}</td>
                <td className="px-4 py-2.5">
                  <button onClick={() => copy(s.cssVar)} className="flex items-center gap-1 text-[10px] font-mono text-muted-foreground hover:text-primary">
                    <Copy className="h-3 w-3" />{s.cssVar}
                  </button>
                </td>
                <td className="px-4 py-2.5">
                  <button onClick={() => copy(s.twClass)} className="flex items-center gap-1 text-[10px] font-mono text-primary hover:text-primary/70">
                    <Copy className="h-3 w-3" />{s.twClass}
                  </button>
                </td>
                <td className="px-4 py-2.5 text-[10px] text-muted-foreground">{s.usage}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Usage note */}
      <div className="p-4 rounded-[10px] bg-muted/30 border text-sm text-muted-foreground space-y-2">
        <p className="font-medium text-foreground">Usage</p>
        <p>
          Via Tailwind class (recommended):{" "}
          <code className="font-mono bg-muted px-1 rounded text-xs">className="shadow-elevation-2"</code>
          {" "}— resolves the correct value automatically for light <em>and</em> dark mode.
        </p>
        <p>
          Via inline style:{" "}
          <code className="font-mono bg-muted px-1 rounded text-xs">style=&#123;&#123; boxShadow: "var(--shadow-elevation-2)" &#125;&#125;</code>
        </p>
        <p>
          Via hover utility:{" "}
          <code className="font-mono bg-muted px-1 rounded text-xs">.hover-lift</code>
          {" "}applies elevation-3 shadow + translateY(-2px) on :hover automatically.
        </p>
      </div>
    </div>
  );
}

function AnimationsTab() {
  const { copy } = useCopy();
  const [playing, setPlaying] = useState<string | null>(null);

  const play = (cls: string) => {
    setPlaying(cls);
    setTimeout(() => setPlaying(null), 1600);
  };

  return (
    <div className="space-y-8">
      <SectionHeader
        title="Animations"
        description="CSS keyframe animations defined in animations.css. Apply as className to any element. Respect prefers-reduced-motion: the system disables all animations automatically."
      />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {animationTokens.map((a) => (
          <Card key={a.name}>
            <CardContent className="p-4">
              <div className="flex items-start justify-between gap-3">
                <div className="flex-1 min-w-0 space-y-1.5">
                  <div className="flex items-center gap-2">
                    <p className="text-sm font-medium">{a.name}</p>
                    <Badge variant="outline" className="text-[10px] font-mono">{a.duration}</Badge>
                  </div>
                  <p className="text-xs text-muted-foreground">{a.desc}</p>
                  <button onClick={() => copy(a.cssClass)} className="flex items-center gap-1 text-[10px] font-mono text-muted-foreground hover:text-primary">
                    <Copy className="h-3 w-3" />{a.cssClass}
                  </button>
                </div>

                {/* Demo box */}
                <div className="flex flex-col items-center gap-2 shrink-0">
                  <div
                    key={playing === a.cssClass ? `play-${Date.now()}` : a.cssClass}
                    className={`h-10 w-10 rounded-[10px] bg-primary/20 border border-primary/30 flex items-center justify-center ${
                      playing === a.cssClass ? a.cssClass : ""
                    }`}
                  >
                    <div className="h-4 w-4 rounded-sm bg-primary" />
                  </div>
                  <Button
                    variant="ghost"
                    size="sm"
                    className="h-6 px-2 text-[10px]"
                    onClick={() => play(a.cssClass)}
                  >
                    Play
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Reduced motion note */}
      <div className="p-4 rounded-[10px] bg-muted/30 border text-sm space-y-1">
        <p className="font-medium">prefers-reduced-motion</p>
        <p className="text-muted-foreground text-xs">
          All animations, transitions, and hover transforms are disabled with <code className="font-mono bg-muted px-1 rounded">duration: 0.01ms</code> when the user has reduced motion enabled in their OS. No extra configuration needed.
        </p>
      </div>
    </div>
  );
}

function UtilitiesTab() {
  const { copy } = useCopy();
  return (
    <div className="space-y-8">
      <SectionHeader
        title="Utility Classes"
        description="Custom utilities defined in config.css @layer utilities. Add these classes directly in JSX className. They complement Tailwind's built-in utilities."
      />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {utilityTokens.map((u) => (
          <Card key={u.name}>
            <CardContent className="p-4">
              <div className="flex items-start justify-between gap-3">
                <div className="flex-1 space-y-1.5">
                  <p className="text-sm font-medium">{u.name}</p>
                  <p className="text-xs text-muted-foreground">{u.desc}</p>
                  <button onClick={() => copy(u.cssClass)} className="flex items-center gap-1 text-[10px] font-mono text-muted-foreground hover:text-primary">
                    <Copy className="h-3 w-3" />{u.cssClass}
                  </button>
                </div>
                {/* Live demo */}
                <div className="shrink-0">
                  <div
                    className={`h-10 px-3 rounded-[10px] border border-border bg-card text-xs flex items-center justify-center cursor-pointer select-none ${
                      u.cssClass === ".hover-lift" ? "hover-lift" :
                      u.cssClass === ".hover-scale" ? "hover-scale" :
                      u.cssClass === ".hover-brightness" ? "hover-brightness bg-primary text-primary-foreground" :
                      u.cssClass === ".glass-effect" ? "glass-effect" :
                      u.cssClass === ".transition-colors-smooth" ? "transition-colors-smooth hover:bg-primary hover:text-primary-foreground" :
                      u.cssClass === ".focus-ring" ? "focus-ring" :
                      u.cssClass === ".focus-ring-inset" ? "focus-ring-inset" :
                      ""
                    }`}
                    tabIndex={0}
                  >
                    {u.demo}
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Animations reference */}
      <div className="p-4 rounded-[10px] bg-muted/30 border space-y-2">
        <p className="text-sm font-medium">Tip: Combining Utilities</p>
        <div className="space-y-1 text-xs text-muted-foreground font-mono">
          <p><span className="text-primary">hover-lift</span> + <span className="text-primary">transition-colors-smooth</span> → lift + smooth color change on hover</p>
          <p><span className="text-primary">glass-effect</span> + <span className="text-primary">hover-scale</span> → glassmorphism card with scale on hover</p>
          <p><span className="text-primary">focus-ring</span> → required on all interactive custom elements for a11y</p>
        </div>
      </div>
    </div>
  );
}

// ─────────────────────────────────────────────
// MAIN PAGE
// ─────────────────────────────────────────────
export function DesignTokensPage() {
  const { tenant, colorMode } = useTheme();
  const info = TENANTS.find((t) => t.id === tenant) ?? TENANTS[0];
  const fontInfo = TENANT_FONTS[tenant] || TENANT_FONTS.default;

  const totalTokens =
    colorGroups.reduce((acc, g) => acc + g.tokens.length, 0) +
    kpiTokens.length * 3 + // color + dark + bg
    radiusTokens.length +
    shadowTokens.length +
    animationTokens.length +
    utilityTokens.length;

  return (
    <div className="w-full pb-16 space-y-8">
      {/* -- Header -- */}
      <div className="space-y-3">
        <div className="flex items-center gap-3 flex-wrap">
          <h1 className="text-4xl text-foreground">Design Tokens</h1>
          <Badge variant="outline" className="text-xs">v2.0.0</Badge>
          <Badge className="text-xs bg-primary text-primary-foreground">{totalTokens}+ tokens</Badge>
        </div>
        <p className="text-muted-foreground max-w-2xl">
          Single source of truth for all CSS custom properties. Token values come from{" "}
          <code className="font-mono text-xs bg-muted px-1.5 py-0.5 rounded">/styles/themes/*.css</code> and adapt per tenant. Switch tenants with the Tenant Selector to see live values update.
        </p>
        <div className="flex gap-4 text-xs text-muted-foreground flex-wrap">
          <span>
            <span className="inline-block h-2.5 w-2.5 rounded-full mr-1 align-middle" style={{ backgroundColor: info.primary }} />
            <strong className="text-foreground">Primary:</strong> {info.primary}
          </span>
          <span>
            <span className="inline-block h-2.5 w-2.5 rounded-full mr-1 align-middle" style={{ backgroundColor: info.secondary }} />
            <strong className="text-foreground">Secondary:</strong> {info.secondary}
          </span>
          <span>
            <strong className="text-foreground">Font:</strong> {fontInfo.name}
          </span>
          <span>
            <strong className="text-foreground">Radius:</strong> var(--radius)
          </span>
          <span>
            {colorMode === "dark" ? <Moon className="h-3 w-3 inline mr-1" /> : <Sun className="h-3 w-3 inline mr-1" />}
            <strong className="text-foreground">Mode:</strong> {colorMode}
          </span>
        </div>
      </div>

      {/* Tenant Banner */}
      <TenantBanner />

      <Separator />

      {/* -- Tabs -- */}
      <Tabs defaultValue="colors" className="space-y-6">
        <TabsList className="flex flex-wrap h-auto gap-1 p-1">
          <TabsTrigger value="colors">Colors</TabsTrigger>
          <TabsTrigger value="typography">Typography</TabsTrigger>
          <TabsTrigger value="shape">Shape</TabsTrigger>
          <TabsTrigger value="shadows">Shadows</TabsTrigger>
          <TabsTrigger value="animations">Animations</TabsTrigger>
          <TabsTrigger value="utilities">Utilities</TabsTrigger>
        </TabsList>

        <TabsContent value="colors"><ColorsTab /></TabsContent>
        <TabsContent value="typography"><TypographyTab /></TabsContent>
        <TabsContent value="shape"><ShapeTab /></TabsContent>
        <TabsContent value="shadows"><ShadowsTab /></TabsContent>
        <TabsContent value="animations"><AnimationsTab /></TabsContent>
        <TabsContent value="utilities"><UtilitiesTab /></TabsContent>
      </Tabs>
    </div>
  );
}