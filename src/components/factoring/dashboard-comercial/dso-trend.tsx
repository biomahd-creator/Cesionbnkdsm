import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  ReferenceLine,
  Legend,
} from "recharts";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "../../ui/card";
import { dsoTrendData } from "./mock-data";

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
          <span className="text-foreground">{entry.value} días</span>
        </div>
      ))}
    </div>
  );
}

export function DsoTrend() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Tendencia DSO</CardTitle>
        <CardDescription>
          Días promedio de cobro vs. target mensual
        </CardDescription>
      </CardHeader>
      <CardContent>
        <ResponsiveContainer width="100%" height={250}>
          <LineChart data={dsoTrendData} margin={{ top: 5, right: 10, left: 0, bottom: 0 }}>
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
              domain={[25, 50]}
              tickFormatter={(v) => `${v}d`}
            />
            <Tooltip content={<CustomTooltip />} />
            <Legend
              wrapperStyle={{ fontSize: 12, paddingTop: 8 }}
              iconType="circle"
              iconSize={8}
            />
            <ReferenceLine
              y={35}
              stroke="#22c55e"
              strokeDasharray="6 3"
              strokeOpacity={0.5}
            />
            <Line
              type="monotone"
              dataKey="dso"
              name="DSO Real"
              stroke="var(--color-primary)"
              strokeWidth={2.5}
              dot={{ r: 4, fill: "var(--color-primary)" }}
            />
            <Line
              type="monotone"
              dataKey="target"
              name="Target"
              stroke="#22c55e"
              strokeWidth={1.5}
              strokeDasharray="6 3"
              dot={false}
            />
          </LineChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  );
}
