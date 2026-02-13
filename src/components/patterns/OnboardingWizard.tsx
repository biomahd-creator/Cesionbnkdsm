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
 * ONBOARDING WIZARD — C-FINANCIA
 * 
 * Company registration process for assignor companies:
 * 
 * STEP 1: Company Information
 * - RUT (Colombian Tax Registry)
 * - NIT (Tax Identification Number)
 * - Legal name
 * - Company type
 * - Economic sector
 * 
 * STEP 2: Contact Details
 * - Legal representative
 * - Corporate email
 * - Phone
 * - Address
 * - City
 * 
 * STEP 3: Banking Information
 * - Bank
 * - Account type
 * - Account number
 * - Account holder
 * 
 * STEP 4: Document Verification
 * - Scanned RUT
 * - Chamber of Commerce certificate (< 30 days)
 * - Financial statements
 * - Legal representative's ID
 * 
 * STEP 5: Terms & Conditions
 * - Factoring contract
 * - Data processing authorization
 * - Final confirmation
 */

type OnboardingStep = 1 | 2 | 3 | 4 | 5;

interface OnboardingData {
  // Step 1: Company
  rut: string;
  nit: string;
  razonSocial: string;
  tipoEmpresa: string;
  sectorEconomico: string;
  
  // Step 2: Contact
  representanteLegal: string;
  emailCorporativo: string;
  telefono: string;
  direccion: string;
  ciudad: string;
  
  // Step 3: Banking
  banco: string;
  tipoCuenta: string;
  numeroCuenta: string;
  titularCuenta: string;
  
  // Step 4: Documents
  rutArchivo: File | null;
  camaraComercio: File | null;
  estadosFinancieros: File | null;
  cedulaRepresentante: File | null;
  
  // Step 5: Terms
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
    alert("Registration complete!\n\nYour application has been submitted for approval.\n\nYou will receive a confirmation email within 2 hours with:\n\n- Access to your corporate portal\n- Approved factoring credit line\n- Instructions for uploading invoices\n\nWelcome to C-Financia!");
    console.log("Form data:", formData);
  };

  // Per-step validations
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
      {/* Header with progress */}
      <Card className="elevation-2 border-2 border-primary/30 bg-gradient-to-br from-primary/5 to-primary/10">
        <CardHeader>
          <div className="flex items-center justify-between mb-4">
            <div>
              <CardTitle className="flex items-center gap-2">
                <Building2 className="h-6 w-6 text-primary" />
                Company Registration — C-Financia
              </CardTitle>
              <CardDescription className="mt-2">
                Complete your registration in 5 steps to access immediate liquidity
              </CardDescription>
            </div>
            <Badge variant="outline" className="text-sm">
              Step {currentStep} of {totalSteps}
            </Badge>
          </div>

          {/* Progress bar */}
          <div className="space-y-2">
            <Progress value={progress} className="h-2" />
            <div className="flex justify-between text-xs text-muted-foreground">
              <span className={currentStep >= 1 ? "text-primary font-semibold" : ""}>Company</span>
              <span className={currentStep >= 2 ? "text-primary font-semibold" : ""}>Contact</span>
              <span className={currentStep >= 3 ? "text-primary font-semibold" : ""}>Banking</span>
              <span className={currentStep >= 4 ? "text-primary font-semibold" : ""}>Documents</span>
              <span className={currentStep >= 5 ? "text-primary font-semibold" : ""}>Confirmation</span>
            </div>
          </div>
        </CardHeader>
      </Card>

      {/* Current step content */}
      <Card className="elevation-2">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            {currentStep === 1 && <><Building2 className="h-5 w-5 text-primary" /> Company Information</>}
            {currentStep === 2 && <><User className="h-5 w-5 text-primary" /> Contact Details</>}
            {currentStep === 3 && <><Landmark className="h-5 w-5 text-primary" /> Banking Information</>}
            {currentStep === 4 && <><Upload className="h-5 w-5 text-primary" /> Document Verification</>}
            {currentStep === 5 && <><Shield className="h-5 w-5 text-primary" /> Terms & Conditions</>}
          </CardTitle>
          <CardDescription>
            {currentStep === 1 && "Enter your company's tax information"}
            {currentStep === 2 && "Legal representative and location details"}
            {currentStep === 3 && "Bank account for receiving disbursements"}
            {currentStep === 4 && "Upload the required documents for verification"}
            {currentStep === 5 && "Review and accept the terms of service"}
          </CardDescription>
        </CardHeader>

        <CardContent>
          {/* STEP 1: Company Information */}
          {currentStep === 1 && (
            <div className="space-y-6">
              <div className="grid gap-6 md:grid-cols-2">
                <div className="space-y-2">
                  <Label htmlFor="rut">
                    RUT (Colombian Tax Registry) *
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
                    NIT (Tax Identification Number) *
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
                  Legal Name *
                </Label>
                <Input
                  id="razonSocial"
                  type="text"
                  value={formData.razonSocial}
                  onChange={(e) => updateField("razonSocial", e.target.value)}
                  placeholder="COMPANY S.A.S."
                />
              </div>

              <div className="grid gap-6 md:grid-cols-2">
                <div className="space-y-2">
                  <Label htmlFor="tipoEmpresa">
                    Company Type *
                  </Label>
                  <Select value={formData.tipoEmpresa} onValueChange={(value: string) => updateField("tipoEmpresa", value)}>
                    <SelectTrigger id="tipoEmpresa">
                      <SelectValue placeholder="Select type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="sas">S.A.S. (Simplified Joint-Stock Company)</SelectItem>
                      <SelectItem value="sa">S.A. (Corporation)</SelectItem>
                      <SelectItem value="ltda">LTDA (Limited Liability)</SelectItem>
                      <SelectItem value="sc">S.C. (General Partnership)</SelectItem>
                      <SelectItem value="eu">E.U. (Sole Proprietorship)</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="sectorEconomico">
                    Economic Sector
                  </Label>
                  <Select value={formData.sectorEconomico} onValueChange={(value: string) => updateField("sectorEconomico", value)}>
                    <SelectTrigger id="sectorEconomico">
                      <SelectValue placeholder="Select sector" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="comercio">Commerce</SelectItem>
                      <SelectItem value="servicios">Services</SelectItem>
                      <SelectItem value="manufactura">Manufacturing</SelectItem>
                      <SelectItem value="construccion">Construction</SelectItem>
                      <SelectItem value="tecnologia">Technology</SelectItem>
                      <SelectItem value="transporte">Transport & Logistics</SelectItem>
                      <SelectItem value="agricultura">Agriculture</SelectItem>
                      <SelectItem value="otro">Other</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <Alert className="border-primary/50 bg-primary/5">
                <Info className="h-4 w-4 text-primary" />
                <AlertDescription className="text-sm">
                  Make sure the information matches your RUT and Chamber of Commerce certificate.
                </AlertDescription>
              </Alert>
            </div>
          )}

          {/* STEP 2: Contact Details */}
          {currentStep === 2 && (
            <div className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="representanteLegal" className="flex items-center gap-2">
                  <User className="h-4 w-4 text-primary" />
                  Legal Representative *
                </Label>
                <Input
                  id="representanteLegal"
                  type="text"
                  value={formData.representanteLegal}
                  onChange={(e) => updateField("representanteLegal", e.target.value)}
                  placeholder="Full name of the representative"
                />
              </div>

              <div className="grid gap-6 md:grid-cols-2">
                <div className="space-y-2">
                  <Label htmlFor="emailCorporativo" className="flex items-center gap-2">
                    <Mail className="h-4 w-4 text-primary" />
                    Corporate Email *
                  </Label>
                  <Input
                    id="emailCorporativo"
                    type="email"
                    value={formData.emailCorporativo}
                    onChange={(e) => updateField("emailCorporativo", e.target.value)}
                    placeholder="contact@company.com"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="telefono" className="flex items-center gap-2">
                    <Phone className="h-4 w-4 text-primary" />
                    Phone *
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
                  Business Address
                </Label>
                <Input
                  id="direccion"
                  type="text"
                  value={formData.direccion}
                  onChange={(e) => updateField("direccion", e.target.value)}
                  placeholder="Street 123 # 45-67"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="ciudad">
                  City *
                </Label>
                <Select value={formData.ciudad} onValueChange={(value: string) => updateField("ciudad", value)}>
                  <SelectTrigger id="ciudad">
                    <SelectValue placeholder="Select city" />
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
                    <SelectItem value="otro">Other</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <Alert className="border-primary/50 bg-primary/5">
                <Info className="h-4 w-4 text-primary" />
                <AlertDescription className="text-sm">
                  The corporate email will be used for all important notifications.
                </AlertDescription>
              </Alert>
            </div>
          )}

          {/* STEP 3: Banking Information */}
          {currentStep === 3 && (
            <div className="space-y-6">
              <div className="grid gap-6 md:grid-cols-2">
                <div className="space-y-2">
                  <Label htmlFor="banco" className="flex items-center gap-2">
                    <Landmark className="h-4 w-4 text-primary" />
                    Bank *
                  </Label>
                  <Select value={formData.banco} onValueChange={(value: string) => updateField("banco", value)}>
                    <SelectTrigger id="banco">
                      <SelectValue placeholder="Select bank" />
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
                      <SelectItem value="otro">Other</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="tipoCuenta">
                    Account Type *
                  </Label>
                  <Select value={formData.tipoCuenta} onValueChange={(value: string) => updateField("tipoCuenta", value)}>
                    <SelectTrigger id="tipoCuenta">
                      <SelectValue placeholder="Select type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="ahorros">Savings</SelectItem>
                      <SelectItem value="corriente">Checking</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="numeroCuenta">
                  Account Number *
                </Label>
                <Input
                  id="numeroCuenta"
                  type="text"
                  value={formData.numeroCuenta}
                  onChange={(e) => updateField("numeroCuenta", e.target.value)}
                  placeholder="0000-0000-0000"
                />
                <p className="text-xs text-muted-foreground">
                  Account where disbursements will be deposited
                </p>
              </div>

              <div className="space-y-2">
                <Label htmlFor="titularCuenta">
                  Account Holder *
                </Label>
                <Input
                  id="titularCuenta"
                  type="text"
                  value={formData.titularCuenta}
                  onChange={(e) => updateField("titularCuenta", e.target.value)}
                  placeholder="Account holder name"
                />
                <p className="text-xs text-muted-foreground">
                  Must match the company's legal name
                </p>
              </div>

              <Alert className="border-blue-500/50 bg-blue-500/5">
                <Clock className="h-4 w-4 text-blue-500" />
                <AlertDescription className="text-sm">
                  <strong>24-hour disbursements:</strong> Once your application is approved, 
                  funds will be transferred to this bank account.
                </AlertDescription>
              </Alert>
            </div>
          )}

          {/* STEP 4: Document Verification */}
          {currentStep === 4 && (
            <div className="space-y-6">
              <Alert className="border-primary/50 bg-primary/5">
                <FileCheck className="h-4 w-4 text-primary" />
                <AlertDescription className="text-sm">
                  Upload documents in PDF or JPG format (maximum 5 MB per file)
                </AlertDescription>
              </Alert>

              <div className="space-y-4">
                {/* RUT */}
                <Card className="p-4">
                  <div className="flex items-center justify-between mb-2">
                    <Label htmlFor="rutArchivo" className="font-medium">
                      RUT (Tax Registry Number) *
                    </Label>
                    {formData.rutArchivo && (
                      <Badge variant="default" className="bg-green-500">
                        <CheckCircle2 className="h-3 w-3 mr-1" />
                        Uploaded
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

                {/* Chamber of Commerce */}
                <Card className="p-4">
                  <div className="flex items-center justify-between mb-2">
                    <Label htmlFor="camaraComercio" className="font-semibold">
                      Chamber of Commerce Certificate (validity &lt; 30 days) *
                    </Label>
                    {formData.camaraComercio && (
                      <Badge variant="default" className="bg-green-500">
                        <CheckCircle2 className="h-3 w-3 mr-1" />
                        Uploaded
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

                {/* Financial Statements */}
                <Card className="p-4">
                  <div className="flex items-center justify-between mb-2">
                    <Label htmlFor="estadosFinancieros" className="font-semibold">
                      Financial Statements (last year) *
                    </Label>
                    {formData.estadosFinancieros && (
                      <Badge variant="default" className="bg-green-500">
                        <CheckCircle2 className="h-3 w-3 mr-1" />
                        Uploaded
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

                {/* Legal Representative's ID */}
                <Card className="p-4">
                  <div className="flex items-center justify-between mb-2">
                    <Label htmlFor="cedulaRepresentante" className="font-medium">
                      Legal Representative's ID *
                    </Label>
                    {formData.cedulaRepresentante && (
                      <Badge variant="default" className="bg-green-500">
                        <CheckCircle2 className="h-3 w-3 mr-1" />
                        Uploaded
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

          {/* STEP 5: Terms & Conditions */}
          {currentStep === 5 && (
            <div className="space-y-6">
              <Alert className="border-green-500/50 bg-green-500/5">
                <CheckCircle2 className="h-4 w-4 text-green-500" />
                <AlertDescription className="text-sm">
                  <strong>Almost done!</strong> Review and accept the terms to complete your registration.
                </AlertDescription>
              </Alert>

              {/* Registration summary */}
              <Card className="p-4 bg-muted/30">
                <h4 className="font-semibold mb-3">Registration Summary</h4>
                <div className="space-y-2 text-sm">
                  <div className="flex items-center justify-between py-2 border-b">
                    <span className="text-muted-foreground">Company</span>
                    <span className="font-medium">{formData.razonSocial || "Not specified"}</span>
                  </div>
                  <div className="flex items-center justify-between py-2 border-b">
                    <span className="text-muted-foreground">NIT</span>
                    <span className="font-medium">{formData.nit || "Not specified"}</span>
                  </div>
                  <div className="flex items-center justify-between py-2 border-b">
                    <span className="text-muted-foreground">Legal Representative</span>
                    <span className="font-medium">{formData.representanteLegal || "Not specified"}</span>
                  </div>
                  <div className="flex items-center justify-between py-2 border-b">
                    <span className="text-muted-foreground">Email</span>
                    <span className="font-medium">{formData.emailCorporativo || "Not specified"}</span>
                  </div>
                  <div className="flex items-center justify-between py-2">
                    <span className="text-muted-foreground">Bank Account</span>
                    <span className="font-medium">{formData.banco || "Not specified"} - {formData.numeroCuenta || "Not specified"}</span>
                  </div>
                </div>
              </Card>

              <Separator />

              {/* Terms */}
              <div className="space-y-4">
                <div className="flex items-start gap-3 p-4 border rounded-lg">
                  <Checkbox
                    id="aceptaContrato"
                    checked={formData.aceptaContrato}
                    onCheckedChange={(checked: boolean | "indeterminate") => updateField("aceptaContrato", checked)}
                  />
                  <div className="flex-1">
                    <Label htmlFor="aceptaContrato" className="cursor-pointer font-semibold">
                      I Accept the Factoring Contract *
                    </Label>
                    <p className="text-sm text-muted-foreground mt-1">
                      I have read and accept the terms of the invoice assignment contract. 
                      <Button variant="link" className="h-auto p-0 ml-1">
                        View full contract
                      </Button>
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-4 border rounded-lg">
                  <Checkbox
                    id="aceptaDatos"
                    checked={formData.aceptaDatos}
                    onCheckedChange={(checked: boolean | "indeterminate") => updateField("aceptaDatos", checked)}
                  />
                  <div className="flex-1">
                    <Label htmlFor="aceptaDatos" className="cursor-pointer font-medium">
                      I Authorize Personal Data Processing *
                    </Label>
                    <p className="text-sm text-muted-foreground mt-1">
                      I authorize C-Financia for the processing of my personal data in accordance with Law 1581 of 2012.
                      <Button variant="link" className="h-auto p-0 ml-1">
                        View privacy policy
                      </Button>
                    </p>
                  </div>
                </div>
              </div>

              <Alert className="border-blue-500/50 bg-blue-500/5">
                <Shield className="h-4 w-4 text-blue-500" />
                <AlertDescription className="text-sm">
                  <strong>Data protection:</strong> Your data is protected with bank-grade encryption. 
                  C-Financia complies with all data protection regulations.
                </AlertDescription>
              </Alert>
            </div>
          )}
        </CardContent>

        {/* Footer with navigation buttons */}
        <CardFooter className="flex justify-between gap-4">
          <Button
            variant="outline"
            onClick={handlePrevious}
            disabled={currentStep === 1}
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Previous
          </Button>

          <div className="flex gap-2">
            {currentStep < totalSteps && (
              <Button
                onClick={handleNext}
                disabled={!canProceed()}
              >
                Next
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
                Complete Registration
              </Button>
            )}
          </div>
        </CardFooter>
      </Card>

      {/* Help & support */}
      <Card className="elevation-1">
        <CardContent className="pt-6">
          <div className="flex items-start gap-3">
            <Info className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
            <div>
              <h4 className="font-semibold mb-1">Need help?</h4>
              <p className="text-sm text-muted-foreground mb-2">
                Our team is available to assist you throughout the registration process.
              </p>
              <div className="flex gap-4 text-sm">
                <div className="flex items-center gap-1">
                  <Phone className="h-4 w-4 text-primary" />
                  <span>+57 601 123 4567</span>
                </div>
                <div className="flex items-center gap-1">
                  <Mail className="h-4 w-4 text-primary" />
                  <span>support@c-financia.com</span>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}