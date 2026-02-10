import { Treemap, Tooltip } from "recharts";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../ui/card";
import { SafeChartContainer } from "../ui/safe-chart-container";

/**
 * 🔒 ADVANCED COMPONENT - Treemap Chart
 * 
 * Gráfico de mapa de árbol para visualizar datos jerárquicos
 * Muestra proporciones usando rectángulos anidados
 * 
 * Ubicación: /components/advanced/TreemapChart.tsx
 * Categoría: Data Visualization - Prioridad Media
 * Uso: Portfolio visualization, file systems, market share
 */

export interface TreemapData {
  name: string;
  size: number;
  children?: TreemapData[];
  fill?: string;
}

interface TreemapChartProps {
  data: TreemapData[];
  title?: string;
  description?: string;
  height?: number;
  colors?: string[];
}

const DEFAULT_COLORS = [
  "#3b82f6", // blue-500
  "#8b5cf6", // violet-500
  "#ec4899", // pink-500
  "#f59e0b", // amber-500
  "#10b981", // emerald-500
  "#06b6d4", // cyan-500
  "#f97316", // orange-500
  "#a855f7", // purple-500
];

interface CustomContentProps {
  x?: number;
  y?: number;
  width?: number;
  height?: number;
  name?: string;
  size?: number;
  depth?: number;
  colors?: string[];
  index?: number;
}

const CustomTreemapContent = ({ 
  x = 0, 
  y = 0, 
  width = 0, 
  height = 0, 
  name = "", 
  size = 0,
  depth = 0,
  colors = DEFAULT_COLORS,
  index = 0
}: CustomContentProps) => {
  const minSize = 30;
  if (width < minSize || height < minSize) return null;

  const color = colors[index % colors.length];
  const textColor = depth === 1 ? "#ffffff" : "var(--foreground)";
  const fontSize = Math.max(Math.min(width / 8, height / 4, 14), 10);

  return (
    <g>
      <rect
        x={x}
        y={y}
        width={width}
        height={height}
        style={{
          fill: color,
          stroke: "#fff",
          strokeWidth: 2,
        }}
      />
      {width > 50 && height > 30 && (
        <>
          <text
            x={x + width / 2}
            y={y + height / 2 - fontSize / 2}
            textAnchor="middle"
            fill={textColor}
            fontSize={fontSize}
            fontWeight="600"
          >
            {name}
          </text>
          <text
            x={x + width / 2}
            y={y + height / 2 + fontSize}
            textAnchor="middle"
            fill={textColor}
            fontSize={fontSize * 0.8}
            opacity={0.9}
          >
            {size.toLocaleString()}
          </text>
        </>
      )}
    </g>
  );
};

export function TreemapChart({
  data,
  title,
  description,
  height = 400,
  colors = DEFAULT_COLORS
}: TreemapChartProps) {
  const content = (
    <SafeChartContainer width="100%" height="100%" minHeight={`${height}px`}>
      <Treemap
        data={data}
        dataKey="size"
        stroke="#fff"
        fill="#8884d8"
        content={(props) => (
          <CustomTreemapContent {...props} colors={colors} />
        )}
      >
        <Tooltip
          content={({ payload }) => {
            if (!payload || !payload[0]) return null;
            const data = payload[0].payload;
            return (
              <div className="bg-card border border-border rounded-lg p-3 shadow-lg">
                <p className="font-semibold">{data.name}</p>
                <p className="text-sm text-muted-foreground">
                  Size: {data.size.toLocaleString()}
                </p>
              </div>
            );
          }}
        />
      </Treemap>
    </SafeChartContainer>
  );

  if (title || description) {
    return (
      <Card className="w-full">
        <CardHeader>
          <CardTitle>{title}</CardTitle>
          {description && <CardDescription>{description}</CardDescription>}
        </CardHeader>
        <CardContent>
          {content}
        </CardContent>
      </Card>
    );
  }

  return content;
}