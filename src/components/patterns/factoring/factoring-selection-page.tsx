/**
 * FactoringSelectionPage
 * ──────────────────────
 * Capa: Patterns > Factoring
 *
 * Complete invoice selection flow with credit limit validation,
 * real-time advance calculation, KPI tabs, smart selection, and
 * master-detail accordions by payor.
 */
import React, { useState, useMemo, useCallback } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "../../ui/card";
import { Button } from "../../ui/button";
import { Badge } from "../../ui/badge";
import { Separator } from "../../ui/separator";
import { Alert, AlertDescription } from "../../ui/alert";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../../ui/accordion";
import { Checkbox } from "../../ui/checkbox";
import { Input } from "../../ui/input";
import { Progress } from "../../ui/progress";
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
  Wand2,
  XSquare,
  AlertTriangle,
  CheckCircle2,
  Clock,
  XCircle,
  Trash2,
  ChevronLeft,
  ChevronRight,
  TrendingUp,
  ChevronRight as ChevronRightIcon,
} from "lucide-react";
import { cn } from "../../ui/utils";
import { FactoringKpiCardGroup } from "../../../factoring/components/factoring-kpi-card-group";
import { OperationConfirmDialog } from "./operation-confirm-dialog";

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
  onOperationSummaryChange?: (showing: boolean) => void;
  creditLimit?: number;
  usedCredit?: number;
}

// ── Mock Data ────────────────────────────────────────────────────────

const MOCK_INVOICES: SelectionInvoice[] = [
  // Elegibles - Empresa A
  { id: "inv-001", number: "FE-20241001", payor: "Empresa A Ltda.", amount: 4500000, advanceRate: 0.9, dueDate: "2024-04-15", daysToExpire: 45, category: "elegibles", observations: "Factura vigente" },
  { id: "inv-002", number: "FE-20241002", payor: "Empresa A Ltda.", amount: 2300000, advanceRate: 0.9, dueDate: "2024-04-22", daysToExpire: 52, category: "elegibles", observations: "" },
  { id: "inv-003", number: "FE-20241015", payor: "Empresa A Ltda.", amount: 7800000, advanceRate: 0.88, dueDate: "2024-05-01", daysToExpire: 61, category: "elegibles", observations: "Cliente prioritario" },
  // Elegibles - Empresa B
  { id: "inv-004", number: "FE-20241101", payor: "Comercial B S.A.", amount: 12000000, advanceRate: 0.85, dueDate: "2024-04-10", daysToExpire: 40, category: "elegibles", observations: "" },
  { id: "inv-005", number: "FE-20241102", payor: "Comercial B S.A.", amount: 3500000, advanceRate: 0.85, dueDate: "2024-04-30", daysToExpire: 60, category: "elegibles", observations: "" },
  // Elegibles - Empresa C
  { id: "inv-006", number: "FE-20241201", payor: "Distribuidora C SpA", amount: 9200000, advanceRate: 0.87, dueDate: "2024-04-18", daysToExpire: 48, category: "elegibles", observations: "Aceptada digitalmente" },
  { id: "inv-007", number: "FE-20241202", payor: "Distribuidora C SpA", amount: 1800000, advanceRate: 0.87, dueDate: "2024-05-05", daysToExpire: 65, category: "elegibles", observations: "" },
  // Pendientes
  { id: "inv-008", number: "FE-20241301", payor: "Empresa D Corp.", amount: 5500000, advanceRate: 0.88, dueDate: "2024-04-25", daysToExpire: 55, category: "pendientes", observations: "En revisión documental" },
  { id: "inv-009", number: "FE-20241302", payor: "Empresa D Corp.", amount: 2100000, advanceRate: 0.88, dueDate: "2024-05-10", daysToExpire: 70, category: "pendientes", observations: "Esperando confirmación" },
  { id: "inv-010", number: "FE-20241401", payor: "Proveedor E Ltda.", amount: 8800000, advanceRate: 0.86, dueDate: "2024-04-28", daysToExpire: 58, category: "pendientes", observations: "Revisión antecedentes" },
  // No elegibles
  { id: "inv-011", number: "FE-20241501", payor: "Cliente F Inc.", amount: 3200000, advanceRate: 0.85, dueDate: "2024-03-01", daysToExpire: -10, category: "no-elegibles", observations: "Factura vencida" },
  { id: "inv-012", number: "FE-20241502", payor: "Cliente F Inc.", amount: 1500000, advanceRate: 0.85, dueDate: "2024-02-15", daysToExpire: -25, category: "no-elegibles", observations: "Monto insuficiente" },
  { id: "inv-013", number: "FE-20241601", payor: "Empresa G S.A.", amount: 600000, advanceRate: 0.84, dueDate: "2024-03-20", daysToExpire: 0, category: "no-elegibles", observations: "Deudor con mora" },
  // Descartadas
  { id: "inv-014", number: "FE-20241701", payor: "Descartado H Ltda.", amount: 4000000, advanceRate: 0.85, dueDate: "2024-04-05", daysToExpire: 35, category: "descartadas", observations: "Descartada por el cliente" },
  { id: "inv-015", number: "FE-20241702", payor: "Descartado H Ltda.", amount: 2200000, advanceRate: 0.85, dueDate: "2024-04-12", daysToExpire: 42, category: "descartadas", observations: "Fuera del scope" },
];

const ITEMS_PER_PAGE = 8;

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

export function FactoringSelectionPage({
  onOperationSummaryChange,
  creditLimit = 50000000,
  usedCredit = 12000000,
}: FactoringSelectionPageProps) {
  const [activeTab, setActiveTab] = useState<InvoiceCategory>("elegibles");
  const [selectedIds, setSelectedIds] = useState<Set<string>>(new Set());
  const [search, setSearch] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [confirmDialogOpen, setConfirmDialogOpen] = useState(false);

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

  // ── Pagination ────────────────────────────────────────────────────
  const totalPages = Math.max(1, Math.ceil(filtered.length / ITEMS_PER_PAGE));
  const safePage = Math.min(currentPage, totalPages);
  const paginated = filtered.slice((safePage - 1) * ITEMS_PER_PAGE, safePage * ITEMS_PER_PAGE);

  // ── Grouped by payor ──────────────────────────────────────────────
  const groupedByPayor = useMemo(() => {
    const groups: Record<string, SelectionInvoice[]> = {};
    paginated.forEach((inv) => {
      if (!groups[inv.payor]) groups[inv.payor] = [];
      groups[inv.payor].push(inv);
    });
    return groups;
  }, [paginated]);

  // ── Selection metrics ─────────────────────────────────────────────
  const selectionMetrics = useMemo(() => {
    let totalAmount = 0;
    let netAdvance = 0;
    MOCK_INVOICES.filter((inv) => selectedIds.has(inv.id)).forEach((inv) => {
      totalAmount += inv.amount;
      netAdvance += inv.amount * inv.advanceRate;
    });
    const newTotal = usedCredit + netAdvance;
    const creditUsedPct = Math.min(100, (newTotal / creditLimit) * 100);
    const exceeded = newTotal > creditLimit;
    return { totalAmount, netAdvance, newTotal, creditUsedPct, exceeded };
  }, [selectedIds, creditLimit, usedCredit]);

  // ── Handlers ──────────────────────────────────────────────────────
  const toggleInvoice = useCallback((id: string) => {
    setSelectedIds((prev) => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });
  }, []);

  const handleSmartSelect = useCallback(() => {
    const available = creditLimit - usedCredit;
    const eligible = MOCK_INVOICES.filter((inv) => inv.category === "elegibles")
      .sort((a, b) => b.amount - a.amount);
    let remaining = available;
    const selected = new Set<string>();
    for (const inv of eligible) {
      const advance = inv.amount * inv.advanceRate;
      if (advance <= remaining) {
        selected.add(inv.id);
        remaining -= advance;
      }
    }
    setSelectedIds(selected);
  }, [creditLimit, usedCredit]);

  const handleDeselectAll = useCallback(() => {
    setSelectedIds(new Set());
  }, []);

  const handleTabChange = useCallback((tab: InvoiceCategory) => {
    setActiveTab(tab);
    setCurrentPage(1);
    setSearch("");
  }, []);

  const handleConfirmOperation = useCallback(() => {
    setConfirmDialogOpen(true);
    onOperationSummaryChange?.(true);
  }, [onOperationSummaryChange]);

  const handleCloseConfirm = useCallback(() => {
    setConfirmDialogOpen(false);
    onOperationSummaryChange?.(false);
  }, [onOperationSummaryChange]);

  const selectedInvoices = MOCK_INVOICES.filter((inv) => selectedIds.has(inv.id));

  // Unique payors from selection
  const uniquePayors = useMemo(
    () => new Set(selectedInvoices.map((inv) => inv.payor)).size,
    [selectedInvoices]
  );

  return (
    <div className="space-y-4">
      {/* Credit Limit Bar */}
      <Card className="border-border shadow-sm bg-card">
        <CardContent className="p-4">
          <div className="flex items-center justify-between mb-2">
            <div className="flex items-center gap-2">
              <TrendingUp className="h-4 w-4 text-primary" />
              <span className="text-sm font-medium">Cupo Disponible</span>
            </div>
            <div className="flex items-center gap-4 text-sm">
              <span className="text-muted-foreground">Usado: <span className="font-medium text-foreground">{formatCLP(selectionMetrics.newTotal)}</span></span>
              <span className="text-muted-foreground">Límite: <span className="font-medium text-foreground">{formatCLP(creditLimit)}</span></span>
            </div>
          </div>
          <Progress
            value={selectionMetrics.creditUsedPct}
            className={cn("h-2", selectionMetrics.exceeded && "[&>div]:bg-destructive")}
          />
          {selectionMetrics.exceeded && (
            <Alert variant="destructive" className="mt-3 py-2">
              <AlertTriangle className="h-3.5 w-3.5" />
              <AlertDescription className="text-xs">
                El adelanto seleccionado supera el cupo disponible. Deselecciona facturas para continuar.
              </AlertDescription>
            </Alert>
          )}
        </CardContent>
      </Card>

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
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center justify-between">
            <div className="relative w-full sm:w-72">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Buscar por número o pagador..."
                className="pl-9 h-9 bg-background/50"
                value={search}
                onChange={(e) => { setSearch(e.target.value); setCurrentPage(1); }}
              />
            </div>
            {activeTab === "elegibles" && (
              <Button variant="outline" size="sm" onClick={handleSmartSelect} className="h-9">
                <Wand2 className="h-3.5 w-3.5 mr-2" />
                Selección automática
              </Button>
            )}
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
                const payorSelected = invoices.filter((inv) => selectedIds.has(inv.id)).length;
                return (
                  <AccordionItem key={payor} value={payor} className="border-none">
                    <AccordionTrigger className="px-4 py-3 hover:no-underline hover:bg-muted/30 [&>svg]:h-4 [&>svg]:w-4">
                      <div className="flex items-center gap-3">
                        <span className="text-sm font-medium">{payor}</span>
                        <Badge variant="outline" className="text-xs">{invoices.length} facturas</Badge>
                        {payorSelected > 0 && (
                          <Badge variant="secondary" className="text-xs text-primary border-primary/30">{payorSelected} seleccionadas</Badge>
                        )}
                      </div>
                    </AccordionTrigger>
                    <AccordionContent className="p-0">
                      <Table>
                        <TableHeader>
                          <TableRow className="bg-muted/30">
                            <TableHead className="w-10 pl-4" />
                            <TableHead className="text-xs">Numeración</TableHead>
                            <TableHead className="text-xs text-right">Valor Factura</TableHead>
                            <TableHead className="text-xs text-right">Adelanto</TableHead>
                            <TableHead className="text-xs text-right">Tasa</TableHead>
                            <TableHead className="text-xs">Vencimiento</TableHead>
                            <TableHead className="text-xs">Días</TableHead>
                            {activeTab !== "elegibles" && <TableHead className="text-xs">Observaciones</TableHead>}
                          </TableRow>
                        </TableHeader>
                        <TableBody>
                          {invoices.map((inv) => {
                            const isSelected = selectedIds.has(inv.id);
                            const canSelect = activeTab === "elegibles";
                            return (
                              <TableRow
                                key={inv.id}
                                className={cn(
                                  "transition-colors",
                                  isSelected && "bg-primary/5",
                                  canSelect && "cursor-pointer hover:bg-muted/30"
                                )}
                                onClick={() => canSelect && toggleInvoice(inv.id)}
                              >
                                <TableCell className="pl-4">
                                  {canSelect && (
                                    <Checkbox
                                      checked={isSelected}
                                      onCheckedChange={() => toggleInvoice(inv.id)}
                                      onClick={(e) => e.stopPropagation()}
                                    />
                                  )}
                                </TableCell>
                                <TableCell className="text-xs tabular-nums">{inv.number}</TableCell>
                                <TableCell className="text-xs text-right font-medium">{formatCLP(inv.amount)}</TableCell>
                                <TableCell className="text-xs text-right text-primary font-medium">{formatCLP(inv.amount * inv.advanceRate)}</TableCell>
                                <TableCell className="text-xs text-right">{(inv.advanceRate * 100).toFixed(0)}%</TableCell>
                                <TableCell className="text-xs">{inv.dueDate}</TableCell>
                                <TableCell className="text-xs">
                                  <span className={cn(inv.daysToExpire < 0 ? "text-destructive" : inv.daysToExpire < 15 ? "text-amber-600" : "text-foreground")}>
                                    {inv.daysToExpire < 0 ? `${Math.abs(inv.daysToExpire)}d vencido` : `${inv.daysToExpire}d`}
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
                    </AccordionContent>
                  </AccordionItem>
                );
              })}
            </Accordion>
          )}
        </CardContent>

        {/* Pagination */}
        {totalPages > 1 && (
          <div className="flex items-center justify-between px-4 py-3 border-t border-border">
            <span className="text-xs text-muted-foreground">
              Página {safePage} de {totalPages} ({filtered.length} facturas)
            </span>
            <div className="flex items-center gap-1">
              <Button variant="outline" size="icon" className="h-8 w-8" onClick={() => setCurrentPage((p) => Math.max(1, p - 1))} disabled={safePage === 1}>
                <ChevronLeft className="h-3.5 w-3.5" />
              </Button>
              <Button variant="outline" size="icon" className="h-8 w-8" onClick={() => setCurrentPage((p) => Math.min(totalPages, p + 1))} disabled={safePage === totalPages}>
                <ChevronRight className="h-3.5 w-3.5" />
              </Button>
            </div>
          </div>
        )}
      </Card>

      {/* Floating Operation Summary Panel */}
      {selectedIds.size > 0 && (
        <div className="fixed bottom-6 right-8 z-50 w-[487px] max-w-[calc(100vw-32px)]">
          <div className="bg-white dark:bg-card rounded-[14px] shadow-[0px_25px_50px_-12px_rgba(0,0,0,0.25)] border border-border/40 overflow-hidden">
            <div className="flex flex-col gap-5 p-5">

              {/* Row 1: Badges + Limpiar */}
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  {/* Facturas badge */}
                  <div className="flex items-center gap-1.5 bg-primary rounded-[8px] px-2.5 h-[22px]">
                    <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                      <g clipPath="url(#fp-clip1)">
                        <path d="M6 11C8.76142 11 11 8.76142 11 6C11 3.23858 8.76142 1 6 1C3.23858 1 1 3.23858 1 6C1 8.76142 3.23858 11 6 11Z" stroke="white" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M4.5 6L5.5 7L7.5 5" stroke="white" strokeLinecap="round" strokeLinejoin="round"/>
                      </g>
                      <defs><clipPath id="fp-clip1"><rect width="12" height="12" fill="white"/></clipPath></defs>
                    </svg>
                    <span className="text-white text-[12px] tracking-[0.3px] leading-none">{selectedIds.size} facturas</span>
                  </div>
                  {/* Pagadores badge */}
                  <div className="flex items-center gap-1.5 bg-primary rounded-[8px] px-2.5 h-[22px]">
                    <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                      <g clipPath="url(#fp-clip2)">
                        <path d="M6 11C8.76142 11 11 8.76142 11 6C11 3.23858 8.76142 1 6 1C3.23858 1 1 3.23858 1 6C1 8.76142 3.23858 11 6 11Z" stroke="white" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M6 8V6" stroke="white" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M6 4H6.005" stroke="white" strokeLinecap="round" strokeLinejoin="round"/>
                      </g>
                      <defs><clipPath id="fp-clip2"><rect width="12" height="12" fill="white"/></clipPath></defs>
                    </svg>
                    <span className="text-white text-[12px] tracking-[0.3px] leading-none">{uniquePayors} pagadores</span>
                  </div>
                </div>
                <button
                  onClick={handleDeselectAll}
                  className="text-primary text-[12px] tracking-[0.3px] leading-none hover:opacity-80 transition-opacity"
                >
                  Limpiar selección
                </button>
              </div>

              {/* Row 2: Amounts */}
              <div className="flex flex-col gap-1">
                {/* Monto Nominal */}
                <div className="flex items-center justify-between h-5">
                  <span className="text-[14px] text-muted-foreground tracking-[0.35px] leading-5">Monto Nominal</span>
                  <span className="text-[14px] text-muted-foreground tracking-[0.35px] leading-5">{formatCLP(selectionMetrics.totalAmount)}</span>
                </div>
                {/* A Recibir */}
                <div className="flex items-end justify-between pt-1 border-t border-border">
                  <div className="flex flex-col items-start">
                    <span className="text-[14px] text-muted-foreground tracking-[0.35px] leading-5">A Recibir (Aprox)</span>
                    <span className="text-[10px] text-muted-foreground tracking-[0.25px] leading-[14px]">Luego de descuentos</span>
                  </div>
                  <span className={cn(
                    "text-[24px] tracking-[-0.6px] leading-8",
                    selectionMetrics.exceeded ? "text-destructive" : "text-primary"
                  )}>
                    {formatCLP(selectionMetrics.netAdvance)}
                  </span>
                </div>
              </div>

              {/* Row 3: Confirm Button */}
              <button
                onClick={handleConfirmOperation}
                disabled={selectionMetrics.exceeded}
                className={cn(
                  "w-full h-10 rounded-[8px] flex items-center justify-center relative transition-opacity",
                  selectionMetrics.exceeded
                    ? "bg-muted text-muted-foreground cursor-not-allowed opacity-60"
                    : "bg-primary text-white shadow-elevation-3 hover:opacity-90"
                )}
              >
                <span className="text-[14px] tracking-[0.35px] leading-5">Continuar</span>
                <svg className="absolute right-3 w-4 h-4" fill="none" viewBox="0 0 16 16">
                  <path d="M6 12L10 8L6 4" stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333"/>
                </svg>
              </button>

            </div>
          </div>
        </div>
      )}

      {/* Operation Confirm Dialog */}
      <OperationConfirmDialog
        open={confirmDialogOpen}
        onClose={handleCloseConfirm}
        onConfirm={() => {
          handleCloseConfirm();
        }}
        selectedInvoices={selectedInvoices}
        metrics={selectionMetrics}
        uniquePayors={uniquePayors}
        onDeselectAll={() => {
          handleDeselectAll();
          handleCloseConfirm();
        }}
      />
    </div>
  );
}