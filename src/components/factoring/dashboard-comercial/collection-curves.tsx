import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  Legend,
} from "recharts";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "../../ui/card";
import { collectionCurvesData } from "./mock-data";

const VINTAGE_COLORS: Record<string, string> = {
  oct2025: "#94a3b8",
  nov2025: "#f97316",
  dic2025: "#3b82f6",
  ene2026: "#22c55e",
};

const VINTAGE_LABELS: Record<string, string> = {
  oct2025: "Oct 2025",
  nov2025: "Nov 2025",
  dic2025: "Dic 2025",
  ene2026: "Ene 2026",
};

function CustomTooltip({ active, payload, label }: any) {
  if (!active || !payload?.length) return null;
  return (
    <div className="bg-popover border border-border rounded-lg shadow-lg p-3 text-sm">
      <p className="text-foreground mb-1.5">Día {label}</p>
      {payload
        .filter((p: any) => p.value != null)
        .map((entry: any) => (
          <div key={entry.dataKey} className="flex items-center gap-2 text-xs">
            <span
              className="size-2.5 rounded-full shrink-0"
              style={{ backgroundColor: entry.color }}
            />
            <span className="text-muted-foreground">{VINTAGE_LABELS[entry.dataKey]}:</span>
            <span className="text-foreground">{entry.value}%</span>
          </div>
        ))}
    </div>
  );
}

export function CollectionCurves() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Curvas de Cobranza (Vintage)</CardTitle>
        <CardDescription>
          Porcentaje cobrado por día desde compra — comparativo mensual
        </CardDescription>
      </CardHeader>
      <CardContent>
        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={collectionCurvesData} margin={{ top: 5, right: 10, left: 0, bottom: 0 }}>
            <CartesianGrid strokeDasharray="3 3" stroke="var(--color-border)" vertical={false} />
            <XAxis
              dataKey="day"
              tick={{ fill: "var(--color-muted-foreground)", fontSize: 12 }}
              axisLine={false}
              tickLine={false}
              label={{
                value: "Días desde compra",
                position: "insideBottomRight",
                offset: -5,
                fill: "var(--color-muted-foreground)",
                fontSize: 11,
              }}
            />
            <YAxis
              tick={{ fill: "var(--color-muted-foreground)", fontSize: 12 }}
              axisLine={false}
              tickLine={false}
              tickFormatter={(v) => `${v}%`}
              domain={[0, 100]}
            />
            <Tooltip content={<CustomTooltip />} />
            <Legend
              wrapperStyle={{ fontSize: 12, paddingTop: 8 }}
              iconType="circle"
              iconSize={8}
              formatter={(value: string) => VINTAGE_LABELS[value] || value}
            />
            {Object.entries(VINTAGE_COLORS).map(([key, color]) => (
              <Line
                key={key}
                type="monotone"
                dataKey={key}
                name={key}
                stroke={color}
                strokeWidth={2}
                dot={{ r: 3, fill: color }}
                connectNulls={false}
              />
            ))}
          </LineChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  );
}
