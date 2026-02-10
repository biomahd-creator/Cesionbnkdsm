import { ComponentShowcase } from "../components/ui/component-showcase";
import { AdvancedFilterPanel } from "../components/patterns/AdvancedFilterPanel";

const advancedFilterCode = `import { AdvancedFilterPanel } from "@/components/patterns/AdvancedFilterPanel";

export function AdvancedFilterPanelDemo() {
  return <AdvancedFilterPanel />;
}`;

export function AdvancedFilterPanelPage() {
  return (
    <ComponentShowcase
      title="Advanced Filter Panel"
      description="Panel avanzado de filtros con Sheet lateral, DatePicker para rango de fechas, Select para estados, Checkboxes para tipos y ScrollArea. Componente auto-contenido con estado interno."
      category="Business Pattern"
      preview={<AdvancedFilterPanel />}
      code={advancedFilterCode}
      props={[
        { name: "(self-contained)", type: "—", description: "Este componente no recibe props externos. Gestiona su propio estado de filtros (fechas, estados, tipos de cliente, montos)." },
      ]}
      examples={[
        {
          title: "Integración en página de listado",
          description: "Cómo usar el panel de filtros dentro de una vista de facturas.",
          preview: (
            <div className="text-center py-6 border rounded-lg">
              <p className="text-sm text-muted-foreground">El componente se coloca junto a la tabla de datos en un layout de sidebar o header.</p>
            </div>
          ),
          code: `import { AdvancedFilterPanel } from "@/components/patterns/AdvancedFilterPanel";

// En tu página de listado:
<div className="flex gap-4">
  <div className="flex-1">
    <DataTableAdvanced />
  </div>
  <AdvancedFilterPanel />
</div>`,
        },
      ]}
    />
  );
}