/**
 * FactoringInvoiceTable
 * ─────────────────────
 * REFACTOR FINAL (Point-and-Click Fix):
 * Se ha eliminado la modularidad de sub-componentes internos (BadgeCell, ObservationsCell, VigenciaCell)
 * y se ha implementado un renderizado totalmente plano y directo en el TableBody.
 * Esto asegura que el inspector de Figma Make identifique cada TableRow y TableCell individualmente.
 *
 * Capa: Patterns > Factoring
 */
import React, { useState, useMemo } from "react";
import { Card, CardContent, CardHeader } from "../../ui/card";
import { Button } from "../../ui/button";
import { Input } from "../../ui/input";
import { Checkbox } from "../../ui/checkbox";
import { Badge } from "../../ui/badge";
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
  invoices: FactoringInvoice[];
  activeTab: InvoiceCategory;
  selectedInvoices: string[];
  onToggleInvoice: (id: string) => void;
  onSelectAll?: (invoiceIds: string[]) => void;
  onSelectAllEligible?: (invoiceIds: string[]) => void;
  onDeselectAll?: (invoiceIds: string[]) => void;
  onDiscard?: (invoiceIds: string[]) => void;
  filterByCategory?: boolean;
  itemsPerPage?: number;
  showToolbar?: boolean;
  searchValue?: string;
  onSearchChange?: (value: string) => void;
  className?: string;
  emptyMessage?: string;
}

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

const VARIANT_MAP: Record<string, "info-soft-outline" | "success-soft-outline" | "warning-soft-outline" | "destructive-soft-outline" | "secondary"> = {
  info: "info-soft-outline",
  success: "success-soft-outline",
  warning: "warning-soft-outline",
  danger: "destructive-soft-outline",
  muted: "secondary",
};

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
  const [internalSearch, setInternalSearch] = useState("");
  const [currentPage, setCurrentPage] = useState(1);

  const searchQuery = externalSearch ?? internalSearch;
  const handleSearchChange = externalOnSearch ?? setInternalSearch;

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

  const totalPages = Math.max(1, Math.ceil(filteredInvoices.length / itemsPerPage));
  const safePage = Math.min(currentPage, totalPages);
  const paginatedInvoices = filteredInvoices.slice(
    (safePage - 1) * itemsPerPage,
    safePage * itemsPerPage
  );

  const columns = COLUMN_CONFIGS[activeTab];
  const allVisibleIds = filteredInvoices.map((inv) => inv.id);
  const eligibleIds = filteredInvoices.filter((inv) => inv.category === "elegibles").map((inv) => inv.id);

  return (
    <Card className={cn("elevation-2 border-none shadow-md overflow-hidden bg-background", className)}>
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
                <TableCell colSpan={columns.length + 3} className="text-center text-muted-foreground h-24">
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
                  
                  {/* Inline Flat-Mapping of cells for Point-and-Click compatibility */}
                  {columns.map((col) => {
                    const key = col.key;
                    if (key === "advanceValue") return <TableCell key={key} className="text-sm text-foreground">{invoice.advanceValue}</TableCell>;
                    if (key === "lastEvent") return (
                        <TableCell key={key}>
                          <Badge variant={VARIANT_MAP["info"]}>{invoice.lastEvent}</Badge>
                        </TableCell>
                    );
                    if (key === "state") return (
                        <TableCell key={key}>
                          <Badge variant={VARIANT_MAP["success"]}>{invoice.state}</Badge>
                        </TableCell>
                    );
                    if (key === "status") return (
                        <TableCell key={key}>
                          <Badge variant={VARIANT_MAP["danger"]}>No Elegible</Badge>
                        </TableCell>
                    );
                    if (key === "observations") return (
                        <TableCell key={key} className="text-sm text-foreground">
                            <span>{invoice.observations} </span>
                            <a href="#" onClick={(e: React.MouseEvent) => e.preventDefault()} className="text-info underline hover:text-info/80">
                                mas
                            </a>
                        </TableCell>
                    );
                    if (key === "vigencia") return (
                        <TableCell key={key}>
                            <ProgressWithRange value={invoice.progress} from={invoice.validFrom} to={invoice.validTo} />
                        </TableCell>
                    );
                    if (key === "daysToExpire") return (
                        <TableCell key={key} className="text-center text-sm text-foreground">
                            {invoice.daysToExpire}
                        </TableCell>
                    );
                    if (key === "reviewStatus") return (
                        <TableCell key={key}>
                            <Badge variant={VARIANT_MAP["warning"]}>{invoice.reviewStatus}</Badge>
                        </TableCell>
                    );
                    if (key === "reviewer") return <TableCell key={key} className="text-sm">{invoice.reviewer}</TableCell>;
                    if (key === "rejectionReason") return (
                        <TableCell key={key}>
                            <Badge variant={VARIANT_MAP["danger"]}>{invoice.rejectionReason}</Badge>
                        </TableCell>
                    );
                    if (key === "discardReason") return (
                        <TableCell key={key}>
                            <Badge variant="outline" className="border-gray-300 bg-gray-100 text-gray-700 dark:border-gray-500/40 dark:bg-gray-500/15 dark:text-gray-400">
                                {invoice.discardReason}
                            </Badge>
                        </TableCell>
                    );
                    if (key === "discardDate") return <TableCell key={key} className="text-sm">{invoice.discardDate}</TableCell>;
                    
                    return <TableCell key={key} />;
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
