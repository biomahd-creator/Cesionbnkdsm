/**
 * Patterns Components - Central Exports
 * Organismos reutilizables sin lógica de negocio específica
 */

export * from "./AdvancedFilterPanel";
// removed: CupoValidator (orphan — no showcase page, no active consumer)
export * from "./DataTableAdvanced";
export * from "./EditableTable";
// removed: FactoringCalculator (orphan — no showcase page, no active consumer)
export * from "./FactoringKpiCard";
export * from "./FactoringKpiCardGroup";
export * from "./KPIShowcase";
export * from "./KPIShowcaseExtended";
// MasterDataGrid migrado a /components/advanced/MasterDataGrid.tsx (v0.0.3)
export * from "./MultiStepWizard";
export * from "./NotificationCenter";
// removed: OnboardingWizard (orphan — no showcase page, no active consumer)
export * from "./ReportsConsultation";
export * from "./StatsDashboard";
// removed: UploadZone (orphan — no showcase page, no active consumer)
export * from "./AppLayout";

// NOTA: ./factoring/ (FactoringSelectionPage, OperationSummary)
// se importan directamente desde sus respectivas rutas
// NOTA: ./factoring/FactoringInvoiceTable también disponible como import directo