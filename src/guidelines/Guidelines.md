# SYSTEM GUIDELINES INDEX

Este archivo es el índice maestro del sistema de diseño y arquitectura de Figma Make.
Para facilitar la lectura por IAs y humanos, la documentación se ha dividido en módulos especializados.

## MÓDULOS DE DOCUMENTACIÓN

### 1. [TOKENS.md](./TOKENS.md)
**Diseño Visual**. Definiciones de estilos, colores, tipografía y accesibilidad.
- Colores: Primary (Green), Secondary (Dark Blue).
- Tipografía: Gotham.
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

### 4. [NAMING_CONVENTION.md](./NAMING_CONVENTION.md)
**Naming Convention — Triple Alignment**. Convención unificada para nombres de archivos, exports React y componentes Figma.
- Regla maestra: kebab-case (archivos) ↔ PascalCase (exports) ↔ Layer/Name (Figma).

### 5. [FIGMA_LIBRARY_ROADMAP.md](./FIGMA_LIBRARY_ROADMAP.md)
**Figma Design Library**. Guía para transcribir el DSM code-first a una Figma Design Library conectada.
- Fase 1: Variables de Figma (tokens primitivos y semánticos).
- Fase 2–4: Tipografía, componentes y estilos de efecto.
- Fase 5: Triple Alignment entre código, Figma y nomenclatura.

---

## SISTEMA DE TEMAS

El proyecto usa **exclusivamente el tema default CESIONBNK** con soporte para modo claro y oscuro.

### Tema Único

- **ID**: `default` (CESIONBNK)
- **Colores**: Primary Green (`#00c951`) + Secondary Navy (`#1C2D3A`)
- **Tipografía**: Gotham (exclusiva) — fallback web: Montserrat (Google Fonts)
- **Border Radius**: 10px
- **Modos**: Light / Dark

### Arquitectura de Tokens — Single Source of Truth

- **Archivo único**: `/styles/globals.css` contiene TODO: tokens, variables CSS, Tailwind config, utilidades
- **No hay** `tokens.css`, `theme.css` ni archivos de tokens separados
- **Light mode**: Variables definidas en `:root`
- **Dark mode**: Variables definidas en `.dark` selector
- **Tailwind v4**: Mapeo via `@theme inline` dentro de `globals.css`
- **Provider**: `ThemeProvider.tsx` gestiona solo el toggle light/dark

> **Nota**: No existe `LanguageProvider` ni sistema de traducciones. Todos los textos están hardcodeados directamente en los componentes.

---

## LANGUAGE RULES

| Scope | Language | Description |
|---|---|---|
| **DSM Components** (`ui/`, `patterns/`, `advanced/`, `widgets/`, `providers/`) | English | All UI labels, placeholders, status labels, tooltips, alert messages |
| **DSM Showcase** (`pages/`) | English | All page titles, descriptions, examples |
| **Factoring App** (`factoring/`, `FactoringApp.tsx`) | Spanish | Business application for LatAm market |
| **Locale formatting** | `en-US` (DSM) / `es-CO` (factoring) | `date-fns` locale, `toLocaleString()`, `Intl.NumberFormat` |

---

## INFRAESTRUCTURA

Este proyecto utiliza **exclusivamente**:

| Plataforma | Uso |
|---|---|
| **Figma Make** | Desarrollo, prototipado y deploy |
| **Vite** | Dev server y build |

**Eliminado en v0.3.0:**
- NPM publishing (no hay `vite.config.lib.ts`, `index.ts` barrel, ni `publish.yml`)
- Testing (no hay `vitest.config.ts`, ni directorio `/tests/`)
- CI/CD pipelines (no hay `validate.yml` ni `publish.yml`)
- Storybook / Chromatic

**No se permite** integración con: Storybook, Chromatic, Vercel, Netlify, Firebase, AWS, Docker, Heroku, CircleCI, Travis, Jenkins, Sentry, Datadog, GitHub Actions, ni ningún otro servicio externo.

---

## DIRECTORY STRUCTURE — FLAT ROOT (NO `src/`)

> **Decision**: The project uses a **flat root structure** — all source files live at the project root, NOT inside a `src/` directory.

### Configuration Files

| File | Key Setting | Value |
|---|---|---|
| `index.html` | `<script src>` | `/main.tsx` |
| `vite.config.ts` | `alias @` | `path.resolve(__dirname, "./")` |
| `tsconfig.json` | `paths @/*` | `["./*"]` |
| `postcss.config.cjs` | (implicit) | Resolves from root |

### Rules

1. **Never create a `src/` directory** in the project.
2. **Never modify alias/paths** to point to `./src/*`.
3. `npm run dev` must work immediately without moving files.

### Root Layout

```
/                          ← Repository root = source root
├── App.tsx                ← DSM Showcase + Factoring App entry
├── main.tsx               ← Vite entry
├── index.html             ← Vite HTML entry
├── components/            ← All components (ui/, patterns/, advanced/, widgets/, providers/)
├── factoring/             ← Factoring App (cesionbnk/, dashboard-comercial/, views/)
├── pages/                 ← DSM Showcase pages
├── hooks/                 ← Custom hooks
├── lib/                   ← Utilities
├── styles/                ← CSS (globals.css, tour.css) — Single Source of Truth
├── guidelines/            ← Project documentation
├── imports/               ← Figma imported assets (SVGs)
├── vite.config.ts         ← Dev server config
├── tsconfig.json          ← TypeScript config
├── package.json           ← Package manifest
└── postcss.config.cjs     ← PostCSS config
```

---

## ROADMAP STATUS

| Fase | Descripcion | Estado |
|---|---|---|
| **E12** | Factoring App: DashboardComercial + view cleanup + UI polish | Completed (v0.2.2) |
| **F13** | Remanufactura: tokens consolidados, sin tests/npm/actions | Completed (v0.3.0) |
| **v0.3.1** | Naming Convention: Phases 1–4 (kebab-case, mismatches, reclassify, duplicates) | **Completed (v0.3.1)** |
| **v0.3.2** | Naming Convention: Phase 5b — Collapse 3 PascalCase stubs → kebab; fix direct consumers; sync COMPONENTS.md | **Completed (v0.3.2)** |
| **v0.3.3** | Build hygiene: fix 2 broken stubs (`editable-table`, `factoring-selection-page`); fix PascalCase import in `FactoringApp.tsx`; sync `COMPONENTS.md` filename for `CFDashboard` | **Completed (v0.3.3)** |
| **v0.4.0** | Missing showcase pages: `CarouselPage`, `CollapsiblePage`, `MenubarPage` + barrel exports (`carousel`, `menubar` → `ui/index.ts`) + `PageId`, `PageRenderer`, `DSMSidebarNav` actualizados | **Completed (v0.4.0)** |
| **v0.4.1** | Multi-tenant expansion | **Omitido** |
| **v0.4.2** | Factoring App: vistas faltantes (Inversionistas, Settings, Perfil de cliente) | **Completed (v0.4.2)** |
| **v0.5.0** | Factoring App migration: `/components/factoring/` → `/factoring/` (raíz). 22 archivos legacy eliminados, 18 bridge re-exports convertidos a standalone, imports corregidos en 40 archivos, documentación sincronizada (Guidelines, COMPONENTS, NAMING_CONVENTION). PascalCase code examples corregidos en showcase pages. | **Completed (v0.5.0)** |
| **v0.5.1** | Import hygiene: fix 8 broken `./ui/` imports in `editable-table.tsx` (→ `../ui/`); unify `cn` import in 2 factoring files (`../../components/ui/utils` → `../../lib/utils`); fix PascalCase display paths in `TableCatalogPage.tsx`. | **Completed (v0.5.1)** |
| **v0.5.2** | Full-project audit + cleanup: verified all `cn` imports unified (57+ files), confirmed 0 legacy paths, 0 broken imports, 0 PascalCase filename violations in DSM layers. Deleted orphan `factoring/modals/upload-invoices-dialog.tsx` (0 consumers, overlapped with `cesionbnk/load-invoices-modal.tsx`) + empty `modals/` dir. Integrated `HelpButton` into `App.tsx` as floating help button (was barrel-only, now active). Expanded `COMPONENTS.md` with 4 new sections (5.2–5.5) documenting 32 previously unlisted factoring components (cesionbnk, root, dashboard-comercial). Confirmed barrels architecturally correct though not directly consumed. PascalCase filenames in scaffold/providers confirmed as intentional exceptions. | **Completed (v0.5.2)** |

### E12: Factoring App

 Some of the base components you are using may have styling(eg. gap/typography) baked in as defaults.
So make sure you explicitly set any styling information from the guidelines in the generated react to override the defaults.

---

## SHOWCASE PAGES

El proyecto cuenta con 96 showcase pages activas y se debe respetar la arquitectura documentada en `/guidelines/Guidelines.md`.