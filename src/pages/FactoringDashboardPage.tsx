import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../components/ui/card";
import { Badge } from "../components/ui/badge";
import { Separator } from "../components/ui/separator";
import { FactoringDashboard } from "../factoring/components/FactoringDashboard";
import { BarChart3, TrendingUp, Info } from "lucide-react";
import { Alert, AlertDescription } from "../components/ui/alert";

export function FactoringDashboardPage() {
  return (
    <div className="space-y-8">
      {/* Header */}
      <div>
        <div className="flex items-center gap-3 mb-2">
          <h2 className="text-2xl font-medium">Factoring Dashboard</h2>
          <Badge variant="default" className="bg-green-500 hover:bg-green-600">
            <BarChart3 className="h-3 w-3 mr-1" />
            Business Pattern
          </Badge>
        </div>
        <p className="text-muted-foreground">
          Dashboard completo con KPIs, métricas, cupos y tendencias de operaciones de factoring.
        </p>
      </div>

      <Separator />

      {/* Información del Pattern */}
      <Alert className="border-primary/50 bg-primary/5">
        <Info className="h-4 w-4 text-lime-700 dark:text-primary" />
        <AlertDescription className="text-sm">
          <strong className="text-lime-700 dark:text-primary">Dashboard Pattern</strong> - Combina KPI Cards, Progress Bars, Recharts (Line/Bar), 
          y listas con estados. Ideal para vistas administrativas con métricas en tiempo real.
        </AlertDescription>
      </Alert>

      {/* Componentes utilizados */}
      <Card className="elevation-1">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <TrendingUp className="h-5 w-5 text-lime-700 dark:text-primary" />
            Componentes Integrados
          </CardTitle>
          <CardDescription>
            Este dashboard utiliza componentes shadcn/ui + Recharts
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            <div className="p-4 rounded-lg border bg-card">
              <h4 className="font-semibold mb-2">UI Components</h4>
              <ul className="text-sm space-y-1 text-muted-foreground">
                <li>• Card (containers)</li>
                <li>• Badge (estados, trends)</li>
                <li>• Progress (cupo utilizado)</li>
                <li>• Alert (notificaciones)</li>
              </ul>
            </div>

            <div className="p-4 rounded-lg border bg-card">
              <h4 className="font-semibold mb-2">Charts (Recharts)</h4>
              <ul className="text-sm space-y-1 text-muted-foreground">
                <li>• LineChart (tendencia mensual)</li>
                <li>• BarChart (operaciones por estado)</li>
                <li>• Tooltip (info en hover)</li>
                <li>• SafeChartContainer</li>
              </ul>
            </div>

            <div className="p-4 rounded-lg border bg-card">
              <h4 className="font-semibold mb-2">Lucide Icons</h4>
              <ul className="text-sm space-y-1 text-muted-foreground">
                <li>• DollarSign, Percent</li>
                <li>• CheckCircle, Clock</li>
                <li>• TrendingUp, TrendingDown</li>
                <li>• Users, AlertCircle</li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Preview del Dashboard */}
      <Card className="elevation-2">
        <CardHeader>
          <CardTitle>Live Preview</CardTitle>
          <CardDescription>
            Dashboard interactivo con datos simulados de operaciones de factoring
          </CardDescription>
        </CardHeader>
        <CardContent>
          <FactoringDashboard />
        </CardContent>
      </Card>

      {/* Features del Dashboard */}
      <div className="grid gap-6 md:grid-cols-2">
        <Card className="elevation-1">
          <CardHeader>
            <CardTitle>Métricas Principales</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            <div className="flex items-start gap-3">
              <div className="h-6 w-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                <span className="text-lime-700 dark:text-primary text-xs">1</span>
              </div>
              <div>
                <p className="font-medium">KPI Cards con Trends</p>
                <p className="text-sm text-muted-foreground">
                  Monto financiado, comisiones, tasa de aprobación y clientes activos con indicadores de cambio.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <div className="h-6 w-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                <span className="text-lime-700 dark:text-primary text-xs">2</span>
              </div>
              <div>
                <p className="font-medium">Cupo de Factoring Visual</p>
                <p className="text-sm text-muted-foreground">
                  Progress bar con porcentaje de utilización y alertas cuando el cupo está casi agotado.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <div className="h-6 w-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                <span className="text-lime-700 dark:text-primary text-xs">3</span>
              </div>
              <div>
                <p className="font-medium">Gráficos de Tendencias</p>
                <p className="text-sm text-muted-foreground">
                  Line chart para evolución mensual y bar chart para distribución de estados.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <div className="h-6 w-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                <span className="text-lime-700 dark:text-primary text-xs">4</span>
              </div>
              <div>
                <p className="font-medium">Operaciones Recientes</p>
                <p className="text-sm text-muted-foreground">
                  Lista de últimas operaciones con estados visuales y badges de color.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="elevation-1">
          <CardHeader>
            <CardTitle>Casos de Uso</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            <div className="p-4 rounded-lg border bg-muted/20">
              <h4 className="font-semibold mb-2 text-green-600 dark:text-green-400">Vista Administrativa</h4>
              <p className="text-sm text-muted-foreground">
                Dashboard principal para administradores de factoring que necesitan monitorear KPIs, 
                cupos disponibles y aprobar operaciones.
              </p>
            </div>

            <div className="p-4 rounded-lg border bg-muted/20">
              <h4 className="font-semibold mb-2 text-blue-600 dark:text-blue-400">Reportes Gerenciales</h4>
              <p className="text-sm text-muted-foreground">
                Visualización de tendencias mensuales, tasa de aprobación y comisiones generadas 
                para toma de decisiones estratégicas.
              </p>
            </div>

            <div className="p-4 rounded-lg border bg-muted/20">
              <h4 className="font-semibold mb-2 text-purple-600 dark:text-purple-400">Monitoreo de Límites</h4>
              <p className="text-sm text-muted-foreground">
                Control visual de cupos de factoring con alertas automáticas cuando el límite 
                está próximo a agotarse.
              </p>
            </div>

            <div className="p-4 rounded-lg border bg-muted/20">
              <h4 className="font-semibold mb-2 text-orange-600 dark:text-orange-400">Vista de Cliente</h4>
              <p className="text-sm text-muted-foreground">
                Versión simplificada para clientes que muestra sus operaciones activas, 
                monto disponible y estado de solicitudes.
              </p>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Características técnicas */}
      <Card className="elevation-1">
        <CardHeader>
          <CardTitle>Características Técnicas</CardTitle>
          <CardDescription>Implementación y consideraciones</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid gap-6 md:grid-cols-3">
            <div>
              <h4 className="font-semibold mb-3 text-lime-700 dark:text-primary">Responsive Design</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>✅ Grid adaptativo (1/2/4 columnas)</li>
                <li>✅ Gráficos responsive (SafeChartContainer)</li>
                <li>✅ Cards apilables en mobile</li>
                <li>✅ Tablas scrollables en pantallas pequeñas</li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-3 text-lime-700 dark:text-primary">Modo Oscuro</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>✅ Tokens CSS variables (hsl)</li>
                <li>✅ Gráficos adaptados al tema</li>
                <li>✅ Contraste WCAG AA compliant</li>
                <li>✅ Elevation system integrado</li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-3 text-lime-700 dark:text-primary">Datos Dinámicos</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>✅ Mock data fácil de reemplazar</li>
                <li>✅ Props configurables</li>
                <li>✅ Cálculos automáticos (%, trends)</li>
                <li>✅ Estados condicionales (alertas)</li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}