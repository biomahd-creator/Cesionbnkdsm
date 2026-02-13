# SYSTEM GUIDELINES INDEX

Este archivo es el índice maestro del sistema de diseño y arquitectura de Figma Make.
Para facilitar la lectura por IAs y humanos, la documentación se ha dividido en módulos especializados.

## MÓDULOS DE DOCUMENTACIÓN

### 1. [TOKENS.md](./TOKENS.md)
**Diseño Visual**. Definiciones de estilos, colores, tipografía y accesibilidad.
- Colores: Primary (Green), Secondary (Dark Blue).
- Tipografía: Satoshi.
- Modo Claro / Oscuro.

### 2. [COMPONENTS.md](./COMPONENTS.md)
**Catálogo**. Lista completa de componentes disponibles para evitar duplicidad.
- Shadcn/ui oficial.
- Patterns y Atomic Design.
- Componentes avanzados.

### 3. [PROMPT_GUIDE.md](./PROMPT_GUIDE.md)
**Automatización**. Guía para generar código nuevo usando IA.
- Plantillas de prompts.
- Checklists de validación.

### 4. [llms.txt](../llms.txt)
**AI/LLM Instructions**. Archivo que se publica con el paquete npm para que herramientas de IA (Claude, ChatGPT, Figma Make, Copilot) generen código correctamente usando el DSM.
- Setup crítico (theme.css).
- Catálogo completo de componentes con import paths y props.
- Tokens de diseño y reglas de estilo.
- Patrones de composición con ejemplos de código.
- Reglas DO/DON'T.

---

## SISTEMA DE TEMAS

El proyecto usa **exclusivamente el tema default CESIONBNK** con soporte para modo claro y oscuro.

### Tema Único

- **ID**: `default` (CESIONBNK)
- **Colores**: Primary Green (`#00c951`) + Secondary Navy (`#1C2D3A`)
- **Tipografía**: Satoshi (exclusiva)
- **Border Radius**: 10px
- **Modos**: Light / Dark

### Arquitectura

- **Archivo base**: `/styles/globals.css` contiene todas las CSS custom properties
- **Light mode**: Variables definidas en `:root`
- **Dark mode**: Variables definidas en `.dark` selector
- **Provider**: `ThemeProvider.tsx` gestiona solo el toggle light/dark (sin selector de temas múltiples)

> **Nota**: El directorio `/components/i18n/` fue eliminado. Todos los textos están hardcodeados en inglés directamente en los componentes. No existe `LanguageProvider` ni sistema de traducciones.

---

## LANGUAGE RULES

| Scope | Language | Description |
|---|---|---|
| **DSM Library** (`ui/`, `patterns/`, `advanced/`, `widgets/`, `providers/`) | 🇬🇧 English | All UI labels, placeholders, status labels, tooltips, alert messages |
| **DSM Showcase** (`pages/`) | 🇬🇧 English | All page titles, descriptions, examples |
| **Factoring App** (`components/factoring/`, `FactoringApp.tsx`) | 🇪🇸 Spanish | Business application for LatAm market |
| **Locale formatting** | `en-US` (library) / `es-CO` (factoring) | `date-fns` locale, `toLocaleString()`, `Intl.NumberFormat` |
| **JSDoc comments** | English (library) / Spanish OK (factoring) | Code documentation |

> **Note**: The `/components/i18n/` directory was removed. No `LanguageProvider` or translation system exists. All text is hardcoded directly in components.

---

## INFRAESTRUCTURA PERMITIDA

Este proyecto está habilitado **exclusivamente** para las siguientes plataformas:

| Plataforma | Uso | Workflow |
|---|---|---|
| **GitHub** | Repositorio, CI/CD (GitHub Actions), GitHub Pages | `validate.yml` |
| **npm** | Publicación del paquete `@biomahd-creator/financio-design-system` | `publish.yml` |
| **Vitest** | Testing unitario y de componentes (G2) | `npm test` |

**No se permite** integración con: Storybook (actualmente desactivado), Chromatic, Vercel, Netlify, Firebase, AWS, Docker, Heroku, CircleCI, Travis, Jenkins, Sentry, Datadog, ni ningún otro servicio externo.

---

## DIRECTORY STRUCTURE — FLAT ROOT (NO `src/`)

> **Decision (v0.2.3)**: The project uses a **flat root structure** — all source files live at the repository root, NOT inside a `src/` directory. This is the canonical structure for both Figma Make and GitHub.

### Rationale

Figma Make exports projects without a `src/` folder. Instead of maintaining dual configurations (root for Figma Make, `src/` for GitHub), the project standardizes on a single flat structure to eliminate sync conflicts.

### Affected Configuration Files

All configs point to the root (`./`) — **do not change these to `./src/`**:

| File | Key Setting | Value |
|---|---|---|
| `index.html` | `<script src>` | `/main.tsx` |
| `vite.config.ts` | `alias @` | `path.resolve(__dirname, "./")` |
| `vite.config.lib.ts` | `alias @` + entry points | `path.resolve(__dirname, "./")` |
| `tsconfig.json` | `paths @/*` | `["./*"]` |
| `tsconfig.paths.json` | `paths @/*` | `["./*"]` |
| `vitest.config.ts` | `alias @` | `path.resolve(__dirname, "./")` |
| `postcss.config.cjs` | (implicit) | Resolves from root |

### Rules

1. **Never create a `src/` directory** in the repository.
2. **Never modify alias/paths** to point to `./src/*`.
3. When cloning from GitHub, `npm run dev` must work immediately without moving files.
4. The `README.md` and `llms.txt` references to `src/styles.css` describe the **consumer's** project structure, not ours.
5. GitHub Actions workflows (`validate.yml`, `publish.yml`) assume root structure — no path prefixes needed.

### Root Layout

```
/                          ← Repository root = source root
├── App.tsx                ← DSM Showcase entry
├── main.tsx               ← Vite entry
├── index.ts               ← Library barrel (npm entry)
├── index.html             ← Vite HTML entry
├── components/            ← All components (ui/, patterns/, advanced/, widgets/, providers/, factoring/)
├── pages/                 ← DSM Showcase pages (app-only)
├── hooks/                 ← Custom hooks (library)
├── lib/                   ← Utilities (library)
├── styles/                ← CSS (globals.css, theme.css, tour.css)
├── tests/                 ← Vitest test files
├── guidelines/            ← Project documentation
├── imports/               ← Figma imported assets (SVGs)
├── workflows/             ← GitHub Actions (also in .github/workflows/)
├── scripts/               ← Build/check scripts
├── dist-lib/              ← Library build output (gitignored)
├── vite.config.ts         ← Dev server config
├── vite.config.lib.ts     ← Library build config
├── vitest.config.ts       ← Test config
├── tsconfig.json          ← TypeScript config
├── package.json           ← Package manifest
└── postcss.config.cjs     ← PostCSS config
```

---

## ROADMAP STATUS

| Fase | Descripcion | Estado |
|---|---|---|
| **G4** | Theme CSS preset (`/styles/theme.css`) | Completed (v0.0.3) |
| **G7** | ThemeProvider cleanup + barrel exports | Completed (v0.0.3) |
| **G1** | App vs Library boundary enforcement | Completed (v0.1.0) |
| **G3** | Per-component tree-shaking (preserveModules) | Completed (v0.1.0) |
| **G6** | Automated semver (release scripts + CI checks) | Completed (v0.1.0) |
| **G2** | Testing foundation (Vitest + Testing Library) | Completed (v0.1.0) |
| **G2+** | Expanded test coverage (core UI + utils) | Completed (v0.1.1) |
| **B8** | DSM Quality: Page migration to ComponentShowcase | Completed (v0.2.0) |
| **A9** | Consumer DX: README rewrite for npm consumers | Completed (v0.2.0) |
| **C10** | Project Audit: routes, barrels, i18n, GitHub/NPM structure | Completed (v0.2.0) |
| **D11** | i18n cleanup: Spanish → English in library components | Completed (v0.2.1) |
| **E12** | Factoring App: DashboardComercial + view cleanup + UI polish | Completed (v0.2.2) |

### E12: Factoring App — DashboardComercial & View Cleanup (v0.2.1–v0.2.2)

```
Added (v0.2.1):
  - DashboardComercial: 15 files under /components/factoring/dashboard-comercial/
    - DashboardComercial.tsx (main container, 5 tabs)
    - mock-data.ts (~$21M AUM, Colombian debtors)
    - tab-dashboard.tsx, tab-cartera.tsx, tab-originacion.tsx, tab-tesoreria.tsx, tab-inversionistas.tsx
    - kpi-cards.tsx, aum-evolution.tsx, top-debtors.tsx, aging-distribution.tsx
    - dso-trend.tsx, sector-concentration.tsx, collection-curves.tsx, alerts-actions.tsx
  - Lazy import registered in FactoringViewRenderer.tsx (view ID: "dashboard-comercial")
  - Sidebar entry in FactoringApp.tsx under "Modules" group
  - Navigation uses FactoringKpiCardGroup with 5 KPI cards (AUM, growth, DSO, yield, efficiency)

Changed (v0.2.2):
  - FactoringWorkspace.tsx: bg-background → bg-muted/30 (visual consistency with DashboardComercial)
  - FactoringApp.tsx: Removed all NEW badges from sidebar (Dashboard Comercial, C-Financia Admin, C-Financia Cliente)
  - FactoringKpiCardGroup.tsx: Fixed variantMap — lime passes directly instead of mapping to green

Removed (v0.2.2):
  - CessionFlow.tsx ("Nueva Cesión" view)
  - ClientDashboard.tsx ("Dashboard" view)
  - OperationsDashboard.tsx ("Operaciones" view)
  - PaymentTracking.tsx ("Pagos" view)
  - Duplicate radian-dashboard from ViewRenderer/sidebar (RadianAdminDashboard.tsx preserved for CFinanciaFlow)
  - All related imports, switch cases, sidebar items, View type entries
  - Default view: "welcome" → "playground"
  - Added invalidViews list for stale localStorage protection

Fixed (v0.2.2):
  - CFinanciaFlow.tsx: localStorage bug — always initializes at "login" on mount
```

### Factoring App — Current View Architecture (v0.2.2)

```
Views (FactoringViewRenderer.tsx):
  Type View = "welcome" | "vinculacion" | "playground" | "c-financia" | "c-financia-cliente" | "dashboard-comercial"

  Sidebar Layout (AdminLayout):
    Modules:
      - Dashboard Comercial     → "dashboard-comercial" (lazy)
    Development (admin only):
      - Vinculación             → "vinculacion" (static)
      - Playground [DEV]        → "playground" (lazy)
      - C-Financia Admin        → "c-financia" (lazy, fullscreen)
      - C-Financia Cliente      → "c-financia-cliente" (lazy, fullscreen)

  Default view: "playground"
  Fullscreen views: c-financia, c-financia-cliente (render outside AdminLayout)
  Body background: bg-muted/30 (all views via AdminLayout.bodyClassName)

  Deleted views (invalidViews protection):
    radian-dashboard, client-dashboard, operations-dashboard,
    payment-tracking, cession-flow
```

### Test Coverage (G2 + G2+)

```
Tests created (v0.1.1):
  /tests/components/button.test.tsx      -> Button variants, sizes, a11y, interaction
  /tests/components/badge.test.tsx       -> Badge variant families
  /tests/components/card.test.tsx        -> Card family (7 sub-components), composition
  /tests/components/input.test.tsx       -> Types, interaction, disabled, a11y, ref
  /tests/components/alert.test.tsx       -> 5 variants, AlertTitle, AlertDescription
  /tests/components/label.test.tsx       -> htmlFor association, rendering
  /tests/components/textarea.test.tsx    -> Interaction, disabled, a11y, ref
  /tests/components/separator.test.tsx   -> Orientation, decorative role
  /tests/components/progress.test.tsx    -> Value translateX, edge cases, a11y
  /tests/providers/theme-provider.test.tsx -> Toggle, persistence, config, export
  /tests/boundary/exports.test.ts        -> Barrel export validation
  /tests/lib/utils.test.ts              -> cn() class merger
  /tests/lib/animation-config.test.ts   -> Durations, variants, reduced motion

Coverage thresholds: 20% statements, 15% branches, 20% functions, 20% lines
```

### B8: DSM Page Migration Summary (v0.2.0)

```
Batch 1: 8 legacy pages (Rating, FileUploader, RichTextEditor, Timeline, DataTable, MultiStepWizard, InvoiceGenerator, ExportData)
Batch 2: 5 legacy pages (InvoiceUpload, TreeTable, TreeTableV2, Elevation, WidgetsShowcase)
Batch 3: 3 self-contained forms (MultiStepForm, MultiStepFormVertical, MultiStepWizardVertical)
Batch 4: 8 factoring pages (CFDashboard, AdminPortal, FactoringDashboard, OperationsList, FactoringSelection, ApprovalFlow, LiquidityCalculator, Onboarding)
Batch 5: 6 complex DSM pages (Animations, AnimationSystem, BrandLayout, IconGallery, SidebarShowcase, TableCatalog)
Batch 6: 7 aggregation/dashboard pages (BusinessComponents, DataVisualization, AdvancedForms, HelpSystemDemo, Home, DSMDashboard, KpiShowcase)

Result: 120/120 pages use ComponentShowcase (100%)
Exceptions: None
```

### C10: Project Audit & Structural Cleanup (v0.2.0)

```
Fixed:
  - PageId.ts: audit-log moved from Factoring → Design System & Special
  - PageRenderer.tsx: unified all imports through pages/index.tsx barrel
  - DSMSidebarNav.tsx: 4 Spanish labels → English
  - EditableTablePage: created ComponentShowcase wrapper (121/121 standard)
  - pages/index.tsx: added AppLayoutPage + EditableTablePage exports

Created:
  - .gitignore
  - .npmignore

Deleted (root cleanup):
  - LOCAL_DEV.md, QUICK_REFERENCE.md, SETUP_CHECKLIST.md
  - SETUP_COMPLETE.md, TROUBLESHOOTING.md
  - /workflows/ (obsolete, already in .github/workflows/)
  - /github-workflows/ (redundant copy, already in .github/workflows/)

Updated:
  - package.json: version 0.2.0, homepage, bugs, files
  - CHANGELOG.md: added C10 section
```

### D11: i18n Cleanup — Library Components to English (Completed v0.2.1)

```
Completed (Batch 1 — UI layer):
  /components/ui/date-range-picker.tsx    -> Removed locale:es, English placeholder

Completed (Batch 2 — Advanced layer):
  /components/advanced/Combobox.tsx       -> English placeholder, emptyText
  /components/advanced/DatePickerWithPresets.tsx -> Removed locale:es, English labels
  /components/advanced/ExportData.tsx     -> Full English: buttons, dialogs, alerts
  /components/advanced/InvoiceGenerator.tsx -> Full English: labels, PDF, preview
  /components/advanced/MasterDataGrid.tsx -> English: pagination, buttons, headers, JSDoc
  /components/advanced/TreeTable.tsx      -> English: status labels, actions, headers
  /components/advanced/ChartShowcase.tsx  -> English: data labels, month names

Completed (Batch 3 — Patterns layer):
  /components/patterns/AdvancedFilterPanel.tsx  -> Full English: filters, status, proper names
  /components/patterns/CommentThread.tsx        -> English: buttons, actions
  /components/patterns/DataTableAdvanced.tsx    -> English: status, headers, actions
  /components/patterns/EditableTable.tsx        -> English: headers, status, descriptions
  /components/patterns/FactoringCalculator.tsx  -> Full English: labels, results, scenarios
  /components/patterns/MultiStepWizard.tsx      -> Full English: steps, labels, review
  /components/patterns/QuickActionToolbar.tsx   -> Full English: menus, tooltips, commands
  /components/patterns/ReportsConsultation.tsx  -> Full English: headers, pagination
  /components/patterns/UploadZone.tsx           -> English: buttons, status text

Completed (Batch 4 — Patterns continued):
  /components/patterns/KPIShowcase.tsx          -> English: labels, descriptions
  /components/patterns/KPIShowcaseExtended.tsx  -> English: labels, descriptions
  /components/patterns/NotificationCenter.tsx   -> English: messages, actions
  /components/patterns/SearchResults.tsx        -> English: UI labels, empty states
  /components/patterns/StatsDashboard.tsx       -> English: card titles, subtitles, values
  /components/patterns/AdminPortal.tsx          -> English: mock data company names
  /components/patterns/OnboardingWizard.tsx     -> English: JSDoc (proper nouns preserved)

Completed (Batch 5 — Advanced JSDoc):
  /components/advanced/ConditionalForm.tsx      -> English JSDoc
  /components/advanced/FormBuilder.tsx          -> English JSDoc
  /components/advanced/FunnelChart.tsx          -> English JSDoc
  /components/advanced/GaugeChart.tsx           -> English JSDoc
  /components/advanced/Heatmap.tsx              -> English JSDoc
  /components/advanced/MultiColumnForm.tsx      -> English JSDoc
  /components/advanced/Sparkline.tsx            -> English JSDoc
  /components/advanced/StepIndicator.tsx        -> English JSDoc
  /components/advanced/TreemapChart.tsx         -> English JSDoc

Completed (Batch 6 — Widgets JSDoc):
  /components/widgets/ColorPresetButton.tsx     -> English JSDoc
  /components/widgets/GridSystemPreview.tsx     -> English JSDoc
  /components/widgets/SpacingPreview.tsx        -> English JSDoc
  /components/widgets/NavigationBar.tsx         -> English JSDoc

Completed (Batch 7 — UI layer sweep):
  /components/ui/error-boundary.tsx       -> English: error messages, buttons
  /components/ui/icon-grid.tsx            -> English: JSDoc, toast message
  /components/ui/input-file.tsx           -> English: labels, sr-only, file limits
  /components/ui/loading-overlay.tsx      -> English: JSDoc comments, default props
  /components/ui/loading-states.tsx       -> English: loading message
  /components/ui/multi-select.tsx         -> English: placeholder, empty state, sr-only
  /components/ui/page-layout.tsx          -> English: full JSDoc header
  /components/ui/page-transition.tsx      -> English: JSDoc comments

Completed (Batch 8 — Providers, Hooks, Lib):
  /components/providers/LoadingProvider.tsx     -> English: JSDoc
  /components/providers/TransitionProvider.tsx  -> English: JSDoc
  /hooks/useLoadingState.ts                    -> English: JSDoc, inline comments
  /hooks/usePageTransition.ts                  -> English: JSDoc, inline comments
  /lib/animation-config.ts                    -> English: JSDoc, inline comments
  /lib/theme-utils.ts                         -> English: full file JSDoc rewrite
  /lib/index.ts                               -> English: barrel comment

Intentional exceptions (not Spanish — proper nouns/domain-specific):
  - OnboardingWizard.tsx: Bogotá D.C., Medellín, Banco de Bogotá (Colombian proper nouns)
  - TreeTableV2.tsx: Spanish prop names preserved (breaking change risk, documented for major)
  - formatCOP / es-CO locale: domain-specific Colombian currency formatting

Verification: regex [áéíóúñÁÉÍÓÚÑ¡¿] returns 0 matches across ui/, advanced/, widgets/,
  providers/, hooks/, lib/. Only proper nouns remain in patterns/ (OnboardingWizard).
```

### Library Architecture (G1 + G3)

```
Library (published to npm):
  /index.ts              -> Root barrel (re-exports everything)
  /components/ui/        -> Atoms & Molecules
  /components/patterns/  -> Generic Organisms
  /components/advanced/  -> Charts, Tables, Editors
  /components/widgets/   -> Composed Blocks
  /components/providers/ -> Context Providers
  /hooks/                -> Custom Hooks
  /lib/                  -> Utilities

App-only (NOT in library):
  /App.tsx               -> DSM Showcase entry
  /main.tsx              -> Vite entry
  /pages/                -> Showcase pages
  /components/factoring/ -> Business logic
  /components/PageRenderer.tsx
  /components/SidebarNew.tsx
```

### Consumer Import Paths (G3)

```ts
// Full import
import { Button } from '@biomahd-creator/financio-design-system';

// Layer import (better tree-shaking)
import { Button } from '@biomahd-creator/financio-design-system/ui';

// Direct component (best tree-shaking)
import { Button } from '@biomahd-creator/financio-design-system/ui/button';
```

---

## USO RÁPIDO
Para crear una nueva funcionalidad:
1. Consulta **COMPONENTS.md** para ver qué piezas tienes.
2. Revisa **TOKENS.md** para aplicar los estilos correctos.
3. Usa las reglas de **PROMPT_GUIDE.md** para pedirle a la IA que ensamble la pantalla.

---
*Last updated: February 13, 2026 — v0.2.3 (Flat root structure decision)*