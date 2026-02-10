import { LiquidityCalculator } from "../factoring/components/LiquidityCalculator";

export function LiquidityCalculatorPage() {
  return (
    <div className="p-6 space-y-6">
      <div className="space-y-2">
        <h1 className="text-3xl font-semibold">Calculadora de Liquidez</h1>
        <p className="text-muted-foreground">
          Simula cuánto dinero recibirás al anticipar tus facturas con C-Financia
        </p>
      </div>

      <LiquidityCalculator />
    </div>
  );
}
