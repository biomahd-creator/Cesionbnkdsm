import React from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../ui/card";
import { Badge } from "../ui/badge";

/**
 * 🔒 ADVANCED COMPONENT - Heatmap
 * 
 * Heat map for visualizing matrix data.
 * Ideal for temporal patterns, correlations, and activity.
 * 
 * Location: /components/advanced/Heatmap.tsx
 * Category: Data Visualization - Medium Priority
 * Usage: Analytics, activity tracking, usage patterns
 */

export interface HeatmapCell {
  row: string;
  col: string;
  value: number;
  label?: string;
}

interface HeatmapProps {
  data: HeatmapCell[];
  rows: string[];
  columns: string[];
  title?: string;
  description?: string;
  colorScale?: {
    low: string;
    medium: string;
    high: string;
  };
  showValues?: boolean;
  showLabels?: boolean;
  cellSize?: number;
  min?: number;
  max?: number;
}

export function Heatmap({
  data,
  rows,
  columns,
  title,
  description,
  colorScale = {
    low: "#dbeafe",    // blue-100
    medium: "#3b82f6", // blue-500
    high: "#1e40af"    // blue-800
  },
  showValues = true,
  showLabels = true,
  cellSize = 60,
  min,
  max
}: HeatmapProps) {
  // Validation: if no data, show message
  if (!data || data.length === 0 || !rows || rows.length === 0 || !columns || columns.length === 0) {
    return (
      <Card className="w-full">
        <CardContent className="p-12 text-center">
          <p className="text-muted-foreground">No data available for the heatmap</p>
        </CardContent>
      </Card>
    );
  }

  // Calculate min and max if not provided
  const values = data.map(d => d.value);
  const minValue = min ?? Math.min(...values);
  const maxValue = max ?? Math.max(...values);

  const getColor = (value: number) => {
    if (maxValue === minValue) return colorScale.medium;
    
    const normalized = (value - minValue) / (maxValue - minValue);
    
    if (normalized < 0.33) {
      return colorScale.low;
    } else if (normalized < 0.66) {
      return colorScale.medium;
    } else {
      return colorScale.high;
    }
  };

  const getCellData = (row: string, col: string) => {
    return data.find(d => d.row === row && d.col === col);
  };

  const getTextColor = (value: number) => {
    const normalized = (value - minValue) / (maxValue - minValue);
    return normalized > 0.5 ? "#ffffff" : "var(--foreground)";
  };

  const content = (
    <div className="overflow-x-auto">
      <div className="inline-block min-w-full">
        <table className="border-collapse">
          <thead>
            <tr>
              <th className="border border-border p-2 bg-muted/30"></th>
              {columns.map(col => (
                <th 
                  key={col} 
                  className="border border-border p-2 text-sm font-semibold bg-muted/30"
                  style={{ 
                    width: `var(--heat-cell-size, ${cellSize}px)`, 
                    height: `var(--heat-cell-size, ${cellSize}px)` 
                  }}
                >
                  {showLabels ? col : ""}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {rows.map(row => (
              <tr key={row}>
                <td 
                  className="border border-border p-2 text-sm font-semibold bg-muted/30"
                  style={{ width: `var(--heat-cell-size, ${cellSize}px)` }}
                >
                  {showLabels ? row : ""}
                </td>
                {columns.map(col => {
                  const cellData = getCellData(row, col);
                  const value = cellData?.value ?? 0;
                  const bgColor = getColor(value);
                  const textColor = getTextColor(value);

                  return (
                    <td
                      key={`${row}-${col}`}
                      className="border border-border p-2 text-center transition-all hover:opacity-80 cursor-pointer"
                      style={{ 
                        "--heat-bg": bgColor,
                        "--heat-color": textColor,
                        "--heat-cell-size": `${cellSize}px`,
                        width: `var(--heat-cell-size)`,
                        height: `var(--heat-cell-size)`
                      } as React.CSSProperties}
                      data-heat-bg={true}
                      data-heat-color={true}
                      title={cellData?.label || `${row} - ${col}: ${value}`}
                    >
                      {showValues && (
                        <div className="text-sm font-medium">
                          {value}
                        </div>
                      )}
                    </td>
                  );
                })}
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Legend */}
      <div className="flex items-center justify-center gap-4 mt-4">
        <span className="text-sm text-muted-foreground">Min: {minValue}</span>
        <div className="flex gap-1">
          <div 
            className="w-8 h-4 rounded-sm"
            style={{ backgroundColor: `var(--legend-low, ${colorScale.low})` }}
          />
          <div 
            className="w-8 h-4 rounded-sm"
            style={{ backgroundColor: `var(--legend-medium, ${colorScale.medium})` }}
          />
          <div 
            className="w-8 h-4 rounded-sm"
            style={{ backgroundColor: `var(--legend-high, ${colorScale.high})` }}
          />
        </div>
        <span className="text-sm text-muted-foreground">Max: {maxValue}</span>
      </div>
    </div>
  );

  if (title || description) {
    return (
      <Card className="w-full">
        <CardHeader>
          <div className="flex items-start justify-between">
            <div>
              <CardTitle>{title}</CardTitle>
              {description && <CardDescription>{description}</CardDescription>}
            </div>
            <Badge variant="secondary">
              {data.length} data points
            </Badge>
          </div>
        </CardHeader>
        <CardContent>
          {content}
        </CardContent>
      </Card>
    );
  }

  return content;
}