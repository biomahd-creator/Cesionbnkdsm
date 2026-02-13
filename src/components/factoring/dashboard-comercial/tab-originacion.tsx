import { useState } from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  Legend,
  ComposedChart,
  Line,
} from "recharts";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "../../ui/card";
import { Badge } from "../../ui/badge";
import { Tabs, TabsList, TabsTrigger } from "../../ui/tabs";
import {
  originacionKpis,
  colocacionMensualData,
  forecastRecaudosData,
  formatCurrency,
  formatCurrencyFull,
} from "./mock-data";

function KpiOriginacion({
  value,
  subtitle,
  badgeLabel,
  badgeColor,
  extra,
}: {
  value: string;
  subtitle: string;
  badgeLabel: string;
  badgeColor: string;
  extra?: string;
}) {
  return (
    <Card className="gap-0 p-4">
      <CardContent className="p-0">
        <span className="text-2xl tracking-tight">{value}</span>
        <p className="text-xs text-muted-foreground mt-1">{subtitle}</p>
        {extra && (
          <p className="text-xs text-muted-foreground">{extra}</p>
        )}
        <Badge
          className="mt-2 text-[10px]"
          style={{ backgroundColor: badgeColor, color: "white", border: "none" }}
        >
          {badgeLabel}
        </Badge>
      </CardContent>
    </Card>
  );
}

function ColocacionTooltip({ active, payload, label }: any) {
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

function ForecastTooltip({ active, payload, label }: any) {
  if (!active || !payload?.length) return null;
  return (
    <div className="bg-popover border border-border rounded-lg shadow-lg p-3 text-sm">
      <p className="text-foreground mb-1.5">{label}</p>
      {payload
        .filter((p: any) => p.value != null)
        .map((entry: any, index: number) => (
          <div key={`${entry.dataKey}-${entry.name}-${index}`} className="flex items-center gap-2 text-xs">
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

export function TabOriginacion() {
  const [viewMode, setViewMode] = useState<"mensual" | "semanal">("mensual");
  const kpi = originacionKpis;

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center gap-3">
        <span className="inline-flex items-center px-4 py-1.5 rounded-full bg-emerald-600 text-white text-sm">
          Originación
        </span>
        <span className="text-sm text-muted-foreground">
          ¿Cómo voy en la generación de ingresos?
        </span>
      </div>

      {/* Top 3 KPI Cards - Operations Status */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <KpiOriginacion
          value={formatCurrency(kpi.totalOperacionesVigentes)}
          subtitle={`${kpi.facturasVigentes} facturas, ${kpi.operacionesVigentes} operaciones`}
          badgeLabel="Total Operaciones Vigentes"
          badgeColor="#2563eb"
        />
        <KpiOriginacion
          value={`${formatCurrency(kpi.operaciones30_60)} (${kpi.pct30_60}%)`}
          subtitle={`${kpi.facturas30_60} facturas, ${kpi.ops30_60} operaciones`}
          badgeLabel="Total Operaciones 30-60 Días Retraso"
          badgeColor="#f97316"
        />
        <KpiOriginacion
          value={`${formatCurrency(kpi.operaciones60plus)} (${kpi.pct60plus}%)`}
          subtitle={`${kpi.facturas60plus} facturas, ${kpi.ops60plus} operación`}
          badgeLabel="Total Operaciones +60 Días Retraso"
          badgeColor="#ef4444"
        />
      </div>

      {/* Gráfica de Colocación */}
      <Card>
        <CardHeader className="flex-row items-center justify-between">
          <div>
            <CardTitle>Gráfica de Colocación</CardTitle>
            <CardDescription>
              Suma de Monto de Crédito — Recaudado vs. Por Recaudar
            </CardDescription>
          </div>
          <Tabs value={viewMode} onValueChange={(v) => setViewMode(v as "mensual" | "semanal")}>
            <TabsList>
              <TabsTrigger value="semanal">Semanal</TabsTrigger>
              <TabsTrigger value="mensual">Mensual</TabsTrigger>
            </TabsList>
          </Tabs>
        </CardHeader>
        <CardContent>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={colocacionMensualData} margin={{ top: 5, right: 10, left: 0, bottom: 0 }}>
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
              <Tooltip content={<ColocacionTooltip />} />
              <Legend
                wrapperStyle={{ fontSize: 12, paddingTop: 8 }}
                iconType="circle"
                iconSize={8}
              />
              <Bar
                dataKey="recaudado"
                name="Recaudado"
                fill="#3b82f6"
                stackId="a"
                barSize={32}
                radius={[0, 0, 0, 0]}
              />
              <Bar
                dataKey="porRecaudar"
                name="Por Recaudar"
                fill="#93c5fd"
                stackId="a"
                barSize={32}
                radius={[3, 3, 0, 0]}
              />
            </BarChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>

      {/* 4 KPI cards - Cartera summary */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <KpiOriginacion
          value={formatCurrency(kpi.totalCartera)}
          subtitle={`${kpi.facturasVigentes} facturas, ${kpi.operacionesVigentes} operaciones`}
          badgeLabel="Total Cartera"
          badgeColor="#2563eb"
          extra="*Total Monto Crédito"
        />
        <KpiOriginacion
          value={formatCurrency(kpi.montoCobrarSemana)}
          subtitle={`${kpi.facturasACobrar} facturas`}
          badgeLabel="Monto a cobrar esta semana"
          badgeColor="#f97316"
        />
        <KpiOriginacion
          value={formatCurrency(kpi.vencidas)}
          subtitle={`${kpi.facturasVencidas} facturas`}
          badgeLabel="Vencidas"
          badgeColor="#f97316"
        />
        <KpiOriginacion
          value={formatCurrency(kpi.disponible)}
          subtitle={`${formatCurrency(kpi.disponibleMax)} (máx)`}
          badgeLabel="Disponible"
          badgeColor="#3b82f6"
        />
      </div>

      {/* Forecast Recaudos */}
      <Card>
        <CardHeader>
          <CardTitle>Forecast Recaudos</CardTitle>
          <CardDescription>
            Proyección Recolección de Cartera ($MM) vs. Real
          </CardDescription>
        </CardHeader>
        <CardContent>
          {/* Summary KPIs */}
          <div className="grid grid-cols-3 gap-4 mb-6">
            <div>
              <span className="text-2xl tracking-tight">$2.5MM</span>
              <Badge className="mt-1 block w-fit text-[10px]" style={{ backgroundColor: "#22c55e", color: "white", border: "none" }}>
                Esperado esta semana
              </Badge>
            </div>
            <div>
              <span className="text-2xl tracking-tight">$8MM</span>
              <Badge className="mt-1 block w-fit text-[10px]" style={{ backgroundColor: "#f97316", color: "white", border: "none" }}>
                Próximos 15 días
              </Badge>
            </div>
            <div>
              <span className="text-2xl tracking-tight">$10.1MM</span>
              <Badge className="mt-1 block w-fit text-[10px]" style={{ backgroundColor: "#3b82f6", color: "white", border: "none" }}>
                Este mes
              </Badge>
            </div>
          </div>

          <ResponsiveContainer width="100%" height={300}>
            <ComposedChart data={forecastRecaudosData} margin={{ top: 5, right: 10, left: 0, bottom: 0 }}>
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
              <Tooltip content={<ForecastTooltip />} />
              <Legend
                wrapperStyle={{ fontSize: 12, paddingTop: 8 }}
                iconType="circle"
                iconSize={8}
              />
              <Bar
                dataKey="proyectado"
                name="Proyectado"
                fill="#3b82f6"
                barSize={28}
                radius={[3, 3, 0, 0]}
                opacity={0.7}
              />
              <Bar
                dataKey="real"
                name="Real"
                fill="#22c55e"
                barSize={28}
                radius={[3, 3, 0, 0]}
              />
              <Line
                type="monotone"
                dataKey="proyectado"
                name="Tendencia"
                stroke="#1e40af"
                strokeWidth={2}
                dot={false}
                strokeDasharray="6 3"
              />
            </ComposedChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>

      {/* Colocación summary */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <Card className="p-4">
          <CardContent className="p-0 space-y-2">
            <p className="text-sm text-muted-foreground">Cuánto he colocado este mes</p>
            <p className="text-2xl tracking-tight">{formatCurrency(8_500_000)}</p>
            <p className="text-xs text-muted-foreground">Meta mensual: $10MM — Avance: 85%</p>
            <div className="relative h-2 w-full overflow-hidden rounded-full bg-muted">
              <div className="h-full rounded-full bg-emerald-500" style={{ width: "85%" }} />
            </div>
          </CardContent>
        </Card>
        <Card className="p-4">
          <CardContent className="p-0 space-y-2">
            <p className="text-sm text-muted-foreground">Cuánto he recaudado este mes</p>
            <p className="text-2xl tracking-tight">{formatCurrency(6_800_000)}</p>
            <p className="text-xs text-muted-foreground">Meta mensual: $8MM — Avance: 85%</p>
            <div className="relative h-2 w-full overflow-hidden rounded-full bg-muted">
              <div className="h-full rounded-full bg-blue-500" style={{ width: "85%" }} />
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
