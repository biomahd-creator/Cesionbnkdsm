import { cn } from "../../lib/utils";
import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../../components/ui/card";
import { Input } from "../../components/ui/input";
import { Label } from "../../components/ui/label";
import { Button } from "../../components/ui/button";
import { Badge } from "../../components/ui/badge";
import { Separator } from "../../components/ui/separator";
import { Alert, AlertDescription } from "../../components/ui/alert";
import { Progress } from "../../components/ui/progress";
import { 
  DollarSign, 
  Percent, 
  Clock,
  TrendingUp,
  Info,
  CheckCircle2,
  AlertCircle,
  Building2,
  FileCheck
} from "lucide-react";

/**
 * CALCULADORA DE LIQUIDEZ C-FINANCIA
 * 
 * Características específicas:
 * - Anticipo hasta el 90% del valor de la factura
 * - Desembolso en máximo 24 horas
 * - Monto mínimo: $10,000,000 COP
 * - Plazo: 30 a 180 días
 * - Tasas competitivas según perfil
 * - Validación RADIAN (simulada)
 */

export function LiquidityCalculator() {
  const [montoFactura, setMontoFactura] = useState<string>("15000000");
  const [plazo, setPlazo] = useState<string>("60");
  const [clienteDeudor, setClienteDeudor] = useState<string>("");
  const [numeroFactura, setNumeroFactura] = useState<string>("");
  
  // Configuración C-Financia
  const ANTICIPO_PORCENTAJE = 90; // Hasta 90%
  const MONTO_MINIMO = 10000000; // 10 millones COP
  const TASA_BASE = 2.2; // 2.2% mensual
  const COMISION_ADMINISTRATIVA = 0.5; // 0.5% flat
  
  // Cálculos
  const monto = parseFloat(montoFactura) || 0;
  const dias = parseInt(plazo) || 60;
  const meses = dias / 30;
  
  // Validaciones
  const esMontoValido = monto >= MONTO_MINIMO;
  const esPlazoValido = dias >= 30 && dias <= 180;
  const esFacturaValida = numeroFactura.length > 0;
  
  // Cálculo de anticipo (90%)
  const montoAnticipo = monto * (ANTICIPO_PORCENTAJE / 100);
  
  // Comisión financiera (tasa mensual × meses)
  const comisionFinanciera = monto * (TASA_BASE / 100) * meses;
  
  // Comisión administrativa (flat)
  const comisionAdministrativa = monto * (COMISION_ADMINISTRATIVA / 100);
  
  // Total comisiones
  const totalComisiones = comisionFinanciera + comisionAdministrativa;
  
  // Neto a recibir
  const netoARecibir = montoAnticipo - totalComisiones;
  
  // Costo Efectivo Anual
  const cea = ((totalComisiones / netoARecibir) * (365 / dias) * 100);
  
  // Formato de moneda colombiana
  const formatCOP = (value: number) => {
    return new Intl.NumberFormat('es-CO', {
      style: 'currency',
      currency: 'COP',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(value);
  };

  const handleSimularRADIAN = () => {
    // Simulación de validación RADIAN
    alert(`🔄 Validando factura ${numeroFactura} en RADIAN...\n\n✅ Factura electrónica verificada\n✅ Cliente deudor: ${clienteDeudor || 'Sin especificar'}\n✅ Monto coincide: ${formatCOP(monto)}\n\nEstado: APROBADA PARA FACTORING`);
  };

  return (
    <div className="space-y-6">
      {/* Header con branding C-Financia */}
      <Card className="elevation-2 border-2 border-primary/30 bg-gradient-to-br from-primary/5 to-primary/10">
        <CardHeader>
          <div className="flex items-center justify-between">
            <div>
              <CardTitle className="flex items-center gap-2">
                <TrendingUp className="h-6 w-6 text-primary" />
                Calculadora de Liquidez C-Financia
              </CardTitle>
              <CardDescription className="mt-2">
                Anticipa hasta el <strong>90%</strong> del valor de tus facturas en <strong>24 horas</strong>
              </CardDescription>
            </div>
            <Badge variant="default" className="bg-green-500 hover:bg-green-600 px-4 py-2">
              <Clock className="h-4 w-4 mr-1" />
              Desembolso en 24h
            </Badge>
          </div>
        </CardHeader>
      </Card>

      <div className="grid gap-6 lg:grid-cols-2">
        {/* Panel de entrada de datos */}
        <div className="space-y-6">
          <Card className="elevation-2">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <FileCheck className="h-5 w-5 text-primary" />
                Datos de la Factura
              </CardTitle>
              <CardDescription>Información de la factura electrónica</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              {/* Número de Factura */}
              <div className="space-y-2">
                <Label htmlFor="numeroFactura">
                  Número de Factura Electrónica
                </Label>
                <Input
                  id="numeroFactura"
                  type="text"
                  value={numeroFactura}
                  onChange={(e) => setNumeroFactura(e.target.value)}
                  placeholder="FE-2024-00001"
                  className={!esFacturaValida && numeroFactura.length > 0 ? "border-destructive" : ""}
                />
                <p className="text-xs text-muted-foreground">
                  Integración con RADIAN - Facturación Electrónica
                </p>
              </div>

              {/* Cliente Deudor */}
              <div className="space-y-2">
                <Label htmlFor="clienteDeudor" className="flex items-center gap-2">
                  <Building2 className="h-4 w-4 text-primary" />
                  Cliente Deudor (Pagador)
                </Label>
                <Input
                  id="clienteDeudor"
                  type="text"
                  value={clienteDeudor}
                  onChange={(e) => setClienteDeudor(e.target.value)}
                  placeholder="Nombre de la empresa deudora"
                />
                <p className="text-xs text-muted-foreground">
                  Empresa que debe pagar la factura
                </p>
              </div>

              <Separator />

              {/* Monto de la Factura */}
              <div className="space-y-2">
                <Label htmlFor="monto" className="flex items-center gap-2">
                  <DollarSign className="h-4 w-4 text-primary" />
                  Valor de la Factura (COP)
                </Label>
                <Input
                  id="monto"
                  type="number"
                  value={montoFactura}
                  onChange={(e) => setMontoFactura(e.target.value)}
                  placeholder="10,000,000"
                  className={cn(
                    "text-lg",
                    !esMontoValido && monto > 0 && "border-destructive"
                  )}
                />
                {!esMontoValido && monto > 0 && (
                  <p className="text-xs text-destructive flex items-center gap-1">
                    <AlertCircle className="h-3 w-3" />
                    Monto mínimo: {formatCOP(MONTO_MINIMO)}
                  </p>
                )}
                {esMontoValido && (
                  <p className="text-xs text-green-600 dark:text-green-400 flex items-center gap-1">
                    <CheckCircle2 className="h-3 w-3" />
                    Monto válido para factoring
                  </p>
                )}
              </div>

              {/* Plazo */}
              <div className="space-y-2">
                <Label htmlFor="plazo">
                  Plazo de Pago (días)
                </Label>
                <Input
                  id="plazo"
                  type="number"
                  value={plazo}
                  onChange={(e) => setPlazo(e.target.value)}
                  placeholder="60"
                  min="30"
                  max="180"
                  className={!esPlazoValido && dias > 0 ? "border-destructive" : ""}
                />
                {!esPlazoValido && dias > 0 && (
                  <p className="text-xs text-destructive flex items-center gap-1">
                    <AlertCircle className="h-3 w-3" />
                    Plazo debe estar entre 30 y 180 días
                  </p>
                )}
                {esPlazoValido && (
                  <p className="text-xs text-muted-foreground">
                    {meses.toFixed(1)} meses aproximados
                  </p>
                )}
              </div>

              {/* Botón de validación RADIAN */}
              <Button 
                variant="outline" 
                className="w-full"
                onClick={handleSimularRADIAN}
                disabled={!esFacturaValida}
              >
                <FileCheck className="h-4 w-4 mr-2" />
                Validar en RADIAN
              </Button>
            </CardContent>
          </Card>

          {/* Condiciones C-Financia */}
          <Card className="elevation-1">
            <CardHeader>
              <CardTitle className="text-lg">Condiciones C-Financia</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="flex items-center justify-between py-2 border-b">
                <span className="text-sm">Anticipo máximo</span>
                <Badge variant="default" className="bg-green-500">
                  {ANTICIPO_PORCENTAJE}%
                </Badge>
              </div>
              <div className="flex items-center justify-between py-2 border-b">
                <span className="text-sm">Tasa mensual base</span>
                <span className="font-semibold">{TASA_BASE}%</span>
              </div>
              <div className="flex items-center justify-between py-2 border-b">
                <span className="text-sm">Comisión administrativa</span>
                <span className="font-semibold">{COMISION_ADMINISTRATIVA}%</span>
              </div>
              <div className="flex items-center justify-between py-2">
                <span className="text-sm">Desembolso</span>
                <Badge variant="outline">Máximo 24 horas</Badge>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Panel de resultados */}
        <div className="space-y-6">
          {/* Resultado principal */}
          <Card className="elevation-3 border-2 border-primary/40 bg-gradient-to-br from-primary/10 to-primary/5">
            <CardHeader>
              <CardTitle className="text-lg">Tu Liquidez Disponible</CardTitle>
              <CardDescription>Dinero que recibirás en tu cuenta</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              {/* Monto a recibir destacado */}
              <div className="p-6 rounded-xl bg-card border-2 border-primary/50 text-center">
                <p className="text-sm text-muted-foreground mb-2">
                  Recibes en 24 horas
                </p>
                <p className="text-4xl font-bold text-foreground mb-1">
                  {formatCOP(netoARecibir)}
                </p>
                <Badge variant="outline" className="mt-2">
                  {((netoARecibir / monto) * 100).toFixed(1)}% del total
                </Badge>
              </div>

              {/* Barra de progreso visual */}
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Del monto total</span>
                  <span className="font-semibold">{formatCOP(monto)}</span>
                </div>
                <Progress 
                  value={(netoARecibir / monto) * 100} 
                  className="h-3"
                />
              </div>

              <Separator />

              {/* Desglose detallado */}
              <div className="space-y-3">
                <h4 className="font-semibold text-sm">Desglose de la Operación</h4>
                
                <div className="flex items-center justify-between p-3 rounded-lg bg-card border">
                  <span className="text-sm">Valor factura</span>
                  <span className="font-semibold">{formatCOP(monto)}</span>
                </div>

                <div className="flex items-center justify-between p-3 rounded-lg bg-green-500/10 border border-green-500/30">
                  <span className="text-sm text-green-700 dark:text-green-400">
                    Anticipo ({ANTICIPO_PORCENTAJE}%)
                  </span>
                  <span className="font-semibold text-green-700 dark:text-green-400">
                    {formatCOP(montoAnticipo)}
                  </span>
                </div>

                <div className="ml-4 space-y-2 pb-2 border-l-2 border-dashed border-muted pl-4">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-muted-foreground">
                      Comisión financiera ({TASA_BASE}% × {meses.toFixed(1)} meses)
                    </span>
                    <span className="text-destructive font-medium">
                      - {formatCOP(comisionFinanciera)}
                    </span>
                  </div>

                  <div className="flex items-center justify-between text-sm">
                    <span className="text-muted-foreground">
                      Comisión administrativa ({COMISION_ADMINISTRATIVA}%)
                    </span>
                    <span className="text-destructive font-medium">
                      - {formatCOP(comisionAdministrativa)}
                    </span>
                  </div>
                </div>

                <div className="flex items-center justify-between p-4 rounded-lg bg-primary/20 border-2 border-primary">
                  <div>
                    <p className="text-sm text-muted-foreground mb-1">Neto a recibir</p>
                    <p className="font-semibold">En tu cuenta en 24h</p>
                  </div>
                  <span className="text-2xl font-bold text-primary">
                    {formatCOP(netoARecibir)}
                  </span>
                </div>
              </div>

              <Separator />

              {/* CEA y detalles */}
              <div className="space-y-2">
                <div className="flex items-center justify-between p-3 rounded-lg bg-card border">
                  <div className="flex items-center gap-2">
                    <Percent className="h-4 w-4 text-primary" />
                    <span className="text-sm font-medium">Costo Efectivo Anual</span>
                  </div>
                  <Badge variant="outline" className="font-semibold">
                    {cea.toFixed(2)}% CEA
                  </Badge>
                </div>

                <div className="flex items-center justify-between text-sm px-3">
                  <span className="text-muted-foreground">Plazo de la operación</span>
                  <span className="font-medium">{dias} días ({meses.toFixed(1)} meses)</span>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Alertas y condiciones */}
          <Alert className="border-primary/50 bg-primary/5">
            <Info className="h-4 w-4 text-primary" />
            <AlertDescription className="text-sm">
              <strong>Sin deuda ni garantías.</strong> Solo pagas cuando tu cliente pague la factura. 
              C-Financia asume el riesgo.
            </AlertDescription>
          </Alert>

          {/* Call to action */}
          <div className="space-y-3">
            <Button 
              className="w-full h-12 text-lg"
              disabled={!esMontoValido || !esPlazoValido || !esFacturaValida}
            >
              <CheckCircle2 className="h-5 w-5 mr-2" />
              Solicitar Anticipo Ahora
            </Button>

            {(!esMontoValido || !esPlazoValido || !esFacturaValida) && (
              <p className="text-xs text-center text-muted-foreground">
                Completa todos los campos para continuar
              </p>
            )}
          </div>
        </div>
      </div>

      {/* Tabla comparativa de plazos */}
      <Card className="elevation-1">
        <CardHeader>
          <CardTitle className="text-lg">Comparativa de Plazos</CardTitle>
          <CardDescription>
            Calcula tu liquidez según diferentes plazos con el monto actual: {formatCOP(monto)}
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b">
                  <th className="text-left py-3 px-4 font-semibold text-sm">Plazo</th>
                  <th className="text-right py-3 px-4 font-semibold text-sm">Anticipo (90%)</th>
                  <th className="text-right py-3 px-4 font-semibold text-sm">Comisiones</th>
                  <th className="text-right py-3 px-4 font-semibold text-sm">Neto a Recibir</th>
                  <th className="text-right py-3 px-4 font-semibold text-sm">CEA</th>
                </tr>
              </thead>
              <tbody>
                {[30, 60, 90, 120, 150, 180].map((diasEscenario) => {
                  const mesesEscenario = diasEscenario / 30;
                  const anticipoEscenario = monto * 0.9;
                  const comisionFinancieraEsc = monto * (TASA_BASE / 100) * mesesEscenario;
                  const comisionAdminEsc = monto * (COMISION_ADMINISTRATIVA / 100);
                  const totalComisionesEsc = comisionFinancieraEsc + comisionAdminEsc;
                  const netoEscenario = anticipoEscenario - totalComisionesEsc;
                  const ceaEscenario = ((totalComisionesEsc / netoEscenario) * (365 / diasEscenario) * 100);
                  const isActual = diasEscenario === dias;
                  
                  return (
                    <tr 
                      key={diasEscenario}
                      className={cn(
                        "border-b transition-colors",
                        isActual ? 'bg-primary/10' : 'hover:bg-muted/50'
                      )}
                    >
                      <td className="py-3 px-4">
                        <div className="flex items-center gap-2">
                          <span className="font-medium">{diasEscenario} días</span>
                          {isActual && (
                            <Badge variant="info-soft-outline" className="text-xs">Actual</Badge>
                          )}
                        </div>
                      </td>
                      <td className="text-right py-3 px-4 font-medium">
                        {formatCOP(anticipoEscenario)}
                      </td>
                      <td className="text-right py-3 px-4 text-destructive font-medium">
                        {formatCOP(totalComisionesEsc)}
                      </td>
                      <td className="text-right py-3 px-4 text-green-600 dark:text-green-400 font-semibold">
                        {formatCOP(netoEscenario)}
                      </td>
                      <td className="text-right py-3 px-4">
                        <Badge variant="info-soft-outline">{ceaEscenario.toFixed(2)}%</Badge>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>

      {/* Beneficios C-Financia */}
      <div className="grid gap-4 md:grid-cols-3">
        <Card className="elevation-1">
          <CardContent className="pt-6">
            <div className="flex items-start gap-3">
              <div className="p-2 rounded-lg bg-primary/10">
                <Clock className="h-5 w-5 text-primary" />
              </div>
              <div>
                <h4 className="font-semibold mb-1">24 Horas</h4>
                <p className="text-sm text-muted-foreground">
                  Desembolso rápido, sin trámites presenciales
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="elevation-1">
          <CardContent className="pt-6">
            <div className="flex items-start gap-3">
              <div className="p-2 rounded-lg bg-green-500/10">
                <CheckCircle2 className="h-5 w-5 text-green-500" />
              </div>
              <div>
                <h4 className="font-semibold mb-1">Sin Garantías</h4>
                <p className="text-sm text-muted-foreground">
                  No requieres avales ni bienes en garantía
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="elevation-1">
          <CardContent className="pt-6">
            <div className="flex items-start gap-3">
              <div className="p-2 rounded-lg bg-blue-500/10">
                <TrendingUp className="h-5 w-5 text-blue-500" />
              </div>
              <div>
                <h4 className="font-semibold mb-1">90% Anticipo</h4>
                <p className="text-sm text-muted-foreground">
                  Máxima liquidez de tu cartera de facturas
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}