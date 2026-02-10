import { ComponentShowcase } from "../components/ui/component-showcase";
import { FloatingActionButton } from "../components/ui/floating-action-button";
import { Plus, MessageSquare, Upload } from "lucide-react";

const code = `import { FloatingActionButton } from "@/components/ui/floating-action-button";

export function FabDemo() {
  return <FloatingActionButton position="bottom-right" />;
}`;

export function FabPage() {
  return (
    <ComponentShowcase
      title="Floating Action Button"
      description="Botón de acción principal flotante."
      category="UI Pattern"
      preview={
        <div className="h-[200px] w-full relative bg-muted/20 rounded-md overflow-hidden border">
          <div className="absolute inset-0 flex items-center justify-center text-muted-foreground">
            El botón flota en la esquina
          </div>
          <FloatingActionButton position="bottom-right" className="absolute" />
        </div>
      }
      code={code}
      props={[
        { name: "icon", type: "React.ElementType", default: "Plus", description: "Ícono de Lucide que se muestra en el botón." },
        { name: "label", type: "string", description: "Texto del tooltip al hacer hover sobre el botón." },
        { name: "position", type: '"bottom-right" | "bottom-left" | "top-right" | "top-left"', default: '"bottom-right"', description: "Esquina donde se posiciona el botón flotante." },
        { name: "className", type: "string", description: "Clases adicionales. Soporta todos los props de Button (variant, size, onClick, etc.)." },
      ]}
      examples={[
        {
          title: "Posición inferior izquierda",
          description: "FAB con ícono personalizado en la esquina inferior izquierda.",
          preview: (
            <div className="h-[200px] w-full relative bg-muted/20 rounded-md overflow-hidden border">
              <div className="absolute inset-0 flex items-center justify-center text-muted-foreground text-sm">
                Esquina inferior izquierda
              </div>
              <FloatingActionButton position="bottom-left" icon={MessageSquare} className="absolute" />
            </div>
          ),
          code: `<FloatingActionButton 
  position="bottom-left" 
  icon={MessageSquare}
  label="Nuevo mensaje"
  onClick={() => openChat()}
/>`,
        },
        {
          title: "Posición superior derecha",
          description: "FAB con ícono de upload en la esquina superior derecha.",
          preview: (
            <div className="h-[200px] w-full relative bg-muted/20 rounded-md overflow-hidden border">
              <div className="absolute inset-0 flex items-center justify-center text-muted-foreground text-sm">
                Esquina superior derecha
              </div>
              <FloatingActionButton position="top-right" icon={Upload} className="absolute" />
            </div>
          ),
          code: `<FloatingActionButton 
  position="top-right" 
  icon={Upload}
  label="Subir archivo"
  onClick={() => openUploader()}
/>`,
        },
      ]}
    />
  );
}