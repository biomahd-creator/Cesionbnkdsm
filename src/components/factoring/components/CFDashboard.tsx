import { Badge } from "../../ui/badge";
import { Button } from "../../ui/button";
import { Progress } from "../../ui/progress";
import { Separator } from "../../ui/separator";
import { SafeChartContainer } from "../../ui/safe-chart-container";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../../ui/card";
import {
  TrendingUp,
  DollarSign,
  FileText,
  Clock,
  CheckCircle2,
  AlertCircle,
  Calendar,
  Target,
  ArrowUpRight,
  ArrowDownRight,
  Percent,
  Activity
} from "lucide-react";
import {
  LineChart,
  Line,
  BarChart,
  Bar,
  PieChart,
  Pie,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  Area,
  AreaChart
} from "recharts";

/**
 * DASHBOARD C-FINANCIA - PORTAL EMPRESARIAL
 * 
 * Métricas específicas para empresas cedentes:
 * - Cupo de factoring disponible
 * - Facturas activas
 * - Liquidez obtenida (mes actual)
 * - Operaciones en proceso
 * - Historial de transacciones
 * - Próximos vencimientos
 * - Análisis de flujo de caja
 */

export function CFDashboard() {
  // Datos simulados - En producción vendrían de API
  const cupoTotal = 500000000; // $500M COP
  const cupoUtilizado = 320000000; // $320M COP
  const cupoDisponible = cupoTotal - cupoUtilizado;
  const porcentajeUtilizado = (cupoUtilizado / cupoTotal) * 100;

  const facturasActivas = 12;
  const liquidezMesActual = 145000000; // $145M COP
  const operacionesEnProceso = 3;
  const comisionesAcumuladas = 3200000; // $3.2M COP

  // Formato de moneda
  const formatCOP = (value: number) => {
    return new Intl.NumberFormat('es-CO', {
      style: 'currency',
      currency: 'COP',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
      notation: 'compact',
      compactDisplay: 'short'
    }).format(value);
  };

  const formatCOPFull = (value: number) => {
    return new Intl.NumberFormat('es-CO', {
      style: 'currency',
      currency: 'COP',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(value);
  };

  // Datos para gráficos
  const liquidezMensual = [
    { mes: 'Ene', liquidez: 85000000, comisiones: 1900000 },
    { mes: 'Feb', liquidez: 92000000, comisiones: 2100000 },
    { mes: 'Mar', liquidez: 110000000, comisiones: 2500000 },
    { mes: 'Abr', liquidez: 135000000, comisiones: 3000000 },
    { mes: 'May', liquidez: 145000000, comisiones: 3200000 },
  ];

  const pieDataEstados = [
    { estado: 'Aprobadas', cantidad: 8, color: '#4ade80' },
    { estado: 'En revisión', cantidad: 3, color: '#fbbf24' },
    { estado: 'Desembolsadas', cantidad: 12, color: '#84cc16' },
    { estado: 'Pagadas', cantidad: 28, color: '#60a5fa' },
  ];

  const proximosVencimientos = [
    { cliente: 'Empresa ABC S.A.S.', factura: 'FE-2024-001', monto: 25000000, dias: 5, estado: 'normal' },
    { cliente: 'Comercial XYZ Ltda.', factura: 'FE-2024-002', monto: 18000000, dias: 12, estado: 'normal' },
    { cliente: 'Distribuidora 123', factura: 'FE-2024-003', monto: 32000000, dias: 3, estado: 'urgente' },
    { cliente: 'Industrias Colombia', factura: 'FE-2024-004', monto: 40000000, dias: 20, estado: 'normal' },
  ];

  const operacionesRecientes = [
    { fecha: '2024-05-15', tipo: 'Desembolso', factura: 'FE-2024-008', monto: 28000000, estado: 'completado' },
    { fecha: '2024-05-14', tipo: 'Aprobación', factura: 'FE-2024-009', monto: 35000000, estado: 'completado' },
    { fecha: '2024-05-13', tipo: 'Solicitud', factura: 'FE-2024-010', monto: 22000000, estado: 'en_proceso' },
    { fecha: '2024-05-12', tipo: 'Pago', factura: 'FE-2024-005', monto: 45000000, estado: 'completado' },
  ];

  return (
    <div className="space-y-6">
      {/* Header con resumen ejecutivo */}
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-semibold">Dashboard C-Financia</h2>
          <p className="text-sm text-muted-foreground mt-1">
            Bienvenido, gestiona tu liquidez en tiempo real
          </p>
        </div>
        <div className="flex gap-2">
          <Button variant="outline">
            <FileText className="h-4 w-4 mr-2" />
            Nueva Solicitud
          </Button>
          <Button className="bg-primary hover:bg-primary/90">
            <TrendingUp className="h-4 w-4 mr-2" />
            Cargar Factura
          </Button>
        </div>
      </div>

      {/* Banner de monto total */}
      {/* Removed FactoringTotalBanner */}

      {/* KPIs principales */}
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        {/* Cupo disponible */}
        <Card className="elevation-2 border-2 border-primary/30 bg-gradient-to-br from-primary/10 to-primary/5">
          <CardHeader className="pb-3">
            <CardTitle className="text-sm font-medium text-muted-foreground">
              Cupo Disponible
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-2">
              <p className="text-3xl font-bold text-primary">
                {formatCOP(cupoDisponible)}
              </p>
              <div className="space-y-1">
                <div className="flex items-center justify-between text-xs">
                  <span className="text-muted-foreground">Utilizado</span>
                  <span className="font-medium">{porcentajeUtilizado.toFixed(1)}%</span>
                </div>
                <Progress value={porcentajeUtilizado} className="h-2" />
              </div>
              <p className="text-xs text-muted-foreground">
                de {formatCOP(cupoTotal)} total
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Facturas activas */}
        <Card className="elevation-2">
          <CardHeader className="pb-3">
            <CardTitle className="text-sm font-medium text-muted-foreground flex items-center justify-between">
              Facturas Activas
              <FileText className="h-4 w-4 text-blue-500" />
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-2">
              <p className="text-3xl font-bold">{facturasActivas}</p>
              <div className="flex items-center gap-1 text-sm">
                <ArrowUpRight className="h-4 w-4 text-green-500" />
                <span className="text-green-600 dark:text-green-400 font-medium">+3</span>
                <span className="text-muted-foreground text-xs">este mes</span>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Liquidez obtenida */}
        <Card className="elevation-2">
          <CardHeader className="pb-3">
            <CardTitle className="text-sm font-medium text-muted-foreground flex items-center justify-between">
              Liquidez del Mes
              <DollarSign className="h-4 w-4 text-green-500" />
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-2">
              <p className="text-3xl font-bold text-green-600 dark:text-green-400">
                {formatCOP(liquidezMesActual)}
              </p>
              <div className="flex items-center gap-1 text-sm">
                <ArrowUpRight className="h-4 w-4 text-green-500" />
                <span className="text-green-600 dark:text-green-400 font-medium">+15%</span>
                <span className="text-muted-foreground text-xs">vs mes anterior</span>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Operaciones en proceso */}
        <Card className="elevation-2">
          <CardHeader className="pb-3">
            <CardTitle className="text-sm font-medium text-muted-foreground flex items-center justify-between">
              En Proceso
              <Clock className="h-4 w-4 text-orange-500" />
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-2">
              <p className="text-3xl font-bold text-orange-600 dark:text-orange-400">
                {operacionesEnProceso}
              </p>
              <div className="flex items-center gap-1 text-sm">
                <Activity className="h-4 w-4 text-orange-500" />
                <span className="text-muted-foreground text-xs">solicitudes pendientes</span>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Gráficos principales */}
      <div className="grid gap-6 lg:grid-cols-2">
        {/* Evolución de liquidez */}
        <Card className="elevation-2">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <TrendingUp className="h-5 w-5 text-primary" />
              Evolución de Liquidez
            </CardTitle>
            <CardDescription>Últimos 5 meses - Liquidez vs Comisiones</CardDescription>
          </CardHeader>
          <CardContent>
            <SafeChartContainer width="100%" height="300px">
              <AreaChart data={liquidezMensual}>
                <defs>
                  <linearGradient id="colorLiquidez" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#84cc16" stopOpacity={0.8}/>
                    <stop offset="95%" stopColor="#84cc16" stopOpacity={0}/>
                  </linearGradient>
                  <linearGradient id="colorComisiones" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#ef4444" stopOpacity={0.8}/>
                    <stop offset="95%" stopColor="#ef4444" stopOpacity={0}/>
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" opacity={0.1} />
                <XAxis dataKey="mes" />
                <YAxis tickFormatter={(value) => formatCOP(value)} />
                <Tooltip 
                  formatter={(value: number) => formatCOPFull(value)}
                  contentStyle={{ 
                    backgroundColor: 'var(--card)',
                    border: '1px solid var(--border)',
                    borderRadius: '8px'
                  }}
                />
                <Legend />
                <Area 
                  type="monotone" 
                  dataKey="liquidez" 
                  name="Liquidez Obtenida"
                  stroke="#84cc16" 
                  fillOpacity={1} 
                  fill="url(#colorLiquidez)" 
                />
                <Area 
                  type="monotone" 
                  dataKey="comisiones" 
                  name="Comisiones Pagadas"
                  stroke="#ef4444" 
                  fillOpacity={1} 
                  fill="url(#colorComisiones)" 
                />
              </AreaChart>
             </SafeChartContainer>
          </CardContent>
        </Card>

        {/* Estado de facturas */}
        <Card className="elevation-2">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Activity className="h-5 w-5 text-primary" />
              Estado de Facturas
            </CardTitle>
            <CardDescription>Distribución por estado actual</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex items-center gap-6">
              <SafeChartContainer width="100%" height="250px" className="w-[50%]">
                <PieChart>
                  <Pie
                    data={pieDataEstados}
                    cx="50%"
                    cy="50%"
                    innerRadius={60}
                    outerRadius={90}
                    dataKey="cantidad"
                    paddingAngle={2}
                  >
                    {pieDataEstados.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                  <Tooltip 
                    contentStyle={{ 
                      backgroundColor: 'var(--card)',
                      border: '1px solid var(--border)',
                      borderRadius: '8px'
                    }}
                  />
                </PieChart>
              </SafeChartContainer>

              <div className="flex-1 space-y-3">
                {pieDataEstados.map((item, index) => (
                  <div key={index} className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div 
                        className="w-3 h-3 rounded-full"
                        style={{ backgroundColor: item.color }}
                      />
                      <span className="text-sm">{item.estado}</span>
                    </div>
                    <Badge variant="info-soft-outline">{item.cantidad}</Badge>
                  </div>
                ))}
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Próximos vencimientos */}
      <Card className="elevation-2">
        <CardHeader>
          <div className="flex items-center justify-between">
            <div>
              <CardTitle className="flex items-center gap-2">
                <Calendar className="h-5 w-5 text-primary" />
                Próximos Vencimientos
              </CardTitle>
              <CardDescription>Facturas que vencen en los próximos 30 días</CardDescription>
            </div>
            <Button variant="outline" size="sm">
              Ver todas
            </Button>
          </div>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            {proximosVencimientos.map((item, index) => (
              <div 
                key={index}
                className="flex items-center justify-between p-4 rounded-lg border bg-card hover:bg-muted/50 transition-colors"
              >
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    <p className="font-semibold">{item.cliente}</p>
                    <Badge variant="info-soft-outline" className="text-xs">
                      {item.factura}
                    </Badge>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Monto: {formatCOPFull(item.monto)}
                  </p>
                </div>

                <div className="flex items-center gap-4">
                  <div className="text-right">
                    <p className={`text-sm font-semibold ${
                      item.estado === 'urgente' ? 'text-destructive' : 'text-muted-foreground'
                    }`}>
                      {item.dias} días
                    </p>
                    <p className="text-xs text-muted-foreground">para vencer</p>
                  </div>

                  {item.estado === 'urgente' && (
                    <Badge variant="destructive-soft-outline" className="gap-1">
                      <AlertCircle className="h-3 w-3" />
                      Urgente
                    </Badge>
                  )}
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Operaciones recientes */}
      <Card className="elevation-2">
        <CardHeader>
          <div className="flex items-center justify-between">
            <div>
              <CardTitle className="flex items-center gap-2">
                <Activity className="h-5 w-5 text-primary" />
                Operaciones Recientes
              </CardTitle>
              <CardDescription>Últimas transacciones realizadas</CardDescription>
            </div>
            <Button variant="outline" size="sm">
              Historial completo
            </Button>
          </div>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            {operacionesRecientes.map((item, index) => (
              <div 
                key={index}
                className="flex items-center justify-between p-4 rounded-lg border bg-card"
              >
                <div className="flex items-center gap-4">
                  <div className={`p-2 rounded-lg ${
                    item.estado === 'completado' ? 'bg-green-500/10' : 'bg-orange-500/10'
                  }`}>
                    {item.estado === 'completado' ? (
                      <CheckCircle2 className="h-5 w-5 text-green-500" />
                    ) : (
                      <Clock className="h-5 w-5 text-orange-500" />
                    )}
                  </div>

                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <p className="font-semibold">{item.tipo}</p>
                      <Badge variant="info-soft-outline" className="text-xs">
                        {item.factura}
                      </Badge>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      {item.fecha}
                    </p>
                  </div>
                </div>

                <div className="text-right">
                  <p className="font-semibold text-lg">
                    {formatCOPFull(item.monto)}
                  </p>
                  <Badge 
                    variant={item.estado === 'completado' ? 'success-soft-outline' : 'warning-soft-outline'}
                  >
                    {item.estado === 'completado' ? 'Completado' : 'En Proceso'}
                  </Badge>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Resumen financiero */}
      <div className="grid gap-6 md:grid-cols-3">
        <Card className="elevation-1">
          <CardHeader className="pb-3">
            <CardTitle className="text-sm font-medium text-muted-foreground">
              Comisiones Acumuladas (Mes)
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-2">
              <p className="text-2xl font-bold text-destructive">
                {formatCOPFull(comisionesAcumuladas)}
              </p>
              <div className="flex items-center gap-1 text-sm">
                <Percent className="h-4 w-4 text-muted-foreground" />
                <span className="text-muted-foreground text-xs">
                  {((comisionesAcumuladas / liquidezMesActual) * 100).toFixed(2)}% del total
                </span>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="elevation-1">
          <CardHeader className="pb-3">
            <CardTitle className="text-sm font-medium text-muted-foreground">
              Tiempo Promedio de Aprobación
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-2">
              <p className="text-2xl font-bold text-blue-600 dark:text-blue-400">
                4.2 horas
              </p>
              <div className="flex items-center gap-1 text-sm">
                <ArrowDownRight className="h-4 w-4 text-green-500" />
                <span className="text-green-600 dark:text-green-400 font-medium">-12%</span>
                <span className="text-muted-foreground text-xs">vs mes anterior</span>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="elevation-1">
          <CardHeader className="pb-3">
            <CardTitle className="text-sm font-medium text-muted-foreground">
              Tasa de Aprobación
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-2">
              <p className="text-2xl font-bold text-green-600 dark:text-green-400">
                94.5%
              </p>
              <div className="flex items-center gap-1 text-sm">
                <Target className="h-4 w-4 text-primary" />
                <span className="text-muted-foreground text-xs">de solicitudes aprobadas</span>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
