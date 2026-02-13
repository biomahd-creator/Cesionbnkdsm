import {
  TrendingUp,
  TrendingDown,
  Users,
  Clock,
  Target,
  Activity,
  DollarSign,
} from "lucide-react";
import { Card, CardContent } from "../../ui/card";
import { kpiData, formatCurrency } from "./mock-data";

interface KpiCardProps {
  title: string;
  value: string;
  change?: string;
  changeType?: "positive" | "negative" | "neutral";
  subtitle?: string;
  icon: React.ReactNode;
}

function KpiCard({ title, value, change, changeType = "neutral", subtitle, icon }: KpiCardProps) {
  return (
    <Card className="gap-0 p-4">
      <CardContent className="p-0">
        <div className="flex items-start justify-between">
          <div className="flex flex-col gap-1">
            <span className="text-muted-foreground text-xs">{title}</span>
            <span className="text-2xl tracking-tight">{value}</span>
            <div className="flex items-center gap-1.5 mt-0.5">
              {change && (
                <span
                  className={`inline-flex items-center gap-0.5 text-xs ${
                    changeType === "positive"
                      ? "text-emerald-600"
                      : changeType === "negative"
                        ? "text-red-500"
                        : "text-muted-foreground"
                  }`}
                >
                  {changeType === "positive" ? (
                    <TrendingUp className="size-3" />
                  ) : changeType === "negative" ? (
                    <TrendingDown className="size-3" />
                  ) : null}
                  {change}
                </span>
              )}
              {subtitle && (
                <span className="text-muted-foreground text-xs">{subtitle}</span>
              )}
            </div>
          </div>
          <div className="flex items-center justify-center size-9 rounded-lg bg-muted text-muted-foreground">
            {icon}
          </div>
        </div>
      </CardContent>
    </Card>
  );
}

export function KpiCards() {
  const cards: KpiCardProps[] = [
    {
      title: "AUM Total",
      value: formatCurrency(kpiData.totalAUM),
      change: `+${kpiData.aumChange}%`,
      changeType: "positive",
      subtitle: "vs. mes anterior",
      icon: <DollarSign className="size-4" />,
    },
    {
      title: "Clientes Activos",
      value: kpiData.activeClients.toString(),
      change: `+${kpiData.clientsChange}`,
      changeType: "positive",
      subtitle: "este mes",
      icon: <Users className="size-4" />,
    },
    {
      title: "Días Promedio Cobro",
      value: `${kpiData.avgDaysToCollect}d`,
      change: `Target: ${kpiData.daysTarget}d`,
      changeType: kpiData.avgDaysToCollect <= kpiData.daysTarget ? "positive" : "negative",
      icon: <Clock className="size-4" />,
    },
    {
      title: "Eficiencia Cobranza",
      value: `${kpiData.collectionEfficiency}%`,
      change: `+${kpiData.efficiencyChange}%`,
      changeType: "positive",
      subtitle: "vs. mes anterior",
      icon: <Target className="size-4" />,
    },
    {
      title: "Tasa de Dilución",
      value: `${kpiData.dilutionRate}%`,
      change: `${kpiData.dilutionChange}%`,
      changeType: kpiData.dilutionChange < 0 ? "positive" : "negative",
      subtitle: "vs. mes anterior",
      icon: <Activity className="size-4" />,
    },
    {
      title: "Yield Actual",
      value: `${kpiData.yieldActual}%`,
      change: `Esperado: ${kpiData.yieldExpected}%`,
      changeType: kpiData.yieldActual >= kpiData.yieldExpected ? "positive" : "neutral",
      icon: <TrendingUp className="size-4" />,
    },
  ];

  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
      {cards.map((card) => (
        <KpiCard key={card.title} {...card} />
      ))}
    </div>
  );
}
