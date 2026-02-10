import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../ui/card";
import { Button } from "../ui/button";
import { Badge } from "../ui/badge";
import { Separator } from "../ui/separator";
import { Progress } from "../ui/progress";
import { Alert, AlertDescription } from "../ui/alert";
import { 
  CheckCircle, 
  Circle,
  ChevronRight,
  ChevronLeft,
  FileText,
  DollarSign,
  Calculator,
  Eye,
  Send,
  AlertCircle,
  Info
} from "lucide-react";
import { CupoValidator } from "./CupoValidator";
import { FactoringCalculator } from "./FactoringCalculator";

type Step = 1 | 2 | 3 | 4 | 5;

interface FacturaSeleccionada {
  id: string;
  cliente: string;
  monto: number;
  fechaEmision: string;
  fechaVencimiento: string;
}

const steps = [
  { 
    id: 1, 
    title: "Selección de Facturas", 
    description: "Selecciona las facturas a financiar",
    icon: FileText 
  },
  { 
    id: 2, 
    title: "Validación de Cupos", 
    description: "Verifica disponibilidad de límite",
    icon: DollarSign 
  },
  { 
    id: 3, 
    title: "Cálculo y Términos", 
    description: "Calcula comisión y monto a recibir",
    icon: Calculator 
  },
  { 
    id: 4, 
    title: "Revisión", 
    description: "Revisa y confirma la operación",
    icon: Eye 
  },
  { 
    id: 5, 
    title: "Confirmación", 
    description: "Operación creada exitosamente",
    icon: CheckCircle 
  },
];

// Mock facturas disponibles
const facturasDisponibles: FacturaSeleccionada[] = [
  {
    id: "F-2025-001",
    cliente: "Distribuidora XYZ S.A.",
    monto: 25000,
    fechaEmision: "2025-12-01",
    fechaVencimiento: "2025-01-15"
  },
  {
    id: "F-2025-002",
    cliente: "Distribuidora XYZ S.A.",
    monto: 15000,
    fechaEmision: "2025-12-05",
    fechaVencimiento: "2025-01-20"
  },
  {
    id: "F-2025-003",
    cliente: "Distribuidora XYZ S.A.",
    monto: 10000,
    fechaEmision: "2025-12-10",
    fechaVencimiento: "2025-01-25"
  },
];

export function ApprovalFlowWizard() {
  const [currentStep, setCurrentStep] = useState<Step>(1);
  const [facturasSeleccionadas, setFacturasSeleccionadas] = useState<FacturaSeleccionada[]>([]);
  const [cupoValidado, setCupoValidado] = useState<boolean>(false);
  const [calculoCompletado, setCalculoCompletado] = useState<boolean>(false);

  const montoTotal = facturasSeleccionadas.reduce((sum, f) => sum + f.monto, 0);
  const progress = (currentStep / 5) * 100;

  const canProceed = () => {
    switch (currentStep) {
      case 1:
        return facturasSeleccionadas.length > 0;
      case 2:
        return cupoValidado;
      case 3:
        return calculoCompletado;
      case 4:
        return true;
      default:
        return false;
    }
  };

  const handleNext = () => {
    if (canProceed() && currentStep < 5) {
      setCurrentStep((prev) => (prev + 1) as Step);
    }
  };

  const handleBack = () => {
    if (currentStep > 1) {
      setCurrentStep((prev) => (prev - 1) as Step);
    }
  };

  const handleFacturaToggle = (factura: FacturaSeleccionada) => {
    setFacturasSeleccionadas((prev) => {
      const exists = prev.find((f) => f.id === factura.id);
      if (exists) {
        return prev.filter((f) => f.id !== factura.id);
      } else {
        return [...prev, factura];
      }
    });
  };

  const handleConfirm = () => {
    // Aquí iría la lógica de confirmación (API call, etc.)
    setCurrentStep(5);
  };

  return (
    <div className="space-y-6">
      {/* Progress bar */}
      <Card className="elevation-2 border-2 border-primary/20">
        <CardHeader>
          <div className="flex items-center justify-between mb-4">
            <div>
              <CardTitle>Proceso de Aprobación de Factoring</CardTitle>
              <CardDescription>
                Paso {currentStep} de 5 - {steps[currentStep - 1].description}
              </CardDescription>
            </div>
            <Badge variant="default" className="text-sm px-3 py-1">
              {Math.round(progress)}% Completado
            </Badge>
          </div>
          <Progress value={progress} className="h-2" />
        </CardHeader>
      </Card>

      {/* Steps indicator */}
      <div className="flex items-center justify-between gap-2">
        {steps.map((step, index) => {
          const isActive = currentStep === step.id;
          const isCompleted = currentStep > step.id;
          const StepIcon = step.icon;

          return (
            <div key={step.id} className="flex items-center flex-1">
              <div className="flex flex-col items-center flex-1">
                <div
                  className={`
                    h-12 w-12 rounded-full flex items-center justify-center
                    transition-all duration-300
                    ${isCompleted 
                      ? 'bg-green-500 text-white' 
                      : isActive 
                        ? 'bg-primary text-primary-foreground' 
                        : 'bg-muted text-muted-foreground'
                    }
                  `}
                >
                  {isCompleted ? (
                    <CheckCircle className="h-6 w-6" />
                  ) : (
                    <StepIcon className="h-6 w-6" />
                  )}
                </div>
                <p className={`text-xs mt-2 text-center ${isActive ? 'font-semibold' : ''}`}>
                  {step.title}
                </p>
              </div>
              {index < steps.length - 1 && (
                <div className={`h-0.5 flex-1 ${isCompleted ? 'bg-green-500' : 'bg-muted'}`} />
              )}
            </div>
          );
        })}
      </div>

      {/* Step content */}
      <Card className="elevation-2">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            {(() => {
              const StepIcon = steps[currentStep - 1].icon;
              return <StepIcon className="h-5 w-5 text-primary" />;
            })()}
            {steps[currentStep - 1].title}
          </CardTitle>
          <CardDescription>{steps[currentStep - 1].description}</CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          {/* Step 1: Selección de Facturas */}
          {currentStep === 1 && (
            <div className="space-y-4">
              <Alert className="border-primary/50 bg-primary/5">
                <Info className="h-4 w-4 text-primary" />
                <AlertDescription className="text-sm">
                  Selecciona una o más facturas para crear la operación de factoring.
                </AlertDescription>
              </Alert>

              <div className="space-y-3">
                {facturasDisponibles.map((factura) => {
                  const isSelected = facturasSeleccionadas.some((f) => f.id === factura.id);
                  
                  return (
                    <div
                      key={factura.id}
                      onClick={() => handleFacturaToggle(factura)}
                      className={`
                        p-4 rounded-lg border-2 cursor-pointer transition-all
                        ${isSelected 
                          ? 'border-primary bg-primary/5' 
                          : 'border-border hover:border-primary/50 bg-card'
                        }
                      `}
                    >
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-4">
                          <div
                            className={`
                              h-10 w-10 rounded-full flex items-center justify-center
                              ${isSelected ? 'bg-primary text-primary-foreground' : 'bg-muted'}
                            `}
                          >
                            {isSelected ? (
                              <CheckCircle className="h-5 w-5" />
                            ) : (
                              <Circle className="h-5 w-5" />
                            )}
                          </div>
                          <div>
                            <p className="font-semibold">{factura.id}</p>
                            <p className="text-sm text-muted-foreground">{factura.cliente}</p>
                          </div>
                        </div>
                        <div className="text-right">
                          <p className="text-xl font-semibold">${factura.monto.toLocaleString()}</p>
                          <p className="text-xs text-muted-foreground">
                            Vence: {factura.fechaVencimiento}
                          </p>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>

              {facturasSeleccionadas.length > 0 && (
                <Card className="bg-muted/20">
                  <CardContent className="p-4">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-sm text-muted-foreground">Facturas seleccionadas</p>
                        <p className="text-2xl font-semibold">{facturasSeleccionadas.length}</p>
                      </div>
                      <div className="text-right">
                        <p className="text-sm text-muted-foreground">Monto total</p>
                        <p className="text-2xl font-semibold text-primary">
                          ${montoTotal.toLocaleString()}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              )}
            </div>
          )}

          {/* Step 2: Validación de Cupos */}
          {currentStep === 2 && (
            <div className="space-y-4">
              <Alert className="border-primary/50 bg-primary/5">
                <Info className="h-4 w-4 text-primary" />
                <AlertDescription className="text-sm">
                  Verifica que el monto total (${montoTotal.toLocaleString()}) esté dentro del cupo disponible.
                </AlertDescription>
              </Alert>

              <CupoValidator 
                cupoTotal={500000}
                cupoUtilizado={328000}
                onValidate={(monto, isValid) => {
                  setCupoValidado(isValid);
                }}
              />

              {cupoValidado && (
                <Alert className="bg-green-500/10 border-green-500/50">
                  <CheckCircle className="h-4 w-4 text-green-500" />
                  <AlertDescription className="text-sm text-green-700 dark:text-green-400">
                    ✓ Cupo validado correctamente. Puedes continuar al siguiente paso.
                  </AlertDescription>
                </Alert>
              )}
            </div>
          )}

          {/* Step 3: Cálculo y Términos */}
          {currentStep === 3 && (
            <div className="space-y-4">
              <Alert className="border-primary/50 bg-primary/5">
                <Info className="h-4 w-4 text-primary" />
                <AlertDescription className="text-sm">
                  Configura los términos de la operación y calcula la comisión.
                </AlertDescription>
              </Alert>

              <FactoringCalculator />

              <div className="flex items-center justify-center pt-4">
                <Button
                  onClick={() => setCalculoCompletado(true)}
                  disabled={calculoCompletado}
                >
                  {calculoCompletado ? (
                    <>
                      <CheckCircle className="h-4 w-4 mr-2" />
                      Cálculo Confirmado
                    </>
                  ) : (
                    "Confirmar Cálculo"
                  )}
                </Button>
              </div>
            </div>
          )}

          {/* Step 4: Revisión */}
          {currentStep === 4 && (
            <div className="space-y-4">
              <Alert className="border-primary/50 bg-primary/5">
                <Info className="h-4 w-4 text-primary" />
                <AlertDescription className="text-sm">
                  Revisa todos los detalles antes de crear la operación.
                </AlertDescription>
              </Alert>

              <div className="space-y-6">
                {/* Facturas */}
                <Card className="elevation-1">
                  <CardHeader>
                    <CardTitle className="text-lg">Facturas Seleccionadas</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      {facturasSeleccionadas.map((factura) => (
                        <div
                          key={factura.id}
                          className="flex items-center justify-between p-3 rounded-lg border bg-muted/20"
                        >
                          <div>
                            <p className="font-semibold">{factura.id}</p>
                            <p className="text-sm text-muted-foreground">{factura.cliente}</p>
                          </div>
                          <p className="font-semibold">${factura.monto.toLocaleString()}</p>
                        </div>
                      ))}
                      <Separator />
                      <div className="flex items-center justify-between p-3">
                        <p className="font-semibold">Monto Total</p>
                        <p className="text-xl font-bold text-primary">
                          ${montoTotal.toLocaleString()}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Términos */}
                <Card className="elevation-1">
                  <CardHeader>
                    <CardTitle className="text-lg">Términos de la Operación</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      <div className="flex items-center justify-between p-3 rounded-lg border">
                        <span className="text-sm text-muted-foreground">Plazo</span>
                        <span className="font-semibold">30 días</span>
                      </div>
                      <div className="flex items-center justify-between p-3 rounded-lg border">
                        <span className="text-sm text-muted-foreground">Tasa mensual</span>
                        <span className="font-semibold">2.5%</span>
                      </div>
                      <div className="flex items-center justify-between p-3 rounded-lg border">
                        <span className="text-sm text-muted-foreground">Comisión estimada</span>
                        <span className="font-semibold text-destructive">
                          ${(montoTotal * 0.025).toLocaleString()}
                        </span>
                      </div>
                      <div className="flex items-center justify-between p-3 rounded-lg border bg-green-500/10">
                        <span className="font-semibold text-green-700 dark:text-green-400">
                          Monto a recibir
                        </span>
                        <span className="text-xl font-bold text-green-600 dark:text-green-400">
                          ${(montoTotal * 0.975).toLocaleString()}
                        </span>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Botón de confirmación */}
                <Alert variant="default" className="border-yellow-500/50 bg-yellow-500/10">
                  <AlertCircle className="h-4 w-4 text-yellow-600" />
                  <AlertDescription className="text-sm text-yellow-700 dark:text-yellow-400">
                    Al confirmar, se creará la operación y se enviará para aprobación.
                  </AlertDescription>
                </Alert>

                <Button onClick={handleConfirm} className="w-full" size="lg">
                  <Send className="h-4 w-4 mr-2" />
                  Crear Operación
                </Button>
              </div>
            </div>
          )}

          {/* Step 5: Confirmación */}
          {currentStep === 5 && (
            <div className="space-y-6 text-center py-8">
              <div className="flex justify-center">
                <div className="h-20 w-20 rounded-full bg-green-500/10 flex items-center justify-center">
                  <CheckCircle className="h-10 w-10 text-green-500" />
                </div>
              </div>

              <div>
                <h3 className="text-2xl font-semibold mb-2">¡Operación Creada Exitosamente!</h3>
                <p className="text-muted-foreground">
                  La operación ha sido registrada y está pendiente de aprobación.
                </p>
              </div>

              <Card className="elevation-1 text-left">
                <CardHeader>
                  <CardTitle className="text-lg">Detalles de la Operación</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex items-center justify-between p-3 rounded-lg bg-muted/20">
                    <span className="text-sm text-muted-foreground">ID de Operación</span>
                    <Badge variant="default">OP-2025-157</Badge>
                  </div>
                  <div className="flex items-center justify-between p-3 rounded-lg bg-muted/20">
                    <span className="text-sm text-muted-foreground">Facturas incluidas</span>
                    <span className="font-semibold">{facturasSeleccionadas.length}</span>
                  </div>
                  <div className="flex items-center justify-between p-3 rounded-lg bg-muted/20">
                    <span className="text-sm text-muted-foreground">Monto total</span>
                    <span className="font-semibold">${montoTotal.toLocaleString()}</span>
                  </div>
                  <div className="flex items-center justify-between p-3 rounded-lg bg-muted/20">
                    <span className="text-sm text-muted-foreground">Estado</span>
                    <Badge variant="secondary" className="bg-yellow-500/10 text-yellow-600 border-yellow-500/20">
                      En Proceso
                    </Badge>
                  </div>
                  <div className="flex items-center justify-between p-3 rounded-lg bg-muted/20">
                    <span className="text-sm text-muted-foreground">Fecha de creación</span>
                    <span className="font-semibold">{new Date().toLocaleDateString('es-ES')}</span>
                  </div>
                </CardContent>
              </Card>

              <div className="flex gap-3">
                <Button variant="outline" className="flex-1" onClick={() => window.location.reload()}>
                  Crear Nueva Operación
                </Button>
                <Button className="flex-1">
                  Ver Operación
                </Button>
              </div>
            </div>
          )}
        </CardContent>
      </Card>

      {/* Navigation buttons */}
      {currentStep < 5 && (
        <div className="flex items-center justify-between">
          <Button
            variant="outline"
            onClick={handleBack}
            disabled={currentStep === 1}
          >
            <ChevronLeft className="h-4 w-4 mr-2" />
            Anterior
          </Button>

          <div className="text-sm text-muted-foreground">
            Paso {currentStep} de 5
          </div>

          <Button
            onClick={handleNext}
            disabled={!canProceed()}
          >
            {currentStep === 4 ? "Revisar" : "Siguiente"}
            <ChevronRight className="h-4 w-4 ml-2" />
          </Button>
        </div>
      )}
    </div>
  );
}