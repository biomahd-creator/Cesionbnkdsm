import { ComponentShowcase } from "../components/ui/component-showcase";
import { DateRangePicker } from "../components/ui/date-range-picker";
import { useState } from "react";
import { DateRange } from "react-day-picker";
import { format } from "date-fns";

const code = `import { DateRangePicker } from "@/components/ui/date-range-picker";
import { useState } from "react";
import { DateRange } from "react-day-picker";

export function DateRangePickerDemo() {
  const [dateRange, setDateRange] = useState<DateRange | undefined>();

  return (
    <DateRangePicker
      dateRange={dateRange}
      onDateRangeChange={setDateRange}
      placeholder="Selecciona las fechas"
    />
  );
}`;

export function DateRangePickerPage() {
  const [range1, setRange1] = useState<DateRange | undefined>();
  const [range2, setRange2] = useState<DateRange | undefined>({
    from: new Date(2024, 11, 1),
    to: new Date(2024, 11, 15),
  });
  const [range3, setRange3] = useState<DateRange | undefined>();

  return (
    <ComponentShowcase
      title="Date Range Picker"
      description="Selector de rango de fechas con calendario visual de 2 meses, localización en español (date-fns), formato personalizable y popover responsivo. Ideal para filtros de reportes y búsquedas temporales."
      category="Forms"
      preview={
        <div className="w-full max-w-sm space-y-2">
          <label className="text-foreground font-medium">Selecciona un rango de fechas</label>
          <DateRangePicker
            dateRange={range1}
            onDateRangeChange={setRange1}
          />
          {range1?.from && (
            <p className="text-muted-foreground text-sm">
              {range1.to
                ? `Rango: ${format(range1.from, "dd/MM/yyyy")} - ${format(range1.to, "dd/MM/yyyy")}`
                : `Inicio: ${format(range1.from, "dd/MM/yyyy")}`}
            </p>
          )}
        </div>
      }
      code={code}
      props={[
        { name: "dateRange", type: "DateRange | undefined", default: "undefined", description: "Rango de fechas seleccionado" },
        { name: "onDateRangeChange", type: "(range) => void", description: "Callback cuando cambia el rango", required: true },
        { name: "placeholder", type: "string", default: '"Selecciona un rango..."', description: "Texto cuando no hay selección" },
        { name: "disabled", type: "boolean", default: "false", description: "Deshabilita el componente" },
        { name: "className", type: "string", description: "Clases CSS adicionales" },
      ]}
      examples={[
        {
          title: "Con valor por defecto",
          description: "Date Range Picker con un rango preseleccionado.",
          preview: (
            <div className="w-full max-w-sm">
              <DateRangePicker
                dateRange={range2}
                onDateRangeChange={setRange2}
              />
            </div>
          ),
          code: `<DateRangePicker
  dateRange={{ from: new Date(2024, 11, 1), to: new Date(2024, 11, 15) }}
  onDateRangeChange={setRange}
/>`,
        },
        {
          title: "Placeholder personalizado",
          description: "Con texto de placeholder personalizado.",
          preview: (
            <div className="w-full max-w-sm">
              <DateRangePicker
                dateRange={range3}
                onDateRangeChange={setRange3}
                placeholder="Elige el período del reporte"
              />
            </div>
          ),
          code: `<DateRangePicker
  dateRange={range}
  onDateRangeChange={setRange}
  placeholder="Elige el período del reporte"
/>`,
        },
        {
          title: "Deshabilitado",
          description: "Estado deshabilitado del componente.",
          preview: (
            <div className="w-full max-w-sm">
              <DateRangePicker
                dateRange={{ from: new Date(2024, 11, 1), to: new Date(2024, 11, 31) }}
                onDateRangeChange={() => {}}
                disabled
              />
            </div>
          ),
          code: `<DateRangePicker
  dateRange={fixedRange}
  onDateRangeChange={() => {}}
  disabled
/>`,
        },
      ]}
    />
  );
}
