# Claude Instructions for CESIONBNK DSM

Read `/llms.txt` for the complete design system reference — component catalog, design tokens, composition patterns, and DO/DON'T rules.

## Key Rules

1. **Use DSM components** from `@biomahd-creator/financio-design-system` — never create custom Button, Card, Input, Badge, Table, etc.
2. **Use semantic Tailwind classes** — `bg-background`, `text-foreground`, `border-border`, `bg-muted`, `text-muted-foreground`
3. **Never use raw Tailwind colors** — no `bg-white`, `bg-gray-500`, `text-black`, `bg-green-500`
4. **Brand identity** — Font: Satoshi | Primary: #00c951 (green) | Secondary: #1C2D3A (navy)
5. **Tailwind CSS v4** — PostCSS uses `@tailwindcss/postcss`, NOT `tailwindcss` + `autoprefixer`
6. **Flat root structure** — no `src/` directory, alias `@` → `./`
7. **Language rules** — Library components in English | Factoring app in Spanish (es-CO)

## Import Patterns

```tsx
// Full import
import { Button, Card, Badge } from "@biomahd-creator/financio-design-system";

// Layer import (better tree-shaking)
import { Button } from "@biomahd-creator/financio-design-system/ui";

// Direct import (best tree-shaking)
import { Button } from "@biomahd-creator/financio-design-system/ui/button";
```

## Color Palette Quick Reference

```
Primary:     bg-primary text-primary-foreground       (#00c951 green)
Secondary:   bg-secondary text-secondary-foreground    (#1C2D3A navy)
Background:  bg-background text-foreground
Cards:       bg-card text-card-foreground
Muted:       bg-muted text-muted-foreground
Subtle BG:   bg-muted/30
Error:       bg-destructive text-destructive-foreground
Success:     bg-success text-success-foreground
Warning:     bg-warning text-warning-foreground
Info:        bg-info text-info-foreground
Border:      border-border
Input:       border-input bg-input-background
Focus:       ring-ring
```

## Architecture

- `/components/ui/` — Atoms & Molecules (published to npm)
- `/components/patterns/` — Generic Organisms (published)
- `/components/advanced/` — Charts, Tables, Editors (published)
- `/components/widgets/` — Composed Blocks (published)
- `/components/providers/` — Context Providers (published)
- `/components/factoring/` — Business logic (app-only, NOT published)
- `/pages/` — DSM Showcase (app-only)
- `/hooks/` — Custom Hooks (published)
- `/lib/` — Utilities (published)
