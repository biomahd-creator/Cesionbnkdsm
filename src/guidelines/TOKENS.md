# TOKENS — CESIONBNK Design System

> **Single Source of Truth** for all design tokens.
> The CSS source of truth lives in `/styles/themes/*.css` (one file per tenant).
> This document describes the token architecture, values, and usage rules.

---

## INDEX

1. [Colors](#1-colors)
2. [Typography](#2-typography)
3. [Spacing](#3-spacing)
4. [Border Radius](#4-border-radius)
5. [Elevation / Shadows](#5-elevation--shadows)
6. [Breakpoints](#6-breakpoints)
7. [Grid System](#7-grid-system)
8. [Animations](#8-animations)
9. [Z-Index](#9-z-index)
10. [Quick Usage Rules](#10-quick-usage-rules)
11. [Theme System (Multi-Tenant)](#11-theme-system-multi-tenant)

---

## 1. COLORS

### 1.1 Brand Colors — Per Tenant

Each tenant overrides `--primary` and `--secondary` via `/styles/themes/<tenant>.css`.

| Tenant | Primary | Secondary | Ring | Font |
|--------|---------|-----------|------|------|
| **CESIONBNK** (default) | `#374151` (Gray) | `#52525b` (Zinc) | `#374151` | Gotham |
| **C-Financia** | `#22c55e` (Green) | `#0f172a` (Navy) | `#22c55e` | Satoshi |
| **Eurocapital** | `#1A7FD9` (Blue) | `#9FB3BC` (Silver) | `#1A7FD9` | Montserrat |
| **IRIS** | `#00B388` (Teal) | `#004646` (Dark Teal) | `#00B388` | System UI |
| **Lulo Empresas** | `#00C4FF` (Cyan) | `#1C2A49` (Navy) | `#00C4FF` | Poppins |

**CSS Architecture:**
```
:root                         ← CESIONBNK defaults (light)
.dark                         ← CESIONBNK defaults (dark)
html[data-theme="c-financia"]       ← C-Financia overrides (light)
html[data-theme="c-financia"].dark  ← C-Financia overrides (dark)
... (same pattern for each tenant)
```

**Tailwind usage:**
```jsx
<Button className="bg-primary text-primary-foreground" />
<Badge className="bg-secondary text-secondary-foreground" />
```

---

### 1.2 Semantic Colors — CESIONBNK Default (Light Mode)

| Token CSS | Hex | Tailwind Class | Description |
|-----------|-----|----------------|-------------|
| `--background` | `#ffffff` | `bg-background` | Main background |
| `--foreground` | `#222222` | `text-foreground` | Main text |
| `--card` | `#ffffff` | `bg-card` | Card backgrounds |
| `--card-foreground` | `#222222` | `text-card-foreground` | Card text |
| `--popover` | `#ffffff` | `bg-popover` | Popover backgrounds |
| `--popover-foreground` | `#222222` | `text-popover-foreground` | Popover text |
| `--muted` | `#f4f4f5` | `bg-muted` | Secondary backgrounds |
| `--muted-foreground` | `#52525b` | `text-muted-foreground` | Secondary text |
| `--accent` | `#f4f4f5` | `bg-accent` | Accent backgrounds |
| `--accent-foreground` | `#222222` | `text-accent-foreground` | Accent text |
| `--border` | `#e4e4e7` | `border-border` | Borders, separators |
| `--input` | `#e4e4e7` | `border-input` | Input borders |
| `--input-background` | `#ffffff` | `bg-input-background` | Input background |
| `--switch-background` | `#cbced4` | `bg-switch-background` | Switch off background |
| `--ring` | `#374151` | `ring-ring` | Focus ring |

> **Note:** Other tenants override these values via `html[data-theme]` selectors. Use the Design Tokens showcase page to see live values per tenant.

---

### 1.3 Semantic Colors — CESIONBNK Default (Dark Mode)

| Token CSS | Hex | Description |
|-----------|-----|-------------|
| `--background` | `#0f172a` | Main background dark |
| `--foreground` | `#f8fafc` | Main text dark |
| `--card` | `#1e293b` | Card backgrounds dark |
| `--card-foreground` | `#f8fafc` | Card text dark |
| `--popover` | `#1e293b` | Popover backgrounds dark |
| `--popover-foreground` | `#f8fafc` | Popover text dark |
| `--secondary` | `#334155` | Secondary dark |
| `--secondary-foreground` | `#f8fafc` | Secondary foreground dark |
| `--muted` | `#334155` | Secondary backgrounds dark |
| `--muted-foreground` | `#94a3b8` | Secondary text dark |
| `--accent` | `#334155` | Accent backgrounds dark |
| `--accent-foreground` | `#f8fafc` | Accent text dark |
| `--border` | `#334155` | Borders dark |
| `--input` | `#334155` | Input borders dark |
| `--input-background` | `#334155` | Input background dark |
| `--switch-background` | `#475569` | Switch off background dark |

---

### 1.4 Feedback / Status Colors

| Token | Light | Dark | Use |
|-------|-------|------|-----|
| `--destructive` | `#ef4444` | `#991b1b` | Errors, delete, reject |
| `--destructive-foreground` | `#ffffff` | `#f8fafc` | Text on destructive |
| `--success` | `#22c55e` | `#15803d` | Confirmations, success states |
| `--success-foreground` | `#ffffff` | `#f8fafc` | Text on success |
| `--warning` | `#f59e0b` | `#b45309` | Warnings, pending states |
| `--warning-foreground` | `#ffffff` | `#f8fafc` | Text on warning |
| `--info` | `#3b82f6` | `#1d4ed8` | Neutral information |
| `--info-foreground` | `#ffffff` | `#f8fafc` | Text on info |

**Tailwind usage:**
```jsx
<Badge variant="success">Aprobado</Badge>
<Alert variant="destructive">Error al procesar</Alert>
```

---

### 1.5 KPI Colors (Factoring Module)

Each KPI variant has 3 levels: base, dark and background.
**These are static across all tenants** (defined in `/styles/config.css`).

| Variant | Base | Dark | Background |
|---------|------|------|------------|
| **Yellow** | `#eab308` | `#ca8a04` | `#fef9c3` |
| **Orange** | `#f97316` | `#ea580c` | `#ffedd5` |
| **Blue** | `#3b82f6` | `#2563eb` | `#dbeafe` |
| **Lime** | `#84cc16` | `#65a30d` | `#f7fee7` |

**CSS Variables (RGB comma-separated for opacity usage):**
```css
--kpi-yellow: 234, 179, 8;
--kpi-yellow-dark: 202, 138, 4;
--kpi-yellow-bg: 254, 249, 195;
/* Same for orange, blue, lime */
```

**Tailwind usage:**
```jsx
<div className="border-t-4 border-kpi-yellow bg-kpi-yellow-bg" />
<span className="text-kpi-blue-dark" />
```

---

### 1.6 Chart Colors

Per tenant. CESIONBNK default values shown:

| Token | Light Mode | Dark Mode |
|-------|------------|-----------|
| `--chart-1` | `oklch(0.646 0.222 41.116)` (Orange) | `oklch(0.488 0.243 264.376)` (Purple) |
| `--chart-2` | `oklch(0.6 0.118 184.704)` (Teal) | `oklch(0.696 0.17 162.48)` (Green) |
| `--chart-3` | `oklch(0.398 0.07 227.392)` (Navy) | `oklch(0.769 0.188 70.08)` (Lime) |
| `--chart-4` | `oklch(0.828 0.189 84.429)` (Yellow) | `oklch(0.627 0.265 303.9)` (Pink) |
| `--chart-5` | `oklch(0.769 0.188 70.08)` (Lime) | `oklch(0.645 0.246 16.439)` (Orange) |

> Other tenants use hex values for charts (e.g., C-Financia: `#22c55e`, `#0ea5e9`, `#8b5cf6`, `#f59e0b`, `#ef4444`).

**Tailwind usage:**
```jsx
<div className="bg-chart-1 text-chart-2" />
```

---

### 1.7 Sidebar Colors

Per tenant. CESIONBNK default values shown:

| Token | Light | Dark |
|-------|-------|------|
| `--sidebar` | `oklch(0.985 0 0)` | `#1e293b` |
| `--sidebar-foreground` | `#222222` | `#f8fafc` |
| `--sidebar-primary` | `#222222` | `#4F46E5` |
| `--sidebar-primary-foreground` | `oklch(0.985 0 0)` | `#ffffff` |
| `--sidebar-accent` | `oklch(0.97 0 0)` | `#334155` |
| `--sidebar-accent-foreground` | `#222222` | `#f8fafc` |
| `--sidebar-border` | `oklch(0.922 0 0)` | `#334155` |
| `--sidebar-ring` | `oklch(0.708 0 0)` | `#4F46E5` |

---

## 2. TYPOGRAPHY

### 2.1 Font Family — Per Tenant

| Tenant | Font | Source | Fallback |
|--------|------|--------|----------|
| **CESIONBNK** | Gotham | jsDelivr CDN | ui-sans-serif, system-ui, sans-serif |
| **C-Financia** | Satoshi | Fontshare | ui-sans-serif, system-ui, sans-serif |
| **Eurocapital** | Montserrat | Google Fonts | ui-sans-serif, system-ui, sans-serif |
| **IRIS** | System UI | OS built-in | — |
| **Lulo Empresas** | Poppins | Google Fonts | ui-sans-serif, system-ui, sans-serif |

Each tenant sets `--font-sans` in its CSS file. Loaded in `/styles/fuentes.css`.

> All fonts require `letter-spacing: var(--letter-spacing-base)` globally for optimal readability.

---

### 2.2 Font Sizes

| Token | Value | Rem | Tailwind | Common use |
|-------|-------|-----|----------|------------|
| `xs` | 12px | 0.75rem | `text-xs` | Secondary labels, footers, captions |
| `sm` | 14px | 0.875rem | `text-sm` | Secondary text, descriptions, labels |
| `base` | 16px | 1rem | `text-base` | **Default.** Body text, inputs, buttons |
| `lg` | 18px | 1.125rem | `text-lg` | h4, subtitles, body large |
| `xl` | 20px | 1.25rem | `text-xl` | h3, section titles |
| `2xl` | 24px | 1.5rem | `text-2xl` | h2, page titles |
| `3xl` | 30px | 1.875rem | `text-3xl` | h1, hero headings |
| `4xl` | 36px | 2.25rem | `text-4xl` | KPI featured numbers |
| `5xl` | 48px | 3rem | `text-5xl` | Display, hero |
| `6xl` | 60px | 3.75rem | `text-6xl` | Marketing, landing |

---

### 2.3 Font Weights

| Token | Value | Use |
|-------|-------|-----|
| `light` | 300 | Decorative text |
| `normal` | 400 | **Body text default** |
| `medium` | 500 | **Labels, buttons, headings default** |
| `semibold` | 600 | Emphasis, featured headings |
| `bold` | 700 | **KPI values, main titles** |

**Unbreakable rules:**
1. Body text: always `normal` (400)
2. Labels and Buttons: always `medium` (500)
3. Headings (h1-h4): `medium` (500) or `semibold` (600)
4. KPI values: always `bold` (700)
5. Never more than 3 weights in a single component

---

### 2.4 Line Height

| Token | Value | Use |
|-------|-------|-----|
| `none` | 1 | Icons, standalone numbers |
| `tight` | 1.25 | Large KPI values |
| `snug` | 1.375 | Compact headings |
| `normal` | **1.5** | **Global default** |
| `relaxed` | 1.625 | Long text, paragraphs |
| `loose` | 2 | Extra breathing room |

> **Global default: 1.5** — Applied system-wide. Do not override without justification.

---

### 2.5 Letter Spacing

| Token | Value | Use |
|-------|-------|-----|
| `tighter` | -0.05em | Large display (48px+) |
| `tight` | -0.025em | Large headings |
| `normal` | 0em | — |
| `wide` | **0.025em** | **Global default (Gotham / geometric fonts)** |
| `wider` | 0.05em | Uppercase labels |
| `widest` | 0.1em | Extreme tracking |

> **Global default: 0.025em** — Calibrated for geometric fonts. Some tenants use `0.02em` (Eurocapital, Lulo Empresas).
> Applied automatically via `config.css` to all typographic elements.

---

### 2.6 Complete Typographic Hierarchy

| Level | Element | Size | Weight | Line Height | Tailwind Classes |
|-------|---------|------|--------|-------------|------------------|
| **Display** | Hero | 48px | 700 | 1.5 | `text-5xl font-bold` |
| **H1** | Page Title | 24px | 500 | 1.5 | `text-2xl font-medium` |
| **H2** | Section Title | 20px | 500 | 1.5 | `text-xl font-medium` |
| **H3** | Subsection | 18px | 500 | 1.5 | `text-lg font-medium` |
| **H4** | Card Title | 16px | 500 | 1.5 | `text-base font-medium` |
| **Body Large** | Intro text | 18px | 400 | 1.5 | `text-lg font-normal` |
| **Body** | Default text | 16px | 400 | 1.5 | `text-base font-normal` |
| **Body Small** | Secondary | 14px | 400 | 1.5 | `text-sm font-normal` |
| **Caption** | Labels, help | 12px | 400 | 1.5 | `text-xs font-normal` |
| **Label** | Form labels | 14px | 500 | 1.5 | `text-sm font-medium` |
| **Button** | Button text | 16px | 500 | 1.5 | `text-base font-medium` |
| **KPI Value** | Large numbers | 36px | 700 | 1.25 | `text-4xl font-bold leading-tight` |

---

## 3. SPACING

### 3.1 Base Scale

**Base Unit:** 4px (0.25rem)

| Token | Value | Rem | Common context |
|-------|-------|-----|----------------|
| `0` | 0px | 0 | Reset |
| `0.5` | 2px | 0.125rem | Micro-adjustments |
| `1` | 4px | 0.25rem | Minimal separators |
| `1.5` | 6px | 0.375rem | Badge padding |
| `2` | 8px | 0.5rem | **Base unit.** Small element gap |
| `3` | 12px | 0.75rem | Related form elements |
| `4` | 16px | 1rem | **Standard gap.** Inputs, card sections |
| `5` | 20px | 1.25rem | FactoringKpiCard padding |
| `6` | 24px | 1.5rem | **Section spacing.** Card/modal padding |
| `8` | 32px | 2rem | Large sections, page containers |
| `10` | 40px | 2.5rem | Wide separators |
| `12` | 48px | 3rem | Very wide separators |
| `16` | 64px | 4rem | Full page sections |
| `20` | 80px | 5rem | Hero sections |
| `24` | 96px | 6rem | Maximum separation |

---

### 3.2 Common Uses

| Context | Token | Value | Tailwind |
|---------|-------|-------|----------|
| Adjacent buttons, badges, icons | `2` | 8px | `gap-2` |
| Form inputs | `4` | 16px | `gap-4` |
| Card sections | `3-4` | 12-16px | `gap-3` / `gap-4` |
| Page sections | `6` | 24px | `gap-6` |
| KPI Cards grid | `6` | 24px | `gap-6` |
| Large sections | `8` | 32px | `gap-8` |

### 3.3 Padding per Component

| Component | Padding | Tailwind |
|-----------|---------|----------|
| Badges, tooltips | 8px | `p-2` |
| Buttons small | 12px | `p-3` |
| Buttons default | 16px H / 8px V | `px-4 py-2` |
| Buttons large | 24px H / 12px V | `px-6 py-3` |
| Inputs | 12px H / 8px V | `px-3 py-2` |
| Cards, modals, sections | 24px | `p-6` |
| Page containers | 32px | `p-8` |

---

## 4. BORDER RADIUS

### 4.1 Scale

| Token | Value | CSS Variable | Calculation |
|-------|-------|--------------|-------------|
| `none` | 0px | — | — |
| `sm` | ~6px | `--radius-sm` | `calc(var(--radius) - 4px)` |
| `md` | ~8px | `--radius-md` | `calc(var(--radius) - 2px)` |
| `lg` | **10px** | `--radius-lg` | `var(--radius)` **(Base)** |
| `xl` | ~14px | `--radius-xl` | `calc(var(--radius) + 4px)` |
| `2xl` | 16px | — | Manual |
| `full` | 9999px | — | Circular / pill |

> **Base radius:** `--radius: 0.625rem` (10px) for all tenants.

---

### 4.2 Usage per Component

| Component | Radius | Token |
|-----------|--------|-------|
| **Buttons** | 10px | `rounded-lg` |
| **Cards** | 14px | `rounded-xl` |
| **Inputs** | 8px | `rounded-md` |
| **Badges** | 8px | `rounded-md` |
| **Modals / Dialogs** | 14px | `rounded-xl` |
| **Pills / Tags** | 9999px | `rounded-full` |
| **FactoringKpiCard** | 14px | `rounded-xl` |

> **Rule:** Child elements must have radius less than or equal to the parent.

---

## 5. ELEVATION / SHADOWS

### 5.1 Light Mode (Foreground-Toned)

Shadow colors are derived from the tenant's foreground color. CESIONBNK default:

| Level | CSS Variable | Value |
|-------|-------------|-------|
| **1** | `--shadow-elevation-1` | `0 1px 2px 0 rgba(34, 34, 34, 0.05)` |
| **2** | `--shadow-elevation-2` | `0 4px 6px -1px rgba(34, 34, 34, 0.1), 0 2px 4px -2px rgba(34, 34, 34, 0.1)` |
| **3** | `--shadow-elevation-3` | `0 10px 15px -3px rgba(34, 34, 34, 0.1), 0 4px 6px -4px rgba(34, 34, 34, 0.1)` |
| **4** | `--shadow-elevation-4` | `0 20px 25px -5px rgba(34, 34, 34, 0.1), 0 8px 10px -6px rgba(34, 34, 34, 0.1)` |

### 5.2 Dark Mode (Stronger Black)

| Level | CSS Variable | Value |
|-------|-------------|-------|
| **1** | `--shadow-elevation-1` | `0 1px 2px 0 rgba(0, 0, 0, 0.3)` |
| **2** | `--shadow-elevation-2` | `0 4px 6px -1px rgba(0, 0, 0, 0.3), 0 2px 4px -2px rgba(0, 0, 0, 0.3)` |
| **3** | `--shadow-elevation-3` | `0 10px 15px -3px rgba(0, 0, 0, 0.3), 0 4px 6px -4px rgba(0, 0, 0, 0.3)` |
| **4** | `--shadow-elevation-4` | `0 20px 25px -5px rgba(0, 0, 0, 0.3), 0 8px 10px -6px rgba(0, 0, 0, 0.3)` |

### 5.3 Usage per Context

| Element | Elevation | Tailwind Class |
|---------|-----------|----------------|
| Default buttons, inputs | 1 | `shadow-elevation-1` |
| Static cards, tables | 2 | `shadow-elevation-2` |
| Hover cards, dropdowns, tooltips | 3 | `shadow-elevation-3` |
| Modals, sidebars, active KPI Cards | 4 | `shadow-elevation-4` |

**Depth stacking order:**
```
Page background (0)
  -> Cards (elevation-2)
    -> Hover cards (elevation-3)
    -> Dropdowns/Popovers (elevation-3)
      -> Modals (elevation-4)
      -> Toasts/Notifications (elevation-4)
```

**Tailwind usage:**
```jsx
<div className="shadow-elevation-2 hover:shadow-elevation-3 transition-shadow" />
```

---

## 6. BREAKPOINTS

| Token | Value | Description |
|-------|-------|-------------|
| `sm` | 640px | Mobile landscape |
| `md` | 768px | Tablet portrait |
| `lg` | 1024px | Tablet landscape / Desktop |
| `xl` | 1280px | Desktop large |
| `2xl` | 1536px | Desktop extra large |

**Container max-width:** `1400px` (at `2xl`)

**Mobile-First Approach:**
```jsx
// CORRECT — from smaller to larger
<div className="text-sm md:text-base lg:text-lg">

// INCORRECT — from larger to smaller
<div className="text-lg md:text-base sm:text-sm">
```

---

## 7. GRID SYSTEM

### 7.1 Container

```json
{
  "center": true,
  "padding": {
    "default": "16px",
    "md": "24px",
    "lg": "32px"
  },
  "maxWidth": "1400px"
}
```

**Tailwind usage:**
```jsx
<div className="container mx-auto px-4 md:px-6 lg:px-8">
```

### 7.2 Common Grid Patterns

| Layout | Mobile | Tablet | Desktop | Tailwind |
|--------|--------|--------|---------|----------|
| Sidebar + Content | 1 col | 1 col | 280px + auto | `lg:grid-cols-[280px_1fr]` |
| 2 Columns Equal | 1 col | 2 cols | 2 cols | `grid-cols-1 md:grid-cols-2` |
| 3 Columns Equal | 1 col | 2 cols | 3 cols | `grid-cols-1 md:grid-cols-2 lg:grid-cols-3` |
| 4 Columns Equal | 1 col | 2 cols | 4 cols | `grid-cols-1 md:grid-cols-2 xl:grid-cols-4` |
| **KPI Cards** | 1 col | 2 cols | 4 cols | `grid-cols-1 md:grid-cols-2 lg:grid-cols-4` |
| Content 2/3 + Sidebar | 1 col | 1 col | 2fr + 1fr | `lg:grid-cols-[2fr_1fr]` |
| Forms 2-col | 1 col | 2 cols | 2 cols | `grid-cols-1 md:grid-cols-2` |

### 7.3 Gap System

| Context | Token | Tailwind |
|---------|-------|----------|
| Small elements | `gap-2` | 8px |
| Standard grid | `gap-4` | 16px |
| Main sections, KPI | `gap-6` | 24px |
| Large sections | `gap-8` | 32px |

---

## 8. ANIMATIONS

### 8.1 Durations

| Token | ms | Seconds | Use |
|-------|----|---------|-----|
| `instant` | 0ms | 0s | No animation |
| `fast` | 150ms | 0.15s | Hover, micro-interactions |
| `normal` | **300ms** | **0.3s** | **Default.** Modals, transitions |
| `slow` | 500ms | 0.5s | Page transitions |
| `slower` | 800ms | 0.8s | Loading overlays |

> **System default: 300ms** with `smooth` easing.

---

### 8.2 Easing Functions

| Token | Value | Use |
|-------|-------|-----|
| `linear` | `cubic-bezier(0, 0, 1, 1)` | Progress, loaders |
| `easeIn` | `cubic-bezier(0.4, 0, 1, 1)` | Exit animations |
| `easeOut` | `cubic-bezier(0, 0, 0.2, 1)` | Entry animations |
| `easeInOut` | `cubic-bezier(0.4, 0, 0.2, 1)` | Bidirectional transitions |
| **`smooth`** | **`cubic-bezier(0.25, 0.1, 0.25, 1)`** | **System default** |
| `snappy` | `cubic-bezier(0.4, 0, 0.6, 1)` | Fast interactions |
| `bounce` | `cubic-bezier(0.68, -0.55, 0.265, 1.55)` | Bounce effect |

---

### 8.3 Motion Variants (Motion/React)

```typescript
// Import from /lib/animation-config.ts
import {
  fadeVariants,
  fadeScaleVariants,
  slideFromRightVariants,
  slideFromLeftVariants,
  slideFromBottomVariants,
  slideFromTopVariants,
  pageTransitionVariants,
  staggerContainerVariants,
  staggerItemVariants,
} from "../lib/animation-config";
```

**Usage example:**
```jsx
import { motion } from "motion/react";
import { fadeScaleVariants, transitionConfig } from "../lib/animation-config";

<motion.div
  variants={fadeScaleVariants}
  initial="initial"
  animate="animate"
  exit="exit"
  transition={transitionConfig.normal}
/>
```

---

### 8.4 Pre-configured Transition Configs

| Config | Duration | Easing |
|--------|----------|--------|
| `fast` | 0.15s | smooth |
| `normal` | 0.3s | smooth |
| `slow` | 0.5s | smooth |
| `spring` | — | stiffness: 300, damping: 30 |
| `bounce` | — | stiffness: 400, damping: 15 |

---

### 8.5 CSS Utility Classes

Defined in `animations.css`, available globally:

| Class | Effect | Hover |
|-------|--------|-------|
| `hover-lift` | Transform + shadow transition | `translateY(-2px)` + `elevation-3` |
| `hover-scale` | Transform transition | `scale(1.02)` |
| `hover-brightness` | Filter transition | `brightness(1.1)` |

---

### 8.6 Loading Delays

| Token | Value | Use |
|-------|-------|-----|
| `immediate` | 0ms | No delay |
| `short` | 300ms | Fast actions |
| `normal` | 500ms | Standard delay |
| `long` | 1000ms | Slow operations |

---

### 8.7 Motion Accessibility

```css
/* Automatically applied in animations.css */
@media (prefers-reduced-motion: reduce) {
  * {
    animation-duration: 0.01ms !important;
    transition-duration: 0.01ms !important;
  }
}
```

**In TypeScript:**
```typescript
import { shouldReduceMotion, getTransition, getVariants } from "../lib/animation-config";

if (shouldReduceMotion()) { /* ... */ }
const transition = getTransition("normal");
const variants = getVariants(fadeScaleVariants);
```

---

## 9. Z-INDEX

Recommended scale for stacking contexts:

| Layer | z-index | Elements |
|-------|---------|----------|
| **Base** | 0 | Normal page content |
| **Cards** | 1 | Elevated cards, absolute badges |
| **Sticky** | 10 | Sticky headers, navbars |
| **Dropdown** | 20 | Dropdown menus, popovers |
| **Sidebar** | 30 | Sidebar navigation |
| **Overlay** | 40 | Modal backdrop |
| **Modal** | 50 | Dialogs, modals |
| **Toast** | 60 | Notifications, toasts |
| **Tooltip** | 70 | Tooltips |
| **Max** | 100 | Exceptional cases |

---

## 10. QUICK USAGE RULES

### Colors

```
ALWAYS use semantic tokens:
  bg-background, text-foreground, border-border

NEVER use hardcoded values:
  bg-white, text-black, border-gray-200

Semantic color by context:
  primary      -> Main actions, CTA
  secondary    -> Secondary actions
  destructive  -> Delete, reject, errors
  success      -> Confirmations, success states
  warning      -> Warnings, pending states
  info         -> Neutral information
  muted        -> Secondary backgrounds
```

### Accessibility (WCAG 2.1 AA)

```
Normal text (< 18px):      Minimum contrast 4.5:1
Large text (>= 18px):      Minimum contrast 3:1
Interactive elements:       Minimum contrast 4.5:1
Focus indicator:            Contrast 3:1 against background
Color is NOT the only state indicator
```

### Quick Checklist for New Components

```
[ ] Uses semantic tokens (no hardcoded colors)
[ ] Works in Light and Dark mode
[ ] Respects spacing scale (multiples of 4px)
[ ] Border-radius consistent with component type
[ ] Correct elevation for its context
[ ] Typography follows defined hierarchy
[ ] Max 3 font-weights per component
[ ] Focus visible on interactive elements
[ ] Meets WCAG AA contrast ratios
[ ] Animations respect prefers-reduced-motion
[ ] Responsive: mobile-first approach
```

---

## 11. THEME SYSTEM (MULTI-TENANT)

### Architecture

The project supports **5 white-label tenants** with independent token sets, plus light/dark mode for each.

```
                              ┌─────────────────────────┐
                              │     ThemeProvider.tsx     │
                              │ tenant: TenantId         │
                              │ colorMode: light | dark  │
                              └────────┬────────────────┘
                                       │
          ┌────────────────────────────┼────────────────────────────┐
          ▼                            ▼                            ▼
  html[data-theme]              html.dark class             CSS Cascade
  (tenant selector)            (color mode toggle)        (specificity)
```

### CSS Specificity Chain

```
:root (0,0,1)                        ← CESIONBNK light defaults
.dark (0,1,0)                        ← CESIONBNK dark defaults
html[data-theme="x"] (0,1,1)        ← Tenant X light overrides
html[data-theme="x"].dark (0,2,1)   ← Tenant X dark overrides
```

### Token Files

| File | Tenant | Selectors |
|------|--------|-----------|
| `/styles/themes/cesionbnk.css` | CESIONBNK (default) | `:root` / `.dark` |
| `/styles/themes/c-financia.css` | C-Financia | `html[data-theme="c-financia"]` / `html[data-theme="c-financia"].dark` |
| `/styles/themes/eurocapital.css` | Eurocapital | `html[data-theme="eurocapital"]` / `html[data-theme="eurocapital"].dark` |
| `/styles/themes/iris.css` | IRIS | `html[data-theme="iris"]` / `html[data-theme="iris"].dark` |
| `/styles/themes/lulo-empresas.css` | Lulo Empresas | `html[data-theme="lulo-empresas"]` / `html[data-theme="lulo-empresas"].dark` |

### Shared Configuration

| File | Purpose |
|------|---------|
| `/styles/config.css` | Tailwind v4 `@theme inline` mapping (tenant-agnostic) |
| `/styles/fuentes.css` | Font declarations for all tenants |
| `/styles/animations.css` | Keyframe animations and utility classes |
| `/styles/globals.css` | Entry point — imports all above in correct order |

### Runtime Provider

`/components/providers/ThemeProvider.tsx` manages:
- `data-theme` attribute on `<html>` (tenant selection)
- `.dark` class on `<html>` (color mode toggle)
- `localStorage` persistence for both axes
- No `style.setProperty()` — pure CSS cascade handles everything

### Tenant Registry

Defined in `ThemeProvider.tsx`:
```typescript
export const TENANTS: TenantInfo[] = [
  { id: "default",       name: "CESIONBNK",     primary: "#374151", secondary: "#52525b",  font: "Gotham" },
  { id: "c-financia",    name: "C-Financia",    primary: "#22c55e", secondary: "#0f172a",  font: "Satoshi" },
  { id: "eurocapital",   name: "Eurocapital",   primary: "#1A7FD9", secondary: "#9FB3BC",  font: "Montserrat" },
  { id: "iris",          name: "IRIS",           primary: "#00B388", secondary: "#004646",  font: "System" },
  { id: "lulo-empresas", name: "Lulo Empresas",  primary: "#00C4FF", secondary: "#1C2A49",  font: "Poppins" },
];
```

### Critical Rules

1. **Each tenant CSS file is self-contained** — defines ALL token overrides for both light and dark mode
2. **CESIONBNK is the default** — its tokens are in `:root` / `.dark` (no `data-theme` attribute needed)
3. **`/styles/config.css` is tenant-agnostic** — it only maps `var(--token)` → Tailwind classes
4. **No `style.setProperty()`** — pure CSS cascade handles all theme switching
5. **KPI colors are static** — shared across all tenants (defined in `config.css`)

---

## REFERENCE FILES

| File | Purpose |
|------|---------|
| `/styles/globals.css` | CSS entry point — imports everything in correct order |
| `/styles/themes/*.css` | Per-tenant token values (SSoT for CSS) |
| `/styles/config.css` | Tailwind v4 mapping + base styles + utilities |
| `/styles/fuentes.css` | Font CDN imports for all tenants |
| `/styles/animations.css` | Keyframe animations and motion utilities |
| `/lib/animation-config.ts` | Centralized animation configuration (Motion/React) |
| `/components/providers/ThemeProvider.tsx` | Runtime theme management (tenant + color mode) |

---

*Version: 2.0.0*
*Last updated: February 25, 2026*
*License: Private — CESIONBNK*