import { ComponentShowcase } from "../components/ui/component-showcase";
import { Button } from "../components/ui/button";
import { toast } from "sonner@2.0.3";

export function ToastPage() {
  return (
    <ComponentShowcase
      title="Toast"
      description="Mensaje temporal de notificación. Importa toast de sonner y úsalo para mostrar diferentes tipos de notificaciones."
      category="Feedback"
      
      // Main Preview
      preview={
        <Button
          variant="outline"
          onClick={() =>
            toast("Event has been created", {
              description: "Sunday, December 03, 2023 at 9:00 AM",
              action: {
                label: "Undo",
                onClick: () => console.log("Undo"),
              },
            })
          }
        >
          Show Toast
        </Button>
      }
      
      // Main Code
      code={`import { toast } from "sonner"
import { Button } from "@/components/ui/button"

export function ToastDemo() {
  return (
    <Button
      variant="outline"
      onClick={() =>
        toast("Event has been created", {
          description: "Sunday, December 03, 2023 at 9:00 AM",
          action: {
            label: "Undo",
            onClick: () => console.log("Undo"),
          },
        })
      }
    >
      Show Toast
    </Button>
  )
}`}
      
      // Props Documentation
      props={[
        { name: "message", type: "string | ReactNode", description: "Texto principal del toast. Primer argumento de toast().", required: true },
        { name: "description", type: "string | ReactNode", description: "Texto secundario debajo del mensaje." },
        { name: "action", type: "{ label: string; onClick: () => void }", description: "Botón de acción dentro del toast." },
        { name: "duration", type: "number", default: "4000", description: "Duración en ms antes de auto-cerrar. Infinity para persistente." },
        { name: "position", type: "\"top-left\" | \"top-right\" | \"bottom-left\" | \"bottom-right\" | ...", description: "Posición del toast en pantalla." },
        { name: "dismissible", type: "boolean", default: "true", description: "Permite cerrar el toast manualmente." },
        { name: "id", type: "string | number", description: "ID único para actualizar o descartar un toast específico." },
      ]}
      
      // Examples
      examples={[
        {
          title: "Success",
          description: "Show a success message.",
          preview: (
            <Button
              variant="outline"
              onClick={() => toast.success("Event has been created")}
            >
              Show Success
            </Button>
          ),
          code: `toast.success("Event has been created")`
        },
        {
          title: "Error",
          description: "Show an error message.",
          preview: (
            <Button
              variant="outline"
              onClick={() => toast.error("Event has not been created")}
            >
              Show Error
            </Button>
          ),
          code: `toast.error("Event has not been created")`
        },
        {
          title: "Action",
          description: "Show a toast with an action button.",
          preview: (
            <Button
              variant="outline"
              onClick={() =>
                toast("Event has been created", {
                  action: {
                    label: "Undo",
                    onClick: () => console.log("Undo"),
                  },
                })
              }
            >
              Show Action
            </Button>
          ),
          code: `toast("Event has been created", {
  action: {
    label: "Undo",
    onClick: () => console.log("Undo"),
  },
})`
        }
      ]}
    />
  );
}