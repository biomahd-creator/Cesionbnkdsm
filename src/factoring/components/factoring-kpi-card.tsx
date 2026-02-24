import { cn } from "../../lib/utils";
import { Card, CardContent } from "../../components/ui/card";
import React from "react";

interface FactoringKpiCardProps {
  label: string;
  description: string;
  value: string;
  count: number;
  variant?: "default" | "blue" | "yellow" | "green" | "orange" | "darkgray" | "purple" | "lime";
  isActive?: boolean;
  onClick?: () => void;
  icon?: React.ReactNode;
  className?: string;
}

/* ── Tailwind class sets per variant ────────────────────── */
const variantClasses: Record<string, { border: string; badge: string; label: string; icon: string }> = {
  blue:     { border: "border-b-blue-500",   badge: "bg-blue-500",   label: "text-blue-500",   icon: "text-blue-400" },
  yellow:   { border: "border-b-yellow-500", badge: "bg-yellow-500", label: "text-yellow-500", icon: "text-yellow-400" },
  green:    { border: "border-b-green-500",  badge: "bg-green-500",  label: "text-green-500",  icon: "text-green-400" },
  orange:   { border: "border-b-orange-500", badge: "bg-orange-500", label: "text-orange-500", icon: "text-orange-400" },
  darkgray: { border: "border-b-gray-600",   badge: "bg-gray-600",   label: "text-gray-600",   icon: "text-gray-400" },
  purple:   { border: "border-b-purple-500", badge: "bg-purple-500", label: "text-purple-500", icon: "text-purple-400" },
  lime:     { border: "border-b-lime-500",   badge: "bg-lime-500",   label: "text-lime-500",   icon: "text-lime-400" },
};

const inactiveClasses = {
  border: "border-b-border",
  badge:  "bg-muted-foreground/40",
  label:  "text-muted-foreground",
  icon:   "text-muted-foreground/40",
};

export function FactoringKpiCard({
  label,
  description,
  value,
  count,
  variant = "default",
  isActive = false,
  onClick,
  icon,
  className,
}: FactoringKpiCardProps) {
  const hasColor = variant !== "default" && variant in variantClasses;
  const [isHovered, setIsHovered] = React.useState(false);

  const showColor = isActive || isHovered;
  const classes = showColor && hasColor ? variantClasses[variant] : inactiveClasses;

  const descClass  = showColor ? "text-muted-foreground" : "text-muted-foreground/50";
  const valueClass = showColor ? "text-foreground"       : "text-muted-foreground";
  const shadowClass = isActive ? "shadow-elevation-4" : "shadow-elevation-1";

  return (
    <Card
      className={cn(
        "relative bg-card border-0 border-b-4 rounded-[var(--radius)] transition-all duration-300 overflow-hidden",
        onClick && "cursor-pointer",
        classes.border,
        shadowClass,
        className
      )}
      onClick={onClick}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <CardContent className="p-4 relative">
        <div className="flex flex-col gap-1">

          {/* ── Label ── */}
          <p className={cn(
            "text-xs transition-colors duration-300 truncate pr-8",
            classes.label
          )}>
            {label}
          </p>

          {/* ── Description ── */}
          <p className={cn(
            "text-[11px] leading-tight transition-colors duration-300 truncate",
            descClass
          )}>
            {description}
          </p>

          {/* ── Value + Icon row ── */}
          <div className="flex items-end justify-between mt-1">
            <p className={cn(
              "text-xl leading-tight transition-colors duration-300",
              valueClass
            )}>
              {value}
            </p>
            {icon && (
              <span className={cn(
                "shrink-0 transition-colors duration-300 [&>svg]:w-5 [&>svg]:h-5",
                classes.icon
              )}>
                {icon}
              </span>
            )}
          </div>
        </div>

        {/* ── Badge (counter) ── */}
        <div className={cn(
          "absolute right-3 top-3 flex items-center justify-center min-w-5 h-5 px-1.5 rounded-md transition-colors duration-300",
          classes.badge
        )}>
          <span className="text-white text-[10px] leading-none font-medium whitespace-nowrap">
            {count}
          </span>
        </div>
      </CardContent>
    </Card>
  );
}