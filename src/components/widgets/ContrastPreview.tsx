/**
 * ContrastPreview Component
 * 
 * BUSINESS PATTERN: Vista previa de contraste WCAG sin estilos inline
 * 
 * NO MODIFICAR sin consultar: /components/widgets/WIDGETS_ARCHITECTURE.md
 * Parte del sistema modular sin estilos inline
 */

import { cn } from "../ui/utils";

interface ContrastPreviewProps {
  foreground: string;
  background: string;
  ratio?: string;
  status?: "AAA" | "AA" | "Fail";
  size?: "sm" | "md" | "lg";
  className?: string;
}

const sizeClasses = {
  sm: "h-12",
  md: "h-16",
  lg: "h-20",
};

export function ContrastPreview({
  foreground,
  background,
  ratio,
  status,
  size = "md",
  className,
}: ContrastPreviewProps) {
  return (
    <div className={cn("space-y-2", className)}>
      <div
        className={cn(
          "w-full rounded-lg border flex items-center justify-center font-medium",
          sizeClasses[size]
        )}
        style={{ 
          backgroundColor: `var(--contrast-bg, ${background})`,
          color: `var(--contrast-fg, ${foreground})` 
        }}
      >
        Texto de ejemplo
      </div>
      {(ratio || status) && (
        <div className="flex items-center justify-between text-sm">
          {ratio && (
            <span className="text-muted-foreground">Ratio: {ratio}</span>
          )}
          {status && (
            <span
              className={cn(
                "font-medium",
                status === "AAA" && "text-green-600",
                status === "AA" && "text-yellow-600",
                status === "Fail" && "text-red-600"
              )}
            >
              {status}
            </span>
          )}
        </div>
      )}
    </div>
  );
}