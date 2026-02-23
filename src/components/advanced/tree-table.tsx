/**
 * TreeTable — Factoring Operations Table (3 levels)
 * @layer advanced
 * Renamed from tree-table-v2.tsx — R4 compliance (no version suffixes)
 */
import React, { useState, useCallback, useMemo } from "react";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "../ui/table";
import { Button } from "../ui/button";
import { Badge } from "../ui/badge";
import { Checkbox } from "../ui/checkbox";
import { Input } from "../ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../ui/select";
import { Tooltip, TooltipContent, TooltipTrigger } from "../ui/tooltip";
import {
  ChevronRight, ChevronDown, Eye, Ban, FileSpreadsheet, X, Search,
  ArrowUpDown, ArrowUp, ArrowDown, CheckCircle2, Download, Trash2,
  Filter, ChevronsUpDown, XCircle, User,
} from "lucide-react";
import { cn } from "../ui/utils";

export interface Pagador { nombre: string; nit: string; }
export interface FacturaDetalle {
  id: string; numero: string; pagador: Pagador;
  valor: number; valorDesembolso: number; fechaVencimiento: string;
  estado: "vigente" | "vencida" | "pagada";
}
export interface OperacionFactoring {
  id: string; fechaOperacion: string;
  cliente: { nombre: string; nit: string };
  facturas: FacturaDetalle[];
  valorFacturas: number; valorDesembolso: number;
  estado: "pendiente" | "aprobada" | "desembolsada" | "cancelada";
}
export type BatchAction = "approve" | "export" | "cancel";
type SortField = "id" | "fecha" | "cliente" | "valorFacturas" | "valorDesembolso" | null;
type SortDir = "asc" | "desc";
type CheckState = true | false | "indeterminate";

export interface TreeTableProps {
  data: OperacionFactoring[];
  onSelectionChange?: (selectedIds: Set<string>) => void;
  onBatchAction?: (action: BatchAction, selectedIds: Set<string>) => void;
  onVerOperacion?: (op: OperacionFactoring) => void;
  onCancelarOperacion?: (op: OperacionFactoring) => void;
  onDescargarExcel?: (op: OperacionFactoring) => void;
  title?: string;
  description?: string;
}

interface PagadorGroup {
  pagador: Pagador; facturas: FacturaDetalle[];
  valorTotal: number; valorDesembolsoTotal: number; groupId: string;
}

const estadoOperacionConfig: Record<OperacionFactoring["estado"], { label: string; variant: "warning-soft-outline" | "success-soft-outline" | "info-soft-outline" | "destructive-soft-outline"; order: number }> = {
  pendiente:    { label: "Pending",    variant: "warning-soft-outline",     order: 1 },
  aprobada:     { label: "Approved",   variant: "success-soft-outline",     order: 2 },
  desembolsada: { label: "Disbursed",  variant: "info-soft-outline",        order: 3 },
  cancelada:    { label: "Canceled",   variant: "destructive-soft-outline", order: 4 },
};

const estadoFacturaConfig: Record<FacturaDetalle["estado"], { label: string; variant: "success-soft-outline" | "warning-soft-outline" | "info-soft-outline" }> = {
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

function formatCurrency(val: number): string {
  return "$" + val.toLocaleString("es-CO", { minimumFractionDigits: 0, maximumFractionDigits: 0 });
}

function groupFacturasByPagador(op: OperacionFactoring): PagadorGroup[] {
  const map = new Map<string, PagadorGroup>();
  for (const f of op.facturas) {
    const key = f.pagador.nit;
    if (!map.has(key)) map.set(key, { pagador: f.pagador, facturas: [], valorTotal: 0, valorDesembolsoTotal: 0, groupId: `${op.id}::pag::${key}` });
    const group = map.get(key)!;
    group.facturas.push(f);
    group.valorTotal += f.valor;
    group.valorDesembolsoTotal += f.valorDesembolso;
  }
  return Array.from(map.values());
}

function getUniquePagadores(op: OperacionFactoring): Pagador[] {
  const map = new Map<string, Pagador>();
  for (const f of op.facturas) { if (!map.has(f.pagador.nit)) map.set(f.pagador.nit, f.pagador); }
  return Array.from(map.values());
}

function getOpAllIds(op: OperacionFactoring): string[] {
  const groups = groupFacturasByPagador(op);
  return [op.id, ...groups.map((g) => g.groupId), ...op.facturas.map((f) => f.id)];
}

function getCheckStateFromFacturas(facturaIds: string[], selected: Set<string>): CheckState {
  if (facturaIds.length === 0) return false;
  const count = facturaIds.filter((id) => selected.has(id)).length;
  if (count === 0) return false;
  if (count === facturaIds.length) return true;
  return "indeterminate";
}

function getOpCheckState(op: OperacionFactoring, selected: Set<string>): CheckState {
  return getCheckStateFromFacturas(op.facturas.map((f) => f.id), selected);
}

function getPagadorGroupCheckState(group: PagadorGroup, selected: Set<string>): CheckState {
  return getCheckStateFromFacturas(group.facturas.map((f) => f.id), selected);
}

function parseDate(dateStr: string): number {
  if (dateStr.includes("/")) { const [d, m, y] = dateStr.split("/"); return new Date(`${y}-${m}-${d}`).getTime(); }
  return new Date(dateStr).getTime();
}

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

function sortOperaciones(ops: OperacionFactoring[], field: SortField, dir: SortDir): OperacionFactoring[] {
  if (!field) return ops;
  return [...ops].sort((a, b) => {
    let cmp = 0;
    switch (field) {
      case "id": cmp = a.id.localeCompare(b.id); break;
      case "fecha": cmp = parseDate(a.fechaOperacion) - parseDate(b.fechaOperacion); break;
      case "cliente": cmp = a.cliente.nombre.localeCompare(b.cliente.nombre, "es"); break;
      case "valorFacturas": cmp = a.valorFacturas - b.valorFacturas; break;
      case "valorDesembolso": cmp = a.valorDesembolso - b.valorDesembolso; break;
    }
    return dir === "desc" ? -cmp : cmp;
  });
}

function countByEstado(ops: OperacionFactoring[]): Record<string, number> {
  const counts: Record<string, number> = {};
  for (const op of ops) counts[op.estado] = (counts[op.estado] || 0) + 1;
  return counts;
}

export function TreeTable({
  data, onSelectionChange, onBatchAction,
  onVerOperacion, onCancelarOperacion, onDescargarExcel,
  title, description,
}: TreeTableProps) {
  const [expandedOps, setExpandedOps] = useState<Set<string>>(new Set());
  const [expandedPagadores, setExpandedPagadores] = useState<Set<string>>(new Set());
  const [selectedIds, setSelectedIds] = useState<Set<string>>(new Set());
  const [searchQuery, setSearchQuery] = useState("");
  const [estadoFilter, setEstadoFilter] = useState("all");
  const [sortField, setSortField] = useState<SortField>(null);
  const [sortDir, setSortDir] = useState<SortDir>("asc");

  const processedData = useMemo(() => {
    let result = data;
    if (searchQuery.trim()) result = result.filter((op) => matchesSearch(op, searchQuery));
    if (estadoFilter !== "all") result = result.filter((op) => op.estado === estadoFilter);
    if (sortField) result = sortOperaciones(result, sortField, sortDir);
    return result;
  }, [data, searchQuery, estadoFilter, sortField, sortDir]);

  const estadoCounts = useMemo(() => countByEstado(data), [data]);
  const isFiltered = searchQuery.trim() !== "" || estadoFilter !== "all";

  const allFacturaIds = useMemo(() => {
    const ids: string[] = [];
    for (const op of processedData) for (const f of op.facturas) ids.push(f.id);
    return ids;
  }, [processedData]);

  const handleSort = useCallback((field: SortField) => {
    if (sortField === field) {
      if (sortDir === "asc") setSortDir("desc");
      else { setSortField(null); setSortDir("asc"); }
    } else { setSortField(field); setSortDir("asc"); }
  }, [sortField, sortDir]);

  const renderSortIcon = (field: SortField) => {
    if (sortField !== field) return <ArrowUpDown className="h-3 w-3 text-muted-foreground/40" />;
    if (sortDir === "asc") return <ArrowUp className="h-3 w-3 text-primary" />;
    return <ArrowDown className="h-3 w-3 text-primary" />;
  };

  const toggleExpandOp = (opId: string) => setExpandedOps((prev) => { const next = new Set(prev); next.has(opId) ? next.delete(opId) : next.add(opId); return next; });
  const toggleExpandPagador = (groupId: string) => setExpandedPagadores((prev) => { const next = new Set(prev); next.has(groupId) ? next.delete(groupId) : next.add(groupId); return next; });

  const expandAll = useCallback(() => {
    setExpandedOps(new Set(processedData.map((op) => op.id)));
    const pagIds = new Set<string>();
    for (const op of processedData) for (const g of groupFacturasByPagador(op)) pagIds.add(g.groupId);
    setExpandedPagadores(pagIds);
  }, [processedData]);

  const collapseAll = useCallback(() => { setExpandedOps(new Set()); setExpandedPagadores(new Set()); }, []);

  const updateSelection = useCallback((next: Set<string>) => { setSelectedIds(next); onSelectionChange?.(next); }, [onSelectionChange]);

  const reconcileParents = useCallback((next: Set<string>, op: OperacionFactoring) => {
    const groups = groupFacturasByPagador(op);
    let allGroupsFull = true;
    for (const group of groups) {
      const allSelected = group.facturas.every((f) => next.has(f.id));
      if (allSelected) next.add(group.groupId);
      else { next.delete(group.groupId); allGroupsFull = false; }
    }
    if (allGroupsFull && groups.length > 0) next.add(op.id);
    else next.delete(op.id);
  }, []);

  const toggleOpSelection = useCallback((op: OperacionFactoring) => {
    const next = new Set(selectedIds);
    const currentState = getOpCheckState(op, selectedIds);
    const allIds = getOpAllIds(op);
    if (currentState === true) allIds.forEach((id) => next.delete(id));
    else { allIds.forEach((id) => next.add(id)); setExpandedOps((prev) => new Set(prev).add(op.id)); }
    updateSelection(next);
  }, [selectedIds, updateSelection]);

  const togglePagadorSelection = useCallback((group: PagadorGroup, op: OperacionFactoring) => {
    const next = new Set(selectedIds);
    const currentState = getPagadorGroupCheckState(group, selectedIds);
    if (currentState === true) { group.facturas.forEach((f) => next.delete(f.id)); next.delete(group.groupId); }
    else { group.facturas.forEach((f) => next.add(f.id)); next.add(group.groupId); setExpandedPagadores((prev) => new Set(prev).add(group.groupId)); }
    reconcileParents(next, op);
    updateSelection(next);
  }, [selectedIds, updateSelection, reconcileParents]);

  const toggleFacturaSelection = useCallback((factura: FacturaDetalle, op: OperacionFactoring) => {
    const next = new Set(selectedIds);
    next.has(factura.id) ? next.delete(factura.id) : next.add(factura.id);
    reconcileParents(next, op);
    updateSelection(next);
  }, [selectedIds, updateSelection, reconcileParents]);

  const handleSelectAll = useCallback(() => {
    const allSelected = allFacturaIds.length > 0 && allFacturaIds.every((id) => selectedIds.has(id));
    if (allSelected) { updateSelection(new Set()); }
    else {
      const next = new Set<string>();
      for (const op of processedData) getOpAllIds(op).forEach((id) => next.add(id));
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

  const clearSelection = useCallback(() => updateSelection(new Set()), [updateSelection]);
  const resetFilters = useCallback(() => { setSearchQuery(""); setEstadoFilter("all"); setSortField(null); setSortDir("asc"); }, []);

  const selectedFacturaCount = allFacturaIds.filter((id) => selectedIds.has(id)).length;
  const selectedOpsCount = processedData.filter((op) => getOpCheckState(op, selectedIds) === true).length;
  const COL_COUNT = 10;

  return (
    <div className="rounded-lg border bg-background shadow-md overflow-hidden">
      {/* TOOLBAR */}
      <div className="flex flex-col gap-3 p-4 border-b">
        {(title || description) && (
          <div className="flex items-start justify-between gap-4">
            <div>
              {title && <h3 className="font-medium">{title}</h3>}
              {description && <p className="text-sm text-muted-foreground mt-0.5">{description}</p>}
            </div>
            <div className="flex items-center gap-1 shrink-0">
              <Button variant="ghost" size="sm" className="h-8 px-2 text-xs text-muted-foreground" onClick={expandAll}><ChevronsUpDown className="h-3.5 w-3.5 mr-1" />Expand</Button>
              <Button variant="ghost" size="sm" className="h-8 px-2 text-xs text-muted-foreground" onClick={collapseAll}>Collapse</Button>
            </div>
          </div>
        )}
        <div className="flex flex-col gap-2 sm:flex-row sm:items-center">
          <div className="relative w-full sm:w-72">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input placeholder="Search by ID, client, payer, Tax ID..." value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} className="pl-9 h-9 bg-background/50" />
            {searchQuery && <button onClick={() => setSearchQuery("")} className="absolute right-2 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"><X className="h-3.5 w-3.5" /></button>}
          </div>
          <Select value={estadoFilter} onValueChange={setEstadoFilter}>
            <SelectTrigger className="h-9 w-full sm:w-[190px] border-dashed bg-background/50">
              <Filter className="h-3.5 w-3.5 mr-2 text-muted-foreground" /><SelectValue placeholder="Status" />
            </SelectTrigger>
            <SelectContent>
              {ESTADO_OPTIONS.map((opt) => (
                <SelectItem key={opt.value} value={opt.value}>
                  {opt.label}{opt.value !== "all" && estadoCounts[opt.value] !== undefined && <span className="ml-1 text-muted-foreground">({estadoCounts[opt.value]})</span>}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
          {isFiltered && (
            <Button variant="ghost" size="sm" className="h-9 px-2 text-muted-foreground hover:text-foreground shrink-0" onClick={resetFilters}>Reset<XCircle className="ml-1 h-3.5 w-3.5" /></Button>
          )}
          {isFiltered && <span className="text-xs text-muted-foreground whitespace-nowrap">{processedData.length} of {data.length} operations</span>}
        </div>
      </div>

      {/* SELECTION BAR */}
      {selectedFacturaCount > 0 && (
        <div className="flex flex-wrap items-center justify-between gap-2 border-b bg-primary/5 px-4 py-2">
          <span className="text-sm text-muted-foreground">
            <span className="font-medium text-foreground">{selectedOpsCount}</span> operation{selectedOpsCount !== 1 ? "s" : ""} selected
            <span className="text-xs ml-1">({selectedFacturaCount} invoices)</span>
          </span>
          <div className="flex items-center gap-1.5">
            <Button variant="outline" size="sm" className="h-7 text-xs gap-1" onClick={() => onBatchAction?.("approve", selectedIds)}><CheckCircle2 className="h-3.5 w-3.5 text-green-600" />Approve</Button>
            <Button variant="outline" size="sm" className="h-7 text-xs gap-1" onClick={() => onBatchAction?.("export", selectedIds)}><Download className="h-3.5 w-3.5" />Export</Button>
            <Button variant="outline" size="sm" className="h-7 text-xs gap-1 text-destructive hover:text-destructive" onClick={() => onBatchAction?.("cancel", selectedIds)}><Trash2 className="h-3.5 w-3.5" />Cancel</Button>
            <div className="w-px h-5 bg-border mx-1" />
            <Button variant="ghost" size="sm" className="h-7 gap-1 text-xs" onClick={clearSelection}><X className="h-3 w-3" />Clear</Button>
          </div>
        </div>
      )}

      {/* TABLE */}
      <div className="overflow-x-auto">
        <div className="inline-block min-w-[1200px] w-full align-middle">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="w-[70px]">
                  <div className="flex items-center gap-1">
                    <Checkbox checked={selectAllState} onCheckedChange={handleSelectAll} aria-label="Select all" />
                  </div>
                </TableHead>
                <TableHead className="w-[110px]">
                  <button className="flex items-center gap-1 hover:text-foreground transition-colors" onClick={() => handleSort("id")}>ID {renderSortIcon("id")}</button>
                </TableHead>
                <TableHead className="w-[100px]">
                  <button className="flex items-end gap-1 hover:text-foreground transition-colors" onClick={() => handleSort("fecha")}>
                    <span className="flex flex-col leading-tight text-left"><span className="text-[10px] text-muted-foreground font-normal">Date</span><span>Operation</span></span>
                    {renderSortIcon("fecha")}
                  </button>
                </TableHead>
                <TableHead className="w-[170px]">
                  <button className="flex items-center gap-1 hover:text-foreground transition-colors" onClick={() => handleSort("cliente")}>Client {renderSortIcon("cliente")}</button>
                </TableHead>
                <TableHead className="w-[160px]">Payers</TableHead>
                <TableHead className="w-[80px] text-center">Invoices</TableHead>
                <TableHead className="w-[120px]">
                  <button className="flex items-end gap-1 hover:text-foreground transition-colors" onClick={() => handleSort("valorFacturas")}>
                    <span className="flex flex-col leading-tight text-left"><span className="text-[10px] text-muted-foreground font-normal">Value</span><span>Invoices</span></span>
                    {renderSortIcon("valorFacturas")}
                  </button>
                </TableHead>
                <TableHead className="w-[120px]">
                  <button className="flex items-end gap-1 hover:text-foreground transition-colors" onClick={() => handleSort("valorDesembolso")}>
                    <span className="flex flex-col leading-tight text-left"><span className="text-[10px] text-muted-foreground font-normal">Value</span><span>Disbursement</span></span>
                    {renderSortIcon("valorDesembolso")}
                  </button>
                </TableHead>
                <TableHead className="w-[120px] text-center">Status</TableHead>
                <TableHead className="w-[130px] text-center">Actions</TableHead>
              </TableRow>
            </TableHeader>

            {processedData.length > 0 ? (
              processedData.map((op) => {
                const isExpanded = expandedOps.has(op.id);
                const checkState = getOpCheckState(op, selectedIds);
                const pagadores = getUniquePagadores(op);
                const pagadorGroups = groupFacturasByPagador(op);
                const isMatch = !!(searchQuery.trim() && (op.id.toLowerCase().includes(searchQuery.toLowerCase().trim()) || op.cliente.nombre.toLowerCase().includes(searchQuery.toLowerCase().trim())));
                const estadoCfg = estadoOperacionConfig[op.estado];

                return (
                  <TableBody key={op.id}>
                    <TableRow className={cn("bg-background hover:bg-accent transition-colors", checkState === true && "bg-primary/10 hover:bg-primary/15", isMatch && "bg-yellow-50 dark:bg-yellow-500/10")} data-state={checkState === true ? "selected" : undefined}>
                      <TableCell>
                        <div className="flex items-center gap-1">
                          <Checkbox checked={checkState} onCheckedChange={() => toggleOpSelection(op)} aria-label={`Select ${op.id}`} />
                          <Button variant="ghost" size="sm" className="h-6 w-6 p-0 hover:bg-primary/10" onClick={() => toggleExpandOp(op.id)}>
                            {isExpanded ? <ChevronDown className="h-4 w-4" /> : <ChevronRight className="h-4 w-4" />}
                          </Button>
                        </div>
                      </TableCell>
                      <TableCell><span className="text-sm text-muted-foreground">{op.id}</span></TableCell>
                      <TableCell className="text-muted-foreground">{op.fechaOperacion}</TableCell>
                      <TableCell>
                        <div className="flex flex-col">
                          <span className="truncate max-w-[160px]">{op.cliente.nombre}</span>
                          <span className="text-xs text-muted-foreground">{op.cliente.nit}</span>
                        </div>
                      </TableCell>
                      <TableCell>
                        {pagadores.length === 1 ? (
                          <div className="flex flex-col">
                            <span className="truncate max-w-[150px]">{pagadores[0].nombre}</span>
                            <span className="text-xs text-muted-foreground">{pagadores[0].nit}</span>
                          </div>
                        ) : (
                          <Tooltip>
                            <TooltipTrigger asChild>
                              <span className="inline-flex"><Badge variant="info-soft-outline" className="cursor-default">{pagadores.length} payers</Badge></span>
                            </TooltipTrigger>
                            <TooltipContent side="bottom" className="max-w-[280px]">
                              <ul className="space-y-1">{pagadores.map((p) => <li key={p.nit} className="text-xs">{p.nombre} — {p.nit}</li>)}</ul>
                            </TooltipContent>
                          </Tooltip>
                        )}
                      </TableCell>
                      <TableCell className="text-center"><Badge variant="info-soft-outline">{op.facturas.length}</Badge></TableCell>
                      <TableCell className="font-medium">{formatCurrency(op.valorFacturas)}</TableCell>
                      <TableCell className="font-medium">{formatCurrency(op.valorDesembolso)}</TableCell>
                      <TableCell className="text-center"><Badge variant={estadoCfg.variant} className="text-[11px] px-2 py-0.5">{estadoCfg.label}</Badge></TableCell>
                      <TableCell>
                        <div className="flex items-center justify-center gap-1">
                          <Tooltip><TooltipTrigger asChild><Button variant="ghost" size="sm" className="h-7 w-7 p-0" onClick={() => onVerOperacion?.(op)}><Eye className="h-4 w-4" /><span className="sr-only">View</span></Button></TooltipTrigger><TooltipContent>View operation</TooltipContent></Tooltip>
                          <Tooltip><TooltipTrigger asChild><Button variant="ghost" size="sm" className="h-7 w-7 p-0 text-destructive hover:text-destructive" onClick={() => onCancelarOperacion?.(op)} disabled={op.estado === "cancelada" || op.estado === "desembolsada"}><Ban className="h-4 w-4" /><span className="sr-only">Cancel</span></Button></TooltipTrigger><TooltipContent>Cancel operation</TooltipContent></Tooltip>
                          <Tooltip><TooltipTrigger asChild><Button variant="ghost" size="sm" className="h-7 w-7 p-0" onClick={() => onDescargarExcel?.(op)}><FileSpreadsheet className="h-4 w-4" /><span className="sr-only">Excel</span></Button></TooltipTrigger><TooltipContent>Download Excel</TooltipContent></Tooltip>
                        </div>
                      </TableCell>
                    </TableRow>

                    {isExpanded && pagadorGroups.map((group) => {
                      const pagCheckState = getPagadorGroupCheckState(group, selectedIds);
                      const isPagExpanded = expandedPagadores.has(group.groupId);
                      const pagMatch = !!(searchQuery.trim() && (group.pagador.nombre.toLowerCase().includes(searchQuery.toLowerCase().trim()) || group.pagador.nit.toLowerCase().includes(searchQuery.toLowerCase().trim())));

                      return [
                        <TableRow key={`pagador-${group.groupId}`} className={cn("bg-muted/40 hover:bg-muted/70 transition-colors", pagCheckState === true && "bg-primary/10 hover:bg-primary/15", pagMatch && "bg-yellow-50 dark:bg-yellow-500/10")}>
                          <TableCell>
                            <div className="flex items-center gap-1 pl-4">
                              <Checkbox checked={pagCheckState} onCheckedChange={() => togglePagadorSelection(group, op)} aria-label={`Select ${group.pagador.nombre}`} />
                              <Button variant="ghost" size="sm" className="h-6 w-6 p-0 hover:bg-primary/10" onClick={() => toggleExpandPagador(group.groupId)}>
                                {isPagExpanded ? <ChevronDown className="h-3.5 w-3.5" /> : <ChevronRight className="h-3.5 w-3.5" />}
                              </Button>
                            </div>
                          </TableCell>
                          <TableCell>
                            <div className="flex items-center gap-2">
                              <User className="h-3.5 w-3.5 text-muted-foreground shrink-0" />
                              <div className="flex flex-col">
                                <span className={cn("truncate max-w-[140px]", pagMatch && "bg-yellow-200/60 dark:bg-yellow-400/20 px-0.5 rounded")}>{group.pagador.nombre}</span>
                                <span className="text-xs text-muted-foreground">{group.pagador.nit}</span>
                              </div>
                            </div>
                          </TableCell>
                          <TableCell /><TableCell /><TableCell />
                          <TableCell className="text-center"><Badge variant="info-soft-outline" className="text-[10px] px-1.5 py-0">{group.facturas.length}</Badge></TableCell>
                          <TableCell className="text-sm">{formatCurrency(group.valorTotal)}</TableCell>
                          <TableCell className="text-sm">{formatCurrency(group.valorDesembolsoTotal)}</TableCell>
                          <TableCell /><TableCell />
                        </TableRow>,

                        ...(isPagExpanded ? group.facturas.map((factura) => {
                          const isFacturaSelected = selectedIds.has(factura.id);
                          const facturaCfg = estadoFacturaConfig[factura.estado];
                          const facturaMatch = !!(searchQuery.trim() && (factura.numero.toLowerCase().includes(searchQuery.toLowerCase().trim()) || factura.pagador.nombre.toLowerCase().includes(searchQuery.toLowerCase().trim())));
                          return (
                            <TableRow key={factura.id} className={cn("bg-muted/60 hover:bg-muted/80 transition-colors border-l-4 border-l-primary/15", isFacturaSelected && "bg-primary/10 hover:bg-primary/15 border-l-primary/50", facturaMatch && "bg-yellow-50 dark:bg-yellow-500/10")}>
                              <TableCell>
                                <div className="flex items-center gap-1 pl-10">
                                  <Checkbox checked={isFacturaSelected} onCheckedChange={() => toggleFacturaSelection(factura, op)} aria-label={`Select ${factura.numero}`} />
                                </div>
                              </TableCell>
                              <TableCell><span className="text-sm text-muted-foreground">{factura.numero}</span></TableCell>
                              <TableCell className="text-muted-foreground text-sm">{factura.fechaVencimiento}</TableCell>
                              <TableCell /><TableCell /><TableCell />
                              <TableCell className="text-sm">{formatCurrency(factura.valor)}</TableCell>
                              <TableCell className="text-sm">{formatCurrency(factura.valorDesembolso)}</TableCell>
                              <TableCell className="text-center"><Badge variant={facturaCfg.variant} className="text-[11px] px-2 py-0.5">{facturaCfg.label}</Badge></TableCell>
                              <TableCell />
                            </TableRow>
                          );
                        }) : []),
                      ];
                    })}
                  </TableBody>
                );
              })
            ) : (
              <TableBody>
                <TableRow>
                  <TableCell colSpan={COL_COUNT} className="h-24 text-center">
                    <div className="flex flex-col items-center gap-2">
                      <Search className="h-8 w-8 text-muted-foreground/30" />
                      <span className="text-muted-foreground">{isFiltered ? "No operations found for the applied filters" : "No operations available"}</span>
                      {isFiltered && <Button variant="link" size="sm" onClick={resetFilters}>Clear filters</Button>}
                    </div>
                  </TableCell>
                </TableRow>
              </TableBody>
            )}
          </Table>
        </div>
      </div>
      <div className="p-2 text-xs text-muted-foreground text-center lg:hidden border-t bg-muted/20">Swipe horizontally to see all columns</div>
    </div>
  );
}

// Backwards-compatible alias — consumed by TreeTableV2Page while routing IDs migrate
export { TreeTable as TreeTableV2 };
export type { TreeTableProps as TreeTableV2Props };
