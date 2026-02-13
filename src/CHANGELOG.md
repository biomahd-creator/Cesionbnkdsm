# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [2.0.1] - 2026-02-13

### Fixed
- **Publish pipeline**: `npm run validate` now runs `strip-versions` as its first step, ensuring Figma Make versioned imports (`@x.y.z` suffixes, `figma:asset/*`) are cleaned before `typecheck` and `build:lib`. Previously, `prepublishOnly` → `validate` would fail because `tsc` saw unresolved versioned imports.
- **TypeScript: `data:image/gif;base64,...` imports**: Added `declare module` in `versioned-imports.d.ts` for the inline data URI that `strip-versioned-imports.mjs` generates when replacing `figma:asset/*` references. Fixes `TS2307` in `CFinanciaClientFlow.tsx`, `FactoringNewOperationScreen.tsx`, and `FactoringNewOperation.tsx`.
- **TypeScript: `@tanstack/react-table` stub**: Added missing `Table`, `Row`, and `Column` type exports to the ambient declaration in `versioned-imports.d.ts`. Fixes `TS2305` in `DataTablePage.tsx`.
- **`vite.config.lib.ts`**: Removed `skipDiagnostics: true` from `vite-plugin-dts` options — the property was removed in v3.8+ and caused `TS2353`. No longer needed because `strip-versions` runs before `build:lib`.
- **CRITICAL: Unstyled components for npm consumers** — Components rendered without any CSS because Tailwind v4 does not scan `node_modules` by default. Added `@source "../dist-lib"` directive to `theme.css` so the consumer's Tailwind build automatically detects all utility classes used by DSM components. Also added `@layer base` with essential styles (body bg/text, border-color, Satoshi font, font-smoothing) that components depend on.

### Changed
- `package.json`: `validate` script prepends `npm run strip-versions &&` before `typecheck`.
- `styles/theme.css`: Added `@source "../dist-lib"`, `@layer base` with essential consumer styles, updated JSDoc header documenting all 5 responsibilities of the file.
- `README.md`: Updated "Import Styles" section explaining how `theme.css` works (`@source`, tokens, `@theme`, `@layer base`).

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

[2.0.1]: https://github.com/biomahd-creator/Cesionbnkdsm/compare/v0.2.3...v2.0.1
[0.2.3]: https://github.com/biomahd-creator/Cesionbnkdsm/compare/v0.2.2...v0.2.3
[0.2.2]: https://github.com/biomahd-creator/Cesionbnkdsm/compare/v0.2.1...v0.2.2
[0.2.1]: https://github.com/biomahd-creator/Cesionbnkdsm/compare/v0.2.0...v0.2.1
[0.2.0]: https://github.com/biomahd-creator/Cesionbnkdsm/compare/v0.1.1...v0.2.0
[0.1.1]: https://github.com/biomahd-creator/Cesionbnkdsm/compare/v0.1.0...v0.1.1
[0.1.0]: https://github.com/biomahd-creator/Cesionbnkdsm/compare/v0.0.3...v0.1.0
[0.0.3]: https://github.com/biomahd-creator/Cesionbnkdsm/releases/tag/v0.0.3