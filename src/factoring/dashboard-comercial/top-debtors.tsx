import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "../../components/ui/card";
import { Badge } from "../../components/ui/badge";
import { topDebtors, formatCurrency, type Debtor } from "./mock-data";

function StatusBadge({ status }: { status: Debtor["status"] }) {
  const map = {
    on_track: { label: "En Línea", variant: "success-soft-outline" as const },
    watch: { label: "Vigilar", variant: "warning-soft-outline" as const },
    at_risk: { label: "En Riesgo", variant: "destructive-soft-outline" as const },
  };
  const config = map[status];
  return (
    <Badge variant={config.variant}>
      {config.label}
    </Badge>
  );
}

function getProgressColor(pct: number): string {
  if (pct >= 90) return "bg-red-500";
  if (pct >= 80) return "bg-yellow-500";
  return "bg-emerald-500";
}

export function TopDebtors() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Principales Deudores</CardTitle>
        <CardDescription>
          Concentración por deudor, utilización del límite y estado
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {topDebtors.map((debtor) => (
            <div
              key={debtor.name}
              className="flex flex-col gap-2 p-3 rounded-lg border border-border hover:bg-muted/30 transition-colors"
            >
              {/* Top row: name, sector badge, status */}
              <div className="flex items-center justify-between gap-2">
                <div className="flex items-center gap-2 min-w-0">
                  <span className="text-sm truncate">{debtor.name}</span>
                  <Badge variant="secondary" className="text-[10px] px-1.5 py-0">
                    {debtor.sector}
                  </Badge>
                </div>
                <StatusBadge status={debtor.status} />
              </div>

              {/* Progress bar */}
              <div className="flex items-center gap-3">
                <div className="flex-1">
                  <div className="relative h-2 w-full overflow-hidden rounded-full bg-muted">
                    <div
                      className={`h-full rounded-full transition-all ${getProgressColor(debtor.utilizationPct)}`}
                      style={{ width: `${debtor.utilizationPct}%` }}
                    />
                  </div>
                </div>
                <span className="text-xs text-muted-foreground whitespace-nowrap w-10 text-right">
                  {debtor.utilizationPct}%
                </span>
              </div>

              {/* Bottom row: metrics */}
              <div className="flex items-center gap-4 text-xs text-muted-foreground">
                <span>
                  Exposición: <span className="text-foreground">{formatCurrency(debtor.exposure)}</span>
                </span>
                <span>
                  Límite: <span className="text-foreground">{formatCurrency(debtor.limit)}</span>
                </span>
                <span>
                  Cobro: <span className={debtor.avgDaysToCollect > 40 ? "text-red-500" : "text-foreground"}>
                    {debtor.avgDaysToCollect}d
                  </span>
                </span>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}