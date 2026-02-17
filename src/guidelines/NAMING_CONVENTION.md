# NAMING CONVENTION — Triple Alignment

> **Status**: Planned (not yet executed)
> **Created**: 2026-02-17
> **Affects**: `components/ui/`, `components/patterns/`, `components/advanced/`, `components/widgets/`, `components/factoring/`, Figma Design

---

## Problem

The project currently mixes 3 file naming conventions:

| Layer | Current Convention | Example |
|---|---|---|
| `ui/` | kebab-case (correct) | `alert-dialog.tsx` |
| `patterns/` | PascalCase | `ApprovalFlowWizard.tsx` |
| `advanced/` | PascalCase | `ChartShowcase.tsx` |
| `widgets/` | PascalCase | `ActionButton.tsx` |
| `factoring/dashboard-comercial/` | Mixed | `DashboardComercial.tsx` + `kpi-cards.tsx` |

Additionally, some exports don't match their file names:

```
widgets/TimelineItem.tsx  → export { ApprovalTimelineItem }
widgets/FormField.tsx     → export { SimpleFormField }
```

And domain-specific components leak into the generic library:

```
patterns/FactoringCalculator.tsx   → domain prefix in library
patterns/FactoringKpiCard.tsx      → domain prefix in library
patterns/CupoValidator.tsx         → 100% domain-specific
```

---

## Convention: Triple Alignment

One semantic name automatically generates file name, React export, and Figma name.

### Master Rule

```
Semantic Name:  "Approval Flow Wizard"
  → File:       approval-flow-wizard.tsx
  → Export:     ApprovalFlowWizard
  → Figma:      Patterns / ApprovalFlowWizard
  → Import:     @/components/patterns/approval-flow-wizard
```

### Derivation Table

| Derivation | Rule | Example |
|---|---|---|
| **File** | kebab-case + `.tsx` | `approval-flow-wizard.tsx` |
| **React export** | PascalCase (from kebab) | `ApprovalFlowWizard` |
| **Figma** | `Layer / PascalCase` | `Patterns / ApprovalFlowWizard` |

### Figma Layer Mapping

| Directory | Figma Frame | Atomic Design | Content | Domain prefix |
|---|---|---|---|---|
| `ui/` | `UI / {Name}` | Atoms + Molecules | Generic primitives, no business logic | Never |
| `widgets/` | `Widgets / {Name}` | Composed Molecules | Small composed pieces of UI primitives | Never |
| `advanced/` | `Advanced / {Name}` | Complex Organisms | Data-heavy, charts, editors | Never |
| `patterns/` | `Patterns / {Name}` | Business Organisms | Reusable cross-domain flows | Never |
| `factoring/` | `App / Factoring / {Name}` | Templates + Pages | CESIONBNK app-only | N/A (it's the app) |

---

## Rules

### R1 — File naming: always kebab-case

```
approval-flow-wizard.tsx     (patterns/)
chart-showcase.tsx           (advanced/)
action-button.tsx            (widgets/)
```

### R2 — 1:1 file-to-export mapping

The primary export name must be the PascalCase version of the file name. No exceptions.

```
approval-flow-wizard.tsx  → export { ApprovalFlowWizard }
stat-card.tsx             → export { StatCard }
```

### R3 — No domain prefixes in library components

Library layers (`ui/`, `patterns/`, `advanced/`, `widgets/`) must never use domain prefixes.

```
BAD:  patterns/factoring-calculator.tsx
GOOD: patterns/financial-calculator.tsx    (if generic)
GOOD: factoring/factoring-calculator.tsx   (if domain-specific, move it)
```

### R4 — No version suffixes

```
BAD:  tree-table-v2.tsx
GOOD: tree-table.tsx              (current version)
GOOD: tree-table-legacy.tsx       (deprecated version, if needed)
```

### R5 — Sub-component files in feature folders

When a component has multiple sub-files, use a folder with kebab-case:

```
factoring/
  dashboard-comercial/
    dashboard-comercial.tsx       (main)
    kpi-cards.tsx                 (sub-component)
    aging-distribution.tsx        (sub-component)
    mock-data.ts                  (data)
```

### R6 — Barrel exports match file names

```typescript
// components/patterns/index.ts
export * from "./approval-flow-wizard";
export * from "./activity-feed";
export * from "./admin-portal";
```

---

## Migration Plan

### Phase 1 — Rename files to kebab-case (~74 files)

Rename all PascalCase files in `patterns/`, `advanced/`, `widgets/` to kebab-case.
Update all barrel `index.ts` files and imports across the codebase.

**Method**: Node script (`scripts/rename-to-kebab.mjs`) — bulk rename + auto-update imports.

### Phase 2 — Fix export-file mismatches (2-3 files)

| Current File | Current Export | New File | Export (unchanged) |
|---|---|---|---|
| `widgets/TimelineItem.tsx` | `ApprovalTimelineItem` | `widgets/approval-timeline-item.tsx` | `ApprovalTimelineItem` |
| `widgets/FormField.tsx` | `SimpleFormField` | `widgets/simple-form-field.tsx` | `SimpleFormField` |

### Phase 3 — Reclassify domain-specific components (3-5 files)

| Current Location | Action | New Location |
|---|---|---|
| `patterns/FactoringCalculator.tsx` | Move to factoring | `factoring/components/factoring-calculator.tsx` |
| `patterns/FactoringKpiCard.tsx` | Move to factoring | `factoring/components/factoring-kpi-card.tsx` |
| `patterns/FactoringKpiCardGroup.tsx` | Move to factoring | `factoring/components/factoring-kpi-card-group.tsx` |
| `patterns/CupoValidator.tsx` | Move to factoring | `factoring/components/cupo-validator.tsx` |

Remove these from `patterns/index.ts` (they should not be part of the npm library).

### Phase 4 — Resolve duplicates (3-4 evaluations)

| Duplicate A | Duplicate B | Decision needed |
|---|---|---|
| `advanced/DataTable.tsx` | `patterns/DataTableAdvanced.tsx` | Merge or differentiate? |
| `widgets/InvoiceTable.tsx` | `patterns/factoring/FactoringInvoiceTable.tsx` | Keep widget generic, move factoring one? |
| `patterns/KPIShowcase.tsx` | `patterns/KPIShowcaseExtended.tsx` | Merge into one? |
| `advanced/TreeTable.tsx` | `advanced/TreeTableV2.tsx` | Deprecate V1? |

---

## Estimated Effort

| Phase | Files | Method | Time |
|---|---|---|---|
| F1 — Rename to kebab-case | ~74 | Script (`rename-to-kebab.mjs`) | ~1 hour |
| F2 — Fix mismatches | 2-3 | Manual | ~10 min |
| F3 — Reclassify domain | 3-5 | Manual | ~15 min |
| F4 — Resolve duplicates | 3-4 | Analysis + manual | ~30 min |
| **Total** | | | **~2 hours** |

---

## Checklist — Adding a New Component

When creating a new component, follow this checklist:

1. [ ] Choose the correct layer (`ui/`, `widgets/`, `advanced/`, `patterns/`, `factoring/`)
2. [ ] File name is kebab-case: `my-component.tsx`
3. [ ] Primary export is PascalCase: `export function MyComponent`
4. [ ] Export name matches file name (PascalCase of kebab)
5. [ ] No domain prefix if it's a library component
6. [ ] Added to the layer's `index.ts` barrel
7. [ ] Figma component named: `Layer / MyComponent`
8. [ ] Updated `COMPONENTS.md` inventory
