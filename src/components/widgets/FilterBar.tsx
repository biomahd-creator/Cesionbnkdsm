import { SearchBar } from "./SearchBar";
import { FilterChip } from "./FilterChip";
import { Button } from "../ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import { Filter, Download } from "lucide-react";

export function FilterBar() {
  return (
    <div className="space-y-4">
      {/* Search and Filters Row */}
      <div className="flex flex-col sm:flex-row gap-4">
        <div className="flex-1">
          <SearchBar placeholder="Buscar por cliente o número de factura..." />
        </div>
        <Select defaultValue="all">
          <SelectTrigger className="w-full sm:w-[180px]">
            <SelectValue placeholder="Estado" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">Todos los estados</SelectItem>
            <SelectItem value="pending">Pendiente</SelectItem>
            <SelectItem value="approved">Aprobada</SelectItem>
            <SelectItem value="rejected">Rechazada</SelectItem>
          </SelectContent>
        </Select>
        <Button variant="outline" size="icon">
          <Filter className="h-4 w-4" />
        </Button>
        <Button variant="outline" size="icon">
          <Download className="h-4 w-4" />
        </Button>
      </div>

      {/* Active Filters Row */}
      <div className="flex items-center gap-2 flex-wrap">
        <span className="text-sm text-muted-foreground">Filtros activos:</span>
        <FilterChip label="Estado" value="Aprobada" onRemove={() => {}} />
        <FilterChip label="Fecha" value="Enero 2024" onRemove={() => {}} />
        <FilterChip label="Monto" value="$1M - $5M" onRemove={() => {}} />
        <Button variant="ghost" size="sm" className="text-xs">
          Limpiar todos
        </Button>
      </div>
    </div>
  );
}
