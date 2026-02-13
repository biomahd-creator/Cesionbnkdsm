import { ComponentShowcase } from "../components/ui/component-showcase";
import { FactoringRateDisplay } from "../components/factoring/FactoringRateDisplay";

const rateDisplayCode = `import { FactoringRateDisplay } from "@/components/factoring/FactoringRateDisplay";

export function RateDisplayDemo() {
  return (
    <FactoringRateDisplay 
      totalRate={2.5}
      annualRate={34.49}
      trend="down"
      components={[
        { label: "Base Rate", value: 1.8, description: "Bank current interest rate" },
        { label: "Risk Spread", value: 0.5, description: "Based on payor score" },
        { label: "Platform Fee", value: 0.2 },
      ]}
    />
  );
}`;

export function RateDisplayPage() {
  return (
    <ComponentShowcase
      title="Rate Display"
      description="Detailed breakdown of financial rates and their components."
      category="Business Component"
      preview={
        <div className="w-full max-w-md">
          <FactoringRateDisplay 
            totalRate={2.5}
            annualRate={34.49}
            trend="down"
            components={[
              { label: "Base Rate", value: 1.8, description: "Bank current interest rate" },
              { label: "Risk Spread", value: 0.5, description: "Based on payor score" },
              { label: "Platform Fee", value: 0.2 },
            ]}
          />
        </div>
      }
      code={rateDisplayCode}
    />
  );
}