import { ComponentShowcase } from "../components/ui/component-showcase";
import { LiquidityCalculator } from "../components/factoring/components/LiquidityCalculator";

export function LiquidityCalculatorPage() {
  return (
    <ComponentShowcase
      title="Liquidity Calculator"
      description="Interactive calculator that simulates how much money you'll receive when advancing your invoices. Features real-time calculation of advance amounts, discount rates, fees, and net payout based on invoice value, term, and rate parameters."
      category="Factoring"
      preview={<LiquidityCalculator />}
      code={`import { LiquidityCalculator } from "@/components/factoring/components/LiquidityCalculator";

<LiquidityCalculator />`}
      props={[
        {
          name: "(pattern)",
          type: "—",
          description: "Self-contained calculator component. Manages its own inputs, calculations, and display. No external props required.",
        },
      ]}
    />
  );
}
