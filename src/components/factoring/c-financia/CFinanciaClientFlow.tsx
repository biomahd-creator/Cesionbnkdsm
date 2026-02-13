/**
 * CFinanciaClientFlow
 * ─────────────────────
 * REFACTOR FINAL (Point-and-Click Fix):
 * Se ha optimizado el renderizado de la lista de clientes eliminando capas de 
 * sub-componentes y asegurando que cada Card y Header sea identificable.
 * Utiliza FactoringInvoiceTable (ya refactorizado) para el detalle de facturas.
 */
import { useState, useMemo } from "react";
import { cn } from "../../ui/utils";
import { CFinanciaNavbar } from "./CFinanciaNavbar";
import { Button } from "../../ui/button";
import { Card, CardContent, CardHeader } from "../../ui/card";
import { Badge } from "../../ui/badge";
import { Input } from "../../ui/input";
import { Checkbox } from "../../ui/checkbox";
import { Progress } from "../../ui/progress";
import { Avatar, AvatarImage, AvatarFallback } from "../../ui/avatar";
import { ToggleButtonGroup } from "../../ui/toggle-button-group";
import {
  Search,
  ChevronDown,
  ChevronUp,
  Filter,
  Calendar,
  Landmark,
  Check,
  Home,
  Wand2,
  ListChecks,
  XSquare,
  Trash2,
  FileCheck2,
  Clock,
  FileX,
} from "lucide-react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../../ui/select";
import imgEllipse348 from "figma:asset/97fb249d8224347851df11e33a2650a2e731b545.png";
import svgPaths from "../../../imports/svg-xhnwietn29";
import { LoadInvoicesModal } from "./LoadInvoicesModal";
import { FactoringKpiCardGroup } from "../../patterns/FactoringKpiCardGroup";
import { FactoringInvoiceTable } from "../../patterns/factoring/FactoringInvoiceTable";
import type { FactoringInvoice } from "../../patterns/factoring/FactoringInvoiceTable";
import {
  Breadcrumb,
  BreadcrumbList,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbSeparator,
  BreadcrumbPage,
} from "../../ui/breadcrumb";

// Tipos para los datos
interface Invoice {
  id: string;
  number: string;
  invoiceValue: string;
  advanceValue: string;
  lastEvent: string;
  state: string;
  observations: string;
  validFrom: string;
  validTo: string;
  daysToExpire: number;
  progress: number;
  reviewStatus: string;
  rejectionReason: string;
  discardReason: string;
  discardDate: string;
  reviewer: string;
  rawAmount: number;
  category: "elegibles" | "pendientes" | "no-elegibles" | "descartadas";
}

interface Client {
  id: string;
  name: string;
  nit: string;
  availableQuota: string;
  eligibleAmount: string;
  rate: string;
  selectedCount: number;
  totalCount: number;
  quotaUsage: number;
  invoices: Invoice[];
}

const generateMockData = (): Client[] => {
  const clientNames = [
    "Industria Nacional de Plásticos",
    "Comercializadora Global S.A.S.",
    "Logística Avanzada del Norte",
    "Distribuidora de Alimentos del Valle",
    "Manufacturas Textiles de Occidente",
    "Servicios Integrales de Ingeniería",
  ];

  return clientNames.map((name, index) => {
    const clientId = `client-${index + 1}`;
    const invoiceCount = 20;
    
    const invoices: Invoice[] = Array.from({ length: invoiceCount }).map((_, i) => {
      const amount = Math.floor(Math.random() * 50000000) + 5000000;
      const categories: Invoice["category"][] = ["elegibles", "pendientes", "no-elegibles", "descartadas"];
      const category = categories[i % 4];
      
      return {
        id: `${clientId}-inv-${i + 1}`,
        number: `SETP${Math.floor(Math.random() * 10000000)}`,
        invoiceValue: `$ ${amount.toLocaleString("es-CO")}`,
        advanceValue: `$ ${(amount * 0.9).toLocaleString("es-CO")}`,
        lastEvent: ["Aceptación expresa", "Recibo mercancía", "Radicación"][i % 3],
        state: category === "elegibles" ? "Endosable" : "Pendiente",
        observations: "Observación registrada en sistema",
        validFrom: "01 Ene",
        validTo: "01 Feb",
        daysToExpire: 30,
        progress: 50,
        reviewStatus: "En revisión",
        rejectionReason: "Factura vencida",
        discardReason: "No cumple requisitos",
        discardDate: "01 Ene 2026",
        reviewer: "Juan Pérez",
        rawAmount: amount,
        category,
      };
    });

    return {
      id: clientId,
      name,
      nit: `900.123.456-${index}`,
      availableQuota: `$ 500.000.000`,
      eligibleAmount: `$ 250.000.000`,
      rate: `2.50 %`,
      selectedCount: 5,
      totalCount: invoiceCount,
      quotaUsage: 45,
      invoices,
    };
  });
};

const mockClientsData = generateMockData();

export function CFinanciaClientFlow({ onExit }: { onExit?: () => void }) {
  const [activeTab, setActiveTab] = useState<"elegibles" | "pendientes" | "no-elegibles" | "descartadas">("elegibles");
  const [operationType, setOperationType] = useState<"factoring" | "confirming">("factoring");
  const [responsibilityType, setResponsibilityType] = useState<"con" | "sin">("con");
  const [expandedClients, setExpandedClients] = useState<string[]>(["client-1"]);
  const [selectedInvoices, setSelectedInvoices] = useState<string[]>([]);
  const [clientSearch, setClientSearch] = useState<Record<string, string>>({});
  const [globalSearch, setGlobalSearch] = useState("");
  const [isInsured, setIsInsured] = useState(true);

  const handleGlobalSelectAll = () => {
    const allIds: string[] = [];
    mockClientsData.forEach(client => {
      client.invoices.forEach(inv => allIds.push(inv.id));
    });
    setSelectedInvoices(allIds);
  };

  const handleGlobalSelectAllEligible = () => {
    const allIds: string[] = [];
    mockClientsData.forEach(client => {
       client.invoices.filter(i => i.category === 'elegibles').forEach(inv => allIds.push(inv.id));
    });
    setSelectedInvoices(allIds);
  };

  const kpiStats = useMemo(() => {
    const stats = {
      elegibles: { count: 0, amount: 0 },
      pendientes: { count: 0, amount: 0 },
      "no-elegibles": { count: 0, amount: 0 },
      descartadas: { count: 0, amount: 0 },
    };
    mockClientsData.forEach(client => {
      client.invoices.forEach(inv => {
        if (stats[inv.category]) {
          stats[inv.category].count += 1;
          stats[inv.category].amount += inv.rawAmount;
        }
      });
    });
    return stats;
  }, []);

  const toggleClient = (clientId: string) => {
    setExpandedClients(prev => prev.includes(clientId) ? prev.filter(id => id !== clientId) : [...prev, clientId]);
  };

  const toggleInvoice = (invoiceId: string) => {
    setSelectedInvoices(prev => prev.includes(invoiceId) ? prev.filter(id => id !== invoiceId) : [...prev, invoiceId]);
  };

  return (
    <div className="min-h-screen bg-muted/50">
      <CFinanciaNavbar onLogout={onExit} variant="full" />
      
      <div className="min-h-screen bg-muted/50 p-8 pb-32 pt-[90px]">
        <div className="mb-6">
          <Breadcrumb>
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbLink href="#" onClick={(e) => e.preventDefault()} className="flex items-center gap-2">
                  <Home className="h-4 w-4" />
                  Inicio
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbLink href="#" onClick={(e) => e.preventDefault()}>Factoring</BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbPage>Nueva Operación</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </div>

        <div className="mb-6">
          <h1 className="text-2xl font-semibold tracking-tight">Factoring Nueva operacion</h1>
          <p className="text-sm text-muted-foreground mt-2">Completa a continuacion la informacion de la negociacion</p>
        </div>

        {/* Stepper horizontal / Client Card */}
        <div className="relative mb-8 rounded-lg bg-card p-6 shadow-lg">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <Avatar className="h-16 w-16">
                <AvatarImage src={imgEllipse348} alt="EVOAGRO" />
                <AvatarFallback>EV</AvatarFallback>
              </Avatar>
              <div>
                <p className="text-base font-medium">EVOAGRO Nutrición S.A.S.</p>
                <p className="text-base text-muted-foreground">NIT 9004892348</p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <Badge variant="secondary" className="h-10 w-10 shrink-0 rounded-full text-base flex items-center justify-center bg-muted text-muted-foreground hover:bg-accent">1</Badge>
              <div className="flex flex-col items-start gap-1">
                <p className="text-sm font-semibold">Selecciona tus facturas</p>
                <p className="w-[180px] text-[10px] leading-tight text-muted-foreground">Elige las facturas que quieres adelantar. Puedes seleccionar de diferentes pagadores.</p>
              </div>
            </div>

            <div className="flex items-start gap-3 opacity-50">
              <Badge variant="secondary" className="h-10 w-10 shrink-0 rounded-full text-base flex items-center justify-center bg-muted text-muted-foreground">2</Badge>
              <div className="flex flex-col items-start gap-1">
                <p className="text-sm font-semibold">Revisa tu Operacion</p>
                <p className="w-[180px] text-[10px] leading-tight text-muted-foreground">Verifica que todos los datos sean correctos y confirma tu operación.</p>
              </div>
            </div>

            <LoadInvoicesModal>
              <Button className="rounded-lg bg-primary text-primary-foreground">
                <FileCheck2 className="mr-2 h-4 w-4" />
                Cargar Mas Facturas
              </Button>
            </LoadInvoicesModal>
          </div>
        </div>

        {/* Formulario de Negociación */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
            <Card className="shadow-sm">
                <CardHeader className="pb-3"><h3 className="font-semibold text-base">Información Endosatario</h3></CardHeader>
                <CardContent className="space-y-4">
                    <div className="flex items-center space-x-2">
                        <Checkbox id="endosar" /><label htmlFor="endosar" className="text-sm font-medium">Endosar a un Tercero</label>
                    </div>
                    <div className="space-y-1">
                        <label className="text-xs text-muted-foreground uppercase">Razón social</label>
                        <Input className="bg-muted/30" />
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                        <div className="space-y-1">
                            <label className="text-xs text-muted-foreground uppercase">Tipo Doc</label>
                            <Select><SelectTrigger><SelectValue placeholder="NIT" /></SelectTrigger><SelectContent><SelectItem value="nit">NIT</SelectItem><SelectItem value="cc">CC</SelectItem></SelectContent></Select>
                        </div>
                        <div className="space-y-1">
                            <label className="text-xs text-muted-foreground uppercase">Número</label>
                            <Input className="bg-muted/30" />
                        </div>
                    </div>
                </CardContent>
            </Card>

            <Card className="shadow-sm">
                 <CardHeader className="pb-3"><h3 className="font-semibold text-base">Información de Negociación</h3></CardHeader>
                <CardContent className="space-y-4">
                    <div className="grid grid-cols-2 gap-4">
                         <div className="space-y-1">
                            <label className="text-xs text-muted-foreground uppercase">Operación</label>
                            <ToggleButtonGroup options={[{ value: "factoring", label: "Factoring" }, { value: "confirming", label: "Confirming" }]} value={operationType} onChange={setOperationType} variant="primary" />
                        </div>
                         <div className="space-y-1">
                            <label className="text-xs text-muted-foreground uppercase">Tipo</label>
                            <Select><SelectTrigger><SelectValue placeholder="Con Recurso" /></SelectTrigger><SelectContent><SelectItem value="con-recurso">Con Recurso</SelectItem><SelectItem value="sin-recurso">Sin Recurso</SelectItem></SelectContent></Select>
                        </div>
                    </div>
                     <div className="grid grid-cols-2 gap-4">
                        <div className="space-y-1">
                            <label className="text-xs text-primary uppercase font-bold">Financiamiento %</label>
                            <Input placeholder="90" />
                        </div>
                        <div className="space-y-1">
                             <label className="text-xs text-muted-foreground uppercase">Tasa E.A. %</label>
                             <Input placeholder="24.5" />
                        </div>
                    </div>
                    <div className="space-y-1">
                        <label className="text-xs text-muted-foreground uppercase">Responsabilidad</label>
                        <ToggleButtonGroup options={[{ value: "con", label: "Con" }, { value: "sin", label: "Sin" }]} value={responsibilityType} onChange={setResponsibilityType} variant="primary" />
                    </div>
                </CardContent>
            </Card>

            <Card className="shadow-sm">
                <CardHeader className="pb-3 flex flex-row items-center justify-between">
                    <h3 className="font-semibold text-base">Información Bancaria</h3>
                     <Button variant="ghost" size="sm" className="h-8 text-[10px] text-primary">Agregar Cuenta</Button>
                </CardHeader>
                <CardContent className="space-y-4">
                     <div className="space-y-1">
                        <label className="text-xs text-muted-foreground uppercase">Titular</label>
                        <Input className="bg-muted/30" />
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                        <div className="space-y-1">
                            <label className="text-xs text-muted-foreground uppercase">Banco</label>
                            <Select><SelectTrigger><SelectValue placeholder="Bancolombia" /></SelectTrigger><SelectContent><SelectItem value="bancolombia">Bancolombia</SelectItem></SelectContent></Select>
                        </div>
                         <div className="space-y-1">
                            <label className="text-xs text-muted-foreground uppercase">Cuenta</label>
                            <Input className="bg-muted/30" />
                        </div>
                    </div>
                    <div className="flex items-center justify-between p-2 rounded-lg bg-muted/20 border">
                        <span className="text-xs font-medium">¿Asegurada?</span>
                        <div className="flex gap-1">
                            <Button size="sm" variant={isInsured ? "default" : "outline"} className="h-7 text-[10px] px-3" onClick={() => setIsInsured(true)}>Si</Button>
                            <Button size="sm" variant={!isInsured ? "default" : "outline"} className="h-7 text-[10px] px-3" onClick={() => setIsInsured(false)}>No</Button>
                        </div>
                    </div>
                </CardContent>
            </Card>
        </div>

        <div className="mb-6">
          <FactoringKpiCardGroup
            cards={[
              { id: "elegibles", label: "Facturas Elegibles", description: "Disponibles", value: `$ ${kpiStats.elegibles.amount.toLocaleString("es-CO")}`, count: kpiStats.elegibles.count, variant: "lime", icon: <FileCheck2 /> },
              { id: "pendientes", label: "Facturas Pendientes", description: "En revisión", value: `$ ${kpiStats.pendientes.amount.toLocaleString("es-CO")}`, count: kpiStats.pendientes.count, variant: "orange", icon: <Clock /> },
              { id: "no-elegibles", label: "Facturas No Elegibles", description: "Vencidas", value: `$ ${kpiStats["no-elegibles"].amount.toLocaleString("es-CO")}`, count: kpiStats["no-elegibles"].count, variant: "blue", icon: <FileX /> },
              { id: "descartadas", label: "Facturas Descartadas", description: "Descarte", value: `$ ${kpiStats.descartadas.amount.toLocaleString("es-CO")}`, count: kpiStats.descartadas.count, variant: "default", icon: <Trash2 /> },
            ]}
            activeId={activeTab}
            onCardClick={(id) => setActiveTab(id as any)}
          />
        </div>

        {/* Lista de Clientes - Renderizado Plano */}
        <div className="space-y-4">
          <div className="flex items-center justify-between gap-4 mb-4">
            <div className="relative w-full md:w-80">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input placeholder="Buscar en clientes..." className="pl-9 h-10 bg-card shadow-sm" value={globalSearch} onChange={(e) => setGlobalSearch(e.target.value)} />
            </div>
            <div className="flex items-center gap-2">
                <Button variant="outline" size="sm" className="h-10 px-4" onClick={handleGlobalSelectAll}>Auto-Selección</Button>
                <Button variant="outline" size="sm" className="h-10 px-4" onClick={handleGlobalSelectAllEligible}>Toda Elegible</Button>
                <Button variant="outline" size="sm" className="h-10 px-4 text-destructive" onClick={() => setSelectedInvoices([])}>Limpiar</Button>
            </div>
          </div>

          {mockClientsData.map((client) => {
            const isExpanded = expandedClients.includes(client.id);
            const clientSelectedCount = client.invoices.filter(inv => selectedInvoices.includes(inv.id)).length;
            
            return (
              <div key={client.id} className="rounded-xl border bg-card shadow-sm overflow-hidden transition-all duration-300">
                <div 
                  className={cn("p-5 flex items-center justify-between cursor-pointer hover:bg-muted/30 transition-colors", isExpanded && "bg-muted/20")}
                  onClick={() => toggleClient(client.id)}
                >
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold">{client.name[0]}</div>
                    <div className="flex flex-col">
                      <h4 className="font-bold text-foreground leading-none">{client.name}</h4>
                      <span className="text-[10px] text-muted-foreground uppercase mt-1">NIT: {client.nit}</span>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-8">
                    <div className="hidden md:flex flex-col gap-1 min-w-[120px]">
                      <div className="flex justify-between text-[10px] font-medium uppercase text-muted-foreground">
                        <span>Cupo</span>
                        <span>{client.availableQuota}</span>
                      </div>
                      <Progress value={client.quotaUsage} className="h-1.5" />
                    </div>
                    
                    <div className="hidden lg:flex flex-col items-end">
                      <span className="text-[10px] text-muted-foreground uppercase">Tasa N.M.V.</span>
                      <span className="font-bold text-sm">{client.rate}</span>
                    </div>

                    <Badge variant={clientSelectedCount > 0 ? "success-soft-outline" : "secondary"} className="h-6">
                      {clientSelectedCount}/{client.totalCount} seleccionadas
                    </Badge>

                    {isExpanded ? <ChevronUp className="h-5 w-5 text-muted-foreground" /> : <ChevronDown className="h-5 w-5 text-muted-foreground" />}
                  </div>
                </div>

                {isExpanded && (
                  <div className="p-4 border-t bg-muted/5 animate-in slide-in-from-top-2 duration-300">
                    <FactoringInvoiceTable
                      invoices={client.invoices as FactoringInvoice[]}
                      activeTab={activeTab}
                      selectedInvoices={selectedInvoices}
                      onToggleInvoice={toggleInvoice}
                      onSelectAll={(ids) => setSelectedInvoices(prev => Array.from(new Set([...prev, ...ids])))}
                      onDeselectAll={(ids) => setSelectedInvoices(prev => prev.filter(id => !ids.includes(id)))}
                      filterByCategory={true}
                      showToolbar={true}
                    />
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}