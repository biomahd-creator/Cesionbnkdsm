import React from "react";
import { cn } from "../../lib/utils";
import { CheckCircle2, Circle, Clock, AlertTriangle, FileText, Phone, Mail } from "lucide-react";
import { Badge } from "../ui/badge";
import { ScrollArea } from "../ui/scroll-area";

export interface TimelineEvent {
  id: string;
  type: "email" | "call" | "payment" | "dispute" | "system";
  title: string;
  description?: string;
  date: string;
  user?: string;
  status?: "completed" | "pending" | "failed";
}

interface CollectionTimelineProps {
  events: TimelineEvent[];
  className?: string;
}

const iconMap = {
  email: Mail,
  call: Phone,
  payment: FileText,
  dispute: AlertTriangle,
  system: Circle,
};

const statusColorMap = {
  completed: "text-green-500",
  pending: "text-blue-500",
  failed: "text-red-500",
};

export function CollectionTimeline({ events, className }: CollectionTimelineProps) {
  return (
    <div className={cn("relative", className)}>
      <div className="absolute left-6 top-0 bottom-0 w-px bg-border" />
      
      <ScrollArea className="h-[500px] pr-4">
        <div className="space-y-8 py-2">
          {events.map((event) => {
            const Icon = iconMap[event.type] || Circle;
            const statusColor = event.status ? statusColorMap[event.status] : "text-muted-foreground";

            return (
              <div key={event.id} className="relative pl-14 group">
                {/* Icon wrapper */}
                <div className={cn(
                  "absolute left-2 top-0 flex h-8 w-8 items-center justify-center rounded-full border bg-background transition-colors group-hover:border-primary",
                  statusColor
                )}>
                  <Icon className="h-4 w-4" />
                </div>

                <div className="flex flex-col gap-1">
                  <div className="flex items-center justify-between">
                    <h4 className="text-sm font-semibold">{event.title}</h4>
                    <span className="text-xs text-muted-foreground tabular-nums">
                      {event.date}
                    </span>
                  </div>
                  
                  {event.description && (
                    <p className="text-sm text-muted-foreground">
                      {event.description}
                    </p>
                  )}
                  
                  {event.user && (
                    <div className="flex items-center gap-2 mt-1">
                      <span className="text-xs text-muted-foreground/80 bg-muted px-2 py-0.5 rounded-full">
                        {event.user}
                      </span>
                      {event.type === 'dispute' && (
                        <Badge variant="destructive-soft-outline" className="h-5 text-[10px]">
                          Disputa
                        </Badge>
                      )}
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </ScrollArea>
    </div>
  );
}
