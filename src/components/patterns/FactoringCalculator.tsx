import { useState, useEffect } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../ui/card";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { Slider } from "../ui/slider";
import { Button } from "../ui/button";
import { Badge } from "../ui/badge";
import { Separator } from "../ui/separator";
import { 
  Calculator, 
  DollarSign, 
  Percent, 
  Calendar,
  TrendingDown,
  Info,
  ArrowRight
} from "lucide-react";
import { Alert, AlertDescription } from "../ui/alert";

export function FactoringCalculator() {
  const [montoFactura, setMontoFactura] = useState<string>("50000");
  const [plazo, setPlazo] = useState<number>(30);
  const [tasaMensual, setTasaMensual] = useState<number>(2.5);
  
  // Cálculos automáticos
  const monto = parseFloat(montoFactura) || 0;
  const comision = monto * (tasaMensual / 100) * (plazo / 30);
  const montoARecibir = monto - comision;
  const costoEfectivoAnual = ((comision / montoARecibir) * (365 / plazo) * 100);
  
  const fechaHoy = new Date();
  const fechaPago = new Date();
  fechaPago.setDate(fechaPago.getDate() + plazo);

  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 2,
    }).format(value);
  };

  const formatDate = (date: Date) => {
    return date.toLocaleDateString('es-ES', { 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    });
  };

  return (
    <div className="space-y-6">
      {/* Header con título */}
      <Card className="elevation-2 border-2 border-primary/20">
        <CardHeader>
          <div className="flex items-center justify-between">
            <div>
              <CardTitle className="flex items-center gap-2">
                <Calculator className="h-5 w-5 text-primary" />
                Calculadora de Factoring
              </CardTitle>
              <CardDescription>
                Calcula en tiempo real el costo y monto a recibir
              </CardDescription>
            </div>
            <Badge variant="default" className="bg-green-500 hover:bg-green-600">
              En Tiempo Real
            </Badge>
          </div>
        </CardHeader>
      </Card>

      <div className="grid gap-6 lg:grid-cols-2">
        {/* Panel de inputs */}
        <Card className="elevation-2">
          <CardHeader>
            <CardTitle className="text-lg">Datos de la Operación</CardTitle>
            <CardDescription>Configura los parámetros de financiamiento</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            {/* Monto de la factura */}
            <div className="space-y-2">
              <Label htmlFor="monto" className="flex items-center gap-2">
                <DollarSign className="h-4 w-4 text-primary" />
                Monto de la Factura
              </Label>
              <Input
                id="monto"
                type="number"
                value={montoFactura}
                onChange={(e) => setMontoFactura(e.target.value)}
                placeholder="0.00"
                className="text-lg font-semibold"
              />
              <p className="text-xs text-muted-foreground">
                Valor nominal de la factura a financiar
              </p>
            </div>

            <Separator />

            {/* Plazo */}
            <div className="space-y-3">
              <Label className="flex items-center justify-between">
                <span className="flex items-center gap-2">
                  <Calendar className="h-4 w-4 text-primary" />
                  Plazo de Pago
                </span>
                <Badge variant="outline" className="text-sm">
                  {plazo} días
                </Badge>
              </Label>
              <Slider
                value={[plazo]}
                onValueChange={(value) => setPlazo(value[0])}
                min={15}
                max={90}
                step={15}
                className="py-4"
              />
              <div className="flex justify-between text-xs text-muted-foreground">
                <span>15 días</span>
                <span>30 días</span>
                <span>60 días</span>
                <span>90 días</span>
              </div>
            </div>

            <Separator />

            {/* Tasa mensual */}
            <div className="space-y-3">
              <Label className="flex items-center justify-between">
                <span className="flex items-center gap-2">
                  <Percent className="h-4 w-4 text-primary" />
                  Tasa Mensual
                </span>
                <Badge variant="outline" className="text-sm">
                  {tasaMensual.toFixed(2)}%
                </Badge>
              </Label>
              <Slider
                value={[tasaMensual]}
                onValueChange={(value) => setTasaMensual(value[0])}
                min={1.5}
                max={5}
                step={0.25}
                className="py-4"
              />
              <div className="flex justify-between text-xs text-muted-foreground">
                <span>1.5%</span>
                <span>2.5%</span>
                <span>3.5%</span>
                <span>5.0%</span>
              </div>
            </div>

            {/* Botones de acción */}
            <div className="flex gap-2 pt-2">
              <Button 
                variant="outline" 
                className="flex-1"
                onClick={() => {
                  setMontoFactura("50000");
                  setPlazo(30);
                  setTasaMensual(2.5);
                }}
              >
                Restablecer
              </Button>
              <Button className="flex-1">
                Solicitar Financiamiento
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Panel de resultados */}
        <div className="space-y-6">
          {/* Resumen visual */}
          <Card className="elevation-2 bg-gradient-to-br from-primary/5 to-primary/10 border-primary/30">
            <CardHeader>
              <CardTitle className="text-lg">Resultado del Cálculo</CardTitle>
              <CardDescription>Desglose completo de la operación</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              {/* Flujo visual */}
              <div className="flex items-center justify-between p-4 rounded-lg bg-card border">
                <div className="text-center flex-1">
                  <p className="text-xs text-muted-foreground mb-1">Monto Factura</p>
                  <p className="text-xl font-semibold text-primary">
                    {formatCurrency(monto)}
                  </p>
                </div>
                
                <ArrowRight className="h-5 w-5 text-muted-foreground flex-shrink-0 mx-2" />
                
                <div className="text-center flex-1">
                  <p className="text-xs text-muted-foreground mb-1">Comisión</p>
                  <p className="text-xl font-semibold text-destructive flex items-center justify-center gap-1">
                    <TrendingDown className="h-4 w-4" />
                    {formatCurrency(comision)}
                  </p>
                </div>
                
                <ArrowRight className="h-5 w-5 text-muted-foreground flex-shrink-0 mx-2" />
                
                <div className="text-center flex-1">
                  <p className="text-xs text-muted-foreground mb-1">A Recibir</p>
                  <p className="text-xl font-semibold text-green-500">
                    {formatCurrency(montoARecibir)}
                  </p>
                </div>
              </div>

              {/* Detalles */}
              <div className="space-y-3">
                <div className="flex items-center justify-between p-3 rounded-lg border bg-card">
                  <span className="text-sm text-muted-foreground">Plazo de la operación</span>
                  <span className="font-semibold">{plazo} días</span>
                </div>

                <div className="flex items-center justify-between p-3 rounded-lg border bg-card">
                  <span className="text-sm text-muted-foreground">Tasa aplicada</span>
                  <span className="font-semibold">{tasaMensual.toFixed(2)}% mensual</span>
                </div>

                <div className="flex items-center justify-between p-3 rounded-lg border bg-card">
                  <span className="text-sm text-muted-foreground">Costo Efectivo Anual</span>
                  <Badge variant="outline" className="font-semibold">
                    {costoEfectivoAnual.toFixed(2)}% CEA
                  </Badge>
                </div>
              </div>

              <Separator />

              {/* Fechas */}
              <div className="space-y-2">
                <div className="flex items-center justify-between text-sm">
                  <span className="text-muted-foreground">Fecha de desembolso</span>
                  <span className="font-medium">{formatDate(fechaHoy)}</span>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-muted-foreground">Fecha de pago al cliente</span>
                  <span className="font-medium">{formatDate(fechaPago)}</span>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Desglose detallado */}
          <Card className="elevation-1">
            <CardHeader>
              <CardTitle className="text-lg">Desglose Financiero</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                <div className="flex items-center justify-between py-2 border-b">
                  <span className="text-sm">Monto nominal factura</span>
                  <span className="font-semibold">{formatCurrency(monto)}</span>
                </div>
                <div className="flex items-center justify-between py-2 border-b">
                  <span className="text-sm text-muted-foreground">
                    Comisión ({tasaMensual}% × {plazo/30} meses)
                  </span>
                  <span className="font-semibold text-destructive">
                    - {formatCurrency(comision)}
                  </span>
                </div>
                <div className="flex items-center justify-between py-3 bg-green-500/10 px-3 rounded-lg">
                  <span className="font-semibold text-green-700 dark:text-green-400">
                    Monto a recibir hoy
                  </span>
                  <span className="text-xl font-bold text-green-600 dark:text-green-400">
                    {formatCurrency(montoARecibir)}
                  </span>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Alert informativa */}
          <Alert className="border-primary/50 bg-primary/5">
            <Info className="h-4 w-4 text-primary" />
            <AlertDescription className="text-sm">
              <strong>Nota:</strong> Los cálculos son referenciales. La tasa final puede variar 
              según el perfil del cliente y la evaluación de riesgo.
            </AlertDescription>
          </Alert>
        </div>
      </div>

      {/* Comparativa de escenarios */}
      <Card className="elevation-1">
        <CardHeader>
          <CardTitle className="text-lg">Comparativa de Escenarios</CardTitle>
          <CardDescription>Diferentes plazos con el monto actual</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b">
                  <th className="text-left py-3 px-4 font-semibold text-sm">Plazo</th>
                  <th className="text-right py-3 px-4 font-semibold text-sm">Comisión</th>
                  <th className="text-right py-3 px-4 font-semibold text-sm">A Recibir</th>
                  <th className="text-right py-3 px-4 font-semibold text-sm">CEA</th>
                </tr>
              </thead>
              <tbody>
                {[15, 30, 45, 60, 90].map((dias) => {
                  const comisionEscenario = monto * (tasaMensual / 100) * (dias / 30);
                  const montoRecibirEscenario = monto - comisionEscenario;
                  const ceaEscenario = ((comisionEscenario / montoRecibirEscenario) * (365 / dias) * 100);
                  const isSelected = dias === plazo;
                  
                  return (
                    <tr 
                      key={dias} 
                      className={`border-b ${isSelected ? 'bg-primary/10' : 'hover:bg-muted/50'}`}
                    >
                      <td className="py-3 px-4">
                        <div className="flex items-center gap-2">
                          <span className="font-medium">{dias} días</span>
                          {isSelected && (
                            <Badge variant="default" className="text-xs">Actual</Badge>
                          )}
                        </div>
                      </td>
                      <td className="text-right py-3 px-4 text-destructive font-medium">
                        {formatCurrency(comisionEscenario)}
                      </td>
                      <td className="text-right py-3 px-4 text-green-600 dark:text-green-400 font-semibold">
                        {formatCurrency(montoRecibirEscenario)}
                      </td>
                      <td className="text-right py-3 px-4">
                        <Badge variant="outline">{ceaEscenario.toFixed(2)}%</Badge>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
