import { useState, useEffect } from "react";
import { 
  FileText, 
  Search, 
  History, 
  Plus, 
  Filter, 
  Eye, 
  Heart, 
  MoreVertical,
  ChevronLeft,
  ChevronRight,
  Download,
  Edit,
  ArrowLeft,
  FileCheck2,
  Receipt,
} from "lucide-react";
import { Button } from "../../ui/button";
import { Input } from "../../ui/input";
import { Card, CardContent } from "../../ui/card";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "../../ui/tabs";
import { 
  Table, 
  TableBody, 
  TableCell, 
  TableHead, 
  TableHeader, 
  TableRow 
} from "../../ui/table";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../../ui/select";
import { Badge } from "../../ui/badge";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "../../ui/dropdown-menu";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "../../ui/tooltip";
import { FactoringKpiCardGroup } from "../../patterns/FactoringKpiCardGroup";
import { MasterDataGrid } from "../../advanced/MasterDataGrid";

// ═══════════════════════════════════════════════════════════════════
// Causa 16: Vistas movidas de /factoring/views/ a /components/factoring/views/
// para que FGCmp2 pueda instrumentarlas (solo instrumenta /components/** y /pages/**)
// ═══════════════════════════════════════════════════════════════════

interface RadianAdminDashboardProps {
  onBack?: () => void;
}

export function RadianAdminDashboard({ onBack }: RadianAdminDashboardProps) {
  const [activeTab, setActiveTab] = useState("operaciones");
  const [hoveredTab, setHoveredTab] = useState<string | null>(null);

  // MOCK DATA - OPERACIONES
  const operaciones = [
    {
        nitEndosante: "901298003",
        razonEndosante: "CESIONBNK SAS",
        nitEndosatario: "901061400",
        razonEndosatario: "PATRIMONIO AUTÓNOMO...",
        facturas: 1,
        totalFacturas: "$2.429.028",
        totalEndosado: "$2.101.117"
    },
    {
        nitEndosante: "900278155",
        razonEndosante: "HIDROSPOT SAS",
        nitEndosatario: "901298003",
        razonEndosatario: "CESIONBNK SAS",
        facturas: 1,
        totalFacturas: "$2.429.028",
        totalEndosado: "$2.090.803"
    }
  ];

  // MOCK DATA - MANDATOS
  const mandatos = [
      {
          nit: "830107457",
          razon: "SUNAO TRADING SAS",
          tipo: "Documento General",
          vigencia: "Ilimitado",
          estado: "Vigente"
      },
      {
          nit: "901366606",
          razon: "SERVICIOS ESP. DE...",
          tipo: "Documento General",
          vigencia: "Ilimitado",
          estado: "Vigente"
      }
  ];

  // MOCK DATA - TITULOS
  const titulos = [
      {
          num: "OPI251",
          venc: "2025-01-30",
          emisor: "CI PETROIL S.A.S.",
          tenedor: "CI PETROIL S.A.S.",
          valor: "$102.938.617",
          estado: "Factura Electrónica"
      },
      {
          num: "OPI233",
          venc: "2026-01-30",
          emisor: "ODIN PETROIL Y GAS...",
          tenedor: "ODIN PETROIL Y GAS...",
          valor: "$1.157.547.355",
          estado: "Factura Electrónica"
      }
  ];

  return (
    <div className="space-y-6 p-6 animate-in fade-in duration-500">
      
      {/* Page Header */}
      <div className="flex flex-col gap-2">
         <div className="flex items-center gap-4">
            {onBack && (
                <Button variant="ghost" size="icon" onClick={onBack} className="-ml-3 hover:bg-muted">
                    <ArrowLeft className="h-6 w-6 text-muted-foreground" />
                </Button>
            )}
            <div>
                <h1 className="text-2xl font-bold text-secondary tracking-tight">Administración RADIAN</h1>
                <p className="text-muted-foreground text-sm">Gestión centralizada de operaciones, mandatos y títulos valor.</p>
            </div>
         </div>
      </div>

      {/* TABS & CONTENT */}
      <Tabs defaultValue="operaciones" value={activeTab} onValueChange={setActiveTab} className="w-full">
        
        {/* KPI Tabs Replacement */}
        <FactoringKpiCardGroup
          className="mb-8"
          activeId={activeTab}
          cards={[
            {
              id: "operaciones",
              label: "Operaciones",
              description: "Gestión de endosos",
              value: "$ 120.000.000",
              count: 12,
              variant: "yellow",
              icon: <FileText />,
            },
            {
              id: "mandatos",
              label: "Mandatos",
              description: "Contratos activos",
              value: "$ -",
              count: 5,
              variant: "orange",
              icon: <FileCheck2 />,
            },
            {
              id: "titulos",
              label: "Títulos Valor",
              description: "Registrados en RADIAN",
              value: "$ 890.500.000",
              count: 45,
              variant: "blue",
              icon: <Receipt />,
            },
          ]}
        />

        {/* TAB 1: OPERACIONES */}
        <TabsContent value="operaciones" className="mt-0 space-y-4">
             <MasterDataGrid
                title="Operaciones"
                totalItems={341}
                itemsPerPage={10}
                currentPage={1}
                totalPages={341}
                onPageChange={() => {}}
                toolbarActions={
                  <div className="flex items-center gap-2">
                    <Tooltip>
                        <TooltipTrigger asChild>
                           <Button variant="outline" size="sm" className="h-9">
                              <FileText className="mr-2 h-4 w-4" />
                              Nuevo Endoso
                           </Button>
                        </TooltipTrigger>
                        <TooltipContent>
                           <p>Genera un nuevo endoso electrónico para tus facturas.</p>
                        </TooltipContent>
                    </Tooltip>

                    <Tooltip>
                        <TooltipTrigger asChild>
                           <Button variant="outline" size="sm" className="h-9">
                              <Search className="mr-2 h-4 w-4" />
                              Consulta Facturas
                           </Button>
                        </TooltipTrigger>
                        <TooltipContent>
                           <p>Accede a la información detallada de tus títulos valores.</p>
                        </TooltipContent>
                    </Tooltip>

                    <Tooltip>
                        <TooltipTrigger asChild>
                           <Button variant="outline" size="sm" className="h-9">
                              <History className="mr-2 h-4 w-4" />
                              Histórico Endosos
                           </Button>
                        </TooltipTrigger>
                        <TooltipContent>
                           <p>Consulta el histórico completo de tus operaciones pasadas.</p>
                        </TooltipContent>
                    </Tooltip>
                  </div>
                }
             >
                <div className="overflow-x-auto">
                  <Table>
                    <TableHeader className="bg-muted/50">
                        <TableRow>
                            <TableHead className="font-semibold text-muted-foreground text-xs whitespace-nowrap">ENDOSANTE</TableHead>
                            <TableHead className="font-semibold text-muted-foreground text-xs whitespace-nowrap">ENDOSATARIO</TableHead>
                            <TableHead className="font-semibold text-muted-foreground text-xs text-center whitespace-nowrap">FACTURAS</TableHead>
                            <TableHead className="font-semibold text-muted-foreground text-xs text-right whitespace-nowrap">TOTAL FACTURAS</TableHead>
                            <TableHead className="font-semibold text-muted-foreground text-xs text-right whitespace-nowrap">TOTAL ENDOSADO</TableHead>
                            <TableHead className="font-bold text-secondary text-xs text-center whitespace-nowrap">OPCIONES</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {operaciones.map((op, idx) => (
                            <TableRow key={idx} className="hover:bg-muted/50">
                                <TableCell className="py-3 px-4">
                                    <div className="font-medium text-sm">{op.razonEndosante}</div>
                                    <div className="text-xs text-muted-foreground">{op.nitEndosante}</div>
                                </TableCell>
                                <TableCell className="py-3 px-4">
                                    <div className="font-medium text-sm">{op.razonEndosatario}</div>
                                    <div className="text-xs text-muted-foreground">{op.nitEndosatario}</div>
                                </TableCell>
                                <TableCell className="text-xs text-center">{op.facturas}</TableCell>
                                <TableCell className="text-xs text-right">{op.totalFacturas}</TableCell>
                                <TableCell className="text-xs text-right">{op.totalEndosado}</TableCell>
                                <TableCell className="text-center">
                                    <Button variant="ghost" size="icon" className="h-8 w-8 hover:bg-primary hover:text-primary-foreground">
                                        <Eye className="h-4 w-4" />
                                    </Button>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                  </Table>
                </div>
             </MasterDataGrid>
        </TabsContent>

        {/* TAB 2: MANDATOS */}
        <TabsContent value="mandatos" className="mt-0 space-y-4">
            
            {/* Filters & Actions */}
            <div className="flex flex-col md:flex-row items-center justify-between gap-4 bg-card p-4 rounded-lg border border-border shadow-sm">
                <div className="flex items-center gap-4 w-full md:w-auto">
                    <div className="w-full md:w-48">
                        <Select>
                            <SelectTrigger className="h-9 text-xs">
                                <SelectValue placeholder="Tipo Mandato: Todos" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectItem value="all">Todos</SelectItem>
                            </SelectContent>
                        </Select>
                    </div>
                    <div className="w-full md:w-48">
                        <Select>
                            <SelectTrigger className="h-9 text-xs">
                                <SelectValue placeholder="Vigencia: Todo" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectItem value="all">Todo</SelectItem>
                            </SelectContent>
                        </Select>
                    </div>
                </div>
                <Button className="bg-primary text-primary-foreground hover:bg-primary/90 font-bold h-9">
                    <Plus className="mr-2 h-4 w-4" />
                    Agregar Mandato
                </Button>
            </div>

            <Card className="border-none shadow-md overflow-hidden">
                <div className="overflow-x-auto">
                    <Table>
                        <TableHeader className="bg-muted/50">
                            <TableRow>
                                <TableHead className="font-bold text-secondary text-xs whitespace-nowrap">NIT MANDANTE</TableHead>
                                <TableHead className="font-bold text-secondary text-xs whitespace-nowrap">RAZÓN MANDANTE</TableHead>
                                <TableHead className="font-bold text-secondary text-xs whitespace-nowrap">TIPO MANDATO</TableHead>
                                <TableHead className="font-bold text-secondary text-xs whitespace-nowrap">TIEMPO VIGENCIA</TableHead>
                                <TableHead className="font-bold text-secondary text-xs text-center whitespace-nowrap">ESTADO MANDATO</TableHead>
                                <TableHead className="font-bold text-secondary text-xs text-center whitespace-nowrap">OPCIONES</TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {mandatos.map((m, idx) => (
                                <TableRow key={idx} className="hover:bg-muted/30">
                                    <TableCell className="text-xs">{m.nit}</TableCell>
                                    <TableCell className="text-xs font-medium">{m.razon}</TableCell>
                                    <TableCell className="text-xs">{m.tipo}</TableCell>
                                    <TableCell className="text-xs">{m.vigencia}</TableCell>
                                    <TableCell className="text-center">
                                        <Badge variant="success-soft-outline">
                                            {m.estado}
                                        </Badge>
                                    </TableCell>
                                    <TableCell className="text-center">
                                        <div className="flex items-center justify-center gap-1">
                                            <Button variant="ghost" size="icon" className="h-8 w-8 hover:bg-primary hover:text-primary-foreground">
                                                <Eye className="h-4 w-4" />
                                            </Button>
                                            <Button variant="ghost" size="icon" className="h-8 w-8 text-destructive hover:text-destructive/80 hover:bg-destructive/10">
                                                <Heart className="h-4 w-4" />
                                            </Button>
                                        </div>
                                    </TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </div>
            </Card>
        </TabsContent>

        {/* TAB 3: TITULOS */}
        <TabsContent value="titulos" className="mt-0 space-y-4">
             {/* Filters & Actions */}
             <div className="flex flex-col md:flex-row items-center justify-between gap-4 bg-card p-4 rounded-lg border border-border shadow-sm">
                <div className="flex items-center gap-4 w-full md:w-auto flex-wrap">
                    <div className="w-full md:w-40">
                        <Select>
                            <SelectTrigger className="h-9 text-xs">
                                <SelectValue placeholder="Emisor: Todo" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectItem value="all">Todo</SelectItem>
                            </SelectContent>
                        </Select>
                    </div>
                    <div className="w-full md:w-40">
                        <Select>
                            <SelectTrigger className="h-9 text-xs">
                                <SelectValue placeholder="Tenedor: Todo" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectItem value="all">Todo</SelectItem>
                            </SelectContent>
                        </Select>
                    </div>
                     <div className="w-full md:w-40">
                        <Select>
                            <SelectTrigger className="h-9 text-xs">
                                <SelectValue placeholder="Estado: Todo" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectItem value="all">Todo</SelectItem>
                            </SelectContent>
                        </Select>
                    </div>
                </div>
                <div className="flex items-center gap-3 w-full md:w-auto">
                    <Button variant="outline" className="border-success text-success hover:bg-success/10 h-9 text-xs">
                        Estado de los Títulos
                    </Button>
                    <Button className="bg-primary text-primary-foreground hover:bg-primary/90 font-bold h-9 text-xs">
                        <Plus className="mr-2 h-3 w-3" />
                        Agregar Título
                    </Button>
                </div>
            </div>

            <Card className="border-none shadow-md overflow-hidden">
                <div className="overflow-x-auto">
                    <Table>
                        <TableHeader className="bg-muted/50">
                            <TableRow>
                                <TableHead className="font-bold text-secondary text-xs whitespace-nowrap">NUMERACIÓN</TableHead>
                                <TableHead className="font-bold text-secondary text-xs whitespace-nowrap">FECHA VENCIMIENTO</TableHead>
                                <TableHead className="font-bold text-secondary text-xs whitespace-nowrap">EMISOR</TableHead>
                                <TableHead className="font-bold text-secondary text-xs whitespace-nowrap">TENEDOR</TableHead>
                                <TableHead className="font-bold text-secondary text-xs text-right whitespace-nowrap">VALOR ACTUAL</TableHead>
                                <TableHead className="font-bold text-secondary text-xs text-center whitespace-nowrap">ESTADO RADIAN</TableHead>
                                <TableHead className="font-bold text-secondary text-xs text-center whitespace-nowrap">OPCIONES</TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {titulos.map((t, idx) => (
                                <TableRow key={idx} className="hover:bg-muted/30">
                                    <TableCell className="text-xs font-medium">{t.num}</TableCell>
                                    <TableCell className="text-xs">{t.venc}</TableCell>
                                    <TableCell className="text-xs max-w-[150px] truncate" title={t.emisor}>{t.emisor}</TableCell>
                                    <TableCell className="text-xs max-w-[150px] truncate" title={t.tenedor}>{t.tenedor}</TableCell>
                                    <TableCell className="text-xs text-right">{t.valor}</TableCell>
                                    <TableCell className="text-center">
                                        <Badge variant="warning-soft-outline" className="text-xs px-2 py-0.5">
                                            {t.estado}
                                        </Badge>
                                    </TableCell>
                                    <TableCell className="text-center">
                                        <DropdownMenu>
                                            <DropdownMenuTrigger asChild>
                                                <Button variant="ghost" size="icon" className="h-8 w-8">
                                                    <MoreVertical className="h-4 w-4 text-muted-foreground" />
                                                </Button>
                                            </DropdownMenuTrigger>
                                            <DropdownMenuContent align="end">
                                                <DropdownMenuItem>
                                                    <Eye className="mr-2 h-4 w-4" /> Ver Detalle
                                                </DropdownMenuItem>
                                                <DropdownMenuItem>
                                                    <Edit className="mr-2 h-4 w-4" /> Editar
                                                </DropdownMenuItem>
                                                <DropdownMenuItem>
                                                    <Download className="mr-2 h-4 w-4" /> Descargar
                                                </DropdownMenuItem>
                                            </DropdownMenuContent>
                                        </DropdownMenu>
                                    </TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </div>
            </Card>
        </TabsContent>

      </Tabs>
    </div>
  );
}