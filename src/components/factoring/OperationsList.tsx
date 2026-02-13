/**
 * OperationsList — Gestión de Operaciones (C-Financia Admin)
 * 
 * Tree table con 3 niveles:
 *   L1: Operación/Cliente
 *   L2: Pagador (Agrupación)
 *   L3: Factura (Detalle)
 *
 * REFACTOR FINAL (Point-and-Click Fix):
 * Se ha eliminado la modularidad de sub-componentes para las filas (OperationsMainRow, etc.)
 * e implementado un renderizado totalmente plano y directo en el TableBody. 
 * Esto asegura que el inspector de Figma Make identifique cada TableRow individualmente 
 * sin interferencia de capas de componentes intermedios o fragmentos ocultos.
 *
 * ACTUALIZACIÓN:
 * - Reordenación de columnas: Checkbox, Factura (ID), Pagadores, Cliente, Fecha, Facturas, V. Facturas, V. Desembolso, Estado, Acciones.
 * - Estilo de ID/Factura unificado con el de NIT bajo nombres (text-[10px], muted-foreground).
 * - Alineación de datos en los 3 niveles del tree table.
 */
import React, { useState, useEffect, useCallback, useMemo } from "react";
import { Badge } from "../ui/badge";
import { Button } from "../ui/button";
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
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../ui/table";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "../ui/tooltip";
import { Card, CardContent } from "../ui/card";
import { FactoringKpiCardGroup } from "../patterns/FactoringKpiCardGroup";
import { ReportsConsultation } from "../patterns/ReportsConsultation";
import { cn } from "../../lib/utils";
import { toast } from "sonner@2.0.3";
import {
  Eye,
  CheckCircle,
  Clock,
  FileText,
  Download,
  Send,
  FileSearch,
  Plus,
  Search,
  Filter,
  Ban,
  FileSpreadsheet,
  ChevronLeft,
  RefreshCw,
  ChevronsUpDown,
  FileCheck2,
  Receipt,
  CheckCircle2,
  ChevronDown,
  ChevronRight,
  User
} from "lucide-react";

/* ═══════════════════════════════════════════
   TYPES & INTERFACES
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

export interface Operation {
  id: string;
  cliente: { nombre: string; nit: string };
  monto: number;
  plazo: number;
  tasa: number;
  comision: number;
  estado: string;
  subEstado?: string;
  fechaCreacion: string;
  facturas: FacturaDetalle[];
  valorFacturas: number;
  valorDesembolso: number;
  ejecutivo: string;
}

export interface PagadorGroup {
  pagador: Pagador;
  facturas: FacturaDetalle[];
  valorTotal: number;
  valorDesembolsoTotal: number;
  groupId: string;
}

export type CheckState = true | false | "indeterminate";

/* ═══════════════════════════════════════════
   CONFIGS — Soft-Outline badges (DSM)
   ═══════════════════════════════════════════ */

const estadoOperacionConfig: Record<
  string,
  { label: string; variant: "default" | "warning-soft-outline" | "success-soft-outline" | "info-soft-outline" | "destructive-soft-outline" }
> = {
  Creada:       { label: "Creada",       variant: "default" },
  "En Proceso": { label: "En Proceso",   variant: "warning-soft-outline" },
  Negociada:    { label: "Negociada",    variant: "info-soft-outline" },
  Endosada:     { label: "Endosada",     variant: "success-soft-outline" },
  Liquidada:    { label: "Liquidada",    variant: "success-soft-outline" },
  Rechazada:    { label: "Rechazada",    variant: "destructive-soft-outline" },
};

const estadoFacturaConfig: Record<
  string,
  { label: string; variant: "success-soft-outline" | "warning-soft-outline" | "info-soft-outline" }
> = {
  vigente: { label: "Vigente", variant: "success-soft-outline" },
  vencida: { label: "Vencida", variant: "warning-soft-outline" },
  pagada:  { label: "Pagada",  variant: "info-soft-outline" },
};

const ESTADO_OPTIONS = [
  { value: "all", label: "Todos los estados" },
  { value: "Creada", label: "Creada" },
  { value: "En Proceso", label: "En Proceso" },
  { value: "Negociada", label: "Negociada" },
  { value: "Endosada", label: "Endosada" },
  { value: "Liquidada", label: "Liquidada" },
  { value: "Rechazada", label: "Rechazada" },
];

/* ═══════════════════════════════════════════
   MOCK DATA
   ═══════════════════════════════════════════ */

const PAGADORES: Pagador[] = [
  { nombre: "Minera Andina S.A.", nit: "90.100.200-3" },
  { nombre: "Constructora del Pacífico", nit: "91.200.300-4" },
  { nombre: "Supermercados Del Centro", nit: "92.300.400-5" },
  { nombre: "Farmacéutica Nacional Ltda.", nit: "93.400.500-6" },
  { nombre: "Logística Sur S.A.", nit: "94.500.600-7" },
  { nombre: "Tecnología Andes SpA", nit: "95.600.700-8" },
  { nombre: "Distribuidora Norte Ltda.", nit: "96.700.800-9" },
  { nombre: "Petroquímica Central S.A.", nit: "97.800.900-0" },
];

function generateFacturas(
  opId: string,
  count: number,
  montoTotal: number,
  fechaBase: string,
  pagadorIndices: number[]
): FacturaDetalle[] {
  const facturas: FacturaDetalle[] = [];
  const estados: FacturaDetalle["estado"][] = ["vigente", "vencida", "pagada"];
  let remaining = montoTotal;

  for (let i = 0; i < count; i++) {
    const isLast = i === count - 1;
    const valor = isLast ? remaining : Math.round((montoTotal / count) * (0.8 + Math.random() * 0.4));
    if (!isLast) remaining -= valor;
    const pagIdx = pagadorIndices[i % pagadorIndices.length];
    const baseDate = new Date(fechaBase);
    baseDate.setDate(baseDate.getDate() + (i * 7) + Math.floor(Math.random() * 15));

    facturas.push({
      id: `${opId}-F${String(i + 1).padStart(2, "0")}`,
      numero: `FC-${opId.replace("OP-2025-", "")}${String(i + 1).padStart(2, "0")}`,
      pagador: PAGADORES[pagIdx],
      valor,
      valorDesembolso: Math.round(valor * 0.93),
      fechaVencimiento: baseDate.toISOString().split("T")[0],
      estado: estados[i % 3],
    });
  }
  return facturas;
}

const mockOperations: Operation[] = [
  {
    id: "OP-2025-152", cliente: { nombre: "Retail JKL S.A.", nit: "80.567.890-1" },
    monto: 28000, plazo: 30, tasa: 2.5, comision: 700, estado: "Creada",
    fechaCreacion: "2025-12-14", ejecutivo: "Ana Martínez",
    facturas: generateFacturas("OP-2025-152", 4, 30000, "2025-01-13", [0, 1]),
    valorFacturas: 30000, valorDesembolso: 28500,
  },
  {
    id: "OP-2025-151", cliente: { nombre: "Servicios MNO Ltda.", nit: "81.678.901-2" },
    monto: 15000, plazo: 45, tasa: 2.75, comision: 619, estado: "Creada",
    fechaCreacion: "2025-12-13", ejecutivo: "Juan Pérez",
    facturas: generateFacturas("OP-2025-151", 2, 16500, "2025-01-27", [2]),
    valorFacturas: 16500, valorDesembolso: 14800,
  },
  {
    id: "OP-2025-155", cliente: { nombre: "Comercial ABC Ltda.", nit: "77.234.567-8" },
    monto: 32000, plazo: 45, tasa: 2.75, comision: 1320, estado: "En Proceso",
    fechaCreacion: "2025-12-17", ejecutivo: "Juan Pérez",
    facturas: generateFacturas("OP-2025-155", 3, 35000, "2025-01-31", [0, 3]),
    valorFacturas: 35000, valorDesembolso: 31800,
  },
  {
    id: "OP-2025-153", cliente: { nombre: "Mayorista GHI SpA", nit: "79.456.789-0" },
    monto: 41000, plazo: 60, tasa: 3.0, comision: 2460, estado: "Negociada", subEstado: "Negociada",
    fechaCreacion: "2025-12-15", ejecutivo: "Carlos Rojas",
    facturas: generateFacturas("OP-2025-153", 6, 44000, "2025-02-13", [1, 3, 5]),
    valorFacturas: 44000, valorDesembolso: 40500,
  },
  {
    id: "OP-2025-156", cliente: { nombre: "Distribuidora XYZ S.A.", nit: "76.123.456-7" },
    monto: 45000, plazo: 30, tasa: 2.5, comision: 1125, estado: "Endosada", subEstado: "Operacion notificada",
    fechaCreacion: "2025-12-18", ejecutivo: "María González",
    facturas: generateFacturas("OP-2025-156", 5, 48000, "2025-01-17", [0, 2, 4]),
    valorFacturas: 48000, valorDesembolso: 44500,
  },
  {
    id: "OP-2025-154", cliente: { nombre: "Importadora DEF S.A.", nit: "78.345.678-9" },
    monto: 58000, plazo: 30, tasa: 2.5, comision: 1450, estado: "Liquidada",
    fechaCreacion: "2025-12-16", ejecutivo: "María González",
    facturas: generateFacturas("OP-2025-154", 8, 62000, "2025-01-15", [0, 2, 5, 6]),
    valorFacturas: 62000, valorDesembolso: 57200,
  },
];

/* ═══════════════════════════════════════════
   HELPERS
   ═══════════════════════════════════════════ */

function formatCurrency(val: number): string {
  return "$" + val.toLocaleString("es-CL", { minimumFractionDigits: 0, maximumFractionDigits: 0 });
}

function groupFacturasByPagador(op: Operation): PagadorGroup[] {
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

function getUniquePagadores(op: Operation): Pagador[] {
  const map = new Map<string, Pagador>();
  for (const f of op.facturas) {
    if (!map.has(f.pagador.nit)) {
      map.set(f.pagador.nit, f.pagador);
    }
  }
  return Array.from(map.values());
}

function getOpAllIds(op: Operation): string[] {
  const groups = groupFacturasByPagador(op);
  return [
    op.id,
    ...groups.map((g) => g.groupId),
    ...op.facturas.map((f) => f.id),
  ];
}

function getCheckStateFromFacturas(facturaIds: string[], selected: Set<string>): CheckState {
  if (facturaIds.length === 0) return false;
  const count = facturaIds.filter((id) => selected.has(id)).length;
  if (count === 0) return false;
  if (count === facturaIds.length) return true;
  return "indeterminate";
}

function getOpCheckState(op: Operation, selected: Set<string>): CheckState {
  return getCheckStateFromFacturas(op.facturas.map((f) => f.id), selected);
}

type SortField = "id" | "fecha" | "cliente" | "valorFacturas" | "valorDesembolso" | null;
type SortDir = "asc" | "desc";

function sortOperations(ops: Operation[], field: SortField, dir: SortDir): Operation[] {
  if (!field) return ops;
  return [...ops].sort((a, b) => {
    let cmp = 0;
    switch (field) {
      case "id": cmp = a.id.localeCompare(b.id); break;
      case "fecha": cmp = new Date(a.fechaCreacion).getTime() - new Date(b.fechaCreacion).getTime(); break;
      case "cliente": cmp = a.cliente.nombre.localeCompare(b.cliente.nombre, "es"); break;
      case "valorFacturas": cmp = a.valorFacturas - b.valorFacturas; break;
      case "valorDesembolso": cmp = a.valorDesembolso - b.valorDesembolso; break;
    }
    return dir === "desc" ? -cmp : cmp;
  });
}

function matchesSearch(op: Operation, query: string): boolean {
  const q = query.toLowerCase().trim();
  if (!q) return true;
  if (op.id.toLowerCase().includes(q)) return true;
  if (op.cliente.nombre.toLowerCase().includes(q)) return true;
  if (op.cliente.nit.includes(q)) return true;
  for (const f of op.facturas) {
    if (f.pagador.nombre.toLowerCase().includes(q)) return true;
    if (f.numero.toLowerCase().includes(q)) return true;
  }
  return false;
}

/* ═══════════════════════════════════════════
   MAIN COMPONENT
   ═══════════════════════════════════════════ */

interface OperationsListProps {
  onNewOperation?: () => void;
}

export function OperationsList({ onNewOperation }: OperationsListProps = {}) {
  const [expandedOps, setExpandedOps] = useState<Set<string>>(new Set());
  const [expandedPagadores, setExpandedPagadores] = useState<Set<string>>(new Set());
  const [selectedIds, setSelectedIds] = useState<Set<string>>(new Set());

  const [searchQuery, setSearchQuery] = useState("");
  const [estadoFilter, setEstadoFilter] = useState("all");
  const [activeKpiFilter, setActiveKpiFilter] = useState<string>("Creada");
  const [sortField, setSortField] = useState<SortField>(null);
  const [sortDir, setSortDir] = useState<SortDir>("asc");

  const [showReports, setShowReports] = useState(false);
  const [showLoading, setShowLoading] = useState(true);
  const [selectedOpDetail, setSelectedOpDetail] = useState<string | null>(null);

  useEffect(() => {
    const timer = setTimeout(() => setShowLoading(false), 600);
    return () => clearTimeout(timer);
  }, []);

  /* ── Data pipeline ── */
  const processedData = useMemo(() => {
    let result = mockOperations;
    if (activeKpiFilter !== "all") result = result.filter((op) => op.estado === activeKpiFilter);
    if (estadoFilter !== "all") result = result.filter((op) => op.estado === estadoFilter);
    if (searchQuery.trim()) result = result.filter((op) => matchesSearch(op, searchQuery));
    if (sortField) result = sortOperations(result, sortField, sortDir);
    return result;
  }, [activeKpiFilter, estadoFilter, searchQuery, sortField, sortDir]);

  const allFacturaIds = useMemo(() => {
    const ids: string[] = [];
    for (const op of processedData) {
      for (const f of op.facturas) ids.push(f.id);
    }
    return ids;
  }, [processedData]);

  /* ── Handlers ── */
  const toggleExpandOp = useCallback((opId: string) => {
    setExpandedOps((prev) => {
      const next = new Set(prev);
      if (next.has(opId)) next.delete(opId);
      else next.add(opId);
      return next;
    });
  }, []);

  const toggleExpandPagador = useCallback((groupId: string) => {
    setExpandedPagadores((prev) => {
      const next = new Set(prev);
      if (next.has(groupId)) next.delete(groupId);
      else next.add(groupId);
      return next;
    });
  }, []);

  const toggleOpSelection = useCallback(
    (op: Operation) => {
      const next = new Set(selectedIds);
      const currentState = getOpCheckState(op, selectedIds);
      const allIds = getOpAllIds(op);
      if (currentState === true) allIds.forEach((id) => next.delete(id));
      else {
        allIds.forEach((id) => next.add(id));
        setExpandedOps((prev) => new Set(prev).add(op.id));
      }
      setSelectedIds(next);
    },
    [selectedIds]
  );

  const togglePagadorSelection = useCallback(
    (group: PagadorGroup, op: Operation) => {
      const next = new Set(selectedIds);
      const currentState = getCheckStateFromFacturas(group.facturas.map(f => f.id), selectedIds);

      if (currentState === true) {
        group.facturas.forEach((f) => next.delete(f.id));
        next.delete(group.groupId);
      } else {
        group.facturas.forEach((f) => next.add(f.id));
        next.add(group.groupId);
        setExpandedPagadores((prev) => new Set(prev).add(group.groupId));
      }

      // Reconcile parent op
      const opFacturaIds = op.facturas.map(f => f.id);
      const opCheck = getCheckStateFromFacturas(opFacturaIds, next);
      if (opCheck === true) next.add(op.id);
      else next.delete(op.id);

      setSelectedIds(next);
    },
    [selectedIds]
  );

  const toggleFacturaSelection = useCallback(
    (factura: FacturaDetalle, op: Operation) => {
      const next = new Set(selectedIds);
      if (next.has(factura.id)) next.delete(factura.id);
      else next.add(factura.id);

      // Reconcile group
      const group = groupFacturasByPagador(op).find(g => g.facturas.some(f => f.id === factura.id));
      if (group) {
        const groupCheck = getCheckStateFromFacturas(group.facturas.map(f => f.id), next);
        if (groupCheck === true) next.add(group.groupId);
        else next.delete(group.groupId);
      }

      // Reconcile op
      const opCheck = getCheckStateFromFacturas(op.facturas.map(f => f.id), next);
      if (opCheck === true) next.add(op.id);
      else next.delete(op.id);

      setSelectedIds(next);
    },
    [selectedIds]
  );

  const handleSelectAll = () => {
    const allSelected = allFacturaIds.length > 0 && allFacturaIds.every((id) => selectedIds.has(id));
    if (allSelected) setSelectedIds(new Set());
    else {
      const next = new Set<string>();
      for (const op of processedData) {
        getOpAllIds(op).forEach(id => next.add(id));
      }
      setSelectedIds(next);
      setExpandedOps(new Set(processedData.map(o => o.id)));
    }
  };

  const selectAllState: CheckState = useMemo(() => {
    if (allFacturaIds.length === 0) return false;
    const count = allFacturaIds.filter((id) => selectedIds.has(id)).length;
    if (count === 0) return false;
    if (count === allFacturaIds.length) return true;
    return "indeterminate";
  }, [allFacturaIds, selectedIds]);

  const handleAction = useCallback((action: string, opId: string) => {
    if (action === "view") setSelectedOpDetail(opId);
    else toast.info(`Acción ${action} ejecutada para ${opId}`);
  }, []);

  const kpiCards = [
    { id: "Creada", label: "Creadas", description: "En registro", value: "$ 30.000", count: 2, variant: "blue" as const, onAction: () => setActiveKpiFilter("Creada"), icon: <FileCheck2 /> },
    { id: "En Proceso", label: "En Proceso", description: "En revisión", value: "$ 32.000", count: 1, variant: "yellow" as const, onAction: () => setActiveKpiFilter("En Proceso"), icon: <Clock /> },
    { id: "Negociada", label: "Negociadas", description: "Aprobadas", value: "$ 41.000", count: 1, variant: "lime" as const, onAction: () => setActiveKpiFilter("Negociada"), icon: <FileText /> },
    { id: "Endosada", label: "Endosadas", description: "Notificadas", value: "$ 45.000", count: 1, variant: "lime" as const, onAction: () => setActiveKpiFilter("Endosada"), icon: <Receipt /> },
  ];

  if (showLoading) {
    return (
      <div className="flex items-center justify-center py-20">
        <div className="flex flex-col items-center gap-3">
          <div className="h-8 w-8 animate-spin rounded-full border-4 border-primary border-t-transparent" />
          <p className="text-sm text-muted-foreground font-medium">Cargando Gestión de Operaciones...</p>
        </div>
      </div>
    );
  }

  if (showReports) return <ReportsConsultation onBack={() => setShowReports(false)} />;

  return (
    <div className="space-y-6">
      {/* ═══ TITLE ═══ */}
      <div className="flex items-center justify-between">
        <div className="space-y-1">
          <h1 className="text-3xl font-bold tracking-tight text-foreground">Gestión de Operaciones</h1>
          <p className="text-muted-foreground text-sm">Monitorea y administra todas las operaciones de factoring.</p>
        </div>
        <div className="flex items-center gap-2">
            <Button variant="outline" size="sm" onClick={() => setShowReports(true)} className="gap-2">
                <FileSearch className="h-4 w-4" />
                Consultar Facturas
            </Button>
            <Button size="sm" onClick={onNewOperation} className="gap-2">
                <Plus className="h-4 w-4" />
                Nueva Operación
            </Button>
        </div>
      </div>

      {/* ═══ KPI CARDS ═══ */}
      <FactoringKpiCardGroup cards={kpiCards} activeId={activeKpiFilter} onCardClick={setActiveKpiFilter} />

      {/* ═══ TABLE CONTAINER ═══ */}
      <Card className="overflow-hidden border-slate-200 dark:border-slate-800 shadow-lg bg-card">
        <div className="p-4 border-b flex items-center justify-between bg-muted/20">
            <div className="flex items-center gap-3">
                <div className="relative w-64">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                    <Input 
                        placeholder="Buscar por ID o cliente..." 
                        className="pl-9 h-9" 
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                    />
                </div>
                <Select value={estadoFilter} onValueChange={setEstadoFilter}>
                    <SelectTrigger className="h-9 w-[180px]">
                        <Filter className="h-4 w-4 mr-2 opacity-50" />
                        <SelectValue placeholder="Estado" />
                    </SelectTrigger>
                    <SelectContent>
                        {ESTADO_OPTIONS.map(opt => <SelectItem key={opt.value} value={opt.value}>{opt.label}</SelectItem>)}
                    </SelectContent>
                </Select>
            </div>
            <div className="flex items-center gap-2">
                <Button variant="ghost" size="sm" onClick={() => {setExpandedOps(new Set(processedData.map(o => o.id)))}} className="h-8 text-xs text-muted-foreground">
                    <ChevronsUpDown className="h-4 w-4 mr-1" />
                    Expandir Todo
                </Button>
                <div className="w-px h-4 bg-border mx-1" />
                <Button variant="outline" size="sm" className="h-8 text-xs gap-1.5">
                    <Download className="h-4 w-4" />
                    Exportar
                </Button>
                <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                    <RefreshCw className="h-4 w-4" />
                </Button>
            </div>
        </div>

        {/* ═══ SELECTION BAR ═══ */}
        {selectedIds.size > 0 && (
            <div className="px-4 py-2 bg-primary/5 border-b flex items-center justify-between animate-in slide-in-from-top duration-300">
                <div className="flex items-center gap-2 text-sm text-primary font-medium">
                    <CheckCircle2 className="h-4 w-4" />
                    {selectedIds.size} elementos seleccionados
                </div>
                <div className="flex items-center gap-2">
                    <Button variant="outline" size="sm" className="h-8 text-xs">Aprobar Batch</Button>
                    <Button variant="ghost" size="sm" className="h-8 text-xs text-destructive hover:text-destructive" onClick={() => setSelectedIds(new Set())}>Limpiar</Button>
                </div>
            </div>
        )}

        <div className="overflow-x-auto">
          <Table>
            <TableHeader className="bg-muted/30">
              <TableRow>
                <TableHead className="w-[80px]">
                  <Checkbox checked={selectAllState} onCheckedChange={handleSelectAll} />
                </TableHead>
                <TableHead className="w-[120px]">ID</TableHead>
                <TableHead className="w-[180px]">Pagadores</TableHead>
                <TableHead className="w-[200px]">Cliente</TableHead>
                <TableHead className="w-[120px]">Fecha</TableHead>
                <TableHead className="w-[100px] text-center">Facturas</TableHead>
                <TableHead className="w-[140px]">V. Facturas</TableHead>
                <TableHead className="w-[140px]">V. Desembolso</TableHead>
                <TableHead className="w-[140px] text-center">Estado</TableHead>
                <TableHead className="w-[120px] text-center">Acciones</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
            {processedData.length > 0 ? (
                processedData.flatMap((op) => {
                    const rows: React.ReactNode[] = [];
                    const isOpExpanded = expandedOps.has(op.id);
                    const opCheckState = getOpCheckState(op, selectedIds);
                    const opPagadores = getUniquePagadores(op);
                    const opIsMatch = searchQuery.trim() !== "" && (op.id.includes(searchQuery) || op.cliente.nombre.toLowerCase().includes(searchQuery.toLowerCase()));
                    const estadoCfg = estadoOperacionConfig[op.estado] || { label: op.estado, variant: "default" };

                    // ─── L1: MAIN OPERATION ROW ───
                    rows.push(
                        <TableRow
                            key={op.id}
                            className={cn(
                                "bg-background hover:bg-accent transition-colors cursor-pointer group/row",
                                opCheckState === true && "bg-primary/10 hover:bg-primary/15",
                                opIsMatch && "bg-yellow-50 dark:bg-yellow-500/10"
                            )}
                            data-state={opCheckState === true ? "selected" : undefined}
                            onClick={() => toggleOpSelection(op)}
                        >
                            <TableCell onClick={(e) => e.stopPropagation()}>
                                <div className="flex items-center gap-1">
                                    <Checkbox
                                        checked={opCheckState}
                                        onCheckedChange={() => toggleOpSelection(op)}
                                        aria-label={`Seleccionar ${op.id}`}
                                    />
                                    <Button
                                        variant="ghost"
                                        size="sm"
                                        className="h-6 w-6 p-0 hover:bg-primary/20"
                                        onClick={(e) => {
                                            e.stopPropagation();
                                            toggleExpandOp(op.id);
                                        }}
                                    >
                                        {isOpExpanded ? <ChevronDown className="h-4 w-4" /> : <ChevronRight className="h-4 w-4" />}
                                    </Button>
                                </div>
                            </TableCell>
                            <TableCell>
                                <span className="text-[10px] text-muted-foreground">
                                    {op.id}
                                </span>
                            </TableCell>
                            <TableCell>
                                {opPagadores.length === 1 ? (
                                    <div className="flex flex-col">
                                        <span className="truncate max-w-[150px] text-sm">{opPagadores[0].nombre}</span>
                                        <span className="text-[10px] text-muted-foreground">{opPagadores[0].nit}</span>
                                    </div>
                                ) : (
                                    <Tooltip>
                                        <TooltipTrigger asChild>
                                            <span className="inline-flex">
                                                <Badge variant="info-soft-outline" className="cursor-default text-[10px] h-5">
                                                    {opPagadores.length} pagadores
                                                </Badge>
                                            </span>
                                        </TooltipTrigger>
                                        <TooltipContent side="bottom" className="max-w-[280px]">
                                            <ul className="space-y-1 p-1">
                                                {opPagadores.map((p) => (
                                                    <li key={p.nit} className="text-xs">
                                                        {p.nombre} — <span className="text-muted-foreground">{p.nit}</span>
                                                    </li>
                                                ))}
                                            </ul>
                                        </TooltipContent>
                                    </Tooltip>
                                )}
                            </TableCell>
                            <TableCell>
                                <div className="flex flex-col">
                                    <span className="truncate max-w-[160px] font-semibold text-sm">{op.cliente.nombre}</span>
                                    <span className="text-[10px] text-muted-foreground">{op.cliente.nit}</span>
                                </div>
                            </TableCell>
                            <TableCell className="text-muted-foreground text-sm font-satoshi">{op.fechaCreacion}</TableCell>
                            <TableCell className="text-center font-satoshi">
                                <Badge variant="info-soft-outline" className="h-5 text-[10px] font-bold font-satoshi">{op.facturas.length}</Badge>
                            </TableCell>
                            <TableCell className="font-bold text-sm font-satoshi">{formatCurrency(op.valorFacturas)}</TableCell>
                            <TableCell className="font-bold text-sm text-primary font-satoshi">{formatCurrency(op.valorDesembolso)}</TableCell>
                            <TableCell className="text-center">
                                <Badge variant={estadoCfg.variant as any} className="text-[10px] px-2 py-0 h-5 font-bold uppercase tracking-tighter">
                                    {estadoCfg.label}
                                </Badge>
                                {op.subEstado && (
                                    <div className="mt-0.5">
                                        <span className="text-[10px] text-muted-foreground italic leading-none">{op.subEstado}</span>
                                    </div>
                                )}
                            </TableCell>
                            <TableCell onClick={(e) => e.stopPropagation()}>
                                <div className="flex items-center justify-center gap-1 opacity-60 group-hover/row:opacity-100 transition-opacity">
                                    <Button variant="ghost" size="sm" className="h-7 w-7 p-0" onClick={() => handleAction("view", op.id)}>
                                        <Eye className="h-4 w-4" />
                                    </Button>
                                    {op.estado === "En Proceso" && (
                                        <Button variant="ghost" size="sm" className="h-7 w-7 p-0 text-green-600 hover:text-green-600 hover:bg-green-50" onClick={() => handleAction("approve", op.id)}>
                                            <CheckCircle className="h-4 w-4" />
                                        </Button>
                                    )}
                                    {op.estado === "Negociada" && (
                                        <Button variant="ghost" size="sm" className="h-7 w-7 p-0 text-blue-600 hover:text-blue-600 hover:bg-blue-50" onClick={() => handleAction("endorse", op.id)}>
                                            <Send className="h-4 w-4" />
                                        </Button>
                                    )}
                                    <Button variant="ghost" size="sm" className="h-7 w-7 p-0 text-destructive hover:text-destructive hover:bg-destructive/10" onClick={() => handleAction("cancel", op.id)} disabled={op.estado === "Liquidada" || op.estado === "Endosada"}>
                                        <Ban className="h-4 w-4" />
                                    </Button>
                                </div>
                            </TableCell>
                        </TableRow>
                    );

                    // ─── L2 & L3: PAGADORES & FACTURAS ───
                    if (isOpExpanded) {
                        const groups = groupFacturasByPagador(op);
                        groups.forEach((group) => {
                            const isPagExpanded = expandedPagadores.has(group.groupId);
                            const pagCheckState = selectedIds.has(group.groupId) ? true : (group.facturas.some(f => selectedIds.has(f.id)) ? "indeterminate" : false);
                            const pagMatch = searchQuery.trim() && (group.pagador.nombre.toLowerCase().includes(searchQuery.toLowerCase().trim()) || group.pagador.nit.toLowerCase().includes(searchQuery.toLowerCase().trim()));

                            rows.push(
                                <TableRow
                                    key={group.groupId}
                                    className={cn(
                                        "bg-muted/40 hover:bg-muted/70 transition-colors border-l-3 border-l-primary/30 cursor-pointer group/pag",
                                        pagCheckState === true && "bg-primary/5 hover:bg-primary/10 border-l-primary/60",
                                        pagMatch && "bg-yellow-50 dark:bg-yellow-500/10"
                                    )}
                                    onClick={() => togglePagadorSelection(group, op)}
                                >
                                    <TableCell onClick={(e) => e.stopPropagation()}>
                                        <div className="flex items-center gap-1 pl-4">
                                            <Checkbox
                                                checked={pagCheckState}
                                                onCheckedChange={() => togglePagadorSelection(group, op)}
                                                aria-label={`Seleccionar pagador ${group.pagador.nombre}`}
                                            />
                                            <Button
                                                variant="ghost"
                                                size="sm"
                                                className="h-6 w-6 p-0 hover:bg-primary/20"
                                                onClick={(e) => {
                                                    e.stopPropagation();
                                                    toggleExpandPagador(group.groupId);
                                                }}
                                            >
                                                {isPagExpanded ? <ChevronDown className="h-3.5 w-3.5" /> : <ChevronRight className="h-3.5 w-3.5" />}
                                            </Button>
                                        </div>
                                    </TableCell>
                                    <TableCell>
                                        <span className="text-[10px] text-muted-foreground font-bold uppercase tracking-wider">
                                            Facturas
                                        </span>
                                    </TableCell>
                                    <TableCell>
                                        <div className="flex items-center gap-2">
                                            <div className="h-6 w-6 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                                                <User className="h-3 w-3 text-primary" />
                                            </div>
                                            <div className="flex flex-col">
                                                <span className={cn("truncate max-w-[140px] text-sm font-medium leading-none", pagMatch && "bg-yellow-200/60 dark:bg-yellow-400/20 px-0.5 rounded")}>
                                                    {group.pagador.nombre}
                                                </span>
                                                <span className="text-[10px] text-muted-foreground">{group.pagador.nit}</span>
                                            </div>
                                        </div>
                                    </TableCell>
                                    <TableCell />
                                    <TableCell />
                                    <TableCell className="text-center">
                                        <Badge variant="info-soft-outline" className="text-[10px] px-1.5 py-0 h-4 min-w-[20px] justify-center">
                                            {group.facturas.length}
                                        </Badge>
                                    </TableCell>
                                    <TableCell className="text-xs font-semibold font-satoshi">{formatCurrency(group.valorTotal)}</TableCell>
                                    <TableCell className="text-xs font-semibold text-primary/80 font-satoshi">{formatCurrency(group.valorDesembolsoTotal)}</TableCell>
                                    <TableCell />
                                    <TableCell />
                                </TableRow>
                            );

                            if (isPagExpanded) {
                                group.facturas.forEach((factura) => {
                                    const isFacturaSelected = selectedIds.has(factura.id);
                                    const facturaMatch = searchQuery.trim() && (factura.numero.toLowerCase().includes(searchQuery.toLowerCase().trim()));
                                    const factEstadoCfg = estadoFacturaConfig[factura.estado];

                                    rows.push(
                                        <TableRow
                                            key={factura.id}
                                            className={cn(
                                                "bg-muted/60 hover:bg-muted/80 transition-colors border-l-4 border-l-primary/15 cursor-pointer",
                                                isFacturaSelected && "bg-primary/10 hover:bg-primary/15 border-l-primary/50",
                                                facturaMatch && "bg-yellow-50 dark:bg-yellow-500/10"
                                            )}
                                            onClick={() => toggleFacturaSelection(factura, op)}
                                        >
                                            <TableCell onClick={(e) => e.stopPropagation()}>
                                                <div className="flex items-center gap-1 pl-10">
                                                    <Checkbox
                                                        checked={isFacturaSelected}
                                                        onCheckedChange={() => toggleFacturaSelection(factura, op)}
                                                        aria-label={`Seleccionar ${factura.numero}`}
                                                    />
                                                </div>
                                            </TableCell>
                                            <TableCell>
                                                <span className="text-[10px] text-muted-foreground">
                                                    {factura.numero}
                                                </span>
                                            </TableCell>
                                            <TableCell />
                                            <TableCell />
                                            <TableCell className="text-muted-foreground text-sm font-satoshi">{factura.fechaVencimiento}</TableCell>
                                            <TableCell />
                                            <TableCell className="text-sm font-satoshi">{formatCurrency(factura.valor)}</TableCell>
                                            <TableCell className="text-sm font-satoshi">{formatCurrency(factura.valorDesembolso)}</TableCell>
                                            <TableCell className="text-center">
                                                <Badge variant={factEstadoCfg.variant} className="text-[11px] px-2 py-0.5">
                                                    {factEstadoCfg.label}
                                                </Badge>
                                            </TableCell>
                                            <TableCell />
                                        </TableRow>
                                    );
                                });
                            }
                        });
                    }
                    return rows;
                })
            ) : (
                <TableRow>
                    <TableCell colSpan={10} className="h-64 text-center">
                        <div className="flex flex-col items-center justify-center gap-3 text-muted-foreground">
                            <Search className="h-12 w-12 opacity-20" />
                            <p className="text-lg font-medium">No se encontraron operaciones</p>
                            <Button variant="link" onClick={() => {setSearchQuery(""); setEstadoFilter("all"); setActiveKpiFilter("all")}}>
                                Limpiar todos los filtros
                            </Button>
                        </div>
                    </TableCell>
                </TableRow>
            )}
            </TableBody>
          </Table>
        </div>
      </Card>

      {/* ═══ DETAIL MODAL / OVERLAY (Simplified) ═══ */}
      {selectedOpDetail && (
        <div className="fixed inset-0 z-[100] bg-background/80 backdrop-blur-sm flex items-center justify-end animate-in fade-in duration-300">
            <div className="w-full max-w-2xl h-full bg-card shadow-2xl border-l border-border p-8 overflow-y-auto animate-in slide-in-from-right duration-500">
                <div className="flex items-center justify-between mb-8">
                    <div className="flex items-center gap-4">
                        <Button variant="ghost" size="icon" onClick={() => setSelectedOpDetail(null)}>
                            <ChevronLeft className="h-6 w-6" />
                        </Button>
                        <div>
                            <h2 className="text-2xl font-bold font-satoshi">Detalle de Operación</h2>
                            <p className="text-muted-foreground font-satoshi">{selectedOpDetail}</p>
                        </div>
                    </div>
                    <Badge className="px-3 py-1 font-satoshi">En Revisión</Badge>
                </div>

                <div className="grid gap-6">
                    <Card>
                        <CardContent className="p-6 grid grid-cols-2 gap-4">
                            <div className="space-y-1">
                                <span className="text-xs text-muted-foreground uppercase font-satoshi">Cliente</span>
                                <p className="font-semibold font-satoshi">Retail JKL S.A.</p>
                                <p className="text-xs text-muted-foreground font-satoshi">80.567.890-1</p>
                            </div>
                            <div className="space-y-1">
                                <span className="text-xs text-muted-foreground uppercase">Ejecutivo</span>
                                <p className="font-semibold">Ana Martínez</p>
                            </div>
                            <div className="space-y-1">
                                <span className="text-xs text-muted-foreground uppercase">Tasa Mensual</span>
                                <p className="font-semibold text-primary">2.5%</p>
                            </div>
                            <div className="space-y-1">
                                <span className="text-xs text-muted-foreground uppercase">Plazo Promedio</span>
                                <p className="font-semibold">30 días</p>
                            </div>
                        </CardContent>
                    </Card>

                    <div className="space-y-4">
                        <h3 className="font-bold text-lg">Distribución por Pagador</h3>
                        <div className="grid gap-3">
                            {[1, 2].map((i) => (
                                <div key={i} className="flex items-center justify-between p-3 rounded-lg border bg-muted/30">
                                    <div className="flex items-center gap-3">
                                        <div className="h-8 w-8 rounded bg-primary/10 flex items-center justify-center">
                                            <User className="h-4 w-4 text-primary" />
                                        </div>
                                        <div>
                                            <p className="text-sm font-medium">Pagador Ejemplo {i}</p>
                                            <p className="text-[10px] text-muted-foreground">90.100.200-{i}</p>
                                        </div>
                                    </div>
                                    <div className="text-right">
                                        <p className="text-sm font-bold">$ 15.000.000</p>
                                        <p className="text-[10px] text-muted-foreground">2 facturas</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="pt-8 mt-auto flex gap-4">
                        <Button className="flex-1 bg-primary font-bold" onClick={() => setSelectedOpDetail(null)}>Aprobar Operación</Button>
                        <Button variant="outline" className="flex-1 text-destructive hover:text-destructive" onClick={() => setSelectedOpDetail(null)}>Rechazar</Button>
                    </div>
                </div>
            </div>
        </div>
      )}
    </div>
  );
}
