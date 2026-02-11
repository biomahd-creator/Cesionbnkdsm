import React from "react";
import { getThemeColor, getChartColorsMap, getBrandColors, getUIColors } from "../../../lib/theme-utils";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../../ui/card";
import { Badge } from "../../ui/badge";
import { SafeChartContainer } from "../../ui/safe-chart-container";
import { Progress } from "../../ui/progress";
import { 
  TrendingUp, 
  TrendingDown,
  DollarSign,
  Users,
  FileText,
  Activity,
  Target,
  Zap,
  Percent,
  CheckCircle,
  Clock,
  AlertCircle
} from "lucide-react";
import { LineChart, Line, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Cell } from "recharts";

// Mock data para gráficos
const monthlyData = [
  { month: "Ene", monto: 45000, operaciones: 12 },
  { month: "Feb", monto: 52000, operaciones: 15 },
  { month: "Mar", monto: 48000, operaciones: 14 },
  { month: "Abr", monto: 61000, operaciones: 18 },
  { month: "May", monto: 55000, operaciones: 16 },
  { month: "Jun", monto: 67000, operaciones: 20 },
];

// Función para obtener datos de estado con colores dinámicos
const getStatusData = () => [
  { status: "Aprobadas", count: 45, color: getChartColorsMap().chart2 },
  { status: "En Proceso", count: 12, color: getChartColorsMap().chart3 },
  { status: "Rechazadas", count: 3, color: getChartColorsMap().chart5 },
];

interface KPICardProps {
  title: string;
  value: string;
  description: string;
  trend?: "up" | "down";
  trendValue?: string;
  icon: React.ReactNode;
}

function KPICard({ title, value, description, trend, trendValue, icon }: KPICardProps) {
  return (
    <Card className="elevation-2">
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-sm font-medium">{title}</CardTitle>
        <div className="h-8 w-8 rounded-full bg-primary/10 flex items-center justify-center text-primary">
          {icon}
        </div>
      </CardHeader>
      <CardContent>
        <div className="text-2xl font-semibold">{value}</div>
        <div className="flex items-center gap-2 mt-1">
          <p className="text-xs text-muted-foreground">{description}</p>
          {trend && trendValue && (
            <Badge variant={trend === "up" ? "default" : "destructive"} className="text-xs px-1.5 py-0">
              {trend === "up" ? (
                <TrendingUp className="h-3 w-3 mr-1" />
              ) : (
                <TrendingDown className="h-3 w-3 mr-1" />
              )}
              {trendValue}
            </Badge>
          )}
        </div>
      </CardContent>
    </Card>
  );
}

export function FactoringDashboard() {
  // Datos simulados
  const montoTotalFinanciado = 328000;
  const comisionesGeneradas = 16400;
  const cupoDisponible = 500000;
  const cupoUtilizado = 328000;
  const porcentajeUtilizado = (cupoUtilizado / cupoDisponible) * 100;
  const tasaAprobacion = 93.8;
  const operacionesActivas = 20;
  const clientesActivos = 8;

  // Obtener colores dinámicos
  const primaryColor = getBrandColors().primary;
  const mutedForegroundColor = getUIColors().mutedForeground;
  const cardBg = getUIColors().card;
  const borderColor = getUIColors().border;

  // Obtener datos con colores dinámicos
  const statusData = getStatusData();

  return (
    <div className="space-y-6">
      {/* KPIs principales */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <KPICard
          title="Monto Financiado"
          value={`$${(montoTotalFinanciado / 1000).toFixed(0)}K`}
          description="Total del mes"
          trend="up"
          trendValue="+12.5%"
          icon={<DollarSign className="h-4 w-4" />}
        />
        
        <KPICard
          title="Comisiones"
          value={`$${(comisionesGeneradas / 1000).toFixed(1)}K`}
          description="Generadas este mes"
          trend="up"
          trendValue="+8.2%"
          icon={<Percent className="h-4 w-4" />}
        />
        
        <KPICard
          title="Tasa de Aprobacin"
          value={`${tasaAprobacion}%`}
          description="Últimos 30 días"
          trend="up"
          trendValue="+2.4%"
          icon={<CheckCircle className="h-4 w-4" />}
        />
        
        <KPICard
          title="Clientes Activos"
          value={clientesActivos.toString()}
          description={`${operacionesActivas} operaciones`}
          icon={<Users className="h-4 w-4" />}
        />
      </div>

      {/* Cupo disponible */}
      <Card className="elevation-2">
        <CardHeader>
          <CardTitle>Cupo de Factoring</CardTitle>
          <CardDescription>
            Límite disponible para financiamiento
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-muted-foreground">Cupo Utilizado</p>
              <p className="text-2xl font-semibold">${(cupoUtilizado / 1000).toFixed(0)}K</p>
            </div>
            <div className="text-right">
              <p className="text-sm text-muted-foreground">Cupo Disponible</p>
              <p className="text-2xl font-semibold">${((cupoDisponible - cupoUtilizado) / 1000).toFixed(0)}K</p>
            </div>
          </div>
          
          <div className="space-y-2">
            <div className="flex items-center justify-between text-sm">
              <span className="text-muted-foreground">Utilización</span>
              <span className="font-medium">{porcentajeUtilizado.toFixed(1)}%</span>
            </div>
            <Progress value={porcentajeUtilizado} className="h-3" />
          </div>

          {porcentajeUtilizado > 80 && (
            <div className="flex items-center gap-2 p-3 rounded-lg bg-destructive/10 border border-destructive/20">
              <AlertCircle className="h-4 w-4 text-destructive" />
              <p className="text-sm text-destructive">
                Cupo casi agotado. Contacte al administrador para aumentar el límite.
              </p>
            </div>
          )}
        </CardContent>
      </Card>

      <div className="grid gap-6 md:grid-cols-2">
        {/* Gráfico de tendencia mensual */}
        <Card className="elevation-2">
          <CardHeader>
            <CardTitle>Tendencia Mensual</CardTitle>
            <CardDescription>Monto financiado por mes (USD)</CardDescription>
          </CardHeader>
          <CardContent>
            <SafeChartContainer width="100%" height="300px">
                <LineChart data={monthlyData}>
                  <CartesianGrid strokeDasharray="3 3" className="stroke-muted" />
                  <XAxis 
                    dataKey="month" 
                    className="text-xs"
                    tick={{ fill: mutedForegroundColor }}
                  />
                  <YAxis 
                    className="text-xs"
                    tick={{ fill: mutedForegroundColor }}
                  />
                  <Tooltip 
                    contentStyle={{ 
                      backgroundColor: cardBg,
                      border: `1px solid ${borderColor}`,
                      borderRadius: '8px'
                    }}
                  />
                  <Line 
                    type="monotone" 
                    dataKey="monto" 
                    stroke={primaryColor} 
                    strokeWidth={2}
                    dot={{ fill: primaryColor }}
                  />
                </LineChart>
              </SafeChartContainer>
          </CardContent>
        </Card>

        {/* Gráfico de operaciones por estado */}
        <Card className="elevation-2">
          <CardHeader>
            <CardTitle>Operaciones por Estado</CardTitle>
            <CardDescription>Distribución actual de operaciones</CardDescription>
          </CardHeader>
          <CardContent>
            <SafeChartContainer width="100%" height="300px">
                <BarChart data={statusData}>
                  <CartesianGrid strokeDasharray="3 3" className="stroke-muted" />
                  <XAxis 
                    dataKey="status" 
                    className="text-xs"
                    tick={{ fill: mutedForegroundColor }}
                  />
                  <YAxis 
                    className="text-xs"
                    tick={{ fill: mutedForegroundColor }}
                  />
                  <Tooltip 
                    contentStyle={{ 
                      backgroundColor: cardBg,
                      border: `1px solid ${borderColor}`,
                      borderRadius: '8px'
                    }}
                  />
                  <Bar 
                    dataKey="count" 
                    fill={primaryColor}
                    radius={[8, 8, 0, 0]}
                  >
                    {statusData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Bar>
                </BarChart>
              </SafeChartContainer>
          </CardContent>
        </Card>
      </div>

      {/* Resumen de operaciones recientes */}
      <Card className="elevation-2">
        <CardHeader>
          <CardTitle>Operaciones Recientes</CardTitle>
          <CardDescription>Últimas 5 operaciones procesadas</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {[
              { id: "OP-2025-156", cliente: "Distribuidora XYZ", monto: 45000, estado: "Aprobada", fecha: "2025-12-18" },
              { id: "OP-2025-155", cliente: "Comercial ABC", monto: 32000, estado: "En Proceso", fecha: "2025-12-17" },
              { id: "OP-2025-154", cliente: "Importadora DEF", monto: 58000, estado: "Aprobada", fecha: "2025-12-16" },
              { id: "OP-2025-153", cliente: "Mayorista GHI", monto: 41000, estado: "Aprobada", fecha: "2025-12-15" },
              { id: "OP-2025-152", cliente: "Retail JKL", monto: 28000, estado: "Negociada", fecha: "2025-12-14" },
            ].map((op) => (
              <div key={op.id} className="flex items-center justify-between p-4 rounded-lg border bg-card hover:bg-muted/50 transition-colors">
                <div className="flex items-center gap-4">
                  <div className={`h-10 w-10 rounded-full flex items-center justify-center ${
                    op.estado === "Aprobada" ? "bg-green-500/10 text-green-500" :
                    op.estado === "En Proceso" ? "bg-blue-500/10 text-blue-500" :
                    "bg-yellow-500/10 text-yellow-500"
                  }`}>
                    {op.estado === "Aprobada" ? <CheckCircle className="h-5 w-5" /> :
                     op.estado === "En Proceso" ? <Clock className="h-5 w-5" /> :
                     <AlertCircle className="h-5 w-5" />}
                  </div>
                  <div>
                    <p className="font-medium">{op.id}</p>
                    <p className="text-sm text-muted-foreground">{op.cliente}</p>
                  </div>
                </div>
                <div className="flex items-center gap-6">
                  <div className="text-right">
                    <p className="font-semibold">${(op.monto / 1000).toFixed(0)}K</p>
                    <p className="text-xs text-muted-foreground">{op.fecha}</p>
                  </div>
                  <Badge variant={
                    op.estado === "Aprobada" ? "success-soft-outline" :
                    op.estado === "En Proceso" ? "warning-soft-outline" :
                    "info-soft-outline"
                  }>
                    {op.estado}
                  </Badge>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
