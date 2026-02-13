/**
 * ColorBox Component
 * 
 * BUSINESS PATTERN: Componente reutilizable para cajas de color sin estilos inline
 * 
 * NO MODIFICAR sin consultar: /components/widgets/BUSINESS_COMPONENTS_ARCHITECTURE.md
 * Parte del sistema modular sin estilos inline
 */

import { cn } from "../ui/utils";

interface ColorBoxProps {
  color: string;
  size?: "sm" | "md" | "lg" | "xl";
  className?: string;
  children?: React.ReactNode;
}

const sizeClasses = {
  sm: "h-6 w-6",
  md: "h-12 w-12",
  lg: "h-16 w-16",
  xl: "h-20 w-20",
};

export function ColorBox({ color, size = "md", className, children }: ColorBoxProps) {
  // Mapeo de colores del sistema a clases Tailwind
  const colorClasses: Record<string, string> = {
    "#84cc16": "bg-primary",
    "#1C2D3A": "bg-secondary",
    primary: "bg-primary",
    secondary: "bg-secondary",
    success: "bg-green-500",
    warning: "bg-yellow-500",
    danger: "bg-red-500",
    info: "bg-blue-500",
  };

  const bgClass = colorClasses[color] || `bg-[${color}]`;

  return (
    <span
      className={cn(
        "rounded border inline-flex items-center justify-center overflow-hidden shrink-0",
        sizeClasses[size],
        bgClass,
        className
      )}
    >
      {children}
    </span>
  );
}