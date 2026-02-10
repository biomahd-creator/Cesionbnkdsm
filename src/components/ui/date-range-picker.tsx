"use client";

import * as React from "react";
import { format } from "date-fns";
import { es } from "date-fns/locale";
import { Calendar as CalendarIcon } from "lucide-react";
import { DateRange } from "react-day-picker@8.10.1";

import { cn } from "./utils";
import { Button } from "./button";
import { Calendar } from "./calendar";
import { Popover, PopoverContent, PopoverTrigger } from "./popover";

interface DateRangePickerProps {
  dateRange?: DateRange;
  onDateRangeChange?: (range: DateRange | undefined) => void;
  placeholder?: string;
  className?: string;
  disabled?: boolean;
}

const DateRangePicker = React.forwardRef<HTMLButtonElement, DateRangePickerProps>(
  (
    {
      dateRange,
      onDateRangeChange,
      placeholder = "Selecciona un rango de fechas",
      className,
      disabled,
    },
    ref
  ) => {
    return (
      <div className={cn("grid gap-2", className)}>
        <Popover>
          <PopoverTrigger asChild>
            <Button
              ref={ref}
              id="date"
              variant="outline"
              disabled={disabled}
              className={cn(
                "hover:bg-muted/50 w-full justify-start text-left",
                !dateRange && "text-muted-foreground"
              )}
            >
              <CalendarIcon className="mr-2 size-4" />
              {dateRange?.from ? (
                dateRange.to ? (
                  <>
                    {format(dateRange.from, "dd MMM yyyy", { locale: es })} -{" "}
                    {format(dateRange.to, "dd MMM yyyy", { locale: es })}
                  </>
                ) : (
                  format(dateRange.from, "dd MMM yyyy", { locale: es })
                )
              ) : (
                <span>{placeholder}</span>
              )}
            </Button>
          </PopoverTrigger>
          <PopoverContent className="w-auto p-0" align="start">
            <Calendar
              initialFocus
              mode="range"
              defaultMonth={dateRange?.from}
              selected={dateRange}
              onSelect={onDateRangeChange}
              numberOfMonths={2}
              locale={es}
            />
          </PopoverContent>
        </Popover>
      </div>
    );
  }
);

DateRangePicker.displayName = "DateRangePicker";

export { DateRangePicker };
