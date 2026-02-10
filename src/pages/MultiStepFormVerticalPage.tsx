import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../components/ui/card";
import { Button } from "../components/ui/button";
import { Progress } from "../components/ui/progress";
import { Badge } from "../components/ui/badge";
import { Check, ChevronRight, User, Briefcase, FileText, Mail } from "lucide-react";
import { cn } from "../lib/utils";
import { Separator } from "../components/ui/separator";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../components/ui/tabs";
import { Label } from "../components/ui/label";
import { Input } from "../components/ui/input";
import { Checkbox } from "../components/ui/checkbox";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../components/ui/select";
import { motion, AnimatePresence } from "motion/react";
import { fadeVariants, getTransition } from "../lib/animation-config";
import { CodeBlock } from "../components/ui/code-block";

export function MultiStepForm() {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    nombres: "",
    apellidos: "",
    email: "",
    telefono: "",
    empresa: "",
    cargo: "",
    antiguedad: "",
    salario: "",
    documentos: {
      cedula: false,
      certificadoLaboral: false,
      extractoBancario: false,
    },
    aceptaTerminos: false,
  });
  
  const updateFormData = (field: string, value: any) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const updateDocumento = (doc: string, checked: boolean) => {
    setFormData((prev) => ({
      ...prev,
      documentos: { ...prev.documentos, [doc]: checked },
    }));
  };

  const handlePrevious = () => {
    if (currentStep > 1) setCurrentStep((prev) => prev - 1);
  };

  const handleNext = () => {
    if (currentStep < 4) setCurrentStep((prev) => prev + 1);
  };

  const handleSubmit = () => {
    alert("Solicitud enviada exitosamente");
  };

  const steps = [
    { id: 1, title: "Información Personal", icon: <User className="h-5 w-5" />, description: "Datos básicos" },
    { id: 2, title: "Información Laboral", icon: <Briefcase className="h-5 w-5" />, description: "Datos profesionales" },
    { id: 3, title: "Documentos", icon: <FileText className="h-5 w-5" />, description: "Carga de archivos" },
    { id: 4, title: "Confirmación", icon: <Mail className="h-5 w-5" />, description: "Revisión final" },
  ];

  const isStepCompleted = (stepId: number) => stepId < currentStep;
  const progress = (currentStep / steps.length) * 100;

  return (
    <div className="w-full">
      <div className="max-w-[1400px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_4fr] gap-6">
          {/* Stepper Vertical - Izquierda (20%) */}
          <div className="lg:sticky lg:top-6 h-fit w-full">
            <Card className="w-full">
              <CardHeader className="pb-3">
                <div className="flex items-center justify-between">
                  <CardTitle className="text-lg">Progreso</CardTitle>
                  <Badge variant="outline" className="text-xs">
                    {currentStep}/{steps.length}
                  </Badge>
                </div>
                <CardDescription className="mt-1">
                  {Math.round(progress)}% completado
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-1 pb-4">
                <Progress value={progress} className="h-2 mb-4" />
                
                {steps.map((step, index) => {
                  const isActive = step.id === currentStep;
                  const isCompleted = isStepCompleted(step.id);
                  const isLast = index === steps.length - 1;

                  return (
                    <div key={step.id} className="relative">
                      {/* Connecting Line */}
                      {!isLast && (
                        <div 
                          className={cn(
                            "absolute left-5 top-12 w-0.5 h-10 -z-10 transition-colors duration-300",
                            isCompleted ? "bg-primary" : "bg-border"
                          )} 
                        />
                      )}

                      {/* Step Item */}
                      <button
                        onClick={() => setCurrentStep(step.id)}
                        className={cn(
                          "w-full text-left p-3 rounded-lg transition-all duration-300",
                          "flex items-start gap-3 group",
                          isActive && "bg-primary/10 border-2 border-primary shadow-sm",
                          !isActive && "hover:bg-muted/50 border-2 border-transparent"
                        )}
                      >
                        {/* Icon/Number Circle */}
                        <div
                          className={cn(
                            "flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300",
                            isCompleted && "bg-primary text-primary-foreground shadow-md",
                            isActive && !isCompleted && "bg-primary/20 text-primary ring-2 ring-primary/30",
                            !isActive && !isCompleted && "bg-muted text-muted-foreground group-hover:bg-muted/70"
                          )}
                        >
                          {isCompleted ? (
                            <Check className="h-5 w-5" />
                          ) : (
                            step.icon
                          )}
                        </div>

                        {/* Text */}
                        <div className="flex-1 min-w-0 pt-1">
                          <div className="flex items-center gap-2">
                            <p
                              className={cn(
                                "text-sm font-medium truncate transition-colors duration-300",
                                isActive && "text-primary",
                                !isActive && isCompleted && "text-foreground",
                                !isActive && !isCompleted && "text-muted-foreground"
                              )}
                            >
                              {step.title}
                            </p>
                            {isActive && (
                              <ChevronRight className="h-4 w-4 text-primary flex-shrink-0" />
                            )}
                          </div>
                          <p className="text-xs text-muted-foreground mt-0.5">
                            {step.description}
                          </p>
                        </div>
                      </button>
                    </div>
                  );
                })}
              </CardContent>
            </Card>
          </div>

          {/* Contenido del Formulario - Derecha (80%) */}
          <div className="min-w-0 w-full">
            <Card className="w-full">
              <CardHeader>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                    {steps[currentStep - 1].icon}
                  </div>
                  <div>
                    <CardTitle>{steps[currentStep - 1].title}</CardTitle>
                    <CardDescription>{steps[currentStep - 1].description}</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={currentStep}
                      variants={fadeVariants}
                      initial="initial"
                      animate="animate"
                      exit="exit"
                      transition={getTransition('normal')}
                    >
                      {/* Step 1: Información Personal */}
                      {currentStep === 1 && (
                        <div className="space-y-4">
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div className="space-y-2">
                              <Label htmlFor="nombres">Nombres *</Label>
                              <Input
                                id="nombres"
                                placeholder="Juan Carlos"
                                value={formData.nombres}
                                onChange={(e) => updateFormData("nombres", e.target.value)}
                              />
                            </div>
                            <div className="space-y-2">
                              <Label htmlFor="apellidos">Apellidos *</Label>
                              <Input
                                id="apellidos"
                                placeholder="Pérez González"
                                value={formData.apellidos}
                                onChange={(e) => updateFormData("apellidos", e.target.value)}
                              />
                            </div>
                          </div>

                          <div className="space-y-2">
                            <Label htmlFor="email">Email *</Label>
                            <Input
                              id="email"
                              type="email"
                              placeholder="ejemplo@correo.com"
                              value={formData.email}
                              onChange={(e) => updateFormData("email", e.target.value)}
                            />
                          </div>

                          <div className="space-y-2">
                            <Label htmlFor="telefono">Teléfono *</Label>
                            <Input
                              id="telefono"
                              type="tel"
                              placeholder="+57 300 123 4567"
                              value={formData.telefono}
                              onChange={(e) => updateFormData("telefono", e.target.value)}
                            />
                          </div>
                        </div>
                      )}

                      {/* Step 2: Información Laboral */}
                      {currentStep === 2 && (
                        <div className="space-y-4">
                          <div className="space-y-2">
                            <Label htmlFor="empresa">Empresa *</Label>
                            <Input
                              id="empresa"
                              placeholder="Nombre de la empresa"
                              value={formData.empresa}
                              onChange={(e) => updateFormData("empresa", e.target.value)}
                            />
                          </div>

                          <div className="space-y-2">
                            <Label htmlFor="cargo">Cargo Actual *</Label>
                            <Input
                              id="cargo"
                              placeholder="Ej: Gerente de Ventas"
                              value={formData.cargo}
                              onChange={(e) => updateFormData("cargo", e.target.value)}
                            />
                          </div>

                          <div className="space-y-2">
                            <Label htmlFor="antiguedad">Antigüedad (años) *</Label>
                            <Select value={formData.antiguedad} onValueChange={(value) => updateFormData("antiguedad", value)}>
                              <SelectTrigger id="antiguedad">
                                <SelectValue placeholder="Selecciona" />
                              </SelectTrigger>
                              <SelectContent>
                                <SelectItem value="menos-1">Menos de 1 año</SelectItem>
                                <SelectItem value="1-3">1 a 3 años</SelectItem>
                                <SelectItem value="3-5">3 a 5 años</SelectItem>
                                <SelectItem value="5+">Más de 5 años</SelectItem>
                              </SelectContent>
                            </Select>
                          </div>

                          <div className="space-y-2">
                            <Label htmlFor="salario">Salario Mensual *</Label>
                            <Input
                              id="salario"
                              type="number"
                              placeholder="5000000"
                              value={formData.salario}
                              onChange={(e) => updateFormData("salario", e.target.value)}
                            />
                          </div>
                        </div>
                      )}

                      {/* Step 3: Documentos */}
                      {currentStep === 3 && (
                        <div className="space-y-4">
                          <p className="text-sm text-muted-foreground">
                            Selecciona los documentos que has cargado o tienes disponibles
                          </p>

                          <div className="space-y-3">
                            <div className="flex items-start space-x-3 p-4 border rounded-lg transition-colors hover:bg-muted/30">
                              <Checkbox
                                id="cedula"
                                checked={formData.documentos.cedula}
                                onCheckedChange={(checked) => updateDocumento("cedula", checked as boolean)}
                              />
                              <div className="flex-1">
                                <Label htmlFor="cedula" className="cursor-pointer">
                                  Cédula de Ciudadanía *
                                </Label>
                                <p className="text-xs text-muted-foreground mt-1">
                                  Copia de ambos lados (PDF o imagen)
                                </p>
                              </div>
                            </div>

                            <div className="flex items-start space-x-3 p-4 border rounded-lg transition-colors hover:bg-muted/30">
                              <Checkbox
                                id="certificado"
                                checked={formData.documentos.certificadoLaboral}
                                onCheckedChange={(checked) => updateDocumento("certificadoLaboral", checked as boolean)}
                              />
                              <div className="flex-1">
                                <Label htmlFor="certificado" className="cursor-pointer">
                                  Certificado Laboral *
                                </Label>
                                <p className="text-xs text-muted-foreground mt-1">
                                  Vigencia menor a 30 días
                                </p>
                              </div>
                            </div>

                            <div className="flex items-start space-x-3 p-4 border rounded-lg transition-colors hover:bg-muted/30">
                              <Checkbox
                                id="extracto"
                                checked={formData.documentos.extractoBancario}
                                onCheckedChange={(checked) => updateDocumento("extractoBancario", checked as boolean)}
                              />
                              <div className="flex-1">
                                <Label htmlFor="extracto" className="cursor-pointer">
                                  Extracto Bancario
                                </Label>
                                <p className="text-xs text-muted-foreground mt-1">
                                  Últimos 3 meses (Opcional)
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      )}

                      {/* Step 4: Confirmación */}
                      {currentStep === 4 && (
                        <div className="space-y-6">
                          <div className="rounded-lg border p-4 space-y-4 bg-muted/30">
                            <h4 className="font-medium">Resumen de la Información</h4>

                            <div className="space-y-3 text-sm">
                              <div>
                                <p className="text-muted-foreground">Nombre Completo</p>
                                <p className="font-medium">{formData.nombres} {formData.apellidos}</p>
                              </div>

                              <div>
                                <p className="text-muted-foreground">Email</p>
                                <p className="font-medium">{formData.email}</p>
                              </div>

                              <div>
                                <p className="text-muted-foreground">Teléfono</p>
                                <p className="font-medium">{formData.telefono}</p>
                              </div>

                              <div className="pt-3 border-t">
                                <p className="text-muted-foreground">Empresa</p>
                                <p className="font-medium">{formData.empresa}</p>
                              </div>

                              <div>
                                <p className="text-muted-foreground">Cargo</p>
                                <p className="font-medium">{formData.cargo}</p>
                              </div>

                              <div className="pt-3 border-t">
                                <p className="text-muted-foreground">Documentos Cargados</p>
                                <div className="flex gap-2 mt-2 flex-wrap">
                                  {formData.documentos.cedula && (
                                    <Badge variant="outline">
                                      <Check className="h-3 w-3 mr-1" />
                                      Cédula
                                    </Badge>
                                  )}
                                  {formData.documentos.certificadoLaboral && (
                                    <Badge variant="outline">
                                      <Check className="h-3 w-3 mr-1" />
                                      Certificado
                                    </Badge>
                                  )}
                                  {formData.documentos.extractoBancario && (
                                    <Badge variant="outline">
                                      <Check className="h-3 w-3 mr-1" />
                                      Extracto
                                    </Badge>
                                  )}
                                </div>
                              </div>
                            </div>
                          </div>

                          <div className="flex items-start space-x-3 p-4 border rounded-lg bg-primary/5 border-primary/20">
                            <Checkbox
                              id="terminos"
                              checked={formData.aceptaTerminos}
                              onCheckedChange={(checked) => updateFormData("aceptaTerminos", checked)}
                            />
                            <div className="flex-1">
                              <Label htmlFor="terminos" className="cursor-pointer">
                                Acepto los términos y condiciones *
                              </Label>
                              <p className="text-xs text-muted-foreground mt-1">
                                He leído y acepto la política de privacidad y el tratamiento de datos personales
                              </p>
                            </div>
                          </div>
                        </div>
                      )}
                    </motion.div>
                  </AnimatePresence>
                </div>

                {/* Navigation Buttons - Footer */}
                <div className="flex justify-between items-center pt-6 mt-6 border-t">
                  <Button
                    variant="outline"
                    onClick={handlePrevious}
                    disabled={currentStep === 1}
                    size="lg"
                  >
                    Anterior
                  </Button>

                  {currentStep < steps.length ? (
                    <Button onClick={handleNext} size="lg" className="bg-primary hover:bg-primary/90">
                      Siguiente
                      <ChevronRight className="h-4 w-4 ml-1" />
                    </Button>
                  ) : (
                    <Button
                      onClick={handleSubmit}
                      disabled={!formData.aceptaTerminos}
                      size="lg"
                      className="bg-primary text-primary-foreground hover:bg-primary/90"
                    >
                      <Check className="h-4 w-4 mr-2" />
                      Enviar Solicitud
                    </Button>
                  )}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}

// Main Page Component con layout de documentación
export function MultiStepFormVerticalPage() {
  const componentCode = `import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../components/ui/card";
import { Button } from "../components/ui/button";
import { Progress } from "../components/ui/progress";
import { Badge } from "../components/ui/badge";
import { Check, ChevronRight, User, Briefcase, FileText, Mail } from "lucide-react";
import { cn } from "../lib/utils";
import { Separator } from "../components/ui/separator";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../components/ui/tabs";
import { Label } from "../components/ui/label";
import { Input } from "../components/ui/input";
import { Checkbox } from "../components/ui/checkbox";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../components/ui/select";
import { motion, AnimatePresence } from "motion/react";
import { fadeVariants, getTransition } from "../lib/animation-config";
import { CodeBlock } from "../components/ui/code-block";

export function MultiStepForm() {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    nombres: "",
    apellidos: "",
    email: "",
    telefono: "",
    empresa: "",
    cargo: "",
    antiguedad: "",
    salario: "",
    documentos: {
      cedula: false,
      certificadoLaboral: false,
      extractoBancario: false,
    },
    aceptaTerminos: false,
  });
  
  const updateFormData = (field: string, value: any) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const updateDocumento = (doc: string, checked: boolean) => {
    setFormData((prev) => ({
      ...prev,
      documentos: { ...prev.documentos, [doc]: checked },
    }));
  };

  const handlePrevious = () => {
    if (currentStep > 1) setCurrentStep((prev) => prev - 1);
  };

  const handleNext = () => {
    if (currentStep < 4) setCurrentStep((prev) => prev + 1);
  };

  const handleSubmit = () => {
    alert("Solicitud enviada exitosamente");
  };

  const steps = [
    { id: 1, title: "Información Personal", icon: <User className="h-5 w-5" />, description: "Datos básicos" },
    { id: 2, title: "Información Laboral", icon: <Briefcase className="h-5 w-5" />, description: "Datos profesionales" },
    { id: 3, title: "Documentos", icon: <FileText className="h-5 w-5" />, description: "Carga de archivos" },
    { id: 4, title: "Confirmación", icon: <Mail className="h-5 w-5" />, description: "Revisión final" },
  ];

  const isStepCompleted = (stepId: number) => stepId < currentStep;
  const progress = (currentStep / steps.length) * 100;

  return (
    <div className="w-full">
      <div className="max-w-[1400px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_4fr] gap-6">
          {/* Stepper Vertical - Izquierda (20%) */}
          <div className="lg:sticky lg:top-6 h-fit w-full">
            <Card className="w-full">
              <CardHeader className="pb-3">
                <div className="flex items-center justify-between">
                  <CardTitle className="text-lg">Progreso</CardTitle>
                  <Badge variant="outline" className="text-xs">
                    {currentStep}/{steps.length}
                  </Badge>
                </div>
                <CardDescription className="mt-1">
                  {Math.round(progress)}% completado
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-1 pb-4">
                <Progress value={progress} className="h-2 mb-4" />
                
                {steps.map((step, index) => {
                  const isActive = step.id === currentStep;
                  const isCompleted = isStepCompleted(step.id);
                  const isLast = index === steps.length - 1;

                  return (
                    <div key={step.id} className="relative">
                      {/* Connecting Line */}
                      {!isLast && (
                        <div 
                          className={cn(
                            "absolute left-5 top-12 w-0.5 h-10 -z-10 transition-colors duration-300",
                            isCompleted ? "bg-primary" : "bg-border"
                          )} 
                        />
                      )}

                      {/* Step Item */}
                      <button
                        onClick={() => setCurrentStep(step.id)}
                        className={cn(
                          "w-full text-left p-3 rounded-lg transition-all duration-300",
                          "flex items-start gap-3 group",
                          isActive && "bg-primary/10 border-2 border-primary shadow-sm",
                          !isActive && "hover:bg-muted/50 border-2 border-transparent"
                        )}
                      >
                        {/* Icon/Number Circle */}
                        <div
                          className={cn(
                            "flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300",
                            isCompleted && "bg-primary text-primary-foreground shadow-md",
                            isActive && !isCompleted && "bg-primary/20 text-primary ring-2 ring-primary/30",
                            !isActive && !isCompleted && "bg-muted text-muted-foreground group-hover:bg-muted/70"
                          )}
                        >
                          {isCompleted ? (
                            <Check className="h-5 w-5" />
                          ) : (
                            step.icon
                          )}
                        </div>

                        {/* Text */}
                        <div className="flex-1 min-w-0 pt-1">
                          <div className="flex items-center gap-2">
                            <p
                              className={cn(
                                "text-sm font-medium truncate transition-colors duration-300",
                                isActive && "text-primary",
                                !isActive && isCompleted && "text-foreground",
                                !isActive && !isCompleted && "text-muted-foreground"
                              )}
                            >
                              {step.title}
                            </p>
                            {isActive && (
                              <ChevronRight className="h-4 w-4 text-primary flex-shrink-0" />
                            )}
                          </div>
                          <p className="text-xs text-muted-foreground mt-0.5">
                            {step.description}
                          </p>
                        </div>
                      </button>
                    </div>
                  );
                })}
              </CardContent>
            </Card>
          </div>

          {/* Contenido del Formulario - Derecha (80%) */}
          <div className="min-w-0 w-full">
            <Card className="w-full">
              <CardHeader>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                    {steps[currentStep - 1].icon}
                  </div>
                  <div>
                    <CardTitle>{steps[currentStep - 1].title}</CardTitle>
                    <CardDescription>{steps[currentStep - 1].description}</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={currentStep}
                      variants={fadeVariants}
                      initial="initial"
                      animate="animate"
                      exit="exit"
                      transition={getTransition('normal')}
                    >
                      {/* Step 1: Información Personal */}
                      {currentStep === 1 && (
                        <div className="space-y-4">
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div className="space-y-2">
                              <Label htmlFor="nombres">Nombres *</Label>
                              <Input
                                id="nombres"
                                placeholder="Juan Carlos"
                                value={formData.nombres}
                                onChange={(e) => updateFormData("nombres", e.target.value)}
                              />
                            </div>
                            <div className="space-y-2">
                              <Label htmlFor="apellidos">Apellidos *</Label>
                              <Input
                                id="apellidos"
                                placeholder="Pérez González"
                                value={formData.apellidos}
                                onChange={(e) => updateFormData("apellidos", e.target.value)}
                              />
                            </div>
                          </div>

                          <div className="space-y-2">
                            <Label htmlFor="email">Email *</Label>
                            <Input
                              id="email"
                              type="email"
                              placeholder="ejemplo@correo.com"
                              value={formData.email}
                              onChange={(e) => updateFormData("email", e.target.value)}
                            />
                          </div>

                          <div className="space-y-2">
                            <Label htmlFor="telefono">Teléfono *</Label>
                            <Input
                              id="telefono"
                              type="tel"
                              placeholder="+57 300 123 4567"
                              value={formData.telefono}
                              onChange={(e) => updateFormData("telefono", e.target.value)}
                            />
                          </div>
                        </div>
                      )}

                      {/* Step 2: Información Laboral */}
                      {currentStep === 2 && (
                        <div className="space-y-4">
                          <div className="space-y-2">
                            <Label htmlFor="empresa">Empresa *</Label>
                            <Input
                              id="empresa"
                              placeholder="Nombre de la empresa"
                              value={formData.empresa}
                              onChange={(e) => updateFormData("empresa", e.target.value)}
                            />
                          </div>

                          <div className="space-y-2">
                            <Label htmlFor="cargo">Cargo Actual *</Label>
                            <Input
                              id="cargo"
                              placeholder="Ej: Gerente de Ventas"
                              value={formData.cargo}
                              onChange={(e) => updateFormData("cargo", e.target.value)}
                            />
                          </div>

                          <div className="space-y-2">
                            <Label htmlFor="antiguedad">Antigüedad (años) *</Label>
                            <Select value={formData.antiguedad} onValueChange={(value) => updateFormData("antiguedad", value)}>
                              <SelectTrigger id="antiguedad">
                                <SelectValue placeholder="Selecciona" />
                              </SelectTrigger>
                              <SelectContent>
                                <SelectItem value="menos-1">Menos de 1 año</SelectItem>
                                <SelectItem value="1-3">1 a 3 años</SelectItem>
                                <SelectItem value="3-5">3 a 5 años</SelectItem>
                                <SelectItem value="5+">Más de 5 años</SelectItem>
                              </SelectContent>
                            </Select>
                          </div>

                          <div className="space-y-2">
                            <Label htmlFor="salario">Salario Mensual *</Label>
                            <Input
                              id="salario"
                              type="number"
                              placeholder="5000000"
                              value={formData.salario}
                              onChange={(e) => updateFormData("salario", e.target.value)}
                            />
                          </div>
                        </div>
                      )}

                      {/* Step 3: Documentos */}
                      {currentStep === 3 && (
                        <div className="space-y-4">
                          <p className="text-sm text-muted-foreground">
                            Selecciona los documentos que has cargado o tienes disponibles
                          </p>

                          <div className="space-y-3">
                            <div className="flex items-start space-x-3 p-4 border rounded-lg transition-colors hover:bg-muted/30">
                              <Checkbox
                                id="cedula"
                                checked={formData.documentos.cedula}
                                onCheckedChange={(checked) => updateDocumento("cedula", checked as boolean)}
                              />
                              <div className="flex-1">
                                <Label htmlFor="cedula" className="cursor-pointer">
                                  Cédula de Ciudadanía *
                                </Label>
                                <p className="text-xs text-muted-foreground mt-1">
                                  Copia de ambos lados (PDF o imagen)
                                </p>
                              </div>
                            </div>

                            <div className="flex items-start space-x-3 p-4 border rounded-lg transition-colors hover:bg-muted/30">
                              <Checkbox
                                id="certificado"
                                checked={formData.documentos.certificadoLaboral}
                                onCheckedChange={(checked) => updateDocumento("certificadoLaboral", checked as boolean)}
                              />
                              <div className="flex-1">
                                <Label htmlFor="certificado" className="cursor-pointer">
                                  Certificado Laboral *
                                </Label>
                                <p className="text-xs text-muted-foreground mt-1">
                                  Vigencia menor a 30 días
                                </p>
                              </div>
                            </div>

                            <div className="flex items-start space-x-3 p-4 border rounded-lg transition-colors hover:bg-muted/30">
                              <Checkbox
                                id="extracto"
                                checked={formData.documentos.extractoBancario}
                                onCheckedChange={(checked) => updateDocumento("extractoBancario", checked as boolean)}
                              />
                              <div className="flex-1">
                                <Label htmlFor="extracto" className="cursor-pointer">
                                  Extracto Bancario
                                </Label>
                                <p className="text-xs text-muted-foreground mt-1">
                                  Últimos 3 meses (Opcional)
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      )}

                      {/* Step 4: Confirmación */}
                      {currentStep === 4 && (
                        <div className="space-y-6">
                          <div className="rounded-lg border p-4 space-y-4 bg-muted/30">
                            <h4 className="font-medium">Resumen de la Información</h4>

                            <div className="space-y-3 text-sm">
                              <div>
                                <p className="text-muted-foreground">Nombre Completo</p>
                                <p className="font-medium">{formData.nombres} {formData.apellidos}</p>
                              </div>

                              <div>
                                <p className="text-muted-foreground">Email</p>
                                <p className="font-medium">{formData.email}</p>
                              </div>

                              <div>
                                <p className="text-muted-foreground">Teléfono</p>
                                <p className="font-medium">{formData.telefono}</p>
                              </div>

                              <div className="pt-3 border-t">
                                <p className="text-muted-foreground">Empresa</p>
                                <p className="font-medium">{formData.empresa}</p>
                              </div>

                              <div>
                                <p className="text-muted-foreground">Cargo</p>
                                <p className="font-medium">{formData.cargo}</p>
                              </div>

                              <div className="pt-3 border-t">
                                <p className="text-muted-foreground">Documentos Cargados</p>
                                <div className="flex gap-2 mt-2 flex-wrap">
                                  {formData.documentos.cedula && (
                                    <Badge variant="outline">
                                      <Check className="h-3 w-3 mr-1" />
                                      Cédula
                                    </Badge>
                                  )}
                                  {formData.documentos.certificadoLaboral && (
                                    <Badge variant="outline">
                                      <Check className="h-3 w-3 mr-1" />
                                      Certificado
                                    </Badge>
                                  )}
                                  {formData.documentos.extractoBancario && (
                                    <Badge variant="outline">
                                      <Check className="h-3 w-3 mr-1" />
                                      Extracto
                                    </Badge>
                                  )}
                                </div>
                              </div>
                            </div>
                          </div>

                          <div className="flex items-start space-x-3 p-4 border rounded-lg bg-primary/5 border-primary/20">
                            <Checkbox
                              id="terminos"
                              checked={formData.aceptaTerminos}
                              onCheckedChange={(checked) => updateFormData("aceptaTerminos", checked)}
                            />
                            <div className="flex-1">
                              <Label htmlFor="terminos" className="cursor-pointer">
                                Acepto los términos y condiciones *
                              </Label>
                              <p className="text-xs text-muted-foreground mt-1">
                                He leído y acepto la política de privacidad y el tratamiento de datos personales
                              </p>
                            </div>
                          </div>
                        </div>
                      )}
                    </motion.div>
                  </AnimatePresence>
                </div>

                {/* Navigation Buttons - Footer */}
                <div className="flex justify-between items-center pt-6 mt-6 border-t">
                  <Button
                    variant="outline"
                    onClick={handlePrevious}
                    disabled={currentStep === 1}
                    size="lg"
                  >
                    Anterior
                  </Button>

                  {currentStep < steps.length ? (
                    <Button onClick={handleNext} size="lg" className="bg-primary hover:bg-primary/90">
                      Siguiente
                      <ChevronRight className="h-4 w-4 ml-1" />
                    </Button>
                  ) : (
                    <Button
                      onClick={handleSubmit}
                      disabled={!formData.aceptaTerminos}
                      size="lg"
                      className="bg-primary text-primary-foreground hover:bg-primary/90"
                    >
                      <Check className="h-4 w-4 mr-2" />
                      Enviar Solicitud
                    </Button>
                  )}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}`;

  return (
    <div className="w-full space-y-6">
      {/* Header */}
      <div>
        <div className="flex items-center gap-3 mb-2">
          <h2 className="text-4xl font-semibold">Multi-Step Form (Vertical)</h2>
          <Badge variant="outline" className="text-xs">Patterns</Badge>
          <Badge className="text-xs bg-primary">NEW</Badge>
        </div>
        <p className="text-muted-foreground">
          Formulario multi-paso con indicador de progreso vertical a la izquierda. Sigue el estándar de UX con 
          progreso visible (20%) a la izquierda, contenido del formulario (80%) a la derecha, y navegación clara 
          entre pasos. Ideal para procesos de registro, configuración o solicitudes complejas.
        </p>
      </div>

      <Separator />

      {/* Main Preview & Code */}
      <Card className="w-full">
        <CardHeader>
          <CardTitle>Preview</CardTitle>
          <CardDescription>Vista previa interactiva del componente</CardDescription>
        </CardHeader>
        <CardContent className="w-full">
          <Tabs defaultValue="preview" className="w-full">
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger value="preview">Preview</TabsTrigger>
              <TabsTrigger value="code">Code</TabsTrigger>
            </TabsList>

            <TabsContent value="preview" className="w-full space-y-4">
              <div className="w-full rounded-lg border bg-card p-6">
                <MultiStepForm />
              </div>
            </TabsContent>

            <TabsContent value="code" className="space-y-4">
              <CodeBlock code={componentCode} filename="multi-step-form.tsx" />
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>

      {/* Features */}
      <Card>
        <CardHeader>
          <CardTitle>Features</CardTitle>
          <CardDescription>Características principales del componente</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-border">
                  <th className="text-left py-3 px-4 font-semibold text-sm text-foreground">Feature</th>
                  <th className="text-left py-3 px-4 font-semibold text-sm text-foreground">Description</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-border">
                  <td className="py-3 px-4">
                    <code className="text-sm font-mono bg-secondary/10 dark:bg-secondary/20 text-foreground px-1.5 py-0.5 rounded border border-border">
                      Layout Proporcional 20/80
                    </code>
                  </td>
                  <td className="py-3 px-4 text-sm text-muted-foreground">
                    Grid CSS con ratio 1fr:4fr - Stepper sticky (20%) izquierda, formulario (80%) derecha. Sistema responsive que colapsa en móviles.
                  </td>
                </tr>
                <tr className="border-b border-border">
                  <td className="py-3 px-4">
                    <code className="text-sm font-mono bg-secondary/10 dark:bg-secondary/20 text-foreground px-1.5 py-0.5 rounded border border-border">
                      Estado Persistente
                    </code>
                  </td>
                  <td className="py-3 px-4 text-sm text-muted-foreground">
                    Gestión centralizada del estado del formulario. Los datos se mantienen al navegar entre pasos anteriores y siguientes.
                  </td>
                </tr>
                <tr className="border-b border-border">
                  <td className="py-3 px-4">
                    <code className="text-sm font-mono bg-secondary/10 dark:bg-secondary/20 text-foreground px-1.5 py-0.5 rounded border border-border">
                      Animaciones
                    </code>
                  </td>
                  <td className="py-3 px-4 text-sm text-muted-foreground">
                    Transiciones suaves (Framer Motion) entre pasos. Indicadores visuales de progreso y completitud.
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}