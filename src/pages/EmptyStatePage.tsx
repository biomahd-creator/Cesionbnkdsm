import { ComponentShowcase } from "../components/ui/component-showcase";
import { EmptyState } from "../components/ui/empty-state";
import { FileSearch, Inbox, Search } from "lucide-react";

const code = `import { EmptyState } from "@/components/ui/empty-state";
import { FileSearch } from "lucide-react";

export function EmptyStateDemo() {
  return (
    <EmptyState 
      title="No hay documentos"
      description="Sube tu primer documento para comenzar el proceso de factoring."
      action={{ label: "Subir Documento", onClick: () => {} }}
      icon={FileSearch}
    />
  );
}`;

export function EmptyStatePage() {
  return (
    <ComponentShowcase
      title="Empty State"
      description="Estado vacío para listas o contenedores sin datos."
      category="UI Pattern"
      preview={
        <EmptyState 
          title="No hay documentos"
          description="Sube tu primer documento para comenzar el proceso de factoring."
          action={{ label: "Subir Documento", onClick: () => {} }}
          icon={FileSearch}
        />
      }
      code={code}
      props={[
        { name: "title", type: "string", description: "Título principal del estado vacío.", required: true },
        { name: "description", type: "string", description: "Texto descriptivo debajo del título.", required: true },
        { name: "icon", type: "React.ElementType", default: "FileQuestion", description: "Ícono de Lucide que se muestra centrado arriba del título." },
        { name: "action", type: "{ label: string; onClick: () => void }", description: "Botón de acción principal (ej. 'Crear nuevo', 'Subir archivo')." },
        { name: "children", type: "ReactNode", description: "Contenido adicional debajo de la descripción y acción." },
        { name: "className", type: "string", description: "Clases adicionales para el contenedor raíz." },
      ]}
      examples={[
        {
          title: "Sin acción",
          description: "Estado vacío informativo sin botón de acción.",
          preview: (
            <EmptyState
              title="Sin resultados"
              description="No se encontraron facturas que coincidan con los filtros seleccionados."
              icon={Search}
            />
          ),
          code: `<EmptyState
  title="Sin resultados"
  description="No se encontraron facturas que coincidan con los filtros seleccionados."
  icon={Search}
/>`,
        },
        {
          title: "Bandeja vacía",
          description: "Variante para secciones de inbox o notificaciones.",
          preview: (
            <EmptyState
              title="Bandeja vacía"
              description="No tienes notificaciones nuevas por ahora."
              icon={Inbox}
              action={{ label: "Configurar alertas", onClick: () => {} }}
            />
          ),
          code: `<EmptyState
  title="Bandeja vacía"
  description="No tienes notificaciones nuevas por ahora."
  icon={Inbox}
  action={{ label: "Configurar alertas", onClick: () => {} }}
/>`,
        },
      ]}
    />
  );
}