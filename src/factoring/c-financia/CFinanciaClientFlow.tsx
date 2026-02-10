import { useState, useMemo } from "react";
import { CFinanciaNavbar } from "./CFinanciaNavbar";
import { Button } from "../../components/ui/button";
import { Card, CardContent, CardHeader } from "../../components/ui/card";
import { Badge } from "../../components/ui/badge";
import { Input } from "../../components/ui/input";
import { Checkbox } from "../../components/ui/checkbox";
import { Progress } from "../../components/ui/progress";
import { Avatar, AvatarImage, AvatarFallback } from "../../components/ui/avatar";
import { ToggleButtonGroup } from "../../components/ui/toggle-button-group";
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
} from "../../components/ui/select";
import imgEllipse348 from "figma:asset/97fb249d8224347851df11e33a2650a2e731b545.png";
import svgPaths from "../../imports/svg-xhnwietn29";
import { LoadInvoicesModal } from "./LoadInvoicesModal";
import { FactoringKpiCardGroup } from "../../components/patterns/FactoringKpiCardGroup";
import { FactoringInvoiceTable } from "../../components/patterns/factoring/FactoringInvoiceTable";
import type { FactoringInvoice } from "../../components/patterns/factoring/FactoringInvoiceTable";
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
  rawAmount: number; // Para cálculos
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

// Generador de datos aleatorios
const generateMockData = (): Client[] => {
  const clientNames = [
    "Industria Nacional de Plásticos",
    "Comercializadora Global S.A.S.",
    "Logística Avanzada del Norte",
    "Distribuidora de Alimentos del Valle",
    "Manufacturas Textiles de Occidente",
    "Servicios Integrales de Ingeniería",
    "Agroindustria del Campo Ltda.",
    "Tecnología y Sistemas Avanzados",
    "Transportes Rápidos de Colombia",
    "Constructora Bolívar y Asociados",
    "Importadora de Repuestos Automotrices",
  ];

  return clientNames.map((name, index) => {
    const clientId = `client-${index + 1}`;
    const invoiceCount = Math.floor(Math.random() * 15) + 20; // 20 a 35 facturas
    
    const invoices: Invoice[] = Array.from({ length: invoiceCount }).map((_, i) => {
      const amount = Math.floor(Math.random() * 50000000) + 5000000;
      const categories: Invoice["category"][] = ["elegibles", "pendientes", "no-elegibles", "descartadas"];
      const category = categories[Math.floor(Math.random() * categories.length)];
      
      return {
        id: `${clientId}-inv-${i + 1}`,
        number: `SETP${Math.floor(Math.random() * 10000000)}`,
        invoiceValue: `$ ${amount.toLocaleString("es-CO")}`,
        advanceValue: `$ ${(amount * 0.9).toLocaleString("es-CO")}`,
        lastEvent: ["Aceptación expresa", "Recibo mercancía", "Radicación"][Math.floor(Math.random() * 3)],
        state: category === "elegibles" ? "Endosable" : "Pendiente",
        observations: "Observación registrada en sistema",
        validFrom: `${Math.floor(Math.random() * 28) + 1} Ene`,
        validTo: `${Math.floor(Math.random() * 28) + 1} Feb`,
        daysToExpire: Math.floor(Math.random() * 60) + 10,
        progress: Math.floor(Math.random() * 100),
        reviewStatus: ["Pendiente de aprobación", "En revisión", "Requiere documentos"][Math.floor(Math.random() * 3)],
        rejectionReason: ["Factura vencida", "Monto excede cupo", "Nit no coincide"][Math.floor(Math.random() * 3)],
        discardReason: ["No cumple requisitos", "Duplicada", "Error en datos"][Math.floor(Math.random() * 3)],
        discardDate: `${Math.floor(Math.random() * 28) + 1} Ene 2026`,
        reviewer: ["Juan Pérez", "María García", "Carlos Ruiz", "Ana López"][Math.floor(Math.random() * 4)],
        rawAmount: amount,
        category,
      };
    });

    return {
      id: clientId,
      name,
      nit: `900.${Math.floor(Math.random() * 900) + 100}.${Math.floor(Math.random() * 900) + 100}`,
      availableQuota: `$ ${(Math.floor(Math.random() * 500000000) + 100000000).toLocaleString("es-CO")}`,
      eligibleAmount: `$ ${(Math.floor(Math.random() * 400000000) + 50000000).toLocaleString("es-CO")}`,
      rate: `${(Math.random() * 1.5 + 1.5).toFixed(2)} %`,
      selectedCount: Math.floor(Math.random() * invoiceCount),
      totalCount: invoiceCount,
      quotaUsage: Math.floor(Math.random() * 60) + 20, // 20% to 80% usage
      invoices,
    };
  });
};

const mockClientsData = generateMockData();

interface CFinanciaClientFlowProps {
  onExit?: () => void;
}

export function CFinanciaClientFlow({ onExit }: CFinanciaClientFlowProps) {
  const [activeTab, setActiveTab] = useState<"elegibles" | "pendientes" | "no-elegibles" | "descartadas">("elegibles");
  const [operationType, setOperationType] = useState<"factoring" | "confirming">("factoring");
  const [responsibilityType, setResponsibilityType] = useState<"con" | "sin">("con");
  const [expandedClients, setExpandedClients] = useState<string[]>(["client-1"]);
  const [selectedInvoices, setSelectedInvoices] = useState<string[]>([]);
  const [clientPages, setClientPages] = useState<Record<string, number>>({});
  const [clientSearch, setClientSearch] = useState<Record<string, string>>({});
  const [globalSearch, setGlobalSearch] = useState("");
  const [isInsured, setIsInsured] = useState(true);

  const handleGlobalSelectAll = () => {
    const allIds: string[] = [];
    mockClientsData.forEach(client => {
      client.invoices.forEach(inv => allIds.push(inv.id));
    });
    setSelectedInvoices(prev => {
      const combined = new Set([...prev, ...allIds]);
      return Array.from(combined);
    });
  };

  const handleGlobalSelectAllEligible = () => {
    const allIds: string[] = [];
    mockClientsData.forEach(client => {
       const elegibles = client.invoices.filter(i => i.category === 'elegibles');
       elegibles.forEach(inv => allIds.push(inv.id));
    });
    setSelectedInvoices(prev => {
      const combined = new Set([...prev, ...allIds]);
      return Array.from(combined);
    });
  };

  const handleGlobalDeselectAll = () => {
    setSelectedInvoices([]);
  };

  // Calcular totales para KPI Cards basado en los datos reales
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

  const tabTitles = {
    "elegibles": "Facturas Elegibles",
    "pendientes": "Facturas Pendientes",
    "no-elegibles": "Facturas No Elegibles",
    "descartadas": "Facturas Descartadas",
  };

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

  const selectAll = (invoices: Invoice[]) => {
    const newIds = invoices.map(inv => inv.id);
    setSelectedInvoices(prev => {
      const combined = new Set([...prev, ...newIds]);
      return Array.from(combined);
    });
  };

  const deselectAll = (invoices: Invoice[]) => {
    const idsToRemove = new Set(invoices.map(inv => inv.id));
    setSelectedInvoices(prev => prev.filter(id => !idsToRemove.has(id)));
  };

  const handleLogout = () => {
    if (onExit) {
      onExit();
    }
  };

  return (
    <div className="min-h-screen bg-muted/50">
      {/* Navbar C-Financia con variant full para mostrar avatar y opciones */}
      <CFinanciaNavbar onLogout={handleLogout} variant="full" />
      
      {/* Main Content */}
      <div className="min-h-screen bg-muted/50 p-8 pb-32 pt-[90px]">
        <div className="mb-6">
          <Breadcrumb>
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbLink href="#" onClick={(e: React.MouseEvent) => e.preventDefault()} className="flex items-center gap-2">
                  <Home className="h-4 w-4" />
                  Inicio
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbLink href="#" onClick={(e: React.MouseEvent) => e.preventDefault()}>Factoring</BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbPage>Nueva Operación</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </div>

        {/* Header Section */}
        <div className="mb-6">
          <h1 className="text-2xl font-semibold tracking-tight">
            Factoring Nueva operacion
          </h1>
          <p className="text-sm text-muted-foreground mt-2">
            Completa a continuacion la informacion de la negociacion
          </p>
        </div>

        {/* Stepper horizontal / Client Card */}
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
            <div className="flex items-start gap-3">
              <Badge variant="secondary" className="h-10 w-10 shrink-0 rounded-full text-base flex items-center justify-center bg-muted text-muted-foreground hover:bg-accent">
                1
              </Badge>
              <div className="flex flex-col items-start gap-2">
                <p className="text-sm">Selecciona tus facturas</p>
                <p className="w-[181px] text-xs leading-tight text-muted-foreground">
                  Elige las facturas que quieres adelantar. Puedes seleccionar facturas de diferentes pagadores.
                </p>
              </div>
            </div>

            {/* Step 2 */}
            <div className="flex items-start gap-3">
              <Badge variant="secondary" className="h-10 w-10 shrink-0 rounded-full text-base flex items-center justify-center bg-muted text-muted-foreground hover:bg-accent">
                2
              </Badge>
              <div className="flex flex-col items-start gap-2">
                <p className="text-sm">Revisa tu Operacion</p>
                <p className="w-[182px] text-xs leading-tight text-muted-foreground">
                  Verifica que todos los datos sean correctos y confirma tu operación para seguir adelante.
                </p>
              </div>
            </div>

            {/* Step 3 */}
            <div className="flex items-start gap-3">
              <Badge variant="secondary" className="h-10 w-10 shrink-0 rounded-full text-base flex items-center justify-center bg-muted text-muted-foreground hover:bg-accent">
                3
              </Badge>
              <div className="flex flex-col items-start gap-2">
                <p className="text-sm">Recibe tu Dinero</p>
                <p className="w-[195px] text-xs leading-tight text-muted-foreground">
                  Cuando tu operación sea aprobada, recibirás el dinero directamente en tu cuenta bancaria.
                </p>
              </div>
            </div>

            {/* Botón Cargar con Modal */}
            <LoadInvoicesModal>
              <Button className="rounded-lg bg-primary text-primary-foreground">
                <svg className="mr-2 h-4 w-4" fill="none" viewBox="0 0 13.25 13.25">
                  <path d={svgPaths.p2b604500} fill="currentColor" />
                </svg>
                Cargar Mas Facturas
              </Button>
            </LoadInvoicesModal>
          </div>
        </div>

        {/* Formulario de Negociación */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
            {/* Información Endosatario */}
            <Card className="shadow-sm">
                <CardHeader className="pb-3">
                    <h3 className="font-semibold text-base">Información Endosatario</h3>
                </CardHeader>
                <CardContent className="space-y-4">
                    <div className="flex items-center space-x-2">
                        <Checkbox id="endosar" />
                        <label htmlFor="endosar" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                            Endosar a un Tercero
                        </label>
                    </div>
                    
                    <div className="space-y-2">
                        <label className="text-sm text-muted-foreground">Razón social</label>
                        <Input className="bg-muted/50" />
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                        <div className="space-y-2">
                            <label className="text-sm text-muted-foreground">Tipo Documento</label>
                            <Select>
                                <SelectTrigger>
                                    <SelectValue placeholder="Seleccionar" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectItem value="nit">NIT</SelectItem>
                                    <SelectItem value="cc">CC</SelectItem>
                                </SelectContent>
                            </Select>
                        </div>
                        <div className="space-y-2">
                            <label className="text-sm text-muted-foreground">Número Documento</label>
                            <Input className="bg-muted/50" />
                        </div>
                    </div>
                </CardContent>
            </Card>

            {/* Información de Negociación */}
            <Card className="shadow-sm">
                 <CardHeader className="pb-3">
                    <h3 className="font-semibold text-base">Información de Negociación</h3>
                </CardHeader>
                <CardContent className="space-y-4">
                    <div className="grid grid-cols-2 gap-4">
                         <div className="space-y-2">
                            <label className="text-sm text-muted-foreground">Operación</label>
                            <ToggleButtonGroup
                              options={[
                                { value: "factoring", label: "Factoring" },
                                { value: "confirming", label: "Confirming" }
                              ]}
                              value={operationType}
                              onChange={setOperationType}
                              variant="primary"
                            />
                        </div>
                         <div className="space-y-2">
                            <label className="text-sm text-muted-foreground">Tipo</label>
                            <Select>
                                <SelectTrigger>
                                    <SelectValue placeholder="Seleccionar" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectItem value="con-recurso">Con Recurso</SelectItem>
                                    <SelectItem value="sin-recurso">Sin Recurso</SelectItem>
                                </SelectContent>
                            </Select>
                        </div>
                    </div>

                     <div className="grid grid-cols-2 gap-4">
                        <div className="space-y-2">
                            <label className="text-sm text-green-600">Porcentaje Financiamiento</label>
                            <div className="relative">
                                <Input placeholder="Value" className="pr-8" />
                                <span className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground text-sm">%</span>
                            </div>
                        </div>
                        <div className="space-y-2">
                             <label className="text-sm text-muted-foreground">Tasa Efectiva Anual</label>
                             <div className="relative">
                                <Input placeholder="Value" className="pr-8" />
                                <span className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground text-sm">%</span>
                            </div>
                        </div>
                    </div>

                    <div className="space-y-2">
                        <label className="text-sm text-muted-foreground">Entrega del Título</label>
                        <ToggleButtonGroup
                          options={[
                            { value: "con", label: "Con Responsabilidad" },
                            { value: "sin", label: "Sin Responsabilidad" }
                          ]}
                          value={responsibilityType}
                          onChange={setResponsibilityType}
                          variant="primary"
                        />
                    </div>

                    <div className="space-y-2">
                        <label className="text-sm text-muted-foreground">Fecha de Pago</label>
                        <div className="relative">
                            <Input type="date" className="pl-10" defaultValue="2025-01-01" />
                            <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                        </div>
                    </div>
                </CardContent>
            </Card>

            {/* Información Bancaria */}
            <Card className="shadow-sm">
                <CardHeader className="pb-3 flex flex-row items-center justify-between space-y-0">
                    <h3 className="font-semibold text-base">Información Bancaria</h3>
                     <Button variant="ghost" size="sm" className="h-8 text-xs text-muted-foreground">
                        <Landmark className="mr-2 h-3 w-3" />
                        Agregar Cuenta
                    </Button>
                </CardHeader>
                <CardContent className="space-y-4">
                     <div className="space-y-2">
                        <label className="text-sm text-muted-foreground">Titular Cuenta</label>
                        <Input className="bg-muted/50" />
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                        <div className="space-y-2">
                            <label className="text-sm text-muted-foreground">Tipo Documento</label>
                             <Select>
                                <SelectTrigger>
                                    <SelectValue placeholder="Selecciona" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectItem value="nit">NIT</SelectItem>
                                    <SelectItem value="cc">CC</SelectItem>
                                </SelectContent>
                            </Select>
                        </div>
                        <div className="space-y-2">
                            <label className="text-sm text-muted-foreground">Número Documento</label>
                            <Input className="bg-muted/50" />
                        </div>
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                        <div className="space-y-2">
                            <label className="text-sm text-muted-foreground">Banco</label>
                             <Select>
                                <SelectTrigger>
                                    <SelectValue placeholder="Selecciona" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectItem value="bancolombia">Bancolombia</SelectItem>
                                    <SelectItem value="davivienda">Davivienda</SelectItem>
                                </SelectContent>
                            </Select>
                        </div>
                         <div className="space-y-2">
                            <label className="text-sm text-muted-foreground">Tipo de Cuenta</label>
                             <Select>
                                <SelectTrigger>
                                    <SelectValue placeholder="Selecciona" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectItem value="ahorros">Ahorros</SelectItem>
                                    <SelectItem value="corriente">Corriente</SelectItem>
                                </SelectContent>
                            </Select>
                        </div>
                    </div>

                     <div className="grid grid-cols-2 gap-4">
                        <div className="space-y-2">
                            <label className="text-sm text-muted-foreground">Número de Cuenta</label>
                            <Input className="bg-muted/50" />
                        </div>
                         <div className="space-y-2">
                            <label className="text-sm text-muted-foreground">Operación Asegurada?</label>
                            <div className="flex rounded-md border p-1 bg-muted">
                                <Button 
                                    size="sm" 
                                    variant="ghost" 
                                    className={`w-1/2 h-7 rounded text-xs gap-2 ${isInsured ? "bg-primary text-primary-foreground hover:bg-primary/90 hover:text-primary-foreground" : "text-muted-foreground hover:bg-muted"}`}
                                    onClick={() => setIsInsured(true)}
                                >
                                  {isInsured && <Check className="h-3 w-3" />} Si
                                </Button>
                                <Button 
                                    size="sm" 
                                    variant="ghost" 
                                    className={`w-1/2 h-7 rounded text-xs gap-2 ${!isInsured ? "bg-primary text-primary-foreground hover:bg-primary/90 hover:text-primary-foreground" : "text-muted-foreground hover:bg-muted"}`}
                                    onClick={() => setIsInsured(false)}
                                >
                                  {!isInsured && <Check className="h-3 w-3" />} No
                                </Button>
                            </div>
                        </div>
                    </div>
                </CardContent>
            </Card>
        </div>

        {/* Stats Cards Grid - Sistema de Tabs usando DSM KpiCard */}
        <div className="mb-6">
          <FactoringKpiCardGroup
            cards={[
              {
                id: "elegibles",
                label: "Facturas Elegibles",
                description: "Facturas disponibles para Operar",
                value: `$ ${kpiStats.elegibles.amount.toLocaleString("es-CO")}`,
                count: kpiStats.elegibles.count,
                variant: "lime",
                onAction: () => setActiveTab("elegibles"),
                icon: <FileCheck2 />,
              },
              {
                id: "pendientes",
                label: "Facturas Pendientes",
                description: "Pendientes de revisión",
                value: `$ ${kpiStats.pendientes.amount.toLocaleString("es-CO")}`,
                count: kpiStats.pendientes.count,
                variant: "orange",
                onAction: () => setActiveTab("pendientes"),
                icon: <Clock />,
              },
              {
                id: "no-elegibles",
                label: "Facturas No Elegibles",
                description: "Vencidas / Otros Eventos",
                value: `$ ${kpiStats["no-elegibles"].amount.toLocaleString("es-CO")}`,
                count: kpiStats["no-elegibles"].count,
                variant: "blue",
                onAction: () => setActiveTab("no-elegibles"),
                icon: <FileX />,
              },
              {
                id: "descartadas",
                label: "Facturas Descartadas",
                description: "Marcadas como Descarte",
                value: `$ ${kpiStats.descartadas.amount.toLocaleString("es-CO")}`,
                count: kpiStats.descartadas.count,
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
          <h3 className="mb-4 text-sm font-medium">{tabTitles[activeTab]}</h3>

          <div className="mb-6 flex flex-col gap-3 md:flex-row md:items-center justify-between">
            <div className="relative w-full md:w-72 lg:w-80">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input 
                placeholder="Buscar en todos los clientes..." 
                className="pl-9 h-9 bg-card shadow-sm" 
                value={globalSearch}
                onChange={(e) => setGlobalSearch(e.target.value)}
              />
            </div>
            
            <div className="flex items-center gap-2 overflow-x-auto pb-2 md:pb-0 hide-scrollbar">
               <Button variant="outline" size="sm" className="h-9 border-dashed px-3 text-muted-foreground bg-card shadow-sm hover:text-foreground">
                 <Filter className="mr-2 h-3.5 w-3.5" />
                 Estado
               </Button>
               <Button variant="outline" size="sm" className="h-9 bg-card shadow-sm" onClick={handleGlobalSelectAll}>
                 <Wand2 className="mr-2 h-3.5 w-3.5" />
                 Selección Automática
               </Button>
               <Button variant="outline" size="sm" className="h-9 bg-card shadow-sm" onClick={handleGlobalSelectAllEligible}>
                 <ListChecks className="mr-2 h-3.5 w-3.5" />
                 Seleccionar Todas Elegibles
               </Button>
               <Button variant="outline" size="sm" className="h-9 bg-card shadow-sm" onClick={handleGlobalDeselectAll}>
                 <XSquare className="mr-2 h-3.5 w-3.5" />
                 Deseleccionar Todas
               </Button>
               <Button variant="outline" size="sm" className="h-9 bg-card shadow-sm">
                 <Trash2 className="mr-2 h-3.5 w-3.5" />
                 Descartar
               </Button>
            </div>
          </div>

          {mockClientsData.map((client) => {
            // Filtrar facturas para mostrar en la tabla según el tab activo
            const searchQuery = (clientSearch[client.id] || globalSearch || "").toLowerCase();
            const filteredInvoices = client.invoices.filter(inv => {
              if (inv.category !== activeTab) return false;
              if (!searchQuery) return true;
              return (
                inv.number.toLowerCase().includes(searchQuery) ||
                inv.invoiceValue.toLowerCase().includes(searchQuery) ||
                inv.observations.toLowerCase().includes(searchQuery)
              );
            });
            const clientSelectedInvoices = client.invoices.filter(inv => selectedInvoices.includes(inv.id));
            const hasSelection = clientSelectedInvoices.length > 0;

            // Paginación
            const currentPage = clientPages[client.id] || 1;
            const itemsPerPage = 10;
            const totalPages = Math.ceil(filteredInvoices.length / itemsPerPage);
            const paginatedInvoices = filteredInvoices.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);

            const handlePageChange = (newPage: number) => {
              setClientPages(prev => ({ ...prev, [client.id]: newPage }));
            };
            
            return (
              <div key={client.id} className="mb-4 rounded-lg border bg-card">
                <div
                  className="flex cursor-pointer items-center justify-between p-4"
                  onClick={() => toggleClient(client.id)}
                >
                  <div className="flex flex-col items-start gap-1">
                    <h4 className="font-medium">{client.name}</h4>
                    <div 
                      className={`inline-flex items-center gap-1.5 rounded-lg px-2 py-0.5 text-xs ${
                        hasSelection ? "bg-primary/20 text-primary" : "bg-muted text-muted-foreground"
                      }`}
                    >
                      {clientSelectedInvoices.length}/{client.totalCount} seleccionadas
                    </div>
                  </div>
                  <div className="flex items-center gap-6 text-sm">
                    <div className="flex flex-col gap-1.5 min-w-[120px]">
                      <div>
                        <span className="text-muted-foreground">Cupo Disponible </span>
                        <span className="font-medium">{client.availableQuota}</span>
                      </div>
                      <Progress value={client.quotaUsage} className="h-1.5 w-full" />
                    </div>
                    <div>
                      <span className="text-muted-foreground">Monto Elegible </span>
                      <span className="font-medium">{client.eligibleAmount}</span>
                    </div>
                    <div>
                      <span className="text-muted-foreground">Tasa N.M.V. </span>
                      <span className="font-medium">{client.rate}</span>
                    </div>
                    <Badge variant="success-soft-outline">
                      Activo
                    </Badge>
                    {expandedClients.includes(client.id) ? (
                      <ChevronUp className="h-5 w-5 text-muted-foreground" />
                    ) : (
                      <ChevronDown className="h-5 w-5 text-muted-foreground" />
                    )}
                  </div>
                </div>

                {expandedClients.includes(client.id) && (
                  <div className="border-t px-4 pb-4 pt-4">
                    {/* Progress Bar */}
                    <div className="mb-6">
                      <div className="mb-2 flex items-center justify-between">
                        <div 
                          className={`inline-flex items-center gap-1.5 rounded-lg px-2 py-0.5 text-xs ${
                            hasSelection ? "bg-primary/20 text-primary" : "bg-muted text-muted-foreground"
                          }`}
                        >
                          {clientSelectedInvoices.length}/{client.totalCount} seleccionadas
                        </div>
                      </div>
                      <Progress 
                        value={(clientSelectedInvoices.length / client.totalCount) * 100} 
                        className="h-2" 
                      />
                    </div>

                    {/* ── DSM Component: FactoringInvoiceTable ── */}
                    <FactoringInvoiceTable
                      invoices={client.invoices as FactoringInvoice[]}
                      activeTab={activeTab}
                      selectedInvoices={selectedInvoices}
                      onToggleInvoice={toggleInvoice}
                      onSelectAll={(ids) => selectAll(client.invoices)}
                      onSelectAllEligible={(ids) => selectAll(client.invoices.filter(i => i.category === "elegibles"))}
                      onDeselectAll={() => deselectAll(client.invoices)}
                      onDiscard={() => {}}
                      searchValue={clientSearch[client.id] || ""}
                      onSearchChange={(val) => {
                        setClientSearch(prev => ({ ...prev, [client.id]: val }));
                      }}
                      className="mb-4"
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