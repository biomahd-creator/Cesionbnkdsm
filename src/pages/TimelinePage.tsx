import * as React from "react";
import { Badge } from "../components/ui/badge";
import { Button } from "../components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../components/ui/card";
import { Separator } from "../components/ui/separator";
import { Avatar, AvatarFallback, AvatarImage } from "../components/ui/avatar";
import { 
  Timeline, 
  TimelineItem, 
  TimelineConnector, 
  TimelineIcon, 
  TimelineContent, 
  TimelineHeader, 
  TimelineTitle, 
  TimelineDescription,
  TimelineTime 
} from "../components/advanced/Timeline";
import { 
  CheckCircle2, 
  Circle, 
  Clock, 
  GitCommit, 
  GitPullRequest, 
  MessageSquare, 
  Package, 
  UserPlus 
} from "lucide-react";

export function TimelinePage() {
  return (
    <div className="space-y-8">
      <div>
        <div className="flex items-center gap-3 mb-2">
          <h2 className="text-2xl font-medium">Timeline</h2>
          <Badge>Advanced</Badge>
          <Badge variant="outline" className="border-green-500 text-green-500">New</Badge>
        </div>
        <p className="text-muted-foreground">
          A vertical display of events, activity, or history.
        </p>
      </div>

      <Separator />

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Activity Feed */}
        <Card>
          <CardHeader>
            <CardTitle>Activity Feed</CardTitle>
            <CardDescription>
              Recent actions and updates from your team.
            </CardDescription>
          </CardHeader>
          <CardContent>
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
                {/* Last item usually doesn't need a connector extending down, unless the timeline continues */}
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
          </CardContent>
        </Card>

        {/* Project History */}
        <Card>
          <CardHeader>
            <CardTitle>Order History</CardTitle>
            <CardDescription>
              Tracking status for order #ORD-7721
            </CardDescription>
          </CardHeader>
          <CardContent>
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
                  <TimelineDescription>
                    Driver is on the way.
                  </TimelineDescription>
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
                  <TimelineDescription>
                    Package has left the facility.
                  </TimelineDescription>
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
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
