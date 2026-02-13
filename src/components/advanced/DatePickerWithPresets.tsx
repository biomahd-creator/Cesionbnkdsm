import { useState } from "react";
import { addDays, format } from "date-fns";
import { Calendar as CalendarIcon } from "lucide-react";
import { cn } from "../ui/utils";
import { Button } from "../ui/button";
import { Calendar } from "../ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "../ui/popover";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";

interface DatePickerWithPresetsProps {
  value?: Date;
  onChange?: (date: Date | undefined) => void;
}

export function DatePickerWithPresets({
  value,
  onChange,
}: DatePickerWithPresetsProps) {
  const [date, setDate] = useState<Date | undefined>(value);

  const handleSelect = (newDate: Date | undefined) => {
    setDate(newDate);
    onChange?.(newDate);
  };

  const handlePreset = (preset: string) => {
    let newDate: Date | undefined;
    const today = new Date();

    switch (preset) {
      case "today":
        newDate = today;
        break;
      case "tomorrow":
        newDate = addDays(today, 1);
        break;
      case "week":
        newDate = addDays(today, 7);
        break;
      case "month":
        newDate = addDays(today, 30);
        break;
      default:
        newDate = undefined;
    }

    handleSelect(newDate);
  };

  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          className={cn(
            "w-full justify-start text-left",
            !date && "text-muted-foreground"
          )}
        >
          <CalendarIcon className="mr-2 h-4 w-4" />
          {date ? format(date, "PPP") : "Select date"}
        </Button>
      </PopoverTrigger>
      <PopoverContent className="flex w-auto flex-col space-y-2 p-2" align="start">
        <Select onValueChange={handlePreset}>
          <SelectTrigger>
            <SelectValue placeholder="Select..." />
          </SelectTrigger>
          <SelectContent position="popper">
            <SelectItem value="today">Today</SelectItem>
            <SelectItem value="tomorrow">Tomorrow</SelectItem>
            <SelectItem value="week">In a week</SelectItem>
            <SelectItem value="month">In a month</SelectItem>
          </SelectContent>
        </Select>
        <div className="rounded-md border">
          <Calendar
            mode="single"
            selected={date}
            onSelect={handleSelect}
          />
        </div>
      </PopoverContent>
    </Popover>
  );
}