import { MultiStepWizard } from "../components/patterns/MultiStepWizard";
import { Badge } from "../components/ui/badge";
import { Separator } from "../components/ui/separator";
import { Alert, AlertDescription } from "../components/ui/alert";
import { AlertCircle, CheckCircle2, ListOrdered, Sparkles } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "../components/ui/card";

export function MultiStepWizardPage() {
  return (
    <div className="space-y-8 pb-8">
      {/* Header */}
      <div>
        <div className="flex items-center gap-3 mb-2">
          <h1 className="text-2xl font-medium">Multi-Step Wizard</h1>
          <Badge variant="default">Patterns</Badge>
        </div>
        <p className="text-muted-foreground text-lg">
          Formulario de múltiples pasos para procesos complejos como solicitudes de factoring.
        </p>
      </div>

      <Separator />

      {/* Description */}
      <Alert>
        <AlertCircle className="h-4 w-4" />
        <AlertDescription>
          El <strong>Wizard Multi-Paso</strong> guía al usuario a través de un proceso largo dividiéndolo
          en etapas manejables. Incluye validación por paso, indicadores de progreso y navegación intuitiva.
        </AlertDescription>
      </Alert>

      {/* Main Component Showcase */}
      <div className="max-w-3xl mx-auto">
        <MultiStepWizard />
      </div>

      <Separator />

      {/* Features */}
      <Card>
        <CardHeader>
          <CardTitle>Características Principales</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="space-y-3">
              <h4 className="font-medium flex items-center gap-2">
                <ListOrdered className="h-4 w-4 text-primary" />
                Navegación Estructurada
              </h4>
              <ul className="space-y-2 text-sm text-muted-foreground ml-6">
                <li>• Indicador de pasos visual con estado (activo, completado)</li>
                <li>• Barra de progreso porcentual</li>
                <li>• Navegación Anterior/Siguiente</li>
                <li>• Validación antes de avanzar (simulada)</li>
              </ul>
            </div>

            <div className="space-y-3">
              <h4 className="font-medium flex items-center gap-2">
                <Sparkles className="h-4 w-4 text-primary" />
                Experiencia de Usuario
              </h4>
              <ul className="space-y-2 text-sm text-muted-foreground ml-6">
                <li>• Transiciones suaves entre pestañas</li>
                <li>• Resumen final antes de enviar</li>
                <li>• Inputs específicos por contexto (Info, Financiero, Docs)</li>
                <li>• Feedback visual claro en cada etapa</li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Code Usage */}
      <Card>
        <CardHeader>
          <CardTitle>Implementación</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="bg-muted p-4 rounded-md overflow-x-auto">
            <pre className="text-sm">
              <code>{`import { MultiStepWizard } from "./components/patterns/MultiStepWizard";

export default function ApplicationPage() {
  return (
    <div className="container mx-auto py-10">
      <MultiStepWizard />
    </div>
  );
}`}</code>
            </pre>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
