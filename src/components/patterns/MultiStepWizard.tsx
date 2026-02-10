import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../ui/tabs";
import { Button } from "../ui/button";
import { Progress } from "../ui/progress";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import { Badge } from "../ui/badge";
import { Separator } from "../ui/separator";
import { CheckCircle, Circle } from "lucide-react";

const steps = [
  { id: "info", label: "Información Básica", icon: "1" },
  { id: "details", label: "Detalles Financieros", icon: "2" },
  { id: "documents", label: "Documentación", icon: "3" },
  { id: "review", label: "Revisión", icon: "4" },
];

export function MultiStepWizard() {
  const [currentStep, setCurrentStep] = useState(0);

  const progress = ((currentStep + 1) / steps.length) * 100;

  const handleNext = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handlePrevious = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  return (
    <Card>
      <CardHeader>
        <div className="space-y-4">
          <CardTitle>Solicitud de Factoring</CardTitle>

          {/* Progress Bar */}
          <div className="space-y-2">
            <div className="flex items-center justify-between text-sm">
              <span className="text-muted-foreground">
                Paso {currentStep + 1} de {steps.length}
              </span>
              <span className="font-medium">{Math.round(progress)}%</span>
            </div>
            <Progress value={progress} className="h-2" />
          </div>

          {/* Steps Indicator */}
          <div className="flex items-center justify-between">
            {steps.map((step, index) => {
              const isActive = index === currentStep;
              const isCompleted = index < currentStep;

              return (
                <div key={step.id} className="flex items-center flex-1">
                  <div className="flex flex-col items-center gap-2 flex-1">
                    <div
                      className={`flex h-10 w-10 items-center justify-center rounded-full border-2 transition-colors ${
                        isCompleted
                          ? "border-primary bg-primary text-primary-foreground"
                          : isActive
                          ? "border-primary bg-background text-primary"
                          : "border-muted bg-background text-muted-foreground"
                      }`}
                    >
                      {isCompleted ? (
                        <CheckCircle className="h-5 w-5" />
                      ) : (
                        <span className="font-medium">{step.icon}</span>
                      )}
                    </div>
                    <div className="text-center">
                      <p
                        className={`text-xs font-medium ${
                          isActive || isCompleted
                            ? "text-foreground"
                            : "text-muted-foreground"
                        }`}
                      >
                        {step.label}
                      </p>
                    </div>
                  </div>
                  {index < steps.length - 1 && (
                    <Separator
                      className={`flex-1 ${
                        isCompleted ? "bg-primary" : "bg-muted"
                      }`}
                    />
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </CardHeader>

      <CardContent className="space-y-6">
        <Tabs value={steps[currentStep].id} className="w-full">
          {/* Step 1: Basic Information */}
          <TabsContent value="info" className="space-y-4 mt-0">
            <div className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="company">Nombre de la Empresa</Label>
                <Input id="company" placeholder="Ej: Empresa ABC S.A." />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="rut">RUT</Label>
                  <Input id="rut" placeholder="12.345.678-9" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="phone">Teléfono</Label>
                  <Input id="phone" placeholder="+56 9 1234 5678" />
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">Email de Contacto</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="contacto@empresa.cl"
                />
              </div>
            </div>
          </TabsContent>

          {/* Step 2: Financial Details */}
          <TabsContent value="details" className="space-y-4 mt-0">
            <div className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="amount">Monto Solicitado</Label>
                <Input id="amount" placeholder="$5.000.000" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="term">Plazo</Label>
                <Select>
                  <SelectTrigger id="term">
                    <SelectValue placeholder="Seleccionar plazo" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="30">30 días</SelectItem>
                    <SelectItem value="60">60 días</SelectItem>
                    <SelectItem value="90">90 días</SelectItem>
                    <SelectItem value="120">120 días</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label htmlFor="purpose">Propósito del Financiamiento</Label>
                <Textarea
                  id="purpose"
                  placeholder="Describe brevemente el uso de los fondos..."
                  rows={4}
                />
              </div>
            </div>
          </TabsContent>

          {/* Step 3: Documents */}
          <TabsContent value="documents" className="space-y-4 mt-0">
            <div className="space-y-4">
              <p className="text-sm text-muted-foreground">
                Por favor, adjunta los siguientes documentos:
              </p>
              <div className="space-y-3">
                <div className="flex items-center justify-between p-3 border rounded-lg">
                  <div className="flex items-center gap-3">
                    <Circle className="h-4 w-4 text-muted-foreground" />
                    <div>
                      <p className="font-medium text-sm">Factura Original</p>
                      <p className="text-xs text-muted-foreground">
                        Formato PDF
                      </p>
                    </div>
                  </div>
                  <Button variant="outline" size="sm">
                    Subir
                  </Button>
                </div>
                <div className="flex items-center justify-between p-3 border rounded-lg">
                  <div className="flex items-center gap-3">
                    <Circle className="h-4 w-4 text-muted-foreground" />
                    <div>
                      <p className="font-medium text-sm">
                        Certificado de Deuda
                      </p>
                      <p className="text-xs text-muted-foreground">
                        Formato PDF
                      </p>
                    </div>
                  </div>
                  <Button variant="outline" size="sm">
                    Subir
                  </Button>
                </div>
                <div className="flex items-center justify-between p-3 border rounded-lg">
                  <div className="flex items-center gap-3">
                    <Circle className="h-4 w-4 text-muted-foreground" />
                    <div>
                      <p className="font-medium text-sm">RUT de la Empresa</p>
                      <p className="text-xs text-muted-foreground">
                        Formato PDF
                      </p>
                    </div>
                  </div>
                  <Button variant="outline" size="sm">
                    Subir
                  </Button>
                </div>
              </div>
            </div>
          </TabsContent>

          {/* Step 4: Review */}
          <TabsContent value="review" className="space-y-4 mt-0">
            <div className="space-y-4">
              <div className="rounded-lg border p-4 space-y-4">
                <div>
                  <h4 className="font-medium mb-3">Resumen de Solicitud</h4>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Empresa:</span>
                      <span className="font-medium">Empresa ABC S.A.</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">RUT:</span>
                      <span className="font-medium">12.345.678-9</span>
                    </div>
                    <Separator />
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Monto:</span>
                      <span className="font-medium">$5.000.000</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Plazo:</span>
                      <span className="font-medium">90 días</span>
                    </div>
                    <Separator />
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">
                        Documentos:
                      </span>
                      <Badge variant="secondary">3 archivos</Badge>
                    </div>
                  </div>
                </div>
              </div>

              <div className="rounded-lg bg-muted/50 p-4">
                <p className="text-sm text-muted-foreground">
                  Al enviar esta solicitud, confirmo que toda la información
                  proporcionada es verídica y autorizo a realizar las
                  verificaciones necesarias.
                </p>
              </div>
            </div>
          </TabsContent>
        </Tabs>

        <Separator />

        {/* Navigation Buttons */}
        <div className="flex justify-between">
          <Button
            variant="outline"
            onClick={handlePrevious}
            disabled={currentStep === 0}
          >
            Anterior
          </Button>
          {currentStep === steps.length - 1 ? (
            <Button>Enviar Solicitud</Button>
          ) : (
            <Button onClick={handleNext}>Siguiente</Button>
          )}
        </div>
      </CardContent>
    </Card>
  );
}
