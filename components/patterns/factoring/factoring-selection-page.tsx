/**
 * FactoringSelectionPage
 * ──────────────────────
 * Capa: Patterns > Factoring
 *
 * Informative invoice listing with filtering by category,
 * search, and pagination by payor (max 10 invoices per page).
 */
import React, { useState, useMemo } from "react";
import { Card, CardContent, CardHeader } from "../../ui/card";
import { Button } from "../../ui/button";
import { Badge } from "../../ui/badge";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../../ui/accordion";
import { Input } from "../../ui/input";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../../ui/table";
import {
  Search,
  CheckCircle2,
  Clock,
  XCircle,
  Trash2,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import { cn } from "../../../lib/utils";
import { FactoringKpiCardGroup } from "../../../factoring/components/factoring-kpi-card-group";

// ── Types ────────────────────────────────────────────────────────────

type InvoiceCategory = "elegibles" | "pendientes" | "no-elegibles" | "descartadas";

interface SelectionInvoice {
  id: string;
  number: string;
  payor: string;
  amount: number;
  advanceRate: number;
  dueDate: string;
  daysToExpire: number;
  category: InvoiceCategory;
  observations: string;
}

export interface FactoringSelectionPageProps {
  onOperationSummaryChange?: (value: boolean) => void;
}

// ── Mock Data ────────────────────────────────────────────────────────

const MOCK_INVOICES: SelectionInvoice[] = [
  // Elegibles - Empresa A (15 facturas para probar paginación)
  { id: "inv-001", number: "FE-20241001", payor: "Empresa A Ltda.", amount: 4500000, advanceRate: 0.9, dueDate: "2024-04-15", daysToExpire: 45, category: "elegibles", observations: "Factura vigente" },
  { id: "inv-002", number: "FE-20241002", payor: "Empresa A Ltda.", amount: 2300000, advanceRate: 0.9, dueDate: "2024-04-22", daysToExpire: 52, category: "elegibles", observations: "" },
  { id: "inv-003", number: "FE-20241015", payor: "Empresa A Ltda.", amount: 7800000, advanceRate: 0.9, dueDate: "2024-05-01", daysToExpire: 61, category: "elegibles", observations: "Cliente prioritario" },
  { id: "inv-016", number: "FE-20241016", payor: "Empresa A Ltda.", amount: 3200000, advanceRate: 0.9, dueDate: "2024-04-18", daysToExpire: 48, category: "elegibles", observations: "" },
  { id: "inv-017", number: "FE-20241017", payor: "Empresa A Ltda.", amount: 5600000, advanceRate: 0.9, dueDate: "2024-04-25", daysToExpire: 55, category: "elegibles", observations: "" },
  { id: "inv-018", number: "FE-20241018", payor: "Empresa A Ltda.", amount: 4100000, advanceRate: 0.9, dueDate: "2024-04-28", daysToExpire: 58, category: "elegibles", observations: "Pago anticipado disponible" },
  { id: "inv-019", number: "FE-20241019", payor: "Empresa A Ltda.", amount: 6700000, advanceRate: 0.9, dueDate: "2024-05-03", daysToExpire: 63, category: "elegibles", observations: "" },
  { id: "inv-020", number: "FE-20241020", payor: "Empresa A Ltda.", amount: 3900000, advanceRate: 0.9, dueDate: "2024-05-08", daysToExpire: 68, category: "elegibles", observations: "" },
  { id: "inv-021", number: "FE-20241021", payor: "Empresa A Ltda.", amount: 8200000, advanceRate: 0.9, dueDate: "2024-05-12", daysToExpire: 72, category: "elegibles", observations: "Factura de proyecto especial" },
  { id: "inv-022", number: "FE-20241022", payor: "Empresa A Ltda.", amount: 2800000, advanceRate: 0.9, dueDate: "2024-05-15", daysToExpire: 75, category: "elegibles", observations: "" },
  { id: "inv-023", number: "FE-20241023", payor: "Empresa A Ltda.", amount: 5300000, advanceRate: 0.9, dueDate: "2024-05-18", daysToExpire: 78, category: "elegibles", observations: "" },
  { id: "inv-024", number: "FE-20241024", payor: "Empresa A Ltda.", amount: 4600000, advanceRate: 0.9, dueDate: "2024-05-22", daysToExpire: 82, category: "elegibles", observations: "Confirmada por email" },
  { id: "inv-025", number: "FE-20241025", payor: "Empresa A Ltda.", amount: 7100000, advanceRate: 0.9, dueDate: "2024-05-25", daysToExpire: 85, category: "elegibles", observations: "" },
  { id: "inv-026", number: "FE-20241026", payor: "Empresa A Ltda.", amount: 3400000, advanceRate: 0.9, dueDate: "2024-05-28", daysToExpire: 88, category: "elegibles", observations: "" },
  { id: "inv-027", number: "FE-20241027", payor: "Empresa A Ltda.", amount: 6200000, advanceRate: 0.9, dueDate: "2024-06-01", daysToExpire: 92, category: "elegibles", observations: "Último lote del mes" },
  
  // Elegibles - Empresa B
  { id: "inv-004", number: "FE-20241101", payor: "Comercial B S.A.", amount: 12000000, advanceRate: 0.85, dueDate: "2024-04-10", daysToExpire: 40, category: "elegibles", observations: "" },
  { id: "inv-005", number: "FE-20241102", payor: "Comercial B S.A.", amount: 3500000, advanceRate: 0.85, dueDate: "2024-04-30", daysToExpire: 60, category: "elegibles", observations: "" },
  
  // Elegibles - Empresa C (12 facturas para probar paginación)
  { id: "inv-006", number: "FE-20241201", payor: "Distribuidora C SpA", amount: 9200000, advanceRate: 0.87, dueDate: "2024-04-18", daysToExpire: 48, category: "elegibles", observations: "Aceptada digitalmente" },
  { id: "inv-007", number: "FE-20241202", payor: "Distribuidora C SpA", amount: 1800000, advanceRate: 0.87, dueDate: "2024-05-05", daysToExpire: 65, category: "elegibles", observations: "" },
  { id: "inv-028", number: "FE-20241203", payor: "Distribuidora C SpA", amount: 4300000, advanceRate: 0.87, dueDate: "2024-04-20", daysToExpire: 50, category: "elegibles", observations: "" },
  { id: "inv-029", number: "FE-20241204", payor: "Distribuidora C SpA", amount: 6800000, advanceRate: 0.87, dueDate: "2024-04-25", daysToExpire: 55, category: "elegibles", observations: "Cliente gold" },
  { id: "inv-030", number: "FE-20241205", payor: "Distribuidora C SpA", amount: 3700000, advanceRate: 0.87, dueDate: "2024-04-28", daysToExpire: 58, category: "elegibles", observations: "" },
  { id: "inv-031", number: "FE-20241206", payor: "Distribuidora C SpA", amount: 5200000, advanceRate: 0.87, dueDate: "2024-05-02", daysToExpire: 62, category: "elegibles", observations: "" },
  { id: "inv-032", number: "FE-20241207", payor: "Distribuidora C SpA", amount: 7600000, advanceRate: 0.87, dueDate: "2024-05-08", daysToExpire: 68, category: "elegibles", observations: "Pago programado" },
  { id: "inv-033", number: "FE-20241208", payor: "Distribuidora C SpA", amount: 2900000, advanceRate: 0.87, dueDate: "2024-05-12", daysToExpire: 72, category: "elegibles", observations: "" },
  { id: "inv-034", number: "FE-20241209", payor: "Distribuidora C SpA", amount: 8400000, advanceRate: 0.87, dueDate: "2024-05-15", daysToExpire: 75, category: "elegibles", observations: "" },
  { id: "inv-035", number: "FE-20241210", payor: "Distribuidora C SpA", amount: 4100000, advanceRate: 0.87, dueDate: "2024-05-20", daysToExpire: 80, category: "elegibles", observations: "Verificada por contabilidad" },
  { id: "inv-036", number: "FE-20241211", payor: "Distribuidora C SpA", amount: 6500000, advanceRate: 0.87, dueDate: "2024-05-25", daysToExpire: 85, category: "elegibles", observations: "" },
  { id: "inv-037", number: "FE-20241212", payor: "Distribuidora C SpA", amount: 3300000, advanceRate: 0.87, dueDate: "2024-05-30", daysToExpire: 90, category: "elegibles", observations: "Última del periodo" },
  
  // Pendientes (14 facturas para probar paginación)
  { id: "inv-008", number: "FE-20241301", payor: "Empresa D Corp.", amount: 5500000, advanceRate: 0.88, dueDate: "2024-04-25", daysToExpire: 55, category: "pendientes", observations: "En revisión documental" },
  { id: "inv-009", number: "FE-20241302", payor: "Empresa D Corp.", amount: 2100000, advanceRate: 0.88, dueDate: "2024-05-10", daysToExpire: 70, category: "pendientes", observations: "Esperando confirmación" },
  { id: "inv-038", number: "FE-20241303", payor: "Empresa D Corp.", amount: 7300000, advanceRate: 0.88, dueDate: "2024-04-28", daysToExpire: 58, category: "pendientes", observations: "Falta firma digital" },
  { id: "inv-039", number: "FE-20241304", payor: "Empresa D Corp.", amount: 4800000, advanceRate: 0.88, dueDate: "2024-05-03", daysToExpire: 63, category: "pendientes", observations: "" },
  { id: "inv-040", number: "FE-20241305", payor: "Empresa D Corp.", amount: 3600000, advanceRate: 0.88, dueDate: "2024-05-08", daysToExpire: 68, category: "pendientes", observations: "Pendiente validación SII" },
  { id: "inv-041", number: "FE-20241306", payor: "Empresa D Corp.", amount: 6900000, advanceRate: 0.88, dueDate: "2024-05-12", daysToExpire: 72, category: "pendientes", observations: "" },
  { id: "inv-042", number: "FE-20241307", payor: "Empresa D Corp.", amount: 5100000, advanceRate: 0.88, dueDate: "2024-05-15", daysToExpire: 75, category: "pendientes", observations: "En proceso de verificación" },
  { id: "inv-043", number: "FE-20241308", payor: "Empresa D Corp.", amount: 8700000, advanceRate: 0.88, dueDate: "2024-05-20", daysToExpire: 80, category: "pendientes", observations: "" },
  { id: "inv-044", number: "FE-20241309", payor: "Empresa D Corp.", amount: 3900000, advanceRate: 0.88, dueDate: "2024-05-25", daysToExpire: 85, category: "pendientes", observations: "Requiere documentos adicionales" },
  { id: "inv-045", number: "FE-20241310", payor: "Empresa D Corp.", amount: 7800000, advanceRate: 0.88, dueDate: "2024-05-28", daysToExpire: 88, category: "pendientes", observations: "" },
  { id: "inv-046", number: "FE-20241311", payor: "Empresa D Corp.", amount: 4200000, advanceRate: 0.88, dueDate: "2024-06-01", daysToExpire: 92, category: "pendientes", observations: "Revisión legal pendiente" },
  { id: "inv-047", number: "FE-20241312", payor: "Empresa D Corp.", amount: 6400000, advanceRate: 0.88, dueDate: "2024-06-05", daysToExpire: 96, category: "pendientes", observations: "" },
  
  { id: "inv-010", number: "FE-20241401", payor: "Proveedor E Ltda.", amount: 8800000, advanceRate: 0.86, dueDate: "2024-04-28", daysToExpire: 58, category: "pendientes", observations: "Revisión antecedentes" },
  { id: "inv-048", number: "FE-20241402", payor: "Proveedor E Ltda.", amount: 5700000, advanceRate: 0.86, dueDate: "2024-05-05", daysToExpire: 65, category: "pendientes", observations: "Esperando aprobación gerencia" },
  
  // No elegibles
  { id: "inv-011", number: "FE-20241501", payor: "Cliente F Inc.", amount: 3200000, advanceRate: 0.85, dueDate: "2024-03-01", daysToExpire: -10, category: "no-elegibles", observations: "Factura vencida" },
  { id: "inv-012", number: "FE-20241502", payor: "Cliente F Inc.", amount: 1500000, advanceRate: 0.85, dueDate: "2024-02-15", daysToExpire: -25, category: "no-elegibles", observations: "Monto insuficiente" },
  { id: "inv-013", number: "FE-20241601", payor: "Empresa G S.A.", amount: 600000, advanceRate: 0.84, dueDate: "2024-03-20", daysToExpire: 0, category: "no-elegibles", observations: "Deudor con mora" },
  
  // Descartadas
  { id: "inv-014", number: "FE-20241701", payor: "Descartado H Ltda.", amount: 4000000, advanceRate: 0.85, dueDate: "2024-04-05", daysToExpire: 35, category: "descartadas", observations: "Descartada por el cliente" },
  { id: "inv-015", number: "FE-20241702", payor: "Descartado H Ltda.", amount: 2200000, advanceRate: 0.85, dueDate: "2024-04-12", daysToExpire: 42, category: "descartadas", observations: "Fuera del scope" },
];

const INVOICES_PER_PAYOR_PAGE = 10;

// ── Helpers ──────────────────────────────────────────────────────────

function formatCLP(value: number): string {
  return new Intl.NumberFormat("es-CL", { style: "currency", currency: "CLP", maximumFractionDigits: 0 }).format(value);
}

const TAB_CONFIG: { id: InvoiceCategory; label: string; description: string; icon: React.ElementType; color: string; variant: "green" | "yellow" | "orange" | "darkgray" }[] = [
  { id: "elegibles", label: "Elegibles", description: "Facturas aptas para operación", icon: CheckCircle2, color: "text-emerald-600 dark:text-emerald-400", variant: "green" },
  { id: "pendientes", label: "Pendientes", description: "En revisión o verificación", icon: Clock, color: "text-amber-600 dark:text-amber-400", variant: "yellow" },
  { id: "no-elegibles", label: "No Elegibles", description: "Rechazadas por incumplimiento", icon: XCircle, color: "text-rose-600 dark:text-rose-400", variant: "orange" },
  { id: "descartadas", label: "Descartadas", description: "Excluidas por el usuario", icon: Trash2, color: "text-muted-foreground", variant: "darkgray" },
];

// ── Main Component ────────────────────────────────────────────────────

export function FactoringSelectionPage(_props: FactoringSelectionPageProps = {}) {
  const [activeTab, setActiveTab] = useState<InvoiceCategory>("elegibles");
  const [search, setSearch] = useState("");
  const [payorPages, setPayorPages] = useState<Record<string, number>>({});

  // ── KPI counts ───────────────────────────────────────────────────
  const kpis = useMemo(() => {
    const counts: Record<InvoiceCategory, { count: number; amount: number }> = {
      elegibles: { count: 0, amount: 0 },
      pendientes: { count: 0, amount: 0 },
      "no-elegibles": { count: 0, amount: 0 },
      descartadas: { count: 0, amount: 0 },
    };
    MOCK_INVOICES.forEach((inv) => {
      counts[inv.category].count++;
      counts[inv.category].amount += inv.amount;
    });
    return counts;
  }, []);

  // ── Filtered list ─────────────────────────────────────────────────
  const filtered = useMemo(() => {
    const q = search.toLowerCase();
    return MOCK_INVOICES.filter(
      (inv) =>
        inv.category === activeTab &&
        (!q || inv.number.toLowerCase().includes(q) || inv.payor.toLowerCase().includes(q))
    );
  }, [activeTab, search]);

  // ── Grouped by payor ──────────────────────────────────────────────
  const groupedByPayor = useMemo(() => {
    const groups: Record<string, SelectionInvoice[]> = {};
    filtered.forEach((inv) => {
      if (!groups[inv.payor]) groups[inv.payor] = [];
      groups[inv.payor].push(inv);
    });
    return groups;
  }, [filtered]);

  // ── Handlers ──────────────────────────────────────────────────────
  const handleTabChange = (tab: InvoiceCategory) => {
    setActiveTab(tab);
    setSearch("");
    setPayorPages({});
  };

  const getPayorPage = (payor: string) => payorPages[payor] || 1;
  
  const setPayorPage = (payor: string, page: number) => {
    setPayorPages(prev => ({ ...prev, [payor]: page }));
  };

  return (
    <div className="space-y-4">
      {/* KPI Tabs */}
      <FactoringKpiCardGroup
        cards={TAB_CONFIG.map(({ id, label, description, icon: Icon, variant }) => ({
          id,
          label,
          description,
          value: formatCLP(kpis[id].amount),
          count: kpis[id].count,
          variant,
          icon: <Icon className="h-5 w-5" />,
        }))}
        activeId={activeTab}
        onCardClick={(id) => handleTabChange(id as InvoiceCategory)}
      />

      {/* Table */}
      <Card className="border-border shadow-sm bg-card overflow-hidden">
        <CardHeader className="pb-3 px-4 pt-4">
          <div className="relative w-full sm:w-72">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Buscar por número o pagador..."
              className="pl-9 h-9 bg-background/50"
              value={search}
              onChange={(e) => { setSearch(e.target.value); setPayorPages({}); }}
            />
          </div>
        </CardHeader>
        <CardContent className="p-0">
          {filtered.length === 0 ? (
            <div className="py-12 text-center text-muted-foreground text-sm">
              No hay facturas en esta categoría
            </div>
          ) : (
            <Accordion type="multiple" defaultValue={Object.keys(groupedByPayor)} className="divide-y divide-border">
              {Object.entries(groupedByPayor).map(([payor, invoices]) => {
                // Calcular tasa por pagador (asumiendo que todas las facturas del mismo pagador tienen la misma tasa)
                const payorRate = invoices.length > 0 ? invoices[0].advanceRate : 0;
                
                // Paginación por pagador
                const currentPage = getPayorPage(payor);
                const totalPages = Math.ceil(invoices.length / INVOICES_PER_PAYOR_PAGE);
                const startIdx = (currentPage - 1) * INVOICES_PER_PAYOR_PAGE;
                const endIdx = startIdx + INVOICES_PER_PAYOR_PAGE;
                const paginatedInvoices = invoices.slice(startIdx, endIdx);
                
                return (
                  <AccordionItem key={payor} value={payor} className="border-none">
                    <AccordionTrigger className="px-4 py-3 hover:no-underline hover:bg-muted/30 [&>svg]:h-4 [&>svg]:w-4">
                      <div className="flex items-center gap-3">
                        <span className="text-sm font-medium">{payor}</span>
                        <Badge variant="outline" className="text-xs">{invoices.length} facturas</Badge>
                        <Badge variant="secondary" className="text-xs bg-primary/10 text-primary border-primary/30">
                          Tasa: {(payorRate * 100).toFixed(1)}%
                        </Badge>
                      </div>
                    </AccordionTrigger>
                    <AccordionContent className="p-0">
                      <Table>
                        <TableHeader>
                          <TableRow className="bg-muted/30">
                            <TableHead className="text-xs">Nº Factura</TableHead>
                            <TableHead className="text-xs text-right">Valor Factura</TableHead>
                            <TableHead className="text-xs text-right">Valor Adelanto</TableHead>
                            <TableHead className="text-xs text-right">Costo Financiero</TableHead>
                            <TableHead className="text-xs text-right">Valor Desembolso</TableHead>
                            <TableHead className="text-xs">Fecha Emisión</TableHead>
                            <TableHead className="text-xs">Fecha Vencimiento</TableHead>
                            {activeTab !== "elegibles" && <TableHead className="text-xs">Observaciones</TableHead>}
                          </TableRow>
                        </TableHeader>
                        <TableBody>
                          {paginatedInvoices.map((inv) => {
                            // Cálculos financieros
                            const valorFactura = inv.amount;
                            const valorAdelanto = valorFactura * inv.advanceRate;
                            const diasPlazo = Math.max(inv.daysToExpire, 0); // Usar días hasta vencer
                            const costoFinanciero = (valorFactura * inv.advanceRate * diasPlazo) / 360;
                            const valorDesembolso = valorAdelanto - costoFinanciero;
                            
                            // Calcular fecha de emisión (restar días a fecha vencimiento)
                            const fechaVencimiento = new Date(inv.dueDate);
                            const fechaEmision = new Date(fechaVencimiento);
                            fechaEmision.setDate(fechaEmision.getDate() - diasPlazo);
                            const fechaEmisionStr = fechaEmision.toLocaleDateString('es-CL', { day: '2-digit', month: '2-digit', year: 'numeric' });
                            
                            return (
                              <TableRow key={inv.id}>
                                <TableCell className="text-xs tabular-nums font-medium">{inv.number}</TableCell>
                                <TableCell className="text-xs text-right font-medium">{formatCLP(valorFactura)}</TableCell>
                                <TableCell className="text-xs text-right text-primary font-medium">{formatCLP(valorAdelanto)}</TableCell>
                                <TableCell className="text-xs text-right text-destructive font-medium">{formatCLP(costoFinanciero)}</TableCell>
                                <TableCell className="text-xs text-right text-success font-semibold">{formatCLP(valorDesembolso)}</TableCell>
                                <TableCell className="text-xs text-muted-foreground">{fechaEmisionStr}</TableCell>
                                <TableCell className="text-xs">
                                  <span className={cn(inv.daysToExpire < 0 ? "text-destructive font-medium" : "text-foreground")}>
                                    {inv.dueDate}
                                  </span>
                                </TableCell>
                                {activeTab !== "elegibles" && (
                                  <TableCell className="text-xs text-muted-foreground max-w-[200px] truncate">{inv.observations || "—"}</TableCell>
                                )}
                              </TableRow>
                            );
                          })}
                        </TableBody>
                      </Table>
                      
                      {/* Pagination per payor */}
                      {totalPages > 1 && (
                        <div className="flex items-center justify-between px-4 py-3 border-t border-border bg-muted/20">
                          <span className="text-xs text-muted-foreground">
                            Página {currentPage} de {totalPages} ({invoices.length} facturas)
                          </span>
                          <div className="flex items-center gap-1">
                            <Button 
                              variant="outline" 
                              size="icon" 
                              className="h-7 w-7" 
                              onClick={() => setPayorPage(payor, Math.max(1, currentPage - 1))} 
                              disabled={currentPage === 1}
                            >
                              <ChevronLeft className="h-3.5 w-3.5" />
                            </Button>
                            <Button 
                              variant="outline" 
                              size="icon" 
                              className="h-7 w-7" 
                              onClick={() => setPayorPage(payor, Math.min(totalPages, currentPage + 1))} 
                              disabled={currentPage === totalPages}
                            >
                              <ChevronRight className="h-3.5 w-3.5" />
                            </Button>
                          </div>
                        </div>
                      )}
                    </AccordionContent>
                  </AccordionItem>
                );
              })}
            </Accordion>
          )}
        </CardContent>
      </Card>
    </div>
  );
}