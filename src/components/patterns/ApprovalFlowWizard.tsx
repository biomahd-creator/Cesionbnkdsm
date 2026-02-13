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
    title: "Invoice Selection", 
    description: "Select the invoices to finance",
    icon: FileText 
  },
  { 
    id: 2, 
    title: "Credit Line Validation", 
    description: "Verify limit availability",
    icon: DollarSign 
  },
  { 
    id: 3, 
    title: "Calculation & Terms", 
    description: "Calculate commission and amount to receive",
    icon: Calculator 
  },
  { 
    id: 4, 
    title: "Review", 
    description: "Review and confirm the operation",
    icon: Eye 
  },
  { 
    id: 5, 
    title: "Confirmation", 
    description: "Operation created successfully",
    icon: CheckCircle 
  },
];

// Mock available invoices
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
    // Confirmation logic would go here (API call, etc.)
    setCurrentStep(5);
  };

  return (
    <div className="space-y-6">
      {/* Progress bar */}
      <Card className="elevation-2 border-2 border-primary/20">
        <CardHeader>
          <div className="flex items-center justify-between mb-4">
            <div>
              <CardTitle>Factoring Approval Process</CardTitle>
              <CardDescription>
                Step {currentStep} of 5 — {steps[currentStep - 1].description}
              </CardDescription>
            </div>
            <Badge variant="default" className="text-sm px-3 py-1">
              {Math.round(progress)}% Complete
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
          {/* Step 1: Invoice Selection */}
          {currentStep === 1 && (
            <div className="space-y-4">
              <Alert className="border-primary/50 bg-primary/5">
                <Info className="h-4 w-4 text-primary" />
                <AlertDescription className="text-sm">
                  Select one or more invoices to create the factoring operation.
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
                            Due: {factura.fechaVencimiento}
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
                        <p className="text-sm text-muted-foreground">Selected invoices</p>
                        <p className="text-2xl font-semibold">{facturasSeleccionadas.length}</p>
                      </div>
                      <div className="text-right">
                        <p className="text-sm text-muted-foreground">Total amount</p>
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

          {/* Step 2: Credit Line Validation */}
          {currentStep === 2 && (
            <div className="space-y-4">
              <Alert className="border-primary/50 bg-primary/5">
                <Info className="h-4 w-4 text-primary" />
                <AlertDescription className="text-sm">
                  Verify that the total amount (${montoTotal.toLocaleString()}) is within the available credit line.
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
                    Credit line validated successfully. You can proceed to the next step.
                  </AlertDescription>
                </Alert>
              )}
            </div>
          )}

          {/* Step 3: Calculation & Terms */}
          {currentStep === 3 && (
            <div className="space-y-4">
              <Alert className="border-primary/50 bg-primary/5">
                <Info className="h-4 w-4 text-primary" />
                <AlertDescription className="text-sm">
                  Configure the operation terms and calculate the commission.
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
                      Calculation Confirmed
                    </>
                  ) : (
                    "Confirm Calculation"
                  )}
                </Button>
              </div>
            </div>
          )}

          {/* Step 4: Review */}
          {currentStep === 4 && (
            <div className="space-y-4">
              <Alert className="border-primary/50 bg-primary/5">
                <Info className="h-4 w-4 text-primary" />
                <AlertDescription className="text-sm">
                  Review all details before creating the operation.
                </AlertDescription>
              </Alert>

              <div className="space-y-6">
                {/* Invoices */}
                <Card className="elevation-1">
                  <CardHeader>
                    <CardTitle className="text-lg">Selected Invoices</CardTitle>
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
                        <p className="font-semibold">Total Amount</p>
                        <p className="text-xl font-bold text-primary">
                          ${montoTotal.toLocaleString()}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Terms */}
                <Card className="elevation-1">
                  <CardHeader>
                    <CardTitle className="text-lg">Operation Terms</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      <div className="flex items-center justify-between p-3 rounded-lg border">
                        <span className="text-sm text-muted-foreground">Term</span>
                        <span className="font-semibold">30 days</span>
                      </div>
                      <div className="flex items-center justify-between p-3 rounded-lg border">
                        <span className="text-sm text-muted-foreground">Monthly rate</span>
                        <span className="font-semibold">2.5%</span>
                      </div>
                      <div className="flex items-center justify-between p-3 rounded-lg border">
                        <span className="text-sm text-muted-foreground">Estimated commission</span>
                        <span className="font-semibold text-destructive">
                          ${(montoTotal * 0.025).toLocaleString()}
                        </span>
                      </div>
                      <div className="flex items-center justify-between p-3 rounded-lg border bg-green-500/10">
                        <span className="font-semibold text-green-700 dark:text-green-400">
                          Amount to receive
                        </span>
                        <span className="text-xl font-bold text-green-600 dark:text-green-400">
                          ${(montoTotal * 0.975).toLocaleString()}
                        </span>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Confirmation warning */}
                <Alert variant="default" className="border-yellow-500/50 bg-yellow-500/10">
                  <AlertCircle className="h-4 w-4 text-yellow-600" />
                  <AlertDescription className="text-sm text-yellow-700 dark:text-yellow-400">
                    By confirming, the operation will be created and sent for approval.
                  </AlertDescription>
                </Alert>

                <Button onClick={handleConfirm} className="w-full" size="lg">
                  <Send className="h-4 w-4 mr-2" />
                  Create Operation
                </Button>
              </div>
            </div>
          )}

          {/* Step 5: Confirmation */}
          {currentStep === 5 && (
            <div className="space-y-6 text-center py-8">
              <div className="flex justify-center">
                <div className="h-20 w-20 rounded-full bg-green-500/10 flex items-center justify-center">
                  <CheckCircle className="h-10 w-10 text-green-500" />
                </div>
              </div>

              <div>
                <h3 className="text-2xl font-semibold mb-2">Operation Created Successfully!</h3>
                <p className="text-muted-foreground">
                  The operation has been registered and is pending approval.
                </p>
              </div>

              <Card className="elevation-1 text-left">
                <CardHeader>
                  <CardTitle className="text-lg">Operation Details</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex items-center justify-between p-3 rounded-lg bg-muted/20">
                    <span className="text-sm text-muted-foreground">Operation ID</span>
                    <Badge variant="default">OP-2025-157</Badge>
                  </div>
                  <div className="flex items-center justify-between p-3 rounded-lg bg-muted/20">
                    <span className="text-sm text-muted-foreground">Included invoices</span>
                    <span className="font-semibold">{facturasSeleccionadas.length}</span>
                  </div>
                  <div className="flex items-center justify-between p-3 rounded-lg bg-muted/20">
                    <span className="text-sm text-muted-foreground">Total amount</span>
                    <span className="font-semibold">${montoTotal.toLocaleString()}</span>
                  </div>
                  <div className="flex items-center justify-between p-3 rounded-lg bg-muted/20">
                    <span className="text-sm text-muted-foreground">Status</span>
                    <Badge variant="secondary" className="bg-yellow-500/10 text-yellow-600 border-yellow-500/20">
                      In Progress
                    </Badge>
                  </div>
                  <div className="flex items-center justify-between p-3 rounded-lg bg-muted/20">
                    <span className="text-sm text-muted-foreground">Created on</span>
                    <span className="font-semibold">{new Date().toLocaleDateString('en-US')}</span>
                  </div>
                </CardContent>
              </Card>

              <div className="flex gap-3">
                <Button variant="outline" className="flex-1" onClick={() => window.location.reload()}>
                  Create New Operation
                </Button>
                <Button className="flex-1">
                  View Operation
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
            Previous
          </Button>

          <div className="text-sm text-muted-foreground">
            Step {currentStep} of 5
          </div>

          <Button
            onClick={handleNext}
            disabled={!canProceed()}
          >
            {currentStep === 4 ? "Review" : "Next"}
            <ChevronRight className="h-4 w-4 ml-2" />
          </Button>
        </div>
      )}
    </div>
  );
}
