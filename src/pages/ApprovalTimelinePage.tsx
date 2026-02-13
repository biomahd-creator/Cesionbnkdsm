import { ComponentShowcase } from "../components/ui/component-showcase";
import { ApprovalTimeline } from "../components/patterns/ApprovalTimeline";

const approvalTimelineCode = `import { ApprovalTimeline } from "@/components/patterns/ApprovalTimeline";

export function ApprovalTimelineDemo() {
  return <ApprovalTimeline />;
}`;

export function ApprovalTimelinePage() {
  return (
    <ComponentShowcase
      title="Approval Timeline"
      description="Visual timeline of multi-stage approval flow with states (approved, pending, rejected), icons, badges, and timestamps. Self-contained component with example data."
      category="Business Pattern"
      preview={<ApprovalTimeline />}
      code={approvalTimelineCode}
      props={[
        { name: "(self-contained)", type: "—", description: "Self-contained component. Approval steps are defined internally with states: approved, pending, rejected." },
      ]}
      examples={[
        {
          title: "Usage in operation detail",
          description: "Integrates within a factoring operation detail view.",
          preview: (
            <div className="text-center py-6 border rounded-lg">
              <p className="text-sm text-muted-foreground">Shows approval progress inside a detail Card.</p>
            </div>
          ),
          code: `import { ApprovalTimeline } from "@/components/patterns/ApprovalTimeline";

<Card>
  <CardHeader>
    <CardTitle>Operation OP-2024-051</CardTitle>
    <CardDescription>Factoring - North Logistics</CardDescription>
  </CardHeader>
  <CardContent>
    <ApprovalTimeline />
  </CardContent>
</Card>`,
        },
      ]}
    />
  );
}