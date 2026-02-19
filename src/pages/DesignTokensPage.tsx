/**
 * DesignTokensPage
 * ─────────────────
 * Token Reference — Single source of truth visual.
 * Displays every CSS custom property from globals.css with its
 * actual rendered value, CSS var name, Tailwind class, and
 * light/dark values side-by-side.
 *
 * Sections: Colors · Typography · Shape · Shadows · Animations · Utilities
 */
import { useState } from "react";
import { toast } from "sonner@2.0.3";
import { Copy, Check, Sun, Moon } from "lucide-react";
import { Badge } from "../components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../components/ui/tabs";
import { Separator } from "../components/ui/separator";
import { Card, CardContent } from "../components/ui/card";
import { Button } from "../components/ui/button";

// ─────────────────────────────────────────────
// COPY HELPER
// ─────────────────────────────────────────────
function useCopy() {
  const [copied, setCopied] = useState<string | null>(null);
  const copy = (text: string) => {
    navigator.clipboard.writeText(text).then(() => {
      setCopied(text);
      toast.success("Copied!", { description: text, duration: 1500 });
      setTimeout(() => setCopied(null), 1500);
    });
  };
  return { copy, copied };
}

// ─────────────────────────────────────────────
// TOKEN DATA
// ─────────────────────────────────────────────
interface ColorToken {
  name: string;
  cssVar: string;
  twBg?: string;
  twText?: string;
  twBorder?: string;
  light: string;
  dark: string;
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
    description: "Core identity colors — primary green + secondary navy.",
    tokens: [
      { name: "primary", cssVar: "--primary", twBg: "bg-primary", twText: "text-primary", light: "#00c951", dark: "#00c951", fgVar: "--primary-foreground" },
      { name: "primary-foreground", cssVar: "--primary-foreground", twText: "text-primary-foreground", light: "#ffffff", dark: "#ffffff" },
      { name: "secondary", cssVar: "--secondary", twBg: "bg-secondary", twText: "text-secondary", light: "#1C2D3A", dark: "#334155", fgVar: "--secondary-foreground" },
      { name: "secondary-foreground", cssVar: "--secondary-foreground", twText: "text-secondary-foreground", light: "#ffffff", dark: "#f8fafc" },
    ],
  },
  {
    title: "Surfaces",
    description: "Background and card surfaces for page and component layers.",
    tokens: [
      { name: "background", cssVar: "--background", twBg: "bg-background", light: "#ffffff", dark: "#0f172a" },
      { name: "foreground", cssVar: "--foreground", twText: "text-foreground", light: "#1C2D3A", dark: "#f8fafc" },
      { name: "card", cssVar: "--card", twBg: "bg-card", light: "#ffffff", dark: "#1e293b", fgVar: "--card-foreground" },
      { name: "card-foreground", cssVar: "--card-foreground", twText: "text-card-foreground", light: "#1C2D3A", dark: "#f8fafc" },
      { name: "popover", cssVar: "--popover", twBg: "bg-popover", light: "#ffffff", dark: "#1e293b", fgVar: "--popover-foreground" },
      { name: "muted", cssVar: "--muted", twBg: "bg-muted", light: "#f4f4f5", dark: "#334155", fgVar: "--muted-foreground" },
      { name: "muted-foreground", cssVar: "--muted-foreground", twText: "text-muted-foreground", light: "#52525b", dark: "#94a3b8" },
      { name: "accent", cssVar: "--accent", twBg: "bg-accent", light: "#f4f4f5", dark: "#334155", fgVar: "--accent-foreground" },
    ],
  },
  {
    title: "Semantic",
    description: "Status and feedback signals — destructive, success, warning, info.",
    tokens: [
      { name: "destructive", cssVar: "--destructive", twBg: "bg-destructive", light: "#ef4444", dark: "#991b1b", fgVar: "--destructive-foreground" },
      { name: "success", cssVar: "--success", twBg: "bg-success", light: "#22c55e", dark: "#15803d", fgVar: "--success-foreground" },
      { name: "warning", cssVar: "--warning", twBg: "bg-warning", light: "#f59e0b", dark: "#b45309", fgVar: "--warning-foreground" },
      { name: "info", cssVar: "--info", twBg: "bg-info", light: "#3b82f6", dark: "#1d4ed8", fgVar: "--info-foreground" },
    ],
  },
  {
    title: "Forms",
    description: "Input, border and ring colors for form controls.",
    tokens: [
      { name: "border", cssVar: "--border", twBorder: "border-border", light: "#e4e4e7", dark: "#334155" },
      { name: "input", cssVar: "--input", twBorder: "border-input", light: "#e4e4e7", dark: "#334155" },
      { name: "input-background", cssVar: "--input-background", twBg: "bg-input-background", light: "#ffffff", dark: "#334155" },
      { name: "switch-background", cssVar: "--switch-background", twBg: "bg-switch-background", light: "#cbced4", dark: "#475569" },
      { name: "ring", cssVar: "--ring", light: "#00c951", dark: "#00c951" },
    ],
  },
  {
    title: "Sidebar",
    description: "Navigation sidebar layer tokens.",
    tokens: [
      { name: "sidebar", cssVar: "--sidebar", twBg: "bg-sidebar", light: "oklch(0.985 0 0)", dark: "#1e293b", fgVar: "--sidebar-foreground" },
      { name: "sidebar-foreground", cssVar: "--sidebar-foreground", twText: "text-sidebar-foreground", light: "#1C2D3A", dark: "#f8fafc" },
      { name: "sidebar-primary", cssVar: "--sidebar-primary", twBg: "bg-sidebar-primary", light: "#1C2D3A", dark: "#00c951", fgVar: "--sidebar-primary-foreground" },
      { name: "sidebar-accent", cssVar: "--sidebar-accent", twBg: "bg-sidebar-accent", light: "oklch(0.97 0 0)", dark: "#334155", fgVar: "--sidebar-accent-foreground" },
      { name: "sidebar-border", cssVar: "--sidebar-border", twBorder: "border-sidebar-border", light: "oklch(0.922 0 0)", dark: "#334155" },
      { name: "sidebar-ring", cssVar: "--sidebar-ring", light: "oklch(0.708 0 0)", dark: "#00c951" },
    ],
  },
  {
    title: "Charts",
    description: "5-stop data visualization palette. Adapts between light and dark mode.",
    tokens: [
      { name: "chart-1", cssVar: "--chart-1", twBg: "bg-chart-1", light: "oklch(0.646 0.222 41.1)", dark: "oklch(0.488 0.243 264.4)" },
      { name: "chart-2", cssVar: "--chart-2", twBg: "bg-chart-2", light: "oklch(0.600 0.118 184.7)", dark: "oklch(0.696 0.170 162.5)" },
      { name: "chart-3", cssVar: "--chart-3", twBg: "bg-chart-3", light: "oklch(0.398 0.070 227.4)", dark: "oklch(0.769 0.188 70.1)" },
      { name: "chart-4", cssVar: "--chart-4", twBg: "bg-chart-4", light: "oklch(0.828 0.189 84.4)", dark: "oklch(0.627 0.265 303.9)" },
      { name: "chart-5", cssVar: "--chart-5", twBg: "bg-chart-5", light: "oklch(0.769 0.188 70.1)", dark: "oklch(0.645 0.246 16.4)" },
    ],
  },
];

// KPI colors (stored as RGB triplets in CSS)
interface KpiToken { name: string; cssVar: string; color: string; dark: string; bg: string; }
const kpiTokens: KpiToken[] = [
  { name: "kpi-yellow", cssVar: "--kpi-yellow", color: "rgb(234,179,8)", dark: "rgb(202,138,4)", bg: "rgb(254,249,195)" },
  { name: "kpi-orange", cssVar: "--kpi-orange", color: "rgb(249,115,22)", dark: "rgb(234,88,12)", bg: "rgb(255,237,213)" },
  { name: "kpi-blue", cssVar: "--kpi-blue", color: "rgb(59,130,246)", dark: "rgb(37,99,235)", bg: "rgb(219,234,254)" },
  { name: "kpi-lime", cssVar: "--kpi-lime", color: "rgb(132,204,22)", dark: "rgb(101,163,13)", bg: "rgb(247,254,231)" },
];

// C-Financia brand — 3 pairs (color + foreground)
interface CFinanciaTokenPair {
  name: string;
  label: string;
  description: string;
  bgVar: string;
  fgVar: string;
  bgValue: string;
  fgValue: string;
}
const cfinanciaTokenPairs: CFinanciaTokenPair[] = [
  {
    name: "primary",
    label: "Primary",
    description: "Main brand accent. Buttons, active states, highlights.",
    bgVar: "--color-cfinancia-primary",
    fgVar: "--color-cfinancia-primary-foreground",
    bgValue: "rgb(222, 251, 73)",
    fgValue: "rgb(5, 41, 55)",
  },
  {
    name: "accent-hover",
    label: "Accent Hover",
    description: "Interactive hover state over primary. Success micro-feedback.",
    bgVar: "--color-cfinancia-accent-hover",
    fgVar: "--color-cfinancia-accent-hover-foreground",
    bgValue: "rgb(67, 249, 119)",
    fgValue: "rgb(5, 41, 55)",
  },
  {
    name: "navy",
    label: "Navy",
    description: "Primary surface. Navbar, sidebar, dark containers.",
    bgVar: "--color-cfinancia-navy",
    fgVar: "--color-cfinancia-navy-foreground",
    bgValue: "rgb(5, 41, 55)",
    fgValue: "rgb(222, 251, 73)",
  },
];

// Radius tokens
const radiusTokens = [
  { name: "radius-sm", cssVar: "--radius-sm", twClass: "rounded-sm", computed: "calc(0.625rem - 4px)", px: "~6px" },
  { name: "radius-md", cssVar: "--radius-md", twClass: "rounded-md", computed: "calc(0.625rem - 2px)", px: "~8px" },
  { name: "radius-lg (base)", cssVar: "--radius", twClass: "rounded-lg", computed: "0.625rem", px: "10px" },
  { name: "radius-xl", cssVar: "--radius-xl", twClass: "rounded-xl", computed: "calc(0.625rem + 4px)", px: "~14px" },
  { name: "radius-full", cssVar: "—", twClass: "rounded-full", computed: "9999px", px: "9999px" },
];

// Shadow tokens
const shadowTokens = [
  {
    name: "elevation-1",
    cssVar: "--shadow-elevation-1",
    value: "0 1px 2px 0 rgba(28,45,58,0.05)",
    darkValue: "0 1px 2px 0 rgba(0,0,0,0.3)",
    usage: "Subtle. Cards at rest, default state.",
  },
  {
    name: "elevation-2",
    cssVar: "--shadow-elevation-2",
    value: "0 4px 6px -1px rgba(28,45,58,0.1), 0 2px 4px -2px rgba(28,45,58,0.1)",
    darkValue: "0 4px 6px -1px rgba(0,0,0,0.3), 0 2px 4px -2px rgba(0,0,0,0.3)",
    usage: "Dropdowns, popovers, focused cards.",
  },
  {
    name: "elevation-3",
    cssVar: "--shadow-elevation-3",
    value: "0 10px 15px -3px rgba(28,45,58,0.1), 0 4px 6px -4px rgba(28,45,58,0.1)",
    darkValue: "0 10px 15px -3px rgba(0,0,0,0.3), 0 4px 6px -4px rgba(0,0,0,0.3)",
    usage: "Modals, dialogs, hover lifted cards.",
  },
  {
    name: "elevation-4",
    cssVar: "--shadow-elevation-4",
    value: "0 20px 25px -5px rgba(28,45,58,0.1), 0 8px 10px -6px rgba(28,45,58,0.1)",
    darkValue: "0 20px 25px -5px rgba(0,0,0,0.3), 0 8px 10px -6px rgba(0,0,0,0.3)",
    usage: "Sheets, drawers, top-level overlays.",
  },
];

// Animation tokens
const animationTokens = [
  { name: "fade-in", cssClass: "fade-in", duration: "0.3s ease-out", desc: "Fades in + slides up 10px. Entry for panels, cards, alerts." },
  { name: "slide-in-right", cssClass: "slide-in-right", duration: "0.3s ease-out", desc: "Slides in from right (100%). Entry for drawers, sheets." },
  { name: "slide-in-left", cssClass: "slide-in-left", duration: "0.3s ease-out", desc: "Slides in from left (−100%). Entry for sidebars, back transitions." },
  { name: "skeleton-pulse", cssClass: "skeleton-pulse", duration: "1.5s ease-in-out ∞", desc: "Opacity pulse 0.6 → 1 → 0.6. Loading skeleton indicator." },
  { name: "loading-dots", cssClass: "loading-dots", duration: "1.4s ∞", desc: "3-dot staggered opacity cycle. Use with 3 <span> children." },
  { name: "accordion-down", cssClass: "animate-accordion-down", duration: "0.2s ease-out", desc: "Height 0 → content height. Radix Accordion open." },
  { name: "accordion-up", cssClass: "animate-accordion-up", duration: "0.2s ease-out", desc: "Height content → 0. Radix Accordion close." },
];

// Utility classes
const utilityTokens = [
  { name: "hover-lift", cssClass: ".hover-lift", desc: "translateY(−2px) + elevation-3 shadow on :hover. 0.3s cubic.", demo: "Hover me" },
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

function ColorSwatch({ token }: { token: ColorToken }) {
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

        <div className="flex gap-2 mt-1">
          <span className="flex items-center gap-1 text-[10px] text-muted-foreground">
            <Sun className="h-2.5 w-2.5" />
            <span className="font-mono">{token.light}</span>
          </span>
          <span className="text-muted-foreground/30 text-[10px]">·</span>
          <span className="flex items-center gap-1 text-[10px] text-muted-foreground">
            <Moon className="h-2.5 w-2.5" />
            <span className="font-mono">{token.dark}</span>
          </span>
        </div>
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

// ─────────────────────────────────────────────
// TABS CONTENT
// ─────────────────────────────────────────────

function ColorsTab() {
  const { copy } = useCopy();
  return (
    <div className="space-y-10">
      {/* Main color groups */}
      {colorGroups.map((group) => (
        <div key={group.title}>
          <SectionHeader title={group.title} description={group.description} />
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4">
            {group.tokens.map((token) => (
              <ColorSwatch key={token.name} token={token} />
            ))}
          </div>
          <Separator className="mt-8" />
        </div>
      ))}

      {/* KPI Colors */}
      <div>
        <SectionHeader
          title="KPI Colors"
          description="Colors stored as RGB triplets for use in inline styles with rgba(). Usage: rgb(var(--kpi-yellow))"
        />
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          {kpiTokens.map((t) => (
            <div key={t.name} className="space-y-2">
              <div className="h-14 rounded-[10px] border border-border/50" style={{ backgroundColor: t.color }} />
              <p className="text-xs font-medium">{t.name}</p>
              <button
                onClick={() => copy(t.cssVar)}
                className="flex items-center gap-1 text-[10px] font-mono text-muted-foreground hover:text-primary"
              >
                <Copy className="h-3 w-3" /> {t.cssVar}
              </button>
              <div className="flex gap-2">
                <span className="flex items-center gap-1 text-[10px] text-muted-foreground">
                  <Sun className="h-2.5 w-2.5" />{t.color}
                </span>
                <span className="text-[10px] text-muted-foreground/30">·</span>
                <span className="flex items-center gap-1 text-[10px] text-muted-foreground">
                  <Moon className="h-2.5 w-2.5" />{t.dark}
                </span>
              </div>
              <div className="h-6 rounded-md" style={{ backgroundColor: t.bg }} />
              <p className="text-[10px] text-muted-foreground font-mono">{t.cssVar}-bg → {t.bg}</p>
            </div>
          ))}
        </div>
        <Separator className="mt-8" />
      </div>

      {/* C-Financia brand */}
      <div>
        <SectionHeader title="C-Financia Brand" description="Partner brand accent colors. Used in co-branded surfaces." />
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
          {cfinanciaTokenPairs.map((t) => (
            <div key={t.name} className="space-y-2">
              {/* Swatch with Aa preview */}
              <div
                className="h-14 rounded-[10px] border border-border/50 flex items-center justify-center"
                style={{ backgroundColor: t.bgValue }}
              >
                <span className="text-xs select-none opacity-80" style={{ color: t.fgValue }}>Aa</span>
              </div>
              <p className="text-xs font-medium">{t.label}</p>
              <p className="text-[10px] text-muted-foreground font-mono">{t.description}</p>
              <button
                onClick={() => copy(t.bgVar)}
                className="flex items-center gap-1 text-[10px] font-mono text-muted-foreground hover:text-primary"
              >
                <Copy className="h-3 w-3" /> {t.bgVar}
              </button>
              <p className="text-[10px] font-mono text-muted-foreground">{t.bgValue}</p>
              <button
                onClick={() => copy(t.fgVar)}
                className="flex items-center gap-1 text-[10px] font-mono text-muted-foreground hover:text-primary"
              >
                <Copy className="h-3 w-3" /> {t.fgVar}
              </button>
              <p className="text-[10px] font-mono text-muted-foreground">{t.fgValue}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function TypographyTab() {
  const { copy } = useCopy();
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
        <SectionHeader title="Font Family" description="Exclusive typeface of the CESIONBNK Design System." />
        <Card>
          <CardContent className="p-6 space-y-4">
            <div className="flex items-start justify-between gap-4 flex-wrap">
              <div>
                <p style={{ fontFamily: "Satoshi" }} className="text-5xl font-medium tracking-tight">
                  Satoshi
                </p>
                <p style={{ fontFamily: "Satoshi" }} className="text-lg text-muted-foreground mt-1">
                  The quick brown fox jumps over the lazy dog.
                </p>
                <p style={{ fontFamily: "Satoshi" }} className="text-sm text-muted-foreground">
                  ABCDEFGHIJKLMNOPQRSTUVWXYZ · abcdefghijklmnopqrstuvwxyz · 0123456789
                </p>
                <p style={{ fontFamily: "Satoshi" }} className="text-sm text-muted-foreground">
                  !@#$%^&amp;*()_+-=[]{}|;':",&lt;&gt;?/ · ÁÉÍÓÚÑü (Latin Extended)
                </p>
              </div>
              <div className="space-y-1 text-xs text-muted-foreground">
                <button onClick={() => copy("--font-sans")} className="flex items-center gap-1 hover:text-primary font-mono">
                  <Copy className="h-3 w-3" /> --font-sans
                </button>
                <button onClick={() => copy("font-sans")} className="flex items-center gap-1 hover:text-primary font-mono">
                  <Copy className="h-3 w-3" /> font-sans
                </button>
                <p className="text-[10px]">Source: api.fontshare.com</p>
                <Badge variant="outline" className="text-[10px]">Weights: 300–700</Badge>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Weights */}
      <div>
        <SectionHeader title="Font Weights" description="5 weights available via Fontshare CDN." />
        <div className="grid grid-cols-2 sm:grid-cols-5 gap-3">
          {weights.map((w) => (
            <Card key={w.weight}>
              <CardContent className="p-4 text-center">
                <p style={{ fontFamily: "Satoshi", fontWeight: w.weight }} className="text-2xl mb-2">
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
        <SectionHeader title="Type Scale" description="Default scale defined in globals.css @layer base. Apply Tailwind text-* classes to override." />
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
                    <span style={{ fontSize: row.size.split(" / ")[0] }} className={row.twClass}>
                      CESIONBNK
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
            <p className="text-xs font-mono text-primary">0.025em</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function ShapeTab() {
  const { copy } = useCopy();
  return (
    <div className="space-y-10">
      <div>
        <SectionHeader
          title="Border Radius"
          description="Base radius is 10px (0.625rem). All variants are computed from --radius via calc(). The design rule is: consistent rounding, no sharp corners."
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
        description="4-level elevation system. Shadows use the secondary navy color (rgba(28,45,58,…)) in light mode and pure black in dark mode. CSS var: --shadow-elevation-N"
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
              {["Token", "CSS Var", "Light value", "Dark value"].map((h) => (
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
                <td className="px-4 py-2.5 text-[10px] font-mono text-muted-foreground max-w-[220px]">{s.value}</td>
                <td className="px-4 py-2.5 text-[10px] font-mono text-muted-foreground max-w-[220px]">{s.darkValue}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Usage note */}
      <div className="p-4 rounded-[10px] bg-muted/30 border text-sm text-muted-foreground space-y-1">
        <p className="font-medium text-foreground">Usage</p>
        <p>In Tailwind: no direct utility — apply via <code className="font-mono bg-muted px-1 rounded text-xs">style=&#123;&#123; boxShadow: "var(--shadow-elevation-2)" &#125;&#125;</code></p>
        <p>Or via utility class: <code className="font-mono bg-muted px-1 rounded text-xs">.hover-lift</code> applies elevation-3 on hover automatically.</p>
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
        description="CSS keyframe animations defined in globals.css. Apply as className to any element. Respect prefers-reduced-motion: the system disables all animations automatically."
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
        description="Custom utilities defined in globals.css @layer utilities. Add these classes directly in JSX className. They complement Tailwind's built-in utilities."
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
  const totalTokens =
    colorGroups.reduce((acc, g) => acc + g.tokens.length, 0) +
    kpiTokens.length * 3 + // color + dark + bg
    cfinanciaTokenPairs.length * 2 + // bg + fg
    radiusTokens.length +
    shadowTokens.length +
    animationTokens.length +
    utilityTokens.length;

  return (
    <div className="w-full pb-16 space-y-8">
      {/* ── Header ── */}
      <div className="space-y-3">
        <div className="flex items-center gap-3 flex-wrap">
          <h1 className="text-4xl text-foreground">Design Tokens</h1>
          <Badge variant="outline" className="text-xs">v0.3.0</Badge>
          <Badge className="text-xs bg-primary text-primary-foreground">{totalTokens}+ tokens</Badge>
        </div>
        <p className="text-muted-foreground max-w-2xl">
          Single source of truth for all CSS custom properties. Every token defined in{" "}
          <code className="font-mono text-xs bg-muted px-1.5 py-0.5 rounded">/styles/globals.css</code> is displayed here with its value, Tailwind class, and light/dark variants.
        </p>
        <div className="flex gap-4 text-xs text-muted-foreground flex-wrap">
          <span>🎨 <strong className="text-foreground">Primary:</strong> #00c951 Green</span>
          <span>🔵 <strong className="text-foreground">Secondary:</strong> #1C2D3A Navy</span>
          <span>🔤 <strong className="text-foreground">Font:</strong> Satoshi</span>
          <span>📐 <strong className="text-foreground">Radius:</strong> 10px</span>
          <span>☀️🌙 <strong className="text-foreground">Modes:</strong> Light / Dark</span>
        </div>
      </div>

      <Separator />

      {/* ── Tabs ── */}
      <Tabs defaultValue="colors" className="space-y-6">
        <TabsList className="flex flex-wrap h-auto gap-1 p-1">
          <TabsTrigger value="colors">🎨 Colors</TabsTrigger>
          <TabsTrigger value="typography">🔤 Typography</TabsTrigger>
          <TabsTrigger value="shape">📐 Shape</TabsTrigger>
          <TabsTrigger value="shadows">🌑 Shadows</TabsTrigger>
          <TabsTrigger value="animations">✨ Animations</TabsTrigger>
          <TabsTrigger value="utilities">🛠 Utilities</TabsTrigger>
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