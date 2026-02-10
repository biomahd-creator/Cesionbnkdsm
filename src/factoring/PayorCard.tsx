import React from "react";
import { cn } from "../lib/utils";
import { Badge } from "../components/ui/badge";
import { Button } from "../components/ui/button";
import { Card, CardContent, CardHeader } from "../components/ui/card";
import { Progress } from "../components/ui/progress";
import { Building2, TrendingUp, AlertCircle, ShieldCheck } from "lucide-react";

export interface PayorData {
  id: string;
  name: string;
  nit: string;
  sector: string;
  creditLimit: number;
  usedCredit: number;
  riskScore: number; // 0-100
  paymentBehavior: "excellent" | "good" | "fair" | "poor";
}

interface PayorCardProps {
  payor: PayorData;
  className?: string;
  onViewDetails?: () => void;
}

const behaviorConfig = {
  excellent: { label: "Excelente", variant: "success-soft-outline" as const },
  good: { label: "Bueno", variant: "info-soft-outline" as const },
  fair: { label: "Regular", variant: "warning-soft-outline" as const },
  poor: { label: "Malo", variant: "destructive-soft-outline" as const },
};

export function PayorCard({ payor, className, onViewDetails }: PayorCardProps) {
  const formatCurrency = (val: number) => 
    new Intl.NumberFormat('es-CO', { 
      style: 'currency', 
      currency: 'COP', 
      maximumFractionDigits: 0 
    }).format(val);

  const usagePercentage = (payor.usedCredit / payor.creditLimit) * 100;
  const behavior = behaviorConfig[payor.paymentBehavior];

  return (
    <Card className={cn("hover:border-primary/50 transition-colors cursor-pointer", className)} onClick={onViewDetails}>
      <CardHeader className="flex flex-row items-start gap-4 pb-2">
        <div className="h-12 w-12 rounded-lg bg-muted flex items-center justify-center shrink-0">
          <Building2 className="h-6 w-6 text-muted-foreground" />
        </div>
        <div className="flex-1 min-w-0">
          <div className="flex items-center justify-between">
            <h3 className="font-semibold text-lg truncate pr-2">{payor.name}</h3>
            <Badge variant={behavior.variant} className="shrink-0">
              {behavior.label}
            </Badge>
          </div>
          <p className="text-sm text-muted-foreground">NIT: {payor.nit}</p>
        </div>
      </CardHeader>
      
      <CardContent className="space-y-4">
        <div className="grid grid-cols-2 gap-4 pt-2">
          <div className="space-y-1">
            <p className="text-xs text-muted-foreground">Cupo Disponible</p>
            <p className="font-medium text-sm">
              {formatCurrency(payor.creditLimit - payor.usedCredit)}
            </p>
          </div>
          <div className="space-y-1">
            <p className="text-xs text-muted-foreground">Score de Riesgo</p>
            <div className="flex items-center gap-1.5">
              <ShieldCheck className={cn(
                "h-4 w-4",
                payor.riskScore > 70 ? "text-green-500" : payor.riskScore > 40 ? "text-yellow-500" : "text-red-500"
              )} />
              <p className="font-medium text-sm">{payor.riskScore}/100</p>
            </div>
          </div>
        </div>

        <div className="space-y-1.5">
          <div className="flex justify-between text-xs">
            <span className="text-muted-foreground">Uso del Cupo Global</span>
            <span className="font-medium">{Math.round(usagePercentage)}%</span>
          </div>
          <Progress value={usagePercentage} className="h-2" />
          <div className="flex justify-between text-[10px] text-muted-foreground">
            <span>Usado: {formatCurrency(payor.usedCredit)}</span>
            <span>Total: {formatCurrency(payor.creditLimit)}</span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}