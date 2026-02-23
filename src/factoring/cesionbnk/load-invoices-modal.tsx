/**
 * LoadInvoicesModal — Factoring Invoice Upload (Tenant-aware)
 * Uses semantic design tokens so it adapts to the active tenant theme.
 */
import React from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogTrigger,
  DialogClose,
} from "../../components/ui/dialog";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../../components/ui/tabs";
import { Textarea } from "../../components/ui/textarea";
import { Button } from "../../components/ui/button";
import { FileText, FileCode, UploadCloud, Info, Sparkles } from "lucide-react";

interface LoadInvoicesModalProps {
  children: React.ReactNode;
}

export function LoadInvoicesModal({ children }: LoadInvoicesModalProps) {
  return (
    <Dialog>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent className="max-w-[600px] gap-0 overflow-hidden p-0 sm:max-w-[600px]">
        <div className="p-6 pb-2">
          <DialogHeader className="mb-4">
            <DialogTitle className="text-xl font-bold text-foreground flex items-center gap-2">
              <Sparkles className="h-5 w-5 text-primary" />
              Cargar Facturas
            </DialogTitle>
            <DialogDescription className="text-sm text-muted-foreground">
              Selecciona el método de carga de facturas.
            </DialogDescription>
          </DialogHeader>

          <Tabs defaultValue="archivos" className="w-full">
            <TabsList className="mb-6 grid h-auto w-full grid-cols-2 rounded-xl p-1">
              <TabsTrigger
                value="archivos"
                className="flex items-center gap-2 rounded-lg py-2"
              >
                <FileText className="h-4 w-4" />
                Archivos
              </TabsTrigger>
              <TabsTrigger
                value="cufe"
                className="flex items-center gap-2 rounded-lg py-2"
              >
                <FileCode className="h-4 w-4" />
                Códigos CUFE
              </TabsTrigger>
            </TabsList>

            <TabsContent value="archivos" className="mt-0 space-y-4">
              {/* Info Alert */}
              <div className="flex gap-3 rounded-xl border border-blue-500/20 bg-blue-500/5 p-4">
                <Info className="mt-0.5 h-5 w-5 shrink-0 text-blue-500" />
                <div className="space-y-1">
                  <p className="text-sm font-medium text-blue-600 dark:text-blue-400">Recomendación</p>
                  <div className="text-xs text-muted-foreground">
                    <p>Puedes procesar máximo 100 facturas por operación.</p>
                    <p className="font-bold text-foreground/70">Formatos admitidos: ZIP, XML y Excel</p>
                  </div>
                </div>
              </div>

              {/* Upload Area */}
              <div className="group flex cursor-pointer flex-col items-center justify-center rounded-xl border-2 border-dashed border-border py-12 text-center transition-all duration-300 hover:bg-primary/5 hover:border-primary/30">
                <div className="mb-4 rounded-full border border-border bg-muted p-4 transition-all duration-300 group-hover:border-primary/30 group-hover:bg-primary/10 group-hover:shadow-sm">
                  <UploadCloud className="h-6 w-6 text-muted-foreground group-hover:text-primary transition-colors duration-300" />
                </div>
                <div className="mb-2 text-sm">
                  <span className="font-bold text-primary">Haz clic para cargar</span>
                  <span className="text-muted-foreground"> o arrastra y suelta aquí</span>
                </div>
                <div className="text-xs text-muted-foreground">
                  <p>Formatos: pdf, xml, zip</p>
                  <p>Max: 10MB por archivo</p>
                </div>
              </div>

              {/* Info Alert 2 */}
              <div className="flex gap-3 rounded-xl border border-blue-500/20 bg-blue-500/5 p-4">
                <Info className="mt-0.5 h-5 w-5 shrink-0 text-blue-500" />
                <div className="space-y-1">
                  <p className="text-sm font-medium text-blue-600 dark:text-blue-400">Información Importante</p>
                  <ul className="list-disc space-y-1 pl-4 text-xs text-muted-foreground">
                    <li>Solo se procesarán facturas con un formato válido.</li>
                    <li>Las facturas duplicadas serán identificadas y descartadas.</li>
                    <li>Los archivos ZIP serán extraídos y procesados automáticamente.</li>
                    <li>Las facturas se validarán automáticamente según los criterios definidos por el fondeador.</li>
                  </ul>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="cufe" className="mt-0 space-y-4">
              <div className="space-y-2">
                <label className="text-sm font-medium text-foreground">
                  Ingrese los códigos CUFE / CUDE
                </label>
                <Textarea
                  className="h-[294px] resize-none overflow-y-auto text-sm"
                  placeholder={`Pegue aquí los códigos (uno por línea o separados por coma)...\ncufe1...\ncufe2...`}
                />
                <div className="flex justify-between text-xs text-muted-foreground">
                  <span>Soporta múltiples códigos</span>
                  <span>0 códigos detectados</span>
                </div>
              </div>

              {/* Info Alert */}
              <div className="flex gap-3 rounded-xl border border-blue-500/20 bg-blue-500/5 p-4">
                <Info className="mt-0.5 h-5 w-5 shrink-0 text-blue-500" />
                <div className="space-y-1">
                  <p className="text-sm font-medium text-blue-600 dark:text-blue-400">Información Importante</p>
                  <ul className="list-disc space-y-1 pl-4 text-xs text-muted-foreground">
                    <li>Solo se procesarán facturas con un formato válido.</li>
                    <li>Las facturas duplicadas serán identificadas y descartadas.</li>
                    <li>Los archivos ZIP serán extraídos y procesados automáticamente.</li>
                    <li>Las facturas se validarán automáticamente según los criterios definidos por el fondeador.</li>
                  </ul>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>

        <div className="flex items-center justify-end gap-3 p-6 border-t border-border bg-muted/30">
          <DialogClose asChild>
            <Button variant="outline" size="sm">
              Cancelar
            </Button>
          </DialogClose>
          <Button size="sm">
            Cargar
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}