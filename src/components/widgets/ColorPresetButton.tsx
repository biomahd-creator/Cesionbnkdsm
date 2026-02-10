/**
 * ColorPresetButton Component
 * 
 * BUSINESS PATTERN: Botón de color preset sin estilos inline
 * 
 * NO MODIFICAR sin consultar: /components/widgets/WIDGETS_ARCHITECTURE.md
 * Parte del sistema modular sin estilos inline
 */

import { cn } from "../ui/utils";

interface ColorPresetButtonProps {
  color: string;
  isSelected?: boolean;
  onClick: () => void;
}

export function ColorPresetButton({ color, isSelected, onClick }: ColorPresetButtonProps) {
  // Mapeo de colores conocidos a clases Tailwind
  const colorClasses: Record<string, string> = {
    "#84cc16": "bg-primary",
    "#1C2D3A": "bg-secondary",
    "#ef4444": "bg-red-500",
    "#f59e0b": "bg-amber-500",
    "#10b981": "bg-emerald-500",
    "#3b82f6": "bg-blue-500",
    "#8b5cf6": "bg-violet-500",
    "#ec4899": "bg-pink-500",
    "#000000": "bg-black",
    "#ffffff": "bg-white",
    "#6b7280": "bg-gray-500",
    "#f3f4f6": "bg-gray-100",
  };

  const bgClass = colorClasses[color] || `bg-[${color}]`;

  return (
    <button
      className={cn(
        "h-8 w-8 rounded transition-transform hover:scale-110",
        bgClass,
        isSelected ? "border-2 border-primary ring-2 ring-primary/30" : "border-2 border-transparent"
      )}
      onClick={onClick}
      aria-label={`Select color ${color}`}
    />
  );
}