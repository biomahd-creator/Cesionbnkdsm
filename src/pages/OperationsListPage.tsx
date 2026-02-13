import { ComponentShowcase } from "../components/ui/component-showcase";
import { OperationsList } from "../components/factoring/OperationsList";

export function OperationsListPage() {
  return (
    <ComponentShowcase
      title="Operations List"
      description="Complete factoring operations table with real-time search, status filters (Creada, En Proceso, Negociada, Endosada, Liquidada, Rechazada), pagination (5 per page), per-row conditional action dropdowns, and auto-calculated stats cards. Responsive with horizontal scroll on mobile and optimized filtering."
      category="Factoring"
      preview={<OperationsList />}
      code={`import { OperationsList } from "@/components/factoring/OperationsList";

<OperationsList />`}
      props={[
        {
          name: "(pattern)",
          type: "—",
          description: "Self-contained data table pattern. Manages filtering, search, pagination, and actions internally. Mock data easily replaceable with API.",
        },
      ]}
      examples={[
        {
          title: "Key Features",
          description: "Built-in capabilities of the operations list.",
          preview: (
            <div className="grid gap-3 md:grid-cols-3">
              <div className="p-3 rounded-lg border">
                <h4 className="font-medium text-sm mb-2">Search & Filter</h4>
                <ul className="text-xs space-y-1 text-muted-foreground">
                  <li>Real-time search by ID, client, RUT</li>
                  <li>Status dropdown with 6 states</li>
                  <li>Pagination (5 items/page)</li>
                  <li>Empty state when no results</li>
                </ul>
              </div>
              <div className="p-3 rounded-lg border">
                <h4 className="font-medium text-sm mb-2">Actions</h4>
                <ul className="text-xs space-y-1 text-muted-foreground">
                  <li>View, Edit, Download PDF</li>
                  <li>Approve / Reject (En Proceso)</li>
                  <li>Endorse (Negociada)</li>
                  <li>Conditional per status</li>
                </ul>
              </div>
              <div className="p-3 rounded-lg border">
                <h4 className="font-medium text-sm mb-2">Display</h4>
                <ul className="text-xs space-y-1 text-muted-foreground">
                  <li>Color-coded status badges</li>
                  <li>Row hover effects</li>
                  <li>4 auto-calculated stats cards</li>
                  <li>Responsive horizontal scroll</li>
                </ul>
              </div>
            </div>
          ),
          code: `// Integrates: Card, Input, Select, Badge, DropdownMenu, Table`,
        },
      ]}
    />
  );
}
