# @biomahd-creator/financio-design-system

[![npm version](https://img.shields.io/npm/v/@biomahd-creator/financio-design-system.svg)](https://www.npmjs.com/package/@biomahd-creator/financio-design-system)
[![npm downloads](https://img.shields.io/npm/dm/@biomahd-creator/financio-design-system.svg)](https://www.npmjs.com/package/@biomahd-creator/financio-design-system)
[![license](https://img.shields.io/npm/l/@biomahd-creator/financio-design-system.svg)](./LICENSE)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.3-blue.svg)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind%20CSS-v4-38bdf8.svg)](https://tailwindcss.com/)

CESIONBNK Design System — React + Tailwind CSS v4 component library for Factoring platforms.

Built with React, TypeScript, Tailwind CSS v4, and Radix UI. 120+ components following Atomic Design principles.

---

## Quick Start (30 seconds)

### 1. Install

```bash
npm install @biomahd-creator/financio-design-system
```

### 2. Import Styles

In your main CSS file (e.g., `src/styles.css`):

```css
@import "tailwindcss";
@import "@biomahd-creator/financio-design-system/theme.css";
```

> **Note:** `theme.css` is a Tailwind v4 CSS preset that provides all CESIONBNK design tokens (colors, typography, spacing, shadows). It replaces the deprecated `tailwind-preset.cjs` from v3.

### 3. Use Components

```tsx
import { Button } from "@biomahd-creator/financio-design-system";

function App() {
  return <Button>Get Started</Button>;
}
```

That's it. All tokens (colors, fonts, shadows) are automatically available via Tailwind classes.

---

## Import Paths & Tree-Shaking

The library supports three levels of imports for optimal tree-shaking:

```tsx
// Full import (convenient, imports entire library)
import { Button, Card, Badge } from "@biomahd-creator/financio-design-system";

// Layer import (better tree-shaking, imports one category)
import { Button } from "@biomahd-creator/financio-design-system/ui";
import { DataTable } from "@biomahd-creator/financio-design-system/advanced";
import { StatsDashboard } from "@biomahd-creator/financio-design-system/patterns";

// Direct component import (best tree-shaking, single file)
import { Button } from "@biomahd-creator/financio-design-system/ui/button";
import { DataTable } from "@biomahd-creator/financio-design-system/advanced/DataTable";
```

### Available Sub-Paths

| Path | Description | Examples |
|---|---|---|
| `/ui` | Atoms & Molecules (Shadcn/Radix) | Button, Input, Card, Badge, Dialog |
| `/patterns` | Business Organisms | StatsDashboard, MultiStepWizard, SearchResults |
| `/advanced` | Complex Visualizations | DataTable, Charts, RichTextEditor, TreeTable |
| `/widgets` | Composed Blocks | StatCard, FilterBar, SearchBar, InvoiceTable |
| `/providers` | Context Providers | ThemeProvider, LoadingProvider |
| `/hooks` | Custom Hooks | useLoadingState, usePageTransition |
| `/lib` | Utilities | cn(), animation-config |

---

## Design Tokens

The library ships with a complete token system. All tokens are CSS custom properties, so you can override them:

### Colors

| Token | Light | Dark | Usage |
|---|---|---|---|
| `--primary` | `#00c951` | `#00c951` | Brand green, CTAs, links |
| `--secondary` | `#1C2D3A` | `#334155` | Navy, text, headers |
| `--destructive` | `#ef4444` | `#991b1b` | Errors, delete actions |
| `--success` | `#22c55e` | `#15803d` | Confirmations, positive |
| `--warning` | `#f59e0b` | `#b45309` | Alerts, caution |
| `--info` | `#3b82f6` | `#1d4ed8` | Informational |

### Typography

The library uses **Satoshi** as its exclusive font family. It's loaded automatically via `theme.css`.

```css
/* Available via Tailwind classes */
font-sans    /* Satoshi */
font-satoshi /* Satoshi (alias) */
```

### Dark Mode

Add the `dark` class to `<html>` or any parent element:

```tsx
// Toggle example
document.documentElement.classList.toggle("dark");

// Or use the built-in ThemeProvider
import { ThemeProvider, useTheme } from "@biomahd-creator/financio-design-system/providers";

function App() {
  return (
    <ThemeProvider>
      <MyApp />
    </ThemeProvider>
  );
}

function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();
  return <button onClick={toggleTheme}>{theme === "dark" ? "Light" : "Dark"}</button>;
}
```

### Customizing Tokens

Override any token in your own CSS:

```css
@import "tailwindcss";
@import "@biomahd-creator/financio-design-system/theme.css";

/* Your overrides */
:root {
  --primary: #6366f1;      /* Change brand color to indigo */
  --radius: 0.5rem;        /* Adjust border radius */
}
```

---

## Component Categories

### UI Primitives (68 components)
Core building blocks built on Radix UI: Button, Input, Card, Badge, Dialog, Select, Tabs, Tooltip, Progress, Skeleton, and many more.

### Advanced Components (20+ components)
Complex data visualization and interaction: DataTable (TanStack), TreeTable, Charts (Recharts), RichTextEditor, FileUploader, InvoiceGenerator, VirtualizedList.

### Business Patterns (20+ components)
Ready-to-use business flows: StatsDashboard, MultiStepWizard, ApprovalFlow, OnboardingWizard, NotificationCenter, AdminPortal.

### Widgets (15+ components)
Composed functional blocks: StatCard, FilterBar, SearchBar, InvoiceTable, StatusKPICard.

---

## Development

### Prerequisites
- Node.js 18+
- npm 8+

### Commands

```bash
# Start dev server (DSM Showcase)
npm run dev

# Run tests
npm test
npm run test:watch
npm run test:coverage

# Build library for publishing
npm run build:lib

# Full validation (typecheck + test + build + circular deps + boundary)
npm run validate

# Release
npm run release          # patch (0.1.x)
npm run release:minor    # minor (0.x.0)
npm run release:major    # major (x.0.0)
```

### Project Structure

```
Library (published to npm):
  /index.ts              -> Root barrel export
  /components/ui/        -> Atoms & Molecules
  /components/patterns/  -> Generic Organisms
  /components/advanced/  -> Charts, Tables, Editors
  /components/widgets/   -> Composed Blocks
  /components/providers/ -> Context Providers
  /hooks/                -> Custom Hooks
  /lib/                  -> Utilities
  /styles/theme.css      -> Tailwind v4 CSS preset

App-only (NOT published):
  /App.tsx               -> DSM Showcase entry
  /pages/                -> 120+ showcase pages
  /components/factoring/ -> Business logic demo
```

### CI/CD

| Workflow | Trigger | Purpose |
|---|---|---|
| `validate.yml` | Push / PR | TypeCheck + Test + Build + Boundary Check |
| `publish.yml` | Tag push | Build + Publish to npm + Version consistency |

---

## Documentation

| File | Purpose |
|---|---|
| [Guidelines.md](./guidelines/Guidelines.md) | System architecture index |
| [TOKENS.md](./guidelines/TOKENS.md) | Design tokens reference |
| [COMPONENTS.md](./guidelines/COMPONENTS.md) | Component inventory (120+) |
| [PROMPT_GUIDE.md](./guidelines/PROMPT_GUIDE.md) | AI prompt templates |
| [llms.txt](./llms.txt) | AI/LLM instructions for code generation |
| [CHANGELOG.md](./CHANGELOG.md) | Version history |

---

## Dependencies & Security

### Known Vulnerabilities

**xlsx (transitive via recharts):** Low impact — only used for client-side Excel export via dynamic import. Does not process external files. See [ExportData component](./components/advanced/ExportData.tsx).

### Peer Dependencies

```json
{
  "react": "^18.2.0 || ^19.0.0",
  "react-dom": "^18.2.0 || ^19.0.0",
  "tailwindcss": "^4.0.0"
}
```

---

## License

MIT