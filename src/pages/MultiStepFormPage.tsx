import React, { useState } from "react";
import { Card } from "../components/ui/card";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { Label } from "../components/ui/label";
import { Badge } from "../components/ui/badge";
import { Alert, AlertDescription } from "../components/ui/alert";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "../components/ui/table";
import { Progress } from "../components/ui/progress";
import { Checkbox } from "../components/ui/checkbox";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "../components/ui/dialog";
import { Upload, FileText, Pencil, Trash2, Plus, CheckCircle2, AlertCircle, Search, Building2, FileCheck, Users, Lock, Loader2, Info, Eye, HelpCircle, Wallet, ShieldAlert } from "lucide-react";
import { StepIndicator, Step } from "../components/advanced/StepIndicator";
import { Textarea } from "../components/ui/textarea";
import { Switch } from "../components/ui/switch";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "../components/ui/tooltip";

// Tipos
interface Cliente {
  id: string;
  nombre: string;
  nit: string;
  contacto: string;
  email: string;
  telefono: string;
}

interface Documento {
  id: string;
  nombre: string;
  categoria: string;
  archivo: File | null;
  requerido: boolean;
  tipo: string;
  maxSize: number;
  progress: number;
  uploaded: boolean;
  ayuda?: string;
}

interface FormData {
  // Documentos
  documentos: Documento[];
  passwordPDF?: string;
  
  // Datos extraídos automáticamente (Paso 2)
  razonSocial: string;
  nit: string;
  fechaConstitucion: string;
  direccion: string;
  actividadEconomica: string;
  municipio: string;
  nombreRepresentante: string;
  cedulaRepresentante: string;
  cargoRepresentante: string;
  nombreBanco: string;
  tipoCuenta: string;
  numeroCuenta: string;
  
  // Datos de contacto (a completar en Paso 2)
  telefonoContacto: string;
  correoContacto: string;
  
  // Clientes (Paso 3)
  clientes: Cliente[];
  
  // Declaraciones (Paso 3)
  obligacionesVencidas: boolean;
  insolvencia: boolean;
  registradaPais: boolean;
  cumpleRegulaciones: boolean;
  actividadesIlegales: boolean;
  esPEP: boolean;
  investigacionesJudiciales: boolean;
  sancionada: boolean;
  politicasSarlaft: boolean;
  infoVeraz: boolean;
  actualizarInfo: boolean;
  aceptaPolitica: boolean;
  autorizaConsulta: boolean;
}

export function MultiStepFormPage() {
  const [currentStep, setCurrentStep] = useState(1);
  const [isProcessing, setIsProcessing] = useState(false);
  const [dataExtracted, setDataExtracted] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [transactionId, setTransactionId] = useState("");
  
  const [formData, setFormData] = useState<Partial<FormData>>({
    documentos: [
      // Información de la Empresa
      { id: "1", nombre: "RUT (Registro Único Tributario)", categoria: "empresa", archivo: null, requerido: true, tipo: "PDF", maxSize: 5, progress: 0, uploaded: false },
      { id: "2", nombre: "Certificado Cámara de Comercio", categoria: "empresa", archivo: null, requerido: true, tipo: "PDF", maxSize: 5, progress: 0, uploaded: false, ayuda: "No mayor a 30 días" },
      { id: "3", nombre: "Cédula del Representante Legal", categoria: "empresa", archivo: null, requerido: true, tipo: "PDF/JPG", maxSize: 5, progress: 0, uploaded: false },
      
      // Información Bancaria
      { id: "4", nombre: "Estado de Cuenta Bancario", categoria: "bancaria", archivo: null, requerido: true, tipo: "PDF", maxSize: 5, progress: 0, uploaded: false, ayuda: "Puede estar protegido con contraseña." },
      
      // Información Financiera
      { id: "5", nombre: "Estado de Cuenta DIAN", categoria: "financiera", archivo: null, requerido: true, tipo: "PDF", maxSize: 5, progress: 0, uploaded: false },
      { id: "6", nombre: "Estados Financieros 2024", categoria: "financiera", archivo: null, requerido: true, tipo: "PDF/Excel", maxSize: 10, progress: 0, uploaded: false },
      { id: "7", nombre: "Estados Financieros 2025", categoria: "financiera", archivo: null, requerido: false, tipo: "PDF/Excel", maxSize: 10, progress: 0, uploaded: false, ayuda: "Opcional" },
      
      // Documentos Opcionales
      { id: "8", nombre: "Composición Accionaria", categoria: "opcional", archivo: null, requerido: false, tipo: "PDF", maxSize: 5, progress: 0, uploaded: false, ayuda: "Puedes subirlo después si no lo tienes" },
    ],
    clientes: [],
    // Declaraciones por defecto
    obligacionesVencidas: false,
    insolvencia: false,
    registradaPais: true,
    cumpleRegulaciones: true,
    actividadesIlegales: false,
    esPEP: false,
    investigacionesJudiciales: false,
    sancionada: false,
    politicasSarlaft: true,
    infoVeraz: false,
    actualizarInfo: false,
    aceptaPolitica: false,
    autorizaConsulta: false,
  });

  // Cliente actual (para agregar/editar)
  const [clienteActual, setClienteActual] = useState<Cliente | null>(null);
  const [mostrarFormCliente, setMostrarFormCliente] = useState(false);

  const totalSteps = 3;

  const steps: Step[] = [
    { 
      id: "carga-documentos",
      title: "Carga de Documentos", 
      description: "Sube todos los documentos",
      icon: <Upload className="h-5 w-5" />
    },
    { 
      id: "validacion-datos",
      title: "Validación de Datos", 
      description: "Revisa y completa información",
      icon: <FileCheck className="h-5 w-5" />
    },
    { 
      id: "clientes-declaraciones",
      title: "Clientes", 
      description: "Agrega clientes y declaraciones",
      icon: <Users className="h-5 w-5" />
    },
  ];

  const handleNext = async () => {
    // Si estamos en paso 1 y tenemos documentos obligatorios cargados, procesar
    if (currentStep === 1) {
      const docsObligatorios = formData.documentos?.filter(d => d.requerido) || [];
      const todosSubidos = docsObligatorios.every(d => d.uploaded);
      
      if (!todosSubidos) {
        alert("Por favor sube todos los documentos obligatorios antes de continuar.");
        return;
      }
      
      // Simular procesamiento de documentos
      setIsProcessing(true);
      await new Promise(resolve => setTimeout(resolve, 2500));
      
      // Simular extracción de datos
      setFormData({
        ...formData,
        razonSocial: "Acme Corporation SAS",
        nit: "900123456-7",
        fechaConstitucion: "15/03/2020",
        direccion: "Carrera 7 #100-50, Bogotá",
        actividadEconomica: "Servicios Financieros",
        municipio: "Bogotá",
        nombreRepresentante: "Juan Carlos García López",
        cedulaRepresentante: "1234567890",
        cargoRepresentante: "Gerente General",
        nombreBanco: "Bancolombia",
        tipoCuenta: "Ahorros",
        numeroCuenta: "1234567890",
      });
      
      setDataExtracted(true);
      setIsProcessing(false);
    }
    
    setCurrentStep((prev) => Math.min(prev + 1, totalSteps));
  };

  const handleBack = () => {
    setCurrentStep((prev) => Math.max(prev - 1, 1));
  };

  const handleFileUpload = (documentoId: string, file: File) => {
    const doc = formData.documentos?.find(d => d.id === documentoId);
    if (!doc) return;

    // Validar tamaño
    if (file.size > doc.maxSize * 1024 * 1024) {
      alert(`El archivo excede el tamaño máximo de ${doc.maxSize}MB`);
      return;
    }

    // Simular carga con progress
    setFormData({
      ...formData,
      documentos: formData.documentos?.map(d =>
        d.id === documentoId
          ? { ...d, archivo: file, progress: 0 }
          : d
      ) || [],
    });

    // Simular progreso
    let progress = 0;
    const interval = setInterval(() => {
      progress += 15;
      if (progress >= 100) {
        clearInterval(interval);
        setFormData(prev => ({
          ...prev,
          documentos: prev.documentos?.map(d =>
            d.id === documentoId
              ? { ...d, progress: 100, uploaded: true }
              : d
          ) || [],
        }));
      } else {
        setFormData(prev => ({
          ...prev,
          documentos: prev.documentos?.map(d =>
            d.id === documentoId
              ? { ...d, progress }
              : d
          ) || [],
        }));
      }
    }, 150);
  };

  const handleEliminarDocumento = (documentoId: string) => {
    setFormData({
      ...formData,
      documentos: formData.documentos?.map(d =>
        d.id === documentoId
          ? { ...d, archivo: null, progress: 0, uploaded: false }
          : d
      ) || [],
    });
  };

  const handleAgregarCliente = (cliente: Omit<Cliente, "id">) => {
    const nuevoCliente: Cliente = {
      ...cliente,
      id: Date.now().toString(),
    };
    setFormData({
      ...formData,
      clientes: [...(formData.clientes || []), nuevoCliente],
    });
    setMostrarFormCliente(false);
    setClienteActual(null);
  };

  const handleEditarCliente = (id: string) => {
    const cliente = formData.clientes?.find(c => c.id === id);
    if (cliente) {
      setClienteActual(cliente);
      setMostrarFormCliente(true);
    }
  };

  const handleEliminarCliente = (id: string) => {
    setFormData({
      ...formData,
      clientes: formData.clientes?.filter(c => c.id !== id) || [],
    });
  };

  const handleSubmit = () => {
    // Validar declaraciones obligatorias
    if (!formData.infoVeraz || !formData.actualizarInfo || !formData.aceptaPolitica || !formData.autorizaConsulta) {
      alert("Por favor acepta todas las declaraciones obligatorias.");
      return;
    }

    // Generar ID de transacción
    const txId = `CFN-${Date.now().toString().slice(-8)}`;
    setTransactionId(txId);
    
    // Simular envío
    setTimeout(() => {
      setShowSuccess(true);
    }, 1000);
  };

  const handleCloseSuccessModal = () => {
    setShowSuccess(false);
    setCurrentStep(1);
    setDataExtracted(false);
    setFormData({
      documentos: formData.documentos?.map(d => ({ ...d, archivo: null, progress: 0, uploaded: false })),
      clientes: [],
      obligacionesVencidas: false,
      insolvencia: false,
      registradaPais: true,
      cumpleRegulaciones: true,
      actividadesIlegales: false,
      esPEP: false,
      investigacionesJudiciales: false,
      sancionada: false,
      politicasSarlaft: true,
      infoVeraz: false,
      actualizarInfo: false,
      aceptaPolitica: false,
      autorizaConsulta: false,
    });
  };

  const docsObligatorios = formData.documentos?.filter(d => d.requerido) || [];
  const docsObligatoriosSubidos = docsObligatorios.filter(d => d.uploaded).length;

  return (
    <div className="min-h-screen p-4 md:p-8">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="mb-8">
        </div>

        {/* Stepper - Componente oficial del DSM */}
        <div className="mb-8">
          <StepIndicator
            steps={steps}
            currentStep={currentStep - 1}
            orientation="horizontal"
            variant="default"
            showProgress={true}
            showLabels={true}
            clickable={true}
            onStepClick={(index) => setCurrentStep(index + 1)}
          />
        </div>

        {/* Procesando Documentos */}
        {isProcessing && (
          <Card className="p-8 mb-8">
            <div className="flex flex-col items-center justify-center space-y-4">
              <Loader2 className="h-12 w-12 text-primary animate-spin" />
              <div className="text-center">
                <h3 className="text-lg font-semibold mb-2">Procesando Documentos...</h3>
                <p className="text-sm text-muted-foreground">
                  Estamos extrayendo información de tus documentos
                </p>
                <p className="text-xs text-muted-foreground mt-1">
                  ⏱️ Tiempo estimado: 30-45 segundos
                </p>
              </div>
              <Progress value={66} className="w-full max-w-md" />
            </div>
          </Card>
        )}

        {/* Form Card */}
        {!isProcessing && (
          <Card className="p-6 md:p-8">
            <div className="mb-6">
              <h2 className="text-2xl mb-2 font-semibold">{steps[currentStep - 1].title}</h2>
              <p className="text-sm text-muted-foreground">
                {currentStep === 1 && "Por favor, adjunta los documentos requeridos para iniciar el estudio de tu solicitud."}
                {currentStep === 2 && "Verifica que la información extraída sea correcta y completa los campos faltantes."}
                {currentStep === 3 && "Registra la información de tus clientes y confirma las declaraciones finales."}
              </p>
            </div>

            <div className="transition-all duration-250">
              {/* PASO 1: Carga de Documentos */}
              {currentStep === 1 && (
                <Paso1
                  formData={formData}
                  setFormData={setFormData}
                  onFileUpload={handleFileUpload}
                  onEliminarDocumento={handleEliminarDocumento}
                  docsObligatoriosSubidos={docsObligatoriosSubidos}
                  totalDocsObligatorios={docsObligatorios.length}
                />
              )}

              {/* PASO 2: Validación de Datos */}
              {currentStep === 2 && (
                <Paso2
                  formData={formData}
                  setFormData={setFormData}
                />
              )}

              {/* PASO 3: Clientes y Declaraciones */}
              {currentStep === 3 && (
                <Paso3
                  formData={formData}
                  setFormData={setFormData}
                  mostrarFormCliente={mostrarFormCliente}
                  setMostrarFormCliente={setMostrarFormCliente}
                  clienteActual={clienteActual}
                  setClienteActual={setClienteActual}
                  onAgregarCliente={handleAgregarCliente}
                  onEditarCliente={handleEditarCliente}
                  onEliminarCliente={handleEliminarCliente}
                />
              )}
            </div>

            {/* Buttons */}
            <div className="flex gap-4 mt-8 pt-6 border-t border-border">
              {currentStep > 1 && (
                <Button
                  variant="outline"
                  onClick={handleBack}
                >
                  Atrás
                </Button>
              )}
              
              <Button
                variant="outline"
                onClick={() => {
                  if (confirm("¿Está seguro de cancelar el formulario?")) {
                    handleCloseSuccessModal();
                  }
                }}
              >
                Cancelar
              </Button>

              <div className="flex-1" />

              {currentStep < totalSteps ? (
                <Button
                  className="bg-primary text-primary-foreground hover:bg-primary/90"
                  onClick={handleNext}
                >
                  {currentStep === 1 ? "Procesar Documentos y Continuar" : "Continuar"}
                </Button>
              ) : (
                <Button
                  className="bg-primary text-primary-foreground hover:bg-primary/90"
                  onClick={handleSubmit}
                >
                  Enviar Formulario ✓
                </Button>
              )}
            </div>
          </Card>
        )}

        {/* Modal de Éxito */}
        <Dialog open={showSuccess} onOpenChange={setShowSuccess}>
          <DialogContent className="sm:max-w-md">
            <DialogHeader>
              <div className="flex justify-center mb-4">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center">
                  <CheckCircle2 className="w-10 h-10 text-primary" />
                </div>
              </div>
              <DialogTitle className="text-center text-2xl">
                ¡Proceso Finalizado Exitosamente!
              </DialogTitle>
              <DialogDescription className="text-center space-y-4 pt-4" asChild>
                <div>
                  <p className="text-muted-foreground">
                    Tu solicitud de factoring ha sido recibida correctamente y está siendo procesada.
                  </p>
                  
                  <div className="bg-muted p-4 rounded-lg">
                    <p className="text-xs text-muted-foreground mb-1">Número de referencia:</p>
                    <p className="font-semibold text-primary">{transactionId}</p>
                  </div>

                  <div className="bg-yellow-50 border border-yellow-200 p-4 rounded-lg text-left dark:bg-yellow-900/20 dark:border-yellow-800">
                    <p className="text-sm text-yellow-800 dark:text-yellow-200 mb-2">
                      <strong>Próximos pasos:</strong>
                    </p>
                    <ul className="text-xs text-yellow-800 dark:text-yellow-200 space-y-1 list-disc list-inside">
                      <li>Recibirás un correo de confirmación en las próximas horas</li>
                      <li>Nuestro equipo revisará tu solicitud en 2-3 días hábiles</li>
                      <li>Serás contactado para confirmar la activación de tu cuenta</li>
                      <li>Te notificaremos cualquier documento adicional requerido</li>
                    </ul>
                  </div>

                  <p className="text-xs text-muted-foreground">
                    Si tienes alguna pregunta, no dudes en contactarnos.
                  </p>
                </div>
              </DialogDescription>
            </DialogHeader>
            <div className="flex flex-col gap-3 mt-4">
              <Button
                className="w-full bg-primary text-primary-foreground hover:bg-primary/90"
                onClick={handleCloseSuccessModal}
              >
                Entendido
              </Button>
              <Button
                variant="outline"
                onClick={() => window.print()}
                className="w-full"
              >
                Descargar Comprobante
              </Button>
            </div>
          </DialogContent>
        </Dialog>
      </div>
    </div>
  );
}

// ========== PASO 1: CARGA DE DOCUMENTOS ==========
function Paso1({
  formData,
  setFormData,
  onFileUpload,
  onEliminarDocumento,
  docsObligatoriosSubidos,
  totalDocsObligatorios,
}: {
  formData: Partial<FormData>;
  setFormData: (data: Partial<FormData>) => void;
  onFileUpload: (documentoId: string, file: File) => void;
  onEliminarDocumento: (documentoId: string) => void;
  docsObligatoriosSubidos: number;
  totalDocsObligatorios: number;
}) {
  const docsEmpresa = formData.documentos?.filter(d => d.categoria === "empresa") || [];
  const docsBancaria = formData.documentos?.filter(d => d.categoria === "bancaria") || [];
  const docsFinanciera = formData.documentos?.filter(d => d.categoria === "financiera") || [];
  const docsOpcional = formData.documentos?.filter(d => d.categoria === "opcional") || [];

  return (
    <div className="space-y-4">
      {/* Información de la Empresa */}
      <div className="space-y-3">
        <h3 className="text-sm font-semibold flex items-center gap-2 pb-2 border-b border-border">
          <Building2 className="h-4 w-4" />
          Información de la Empresa
        </h3>
        <div className="space-y-2">
          {docsEmpresa.map((doc, index) => (
            <DocumentoUpload
              key={doc.id}
              documento={doc}
              index={index + 1}
              onUpload={onFileUpload}
              onEliminar={onEliminarDocumento}
            />
          ))}
        </div>
      </div>

      {/* Información Bancaria */}
      <div className="space-y-3">
        <h3 className="text-sm font-semibold flex items-center gap-2 pb-2 border-b border-border">
          <FileCheck className="h-4 w-4" />
          Información Bancaria
        </h3>
        <div className="space-y-2">
          {docsBancaria.map((doc, index) => (
            <DocumentoUpload
              key={doc.id}
              documento={doc}
              index={docsEmpresa.length + index + 1}
              onUpload={onFileUpload}
              onEliminar={onEliminarDocumento}
              headerContent={doc.id === "4" ? (
                <div className="relative w-56 ml-2">
                  <Lock className="absolute left-2.5 top-1/2 -translate-y-1/2 h-3.5 w-3.5 text-muted-foreground" />
                  <Input
                    type="password"
                    placeholder="Contraseña PDF"
                    value={formData.passwordPDF || ""}
                    onChange={(e) => setFormData({ ...formData, passwordPDF: e.target.value })}
                    className="h-8 pl-8 text-xs"
                  />
                </div>
              ) : undefined}
            />
          ))}
        </div>
      </div>

      {/* Información Financiera */}
      <div className="space-y-3">
        <h3 className="text-sm font-semibold flex items-center gap-2 pb-2 border-b border-border">
          <FileText className="h-4 w-4" />
          Información Financiera
        </h3>
        <div className="space-y-2">
          {docsFinanciera.map((doc, index) => (
            <DocumentoUpload
              key={doc.id}
              documento={doc}
              index={docsEmpresa.length + docsBancaria.length + index + 1}
              onUpload={onFileUpload}
              onEliminar={onEliminarDocumento}
            />
          ))}
        </div>
      </div>

      {/* Documentos Opcionales */}
      <div className="space-y-3">
        <h3 className="text-sm font-semibold flex items-center gap-2 pb-2 border-b border-border">
          <FileText className="h-4 w-4" />
          Documentos Opcionales
        </h3>
        <div className="space-y-2">
          {docsOpcional.map((doc, index) => (
            <DocumentoUpload
              key={doc.id}
              documento={doc}
              index={docsEmpresa.length + docsBancaria.length + docsFinanciera.length + index + 1}
              onUpload={onFileUpload}
              onEliminar={onEliminarDocumento}
            />
          ))}
        </div>
      </div>

      {/* Contador de progreso */}
      <Alert className={`${docsObligatoriosSubidos === totalDocsObligatorios ? 'bg-green-50 border-green-200 dark:bg-green-900/20 dark:border-green-800' : 'bg-muted border-border'}`}>
        <CheckCircle2 className={`h-4 w-4 ${docsObligatoriosSubidos === totalDocsObligatorios ? 'text-green-600 dark:text-green-400' : 'text-muted-foreground'}`} />
        <AlertDescription className="text-sm">
          <strong>{docsObligatoriosSubidos} de {totalDocsObligatorios} documentos obligatorios cargados</strong>
          {docsObligatoriosSubidos === totalDocsObligatorios && (
            <span className="text-xs ml-2 text-muted-foreground">
              Procesamiento estimado: 30-45 segundos
            </span>
          )}
        </AlertDescription>
      </Alert>
    </div>
  );
}

// Componente para subir documento individual
function DocumentoUpload({
  documento,
  index,
  onUpload,
  onEliminar,
  children,
  headerContent,
}: {
  documento: Documento;
  index: number;
  onUpload: (docId: string, file: File) => void;
  onEliminar: (docId: string) => void;
  children?: React.ReactNode;
  headerContent?: React.ReactNode;
}) {
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      onUpload(documento.id, file);
    }
  };

  const handleViewFile = () => {
    if (documento.archivo) {
      const url = URL.createObjectURL(documento.archivo);
      window.open(url, '_blank');
    }
  };

  return (
    <div className="border border-border rounded-lg p-3 hover:border-primary/50 transition-colors">
      <div className="flex items-center justify-between gap-3">
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2 flex-wrap">
            <span className="text-sm font-medium">
              {index}. {documento.nombre} {documento.requerido && <span className="text-destructive">*</span>}
            </span>
            {documento.uploaded && (
              <Badge variant="default" className="bg-green-600 hover:bg-green-700 text-white text-xs">
                ✓ Subido
              </Badge>
            )}
            <span className="text-xs text-muted-foreground">
              • {documento.tipo} • Max. {documento.maxSize}MB
              {documento.ayuda && ` • ${documento.ayuda}`}
            </span>
            {headerContent}
          </div>
          
          {documento.progress > 0 && documento.progress < 100 && (
            <div className="mt-2">
              <Progress value={documento.progress} className="h-2" />
              <p className="text-xs text-muted-foreground mt-1">{documento.progress}%</p>
            </div>
          )}
          
          {documento.uploaded && documento.archivo && (
            <div className="flex items-center gap-2 mt-2">
              <FileText className="h-3 w-3 text-primary" />
              <span className="text-xs text-muted-foreground">{documento.archivo.name}</span>
            </div>
          )}
        </div>
        
        <div className="flex gap-2 flex-shrink-0">
          {!documento.uploaded ? (
            <label>
              <input
                type="file"
                accept={documento.tipo === "PDF" ? ".pdf" : documento.tipo === "PDF/JPG" ? ".pdf,.jpg,.jpeg" : documento.tipo === "PDF/Excel" ? ".pdf,.xlsx,.xls" : "*"}
                onChange={handleFileChange}
                className="hidden"
              />
              <Button size="sm" variant="outline" asChild>
                <span className="cursor-pointer">
                  <Upload className="h-4 w-4 mr-1" />
                  Subir
                </span>
              </Button>
            </label>
          ) : (
            <>
              <Button
                size="sm"
                variant="outline"
                onClick={handleViewFile}
              >
                <Eye className="h-4 w-4 mr-1" />
                Ver
              </Button>
              <Button
                size="sm"
                variant="outline"
                onClick={() => onEliminar(documento.id)}
                className="text-destructive hover:text-destructive"
              >
                Eliminar
              </Button>
            </>
          )}
        </div>
      </div>
      {children}
    </div>
  );
}

// ========== PASO 2: VALIDACIÓN Y COMPLETAR DATOS ==========
function Paso2({
  formData,
  setFormData,
}: {
  formData: Partial<FormData>;
  setFormData: (data: Partial<FormData>) => void;
}) {
  return (
    <div className="space-y-4">
      {/* Header */}
      <Alert className="bg-green-50 border-green-200 dark:bg-green-900/20 dark:border-green-800">
        <CheckCircle2 className="h-4 w-4 text-green-600 dark:text-green-400" />
        <AlertDescription className="text-sm text-green-800 dark:text-green-200">
          <strong>Datos Extraídos Automáticamente</strong> - Verifica la información. Haz clic en cualquier campo para editarlo.
        </AlertDescription>
      </Alert>

      {/* Información de la Empresa */}
      <div className="space-y-3">
        <h3 className="text-sm font-semibold pb-2 border-b border-border flex items-center gap-2">
          <Building2 className="h-4 w-4" />
          Información de la Empresa
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          <DatoExtraido
            label="Razón Social"
            value={formData.razonSocial || ""}
            onChange={(val) => setFormData({ ...formData, razonSocial: val })}
          />
          <DatoExtraido
            label="NIT"
            value={formData.nit || ""}
            onChange={(val) => setFormData({ ...formData, nit: val })}
          />
          <DatoExtraido
            label="Fecha Constitución"
            value={formData.fechaConstitucion || ""}
            onChange={(val) => setFormData({ ...formData, fechaConstitucion: val })}
          />
          <DatoExtraido
            label="Municipio"
            value={formData.municipio || ""}
            onChange={(val) => setFormData({ ...formData, municipio: val })}
          />
          <div className="md:col-span-2">
            <DatoExtraido
              label="Dirección"
              value={formData.direccion || ""}
              onChange={(val) => setFormData({ ...formData, direccion: val })}
            />
          </div>
          <div className="md:col-span-2">
            <DatoExtraido
              label="Actividad Económica"
              value={formData.actividadEconomica || ""}
              onChange={(val) => setFormData({ ...formData, actividadEconomica: val })}
            />
          </div>
        </div>
      </div>

      {/* Representante Legal */}
      <div className="space-y-3">
        <h3 className="text-sm font-semibold pb-2 border-b border-border flex items-center gap-2">
          <Users className="h-4 w-4" />
          Representante Legal
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          <div className="md:col-span-2">
            <DatoExtraido
              label="Nombre Completo"
              value={formData.nombreRepresentante || ""}
              onChange={(val) => setFormData({ ...formData, nombreRepresentante: val })}
            />
          </div>
          <DatoExtraido
            label="Cédula"
            value={formData.cedulaRepresentante || ""}
            onChange={(val) => setFormData({ ...formData, cedulaRepresentante: val })}
          />
          <DatoExtraido
            label="Cargo"
            value={formData.cargoRepresentante || ""}
            onChange={(val) => setFormData({ ...formData, cargoRepresentante: val })}
          />
        </div>
      </div>

      {/* Datos Bancarios */}
      <div className="space-y-3">
        <h3 className="text-sm font-semibold pb-2 border-b border-border flex items-center gap-2">
          <FileCheck className="h-4 w-4" />
          Datos Bancarios
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
          <DatoExtraido
            label="Banco"
            value={formData.nombreBanco || ""}
            onChange={(val) => setFormData({ ...formData, nombreBanco: val })}
          />
          <DatoExtraido
            label="Tipo de Cuenta"
            value={formData.tipoCuenta || ""}
            onChange={(val) => setFormData({ ...formData, tipoCuenta: val })}
          />
          <DatoExtraido
            label="Número de Cuenta"
            value={formData.numeroCuenta || ""}
            onChange={(val) => setFormData({ ...formData, numeroCuenta: val })}
          />
        </div>
      </div>

      {/* Información Requerida */}
      <div className="space-y-3">
        
        
        <h3 className="text-sm font-semibold pb-2 border-b border-border flex items-center gap-2">
          <Info className="h-4 w-4" />
          Datos de Contacto
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          <div>
            <Label className="text-xs text-muted-foreground">
              Teléfono/Celular <span className="text-destructive">*</span>
            </Label>
            <Input
              type="tel"
              placeholder="+57 301 234 5678"
              value={formData.telefonoContacto || ""}
              onChange={(e) => setFormData({ ...formData, telefonoContacto: e.target.value })}
              className="mt-1"
            />
          </div>
          <div>
            <Label className="text-xs text-muted-foreground">
              Correo Electrónico <span className="text-destructive">*</span>
            </Label>
            <Input
              type="email"
              placeholder="contacto@empresa.com"
              value={formData.correoContacto || ""}
              onChange={(e) => setFormData({ ...formData, correoContacto: e.target.value })}
              className="mt-1"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

// Componente para mostrar dato extraído con modo lectura/edición
function DatoExtraido({
  label,
  value,
  onChange,
}: {
  label: string;
  value: string;
  onChange: (value: string) => void;
}) {
  const [isEditing, setIsEditing] = useState(false);

  return (
    <div className="group">
      <div className="flex items-center justify-between mb-1.5">
        <Label className="text-xs text-muted-foreground flex items-center gap-1.5">
          {label}
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <span>
                  <Badge variant="outline" className="text-[10px] h-4 px-1 border-green-200 bg-green-50 text-green-700 dark:bg-green-900/20 dark:border-green-800 dark:text-green-300 cursor-default">
                    Auto
                  </Badge>
                </span>
              </TooltipTrigger>
              <TooltipContent>
                <p className="text-xs">Dato extraído automáticamente</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </Label>
        
        {!isEditing && (
          <Button
            variant="ghost"
            size="sm"
            className="h-5 w-5 p-0 opacity-0 group-hover:opacity-100 transition-opacity"
            onClick={() => setIsEditing(true)}
            title="Editar campo"
          >
            <Pencil className="h-3 w-3 text-muted-foreground hover:text-primary" />
          </Button>
        )}
      </div>

      {isEditing ? (
        <div className="flex items-center gap-2">
          <Input
            value={value}
            onChange={(e) => onChange(e.target.value)}
            className="h-9 border-primary focus:ring-1 focus:ring-primary bg-background"
            autoFocus
            onBlur={() => setIsEditing(false)}
            onKeyDown={(e) => {
              if (e.key === 'Enter') setIsEditing(false);
            }}
          />
          <Button 
            variant="ghost" 
            size="sm" 
            className="h-9 w-9 p-0 hover:bg-green-50 hover:text-green-600"
            onClick={() => setIsEditing(false)}
          >
            <CheckCircle2 className="h-4 w-4" />
          </Button>
        </div>
      ) : (
        <div 
          className="h-9 px-3 py-1 flex items-center bg-muted/20 border border-transparent rounded-md text-sm cursor-pointer hover:bg-muted/50 hover:border-border transition-all truncate"
          onClick={() => setIsEditing(true)}
          title="Clic para editar"
        >
          {value || <span className="text-muted-foreground italic text-xs">Sin información</span>}
        </div>
      )}
    </div>
  );
}

// ========== PASO 3: CLIENTES Y DECLARACIONES ==========
function Paso3({
  formData,
  setFormData,
  mostrarFormCliente,
  setMostrarFormCliente,
  clienteActual,
  setClienteActual,
  onAgregarCliente,
  onEditarCliente,
  onEliminarCliente,
}: {
  formData: Partial<FormData>;
  setFormData: React.Dispatch<React.SetStateAction<Partial<FormData>>>;
  mostrarFormCliente: boolean;
  setMostrarFormCliente: (show: boolean) => void;
  clienteActual: Cliente | null;
  setClienteActual: (cliente: Cliente | null) => void;
  onAgregarCliente: (cliente: Omit<Cliente, "id">) => void;
  onEditarCliente: (id: string) => void;
  onEliminarCliente: (id: string) => void;
}) {
  const [searchTerm, setSearchTerm] = useState("");
  
  const clientesFiltrados = formData.clientes?.filter(c =>
    c.nombre.toLowerCase().includes(searchTerm.toLowerCase()) ||
    c.nit.includes(searchTerm)
  ) || [];

  return (
    <div className="space-y-6">


      {/* Barra de búsqueda y botón agregar */}
      <div className="flex gap-3 items-start relative z-10">
        <div className="flex-1 relative group">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input
            placeholder="Buscar por nombre, NIT..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="pl-10"
          />
          {/* Autocomplete Dropdown */}
          {(() => {
            const mockClientes = [
              { nombre: "Tech Solutions SAS", nit: "900.123.456-1", contacto: "Carlos Rodríguez", email: "carlos@techsolutions.com", telefono: "3101234567" },
              { nombre: "Inversiones Globales Ltda", nit: "800.987.654-3", contacto: "Ana María Pérez", email: "ana@inversiones.com", telefono: "3119876543" },
              { nombre: "Distribuidora del Norte", nit: "901.555.444-8", contacto: "Jorge Ramírez", email: "jorge@distnorte.com", telefono: "3125554448" },
              { nombre: "Constructora Andes", nit: "890.333.222-5", contacto: "Luisa Fernández", email: "luisa@andes.com", telefono: "3133332225" },
              { nombre: "Logística Rápida", nit: "900.777.888-9", contacto: "Mario Gómez", email: "mario@logistica.com", telefono: "3147778889" },
            ];
            
            const filtered = mockClientes.filter(c => 
              c.nombre.toLowerCase().includes(searchTerm.toLowerCase()) || 
              c.nit.includes(searchTerm)
            );

            if (!searchTerm || filtered.length === 0) return null;

            return (
              <div className="absolute top-full left-0 right-0 mt-1 bg-popover text-popover-foreground border rounded-md shadow-lg max-h-60 overflow-auto hidden group-focus-within:block animate-in fade-in-0 zoom-in-95 duration-200">
                <div className="p-1">
                  <div className="px-2 py-1.5 text-xs font-medium text-muted-foreground">
                    Sugerencias encontradas
                  </div>
                  {filtered.map((cliente, i) => (
                    <div
                      key={i}
                      className="relative flex cursor-pointer select-none items-center rounded-sm px-2 py-2 text-sm outline-none hover:bg-accent hover:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50"
                      onMouseDown={(e) => {
                        e.preventDefault(); // Evitar perder foco antes del click
                        onAgregarCliente(cliente);
                        setSearchTerm("");
                      }}
                    >
                      <div className="flex flex-col gap-0.5">
                        <span className="font-medium">{cliente.nombre}</span>
                        <div className="flex items-center gap-2 text-xs text-muted-foreground">
                          <span>NIT: {cliente.nit}</span>
                          <span>•</span>
                          <span>{cliente.contacto}</span>
                        </div>
                      </div>
                      <Plus className="ml-auto h-4 w-4 opacity-50" />
                    </div>
                  ))}
                </div>
              </div>
            );
          })()}
        </div>
        <Button
          onClick={() => {
            setClienteActual(null);
            setMostrarFormCliente(true);
          }}
          className="bg-primary text-primary-foreground hover:bg-primary/90"
        >
          <Plus className="h-4 w-4 mr-2" />
          Agregar Cliente
        </Button>
      </div>

      {/* Tabla de clientes */}
      {formData.clientes && formData.clientes.length > 0 ? (
        <div className="border border-border rounded-lg overflow-hidden">
          <div className="bg-muted px-4 py-2">
            <p className="text-sm font-medium">{formData.clientes.length} clientes agregados</p>
          </div>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Nombre</TableHead>
                <TableHead>NIT</TableHead>
                <TableHead>Contacto</TableHead>
                <TableHead className="text-right">Acciones</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {clientesFiltrados.map((cliente) => (
                <TableRow key={cliente.id}>
                  <TableCell className="font-medium">{cliente.nombre}</TableCell>
                  <TableCell>{cliente.nit}</TableCell>
                  <TableCell>{cliente.contacto}</TableCell>
                  <TableCell className="text-right">
                    <div className="flex justify-end gap-2">
                      <Button
                        size="sm"
                        variant="ghost"
                        onClick={() => onEditarCliente(cliente.id)}
                      >
                        <Pencil className="h-4 w-4" />
                      </Button>
                      <Button
                        size="sm"
                        variant="ghost"
                        onClick={() => {
                          if (confirm("¿Eliminar este cliente?")) {
                            onEliminarCliente(cliente.id);
                          }
                        }}
                        className="text-destructive hover:text-destructive"
                      >
                        <Trash2 className="h-4 w-4" />
                      </Button>
                    </div>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      ) : (
        <Alert>
          <AlertCircle className="h-4 w-4" />
          <AlertDescription>
            No has agregado clientes aún. Haz clic en "Agregar Cliente" para comenzar.
          </AlertDescription>
        </Alert>
      )}

      {/* Formulario de cliente */}
      {mostrarFormCliente && (
        <FormCliente
          cliente={clienteActual}
          onGuardar={onAgregarCliente}
          onCancelar={() => {
            setMostrarFormCliente(false);
            setClienteActual(null);
          }}
        />
      )}

      {/* Declaraciones */}
      <DeclaracionesSection formData={formData} setFormData={setFormData} />
    </div>
  );
}

// Formulario para agregar/editar cliente
function FormCliente({
  cliente,
  onGuardar,
  onCancelar,
}: {
  cliente: Cliente | null;
  onGuardar: (cliente: Omit<Cliente, "id">) => void;
  onCancelar: () => void;
}) {
  const [form, setForm] = useState<Omit<Cliente, "id">>({
    nombre: cliente?.nombre || "",
    nit: cliente?.nit || "",
    contacto: cliente?.contacto || "",
    email: cliente?.email || "",
    telefono: cliente?.telefono || "",
  });

  const handleSubmit = () => {
    if (!form.nombre || !form.nit || !form.contacto) {
      alert("Por favor completa los campos obligatorios");
      return;
    }
    onGuardar(form);
  };

  return (
    <Card className="p-6 border-primary/50">
      <h3 className="text-lg font-semibold mb-4">
        {cliente ? "Editar Cliente" : "Nuevo Cliente"}
      </h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="md:col-span-2">
          <Label className="text-xs text-muted-foreground">
            Nombre <span className="text-destructive">*</span>
          </Label>
          <Input
            placeholder="ABC SAS"
            value={form.nombre}
            onChange={(e) => setForm({ ...form, nombre: e.target.value })}
            className="mt-1"
          />
        </div>
        <div>
          <Label className="text-xs text-muted-foreground">
            NIT <span className="text-destructive">*</span>
          </Label>
          <Input
            placeholder="578531900-1"
            value={form.nit}
            onChange={(e) => setForm({ ...form, nit: e.target.value })}
            className="mt-1"
          />
        </div>
        <div>
          <Label className="text-xs text-muted-foreground">
            Contacto <span className="text-destructive">*</span>
          </Label>
          <Input
            placeholder="Juan García"
            value={form.contacto}
            onChange={(e) => setForm({ ...form, contacto: e.target.value })}
            className="mt-1"
          />
        </div>
        <div>
          <Label className="text-xs text-muted-foreground">Email</Label>
          <Input
            type="email"
            placeholder="contacto@cliente.com"
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
            className="mt-1"
          />
        </div>
        <div>
          <Label className="text-xs text-muted-foreground">Teléfono</Label>
          <Input
            type="tel"
            placeholder="+57 301 234 5678"
            value={form.telefono}
            onChange={(e) => setForm({ ...form, telefono: e.target.value })}
            className="mt-1"
          />
        </div>
      </div>
      <div className="flex gap-3 mt-6">
        <Button variant="outline" onClick={onCancelar}>
          Cancelar
        </Button>
        <Button
          className="bg-primary text-primary-foreground hover:bg-primary/90"
          onClick={handleSubmit}
        >
          {cliente ? "Actualizar" : "Agregar"}
        </Button>
      </div>
    </Card>
  );
}

// Sección de declaraciones
function DeclaracionesSection({ formData, setFormData }: { formData: Partial<FormData>, setFormData: React.Dispatch<React.SetStateAction<Partial<FormData>>> }) {
  return (
    <div className="space-y-8 pt-6 border-t border-border">
      <div className="flex items-center justify-between">
        <h3 className="text-lg font-semibold text-foreground">Cumplimiento y Declaraciones</h3>
        <Badge variant="outline" className="gap-1 bg-muted/50">
          <Info className="h-3 w-3" />
          <span>Información Requerida</span>
        </Badge>
      </div>

      <TooltipProvider>
        {/* Situación Financiera */}
        <div className="space-y-4">
          <h4 className="text-sm font-medium text-primary flex items-center gap-2">
            <Wallet className="h-4 w-4" />
            Situación Financiera
          </h4>
          <div className="grid gap-4 md:grid-cols-2">
            <div className="flex flex-row items-center justify-between rounded-lg border p-4 shadow-sm bg-card hover:bg-accent/5 transition-colors">
              <div className="space-y-0.5">
                <Label htmlFor="obligaciones" className="text-base font-medium">Obligaciones Vencidas</Label>
                <p className="text-xs text-muted-foreground">
                  ¿Presenta obligaciones financieras vencidas?
                </p>
              </div>
              <Switch
                id="obligaciones"
                checked={formData.obligacionesVencidas || false}
                onCheckedChange={(checked) => setFormData(prev => ({ ...prev, obligacionesVencidas: checked }))}
              />
            </div>
            <div className="flex flex-row items-center justify-between rounded-lg border p-4 shadow-sm bg-card hover:bg-accent/5 transition-colors">
              <div className="space-y-0.5">
                <Label htmlFor="insolvencia" className="text-base font-medium">Insolvencia</Label>
                <p className="text-xs text-muted-foreground">
                  ¿Proceso de insolvencia o reorganización?
                </p>
              </div>
              <Switch
                id="insolvencia"
                checked={formData.insolvencia || false}
                onCheckedChange={(checked) => setFormData(prev => ({ ...prev, insolvencia: checked }))}
              />
            </div>
          </div>
        </div>

        {/* Cumplimiento Legal */}
        <div className="space-y-4">
          <h4 className="text-sm font-medium text-primary flex items-center gap-2">
            <ShieldAlert className="h-4 w-4" />
            Cumplimiento Legal
          </h4>
          <div className="grid gap-4 md:grid-cols-2">
            {/* Empresa Registrada */}
            <div className="flex flex-row items-center justify-between rounded-lg border p-4 hover:bg-accent/5 transition-colors">
              <div className="space-y-0.5">
                <Label htmlFor="registrada" className="font-medium">Empresa Registrada</Label>
                <p className="text-xs text-muted-foreground">Matrícula mercantil vigente</p>
              </div>
              <Switch
                id="registrada"
                checked={formData.registradaPais || false}
                onCheckedChange={(checked) => setFormData(prev => ({ ...prev, registradaPais: checked }))}
              />
            </div>

            {/* Regulaciones */}
            <div className="flex flex-row items-center justify-between rounded-lg border p-4 hover:bg-accent/5 transition-colors">
              <div className="space-y-0.5">
                <Label htmlFor="regulaciones" className="font-medium">Cumplimiento Normativo</Label>
                <p className="text-xs text-muted-foreground">Cumple regulaciones locales</p>
              </div>
              <Switch
                id="regulaciones"
                checked={formData.cumpleRegulaciones || false}
                onCheckedChange={(checked) => setFormData(prev => ({ ...prev, cumpleRegulaciones: checked }))}
              />
            </div>

            {/* Actividades Ilegales */}
            <div className="flex flex-row items-center justify-between rounded-lg border p-4 hover:bg-accent/5 transition-colors">
              <div className="space-y-0.5">
                <Label htmlFor="ilegales" className="font-medium text-destructive">Actividades Ilícitas</Label>
                <p className="text-xs text-muted-foreground">¿Realiza actividades ilegales?</p>
              </div>
              <Switch
                id="ilegales"
                checked={formData.actividadesIlegales || false}
                onCheckedChange={(checked) => setFormData(prev => ({ ...prev, actividadesIlegales: checked }))}
              />
            </div>

            {/* PEP */}
            <div className="flex flex-row items-center justify-between rounded-lg border p-4 hover:bg-accent/5 transition-colors">
              <div className="space-y-0.5">
                <div className="flex items-center gap-2">
                  <Label htmlFor="pep" className="font-medium">Personas PEP</Label>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <HelpCircle className="h-3 w-3 text-muted-foreground cursor-help" />
                    </TooltipTrigger>
                    <TooltipContent>
                      <p className="max-w-xs text-xs">Personas Expuestas Políticamente (Decreto 1674 de 2016)</p>
                    </TooltipContent>
                  </Tooltip>
                </div>
                <p className="text-xs text-muted-foreground">¿Directivos expuestos políticamente?</p>
              </div>
              <Switch
                id="pep"
                checked={formData.esPEP || false}
                onCheckedChange={(checked) => setFormData(prev => ({ ...prev, esPEP: checked }))}
              />
            </div>

            {/* Judiciales */}
            <div className="flex flex-row items-center justify-between rounded-lg border p-4 hover:bg-accent/5 transition-colors">
              <div className="space-y-0.5">
                <Label htmlFor="judiciales" className="font-medium">Vinculaciones Judiciales</Label>
                <p className="text-xs text-muted-foreground">¿Investigaciones activas?</p>
              </div>
              <Switch
                id="judiciales"
                checked={formData.investigacionesJudiciales || false}
                onCheckedChange={(checked) => setFormData(prev => ({ ...prev, investigacionesJudiciales: checked }))}
              />
            </div>

            {/* Sanciones */}
            <div className="flex flex-row items-center justify-between rounded-lg border p-4 hover:bg-accent/5 transition-colors">
              <div className="space-y-0.5">
                <Label htmlFor="sancionada" className="font-medium">Sanciones</Label>
                <p className="text-xs text-muted-foreground">Tributarias o laborales</p>
              </div>
              <Switch
                id="sancionada"
                checked={formData.sancionada || false}
                onCheckedChange={(checked) => setFormData(prev => ({ ...prev, sancionada: checked }))}
              />
            </div>

            {/* SARLAFT */}
            <div className="flex flex-row items-center justify-between rounded-lg border p-4 hover:bg-accent/5 transition-colors md:col-span-2">
              <div className="space-y-0.5">
                <div className="flex items-center gap-2">
                  <Label htmlFor="sarlaft" className="font-medium">Políticas SARLAFT / SAGRLAFT</Label>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <HelpCircle className="h-3 w-3 text-muted-foreground cursor-help" />
                    </TooltipTrigger>
                    <TooltipContent>
                      <p className="max-w-xs text-xs">Sistema de Administración del Riesgo de Lavado de Activos y Financiación del Terrorismo</p>
                    </TooltipContent>
                  </Tooltip>
                </div>
                <p className="text-xs text-muted-foreground">¿Cuenta con políticas de prevención de lavado de activos?</p>
              </div>
              <Switch
                id="sarlaft"
                checked={formData.politicasSarlaft || false}
                onCheckedChange={(checked) => setFormData(prev => ({ ...prev, politicasSarlaft: checked }))}
              />
            </div>
          </div>
        </div>

        {/* Autorizaciones */}
        <div className="space-y-4">
          <h4 className="text-sm font-medium text-primary flex items-center gap-2">
            <FileCheck className="h-4 w-4" />
            Autorizaciones y Consentimiento <span className="text-destructive">*</span>
          </h4>
          <div className="grid gap-3 rounded-lg border bg-muted/30 p-5">
            <div className="flex items-start space-x-3">
              <Checkbox 
                id="infoVeraz" 
                checked={formData.infoVeraz || false}
                onCheckedChange={(checked) => setFormData(prev => ({ ...prev, infoVeraz: checked }))}
              />
              <div className="grid gap-1.5 leading-none">
                <Label htmlFor="infoVeraz" className="font-medium cursor-pointer">
                  Declaración de Veracidad
                </Label>
                <p className="text-xs text-muted-foreground">
                  Declaro que la información suministrada es veraz y verificable.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-3">
              <Checkbox 
                id="actualizar" 
                checked={formData.actualizarInfo || false}
                onCheckedChange={(checked) => setFormData(prev => ({ ...prev, actualizarInfo: checked }))}
              />
              <div className="grid gap-1.5 leading-none">
                <Label htmlFor="actualizar" className="font-medium cursor-pointer">
                  Compromiso de Actualización
                </Label>
                <p className="text-xs text-muted-foreground">
                  Me comprometo a actualizar cualquier cambio en la información.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-3">
              <Checkbox 
                id="privacidad" 
                checked={formData.aceptaPolitica || false}
                onCheckedChange={(checked) => setFormData(prev => ({ ...prev, aceptaPolitica: checked }))}
              />
              <div className="grid gap-1.5 leading-none">
                <Label htmlFor="privacidad" className="font-medium cursor-pointer">
                  Política de Privacidad
                </Label>
                <p className="text-xs text-muted-foreground">
                  Acepto la Política de Privacidad y Tratamiento de Datos.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-3">
              <Checkbox 
                id="riesgo" 
                checked={formData.autorizaConsulta || false}
                onCheckedChange={(checked) => setFormData(prev => ({ ...prev, autorizaConsulta: checked }))}
              />
              <div className="grid gap-1.5 leading-none">
                <div className="flex items-center gap-2">
                   <Label htmlFor="riesgo" className="font-medium cursor-pointer">
                    Centrales de Riesgo
                  </Label>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <Info className="h-3 w-3 text-muted-foreground cursor-help" />
                    </TooltipTrigger>
                    <TooltipContent>
                      <p className="max-w-xs text-xs">Autoriza la consulta y reporte en centrales como Datacrédito y Cifin.</p>
                    </TooltipContent>
                  </Tooltip>
                </div>
                <p className="text-xs text-muted-foreground">
                  Autorizo la consulta y reporte en centrales de riesgo financiero.
                </p>
              </div>
            </div>
          </div>
        </div>
      </TooltipProvider>
    </div>
  );
}

// Componente checkbox item (solo visual)
function CheckboxItem({
  label,
  checked,
  defaultChecked,
  required,
}: {
  label: string;
  checked: boolean;
  defaultChecked?: boolean;
  required?: boolean;
}) {
  return (
    <div className="flex items-center space-x-2">
      <Checkbox checked={checked || defaultChecked} disabled />
      <label className="text-sm leading-none">
        {checked || defaultChecked ? "☑" : "□"} {label}
        {required && <span className="text-destructive ml-1">*</span>}
      </label>
    </div>
  );
}
