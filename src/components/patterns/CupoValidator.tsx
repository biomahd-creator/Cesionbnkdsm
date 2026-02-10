import { useState, useEffect } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../ui/card";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { Button } from "../ui/button";
import { Badge } from "../ui/badge";
import { Progress } from "../ui/progress";
import { Alert, AlertDescription } from "../ui/alert";
import { 
  DollarSign, 
  AlertCircle, 
  CheckCircle, 
  TrendingUp,
  Info,
  Calculator
} from "lucide-react";

interface CupoValidatorProps {
  cupoTotal?: number;
  cupoUtilizado?: number;
  onValidate?: (monto: number, isValid: boolean) => void;
}

export function CupoValidator({ 
  cupoTotal = 500000, 
  cupoUtilizado = 328000,
  onValidate 
}: CupoValidatorProps) {
  const [montoSolicitado, setMontoSolicitado] = useState<string>("");
  const [isValidating, setIsValidating] = useState(false);
  const [validationResult, setValidationResult] = useState<{
    isValid: boolean;
    message: string;
    cupoRestante: number;
    porcentajeNuevo: number;
  } | null>(null);

  const cupoDisponible = cupoTotal - cupoUtilizado;
  const porcentajeUtilizado = (cupoUtilizado / cupoTotal) * 100;

  const handleValidate = () => {
    const monto = parseFloat(montoSolicitado);
    
    if (isNaN(monto) || monto <= 0) {
      setValidationResult({
        isValid: false,
        message: "Por favor ingrese un monto válido",
        cupoRestante: cupoDisponible,
        porcentajeNuevo: porcentajeUtilizado
      });
      return;
    }

    setIsValidating(true);

    // Simular validación con delay
    setTimeout(() => {
      const isValid = monto <= cupoDisponible;
      const cupoRestante = cupoDisponible - monto;
      const porcentajeNuevo = ((cupoUtilizado + monto) / cupoTotal) * 100;

      setValidationResult({
        isValid,
        message: isValid 
          ? `✓ Cupo suficiente. Quedarían $${cupoRestante.toLocaleString()} disponibles.`
          : `✗ Cupo insuficiente. Excede el límite por $${(monto - cupoDisponible).toLocaleString()}.`,
        cupoRestante: isValid ? cupoRestante : cupoDisponible,
        porcentajeNuevo
      });

      if (onValidate) {
        onValidate(monto, isValid);
      }

      setIsValidating(false);
    }, 800);
  };

  const handleReset = () => {
    setMontoSolicitado("");
    setValidationResult(null);
  };

  return (
    <div className="space-y-6">
      {/* Estado actual del cupo */}
      <Card className="elevation-2 border-2 border-primary/20">
        <CardHeader>
          <div className="flex items-center justify-between">
            <div>
              <CardTitle>Cupo de Factoring</CardTitle>
              <CardDescription>Límite disponible para financiamiento</CardDescription>
            </div>
            <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center">
              <DollarSign className="h-6 w-6 text-primary" />
            </div>
          </div>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid grid-cols-3 gap-4">
            <div className="space-y-1">
              <p className="text-xs text-muted-foreground">Cupo Total</p>
              <p className="text-xl font-semibold">
                ${(cupoTotal / 1000).toFixed(0)}K
              </p>
            </div>
            <div className="space-y-1">
              <p className="text-xs text-muted-foreground">Utilizado</p>
              <p className="text-xl font-semibold text-orange-500">
                ${(cupoUtilizado / 1000).toFixed(0)}K
              </p>
            </div>
            <div className="space-y-1">
              <p className="text-xs text-muted-foreground">Disponible</p>
              <p className="text-xl font-semibold text-green-500">
                ${(cupoDisponible / 1000).toFixed(0)}K
              </p>
            </div>
          </div>

          <div className="space-y-2">
            <div className="flex items-center justify-between text-sm">
              <span className="text-muted-foreground">Utilización</span>
              <span className="font-medium">{porcentajeUtilizado.toFixed(1)}%</span>
            </div>
            <Progress value={porcentajeUtilizado} className="h-3" />
          </div>

          {porcentajeUtilizado > 80 && (
            <Alert variant="destructive" className="bg-destructive/10">
              <AlertCircle className="h-4 w-4" />
              <AlertDescription className="text-sm">
                Cupo casi agotado ({porcentajeUtilizado.toFixed(1)}% utilizado)
              </AlertDescription>
            </Alert>
          )}
        </CardContent>
      </Card>

      {/* Validador de monto */}
      <Card className="elevation-2">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Calculator className="h-5 w-5 text-primary" />
            Validar Monto a Financiar
          </CardTitle>
          <CardDescription>
            Ingrese el monto para verificar disponibilidad de cupo
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="monto">Monto Solicitado (USD)</Label>
            <div className="flex gap-2">
              <div className="relative flex-1">
                <DollarSign className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                <Input
                  id="monto"
                  type="number"
                  placeholder="0.00"
                  value={montoSolicitado}
                  onChange={(e) => setMontoSolicitado(e.target.value)}
                  className="pl-9"
                  disabled={isValidating}
                />
              </div>
              <Button 
                onClick={handleValidate}
                disabled={!montoSolicitado || isValidating}
              >
                {isValidating ? "Validando..." : "Validar"}
              </Button>
              {validationResult && (
                <Button 
                  variant="outline" 
                  onClick={handleReset}
                >
                  Limpiar
                </Button>
              )}
            </div>
          </div>

          {/* Resultado de validación */}
          {validationResult && (
            <div className="space-y-4 pt-2">
              <Alert 
                variant={validationResult.isValid ? "default" : "destructive"}
                className={validationResult.isValid ? "bg-green-500/10 border-green-500/50" : ""}
              >
                <div className="flex items-start gap-3">
                  {validationResult.isValid ? (
                    <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                  ) : (
                    <AlertCircle className="h-5 w-5 flex-shrink-0 mt-0.5" />
                  )}
                  <div className="flex-1">
                    <AlertDescription className="text-sm font-medium">
                      {validationResult.message}
                    </AlertDescription>
                  </div>
                </div>
              </Alert>

              {validationResult.isValid && (
                <div className="space-y-4 p-4 rounded-lg border bg-muted/20">
                  <h4 className="font-semibold flex items-center gap-2">
                    <TrendingUp className="h-4 w-4 text-primary" />
                    Proyección con esta operación
                  </h4>

                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-1">
                      <p className="text-xs text-muted-foreground">Nuevo Cupo Utilizado</p>
                      <p className="text-lg font-semibold">
                        ${((cupoUtilizado + parseFloat(montoSolicitado)) / 1000).toFixed(0)}K
                      </p>
                    </div>
                    <div className="space-y-1">
                      <p className="text-xs text-muted-foreground">Cupo Restante</p>
                      <p className="text-lg font-semibold text-green-500">
                        ${(validationResult.cupoRestante / 1000).toFixed(0)}K
                      </p>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-muted-foreground">Nueva Utilización</span>
                      <span className="font-medium">{validationResult.porcentajeNuevo.toFixed(1)}%</span>
                    </div>
                    <Progress value={validationResult.porcentajeNuevo} className="h-3" />
                  </div>

                  {validationResult.porcentajeNuevo > 90 && (
                    <Alert className="bg-yellow-500/10 border-yellow-500/50">
                      <Info className="h-4 w-4 text-yellow-500" />
                      <AlertDescription className="text-sm text-yellow-700 dark:text-yellow-400">
                        Con esta operación el cupo quedará por encima del 90%. 
                        Considere aumentar el límite.
                      </AlertDescription>
                    </Alert>
                  )}
                </div>
              )}
            </div>
          )}

          {/* Montos sugeridos rápidos */}
          <div className="space-y-2">
            <Label className="text-xs text-muted-foreground">Montos Sugeridos</Label>
            <div className="flex flex-wrap gap-2">
              {[10000, 25000, 50000, 100000].map((monto) => (
                <Button
                  key={monto}
                  variant="outline"
                  size="sm"
                  onClick={() => setMontoSolicitado(monto.toString())}
                  disabled={monto > cupoDisponible}
                  className="text-xs"
                >
                  ${(monto / 1000).toFixed(0)}K
                  {monto > cupoDisponible && (
                    <Badge variant="destructive" className="ml-2 text-xs px-1">
                      Excede
                    </Badge>
                  )}
                </Button>
              ))}
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Info adicional */}
      <Alert className="border-primary/50 bg-primary/5">
        <Info className="h-4 w-4 text-primary" />
        <AlertDescription className="text-sm">
          <strong>Nota:</strong> La validación es en tiempo real. Si el cupo es insuficiente, 
          puede solicitar un aumento de límite al administrador o dividir la operación en partes.
        </AlertDescription>
      </Alert>
    </div>
  );
}
