import { ComponentShowcase } from "../components/ui/component-showcase";
import { LiquidityMeter } from "../factoring/LiquidityMeter";

const liquidityMeterCode = `import { LiquidityMeter } from "@/factoring/LiquidityMeter";

export function LiquidityMeterDemo() {
  return (
    <div className="grid grid-cols-2 gap-4">
      <LiquidityMeter value={75} amount={150000000} />
      <LiquidityMeter value={30} amount={25000000} />
    </div>
  );
}`;

export function LiquidityMeterPage() {
  return (
    <ComponentShowcase
      title="Liquidity Meter"
      description="Visualizador de liquidez con medidor circular y valor monetario."
      category="Business Component"
      preview={
        <div className="grid grid-cols-2 gap-4 w-full max-w-2xl">
          <LiquidityMeter value={75} amount={150000000} />
          <LiquidityMeter value={30} amount={25000000} />
        </div>
      }
      code={liquidityMeterCode}
      props={[
        { name: "value", type: "number", description: "Valor del índice de liquidez (0-100). Se clampea automáticamente.", required: true },
        { name: "label", type: "string", default: "\"Índice de Liquidez\"", description: "Etiqueta que se muestra debajo del medidor." },
        { name: "amount", type: "number", description: "Monto monetario a mostrar formateado (COP). Opcional." },
        { name: "className", type: "string", description: "Clases adicionales para el contenedor." },
      ]}
      examples={[
        {
          title: "Liquidez alta",
          description: "Medidor con valor alto y monto significativo.",
          preview: (
            <div className="w-full max-w-xs mx-auto">
              <LiquidityMeter value={92} amount={350000000} label="Disponible" />
            </div>
          ),
          code: `<LiquidityMeter 
  value={92} 
  amount={350000000} 
  label="Disponible" 
/>`,
        },
        {
          title: "Liquidez crítica",
          description: "Medidor con valor bajo indicando riesgo.",
          preview: (
            <div className="w-full max-w-xs mx-auto">
              <LiquidityMeter value={12} amount={5000000} label="Cupo restante" />
            </div>
          ),
          code: `<LiquidityMeter 
  value={12} 
  amount={5000000} 
  label="Cupo restante" 
/>`,
        },
        {
          title: "Sin monto",
          description: "Solo indicador visual, sin valor monetario.",
          preview: (
            <div className="w-full max-w-xs mx-auto">
              <LiquidityMeter value={55} label="Score de riesgo" />
            </div>
          ),
          code: `<LiquidityMeter 
  value={55} 
  label="Score de riesgo" 
/>`,
        },
      ]}
    />
  );
}