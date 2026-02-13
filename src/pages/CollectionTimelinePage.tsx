import { ComponentShowcase } from "../components/ui/component-showcase";
import { CollectionTimeline } from "../components/factoring/CollectionTimeline";

const collectionTimelineCode = `import { CollectionTimeline } from "@/components/factoring/CollectionTimeline";

export function CollectionTimelineDemo() {
  const events = [
    { id: "1", type: "email", title: "Reminder sent", date: "Today", status: "completed" },
    { id: "2", type: "call", title: "Treasury call", date: "Yesterday", description: "Payment commitment for Friday", status: "completed", user: "Ana" },
    { id: "3", type: "payment", title: "Partial payment received", date: "3 days ago", status: "completed" },
    { id: "4", type: "system", title: "Invoice filed", date: "10 days ago" },
  ];

  return <CollectionTimeline events={events} />;
}`;

export function CollectionTimelinePage() {
  const events = [
    { id: "1", type: "email", title: "Reminder sent", date: "Today", status: "completed" },
    { id: "2", type: "call", title: "Treasury call", date: "Yesterday", description: "Payment commitment for Friday", status: "completed", user: "Ana" },
    { id: "3", type: "payment", title: "Partial payment received", date: "3 days ago", status: "completed" },
    { id: "4", type: "system", title: "Invoice filed", date: "10 days ago" },
  ];

  return (
    <ComponentShowcase
      title="Collection Timeline"
      description="Timeline for collection management tracking."
      category="Business Component"
      preview={
        <div className="w-full max-w-md border rounded-lg p-4 bg-background">
          <CollectionTimeline events={events} />
        </div>
      }
      code={collectionTimelineCode}
      props={[
        { name: "events", type: "TimelineEvent[]", description: "Array of collection events. Each event: id, type ('email'|'call'|'payment'|'dispute'|'system'), title, description, date, user, status ('completed'|'pending'|'failed').", required: true },
        { name: "className", type: "string", description: "Additional classes for the container." },
      ]}
      examples={[
        {
          title: "Management with dispute",
          description: "Timeline including a dispute event and failed payment.",
          preview: (
            <div className="w-full max-w-md border rounded-lg p-4 bg-background">
              <CollectionTimeline
                events={[
                  { id: "1", type: "email", title: "First collection notice", date: "15 days ago", status: "completed" },
                  { id: "2", type: "call", title: "Follow-up call", date: "10 days ago", description: "Client indicates disagreement with amount", status: "completed", user: "Carlos" },
                  { id: "3", type: "dispute", title: "Dispute opened", date: "7 days ago", description: "Discrepancy in invoiced quantities", status: "pending" },
                  { id: "4", type: "payment", title: "Payment rejected by bank", date: "3 days ago", status: "failed" },
                ]}
              />
            </div>
          ),
          code: `<CollectionTimeline
  events={[
    { id: "1", type: "email", title: "First notice", date: "15 days ago", status: "completed" },
    { id: "2", type: "call", title: "Follow-up", date: "10 days ago", status: "completed", user: "Carlos" },
    { id: "3", type: "dispute", title: "Dispute opened", date: "7 days ago", status: "pending" },
    { id: "4", type: "payment", title: "Payment rejected", date: "3 days ago", status: "failed" },
  ]}
/>`,
        },
      ]}
    />
  );
}