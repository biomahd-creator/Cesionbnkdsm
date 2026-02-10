import { ComponentShowcase } from "../components/ui/component-showcase";
import { DataTableAdvanced } from "../components/patterns/DataTableAdvanced";

const dataTableAdvancedCode = `import { DataTableAdvanced } from "@/components/patterns/DataTableAdvanced";

export function DataTableAdvancedDemo() {
  return <DataTableAdvanced />;
}`;

export function DataTableAdvancedPage() {
  return (
    <ComponentShowcase
      title="Data Table Advanced"
      description="Tabla avanzada con búsqueda, filtros por estado, ordenamiento, acciones por fila y paginación. Componente auto-contenido con datos mock de facturas."
      category="Business Pattern"
      preview={<DataTableAdvanced />}
      code={dataTableAdvancedCode}
      props={[
        { name: "(self-contained)", type: "—", description: "Componente auto-contenido. Incluye búsqueda, filtro por estado, ordenamiento por columna, acciones contextuales por fila y paginación interna." },
      ]}
      examples={[
        {
          title: "En layout de página completa",
          description: "Integración típica dentro de un módulo de administración.",
          preview: (
            <div className="text-center py-6 border rounded-lg">
              <p className="text-sm text-muted-foreground">Se renderiza como contenido principal de una página con header y sidebar.</p>
            </div>
          ),
          code: `import { DataTableAdvanced } from "@/components/patterns/DataTableAdvanced";

// En tu módulo de facturas:
<div className="space-y-4">
  <div className="flex justify-between items-center">
    <h1>Gestión de Facturas</h1>
    <Button>Nueva Factura</Button>
  </div>
  <DataTableAdvanced />
</div>`,
        },
      ]}
    />
  );
}