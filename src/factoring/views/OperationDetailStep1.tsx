import { useState } from "react";
import { ToggleButtonGroup } from "../../components/ui/toggle-button-group";
import { 
  ArrowLeft, 
  Calendar as CalendarIcon, 
  ChevronRight,
  Upload,
  Search,
  ChevronLeft,
  MoreHorizontal,
  Landmark
} from "lucide-react";
import { Button } from "../../components/ui/button";
import { Input } from "../../components/ui/input";
import { Label } from "../../components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "../../components/ui/card";
import { Switch } from "../../components/ui/switch";
import { 
  Select, 
  SelectContent, 
  SelectItem, 
  SelectTrigger, 
  SelectValue 
} from "../../components/ui/select";
import { Checkbox } from "../../components/ui/checkbox";
import { 
  Table, 
  TableBody, 
  TableCell, 
  TableHead, 
  TableHeader, 
  TableRow 
} from "../../components/ui/table";
import { Badge } from "../../components/ui/badge";
import { Separator } from "../../components/ui/separator";
import { UploadInvoicesDialog } from "../modals/UploadInvoicesDialog";

interface OperationDetailStep1Props {
  onBack: () => void;
  onContinue: () => void;
}

export function OperationDetailStep1({ onBack, onContinue }: OperationDetailStep1Props) {
  // Estado del formulario
  const [endorseToThird, setEndorseToThird] = useState(false);
  const [operationType, setOperationType] = useState<"factoring" | "confirming">("factoring");
  const [responsibility, setResponsibility] = useState<"con" | "sin">("con");
  const [insured, setInsured] = useState<"si" | "no">("si");
  const [isUploadDialogOpen, setIsUploadDialogOpen] = useState(false);
  
  return (
    <div className="space-y-8 p-6 pb-32 animate-in fade-in slide-in-from-bottom-4 duration-500">
      
      {/* Header Navigation */}
      <div className="flex items-center gap-4">
        <Button variant="ghost" size="icon" onClick={onBack} className="rounded-full hover:bg-accent">
          <ArrowLeft className="h-6 w-6 text-secondary" />
        </Button>
        <div>
            <h1 className="text-2xl font-semibold text-foreground">
                Factoring <span className="font-normal text-muted-foreground">Nueva Operación</span>
            </h1>
            <p className="text-sm text-muted-foreground">Completa a continuación la información de la negociación</p>
        </div>
      </div>

      {/* CLIENT SUMMARY HEADER (LIME BG) */}
      <Card className="bg-primary/10 border-none shadow-sm">
        <CardContent className="p-6 flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex flex-col gap-1">
                <h2 className="text-xl text-foreground">Horizon Edge Technologies</h2>
                <p className="text-sm text-muted-foreground/80">NIT 9004892348</p>
            </div>

            <div className="flex items-center gap-12 text-secondary">
                <div>
                    <p className="text-xs font-medium text-muted-foreground mb-1">Facturas</p>
                    <p className="text-xl">256</p>
                </div>
                <div className="h-10 w-px bg-border hidden md:block" />
                <div>
                    <p className="text-xs font-medium text-muted-foreground mb-1">Valor Facturas</p>
                    <p className="text-xl">$ 256.658.268</p>
                </div>
                <div className="h-10 w-px bg-border hidden md:block" />
                <div>
                    <p className="text-xs font-medium text-muted-foreground mb-1">Valor Desembolso</p>
                    <p className="text-xl">$ 251.658.268</p>
                </div>
            </div>

            <Button 
                className="bg-secondary text-secondary-foreground hover:bg-secondary/90 gap-2"
                onClick={() => setIsUploadDialogOpen(true)}
            >
                <Upload className="h-4 w-4" />
                Cargar Facturas
            </Button>
        </CardContent>
      </Card>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        
        {/* COLUMNA 1: Info Endosatario */}
        <Card className="shadow-sm border-border">
            <CardHeader className="pb-2">
                <CardTitle className="text-base font-medium text-foreground">Información Endosatario</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
                <div className="flex items-center gap-2 mb-2">
                    <Checkbox id="endorse" checked={endorseToThird} onCheckedChange={(c) => setEndorseToThird(!!c)} />
                    <Label htmlFor="endorse" className="text-sm font-medium">Endosar a un Tercero</Label>
                </div>
                
                <div className="space-y-1.5">
                    <Label className="text-xs text-muted-foreground">Razón social</Label>
                    <Input placeholder="Escribe la razón social" className="bg-muted/30" />
                </div>

                <div className="grid grid-cols-2 gap-3">
                    <div className="space-y-1.5">
                        <Label className="text-xs text-muted-foreground">Tipo Documento</Label>
                        <Select defaultValue="nit">
                            <SelectTrigger className="bg-muted/30">
                                <SelectValue placeholder="Seleccionar" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectItem value="nit">NIT</SelectItem>
                                <SelectItem value="cc">CC</SelectItem>
                            </SelectContent>
                        </Select>
                    </div>
                    <div className="space-y-1.5">
                        <Label className="text-xs text-muted-foreground">Número Documento</Label>
                        <Input placeholder="123456789" className="bg-muted/30" />
                    </div>
                </div>
            </CardContent>
        </Card>

        {/* COLUMNA 2: Info Negociación */}
        <Card className="shadow-sm border-border">
            <CardHeader className="pb-2">
                <CardTitle className="text-base font-medium text-foreground">Información de Negociación</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
                <div className="grid grid-cols-2 gap-3">
                    <div className="space-y-1.5">
                        <Label className="text-xs text-muted-foreground">Operación</Label>
                        <ToggleButtonGroup
                          options={[
                            { value: "factoring", label: "Factoring" },
                            { value: "confirming", label: "Confirming" }
                          ]}
                          value={operationType}
                          onChange={setOperationType}
                          className="bg-muted"
                        />
                    </div>
                    <div className="space-y-1.5">
                        <Label className="text-xs text-muted-foreground">Tipo</Label>
                        <Select>
                            <SelectTrigger className="bg-muted/30">
                                <SelectValue placeholder="Seleccionar" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectItem value="con-recurso">Con Recurso</SelectItem>
                                <SelectItem value="sin-recurso">Sin Recurso</SelectItem>
                            </SelectContent>
                        </Select>
                    </div>
                </div>

                <div className="grid grid-cols-2 gap-3">
                    <div className="space-y-1.5">
                        <Label className="text-xs text-muted-foreground">Porcentaje Financiamiento</Label>
                        <div className="relative">
                            <Input placeholder="Value" className="bg-muted/30 pr-8" defaultValue="100" />
                            <span className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-muted-foreground/50">%</span>
                        </div>
                    </div>
                    <div className="space-y-1.5">
                        <Label className="text-xs text-muted-foreground">Tasa Efectiva Anual</Label>
                        <div className="relative">
                            <Input placeholder="Value" className="bg-muted/30 pr-8" defaultValue="24.5" />
                            <span className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-muted-foreground/50">%</span>
                        </div>
                    </div>
                </div>

                <div className="space-y-1.5">
                    <Label className="text-xs text-muted-foreground">Entrega del Título</Label>
                    <ToggleButtonGroup
                      options={[
                        { value: "con", label: "Con Responsabilidad" },
                        { value: "sin", label: "Sin Responsabilidad" }
                      ]}
                      value={responsibility}
                      onChange={setResponsibility}
                      className="bg-muted"
                    />
                </div>
                 <div className="space-y-1.5">
                    <Label className="text-xs text-muted-foreground">Fecha de Pago</Label>
                    <div className="relative">
                        <Input placeholder="2025 - 01 - 01" className="bg-muted/30 pl-9" />
                        <CalendarIcon className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground/50" />
                    </div>
                </div>
            </CardContent>
        </Card>

        {/* COLUMNA 3: Info Bancaria */}
        <Card className="shadow-sm border-border">
            <CardHeader className="pb-2 flex flex-row items-center justify-between">
                <CardTitle className="text-base font-medium text-foreground">Información Bancaria</CardTitle>
                <Button variant="ghost" size="sm" className="h-6 px-2 text-xs font-medium text-secondary hover:bg-accent">
                    <Landmark className="mr-1 h-3 w-3" /> Agregar Cuenta
                </Button>
            </CardHeader>
            <CardContent className="space-y-4">
                <div className="space-y-1.5">
                    <Label className="text-xs text-muted-foreground">Titular Cuenta</Label>
                    <Input placeholder="Nombre del titular" className="bg-muted/30" />
                </div>

                <div className="grid grid-cols-2 gap-3">
                    <div className="space-y-1.5">
                        <Label className="text-xs text-muted-foreground">Tipo Documento</Label>
                        <Select defaultValue="nit">
                            <SelectTrigger className="bg-muted/30">
                                <SelectValue placeholder="Selecciona" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectItem value="nit">NIT</SelectItem>
                                <SelectItem value="cc">CC</SelectItem>
                            </SelectContent>
                        </Select>
                    </div>
                    <div className="space-y-1.5">
                        <Label className="text-xs text-muted-foreground">Número Documento</Label>
                        <Input placeholder="Value" className="bg-muted/30" />
                    </div>
                </div>

                <div className="grid grid-cols-2 gap-3">
                    <div className="space-y-1.5">
                        <Label className="text-xs text-muted-foreground">Banco</Label>
                        <Select>
                            <SelectTrigger className="bg-muted/30">
                                <SelectValue placeholder="Selecciona" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectItem value="bancolombia">Bancolombia</SelectItem>
                                <SelectItem value="davivienda">Davivienda</SelectItem>
                            </SelectContent>
                        </Select>
                    </div>
                    <div className="space-y-1.5">
                        <Label className="text-xs text-muted-foreground">Tipo de Cuenta</Label>
                        <Select>
                            <SelectTrigger className="bg-muted/30">
                                <SelectValue placeholder="Selecciona" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectItem value="ahorros">Ahorros</SelectItem>
                                <SelectItem value="corriente">Corriente</SelectItem>
                            </SelectContent>
                        </Select>
                    </div>
                </div>

                <div className="grid grid-cols-2 gap-3">
                    <div className="space-y-1.5">
                        <Label className="text-xs text-muted-foreground">Número de Cuenta</Label>
                        <Input placeholder="00000000000" className="bg-muted/30" />
                    </div>
                     <div className="space-y-1.5">
                        <Label className="text-xs text-muted-foreground">Operación Asegurada?</Label>
                        <ToggleButtonGroup
                          options={[
                            { value: "si", label: "Si" },
                            { value: "no", label: "No" }
                          ]}
                          value={insured}
                          onChange={setInsured}
                          className="bg-muted"
                        />
                    </div>
                </div>
            </CardContent>
        </Card>
      </div>

      {/* SECTION: FACTURAS CARGADAS */}
      <div className="space-y-4">
        <h2 className="text-lg font-semibold text-foreground">Facturas Cargadas</h2>
        
        <div className="flex flex-col xl:flex-row gap-6">
            
            {/* Global Config Bar */}
            <div className="flex-1 bg-card p-4 rounded-xl border border-border shadow-sm">
                <p className="text-xs font-medium text-foreground mb-3">Configuración Global</p>
                <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
                     <div className="space-y-1">
                        <Label className="text-xs text-muted-foreground uppercase">Razón social</Label>
                        <Input className="h-9 text-xs" placeholder="Buscar..." />
                    </div>
                    <div className="space-y-1">
                        <Label className="text-xs text-muted-foreground uppercase">Fecha de Pago</Label>
                         <div className="relative">
                            <Input placeholder="2025-01-01" className="h-9 text-xs pl-8" />
                            <CalendarIcon className="absolute left-2.5 top-1/2 -translate-y-1/2 h-3 w-3 text-muted-foreground/60" />
                        </div>
                    </div>
                    <div className="space-y-1">
                        <Label className="text-xs text-muted-foreground uppercase">Fecha de Pago</Label>
                         <div className="relative">
                            <Input placeholder="2025-01-01" className="h-9 text-xs pl-8" />
                            <CalendarIcon className="absolute left-2.5 top-1/2 -translate-y-1/2 h-3 w-3 text-muted-foreground/60" />
                        </div>
                    </div>
                    <div className="space-y-1">
                        <Label className="text-xs text-muted-foreground uppercase">Porcentaje Financiamiento</Label>
                        <div className="relative">
                            <Input className="h-9 text-xs pr-6" defaultValue="2.5" />
                            <span className="absolute right-2 top-1/2 -translate-y-1/2 text-xs text-muted-foreground/60">%</span>
                        </div>
                    </div>
                    <div className="space-y-1">
                        <Label className="text-xs text-muted-foreground uppercase">Tasa de Fondos</Label>
                        <div className="relative">
                            <Input className="h-9 text-xs pr-6" defaultValue="2.5" />
                            <span className="absolute right-2 top-1/2 -translate-y-1/2 text-xs text-muted-foreground/60">%</span>
                        </div>
                    </div>
                </div>
            </div>

            {/* Summary Box */}
            <div className="w-full xl:w-[400px] bg-card p-4 rounded-xl border border-border shadow-sm flex flex-col justify-center gap-2">
                <div className="flex justify-between items-center text-xs">
                    <span className="text-muted-foreground font-medium">Facturas Agregadas</span>
                    <span className="font-semibold text-foreground">127</span>
                </div>
                <div className="flex justify-between items-center text-xs">
                    <span className="text-muted-foreground font-medium">Valor Total de las Facturas</span>
                    <span className="font-semibold text-foreground">$ 696.626.000</span>
                </div>
                <Separator />
                <div className="flex justify-between items-center text-sm">
                    <span className="text-foreground font-semibold">Valor Total Desembolso</span>
                    <span className="font-semibold text-foreground text-base">$ 626.963.400</span>
                </div>
            </div>
        </div>

        {/* Dense Data Table */}
        <div className="rounded-xl border border-border overflow-hidden shadow-sm bg-card">
            <div className="overflow-x-auto">
                <Table className="min-w-[1400px]">
                    <TableHeader className="bg-muted">
                        <TableRow className="hover:bg-muted">
                            <TableHead className="w-[24px] bg-muted">
                                <Checkbox />
                            </TableHead>
                            <TableHead className="text-xs uppercase font-medium text-muted-foreground tracking-normal">Numeración</TableHead>
                            <TableHead className="text-xs uppercase font-medium text-muted-foreground tracking-normal">Pagador</TableHead>
                            <TableHead className="text-xs uppercase font-medium text-muted-foreground tracking-normal">Vencimiento</TableHead>
                            <TableHead className="text-xs uppercase font-medium text-muted-foreground tracking-normal">Pago</TableHead>
                            <TableHead className="text-xs uppercase font-medium text-muted-foreground text-center tracking-normal">Plazo</TableHead>
                            <TableHead className="text-xs uppercase font-medium text-muted-foreground text-right tracking-normal">Valor Título</TableHead>
                            <TableHead className="text-xs uppercase font-medium text-muted-foreground text-right tracking-normal">Monto Aceptado</TableHead>
                            <TableHead className="text-xs uppercase font-medium text-muted-foreground w-[80px] text-center tracking-normal">% Financ</TableHead>
                            <TableHead className="text-xs uppercase font-medium text-muted-foreground w-[80px] text-center tracking-normal">Tasa E.A.</TableHead>
                            <TableHead className="text-xs uppercase font-medium text-muted-foreground w-[80px] text-center tracking-normal">Tasa NMV</TableHead>
                            <TableHead className="text-xs uppercase font-medium text-muted-foreground text-right tracking-normal">Descuento Est.</TableHead>
                            <TableHead className="text-xs uppercase font-medium text-muted-foreground text-right tracking-normal">Valor Desemb</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {Array.from({length: 8}).map((_, i) => (
                            <TableRow key={i} className="hover:bg-muted/50">
                                <TableCell className="text-center py-2">
                                    <Checkbox />
                                </TableCell>
                                <TableCell className="py-2 text-xs font-medium text-foreground">SETP12345679{i}</TableCell>
                                <TableCell className="py-2 text-xs text-muted-foreground">Aether Dynamics Inc.</TableCell>
                                <TableCell className="py-2">
                                    <div className="flex items-center gap-1 text-xs text-muted-foreground bg-muted px-2 py-1 rounded border border-border w-fit">
                                        <CalendarIcon className="h-3 w-3" />
                                        2025 - 01 - 01
                                    </div>
                                </TableCell>
                                <TableCell className="py-2">
                                     <div className="flex items-center gap-1 text-xs text-muted-foreground bg-muted px-2 py-1 rounded border border-border w-fit">
                                        <CalendarIcon className="h-3 w-3" />
                                        2025 - 01 - 01
                                    </div>
                                </TableCell>
                                <TableCell className="py-2 text-center text-xs text-muted-foreground">
                                    {(i + 1) * 15}
                                </TableCell>
                                <TableCell className="py-2 text-right text-xs font-medium text-foreground">$ 8.345.679.123</TableCell>
                                <TableCell className="py-2 text-right text-xs font-medium text-foreground">$ 10.000.000.000</TableCell>
                                <TableCell className="py-2 px-1">
                                    <div className="relative">
                                        <Input className="h-7 text-xs text-center pr-4" defaultValue="90" />
                                        <span className="absolute right-1 top-1/2 -translate-y-1/2 text-xs text-muted-foreground/60">%</span>
                                    </div>
                                </TableCell>
                                <TableCell className="py-2 px-1">
                                    <div className="relative">
                                        <Input className="h-7 text-xs text-center pr-4" defaultValue="40" />
                                        <span className="absolute right-1 top-1/2 -translate-y-1/2 text-xs text-muted-foreground/60">%</span>
                                    </div>
                                </TableCell>
                                <TableCell className="py-2 px-1">
                                    <div className="relative">
                                        <Input className="h-7 text-xs text-center pr-4" defaultValue="2.1" />
                                        <span className="absolute right-1 top-1/2 -translate-y-1/2 text-xs text-muted-foreground/60">%</span>
                                    </div>
                                </TableCell>
                                <TableCell className="py-2 text-right text-xs text-muted-foreground">$ 10.000.000.000</TableCell>
                                <TableCell className="py-2 text-right text-xs text-foreground">$ 10.000.000.000</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </div>
            
            {/* Pagination */}
            <div className="flex items-center justify-center py-4 gap-2 border-t border-border">
                <Button variant="ghost" size="sm" className="text-xs text-muted-foreground gap-1 h-8">
                    <ChevronLeft className="h-3 w-3" /> Previous
                </Button>
                <Button variant="outline" size="sm" className="h-8 w-8 p-0 text-xs bg-foreground text-background hover:bg-foreground/90 hover:text-background border-none">1</Button>
                <Button variant="ghost" size="sm" className="h-8 w-8 p-0 text-xs text-muted-foreground">2</Button>
                <Button variant="ghost" size="sm" className="h-8 w-8 p-0 text-xs text-muted-foreground">3</Button>
                <Button variant="ghost" size="sm" className="h-8 w-8 p-0 text-xs text-muted-foreground">4</Button>
                <span className="text-xs text-muted-foreground/60">...</span>
                <Button variant="ghost" size="sm" className="h-8 w-8 p-0 text-xs text-muted-foreground">10</Button>
                <Button variant="ghost" size="sm" className="text-xs text-muted-foreground gap-1 h-8">
                    Next <ChevronRight className="h-3 w-3" />
                </Button>
            </div>
        </div>
      </div>


      {/* Floating Action Button */}
      <div className="fixed bottom-0 right-0 w-full bg-gradient-to-t from-background via-background/90 to-transparent pb-8 pt-12 px-8 flex justify-end pointer-events-none">
        <Button 
            className="pointer-events-auto bg-secondary text-secondary-foreground hover:bg-secondary/90 h-12 px-8 rounded-lg font-medium shadow-lg transition-transform hover:scale-105"
            onClick={onContinue}
        >
            Continuar
            <ChevronRight className="ml-2 h-4 w-4" />
        </Button>
      </div>

      <UploadInvoicesDialog open={isUploadDialogOpen} onOpenChange={setIsUploadDialogOpen} />
      
    </div>
  );
}