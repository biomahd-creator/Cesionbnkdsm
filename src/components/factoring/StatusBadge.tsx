import { Badge } from "../ui/badge";
import { cn } from "../../lib/utils";

// Causa 16: Movido de /factoring/components/ a /components/factoring/

interface StatusBadgeProps {
  status: string;
  className?: string;
}

const statusVariantMap: Record<string, "success-soft-outline" | "warning-soft-outline" | "destructive-soft-outline" | "info-soft-outline"> = {
  // Estados de pago
  paid: "success-soft-outline",
  pending: "warning-soft-outline",
  overdue: "destructive-soft-outline",
  
  // Estados de operación
  "Aprobada": "success-soft-outline",
  "Pendiente": "warning-soft-outline",
  "Rechazada": "destructive-soft-outline",
  
  // Estados urgentes
  "urgente": "destructive-soft-outline",
  "completado": "success-soft-outline",
};

export function StatusBadge({ status, className }: StatusBadgeProps) {
  const variant = statusVariantMap[status] || "warning-soft-outline";
  
  return (
    <Badge 
      variant={variant} 
      className={cn(className)}
    >
      {status}
    </Badge>
  );
}

export function getStatusColor(status: string): string {
  const colorMap: Record<string, string> = {
    paid: "text-green-700 border-green-300 bg-green-100",
    pending: "text-amber-700 border-amber-300 bg-amber-100",
    overdue: "text-red-700 border-red-300 bg-red-100",
    "Aprobada": "text-green-700 border-green-300 bg-green-100",
    "Pendiente": "text-amber-700 border-amber-300 bg-amber-100",
    "Rechazada": "text-red-700 border-red-300 bg-red-100",
    "urgente": "text-red-700 border-red-300 bg-red-100",
    "completado": "text-green-700 border-green-300 bg-green-100",
  };
  return colorMap[status] || colorMap["Pendiente"];
}

export function getStatusIconBg(status: string): string {
  const bgMap: Record<string, string> = {
    paid: "bg-green-100",
    pending: "bg-amber-100",
    overdue: "bg-red-100",
    "Aprobada": "bg-green-100",
    "Pendiente": "bg-amber-100",
    "Rechazada": "bg-red-100",
    "urgente": "bg-red-100",
    "completado": "bg-green-100",
  };
  return bgMap[status] || bgMap["Pendiente"];
}

export function getStatusTextColor(status: string): string {
  const textMap: Record<string, string> = {
    paid: "text-green-700",
    pending: "text-amber-700",
    overdue: "text-red-700",
    "Aprobada": "text-green-700",
    "Pendiente": "text-amber-700",
    "Rechazada": "text-red-700",
    "urgente": "text-red-700",
    "completado": "text-green-700",
  };
  return textMap[status] || textMap["Pendiente"];
}
