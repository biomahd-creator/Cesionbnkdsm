import React from "react";
import { cn } from "../../lib/utils";
import { AlertTriangle, ShieldCheck, ShieldAlert, Shield } from "lucide-react";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "../ui/tooltip";

export type RiskLevel = "low" | "medium" | "high" | "critical";

interface RiskIndicatorProps {
  level: RiskLevel;
  score?: number; // 0-100
  showLabel?: boolean;
  className?: string;
  condensed?: boolean;
}

const riskConfig = {
  low: {
    label: "Riesgo Bajo",
    icon: ShieldCheck,
    container: "bg-green-50 border-green-200 dark:bg-green-500/10 dark:border-green-500/20",
    icon_color: "text-green-600 dark:text-green-400",
    text: "text-green-700 dark:text-green-300",
    bar: "bg-green-500 dark:bg-green-400",
  },
  medium: {
    label: "Riesgo Medio",
    icon: Shield,
    container: "bg-amber-50 border-amber-200 dark:bg-amber-500/10 dark:border-amber-500/20",
    icon_color: "text-amber-600 dark:text-amber-400",
    text: "text-amber-700 dark:text-amber-300",
    bar: "bg-amber-500 dark:bg-amber-400",
  },
  high: {
    label: "Riesgo Alto",
    icon: ShieldAlert,
    container: "bg-orange-50 border-orange-200 dark:bg-orange-500/10 dark:border-orange-500/20",
    icon_color: "text-orange-600 dark:text-orange-400",
    text: "text-orange-700 dark:text-orange-300",
    bar: "bg-orange-500 dark:bg-orange-400",
  },
  critical: {
    label: "Crítico",
    icon: AlertTriangle,
    container: "bg-red-50 border-red-200 dark:bg-red-500/10 dark:border-red-500/20",
    icon_color: "text-red-600 dark:text-red-400",
    text: "text-red-700 dark:text-red-300",
    bar: "bg-red-500 dark:bg-red-400",
  },
};

export function RiskIndicator({ 
  level, 
  score, 
  showLabel = true, 
  className,
  condensed = false
}: RiskIndicatorProps) {
  const config = riskConfig[level];
  const Icon = config.icon;

  if (condensed) {
    return (
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger asChild>
            <div className={cn(
              "inline-flex items-center justify-center rounded-full h-8 w-8 border transition-colors",
              config.container,
              className
            )}>
              <Icon className={cn("h-4 w-4", config.icon_color)} />
            </div>
          </TooltipTrigger>
          <TooltipContent>
            <p>{config.label} {score !== undefined && `(${score}/100)`}</p>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
    );
  }

  return (
    <div className={cn(
      "inline-flex items-center gap-3 rounded-lg border px-3 py-2",
      config.container,
      className
    )}>
      <Icon className={cn("h-4 w-4 shrink-0", config.icon_color)} />
      
      <div className="flex flex-col gap-1 min-w-0">
        {showLabel && (
          <span className={cn("text-sm font-medium leading-tight", config.text)}>
            {config.label}
          </span>
        )}
        {score !== undefined && (
          <div className="h-1.5 w-20 bg-muted dark:bg-white/10 rounded-full overflow-hidden">
            {/* NOTA: style inline requerido para animación dinámica del width */}
            <div 
              className={cn("h-full rounded-full transition-all duration-500 ease-out", config.bar)} 
              style={{ width: `${Math.min(Math.max(score, 0), 100)}%` }} 
            />
          </div>
        )}
      </div>
      
      {score !== undefined && (
        <span className={cn("text-sm font-semibold tabular-nums shrink-0", config.text)}>
          {score}
        </span>
      )}
    </div>
  );
}
