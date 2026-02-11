/**
 * RadianAdminDashboard
 * ─────────────────────
 * REFACTOR FINAL (Point-and-Click Fix):
 * Se ha optimizado el renderizado de las tablas eliminando sub-componentes innecesarios
 * y asegurando el uso de llaves únicas y renderizado directo de TableRow.
 */
import { useState } from "react";
import { 
  FileText, 
  Search, 
  History, 
  Plus, 
  Eye, 
  Heart, 
  MoreVertical,
  Download,
  Edit,
  ArrowLeft,
  FileCheck2,
  Receipt,
} from "lucide-react";
import { Button } from "../../ui/button";
import { Card } from "../../ui/card";
import { Tabs, TabsContent } from "../../ui/tabs";
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

interface RadianAdminDashboardProps {
  onBack?: () => void;
}

export function RadianAdminDashboard({ onBack }: RadianAdminDashboardProps) {
  const [activeTab, setActiveTab] = useState("operaciones");

  // MOCK DATA - OPERACIONES
  const operaciones = [
    {
        id: "OP-001",
        nitEndosante: "901298003",
        razonEndosante: "CESIONBNK SAS",
        nitEndosatario: "901061400",
        razonEndosatario: "PATRIMONIO AUTÓNOMO...",
        facturas: 1,
        totalFacturas: "$2.429.028",
        totalEndosado: "$2.101.117"
    },
    {
        id: "OP-002",
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
          id: "M-001",
          nit: "830107457",
          razon: "SUNAO TRADING SAS",
          tipo: "Documento General",
          vigencia: "Ilimitado",
          estado: "Vigente"
      },
      {
          id: "M-002",
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
          id: "T-001",
          num: "OPI251",
          venc: "2025-01-30",
          emisor: "CI PETROIL S.A.S.",
          tenedor: "CI PETROIL S.A.S.",
          valor: "$102.938.617",
          estado: "Factura Electrónica"
      },
      {
          id: "T-002",
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
        
        <FactoringKpiCardGroup
          className="mb-8"
          activeId={activeTab}
          onCardClick={setActiveTab}
          cards={[
            { id: "operaciones", label: "Operaciones", description: "Gestión de endosos", value: "$ 120.000.000", count: 12, variant: "yellow", icon: <FileText /> },
            { id: "mandatos", label: "Mandatos", description: "Contratos activos", value: "$ -", count: 5, variant: "orange", icon: <FileCheck2 /> },
            { id: "titulos", label: "Títulos Valor", description: "Registrados en RADIAN", value: "$ 890.500.000", count: 45, variant: "blue", icon: <Receipt /> },
          ]}
        />

        {/* TAB 1: OPERACIONES */}
        <TabsContent value="operaciones" className="mt-0 space-y-4">
             <MasterDataGrid
                title="Operaciones"
                totalItems={operaciones.length}
                itemsPerPage={10}
                currentPage={1}
                totalPages={1}
                onPageChange={() => {}}
                toolbarActions={
                  <div className="flex items-center gap-2">
                    <Button variant="outline" size="sm" className="h-9"><FileText className="mr-2 h-4 w-4" />Nuevo Endoso</Button>
                    <Button variant="outline" size="sm" className="h-9"><Search className="mr-2 h-4 w-4" />Consulta</Button>
                    <Button variant="outline" size="sm" className="h-9"><History className="mr-2 h-4 w-4" />Histórico</Button>
                  </div>
                }
             >
                <div className="overflow-x-auto">
                  <Table>
                    <TableHeader className="bg-muted/50">
                        <TableRow>
                            <TableHead className="text-xs font-bold">ENDOSANTE</TableHead>
                            <TableHead className="text-xs font-bold">ENDOSATARIO</TableHead>
                            <TableHead className="text-xs font-bold text-center">FACTURAS</TableHead>
                            <TableHead className="text-xs font-bold text-right">TOTAL FACTURAS</TableHead>
                            <TableHead className="text-xs font-bold text-right">TOTAL ENDOSADO</TableHead>
                            <TableHead className="text-xs font-bold text-center">OPCIONES</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {operaciones.map((op) => (
                            <TableRow key={op.id} className="hover:bg-muted/50">
                                <TableCell>
                                    <div className="font-bold text-sm">{op.razonEndosante}</div>
                                    <div className="text-[10px] text-muted-foreground uppercase">{op.nitEndosante}</div>
                                </TableCell>
                                <TableCell>
                                    <div className="font-bold text-sm">{op.razonEndosatario}</div>
                                    <div className="text-[10px] text-muted-foreground uppercase">{op.nitEndosatario}</div>
                                </TableCell>
                                <TableCell className="text-center font-medium">{op.facturas}</TableCell>
                                <TableCell className="text-right tabular-nums">{op.totalFacturas}</TableCell>
                                <TableCell className="text-right tabular-nums text-primary font-bold">{op.totalEndosado}</TableCell>
                                <TableCell className="text-center">
                                    <Button variant="ghost" size="icon" className="h-8 w-8 hover:bg-primary/10"><Eye className="h-4 w-4" /></Button>
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
            <div className="flex items-center justify-between gap-4 bg-card p-4 rounded-xl border shadow-sm">
                <div className="flex gap-2">
                    <Select><SelectTrigger className="h-9 w-40 text-xs"><SelectValue placeholder="Tipo Mandato" /></SelectTrigger><SelectContent><SelectItem value="all">Todos</SelectItem></SelectContent></Select>
                    <Select><SelectTrigger className="h-9 w-40 text-xs"><SelectValue placeholder="Estado" /></SelectTrigger><SelectContent><SelectItem value="all">Vigentes</SelectItem></SelectContent></Select>
                </div>
                <Button className="bg-primary hover:bg-primary/90 font-bold h-9"><Plus className="mr-2 h-4 w-4" />Agregar Mandato</Button>
            </div>

            <Card className="border shadow-md overflow-hidden rounded-xl">
                <div className="overflow-x-auto">
                    <Table>
                        <TableHeader className="bg-muted/50">
                            <TableRow>
                                <TableHead className="text-xs font-bold">NIT MANDANTE</TableHead>
                                <TableHead className="text-xs font-bold">RAZÓN MANDANTE</TableHead>
                                <TableHead className="text-xs font-bold">TIPO MANDATO</TableHead>
                                <TableHead className="text-xs font-bold">VIGENCIA</TableHead>
                                <TableHead className="text-xs font-bold text-center">ESTADO</TableHead>
                                <TableHead className="text-xs font-bold text-center">OPCIONES</TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {mandatos.map((m) => (
                                <TableRow key={m.id} className="hover:bg-muted/30">
                                    <TableCell className="text-xs font-medium">{m.nit}</TableCell>
                                    <TableCell className="text-sm font-bold">{m.razon}</TableCell>
                                    <TableCell className="text-xs">{m.tipo}</TableCell>
                                    <TableCell className="text-xs">{m.vigencia}</TableCell>
                                    <TableCell className="text-center">
                                        <Badge variant="success-soft-outline">{m.estado}</Badge>
                                    </TableCell>
                                    <TableCell className="text-center">
                                        <div className="flex items-center justify-center gap-1">
                                            <Button variant="ghost" size="icon" className="h-8 w-8 hover:bg-primary/10"><Eye className="h-4 w-4" /></Button>
                                            <Button variant="ghost" size="icon" className="h-8 w-8 text-destructive hover:bg-destructive/10"><Heart className="h-4 w-4" /></Button>
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
             <div className="flex items-center justify-between gap-4 bg-card p-4 rounded-xl border shadow-sm">
                <div className="flex gap-2">
                    <Select><SelectTrigger className="h-9 w-40 text-xs"><SelectValue placeholder="Emisor" /></SelectTrigger><SelectContent><SelectItem value="all">Todos</SelectItem></SelectContent></Select>
                    <Select><SelectTrigger className="h-9 w-40 text-xs"><SelectValue placeholder="Estado RADIAN" /></SelectTrigger><SelectContent><SelectItem value="all">Todo</SelectItem></SelectContent></Select>
                </div>
                <div className="flex gap-2">
                    <Button variant="outline" className="h-9 text-xs">Estado Títulos</Button>
                    <Button className="bg-primary font-bold h-9 text-xs"><Plus className="mr-2 h-3 w-3" />Agregar Título</Button>
                </div>
            </div>

            <Card className="border shadow-md overflow-hidden rounded-xl">
                <div className="overflow-x-auto">
                    <Table>
                        <TableHeader className="bg-muted/50">
                            <TableRow>
                                <TableHead className="text-xs font-bold">NUMERACIÓN</TableHead>
                                <TableHead className="text-xs font-bold">VENCIMIENTO</TableHead>
                                <TableHead className="text-xs font-bold">EMISOR</TableHead>
                                <TableHead className="text-xs font-bold">TENEDOR</TableHead>
                                <TableHead className="text-xs font-bold text-right">VALOR</TableHead>
                                <TableHead className="text-xs font-bold text-center">ESTADO RADIAN</TableHead>
                                <TableHead className="text-xs font-bold text-center">OPCIONES</TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {titulos.map((t) => (
                                <TableRow key={t.id} className="hover:bg-muted/30">
                                    <TableCell className="text-sm font-bold text-primary">{t.num}</TableCell>
                                    <TableCell className="text-xs">{t.venc}</TableCell>
                                    <TableCell className="text-xs max-w-[150px] truncate">{t.emisor}</TableCell>
                                    <TableCell className="text-xs max-w-[150px] truncate">{t.tenedor}</TableCell>
                                    <TableCell className="text-right tabular-nums font-medium">{t.valor}</TableCell>
                                    <TableCell className="text-center">
                                        <Badge variant="warning-soft-outline" className="text-[10px]">{t.estado}</Badge>
                                    </TableCell>
                                    <TableCell className="text-center">
                                        <DropdownMenu>
                                            <DropdownMenuTrigger asChild><Button variant="ghost" size="icon" className="h-8 w-8"><MoreVertical className="h-4 w-4" /></Button></DropdownMenuTrigger>
                                            <DropdownMenuContent align="end">
                                                <DropdownMenuItem><Eye className="mr-2 h-4 w-4" /> Ver Detalle</DropdownMenuItem>
                                                <DropdownMenuItem><Edit className="mr-2 h-4 w-4" /> Editar</DropdownMenuItem>
                                                <DropdownMenuItem><Download className="mr-2 h-4 w-4" /> Descargar</DropdownMenuItem>
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
