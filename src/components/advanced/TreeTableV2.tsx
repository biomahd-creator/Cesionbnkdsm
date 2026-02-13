/**
 * TreeTableV2 — Factoring Operations Table (3 levels)
 *
 * Structure:
 *   Level 1: Operation (OP-XXXX) — client data
 *   Level 2: Payer — grouped by payer
 *   Level 3: Individual invoices — with status badge
 *
 * Column headers (10):
 *   Checkbox | ID | Operation Date | Client (NIT) | Payers | Invoices |
 *   Invoice Value | Disbursement Value | Status | Actions
 *
 * Features:
 * - Tri-directional cascade selection with indeterminate
 * - Search by ID, client, payer
 * - Sortable column headers
 * - Operation status filter
 * - Batch actions (Approve, Export, Cancel)
 * - DSM Soft-Outline badges
 *
 * NOTE: Props `onVerOperacion`, `onCancelarOperacion`, `onDescargarExcel`
 * retain Spanish names to avoid breaking changes for existing consumers.
 * A future major version may rename them.
 *
 * @layer advanced
 */
import React, { useState, useCallback, useMemo } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../ui/table";
import { Button } from "../ui/button";
import { Badge } from "../ui/badge";
import { Checkbox } from "../ui/checkbox";
import { Input } from "../ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "../ui/tooltip";
import {
  ChevronRight,
  ChevronDown,
  Eye,
  Ban,
  FileSpreadsheet,
  X,
  Search,
  ArrowUpDown,
  ArrowUp,
  ArrowDown,
  CheckCircle2,
  Download,
  Trash2,
  Filter,
  ChevronsUpDown,
  XCircle,
  User,
} from "lucide-react";
import { cn } from "../ui/utils";

/* ═══════════════════════════════════════════
   TYPES
   ═══════════════════════════════════════════ */

export interface Pagador {
  nombre: string;
  nit: string;
}

export interface FacturaDetalle {
  id: string;
  numero: string;
  pagador: Pagador;
  valor: number;
  valorDesembolso: number;
  fechaVencimiento: string;
  estado: "vigente" | "vencida" | "pagada";
}

export interface OperacionFactoring {
  id: string;
  fechaOperacion: string;
  cliente: {
    nombre: string;
    nit: string;
  };
  facturas: FacturaDetalle[];
  valorFacturas: number;
  valorDesembolso: number;
  estado: "pendiente" | "aprobada" | "desembolsada" | "cancelada";
}

export type BatchAction = "approve" | "export" | "cancel";

type SortField = "id" | "fecha" | "cliente" | "valorFacturas" | "valorDesembolso" | null;
type SortDir = "asc" | "desc";

interface TreeTableV2Props {
  data: OperacionFactoring[];
  onSelectionChange?: (selectedIds: Set<string>) => void;
  onBatchAction?: (action: BatchAction, selectedIds: Set<string>) => void;
  onVerOperacion?: (op: OperacionFactoring) => void;
  onCancelarOperacion?: (op: OperacionFactoring) => void;
  onDescargarExcel?: (op: OperacionFactoring) => void;
  title?: string;
  description?: string;
}

/** Internal grouping of invoices by payer within an operation */
interface PagadorGroup {
  pagador: Pagador;
  facturas: FacturaDetalle[];
  valorTotal: number;
  valorDesembolsoTotal: number;
  groupId: string; // synthetic: `${opId}::pag::${nit}`
}

/* ═══════════════════════════════════════════
   CONFIGS — Soft-Outline badges (DSM)
   ═══════════════════════════════════════════ */

const estadoOperacionConfig: Record<
  OperacionFactoring["estado"],
  { label: string; variant: "warning-soft-outline" | "success-soft-outline" | "info-soft-outline" | "destructive-soft-outline"; order: number }
> = {
  pendiente:     { label: "Pending",      variant: "warning-soft-outline",      order: 1 },
  aprobada:      { label: "Approved",     variant: "success-soft-outline",      order: 2 },
  desembolsada:  { label: "Disbursed",    variant: "info-soft-outline",         order: 3 },
  cancelada:     { label: "Canceled",     variant: "destructive-soft-outline",  order: 4 },
};

const estadoFacturaConfig: Record<
  FacturaDetalle["estado"],
  { label: string; variant: "success-soft-outline" | "warning-soft-outline" | "info-soft-outline" }
> = {
  vigente: { label: "Current", variant: "success-soft-outline" },
  vencida: { label: "Overdue", variant: "warning-soft-outline" },
  pagada:  { label: "Paid",    variant: "info-soft-outline" },
};

const ESTADO_OPTIONS = [
  { value: "all", label: "All Statuses" },
  { value: "pendiente", label: "Pending" },
  { value: "aprobada", label: "Approved" },
  { value: "desembolsada", label: "Disbursed" },
  { value: "cancelada", label: "Canceled" },
];

/* ═══════════════════════════════════════════
   HELPERS
   ═══════════════════════════════════════════ */

function formatCurrency(val: number): string {
  return "$" + val.toLocaleString("es-CO", { minimumFractionDigits: 0, maximumFractionDigits: 0 });
}

/** Group invoices by payer NIT within an operation */
function groupFacturasByPagador(op: OperacionFactoring): PagadorGroup[] {
  const map = new Map<string, PagadorGroup>();
  for (const f of op.facturas) {
    const key = f.pagador.nit;
    if (!map.has(key)) {
      map.set(key, {
        pagador: f.pagador,
        facturas: [],
        valorTotal: 0,
        valorDesembolsoTotal: 0,
        groupId: `${op.id}::pag::${key}`,
      });
    }
    const group = map.get(key)!;
    group.facturas.push(f);
    group.valorTotal += f.valor;
    group.valorDesembolsoTotal += f.valorDesembolso;
  }
  return Array.from(map.values());
}

/** Extract unique payers from an operation's invoices */
function getUniquePagadores(op: OperacionFactoring): Pagador[] {
  const map = new Map<string, Pagador>();
  for (const f of op.facturas) {
    if (!map.has(f.pagador.nit)) {
      map.set(f.pagador.nit, f.pagador);
    }
  }
  return Array.from(map.values());
}

/** Get all selectable IDs for an operation (op + pagador groups + facturas) */
function getOpAllIds(op: OperacionFactoring): string[] {
  const groups = groupFacturasByPagador(op);
  return [
    op.id,
    ...groups.map((g) => g.groupId),
    ...op.facturas.map((f) => f.id),
  ];
}

type CheckState = true | false | "indeterminate";

function getCheckStateFromFacturas(facturaIds: string[], selected: Set<string>): CheckState {
  if (facturaIds.length === 0) return false;
  const count = facturaIds.filter((id) => selected.has(id)).length;
  if (count === 0) return false;
  if (count === facturaIds.length) return true;
  return "indeterminate";
}

function getOpCheckState(op: OperacionFactoring, selected: Set<string>): CheckState {
  return getCheckStateFromFacturas(
    op.facturas.map((f) => f.id),
    selected
  );
}

function getPagadorGroupCheckState(group: PagadorGroup, selected: Set<string>): CheckState {
  return getCheckStateFromFacturas(
    group.facturas.map((f) => f.id),
    selected
  );
}

function parseDate(dateStr: string): number {
  if (dateStr.includes("/")) {
    const [d, m, y] = dateStr.split("/");
    return new Date(`${y}-${m}-${d}`).getTime();
  }
  return new Date(dateStr).getTime();
}

/* ── Search ── */
function matchesSearch(op: OperacionFactoring, query: string): boolean {
  const q = query.toLowerCase().trim();
  if (!q) return true;

  if (op.id.toLowerCase().includes(q)) return true;
  if (op.cliente.nombre.toLowerCase().includes(q)) return true;
  if (op.cliente.nit.toLowerCase().includes(q)) return true;
  for (const f of op.facturas) {
    if (f.pagador.nombre.toLowerCase().includes(q)) return true;
    if (f.pagador.nit.toLowerCase().includes(q)) return true;
    if (f.numero.toLowerCase().includes(q)) return true;
  }
  return false;
}

/* ── Sort ── */
function sortOperaciones(ops: OperacionFactoring[], field: SortField, dir: SortDir): OperacionFactoring[] {
  if (!field) return ops;

  return [...ops].sort((a, b) => {
    let cmp = 0;
    switch (field) {
      case "id":
        cmp = a.id.localeCompare(b.id);
        break;
      case "fecha":
        cmp = parseDate(a.fechaOperacion) - parseDate(b.fechaOperacion);
        break;
      case "cliente":
        cmp = a.cliente.nombre.localeCompare(b.cliente.nombre, "es");
        break;
      case "valorFacturas":
        cmp = a.valorFacturas - b.valorFacturas;
        break;
      case "valorDesembolso":
        cmp = a.valorDesembolso - b.valorDesembolso;
        break;
    }
    return dir === "desc" ? -cmp : cmp;
  });
}

function countByEstado(ops: OperacionFactoring[]): Record<string, number> {
  const counts: Record<string, number> = {};
  for (const op of ops) {
    counts[op.estado] = (counts[op.estado] || 0) + 1;
  }
  return counts;
}

/* ══════════════════════════════════════════
   COMPONENT
   ══════════════════════════════════════════ */

export function TreeTableV2({
  data,
  onSelectionChange,
  onBatchAction,
  onVerOperacion,
  onCancelarOperacion,
  onDescargarExcel,
  title,
  description,
}: TreeTableV2Props) {
  // Expand state for level 1 (operations) and level 2 (pagador groups)
  const [expandedOps, setExpandedOps] = useState<Set<string>>(new Set());
  const [expandedPagadores, setExpandedPagadores] = useState<Set<string>>(new Set());
  const [selectedIds, setSelectedIds] = useState<Set<string>>(new Set());

  // Search & filter
  const [searchQuery, setSearchQuery] = useState("");
  const [estadoFilter, setEstadoFilter] = useState("all");

  // Sorting
  const [sortField, setSortField] = useState<SortField>(null);
  const [sortDir, setSortDir] = useState<SortDir>("asc");

  /* ── Processed data pipeline ── */
  const processedData = useMemo(() => {
    let result = data;

    if (searchQuery.trim()) {
      result = result.filter((op) => matchesSearch(op, searchQuery));
    }

    if (estadoFilter !== "all") {
      result = result.filter((op) => op.estado === estadoFilter);
    }

    if (sortField) {
      result = sortOperaciones(result, sortField, sortDir);
    }

    return result;
  }, [data, searchQuery, estadoFilter, sortField, sortDir]);

  const estadoCounts = useMemo(() => countByEstado(data), [data]);
  const isFiltered = searchQuery.trim() !== "" || estadoFilter !== "all";

  // All factura IDs (for select all logic)
  const allFacturaIds = useMemo(() => {
    const ids: string[] = [];
    for (const op of processedData) {
      for (const f of op.facturas) {
        ids.push(f.id);
      }
    }
    return ids;
  }, [processedData]);

  /* ── Sorting toggle ── */
  const handleSort = useCallback(
    (field: SortField) => {
      if (sortField === field) {
        if (sortDir === "asc") {
          setSortDir("desc");
        } else {
          setSortField(null);
          setSortDir("asc");
        }
      } else {
        setSortField(field);
        setSortDir("asc");
      }
    },
    [sortField, sortDir]
  );

  // Renamed to lowercase render helper to avoid FGCmp2 instrumenting it as a component (Cause 7 fix)
  const renderSortIcon = (field: SortField) => {
    if (sortField !== field) return <ArrowUpDown className="h-3 w-3 text-muted-foreground/40" />;
    if (sortDir === "asc") return <ArrowUp className="h-3 w-3 text-primary" />;
    return <ArrowDown className="h-3 w-3 text-primary" />;
  };

  /* ── Expand / Collapse ── */
  const toggleExpandOp = (opId: string) => {
    setExpandedOps((prev) => {
      const next = new Set(prev);
      if (next.has(opId)) {
        next.delete(opId);
      } else {
        next.add(opId);
      }
      return next;
    });
  };

  const toggleExpandPagador = (groupId: string) => {
    setExpandedPagadores((prev) => {
      const next = new Set(prev);
      if (next.has(groupId)) {
        next.delete(groupId);
      } else {
        next.add(groupId);
      }
      return next;
    });
  };

  const expandAll = useCallback(() => {
    const opIds = new Set(processedData.map((op) => op.id));
    const pagIds = new Set<string>();
    for (const op of processedData) {
      const groups = groupFacturasByPagador(op);
      for (const g of groups) {
        pagIds.add(g.groupId);
      }
    }
    setExpandedOps(opIds);
    setExpandedPagadores(pagIds);
  }, [processedData]);

  const collapseAll = useCallback(() => {
    setExpandedOps(new Set());
    setExpandedPagadores(new Set());
  }, []);

  /* ── Selection helpers ── */
  const updateSelection = useCallback(
    (next: Set<string>) => {
      setSelectedIds(next);
      onSelectionChange?.(next);
    },
    [onSelectionChange]
  );

  /** Recalculate parent IDs (pagador groups + op) based on factura selection */
  const reconcileParents = useCallback(
    (next: Set<string>, op: OperacionFactoring) => {
      const groups = groupFacturasByPagador(op);
      let allGroupsFull = true;

      for (const group of groups) {
        const allSelected = group.facturas.every((f) => next.has(f.id));
        if (allSelected) {
          next.add(group.groupId);
        } else {
          next.delete(group.groupId);
          allGroupsFull = false;
        }
      }

      if (allGroupsFull && groups.length > 0) {
        next.add(op.id);
      } else {
        next.delete(op.id);
      }
    },
    []
  );

  /* ── Toggle Operation (L1) ── */
  const toggleOpSelection = useCallback(
    (op: OperacionFactoring) => {
      const next = new Set(selectedIds);
      const currentState = getOpCheckState(op, selectedIds);
      const allIds = getOpAllIds(op);

      if (currentState === true) {
        // Deselect all
        allIds.forEach((id) => next.delete(id));
      } else {
        // Select all
        allIds.forEach((id) => next.add(id));
        // Auto-expand
        setExpandedOps((prev) => new Set(prev).add(op.id));
      }

      updateSelection(next);
    },
    [selectedIds, updateSelection]
  );

  /* ── Toggle Pagador Group (L2) ── */
  const togglePagadorSelection = useCallback(
    (group: PagadorGroup, op: OperacionFactoring) => {
      const next = new Set(selectedIds);
      const currentState = getPagadorGroupCheckState(group, selectedIds);

      if (currentState === true) {
        // Deselect all facturas in group
        group.facturas.forEach((f) => next.delete(f.id));
        next.delete(group.groupId);
      } else {
        // Select all facturas in group
        group.facturas.forEach((f) => next.add(f.id));
        next.add(group.groupId);
        // Auto-expand pagador
        setExpandedPagadores((prev) => new Set(prev).add(group.groupId));
      }

      // Reconcile op level
      reconcileParents(next, op);
      updateSelection(next);
    },
    [selectedIds, updateSelection, reconcileParents]
  );

  /* ── Toggle Factura (L3) ── */
  const toggleFacturaSelection = useCallback(
    (factura: FacturaDetalle, op: OperacionFactoring) => {
      const next = new Set(selectedIds);

      if (next.has(factura.id)) {
        next.delete(factura.id);
      } else {
        next.add(factura.id);
      }

      // Reconcile parents
      reconcileParents(next, op);
      updateSelection(next);
    },
    [selectedIds, updateSelection, reconcileParents]
  );

  /* ── Select All ── */
  const handleSelectAll = useCallback(() => {
    const allSelected = allFacturaIds.length > 0 && allFacturaIds.every((id) => selectedIds.has(id));

    if (allSelected) {
      updateSelection(new Set());
    } else {
      const next = new Set<string>();
      for (const op of processedData) {
        const allIds = getOpAllIds(op);
        allIds.forEach((id) => next.add(id));
      }
      // Expand everything
      expandAll();
      updateSelection(next);
    }
  }, [allFacturaIds, selectedIds, processedData, updateSelection, expandAll]);

  const selectAllState: CheckState = useMemo(() => {
    if (allFacturaIds.length === 0) return false;
    const count = allFacturaIds.filter((id) => selectedIds.has(id)).length;
    if (count === 0) return false;
    if (count === allFacturaIds.length) return true;
    return "indeterminate";
  }, [allFacturaIds, selectedIds]);

  const clearSelection = useCallback(() => {
    updateSelection(new Set());
  }, [updateSelection]);

  /* ── Batch actions ── */
  const handleBatchAction = useCallback(
    (action: BatchAction) => {
      onBatchAction?.(action, selectedIds);
    },
    [onBatchAction, selectedIds]
  );

  /* ── Reset filters ── */
  const resetFilters = useCallback(() => {
    setSearchQuery("");
    setEstadoFilter("all");
    setSortField(null);
    setSortDir("asc");
  }, []);

  /* ── Counts ── */
  const selectedFacturaCount = allFacturaIds.filter((id) => selectedIds.has(id)).length;
  const selectedOpsCount = processedData.filter((op) => getOpCheckState(op, selectedIds) === true).length;

  const COL_COUNT = 10;

  return (
    <div className="rounded-lg border bg-background shadow-md overflow-hidden">
      {/* ═══ TOOLBAR ═══ */}
      <div className="flex flex-col gap-3 p-4 border-b">
        {/* Row 1: Title + expand/collapse */}
        {(title || description) && (
          <div className="flex items-start justify-between gap-4">
            <div>
              {title && <h3 className="font-medium">{title}</h3>}
              {description && (
                <p className="text-sm text-muted-foreground mt-0.5">{description}</p>
              )}
            </div>
            <div className="flex items-center gap-1 shrink-0">
              <Button
                variant="ghost"
                size="sm"
                className="h-8 px-2 text-xs text-muted-foreground"
                onClick={expandAll}
              >
                <ChevronsUpDown className="h-3.5 w-3.5 mr-1" />
                Expand
              </Button>
              <Button
                variant="ghost"
                size="sm"
                className="h-8 px-2 text-xs text-muted-foreground"
                onClick={collapseAll}
              >
                Collapse
              </Button>
            </div>
          </div>
        )}

        {/* Row 2: Search + Estado filter + Reset */}
        <div className="flex flex-col gap-2 sm:flex-row sm:items-center">
          <div className="relative w-full sm:w-72">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Search by ID, client, payer, Tax ID..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-9 h-9 bg-background/50"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery("")}
                className="absolute right-2 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
              >
                <X className="h-3.5 w-3.5" />
              </button>
            )}
          </div>

          <Select value={estadoFilter} onValueChange={setEstadoFilter}>
            <SelectTrigger className="h-9 w-full sm:w-[190px] border-dashed bg-background/50">
              <Filter className="h-3.5 w-3.5 mr-2 text-muted-foreground" />
              <SelectValue placeholder="Status" />
            </SelectTrigger>
            <SelectContent>
              {ESTADO_OPTIONS.map((opt) => (
                <SelectItem key={opt.value} value={opt.value}>
                  {opt.label}
                  {opt.value !== "all" && estadoCounts[opt.value] !== undefined && (
                    <span className="ml-1 text-muted-foreground">
                      ({estadoCounts[opt.value]})
                    </span>
                  )}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>

          {isFiltered && (
            <Button
              variant="ghost"
              size="sm"
              className="h-9 px-2 text-muted-foreground hover:text-foreground shrink-0"
              onClick={resetFilters}
            >
              Reset
              <XCircle className="ml-1 h-3.5 w-3.5" />
            </Button>
          )}

          {isFiltered && (
            <span className="text-xs text-muted-foreground whitespace-nowrap">
              {processedData.length} of {data.length} operations
            </span>
          )}
        </div>
      </div>

      {/* ═══ SELECTION BAR ═══ */}
      {selectedFacturaCount > 0 && (
        <div className="flex flex-wrap items-center justify-between gap-2 border-b bg-primary/5 px-4 py-2">
          <span className="text-sm text-muted-foreground">
            <span className="font-medium text-foreground">{selectedOpsCount}</span>{" "}
            operation{selectedOpsCount !== 1 ? "s" : ""} selected
            <span className="text-xs ml-1">({selectedFacturaCount} invoices)</span>
          </span>
          <div className="flex items-center gap-1.5">
            <Button
              variant="outline"
              size="sm"
              className="h-7 text-xs gap-1"
              onClick={() => handleBatchAction("approve")}
            >
              <CheckCircle2 className="h-3.5 w-3.5 text-green-600" />
              Approve
            </Button>
            <Button
              variant="outline"
              size="sm"
              className="h-7 text-xs gap-1"
              onClick={() => handleBatchAction("export")}
            >
              <Download className="h-3.5 w-3.5" />
              Export
            </Button>
            <Button
              variant="outline"
              size="sm"
              className="h-7 text-xs gap-1 text-destructive hover:text-destructive"
              onClick={() => handleBatchAction("cancel")}
            >
              <Trash2 className="h-3.5 w-3.5" />
              Cancel
            </Button>
            <div className="w-px h-5 bg-border mx-1" />
            <Button
              variant="ghost"
              size="sm"
              className="h-7 gap-1 text-xs"
              onClick={clearSelection}
            >
              <X className="h-3 w-3" />
              Clear
            </Button>
          </div>
        </div>
      )}

      {/* ═══ TABLE ═══ */}
      <div className="overflow-x-auto">
        <div className="inline-block min-w-[1200px] w-full align-middle">
          <Table>
            <TableHeader>
              <TableRow>
                {/* Checkbox + Expand */}
                <TableHead className="w-[70px]">
                  <div className="flex items-center gap-1">
                    <Checkbox
                      checked={selectAllState}
                      onCheckedChange={handleSelectAll}
                      aria-label="Select all"
                    />
                  </div>
                </TableHead>

                {/* ID */}
                <TableHead className="w-[110px]">
                  <button
                    className="flex items-center gap-1 hover:text-foreground transition-colors"
                    onClick={() => handleSort("id")}
                  >
                    ID
                    {renderSortIcon("id")}
                  </button>
                </TableHead>

                {/* Fecha */}
                <TableHead className="w-[100px]">
                  <button
                    className="flex items-end gap-1 hover:text-foreground transition-colors"
                    onClick={() => handleSort("fecha")}
                  >
                    <span className="flex flex-col leading-tight text-left">
                      <span className="text-[10px] text-muted-foreground font-normal">Date</span>
                      <span>Operation</span>
                    </span>
                    {renderSortIcon("fecha")}
                  </button>
                </TableHead>

                {/* Cliente */}
                <TableHead className="w-[170px]">
                  <button
                    className="flex items-center gap-1 hover:text-foreground transition-colors"
                    onClick={() => handleSort("cliente")}
                  >
                    Client
                    {renderSortIcon("cliente")}
                  </button>
                </TableHead>

                {/* Pagadores */}
                <TableHead className="w-[160px]">Payers</TableHead>

                {/* Facturas */}
                <TableHead className="w-[80px] text-center">Invoices</TableHead>

                {/* Valor Facturas */}
                <TableHead className="w-[120px]">
                  <button
                    className="flex items-end gap-1 hover:text-foreground transition-colors"
                    onClick={() => handleSort("valorFacturas")}
                  >
                    <span className="flex flex-col leading-tight text-left">
                      <span className="text-[10px] text-muted-foreground font-normal">Value</span>
                      <span>Invoices</span>
                    </span>
                    {renderSortIcon("valorFacturas")}
                  </button>
                </TableHead>

                {/* Valor Desembolso */}
                <TableHead className="w-[120px]">
                  <button
                    className="flex items-end gap-1 hover:text-foreground transition-colors"
                    onClick={() => handleSort("valorDesembolso")}
                  >
                    <span className="flex flex-col leading-tight text-left">
                      <span className="text-[10px] text-muted-foreground font-normal">Value</span>
                      <span>Disbursement</span>
                    </span>
                    {renderSortIcon("valorDesembolso")}
                  </button>
                </TableHead>

                {/* Estado */}
                <TableHead className="w-[120px] text-center">Status</TableHead>

                {/* Acciones */}
                <TableHead className="w-[130px] text-center">Actions</TableHead>
              </TableRow>
            </TableHeader>

            {processedData.length > 0 ? (
                processedData.map((op) => {
                  const isExpanded = expandedOps.has(op.id);
                  const checkState = getOpCheckState(op, selectedIds);
                  const pagadores = getUniquePagadores(op);
                  const pagadorGroups = groupFacturasByPagador(op);
                  const isMatch =
                    searchQuery.trim() &&
                    (op.id.toLowerCase().includes(searchQuery.toLowerCase().trim()) ||
                      op.cliente.nombre.toLowerCase().includes(searchQuery.toLowerCase().trim()));

                  return (
                    <OperacionRow
                      key={op.id}
                      op={op}
                      isExpanded={isExpanded}
                      checkState={checkState}
                      pagadores={pagadores}
                      pagadorGroups={pagadorGroups}
                      isMatch={!!isMatch}
                      selectedIds={selectedIds}
                      expandedPagadores={expandedPagadores}
                      searchQuery={searchQuery}
                      onToggleExpandOp={() => toggleExpandOp(op.id)}
                      onToggleExpandPagador={toggleExpandPagador}
                      onToggleOpSelect={() => toggleOpSelection(op)}
                      onTogglePagadorSelect={(g) => togglePagadorSelection(g, op)}
                      onToggleFacturaSelect={(f) => toggleFacturaSelection(f, op)}
                      onVerOperacion={onVerOperacion}
                      onCancelarOperacion={onCancelarOperacion}
                      onDescargarExcel={onDescargarExcel}
                    />
                  );
                })
              ) : (
                <TableBody>
                  <TableRow>
                    <TableCell colSpan={COL_COUNT} className="h-24 text-center">
                      <div className="flex flex-col items-center gap-2">
                        <Search className="h-8 w-8 text-muted-foreground/30" />
                        <span className="text-muted-foreground">
                          {isFiltered
                            ? "No operations found for the applied filters"
                            : "No operations available"}
                        </span>
                        {isFiltered && (
                          <Button variant="link" size="sm" onClick={resetFilters}>
                            Clear filters
                          </Button>
                        )}
                      </div>
                    </TableCell>
                  </TableRow>
                </TableBody>
              )}
          </Table>
        </div>
      </div>

      {/* Mobile hint */}
      <div className="p-2 text-xs text-muted-foreground text-center lg:hidden border-t bg-muted/20">
        Swipe horizontally to see all columns
      </div>
    </div>
  );
}

/* ══════════════════════════════════════════
   OPERACION ROW — Level 1 + renders L2 + L3
   ══════════════════════════════════════════ */

interface OperacionRowProps {
  op: OperacionFactoring;
  isExpanded: boolean;
  checkState: CheckState;
  pagadores: Pagador[];
  pagadorGroups: PagadorGroup[];
  isMatch: boolean;
  selectedIds: Set<string>;
  expandedPagadores: Set<string>;
  searchQuery: string;
  onToggleExpandOp: () => void;
  onToggleExpandPagador: (groupId: string) => void;
  onToggleOpSelect: () => void;
  onTogglePagadorSelect: (group: PagadorGroup) => void;
  onToggleFacturaSelect: (f: FacturaDetalle) => void;
  onVerOperacion?: (op: OperacionFactoring) => void;
  onCancelarOperacion?: (op: OperacionFactoring) => void;
  onDescargarExcel?: (op: OperacionFactoring) => void;
}

function OperacionRow({
  op,
  isExpanded,
  checkState,
  pagadores,
  pagadorGroups,
  isMatch,
  selectedIds,
  expandedPagadores,
  searchQuery,
  onToggleExpandOp,
  onToggleExpandPagador,
  onToggleOpSelect,
  onTogglePagadorSelect,
  onToggleFacturaSelect,
  onVerOperacion,
  onCancelarOperacion,
  onDescargarExcel,
}: OperacionRowProps) {
  const estadoCfg = estadoOperacionConfig[op.estado];

  return (
    <TableBody>
      {/* ═══ LEVEL 1: Operation Row ═══ */}
      <TableRow
        className={cn(
          "bg-background hover:bg-accent transition-colors",
          checkState === true && "bg-primary/10 hover:bg-primary/15",
          isMatch && "bg-yellow-50 dark:bg-yellow-500/10"
        )}
        data-state={checkState === true ? "selected" : undefined}
      >
        {/* Checkbox + Expand */}
        <TableCell>
          <div className="flex items-center gap-1">
            <Checkbox
              checked={checkState}
              onCheckedChange={onToggleOpSelect}
              aria-label={`Select ${op.id}`}
            />
            <Button
              variant="ghost"
              size="sm"
              className="h-6 w-6 p-0 hover:bg-primary/10"
              onClick={onToggleExpandOp}
            >
              {isExpanded ? (
                <ChevronDown className="h-4 w-4" />
              ) : (
                <ChevronRight className="h-4 w-4" />
              )}
            </Button>
          </div>
        </TableCell>

        {/* ID */}
        <TableCell>
          <span className="text-sm text-muted-foreground">{op.id}</span>
        </TableCell>

        {/* Fecha Operacion */}
        <TableCell className="text-muted-foreground font-satoshi">
          {op.fechaOperacion}
        </TableCell>

        {/* Cliente + NIT */}
        <TableCell>
          <div className="flex flex-col">
            <span className="truncate max-w-[160px]">{op.cliente.nombre}</span>
            <span className="text-xs text-muted-foreground">{op.cliente.nit}</span>
          </div>
        </TableCell>

        {/* Pagadores count */}
        <TableCell>
          {pagadores.length === 1 ? (
            <div className="flex flex-col">
              <span className="truncate max-w-[150px]">{pagadores[0].nombre}</span>
              <span className="text-xs text-muted-foreground">{pagadores[0].nit}</span>
            </div>
          ) : (
            <Tooltip>
              <TooltipTrigger asChild>
                <span className="inline-flex">
                  <Badge variant="info-soft-outline" className="cursor-default">
                    {pagadores.length} payers
                  </Badge>
                </span>
              </TooltipTrigger>
              <TooltipContent side="bottom" className="max-w-[280px]">
                <ul className="space-y-1">
                  {pagadores.map((p) => (
                    <li key={p.nit} className="text-xs">
                      {p.nombre} — {p.nit}
                    </li>
                  ))}
                </ul>
              </TooltipContent>
            </Tooltip>
          )}
        </TableCell>

        {/* Facturas count */}
        <TableCell className="text-center">
          <Badge variant="info-soft-outline">{op.facturas.length}</Badge>
        </TableCell>

        {/* Valor Facturas */}
        <TableCell className="font-medium font-satoshi">
          {formatCurrency(op.valorFacturas)}
        </TableCell>

        {/* Valor Desembolso */}
        <TableCell className="font-medium font-satoshi">
          {formatCurrency(op.valorDesembolso)}
        </TableCell>

        {/* Estado (Operacion) */}
        <TableCell className="text-center">
          <Badge variant={estadoCfg.variant} className="text-[11px] px-2 py-0.5">
            {estadoCfg.label}
          </Badge>
        </TableCell>

        {/* Acciones: 3 botones visibles */}
        <TableCell>
          <div className="flex items-center justify-center gap-1">
            <Tooltip>
              <TooltipTrigger asChild>
                <Button
                  variant="ghost"
                  size="sm"
                  className="h-7 w-7 p-0"
                  onClick={() => onVerOperacion?.(op)}
                >
                  <Eye className="h-4 w-4" />
                  <span className="sr-only">View operation</span>
                </Button>
              </TooltipTrigger>
              <TooltipContent>View operation</TooltipContent>
            </Tooltip>

            <Tooltip>
              <TooltipTrigger asChild>
                <Button
                  variant="ghost"
                  size="sm"
                  className="h-7 w-7 p-0 text-destructive hover:text-destructive"
                  onClick={() => onCancelarOperacion?.(op)}
                  disabled={op.estado === "cancelada" || op.estado === "desembolsada"}
                >
                  <Ban className="h-4 w-4" />
                  <span className="sr-only">Cancel operation</span>
                </Button>
              </TooltipTrigger>
              <TooltipContent>Cancel operation</TooltipContent>
            </Tooltip>

            <Tooltip>
              <TooltipTrigger asChild>
                <Button
                  variant="ghost"
                  size="sm"
                  className="h-7 w-7 p-0"
                  onClick={() => onDescargarExcel?.(op)}
                >
                  <FileSpreadsheet className="h-4 w-4" />
                  <span className="sr-only">Download Excel</span>
                </Button>
              </TooltipTrigger>
              <TooltipContent>Download Excel</TooltipContent>
            </Tooltip>
          </div>
        </TableCell>
      </TableRow>

      {/* ═══ LEVEL 2: Pagador Group Rows ═══ */}
      {isExpanded &&
        pagadorGroups.map((group) => {
          const pagCheckState = getPagadorGroupCheckState(group, selectedIds);
          const isPagExpanded = expandedPagadores.has(group.groupId);
          const pagMatch =
            searchQuery.trim() &&
            (group.pagador.nombre.toLowerCase().includes(searchQuery.toLowerCase().trim()) ||
              group.pagador.nit.toLowerCase().includes(searchQuery.toLowerCase().trim()));

          return renderPagadorRow({
              key: group.groupId,
              group,
              checkState: pagCheckState,
              isExpanded: isPagExpanded,
              isMatch: !!pagMatch,
              selectedIds,
              searchQuery,
              onToggleExpand: () => onToggleExpandPagador(group.groupId),
              onToggleSelect: () => onTogglePagadorSelect(group),
              onToggleFacturaSelect,
            });
        })}
    </TableBody>
  );
}

/* ═══════════════════════════════════════════
   PAGADOR ROW — Level 2 + renders L3
   (Render function, NOT a component — avoids
   Fragment root that breaks FGCmp2 hit-testing)
   ═══════════════════════════════════════════ */

interface PagadorRowProps {
  group: PagadorGroup;
  checkState: CheckState;
  isExpanded: boolean;
  isMatch: boolean;
  selectedIds: Set<string>;
  searchQuery: string;
  onToggleExpand: () => void;
  onToggleSelect: () => void;
  onToggleFacturaSelect: (f: FacturaDetalle) => void;
}

function renderPagadorRow({
  key,
  group,
  checkState,
  isExpanded,
  isMatch,
  selectedIds,
  searchQuery,
  onToggleExpand,
  onToggleSelect,
  onToggleFacturaSelect,
}: PagadorRowProps & { key: string }): React.ReactNode[] {
  return [
      // ── Level 2: Pagador Row ──
      <TableRow
        key={`pagador-${key}`}
        className={cn(
          "bg-muted/40 hover:bg-muted/70 transition-colors border-l-3 border-l-primary/30",
          checkState === true && "bg-primary/10 hover:bg-primary/15 border-l-primary/60",
          isMatch && "bg-yellow-50 dark:bg-yellow-500/10"
        )}
      >
        {/* Checkbox + Expand (indented) */}
        <TableCell>
          <div className="flex items-center gap-1 pl-4">
            <Checkbox
              checked={checkState}
              onCheckedChange={onToggleSelect}
              aria-label={`Select payer ${group.pagador.nombre}`}
            />
            <Button
              variant="ghost"
              size="sm"
              className="h-6 w-6 p-0 hover:bg-primary/10"
              onClick={onToggleExpand}
            >
              {isExpanded ? (
                <ChevronDown className="h-3.5 w-3.5" />
              ) : (
                <ChevronRight className="h-3.5 w-3.5" />
              )}
            </Button>
          </div>
        </TableCell>

        {/* Pagador nombre + NIT — in column 2 for better readability */}
        <TableCell>
          <div className="flex items-center gap-2">
            <User className="h-3.5 w-3.5 text-muted-foreground shrink-0" />
            <div className="flex flex-col">
              <span className={cn(
                "truncate max-w-[140px]",
                isMatch && "bg-yellow-200/60 dark:bg-yellow-400/20 px-0.5 rounded"
              )}>
                {group.pagador.nombre}
              </span>
              <span className="text-xs text-muted-foreground">{group.pagador.nit}</span>
            </div>
          </div>
        </TableCell>

        {/* — (no fecha) */}
        <TableCell />

        {/* — (no cliente) */}
        <TableCell />

        {/* — (pagador already in col 2) */}
        <TableCell />

        {/* Facturas count for this pagador */}
        <TableCell className="text-center">
          <Badge variant="info-soft-outline" className="text-[10px] px-1.5 py-0">
            {group.facturas.length}
          </Badge>
        </TableCell>

        {/* Valor total for this pagador */}
        <TableCell className="text-sm font-satoshi">
          {formatCurrency(group.valorTotal)}
        </TableCell>

        {/* Valor Desembolso for this pagador */}
        <TableCell className="text-sm font-satoshi">
          {formatCurrency(group.valorDesembolsoTotal)}
        </TableCell>

        {/* — (no estado at pagador level) */}
        <TableCell />

        {/* — (no acciones) */}
        <TableCell />
      </TableRow>,

      // ═══ LEVEL 3: Factura Rows ═══
      ...(isExpanded
        ? group.facturas.map((factura) => {
            const isFacturaSelected = selectedIds.has(factura.id);
            const facturaCfg = estadoFacturaConfig[factura.estado];
            const facturaMatch =
              searchQuery.trim() &&
              (factura.numero.toLowerCase().includes(searchQuery.toLowerCase().trim()) ||
                factura.pagador.nombre.toLowerCase().includes(searchQuery.toLowerCase().trim()));

            return (
              <TableRow
                key={factura.id}
                className={cn(
                  "bg-muted/60 hover:bg-muted/80 transition-colors border-l-4 border-l-primary/15",
                  isFacturaSelected && "bg-primary/10 hover:bg-primary/15 border-l-primary/50",
                  facturaMatch && "bg-yellow-50 dark:bg-yellow-500/10"
                )}
              >
                {/* Checkbox (double indented) */}
                <TableCell>
                  <div className="flex items-center gap-1 pl-10">
                    <Checkbox
                      checked={isFacturaSelected}
                      onCheckedChange={() => onToggleFacturaSelect(factura)}
                      aria-label={`Select ${factura.numero}`}
                    />
                  </div>
                </TableCell>

                {/* Factura # */}
                <TableCell>
                  <span className="text-sm text-muted-foreground">{factura.numero}</span>
                </TableCell>

                {/* Fecha Vencimiento */}
                <TableCell className="text-muted-foreground text-sm font-satoshi">
                  {factura.fechaVencimiento}
                </TableCell>

                {/* — (no cliente) */}
                <TableCell />

                {/* — (pagador already shown in L2) */}
                <TableCell />

                {/* — */}
                <TableCell />

                {/* Valor Factura */}
                <TableCell className="text-sm font-satoshi">
                  {formatCurrency(factura.valor)}
                </TableCell>

                {/* Valor Desembolso Factura */}
                <TableCell className="text-sm font-satoshi">
                  {formatCurrency(factura.valorDesembolso)}
                </TableCell>

                {/* Estado factura — in dedicated column */}
                <TableCell className="text-center">
                  <Badge variant={facturaCfg.variant} className="text-[11px] px-2 py-0.5">
                    {facturaCfg.label}
                  </Badge>
                </TableCell>

                {/* — (no acciones) */}
                <TableCell />
              </TableRow>
            );
          })
        : []),
  ];
}