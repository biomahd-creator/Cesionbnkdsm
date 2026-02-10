/**
 * FactoringInvoiceTable
 * ─────────────────────
 * Tabla reutilizable de facturas para el módulo Factoring con:
 *  - Columnas dinámicas según tab activo (elegibles / pendientes / no-elegibles / descartadas)
 *  - Selección con checkbox
 *  - Celdas de doble línea (Progress + rango de fechas en "Vigencia")
 *  - Badges de estado con colores semánticos
 *  - Observaciones con enlace "más"
 *  - Barra de búsqueda y acciones en header
 *  - Paginación integrada
 *  - Empty state
 *
 * Capa: Patterns > Factoring
 * Dependencias: Table (ui), Badge (ui), Checkbox (ui), Progress (ui), Button (ui), Input (ui), Card (ui)
 */
import React, { useState, useMemo } from "react";
import { Card, CardContent, CardHeader } from "../../ui/card";
import { Button } from "../../ui/button";
import { Input } from "../../ui/input";
import { Checkbox } from "../../ui/checkbox";
import { Badge } from "../../ui/badge";
import { Progress } from "../../ui/progress";
import { ProgressWithRange } from "../../ui/progress-with-range";
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
  ChevronLeft,
  ChevronRight,
  ArrowRight,
  Filter,
  Wand2,
  ListChecks,
  XSquare,
  Trash2,
  FileX,
} from "lucide-react";
import { cn } from "../../ui/utils";

// ── Types ────────────────────────────────────────────────────────────
export type InvoiceCategory = "elegibles" | "pendientes" | "no-elegibles" | "descartadas";

export interface FactoringInvoice {
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
  category: InvoiceCategory;
}

export interface FactoringInvoiceTableProps {
  /** Invoices to display (already pre-filtered by category externally, or the component filters internally) */
  invoices: FactoringInvoice[];
  /** Which tab/category determines the visible columns */
  activeTab: InvoiceCategory;
  /** IDs of currently selected invoices */
  selectedInvoices: string[];
  /** Toggle single invoice selection */
  onToggleInvoice: (id: string) => void;
  /** Select all visible invoices */
  onSelectAll?: (invoiceIds: string[]) => void;
  /** Select only eligible invoices */
  onSelectAllEligible?: (invoiceIds: string[]) => void;
  /** Deselect all visible invoices */
  onDeselectAll?: (invoiceIds: string[]) => void;
  /** Discard action */
  onDiscard?: (invoiceIds: string[]) => void;
  /** Whether to filter invoices by activeTab internally (default: true) */
  filterByCategory?: boolean;
  /** Items per page (default: 10) */
  itemsPerPage?: number;
  /** Show the toolbar with search and actions (default: true) */
  showToolbar?: boolean;
  /** External search value (controlled) */
  searchValue?: string;
  /** External search change handler (controlled) */
  onSearchChange?: (value: string) => void;
  /** Additional className */
  className?: string;
  /** Empty state message */
  emptyMessage?: string;
}

// ── Column config per tab ────────────────────────────────────────────
const COLUMN_CONFIGS: Record<InvoiceCategory, { key: string; label: string }[]> = {
  elegibles: [
    { key: "advanceValue", label: "Valor Adelanto" },
    { key: "lastEvent", label: "Ultimo Evento" },
    { key: "state", label: "Estado" },
    { key: "observations", label: "Observaciones" },
    { key: "vigencia", label: "Vigencia" },
    { key: "daysToExpire", label: "Dias al Vencimiento" },
  ],
  pendientes: [
    { key: "reviewStatus", label: "Estado de Revision" },
    { key: "reviewer", label: "Revisor Asignado" },
    { key: "lastEvent", label: "Ultimo Evento" },
    { key: "observations", label: "Observaciones" },
    { key: "daysToExpire", label: "Dias al Vencimiento" },
  ],
  "no-elegibles": [
    { key: "rejectionReason", label: "Motivo de Rechazo" },
    { key: "status", label: "Estado" },
    { key: "observations", label: "Observaciones" },
    { key: "daysToExpire", label: "Dias al Vencimiento" },
  ],
  descartadas: [
    { key: "discardReason", label: "Motivo de Descarte" },
    { key: "discardDate", label: "Fecha de Descarte" },
    { key: "reviewer", label: "Descartado Por" },
    { key: "observations", label: "Observaciones" },
  ],
};

// ── Helpers: cell renderers ──────────────────────────────────────────
function BadgeCell({ children, variant }: { children: React.ReactNode; variant: "info" | "success" | "warning" | "danger" | "muted" }) {
  const variantMap: Record<string, "info-soft-outline" | "success-soft-outline" | "warning-soft-outline" | "destructive-soft-outline" | "secondary"> = {
    info: "info-soft-outline",
    success: "success-soft-outline",
    warning: "warning-soft-outline",
    danger: "destructive-soft-outline",
    muted: "secondary",
  };
  return (
    <Badge variant={variantMap[variant]}>
      {children}
    </Badge>
  );
}

function ObservationsCell({ text }: { text: string }) {
  return (
    <TableCell className="text-sm text-foreground">
      <span>{text} </span>
      <a href="#" onClick={(e: React.MouseEvent) => e.preventDefault()} className="text-info underline hover:text-info/80">
        mas
      </a>
    </TableCell>
  );
}

function VigenciaCell({ validFrom, validTo, progress }: { validFrom: string; validTo: string; progress: number }) {
  return (
    <TableCell>
      <ProgressWithRange value={progress} from={validFrom} to={validTo} />
    </TableCell>
  );
}

// ── Main Component ───────────────────────────────────────────────────
export function FactoringInvoiceTable({
  invoices,
  activeTab,
  selectedInvoices,
  onToggleInvoice,
  onSelectAll,
  onSelectAllEligible,
  onDeselectAll,
  onDiscard,
  filterByCategory = true,
  itemsPerPage = 10,
  showToolbar = true,
  searchValue: externalSearch,
  onSearchChange: externalOnSearch,
  className,
  emptyMessage = "No hay facturas en esta categoria",
}: FactoringInvoiceTableProps) {
  // Internal state for uncontrolled search
  const [internalSearch, setInternalSearch] = useState("");
  const [currentPage, setCurrentPage] = useState(1);

  const searchQuery = externalSearch ?? internalSearch;
  const handleSearchChange = externalOnSearch ?? setInternalSearch;

  // Reset page when tab or search changes
  const filteredInvoices = useMemo(() => {
    let result = invoices;
    if (filterByCategory) {
      result = result.filter((inv) => inv.category === activeTab);
    }
    if (searchQuery) {
      const q = searchQuery.toLowerCase();
      result = result.filter(
        (inv) =>
          inv.number.toLowerCase().includes(q) ||
          inv.invoiceValue.toLowerCase().includes(q) ||
          inv.observations.toLowerCase().includes(q)
      );
    }
    return result;
  }, [invoices, activeTab, searchQuery, filterByCategory]);

  // Reset page when filtered data changes
  const totalPages = Math.max(1, Math.ceil(filteredInvoices.length / itemsPerPage));
  const safePage = Math.min(currentPage, totalPages);
  const paginatedInvoices = filteredInvoices.slice(
    (safePage - 1) * itemsPerPage,
    safePage * itemsPerPage
  );

  const columns = COLUMN_CONFIGS[activeTab];
  const baseColCount = 3; // checkbox + number + value
  const totalColCount = baseColCount + columns.length;

  const allVisibleIds = filteredInvoices.map((inv) => inv.id);
  const eligibleIds = filteredInvoices.filter((inv) => inv.category === "elegibles").map((inv) => inv.id);

  // ── Render cell by key ──
  function renderCell(invoice: FactoringInvoice, key: string) {
    switch (key) {
      case "advanceValue":
        return <TableCell className="text-sm text-foreground">{invoice.advanceValue}</TableCell>;
      case "lastEvent":
        return (
          <TableCell>
            <BadgeCell variant={activeTab === "elegibles" ? "info" : "info"}>
              {invoice.lastEvent}
            </BadgeCell>
          </TableCell>
        );
      case "state":
        return (
          <TableCell>
            <BadgeCell variant="success">{invoice.state}</BadgeCell>
          </TableCell>
        );
      case "status":
        return (
          <TableCell>
            <BadgeCell variant="danger">No Elegible</BadgeCell>
          </TableCell>
        );
      case "observations":
        return <ObservationsCell text={invoice.observations} />;
      case "vigencia":
        return (
          <VigenciaCell
            validFrom={invoice.validFrom}
            validTo={invoice.validTo}
            progress={invoice.progress}
          />
        );
      case "daysToExpire":
        return (
          <TableCell className="text-center text-sm text-foreground">
            {invoice.daysToExpire}
          </TableCell>
        );
      case "reviewStatus":
        return (
          <TableCell>
            <BadgeCell variant="warning">{invoice.reviewStatus}</BadgeCell>
          </TableCell>
        );
      case "reviewer":
        return <TableCell className="text-sm">{invoice.reviewer}</TableCell>;
      case "rejectionReason":
        return (
          <TableCell>
            <BadgeCell variant="danger">{invoice.rejectionReason}</BadgeCell>
          </TableCell>
        );
      case "discardReason":
        return (
          <TableCell>
            <Badge variant="outline" className="border-gray-300 bg-gray-100 text-gray-700 dark:border-gray-500/40 dark:bg-gray-500/15 dark:text-gray-400">
              {invoice.discardReason}
            </Badge>
          </TableCell>
        );
      case "discardDate":
        return <TableCell className="text-sm">{invoice.discardDate}</TableCell>;
      default:
        return <TableCell />;
    }
  }

  return (
    <Card className={cn("elevation-2 border-none shadow-md overflow-hidden bg-background", className)}>
      {/* Toolbar */}
      {showToolbar && (
        <CardHeader className="pb-3 px-4 pt-4">
          <div className="flex flex-col gap-3 md:flex-row md:items-center justify-between">
            <div className="relative w-full md:w-72 lg:w-80">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Busca por valor, fecha..."
                className="pl-9 h-9 bg-background/50"
                value={searchQuery}
                onChange={(e) => {
                  handleSearchChange(e.target.value);
                  setCurrentPage(1);
                }}
              />
            </div>

            <div className="flex items-center gap-2 overflow-x-auto pb-2 md:pb-0 hide-scrollbar">
              <Button
                variant="outline"
                size="sm"
                className="h-9 border-dashed px-3 text-muted-foreground bg-background/50 hover:text-foreground"
              >
                <Filter className="mr-2 h-3.5 w-3.5" />
                Estado
              </Button>
              {onSelectAll && (
                <Button variant="outline" size="sm" className="h-9" onClick={() => onSelectAll(allVisibleIds)}>
                  <Wand2 className="mr-2 h-3.5 w-3.5" />
                  Seleccion Automatica
                </Button>
              )}
              {onSelectAllEligible && (
                <Button variant="outline" size="sm" className="h-9" onClick={() => onSelectAllEligible(eligibleIds)}>
                  <ListChecks className="mr-2 h-3.5 w-3.5" />
                  Seleccionar Elegibles
                </Button>
              )}
              {onDeselectAll && (
                <Button variant="outline" size="sm" className="h-9" onClick={() => onDeselectAll(allVisibleIds)}>
                  <XSquare className="mr-2 h-3.5 w-3.5" />
                  Deseleccionar
                </Button>
              )}
              {onDiscard && (
                <Button variant="outline" size="sm" className="h-9" onClick={() => onDiscard(selectedInvoices)}>
                  <Trash2 className="mr-2 h-3.5 w-3.5" />
                  Descartar
                </Button>
              )}
            </div>
          </div>
        </CardHeader>
      )}

      {/* Table */}
      <CardContent className="p-0">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="w-12" />
              <TableHead className="text-xs">Numeracion</TableHead>
              <TableHead className="text-xs">Valor Factura</TableHead>
              {columns.map((col) => (
                <TableHead key={col.key} className="text-xs">
                  {col.label}
                </TableHead>
              ))}
            </TableRow>
          </TableHeader>
          <TableBody>
            {filteredInvoices.length === 0 ? (
              <TableRow>
                <TableCell colSpan={totalColCount} className="text-center text-muted-foreground h-24">
                  <div className="flex flex-col items-center gap-2">
                    <FileX className="h-8 w-8 text-muted-foreground/50" />
                    {emptyMessage}
                  </div>
                </TableCell>
              </TableRow>
            ) : (
              paginatedInvoices.map((invoice) => (
                <TableRow key={invoice.id}>
                  <TableCell>
                    <Checkbox
                      checked={selectedInvoices.includes(invoice.id)}
                      onCheckedChange={() => onToggleInvoice(invoice.id)}
                    />
                  </TableCell>
                  <TableCell className="text-sm font-medium text-foreground">{invoice.number}</TableCell>
                  <TableCell className="text-sm text-foreground">{invoice.invoiceValue}</TableCell>
                  {columns.map((col) => {
                    const cell = renderCell(invoice, col.key);
                    return React.cloneElement(cell as React.ReactElement, { key: col.key });
                  })}
                </TableRow>
              ))
            )}
          </TableBody>
        </Table>

        {/* Pagination */}
        {filteredInvoices.length > 0 && (
          <div className="flex items-center justify-between p-4 border-t">
            <div className="text-sm text-muted-foreground">
              Mostrando {(safePage - 1) * itemsPerPage + 1} a{" "}
              {Math.min(safePage * itemsPerPage, filteredInvoices.length)} de {filteredInvoices.length} registros
            </div>
            <div className="flex items-center gap-2">
              <Button
                variant="outline"
                size="sm"
                onClick={() => setCurrentPage(Math.max(1, safePage - 1))}
                disabled={safePage === 1}
              >
                <ChevronLeft className="h-4 w-4 mr-1" />
                Anterior
              </Button>
              <div className="text-sm font-medium">
                Pagina {safePage} de {totalPages}
              </div>
              <Button
                variant="outline"
                size="sm"
                onClick={() => setCurrentPage(Math.min(totalPages, safePage + 1))}
                disabled={safePage === totalPages}
              >
                Siguiente
                <ChevronRight className="h-4 w-4 ml-1" />
              </Button>
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  );
}