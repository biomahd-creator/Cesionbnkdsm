import { ComponentShowcase } from "../components/ui/component-showcase";
import { FactoringRateDisplay } from "../factoring/FactoringRateDisplay";

const rateDisplayCode = `import { FactoringRateDisplay } from "@/factoring/FactoringRateDisplay";

export function RateDisplayDemo() {
  return (
    <FactoringRateDisplay 
      totalRate={2.5}
      annualRate={34.49}
      trend="down"
      components={[
        { label: "Tasa Base", value: 1.8, description: "Interés corriente del banco" },
        { label: "Spread de Riesgo", value: 0.5, description: "Basado en score del pagador" },
        { label: "Comisión Plataforma", value: 0.2 },
      ]}
    />
  );
}`;

export function RateDisplayPage() {
  return (
    <ComponentShowcase
      title="Rate Display"
      description="Desglose detallado de tasas financieras y sus componentes."
      category="Business Component"
      preview={
        <div className="w-full max-w-md">
          <FactoringRateDisplay 
            totalRate={2.5}
            annualRate={34.49}
            trend="down"
            components={[
              { label: "Tasa Base", value: 1.8, description: "Interés corriente del banco" },
              { label: "Spread de Riesgo", value: 0.5, description: "Basado en score del pagador" },
              { label: "Comisión Plataforma", value: 0.2 },
            ]}
          />
        </div>
      }
      code={rateDisplayCode}
    />
  );
}
