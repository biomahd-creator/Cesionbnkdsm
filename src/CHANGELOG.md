# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

### Added
- **G14 Batch 1: Expanded test coverage** — 12 new test files targeting core UI components and utilities.
  - `tests/components/checkbox.test.tsx` — Checked/unchecked/indeterminate, disabled, a11y, interaction.
  - `tests/components/switch.test.tsx` — Toggle on/off, disabled, thumb rendering, a11y.
  - `tests/components/skeleton.test.tsx` — Render, animate-pulse, className merge, props forwarding.
  - `tests/components/avatar.test.tsx` — Root/image/fallback composition, className merge, data-slot.
  - `tests/components/toggle.test.tsx` — Variants (default/outline), sizes (sm/default/lg), pressed state, ref.
  - `tests/components/tabs.test.tsx` — Tab switching, active/inactive state, disabled tabs, className merge.
  - `tests/components/accordion.test.tsx` — Expand/collapse, single/multiple type, collapsible, aria-expanded.
  - `tests/components/radio-group.test.tsx` — Selection, deselection, onValueChange, disabled group, data-slot.
  - `tests/components/breadcrumb.test.tsx` — Structure, a11y (aria-label, aria-current), separator, ellipsis.
  - `tests/components/pagination.test.tsx` — Active link, aria-current, previous/next, ellipsis sr-only text.
  - `tests/lib/theme-utils.test.ts` — getThemeColor (hex/hsl/rgb/fallback), getBrandColors, getChartColors, getUIColors, getAllThemeColors.
  - `tests/hooks/useLoadingState.test.ts` — Start/stop loading, delay, minDuration, callbacks, cleanup.
- **CSS refactoring**: Extracted shared tokens to `styles/tokens.css` as single source of truth.
  - `globals.css` and `theme.css` both `@import "./tokens.css"` — zero duplication.
  - Added `styles/tokens.css` to `package.json` files array.
- **NPM Consumer CSS Health Check** page (`/pages/NpmConsumerTestPage.tsx`).

### Changed
- **IconGalleryPage: Complete rewrite** — Reduced from ~900 lines to ~260 lines with ~30 representative sample icons.
- `DSMDashboardPage.tsx`: Updated changelog entry to reflect Icon Gallery simplification.

### Fixed
- **Publish pipeline**: `npm run validate` now runs `strip-versions` as first step.
- **TypeScript**: 12 errors fixed across `vitest.config.ts`, `export-data.test.tsx`, `date-range-picker.test.tsx`, `error-boundary.test.tsx`.
- **CRITICAL: Unstyled components for npm consumers** — Added `@source "../dist-lib"` to `theme.css` and `@layer base` with essential consumer styles.
- **Performance**: Eliminated ~500 static lucide-react imports from Icon Gallery page.
- **LICENSE**: Fixed recurring Figma Make bug where LICENSE file becomes a directory.

## [0.2.3] - 2026-02-13

### Changed
- **Flat root structure decision**: Unified directory structure across Figma Make and GitHub — no `src/` directory.
- `tsconfig.json`: Removed misleading comment suggesting `./src/*` paths for GitHub.
- `package.json`: Fixed repository URLs from `financio-design-system` to `Cesionbnkdsm`.

### Added
- `LICENSE`: MIT license file.
- `CHANGELOG.md`: Full version history.
- `Guidelines.md`: Added "DIRECTORY STRUCTURE — FLAT ROOT" section with rules and config table.

## [0.2.2] - 2026-02-12

### Changed
- `FactoringWorkspace.tsx`: `bg-background` to `bg-muted/30` for visual consistency with DashboardComercial.
- `FactoringApp.tsx`: Removed all NEW badges from sidebar (Dashboard Comercial, C-Financia Admin, C-Financia Cliente).
- `FactoringKpiCardGroup.tsx`: Fixed `variantMap` — lime passes directly instead of mapping to green.

### Removed
- `CessionFlow.tsx` ("Nueva Cesion" view).
- `ClientDashboard.tsx` ("Dashboard" view).
- `OperationsDashboard.tsx` ("Operaciones" view).
- `PaymentTracking.tsx` ("Pagos" view).
- Duplicate `radian-dashboard` from ViewRenderer/sidebar (`RadianAdminDashboard.tsx` preserved for CFinanciaFlow).
- All related imports, switch cases, sidebar items, View type entries.

### Fixed
- Default view changed from `"welcome"` to `"playground"`.
- Added `invalidViews` list for stale localStorage protection.
- `CFinanciaFlow.tsx`: localStorage bug — always initializes at `"login"` on mount.

## [0.2.1] - 2026-02-11

### Added
- **DashboardComercial**: 15 files under `/components/factoring/dashboard-comercial/`.
  - `DashboardComercial.tsx` (main container, 5 tabs).
  - `mock-data.ts` (~$21M AUM, Colombian debtors).
  - Tab components: dashboard, cartera, originacion, tesoreria, inversionistas.
  - Widget components: kpi-cards, aum-evolution, top-debtors, aging-distribution, dso-trend, sector-concentration, collection-curves, alerts-actions.
- Lazy import registered in `FactoringViewRenderer.tsx` (view ID: `"dashboard-comercial"`).
- Sidebar entry in `FactoringApp.tsx` under "Modules" group.

### Changed
- **D11 i18n cleanup**: All library components translated from Spanish to English.
  - 8 batches: UI layer, Advanced layer, Patterns layer, Widgets, Providers, Hooks, Lib.
  - Intentional exceptions: Colombian proper nouns, `es-CO` locale formatting, `TreeTableV2` prop names.
  - Verification: regex `[aeiounAEIOUN!?]` returns 0 matches across `ui/`, `advanced/`, `widgets/`, `providers/`, `hooks/`, `lib/`.

## [0.2.0] - 2026-02-08

### Added
- **B8**: 120/120 pages migrated to `ComponentShowcase` pattern (100%).
  - 6 migration batches covering all legacy, form, factoring, complex DSM, and dashboard pages.
- **A9**: Complete README rewrite for npm consumers with Quick Start, import paths, design tokens, and dark mode docs.
- **C10**: Project audit — `.gitignore`, `.npmignore`, barrel unification, English sidebar labels.

### Changed
- `PageId.ts`: `audit-log` moved from Factoring to Design System & Special.
- `PageRenderer.tsx`: Unified all imports through `pages/index.tsx` barrel.
- `DSMSidebarNav.tsx`: 4 Spanish labels translated to English.
- `package.json`: Version 0.2.0, homepage, bugs, files fields.

### Removed
- Root cleanup: `LOCAL_DEV.md`, `QUICK_REFERENCE.md`, `SETUP_CHECKLIST.md`, `SETUP_COMPLETE.md`, `TROUBLESHOOTING.md`.
- `/workflows/` and `/github-workflows/` (obsolete — already in `.github/workflows/`).

## [0.1.1] - 2026-02-05

### Added
- **G2+ expanded test coverage**: 13 test files.
  - Component tests: Button, Badge, Card, Input, Alert, Label, Textarea, Separator, Progress.
  - Provider tests: ThemeProvider toggle, persistence, config, export.
  - Boundary tests: barrel export validation.
  - Lib tests: `cn()` class merger, animation-config durations/variants/reduced motion.
- Coverage thresholds: 20% statements, 15% branches, 20% functions, 20% lines.

## [0.1.0] - 2026-02-01

### Added
- **G1**: App vs Library boundary enforcement.
  - Library barrel: `/index.ts` re-exports `ui/`, `patterns/`, `advanced/`, `widgets/`, `providers/`, `hooks/`, `lib/`.
  - App-only boundary: `/App.tsx`, `/pages/`, `/components/factoring/`, `/components/PageRenderer.tsx`.
- **G3**: Per-component tree-shaking with `preserveModules` in `vite.config.lib.ts`.
  - Sub-path exports: `./ui`, `./ui/*`, `./patterns`, `./advanced`, `./widgets`, `./providers`, `./hooks`, `./lib`.
  - `typesVersions` for TypeScript path resolution.
- **G6**: Automated semver release scripts (`release`, `release:minor`, `release:major`).
  - `prepublishOnly` hook runs full `validate` pipeline.
  - CI checks: `validate.yml` (push/PR), `publish.yml` (tag push).
- **G2**: Testing foundation with Vitest + Testing Library + jsdom.
  - `vitest.config.ts` with alias resolution and coverage config.
  - Scripts: `test`, `test:watch`, `test:coverage`.

## [0.0.3] - 2026-01-25

### Added
- **G4**: Theme CSS preset (`/styles/theme.css`) — all CESIONBNK design tokens as CSS custom properties.
  - Light/Dark mode variables.
  - Satoshi font family via CDN.
  - KPI color variants, elevation shadow scale.
  - Tailwind v4 `@theme` bindings.
- **G7**: `ThemeProvider` cleanup — light/dark toggle only (no multi-theme selector).
  - Barrel exports for providers.

### Changed
- Migrated from Tailwind v3 plugins to Tailwind v4 CSS-only architecture.
- Removed `next-themes` dependency; `sonner.tsx` uses local `useTheme`.
- Fixed circular font references in `globals.css`.
- Restored `@theme inline` block with complete token definitions.

---

[Unreleased]: https://github.com/biomahd-creator/Cesionbnkdsm/compare/v0.2.3...HEAD
[0.2.3]: https://github.com/biomahd-creator/Cesionbnkdsm/compare/v0.2.2...v0.2.3
[0.2.2]: https://github.com/biomahd-creator/Cesionbnkdsm/compare/v0.2.1...v0.2.2
[0.2.1]: https://github.com/biomahd-creator/Cesionbnkdsm/compare/v0.2.0...v0.2.1
[0.2.0]: https://github.com/biomahd-creator/Cesionbnkdsm/compare/v0.1.1...v0.2.0
[0.1.1]: https://github.com/biomahd-creator/Cesionbnkdsm/compare/v0.1.0...v0.1.1
[0.1.0]: https://github.com/biomahd-creator/Cesionbnkdsm/compare/v0.0.3...v0.1.0
[0.0.3]: https://github.com/biomahd-creator/Cesionbnkdsm/releases/tag/v0.0.3
