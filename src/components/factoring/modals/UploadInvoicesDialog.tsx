import React from "react";
import { 
  Dialog, 
  DialogContent, 
  DialogHeader, 
  DialogTitle, 
  DialogDescription,
  DialogFooter
} from "../../ui/dialog";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../../ui/tabs";
import { Button } from "../../ui/button";
import { Label } from "../../ui/label";
import { Textarea } from "../../ui/textarea";
import { Alert, AlertDescription, AlertTitle } from "../../ui/alert";
import { FileText, Upload, Info, AlertCircle, FileCode } from "lucide-react";
import { useState } from "react";

interface UploadInvoicesDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export function UploadInvoicesDialog({ open, onOpenChange }: UploadInvoicesDialogProps) {
  const [activeTab, setActiveTab] = useState("files");
  const [dragActive, setDragActive] = useState(false);

  const handleDrag = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === "dragenter" || e.type === "dragover") {
      setDragActive(true);
    } else if (e.type === "dragleave") {
      setDragActive(false);
    }
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[600px] gap-0 p-0 overflow-hidden">
        <DialogHeader className="p-6 pb-2">
          <DialogTitle className="text-xl font-semibold text-secondary">Cargar Facturas</DialogTitle>
          <DialogDescription className="text-sm text-muted-foreground">Selecciona el método de carga de facturas .</DialogDescription>
        </DialogHeader>
        
        <Tabs defaultValue="files" value={activeTab} onValueChange={setActiveTab} className="w-full">
          <div className="px-6 mb-6">
            <TabsList className="grid w-full grid-cols-2 h-10 bg-muted">
                <TabsTrigger 
                    value="files" 
                    className="flex gap-2 text-xs font-medium data-[state=active]:bg-card data-[state=active]:shadow-sm"
                >
                    <Upload className="h-3.5 w-3.5" /> Archivos
                </TabsTrigger>
                <TabsTrigger 
                    value="cufe" 
                    className="flex gap-2 text-xs font-medium data-[state=active]:bg-card data-[state=active]:shadow-sm"
                >
                    <FileCode className="h-4 w-4" /> Códigos CUFE
                </TabsTrigger>
            </TabsList>
          </div>

          <div className="px-6 pb-6">
            <TabsContent value="files" className="mt-0 space-y-4 outline-none">
                {/* Recommendation Alert */}
                <Alert className="bg-blue-50 border-blue-100 text-blue-900">
                    <AlertCircle className="h-4 w-4 text-blue-600" />
                    <AlertTitle className="text-sm font-semibold text-blue-700 ml-2">Recomendación</AlertTitle>
                    <AlertDescription className="text-xs text-blue-600 ml-2 mt-1">
                        Puedes procesar máximo 100 facturas por operación.<br/>
                        <span className="font-semibold">Formatos admitidos: ZIP, XML y Excel</span>
                    </AlertDescription>
                </Alert>

                {/* Drag & Drop Area */}
                <div 
                    className={`
                        border-2 border-dashed rounded-xl p-8 flex flex-col items-center justify-center text-center transition-colors
                        ${dragActive ? "border-primary bg-primary/5" : "border-border bg-card hover:bg-muted"}
                    `}
                    onDragEnter={handleDrag}
                    onDragLeave={handleDrag}
                    onDragOver={handleDrag}
                    onDrop={handleDrag}
                >
                    <div className="flex items-center justify-center h-6 w-6 rounded-full bg-muted mb-4">
                        <Upload className="h-6 w-6 text-muted-foreground" />
                    </div>
                    <p className="text-sm text-secondary mb-1">
                        <span className="text-primary hover:text-primary/90 cursor-pointer transition-colors">Haz clic para cargar</span> o arrastra y suelta aquí
                    </p>
                    <p className="text-xs text-muted-foreground mb-0.5">Supported: pdf, text/xml, xml</p>
                    <p className="text-xs text-muted-foreground">Max size: 10MB per file</p>
                </div>

                {/* Info Alert */}
                <Alert className="bg-blue-50 border-blue-100 text-blue-900">
                    <Info className="h-4 w-4 text-blue-600" />
                    <AlertTitle className="text-sm font-bold text-blue-700 ml-2">Información Importante</AlertTitle>
                    <AlertDescription className="text-xs text-blue-600 ml-2 mt-2">
                        <ul className="list-disc pl-4 space-y-0.5">
                            <li>Solo se aceptan archivos .xml, .pdf, .json o .zip.</li>
                            <li>Las facturas duplicadas serán identificadas y descartadas.</li>
                            <li>Los archivos ZIP serán extraídos y procesados automáticamente.</li>
                            <li>Las facturas se validarán automáticamente según los criterios definidos por el fondeador.</li>
                        </ul>
                    </AlertDescription>
                </Alert>
            </TabsContent>

            <TabsContent value="cufe" className="mt-0 space-y-4 outline-none">
                <div className="space-y-2">
                    <Label className="text-sm font-medium text-secondary">Ingrese los códigos CUFE / CUDE</Label>
                    <Textarea 
                        placeholder={"Pegue aquí los códigos (uno por línea o separados por coma)...\ncufe1...\ncufe2..."}
                        className="min-h-[220px] bg-card resize-none text-sm"
                    />
                    <div className="flex justify-between text-xs text-muted-foreground">
                        <span>Soporta múltiples códigos</span>
                        <span>0 códigos detectados</span>
                    </div>
                </div>

                {/* Info Alert */}
                 <Alert className="bg-blue-50 border-blue-100 text-blue-900">
                    <Info className="h-4 w-4 text-blue-600" />
                    <AlertTitle className="text-sm font-semibold text-blue-700 ml-2">Información Importante</AlertTitle>
                    <AlertDescription className="text-xs text-blue-600 ml-2 mt-2">
                        <ul className="list-disc pl-4 space-y-0.5">
                            <li>Solo se procesarán facturas con un formato válido.</li>
                            <li>Las facturas duplicadas serán identificadas y descartadas.</li>
                            <li>Los archivos ZIP serán extraídos y procesados automáticamente.</li>
                            <li>Las facturas se validarán automáticamente según los criterios definidos por el fondeador.</li>
                        </ul>
                    </AlertDescription>
                </Alert>
            </TabsContent>
          </div>
        </Tabs>

        <DialogFooter className="p-4 border-t border-border bg-card">
          <Button variant="outline" onClick={() => onOpenChange(false)} className="h-10 px-6">Cancelar</Button>
          <Button className="bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-8 font-medium">Cargar</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
