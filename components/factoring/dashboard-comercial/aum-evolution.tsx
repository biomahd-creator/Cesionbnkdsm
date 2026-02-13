import { useState } from "react";
import {
  Area,
  Bar,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
  ComposedChart,
  Legend,
} from "recharts";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "../../ui/card";
import { Tabs, TabsList, TabsTrigger } from "../../ui/tabs";
import { aumEvolutionData, formatCurrency, formatCurrencyFull } from "./mock-data";

type Period = "1M" | "3M" | "6M";

function filterByPeriod(period: Period) {
  switch (period) {
    case "1M":
      return aumEvolutionData.slice(-1);
    case "3M":
      return aumEvolutionData.slice(-3);
    case "6M":
    default:
      return aumEvolutionData;
  }
}

function CustomTooltip({ active, payload, label }: any) {
  if (!active || !payload?.length) return null;
  return (
    <div className="bg-popover border border-border rounded-lg shadow-lg p-3 text-sm">
      <p className="text-foreground mb-1.5">{label}</p>
      {payload.map((entry: any) => (
        <div key={entry.dataKey} className="flex items-center gap-2 text-xs">
          <span
            className="size-2.5 rounded-full shrink-0"
            style={{ backgroundColor: entry.color }}
          />
          <span className="text-muted-foreground">{entry.name}:</span>
          <span className="text-foreground">{formatCurrencyFull(entry.value)}</span>
        </div>
      ))}
    </div>
  );
}

export function AumEvolution() {
  const [period, setPeriod] = useState<Period>("6M");
  const data = filterByPeriod(period);

  return (
    <Card>
      <CardHeader className="flex-row items-center justify-between">
        <div>
          <CardTitle>Evolución del AUM</CardTitle>
          <CardDescription>
            AUM, compras y cobranzas mensuales
          </CardDescription>
        </div>
        <Tabs
          value={period}
          onValueChange={(v) => setPeriod(v as Period)}
        >
          <TabsList>
            <TabsTrigger value="1M">1M</TabsTrigger>
            <TabsTrigger value="3M">3M</TabsTrigger>
            <TabsTrigger value="6M">6M</TabsTrigger>
          </TabsList>
        </Tabs>
      </CardHeader>
      <CardContent>
        <ResponsiveContainer width="100%" height={300}>
          <ComposedChart data={data} margin={{ top: 5, right: 10, left: 0, bottom: 0 }}>
            <defs>
              <linearGradient id="aumGradient" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="var(--color-primary)" stopOpacity={0.15} />
                <stop offset="100%" stopColor="var(--color-primary)" stopOpacity={0.02} />
              </linearGradient>
            </defs>
            <CartesianGrid strokeDasharray="3 3" stroke="var(--color-border)" vertical={false} />
            <XAxis
              dataKey="month"
              tick={{ fill: "var(--color-muted-foreground)", fontSize: 12 }}
              axisLine={false}
              tickLine={false}
            />
            <YAxis
              tick={{ fill: "var(--color-muted-foreground)", fontSize: 12 }}
              axisLine={false}
              tickLine={false}
              tickFormatter={(v) => formatCurrency(v)}
            />
            <Tooltip content={<CustomTooltip />} />
            <Legend
              wrapperStyle={{ fontSize: 12, paddingTop: 8 }}
              iconType="circle"
              iconSize={8}
            />
            <Area
              type="monotone"
              dataKey="aum"
              name="AUM"
              stroke="var(--color-primary)"
              strokeWidth={2}
              fill="url(#aumGradient)"
            />
            <Bar
              dataKey="purchases"
              name="Compras"
              fill="#22c55e"
              barSize={18}
              radius={[3, 3, 0, 0]}
              opacity={0.8}
            />
            <Bar
              dataKey="collections"
              name="Cobranzas"
              fill="#3b82f6"
              barSize={18}
              radius={[3, 3, 0, 0]}
              opacity={0.8}
            />
          </ComposedChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  );
}
