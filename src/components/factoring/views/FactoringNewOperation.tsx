// Causa 18: Movido de /factoring/views/ a /components/factoring/views/
import { useState, useMemo } from "react";
import { 
  Clock,
  FileText,
  CheckCircle2,
  Download,
  Search,
  Filter,
  ChevronDown,
  X,
  ArrowRight,
  HelpCircle,
  Building2,
  ArrowLeft,
  ChevronRight as ChevronRightIcon,
  Home,
  Calendar,
  Landmark,
  Check,
} from "lucide-react";
import { NavigationBar } from "../../widgets/NavigationBar";
import { Button } from "../../ui/button";
import { Input } from "../../ui/input";
import { Card, CardContent, CardHeader } from "../../ui/card";
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
import { Checkbox } from "../../ui/checkbox";
import { Progress } from "../../ui/progress";
import { FactoringKpiCardGroup } from "../../patterns/FactoringKpiCardGroup";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../../ui/accordion";
import {
  Breadcrumb,
  BreadcrumbList,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbSeparator,
  BreadcrumbPage,
} from "../../ui/breadcrumb";
import { Avatar, AvatarImage, AvatarFallback } from "../../ui/avatar";
import { ToggleButtonGroup } from "../../ui/toggle-button-group";
import { FactoringSelectionPage } from "../../patterns/factoring/FactoringSelectionPage";
import imgEllipse348 from "figma:asset/97fb249d8224347851df11e33a2650a2e731b545.png";

interface FactoringNewOperationProps {
  onBack: () => void;
  onStartOperation: () => void;
}

interface Invoice {
  id: string;
  valorFactura: number;
  valorAdelanto: number;
  vigencia: { desde: string; hasta: string };
  diasVencimiento: number;
  ultimoEvento: string;
  estado: string;
  observaciones: string;
  statusColor: "success" | "warning" | "destructive" | "neutral";
  invoiceNumber: string;
}

interface Debtor {
  id: string;
  name: string;
  rut: string;
  availableLimit: number;
  rate: number;
  invoices: Invoice[];
}

export function FactoringNewOperation({ onBack, onStartOperation }: FactoringNewOperationProps) {
  const [selectedInvoices, setSelectedInvoices] = useState<string[]>([]);
  const [activeTab, setActiveTab] = useState("elegibles");
  const [isShowingOperationSummary, setIsShowingOperationSummary] = useState(false);
  
  // Form states for the new sections
  const [operationType, setOperationType] = useState("factoring");
  const [responsibilityType, setResponsibilityType] = useState("con");
  const [isInsured, setIsInsured] = useState(true);

  // Mock data generation based on tab
  const getDebtors = (): Debtor[] => {
    const baseInvoice = {
      valorFactura: 8345679,
      valorAdelanto: 10000000,
      vigencia: { desde: "27 Nov", hasta: "27 Dic" },
      diasVencimiento: 30,
    };

    const generateInvoices = (count: number, prefix: string, status: string, color: any, event: string): Invoice[] => {
      return Array(count).fill(null).map((_, i) => ({
        ...baseInvoice,
        id: `${prefix}-${i + 1}`,
        invoiceNumber: `F-${prefix}-${i + 1}`,
        ultimoEvento: event,
        estado: status,
        observaciones: "Observación de prueba...",
        statusColor: color,
      }));
    };

    let invoices: Invoice[] = [];

    switch (activeTab) {
      case 'pendientes':
        invoices = generateInvoices(5, "PEND", "Pendiente", "warning", "Documento Vencido");
        break;
      case 'no-elegibles':
        invoices = generateInvoices(4, "NOEL", "No Elegible", "destructive", "Rechazo por Riesgo");
        break;
      case 'descartadas':
        invoices = generateInvoices(3, "DESC", "Descartada", "neutral", "Descarte Manual");
        break;
      case 'elegibles':
      default:
        invoices = generateInvoices(8, "SETP", "Endosable", "success", "Aceptación expresa");
        break;
    }

    // Split invoices into mock debtors
    return [
      {
        id: "D001",
        name: "Industria Nacional de Plásticos",
        rut: "76.123.456-7",
        availableLimit: 25000000,
        rate: 2.5,
        invoices: invoices.slice(0, Math.ceil(invoices.length / 2))
      },
      {
        id: "D002",
        name: "Comercializadora del Sur Ltda.",
        rut: "77.890.123-4",
        availableLimit: 15000000,
        rate: 2.8,
        invoices: invoices.slice(Math.ceil(invoices.length / 2))
      }
    ].filter(d => d.invoices.length > 0);
  };

  const debtors = getDebtors();

  const toggleInvoiceSelection = (id: string) => {
    setSelectedInvoices(prev => 
      prev.includes(id) ? prev.filter(i => i !== id) : [...prev, id]
    );
  };

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat("es-CL", {
      style: "currency",
      currency: "CLP",
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(amount);
  };

  const calculateDebtorSelectedTotal = (debtor: Debtor) => {
    return debtor.invoices
      .filter(inv => selectedInvoices.includes(inv.id))
      .reduce((sum, inv) => sum + inv.valorFactura, 0);
  };

  return (
    <div className="min-h-screen bg-muted/50 fade-in pb-32">
      <NavigationBar />
      <div className="w-full px-8 pb-6 pt-[90px] space-y-6">
        
        {/* Breadcrumb & Header */}
        <div className="space-y-4">
          <Breadcrumb>
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbLink href="#" onClick={(e: React.MouseEvent) => e.preventDefault()}>
                  <Home className="h-4 w-4" />
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbLink href="#" onClick={(e: React.MouseEvent) => { e.preventDefault(); onBack(); }}>Factoring</BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbPage>Nueva Operación</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>

          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
               <Button variant="ghost" size="icon" onClick={onBack} className="rounded-full h-8 w-8 hover:bg-muted">
                <ArrowLeft className="h-4 w-4" />
              </Button>
              <h1 className="text-3xl font-semibold tracking-tight text-foreground">
                Nueva Operación
              </h1>
            </div>
            <Button variant="ghost" size="icon" className="rounded-full hover:bg-muted">
              <HelpCircle className="h-5 w-5 text-muted-foreground" />
            </Button>
          </div>
        </div>

        {/* Formularios de Configuración de Operación */}
        {!isShowingOperationSummary && (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
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
        )}

        {/* DSM Implementation */}
        <Card className="mt-6 border-border shadow-sm bg-card">
          <CardContent className="p-6">
            <FactoringSelectionPage onOperationSummaryChange={setIsShowingOperationSummary} />
          </CardContent>
        </Card>
      </div>
    </div>
  );
}