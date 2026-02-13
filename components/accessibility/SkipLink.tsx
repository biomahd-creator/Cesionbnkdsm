import { cn } from "../ui/utils";

export function SkipLink() {
  return (
    <a
      href="#main-content"
      className={cn(
        "sr-only focus:not-sr-only",
        "fixed top-4 left-4 z-[100]",
        "bg-primary text-secondary",
        "px-4 py-2 rounded-lg",
        "font-medium text-sm",
        "focus:outline-none focus:ring-4 focus:ring-primary/50",
        "transition-all"
      )}
    >
      Saltar al contenido principal
    </a>
  );
}
