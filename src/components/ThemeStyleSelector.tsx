import { Paintbrush, Check, RotateCcw } from "lucide-react";
import { Button } from "./ui/button";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "./ui/popover";
import { useTheme, type StyleThemeOption } from "./ThemeProvider";
import { cn } from "./ui/utils";
import { Separator } from "./ui/separator";

/**
 * ThemeStyleSelector — Selector de estilo visual global.
 * 
 * Controla el data-theme attribute en <html> para activar
 * los CSS files en /styles/themes/.
 * 
 * "default" = sin atributo = globals.css original (punto de restauración).
 * 
 * @example
 * <ThemeStyleSelector />
 */

/** Mini preview colors for each theme */
const themePreviewColors: Record<string, { bg: string; card: string; accent: string; border: string }> = {
  default: {
    bg: "#ffffff",
    card: "#ffffff",
    accent: "#00c951",
    border: "#e4e4e7",
  },
  premium: {
    bg: "#fafafa",
    card: "#ffffff",
    accent: "#18181b",
    border: "#e4e4e7",
  },
  glass: {
    bg: "#f1f5f9",
    card: "rgba(255,255,255,0.7)",
    accent: "#3b82f6",
    border: "#cbd5e1",
  },
  minimal: {
    bg: "#ffffff",
    card: "#ffffff",
    accent: "#1c1917",
    border: "#f5f5f4",
  },
  tailwindpro: {
    bg: "#ffffff",
    card: "#ffffff",
    accent: "#0f172a",
    border: "#e2e8f0",
  },
  heroui: {
    bg: "#fafafa",
    card: "#ffffff",
    accent: "#006fee",
    border: "#e4e4e7",
  },
  soft: {
    bg: "#fdfcfb",
    card: "#ffffff",
    accent: "#78716c",
    border: "#e7e5e4",
  },
  highcontrast: {
    bg: "#ffffff",
    card: "#ffffff",
    accent: "#050505",
    border: "#737373",
  },
};

function ThemePreviewSwatch({ themeId, isActive }: { themeId: string; isActive: boolean }) {
  const colors = themePreviewColors[themeId] || themePreviewColors.default;

  return (
    <div
      className={cn(
        "relative w-10 h-10 rounded-md overflow-hidden border-2 transition-all duration-200 flex-shrink-0",
        isActive
          ? "border-primary ring-2 ring-primary/20"
          : "border-border hover:border-muted-foreground/30"
      )}
    >
      {/* Background */}
      <div className="absolute inset-0" style={{ backgroundColor: colors.bg }} />
      {/* Card mock */}
      <div
        className="absolute top-1 left-1 right-1 h-4 rounded-sm"
        style={{ backgroundColor: colors.card, border: `1px solid ${colors.border}` }}
      />
      {/* Accent bar */}
      <div
        className="absolute bottom-1 left-1 w-4 h-1.5 rounded-full"
        style={{ backgroundColor: colors.accent }}
      />
      {/* Active checkmark */}
      {isActive && (
        <div className="absolute inset-0 flex items-center justify-center bg-primary/10">
          <Check className="h-4 w-4 text-primary" />
        </div>
      )}
    </div>
  );
}

function ThemeOptionRow({ option, isActive, onSelect }: {
  option: StyleThemeOption;
  isActive: boolean;
  onSelect: () => void;
}) {
  return (
    <button
      onClick={onSelect}
      className={cn(
        "flex items-center gap-3 w-full p-2 rounded-lg text-left transition-colors duration-150",
        isActive
          ? "bg-primary/10 text-foreground"
          : "hover:bg-muted text-foreground"
      )}
      role="option"
      aria-selected={isActive}
    >
      <ThemePreviewSwatch themeId={option.id} isActive={isActive} />
      <div className="flex-1 min-w-0">
        <div className="flex items-center gap-2">
          <span className="text-sm">{option.icon}</span>
          <span className={cn("text-sm", isActive ? "text-primary" : "text-foreground")}>
            {option.name}
          </span>
        </div>
        <p className="text-xs text-muted-foreground truncate mt-0.5">
          {option.description}
        </p>
      </div>
      {isActive && <Check className="h-4 w-4 text-primary flex-shrink-0" />}
    </button>
  );
}

export function ThemeStyleSelector() {
  const { styleTheme, setStyleTheme, availableStyleThemes } = useTheme();

  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          size="icon"
          className="rounded-full"
          aria-label="Cambiar estilo visual"
          title="Estilo visual"
        >
          <Paintbrush className="h-5 w-5" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-72 p-3" align="end" sideOffset={8}>
        <div className="space-y-3">
          {/* Header */}
          <div className="flex items-center justify-between">
            <div>
              <h4 className="text-sm text-foreground">Estilo Visual</h4>
              <p className="text-xs text-muted-foreground mt-0.5">
                Cambia el look completo de la app
              </p>
            </div>
            {styleTheme !== "default" && (
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setStyleTheme("default")}
                className="h-7 px-2 text-xs text-muted-foreground hover:text-foreground"
                title="Restaurar look original"
              >
                <RotateCcw className="h-3 w-3 mr-1" />
                Reset
              </Button>
            )}
          </div>

          <Separator />

          {/* Theme options */}
          <div className="space-y-1 max-h-[360px] overflow-y-auto" role="listbox" aria-label="Estilos visuales disponibles">
            {availableStyleThemes.map((option) => (
              <ThemeOptionRow
                key={option.id}
                option={option}
                isActive={styleTheme === option.id}
                onSelect={() => setStyleTheme(option.id)}
              />
            ))}
          </div>

          <Separator />

          {/* Footer note */}
          <p className="text-[11px] text-muted-foreground text-center leading-relaxed">
            globals.css no se modifica. Cada tema es un archivo CSS independiente.
          </p>
        </div>
      </PopoverContent>
    </Popover>
  );
}