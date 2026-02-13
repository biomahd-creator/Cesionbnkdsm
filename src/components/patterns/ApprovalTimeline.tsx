import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { Badge } from "../ui/badge";
import { Separator } from "../ui/separator";
import { Avatar, AvatarFallback } from "../ui/avatar";
import { CheckCircle, Clock, XCircle, AlertCircle } from "lucide-react";

const timelineEvents = [
  {
    id: 1,
    user: "John Smith",
    role: "Financial Analyst",
    action: "Invoice created",
    timestamp: "Jan 15, 2024, 10:30 AM",
    status: "completed" as const,
    comment: "Invoice entered into the system for review",
  },
  {
    id: 2,
    user: "Maria Garcia",
    role: "Supervisor",
    action: "Documentation verified",
    timestamp: "Jan 15, 2024, 02:15 PM",
    status: "completed" as const,
    comment: "All documents are complete and valid",
  },
  {
    id: 3,
    user: "Carlos Rodriguez",
    role: "Risk Analyst",
    action: "Credit analysis",
    timestamp: "Jan 16, 2024, 09:45 AM",
    status: "completed" as const,
    comment: "Credit score approved: 850/1000",
  },
  {
    id: 4,
    user: "Ana Martinez",
    role: "Commercial Manager",
    action: "Approval pending",
    timestamp: "Jan 16, 2024, 11:20 AM",
    status: "pending" as const,
    comment: "Final review before approval",
  },
  {
    id: 5,
    user: "System",
    role: "Automated",
    action: "Disbursement scheduled",
    timestamp: "Pending",
    status: "waiting" as const,
    comment: "Will execute after final approval",
  },
];

const statusConfig = {
  completed: {
    icon: CheckCircle,
    color: "text-green-500",
    bg: "bg-green-500/10",
    badge: "default" as const,
  },
  pending: {
    icon: Clock,
    color: "text-yellow-500",
    bg: "bg-yellow-500/10",
    badge: "secondary" as const,
  },
  waiting: {
    icon: AlertCircle,
    color: "text-muted-foreground",
    bg: "bg-muted",
    badge: "outline" as const,
  },
  rejected: {
    icon: XCircle,
    color: "text-red-500",
    bg: "bg-red-500/10",
    badge: "destructive" as const,
  },
};

export function ApprovalTimeline() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Approval Timeline — INV-001</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="relative space-y-6">
          {/* Vertical Line */}
          <div className="absolute left-5 top-0 bottom-0 w-0.5 bg-border" />

          {timelineEvents.map((event, index) => {
            const config = statusConfig[event.status];
            const Icon = config.icon;

            return (
              <div key={event.id} className="relative flex gap-6">
                {/* Icon */}
                <div
                  className={`relative z-10 flex h-10 w-10 items-center justify-center rounded-full border-2 border-background ${config.bg}`}
                >
                  <Icon className={`h-5 w-5 ${config.color}`} />
                </div>

                {/* Content */}
                <div className="flex-1 space-y-2 pb-6">
                  <div className="flex items-start justify-between gap-4">
                    <div className="space-y-1">
                      <div className="flex items-center gap-2">
                        <p className="font-medium">{event.action}</p>
                        <Badge variant={config.badge} className="text-xs">
                          {event.status === "completed"
                            ? "Completed"
                            : event.status === "pending"
                            ? "Pending"
                            : "Waiting"}
                        </Badge>
                      </div>
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <Avatar className="h-6 w-6">
                          <AvatarFallback className="text-xs">
                            {event.user
                              .split(" ")
                              .map((n) => n[0])
                              .join("")}
                          </AvatarFallback>
                        </Avatar>
                        <span>{event.user}</span>
                        <Separator orientation="vertical" className="h-4" />
                        <span>{event.role}</span>
                      </div>
                    </div>
                    <time className="text-xs text-muted-foreground whitespace-nowrap">
                      {event.timestamp}
                    </time>
                  </div>

                  <p className="text-sm text-muted-foreground">
                    {event.comment}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </CardContent>
    </Card>
  );
}