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

### 4. [ARCHITECTURE.md](./ARCHITECTURE.md)
**Estructura de Directorios**. Mapa completo del proyecto con 300+ componentes.
- 4 capas de componentes (UI, Advanced, Patterns, Widgets).
- Módulo de negocio Factoring.
- Sistema de estilos y temas.
- Reglas de arquitectura y flujos principales.

---

## SISTEMA DE TEMAS VISUALES

El DSM implementa un **theme selector con 8 estilos CSS independientes**. `globals.css` permanece intacto como punto de restauración.

### Temas Disponibles (v6.4.0)

| # | ID | Nombre | Inspiración | Radius | Neutrales |
|---|---|---|---|---|---|
| 1 | `default` | CESIONBNK | Brand original | 10px | Navy (#1C2D3A) |
| 2 | `premium` | Premium | Linear, Vercel | 8px | Zinc |
| 3 | `glass` | Glass | Apple, Figma, Arc | 12px | Slate + blur |
| 4 | `minimal` | Minimal | Notion, Stripe | 6px | Stone |
| 5 | `tailwindpro` | Tailwind Pro | Tailwind UI | 8px | Slate |
| 6 | `heroui` | Hero UI Pro | HeroUI/NextUI | 14px | Cool zinc |
| 7 | `soft` | Soft | Pastel/Cozy | 16px | Warm stone |
| 8 | `highcontrast` | High Contrast | WCAG AAA | 8px | Pure neutral |

### Arquitectura CSS

- **Especificidad**: `html[data-theme="X"]` (0,1,1) > `:root` (0,0,1)
- **Dark mode**: `html.dark[data-theme="X"]` (0,2,1) incluye puentes `--color-*`
- **Archivos**: `/styles/themes/theme-{id}.css`
- **Registro**: `STYLE_THEMES[]` en `ThemeProvider.tsx`
- **Imports**: `App.tsx`

### Agregar un tema nuevo

1. Crear `/styles/themes/theme-{id}.css` con `html[data-theme="{id}"]` + `html.dark[data-theme="{id}"]`
2. Agregar `import "./styles/themes/theme-{id}.css"` en `App.tsx`
3. Agregar entrada al array `STYLE_THEMES` en `ThemeProvider.tsx`

### Eliminar un tema

1. Borrar su archivo CSS
2. Quitar el import en `App.tsx`
3. Remover su entrada de `STYLE_THEMES`

---

## INFRAESTRUCTURA PERMITIDA

Este proyecto está habilitado **exclusivamente** para las siguientes plataformas:

| Plataforma | Uso | Workflow |
|---|---|---|
| **GitHub** | Repositorio, CI/CD (GitHub Actions), GitHub Pages | `validate.yml`, `storybook.yml` |
| **Storybook** | Documentación de componentes, testing visual, deploy a GitHub Pages | `storybook.yml` |
| **npm** | Publicación del paquete `@biomahd-creator/financio-design-system` | `publish.yml` |

**No se permite** integración con: Chromatic, Vercel, Netlify, Firebase, AWS, Docker, Heroku, CircleCI, Travis, Jenkins, Sentry, Datadog, ni ningún otro servicio externo.

---

## USO RÁPIDO
Para crear una nueva funcionalidad:
1. Consulta **ARCHITECTURE.md** para entender la estructura y ubicación correcta.
2. Consulta **COMPONENTS.md** para ver qué piezas tienes disponibles.
3. Revisa **TOKENS.md** para aplicar los estilos correctos.
4. Usa las reglas de **PROMPT_GUIDE.md** para pedirle a la IA que ensamble la pantalla.

---
*Última actualización: Febrero 9, 2026 — v6.4.0*