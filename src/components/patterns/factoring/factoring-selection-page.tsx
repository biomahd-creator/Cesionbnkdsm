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
} from "lucide-react";
import { cn } from "../../ui/utils";

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

const TAB_CONFIG: { id: InvoiceCategory; label: string; icon: React.ElementType; color: string }[] = [
  { id: "elegibles", label: "Elegibles", icon: CheckCircle2, color: "text-emerald-600 dark:text-emerald-400" },
  { id: "pendientes", label: "Pendientes", icon: Clock, color: "text-amber-600 dark:text-amber-400" },
  { id: "no-elegibles", label: "No Elegibles", icon: XCircle, color: "text-rose-600 dark:text-rose-400" },
  { id: "descartadas", label: "Descartadas", icon: Trash2, color: "text-muted-foreground" },
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
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
        {TAB_CONFIG.map(({ id, label, icon: Icon, color }) => {
          const kpi = kpis[id];
          const isActive = activeTab === id;
          return (
            <button
              key={id}
              onClick={() => handleTabChange(id)}
              className={cn(
                "rounded-[10px] border p-3 text-left transition-all",
                isActive
                  ? "border-primary bg-primary/5 shadow-sm"
                  : "border-border bg-card hover:bg-muted/50"
              )}
            >
              <div className="flex items-center gap-2 mb-1">
                <Icon className={cn("h-3.5 w-3.5", isActive ? "text-primary" : color)} />
                <span className={cn("text-xs font-medium", isActive ? "text-primary" : "text-muted-foreground")}>
                  {label}
                </span>
              </div>
              <div className="text-lg font-semibold text-foreground">{kpi.count}</div>
              <div className="text-xs text-muted-foreground">{formatCLP(kpi.amount)}</div>
            </button>
          );
        })}
      </div>

      {/* Selection Summary */}
      {selectedIds.size > 0 && (
        <Card className={cn("border shadow-sm", selectionMetrics.exceeded ? "border-destructive/40 bg-destructive/5" : "border-primary/30 bg-primary/5")}>
          <CardContent className="p-4">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
              <div className="flex items-center gap-4">
                <Badge variant="secondary" className="text-sm px-3 py-1">
                  {selectedIds.size} factura{selectedIds.size !== 1 ? "s" : ""} seleccionada{selectedIds.size !== 1 ? "s" : ""}
                </Badge>
                <Separator orientation="vertical" className="h-5 hidden sm:block" />
                <div className="text-sm text-muted-foreground">
                  Total: <span className="font-medium text-foreground">{formatCLP(selectionMetrics.totalAmount)}</span>
                </div>
                <div className="text-sm text-muted-foreground hidden md:block">
                  Adelanto neto: <span className={cn("font-medium", selectionMetrics.exceeded ? "text-destructive" : "text-primary")}>{formatCLP(selectionMetrics.netAdvance)}</span>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <Button variant="outline" size="sm" onClick={handleDeselectAll}>
                  <XSquare className="h-3.5 w-3.5 mr-1.5" />
                  Deseleccionar
                </Button>
                {!selectionMetrics.exceeded && (
                  <Button
                    size="sm"
                    onClick={() => onOperationSummaryChange?.(true)}
                    className="bg-primary hover:bg-primary/90"
                  >
                    <CheckCircle2 className="h-3.5 w-3.5 mr-1.5" />
                    Confirmar selección
                  </Button>
                )}
              </div>
            </div>
          </CardContent>
        </Card>
      )}

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
                                <TableCell className="text-xs font-mono">{inv.number}</TableCell>
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
    </div>
  );
}
