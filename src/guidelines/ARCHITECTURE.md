# ARQUITECTURA DE DIRECTORIOS — CESIONBNK

**Versión**: 6.4.0  
**Última actualización**: Febrero 10, 2026

---

## 📂 ESTRUCTURA GENERAL

```
/
├── 📄 App.tsx                          # Entry point de la aplicación
├── 📋 package.json                     # Dependencias y scripts npm
├── 🎨 figma-tokens.json                # Tokens de diseño desde Figma
├── 🔧 cesionbnk-theme.ts               # Configuración de tema central
├── 🏗️ components/                     # Sistema de componentes (4 capas)
├── 💼 factoring/                       # Módulo de negocio Factoring
├── 📄 pages/                           # Vistas de navegación/demostración
├── 🎨 styles/                          # Sistema de estilos CSS
├── 📚 docs/                            # Documentación MDX para Storybook
├── 📖 guidelines/                      # Documentación del sistema
├── 🔌 hooks/                           # Custom React Hooks
├── 🛠️ lib/                             # Utilidades y helpers
├── 📥 imports/                         # Componentes importados de Figma
└── ⚙️ workflows/                       # GitHub Actions CI/CD
```

---

## 🏗️ CAPA 1: COMPONENTES BASE — `/components/ui/`

**Propósito**: Componentes atómicos fundamentales basados en Shadcn UI y Radix.

**Total**: ~80 componentes

### Subcategorías

#### **Formularios y Inputs** (17 componentes)
```
button.tsx                  # Botón base con variantes (default, destructive, outline, ghost, link)
input.tsx                   # Input de texto con validación
textarea.tsx                # Área de texto estándar
textarea-autoresize.tsx     # Textarea que crece automáticamente
checkbox.tsx                # Checkbox con estados indeterminado
radio-group.tsx             # Grupo de radio buttons
select.tsx                  # Select dropdown nativo
multi-select.tsx            # Selector múltiple con chips
switch.tsx                  # Toggle switch on/off
slider.tsx                  # Slider de rango numérico
input-otp.tsx               # Input para códigos OTP
input-file.tsx              # Upload de archivos con drag & drop
calendar.tsx                # Calendario para fechas
date-range-picker.tsx       # Selector de rango de fechas
label.tsx                   # Label semántico para formularios
form.tsx                    # Wrapper de react-hook-form
toggle.tsx                  # Toggle button simple
```

#### **Navegación** (8 componentes)
```
navigation-menu.tsx         # Menú de navegación principal
breadcrumb.tsx              # Navegación de migas de pan
menubar.tsx                 # Barra de menú tipo desktop
command.tsx                 # Command palette (Cmd+K)
tabs.tsx                    # Pestañas horizontales/verticales
pagination.tsx              # Paginación de datos
sidebar.tsx                 # Sidebar colapsable
sidebar-button.tsx          # Botón especializado para sidebar
```

#### **Overlays y Modales** (9 componentes)
```
dialog.tsx                  # Modal centrado estándar
alert-dialog.tsx            # Modal de confirmación/alerta
sheet.tsx                   # Panel lateral deslizable
drawer.tsx                  # Drawer móvil desde abajo
bottom-sheet.tsx            # Bottom sheet móvil
popover.tsx                 # Popover flotante
tooltip.tsx                 # Tooltip al hover
hover-card.tsx              # Card expandible al hover
context-menu.tsx            # Menú contextual click derecho
```

#### **Feedback y Estado** (11 componentes)
```
alert.tsx                   # Alerta inline con variantes
badge.tsx                   # Badge de estado/categoría
progress.tsx                # Barra de progreso lineal
progress-with-range.tsx     # Progress con mín/máx personalizados
skeleton.tsx                # Skeleton loader simple
skeleton-variants.tsx       # Skeletons especializados
loading-states.tsx          # Estados de carga (spinner, dots)
loading-overlay.tsx         # Overlay de carga a pantalla completa
sonner.tsx                  # Toast notifications (Sonner)
empty-state.tsx             # Estado vacío con ilustración
error-boundary.tsx          # Boundary de errores React
```

#### **Layout** (8 componentes)
```
card.tsx                    # Contenedor Card con header/footer
separator.tsx               # Separador horizontal/vertical
accordion.tsx               # Acordeón expandible
collapsible.tsx             # Sección colapsable simple
scroll-area.tsx             # Área scrollable customizada
resizable.tsx               # Paneles redimensionables
aspect-ratio.tsx            # Container con aspect ratio fijo
carousel.tsx                # Carrusel de slides
```

#### **Tablas y Listas** (2 componentes)
```
table.tsx                   # Tabla HTML semántica
dropdown-menu.tsx           # Menú dropdown con submenús
```

#### **Especializado** (12 componentes)
```
avatar.tsx                  # Avatar circular con fallback
chart.tsx                   # Wrapper base para Recharts
code-block.tsx              # Bloque de código con syntax highlight
floating-action-button.tsx  # FAB flotante (mobile)
page-layout.tsx             # Layout maestro de páginas
page-transition.tsx         # Transiciones entre páginas
safe-chart-container.tsx    # Container seguro para gráficos
split-button.tsx            # Botón con dropdown
toggle-button-group.tsx     # Grupo de toggles excluyentes
toggle-group.tsx            # Grupo de toggles tipo radio
use-mobile.ts               # Hook para detección mobile
utils.ts                    # Utilidades CSS (cn, etc.)
```

#### **Showcases** (3 archivos)
```
component-showcase.tsx      # Demostración de componentes UI
grid-showcase.tsx           # Sistema de grids Tailwind
icon-grid.tsx               # Galería de iconos Lucide
```

---

## 🔧 CAPA 2: COMPONENTES AVANZADOS — `/components/advanced/`

**Propósito**: Componentes complejos con lógica de negocio reutilizable.

**Total**: ~25 componentes

### Categorías

#### **Visualización de Datos** (8 componentes)
```
ChartShowcase.tsx           # Galería de tipos de gráficos Recharts
DataTable.tsx               # Tabla con ordenamiento, filtros y paginación
FunnelChart.tsx             # Gráfico de embudo (conversión)
GaugeChart.tsx              # Gráfico de medidor circular
Heatmap.tsx                 # Mapa de calor (matriz de datos)
Sparkline.tsx               # Gráfico minimalista inline
TreeTable.tsx               # Tabla jerárquica expandible
TreeTableV2.tsx             # Versión optimizada de TreeTable
TreemapChart.tsx            # Treemap de categorías anidadas
```

#### **Formularios Complejos** (5 componentes)
```
ConditionalForm.tsx         # Formulario con campos condicionales
FormBuilder.tsx             # Constructor dinámico de formularios
MultiColumnForm.tsx         # Formulario multi-columna responsive
DatePickerWithPresets.tsx   # Date picker con rangos predefinidos
FileUploader.tsx            # Uploader avanzado con preview
```

#### **Interacción** (5 componentes)
```
Combobox.tsx                # Combo searchable con autocomplete
TransferList.tsx            # Selector dual con transferencia
RatingComponent.tsx         # Sistema de calificación (estrellas)
StepIndicator.tsx           # Indicador de pasos (wizard)
Timeline.tsx                # Línea de tiempo vertical
```

#### **Rendimiento** (3 componentes)
```
InfiniteScroll.tsx          # Scroll infinito con lazy loading
VirtualizedList.tsx         # Lista virtualizada (react-window)
MasonryGrid.tsx             # Grid tipo Pinterest
```

#### **Documentos** (2 componentes)
```
InvoiceGenerator.tsx        # Generador de facturas PDF
RichTextEditor.tsx          # Editor WYSIWYG
```

#### **Utilidades** (2 componentes)
```
ExportData.tsx              # Exportador CSV/Excel/PDF
MasterDataGrid.tsx          # Data grid maestro multi-uso
```

---

## 🧩 CAPA 3: PATTERNS — `/components/patterns/`

**Propósito**: Composiciones de negocio reutilizables (flujos y módulos).

**Total**: ~28 componentes

### Categorías

#### **Dashboards y KPIs** (6 componentes)
```
KPIShowcase.tsx             # Galería de KPIs financieros
KPIShowcaseExtended.tsx     # KPIs con gráficos embebidos
FactoringKpiCard.tsx        # KPI Card especializado para factoring
FactoringKpiCardGroup.tsx   # Grupo de KPI Cards
StatsDashboard.tsx          # Dashboard de estadísticas genérico
ActivityFeed.tsx            # Feed de actividad/timeline social
```

#### **Factoring Específico** (5 componentes)
```
FactoringCalculator.tsx     # Calculadora de tasa y descuento
CupoValidator.tsx           # Validador de cupos con 7 dimensiones
factoring/FactoringInvoiceTable.tsx      # Tabla de facturas endosables
factoring/FactoringSelectionPage.tsx     # Página de selección de facturas
factoring/InvoiceValidationPanel.tsx     # Panel de validación en tiempo real
factoring/OperationSummary.tsx           # Resumen de operación
```

#### **Workflows** (6 componentes)
```
MultiStepWizard.tsx         # Wizard multi-paso horizontal
OnboardingWizard.tsx        # Wizard de onboarding
ApprovalFlowWizard.tsx      # Wizard de flujo de aprobaciones
ApprovalTimeline.tsx        # Timeline de aprobaciones
CommentThread.tsx           # Sistema de comentarios anidados
NotificationCenter.tsx      # Centro de notificaciones
```

#### **Administración** (5 componentes)
```
AdminPortal.tsx             # Portal administrativo
AuditLogViewer.tsx          # Visualizador de auditoría
DataTableAdvanced.tsx       # Tabla con filtros avanzados
EditableTable.tsx           # Tabla editable inline
AdvancedFilterPanel.tsx     # Panel de filtros multi-criterio
```

#### **UI Patterns** (6 componentes)
```
SearchResults.tsx           # Vista de resultados de búsqueda
UserProfileCard.tsx         # Tarjeta de perfil de usuario
UploadZone.tsx              # Zona de upload con arrastrar
QuickActionToolbar.tsx      # Barra de acciones rápidas
ReportsConsultation.tsx     # Consulta de reportes
```

---

## 🔩 CAPA 4: WIDGETS — `/components/widgets/`

**Propósito**: Componentes UI de propósito específico (micro-componentes).

**Total**: ~23 componentes

### Categorías

#### **Acciones** (2 componentes)
```
ActionButton.tsx            # Botón con icono + texto
FilterBar.tsx               # Barra de búsqueda y filtros
FilterChip.tsx              # Chip de filtro removible
```

#### **Formularios** (2 componentes)
```
FormField.tsx               # Campo de formulario con label/error
ContactForm.tsx             # Formulario de contacto estándar
```

#### **Navegación** (2 componentes)
```
NavigationBar.tsx           # Barra de navegación top
SearchBar.tsx               # Barra de búsqueda con sugerencias
```

#### **Visualización** (5 componentes)
```
StatCard.tsx                # Card de estadística única
StatsGrid.tsx               # Grid de stats cards
StatusKPICard.tsx           # KPI con estado coloreado
TimelineItem.tsx            # Item individual de timeline
InvoiceTable.tsx            # Tabla simple de facturas
```

#### **Design Tokens Preview** (7 componentes)
```
ColorBox.tsx                # Preview de color único
ColorSwatch.tsx             # Paleta de colores
ColorPresetButton.tsx       # Botón selector de preset
ContrastPreview.tsx         # Preview de contraste WCAG
GridSystemPreview.tsx       # Visualización del grid system
SpacingPreview.tsx          # Escala de espaciado
```

#### **Calendario** (1 componente)
```
BookingCalendar.tsx         # Calendario de reservas
```

---

## 💼 MÓDULO DE NEGOCIO — `/factoring/`

**Propósito**: Lógica de dominio del módulo Factoring.

**Total**: ~25 componentes

### Estructura

```
factoring/
├── 📄 FactoringApp.tsx                 # App principal de Factoring (wrapper)
├── 📄 index.ts                         # Barrel export
│
├── 🧩 components/                      # Componentes de dominio Factoring
│   ├── FactoringDashboard.tsx          # Dashboard principal
│   ├── CFDashboard.tsx                 # Dashboard C-Financia
│   ├── LiquidityCalculator.tsx         # Calculadora de liquidez
│   ├── OperationDetailCard.tsx         # Detalle de operación
│   ├── OperationsList.tsx              # Lista de operaciones
│   ├── StatusBadge.tsx                 # Badge de estado de factura
│   └── ChartStyles.tsx                 # Estilos compartidos de gráficos
│
├── 📂 views/                           # Vistas completas (páginas internas)
│   ├── ClientDashboard.tsx             # Vista Cliente
│   ├── RadianDashboard.tsx             # Vista Radian Standard
│   ├── RadianAdminDashboard.tsx        # Vista Radian Admin
│   ├── FactoringNewOperation.tsx       # Nueva operación (wizard)
│   ├── OperationDetailStep1.tsx        # Paso 1: Selección
│   └── OperationDetailStep2.tsx        # Paso 2: Confirmación
│
├── 🎯 c-financia/                      # Sub-módulo C-Financia
│   ├── CFinanciaFlow.tsx               # Flujo completo Admin (con persistencia)
│   ├── CFinanciaClientFlow.tsx         # Flujo Cliente
│   ├── FactoringWorkspace.tsx          # Workspace de trabajo
│   ├── LoginScreen.tsx                 # Pantalla de login
│   ├── ModulosScreen.tsx               # Selector de módulos
│   ├── CFinanciaNavbar.tsx             # Navbar específico
│   └── LoadInvoicesModal.tsx           # Modal de carga de facturas
│
├── 🔔 modals/                          # Modales reutilizables
│   └── UploadInvoicesDialog.tsx        # Dialog de upload de facturas CUFE
│
├── 🧪 playground/                      # Componentes experimentales
│   ├── PlaygroundIndex.tsx             # Índice de playground
│   └── FactoringNewOperationScreen.tsx # Prototipo nueva operación
│
└── 🎨 Componentes UI Especializados    # Widgets de dominio
    ├── CollectionTimeline.tsx          # Timeline de cobranza
    ├── DocumentVerificationStatus.tsx  # Estado de verificación DIAN
    ├── FactoringRateDisplay.tsx        # Display de tasa de factoring
    ├── FactoringTour.tsx               # Product tour guiado
    ├── InvoiceCard.tsx                 # Card de factura individual
    ├── LiquidityMeter.tsx              # Medidor de liquidez circular
    ├── PayorCard.tsx                   # Card de pagador con cupo
    └── RiskIndicator.tsx               # Indicador de riesgo visual
```

### **Arquitectura de Estado**

- **Persistencia en localStorage**:
  - `FactoringApp.tsx` → `currentView` (Cliente, Radian, RadianAdmin)
  - `CFinanciaFlow.tsx` → `view` + `selectedModule` (Login, Módulos, Workspace)

- **Regla crítica**: Las tarjetas KPI son **solo visualización** (no tienen `onClick`).

---

## 🎨 SISTEMA DE ESTILOS — `/styles/`

```
styles/
├── globals.css                         # Base CSS + Tokens semánticos
│                                       # Variables --cfinancia-* como canales RGB
│                                       # Patrón: dark:bg-slate-900 (no tokens oscuros)
│
└── themes/                             # Temas CSS independientes (8 temas)
    ├── theme-glass.css                 # Tema Glass (Apple/Arc)
    ├── theme-heroui.css                # Tema Hero UI Pro
    ├── theme-highcontrast.css          # Alto contraste WCAG AAA
    ├── theme-minimal.css               # Minimal (Notion/Stripe)
    ├── theme-premium.css               # Premium (Linear/Vercel)
    ├── theme-soft.css                  # Soft (Pastel/Cozy)
    └── theme-tailwindpro.css           # Tailwind Pro
```

**Nota**: El tema `default` está en `globals.css` (CESIONBNK brand).

### **Especificidad CSS**

```css
html[data-theme="premium"]              /* 0,1,1 — Sobrescribe :root */
html.dark[data-theme="premium"]         /* 0,2,1 — Dark mode específico */
```

---

## 📄 VISTAS DE DEMOSTRACIÓN — `/pages/`

**Propósito**: Páginas de navegación para Storybook/testing.

**Total**: ~120 páginas

### Organización

- Cada componente UI/Advanced/Pattern tiene su `{Component}Page.tsx`
- Sirven como ejemplos de uso y playground
- Importadas dinámicamente por `PageRenderer.tsx`

```
pages/
├── HomePage.tsx                        # Landing page del DSM
├── DSMDashboardPage.tsx                # Dashboard principal
├── ButtonPage.tsx                      # Ejemplo: /components/ui/button
├── DataTablePage.tsx                   # Ejemplo: /components/advanced/DataTable
├── KpiShowcasePage.tsx                 # Ejemplo: /components/patterns/KPIShowcase
└── ... (117 páginas más)
```

---

## 📚 DOCUMENTACIÓN — `/docs/` y `/guidelines/`

### `/docs/` — Documentación MDX para Storybook

```
docs/
├── Introduction.mdx                    # Introducción al DSM
├── DesignTokens.mdx                    # Documentación de tokens
├── DarkMode.mdx                        # Guía de dark mode
├── ComponentLayers.mdx                 # Arquitectura de 4 capas
├── Accessibility.mdx                   # Guía de accesibilidad
├── FactoringModule.mdx                 # Documentación del módulo Factoring
└── Contributing.mdx                    # Guía de contribución
```

### `/guidelines/` — Guías del Sistema

```
guidelines/
├── Guidelines.md                       # Índice maestro
├── TOKENS.md                           # Tokens de diseño (colores, tipografía)
├── COMPONENTS.md                       # Catálogo de componentes
├── PROMPT_GUIDE.md                     # Plantillas de prompts para IA
└── ARCHITECTURE.md                     # Este archivo
```

---

## 🔌 HOOKS — `/hooks/`

```
hooks/
├── index.ts                            # Barrel export
├── useLoadingState.ts                  # Hook de estados de carga
└── usePageTransition.ts                # Hook de transiciones de página
```

---

## 🛠️ UTILIDADES — `/lib/`

```
lib/
├── index.ts                            # Barrel export
├── utils.ts                            # cn() + helpers generales
├── theme-utils.ts                      # Utilidades de temas
└── animation-config.ts                 # Configuración de animaciones Motion
```

---

## 🎭 COMPONENTES ROOT — `/components/` (raíz)

```
components/
├── Logo.tsx                            # Logo de CESIONBNK
├── PageRenderer.tsx                    # Renderizador dinámico de páginas
├── SidebarNew.tsx                      # Sidebar principal de navegación
├── ThemeProvider.tsx                   # Proveedor de tema (dark/light + themes)
├── ThemeStyleSelector.tsx              # Selector visual de temas
│
├── 🔌 providers/                       # Context providers
│   ├── LoadingProvider.tsx             # Contexto de loading global
│   └── TransitionProvider.tsx          # Contexto de transiciones
│
├── 🌐 i18n/                            # Internacionalización
│   ├── LanguageProvider.tsx            # Proveedor de idioma
│   ├── LanguageSelector.tsx            # Selector de idioma
│   └── translations.ts                 # Traducciones (ES/EN)
│
├── ❓ help/                            # Sistema de ayuda
│   ├── HelpProvider.tsx                # Contexto de ayuda
│   ├── HelpButton.tsx                  # Botón de ayuda flotante
│   ├── HelpCenter.tsx                  # Centro de ayuda
│   ├── ContextualHelp.tsx              # Ayuda contextual inline
│   ├── ProductTour.tsx                 # Tour guiado
│   └── tourSteps.ts                    # Definición de pasos del tour
│
├── ♿ accessibility/                   # Componentes de accesibilidad
│   ├── FocusTrap.tsx                   # Trampa de foco (modales)
│   ├── LiveRegion.tsx                  # Región ARIA live
│   └── SkipLink.tsx                    # Link de "Saltar al contenido"
│
├── 🖼️ figma/                           # Componentes de integración Figma
│   └── ImageWithFallback.tsx           # Imagen con fallback (PROTEGIDO)
│
└── 🖼️ factoring/                       # Componentes de integración Factoring
    ├── FactoringApp.tsx                # Wrapper de Factoring App
    ├── FactoringHeader.tsx             # Header específico
    ├── FactoringSidebar.tsx            # Sidebar específico
    ├── FactoringViewRenderer.tsx       # Renderizador de vistas
    ├── StatusBadge.tsx                 # Badge de estado
    └── views/                          # Vistas integrables
        ├── ClientDashboard.tsx
        ├── RadianAdminDashboard.tsx
        └── VinculacionView.tsx
```

---

## 📥 IMPORTS DE FIGMA — `/imports/`

**Propósito**: Componentes generados automáticamente desde Figma.

```
imports/
├── 🖼️ Componentes React de Figma
│   ├── CFinanciaDsmV10.tsx
│   ├── CFinanciaDsmV12.tsx
│   ├── CFinanciaDsmV12-1302-72446.tsx
│   ├── Login.tsx
│   ├── Login-1157-7828.tsx
│   ├── Modulos.tsx
│   ├── FactoringNuevaOperacion.tsx
│   ├── CargaDeFacturasCufe.tsx
│   ├── MainBackground.tsx
│   ├── Navbar.tsx
│   ├── KpIs.tsx
│   └── ... (primitivos)
│
└── 🎨 SVGs importados (paths)
    ├── svg-1t7yz.tsx
    ├── svg-2k5s79wfrk.ts
    └── ... (17 archivos SVG)
```

**⚠️ IMPORTANTE**:
- **Raster images**: Usar `import img from "figma:asset/hash.png"` (sin prefijo `./`)
- **SVGs**: Usar `import paths from "./imports/svg-xxxx"`

---

## ⚙️ CI/CD — `/workflows/`

```
workflows/
├── validate.yml                        # Validación de código (lint, build)
├── storybook.yml                       # Deploy de Storybook a GitHub Pages
└── publish.yml                         # Publicación a npm
```

---

## 🔐 ARCHIVOS DE CONFIGURACIÓN (raíz)

```
/
├── package.json                        # Dependencias y scripts
├── tsconfig.paths.json                 # Alias de TypeScript
├── vite.config.lib.ts                  # Config de Vite para library build
├── tailwind-preset.js                  # Preset de Tailwind compartido
├── preview.tsx                         # Preview de Storybook
├── manager.ts                          # Manager de Storybook
├── main.ts                             # Entry point alternativo
├── index.ts                            # Barrel export del paquete
├── figma-tokens.json                   # Tokens de Figma
└── cesionbnk-theme.ts                  # Tema base
```

---

## 📊 MÉTRICAS DEL PROYECTO

| Métrica | Valor |
|---|---|
| **Componentes UI Base** | ~80 |
| **Componentes Avanzados** | ~25 |
| **Patterns** | ~28 |
| **Widgets** | ~23 |
| **Factoring (dominio)** | ~25 |
| **Páginas de demo** | ~120 |
| **Total componentes** | **~300** |
| **Archivos documentación** | 11 |
| **Temas visuales** | 8 |

---

## 🧭 REGLAS DE ARQUITECTURA

### 1️⃣ **Jerarquía de Imports**

```typescript
// ✅ CORRECTO
import { Button } from './components/ui/button'
import { DataTable } from './components/advanced/DataTable'
import { KPIShowcase } from './components/patterns/KPIShowcase'
import { StatCard } from './components/widgets/StatCard'
import { FactoringDashboard } from './factoring/components/FactoringDashboard'

// ❌ INCORRECTO
import { Button } from '../../ui/button'  // Usar paths relativos largos
```

### 2️⃣ **Separación de Capas**

- **UI** → Solo depende de Radix/Tailwind
- **Advanced** → Puede usar UI
- **Patterns** → Puede usar UI + Advanced
- **Widgets** → Puede usar UI
- **Factoring** → Puede usar todas las capas

### 3️⃣ **Tokens Semánticos**

```css
/* globals.css */
:root {
  --cfinancia-primary: 76 175 80;        /* RGB channels */
  --cfinancia-secondary: 28 45 58;
}
```

```tsx
// ✅ CORRECTO (dark mode explícito)
<div className="bg-white dark:bg-slate-900">

// ❌ INCORRECTO (no usar tokens oscuros)
<div style={{ backgroundColor: 'var(--cfinancia-primary-dark)' }}>
```

### 4️⃣ **Persistencia de Estado**

- `localStorage` para estado UI persistente (vista actual, módulo seleccionado)
- `useState` para estado efímero (formularios, modales)
- Evitar `onClick` en KPI cards (solo visualización)

### 5️⃣ **Archivos Protegidos**

**No modificar**:
- `/components/figma/ImageWithFallback.tsx`

### 6️⃣ **Sistema de Temas**

```tsx
// Agregar tema nuevo:
// 1. Crear /styles/themes/theme-{id}.css
// 2. Importar en App.tsx: import "./styles/themes/theme-{id}.css"
// 3. Registrar en ThemeProvider.tsx → STYLE_THEMES[]
```

---

## 🚀 FLUJOS PRINCIPALES

### **Flujo 1: Crear Componente UI Base**

1. Crear `/components/ui/my-component.tsx`
2. Crear `/components/ui/my-component.stories.tsx`
3. Exportar en `/components/ui/index.ts`
4. Documentar en `COMPONENTS.md`

### **Flujo 2: Crear Pattern de Negocio**

1. Crear `/components/patterns/MyPattern.tsx`
2. Importar desde `ui/` y `advanced/`
3. Crear `/components/patterns/MyPattern.stories.tsx`
4. Agregar a `/pages/MyPatternPage.tsx`

### **Flujo 3: Extender Módulo Factoring**

1. Evaluar si es componente (`/factoring/components/`)
2. O vista completa (`/factoring/views/`)
3. Conectar con `FactoringViewRenderer.tsx`
4. Actualizar persistencia en `FactoringApp.tsx` si aplica

---

## 📖 REFERENCIAS CRUZADAS

- **Guía de Tokens**: Ver `TOKENS.md`
- **Catálogo de Componentes**: Ver `COMPONENTS.md`
- **Prompts para IA**: Ver `PROMPT_GUIDE.md`
- **Reglas de Negocio Factoring**: Ver `FactoringModule.mdx`

---

## 🔄 VERSIONADO

**Esquema**: `MAJOR.MINOR.PATCH`

- **MAJOR**: Cambios breaking (ej: reestructuración de carpetas)
- **MINOR**: Nuevos componentes/temas
- **PATCH**: Bugfixes, mejoras menores

**Versión actual**: `6.4.0`

---

*Documento generado el 10 de Febrero de 2026*  
*Mantenido por: @biomahd-creator*
