# FIGMA LIBRARY ROADMAP — De Figma Make a Figma Design Library

> **Status**: En ejecucion — Fase 1 completada (figma-tokens.json generado)
> **Created**: 2026-02-19
> **Updated**: 2026-02-19
> **Contexto**: Guía para transcribir el DSM code-first (Figma Make) a una Figma Design Library conectada.

---

## RESUMEN

El DSM de CESIONBNK ya está validado visualmente en Figma Make. El objetivo es **transcribir fielmente** (no rediseñar) cada token, estilo y componente a Figma Design para tener una librería publicable como Team Library.

---

## FASE 1 — Variables de Figma (Tokens) | ~2-3 horas | **COMPLETADA**

Base de toda la librería. Sin esto, nada escala.

### 3 Colecciones de Variables

| Colección | Contenido | Modos | Fuente en código |
|---|---|---|---|
| **Primitives** | Colores crudos (hex values) | — | `globals.css` líneas 30-115 |
| **Semantic** | Colores semánticos que referencian primitives | Light / Dark | `:root` y `.dark` en `globals.css` |
| **Component** | Radius, spacing, widths específicas | — | `TOKENS.md` secciones 3-4 |

### Mapeo directo CSS → Figma Variables

```
globals.css                    →  Figma Variable
─────────────────────────────────────────────────
--primary: #00c951               Primitives/Green/500
--secondary: #1C2D3A           →  Primitives/Navy/900
--background: #ffffff  (:root) →  Semantic/Surface/Background (Light)
--background: #0f172a  (.dark) →  Semantic/Surface/Background (Dark)
--destructive: #ef4444         →  Semantic/Feedback/Destructive (Light)
--destructive: #991b1b         →  Semantic/Feedback/Destructive (Dark)
--radius: 0.625rem             →  Component/Radius/lg = 10
--radius-sm: calc(-4px)        →  Component/Radius/sm = 6
```

### Regla clave

Las variables semánticas en Figma deben **referenciar** las primitives, no ser valores directos. Así cuando se cambie un primitivo, se propaga automáticamente.

### Herramienta recomendada

Plugin [**Variables Import**](https://www.figma.com/community/plugin/1254544481498308624) de Figma — importar `/figma-tokens.json` directo.

> **Artefacto generado**: `/figma-tokens.json` — Contiene las 3 colecciones (Primitives, Semantic con Light/Dark, Component) + referencia de shadows, text styles, spacing y radius-por-componente. Listo para importar.

---

## FASE 2 — Estilos de Texto | ~1 hora

Fuente: `TOKENS.md` sección 2.6 — Jerarquía Tipográfica Completa.

| Style Name | Font | Size | Weight | Line Height | Letter Spacing |
|---|---|---|---|---|---|
| `Display` | Satoshi | 48px | Bold (700) | 150% | 0.025em |
| `H1 / Page Title` | Satoshi | 30px | Semibold (600) | 150% | 0.025em |
| `H2 / Section Title` | Satoshi | 24px | Semibold (600) | 150% | 0.025em |
| `H3 / Subsection` | Satoshi | 20px | Medium (500) | 150% | 0.025em |
| `H4 / Card Title` | Satoshi | 18px | Medium (500) | 150% | 0.025em |
| `Body / Default` | Satoshi | 16px | Regular (400) | 150% | 0.025em |
| `Body Small` | Satoshi | 14px | Regular (400) | 150% | 0.025em |
| `Caption` | Satoshi | 12px | Regular (400) | 150% | 0.025em |
| `Label` | Satoshi | 14px | Medium (500) | 150% | 0.025em |
| `Button` | Satoshi | 16px | Medium (500) | 150% | 0.025em |
| `KPI Value` | Satoshi | 36px | Bold (700) | 125% | 0.025em |

> **Importante:** Instalar Satoshi localmente o usar el plugin Figma Fonts. El CDN de Fontshare (CSS) no aplica en Figma Design.

---

## FASE 3 — Estilos de Efecto (Shadows) | ~30 min

Fuente: `globals.css` + `TOKENS.md` sección 5.

| Effect Style | Valor | Uso |
|---|---|---|
| `Elevation/1` | `0 1px 2px rgba(28,45,58,0.05)` | Buttons, inputs |
| `Elevation/2` | `0 4px 6px -1px rgba(28,45,58,0.1), 0 2px 4px -2px rgba(28,45,58,0.1)` | Cards, tablas |
| `Elevation/3` | `0 10px 15px -3px rgba(28,45,58,0.1), 0 4px 6px -4px rgba(28,45,58,0.1)` | Hover, dropdowns |
| `Elevation/4` | `0 20px 25px -5px rgba(28,45,58,0.1), 0 8px 10px -6px rgba(28,45,58,0.1)` | Modals, sidebars |

> En Dark Mode los shadows usan `rgba(0,0,0,0.3)` en lugar de navy-toned.

---

## FASE 4 — Componentes Figma (Bottom-Up) | ~2-4 días

Seguir el orden de dependencias del Atomic Design. No empezar por páginas — empezar por átomos.

### Ola 1 — Átomos base (los que más se reusan)

```
Button, Input, Label, Badge, Checkbox, Radio, Switch, Toggle,
Avatar, Separator, Skeleton, Progress, Tooltip
```

### Ola 2 — Moléculas compuestas

```
Card, Alert, Dialog, Sheet, Dropdown, Select, Tabs,
Breadcrumb, Pagination, Calendar, Popover
```

### Ola 3 — Organismos (advanced/)

```
DataTable, FormBuilder, StepIndicator, Combobox, DatePickerWithPresets,
FileUploader, RichTextEditor
```

### Ola 4 — Patterns de negocio

```
AppLayout (AdminLayout + ClientLayout), FactoringKpiCard, KPIShowcase,
NotificationCenter, MultiStepWizard, StatsDashboard
```

---

## FASE 5 — Triple Alignment (NAMING_CONVENTION.md)

Aplicar al pie de la letra el naming ya definido:

```
Código                              →  Figma Component Name
──────────────────────────────────────────────────────────
components/ui/button.tsx            →  UI / Button
components/ui/card.tsx              →  UI / Card
components/widgets/stat-card.tsx    →  Widgets / StatCard
components/advanced/data-table.tsx  →  Advanced / DataTable
components/patterns/app-layout.tsx  →  Patterns / AppLayout
```

### Estructura de Pages en Figma

| Figma Page | Directorio | Componentes activos |
|---|---|---|
| `UI /` | `components/ui/` | 65 |
| `Widgets /` | `components/widgets/` | 19 |
| `Advanced /` | `components/advanced/` | 20 |
| `Patterns /` | `components/patterns/` | 20 |

---

## FASE 6 — Propiedades de Componente en Figma

Mapear los props de React a Component Properties de Figma:

| React Prop | Figma Property Type | Ejemplo |
|---|---|---|
| `variant="default\|destructive\|outline"` | **Variant** | Button variants |
| `size="sm\|md\|lg"` | **Variant** | Button sizes |
| `disabled={boolean}` | **Boolean** | Toggle estado disabled |
| `icon={<Icon />}` | **Instance Swap** | Slot de icono |
| `children="text"` | **Text** | Contenido editable |
| `badge={<Badge />}` | **Instance Swap** | Slot de badge |

### Ejemplo: Button

```
Figma Component: UI / Button
  Properties:
    - Variant: Default, Secondary, Destructive, Outline, Ghost, Link
    - Size: sm, default, lg, icon
    - State: Default, Hover, Pressed, Focused, Disabled
    - Has Icon: Boolean (true/false)
    - Icon: Instance Swap (Lucide icons)
    - Label: Text ("Button")
```

---

## RECOMENDACIONES PRÁCTICAS

### 1. No rediseñar — transcribir

El DSM ya está validado visualmente en Make. Abrir el preview de Make al lado de Figma y transcribir pixel por pixel. No es momento de "mejorar" — es momento de replicar fielmente.

### 2. Auto Layout = Flexbox

Cada componente en Figma debe usar Auto Layout que mapee directamente a Flexbox/Grid de Tailwind:

| Tailwind | Figma Auto Layout |
|---|---|
| `gap-2` | Spacing: 8 |
| `gap-4` | Spacing: 16 |
| `p-6` | Padding: 24 (all sides) |
| `px-4 py-2` | Padding: H=16, V=8 |

### 3. Variables > Styles para colores

En Figma moderno, usar **Variables** (no Color Styles) para colores. Las Variables soportan modos (Light/Dark), los Styles no. Reservar Styles solo para Text y Effects.

### 4. No incluir componentes eliminados

`COMPONENTS.md` marca 14 componentes como `~~Eliminado en v0.3.0~~`. No crearlos en Figma. Solo los activos.

### 5. Publicar como Figma Library

Una vez terminada la Ola 1-2, publicar el archivo como **Team Library** en Figma. Así cualquier archivo de diseño de CESIONBNK puede consumir los componentes y recibir actualizaciones.

### 6. Code Connect (Figma Dev Mode)

Si el equipo tiene plan Enterprise/Organization, [Code Connect](https://www.figma.com/dev-mode/) permite **vincular** cada componente de Figma con su archivo `.tsx`. Cuando un dev selecciona un componente en Figma, ve directamente:

```tsx
import { Button } from "@/components/ui/button";
<Button variant="default" size="lg">Click me</Button>
```

Esto cierra el loop Design ↔ Code completamente.

---

## ORDEN DE PRIORIDAD

| Prioridad | Qué hacer | Impacto |
|---|---|---|
| **P0** | Variables (colores semánticos + radius) con modos Light/Dark | Todo depende de esto |
| **P0** | Text Styles (los 11 de la tabla) | Base tipográfica |
| **P1** | Ola 1 componentes (Button, Input, Card, Badge...) | 80% de la UI usa estos |
| **P1** | Effect Styles (4 elevations) | Consistencia visual |
| **P2** | Ola 2-3 componentes | Completar catálogo |
| **P3** | Ola 4 + Patterns de negocio | Screens completos |
| **P3** | Code Connect | Developer experience |

---

## PRE-REQUISITO

> ~~Completar la limpieza pendiente de componentes antes de iniciar la transcripcion a Figma. No transcribir componentes que van a ser eliminados.~~
> **Completado**: Limpieza de componentes huerfanos ejecutada (StatusBadge eliminado, carousel/menubar/resizable excluidos del barrel y protegidos por el entorno).

---

*Version: 1.0.0*
*Creado: Febrero 19, 2026*
*Licencia: Privada - C-Financia / CESIONBNK*