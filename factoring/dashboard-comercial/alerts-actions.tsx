import { AlertTriangle, AlertCircle, Info, ChevronRight } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "../../components/ui/card";
import { Button } from "../../components/ui/button";
import { Badge } from "../../components/ui/badge";
import { Separator } from "../../components/ui/separator";
import { alerts, type Alert } from "./mock-data";

function AlertIcon({ type }: { type: Alert["type"] }) {
  switch (type) {
    case "critical":
      return (
        <div className="flex items-center justify-center size-8 rounded-lg bg-red-100 text-red-600 shrink-0">
          <AlertTriangle className="size-4" />
        </div>
      );
    case "warning":
      return (
        <div className="flex items-center justify-center size-8 rounded-lg bg-yellow-100 text-yellow-600 shrink-0">
          <AlertCircle className="size-4" />
        </div>
      );
    case "info":
      return (
        <div className="flex items-center justify-center size-8 rounded-lg bg-blue-100 text-blue-600 shrink-0">
          <Info className="size-4" />
        </div>
      );
  }
}

function TypeBadge({ type }: { type: Alert["type"] }) {
  const map = {
    critical: { label: "Crítico", variant: "destructive-soft-outline" as const },
    warning: { label: "Atención", variant: "warning-soft-outline" as const },
    info: { label: "Info", variant: "info-soft-outline" as const },
  };
  const config = map[type];
  return (
    <Badge variant={config.variant}>
      {config.label}
    </Badge>
  );
}

export function AlertsActions() {
  const criticalAlerts = alerts.filter((a) => a.type === "critical");
  const warningAlerts = alerts.filter((a) => a.type === "warning");
  const infoAlerts = alerts.filter((a) => a.type === "info");
  const sortedAlerts = [...criticalAlerts, ...warningAlerts, ...infoAlerts];

  return (
    <Card>
      <CardHeader className="flex-row items-center justify-between">
        <div>
          <CardTitle>Alertas y Acciones</CardTitle>
          <CardDescription>
            {criticalAlerts.length} críticas, {warningAlerts.length} atención, {infoAlerts.length} informativas
          </CardDescription>
        </div>
        <div className="flex items-center gap-2">
          <span className="flex items-center justify-center size-5 rounded-full bg-red-500 text-white text-[10px]">
            {criticalAlerts.length}
          </span>
          <span className="flex items-center justify-center size-5 rounded-full bg-yellow-500 text-white text-[10px]">
            {warningAlerts.length}
          </span>
        </div>
      </CardHeader>
      <CardContent>
        <div className="space-y-1">
          {sortedAlerts.map((alert, idx) => (
            <div key={alert.id}>
              <div className="flex items-start gap-3 py-3">
                <AlertIcon type={alert.type} />
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-0.5">
                    <span className="text-sm">{alert.title}</span>
                    <TypeBadge type={alert.type} />
                  </div>
                  <p className="text-xs text-muted-foreground leading-relaxed">
                    {alert.description}
                  </p>
                  <div className="flex items-center gap-3 mt-2">
                    <span className="text-[10px] text-muted-foreground">{alert.timestamp}</span>
                    {alert.actionLabel && (
                      <Button variant="link" size="sm" className="h-auto p-0 text-xs">
                        {alert.actionLabel}
                        <ChevronRight className="size-3 ml-0.5" />
                      </Button>
                    )}
                  </div>
                </div>
              </div>
              {idx < sortedAlerts.length - 1 && <Separator />}
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}