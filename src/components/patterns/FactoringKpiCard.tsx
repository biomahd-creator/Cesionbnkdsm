import { cn } from "../ui/utils";
import { Card, CardContent } from "../ui/card";
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
const variantClasses: Record<string, { border: string; badge: string; label: string }> = {
  blue:     { border: "border-b-blue-500",   badge: "bg-blue-500",   label: "text-blue-500" },
  yellow:   { border: "border-b-yellow-500", badge: "bg-yellow-500", label: "text-yellow-500" },
  green:    { border: "border-b-green-500",  badge: "bg-green-500",  label: "text-green-500" },
  orange:   { border: "border-b-orange-500", badge: "bg-orange-500", label: "text-orange-500" },
  darkgray: { border: "border-b-gray-600",   badge: "bg-gray-600",   label: "text-gray-600" },
  purple:   { border: "border-b-purple-500", badge: "bg-purple-500", label: "text-purple-500" },
  lime:     { border: "border-b-lime-500",   badge: "bg-lime-500",   label: "text-lime-500" },
};

const inactiveClasses = {
  border: "border-b-gray-400",
  badge: "bg-gray-400",
  label: "text-muted-foreground",
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

  /* ── Resolved colours per state ── */
  const showColor = isActive || isHovered;
  const classes = showColor && hasColor ? variantClasses[variant] : inactiveClasses;

  /* Description & Value: theme-aware (foreground in light+dark) */
  const descClass = showColor ? "text-muted-foreground" : "text-muted-foreground/60";
  const valueClass = showColor ? "text-foreground" : "text-muted-foreground";

  /* ── Shadow ── */
  const shadowClass = isActive
    ? "shadow-xl"
    : "shadow-sm";

  return (
    <Card
      className={cn(
        "relative bg-card border-0 border-b-4 rounded-2xl transition-all duration-300 overflow-hidden",
        onClick && "cursor-pointer",
        classes.border,
        shadowClass,
        className
      )}
      onClick={onClick}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <CardContent className="pt-6 pb-7 px-6 relative">
        <div className="flex flex-col gap-2 w-full">
          {/* ── Label ── */}
          <div className="flex items-center justify-between w-full min-h-5">
            <p
              className={cn("font-bold leading-[20px] text-[14px] transition-colors duration-300", classes.label)}
            >
              {label}
            </p>
          </div>

          {/* ── Separator + Description ── */}
          <div className="flex flex-col items-start pt-2 w-full relative">
            <div
              aria-hidden="true"
              className="absolute border-gray-300 border-solid border-t inset-0 pointer-events-none"
            />
            <div className="flex items-center justify-between w-full min-h-5">
              <p
                className={cn("text-[12px] leading-[12px] transition-colors duration-300", descClass)}
              >
                {description}
              </p>
            </div>
          </div>

          {/* ── Value + Icon ── */}
          <div className="flex items-end justify-between w-full min-h-8">
            <p
              className={cn("font-bold leading-[32px] text-[24px] transition-colors duration-300", valueClass)}
            >
              {value}
            </p>
            {icon && (
              <span className="text-gray-300 shrink-0 [&>svg]:w-8 [&>svg]:h-8">
                {icon}
              </span>
            )}
          </div>

          {/* ── Badge (counter) ── */}
          <div
            className={cn(
              "absolute right-6 top-6 flex items-center justify-center min-h-6 px-2 py-0.5 rounded-lg transition-colors duration-300",
              classes.badge
            )}
          >
            <span className="font-medium leading-normal text-white text-xs text-center tracking-wide whitespace-nowrap">
              {count}
            </span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}