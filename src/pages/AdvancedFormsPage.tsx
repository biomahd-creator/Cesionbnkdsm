import { useState } from "react";
import { StepIndicator, Step } from "../components/advanced/StepIndicator";
import { FormBuilder } from "../components/advanced/FormBuilder";
import { ConditionalForm } from "../components/advanced/ConditionalForm";
import { MultiColumnForm } from "../components/advanced/MultiColumnForm";
import { Badge } from "../components/ui/badge";
import { Separator } from "../components/ui/separator";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../components/ui/tabs";
import { Button } from "../components/ui/button";
import { User, Building2, CreditCard, CheckCircle } from "lucide-react";

/**
 * AdvancedFormsPage - Showcase de componentes avanzados de formularios
 * 
 * Componentes implementados:
 * 1. Step Indicator - Indicadores de progreso multi-paso
 * 2. Form Builder - Constructor visual con drag & drop
 * 3. Conditional Form - Formularios con lógica condicional
 * 4. Multi-Column Form - Formularios con diseño de columnas responsive
 * 
 * Ubicación: /pages/AdvancedFormsPage.tsx
 * Estado: ✅ Completado - 4/4 componentes de prioridad media
 */

const demoSteps: Step[] = [
  { id: "1", title: "Account", description: "Create your account", icon: <User className="h-5 w-5" /> },
  { id: "2", title: "Company", description: "Company details", icon: <Building2 className="h-5 w-5" /> },
  { id: "3", title: "Payment", description: "Billing information", icon: <CreditCard className="h-5 w-5" /> },
  { id: "4", title: "Confirm", description: "Review and submit", icon: <CheckCircle className="h-5 w-5" /> },
];

const verticalSteps: Step[] = [
  { id: "1", title: "Personal Information", description: "Tell us about yourself" },
  { id: "2", title: "Work Experience", description: "Your professional background" },
  { id: "3", title: "Education", description: "Academic qualifications" },
  { id: "4", title: "Skills", description: "Technical and soft skills" },
  { id: "5", title: "Review", description: "Verify your information" },
];

export function AdvancedFormsPage() {
  const [currentStep, setCurrentStep] = useState(0);
  const [currentVerticalStep, setCurrentVerticalStep] = useState(2);

  const handleNext = () => {
    if (currentStep < demoSteps.length - 1) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handlePrev = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  return (
    <div className="space-y-12">
      {/* Page Header */}
      <div className="space-y-4">
        <div className="flex items-center gap-3">
          <h1 className="font-bold">Advanced Forms</h1>
          <Badge className="bg-blue-500 hover:bg-blue-600 text-white">
            PRIORIDAD MEDIA
          </Badge>
        </div>
        <p className="text-muted-foreground">
          Componentes avanzados para formularios complejos: step indicators, form builders,
          lógica condicional y layouts multi-columna. Construidos con shadcn/ui y react-dnd.
        </p>
      </div>

      <Separator />

      {/* 1. Step Indicator */}
      <section className="space-y-6">
        <div>
          <div className="flex items-center gap-3 mb-2">
            <h2 className="font-bold">Step Indicator</h2>
            <Badge variant="secondary">Progress Tracking</Badge>
          </div>
          <p className="text-muted-foreground">
            Indicadores de progreso reutilizables para wizards y procesos multi-paso.
            Soporta orientación horizontal/vertical y múltiples variantes.
          </p>
        </div>

        <Tabs defaultValue="horizontal" className="w-full">
          <TabsList className="grid w-full grid-cols-4 max-w-lg">
            <TabsTrigger value="horizontal">Horizontal</TabsTrigger>
            <TabsTrigger value="vertical">Vertical</TabsTrigger>
            <TabsTrigger value="compact">Compact</TabsTrigger>
            <TabsTrigger value="minimal">Minimal</TabsTrigger>
          </TabsList>

          <TabsContent value="horizontal" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Horizontal Step Indicator</CardTitle>
                <CardDescription>
                  Default variant with labels and progress bar
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <StepIndicator
                  steps={demoSteps}
                  currentStep={currentStep}
                  orientation="horizontal"
                  showProgress={true}
                  showLabels={true}
                  clickable={true}
                  onStepClick={(step) => setCurrentStep(step)}
                />

                <div className="flex justify-between pt-4">
                  <Button
                    onClick={handlePrev}
                    disabled={currentStep === 0}
                    variant="outline"
                  >
                    Previous
                  </Button>
                  <Button
                    onClick={handleNext}
                    disabled={currentStep === demoSteps.length - 1}
                  >
                    {currentStep === demoSteps.length - 1 ? "Complete" : "Next"}
                  </Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="vertical" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Vertical Step Indicator</CardTitle>
                <CardDescription>
                  Best for sidebars and mobile layouts
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="max-w-md">
                  <StepIndicator
                    steps={verticalSteps}
                    currentStep={currentVerticalStep}
                    orientation="vertical"
                    showLabels={true}
                    clickable={true}
                    onStepClick={(step) => setCurrentVerticalStep(step)}
                  />
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="compact" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Compact Step Indicator</CardTitle>
                <CardDescription>
                  Minimal space with just circles and connectors
                </CardDescription>
              </CardHeader>
              <CardContent>
                <StepIndicator
                  steps={demoSteps}
                  currentStep={currentStep}
                  variant="compact"
                  showProgress={true}
                />
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="minimal" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Minimal Step Indicator</CardTitle>
                <CardDescription>
                  Just a progress bar with step count
                </CardDescription>
              </CardHeader>
              <CardContent>
                <StepIndicator
                  steps={demoSteps}
                  currentStep={currentStep}
                  variant="minimal"
                />
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>

        <div className="space-y-3">
          <h3 className="font-semibold">Características principales:</h3>
          <ul className="list-disc list-inside space-y-2 text-sm text-muted-foreground">
            <li>Orientación horizontal y vertical</li>
            <li>3 variantes: default, compact, minimal</li>
            <li>Estados: pending, active, completed</li>
            <li>Clickable steps para navegación</li>
            <li>Progress bar integrado</li>
            <li>Iconos personalizables por paso</li>
            <li>Totalmente responsive</li>
          </ul>
        </div>
      </section>

      <Separator />

      {/* 2. Form Builder */}
      <section className="space-y-6">
        <div>
          <div className="flex items-center gap-3 mb-2">
            <h2 className="font-bold">Form Builder</h2>
            <Badge variant="secondary">Drag & Drop</Badge>
          </div>
          <p className="text-muted-foreground">
            Constructor visual de formularios con drag & drop. Arrastra campos desde la paleta,
            reordena en el canvas, y genera código React automáticamente.
          </p>
        </div>

        <FormBuilder />

        <div className="space-y-3">
          <h3 className="font-semibold">Características principales:</h3>
          <ul className="list-disc list-inside space-y-2 text-sm text-muted-foreground">
            <li>Drag & drop de campos desde paleta</li>
            <li>7 tipos de campos: text, email, phone, date, textarea, checkbox, select</li>
            <li>Reordenamiento de campos con drag & drop</li>
            <li>Live preview del formulario</li>
            <li>Generación de código React</li>
            <li>Eliminación de campos individual</li>
            <li>Clear all para resetear</li>
            <li>Construido con react-dnd</li>
          </ul>
        </div>
      </section>

      <Separator />

      {/* 3. Conditional Form */}
      <section className="space-y-6">
        <div>
          <div className="flex items-center gap-3 mb-2">
            <h2 className="font-bold">Conditional Logic Form</h2>
            <Badge variant="secondary">Smart Forms</Badge>
          </div>
          <p className="text-muted-foreground">
            Formulario inteligente con lógica condicional. Los campos aparecen o desaparecen
            dinámicamente basándose en las respuestas del usuario en tiempo real.
          </p>
        </div>

        <ConditionalForm />

        <div className="space-y-3">
          <h3 className="font-semibold">Características principales:</h3>
          <ul className="list-disc list-inside space-y-2 text-sm text-muted-foreground">
            <li>Campos que aparecen/desaparecen dinámicamente</li>
            <li>Lógica basada en selección de usuario (Individual vs Business)</li>
            <li>Sub-condiciones anidadas (Startup vs Enterprise)</li>
            <li>Validaciones condicionales</li>
            <li>Sections visuales diferenciadas con colores</li>
            <li>Estado de envío con animación</li>
            <li>Reset automático después de submit</li>
          </ul>
        </div>
      </section>

      <Separator />

      {/* 4. Multi-Column Form */}
      <section className="space-y-6">
        <div>
          <div className="flex items-center gap-3 mb-2">
            <h2 className="font-bold">Multi-Column Form</h2>
            <Badge variant="secondary">Responsive Layout</Badge>
          </div>
          <p className="text-muted-foreground">
            Formulario con diseño de múltiples columnas que se adapta al tamaño de pantalla.
            Optimiza el espacio y mejora la UX para formularios extensos.
          </p>
        </div>

        <MultiColumnForm />

        <div className="space-y-3">
          <h3 className="font-semibold">Características principales:</h3>
          <ul className="list-disc list-inside space-y-2 text-sm text-muted-foreground">
            <li>Grid responsive: 1 columna (mobile) → 2-3 columnas (desktop)</li>
            <li>4 secciones organizadas: Personal, Address, Company, Additional</li>
            <li>Separadores visuales entre secciones</li>
            <li>Mezcla de 2-col y 3-col grids según contexto</li>
            <li>Campos full-width estratégicos (street, textarea)</li>
            <li>Form state management completo</li>
            <li>Clear form functionality</li>
            <li>Success state con animación</li>
          </ul>
        </div>
      </section>

      <Separator />

      {/* Implementation Notes */}
      <section className="bg-primary/5 rounded-lg p-6 space-y-4">
        <h3 className="font-semibold">📋 Notas de Implementación</h3>
        <div className="space-y-3 text-sm">
          <p>
            <strong>Ubicación:</strong> Todos los componentes están en{" "}
            <code className="bg-muted px-2 py-1 rounded">/components/advanced/</code>
          </p>
          <p>
            <strong>Dependencias:</strong>
          </p>
          <ul className="list-disc list-inside space-y-1 text-muted-foreground ml-4">
            <li>
              <code className="bg-muted px-2 py-1 rounded">react-dnd</code> y{" "}
              <code className="bg-muted px-2 py-1 rounded">react-dnd-html5-backend</code> para Form Builder
            </li>
            <li>shadcn/ui components (Input, Select, Button, Card, etc.)</li>
            <li>lucide-react para iconos</li>
          </ul>
          <p>
            <strong>Imports necesarios:</strong>
          </p>
          <ul className="list-disc list-inside space-y-1 text-muted-foreground ml-4">
            <li>
              <code className="bg-muted px-2 py-1 rounded">
                import {"{ StepIndicator }"} from "./components/advanced/StepIndicator"
              </code>
            </li>
            <li>
              <code className="bg-muted px-2 py-1 rounded">
                import {"{ FormBuilder }"} from "./components/advanced/FormBuilder"
              </code>
            </li>
            <li>
              <code className="bg-muted px-2 py-1 rounded">
                import {"{ ConditionalForm }"} from "./components/advanced/ConditionalForm"
              </code>
            </li>
            <li>
              <code className="bg-muted px-2 py-1 rounded">
                import {"{ MultiColumnForm }"} from "./components/advanced/MultiColumnForm"
              </code>
            </li>
          </ul>
          <p>
            <strong>Uso recomendado:</strong>
          </p>
          <ul className="list-disc list-inside space-y-1 text-muted-foreground ml-4">
            <li><strong>Step Indicator:</strong> Onboarding, checkout flows, multi-step wizards</li>
            <li><strong>Form Builder:</strong> Admin panels, survey creators, form management tools</li>
            <li><strong>Conditional Form:</strong> Applications, surveys, smart questionnaires</li>
            <li><strong>Multi-Column Form:</strong> Registration, profiles, long forms</li>
          </ul>
          <p>
            <strong>Compatibilidad:</strong> Todos los componentes son compatibles con el
            Theme Customizer y adaptan colores automáticamente en modo claro/oscuro.
          </p>
          <p>
            <strong>Estado:</strong> ✅ Fase 3 completada - 4 componentes de formularios avanzados
            de PRIORIDAD MEDIA implementados y documentados.
          </p>
        </div>
      </section>
    </div>
  );
}