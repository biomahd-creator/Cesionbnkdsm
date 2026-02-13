# Copilot Instructions — CESIONBNK Design System

This project is a React + Tailwind CSS v4 Design System published as `@biomahd-creator/financio-design-system`.

## Component Usage
- Import from: `@biomahd-creator/financio-design-system` (full) or `/ui`, `/patterns`, `/advanced`, `/widgets`
- Never create custom Button, Card, Input, Badge, Table components — use the library's
- See `/llms.txt` for the complete component catalog

## Styling Rules
- ALWAYS use semantic classes: bg-background, text-foreground, border-border, bg-muted, text-muted-foreground
- NEVER use raw Tailwind colors: bg-white, bg-gray-500, text-black, bg-green-500
- Primary color: bg-primary (#00c951 green)
- Secondary color: bg-secondary (#1C2D3A navy)
- Font: Satoshi (loaded via theme.css)
- Border radius: rounded-xl (cards), rounded-lg (buttons), rounded-md (inputs)
- Shadows: shadow-elevation-1 through shadow-elevation-4

## Architecture
- Flat root structure (NO src/ directory)
- PostCSS: @tailwindcss/postcss (v4), NOT tailwindcss + autoprefixer (v3)
- Library code: English | Factoring app: Spanish (es-CO)
- Alias `@` resolves to repository root (`./`)

## File Organization
- `/components/ui/` — Atoms & Molecules (library)
- `/components/patterns/` — Generic Organisms (library)
- `/components/advanced/` — Charts, Tables, Editors (library)
- `/components/widgets/` — Composed Blocks (library)
- `/components/providers/` — Context Providers (library)
- `/components/factoring/` — Business logic (app-only, NOT in library)
- `/pages/` — DSM Showcase pages (app-only)
- `/hooks/` — Custom Hooks (library)
- `/lib/` — Utilities (library)
- `/styles/` — CSS (globals.css, theme.css, tour.css)

## Key Files
- `/llms.txt` — Complete component catalog for AI tools
- `/guidelines/Guidelines.md` — Architecture decisions & roadmap
- `/guidelines/TOKENS.md` — Design tokens (colors, typography, spacing)
- `/guidelines/COMPONENTS.md` — Component inventory
