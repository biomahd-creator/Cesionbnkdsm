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
- **Tipografía**: Satoshi (exclusiva)
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
| **Factoring App** (`components/factoring/`, `FactoringApp.tsx`) | Spanish | Business application for LatAm market |
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
├── components/            ← All components (ui/, patterns/, advanced/, widgets/, providers/, factoring/)
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
| **F13** | Remanufactura: tokens consolidados, sin tests/npm/actions | **Completed (v0.3.0)** |

### E12: Factoring App

 Some of the base components you are using may have styling(eg. gap/typography) baked in as defaults.
So make sure you explicitly set any styling information from the guidelines in the generated react to override the defaults.