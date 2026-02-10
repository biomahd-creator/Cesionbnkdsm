import { ComponentShowcase } from "../components/ui/component-showcase";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "../components/ui/alert-dialog";
import { Button } from "../components/ui/button";
import { AlertTriangle, Trash2, LogOut, Info } from "lucide-react";

const code = `import {
  AlertDialog, AlertDialogAction, AlertDialogCancel,
  AlertDialogContent, AlertDialogDescription, AlertDialogFooter,
  AlertDialogHeader, AlertDialogTitle, AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { Button } from "@/components/ui/button";

export function AlertDialogDemo() {
  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <Button variant="destructive">Eliminar Cuenta</Button>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>¿Estás absolutamente seguro?</AlertDialogTitle>
          <AlertDialogDescription>
            Esta acción no se puede deshacer.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Cancelar</AlertDialogCancel>
          <AlertDialogAction>Sí, eliminar</AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}`;

export function AlertDialogPage() {
  return (
    <ComponentShowcase
      title="Alert Dialog"
      description="Modal dialog para interrupciones importantes que requieren confirmación del usuario. Construido sobre Radix UI con focus trap, escape key, ARIA roles y restauración de foco. Usar para acciones destructivas o decisiones críticas irreversibles."
      category="Feedback"
      preview={
        <AlertDialog>
          <AlertDialogTrigger asChild>
            <Button variant="destructive">
              <Trash2 className="h-4 w-4 mr-2" />
              Eliminar Cuenta
            </Button>
          </AlertDialogTrigger>
          <AlertDialogContent>
            <AlertDialogHeader>
              <AlertDialogTitle>¿Estás absolutamente seguro?</AlertDialogTitle>
              <AlertDialogDescription>
                Esta acción no se puede deshacer. Esto eliminará permanentemente tu cuenta
                y removerá todos tus datos de nuestros servidores.
              </AlertDialogDescription>
            </AlertDialogHeader>
            <AlertDialogFooter>
              <AlertDialogCancel>Cancelar</AlertDialogCancel>
              <AlertDialogAction className="bg-red-600 hover:bg-red-700">
                Sí, eliminar cuenta
              </AlertDialogAction>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialog>
      }
      code={code}
      props={[
        { name: "AlertDialog", type: "Component", description: "Contenedor principal del dialog" },
        { name: "AlertDialogTrigger", type: "Component", description: "Botón que abre el dialog (usar asChild)" },
        { name: "AlertDialogContent", type: "Component", description: "Contenido del modal con overlay" },
        { name: "AlertDialogHeader", type: "Component", description: "Contenedor de título y descripción" },
        { name: "AlertDialogTitle", type: "Component", description: "Título del alert dialog" },
        { name: "AlertDialogDescription", type: "Component", description: "Texto descriptivo del dialog" },
        { name: "AlertDialogFooter", type: "Component", description: "Contenedor de botones de acción" },
        { name: "AlertDialogAction", type: "Component", description: "Botón de acción confirmatoria" },
        { name: "AlertDialogCancel", type: "Component", description: "Botón de cancelar / cerrar" },
      ]}
      examples={[
        {
          title: "Advertencia",
          description: "Alert dialog con tono de advertencia para cambios sin guardar.",
          preview: (
            <AlertDialog>
              <AlertDialogTrigger asChild>
                <Button variant="outline">
                  <AlertTriangle className="h-4 w-4 mr-2" />
                  Ver Advertencia
                </Button>
              </AlertDialogTrigger>
              <AlertDialogContent>
                <AlertDialogHeader>
                  <AlertDialogTitle className="flex items-center gap-2">
                    <AlertTriangle className="h-5 w-5 text-yellow-600" />
                    Cambios sin guardar
                  </AlertDialogTitle>
                  <AlertDialogDescription>
                    Tienes cambios sin guardar. Si continúas, perderás todos los cambios
                    realizados en este documento.
                  </AlertDialogDescription>
                </AlertDialogHeader>
                <AlertDialogFooter>
                  <AlertDialogCancel>Cancelar</AlertDialogCancel>
                  <AlertDialogAction>Continuar sin guardar</AlertDialogAction>
                </AlertDialogFooter>
              </AlertDialogContent>
            </AlertDialog>
          ),
          code: `<AlertDialog>
  <AlertDialogTrigger asChild>
    <Button variant="outline">Ver Advertencia</Button>
  </AlertDialogTrigger>
  <AlertDialogContent>
    <AlertDialogHeader>
      <AlertDialogTitle>Cambios sin guardar</AlertDialogTitle>
      <AlertDialogDescription>
        Si continúas, perderás todos los cambios.
      </AlertDialogDescription>
    </AlertDialogHeader>
    <AlertDialogFooter>
      <AlertDialogCancel>Cancelar</AlertDialogCancel>
      <AlertDialogAction>Continuar</AlertDialogAction>
    </AlertDialogFooter>
  </AlertDialogContent>
</AlertDialog>`,
        },
        {
          title: "Cerrar Sesión",
          description: "Confirmación de cierre de sesión.",
          preview: (
            <AlertDialog>
              <AlertDialogTrigger asChild>
                <Button variant="outline">
                  <LogOut className="h-4 w-4 mr-2" />
                  Cerrar Sesión
                </Button>
              </AlertDialogTrigger>
              <AlertDialogContent>
                <AlertDialogHeader>
                  <AlertDialogTitle>¿Cerrar sesión?</AlertDialogTitle>
                  <AlertDialogDescription>
                    Deberás iniciar sesión nuevamente para acceder a tu cuenta.
                  </AlertDialogDescription>
                </AlertDialogHeader>
                <AlertDialogFooter>
                  <AlertDialogCancel>Cancelar</AlertDialogCancel>
                  <AlertDialogAction>Cerrar Sesión</AlertDialogAction>
                </AlertDialogFooter>
              </AlertDialogContent>
            </AlertDialog>
          ),
          code: `<AlertDialog>
  <AlertDialogTrigger asChild>
    <Button variant="outline">Cerrar Sesión</Button>
  </AlertDialogTrigger>
  <AlertDialogContent>
    <AlertDialogHeader>
      <AlertDialogTitle>¿Cerrar sesión?</AlertDialogTitle>
      <AlertDialogDescription>...</AlertDialogDescription>
    </AlertDialogHeader>
    <AlertDialogFooter>
      <AlertDialogCancel>Cancelar</AlertDialogCancel>
      <AlertDialogAction>Cerrar Sesión</AlertDialogAction>
    </AlertDialogFooter>
  </AlertDialogContent>
</AlertDialog>`,
        },
        {
          title: "Información",
          description: "Alert dialog informativo para actualizaciones.",
          preview: (
            <AlertDialog>
              <AlertDialogTrigger asChild>
                <Button variant="outline">
                  <Info className="h-4 w-4 mr-2" />
                  Ver Información
                </Button>
              </AlertDialogTrigger>
              <AlertDialogContent>
                <AlertDialogHeader>
                  <AlertDialogTitle className="flex items-center gap-2">
                    <Info className="h-5 w-5 text-blue-600" />
                    Actualización Disponible
                  </AlertDialogTitle>
                  <AlertDialogDescription>
                    Hay una nueva versión disponible con mejoras de rendimiento y
                    correcciones de bugs.
                  </AlertDialogDescription>
                </AlertDialogHeader>
                <AlertDialogFooter>
                  <AlertDialogCancel>Más tarde</AlertDialogCancel>
                  <AlertDialogAction>Actualizar Ahora</AlertDialogAction>
                </AlertDialogFooter>
              </AlertDialogContent>
            </AlertDialog>
          ),
          code: `<AlertDialog>
  <AlertDialogTrigger asChild>
    <Button>Ver Información</Button>
  </AlertDialogTrigger>
  <AlertDialogContent>
    <AlertDialogHeader>
      <AlertDialogTitle>Actualización Disponible</AlertDialogTitle>
      <AlertDialogDescription>...</AlertDialogDescription>
    </AlertDialogHeader>
    <AlertDialogFooter>
      <AlertDialogCancel>Más tarde</AlertDialogCancel>
      <AlertDialogAction>Actualizar</AlertDialogAction>
    </AlertDialogFooter>
  </AlertDialogContent>
</AlertDialog>`,
        },
      ]}
    />
  );
}
