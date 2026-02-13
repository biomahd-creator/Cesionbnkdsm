import { ComponentShowcase } from "../components/ui/component-showcase";
import { FactoringDashboard } from "../components/factoring/components/FactoringDashboard";

export function FactoringDashboardPage() {
  return (
    <ComponentShowcase
      title="Factoring Dashboard"
      description="Complete administrative dashboard with KPIs, metrics, credit limits, and trend charts for factoring operations. Combines KPI Cards with trends, Progress Bars for credit utilization, Recharts (Line/Bar) for monthly evolution, and recent operations lists with status badges. Fully responsive with dark mode support."
      category="Factoring"
      preview={<FactoringDashboard />}
      code={`import { FactoringDashboard } from "@/components/factoring/components/FactoringDashboard";

<FactoringDashboard />`}
      props={[
        {
          name: "(pattern)",
          type: "—",
          description: "Self-contained dashboard pattern with KPIs, charts, credit limit visualization, and operations list. Mock data easily replaceable via props.",
        },
      ]}
      examples={[
        {
          title: "Dashboard Components",
          description: "Integrated UI and chart components used in the dashboard.",
          preview: (
            <div className="grid gap-3 md:grid-cols-3">
              <div className="p-3 rounded-lg border">
                <h4 className="font-medium text-sm mb-2">UI Components</h4>
                <ul className="text-xs space-y-1 text-muted-foreground">
                  <li>Card (containers)</li>
                  <li>Badge (status, trends)</li>
                  <li>Progress (credit utilization)</li>
                  <li>Alert (notifications)</li>
                </ul>
              </div>
              <div className="p-3 rounded-lg border">
                <h4 className="font-medium text-sm mb-2">Charts (Recharts)</h4>
                <ul className="text-xs space-y-1 text-muted-foreground">
                  <li>LineChart (monthly trend)</li>
                  <li>BarChart (operations by status)</li>
                  <li>Tooltip (hover info)</li>
                  <li>SafeChartContainer</li>
                </ul>
              </div>
              <div className="p-3 rounded-lg border">
                <h4 className="font-medium text-sm mb-2">Features</h4>
                <ul className="text-xs space-y-1 text-muted-foreground">
                  <li>Responsive grid (1/2/4 cols)</li>
                  <li>Dark mode adaptive</li>
                  <li>WCAG AA contrast</li>
                  <li>Conditional alerts</li>
                </ul>
              </div>
            </div>
          ),
          code: `// Integrates: Card, Badge, Progress, Alert, LineChart, BarChart`,
        },
      ]}
    />
  );
}
