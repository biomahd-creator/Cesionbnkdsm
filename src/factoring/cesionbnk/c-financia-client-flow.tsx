/**
 * CFinanciaClientFlow — Client Flow (Tenant-aware)
 * Uses semantic design tokens so it adapts to the active tenant theme.
 *
 * v0.4.0 — Refactored from dark-first cf-ui to standard DSM components.
 */
import { useState, useMemo } from "react";
import { cn } from "../../lib/utils";
import { CFinanciaNavbar } from "./c-financia-navbar";
import { Card, CardContent, CardHeader, CardTitle } from "../../components/ui/card";
import { Button } from "../../components/ui/button";
import { Input } from "../../components/ui/input";
import { Checkbox } from "../../components/ui/checkbox";
import { Progress } from "../../components/ui/progress";
import { Avatar, AvatarImage, AvatarFallback } from "../../components/ui/avatar";
import { Badge } from "../../components/ui/badge";
import { ToggleButtonGroup } from "../../components/ui/toggle-button-group";
import {
  Search,
  ChevronDown,
  ChevronUp,
  FileCheck2,
  Clock,
  FileX,
  Trash2,
  Home,
} from "lucide-react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../../components/ui/select";
import imgEllipse348 from "figma:asset/97fb249d8224347851df11e33a2650a2e731b545.png";
import { LoadInvoicesModal } from "./load-invoices-modal";
import { FactoringInvoiceTable } from "../../components/patterns/factoring/factoring-invoice-table";
import type { FactoringInvoice } from "../../components/patterns/factoring/factoring-invoice-table";
import {
  Breadcrumb,
  BreadcrumbList,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbSeparator,
  BreadcrumbPage,
} from "../../components/ui/breadcrumb";

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
       client.invoices.filter(i => i.category === "elegibles").forEach(inv => allIds.push(inv.id));
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
    <div className="min-h-screen w-full">
      <div className="min-h-screen bg-background">
        <CFinanciaNavbar onLogout={onExit} variant="full" />

        <div className="min-h-screen p-8 pb-32 pt-[90px]">
          <div className="mb-6">
            <Breadcrumb>
              <BreadcrumbList>
                <BreadcrumbItem>
                  <BreadcrumbLink href="#" onClick={(e) => e.preventDefault()} className="flex items-center gap-2 text-muted-foreground hover:text-primary">
                    <Home className="h-4 w-4" />
                    Inicio
                  </BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator />
                <BreadcrumbItem>
                  <BreadcrumbLink href="#" onClick={(e) => e.preventDefault()} className="text-muted-foreground hover:text-primary">Factoring</BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator />
                <BreadcrumbItem>
                  <BreadcrumbPage className="text-foreground">Nueva Operación</BreadcrumbPage>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>
          </div>

          <div className="mb-6">
            <h1 className="text-2xl font-semibold tracking-tight text-foreground">Factoring Nueva Operación</h1>
            <p className="text-sm text-muted-foreground mt-2">Completa a continuación la información de la negociación</p>
          </div>

          {/* Stepper / Client Card */}
          <Card className="mb-8">
            <CardContent className="p-6 flex items-center justify-between">
              <div className="flex items-center gap-4">
                <Avatar className="h-16 w-16">
                  <AvatarImage src={imgEllipse348} alt="EVOAGRO" />
                  <AvatarFallback className="bg-primary/10 text-primary">EV</AvatarFallback>
                </Avatar>
                <div>
                  <p className="text-base font-medium text-foreground">EVOAGRO Nutrición S.A.S.</p>
                  <p className="text-sm text-muted-foreground">NIT 9004892348</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="h-10 w-10 shrink-0 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold text-base">1</div>
                <div className="flex flex-col items-start gap-1">
                  <p className="text-sm font-semibold text-foreground">Selecciona tus facturas</p>
                  <p className="w-[180px] text-[10px] leading-tight text-muted-foreground">Elige las facturas que quieres adelantar. Puedes seleccionar de diferentes pagadores.</p>
                </div>
              </div>

              <div className="flex items-start gap-3 opacity-40">
                <div className="h-10 w-10 shrink-0 rounded-full bg-muted text-muted-foreground border border-border flex items-center justify-center font-bold text-base">2</div>
                <div className="flex flex-col items-start gap-1">
                  <p className="text-sm font-semibold text-muted-foreground">Revisa tu Operación</p>
                  <p className="w-[180px] text-[10px] leading-tight text-muted-foreground">Verifica que todos los datos sean correctos y confirma tu operación.</p>
                </div>
              </div>

              <LoadInvoicesModal>
                <Button size="default" className="gap-2">
                  <FileCheck2 className="h-4 w-4" />
                  Cargar Más Facturas
                </Button>
              </LoadInvoicesModal>
            </CardContent>
          </Card>

          {/* Formulario de Negociación */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
            {/* Card: Información Endosatario */}
            <Card>
              <CardHeader className="px-6 pt-5 pb-3">
                <CardTitle className="text-base">Información Endosatario</CardTitle>
              </CardHeader>
              <CardContent className="p-6 pt-0 space-y-4">
                <div className="flex items-center space-x-2">
                  <Checkbox id="endosar" />
                  <label htmlFor="endosar" className="text-sm font-medium text-muted-foreground">Endosar a un Tercero</label>
                </div>
                <div className="space-y-1">
                  <label className="text-xs text-muted-foreground uppercase tracking-wider">Razón social</label>
                  <Input />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-1">
                    <label className="text-xs text-muted-foreground uppercase tracking-wider">Tipo Doc</label>
                    <Select><SelectTrigger><SelectValue placeholder="NIT" /></SelectTrigger><SelectContent><SelectItem value="nit">NIT</SelectItem><SelectItem value="cc">CC</SelectItem></SelectContent></Select>
                  </div>
                  <div className="space-y-1">
                    <label className="text-xs text-muted-foreground uppercase tracking-wider">Número</label>
                    <Input />
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Card: Información de Negociación */}
            <Card>
              <CardHeader className="px-6 pt-5 pb-3">
                <CardTitle className="text-base">Información de Negociación</CardTitle>
              </CardHeader>
              <CardContent className="p-6 pt-0 space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-1">
                    <label className="text-xs text-muted-foreground uppercase tracking-wider">Operación</label>
                    <ToggleButtonGroup options={[{ value: "factoring", label: "Factoring" }, { value: "confirming", label: "Confirming" }]} value={operationType} onChange={(v) => setOperationType(v as "factoring" | "confirming")} variant="primary" />
                  </div>
                  <div className="space-y-1">
                    <label className="text-xs text-muted-foreground uppercase tracking-wider">Tipo</label>
                    <Select><SelectTrigger><SelectValue placeholder="Con Recurso" /></SelectTrigger><SelectContent><SelectItem value="con-recurso">Con Recurso</SelectItem><SelectItem value="sin-recurso">Sin Recurso</SelectItem></SelectContent></Select>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-1">
                    <label className="text-xs text-primary uppercase tracking-wider font-bold">Financiamiento %</label>
                    <Input placeholder="90" />
                  </div>
                  <div className="space-y-1">
                    <label className="text-xs text-muted-foreground uppercase tracking-wider">Tasa E.A. %</label>
                    <Input placeholder="24.5" />
                  </div>
                </div>
                <div className="space-y-1">
                  <label className="text-xs text-muted-foreground uppercase tracking-wider">Responsabilidad</label>
                  <ToggleButtonGroup options={[{ value: "con", label: "Con" }, { value: "sin", label: "Sin" }]} value={responsibilityType} onChange={(v) => setResponsibilityType(v as "con" | "sin")} variant="primary" />
                </div>
              </CardContent>
            </Card>

            {/* Card: Información Bancaria */}
            <Card>
              <CardHeader className="px-6 pt-5 pb-3 flex flex-row items-center justify-between">
                <CardTitle className="text-base">Información Bancaria</CardTitle>
                <button className="text-[10px] text-primary hover:text-primary/80 transition-colors">Agregar Cuenta</button>
              </CardHeader>
              <CardContent className="p-6 pt-0 space-y-4">
                <div className="space-y-1">
                  <label className="text-xs text-muted-foreground uppercase tracking-wider">Titular</label>
                  <Input />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-1">
                    <label className="text-xs text-muted-foreground uppercase tracking-wider">Banco</label>
                    <Select><SelectTrigger><SelectValue placeholder="Bancolombia" /></SelectTrigger><SelectContent><SelectItem value="bancolombia">Bancolombia</SelectItem></SelectContent></Select>
                  </div>
                  <div className="space-y-1">
                    <label className="text-xs text-muted-foreground uppercase tracking-wider">Cuenta</label>
                    <Input />
                  </div>
                </div>
                <div className="flex items-center justify-between p-3 rounded-[var(--radius)] bg-muted/50 border border-border">
                  <span className="text-xs font-medium text-muted-foreground">¿Asegurada?</span>
                  <div className="flex gap-1">
                    <button className={cn("h-7 px-3 rounded-md text-[10px] font-medium transition-all duration-200", isInsured ? "bg-primary text-primary-foreground" : "bg-muted text-muted-foreground border border-border hover:bg-muted/80")} onClick={() => setIsInsured(true)}>Sí</button>
                    <button className={cn("h-7 px-3 rounded-md text-[10px] font-medium transition-all duration-200", !isInsured ? "bg-primary text-primary-foreground" : "bg-muted text-muted-foreground border border-border hover:bg-muted/80")} onClick={() => setIsInsured(false)}>No</button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* KPI Cards */}
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4 mb-6">
            {([
              { key: "elegibles" as const, label: "Facturas Elegibles", desc: "Disponibles", icon: FileCheck2, variant: "default" },
              { key: "pendientes" as const, label: "Facturas Pendientes", desc: "En revisión", icon: Clock, variant: "warning" },
              { key: "no-elegibles" as const, label: "Facturas No Elegibles", desc: "Vencidas", icon: FileX, variant: "info" },
              { key: "descartadas" as const, label: "Facturas Descartadas", desc: "Descarte", icon: Trash2, variant: "secondary" },
            ]).map((kpi) => {
              const Icon = kpi.icon;
              const isActive = activeTab === kpi.key;
              return (
                <Card
                  key={kpi.key}
                  className={cn(
                    "cursor-pointer transition-all duration-300 shadow-elevation-1",
                    isActive ? "ring-2 ring-primary border-primary shadow-elevation-4" : "hover:shadow-elevation-2"
                  )}
                  onClick={() => setActiveTab(kpi.key)}
                >
                  <CardContent className="p-5">
                    <div className="flex items-start justify-between gap-3">
                      <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10 text-primary shrink-0">
                        <Icon className="h-5 w-5" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="text-xs text-muted-foreground uppercase tracking-wider">{kpi.label}</p>
                        <p className="text-xl font-bold text-foreground mt-0.5 tracking-tight">
                          $ {kpiStats[kpi.key].amount.toLocaleString("es-CO")}
                        </p>
                        <p className="text-xs text-muted-foreground mt-1">{kpiStats[kpi.key].count} facturas • {kpi.desc}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          {/* Lista de Clientes */}
          <div className="space-y-4">
            <div className="flex items-center justify-between gap-4 mb-4">
              <div className="relative w-full md:w-80">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input
                  placeholder="Buscar en clientes..."
                  className="pl-9"
                  value={globalSearch}
                  onChange={(e) => setGlobalSearch(e.target.value)}
                />
              </div>
              <div className="flex items-center gap-2">
                <Button variant="outline" size="sm" onClick={handleGlobalSelectAll}>Auto-Selección</Button>
                <Button variant="outline" size="sm" onClick={handleGlobalSelectAllEligible}>Toda Elegible</Button>
                <Button variant="destructive" size="sm" onClick={() => setSelectedInvoices([])}>Limpiar</Button>
              </div>
            </div>

            {mockClientsData.map((client) => {
              const isExpanded = expandedClients.includes(client.id);
              const clientSelectedCount = client.invoices.filter(inv => selectedInvoices.includes(inv.id)).length;

              return (
                <Card key={client.id} className="overflow-hidden transition-all duration-300 hover:border-primary/30">
                  <div
                    className={cn("p-5 flex items-center justify-between cursor-pointer hover:bg-muted/50 transition-colors", isExpanded && "bg-muted/30")}
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
                        <span className="font-bold text-sm text-foreground">{client.rate}</span>
                      </div>

                      <Badge variant={clientSelectedCount > 0 ? "default" : "secondary"}>
                        {clientSelectedCount}/{client.totalCount} seleccionadas
                      </Badge>

                      {isExpanded ? <ChevronUp className="h-5 w-5 text-muted-foreground" /> : <ChevronDown className="h-5 w-5 text-muted-foreground" />}
                    </div>
                  </div>

                  {isExpanded && (
                    <div className="p-4 border-t border-border bg-muted/20 animate-in slide-in-from-top-2 duration-300">
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
                </Card>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}