import { useState } from "react";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "../ui/sheet";
import { Button } from "../ui/button";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import { Checkbox } from "../ui/checkbox";
import { Calendar } from "../ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "../ui/popover";
import { Badge } from "../ui/badge";
import { Separator } from "../ui/separator";
import { ScrollArea } from "../ui/scroll-area";
import { Filter, Calendar as CalendarIcon, X } from "lucide-react";

const statusOptions = [
  { id: "pending", label: "Pendiente" },
  { id: "review", label: "En Revisión" },
  { id: "approved", label: "Aprobada" },
  { id: "rejected", label: "Rechazada" },
  { id: "paid", label: "Pagada" },
];

const clientTypes = [
  { id: "corporate", label: "Empresa Grande" },
  { id: "sme", label: "PYME" },
  { id: "startup", label: "Startup" },
];

export function AdvancedFilterPanel() {
  const [startDate, setStartDate] = useState<Date>();
  const [endDate, setEndDate] = useState<Date>();
  const [selectedStatuses, setSelectedStatuses] = useState<string[]>([]);
  const [activeFilters, setActiveFilters] = useState(0);

  const formatDate = (date: Date | undefined) => {
    if (!date) return "Seleccionar";
    return date.toLocaleDateString("es-ES", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  const handleStatusToggle = (statusId: string) => {
    setSelectedStatuses((prev) =>
      prev.includes(statusId)
        ? prev.filter((id) => id !== statusId)
        : [...prev, statusId]
    );
  };

  const handleClearFilters = () => {
    setStartDate(undefined);
    setEndDate(undefined);
    setSelectedStatuses([]);
    setActiveFilters(0);
  };

  const handleApplyFilters = () => {
    // Count active filters
    let count = 0;
    if (startDate) count++;
    if (endDate) count++;
    if (selectedStatuses.length > 0) count++;
    setActiveFilters(count);
  };

  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="outline" className="relative">
          <Filter className="mr-2 h-4 w-4" />
          Filtros Avanzados
          {activeFilters > 0 && (
            <Badge
              variant="default"
              className="ml-2 h-5 w-5 rounded-full p-0 flex items-center justify-center text-xs"
            >
              {activeFilters}
            </Badge>
          )}
        </Button>
      </SheetTrigger>
      <SheetContent className="w-full sm:max-w-md">
        <SheetHeader className="px-6">
          <SheetTitle>Filtros Avanzados</SheetTitle>
          <SheetDescription>
            Refina tu búsqueda con criterios específicos
          </SheetDescription>
        </SheetHeader>

        <ScrollArea className="h-[calc(100vh-12rem)] px-6 mt-6">
          <div className="space-y-6 pr-4">
            {/* Date Range */}
            <div className="space-y-4">
              <div>
                <h4 className="font-medium mb-3">Rango de Fechas</h4>
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="start-date">Desde</Label>
                    <Popover>
                      <PopoverTrigger asChild>
                        <Button
                          id="start-date"
                          variant="outline"
                          className="w-full justify-start text-left"
                        >
                          <CalendarIcon className="mr-2 h-4 w-4" />
                          {formatDate(startDate)}
                        </Button>
                      </PopoverTrigger>
                      <PopoverContent className="w-auto p-0" align="start">
                        <Calendar
                          mode="single"
                          selected={startDate}
                          onSelect={setStartDate}
                          initialFocus
                        />
                      </PopoverContent>
                    </Popover>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="end-date">Hasta</Label>
                    <Popover>
                      <PopoverTrigger asChild>
                        <Button
                          id="end-date"
                          variant="outline"
                          className="w-full justify-start text-left"
                        >
                          <CalendarIcon className="mr-2 h-4 w-4" />
                          {formatDate(endDate)}
                        </Button>
                      </PopoverTrigger>
                      <PopoverContent className="w-auto p-0" align="start">
                        <Calendar
                          mode="single"
                          selected={endDate}
                          onSelect={setEndDate}
                          initialFocus
                        />
                      </PopoverContent>
                    </Popover>
                  </div>
                </div>
              </div>
            </div>

            <Separator />

            {/* Amount Range */}
            <div className="space-y-4">
              <h4 className="font-medium">Rango de Monto</h4>
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="min-amount">Mínimo</Label>
                  <Input
                    id="min-amount"
                    placeholder="$0"
                    type="number"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="max-amount">Máximo</Label>
                  <Input
                    id="max-amount"
                    placeholder="Sin límite"
                    type="number"
                  />
                </div>
              </div>
            </div>

            <Separator />

            {/* Status Filter */}
            <div className="space-y-4">
              <h4 className="font-medium">Estado de Factura</h4>
              <div className="space-y-3">
                {statusOptions.map((status) => (
                  <div
                    key={status.id}
                    className="flex items-center space-x-2"
                  >
                    <Checkbox
                      id={status.id}
                      checked={selectedStatuses.includes(status.id)}
                      onCheckedChange={() => handleStatusToggle(status.id)}
                    />
                    <Label
                      htmlFor={status.id}
                      className="flex-1 cursor-pointer"
                    >
                      {status.label}
                    </Label>
                  </div>
                ))}
              </div>
            </div>

            <Separator />

            {/* Client Type */}
            <div className="space-y-4">
              <h4 className="font-medium">Tipo de Cliente</h4>
              <div className="space-y-3">
                {clientTypes.map((type) => (
                  <div key={type.id} className="flex items-center space-x-2">
                    <Checkbox id={type.id} />
                    <Label
                      htmlFor={type.id}
                      className="flex-1 cursor-pointer"
                    >
                      {type.label}
                    </Label>
                  </div>
                ))}
              </div>
            </div>

            <Separator />

            {/* Risk Level */}
            <div className="space-y-4">
              <h4 className="font-medium">Nivel de Riesgo</h4>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Seleccionar nivel" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="low">Bajo</SelectItem>
                  <SelectItem value="medium">Medio</SelectItem>
                  <SelectItem value="high">Alto</SelectItem>
                  <SelectItem value="all">Todos</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <Separator />

            {/* Analyst */}
            <div className="space-y-4">
              <h4 className="font-medium">Analista Asignado</h4>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Seleccionar analista" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="juan">Juan Pérez</SelectItem>
                  <SelectItem value="maria">María González</SelectItem>
                  <SelectItem value="carlos">Carlos Rodríguez</SelectItem>
                  <SelectItem value="ana">Ana Martínez</SelectItem>
                  <SelectItem value="all">Todos</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </ScrollArea>

        <SheetFooter className="mt-6 px-6">
          <div className="flex gap-3 w-full">
            <Button
              variant="outline"
              className="flex-1"
              onClick={handleClearFilters}
            >
              <X className="mr-2 h-4 w-4" />
              Limpiar
            </Button>
            <SheetClose asChild>
              <Button className="flex-1" onClick={handleApplyFilters}>
                Aplicar Filtros
              </Button>
            </SheetClose>
          </div>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
}