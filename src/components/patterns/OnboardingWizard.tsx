import { useState } from "react";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "../ui/card";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { Button } from "../ui/button";
import { Badge } from "../ui/badge";
import { Separator } from "../ui/separator";
import { Alert, AlertDescription } from "../ui/alert";
import { Progress } from "../ui/progress";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../ui/select";
import { Checkbox } from "../ui/checkbox";
import { 
  Building2, 
  User, 
  Mail, 
  Phone, 
  MapPin,
  Landmark,
  FileCheck,
  CheckCircle2,
  ArrowRight,
  ArrowLeft,
  Upload,
  Info,
  Shield,
  Clock
} from "lucide-react";

/**
 * WIZARD DE ONBOARDING C-FINANCIA
 * 
 * Proceso de registro para empresas cedentes:
 * 
 * PASO 1: Información de la Empresa
 * - RUT (Registro Único Tributario)
 * - NIT (Número de Identificación Tributaria)
 * - Razón social
 * - Tipo de empresa
 * - Sector económico
 * 
 * PASO 2: Datos de Contacto
 * - Representante legal
 * - Email corporativo
 * - Teléfono
 * - Dirección
 * - Ciudad
 * 
 * PASO 3: Información Bancaria
 * - Banco
 * - Tipo de cuenta
 * - Número de cuenta
 * - Titular
 * 
 * PASO 4: Verificación de Documentos
 * - RUT escaneado
 * - Cámara de comercio (< 30 días)
 * - Estados financieros
 * - Cédula del representante legal
 * 
 * PASO 5: Términos y Condiciones
 * - Contrato de factoring
 * - Autorización tratamiento de datos
 * - Confirmación final
 */

type OnboardingStep = 1 | 2 | 3 | 4 | 5;

interface OnboardingData {
  // Paso 1: Empresa
  rut: string;
  nit: string;
  razonSocial: string;
  tipoEmpresa: string;
  sectorEconomico: string;
  
  // Paso 2: Contacto
  representanteLegal: string;
  emailCorporativo: string;
  telefono: string;
  direccion: string;
  ciudad: string;
  
  // Paso 3: Bancaria
  banco: string;
  tipoCuenta: string;
  numeroCuenta: string;
  titularCuenta: string;
  
  // Paso 4: Documentos
  rutArchivo: File | null;
  camaraComercio: File | null;
  estadosFinancieros: File | null;
  cedulaRepresentante: File | null;
  
  // Paso 5: Términos
  aceptaContrato: boolean;
  aceptaDatos: boolean;
}

export function OnboardingWizard() {
  const [currentStep, setCurrentStep] = useState<OnboardingStep>(1);
  const [formData, setFormData] = useState<OnboardingData>({
    rut: "",
    nit: "",
    razonSocial: "",
    tipoEmpresa: "",
    sectorEconomico: "",
    representanteLegal: "",
    emailCorporativo: "",
    telefono: "",
    direccion: "",
    ciudad: "",
    banco: "",
    tipoCuenta: "",
    numeroCuenta: "",
    titularCuenta: "",
    rutArchivo: null,
    camaraComercio: null,
    estadosFinancieros: null,
    cedulaRepresentante: null,
    aceptaContrato: false,
    aceptaDatos: false,
  });

  const totalSteps = 5;
  const progress = (currentStep / totalSteps) * 100;

  const updateField = (field: keyof OnboardingData, value: any) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleNext = () => {
    if (currentStep < totalSteps) {
      setCurrentStep((currentStep + 1) as OnboardingStep);
    }
  };

  const handlePrevious = () => {
    if (currentStep > 1) {
      setCurrentStep((currentStep - 1) as OnboardingStep);
    }
  };

  const handleFileUpload = (field: keyof OnboardingData, event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0] || null;
    updateField(field, file);
  };

  const handleSubmit = () => {
    alert("🎉 ¡Registro completado!\n\nTu solicitud ha sido enviada para aprobación.\n\nRecibirás un correo de confirmación en las próximas 2 horas con:\n\n✓ Acceso a tu portal empresarial\n✓ Cupo de factoring aprobado\n✓ Instrucciones para cargar facturas\n\n¡Bienvenido a C-Financia!");
    console.log("Datos del formulario:", formData);
  };

  // Validaciones por paso
  const isStep1Valid = formData.rut && formData.nit && formData.razonSocial && formData.tipoEmpresa;
  const isStep2Valid = formData.representanteLegal && formData.emailCorporativo && formData.telefono && formData.ciudad;
  const isStep3Valid = formData.banco && formData.tipoCuenta && formData.numeroCuenta && formData.titularCuenta;
  const isStep4Valid = formData.rutArchivo && formData.camaraComercio && formData.estadosFinancieros && formData.cedulaRepresentante;
  const isStep5Valid = formData.aceptaContrato && formData.aceptaDatos;

  const canProceed = () => {
    switch (currentStep) {
      case 1: return isStep1Valid;
      case 2: return isStep2Valid;
      case 3: return isStep3Valid;
      case 4: return isStep4Valid;
      case 5: return isStep5Valid;
      default: return false;
    }
  };

  return (
    <div className="max-w-4xl mx-auto space-y-6">
      {/* Header con progreso */}
      <Card className="elevation-2 border-2 border-primary/30 bg-gradient-to-br from-primary/5 to-primary/10">
        <CardHeader>
          <div className="flex items-center justify-between mb-4">
            <div>
              <CardTitle className="flex items-center gap-2">
                <Building2 className="h-6 w-6 text-primary" />
                Registro de Empresa - C-Financia
              </CardTitle>
              <CardDescription className="mt-2">
                Completa tu registro en 5 pasos para acceder a liquidez inmediata
              </CardDescription>
            </div>
            <Badge variant="outline" className="text-sm">
              Paso {currentStep} de {totalSteps}
            </Badge>
          </div>

          {/* Barra de progreso */}
          <div className="space-y-2">
            <Progress value={progress} className="h-2" />
            <div className="flex justify-between text-xs text-muted-foreground">
              <span className={currentStep >= 1 ? "text-primary font-semibold" : ""}>Empresa</span>
              <span className={currentStep >= 2 ? "text-primary font-semibold" : ""}>Contacto</span>
              <span className={currentStep >= 3 ? "text-primary font-semibold" : ""}>Bancaria</span>
              <span className={currentStep >= 4 ? "text-primary font-semibold" : ""}>Documentos</span>
              <span className={currentStep >= 5 ? "text-primary font-semibold" : ""}>Confirmación</span>
            </div>
          </div>
        </CardHeader>
      </Card>

      {/* Contenido del paso actual */}
      <Card className="elevation-2">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            {currentStep === 1 && <><Building2 className="h-5 w-5 text-primary" /> Información de la Empresa</>}
            {currentStep === 2 && <><User className="h-5 w-5 text-primary" /> Datos de Contacto</>}
            {currentStep === 3 && <><Landmark className="h-5 w-5 text-primary" /> Información Bancaria</>}
            {currentStep === 4 && <><Upload className="h-5 w-5 text-primary" /> Verificación de Documentos</>}
            {currentStep === 5 && <><Shield className="h-5 w-5 text-primary" /> Términos y Condiciones</>}
          </CardTitle>
          <CardDescription>
            {currentStep === 1 && "Ingresa los datos fiscales de tu empresa"}
            {currentStep === 2 && "Información del representante legal y ubicación"}
            {currentStep === 3 && "Cuenta bancaria para recibir desembolsos"}
            {currentStep === 4 && "Carga los documentos requeridos para verificación"}
            {currentStep === 5 && "Revisa y acepta los términos del servicio"}
          </CardDescription>
        </CardHeader>

        <CardContent>
          {/* PASO 1: Información de la Empresa */}
          {currentStep === 1 && (
            <div className="space-y-6">
              <div className="grid gap-6 md:grid-cols-2">
                <div className="space-y-2">
                  <Label htmlFor="rut">
                    RUT (Registro Único Tributario) *
                  </Label>
                  <Input
                    id="rut"
                    type="text"
                    value={formData.rut}
                    onChange={(e) => updateField("rut", e.target.value)}
                    placeholder="000000000-0"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="nit">
                    NIT (Número de Identificación Tributaria) *
                  </Label>
                  <Input
                    id="nit"
                    type="text"
                    value={formData.nit}
                    onChange={(e) => updateField("nit", e.target.value)}
                    placeholder="900.000.000-0"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="razonSocial">
                  Razón Social *
                </Label>
                <Input
                  id="razonSocial"
                  type="text"
                  value={formData.razonSocial}
                  onChange={(e) => updateField("razonSocial", e.target.value)}
                  placeholder="EMPRESA S.A.S."
                />
              </div>

              <div className="grid gap-6 md:grid-cols-2">
                <div className="space-y-2">
                  <Label htmlFor="tipoEmpresa">
                    Tipo de Empresa *
                  </Label>
                  <Select value={formData.tipoEmpresa} onValueChange={(value) => updateField("tipoEmpresa", value)}>
                    <SelectTrigger id="tipoEmpresa">
                      <SelectValue placeholder="Selecciona tipo" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="sas">S.A.S. (Sociedad por Acciones Simplificada)</SelectItem>
                      <SelectItem value="sa">S.A. (Sociedad Anónima)</SelectItem>
                      <SelectItem value="ltda">LTDA (Limitada)</SelectItem>
                      <SelectItem value="sc">S.C. (Sociedad Colectiva)</SelectItem>
                      <SelectItem value="eu">E.U. (Empresa Unipersonal)</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="sectorEconomico">
                    Sector Económico
                  </Label>
                  <Select value={formData.sectorEconomico} onValueChange={(value) => updateField("sectorEconomico", value)}>
                    <SelectTrigger id="sectorEconomico">
                      <SelectValue placeholder="Selecciona sector" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="comercio">Comercio</SelectItem>
                      <SelectItem value="servicios">Servicios</SelectItem>
                      <SelectItem value="manufactura">Manufactura</SelectItem>
                      <SelectItem value="construccion">Construcción</SelectItem>
                      <SelectItem value="tecnologia">Tecnología</SelectItem>
                      <SelectItem value="transporte">Transporte y Logística</SelectItem>
                      <SelectItem value="agricultura">Agricultura</SelectItem>
                      <SelectItem value="otro">Otro</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <Alert className="border-primary/50 bg-primary/5">
                <Info className="h-4 w-4 text-primary" />
                <AlertDescription className="text-sm">
                  Asegúrate de que los datos coincidan con tu RUT y cámara de comercio.
                </AlertDescription>
              </Alert>
            </div>
          )}

          {/* PASO 2: Datos de Contacto */}
          {currentStep === 2 && (
            <div className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="representanteLegal" className="flex items-center gap-2">
                  <User className="h-4 w-4 text-primary" />
                  Representante Legal *
                </Label>
                <Input
                  id="representanteLegal"
                  type="text"
                  value={formData.representanteLegal}
                  onChange={(e) => updateField("representanteLegal", e.target.value)}
                  placeholder="Nombre completo del representante"
                />
              </div>

              <div className="grid gap-6 md:grid-cols-2">
                <div className="space-y-2">
                  <Label htmlFor="emailCorporativo" className="flex items-center gap-2">
                    <Mail className="h-4 w-4 text-primary" />
                    Email Corporativo *
                  </Label>
                  <Input
                    id="emailCorporativo"
                    type="email"
                    value={formData.emailCorporativo}
                    onChange={(e) => updateField("emailCorporativo", e.target.value)}
                    placeholder="contacto@empresa.com.co"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="telefono" className="flex items-center gap-2">
                    <Phone className="h-4 w-4 text-primary" />
                    Teléfono *
                  </Label>
                  <Input
                    id="telefono"
                    type="tel"
                    value={formData.telefono}
                    onChange={(e) => updateField("telefono", e.target.value)}
                    placeholder="+57 300 123 4567"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="direccion" className="flex items-center gap-2">
                  <MapPin className="h-4 w-4 text-primary" />
                  Dirección Comercial
                </Label>
                <Input
                  id="direccion"
                  type="text"
                  value={formData.direccion}
                  onChange={(e) => updateField("direccion", e.target.value)}
                  placeholder="Calle 123 # 45-67"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="ciudad">
                  Ciudad *
                </Label>
                <Select value={formData.ciudad} onValueChange={(value) => updateField("ciudad", value)}>
                  <SelectTrigger id="ciudad">
                    <SelectValue placeholder="Selecciona ciudad" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="bogota">Bogotá D.C.</SelectItem>
                    <SelectItem value="medellin">Medellín</SelectItem>
                    <SelectItem value="cali">Cali</SelectItem>
                    <SelectItem value="barranquilla">Barranquilla</SelectItem>
                    <SelectItem value="cartagena">Cartagena</SelectItem>
                    <SelectItem value="bucaramanga">Bucaramanga</SelectItem>
                    <SelectItem value="pereira">Pereira</SelectItem>
                    <SelectItem value="manizales">Manizales</SelectItem>
                    <SelectItem value="otro">Otra</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <Alert className="border-primary/50 bg-primary/5">
                <Info className="h-4 w-4 text-primary" />
                <AlertDescription className="text-sm">
                  El email corporativo será usado para todas las notificaciones importantes.
                </AlertDescription>
              </Alert>
            </div>
          )}

          {/* PASO 3: Información Bancaria */}
          {currentStep === 3 && (
            <div className="space-y-6">
              <div className="grid gap-6 md:grid-cols-2">
                <div className="space-y-2">
                  <Label htmlFor="banco" className="flex items-center gap-2">
                    <Landmark className="h-4 w-4 text-primary" />
                    Banco *
                  </Label>
                  <Select value={formData.banco} onValueChange={(value) => updateField("banco", value)}>
                    <SelectTrigger id="banco">
                      <SelectValue placeholder="Selecciona banco" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="bancolombia">Bancolombia</SelectItem>
                      <SelectItem value="davivienda">Davivienda</SelectItem>
                      <SelectItem value="bbva">BBVA</SelectItem>
                      <SelectItem value="bogota">Banco de Bogotá</SelectItem>
                      <SelectItem value="occidente">Banco de Occidente</SelectItem>
                      <SelectItem value="popular">Banco Popular</SelectItem>
                      <SelectItem value="av_villas">AV Villas</SelectItem>
                      <SelectItem value="colpatria">Colpatria</SelectItem>
                      <SelectItem value="agrario">Banco Agrario</SelectItem>
                      <SelectItem value="otro">Otro</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="tipoCuenta">
                    Tipo de Cuenta *
                  </Label>
                  <Select value={formData.tipoCuenta} onValueChange={(value) => updateField("tipoCuenta", value)}>
                    <SelectTrigger id="tipoCuenta">
                      <SelectValue placeholder="Selecciona tipo" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="ahorros">Ahorros</SelectItem>
                      <SelectItem value="corriente">Corriente</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="numeroCuenta">
                  Número de Cuenta *
                </Label>
                <Input
                  id="numeroCuenta"
                  type="text"
                  value={formData.numeroCuenta}
                  onChange={(e) => updateField("numeroCuenta", e.target.value)}
                  placeholder="0000-0000-0000"
                />
                <p className="text-xs text-muted-foreground">
                  Cuenta a la que se realizarán los desembolsos
                </p>
              </div>

              <div className="space-y-2">
                <Label htmlFor="titularCuenta">
                  Titular de la Cuenta *
                </Label>
                <Input
                  id="titularCuenta"
                  type="text"
                  value={formData.titularCuenta}
                  onChange={(e) => updateField("titularCuenta", e.target.value)}
                  placeholder="Nombre del titular"
                />
                <p className="text-xs text-muted-foreground">
                  Debe coincidir con la razón social de la empresa
                </p>
              </div>

              <Alert className="border-blue-500/50 bg-blue-500/5">
                <Clock className="h-4 w-4 text-blue-500" />
                <AlertDescription className="text-sm">
                  <strong>Desembolsos en 24 horas:</strong> Una vez aprobada tu solicitud, 
                  el dinero se transferirá a esta cuenta bancaria.
                </AlertDescription>
              </Alert>
            </div>
          )}

          {/* PASO 4: Verificación de Documentos */}
          {currentStep === 4 && (
            <div className="space-y-6">
              <Alert className="border-primary/50 bg-primary/5">
                <FileCheck className="h-4 w-4 text-primary" />
                <AlertDescription className="text-sm">
                  Carga documentos en formato PDF o JPG (máximo 5 MB por archivo)
                </AlertDescription>
              </Alert>

              <div className="space-y-4">
                {/* RUT */}
                <Card className="p-4">
                  <div className="flex items-center justify-between mb-2">
                    <Label htmlFor="rutArchivo" className="font-medium">
                      RUT (Registro Único Tributario) *
                    </Label>
                    {formData.rutArchivo && (
                      <Badge variant="default" className="bg-green-500">
                        <CheckCircle2 className="h-3 w-3 mr-1" />
                        Cargado
                      </Badge>
                    )}
                  </div>
                  <Input
                    id="rutArchivo"
                    type="file"
                    accept=".pdf,.jpg,.jpeg,.png"
                    onChange={(e) => handleFileUpload("rutArchivo", e)}
                  />
                  {formData.rutArchivo && (
                    <p className="text-xs text-green-600 dark:text-green-400 mt-1">
                      {formData.rutArchivo.name}
                    </p>
                  )}
                </Card>

                {/* Cámara de Comercio */}
                <Card className="p-4">
                  <div className="flex items-center justify-between mb-2">
                    <Label htmlFor="camaraComercio" className="font-semibold">
                      Certificado Cámara de Comercio (vigencia &lt; 30 días) *
                    </Label>
                    {formData.camaraComercio && (
                      <Badge variant="default" className="bg-green-500">
                        <CheckCircle2 className="h-3 w-3 mr-1" />
                        Cargado
                      </Badge>
                    )}
                  </div>
                  <Input
                    id="camaraComercio"
                    type="file"
                    accept=".pdf,.jpg,.jpeg,.png"
                    onChange={(e) => handleFileUpload("camaraComercio", e)}
                  />
                  {formData.camaraComercio && (
                    <p className="text-xs text-green-600 dark:text-green-400 mt-1">
                      {formData.camaraComercio.name}
                    </p>
                  )}
                </Card>

                {/* Estados Financieros */}
                <Card className="p-4">
                  <div className="flex items-center justify-between mb-2">
                    <Label htmlFor="estadosFinancieros" className="font-semibold">
                      Estados Financieros (último año) *
                    </Label>
                    {formData.estadosFinancieros && (
                      <Badge variant="default" className="bg-green-500">
                        <CheckCircle2 className="h-3 w-3 mr-1" />
                        Cargado
                      </Badge>
                    )}
                  </div>
                  <Input
                    id="estadosFinancieros"
                    type="file"
                    accept=".pdf,.jpg,.jpeg,.png"
                    onChange={(e) => handleFileUpload("estadosFinancieros", e)}
                  />
                  {formData.estadosFinancieros && (
                    <p className="text-xs text-green-600 dark:text-green-400 mt-1">
                      {formData.estadosFinancieros.name}
                    </p>
                  )}
                </Card>

                {/* Cédula Representante */}
                <Card className="p-4">
                  <div className="flex items-center justify-between mb-2">
                    <Label htmlFor="cedulaRepresentante" className="font-medium">
                      Cédula del Representante Legal *
                    </Label>
                    {formData.cedulaRepresentante && (
                      <Badge variant="default" className="bg-green-500">
                        <CheckCircle2 className="h-3 w-3 mr-1" />
                        Cargado
                      </Badge>
                    )}
                  </div>
                  <Input
                    id="cedulaRepresentante"
                    type="file"
                    accept=".pdf,.jpg,.jpeg,.png"
                    onChange={(e) => handleFileUpload("cedulaRepresentante", e)}
                  />
                  {formData.cedulaRepresentante && (
                    <p className="text-xs text-green-600 dark:text-green-400 mt-1">
                      {formData.cedulaRepresentante.name}
                    </p>
                  )}
                </Card>
              </div>
            </div>
          )}

          {/* PASO 5: Términos y Condiciones */}
          {currentStep === 5 && (
            <div className="space-y-6">
              <Alert className="border-green-500/50 bg-green-500/5">
                <CheckCircle2 className="h-4 w-4 text-green-500" />
                <AlertDescription className="text-sm">
                  <strong>¡Casi listo!</strong> Revisa y acepta los términos para completar tu registro.
                </AlertDescription>
              </Alert>

              {/* Resumen de datos */}
              <Card className="p-4 bg-muted/30">
                <h4 className="font-semibold mb-3">Resumen de tu Registro</h4>
                <div className="space-y-2 text-sm">
                  <div className="flex items-center justify-between py-2 border-b">
                    <span className="text-muted-foreground">Empresa</span>
                    <span className="font-medium">{formData.razonSocial || "Sin especificar"}</span>
                  </div>
                  <div className="flex items-center justify-between py-2 border-b">
                    <span className="text-muted-foreground">NIT</span>
                    <span className="font-medium">{formData.nit || "Sin especificar"}</span>
                  </div>
                  <div className="flex items-center justify-between py-2 border-b">
                    <span className="text-muted-foreground">Representante Legal</span>
                    <span className="font-medium">{formData.representanteLegal || "Sin especificar"}</span>
                  </div>
                  <div className="flex items-center justify-between py-2 border-b">
                    <span className="text-muted-foreground">Email</span>
                    <span className="font-medium">{formData.emailCorporativo || "Sin especificar"}</span>
                  </div>
                  <div className="flex items-center justify-between py-2">
                    <span className="text-muted-foreground">Cuenta Bancaria</span>
                    <span className="font-medium">{formData.banco || "Sin especificar"} - {formData.numeroCuenta || "Sin especificar"}</span>
                  </div>
                </div>
              </Card>

              <Separator />

              {/* Términos */}
              <div className="space-y-4">
                <div className="flex items-start gap-3 p-4 border rounded-lg">
                  <Checkbox
                    id="aceptaContrato"
                    checked={formData.aceptaContrato}
                    onCheckedChange={(checked) => updateField("aceptaContrato", checked)}
                  />
                  <div className="flex-1">
                    <Label htmlFor="aceptaContrato" className="cursor-pointer font-semibold">
                      Acepto el Contrato de Factoring *
                    </Label>
                    <p className="text-sm text-muted-foreground mt-1">
                      He leído y acepto los términos del contrato de cesión de facturas. 
                      <Button variant="link" className="h-auto p-0 ml-1">
                        Ver contrato completo
                      </Button>
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-4 border rounded-lg">
                  <Checkbox
                    id="aceptaDatos"
                    checked={formData.aceptaDatos}
                    onCheckedChange={(checked) => updateField("aceptaDatos", checked)}
                  />
                  <div className="flex-1">
                    <Label htmlFor="aceptaDatos" className="cursor-pointer font-medium">
                      Autorizo el Tratamiento de Datos Personales *
                    </Label>
                    <p className="text-sm text-muted-foreground mt-1">
                      Autorizo a C-Financia para el tratamiento de mis datos personales según la Ley 1581 de 2012.
                      <Button variant="link" className="h-auto p-0 ml-1">
                        Ver política de privacidad
                      </Button>
                    </p>
                  </div>
                </div>
              </div>

              <Alert className="border-blue-500/50 bg-blue-500/5">
                <Shield className="h-4 w-4 text-blue-500" />
                <AlertDescription className="text-sm">
                  <strong>Protección de datos:</strong> Tus datos están protegidos con encriptación 
                  de grado bancario. C-Financia cumple con todas las normativas de protección de datos.
                </AlertDescription>
              </Alert>
            </div>
          )}
        </CardContent>

        {/* Footer con botones de navegación */}
        <CardFooter className="flex justify-between gap-4">
          <Button
            variant="outline"
            onClick={handlePrevious}
            disabled={currentStep === 1}
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Anterior
          </Button>

          <div className="flex gap-2">
            {currentStep < totalSteps && (
              <Button
                onClick={handleNext}
                disabled={!canProceed()}
              >
                Siguiente
                <ArrowRight className="h-4 w-4 ml-2" />
              </Button>
            )}

            {currentStep === totalSteps && (
              <Button
                onClick={handleSubmit}
                disabled={!canProceed()}
                className="bg-green-600 hover:bg-green-700"
              >
                <CheckCircle2 className="h-4 w-4 mr-2" />
                Completar Registro
              </Button>
            )}
          </div>
        </CardFooter>
      </Card>

      {/* Ayuda y soporte */}
      <Card className="elevation-1">
        <CardContent className="pt-6">
          <div className="flex items-start gap-3">
            <Info className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
            <div>
              <h4 className="font-semibold mb-1">¿Necesitas ayuda?</h4>
              <p className="text-sm text-muted-foreground mb-2">
                Nuestro equipo está disponible para asistirte en el proceso de registro.
              </p>
              <div className="flex gap-4 text-sm">
                <div className="flex items-center gap-1">
                  <Phone className="h-4 w-4 text-primary" />
                  <span>+57 601 123 4567</span>
                </div>
                <div className="flex items-center gap-1">
                  <Mail className="h-4 w-4 text-primary" />
                  <span>soporte@c-financia.com.co</span>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}