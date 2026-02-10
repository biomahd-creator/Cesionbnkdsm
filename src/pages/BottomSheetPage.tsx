import { ComponentShowcase } from "../components/ui/component-showcase";
import { BottomSheet } from "../components/ui/bottom-sheet";
import { Button } from "../components/ui/button";
import { Download, MessageSquare, Share2, Printer, Trash2 } from "lucide-react";

const code = `import { BottomSheet } from "@/components/ui/bottom-sheet";

export function BottomSheetDemo() {
  return (
    <BottomSheet 
      trigger={<Button>Abrir Sheet</Button>}
      title="Opciones de Factura"
      description="Selecciona una acción para la factura seleccionada"
    >
      <div className="space-y-2">
        <Button variant="outline" className="w-full justify-start">
          <Download className="mr-2 h-4 w-4"/> Descargar PDF
        </Button>
        <Button variant="outline" className="w-full justify-start">
          <MessageSquare className="mr-2 h-4 w-4"/> Enviar Comentario
        </Button>
      </div>
    </BottomSheet>
  );
}`;

export function BottomSheetPage() {
  return (
    <ComponentShowcase
      title="Bottom Sheet"
      description="Panel deslizable desde el fondo, ideal para opciones en móvil."
      category="UI Pattern"
      preview={
        <div className="h-[200px] flex items-center justify-center">
          <BottomSheet 
            trigger={<Button>Abrir Sheet</Button>}
            title="Opciones de Factura"
            description="Selecciona una acción para la factura seleccionada"
          >
            <div className="space-y-2">
              <Button variant="outline" className="w-full justify-start"><Download className="mr-2 h-4 w-4"/> Descargar PDF</Button>
              <Button variant="outline" className="w-full justify-start"><MessageSquare className="mr-2 h-4 w-4"/> Enviar Comentario</Button>
            </div>
          </BottomSheet>
        </div>
      }
      code={code}
      props={[
        { name: "trigger", type: "ReactNode", description: "Elemento que abre el bottom sheet al hacer click.", required: true },
        { name: "children", type: "ReactNode", description: "Contenido principal del panel.", required: true },
        { name: "title", type: "string", description: "Título mostrado en el header del sheet." },
        { name: "description", type: "string", description: "Texto descriptivo debajo del título." },
        { name: "footer", type: "ReactNode", description: "Contenido del footer (botones de acción, etc.)." },
        { name: "open", type: "boolean", description: "Estado controlado de apertura." },
        { name: "onOpenChange", type: "(open: boolean) => void", description: "Callback al cambiar el estado de apertura." },
      ]}
      examples={[
        {
          title: "Con footer",
          description: "Bottom sheet con botones de acción en el footer.",
          preview: (
            <div className="h-[200px] flex items-center justify-center">
              <BottomSheet
                trigger={<Button variant="outline">Acciones del documento</Button>}
                title="Acciones disponibles"
                description="Selecciona qué hacer con este documento"
                footer={
                  <div className="flex gap-2 w-full">
                    <Button variant="outline" className="flex-1">Cancelar</Button>
                    <Button className="flex-1">Confirmar</Button>
                  </div>
                }
              >
                <div className="space-y-2">
                  <Button variant="ghost" className="w-full justify-start"><Share2 className="mr-2 h-4 w-4" /> Compartir</Button>
                  <Button variant="ghost" className="w-full justify-start"><Printer className="mr-2 h-4 w-4" /> Imprimir</Button>
                </div>
              </BottomSheet>
            </div>
          ),
          code: `<BottomSheet
  trigger={<Button variant="outline">Acciones</Button>}
  title="Acciones disponibles"
  description="Selecciona qué hacer con este documento"
  footer={
    <div className="flex gap-2 w-full">
      <Button variant="outline" className="flex-1">Cancelar</Button>
      <Button className="flex-1">Confirmar</Button>
    </div>
  }
>
  <div className="space-y-2">
    <Button variant="ghost" className="w-full justify-start">
      <Share2 className="mr-2 h-4 w-4" /> Compartir
    </Button>
    <Button variant="ghost" className="w-full justify-start">
      <Printer className="mr-2 h-4 w-4" /> Imprimir
    </Button>
  </div>
</BottomSheet>`,
        },
        {
          title: "Acciones destructivas",
          description: "Bottom sheet con opción de eliminar resaltada.",
          preview: (
            <div className="h-[200px] flex items-center justify-center">
              <BottomSheet
                trigger={<Button variant="destructive" size="sm">Eliminar</Button>}
                title="¿Eliminar factura?"
                description="Esta acción no se puede deshacer"
              >
                <div className="space-y-3">
                  <p className="text-sm text-muted-foreground">Se eliminará la factura FV-9921 y todo su historial.</p>
                  <Button variant="destructive" className="w-full"><Trash2 className="mr-2 h-4 w-4" /> Confirmar eliminación</Button>
                </div>
              </BottomSheet>
            </div>
          ),
          code: `<BottomSheet
  trigger={<Button variant="destructive" size="sm">Eliminar</Button>}
  title="¿Eliminar factura?"
  description="Esta acción no se puede deshacer"
>
  <div className="space-y-3">
    <p className="text-sm text-muted-foreground">
      Se eliminará la factura FV-9921 y todo su historial.
    </p>
    <Button variant="destructive" className="w-full">
      <Trash2 className="mr-2 h-4 w-4" /> Confirmar eliminación
    </Button>
  </div>
</BottomSheet>`,
        },
      ]}
    />
  );
}