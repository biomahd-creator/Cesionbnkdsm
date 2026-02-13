import React from "react";
import { cn } from "../ui/utils";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { ScrollArea } from "../ui/scroll-area";
import { Separator } from "../ui/separator";

export interface ActivityItem {
  id: string;
  user: {
    name: string;
    avatar?: string;
    initials: string;
  };
  action: string;
  target?: string;
  timestamp: string;
  description?: string;
}

interface ActivityFeedProps extends React.HTMLAttributes<HTMLDivElement> {
  items: ActivityItem[];
}

export function ActivityFeed({ items, className, ...props }: ActivityFeedProps) {
  return (
    <div className={cn("flex flex-col", className)} {...props}>
      <h3 className="mb-4 text-sm font-medium text-muted-foreground uppercase tracking-wider">
        Actividad Reciente
      </h3>
      <ScrollArea className="h-[400px] pr-4">
        <div className="space-y-6">
          {items.map((item, index) => (
            <div key={item.id} className="relative pl-6 pb-2">
              {/* Timeline line */}
              {index !== items.length - 1 && (
                <div
                  className="absolute left-[11px] top-8 h-full w-[2px] bg-muted"
                  aria-hidden="true"
                />
              )}
              
              <div className="flex gap-4">
                <span className="absolute left-0 top-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full border bg-background z-10">
                   <div className="h-2 w-2 rounded-full bg-primary" />
                </span>
                
                <div className="flex flex-col gap-1">
                   <div className="flex items-center gap-2">
                     <Avatar className="h-6 w-6">
                       <AvatarImage src={item.user.avatar} />
                       <AvatarFallback className="text-[10px]">{item.user.initials}</AvatarFallback>
                     </Avatar>
                     <p className="text-sm font-medium leading-none">
                       {item.user.name}{" "}
                       <span className="font-normal text-muted-foreground">
                         {item.action}
                       </span>{" "}
                       {item.target && <span className="font-medium">{item.target}</span>}
                     </p>
                   </div>
                   
                   {item.description && (
                     <p className="text-sm text-muted-foreground mt-1">
                       {item.description}
                     </p>
                   )}
                   
                   <p className="text-xs text-muted-foreground mt-1">
                     {item.timestamp}
                   </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </ScrollArea>
    </div>
  );
}