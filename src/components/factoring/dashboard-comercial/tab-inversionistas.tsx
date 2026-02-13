import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "../../ui/card";
import { Badge } from "../../ui/badge";
import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  ResponsiveContainer,
  Legend,
} from "recharts";
import { DollarSign, TrendingUp, Wallet, FileText } from "lucide-react";
import {
  inversionistaTotal,
  inversionistas,
  formatCurrency,
  formatCurrencyFull,
} from "./mock-data";

const PIE_COLORS = ["#3b82f6", "#6366f1", "#8b5cf6"];

function InvestorTooltip({ active, payload }: any) {
  if (!active || !payload?.length) return null;
  const d = payload[0].payload;
  return (
    <div className="bg-popover border border-border rounded-lg shadow-lg p-3 text-sm">
      <p className="text-foreground mb-1">{d.nombre}</p>
      <p className="text-muted-foreground text-xs">
        FIU: {formatCurrencyFull(d.fiu)}
      </p>
    </div>
  );
}

const pieData = inversionistas.map((inv) => ({
  nombre: inv.nombre,
  fiu: inv.fiu,
}));

// Bar chart data
const barData = inversionistas.map((inv) => ({
  nombre: inv.nombre,
  disponible: inv.disponible,
  colocado: inv.fiu - inv.disponible,
}));

export function TabInversionistas() {
  const total = inversionistaTotal;

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center gap-3">
        <span className="inline-flex items-center px-4 py-1.5 rounded-full bg-blue-600 text-white text-sm">
          Inversionistas
        </span>
        <span className="text-sm text-muted-foreground">
          ¿Cómo va el uso de los fondos de los inversionistas?
        </span>
      </div>

      {/* Total summary card */}
      <Card>
        <CardContent className="p-6">
          <p className="text-xs text-muted-foreground mb-1">Total</p>
          <div className="flex flex-wrap items-baseline gap-2 mb-2">
            <span className="text-2xl tracking-tight">FIU {formatCurrency(total.fiu)}</span>
            <span className="text-muted-foreground">|</span>
            <span className="text-2xl tracking-tight">Dispo: {formatCurrency(total.disponible)}</span>
            <span className="text-muted-foreground">|</span>
            <span className="text-2xl tracking-tight">Recaudo este mes {formatCurrency(total.recaudoMes)}</span>
          </div>
          <p className="text-xs text-muted-foreground">
            {total.facturas} facturas, {total.operaciones} operaciones
          </p>
          <Badge className="mt-2 text-[10px]" style={{ backgroundColor: "#2563eb", color: "white", border: "none" }}>
            Total Operaciones Vigentes
          </Badge>
        </CardContent>
      </Card>

      {/* Distribution chart */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Distribución por Inversionista</CardTitle>
            <CardDescription>FIU total por fondo</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex items-center gap-6">
              <PieChart width={160} height={160}>
                <Pie
                  data={pieData}
                  cx="50%"
                  cy="50%"
                  innerRadius={45}
                  outerRadius={70}
                  dataKey="fiu"
                  nameKey="nombre"
                  strokeWidth={2}
                  stroke="var(--color-card)"
                >
                  {pieData.map((_, index) => (
                    <Cell key={`cell-${index}`} fill={PIE_COLORS[index % PIE_COLORS.length]} />
                  ))}
                </Pie>
                <Tooltip content={<InvestorTooltip />} />
              </PieChart>
              <div className="flex flex-col gap-3 flex-1">
                {inversionistas.map((inv, i) => (
                  <div key={inv.nombre} className="flex items-center gap-3">
                    <span
                      className="size-3 rounded-full shrink-0"
                      style={{ backgroundColor: PIE_COLORS[i % PIE_COLORS.length] }}
                    />
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between">
                        <span className="text-sm">{inv.nombre}</span>
                        <span className="text-sm">{formatCurrency(inv.fiu)}</span>
                      </div>
                      <div className="relative h-1.5 w-full overflow-hidden rounded-full bg-muted mt-1">
                        <div
                          className="h-full rounded-full transition-all"
                          style={{
                            width: `${(inv.fiu / total.fiu) * 100}%`,
                            backgroundColor: PIE_COLORS[i % PIE_COLORS.length],
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

        <Card>
          <CardHeader>
            <CardTitle>Colocado vs. Disponible</CardTitle>
            <CardDescription>Uso de fondos por inversionista</CardDescription>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={220}>
              <BarChart data={barData} layout="vertical" margin={{ top: 0, right: 10, left: 0, bottom: 0 }}>
                <CartesianGrid strokeDasharray="3 3" stroke="var(--color-border)" horizontal={false} />
                <XAxis
                  type="number"
                  tick={{ fill: "var(--color-muted-foreground)", fontSize: 12 }}
                  axisLine={false}
                  tickLine={false}
                  tickFormatter={(v) => formatCurrency(v)}
                />
                <YAxis
                  type="category"
                  dataKey="nombre"
                  tick={{ fill: "var(--color-muted-foreground)", fontSize: 12 }}
                  axisLine={false}
                  tickLine={false}
                  width={70}
                />
                <Tooltip
                  content={({ active, payload, label }) => {
                    if (!active || !payload?.length) return null;
                    return (
                      <div className="bg-popover border border-border rounded-lg shadow-lg p-3 text-sm">
                        <p className="text-foreground mb-1.5">{label}</p>
                        {payload.map((entry: any) => (
                          <div key={entry.dataKey} className="flex items-center gap-2 text-xs">
                            <span className="size-2.5 rounded-full shrink-0" style={{ backgroundColor: entry.color }} />
                            <span className="text-muted-foreground">{entry.name}:</span>
                            <span className="text-foreground">{formatCurrencyFull(entry.value)}</span>
                          </div>
                        ))}
                      </div>
                    );
                  }}
                />
                <Legend
                  wrapperStyle={{ fontSize: 12, paddingTop: 8 }}
                  iconType="circle"
                  iconSize={8}
                />
                <Bar
                  dataKey="colocado"
                  name="Colocado"
                  fill="#3b82f6"
                  stackId="a"
                  barSize={24}
                />
                <Bar
                  dataKey="disponible"
                  name="Disponible"
                  fill="#93c5fd"
                  stackId="a"
                  barSize={24}
                  radius={[0, 4, 4, 0]}
                />
              </BarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      </div>

      {/* Investor detail cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {inversionistas.map((inv, i) => (
          <Card key={inv.nombre}>
            <CardHeader className="pb-2">
              <div className="flex items-center gap-2">
                <span
                  className="size-3 rounded-full shrink-0"
                  style={{ backgroundColor: PIE_COLORS[i % PIE_COLORS.length] }}
                />
                <CardTitle className="text-base">{inv.nombre}</CardTitle>
              </div>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="grid grid-cols-2 gap-3">
                <div className="flex items-center gap-2">
                  <DollarSign className="size-3.5 text-muted-foreground" />
                  <div>
                    <p className="text-[10px] text-muted-foreground">FIU</p>
                    <p className="text-sm">{formatCurrency(inv.fiu)}</p>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <Wallet className="size-3.5 text-muted-foreground" />
                  <div>
                    <p className="text-[10px] text-muted-foreground">Disponible</p>
                    <p className="text-sm">{formatCurrency(inv.disponible)}</p>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <TrendingUp className="size-3.5 text-muted-foreground" />
                  <div>
                    <p className="text-[10px] text-muted-foreground">Recaudo Mes</p>
                    <p className="text-sm">{formatCurrency(inv.recaudoMes)}</p>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <FileText className="size-3.5 text-muted-foreground" />
                  <div>
                    <p className="text-[10px] text-muted-foreground">Operaciones</p>
                    <p className="text-sm">{inv.facturas} fact. / {inv.operaciones} ops</p>
                  </div>
                </div>
              </div>
              <div className="pt-2 border-t border-border">
                <div className="flex items-center justify-between text-xs">
                  <span className="text-muted-foreground">Rendimiento</span>
                  <span className="text-emerald-600">{inv.rendimiento}%</span>
                </div>
                <div className="flex items-center justify-between text-xs mt-1">
                  <span className="text-muted-foreground">Utilización</span>
                  <span>{((1 - inv.disponible / inv.fiu) * 100).toFixed(0)}%</span>
                </div>
                <div className="relative h-1.5 w-full overflow-hidden rounded-full bg-muted mt-1.5">
                  <div
                    className="h-full rounded-full bg-blue-500"
                    style={{ width: `${((1 - inv.disponible / inv.fiu) * 100)}%` }}
                  />
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
