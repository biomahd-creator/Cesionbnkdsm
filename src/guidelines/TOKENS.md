# TOKENS - C-Financia Design System

> **Single Source of Truth** para todos los tokens de diseno del sistema.
> Los valores aqui definidos deben coincidir con `globals.css`, `figma-tokens.json` y `tailwind-preset.cjs` (deprecated).

---

## INDICE

1. [Colores](#1-colores)
2. [Tipografia](#2-tipografia)
3. [Spacing](#3-spacing)
4. [Border Radius](#4-border-radius)
5. [Elevation / Shadows](#5-elevation--shadows)
6. [Breakpoints](#6-breakpoints)
7. [Grid System](#7-grid-system)
8. [Animaciones](#8-animaciones)
9. [Z-Index](#9-z-index)
10. [Reglas de Uso Rapido](#10-reglas-de-uso-rapido)
11. [Sistema de Temas](#11-sistema-de-temas)

---

## 1. COLORES

### 1.1 Brand Colors

| Token | Hex | Uso |
|-------|-----|-----|
| `--primary` | `#00c951` | Verde principal. CTAs, acciones primarias, focus ring |
| `--primary-foreground` | `#ffffff` | Texto sobre primary |
| `--secondary` | `#1C2D3A` | Navy principal. Headings, acciones secundarias |
| `--secondary-foreground` | `#ffffff` | Texto sobre secondary |

#### C-Financia Brand

| Token | RGB | Hex | Uso |
|-------|-----|-----|-----|
| `--cfinancia-accent` | `222, 251, 73` | `#DEFB49` | Amarillo accent C-Financia |
| `--cfinancia-accent-hover` | `67, 249, 119` | `#43F977` | Hover verde accent |
| `--cfinancia-navy` | `5, 41, 55` | `#052937` | Navy oscuro C-Financia |

**Tailwind usage:**
```jsx
<div className="bg-cfinancia-accent text-cfinancia-navy" />
```

---

### 1.2 Semantic Colors - Light Mode

| Token CSS | Hex | Tailwind Class | Descripcion |
|-----------|-----|----------------|-------------|
| `--background` | `#ffffff` | `bg-background` | Fondo principal |
| `--foreground` | `#1C2D3A` | `text-foreground` | Texto principal |
| `--card` | `#ffffff` | `bg-card` | Fondo de tarjetas |
| `--card-foreground` | `#1C2D3A` | `text-card-foreground` | Texto en tarjetas |
| `--popover` | `oklch(1 0 0)` | `bg-popover` | Fondo de popovers |
| `--popover-foreground` | `#1C2D3A` | `text-popover-foreground` | Texto en popovers |
| `--muted` | `#f4f4f5` | `bg-muted` | Fondos secundarios |
| `--muted-foreground` | `#52525b` | `text-muted-foreground` | Texto secundario/deshabilitado |
| `--accent` | `#f4f4f5` | `bg-accent` | Color de acento |
| `--accent-foreground` | `#1C2D3A` | `text-accent-foreground` | Texto sobre acento |
| `--border` | `#e4e4e7` | `border-border` | Bordes y separadores |
| `--input` | `#e4e4e7` | `border-input` | Bordes de inputs |
| `--input-background` | `#ffffff` | `bg-input-background` | Fondo de inputs |
| `--switch-background` | `#cbced4` | `bg-switch-background` | Fondo de switches off |
| `--ring` | `#00c951` | `ring-ring` | Focus ring |

---

### 1.3 Semantic Colors - Dark Mode

| Token CSS | Hex | Descripcion |
|-----------|-----|-------------|
| `--background` | `#0f172a` | Fondo principal dark |
| `--foreground` | `#f8fafc` | Texto principal dark |
| `--card` | `#1e293b` | Fondo de tarjetas dark |
| `--card-foreground` | `#f8fafc` | Texto en tarjetas dark |
| `--popover` | `#1e293b` | Fondo de popovers dark |
| `--popover-foreground` | `#f8fafc` | Texto en popovers dark |
| `--secondary` | `#334155` | Color secundario dark |
| `--secondary-foreground` | `#f8fafc` | Texto sobre secundario dark |
| `--muted` | `#334155` | Fondos secundarios dark |
| `--muted-foreground` | `#94a3b8` | Texto secundario dark |
| `--accent` | `#334155` | Color de acento dark |
| `--accent-foreground` | `#f8fafc` | Texto sobre acento dark |
| `--border` | `#334155` | Bordes dark |
| `--input` | `#334155` | Bordes de inputs dark |
| `--input-background` | `#334155` | Fondo de inputs dark |

> **Regla critica:** `--primary` (`#00c951`) y `--ring` (`#00c951`) son compartidos entre light y dark mode.

---

### 1.4 Feedback / Status Colors

| Token | Light | Dark | Uso |
|-------|-------|------|-----|
| `--destructive` | `#ef4444` | `#991b1b` | Errores, eliminar, rechazar |
| `--destructive-foreground` | `#ffffff` | `#f8fafc` | Texto sobre destructive |
| `--success` | `#22c55e` | `#15803d` | Confirmaciones, estados exitosos |
| `--success-foreground` | `#ffffff` | `#f8fafc` | Texto sobre success |
| `--warning` | `#f59e0b` | `#b45309` | Advertencias, pendientes |
| `--warning-foreground` | `#ffffff` | `#f8fafc` | Texto sobre warning |
| `--info` | `#3b82f6` | `#1d4ed8` | Informacion neutral |
| `--info-foreground` | `#ffffff` | `#f8fafc` | Texto sobre info |

**Tailwind usage:**
```jsx
<Badge variant="success">Aprobado</Badge>
<Alert variant="destructive">Error al procesar</Alert>
```

---

### 1.5 KPI Colors (Modulo Factoring)

Cada variante de KPI tiene 3 niveles: base, dark y background.

| Variante | Base | Dark | Background |
|----------|------|------|------------|
| **Yellow** | `#eab308` | `#ca8a04` | `#fef9c3` |
| **Orange** | `#f97316` | `#ea580c` | `#ffedd5` |
| **Blue** | `#3b82f6` | `#2563eb` | `#dbeafe` |
| **Lime** | `#84cc16` | `#65a30d` | `#f7fee7` |

**CSS Variables (formato RGB para opacidad):**
```css
--kpi-yellow: 234 179 8;
--kpi-yellow-dark: 202 138 4;
--kpi-yellow-bg: 254 249 195;
/* Idem para orange, blue, lime */
```

**Tailwind usage:**
```jsx
<div className="border-t-4 border-kpi-yellow bg-kpi-yellow-bg" />
<span className="text-kpi-blue-dark" />
```

---

### 1.6 Chart Colors

| Token | Light Mode | Dark Mode |
|-------|------------|-----------|
| `--chart-1` | `oklch(0.646 0.222 41.116)` (Orange) | `oklch(0.488 0.243 264.376)` (Purple) |
| `--chart-2` | `oklch(0.6 0.118 184.704)` (Teal) | `oklch(0.696 0.17 162.48)` (Green) |
| `--chart-3` | `oklch(0.398 0.07 227.392)` (Navy) | `oklch(0.769 0.188 70.08)` (Lime) |
| `--chart-4` | `oklch(0.828 0.189 84.429)` (Yellow) | `oklch(0.627 0.265 303.9)` (Pink) |
| `--chart-5` | `oklch(0.769 0.188 70.08)` (Lime) | `oklch(0.645 0.246 16.439)` (Orange) |

**Tailwind usage:**
```jsx
<div className="bg-chart-1 text-chart-2" />
```

---

### 1.7 Sidebar Colors

| Token | Light | Dark |
|-------|-------|------|
| `--sidebar` | `oklch(0.985 0 0)` | `#1e293b` |
| `--sidebar-foreground` | `#1C2D3A` | `#f8fafc` |
| `--sidebar-primary` | `#1C2D3A` | `#00c951` |
| `--sidebar-primary-foreground` | `oklch(0.985 0 0)` | `#1C2D3A` |
| `--sidebar-accent` | `oklch(0.97 0 0)` | `#334155` |
| `--sidebar-accent-foreground` | `#1C2D3A` | `#f8fafc` |
| `--sidebar-border` | `oklch(0.922 0 0)` | `#334155` |
| `--sidebar-ring` | `oklch(0.708 0 0)` | `#00c951` |

---

## 2. TIPOGRAFIA

### 2.1 Font Family

| Tipo | Fuente | Fallback |
|------|--------|----------|
| **Sans** (principal) | `Satoshi` | `sans-serif` |
| **Mono** (codigo) | `JetBrains Mono` | `monospace` |

**CDN Import:**
```css
@import url('https://fonts.cdnfonts.com/css/satoshi');
```

> Satoshi es una fuente geometrica. Requiere `letter-spacing: 0.025em` global para legibilidad optima.

---

### 2.2 Font Sizes

| Token | Valor | Rem | Tailwind | Uso comun |
|-------|-------|-----|----------|-----------|
| `xs` | 12px | 0.75rem | `text-xs` | Labels secundarios, footers, captions |
| `sm` | 14px | 0.875rem | `text-sm` | Texto secundario, descripciones, labels |
| `base` | 16px | 1rem | `text-base` | **Default.** Body text, inputs, botones |
| `lg` | 18px | 1.125rem | `text-lg` | h4, subtitulos, body large |
| `xl` | 20px | 1.25rem | `text-xl` | h3, titulos de seccion |
| `2xl` | 24px | 1.5rem | `text-2xl` | h2, titulos de pagina |
| `3xl` | 30px | 1.875rem | `text-3xl` | h1, hero headings |
| `4xl` | 36px | 2.25rem | `text-4xl` | Numeros KPI destacados |
| `5xl` | 48px | 3rem | `text-5xl` | Display, hero |
| `6xl` | 60px | 3.75rem | `text-6xl` | Marketing, landing |

**Regla de contraste de tamanos:**
```
Minimo 2 pasos de diferencia entre niveles jerarquicos.
  h1: text-3xl (30px) + h2: text-xl (20px) = 10px diff
  h1: text-2xl (24px) + h2: text-xl (20px) = 4px diff  <-- MUY POCO
```

---

### 2.3 Font Weights

| Token | Valor | CSS Variable | Uso |
|-------|-------|--------------|-----|
| `light` | 300 | `--font-weight-light` | Texto decorativo |
| `normal` | 400 | `--font-weight-normal` | **Body text default** |
| `medium` | 500 | `--font-weight-medium` | **Labels, buttons, headings default** |
| `semibold` | 600 | `--font-weight-semibold` | Enfasis, headings destacados |
| `bold` | 700 | `--font-weight-bold` | **KPI values, titulos principales** |

**Reglas inquebrantables:**
1. Body text: siempre `normal` (400)
2. Labels y Buttons: siempre `medium` (500)
3. Headings (h1-h4): `medium` (500) o `semibold` (600)
4. KPI values: siempre `bold` (700)
5. Nunca mas de 3 pesos en un mismo componente

---

### 2.4 Line Height

| Token | Valor | Uso |
|-------|-------|-----|
| `none` | 1 | Iconos, numeros sueltos |
| `tight` | 1.25 | KPI values grandes |
| `snug` | 1.375 | Headings compactos |
| `normal` | **1.5** | **Default global** |
| `relaxed` | 1.625 | Texto largo, parrafos |
| `loose` | 2 | Texto con mucho aire |

> **Default global: 1.5** - Aplicado a todo el sistema. No sobrescribir sin razon justificada.

---

### 2.5 Letter Spacing

| Token | Valor | Uso |
|-------|-------|-----|
| `tighter` | -0.05em | Display grande (48px+) |
| `tight` | -0.025em | Headings grandes |
| `normal` | 0em | -- |
| `wide` | **0.025em** | **Default global (Satoshi)** |
| `wider` | 0.05em | Uppercase labels |
| `widest` | 0.1em | Tracking extremo |

> **Default global: 0.025em** - Calibrado para Satoshi (fuente geometrica).
> Aplicado automaticamente via `globals.css` a todos los elementos tipograficos.

---

### 2.6 Jerarquia Tipografica Completa

| Nivel | Elemento | Size | Weight | Line Height | Tailwind Classes |
|-------|----------|------|--------|-------------|------------------|
| **Display** | Hero | 48px | 700 | 1.5 | `text-5xl font-bold` |
| **H1** | Page Title | 30px | 600 | 1.5 | `text-3xl font-semibold` |
| **H2** | Section Title | 24px | 600 | 1.5 | `text-2xl font-semibold` |
| **H3** | Subsection | 20px | 500 | 1.5 | `text-xl font-medium` |
| **H4** | Card Title | 18px | 500 | 1.5 | `text-lg font-medium` |
| **Body Large** | Intro text | 18px | 400 | 1.5 | `text-lg font-normal` |
| **Body** | Default text | 16px | 400 | 1.5 | `text-base font-normal` |
| **Body Small** | Secondary | 14px | 400 | 1.5 | `text-sm font-normal` |
| **Caption** | Labels, help | 12px | 400 | 1.5 | `text-xs font-normal` |
| **Label** | Form labels | 14px | 500 | 1.5 | `text-sm font-medium` |
| **Button** | Button text | 16px | 500 | 1.5 | `text-base font-medium` |
| **KPI Value** | Large numbers | 36px | 700 | 1.25 | `text-4xl font-bold leading-tight` |

---

## 3. SPACING

### 3.1 Escala Base

**Base Unit:** 4px (0.25rem)

| Token | Valor | Rem | Contexto comun |
|-------|-------|-----|----------------|
| `0` | 0px | 0 | Reset |
| `0.5` | 2px | 0.125rem | Micro-ajustes |
| `1` | 4px | 0.25rem | Separadores minimos |
| `1.5` | 6px | 0.375rem | Padding badges |
| `2` | 8px | 0.5rem | **Base unit.** Gap elementos pequenos |
| `3` | 12px | 0.75rem | Elementos de formulario relacionados |
| `4` | 16px | 1rem | **Standard gap.** Inputs, secciones de card |
| `5` | 20px | 1.25rem | Padding FactoringKpiCard |
| `6` | 24px | 1.5rem | **Section spacing.** Padding de cards, modals |
| `8` | 32px | 2rem | Grandes secciones, page containers |
| `10` | 40px | 2.5rem | Separadores amplios |
| `12` | 48px | 3rem | Separadores muy amplios |
| `16` | 64px | 4rem | Secciones de pagina completa |
| `20` | 80px | 5rem | Hero sections |
| `24` | 96px | 6rem | Maxima separacion |

---

### 3.2 Usos Comunes

| Contexto | Token | Valor | Tailwind |
|----------|-------|-------|----------|
| Botones adyacentes, badges, iconos | `2` | 8px | `gap-2` |
| Inputs de formulario | `4` | 16px | `gap-4` |
| Secciones de card | `3-4` | 12-16px | `gap-3` / `gap-4` |
| Secciones de pagina | `6` | 24px | `gap-6` |
| KPI Cards grid | `6` | 24px | `gap-6` |
| Grandes secciones | `8` | 32px | `gap-8` |

### 3.3 Padding por Componente

| Componente | Padding | Tailwind |
|------------|---------|----------|
| Badges, tooltips | 8px | `p-2` |
| Buttons small | 12px | `p-3` |
| Buttons default | 16px H / 8px V | `px-4 py-2` |
| Buttons large | 24px H / 12px V | `px-6 py-3` |
| Inputs | 12px H / 8px V | `px-3 py-2` |
| Cards, modals, sections | 24px | `p-6` |
| Page containers | 32px | `p-8` |

---

## 4. BORDER RADIUS

### 4.1 Escala

| Token | Valor | CSS Variable | Calculo |
|-------|-------|--------------|---------|
| `none` | 0px | -- | -- |
| `sm` | 6px | `--radius-sm` | `calc(var(--radius) - 4px)` |
| `md` | 8px | `--radius-md` | `calc(var(--radius) - 2px)` |
| `lg` | **10px** | `--radius-lg` | `var(--radius)` **(Base)** |
| `xl` | 14px | `--radius-xl` | `calc(var(--radius) + 4px)` |
| `2xl` | 16px | -- | Manual |
| `full` | 9999px | -- | Circular / pill |

> **Base radius:** `--radius: 0.625rem` (10px)

---

### 4.2 Uso por Componente

| Componente | Radius | Token |
|------------|--------|-------|
| **Buttons** | 10px | `rounded-lg` |
| **Cards** | 14px | `rounded-xl` |
| **Inputs** | 8px | `rounded-md` |
| **Badges** | 8px | `rounded-md` |
| **Modals / Dialogs** | 14px | `rounded-xl` |
| **Pills / Tags** | 9999px | `rounded-full` |
| **FactoringKpiCard** | 14px | `rounded-xl` |

> **Regla:** Elementos hijos deben tener radius menor o igual que el padre.

---

## 5. ELEVATION / SHADOWS

### 5.1 Light Mode (Brand-Toned #1C2D3A)

| Nivel | CSS Variable | Valor |
|-------|-------------|-------|
| **1** | `--shadow-elevation-1` | `0 1px 2px 0 rgba(28, 45, 58, 0.05)` |
| **2** | `--shadow-elevation-2` | `0 4px 6px -1px rgba(28, 45, 58, 0.1), 0 2px 4px -2px rgba(28, 45, 58, 0.1)` |
| **3** | `--shadow-elevation-3` | `0 10px 15px -3px rgba(28, 45, 58, 0.1), 0 4px 6px -4px rgba(28, 45, 58, 0.1)` |
| **4** | `--shadow-elevation-4` | `0 20px 25px -5px rgba(28, 45, 58, 0.1), 0 8px 10px -6px rgba(28, 45, 58, 0.1)` |

### 5.2 Dark Mode (Stronger Black)

| Nivel | CSS Variable | Valor |
|-------|-------------|-------|
| **1** | `--shadow-elevation-1` | `0 1px 2px 0 rgba(0, 0, 0, 0.3)` |
| **2** | `--shadow-elevation-2` | `0 4px 6px -1px rgba(0, 0, 0, 0.3), 0 2px 4px -2px rgba(0, 0, 0, 0.3)` |
| **3** | `--shadow-elevation-3` | `0 10px 15px -3px rgba(0, 0, 0, 0.3), 0 4px 6px -4px rgba(0, 0, 0, 0.3)` |
| **4** | `--shadow-elevation-4` | `0 20px 25px -5px rgba(0, 0, 0, 0.3), 0 8px 10px -6px rgba(0, 0, 0, 0.3)` |

### 5.3 Uso por Contexto

| Elemento | Elevation | Tailwind Class |
|----------|-----------|----------------|
| Botones default, inputs | 1 | `shadow-elevation-1` |
| Cards estaticas, tablas | 2 | `shadow-elevation-2` |
| Cards hover, dropdowns, tooltips | 3 | `shadow-elevation-3` |
| Modals, sidebars, KPI Cards activas | 4 | `shadow-elevation-4` |

**Regla de profundidad (stacking order):**
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

| Token | Valor | Descripcion |
|-------|-------|-------------|
| `sm` | 640px | Mobile landscape |
| `md` | 768px | Tablet portrait |
| `lg` | 1024px | Tablet landscape / Desktop |
| `xl` | 1280px | Desktop large |
| `2xl` | 1536px | Desktop extra large |

**Container max-width:** `1400px` (en `2xl`)

**Mobile-First Approach:**
```jsx
// CORRECTO - de menor a mayor
<div className="text-sm md:text-base lg:text-lg">

// INCORRECTO - de mayor a menor
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

### 7.2 Patrones de Grid Comunes

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

| Contexto | Token | Tailwind |
|----------|-------|----------|
| Elementos pequenos | `gap-2` | 8px |
| Grid estandar | `gap-4` | 16px |
| Secciones principales, KPI | `gap-6` | 24px |
| Grandes secciones | `gap-8` | 32px |

---

## 8. ANIMACIONES

### 8.1 Durations

| Token | Valor (ms) | Valor (s) | Uso |
|-------|-----------|-----------|-----|
| `instant` | 0ms | 0s | Sin animacion |
| `fast` | 150ms | 0.15s | Hover, micro-interactions |
| `normal` | **300ms** | **0.3s** | **Default.** Modals, transiciones |
| `slow` | 500ms | 0.5s | Page transitions |
| `slower` | 800ms | 0.8s | Loading overlays |

> **Default del sistema: 300ms** con easing `smooth`.

---

### 8.2 Easing Functions

| Token | Valor | Uso |
|-------|-------|-----|
| `linear` | `cubic-bezier(0, 0, 1, 1)` | Progreso, loaders |
| `easeIn` | `cubic-bezier(0.4, 0, 1, 1)` | Salidas de pantalla |
| `easeOut` | `cubic-bezier(0, 0, 0.2, 1)` | Entradas |
| `easeInOut` | `cubic-bezier(0.4, 0, 0.2, 1)` | Transiciones bidireccionales |
| **`smooth`** | **`cubic-bezier(0.25, 0.1, 0.25, 1)`** | **Default del sistema** |
| `snappy` | `cubic-bezier(0.4, 0, 0.6, 1)` | Interacciones rapidas |
| `bounce` | `cubic-bezier(0.68, -0.55, 0.265, 1.55)` | Efecto rebote |

---

### 8.3 Motion Variants (Motion/React)

```typescript
// Importar desde /lib/animation-config.ts
import {
  fadeVariants,         // Fade in/out
  fadeScaleVariants,    // Fade + scale (modals, popovers)
  slideFromRightVariants,  // Drawers, sidebars
  slideFromLeftVariants,
  slideFromBottomVariants, // Sheets, toasts
  slideFromTopVariants,
  pageTransitionVariants,  // Transiciones de pagina
  staggerContainerVariants, // Listas con stagger
  staggerItemVariants,
} from "../lib/animation-config";
```

**Ejemplo de uso:**
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

### 8.4 Transition Configs Pre-configurados

| Config | Duration | Easing |
|--------|----------|--------|
| `fast` | 0.15s | smooth |
| `normal` | 0.3s | smooth |
| `slow` | 0.5s | smooth |
| `spring` | -- | stiffness: 300, damping: 30 |
| `bounce` | -- | stiffness: 400, damping: 15 |

---

### 8.5 CSS Utility Classes

Definidas en `globals.css`, disponibles globalmente:

| Clase | Efecto | Hover |
|-------|--------|-------|
| `hover-lift` | Transicion transform + shadow | `translateY(-2px)` + `elevation-3` |
| `hover-scale` | Transicion transform | `scale(1.02)` |
| `hover-brightness` | Transicion filter | `brightness(1.1)` |

---

### 8.6 Loading Delays

| Token | Valor | Uso |
|-------|-------|-----|
| `immediate` | 0ms | Sin delay |
| `short` | 300ms | Acciones rapidas |
| `normal` | 500ms | Delay estandar |
| `long` | 1000ms | Operaciones lentas |

---

### 8.7 Accesibilidad de Movimiento

```css
/* Automaticamente aplicado en globals.css */
@media (prefers-reduced-motion: reduce) {
  * {
    animation-duration: 0.01ms !important;
    transition-duration: 0.01ms !important;
  }
}
```

**En TypeScript:**
```typescript
import { shouldReduceMotion, getTransition, getVariants } from "../lib/animation-config";

// Verificar preferencia del usuario
if (shouldReduceMotion()) { /* ... */ }

// Obtener transicion respetando preferencia
const transition = getTransition("normal");

// Obtener variants respetando preferencia
const variants = getVariants(fadeScaleVariants);
```

---

## 9. Z-INDEX

Escala recomendada para stacking contexts:

| Capa | z-index | Elementos |
|------|---------|-----------|
| **Base** | 0 | Contenido de pagina normal |
| **Cards** | 1 | Cards elevadas, badges absolutos |
| **Sticky** | 10 | Headers sticky, navbars |
| **Dropdown** | 20 | Dropdown menus, popovers |
| **Sidebar** | 30 | Sidebar navigation |
| **Overlay** | 40 | Backdrop de modals |
| **Modal** | 50 | Dialogs, modals |
| **Toast** | 60 | Notificaciones, toasts |
| **Tooltip** | 70 | Tooltips |
| **Max** | 100 | Casos excepcionales |

---

## 10. REGLAS DE USO RAPIDO

### Colores

```
SIEMPRE usar tokens semanticos:
  bg-background, text-foreground, border-border

NUNCA usar valores hardcoded:
  bg-white, text-black, border-gray-200

Color semantico por contexto:
  primary      -> Acciones principales, CTA
  secondary    -> Acciones secundarias
  destructive  -> Eliminar, rechazar, errores
  success      -> Confirmaciones, estados exitosos
  warning      -> Advertencias, estados pendientes
  info         -> Informacion neutral
  muted        -> Backgrounds secundarios
```

### Accesibilidad (WCAG 2.1 AA)

```
Texto normal (< 18px):      Contraste minimo 4.5:1
Texto grande (>= 18px):     Contraste minimo 3:1
Elementos interactivos:     Contraste minimo 4.5:1
Focus indicator:            Contraste 3:1 contra fondo
Color NO es el unico indicador de estado
```

### Checklist Rapido al Crear un Componente

```
[ ] Usa tokens semanticos (no colores hardcoded)
[ ] Funciona en Light y Dark mode
[ ] Respeta la escala de spacing (multiplos de 4px)
[ ] Border-radius consistente con su tipo de componente
[ ] Elevation correcta segun su contexto
[ ] Tipografia sigue la jerarquia definida
[ ] Maximo 3 font-weights por componente
[ ] Focus visible en elementos interactivos
[ ] Cumple WCAG AA contrast ratios
[ ] Animaciones respetan prefers-reduced-motion
[ ] Responsive: mobile-first approach
```

---

## ARCHIVOS DE REFERENCIA

| Archivo | Proposito |
|---------|-----------|
| `/styles/globals.css` | CSS custom properties (SSoT para CSS) con soporte light/dark |
| `/figma-tokens.json` | Export para Figma Variables Import plugin (3 colecciones: Primitives, Semantic, Component) |
| `/tailwind-preset.cjs` | Configuracion de Tailwind (DEPRECATED, v3 only) |
| `/lib/animation-config.ts` | Configuracion centralizada de animaciones |
| `/components/providers/ThemeProvider.tsx` | Provider para toggle light/dark mode |

---

## 11. SISTEMA DE TEMAS

### Arquitectura Simplificada

El proyecto usa **exclusivamente el tema default CESIONBNK** sin selector de temas múltiples.

```
:root (0,0,1)        <- globals.css (light mode variables)
.dark (0,1,0)        <- globals.css (dark mode overrides)
```

### Variables Definidas

**Light mode** (`:root`):
- `--background`, `--foreground`, `--card`, `--card-foreground`
- `--popover`, `--popover-foreground`, `--secondary`, `--secondary-foreground`
- `--muted`, `--muted-foreground`, `--accent`, `--accent-foreground`
- `--destructive/success/warning/info` + sus `-foreground`
- `--border`, `--input`, `--input-border`, `--input-background`
- `--switch-background`, `--radius`
- `--sidebar-*` (8 variables)
- `--shadow-elevation-{1-4}`

**Dark mode** (`.dark`): 
- Todas las anteriores con valores ajustados para modo oscuro

### Reglas Críticas

1. **`--primary` (`#00c951`) y `--ring`**: Se mantienen constantes en light y dark mode (brand identity)
2. **`globals.css` es el único archivo de estilos**: No hay archivos de temas adicionales
3. **ThemeProvider**: Solo gestiona el toggle entre light/dark, sin selector de estilos múltiples

---

*Version: 1.2.0*
*Ultima actualizacion: Febrero 11, 2026*
*Licencia: Privada - C-Financia / CESIONBNK*