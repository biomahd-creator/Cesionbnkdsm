# Changelog

All notable changes to `@biomahd-creator/financio-design-system` will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.1.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [0.2.2] - 2026-02-13

### Added

- **AI/LLM Integration: `llms.txt`**
  - Created `llms.txt` — machine-readable instructions for AI code generators (Claude, ChatGPT, Copilot, Figma Make)
  - Contains: critical setup (theme.css import), full component catalog with import paths and key props, design tokens & styling rules, composition patterns with code examples, DO/DON'T rules
  - Added to `package.json` `files` array so it ships with every npm publish
  - Solves: LLMs importing the package but not applying DSM styles or using correct components

- **NPM Package Hardening**
  - `LICENSE` file (MIT) — legally required, was missing
  - `SECURITY.md` — vulnerability reporting policy and known issues
  - `scripts/check-exports.js` — validates all package.json exports resolve to actual files, checks metadata files, verifies .d.ts alongside .js
  - `npm run check:exports` added to `validate` pipeline
  - `prepublishOnly` script — prevents accidental publishes without full validation
  - `engines` field — requires Node.js >= 18.0.0
  - `publishConfig` — `access: "public"` + `provenance: true` (SLSA Build L3)
  - `peerDependencies` — added `lucide-react >= 0.300.0` (optional) for consumer version control
  - `peerDependenciesMeta` — `lucide-react` marked as optional
  - `sideEffects` — changed from `false` to `["*.css"]` (CSS imports are side effects)
  - `keywords` — expanded from 7 to 17 for better npm discoverability
  - `files` array — added `LICENSE`
  - README badges (npm version, downloads, license, TypeScript, Tailwind CSS)

- **Publish Workflow Improvements**
  - `npm pack` verification step — creates tarball, checks size/file count, verifies required files exist before publish
  - `--provenance` flag on `npm publish` for supply chain security
  - Post-publish summary now includes AI/LLM and provenance notes

### Changed

- **Factoring App: UI Polish & View Cleanup**
  - `FactoringWorkspace.tsx`: Background changed from `bg-background` to `bg-muted/30` for visual consistency with DashboardComercial
  - `FactoringApp.tsx`: Removed all `NEW` badges from sidebar links (Dashboard Comercial, C-Financia Admin, C-Financia Cliente); `DEV` badge on Playground preserved
  - `FactoringApp.tsx`: DashboardComercial navigation now uses `FactoringKpiCardGroup` with KPI cards (AUM, growth, DSO, yield, efficiency) replacing pill-button tabs
  - `FactoringKpiCardGroup.tsx`: Fixed `variantMap` so `lime` variant passes directly to `FactoringKpiCard` instead of mapping to `green`

### Removed

- **Factoring App: Deprecated Views Cleanup**
  - Deleted `CessionFlow.tsx` ("Nueva Cesión" view)
  - Deleted `ClientDashboard.tsx` ("Dashboard" view)
  - Deleted `OperationsDashboard.tsx` ("Operaciones" view)
  - Deleted `PaymentTracking.tsx` ("Pagos" view)
  - Removed duplicate `radian-dashboard` from ViewRenderer/sidebar (preserved `RadianAdminDashboard.tsx` used by `CFinanciaFlow.tsx`)
  - Removed all imports, switch cases, sidebar items, and `View` type entries for deleted views
  - Default view changed from `"welcome"` to `"playground"`
  - Added `invalidViews` list to protect against stale `localStorage` values for removed views

### Fixed

- `CFinanciaFlow.tsx`: Fixed localStorage persistence bug where re-entering from sidebar skipped login screen — now always initializes at `"login"` on mount

## [0.2.1] - 2026-02-13

### Changed

- **D11: i18n Cleanup — Library Components to English**
  - Migrated all Spanish text in library-layer components to English (8 batches, 40+ files)
  - Layers cleaned: `ui/`, `advanced/`, `patterns/`, `widgets/`, `providers/`, `hooks/`, `lib/`
  - Scope: UI labels, placeholders, button text, status labels, JSDoc comments, error messages, toast messages, loading text
  - Intentional exceptions preserved: Colombian proper nouns (Bogotá, Medellín, Banco de Bogotá), TreeTableV2 Spanish prop names (breaking change risk), `formatCOP`/`es-CO` locale (domain-specific)
  - Verification: regex `[áéíóúñÁÉÍÓÚÑ¡¿]` returns 0 matches across `ui/`, `advanced/`, `widgets/`, `providers/`, `hooks/`, `lib/`
  - `package.json`: Version bumped to `0.2.1`

### Added

- **Factoring App: DashboardComercial Integration**
  - 15 new files under `/components/factoring/dashboard-comercial/`
  - Mock data with Colombian debtors (~$21M AUM)
  - 5 tabs: Dashboard, Cartera, Originación, Tesorería, Inversionistas
  - 7 sub-components: KPI cards, AUM evolution, top debtors, aging distribution, DSO trend, sector concentration, collection curves, alerts & actions
  - Registered as lazy import in `FactoringViewRenderer.tsx` with view ID `"dashboard-comercial"`
  - Sidebar entry added in `FactoringApp.tsx` under "Modules" group

## [0.2.0] - 2026-02-12

### Added

- **C10: Project Audit & Structural Cleanup (v0.2.0)**
  - Created `EditableTablePage` with `ComponentShowcase` wrapper (121/121 pages now standard)
  - Created `.gitignore` for proper git tracking
  - Created `.npmignore` for clean npm publishing
  - Created `github-workflows/` with updated `validate.yml` and `publish.yml` (to be moved to `.github/workflows/`)
  - Added `homepage` and `bugs` fields to `package.json`
  - Added `README.md` to `files` array in `package.json`

- **B8: DSM Quality & Consistency — Page Migration (Batch 1)**
  - Migrated 7 legacy showcase pages to standard `ComponentShowcase` format:
    - `RatingPage` — Sizes, states, use cases
    - `FileUploaderPage` — PDF/image variants with props documentation
    - `RichTextEditorPage` — HTML output preview example
    - `TimelinePage` — Activity feed + Order tracking examples
    - `DataTablePage` — TanStack Table with full API docs
    - `MultiStepWizardPage` — Features overview
    - `InvoiceGeneratorPage` — Interactive generator + anatomy
    - `ExportDataPage` — ExportData dialog + quickExportCSV

- **B8: DSM Quality & Consistency — Page Migration (Batch 2)**
  - Migrated 5 additional legacy pages to `ComponentShowcase` format:
    - `InvoiceUploadPage` — File upload + CUFE code entry with dialog demo
    - `TreeTablePage` — Hierarchy with checkboxes, click handler, lazy loading examples
    - `TreeTableV2Page` — Factoring operations 3-level hierarchy with batch actions
    - `ElevationPage` — 4 elevation levels + 4 colored glow variants × 4 sizes
    - `WidgetsShowcasePage` — Stats, navigation, actions, timeline widgets
  - Updated `PROMPT_GUIDE.md` with comprehensive exception list (15 documented exceptions)
  - All migrated pages follow `Header → Preview|Code → Props → Examples` structure
  - DSM showcase consistency: **96 of 122 pages** now use ComponentShowcase (79%)

- **B8: DSM Quality & Consistency — Page Migration (Batch 3: Self-Contained Forms)**
  - Migrated 3 self-contained form pages to `ComponentShowcase` format:
    - `MultiStepFormPage` — Factoring invoice upload wizard with 5 steps, refactored internal function to `*Content`
    - `MultiStepFormVerticalPage` — Vertical step layout variant, wrapped with ComponentShowcase
    - `MultiStepWizardVerticalPage` — Vertical wizard variant with step indicator, internal `*Demo` wrapper
  - Pattern: internal form logic preserved as `*Content`/`*Demo` function, outer export wraps with ComponentShowcase

- **B8: DSM Quality & Consistency — Page Migration (Batch 4: Factoring Functional Pages)**
  - Migrated 8 factoring functional pages to `ComponentShowcase` format:
    - `CFDashboardPage` — Enterprise dashboard with KPIs, portfolio, charts
    - `AdminPortalPage` — Admin portal with user management and settings
    - `FactoringDashboardPage` — Factoring-specific dashboard with operation metrics
    - `OperationsListPage` — Operations list with filters and status tracking
    - `FactoringSelectionShowcasePage` — Invoice selection flow for factoring
    - `ApprovalFlowPage` — Multi-step approval workflow wizard
    - `LiquidityCalculatorPage` — Liquidity calculation tool with rate display
    - `OnboardingPage` — User onboarding wizard flow

- **B8: DSM Quality & Consistency — Page Migration (Batch 5: Complex DSM Pages)**
  - Migrated 6 complex DSM pages to `ComponentShowcase` format:
    - `AnimationsPage` — Animation playground with interactive demos
    - `AnimationSystemPage` — Animation system architecture with variants catalog
    - `BrandLayoutPage` — Token showcase: color palette, spacing, grid system
    - `IconGalleryPage` — 200+ icon gallery with search and category filters
    - `SidebarShowcasePage` — Sidebar layout variants with embedded navigation
    - `TableCatalogPage` — 5 table types comparison with tabs

- **B8: DSM Quality & Consistency — Page Migration (Batch 6: Aggregation/Dashboard Pages)**
  - Migrated 7 aggregation and dashboard pages to `ComponentShowcase` format:
    - `BusinessComponentsPage` — Business patterns aggregation page
    - `DataVisualizationPage` — Charts and visualization aggregation
    - `AdvancedFormsPage` — Advanced form patterns aggregation
    - `HelpSystemDemoPage` — Interactive help system demo
    - `HomePage` — DSM overview and quick navigation hub
    - `DSMDashboardPage` — Design System Manager dashboard with metrics
    - `KpiShowcasePage` — KPI card showcase with Standard/Advanced tabs
  - **DSM showcase consistency: 120 of 120 pages now use ComponentShowcase (100%)**
  - Removed all exceptions from `PROMPT_GUIDE.md` — zero exceptions remaining

- **A9: Consumer DX — README Rewrite**
  - Complete `README.md` rewrite for npm consumers
  - Added Tailwind v4 Quick Start (30-second setup with `theme.css`)
  - Documented all sub-path imports from G3 (`/ui`, `/patterns`, `/advanced`, etc.)
  - Added tree-shaking guide (full → layer → direct component imports)
  - Added design tokens reference (colors, typography, dark mode)
  - Added token customization guide (CSS custom property overrides)
  - Added ThemeProvider usage example
  - Removed outdated Tailwind v3 `tailwind.config.js` instructions
  - Added component categories overview (68 UI + 20 advanced + 20 patterns + 15 widgets)

### Changed

- `README.md`: Full rewrite targeting npm consumers with v4-first instructions
- `guidelines/PROMPT_GUIDE.md`: Expanded exceptions list with 15 documented non-ComponentShowcase pages
- `guidelines/PROMPT_GUIDE.md`: Exceptions list cleared — all pages now use ComponentShowcase (100%)
- `guidelines/Guidelines.md`: Updated roadmap status and version to v0.2.0
- `pages/RatingPage.tsx`: Migrated to ComponentShowcase
- `pages/FileUploaderPage.tsx`: Migrated to ComponentShowcase
- `pages/RichTextEditorPage.tsx`: Migrated to ComponentShowcase
- `pages/TimelinePage.tsx`: Migrated to ComponentShowcase
- `pages/DataTablePage.tsx`: Migrated to ComponentShowcase
- `pages/MultiStepWizardPage.tsx`: Migrated to ComponentShowcase
- `pages/InvoiceGeneratorPage.tsx`: Migrated to ComponentShowcase
- `pages/ExportDataPage.tsx`: Migrated to ComponentShowcase
- `pages/InvoiceUploadPage.tsx`: Migrated to ComponentShowcase
- `pages/TreeTablePage.tsx`: Migrated to ComponentShowcase
- `pages/TreeTableV2Page.tsx`: Migrated to ComponentShowcase
- `pages/ElevationPage.tsx`: Migrated to ComponentShowcase
- `pages/WidgetsShowcasePage.tsx`: Migrated to ComponentShowcase
- `pages/MultiStepFormPage.tsx`: Migrated to ComponentShowcase (self-contained form refactor)
- `pages/MultiStepFormVerticalPage.tsx`: Migrated to ComponentShowcase (self-contained form refactor)
- `pages/MultiStepWizardVerticalPage.tsx`: Migrated to ComponentShowcase (self-contained form refactor)
- `pages/CFDashboardPage.tsx`: Migrated to ComponentShowcase
- `pages/AdminPortalPage.tsx`: Migrated to ComponentShowcase
- `pages/FactoringDashboardPage.tsx`: Migrated to ComponentShowcase
- `pages/OperationsListPage.tsx`: Migrated to ComponentShowcase
- `pages/FactoringSelectionShowcasePage.tsx`: Migrated to ComponentShowcase
- `pages/ApprovalFlowPage.tsx`: Migrated to ComponentShowcase
- `pages/LiquidityCalculatorPage.tsx`: Migrated to ComponentShowcase
- `pages/OnboardingPage.tsx`: Migrated to ComponentShowcase
- `pages/AnimationsPage.tsx`: Migrated to ComponentShowcase
- `pages/AnimationSystemPage.tsx`: Migrated to ComponentShowcase
- `pages/BrandLayoutPage.tsx`: Migrated to ComponentShowcase
- `pages/IconGalleryPage.tsx`: Migrated to ComponentShowcase
- `pages/SidebarShowcasePage.tsx`: Migrated to ComponentShowcase
- `pages/TableCatalogPage.tsx`: Migrated to ComponentShowcase
- `pages/BusinessComponentsPage.tsx`: Migrated to ComponentShowcase
- `pages/DataVisualizationPage.tsx`: Migrated to ComponentShowcase
- `pages/AdvancedFormsPage.tsx`: Migrated to ComponentShowcase
- `pages/HelpSystemDemoPage.tsx`: Migrated to ComponentShowcase
- `pages/HomePage.tsx`: Migrated to ComponentShowcase
- `pages/DSMDashboardPage.tsx`: Migrated to ComponentShowcase
- `pages/KpiShowcasePage.tsx`: Migrated to ComponentShowcase
- `pages/ChartsPage.tsx`: Migrated to ComponentShowcase

- **C10: Project Audit & Structural Cleanup**
  - `package.json`: Version bumped to `0.2.0`, added `homepage` and `bugs` fields
  - `PageId.ts`: Moved `audit-log` from Factoring section to Design System & Special
  - `PageRenderer.tsx`: Unified all imports through `pages/index.tsx` barrel (removed separate `AppLayoutPage` and `EditableTable` imports)
  - `pages/index.tsx`: Added `AppLayoutPage` and `EditableTablePage` exports
  - `DSMSidebarNav.tsx`: Translated 4 remaining Spanish labels to English ("Carga de Facturas" → "Invoice Upload", "Dashboard Principal" → "Main Dashboard", "Portal Administrativo" → "Admin Portal", "Calculadora Liquidez" → "Liquidity Calculator")
  - `github-workflows/validate.yml`: Updated summary version to v0.2.0
  - `github-workflows/publish.yml`: Added `hooks/index.js` and `lib/index.js` to entry point verification

### Removed

- **C10: Root Cleanup**
  - Deleted `LOCAL_DEV.md` (redundant with guidelines)
  - Deleted `QUICK_REFERENCE.md` (redundant with guidelines)
  - Deleted `SETUP_CHECKLIST.md` (one-time setup, no longer needed)
  - Deleted `SETUP_COMPLETE.md` (one-time confirmation, no longer needed)
  - Deleted `TROUBLESHOOTING.md` (consolidated into guidelines)
  - Deleted `/workflows/` directory (obsolete, already in `.github/workflows/`)
  - Deleted `/github-workflows/` directory (redundant copy, already in `.github/workflows/`)

## [0.1.1] - 2026-02-12

### Added

- **G2 Expansion: Core UI Component Tests**
  - Card family tests (`tests/components/card.test.tsx`): Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter, CardAction — rendering, data-slot attrs, composition
  - Input tests (`tests/components/input.test.tsx`): types, interaction, disabled state, placeholder, a11y (aria-label, aria-invalid, required), ref forwarding, displayName
  - Alert family tests (`tests/components/alert.test.tsx`): all 5 variants (default, destructive, success, warning, info), AlertTitle, AlertDescription, composition
  - Label tests (`tests/components/label.test.tsx`): rendering, htmlFor association, className merging
  - Textarea tests (`tests/components/textarea.test.tsx`): interaction, disabled, placeholder, a11y, ref forwarding, displayName
  - Separator tests (`tests/components/separator.test.tsx`): horizontal/vertical orientation, decorative vs non-decorative role
  - Progress tests (`tests/components/progress.test.tsx`): value-based translateX, 0/100% edge cases, indicator custom className, progressbar role

- **G2 Expansion: Library Utility Tests**
  - `cn` utility tests (`tests/lib/utils.test.ts`): class merging, Tailwind conflict resolution, conditional classes, edge cases
  - Animation config tests (`tests/lib/animation-config.test.ts`): durations, easing curves, Motion variants, transition configs, `shouldReduceMotion`, `getTransition`, `getVariants`

### Changed

- `vitest.config.ts`: Coverage thresholds raised from 10% → 20% (statements/functions/lines) and 15% (branches)

## [0.1.0] - 2026-02-12

### Added

- **G1: App vs Library Boundary Enforcement**
  - `scripts/check-boundary.js` validates no app-only code leaks into `dist-lib/`
  - `npm run check:boundary` script added to validation pipeline
  - Boundary check integrated into CI (`validate.yml` and `publish.yml`)
  - Explicit exclusion of `/components/factoring/`, `/pages/`, `App.tsx`, `main.tsx` from library build

- **G3: Per-Component Tree-Shaking**
  - ESM-only output with `preserveModules: true` (Rollup)
  - Each source file produces its own output module in `dist-lib/`
  - Sub-path exports in `package.json` for granular imports:
    - `@biomahd-creator/financio-design-system/ui`
    - `@biomahd-creator/financio-design-system/patterns`
    - `@biomahd-creator/financio-design-system/advanced`
    - `@biomahd-creator/financio-design-system/widgets`
    - `@biomahd-creator/financio-design-system/providers`
    - `@biomahd-creator/financio-design-system/hooks`
    - `@biomahd-creator/financio-design-system/lib`
  - Wildcard sub-path exports for individual components (e.g., `.../ui/button`)
  - `sideEffects: false` in `package.json`
  - `typesVersions` for TypeScript sub-path resolution
  - Source maps enabled for debugging

- **G6: Automated Semver**
  - `npm run release` / `release:minor` / `release:major` scripts
  - Version consistency check in publish workflow (tag vs package.json)
  - Concurrency control on publish workflow

- **G2: Testing Foundation**
  - Vitest configuration (`vitest.config.ts`)
  - Test setup with jsdom, Testing Library, and global mocks (`tests/setup.ts`)
  - Button component tests (rendering, variants, sizes, a11y, interaction)
  - Badge component tests (all variant families)
  - ThemeProvider tests (toggle, persistence, config management)
  - Boundary tests (validates barrel exports don't leak app code)
  - `npm test`, `npm run test:watch`, `npm run test:coverage` scripts
  - Test step added to CI validation pipeline with coverage upload

### Changed

- `vite.config.lib.ts`: Switched from single UMD+ESM bundle to ESM-only with `preserveModules`
- `package.json`: Version bumped to `0.1.0`, added `type: "module"`, expanded `exports` field
- `workflows/validate.yml`: Added test, boundary check, and sub-path verification jobs
- `workflows/publish.yml`: Added version consistency check and post-publish summary
- `peerDependencies`: Now accepts React 19 (`^18.2.0 || ^19.0.0`)

### Removed

- UMD output format (consumers use ESM via their bundler)

## [0.0.3] - 2026-02-11

### Added

- G4: `/styles/theme.css` CSS preset for Tailwind v4 consumers
- G7: Unified barrel exports, ThemeProvider moved to `/components/providers/`
- Deprecated `tailwind-preset.js` (v3 shim kept for backward compatibility)
- Simplified `components/index.ts` with sub-barrel re-exports

## [0.0.2] - 2026-02-10

### Added

- Initial component library with 120+ components
- Atomic Design architecture (ui, patterns, advanced, widgets)
- Satoshi typography system
- CESIONBNK brand tokens (Green + Navy)
- Light/Dark mode support
- WCAG 2.1 AA accessibility
- CI/CD with GitHub Actions

## [0.0.1] - 2026-02-09

### Added

- Initial release
- Core UI components (Button, Badge, Card, Input, etc.)
- Basic build pipeline