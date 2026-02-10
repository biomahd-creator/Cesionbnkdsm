import React, { useState } from "react";
import { 
  Upload, 
  FileText, 
  CheckCircle2, 
  AlertCircle,
  X,
  Plus,
  ArrowRight,
  FileCode
} from "lucide-react";
import { Button } from "../components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../components/ui/dialog";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../components/ui/tabs";
import { Textarea } from "../components/ui/textarea";
import { Label } from "../components/ui/label";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../components/ui/card";
import { Alert, AlertDescription, AlertTitle } from "../components/ui/alert";
import { Badge } from "../components/ui/badge";
import { FileUploader } from "../components/advanced/FileUploader";

export function InvoiceUploadPage() {
  const [open, setOpen] = useState(false);
  const [activeTab, setActiveTab] = useState("files");
  const [cufes, setCufes] = useState("");
  const [isProcessing, setIsProcessing] = useState(false);
  const [uploadStatus, setUploadStatus] = useState<"idle" | "success" | "error">("idle");

  const handleCufeSubmit = () => {
    setIsProcessing(true);
    // Simulate API call
    setTimeout(() => {
      setIsProcessing(false);
      setUploadStatus("success");
      // Reset after 3 seconds
      setTimeout(() => {
        setUploadStatus("idle");
        setOpen(false);
        setCufes("");
      }, 2000);
    }, 1500);
  };

  const handleFileUpload = (files: File[]) => {
    setIsProcessing(true);
    // Simulate API call
    setTimeout(() => {
      setIsProcessing(false);
      setUploadStatus("success");
      setTimeout(() => {
        setUploadStatus("idle");
        setOpen(false);
      }, 2000);
    }, 1500);
  };

  return (
    <div className="container mx-auto py-10 space-y-8 max-w-5xl">
      <div className="flex flex-col gap-2">
        <div className="flex items-center gap-2">
          <Badge variant="outline" className="text-primary border-primary">New Feature</Badge>
          <span className="text-sm text-muted-foreground">Patterns / Invoices</span>
        </div>
        <h1 className="text-3xl font-bold tracking-tight text-foreground">Carga de Facturas</h1>
        <p className="text-lg text-muted-foreground max-w-2xl">
          Módulo unificado para la carga de facturas mediante archivos XML/PDF o ingreso manual de códigos CUFE/CUDE.
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Carga Masiva</CardTitle>
            <CardDescription>
              Inicie el proceso de carga de facturas para factoring o confirming.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="bg-muted/30 p-4 rounded-lg border border-dashed flex flex-col items-center justify-center h-48 gap-4 text-center">
              <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center">
                <Upload className="h-6 w-6 text-primary" />
              </div>
              <div className="space-y-1">
                <p className="font-medium">Subir nuevas facturas</p>
                <p className="text-sm text-muted-foreground">Soporta XML, PDF y códigos CUFE</p>
              </div>
              <Dialog open={open} onOpenChange={setOpen}>
                <DialogTrigger asChild>
                  <Button className="gap-2">
                    <Plus className="h-4 w-4" />
                    Nueva Carga
                  </Button>
                </DialogTrigger>
                <DialogContent className="sm:max-w-[600px] max-h-[90vh] flex flex-col p-0 gap-0">
                  <DialogHeader className="p-6 pb-2">
                    <DialogTitle>Cargar Facturas</DialogTitle>
                    <DialogDescription>
                      Seleccione el método de carga para sus documentos electrónicos.
                    </DialogDescription>
                  </DialogHeader>
                  
                  <div className="flex-1 overflow-y-auto p-6 pt-2">
                    <Tabs defaultValue="files" value={activeTab} onValueChange={setActiveTab} className="w-full">
                      <TabsList className="grid w-full grid-cols-2 max-w-lg mb-6">
                        <TabsTrigger value="files" className="gap-2">
                          <FileText className="h-4 w-4" />
                          Archivos
                        </TabsTrigger>
                        <TabsTrigger value="cufes" className="gap-2">
                          <FileCode className="h-4 w-4" />
                          Códigos CUFE
                        </TabsTrigger>
                      </TabsList>

                      <TabsContent value="files" className="mt-0 space-y-4">
                        <Alert className="bg-blue-50/50 border-blue-200 text-blue-800 dark:bg-blue-950/20 dark:border-blue-800 dark:text-blue-300">
                          <AlertCircle className="h-4 w-4" />
                          <AlertTitle>Recomendación</AlertTitle>
                          <AlertDescription>
                            Suba los archivos XML para un procesamiento más rápido y preciso.
                          </AlertDescription>
                        </Alert>
                        
                        <div className="space-y-4">
                          <FileUploader 
                            maxFiles={10} 
                            maxSize={10 * 1024 * 1024} // 10MB
                            accept={["application/pdf", "text/xml", "application/xml"]}
                            onUpload={handleFileUpload}
                          />
                        </div>
                      </TabsContent>

                      <TabsContent value="cufes" className="mt-0 space-y-4">
                        <div className="space-y-4">
                          <div className="space-y-2">
                            <Label htmlFor="cufes">Ingrese los códigos CUFE / CUDE</Label>
                            <Textarea
                              id="cufes"
                              placeholder="Pegue aquí los códigos (uno por línea o separados por coma)...&#10;cufe1...&#10;cufe2..."
                              className="min-h-[200px] font-mono text-xs leading-relaxed resize-none"
                              value={cufes}
                              onChange={(e) => setCufes(e.target.value)}
                            />
                            <p className="text-xs text-muted-foreground flex justify-between">
                              <span>Soporta múltiples códigos</span>
                              <span>{cufes.split(/\n|,/).filter(s => s.trim().length > 0).length} códigos detectados</span>
                            </p>
                          </div>

                          <Alert>
                            <CheckCircle2 className="h-4 w-4" />
                            <AlertTitle>Validación Automática</AlertTitle>
                            <AlertDescription>
                              El sistema validará la existencia y estado de cada factura en la DIAN.
                            </AlertDescription>
                          </Alert>
                        </div>
                      </TabsContent>
                    </Tabs>
                  </div>

                  <DialogFooter className="p-6 pt-2 border-t bg-muted/20">
                    <div className="flex w-full justify-between items-center">
                       {uploadStatus === "success" ? (
                         <div className="flex items-center gap-2 text-green-600 font-medium animate-in fade-in slide-in-from-bottom-2">
                           <CheckCircle2 className="h-5 w-5" />
                           <span>Carga exitosa</span>
                         </div>
                       ) : (
                         <span className="text-xs text-muted-foreground">
                           {activeTab === "files" ? "Formatos: PDF, XML" : "Validación DIAN en tiempo real"}
                         </span>
                       )}
                       
                       <div className="flex gap-2">
                         <Button variant="outline" onClick={() => setOpen(false)}>Cancelar</Button>
                         {activeTab === "cufes" && (
                           <Button 
                             onClick={handleCufeSubmit} 
                             disabled={!cufes.trim() || isProcessing}
                           >
                             {isProcessing ? "Procesando..." : "Cargar Códigos"}
                           </Button>
                         )}
                         {/* Button for files is handled inside FileUploader, but we could override or hide it there to put it here if we wanted consistent footer actions. 
                             For now, let's leave the FileUploader's own button or just show a close button here. 
                             Actually FileUploader has its own submit. So we only need the CUFEs button here. 
                         */}
                       </div>
                    </div>
                  </DialogFooter>
                </DialogContent>
              </Dialog>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Últimas Cargas</CardTitle>
            <CardDescription>
              Historial reciente de facturas procesadas.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {[1, 2, 3].map((i) => (
                <div key={i} className="flex items-start gap-4 p-3 rounded-lg border bg-muted/10 hover:bg-muted/30 transition-colors">
                  <div className="h-10 w-10 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center flex-shrink-0">
                    <FileText className="h-5 w-5 text-blue-600 dark:text-blue-400" />
                  </div>
                  <div className="flex-1 min-w-0 space-y-1">
                    <div className="flex items-center justify-between">
                      <p className="font-medium text-sm truncate">Lote de Facturas #{202400 + i}</p>
                      <span className="text-xs text-muted-foreground">Hace {i * 2}h</span>
                    </div>
                    <p className="text-xs text-muted-foreground">
                      Importado vía {i === 2 ? "CUFE Manual" : "Archivo XML"} • 15 documentos
                    </p>
                  </div>
                  <Button variant="ghost" size="icon" className="h-8 w-8">
                    <ArrowRight className="h-4 w-4" />
                  </Button>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}