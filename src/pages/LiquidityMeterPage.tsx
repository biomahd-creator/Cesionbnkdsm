import { ComponentShowcase } from "../components/ui/component-showcase";
import { LiquidityMeter } from "../components/factoring/LiquidityMeter";

const liquidityMeterCode = `import { LiquidityMeter } from "@/components/factoring/LiquidityMeter";

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
      description="Liquidity visualizer with circular meter and monetary value."
      category="Business Component"
      preview={
        <div className="grid grid-cols-2 gap-4 w-full max-w-2xl">
          <LiquidityMeter value={75} amount={150000000} />
          <LiquidityMeter value={30} amount={25000000} />
        </div>
      }
      code={liquidityMeterCode}
      props={[
        { name: "value", type: "number", description: "Liquidity index value (0-100). Automatically clamped.", required: true },
        { name: "label", type: "string", default: "\"Liquidity Index\"", description: "Label displayed below the meter." },
        { name: "amount", type: "number", description: "Monetary amount to display formatted (COP). Optional." },
        { name: "className", type: "string", description: "Additional classes for the container." },
      ]}
      examples={[
        {
          title: "High Liquidity",
          description: "Meter with high value and significant amount.",
          preview: (
            <div className="w-full max-w-xs mx-auto">
              <LiquidityMeter value={92} amount={350000000} label="Available" />
            </div>
          ),
          code: `<LiquidityMeter 
  value={92} 
  amount={350000000} 
  label="Available" 
/>`,
        },
        {
          title: "Critical Liquidity",
          description: "Meter with low value indicating risk.",
          preview: (
            <div className="w-full max-w-xs mx-auto">
              <LiquidityMeter value={12} amount={5000000} label="Remaining limit" />
            </div>
          ),
          code: `<LiquidityMeter 
  value={12} 
  amount={5000000} 
  label="Remaining limit" 
/>`,
        },
        {
          title: "Without Amount",
          description: "Visual indicator only, without monetary value.",
          preview: (
            <div className="w-full max-w-xs mx-auto">
              <LiquidityMeter value={55} label="Risk score" />
            </div>
          ),
          code: `<LiquidityMeter 
  value={55} 
  label="Risk score" 
/>`,
        },
      ]}
    />
  );
}