// Causa 18: Movido de /factoring/c-financia/ a /components/factoring/c-financia/
import React from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogTrigger,
  DialogClose,
} from "../../ui/dialog";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../../ui/tabs";
import { Button } from "../../ui/button";
import { Textarea } from "../../ui/textarea";
import { FileText, FileCode, UploadCloud, Info } from "lucide-react";

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
            <DialogTitle className="text-xl font-bold text-foreground">
              Cargar Facturas
            </DialogTitle>
            <DialogDescription className="text-sm text-muted-foreground">
              Selecciona el método de carga de facturas.
            </DialogDescription>
          </DialogHeader>

          <Tabs defaultValue="archivos" className="w-full">
            <TabsList className="mb-6 grid h-auto w-full grid-cols-2 rounded-xl bg-muted p-1">
              <TabsTrigger
                value="archivos"
                className="flex items-center gap-2 rounded-lg py-2 data-[state=active]:bg-background data-[state=active]:shadow-sm"
              >
                <FileText className="h-4 w-4" />
                Archivos
              </TabsTrigger>
              <TabsTrigger
                value="cufe"
                className="flex items-center gap-2 rounded-lg py-2 data-[state=active]:bg-background data-[state=active]:shadow-sm"
              >
                <FileCode className="h-4 w-4" />
                Códigos CUFE
              </TabsTrigger>
            </TabsList>

            <TabsContent value="archivos" className="mt-0 space-y-4">
              {/* Info Alert */}
              <div className="flex gap-3 rounded-lg border border-blue-200 bg-blue-50/50 p-4">
                <Info className="mt-0.5 h-5 w-5 shrink-0 text-blue-700" />
                <div className="space-y-1">
                  <p className="text-sm font-medium text-blue-700">
                    Recomendación
                  </p>
                  <div className="text-xs text-muted-foreground">
                    <p>Puedes procesar máximo 100 facturas por operación.</p>
                    <p className="font-bold">
                      Formatos admitidos: ZIP, XML y Excel
                    </p>
                  </div>
                </div>
              </div>

              {/* Upload Area */}
              <div className="flex cursor-pointer flex-col items-center justify-center rounded-lg border-2 border-dashed border-border py-12 text-center transition-colors hover:bg-muted/50">
                <div className="mb-4 rounded-full border bg-background p-4 shadow-sm">
                  <UploadCloud className="h-6 w-6 text-muted-foreground" />
                </div>
                <div className="mb-2 text-sm">
                  <span className="font-bold text-primary">
                    Haz clic para cargar
                  </span>
                  <span className="text-foreground">
                    {" "}
                    o arrastra y suelta aquí
                  </span>
                </div>
                <div className="text-xs text-muted-foreground">
                  <p>Supported: pdf, text/xml, xml</p>
                  <p>Max size: 10MB per file</p>
                </div>
              </div>

              {/* Info Alert 2 */}
              <div className="flex gap-3 rounded-lg border border-blue-200 bg-blue-50/50 p-4">
                <Info className="mt-0.5 h-5 w-5 shrink-0 text-blue-700" />
                <div className="space-y-1">
                  <p className="text-sm font-medium text-blue-700">
                    Información Importante
                  </p>
                  <ul className="list-disc space-y-1 pl-4 text-xs text-muted-foreground">
                    <li>Solo se procesarán facturas con un formato válido.</li>
                    <li>
                      Las facturas duplicadas serán identificadas y descartadas.
                    </li>
                    <li>
                      Los archivos ZIP serán extraídos y procesados automáticamente.
                    </li>
                    <li>
                      Las facturas se validarán automáticamente según los criterios
                      definidos por el fondeador.
                    </li>
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

              {/* Info Alert (Same as above) */}
              <div className="flex gap-3 rounded-lg border border-blue-200 bg-blue-50/50 p-4">
                <Info className="mt-0.5 h-5 w-5 shrink-0 text-blue-700" />
                <div className="space-y-1">
                  <p className="text-sm font-medium text-blue-700">
                    Información Importante
                  </p>
                  <ul className="list-disc space-y-1 pl-4 text-xs text-muted-foreground">
                    <li>Solo se procesarán facturas con un formato válido.</li>
                    <li>
                      Las facturas duplicadas serán identificadas y descartadas.
                    </li>
                    <li>
                      Los archivos ZIP serán extraídos y procesados automáticamente.
                    </li>
                    <li>
                      Las facturas se validarán automáticamente según los criterios
                      definidos por el fondeador.
                    </li>
                  </ul>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>

        <div className="flex items-center justify-end gap-3 border-t bg-muted/50 p-6">
          <DialogClose asChild>
            <Button variant="outline" className="h-9 px-4">
              Cancelar
            </Button>
          </DialogClose>
          <Button className="h-9 bg-primary px-6 text-primary-foreground hover:bg-primary/90">
            Cargar
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}
