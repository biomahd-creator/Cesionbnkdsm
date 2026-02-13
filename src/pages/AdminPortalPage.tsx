import { ComponentShowcase } from "../components/ui/component-showcase";
import { AdminPortal } from "../components/patterns/AdminPortal";

export function AdminPortalPage() {
  return (
    <ComponentShowcase
      title="Admin Portal"
      description="Internal management portal for factoring request approvals and operations. Includes role-based views, request queues, approval workflows, and administrative dashboards for monitoring platform activity."
      category="Patterns"
      preview={<AdminPortal />}
      code={`import { AdminPortal } from "@/components/patterns/AdminPortal";

<AdminPortal />`}
      props={[
        {
          name: "(pattern)",
          type: "—",
          description: "Self-contained pattern component. No external props required — manages its own state and layout.",
        },
      ]}
    />
  );
}
