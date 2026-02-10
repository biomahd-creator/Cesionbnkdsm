import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../components/ui/card";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { Label } from "../components/ui/label";
import { Textarea } from "../components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../components/ui/select";
import { RadioGroup, RadioGroupItem } from "../components/ui/radio-group";
import { Badge } from "../components/ui/badge";
import { Alert, AlertDescription } from "../components/ui/alert";
import { Progress } from "../components/ui/progress";
import { 
  Check, 
  User, 
  Building2, 
  CreditCard, 
  FileCheck,
  AlertCircle,
  CheckCircle2,
  ChevronRight,
  Lock,
  ArrowLeft
} from "lucide-react";
import { cn } from "../lib/utils";
import { motion, AnimatePresence } from "motion/react";
import { fadeVariants, getTransition } from "../lib/animation-config";

interface WizardStep {
  id: number;
  title: string;
  subtitle: string;
  icon: React.ReactNode;
}

const wizardSteps: WizardStep[] = [
  { 
    id: 1, 
    title: "Cuenta", 
    subtitle: "Información básica",
    icon: <User className="h-4 w-4" /> 
  },
  { 
    id: 2, 
    title: "Empresa", 
    subtitle: "Datos de la empresa",
    icon: <Building2 className="h-4 w-4" /> 
  },
  { 
    id: 3, 
    title: "Facturación", 
    subtitle: "Configuración de factoring",
    icon: <CreditCard className="h-4 w-4" /> 
  },
  { 
    id: 4, 
    title: "Verificación", 
    subtitle: "Revisión y confirmación",
    icon: <FileCheck className="h-4 w-4" /> 
  },
];

export function MultiStepWizardVerticalPage() {
  const [currentStep, setCurrentStep] = useState(1);
  const [validationErrors, setValidationErrors] = useState<string[]>([]);
  const [wizardData, setWizardData] = useState({
    // Step 1 - Cuenta
    nombreUsuario: "",
    emailUsuario: "",
    passwordUsuario: "",
    confirmPassword: "",
    rolUsuario: "",
    
    // Step 2 - Empresa
    nombreEmpresa: "",
    nitEmpresa: "",
    sectorEmpresa: "",
    tamanoEmpresa: "",
    direccionEmpresa: "",
    telefonoEmpresa: "",
    
    // Step 3 - Facturación
    volumenMensual: "",
    plazoPromedio: "",
    tipoFactoring: "",
    metodoPago: "",
    
    // Step 4 - Verificación
    verificacionCompleta: false,
  });

  const updateWizardData = (field: string, value: any) => {
    setWizardData((prev) => ({
      ...prev,
      [field]: value,
    }));
    // Clear validation errors when user types
    setValidationErrors([]);
  };

  const validateStep = (step: number): boolean => {
    const errors: string[] = [];

    if (step === 1) {
      if (!wizardData.nombreUsuario) errors.push("El nombre de usuario es requerido");
      if (!wizardData.emailUsuario) errors.push("El email es requerido");
      if (!wizardData.passwordUsuario) errors.push("La contraseña es requerida");
      if (wizardData.passwordUsuario !== wizardData.confirmPassword) {
        errors.push("Las contraseñas no coinciden");
      }
      if (!wizardData.rolUsuario) errors.push("Selecciona un rol");
    }

    if (step === 2) {
      if (!wizardData.nombreEmpresa) errors.push("El nombre de la empresa es requerido");
      if (!wizardData.nitEmpresa) errors.push("El NIT es requerido");
      if (!wizardData.sectorEmpresa) errors.push("Selecciona un sector");
      if (!wizardData.tamanoEmpresa) errors.push("Selecciona el tamaño de la empresa");
    }

    if (step === 3) {
      if (!wizardData.volumenMensual) errors.push("El volumen mensual es requerido");
      if (!wizardData.plazoPromedio) errors.push("El plazo promedio es requerido");
      if (!wizardData.tipoFactoring) errors.push("Selecciona el tipo de factoring");
      if (!wizardData.metodoPago) errors.push("Selecciona un método de pago");
    }

    setValidationErrors(errors);
    return errors.length === 0;
  };

  const handleNext = () => {
    if (validateStep(currentStep)) {
      if (currentStep < wizardSteps.length) {
        setCurrentStep(currentStep + 1);
      }
    }
  };

  const handlePrevious = () => {
    setValidationErrors([]);
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleFinish = () => {
    if (validateStep(currentStep)) {
      console.log("Wizard completado:", wizardData);
      updateWizardData("verificacionCompleta", true);
      alert("¡Configuración completada exitosamente!");
    }
  };

  const isStepCompleted = (stepId: number) => stepId < currentStep;
  const isStepAccessible = (stepId: number) => stepId <= currentStep;
  const progress = (currentStep / wizardSteps.length) * 100;

  return (
    <div className="space-y-6">
      <div>
        <h2 className="mb-2">Multi-Step Wizard (Vertical)</h2>
        <p className="text-muted-foreground">
          Wizard avanzado con validación de pasos y progreso vertical a la izquierda
        </p>
      </div>

      <div className="grid lg:grid-cols-[320px_1fr] gap-6">
        {/* Vertical Stepper - Enhanced Left Sidebar */}
        <div className="h-fit lg:sticky lg:top-6">
          <div className="space-y-4">
          <Card>
            <CardHeader className="pb-3">
              <div className="flex items-center justify-between mb-2">
                <CardTitle className="text-lg">Configuración</CardTitle>
                <Badge variant="outline" className="text-xs">
                  {currentStep}/{wizardSteps.length}
                </Badge>
              </div>
              <Progress value={progress} className="h-2" />
              <CardDescription className="mt-2">
                {Math.round(progress)}% completado
              </CardDescription>
            </CardHeader>
          </Card>

          <Card>
            <CardContent className="p-4 space-y-1">
              {wizardSteps.map((step, index) => {
                const isActive = step.id === currentStep;
                const isCompleted = isStepCompleted(step.id);
                const isAccessible = isStepAccessible(step.id);
                const isLast = index === wizardSteps.length - 1;

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

                    {/* Step Button */}
                    <button
                      onClick={() => isAccessible && setCurrentStep(step.id)}
                      disabled={!isAccessible}
                      className={cn(
                        "w-full text-left p-3 rounded-lg transition-all duration-300",
                        "flex items-start gap-3 group",
                        isActive && "bg-primary/10 border-2 border-primary shadow-sm",
                        !isActive && isAccessible && "hover:bg-muted/50 border-2 border-transparent",
                        !isAccessible && "opacity-50 cursor-not-allowed border-2 border-transparent"
                      )}
                    >
                      {/* Step Number/Icon Circle */}
                      <div
                        className={cn(
                          "flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center",
                          "transition-all duration-300 font-medium",
                          isCompleted && "bg-primary text-primary-foreground shadow-md",
                          isActive && !isCompleted && "bg-primary/20 text-primary ring-2 ring-primary/30",
                          !isActive && !isCompleted && isAccessible && "bg-muted text-muted-foreground",
                          !isAccessible && "bg-muted/50 text-muted-foreground/50"
                        )}
                      >
                        {isCompleted ? (
                          <Check className="h-5 w-5" />
                        ) : (
                          step.icon
                        )}
                      </div>

                      {/* Step Content */}
                      <div className="flex-1 min-w-0 pt-1">
                        <div className="flex items-center gap-2">
                          <p
                            className={cn(
                              "text-sm font-medium truncate transition-colors duration-300",
                              isActive && "text-primary",
                              !isActive && isCompleted && "text-foreground",
                              !isActive && !isCompleted && isAccessible && "text-foreground",
                              !isAccessible && "text-muted-foreground"
                            )}
                          >
                            {step.title}
                          </p>
                          {isActive && (
                            <ChevronRight className="h-4 w-4 text-primary flex-shrink-0" />
                          )}
                          {isCompleted && !isActive && (
                            <CheckCircle2 className="h-4 w-4 text-primary flex-shrink-0" />
                          )}
                        </div>
                        <p className="text-xs text-muted-foreground mt-0.5">
                          {step.subtitle}
                        </p>
                      </div>
                    </button>
                  </div>
                );
              })}
            </CardContent>
          </Card>

          {/* Help Card */}
          <Card className="bg-muted/30 border-dashed">
            <CardContent className="p-4">
              <div className="flex gap-2">
                <Lock className="h-4 w-4 text-muted-foreground flex-shrink-0 mt-0.5" />
                <div className="space-y-1">
                  <p className="text-xs font-medium">Información Segura</p>
                  <p className="text-xs text-muted-foreground">
                    Tus datos están protegidos con encriptación de extremo a extremo
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
          </div>
        </div>

        {/* Wizard Content - Right Side */}
        <div className="min-w-0">
          <Card>
          <CardHeader>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                {wizardSteps[currentStep - 1].icon}
              </div>
              <div className="flex-1">
                <CardTitle>{wizardSteps[currentStep - 1].title}</CardTitle>
                <CardDescription>{wizardSteps[currentStep - 1].subtitle}</CardDescription>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
              {/* Validation Errors */}
              <AnimatePresence mode="wait">
              {validationErrors.length > 0 && (
                <motion.div
                  variants={fadeVariants}
                  initial="initial"
                  animate="animate"
                  exit="exit"
                  transition={getTransition('fast')}
                >
                  <Alert variant="destructive">
                    <AlertCircle className="h-4 w-4" />
                    <AlertDescription>
                      <ul className="list-disc pl-4 space-y-1">
                        {validationErrors.map((error, idx) => (
                          <li key={idx} className="text-sm">{error}</li>
                        ))}
                      </ul>
                    </AlertDescription>
                  </Alert>
                </motion.div>
              )}
            </AnimatePresence>

            <AnimatePresence mode="wait">
              <motion.div
                key={currentStep}
                variants={fadeVariants}
                initial="initial"
                animate="animate"
                exit="exit"
                transition={getTransition('normal')}
              >
                {/* Step 1: Cuenta */}
                {currentStep === 1 && (
                  <div className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="nombreUsuario">Nombre de Usuario *</Label>
                      <Input
                        id="nombreUsuario"
                        placeholder="usuario123"
                        value={wizardData.nombreUsuario}
                        onChange={(e) => updateWizardData("nombreUsuario", e.target.value)}
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="emailUsuario">Email Corporativo *</Label>
                      <Input
                        id="emailUsuario"
                        type="email"
                        placeholder="usuario@empresa.com"
                        value={wizardData.emailUsuario}
                        onChange={(e) => updateWizardData("emailUsuario", e.target.value)}
                      />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="passwordUsuario">Contraseña *</Label>
                        <Input
                          id="passwordUsuario"
                          type="password"
                          placeholder="••••••••"
                          value={wizardData.passwordUsuario}
                          onChange={(e) => updateWizardData("passwordUsuario", e.target.value)}
                        />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="confirmPassword">Confirmar Contraseña *</Label>
                        <Input
                          id="confirmPassword"
                          type="password"
                          placeholder="••••••••"
                          value={wizardData.confirmPassword}
                          onChange={(e) => updateWizardData("confirmPassword", e.target.value)}
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label>Rol en la Empresa *</Label>
                      <RadioGroup value={wizardData.rolUsuario} onValueChange={(value) => updateWizardData("rolUsuario", value)}>
                        <div className="flex items-center space-x-2 border rounded-lg p-3 transition-colors hover:bg-muted/30">
                          <RadioGroupItem value="administrador" id="admin" />
                          <Label htmlFor="admin" className="cursor-pointer flex-1">
                            <span className="font-medium">Administrador</span>
                            <p className="text-xs text-muted-foreground">Control total del sistema</p>
                          </Label>
                        </div>
                        <div className="flex items-center space-x-2 border rounded-lg p-3 transition-colors hover:bg-muted/30">
                          <RadioGroupItem value="gestor" id="gestor" />
                          <Label htmlFor="gestor" className="cursor-pointer flex-1">
                            <span className="font-medium">Gestor de Facturas</span>
                            <p className="text-xs text-muted-foreground">Gestión de facturas y operaciones</p>
                          </Label>
                        </div>
                        <div className="flex items-center space-x-2 border rounded-lg p-3 transition-colors hover:bg-muted/30">
                          <RadioGroupItem value="contador" id="contador" />
                          <Label htmlFor="contador" className="cursor-pointer flex-1">
                            <span className="font-medium">Contador</span>
                            <p className="text-xs text-muted-foreground">Revisión contable y reportes</p>
                          </Label>
                        </div>
                      </RadioGroup>
                    </div>
                  </div>
                )}

                {/* Step 2: Empresa */}
                {currentStep === 2 && (
                  <div className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="nombreEmpresa">Razón Social *</Label>
                        <Input
                          id="nombreEmpresa"
                          placeholder="Empresa S.A.S."
                          value={wizardData.nombreEmpresa}
                          onChange={(e) => updateWizardData("nombreEmpresa", e.target.value)}
                        />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="nitEmpresa">NIT *</Label>
                        <Input
                          id="nitEmpresa"
                          placeholder="900.123.456-7"
                          value={wizardData.nitEmpresa}
                          onChange={(e) => updateWizardData("nitEmpresa", e.target.value)}
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="sectorEmpresa">Sector Económico *</Label>
                        <Select value={wizardData.sectorEmpresa} onValueChange={(value) => updateWizardData("sectorEmpresa", value)}>
                          <SelectTrigger id="sectorEmpresa">
                            <SelectValue placeholder="Selecciona un sector" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="tecnologia">Tecnología</SelectItem>
                            <SelectItem value="manufactura">Manufactura</SelectItem>
                            <SelectItem value="comercio">Comercio</SelectItem>
                            <SelectItem value="servicios">Servicios</SelectItem>
                            <SelectItem value="construccion">Construcción</SelectItem>
                            <SelectItem value="salud">Salud</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="tamanoEmpresa">Tamaño de la Empresa *</Label>
                        <Select value={wizardData.tamanoEmpresa} onValueChange={(value) => updateWizardData("tamanoEmpresa", value)}>
                          <SelectTrigger id="tamanoEmpresa">
                            <SelectValue placeholder="Selecciona el tamaño" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="micro">Microempresa (1-10 empleados)</SelectItem>
                            <SelectItem value="pequena">Pequeña (11-50 empleados)</SelectItem>
                            <SelectItem value="mediana">Mediana (51-200 empleados)</SelectItem>
                            <SelectItem value="grande">Grande (200+ empleados)</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="direccionEmpresa">Dirección</Label>
                      <Textarea
                        id="direccionEmpresa"
                        placeholder="Calle 123 # 45-67, Oficina 801"
                        value={wizardData.direccionEmpresa}
                        onChange={(e) => updateWizardData("direccionEmpresa", e.target.value)}
                        rows={2}
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="telefonoEmpresa">Teléfono Corporativo</Label>
                      <Input
                        id="telefonoEmpresa"
                        type="tel"
                        placeholder="+57 1 234 5678"
                        value={wizardData.telefonoEmpresa}
                        onChange={(e) => updateWizardData("telefonoEmpresa", e.target.value)}
                      />
                    </div>
                  </div>
                )}

                {/* Step 3: Facturación */}
                {currentStep === 3 && (
                  <div className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="volumenMensual">Volumen Mensual Promedio *</Label>
                        <Select value={wizardData.volumenMensual} onValueChange={(value) => updateWizardData("volumenMensual", value)}>
                          <SelectTrigger id="volumenMensual">
                            <SelectValue placeholder="Selecciona un rango" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="0-50m">$0 - $50 millones</SelectItem>
                            <SelectItem value="50-100m">$50 - $100 millones</SelectItem>
                            <SelectItem value="100-500m">$100 - $500 millones</SelectItem>
                            <SelectItem value="500m+">Más de $500 millones</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="plazoPromedio">Plazo Promedio de Pago *</Label>
                        <Select value={wizardData.plazoPromedio} onValueChange={(value) => updateWizardData("plazoPromedio", value)}>
                          <SelectTrigger id="plazoPromedio">
                            <SelectValue placeholder="Selecciona el plazo" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="30">30 días</SelectItem>
                            <SelectItem value="60">60 días</SelectItem>
                            <SelectItem value="90">90 días</SelectItem>
                            <SelectItem value="120">120 días</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label>Tipo de Factoring *</Label>
                      <RadioGroup value={wizardData.tipoFactoring} onValueChange={(value) => updateWizardData("tipoFactoring", value)}>
                        <div className="border rounded-lg p-4 space-y-3 transition-colors hover:bg-muted/30">
                          <div className="flex items-center space-x-2">
                            <RadioGroupItem value="con-recurso" id="con-recurso" />
                            <Label htmlFor="con-recurso" className="cursor-pointer flex-1">
                              <span className="font-medium">Con Recurso</span>
                              <p className="text-xs text-muted-foreground mt-1">
                                Mantiene la responsabilidad en caso de impago del deudor
                              </p>
                            </Label>
                          </div>
                        </div>

                        <div className="border rounded-lg p-4 space-y-3 transition-colors hover:bg-muted/30">
                          <div className="flex items-center space-x-2">
                            <RadioGroupItem value="sin-recurso" id="sin-recurso" />
                            <Label htmlFor="sin-recurso" className="cursor-pointer flex-1">
                              <span className="font-medium">Sin Recurso</span>
                              <p className="text-xs text-muted-foreground mt-1">
                                Transferencia total del riesgo al factor
                              </p>
                            </Label>
                          </div>
                        </div>
                      </RadioGroup>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="metodoPago">Método de Pago Preferido *</Label>
                      <Select value={wizardData.metodoPago} onValueChange={(value) => updateWizardData("metodoPago", value)}>
                        <SelectTrigger id="metodoPago">
                          <SelectValue placeholder="Selecciona un método" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="transferencia">Transferencia Bancaria</SelectItem>
                          <SelectItem value="ach">ACH</SelectItem>
                          <SelectItem value="cheque">Cheque</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                )}

                {/* Step 4: Verificación */}
                {currentStep === 4 && (
                  <div className="space-y-6">
                    <Alert className="bg-primary/5 border-primary/20">
                      <CheckCircle2 className="h-4 w-4 text-primary" />
                      <AlertDescription>
                        Revisa cuidadosamente la información antes de finalizar
                      </AlertDescription>
                    </Alert>

                    <div className="space-y-4">
                      <div className="rounded-lg border p-4 bg-muted/30">
                        <h4 className="font-medium mb-3 flex items-center gap-2">
                          <User className="h-4 w-4 text-muted-foreground" />
                          Información de Cuenta
                        </h4>
                        <div className="space-y-2 text-sm">
                          <div className="flex justify-between">
                            <span className="text-muted-foreground">Usuario:</span>
                            <span className="font-medium">{wizardData.nombreUsuario}</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-muted-foreground">Email:</span>
                            <span className="font-medium">{wizardData.emailUsuario}</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-muted-foreground">Rol:</span>
                            <Badge variant="outline">{wizardData.rolUsuario}</Badge>
                          </div>
                        </div>
                      </div>

                      <div className="rounded-lg border p-4 bg-muted/30">
                        <h4 className="font-medium mb-3 flex items-center gap-2">
                          <Building2 className="h-4 w-4 text-muted-foreground" />
                          Información de Empresa
                        </h4>
                        <div className="space-y-2 text-sm">
                          <div className="flex justify-between">
                            <span className="text-muted-foreground">Razón Social:</span>
                            <span className="font-medium">{wizardData.nombreEmpresa}</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-muted-foreground">NIT:</span>
                            <span className="font-medium">{wizardData.nitEmpresa}</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-muted-foreground">Sector:</span>
                            <span className="font-medium capitalize">{wizardData.sectorEmpresa}</span>
                          </div>
                        </div>
                      </div>

                      <div className="rounded-lg border p-4 bg-muted/30">
                        <h4 className="font-medium mb-3 flex items-center gap-2">
                          <CreditCard className="h-4 w-4 text-muted-foreground" />
                          Facturación y Pagos
                        </h4>
                        <div className="space-y-2 text-sm">
                          <div className="flex justify-between">
                            <span className="text-muted-foreground">Volumen Mensual:</span>
                            <span className="font-medium">{wizardData.volumenMensual}</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-muted-foreground">Tipo de Factoring:</span>
                            <Badge variant="secondary" className="capitalize">{wizardData.tipoFactoring?.replace("-", " ")}</Badge>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-muted-foreground">Método de Pago:</span>
                            <span className="font-medium capitalize">{wizardData.metodoPago}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </motion.div>
            </AnimatePresence>
            </div>

            {/* Wizard Navigation */}
            <div className="flex justify-between items-center pt-6 mt-6 border-t">
              <Button
                variant="outline"
                onClick={handlePrevious}
                disabled={currentStep === 1}
              >
                <ArrowLeft className="h-4 w-4 mr-2" />
                Atrás
              </Button>

              {currentStep < wizardSteps.length ? (
                <Button onClick={handleNext} className="bg-primary hover:bg-primary/90">
                  Siguiente
                  <ChevronRight className="h-4 w-4 ml-2" />
                </Button>
              ) : (
                <Button 
                  onClick={handleFinish} 
                  className="bg-green-600 hover:bg-green-700 text-white"
                >
                  <Check className="h-4 w-4 mr-2" />
                  Finalizar Configuración
                </Button>
              )}
            </div>
          </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}