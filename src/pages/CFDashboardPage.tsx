import { ComponentShowcase } from "../components/ui/component-showcase";
import { CFDashboard } from "../components/factoring/components/CFDashboard";

export function CFDashboardPage() {
  return (
    <ComponentShowcase
      title="Enterprise Dashboard (CF)"
      description="Full business dashboard for managing liquidity and monitoring factoring operations in real-time. Includes KPI cards, portfolio overview, recent transactions, quick actions, and chart visualizations for financial metrics."
      category="Factoring"
      preview={<CFDashboard />}
      code={`import { CFDashboard } from "@/components/factoring/components/CFDashboard";

<CFDashboard />`}
      props={[
        {
          name: "(pattern)",
          type: "—",
          description: "Self-contained dashboard component with embedded state, mock data, and layout. No external props required.",
        },
      ]}
    />
  );
}
