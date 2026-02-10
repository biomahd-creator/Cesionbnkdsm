import { useState } from "react";
import { Calendar } from "../ui/calendar";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "../ui/card";
import { Badge } from "../ui/badge";
import { Button } from "../ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../ui/select";
import { cn } from "../ui/utils";
import { CalendarDays, Clock, CheckCircle2, User } from "lucide-react";

export interface BookingData {
  date: Date | undefined;
  time: string;
  service: string;
}

const services = [
  { value: "consultoria", label: "Consultoría Financiera", duration: "60 min" },
  { value: "factoring", label: "Asesoría de Factoring", duration: "45 min" },
  { value: "credito", label: "Evaluación de Crédito", duration: "30 min" },
  { value: "inversion", label: "Planificación de Inversión", duration: "90 min" },
];

const timeSlots = [
  { time: "09:00", available: true },
  { time: "09:30", available: false },
  { time: "10:00", available: true },
  { time: "10:30", available: true },
  { time: "11:00", available: false },
  { time: "11:30", available: true },
  { time: "14:00", available: true },
  { time: "14:30", available: true },
  { time: "15:00", available: false },
  { time: "15:30", available: true },
  { time: "16:00", available: true },
  { time: "16:30", available: false },
];

export function BookingCalendar() {
  const [date, setDate] = useState<Date | undefined>(undefined);
  const [selectedTime, setSelectedTime] = useState("");
  const [selectedService, setSelectedService] = useState("");
  const [confirmed, setConfirmed] = useState(false);

  const step = !date ? 1 : !selectedTime ? 2 : 3;
  const selectedServiceData = services.find((s) => s.value === selectedService);

  const isWeekend = (d: Date) => {
    const day = d.getDay();
    return day === 0 || day === 6;
  };

  const handleConfirm = () => {
    setConfirmed(true);
    setTimeout(() => {
      setConfirmed(false);
      setDate(undefined);
      setSelectedTime("");
      setSelectedService("");
    }, 3000);
  };

  if (confirmed) {
    return (
      <Card className="border-green-200 bg-green-50 dark:border-green-800 dark:bg-green-950/30">
        <CardContent className="flex flex-col items-center justify-center py-12 gap-4">
          <CheckCircle2 className="size-16 text-green-600 dark:text-green-400" />
          <h3 className="text-green-800 dark:text-green-200">Cita Confirmada</h3>
          <p className="text-sm text-green-600 dark:text-green-400">
            {selectedServiceData?.label} - {date?.toLocaleDateString("es-CO", { weekday: "long", day: "numeric", month: "long" })} a las {selectedTime}
          </p>
          <Badge variant="outline" className="border-green-300 text-green-700 dark:border-green-700 dark:text-green-300">
            Recibirás confirmación por email
          </Badge>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card>
      <CardHeader>
        <div className="flex items-center justify-between">
          <div>
            <CardTitle className="flex items-center gap-2">
              <CalendarDays className="size-5 text-primary" />
              Agendar Cita
            </CardTitle>
            <CardDescription>Selecciona fecha, hora y servicio para tu cita</CardDescription>
          </div>
          <Badge variant="secondary">Paso {step}/3</Badge>
        </div>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Left: Calendar + Service */}
          <div className="space-y-4">
            <div>
              <label className="text-sm text-muted-foreground mb-2 block">Servicio</label>
              <Select value={selectedService} onValueChange={setSelectedService}>
                <SelectTrigger>
                  <SelectValue placeholder="Selecciona un servicio" />
                </SelectTrigger>
                <SelectContent>
                  {services.map((s) => (
                    <SelectItem key={s.value} value={s.value}>
                      <span className="flex items-center gap-2">
                        {s.label}
                        <span className="text-xs text-muted-foreground">({s.duration})</span>
                      </span>
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div>
              <label className="text-sm text-muted-foreground mb-2 block">Fecha</label>
              <Calendar
                mode="single"
                selected={date}
                onSelect={(d) => {
                  setDate(d);
                  setSelectedTime("");
                }}
                disabled={(d) => d < new Date() || isWeekend(d)}
                className="rounded-md border"
              />
            </div>
          </div>

          {/* Right: Time slots + Summary */}
          <div className="space-y-4">
            {date && (
              <div>
                <label className="text-sm text-muted-foreground mb-2 flex items-center gap-1">
                  <Clock className="size-3.5" />
                  Horarios disponibles - {date.toLocaleDateString("es-CO", { weekday: "short", day: "numeric", month: "short" })}
                </label>
                <div className="grid grid-cols-3 gap-2">
                  {timeSlots.map((slot) => (
                    <Button
                      key={slot.time}
                      variant={selectedTime === slot.time ? "default" : "outline"}
                      size="sm"
                      disabled={!slot.available}
                      onClick={() => setSelectedTime(slot.time)}
                      className={cn(
                        "text-xs",
                        !slot.available && "opacity-40 line-through"
                      )}
                    >
                      {slot.time}
                    </Button>
                  ))}
                </div>
              </div>
            )}

            {date && selectedTime && selectedService && (
              <Card className="bg-muted/50">
                <CardContent className="p-4 space-y-3">
                  <h4 className="flex items-center gap-2 text-sm">
                    <User className="size-4 text-primary" />
                    Resumen de Cita
                  </h4>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Servicio:</span>
                      <span>{selectedServiceData?.label}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Duración:</span>
                      <span>{selectedServiceData?.duration}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Fecha:</span>
                      <span>{date.toLocaleDateString("es-CO", { day: "numeric", month: "long", year: "numeric" })}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Hora:</span>
                      <span>{selectedTime}</span>
                    </div>
                  </div>
                  <Button className="w-full mt-2" onClick={handleConfirm}>
                    <CheckCircle2 className="size-4 mr-2" />
                    Confirmar Cita
                  </Button>
                </CardContent>
              </Card>
            )}

            {!date && (
              <div className="flex items-center justify-center h-full text-muted-foreground text-sm">
                Selecciona una fecha para ver los horarios disponibles
              </div>
            )}
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
