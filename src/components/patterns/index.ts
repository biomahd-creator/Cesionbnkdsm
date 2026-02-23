/**
 * Patterns Components - Central Exports
 * Organismos reutilizables sin lógica de negocio específica
 */

export * from "./advanced-filter-panel";
// removed: CupoValidator (orphan — no showcase page, no active consumer)
export * from "./data-table-advanced";
export * from "./editable-table";
// FactoringKpiCard / FactoringKpiCardGroup → moved to /factoring/components/ (Phase 3)
export * from "./kpi-showcase";
export * from "./kpi-showcase-extended";
// MasterDataGrid migrado a /components/advanced/master-data-grid.tsx (v0.0.3)
export * from "./multi-step-wizard";
export * from "./notification-center";
// removed: OnboardingWizard (orphan — no showcase page, no active consumer)
export * from "./reports-consultation";
export * from "./stats-dashboard";
// removed: UploadZone (orphan — no showcase page, no active consumer)
export * from "./app-layout";

// NOTA: ./factoring/ (FactoringSelectionPage, OperationSummary)
// se importan directamente desde sus respectivas rutas
// NOTA: ./factoring/factoring-invoice-table también disponible como import directo