import React from "react";
import { cn } from "../lib/utils";
import { Gauge } from "lucide-react";

interface LiquidityMeterProps {
  value: number; // 0-100
  label?: string;
  amount?: number;
  className?: string;
}

export function LiquidityMeter({ value, label = "Índice de Liquidez", amount, className }: LiquidityMeterProps) {
  // Clamp value
  const percentage = Math.min(100, Math.max(0, value));
  
  // Calculate stroke dasharray for semi-circle
  // Radius = 40, Circumference = 2 * pi * 40 = 251.32
  // Semi-circle = 125.66
  const radius = 40;
  const circumference = 2 * Math.PI * radius;
  const halfCircumference = circumference / 2;
  const strokeDashoffset = halfCircumference - (percentage / 100) * halfCircumference;
  
  // Color calculation based on value
  let colorClass = "text-red-500";
  if (percentage >= 70) colorClass = "text-green-500";
  else if (percentage >= 40) colorClass = "text-yellow-500";

  const formatCurrency = (val: number) => 
    new Intl.NumberFormat('es-CO', { 
      style: 'currency', 
      currency: 'COP', 
      maximumFractionDigits: 0,
      notation: "compact"
    }).format(val);

  return (
    <div className={cn("flex flex-col items-center justify-center p-4", className)}>
      <div className="relative h-32 w-48 flex items-end justify-center overflow-hidden">
        <svg className="w-full h-full" viewBox="0 0 100 55">
           {/* Background arc */}
           <path
             d="M 10 50 A 40 40 0 0 1 90 50"
             fill="none"
             stroke="currentColor"
             strokeWidth="10"
             className="text-muted/30"
             strokeLinecap="round"
           />
           {/* Value arc */}
           <path
             d="M 10 50 A 40 40 0 0 1 90 50"
             fill="none"
             stroke="currentColor"
             strokeWidth="10"
             className={cn("transition-all duration-1000 ease-out", colorClass)}
             strokeLinecap="round"
             strokeDasharray={halfCircumference}
             strokeDashoffset={strokeDashoffset}
           />
        </svg>
        <div className="absolute bottom-0 flex flex-col items-center">
          <span className={cn("text-3xl font-bold tabular-nums", colorClass)}>
            {Math.round(percentage)}%
          </span>
          <span className="text-xs text-muted-foreground uppercase tracking-wider font-medium mt-1">
            {label}
          </span>
        </div>
      </div>
      
      {amount !== undefined && (
        <div className="mt-4 p-2 bg-muted/50 rounded-lg text-center w-full max-w-[160px]">
          <p className="text-xs text-muted-foreground mb-0.5">Liquidez Disponible</p>
          <p className="font-semibold text-foreground">
            {formatCurrency(amount)}
          </p>
        </div>
      )}
    </div>
  );
}
