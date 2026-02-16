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
| **G14** | Test coverage 50%+ (Batch 1: core UI) | In Progress (v2.0.3) |

### E12: Factoring App