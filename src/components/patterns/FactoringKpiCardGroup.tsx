import { FactoringKpiCard } from "./FactoringKpiCard";
import React from "react";

interface FactoringKpiCardData {
  id: string;
  label: string;
  description: string;
  value: string;
  count: number;
  variant?: "default" | "blue" | "yellow" | "green" | "purple" | "orange" | "lime" | "darkgray";
  onAction?: () => void;
  icon?: React.ReactNode;
}

interface FactoringKpiCardGroupProps {
  cards: FactoringKpiCardData[];
  activeId?: string;
  className?: string;
}

// Mapeo de variantes antiguas a nuevas
const variantMap: Record<string, "default" | "blue" | "yellow" | "green" | "orange" | "darkgray" | "purple"> = {
  lime: "green",
  orange: "orange",
  yellow: "yellow",
  blue: "blue",
  purple: "purple",
  green: "green",
  darkgray: "darkgray",
  default: "default",
};

export function FactoringKpiCardGroup({
  cards,
  activeId,
  className,
}: FactoringKpiCardGroupProps) {
  return (
    <div className={`grid gap-4 md:grid-cols-2 lg:grid-cols-4 ${className || ""}`}>
      {cards.map((card) => (
        <FactoringKpiCard
          key={card.id}
          label={card.label}
          description={card.description}
          value={card.value}
          count={card.count}
          variant={variantMap[card.variant || "default"] || "default"}
          isActive={activeId === card.id}
          // Eliminar completamente el onClick - las tarjetas son solo visuales
          icon={card.icon}
        />
      ))}
    </div>
  );
}