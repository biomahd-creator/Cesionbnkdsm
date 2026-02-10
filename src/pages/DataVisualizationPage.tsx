import { Sparkline } from "../components/advanced/Sparkline";
import { GaugeChart } from "../components/advanced/GaugeChart";
import { Heatmap } from "../components/advanced/Heatmap";
import { TreemapChart } from "../components/advanced/TreemapChart";
import { FunnelChart } from "../components/advanced/FunnelChart";
import { Badge } from "../components/ui/badge";
import { Separator } from "../components/ui/separator";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../components/ui/card";

/**
 * DataVisualizationPage - Showcase de componentes avanzados de visualización
 * 
 * Componentes implementados:
 * 1. Sparklines - Mini gráficos de tendencia
 * 2. Gauge Charts - Medidores de progreso/KPIs
 * 3. Heatmaps - Mapas de calor matriciales
 * 4. Treemaps - Visualización jerárquica
 * 5. Funnel Charts - Embudos de conversión
 * 
 * Ubicación: /pages/DataVisualizationPage.tsx
 * Estado: ✅ Completado - 5/5 componentes de prioridad media
 */

// Mock data
const sparklineData = Array.from({ length: 30 }, (_, i) => ({
  value: Math.floor(Math.random() * 50) + 50 + (i * 2)
}));

const sparklineData2 = Array.from({ length: 30 }, (_, i) => ({
  value: Math.floor(Math.random() * 30) + 40 - (i * 0.5)
}));

const sparklineData3 = Array.from({ length: 30 }, (_, i) => ({
  value: Math.floor(Math.random() * 20) + 60
}));

const heatmapData = [
  // Monday
  { row: "Mon", col: "9am", value: 12 },
  { row: "Mon", col: "12pm", value: 45 },
  { row: "Mon", col: "3pm", value: 78 },
  { row: "Mon", col: "6pm", value: 34 },
  // Tuesday
  { row: "Tue", col: "9am", value: 23 },
  { row: "Tue", col: "12pm", value: 67 },
  { row: "Tue", col: "3pm", value: 89 },
  { row: "Tue", col: "6pm", value: 45 },
  // Wednesday
  { row: "Wed", col: "9am", value: 34 },
  { row: "Wed", col: "12pm", value: 56 },
  { row: "Wed", col: "3pm", value: 92 },
  { row: "Wed", col: "6pm", value: 67 },
  // Thursday
  { row: "Thu", col: "9am", value: 45 },
  { row: "Thu", col: "12pm", value: 78 },
  { row: "Thu", col: "3pm", value: 85 },
  { row: "Thu", col: "6pm", value: 54 },
  // Friday
  { row: "Fri", col: "9am", value: 56 },
  { row: "Fri", col: "12pm", value: 90 },
  { row: "Fri", col: "3pm", value: 95 },
  { row: "Fri", col: "6pm", value: 32 },
];

const treemapData = [
  {
    name: "Sales",
    size: 5000,
    children: [
      { name: "North", size: 2000 },
      { name: "South", size: 1500 },
      { name: "East", size: 1000 },
      { name: "West", size: 500 },
    ]
  },
  {
    name: "Marketing",
    size: 3000,
    children: [
      { name: "Digital", size: 1800 },
      { name: "Events", size: 700 },
      { name: "Content", size: 500 },
    ]
  },
  {
    name: "Operations",
    size: 2000,
    children: [
      { name: "Logistics", size: 1200 },
      { name: "Support", size: 800 },
    ]
  }
];

const funnelData = [
  { name: "Website Visitors", value: 10000, description: "Total unique visitors" },
  { name: "Product Views", value: 5000, description: "Viewed product pages" },
  { name: "Add to Cart", value: 2500, description: "Added items to cart" },
  { name: "Checkout Started", value: 1500, description: "Initiated checkout" },
  { name: "Payment Submitted", value: 1000, description: "Entered payment info" },
  { name: "Purchase Complete", value: 850, description: "Completed transaction" },
];

export function DataVisualizationPage() {
  return (
    <div className="space-y-12">
      {/* Page Header */}
      <div className="space-y-4">
        <div className="flex items-center gap-3">
          <h1 className="font-bold">Advanced Data Visualization</h1>
          <Badge className="bg-blue-500 hover:bg-blue-600 text-white">
            PRIORIDAD MEDIA
          </Badge>
        </div>
        <p className="text-muted-foreground">
          Componentes avanzados de visualización de datos construidos con Recharts.
          Incluye sparklines, gauges, heatmaps, treemaps y funnels para analytics profesionales.
        </p>
      </div>

      <Separator />

      {/* 1. Sparklines */}
      <section className="space-y-6">
        <div>
          <div className="flex items-center gap-3 mb-2">
            <h2 className="font-bold">Sparklines</h2>
            <Badge variant="secondary">Micro Charts</Badge>
          </div>
          <p className="text-muted-foreground">
            Mini gráficos de tendencia perfectos para dashboards y KPI cards.
            Muestran patrones sin ocupar mucho espacio.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Sparkline
            data={sparklineData}
            title="Revenue"
            value="$124,589"
            change={12.5}
            changeLabel="vs last month"
            color="#22c55e"
          />
          <Sparkline
            data={sparklineData2}
            title="Active Users"
            value="8,234"
            change={-5.2}
            changeLabel="vs last week"
            color="#ef4444"
          />
          <Sparkline
            data={sparklineData3}
            title="Conversion Rate"
            value="3.24%"
            change={0}
            changeLabel="no change"
            color="#3b82f6"
          />
        </div>

        <Card>
          <CardHeader>
            <CardTitle className="text-lg">Sparkline sin contexto</CardTitle>
            <CardDescription>Solo la línea de datos, ideal para embeddings</CardDescription>
          </CardHeader>
          <CardContent>
            <Sparkline data={sparklineData} height={80} color="var(--primary)" />
          </CardContent>
        </Card>

        <div className="space-y-3">
          <h3 className="font-semibold">Características principales:</h3>
          <ul className="list-disc list-inside space-y-2 text-sm text-muted-foreground">
            <li>Diseño minimalista sin ejes ni labels</li>
            <li>Indicadores de tendencia con iconos (↑ ↓ →)</li>
            <li>Porcentaje de cambio con colores semánticos</li>
            <li>Modo card completo o standalone</li>
            <li>Responsive y adaptable</li>
            <li>Colores personalizables</li>
          </ul>
        </div>
      </section>

      <Separator />

      {/* 2. Gauge Charts */}
      <section className="space-y-6">
        <div>
          <div className="flex items-center gap-3 mb-2">
            <h2 className="font-bold">Gauge Charts</h2>
            <Badge variant="secondary">Progress Meters</Badge>
          </div>
          <p className="text-muted-foreground">
            Medidores tipo velocímetro para visualizar progreso, KPIs y scores.
            Colores automáticos basados en thresholds configurables.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <GaugeChart
            value={85}
            title="Customer Satisfaction"
            description="Based on 1,234 surveys"
            label="Score"
          />
          <GaugeChart
            value={45}
            title="Project Completion"
            description="Q1 2025 Goals"
            label="Progress"
            color="#f59e0b"
          />
          <GaugeChart
            value={92}
            title="System Health"
            description="All services operational"
            label="Uptime %"
            color="#22c55e"
          />
        </div>

        <div className="space-y-3">
          <h3 className="font-semibold">Características principales:</h3>
          <ul className="list-disc list-inside space-y-2 text-sm text-muted-foreground">
            <li>Diseño semicircular tipo velocímetro</li>
            <li>Thresholds configurables (bajo/medio/alto)</li>
            <li>Colores automáticos basados en valor</li>
            <li>Badge de estado (Low/Medium/High)</li>
            <li>Porcentaje centrado con label opcional</li>
            <li>Tamaño personalizable</li>
          </ul>
        </div>
      </section>

      <Separator />

      {/* 3. Heatmaps */}
      <section className="space-y-6">
        <div>
          <div className="flex items-center gap-3 mb-2">
            <h2 className="font-bold">Heatmaps</h2>
            <Badge variant="secondary">Matrix Visualization</Badge>
          </div>
          <p className="text-muted-foreground">
            Mapas de calor para visualizar patrones en datos matriciales.
            Ideal para activity tracking, correlaciones y análisis temporal.
          </p>
        </div>

        <Heatmap
          data={heatmapData}
          rows={["Mon", "Tue", "Wed", "Thu", "Fri"]}
          columns={["9am", "12pm", "3pm", "6pm"]}
          title="Website Traffic Heatmap"
          description="Hourly visitors by day of week"
          showValues={true}
          showLabels={true}
        />

        <div className="space-y-3">
          <h3 className="font-semibold">Características principales:</h3>
          <ul className="list-disc list-inside space-y-2 text-sm text-muted-foreground">
            <li>Tabla con celdas coloreadas por intensidad</li>
            <li>Escala de color personalizable (low/medium/high)</li>
            <li>Valores numéricos opcionales en celdas</li>
            <li>Labels en filas y columnas</li>
            <li>Hover effect con tooltip</li>
            <li>Leyenda con min/max values</li>
            <li>Tamaño de celda configurable</li>
          </ul>
        </div>
      </section>

      <Separator />

      {/* 4. Treemaps */}
      <section className="space-y-6">
        <div>
          <div className="flex items-center gap-3 mb-2">
            <h2 className="font-bold">Treemap Charts</h2>
            <Badge variant="secondary">Hierarchical Data</Badge>
          </div>
          <p className="text-muted-foreground">
            Visualización jerárquica usando rectángulos proporcionales.
            Perfecto para portfolios, market share, y estructuras de datos anidadas.
          </p>
        </div>

        <TreemapChart
          data={treemapData}
          title="Department Budget Allocation"
          description="2025 Annual Budget Distribution"
          height={400}
        />

        <div className="space-y-3">
          <h3 className="font-semibold">Características principales:</h3>
          <ul className="list-disc list-inside space-y-2 text-sm text-muted-foreground">
            <li>Rectángulos proporcionales al valor</li>
            <li>Soporte para datos jerárquicos (children)</li>
            <li>Colores automáticos diferenciados</li>
            <li>Labels con nombre y valor</li>
            <li>Tooltip interactivo en hover</li>
            <li>Responsive con SafeChartContainer</li>
            <li>Paleta de colores personalizable</li>
          </ul>
        </div>
      </section>

      <Separator />

      {/* 5. Funnel Charts */}
      <section className="space-y-6">
        <div>
          <div className="flex items-center gap-3 mb-2">
            <h2 className="font-bold">Funnel Charts</h2>
            <Badge variant="secondary">Conversion Tracking</Badge>
          </div>
          <p className="text-muted-foreground">
            Embudos de conversión para visualizar procesos y drop-offs.
            Esencial para sales analytics, user flows y optimization.
          </p>
        </div>

        <FunnelChart
          data={funnelData}
          title="E-commerce Sales Funnel"
          description="January 2025 Conversion Flow"
          showPercentages={true}
          showDropoff={true}
        />

        <div className="space-y-3">
          <h3 className="font-semibold">Características principales:</h3>
          <ul className="list-disc list-inside space-y-2 text-sm text-muted-foreground">
            <li>Barras que disminuyen de tamaño por etapa</li>
            <li>Valores absolutos y porcentajes de conversión</li>
            <li>Indicadores de drop-off entre etapas</li>
            <li>Colores personalizables por etapa</li>
            <li>Tooltips con descripciones en hover</li>
            <li>Resumen de estadísticas al final</li>
            <li>Tasa de conversión total calculada</li>
            <li>Responsive y adaptable</li>
          </ul>
        </div>
      </section>

      <Separator />

      {/* Implementation Notes */}
      <section className="bg-primary/5 rounded-lg p-6 space-y-4">
        <h3 className="font-semibold">📋 Notas de Implementación</h3>
        <div className="space-y-3 text-sm">
          <p>
            <strong>Ubicación:</strong> Todos los componentes están en{" "}
            <code className="bg-muted px-2 py-1 rounded">/components/advanced/</code>
          </p>
          <p>
            <strong>Dependencias:</strong> Estos componentes usan{" "}
            <code className="bg-muted px-2 py-1 rounded">recharts</code> para visualizaciones.
            Recharts ya está instalado en el proyecto.
          </p>
          <p>
            <strong>Imports necesarios:</strong>
          </p>
          <ul className="list-disc list-inside space-y-1 text-muted-foreground ml-4">
            <li>
              <code className="bg-muted px-2 py-1 rounded">
                import {"{ Sparkline }"} from "./components/advanced/Sparkline"
              </code>
            </li>
            <li>
              <code className="bg-muted px-2 py-1 rounded">
                import {"{ GaugeChart }"} from "./components/advanced/GaugeChart"
              </code>
            </li>
            <li>
              <code className="bg-muted px-2 py-1 rounded">
                import {"{ Heatmap }"} from "./components/advanced/Heatmap"
              </code>
            </li>
            <li>
              <code className="bg-muted px-2 py-1 rounded">
                import {"{ TreemapChart }"} from "./components/advanced/TreemapChart"
              </code>
            </li>
            <li>
              <code className="bg-muted px-2 py-1 rounded">
                import {"{ FunnelChart }"} from "./components/advanced/FunnelChart"
              </code>
            </li>
          </ul>
          <p>
            <strong>Compatibilidad:</strong> Todos los componentes son compatibles con el
            Theme Customizer y adaptan colores automáticamente en modo claro/oscuro.
          </p>
          <p>
            <strong>Estado:</strong> ✅ Fase 2 completada - 5 componentes de visualización
            de datos de PRIORIDAD MEDIA implementados y documentados.
          </p>
        </div>
      </section>
    </div>
  );
}