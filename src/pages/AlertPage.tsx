import { ComponentShowcase } from "../components/ui/component-showcase";
import { Alert, AlertDescription, AlertTitle } from "../components/ui/alert";
import { Separator } from "../components/ui/separator";
import { Button } from "../components/ui/button";
import {
  AlertCircle, CheckCircle, Info, AlertTriangle,
  Terminal, Zap, Lock, Mail, Bell, ShieldCheck,
  FileWarning, ServerCrash, Rocket,
} from "lucide-react";

export function AlertPage() {
  return (
    <ComponentShowcase
      title="Alert"
      description="Displays a callout for user attention. Ahora con variantes semánticas nativas: default, destructive, success, warning e info."
      category="Feedback"

      // Main Preview
      preview={
        <div className="flex flex-col gap-4 max-w-2xl">
          <Alert>
            <Terminal className="h-4 w-4" />
            <AlertTitle>Default</AlertTitle>
            <AlertDescription>
              Alerta neutral para información general del sistema.
            </AlertDescription>
          </Alert>

          <Alert variant="success">
            <CheckCircle className="h-4 w-4" />
            <AlertTitle>Success</AlertTitle>
            <AlertDescription>
              La operación se completó exitosamente.
            </AlertDescription>
          </Alert>

          <Alert variant="destructive">
            <AlertCircle className="h-4 w-4" />
            <AlertTitle>Destructive</AlertTitle>
            <AlertDescription>
              Ocurrió un error al procesar la solicitud.
            </AlertDescription>
          </Alert>

          <Alert variant="warning">
            <AlertTriangle className="h-4 w-4" />
            <AlertTitle>Warning</AlertTitle>
            <AlertDescription>
              Esta acción no se puede deshacer. Proceda con precaución.
            </AlertDescription>
          </Alert>

          <Alert variant="info">
            <Info className="h-4 w-4" />
            <AlertTitle>Info</AlertTitle>
            <AlertDescription>
              Nuevas funciones disponibles en su dashboard.
            </AlertDescription>
          </Alert>
        </div>
      }

      // Main Code
      code={`import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { CheckCircle, AlertCircle, AlertTriangle, Info, Terminal } from "lucide-react";

export function AlertSemanticDemo() {
  return (
    <div className="grid gap-4">
      <Alert>
        <Terminal className="h-4 w-4" />
        <AlertTitle>Default</AlertTitle>
        <AlertDescription>Información general.</AlertDescription>
      </Alert>

      <Alert variant="success">
        <CheckCircle className="h-4 w-4" />
        <AlertTitle>Success</AlertTitle>
        <AlertDescription>Operación completada.</AlertDescription>
      </Alert>

      <Alert variant="destructive">
        <AlertCircle className="h-4 w-4" />
        <AlertTitle>Error</AlertTitle>
        <AlertDescription>Error al procesar.</AlertDescription>
      </Alert>

      <Alert variant="warning">
        <AlertTriangle className="h-4 w-4" />
        <AlertTitle>Warning</AlertTitle>
        <AlertDescription>Proceda con precaución.</AlertDescription>
      </Alert>

      <Alert variant="info">
        <Info className="h-4 w-4" />
        <AlertTitle>Info</AlertTitle>
        <AlertDescription>Nuevas funciones disponibles.</AlertDescription>
      </Alert>
    </div>
  );
}`}

      // Props Documentation
      props={[
        {
          name: "variant",
          type: '"default" | "destructive" | "success" | "warning" | "info"',
          default: '"default"',
          description: "Estilo visual del alert. Cada variante usa colores explícitos compatibles con light/dark mode.",
        },
        {
          name: "className",
          type: "string",
          description: "Clases CSS adicionales para el alert",
        },
        {
          name: "children",
          type: "ReactNode",
          description: "Contenido del alert (AlertTitle, AlertDescription, iconos, etc.)",
          required: true,
        },
      ]}

      // Examples
      examples={[
        {
          title: "Todas las Variantes",
          description: "Las 5 variantes nativas del componente Alert, sin necesidad de className manual.",
          preview: (
            <div className="grid gap-4 max-w-2xl">
              <Alert>
                <Terminal className="h-4 w-4" />
                <AlertTitle>Default</AlertTitle>
                <AlertDescription>
                  This is a default informational alert.
                </AlertDescription>
              </Alert>
              <Alert variant="success">
                <CheckCircle className="h-4 w-4" />
                <AlertTitle>Success</AlertTitle>
                <AlertDescription>
                  Your changes have been saved successfully.
                </AlertDescription>
              </Alert>
              <Alert variant="destructive">
                <AlertCircle className="h-4 w-4" />
                <AlertTitle>Destructive</AlertTitle>
                <AlertDescription>
                  Your session has expired. Please log in again.
                </AlertDescription>
              </Alert>
              <Alert variant="warning">
                <AlertTriangle className="h-4 w-4" />
                <AlertTitle>Warning</AlertTitle>
                <AlertDescription>
                  This action cannot be undone. Please proceed with caution.
                </AlertDescription>
              </Alert>
              <Alert variant="info">
                <Info className="h-4 w-4" />
                <AlertTitle>Info</AlertTitle>
                <AlertDescription>
                  New features have been added to your dashboard.
                </AlertDescription>
              </Alert>
            </div>
          ),
          code: `<Alert variant="success">
  <CheckCircle className="h-4 w-4" />
  <AlertTitle>Success</AlertTitle>
  <AlertDescription>Saved successfully.</AlertDescription>
</Alert>

<Alert variant="destructive">
  <AlertCircle className="h-4 w-4" />
  <AlertTitle>Error</AlertTitle>
  <AlertDescription>Session expired.</AlertDescription>
</Alert>

<Alert variant="warning">
  <AlertTriangle className="h-4 w-4" />
  <AlertTitle>Warning</AlertTitle>
  <AlertDescription>Cannot be undone.</AlertDescription>
</Alert>

<Alert variant="info">
  <Info className="h-4 w-4" />
  <AlertTitle>Info</AlertTitle>
  <AlertDescription>New features available.</AlertDescription>
</Alert>`,
        },
        {
          title: "Escenarios de Factoring",
          description: "Alerts semánticos en contextos reales del módulo de Factoring.",
          preview: (
            <div className="grid gap-4 max-w-2xl">
              <Alert variant="success">
                <ShieldCheck className="h-4 w-4" />
                <AlertTitle>Operación Aprobada</AlertTitle>
                <AlertDescription>
                  La operación OP-2024-001 por $45.200.000 fue aprobada por el Comité de Riesgo y está lista para cesión.
                </AlertDescription>
              </Alert>

              <Alert variant="warning">
                <FileWarning className="h-4 w-4" />
                <AlertTitle>Documentos Pendientes</AlertTitle>
                <AlertDescription>
                  Faltan 2 documentos por verificar en la operación OP-2024-003. La cesión no puede ejecutarse hasta completar la validación.
                </AlertDescription>
              </Alert>

              <Alert variant="destructive">
                <ServerCrash className="h-4 w-4" />
                <AlertTitle>Error de Conexión SII</AlertTitle>
                <AlertDescription>
                  No se pudo verificar las facturas contra el Servicio de Impuestos Internos. Reintente en unos minutos.
                </AlertDescription>
              </Alert>

              <Alert variant="info">
                <Rocket className="h-4 w-4" />
                <AlertTitle>Nueva Funcionalidad</AlertTitle>
                <AlertDescription>
                  Ahora puede pre-evaluar operaciones con el motor de scoring automático. Acceda desde el panel de evaluación.
                </AlertDescription>
              </Alert>
            </div>
          ),
          code: `<Alert variant="success">
  <ShieldCheck className="h-4 w-4" />
  <AlertTitle>Operación Aprobada</AlertTitle>
  <AlertDescription>
    OP-2024-001 aprobada por Comité de Riesgo.
  </AlertDescription>
</Alert>

<Alert variant="warning">
  <FileWarning className="h-4 w-4" />
  <AlertTitle>Documentos Pendientes</AlertTitle>
  <AlertDescription>
    Faltan 2 documentos por verificar.
  </AlertDescription>
</Alert>`,
        },
        {
          title: "With Actions",
          description: "Alert con botones de acción usando las nuevas variantes semánticas de Button.",
          preview: (
            <div className="grid gap-4 max-w-2xl">
              <Alert variant="warning">
                <AlertTriangle className="h-4 w-4" />
                <AlertTitle>Sesión por Expirar</AlertTitle>
                <AlertDescription className="mt-1">
                  Su sesión expirará en 5 minutos. ¿Desea extenderla?
                </AlertDescription>
                <div className="flex gap-2 mt-3 col-start-2">
                  <Button size="sm" variant="warning">Extender Sesión</Button>
                  <Button size="sm" variant="warning-outline">Cerrar Sesión</Button>
                </div>
              </Alert>

              <Alert variant="info">
                <Zap className="h-4 w-4" />
                <AlertTitle>Actualización Disponible</AlertTitle>
                <AlertDescription className="mt-1">
                  Hay una nueva versión del módulo de Factoring disponible.
                </AlertDescription>
                <div className="flex gap-2 mt-3 col-start-2">
                  <Button size="sm" variant="info">Actualizar Ahora</Button>
                  <Button size="sm" variant="info-outline">Recordar Después</Button>
                </div>
              </Alert>
            </div>
          ),
          code: `<Alert variant="warning">
  <AlertTriangle className="h-4 w-4" />
  <AlertTitle>Sesión por Expirar</AlertTitle>
  <AlertDescription>Su sesión expirará en 5 minutos.</AlertDescription>
  <div className="flex gap-2 mt-3 col-start-2">
    <Button size="sm" variant="warning">Extender</Button>
    <Button size="sm" variant="warning-outline">Cerrar</Button>
  </div>
</Alert>`,
        },
        {
          title: "Without Icon",
          description: "Alert sin icono, solo con texto",
          preview: (
            <div className="grid gap-3 max-w-2xl">
              <Alert variant="info">
                <AlertTitle>Nota Importante</AlertTitle>
                <AlertDescription>
                  Los alertas sin icono también funcionan correctamente con todas las variantes semánticas.
                </AlertDescription>
              </Alert>
            </div>
          ),
          code: `<Alert variant="info">
  <AlertTitle>Nota Importante</AlertTitle>
  <AlertDescription>
    Funciona sin icono con cualquier variante.
  </AlertDescription>
</Alert>`,
        },
        {
          title: "Compact Alerts",
          description: "Alertas compactas sin título, solo descripción.",
          preview: (
            <div className="grid gap-3 max-w-2xl">
              <Alert variant="success">
                <CheckCircle className="h-4 w-4" />
                <AlertDescription>
                  Cambios guardados exitosamente.
                </AlertDescription>
              </Alert>
              <Alert variant="warning">
                <AlertTriangle className="h-4 w-4" />
                <AlertDescription>
                  Mantenimiento programado para las 23:00 hrs.
                </AlertDescription>
              </Alert>
              <Alert variant="destructive">
                <Lock className="h-4 w-4" />
                <AlertDescription>
                  Cuenta bloqueada por actividad sospechosa.
                </AlertDescription>
              </Alert>
              <Alert variant="info">
                <Mail className="h-4 w-4" />
                <AlertDescription>
                  Tiene 3 mensajes sin leer en su bandeja.
                </AlertDescription>
              </Alert>
            </div>
          ),
          code: `<Alert variant="success">
  <CheckCircle className="h-4 w-4" />
  <AlertDescription>Cambios guardados.</AlertDescription>
</Alert>`,
        },
        {
          title: "Notification Style (Border Left)",
          description: "Alertas con borde lateral coloreado para estilo notificación.",
          preview: (
            <div className="grid gap-4 max-w-2xl">
              <Alert variant="info" className="border-l-4 border-l-blue-500 dark:border-l-blue-400">
                <Bell className="h-4 w-4" />
                <AlertTitle>Nuevo Mensaje</AlertTitle>
                <AlertDescription>
                  Tiene 3 mensajes sin leer en su bandeja.
                </AlertDescription>
              </Alert>

              <Alert variant="success" className="border-l-4 border-l-green-500 dark:border-l-green-400">
                <CheckCircle className="h-4 w-4" />
                <AlertTitle>Deploy Exitoso</AlertTitle>
                <AlertDescription>
                  Su despliegue se completó y está en producción.
                </AlertDescription>
              </Alert>

              <Alert variant="warning" className="border-l-4 border-l-amber-500 dark:border-l-amber-400">
                <AlertTriangle className="h-4 w-4" />
                <AlertTitle>Uso Elevado</AlertTitle>
                <AlertDescription>
                  El uso de API está al 85% de su cuota mensual.
                </AlertDescription>
              </Alert>
            </div>
          ),
          code: `<Alert variant="info" className="border-l-4 border-l-blue-500 dark:border-l-blue-400">
  <Bell className="h-4 w-4" />
  <AlertTitle>Nuevo Mensaje</AlertTitle>
  <AlertDescription>3 mensajes sin leer.</AlertDescription>
</Alert>`,
        },
      ]}
    />
  );
}
