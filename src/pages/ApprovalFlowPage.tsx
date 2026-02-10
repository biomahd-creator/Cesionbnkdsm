import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../components/ui/card";
import { Badge } from "../components/ui/badge";
import { Separator } from "../components/ui/separator";
import { ApprovalFlowWizard } from "../components/patterns/ApprovalFlowWizard";
import { Workflow, Info, CheckCircle } from "lucide-react";
import { Alert, AlertDescription } from "../components/ui/alert";

export function ApprovalFlowPage() {
  return (
    <div className="space-y-8">
      {/* Header */}
      <div>
        <div className="flex items-center gap-3 mb-2">
          <h2 className="text-2xl font-medium">Approval Flow Wizard</h2>
          <Badge variant="default" className="bg-purple-500 hover:bg-purple-600">
            <Workflow className="h-3 w-3 mr-1" />
            Multi-Step Pattern
          </Badge>
        </div>
        <p className="text-muted-foreground">
          Wizard de 5 pasos que integra selección de facturas, validación de cupos, calculadora y confirmación.
        </p>
      </div>

      <Separator />

      {/* Información del Pattern */}
      <Alert className="border-primary/50 bg-primary/5">
        <Info className="h-4 w-4 text-primary" />
        <AlertDescription className="text-sm">
          <strong className="text-primary">Multi-Step Wizard Pattern</strong> - Flujo guiado que divide 
          un proceso complejo en pasos manejables. Integra todos los componentes de factoring en un solo flujo.
        </AlertDescription>
      </Alert>

      {/* Componentes integrados */}
      <Card className="elevation-1">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <CheckCircle className="h-5 w-5 text-primary" />
            Componentes Integrados
          </CardTitle>
          <CardDescription>
            Este wizard integra múltiples patterns de business logic
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4 md:grid-cols-3">
            <div className="p-4 rounded-lg border bg-card">
              <h4 className="font-semibold mb-2">Business Patterns</h4>
              <ul className="text-sm space-y-1 text-muted-foreground">
                <li>• CupoValidator (Step 2)</li>
                <li>• FactoringCalculator (Step 3)</li>
                <li>• Custom selection UI (Step 1)</li>
                <li>• Summary review (Step 4)</li>
              </ul>
            </div>

            <div className="p-4 rounded-lg border bg-card">
              <h4 className="font-semibold mb-2">UI Components</h4>
              <ul className="text-sm space-y-1 text-muted-foreground">
                <li>• Card (containers)</li>
                <li>• Progress (wizard progress)</li>
                <li>• Badge (status, steps)</li>
                <li>• Button (navigation)</li>
                <li>• Alert (notifications)</li>
              </ul>
            </div>

            <div className="p-4 rounded-lg border bg-card">
              <h4 className="font-semibold mb-2">Features</h4>
              <ul className="text-sm space-y-1 text-muted-foreground">
                <li>• 5 steps con validación</li>
                <li>• Progress indicator visual</li>
                <li>• Navegación back/forward</li>
                <li>• Validación condicional</li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Preview del wizard */}
      <Card className="elevation-2">
        <CardHeader>
          <CardTitle>Live Preview</CardTitle>
          <CardDescription>
            Wizard interactivo completo - prueba el flujo desde el inicio hasta la confirmación
          </CardDescription>
        </CardHeader>
        <CardContent>
          <ApprovalFlowWizard />
        </CardContent>
      </Card>

      {/* Descripción de los steps */}
      <Card className="elevation-1">
        <CardHeader>
          <CardTitle>Pasos del Wizard</CardTitle>
          <CardDescription>Descripción detallada de cada step</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="flex items-start gap-4 p-4 rounded-lg border bg-muted/20">
              <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                <span className="text-primary font-semibold">1</span>
              </div>
              <div className="flex-1">
                <h4 className="font-semibold mb-1">Selección de Facturas</h4>
                <p className="text-sm text-muted-foreground mb-2">
                  El usuario selecciona una o más facturas de una lista disponible. 
                  Cada factura muestra ID, cliente, monto y fecha de vencimiento.
                </p>
                <div className="flex gap-2">
                  <Badge variant="outline" className="text-xs">Multi-select</Badge>
                  <Badge variant="outline" className="text-xs">Cálculo de totales</Badge>
                </div>
              </div>
            </div>

            <div className="flex items-start gap-4 p-4 rounded-lg border bg-muted/20">
              <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                <span className="text-primary font-semibold">2</span>
              </div>
              <div className="flex-1">
                <h4 className="font-semibold mb-1">Validación de Cupos</h4>
                <p className="text-sm text-muted-foreground mb-2">
                  Integra el componente CupoValidator para verificar que el monto total 
                  esté dentro del límite disponible. Muestra proyección post-operación.
                </p>
                <div className="flex gap-2">
                  <Badge variant="outline" className="text-xs">CupoValidator</Badge>
                  <Badge variant="outline" className="text-xs">Validación en tiempo real</Badge>
                </div>
              </div>
            </div>

            <div className="flex items-start gap-4 p-4 rounded-lg border bg-muted/20">
              <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                <span className="text-primary font-semibold">3</span>
              </div>
              <div className="flex-1">
                <h4 className="font-semibold mb-1">Cálculo y Términos</h4>
                <p className="text-sm text-muted-foreground mb-2">
                  Integra el FactoringCalculator completo para que el usuario configure 
                  plazo, tasa y vea el cálculo de comisión y monto a recibir.
                </p>
                <div className="flex gap-2">
                  <Badge variant="outline" className="text-xs">FactoringCalculator</Badge>
                  <Badge variant="outline" className="text-xs">CEA calculado</Badge>
                </div>
              </div>
            </div>

            <div className="flex items-start gap-4 p-4 rounded-lg border bg-muted/20">
              <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                <span className="text-primary font-semibold">4</span>
              </div>
              <div className="flex-1">
                <h4 className="font-semibold mb-1">Revisión y Confirmación</h4>
                <p className="text-sm text-muted-foreground mb-2">
                  Muestra un resumen completo de todas las facturas seleccionadas, 
                  términos acordados y cálculos finales antes de crear la operación.
                </p>
                <div className="flex gap-2">
                  <Badge variant="outline" className="text-xs">Summary view</Badge>
                  <Badge variant="outline" className="text-xs">Confirmación requerida</Badge>
                </div>
              </div>
            </div>

            <div className="flex items-start gap-4 p-4 rounded-lg border bg-green-500/10 border-green-500/20">
              <div className="h-10 w-10 rounded-full bg-green-500/20 flex items-center justify-center flex-shrink-0">
                <CheckCircle className="h-5 w-5 text-green-600 dark:text-green-400" />
              </div>
              <div className="flex-1">
                <h4 className="font-semibold mb-1 text-green-700 dark:text-green-400">
                  Confirmación Exitosa
                </h4>
                <p className="text-sm text-muted-foreground mb-2">
                  Muestra confirmación de que la operación fue creada exitosamente 
                  con su ID único y permite crear una nueva o ver detalles.
                </p>
                <div className="flex gap-2">
                  <Badge variant="outline" className="text-xs border-green-500/50 text-green-600 dark:text-green-400">
                    Success state
                  </Badge>
                  <Badge variant="outline" className="text-xs border-green-500/50 text-green-600 dark:text-green-400">
                    Action buttons
                  </Badge>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Características técnicas */}
      <Card className="elevation-1">
        <CardHeader>
          <CardTitle>Características Técnicas</CardTitle>
          <CardDescription>Implementación y consideraciones</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid gap-6 md:grid-cols-3">
            <div>
              <h4 className="font-semibold mb-3 text-primary">Estado y Validación</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>✅ State management con React hooks</li>
                <li>✅ Validación condicional por step</li>
                <li>✅ Botón "Siguiente" habilitado solo si válido</li>
                <li>✅ Progress tracking automático</li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-3 text-primary">UX/UI</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>✅ Visual progress indicator (iconos + línea)</li>
                <li>✅ Steps completados marcados con checkmark</li>
                <li>✅ Navegación back/forward funcional</li>
                <li>✅ Alerts contextuales por step</li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-3 text-primary">Integración</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>✅ Reutiliza CupoValidator completo</li>
                <li>✅ Reutiliza FactoringCalculator completo</li>
                <li>✅ Callbacks para validaciones</li>
                <li>✅ Mock data fácil de reemplazar</li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Casos de uso */}
      <Card className="elevation-1">
        <CardHeader>
          <CardTitle>Casos de Uso</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4 md:grid-cols-2">
            <div className="p-4 rounded-lg border bg-muted/20">
              <h4 className="font-semibold mb-2 text-green-600 dark:text-green-400">
                Operación Nueva (Cliente)
              </h4>
              <p className="text-sm text-muted-foreground">
                Un cliente selecciona sus facturas, el sistema valida el cupo automáticamente, 
                calcula términos y crea la operación. Todo en un flujo guiado sin salir del wizard.
              </p>
            </div>

            <div className="p-4 rounded-lg border bg-muted/20">
              <h4 className="font-semibold mb-2 text-blue-600 dark:text-blue-400">
                Pre-aprobación (Ejecutivo)
              </h4>
              <p className="text-sm text-muted-foreground">
                Un ejecutivo usa el wizard para pre-aprobar operaciones verificando cupos 
                y calculando términos antes de enviar al cliente para firma.
              </p>
            </div>

            <div className="p-4 rounded-lg border bg-muted/20">
              <h4 className="font-semibold mb-2 text-purple-600 dark:text-purple-400">
                Simulación de Escenarios
              </h4>
              <p className="text-sm text-muted-foreground">
                Permite simular diferentes combinaciones de facturas y términos 
                sin crear la operación real. Útil para negociaciones.
              </p>
            </div>

            <div className="p-4 rounded-lg border bg-muted/20">
              <h4 className="font-semibold mb-2 text-orange-600 dark:text-orange-400">
                Onboarding de Usuarios
              </h4>
              <p className="text-sm text-muted-foreground">
                Wizard perfecto para entrenar nuevos usuarios paso a paso. 
                Cada step tiene instrucciones claras y validaciones que guían el proceso.
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Extensiones futuras */}
      <Card className="elevation-1">
        <CardHeader>
          <CardTitle>Extensiones Futuras</CardTitle>
          <CardDescription>Mejoras que se pueden agregar al wizard</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid gap-3 md:grid-cols-2">
            <div className="p-3 rounded-lg border">
              <h4 className="font-semibold text-sm mb-1">Guardar borrador</h4>
              <p className="text-xs text-muted-foreground">
                Permitir guardar el progreso y continuar después
              </p>
            </div>
            <div className="p-3 rounded-lg border">
              <h4 className="font-semibold text-sm mb-1">Validación en tiempo real</h4>
              <p className="text-xs text-muted-foreground">
                Verificar datos con backend mientras el usuario avanza
              </p>
            </div>
            <div className="p-3 rounded-lg border">
              <h4 className="font-semibold text-sm mb-1">Historial de cambios</h4>
              <p className="text-xs text-muted-foreground">
                Registrar cada cambio y permitir undo/redo
              </p>
            </div>
            <div className="p-3 rounded-lg border">
              <h4 className="font-semibold text-sm mb-1">Firmas digitales</h4>
              <p className="text-xs text-muted-foreground">
                Integrar firma electrónica en el step de confirmación
              </p>
            </div>
            <div className="p-3 rounded-lg border">
              <h4 className="font-semibold text-sm mb-1">Adjuntar documentos</h4>
              <p className="text-xs text-muted-foreground">
                Permitir subir PDFs de facturas en Step 1
              </p>
            </div>
            <div className="p-3 rounded-lg border">
              <h4 className="font-semibold text-sm mb-1">Notificaciones email</h4>
              <p className="text-xs text-muted-foreground">
                Enviar confirmación por correo al completar
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
