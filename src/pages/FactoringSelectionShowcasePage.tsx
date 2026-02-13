import { ComponentShowcase } from "../components/ui/component-showcase";
import { FactoringSelectionPage } from "../components/patterns/factoring/FactoringSelectionPage";
import { CheckCircle2, Sparkles } from "lucide-react";

export function FactoringSelectionShowcasePage() {
  return (
    <ComponentShowcase
      title="Factoring Selection"
      description="Complete invoice selection flow with credit limit validation, real-time advance calculation, and interactive KPIs. Features filterable KPI tabs by invoice status, smart selection algorithm that maximizes credit utilization, real-time visual blocking when credit is exceeded, and master-detail accordions by payor for large datasets. Optimized for 500+ invoices with memoized calculations."
      category="Factoring"
      preview={<FactoringSelectionPage />}
      code={`import { FactoringSelectionPage } from "@/components/patterns/factoring/FactoringSelectionPage";

// Render as full page
<FactoringSelectionPage />

// Business logic:
// Net advance = Sum(Amount) - Sum(Amount * Rate%)
// Credit validation: (Selected + New) > Available → blocked`}
      props={[
        {
          name: "(pattern)",
          type: "—",
          description: "Self-contained selection flow. Manages own state internally. For production, connect with React Query or Context for data persistence.",
        },
      ]}
      examples={[
        {
          title: "Key Features",
          description: "Interactive features and performance optimizations in the selection flow.",
          preview: (
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-3">
                <h4 className="font-medium text-sm flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-primary" />
                  Features
                </h4>
                <ul className="space-y-1.5 text-xs text-muted-foreground">
                  <li className="flex gap-2"><span className="text-primary">-</span><span><strong>Interactive KPIs:</strong> Filterable tabs for invoice states</span></li>
                  <li className="flex gap-2"><span className="text-primary">-</span><span><strong>Smart Selection:</strong> Maximizes credit usage prioritizing large invoices</span></li>
                  <li className="flex gap-2"><span className="text-primary">-</span><span><strong>Real-time Validation:</strong> Immediate visual blocking on credit overflow</span></li>
                  <li className="flex gap-2"><span className="text-primary">-</span><span><strong>Master-Detail:</strong> Payor accordions for managing large data volumes</span></li>
                </ul>
              </div>
              <div className="space-y-3">
                <h4 className="font-medium text-sm flex items-center gap-2">
                  <Sparkles className="h-4 w-4 text-primary" />
                  Performance
                </h4>
                <ul className="space-y-1.5 text-xs text-muted-foreground">
                  <li className="flex gap-2"><span className="text-primary">-</span><span><strong>Virtualization:</strong> Optimized lists for 500+ invoices</span></li>
                  <li className="flex gap-2"><span className="text-primary">-</span><span><strong>Memoized Calculations:</strong> useMemo for global totals</span></li>
                  <li className="flex gap-2"><span className="text-primary">-</span><span><strong>Local Filters:</strong> Instant client-side search and sorting</span></li>
                </ul>
              </div>
            </div>
          ),
          code: `// Net = Sum(Amount) - Sum(Amount * Rate%)
// Credit: (Selected + New) > Available → visual block`,
        },
      ]}
    />
  );
}
