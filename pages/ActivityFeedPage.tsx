import { ComponentShowcase } from "../components/ui/component-showcase";
import { ActivityFeed } from "../components/patterns/ActivityFeed";

const code = `import { ActivityFeed } from "@/components/patterns/ActivityFeed";

export function ActivityFeedDemo() {
  return (
    <ActivityFeed 
      items={[
        { id: "1", user: { name: "Ana Garcia", initials: "AG" }, action: "created invoice", target: "INV-001", timestamp: "5 min ago" },
        { id: "2", user: { name: "Carlos Ruiz", initials: "CR" }, action: "commented on", target: "Monthly Report", timestamp: "1 hour ago", description: "Great work on the charts." },
        { id: "3", user: { name: "System", initials: "SYS" }, action: "updated status of", target: "Payment #452", timestamp: "2 hours ago" },
      ]}
    />
  );
}`;

export function ActivityFeedPage() {
  return (
    <ComponentShowcase
      title="Activity Feed"
      description="User and system activity timeline."
      category="Business Pattern"
      preview={
        <ActivityFeed 
          items={[
            { id: "1", user: { name: "Ana Garcia", initials: "AG" }, action: "created invoice", target: "INV-001", timestamp: "5 min ago" },
            { id: "2", user: { name: "Carlos Ruiz", initials: "CR" }, action: "commented on", target: "Monthly Report", timestamp: "1 hour ago", description: "Great work on the charts." },
            { id: "3", user: { name: "System", initials: "SYS" }, action: "updated status of", target: "Payment #452", timestamp: "2 hours ago" },
          ]}
        />
      }
      code={code}
      props={[
        { name: "items", type: "ActivityItem[]", description: "Array of activities. Each item has: user (name, avatar, initials), action, target, timestamp, description.", required: true },
        { name: "className", type: "string", description: "Additional classes for the root container." },
      ]}
      examples={[
        {
          title: "Feed with descriptions",
          description: "Activities with additional detail text.",
          preview: (
            <ActivityFeed
              items={[
                { id: "1", user: { name: "Maria Lopez", initials: "ML" }, action: "approved", target: "Operation OP-2024-051", timestamp: "10 min ago", description: "Final approval from risk committee." },
                { id: "2", user: { name: "Roberto Mendez", initials: "RM" }, action: "rejected", target: "Invoice FV-8810", timestamp: "30 min ago", description: "Incomplete documentation. Chamber of commerce certificate required." },
              ]}
            />
          ),
          code: `<ActivityFeed
  items={[
    {
      id: "1",
      user: { name: "Maria Lopez", initials: "ML" },
      action: "approved",
      target: "Operation OP-2024-051",
      timestamp: "10 min ago",
      description: "Final approval from risk committee."
    },
    {
      id: "2",
      user: { name: "Roberto Mendez", initials: "RM" },
      action: "rejected",
      target: "Invoice FV-8810",
      timestamp: "30 min ago",
      description: "Incomplete documentation."
    },
  ]}
/>`,
        },
        {
          title: "System Feed",
          description: "System-only automated events.",
          preview: (
            <ActivityFeed
              items={[
                { id: "1", user: { name: "System", initials: "SYS" }, action: "generated report for", target: "Portfolio January 2026", timestamp: "1 hour ago" },
                { id: "2", user: { name: "Cron Job", initials: "CJ" }, action: "ran reconciliation for", target: "National Bank", timestamp: "4 hours ago" },
                { id: "3", user: { name: "System", initials: "SYS" }, action: "sent reminder to", target: "5 overdue clients", timestamp: "Yesterday" },
              ]}
            />
          ),
          code: `<ActivityFeed
  items={[
    { id: "1", user: { name: "System", initials: "SYS" }, action: "generated report for", target: "Portfolio January", timestamp: "1 hour ago" },
    { id: "2", user: { name: "Cron Job", initials: "CJ" }, action: "ran reconciliation for", target: "National Bank", timestamp: "4 hours ago" },
  ]}
/>`,
        },
      ]}
    />
  );
}