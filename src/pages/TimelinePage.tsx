import { ComponentShowcase } from "../components/ui/component-showcase";
import { Badge } from "../components/ui/badge";
import {
  Timeline,
  TimelineItem,
  TimelineConnector,
  TimelineIcon,
  TimelineContent,
  TimelineHeader,
  TimelineTitle,
  TimelineDescription,
  TimelineTime,
} from "../components/advanced/Timeline";
import {
  CheckCircle2,
  Circle,
  GitPullRequest,
  MessageSquare,
  Package,
  UserPlus,
} from "lucide-react";

export function TimelinePage() {
  return (
    <ComponentShowcase
      title="Timeline"
      description="A vertical display of events, activity, or history. Composed of TimelineItem, TimelineIcon, TimelineContent, and TimelineConnector sub-components. Use it for activity feeds, order tracking, approval workflows, and audit logs."
      category="Advanced"
      preview={
        <Timeline>
          <TimelineItem>
            <TimelineConnector />
            <TimelineIcon className="bg-primary/10 border-primary/20">
              <UserPlus className="h-5 w-5 text-primary" />
            </TimelineIcon>
            <TimelineContent>
              <TimelineHeader>
                <TimelineTitle>New teammate joined</TimelineTitle>
                <TimelineTime>Just now</TimelineTime>
              </TimelineHeader>
              <TimelineDescription>
                <span className="font-medium text-foreground">Sarah Connor</span> joined the design team.
              </TimelineDescription>
            </TimelineContent>
          </TimelineItem>

          <TimelineItem>
            <TimelineConnector />
            <TimelineIcon className="bg-orange-500/10 border-orange-500/20">
              <GitPullRequest className="h-5 w-5 text-orange-500" />
            </TimelineIcon>
            <TimelineContent>
              <TimelineHeader>
                <TimelineTitle>PR #42 Merged</TimelineTitle>
                <TimelineTime>2 hours ago</TimelineTime>
              </TimelineHeader>
              <TimelineDescription>
                Fix authentication flow edge cases.
              </TimelineDescription>
              <div className="mt-2 flex items-center gap-2">
                <Badge variant="secondary" className="font-mono text-xs">feat/auth-fix</Badge>
              </div>
            </TimelineContent>
          </TimelineItem>

          <TimelineItem>
            <TimelineConnector />
            <TimelineIcon className="bg-blue-500/10 border-blue-500/20">
              <MessageSquare className="h-5 w-5 text-blue-500" />
            </TimelineIcon>
            <TimelineContent>
              <TimelineHeader>
                <TimelineTitle>New Comment</TimelineTitle>
                <TimelineTime>5 hours ago</TimelineTime>
              </TimelineHeader>
              <TimelineDescription>
                <span className="font-medium text-foreground">Alex</span> commented on <span className="font-medium text-foreground">Design System</span> task.
              </TimelineDescription>
              <div className="mt-2 p-3 bg-muted rounded-md text-sm italic">
                "Looks great! Just check the contrast ratio on dark mode."
              </div>
            </TimelineContent>
          </TimelineItem>

          <TimelineItem>
            <TimelineIcon className="bg-green-500/10 border-green-500/20">
              <Package className="h-5 w-5 text-green-500" />
            </TimelineIcon>
            <TimelineContent>
              <TimelineHeader>
                <TimelineTitle>Release v2.0.0</TimelineTitle>
                <TimelineTime>Yesterday</TimelineTime>
              </TimelineHeader>
              <TimelineDescription>
                Major version release with new features.
              </TimelineDescription>
            </TimelineContent>
          </TimelineItem>
        </Timeline>
      }
      code={`import {
  Timeline, TimelineItem, TimelineConnector,
  TimelineIcon, TimelineContent, TimelineHeader,
  TimelineTitle, TimelineDescription, TimelineTime,
} from "@/components/advanced/Timeline";
import { UserPlus } from "lucide-react";

<Timeline>
  <TimelineItem>
    <TimelineConnector />
    <TimelineIcon className="bg-primary/10 border-primary/20">
      <UserPlus className="h-5 w-5 text-primary" />
    </TimelineIcon>
    <TimelineContent>
      <TimelineHeader>
        <TimelineTitle>Event Title</TimelineTitle>
        <TimelineTime>Just now</TimelineTime>
      </TimelineHeader>
      <TimelineDescription>
        Description of the event.
      </TimelineDescription>
    </TimelineContent>
  </TimelineItem>
</Timeline>`}
      props={[
        {
          name: "children",
          type: "ReactNode",
          description: "TimelineItem elements to render inside the timeline.",
          required: true,
        },
        {
          name: "className",
          type: "string",
          description: "Additional CSS classes for the timeline container.",
        },
      ]}
      examples={[
        {
          title: "Order Tracking",
          description: "Status timeline for tracking delivery of order #ORD-7721.",
          preview: (
            <Timeline className="pl-2">
              <TimelineItem className="pb-10">
                <div className="absolute left-[19px] top-10 bottom-0 w-px bg-primary" />
                <TimelineIcon className="bg-primary text-secondary border-primary">
                  <CheckCircle2 className="h-5 w-5" />
                </TimelineIcon>
                <TimelineContent>
                  <TimelineHeader>
                    <TimelineTitle className="text-primary">Order Delivered</TimelineTitle>
                    <TimelineTime className="text-primary font-medium">Oct 24, 14:30</TimelineTime>
                  </TimelineHeader>
                  <TimelineDescription className="text-foreground">
                    Package received by customer.
                  </TimelineDescription>
                </TimelineContent>
              </TimelineItem>

              <TimelineItem className="pb-10">
                <div className="absolute left-[19px] top-10 bottom-0 w-px bg-primary" />
                <TimelineIcon className="bg-primary text-secondary border-primary">
                  <CheckCircle2 className="h-5 w-5" />
                </TimelineIcon>
                <TimelineContent>
                  <TimelineHeader>
                    <TimelineTitle>Out for Delivery</TimelineTitle>
                    <TimelineTime>Oct 24, 08:15</TimelineTime>
                  </TimelineHeader>
                  <TimelineDescription>Driver is on the way.</TimelineDescription>
                </TimelineContent>
              </TimelineItem>

              <TimelineItem className="pb-10">
                <div className="absolute left-[19px] top-10 bottom-0 w-px bg-border" />
                <TimelineIcon className="bg-background text-muted-foreground">
                  <Circle className="h-5 w-5 fill-current" />
                </TimelineIcon>
                <TimelineContent>
                  <TimelineHeader>
                    <TimelineTitle>Shipped</TimelineTitle>
                    <TimelineTime>Oct 23, 18:00</TimelineTime>
                  </TimelineHeader>
                  <TimelineDescription>Package has left the facility.</TimelineDescription>
                </TimelineContent>
              </TimelineItem>

              <TimelineItem>
                <TimelineIcon className="bg-background text-muted-foreground">
                  <Circle className="h-5 w-5" />
                </TimelineIcon>
                <TimelineContent>
                  <TimelineHeader>
                    <TimelineTitle>Order Confirmed</TimelineTitle>
                    <TimelineTime>Oct 22, 10:45</TimelineTime>
                  </TimelineHeader>
                  <TimelineDescription>
                    Payment verified and order processing started.
                  </TimelineDescription>
                </TimelineContent>
              </TimelineItem>
            </Timeline>
          ),
          code: `<Timeline className="pl-2">
  <TimelineItem className="pb-10">
    <TimelineIcon className="bg-primary text-secondary border-primary">
      <CheckCircle2 className="h-5 w-5" />
    </TimelineIcon>
    <TimelineContent>
      <TimelineHeader>
        <TimelineTitle className="text-primary">Order Delivered</TimelineTitle>
        <TimelineTime>Oct 24, 14:30</TimelineTime>
      </TimelineHeader>
    </TimelineContent>
  </TimelineItem>
  {/* ... more items */}
</Timeline>`,
        },
      ]}
    />
  );
}
