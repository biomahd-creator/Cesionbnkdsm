import { useState } from "react";
import { Button } from "../../components/ui/button";
import { Badge } from "../../components/ui/badge";
import { Input } from "../../components/ui/input";
import { Checkbox } from "../../components/ui/checkbox";
import { Progress } from "../../components/ui/progress";
import { Avatar, AvatarImage, AvatarFallback } from "../../components/ui/avatar";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../../components/ui/table";
import {
  Search,
  ChevronDown,
  ChevronUp,
  ArrowRight,
  Upload,
  FileCheck2,
  Clock,
  FileX,
  Trash2,
} from "lucide-react";
import { FactoringKpiCardGroup } from "../../components/patterns/FactoringKpiCardGroup";
import imgEllipse348 from "figma:asset/97fb249d8224347851df11e33a2650a2e731b545.png";
import svgPaths from "../../imports/svg-xhnwietn29";

// Datos mock para las facturas
const mockInvoices = [
  {
    id: "1",
    number: "SETP123456790",
    invoiceValue: "$ 8.345.679.123",
    advanceValue: "$ 10.000.000.000",
    lastEvent: "Aceptación expresa",
    state: "Endosable",
    observations: "Agravamiento Riesgo: ...",
    validFrom: "27 Nov",
    validTo: "27 Dic",
    daysToExpire: 30,
    progress: 75,
    // Campos adicionales para otros tabs
    reviewStatus: "Pendiente de aprobación",
    rejectionReason: "Factura vencida",
    discardReason: "No cumple requisitos",
    discardDate: "15 Ene 2026",
    reviewer: "Juan Pérez",
  },
  {
    id: "2",
    number: "SETP123456790",
    invoiceValue: "$ 8.345.679.123",
    advanceValue: "$ 10.000.000.000",
    lastEvent: "Aceptación expresa",
    state: "Endosable",
    observations: "Agravamiento Riesgo: ...",
    validFrom: "27 Nov",
    validTo: "27 Dic",
    daysToExpire: 30,
    progress: 75,
    reviewStatus: "En revisión",
    rejectionReason: "Monto excede cupo",
    discardReason: "Duplicada",
    discardDate: "16 Ene 2026",
    reviewer: "María García",
  },
  {
    id: "3",
    number: "SETP123456790",
    invoiceValue: "$ 8.345.679.123",
    advanceValue: "$ 10.000.000.000",
    lastEvent: "Aceptación expresa",
    state: "Endosable",
    observations: "Agravamiento Riesgo: ...",
    validFrom: "27 Nov",
    validTo: "27 Dic",
    daysToExpire: 30,
    progress: 75,
    reviewStatus: "Requiere documentos",
    rejectionReason: "Cliente en mora",
    discardReason: "Error en datos",
    discardDate: "17 Ene 2026",
    reviewer: "Carlos Ruiz",
  },
];

export function FactoringNewOperationScreen() {
  const [selectedInvoices, setSelectedInvoices] = useState<string[]>([]);
  const [expandedClients, setExpandedClients] = useState<string[]>(["client-1"]);
  const [activeTab, setActiveTab] = useState<"elegibles" | "pendientes" | "no-elegibles" | "descartadas">("elegibles");
  const [hoveredTab, setHoveredTab] = useState<string | null>(null);

  const toggleClient = (clientId: string) => {
    setExpandedClients((prev) =>
      prev.includes(clientId)
        ? prev.filter((id) => id !== clientId)
        : [...prev, clientId]
    );
  };

  const toggleInvoice = (invoiceId: string) => {
    setSelectedInvoices((prev) =>
      prev.includes(invoiceId)
        ? prev.filter((id) => id !== invoiceId)
        : [...prev, invoiceId]
    );
  };

  const selectAll = () => {
    setSelectedInvoices(mockInvoices.map((inv) => inv.id));
  };

  const deselectAll = () => {
    setSelectedInvoices([]);
  };

  return (
    <div className="min-h-screen bg-background p-8 pb-32">
      <div className="mx-auto max-w-[1500px]">
        {/* Header Section con Stepper */}
        <div className="mb-6 flex items-center justify-between">
          <h1 className="text-2xl">
            Factoring <span className="text-muted-foreground">Nueva Operación</span>
          </h1>
        </div>

        {/* Stepper horizontal */}
        <div className="relative mb-8 rounded-lg bg-card p-6 shadow-lg">
          <div className="flex items-center justify-between">
            {/* Avatar y Company Info */}
            <div className="flex items-center gap-4">
              <Avatar className="h-16 w-16">
                <AvatarImage src={imgEllipse348} alt="EVOAGRO" />
                <AvatarFallback>EV</AvatarFallback>
              </Avatar>
              <div>
                <p className="text-base">EVOAGRO Nutrición S.A.S.</p>
                <p className="text-base text-muted-foreground">NIT 9004892348</p>
              </div>
            </div>

            {/* Step 1 */}
            <div className="flex flex-col items-start gap-2">
              <p className="text-sm">Selecciona tus facturas</p>
              <p className="w-[181px] text-xs leading-tight text-muted-foreground">
                Elige las facturas que quieres adelantar. Puedes seleccionar facturas de diferentes pagadores.
              </p>
            </div>

            {/* Badge 1 */}
            <Badge variant="secondary" className="h-10 w-10 rounded-full text-base">
              1
            </Badge>

            {/* Step 2 */}
            <div className="flex flex-col items-start gap-2">
              <p className="text-sm">Revisa tu Operacion</p>
              <p className="w-[182px] text-xs leading-tight text-muted-foreground">
                Verifica que todos los datos sean correctos y confirma tu operación para seguir adelante.
              </p>
            </div>

            {/* Badge 2 */}
            <Badge variant="secondary" className="h-10 w-10 rounded-full text-base">
              2
            </Badge>

            {/* Step 3 */}
            <div className="flex flex-col items-start gap-2">
              <p className="text-sm">Recibe tu Dinero</p>
              <p className="w-[195px] text-xs leading-tight text-muted-foreground">
                Cuando tu operación sea aprobada, recibirás el dinero directamente en tu cuenta bancaria.
              </p>
            </div>

            {/* Badge 3 */}
            <Badge variant="secondary" className="h-10 w-10 rounded-full text-base">
              3
            </Badge>

            {/* Botón Cargar */}
            <Button className="rounded-lg bg-primary text-primary-foreground">
              <svg className="mr-2 h-4 w-4" fill="none" viewBox="0 0 13.25 13.25">
                <path d={svgPaths.p2b604500} fill="currentColor" />
              </svg>
              Cargar Mas Facturas
            </Button>
          </div>
        </div>

        {/* Stats Cards Grid - Sistema de Tabs usando DSM KpiCard */}
        <div className="mb-6">
          <FactoringKpiCardGroup
            cards={[
              {
                id: "elegibles",
                label: "Facturas Elegibles",
                description: "Facturas disponibles para Operar",
                value: "$ 234.847.908",
                count: 234,
                variant: "lime",
                onAction: () => setActiveTab("elegibles"),
                icon: <FileCheck2 />,
              },
              {
                id: "pendientes",
                label: "Facturas Pendientes",
                description: "Pendientes de revisión",
                value: "$ 87.948.009",
                count: 234,
                variant: "orange",
                onAction: () => setActiveTab("pendientes"),
                icon: <Clock />,
              },
              {
                id: "no-elegibles",
                label: "Facturas No Elegibles",
                description: "Vencidas / Otros Eventos",
                value: "$ 0",
                count: 234,
                variant: "blue",
                onAction: () => setActiveTab("no-elegibles"),
                icon: <FileX />,
              },
              {
                id: "descartadas",
                label: "Facturas Descartadas",
                description: "Marcadas como Descarte",
                value: "$ 0",
                count: 218,
                variant: "default",
                onAction: () => setActiveTab("descartadas"),
                icon: <Trash2 />,
              },
            ]}
            activeId={activeTab}
          />
        </div>

        {/* Sección Clientes/Pagadores */}
        <div>
          <h3 className="mb-4 text-sm">Clientes/Pagadores</h3>

          {/* Cliente 1 - Expandido */}
          <div className="mb-4 rounded-lg border bg-card">
            <div
              className="flex cursor-pointer items-center justify-between p-4"
              onClick={() => toggleClient("client-1")}
            >
              <div className="flex items-center gap-3">
                <h4>Industria Nacional de Plásticos</h4>
                <div className="inline-flex items-center gap-1.5 rounded-lg bg-green-200 dark:bg-green-900/40 px-2 py-0.5 text-xs text-green-700 dark:text-green-300">
                  4/34 seleccionadas
                </div>
              </div>
              <div className="flex items-center gap-6 text-sm">
                <div>
                  <span className="text-muted-foreground">Cupo Disponible </span>
                  <span>$ 215.365.241</span>
                </div>
                <div>
                  <span className="text-muted-foreground">Monto Elegible </span>
                  <span>$ 201.365.241</span>
                </div>
                <div>
                  <span className="text-muted-foreground">Tasa N.M.V. </span>
                  <span>2.63 %</span>
                </div>
                {expandedClients.includes("client-1") ? (
                  <ChevronUp className="h-5 w-5" />
                ) : (
                  <ChevronDown className="h-5 w-5" />
                )}
              </div>
            </div>

            {expandedClients.includes("client-1") && (
              <div className="border-t px-4 pb-4 pt-4">
                {/* Progress Bar */}
                <div className="mb-6">
                  <div className="mb-2 flex items-center justify-between">
                    <div className="inline-flex items-center gap-1.5 rounded-lg bg-green-200 dark:bg-green-900/40 px-2 py-0.5 text-xs text-green-700 dark:text-green-300">
                      4/34 seleccionadas
                    </div>
                  </div>
                  <Progress value={75} className="h-2" />
                </div>

                {/* Filtros y búsqueda */}
                <div className="mb-4 flex items-center gap-3">
                  <div className="relative flex-1">
                    <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                    <Input placeholder="Busca por valor, fecha..." className="pl-9" />
                  </div>
                  <Button variant="outline" size="sm">
                    Estado
                  </Button>
                  <Button variant="outline" size="sm" onClick={selectAll}>
                    Selección Automática
                  </Button>
                  <Button variant="outline" size="sm" onClick={selectAll}>
                    Seleccionar Todas Elegibles
                  </Button>
                  <Button variant="outline" size="sm" onClick={deselectAll}>
                    Deseleccionar Todas
                  </Button>
                  <Button variant="outline" size="sm">
                    Descartar
                  </Button>
                </div>

                {/* Tabla de facturas */}
                <div className="rounded-lg border">
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead className="w-12"></TableHead>
                        <TableHead className="text-xs">Numeración</TableHead>
                        <TableHead className="text-xs">Valor Factura</TableHead>
                        
                        {/* Columnas específicas según el tab activo */}
                        {activeTab === "elegibles" && (
                          <>
                            <TableHead className="text-xs">Valor Adelanto</TableHead>
                            <TableHead className="text-xs">Ultimo Evento</TableHead>
                            <TableHead className="text-xs">Estado</TableHead>
                            <TableHead className="text-xs">Observaciones</TableHead>
                            <TableHead className="text-xs">Vigencia</TableHead>
                            <TableHead className="text-xs">Días al Vencimiento</TableHead>
                          </>
                        )}
                        
                        {activeTab === "pendientes" && (
                          <>
                            <TableHead className="text-xs">Estado de Revisión</TableHead>
                            <TableHead className="text-xs">Revisor Asignado</TableHead>
                            <TableHead className="text-xs">Ultimo Evento</TableHead>
                            <TableHead className="text-xs">Observaciones</TableHead>
                            <TableHead className="text-xs">Días al Vencimiento</TableHead>
                          </>
                        )}
                        
                        {activeTab === "no-elegibles" && (
                          <>
                            <TableHead className="text-xs">Motivo de Rechazo</TableHead>
                            <TableHead className="text-xs">Estado</TableHead>
                            <TableHead className="text-xs">Observaciones</TableHead>
                            <TableHead className="text-xs">Días al Vencimiento</TableHead>
                          </>
                        )}
                        
                        {activeTab === "descartadas" && (
                          <>
                            <TableHead className="text-xs">Motivo de Descarte</TableHead>
                            <TableHead className="text-xs">Fecha de Descarte</TableHead>
                            <TableHead className="text-xs">Descartado Por</TableHead>
                            <TableHead className="text-xs">Observaciones</TableHead>
                          </>
                        )}
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {mockInvoices.map((invoice) => (
                        <TableRow key={invoice.id}>
                          <TableCell>
                            <Checkbox
                              checked={selectedInvoices.includes(invoice.id)}
                              onCheckedChange={() => toggleInvoice(invoice.id)}
                            />
                          </TableCell>
                          <TableCell className="text-sm">{invoice.number}</TableCell>
                          <TableCell className="text-sm">{invoice.invoiceValue}</TableCell>
                          
                          {/* Celdas específicas según el tab activo */}
                          {activeTab === "elegibles" && (
                            <>
                              <TableCell className="text-sm">{invoice.advanceValue}</TableCell>
                              <TableCell>
                                <div className="inline-flex items-center gap-1.5 rounded-lg bg-blue-200/70 dark:bg-blue-900/40 px-2 py-0.5 text-xs">
                                  {invoice.lastEvent}
                                </div>
                              </TableCell>
                              <TableCell className="text-sm">
                                <span>{invoice.observations} </span>
                                <a href="#" onClick={(e: React.MouseEvent) => e.preventDefault()} className="text-blue-600 underline">
                                  mas
                                </a>
                              </TableCell>
                              <TableCell className="text-center text-sm">
                                {invoice.daysToExpire}
                              </TableCell>
                            </>
                          )}
                          
                          {activeTab === "pendientes" && (
                            <>
                              <TableCell>
                                <div className="inline-flex items-center gap-1.5 rounded-lg bg-orange-100 px-2 py-0.5 text-xs text-orange-700">
                                  {invoice.reviewStatus}
                                </div>
                              </TableCell>
                              <TableCell className="text-sm">{invoice.reviewer}</TableCell>
                              <TableCell>
                                <div className="inline-flex items-center gap-1.5 rounded-lg bg-blue-200/70 dark:bg-blue-900/40 px-2 py-0.5 text-xs">
                                  {invoice.lastEvent}
                                </div>
                              </TableCell>
                              <TableCell className="text-sm">
                                <span>{invoice.observations} </span>
                                <a href="#" onClick={(e: React.MouseEvent) => e.preventDefault()} className="text-blue-600 underline">
                                  mas
                                </a>
                              </TableCell>
                              <TableCell className="text-center text-sm">
                                {invoice.daysToExpire}
                              </TableCell>
                            </>
                          )}
                          
                          {activeTab === "no-elegibles" && (
                            <>
                              <TableCell>
                                <div className="inline-flex items-center gap-1.5 rounded-lg bg-red-100 px-2 py-0.5 text-xs text-red-700">
                                  {invoice.rejectionReason}
                                </div>
                              </TableCell>
                              <TableCell>
                                <div className="inline-flex items-center gap-1.5 rounded-lg bg-red-100 px-2 py-0.5 text-xs text-red-700">
                                  No Elegible
                                </div>
                              </TableCell>
                              <TableCell className="text-sm">
                                <span>{invoice.observations} </span>
                                <a href="#" onClick={(e: React.MouseEvent) => e.preventDefault()} className="text-blue-600 underline">
                                  mas
                                </a>
                              </TableCell>
                              <TableCell className="text-center text-sm">
                                {invoice.daysToExpire}
                              </TableCell>
                            </>
                          )}
                          
                          {activeTab === "descartadas" && (
                            <>
                              <TableCell>
                                <div className="inline-flex items-center gap-1.5 rounded-lg bg-muted px-2 py-0.5 text-xs text-muted-foreground">
                                  {invoice.discardReason}
                                </div>
                              </TableCell>
                              <TableCell className="text-sm">{invoice.discardDate}</TableCell>
                              <TableCell className="text-sm">{invoice.reviewer}</TableCell>
                              <TableCell className="text-sm">
                                <span>{invoice.observations} </span>
                                <a href="#" onClick={(e: React.MouseEvent) => e.preventDefault()} className="text-blue-600 underline">
                                  mas
                                </a>
                              </TableCell>
                            </>
                          )}
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </div>
              </div>
            )}
          </div>

          {/* Cliente 2 - Colapsado */}
          <div className="mb-4 rounded-lg border bg-card">
            <div
              className="flex cursor-pointer items-center justify-between p-4"
              onClick={() => toggleClient("client-2")}
            >
              <div className="flex items-center gap-3">
                <h4>Industria Nacional de Plásticos</h4>
                <div className="inline-flex items-center gap-1.5 rounded-lg bg-green-200/70 dark:bg-green-900/40 px-2 py-0.5 text-xs">
                  4/34 seleccionadas
                </div>
              </div>
              <div className="flex items-center gap-6 text-sm">
                <div>
                  <span className="text-muted-foreground">Cupo Disponible </span>
                  <span>$ 215.365.241</span>
                </div>
                <div>
                  <span className="text-muted-foreground">Monto Elegible </span>
                  <span>$ 201.365.241</span>
                </div>
                <div>
                  <span className="text-muted-foreground">Tasa N.M.V. </span>
                  <span>2.63 %</span>
                </div>
                {expandedClients.includes("client-2") ? (
                  <ChevronUp className="h-5 w-5" />
                ) : (
                  <ChevronDown className="h-5 w-5" />
                )}
              </div>
            </div>
          </div>

          {/* Cliente 3 - Colapsado */}
          <div className="mb-4 rounded-lg border bg-card">
            <div
              className="flex cursor-pointer items-center justify-between p-4"
              onClick={() => toggleClient("client-3")}
            >
              <div className="flex items-center gap-3">
                <h4>Industria Nacional de Plásticos</h4>
                <div className="inline-flex items-center gap-1.5 rounded-lg bg-green-200/70 dark:bg-green-900/40 px-2 py-0.5 text-xs">
                  4/34 seleccionadas
                </div>
              </div>
              <div className="flex items-center gap-6 text-sm">
                <div>
                  <span className="text-muted-foreground">Cupo Disponible </span>
                  <span>$ 215.365.241</span>
                </div>
                <div>
                  <span className="text-muted-foreground">Monto Elegible </span>
                  <span>$ 201.365.241</span>
                </div>
                <div>
                  <span className="text-muted-foreground">Tasa N.M.V. </span>
                  <span>2.63 %</span>
                </div>
                {expandedClients.includes("client-3") ? (
                  <ChevronUp className="h-5 w-5" />
                ) : (
                  <ChevronDown className="h-5 w-5" />
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Barra flotante inferior - FIXED */}
      <div className="fixed bottom-8 left-1/2 w-[calc(100%-4rem)] max-w-[1500px] -translate-x-1/2 rounded-lg bg-secondary p-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-12">
            <div className="text-center">
              <p className="text-sm text-white">Facturas Elegidas</p>
              <p className="text-2xl text-primary">37</p>
            </div>
            <div className="h-12 w-px bg-white/20" />
            <div className="text-center">
              <p className="text-sm text-white">Pagadores</p>
              <p className="text-2xl text-primary">4</p>
            </div>
            <div className="h-12 w-px bg-white/20" />
            <div className="text-center">
              <p className="text-sm text-white">Monto Total</p>
              <p className="text-2xl text-primary">$ 72.266.214</p>
            </div>
            <ArrowRight className="h-6 w-6 text-primary" />
            <div className="text-center">
              <p className="text-sm text-white">Adelanto Estimado</p>
              <p className="text-2xl text-primary">$ 70.265.214</p>
            </div>
          </div>
          <Button className="rounded-lg">Iniciar Operación</Button>
        </div>
      </div>
    </div>
  );
}