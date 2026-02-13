import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "../../ui/card";
import { Badge } from "../../ui/badge";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  Legend,
  Line,
  ComposedChart,
  Area,
} from "recharts";
import { DollarSign, TrendingUp, AlertTriangle, CheckCircle } from "lucide-react";
import {
  tesoreriaData,
  tesoreriaEvolucion,
  formatCurrency,
  formatCurrencyFull,
} from "./mock-data";

function TesoreriaTooltip({ active, payload, label }: any) {
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

const moraBreakdown = [
  { label: "30 días", amount: tesoreriaData.interesesEnMoraDias30, color: "#eab308" },
  { label: "60 días", amount: tesoreriaData.interesesEnMoraDias60, color: "#f97316" },
  { label: "90+ días", amount: tesoreriaData.interesesEnMoraDias90, color: "#ef4444" },
];

export function TabTesoreria() {
  const data = tesoreriaData;

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center gap-3">
        <span className="inline-flex items-center px-4 py-1.5 rounded-full bg-teal-600 text-white text-sm">
          Tesorería
        </span>
        <span className="text-sm text-muted-foreground">
          ¿Cómo van los intereses y el ingreso real?
        </span>
      </div>

      {/* 3 Main KPI Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {/* Intereses causados no cobrados (corrientes) */}
        <Card className="overflow-hidden">
          <div className="flex">
            <div className="w-1 shrink-0 bg-blue-500 rounded-l-xl" />
            <CardContent className="p-5 flex-1">
              <div className="flex items-start justify-between">
                <div>
                  <p className="text-xs text-muted-foreground mb-1">
                    Intereses causados no cobrados
                  </p>
                  <p className="text-[10px] text-muted-foreground">(corrientes)</p>
                  <span className="text-2xl tracking-tight mt-2 block">
                    {formatCurrency(data.interesesCausadosCorrientes)}
                  </span>
                  <p className="text-xs text-muted-foreground mt-1">
                    {data.interesesCausadosCorrientesPct}% de la cartera
                  </p>
                </div>
                <div className="flex items-center justify-center size-9 rounded-lg bg-blue-100 text-blue-600">
                  <DollarSign className="size-4" />
                </div>
              </div>
            </CardContent>
          </div>
        </Card>

        {/* Intereses en mora */}
        <Card className="overflow-hidden">
          <div className="flex">
            <div className="w-1 shrink-0 bg-orange-500 rounded-l-xl" />
            <CardContent className="p-5 flex-1">
              <div className="flex items-start justify-between">
                <div>
                  <p className="text-xs text-muted-foreground mb-1">
                    Intereses causados en mora
                  </p>
                  <p className="text-[10px] text-muted-foreground">(&gt;30 días)</p>
                  <span className="text-2xl tracking-tight mt-2 block">
                    {formatCurrency(data.interesesEnMora)}
                  </span>
                  <p className="text-xs text-muted-foreground mt-1">
                    {data.interesesEnMoraPct}% de la cartera
                  </p>
                </div>
                <div className="flex items-center justify-center size-9 rounded-lg bg-orange-100 text-orange-600">
                  <AlertTriangle className="size-4" />
                </div>
              </div>
            </CardContent>
          </div>
        </Card>

        {/* Intereses cobrados */}
        <Card className="overflow-hidden">
          <div className="flex">
            <div className="w-1 shrink-0 bg-emerald-500 rounded-l-xl" />
            <CardContent className="p-5 flex-1">
              <div className="flex items-start justify-between">
                <div>
                  <p className="text-xs text-muted-foreground mb-1">
                    Intereses causados y cobrados
                  </p>
                  <p className="text-[10px] text-muted-foreground">(ingreso real)</p>
                  <span className="text-2xl tracking-tight mt-2 block">
                    {formatCurrency(data.interesesCobrados)}
                  </span>
                  <p className="text-xs text-muted-foreground mt-1">
                    {data.interesesCobradosPct}% de la cartera
                  </p>
                </div>
                <div className="flex items-center justify-center size-9 rounded-lg bg-emerald-100 text-emerald-600">
                  <CheckCircle className="size-4" />
                </div>
              </div>
            </CardContent>
          </div>
        </Card>
      </div>

      {/* Desglose mora */}
      <Card>
        <CardHeader>
          <CardTitle>Desglose de Intereses en Mora</CardTitle>
          <CardDescription>
            Distribución por antigüedad de la mora
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            {moraBreakdown.map((item) => (
              <div key={item.label} className="flex items-center gap-3">
                <span
                  className="size-3 rounded-full shrink-0"
                  style={{ backgroundColor: item.color }}
                />
                <span className="text-sm w-16">{item.label}</span>
                <div className="flex-1">
                  <div className="relative h-5 w-full overflow-hidden rounded-full bg-muted">
                    <div
                      className="h-full rounded-full flex items-center pl-2 text-white text-xs transition-all"
                      style={{
                        width: `${Math.max((item.amount / data.interesesEnMora) * 100, 15)}%`,
                        backgroundColor: item.color,
                      }}
                    >
                      {formatCurrencyFull(item.amount)}
                    </div>
                  </div>
                </div>
                <span className="text-xs text-muted-foreground w-12 text-right">
                  {((item.amount / data.interesesEnMora) * 100).toFixed(0)}%
                </span>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Cumplimiento de ingresos */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Cumplimiento de Ingreso</CardTitle>
            <CardDescription>
              Real vs. Proyectado este mes
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex items-center gap-6 mb-4">
              <div className="flex-1">
                <p className="text-xs text-muted-foreground">Ingreso Real</p>
                <p className="text-2xl tracking-tight">{formatCurrency(data.ingresoRealMes)}</p>
              </div>
              <div className="flex-1">
                <p className="text-xs text-muted-foreground">Proyectado</p>
                <p className="text-2xl tracking-tight text-muted-foreground">{formatCurrency(data.ingresoProyectado)}</p>
              </div>
              <div>
                <p className="text-xs text-muted-foreground">Cumplimiento</p>
                <p className="text-2xl tracking-tight text-emerald-600">{data.cumplimientoPct}%</p>
              </div>
            </div>
            <div className="relative h-4 w-full overflow-hidden rounded-full bg-muted">
              <div
                className="h-full rounded-full bg-emerald-500 transition-all"
                style={{ width: `${data.cumplimientoPct}%` }}
              />
              <div
                className="absolute top-0 h-full w-0.5 bg-foreground/40"
                style={{ left: "100%" }}
                title="Meta"
              />
            </div>
            <div className="flex items-center justify-between text-[10px] text-muted-foreground mt-1">
              <span>$0</span>
              <span>Meta: {formatCurrency(data.ingresoProyectado)}</span>
            </div>
          </CardContent>
        </Card>

        {/* Evolución de intereses */}
        <Card>
          <CardHeader>
            <CardTitle>Evolución de Intereses</CardTitle>
            <CardDescription>
              Causados, cobrados y en mora — últimos 6 meses
            </CardDescription>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={250}>
              <ComposedChart data={tesoreriaEvolucion} margin={{ top: 5, right: 10, left: 0, bottom: 0 }}>
                <defs>
                  <linearGradient id="causadosGrad" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#3b82f6" stopOpacity={0.15} />
                    <stop offset="100%" stopColor="#3b82f6" stopOpacity={0.02} />
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
                <Tooltip content={<TesoreriaTooltip />} />
                <Legend
                  wrapperStyle={{ fontSize: 12, paddingTop: 8 }}
                  iconType="circle"
                  iconSize={8}
                />
                <Area
                  type="monotone"
                  dataKey="causados"
                  name="Causados"
                  stroke="#3b82f6"
                  strokeWidth={2}
                  fill="url(#causadosGrad)"
                />
                <Line
                  type="monotone"
                  dataKey="cobrados"
                  name="Cobrados"
                  stroke="#22c55e"
                  strokeWidth={2}
                  dot={{ r: 3, fill: "#22c55e" }}
                />
                <Bar
                  dataKey="mora"
                  name="En Mora"
                  fill="#f97316"
                  barSize={16}
                  radius={[3, 3, 0, 0]}
                  opacity={0.8}
                />
              </ComposedChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      </div>

      {/* Resumen */}
      <Card className="bg-muted/30">
        <CardContent className="p-5">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
            <div>
              <p className="text-muted-foreground text-xs mb-1">Total intereses causados</p>
              <p className="text-lg">{formatCurrency(data.interesesCausadosCorrientes + data.interesesEnMora + data.interesesCobrados)}</p>
            </div>
            <div>
              <p className="text-muted-foreground text-xs mb-1">Tasa de cobro</p>
              <p className="text-lg text-emerald-600">
                {(
                  (data.interesesCobrados /
                    (data.interesesCausadosCorrientes + data.interesesEnMora + data.interesesCobrados)) *
                  100
                ).toFixed(1)}
                %
              </p>
            </div>
            <div>
              <p className="text-muted-foreground text-xs mb-1">Por cobrar total</p>
              <p className="text-lg text-orange-500">{formatCurrency(data.interesesCausadosCorrientes + data.interesesEnMora)}</p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
