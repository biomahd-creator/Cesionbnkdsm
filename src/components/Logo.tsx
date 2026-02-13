import Capa1 from "../imports/Capa1";
import Capa1Dark from "../imports/Capa1-31-175";
import { cn } from "./ui/utils";
import { useTheme } from "./providers/ThemeProvider";

interface LogoProps {
  className?: string;
  size?: "sm" | "md" | "lg" | "xl";
  variant?: "light" | "dark" | "auto";
}

export function Logo({ className, size = "md", variant = "auto" }: LogoProps) {
  const { config, theme } = useTheme();
  
  const sizeClasses = {
    sm: "h-6 w-auto",
    md: "h-8 w-auto",
    lg: "h-10 w-auto",
    xl: "h-12 w-auto",
  };

  if (config.logoUrl) {
    return (
      <img 
        src={config.logoUrl} 
        alt="Brand Logo" 
        className={cn(sizeClasses[size], "object-contain", className)} 
      />
    );
  }

  // Auto-detect theme if variant is "auto"
  const effectiveVariant = variant === "auto" 
    ? (theme === "dark" ? "dark" : "light")
    : variant;

  const LogoComponent = effectiveVariant === "dark" ? Capa1Dark : Capa1;

  return (
    <div className={cn(sizeClasses[size], className)}>
      <LogoComponent />
    </div>
  );
}