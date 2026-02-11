import React from "react";
import { cn } from "../../lib/utils";
import { Info, TrendingDown, TrendingUp } from "lucide-react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "../ui/tooltip";

interface RateComponent {
  label: string;
  value: number;
  description?: string;
}

interface FactoringRateDisplayProps {
  totalRate: number; // Monthly rate (e.g., 1.5)
  annualRate: number; // EA rate
  components: RateComponent[];
  trend?: "up" | "down" | "stable";
  className?: string;
}

export function FactoringRateDisplay({
  totalRate,
  annualRate,
  components,
  trend,
  className,
}: FactoringRateDisplayProps) {
  return (
    <div className={cn("p-6 rounded-xl border bg-card text-card-foreground", className)}>
      <div className="flex flex-col items-center justify-center text-center space-y-2 mb-6">
        <h3 className="text-sm font-medium text-muted-foreground uppercase tracking-wide">
          Tasa Mensual MV
        </h3>
        <div className="flex items-baseline gap-2">
          <span className="text-5xl font-bold tracking-tight text-primary">
            {totalRate.toFixed(2)}%
          </span>
          {trend && (
            <span className={cn(
              "flex items-center text-sm font-medium",
              trend === "down" ? "text-green-600" : trend === "up" ? "text-red-600" : "text-muted-foreground"
            )}>
              {trend === "down" ? <TrendingDown className="h-4 w-4 mr-1" /> : <TrendingUp className="h-4 w-4 mr-1" />}
              {trend === "down" ? "-0.1%" : "+0.2%"}
            </span>
          )}
        </div>
        <p className="text-sm text-muted-foreground">
          {annualRate.toFixed(2)}% E.A.
        </p>
      </div>

      <div className="space-y-3">
        {components.map((comp, i) => (
          <div key={i} className="flex items-center justify-between text-sm py-2 border-b last:border-0 border-dashed">
            <div className="flex items-center gap-1.5">
              <span className="text-muted-foreground">{comp.label}</span>
              {comp.description && (
                <TooltipProvider>
                  <Tooltip>
                    <TooltipTrigger>
                      <Info className="h-3.5 w-3.5 text-muted-foreground/50 hover:text-muted-foreground" />
                    </TooltipTrigger>
                    <TooltipContent>
                      <p className="max-w-xs text-xs">{comp.description}</p>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
              )}
            </div>
            <span className="font-medium">{comp.value.toFixed(2)}%</span>
          </div>
        ))}
        
        <div className="pt-2 flex items-center justify-between text-sm font-semibold">
           <span>Total Costo Financiero</span>
           <span>{totalRate.toFixed(2)}%</span>
        </div>
      </div>
    </div>
  );
}
