/**
 * OperationsList — Gestión de Operaciones (C-Financia Admin)
 *
 * Tree table con 3 niveles (misma arquitectura que TreeTableV2 del DSM):
 *   L1: Operación/Cliente — datos globales de la operación
 *   L2: Pagador          — agrupación de facturas por pagador
 *   L3: Factura           — detalle individual con badge de estado
 *
 * Columnas header (10):
 *   Checkbox | ID | Fecha Op. | Cliente (RUT) | Pagadores |
 *   Facturas | Valor Facturas | Valor Desembolso | Estado | Acciones
 *
 * Features:
 * - Selección cascada tridireccional con indeterminate
 * - Expand/collapse independiente L1 y L2
 * - Búsqueda por ID, cliente, pagador, NIT, factura
 * - Sorting por columna clickeable en headers
 * - Filtro por estado de operación
 * - Selection bar con batch actions contextuales por estado
 * - 4 KPIs (Creadas, En Proceso, Negociadas, Endosadas) con click filter
 * - Toolbar contextual: Nueva Operación, Consultar Facturas, Exportar
 * - Badges Soft-Outline del DSM
 *
 * @layer factoring
 */
import React, { useState, useEffect, useCallback, useMemo } from "react";
import { Badge } from "../../components/ui/badge";
import { Button } from "../../components/ui/button";
import { Checkbox } from "../../components/ui/checkbox";
import { Input } from "../../components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../../components/ui/select";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../../components/ui/table";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "../../components/ui/tooltip";
import { Card, CardContent, CardHeader } from "../../components/ui/card";
import { FactoringKpiCardGroup } from "../../components/patterns/FactoringKpiCardGroup";
import { ReportsConsultation } from "../../components/patterns/ReportsConsultation";
import { cn } from "../../lib/utils";
import {
  Eye,
  CheckCircle,
  XCircle,
  Clock,
  FileText,
  Download,
  Send,
  FileSearch,
  Plus,
  Search,
  Filter,
  ArrowUpDown,
  ArrowUp,
  ArrowDown,
  X,
  Ban,
  FileSpreadsheet,
  Trash2,
  ChevronLeft,
  ChevronRight,
  ChevronDown,
  FileCheck2,
  Receipt,
  RefreshCw,
  ChevronsUpDown,
  User,
} from "lucide-react";

/* ═══════════════════════════════════════════
   TYPES
   ═══════════════════════════════════════════ */

type OperationStatus = "Creada" | "En Proceso" | "Negociada" | "Endosada" | "Liquidada" | "Rechazada";

interface Pagador {
  nombre: string;
  nit: string;
}

interface FacturaDetalle {
  id: string;
  numero: string;
  pagador: Pagador;
  valor: number;
  valorDesembolso: number;
  fechaVencimiento: string;
  estado: "vigente" | "vencida" | "pagada";
}

interface Operation {
  id: string;
  cliente: { nombre: string; nit: string };
  monto: number;
  plazo: number;
  tasa: number;
  comision: number;
  estado: OperationStatus;
  subEstado?: string;
  fechaCreacion: string;
  facturas: FacturaDetalle[];
  valorFacturas: number;
  valorDesembolso: number;
  ejecutivo: string;
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
  OperationStatus,
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
  FacturaDetalle["estado"],
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
   MOCK DATA — enriched with factura hierarchy
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
  // === CREADAS ===
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
    id: "OP-2025-149", cliente: { nombre: "Alimentos STU Ltda.", nit: "83.890.123-4" },
    monto: 38000, plazo: 30, tasa: 2.5, comision: 950, estado: "Creada",
    fechaCreacion: "2025-12-11", ejecutivo: "Carlos Rojas",
    facturas: generateFacturas("OP-2025-149", 5, 41000, "2025-01-10", [3, 4]),
    valorFacturas: 41000, valorDesembolso: 37500,
  },
  {
    id: "OP-2025-139", cliente: { nombre: "Papelería Moderna S.A.", nit: "98.567.890-4" },
    monto: 25000, plazo: 45, tasa: 2.75, comision: 1031, estado: "Creada",
    fechaCreacion: "2025-12-02", ejecutivo: "María González",
    facturas: generateFacturas("OP-2025-139", 3, 27000, "2025-01-16", [5, 6]),
    valorFacturas: 27000, valorDesembolso: 24700,
  },
  {
    id: "OP-2025-135", cliente: { nombre: "Veterinaria Mascotas Ltda.", nit: "99.678.901-5" },
    monto: 19000, plazo: 30, tasa: 2.5, comision: 475, estado: "Creada",
    fechaCreacion: "2025-11-29", ejecutivo: "Ana Martínez",
    facturas: generateFacturas("OP-2025-135", 3, 21000, "2025-12-29", [0, 7]),
    valorFacturas: 21000, valorDesembolso: 18800,
  },
  {
    id: "OP-2025-134", cliente: { nombre: "Ferreterías Unidas S.A.", nit: "76.789.012-6" },
    monto: 47000, plazo: 60, tasa: 3.0, comision: 2820, estado: "Creada",
    fechaCreacion: "2025-11-28", ejecutivo: "Carlos Rojas",
    facturas: generateFacturas("OP-2025-134", 6, 51000, "2025-01-27", [1, 2, 3]),
    valorFacturas: 51000, valorDesembolso: 46500,
  },
  {
    id: "OP-2025-131", cliente: { nombre: "Mueblería El Bosque Ltda.", nit: "77.890.123-7" },
    monto: 33000, plazo: 45, tasa: 2.75, comision: 1361, estado: "Creada",
    fechaCreacion: "2025-11-26", ejecutivo: "Juan Pérez",
    facturas: generateFacturas("OP-2025-131", 4, 36000, "2025-01-10", [4, 5]),
    valorFacturas: 36000, valorDesembolso: 32700,
  },
  {
    id: "OP-2025-130", cliente: { nombre: "Óptica Visión Clara S.A.", nit: "78.901.234-8" },
    monto: 21000, plazo: 30, tasa: 2.5, comision: 525, estado: "Creada",
    fechaCreacion: "2025-11-25", ejecutivo: "María González",
    facturas: generateFacturas("OP-2025-130", 3, 23000, "2025-12-25", [6, 7]),
    valorFacturas: 23000, valorDesembolso: 20800,
  },
  // === EN PROCESO ===
  {
    id: "OP-2025-155", cliente: { nombre: "Comercial ABC Ltda.", nit: "77.234.567-8" },
    monto: 32000, plazo: 45, tasa: 2.75, comision: 1320, estado: "En Proceso",
    fechaCreacion: "2025-12-17", ejecutivo: "Juan Pérez",
    facturas: generateFacturas("OP-2025-155", 3, 35000, "2025-01-31", [0, 3]),
    valorFacturas: 35000, valorDesembolso: 31800,
  },
  {
    id: "OP-2025-147", cliente: { nombre: "Servicios Industriales S.A.", nit: "88.567.890-4" },
    monto: 41000, plazo: 60, tasa: 3.0, comision: 2460, estado: "En Proceso",
    fechaCreacion: "2025-12-10", ejecutivo: "María González",
    facturas: generateFacturas("OP-2025-147", 5, 44000, "2025-02-08", [1, 4, 6]),
    valorFacturas: 44000, valorDesembolso: 40500,
  },
  {
    id: "OP-2025-144", cliente: { nombre: "Productos Químicos Ltda.", nit: "89.678.901-5" },
    monto: 28000, plazo: 30, tasa: 2.5, comision: 700, estado: "En Proceso",
    fechaCreacion: "2025-12-07", ejecutivo: "Carlos Rojas",
    facturas: generateFacturas("OP-2025-144", 4, 31000, "2025-01-06", [2, 5]),
    valorFacturas: 31000, valorDesembolso: 27800,
  },
  {
    id: "OP-2025-141", cliente: { nombre: "Minera del Norte S.A.", nit: "90.789.012-6" },
    monto: 85000, plazo: 60, tasa: 3.0, comision: 5100, estado: "En Proceso",
    fechaCreacion: "2025-12-04", ejecutivo: "Ana Martínez",
    facturas: generateFacturas("OP-2025-141", 12, 92000, "2025-02-02", [0, 1, 3, 7]),
    valorFacturas: 92000, valorDesembolso: 84200,
  },
  {
    id: "OP-2025-137", cliente: { nombre: "Bebidas Premium Ltda.", nit: "91.890.123-7" },
    monto: 36000, plazo: 45, tasa: 2.75, comision: 1485, estado: "En Proceso",
    fechaCreacion: "2025-12-01", ejecutivo: "Juan Pérez",
    facturas: generateFacturas("OP-2025-137", 5, 39000, "2025-01-15", [4, 6]),
    valorFacturas: 39000, valorDesembolso: 35700,
  },
  {
    id: "OP-2025-133", cliente: { nombre: "Energías Renovables S.A.", nit: "92.901.234-8" },
    monto: 95000, plazo: 60, tasa: 3.0, comision: 5700, estado: "En Proceso",
    fechaCreacion: "2025-11-28", ejecutivo: "María González",
    facturas: generateFacturas("OP-2025-133", 15, 102000, "2025-01-27", [0, 2, 5, 7]),
    valorFacturas: 102000, valorDesembolso: 94100,
  },
  // === NEGOCIADAS ===
  {
    id: "OP-2025-153", cliente: { nombre: "Mayorista GHI SpA", nit: "79.456.789-0" },
    monto: 41000, plazo: 60, tasa: 3.0, comision: 2460, estado: "Negociada", subEstado: "Negociada",
    fechaCreacion: "2025-12-15", ejecutivo: "Carlos Rojas",
    facturas: generateFacturas("OP-2025-153", 6, 44000, "2025-02-13", [1, 3, 5]),
    valorFacturas: 44000, valorDesembolso: 40500,
  },
  {
    id: "OP-2025-148", cliente: { nombre: "Textiles UVW S.A.", nit: "84.901.234-5" },
    monto: 22000, plazo: 45, tasa: 2.75, comision: 907, estado: "Negociada", subEstado: "Desistida por Fondeador",
    fechaCreacion: "2025-12-10", ejecutivo: "Ana Martínez",
    facturas: generateFacturas("OP-2025-148", 3, 24000, "2025-01-24", [0, 7]),
    valorFacturas: 24000, valorDesembolso: 21500,
  },
  {
    id: "OP-2025-146", cliente: { nombre: "Manufactura Global Ltda.", nit: "93.012.345-9" },
    monto: 52000, plazo: 45, tasa: 2.75, comision: 2145, estado: "Negociada", subEstado: "Negociada",
    fechaCreacion: "2025-12-09", ejecutivo: "Juan Pérez",
    facturas: generateFacturas("OP-2025-146", 7, 56000, "2025-01-23", [2, 4, 6]),
    valorFacturas: 56000, valorDesembolso: 51500,
  },
  {
    id: "OP-2025-143", cliente: { nombre: "Supermercados del Sur S.A.", nit: "94.123.456-0" },
    monto: 68000, plazo: 30, tasa: 2.5, comision: 1700, estado: "Negociada", subEstado: "Negociada",
    fechaCreacion: "2025-12-06", ejecutivo: "María González",
    facturas: generateFacturas("OP-2025-143", 9, 73000, "2025-01-05", [1, 3, 5, 7]),
    valorFacturas: 73000, valorDesembolso: 67300,
  },
  {
    id: "OP-2025-140", cliente: { nombre: "Automotriz Racer Ltda.", nit: "95.234.567-1" },
    monto: 44000, plazo: 60, tasa: 3.0, comision: 2640, estado: "Negociada", subEstado: "Desistida por Fondeador",
    fechaCreacion: "2025-12-03", ejecutivo: "Carlos Rojas",
    facturas: generateFacturas("OP-2025-140", 6, 47000, "2025-02-01", [0, 2, 6]),
    valorFacturas: 47000, valorDesembolso: 43500,
  },
  {
    id: "OP-2025-136", cliente: { nombre: "Restaurantes Premium S.A.", nit: "96.345.678-2" },
    monto: 31000, plazo: 45, tasa: 2.75, comision: 1278, estado: "Negociada", subEstado: "Negociada",
    fechaCreacion: "2025-11-30", ejecutivo: "Ana Martínez",
    facturas: generateFacturas("OP-2025-136", 4, 34000, "2025-01-14", [4, 7]),
    valorFacturas: 34000, valorDesembolso: 30700,
  },
  {
    id: "OP-2025-132", cliente: { nombre: "Electrónica Smart Ltda.", nit: "97.456.789-3" },
    monto: 58000, plazo: 30, tasa: 2.5, comision: 1450, estado: "Negociada", subEstado: "Negociada",
    fechaCreacion: "2025-11-27", ejecutivo: "Juan Pérez",
    facturas: generateFacturas("OP-2025-132", 8, 62000, "2025-12-27", [1, 3, 5]),
    valorFacturas: 62000, valorDesembolso: 57400,
  },
  // === ENDOSADAS ===
  {
    id: "OP-2025-156", cliente: { nombre: "Distribuidora XYZ S.A.", nit: "76.123.456-7" },
    monto: 45000, plazo: 30, tasa: 2.5, comision: 1125, estado: "Endosada", subEstado: "Operacion notificada",
    fechaCreacion: "2025-12-18", ejecutivo: "María González",
    facturas: generateFacturas("OP-2025-156", 5, 48000, "2025-01-17", [0, 2, 4]),
    valorFacturas: 48000, valorDesembolso: 44500,
  },
  {
    id: "OP-2025-150", cliente: { nombre: "Construcciones PQR S.A.", nit: "82.789.012-3" },
    monto: 72000, plazo: 60, tasa: 3.0, comision: 4320, estado: "Endosada", subEstado: "Operacion notificada",
    fechaCreacion: "2025-12-12", ejecutivo: "María González",
    facturas: generateFacturas("OP-2025-150", 10, 78000, "2025-02-10", [1, 3, 5, 7]),
    valorFacturas: 78000, valorDesembolso: 71500,
  },
  {
    id: "OP-2025-145", cliente: { nombre: "Logística Express Ltda.", nit: "85.234.567-1" },
    monto: 55000, plazo: 45, tasa: 2.75, comision: 2268, estado: "Endosada", subEstado: "Operacion notificada",
    fechaCreacion: "2025-12-08", ejecutivo: "Carlos Rojas",
    facturas: generateFacturas("OP-2025-145", 7, 59000, "2025-01-22", [0, 6, 7]),
    valorFacturas: 59000, valorDesembolso: 54200,
  },
  {
    id: "OP-2025-142", cliente: { nombre: "Tecnología Digital S.A.", nit: "86.345.678-2" },
    monto: 63000, plazo: 30, tasa: 2.5, comision: 1575, estado: "Endosada", subEstado: "Operacion notificada",
    fechaCreacion: "2025-12-05", ejecutivo: "Juan Pérez",
    facturas: generateFacturas("OP-2025-142", 8, 67000, "2025-01-04", [2, 4, 5]),
    valorFacturas: 67000, valorDesembolso: 62300,
  },
  {
    id: "OP-2025-138", cliente: { nombre: "Farmacéutica Central Ltda.", nit: "87.456.789-3" },
    monto: 48000, plazo: 45, tasa: 2.75, comision: 1980, estado: "Endosada", subEstado: "Operacion notificada",
    fechaCreacion: "2025-12-02", ejecutivo: "Ana Martínez",
    facturas: generateFacturas("OP-2025-138", 6, 52000, "2025-01-16", [1, 3, 7]),
    valorFacturas: 52000, valorDesembolso: 47500,
  },
  // === LIQUIDADA ===
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

/** Group invoices by payer NIT within an operation */
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

/** Extract unique payers from an operation's invoices */
function getUniquePagadores(op: Operation): Pagador[] {
  const map = new Map<string, Pagador>();
  for (const f of op.facturas) {
    if (!map.has(f.pagador.nit)) {
      map.set(f.pagador.nit, f.pagador);
    }
  }
  return Array.from(map.values());
}

/** Get all selectable IDs for an operation (op + pagador groups + facturas) */
function getOpAllIds(op: Operation): string[] {
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

function getOpCheckState(op: Operation, selected: Set<string>): CheckState {
  return getCheckStateFromFacturas(op.facturas.map((f) => f.id), selected);
}

function getPagadorGroupCheckState(group: PagadorGroup, selected: Set<string>): CheckState {
  return getCheckStateFromFacturas(group.facturas.map((f) => f.id), selected);
}

type SortField = "id" | "fecha" | "cliente" | "valorFacturas" | "valorDesembolso" | null;
type SortDir = "asc" | "desc";

function sortOperations(ops: Operation[], field: SortField, dir: SortDir): Operation[] {
  if (!field) return ops;
  return [...ops].sort((a, b) => {
    let cmp = 0;
    switch (field) {
      case "id":
        cmp = a.id.localeCompare(b.id);
        break;
      case "fecha":
        cmp = new Date(a.fechaCreacion).getTime() - new Date(b.fechaCreacion).getTime();
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

function matchesSearch(op: Operation, query: string): boolean {
  const q = query.toLowerCase().trim();
  if (!q) return true;
  if (op.id.toLowerCase().includes(q)) return true;
  if (op.cliente.nombre.toLowerCase().includes(q)) return true;
  if (op.cliente.nit.includes(q)) return true;
  if (op.ejecutivo.toLowerCase().includes(q)) return true;
  for (const f of op.facturas) {
    if (f.pagador.nombre.toLowerCase().includes(q)) return true;
    if (f.pagador.nit.includes(q)) return true;
    if (f.numero.toLowerCase().includes(q)) return true;
  }
  return false;
}

function countByEstado(ops: Operation[]): Record<string, number> {
  const counts: Record<string, number> = {};
  for (const op of ops) {
    counts[op.estado] = (counts[op.estado] || 0) + 1;
  }
  return counts;
}

/* ═══════════════════════════════════════════
   COMPONENT
   ═══════════════════════════════════════════ */

interface OperationsListProps {
  onNewOperation?: () => void;
}

export function OperationsList({ onNewOperation }: OperationsListProps = {}) {
  // ── Expand state for level 1 (operations) and level 2 (pagador groups) ──
  const [expandedOps, setExpandedOps] = useState<Set<string>>(new Set());
  const [expandedPagadores, setExpandedPagadores] = useState<Set<string>>(new Set());
  const [selectedIds, setSelectedIds] = useState<Set<string>>(new Set());

  // Search & filter
  const [searchQuery, setSearchQuery] = useState("");
  const [estadoFilter, setEstadoFilter] = useState("all");
  const [activeKpiFilter, setActiveKpiFilter] = useState<OperationStatus | "all">("Creada");

  // Sorting
  const [sortField, setSortField] = useState<SortField>(null);
  const [sortDir, setSortDir] = useState<SortDir>("asc");

  // UI state
  const [showReports, setShowReports] = useState(false);

  // Loading state (simplified — no skeleton-variants dependency)
  const [showLoading, setShowLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setShowLoading(false), 800);
    return () => clearTimeout(timer);
  }, []);

  /* ── Data pipeline ── */
  const processedData = useMemo(() => {
    let result = mockOperations;

    // KPI filter
    if (activeKpiFilter !== "all") {
      result = result.filter((op) => op.estado === activeKpiFilter);
    }

    // Estado filter (secondary)
    if (estadoFilter !== "all") {
      result = result.filter((op) => op.estado === estadoFilter);
    }

    // Search
    if (searchQuery.trim()) {
      result = result.filter((op) => matchesSearch(op, searchQuery));
    }

    // Sort
    if (sortField) {
      result = sortOperations(result, sortField, sortDir);
    }

    return result;
  }, [activeKpiFilter, estadoFilter, searchQuery, sortField, sortDir]);

  const estadoCounts = useMemo(() => countByEstado(mockOperations), []);
  const isFiltered = searchQuery.trim() !== "" || estadoFilter !== "all";

  // All factura IDs in current view (for select all logic)
  const allFacturaIds = useMemo(() => {
    const ids: string[] = [];
    for (const op of processedData) {
      for (const f of op.facturas) {
        ids.push(f.id);
      }
    }
    return ids;
  }, [processedData]);

  /* ── Sorting toggle (TreeTableV2 pattern) ── */
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
      if (next.has(opId)) next.delete(opId);
      else next.add(opId);
      return next;
    });
  };

  const toggleExpandPagador = (groupId: string) => {
    setExpandedPagadores((prev) => {
      const next = new Set(prev);
      if (next.has(groupId)) next.delete(groupId);
      else next.add(groupId);
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

  /* ── Selection helpers (cascade tridirectional) ── */
  const updateSelection = useCallback((next: Set<string>) => {
    setSelectedIds(next);
  }, []);

  /** Reconcile parent IDs (pagador groups + op) based on factura selection */
  const reconcileParents = useCallback((next: Set<string>, op: Operation) => {
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
  }, []);

  /* Toggle Operation (L1) */
  const toggleOpSelection = useCallback(
    (op: Operation) => {
      const next = new Set(selectedIds);
      const currentState = getOpCheckState(op, selectedIds);
      const allIds = getOpAllIds(op);

      if (currentState === true) {
        allIds.forEach((id) => next.delete(id));
      } else {
        allIds.forEach((id) => next.add(id));
        // Auto-expand
        setExpandedOps((prev) => new Set(prev).add(op.id));
      }

      updateSelection(next);
    },
    [selectedIds, updateSelection]
  );

  /* Toggle Pagador Group (L2) */
  const togglePagadorSelection = useCallback(
    (group: PagadorGroup, op: Operation) => {
      const next = new Set(selectedIds);
      const currentState = getPagadorGroupCheckState(group, selectedIds);

      if (currentState === true) {
        group.facturas.forEach((f) => next.delete(f.id));
        next.delete(group.groupId);
      } else {
        group.facturas.forEach((f) => next.add(f.id));
        next.add(group.groupId);
        setExpandedPagadores((prev) => new Set(prev).add(group.groupId));
      }

      reconcileParents(next, op);
      updateSelection(next);
    },
    [selectedIds, updateSelection, reconcileParents]
  );

  /* Toggle Factura (L3) */
  const toggleFacturaSelection = useCallback(
    (factura: FacturaDetalle, op: Operation) => {
      const next = new Set(selectedIds);

      if (next.has(factura.id)) {
        next.delete(factura.id);
      } else {
        next.add(factura.id);
      }

      reconcileParents(next, op);
      updateSelection(next);
    },
    [selectedIds, updateSelection, reconcileParents]
  );

  /* Select All */
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

  /* ── Counts ── */
  const selectedFacturaCount = allFacturaIds.filter((id) => selectedIds.has(id)).length;
  const selectedOpsCount = processedData.filter((op) => getOpCheckState(op, selectedIds) === true).length;

  /* ── Batch actions ── */
  const handleBatchAction = (action: string) => {
    console.log(`Batch action: ${action}`, Array.from(selectedIds));
  };

  /* ── Reset filters ── */
  const resetFilters = useCallback(() => {
    setSearchQuery("");
    setEstadoFilter("all");
    setSortField(null);
    setSortDir("asc");
  }, []);

  /* ── KPI handlers ── */
  const calculateTotalMonto = (estado: OperationStatus) => {
    return mockOperations
      .filter((op) => op.estado === estado)
      .reduce((sum, op) => sum + op.monto, 0);
  };

  const handleKpiClick = (estado: OperationStatus) => {
    if (activeKpiFilter === estado) {
      setActiveKpiFilter("all");
    } else {
      setActiveKpiFilter(estado);
    }
    setSelectedIds(new Set());
    setExpandedOps(new Set());
    setExpandedPagadores(new Set());
  };

  const getActiveCardId = () => {
    const mapping: Record<OperationStatus, string> = {
      Creada: "creadas",
      "En Proceso": "en-proceso",
      Negociada: "negociadas",
      Endosada: "endosadas",
      Liquidada: "liquidada",
      Rechazada: "rechazada",
    };
    return activeKpiFilter === "all" ? undefined : mapping[activeKpiFilter];
  };

  const kpiCards = [
    {
      id: "creadas",
      label: "Creadas",
      description: "Facturas registradas para operación",
      value: `$ ${calculateTotalMonto("Creada").toLocaleString("es-CL")}`,
      count: mockOperations.filter((op) => op.estado === "Creada").length,
      variant: "blue" as const,
      onAction: () => handleKpiClick("Creada"),
      icon: <FileCheck2 />,
    },
    {
      id: "en-proceso",
      label: "En Proceso",
      description: "En proceso de revisión",
      value: `$ ${calculateTotalMonto("En Proceso").toLocaleString("es-CL")}`,
      count: mockOperations.filter((op) => op.estado === "En Proceso").length,
      variant: "yellow" as const,
      onAction: () => handleKpiClick("En Proceso"),
      icon: <Clock />,
    },
    {
      id: "negociadas",
      label: "Negociadas",
      description: "Facturas aprobadas",
      value: `$ ${calculateTotalMonto("Negociada").toLocaleString("es-CL")}`,
      count: mockOperations.filter((op) => op.estado === "Negociada").length,
      variant: "lime" as const,
      onAction: () => handleKpiClick("Negociada"),
      icon: <FileText />,
    },
    {
      id: "endosadas",
      label: "Endosadas a Fondeador",
      description: "Transferidas para Desembolso",
      value: `$ ${calculateTotalMonto("Endosada").toLocaleString("es-CL")}`,
      count: mockOperations.filter((op) => op.estado === "Endosada").length,
      variant: "lime" as const,
      onAction: () => handleKpiClick("Endosada"),
      icon: <Receipt />,
    },
  ];

  /* ── Helpers ── */
  const handleAction = (action: string, opId: string) => {
    console.log(`Action: ${action} on ${opId}`);
  };

  const COL_COUNT = 10;

  /* ── Loading skeleton ── */
  if (showLoading) {
    return (
      <div className="flex items-center justify-center py-20">
        <div className="flex flex-col items-center gap-3">
          <div className="h-8 w-8 animate-spin rounded-full border-4 border-primary border-t-transparent" />
          <p className="text-sm text-muted-foreground">Cargando operaciones...</p>
        </div>
      </div>
    );
  }

  /* ── Reports view ── */
  // Wrapped in <div> so OperationsList has its own DOM root (Cause 7 fix)
  if (showReports) {
    return (
      <div className="space-y-6">
        <ReportsConsultation onBack={() => setShowReports(false)} />
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {/* ═══ TITLE ═══ */}
      <div className="space-y-2">
        <h1 className="text-3xl font-semibold tracking-tight">Gestión de Operaciones</h1>
        <p className="text-muted-foreground">
          Monitorea y administra todas las operaciones de factoring en curso
        </p>
      </div>

      {/* ═══ KPI CARDS ═══ */}
      <FactoringKpiCardGroup cards={kpiCards} activeId={getActiveCardId()} />

      {/* ═══ TREE TABLE (TreeTableV2 style — 3 levels) ═══ */}
      <div>
          <div className="rounded-lg border border-slate-200 dark:border-slate-700 bg-background shadow-md overflow-hidden">
            {/* ═══ TOOLBAR — single row ═══ */}
            <div className="flex flex-wrap items-center gap-2 p-4 border-b">
              {/* Search */}
              <div className="relative w-full sm:w-64">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input
                  placeholder="Buscar ID, cliente, pagador..."
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

              {/* Estado filter (only when viewing "all" KPI) */}
              {activeKpiFilter === "all" && (
                <Select value={estadoFilter} onValueChange={setEstadoFilter}>
                  <SelectTrigger className="h-9 w-full sm:w-[180px] border-dashed bg-background/50">
                    <Filter className="h-3.5 w-3.5 mr-2 text-muted-foreground" />
                    <SelectValue placeholder="Estado" />
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
              )}

              {/* Reset + count */}
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
                  {processedData.length} de {mockOperations.length}
                </span>
              )}

              {/* Spacer pushes actions to the right */}
              <div className="flex-1" />

              {/* Expand / Collapse */}
              <Button
                variant="ghost"
                size="sm"
                className="h-8 px-2 text-xs text-muted-foreground"
                onClick={expandAll}
              >
                <ChevronsUpDown className="h-3.5 w-3.5 mr-1" />
                Expandir
              </Button>
              <Button
                variant="ghost"
                size="sm"
                className="h-8 px-2 text-xs text-muted-foreground"
                onClick={collapseAll}
              >
                Colapsar
              </Button>

              <div className="w-px h-5 bg-border mx-0.5" />

              {/* Refresh */}
              <Tooltip>
                <TooltipTrigger asChild>
                  <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                    <RefreshCw className="h-3.5 w-3.5" />
                  </Button>
                </TooltipTrigger>
                <TooltipContent>Actualizar</TooltipContent>
              </Tooltip>

              {/* Export */}
              <Button variant="outline" size="sm" className="h-8 text-xs gap-1.5">
                <Download className="h-3.5 w-3.5" />
                Exportar
              </Button>

              {/* Contextual: Consultar Facturas */}
              {(activeKpiFilter === "Creada" || activeKpiFilter === "Endosada") && (
                <Button
                  variant="outline"
                  size="sm"
                  className="h-8 text-xs gap-1.5"
                  onClick={() => setShowReports(true)}
                >
                  <FileSearch className="h-3.5 w-3.5" />
                  Consultar Facturas
                </Button>
              )}

              {/* Contextual: Nueva Operación */}
              {activeKpiFilter === "Creada" && (
                <Button
                  size="sm"
                  className="h-8 text-xs gap-1.5"
                  onClick={onNewOperation || (() => console.log("Nueva Operación"))}
                >
                  <Plus className="h-3.5 w-3.5" />
                  Nueva Operación
                </Button>
              )}
            </div>

            {/* ═══ SELECTION BAR (TreeTableV2 pattern) ═══ */}
            {selectedFacturaCount > 0 && (
              <div className="flex flex-wrap items-center justify-between gap-2 border-b bg-primary/5 px-4 py-2">
                <span className="text-sm text-muted-foreground">
                  <span className="font-medium text-foreground">{selectedOpsCount}</span>{" "}
                  operacion{selectedOpsCount !== 1 ? "es" : ""} seleccionada
                  {selectedOpsCount !== 1 ? "s" : ""}
                  <span className="text-xs ml-1">({selectedFacturaCount} facturas)</span>
                </span>
                <div className="flex items-center gap-1.5">
                  {activeKpiFilter === "En Proceso" && (
                    <Button
                      variant="outline"
                      size="sm"
                      className="h-7 text-xs gap-1"
                      onClick={() => handleBatchAction("approve")}
                    >
                      <CheckCircle className="h-3.5 w-3.5 text-green-600" />
                      Aprobar
                    </Button>
                  )}
                  {activeKpiFilter === "Negociada" && (
                    <Button
                      variant="outline"
                      size="sm"
                      className="h-7 text-xs gap-1"
                      onClick={() => handleBatchAction("endorse")}
                    >
                      <Send className="h-3.5 w-3.5 text-blue-600" />
                      Endosar
                    </Button>
                  )}
                  <Button
                    variant="outline"
                    size="sm"
                    className="h-7 text-xs gap-1"
                    onClick={() => handleBatchAction("export")}
                  >
                    <Download className="h-3.5 w-3.5" />
                    Exportar
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    className="h-7 text-xs gap-1 text-destructive hover:text-destructive"
                    onClick={() => handleBatchAction("cancel")}
                  >
                    <Trash2 className="h-3.5 w-3.5" />
                    Cancelar
                  </Button>
                  <div className="w-px h-5 bg-border mx-1" />
                  <Button
                    variant="ghost"
                    size="sm"
                    className="h-7 gap-1 text-xs"
                    onClick={clearSelection}
                  >
                    <X className="h-3 w-3" />
                    Limpiar
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
                            aria-label="Seleccionar todo"
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
                            <span className="text-[10px] text-muted-foreground font-normal">Fecha</span>
                            <span>Operación</span>
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
                          Cliente
                          {renderSortIcon("cliente")}
                        </button>
                      </TableHead>

                      {/* Pagadores */}
                      <TableHead className="w-[160px]">Pagadores</TableHead>

                      {/* Facturas */}
                      <TableHead className="w-[80px] text-center">Facturas</TableHead>

                      {/* Valor Facturas */}
                      <TableHead className="w-[120px]">
                        <button
                          className="flex items-end gap-1 hover:text-foreground transition-colors"
                          onClick={() => handleSort("valorFacturas")}
                        >
                          <span className="flex flex-col leading-tight text-left">
                            <span className="text-[10px] text-muted-foreground font-normal">Valor</span>
                            <span>Facturas</span>
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
                            <span className="text-[10px] text-muted-foreground font-normal">Valor</span>
                            <span>Desembolso</span>
                          </span>
                          {renderSortIcon("valorDesembolso")}
                        </button>
                      </TableHead>

                      {/* Estado */}
                      <TableHead className="w-[140px] text-center">Estado</TableHead>

                      {/* Acciones */}
                      <TableHead className="w-[130px] text-center">Acciones</TableHead>
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
                            activeKpiFilter={activeKpiFilter}
                            onToggleExpandOp={() => toggleExpandOp(op.id)}
                            onToggleExpandPagador={toggleExpandPagador}
                            onToggleOpSelect={() => toggleOpSelection(op)}
                            onTogglePagadorSelect={(g) => togglePagadorSelection(g, op)}
                            onToggleFacturaSelect={(f) => toggleFacturaSelection(f, op)}
                            onAction={handleAction}
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
                                  ? "No se encontraron operaciones para los filtros aplicados"
                                  : "No hay operaciones disponibles"}
                              </span>
                              {isFiltered && (
                                <Button variant="link" size="sm" onClick={resetFilters}>
                                  Limpiar filtros
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

            {/* Mobile hint (TreeTableV2 pattern) */}
            <div className="p-2 text-xs text-muted-foreground text-center lg:hidden border-t bg-muted/20">
              Desliza horizontalmente para ver todas las columnas
            </div>
          </div>
      </div>
    </div>
  );
}

/* ═══════════════════════════════════════════
   OPERACION ROW — Level 1 + renders L2 + L3
   ═══════════════════════════════════════════ */

interface OperacionRowProps {
  op: Operation;
  isExpanded: boolean;
  checkState: CheckState;
  pagadores: Pagador[];
  pagadorGroups: PagadorGroup[];
  isMatch: boolean;
  selectedIds: Set<string>;
  expandedPagadores: Set<string>;
  searchQuery: string;
  activeKpiFilter: OperationStatus | "all";
  onToggleExpandOp: () => void;
  onToggleExpandPagador: (groupId: string) => void;
  onToggleOpSelect: () => void;
  onTogglePagadorSelect: (group: PagadorGroup) => void;
  onToggleFacturaSelect: (f: FacturaDetalle) => void;
  onAction: (action: string, opId: string) => void;
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
  activeKpiFilter,
  onToggleExpandOp,
  onToggleExpandPagador,
  onToggleOpSelect,
  onTogglePagadorSelect,
  onToggleFacturaSelect,
  onAction,
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
              aria-label={`Seleccionar ${op.id}`}
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

        {/* Fecha Operación */}
        <TableCell className="tabular-nums text-muted-foreground">
          {op.fechaCreacion}
        </TableCell>

        {/* Cliente + NIT */}
        <TableCell>
          <div className="flex flex-col">
            <span className="truncate max-w-[160px]">{op.cliente.nombre}</span>
            <span className="text-xs text-muted-foreground">{op.cliente.nit}</span>
          </div>
        </TableCell>

        {/* Pagadores count / name */}
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
                    {pagadores.length} pagadores
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
        <TableCell className="tabular-nums font-medium">
          {formatCurrency(op.valorFacturas)}
        </TableCell>

        {/* Valor Desembolso */}
        <TableCell className="tabular-nums font-medium">
          {formatCurrency(op.valorDesembolso)}
        </TableCell>

        {/* Estado (Operación) */}
        <TableCell className="text-center">
          <Badge variant={estadoCfg.variant as any} className="text-[11px] px-2 py-0.5">
            {estadoCfg.label}
          </Badge>
          {op.subEstado && (
            <div className="mt-0.5">
              <span className="text-[10px] text-muted-foreground">{op.subEstado}</span>
            </div>
          )}
        </TableCell>

        {/* Acciones: icon buttons con tooltips */}
        <TableCell>
          <div className="flex items-center justify-center gap-1">
            <Tooltip>
              <TooltipTrigger asChild>
                <Button
                  variant="ghost"
                  size="sm"
                  className="h-7 w-7 p-0"
                  onClick={() => onAction("view", op.id)}
                >
                  <Eye className="h-4 w-4" />
                  <span className="sr-only">Ver operación</span>
                </Button>
              </TooltipTrigger>
              <TooltipContent>Ver operación</TooltipContent>
            </Tooltip>

            {/* Contextual action per estado */}
            {op.estado === "En Proceso" && (
              <Tooltip>
                <TooltipTrigger asChild>
                  <Button
                    variant="ghost"
                    size="sm"
                    className="h-7 w-7 p-0 text-green-600 hover:text-green-600"
                    onClick={() => onAction("approve", op.id)}
                  >
                    <CheckCircle className="h-4 w-4" />
                    <span className="sr-only">Aprobar</span>
                  </Button>
                </TooltipTrigger>
                <TooltipContent>Aprobar</TooltipContent>
              </Tooltip>
            )}

            {op.estado === "Negociada" && (
              <Tooltip>
                <TooltipTrigger asChild>
                  <Button
                    variant="ghost"
                    size="sm"
                    className="h-7 w-7 p-0 text-blue-600 hover:text-blue-600"
                    onClick={() => onAction("endorse", op.id)}
                  >
                    <Send className="h-4 w-4" />
                    <span className="sr-only">Endosar</span>
                  </Button>
                </TooltipTrigger>
                <TooltipContent>Endosar a Fondeador</TooltipContent>
              </Tooltip>
            )}

            <Tooltip>
              <TooltipTrigger asChild>
                <Button
                  variant="ghost"
                  size="sm"
                  className="h-7 w-7 p-0 text-destructive hover:text-destructive"
                  onClick={() => onAction("cancel", op.id)}
                  disabled={op.estado === "Liquidada" || op.estado === "Endosada"}
                >
                  <Ban className="h-4 w-4" />
                  <span className="sr-only">Cancelar operación</span>
                </Button>
              </TooltipTrigger>
              <TooltipContent>Cancelar operación</TooltipContent>
            </Tooltip>

            <Tooltip>
              <TooltipTrigger asChild>
                <Button
                  variant="ghost"
                  size="sm"
                  className="h-7 w-7 p-0"
                  onClick={() => onAction("download", op.id)}
                >
                  <FileSpreadsheet className="h-4 w-4" />
                  <span className="sr-only">Descargar Excel</span>
                </Button>
              </TooltipTrigger>
              <TooltipContent>Descargar Excel</TooltipContent>
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

          return (
            <PagadorRowFragment
              key={group.groupId}
              group={group}
              op={op}
              checkState={pagCheckState}
              isExpanded={isPagExpanded}
              isMatch={!!pagMatch}
              selectedIds={selectedIds}
              searchQuery={searchQuery}
              onToggleExpand={() => onToggleExpandPagador(group.groupId)}
              onToggleSelect={() => onTogglePagadorSelect(group)}
              onToggleFacturaSelect={onToggleFacturaSelect}
            />
          );
        })}
    </TableBody>
  );
}

/* ═══════════════════════════════════════════
   PAGADOR ROW — Level 2 + renders L3
   (Component wrapper to avoid Fragment key issues)
   ═══════════════════════════════════════════ */

interface PagadorRowProps {
  group: PagadorGroup;
  op: Operation;
  checkState: CheckState;
  isExpanded: boolean;
  isMatch: boolean;
  selectedIds: Set<string>;
  searchQuery: string;
  onToggleExpand: () => void;
  onToggleSelect: () => void;
  onToggleFacturaSelect: (f: FacturaDetalle) => void;
}

function PagadorRowFragment({
  group,
  op,
  checkState,
  isExpanded,
  isMatch,
  selectedIds,
  searchQuery,
  onToggleExpand,
  onToggleSelect,
  onToggleFacturaSelect,
}: PagadorRowProps) {
  return (
    <>
      {/* ── Level 2: Pagador Row ── */}
      <TableRow
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
              aria-label={`Seleccionar pagador ${group.pagador.nombre}`}
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
        <TableCell className="tabular-nums text-sm">
          {formatCurrency(group.valorTotal)}
        </TableCell>

        {/* Valor Desembolso for this pagador */}
        <TableCell className="tabular-nums text-sm">
          {formatCurrency(group.valorDesembolsoTotal)}
        </TableCell>

        {/* — (no estado at pagador level) */}
        <TableCell />

        {/* — (no acciones) */}
        <TableCell />
      </TableRow>

      {/* ═══ LEVEL 3: Factura Rows ═══ */}
      {isExpanded &&
        group.facturas.map((factura) => {
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
                    aria-label={`Seleccionar ${factura.numero}`}
                  />
                </div>
              </TableCell>

              {/* Factura # */}
              <TableCell>
                <span className="text-sm text-muted-foreground">{factura.numero}</span>
              </TableCell>

              {/* Fecha Vencimiento */}
              <TableCell className="tabular-nums text-muted-foreground text-sm">
                {factura.fechaVencimiento}
              </TableCell>

              {/* — (no cliente) */}
              <TableCell />

              {/* — (pagador already shown in L2) */}
              <TableCell />

              {/* — */}
              <TableCell />

              {/* Valor Factura */}
              <TableCell className="tabular-nums text-sm">
                {formatCurrency(factura.valor)}
              </TableCell>

              {/* Valor Desembolso Factura */}
              <TableCell className="tabular-nums text-sm">
                {formatCurrency(factura.valorDesembolso)}
              </TableCell>

              {/* Estado factura */}
              <TableCell className="text-center">
                <Badge variant={facturaCfg.variant} className="text-[11px] px-2 py-0.5">
                  {facturaCfg.label}
                </Badge>
              </TableCell>

              {/* — (no acciones at factura level) */}
              <TableCell />
            </TableRow>
          );
        })}
    </>
  );
}
