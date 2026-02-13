import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
} from "recharts";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "../../ui/card";
import { sectorConcentration, formatCurrencyFull } from "./mock-data";

const COLORS = ["var(--color-primary)", "#3b82f6", "#94a3b8"];

function CustomTooltip({ active, payload }: any) {
  if (!active || !payload?.length) return null;
  const d = payload[0].payload;
  return (
    <div className="bg-popover border border-border rounded-lg shadow-lg p-3 text-sm">
      <p className="text-foreground mb-1">{d.sector}</p>
      <p className="text-muted-foreground text-xs">
        {formatCurrencyFull(d.amount)} ({d.percentage}%)
      </p>
    </div>
  );
}

export function SectorConcentration() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Concentración por Sector</CardTitle>
        <CardDescription>
          Distribución del portafolio por industria
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="flex items-center gap-6">
          <PieChart width={160} height={160}>
            <Pie
              data={sectorConcentration}
              cx="50%"
              cy="50%"
              innerRadius={45}
              outerRadius={70}
              dataKey="amount"
              strokeWidth={2}
              stroke="var(--color-card)"
            >
              {sectorConcentration.map((_, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
              ))}
            </Pie>
            <Tooltip content={<CustomTooltip />} />
          </PieChart>
          <div className="flex flex-col gap-3 flex-1">
            {sectorConcentration.map((item, i) => (
              <div key={item.sector} className="flex items-center gap-3">
                <span
                  className="size-3 rounded-full shrink-0"
                  style={{ backgroundColor: COLORS[i % COLORS.length] }}
                />
                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between">
                    <span className="text-sm">{item.sector}</span>
                    <span className="text-sm">{item.percentage}%</span>
                  </div>
                  <div className="relative h-1.5 w-full overflow-hidden rounded-full bg-muted mt-1">
                    <div
                      className="h-full rounded-full transition-all"
                      style={{
                        width: `${item.percentage}%`,
                        backgroundColor: COLORS[i % COLORS.length],
                      }}
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
