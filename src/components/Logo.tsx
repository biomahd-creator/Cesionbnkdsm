/**
 * Logo — Multi-Tenant Aware
 *
 * Renders the correct brand logo based on the active tenant.
 *   - default (CESIONBNK)  → Figma SVG (svg-dxvtwld637) — monocolor, variant-aware
 *   - c-financia            → Figma SVG (svg-vox9q81zwd) — multicolor: circle + wordmark
 *   - eurocapital           → PNG raster asset from Figma (MaskGroup).
 *   - iris                  → PNG raster asset from Figma.
 *   - lulo-empresas         → SVG wordmark with geometric mark
 *
 * Sizing: all logos use width="100%" + height="auto" so they scale
 * proportionally within the fixed-width container (sizeClasses).
 *
 * @version 2.3.0
 */

import { cn } from "./ui/utils";
import { useTheme } from "./providers/ThemeProvider";
import svgCesionBnk from "../imports/svg-dxvtwld637";
import svgCFinancia  from "../imports/svg-vox9q81zwd";
import svgLuloEmpresas from "../imports/svg-zxir1nsavj";
import imgEurocapital from "figma:asset/9a761ead30116abd247dd95e51f94cdea6c55e2b.png";
import imgIris from "figma:asset/2613cf468521150606d5790fa094e73a51b311eb.png";

/* ── Props ── */

interface LogoProps {
  className?: string;
  size?: "sm" | "md" | "lg" | "xl";
  /** "auto" detects from colorMode; "dark"/"light" forces a variant */
  variant?: "light" | "dark" | "auto";
}

/** Container width by size — SVG height auto-derives from viewBox ratio */
const sizeClasses: Record<NonNullable<LogoProps["size"]>, string> = {
  sm: "w-[77px]",   // 128 px → 77 px (−40 %)
  md: "w-[106px]",  // 176 px → 106 px (−40 %)
  lg: "w-[134px]",  // 224 px → 134 px (−40 %)
  xl: "w-[154px]",  // 256 px → 154 px (−40 %)
};

/* ─────────────────────────────────────────────────────────────
   Tenant logo sub-components
   All use width="100%" + height="auto" so height is computed
   automatically from the viewBox aspect ratio.
───────────────────────────────────────────────────────────── */

/**
 * CESIONBNK wordmark (Figma import svg-dxvtwld637).
 * ViewBox 0 0 256 30.7575 → ratio ≈ 8.32 : 1
 * Light → var(--secondary) | Dark → white
 */
function CesionBnkLogoSVG({ variant }: { variant: "light" | "dark" }) {
  const fill = variant === "dark" ? "white" : "var(--secondary)";

  return (
    <svg
      fill="none"
      viewBox="0 0 256 30.7575"
      width="100%"
      height="auto"
      style={{ display: "block", "--fill-0": fill } as React.CSSProperties}
      aria-label="CESIONBNK"
    >
      <path d={svgCesionBnk.p2a738d80} fill="var(--fill-0, #212529)" /> {/* C */}
      <path d={svgCesionBnk.p301ad2e0} fill="var(--fill-0, #212529)" /> {/* E top */}
      <path d={svgCesionBnk.p12e48500} fill="var(--fill-0, #212529)" /> {/* E mid */}
      <path d={svgCesionBnk.p18eb5400} fill="var(--fill-0, #212529)" /> {/* E bot */}
      <path d={svgCesionBnk.pb23ef80}  fill="var(--fill-0, #212529)" /> {/* S */}
      <path d={svgCesionBnk.p3ee20600} fill="var(--fill-0, #212529)" /> {/* I */}
      <path d={svgCesionBnk.p32547c00} fill="var(--fill-0, #212529)" /> {/* O */}
      <path d={svgCesionBnk.p12b3b270} fill="var(--fill-0, #212529)" /> {/* N */}
      <path d={svgCesionBnk.p197eee00} fill="var(--fill-0, #212529)" /> {/* B */}
      <path d={svgCesionBnk.pe3a59f0}  fill="var(--fill-0, #212529)" /> {/* N */}
      <path d={svgCesionBnk.p2267b580} fill="var(--fill-0, #212529)" /> {/* K */}
    </svg>
  );
}

/**
 * C-Financia logo (Figma import svg-vox9q81zwd).
 * ViewBox 0 0 256 49 — circle icon + "Financia" wordmark.
 *
 * Color rules:
 *   Circle bg  → #DEFB49 hardcoded (brand yellow, independent of --primary token)
 *   Green dot  → #95F87F          always  (brand accent)
 *   C shape    → var(--secondary) always  (dark on yellow circle)
 *   Wordmark   → var(--secondary) light / white dark
 */
function CFinanciaLogoSVG({ variant }: { variant: "light" | "dark" }) {
  const textFill = variant === "dark" ? "white" : "var(--secondary)";

  return (
    <svg
      fill="none"
      viewBox="0 0 256 49"
      width="100%"
      height="auto"
      style={{ display: "block" }}
      aria-label="C-Financia"
    >
      <g clipPath="url(#cfinancia-clip)">
        {/* Circle background — brand yellow, always fixed regardless of primary token */}
        <path d={svgCFinancia.p8fb5ef1}  fill="#DEFB49" />
        {/* Green dot — brand accent, always green */}
        <path d={svgCFinancia.pd4eaf00}  fill="#95F87F" />
        {/* C crescent cutout — always dark secondary (on yellow bg) */}
        <path d={svgCFinancia.p20056f00} fill="var(--secondary)" />
        {/* "F" */}
        <path d={svgCFinancia.p9fa3d80}  fill={textFill} />
        {/* "i" bar */}
        <path d={svgCFinancia.p3f561200} fill={textFill} />
        {/* "i" dot */}
        <path d={svgCFinancia.pa0d1000}  fill={textFill} />
        {/* "i" dot 2 */}
        <path d={svgCFinancia.p2122e780} fill={textFill} />
        {/* "n" + "anci" complex */}
        <path d={svgCFinancia.p20c51f80} fill={textFill} />
        {/* "c" */}
        <path d={svgCFinancia.p28bcee80} fill={textFill} />
        {/* second "i" bar */}
        <path d={svgCFinancia.p20482300} fill={textFill} />
        {/* "a" */}
        <path d={svgCFinancia.p303a3300} fill={textFill} />
        {/* Group: "n" part 1 */}
        <path d={svgCFinancia.p8d31e00}  fill={textFill} />
        {/* Group: "nancia" complex */}
        <path d={svgCFinancia.pa76c4f0}  fill={textFill} />
      </g>
      <defs>
        <clipPath id="cfinancia-clip">
          <rect width="256" height="49" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
}

/**
 * Eurocapital logo — PNG raster asset from Figma (MaskGroup).
 * Full-color image: blue circle mark + "EuroCapital" + "Servicios Financieros".
 * Original dimensions: 327.91 × 79.1 px → ratio ≈ 4.15 : 1
 */
function EurocapitalLogoImg() {
  return (
    <img
      src={imgEurocapital}
      alt="Eurocapital"
      style={{ display: "block", width: "100%", height: "auto" }}
    />
  );
}

/**
 * IRIS logo — PNG raster asset from Figma.
 * Full-color: green pill mark + "IRIS" dark teal wordmark.
 */
function IrisLogoImg() {
  return (
    // Wrapper con aspect-ratio recortado: muestra solo el top ~75% del PNG
    // (pill + "IRIS"), ocultando el subtitle "neofinanciera" del bottom.
    // El PNG completo es ~3:1 → top 75% ≈ 4:1.
    <div style={{ width: "100%", aspectRatio: "2.5 / 1", overflow: "hidden" }}>
      <img
        src={imgIris}
        alt="IRIS"
        style={{ display: "block", width: "100%", height: "auto" }}
      />
    </div>
  );
}

/**
 * Lulo Empresas logo — Figma import (svg-zxir1nsavj).
 * Horizontal layout: geometric mark + "empresas" wordmark.
 * ViewBox 0 0 525 124.215 → ratio ≈ 4.23 : 1
 * --fill-0: #0C0F17 light / white dark.
 */
function LuloEmpresasLogoSVG({ variant }: { variant: "light" | "dark" }) {
  const fill = variant === "dark" ? "#FFFFFF" : "#0C0F17";
  return (
    <svg
      fill="none"
      viewBox="0 0 525 124.215"
      width="100%"
      height="auto"
      style={{ display: "block", "--fill-0": fill } as React.CSSProperties}
      aria-label="Lulo Empresas"
    >
      {/* Lulo mark */}
      <path d={svgLuloEmpresas.p132e4500} fill="var(--fill-0, #0C0F17)" />
      <path d={svgLuloEmpresas.p2688ac00} fill="var(--fill-0, #0C0F17)" />
      <path d={svgLuloEmpresas.p106a0000} fill="var(--fill-0, #0C0F17)" />
      <path d={svgLuloEmpresas.p86ede00}  fill="var(--fill-0, #0C0F17)" />
      {/* empresas wordmark */}
      <path d={svgLuloEmpresas.p14d2600}   fill="var(--fill-0, #0A0A0A)" />
      <path d={svgLuloEmpresas.p1ac3c700}  fill="var(--fill-0, #0A0A0A)" />
      <path d={svgLuloEmpresas.p3abfea00}  fill="var(--fill-0, #0A0A0A)" />
      <path d={svgLuloEmpresas.p3b365080}  fill="var(--fill-0, #0A0A0A)" />
      <path d={svgLuloEmpresas.p68ea00}    fill="var(--fill-0, #0A0A0A)" />
      <path d={svgLuloEmpresas.p28e83100}  fill="var(--fill-0, #0A0A0A)" />
      <path d={svgLuloEmpresas.p3344fc80}  fill="var(--fill-0, #0A0A0A)" />
      <path d={svgLuloEmpresas.p1c2fa0f0}  fill="var(--fill-0, #0A0A0A)" />
    </svg>
  );
}

/* ── Main Logo component ── */

export function Logo({ className, size = "md", variant = "auto" }: LogoProps) {
  const { theme, tenant } = useTheme();

  const effectiveVariant: "light" | "dark" =
    variant === "auto" ? (theme === "dark" ? "dark" : "light") : variant;

  return (
    <div className={cn("inline-flex items-center shrink-0", sizeClasses[size], className)}>
      {tenant === "default"       && <CesionBnkLogoSVG   variant={effectiveVariant} />}
      {tenant === "c-financia"    && <CFinanciaLogoSVG    variant={effectiveVariant} />}
      {tenant === "eurocapital"   && <EurocapitalLogoImg  />}
      {tenant === "iris"          && <IrisLogoImg         />}
      {tenant === "lulo-empresas" && <LuloEmpresasLogoSVG variant={effectiveVariant} />}
    </div>
  );
}