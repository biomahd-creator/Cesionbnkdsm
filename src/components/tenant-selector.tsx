import { useTheme, type TenantId } from "./providers/ThemeProvider";
import { ChevronDown, Check, Palette } from "lucide-react";
import { Button } from "./ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";

/**
 * TenantSelector — Dropdown to switch between white-label tenants.
 *
 * Shows the current tenant's primary color swatch + name.
 * Dropdown lists all available tenants with color indicators.
 *
 * @layer patterns
 */
export function TenantSelector() {
  const { tenant, setTenant, tenants } = useTheme();

  const currentTenant = tenants.find((t) => t.id === tenant) ?? tenants[0];

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="outline"
          className="flex items-center gap-2 h-9 px-3 text-foreground"
        >
          <Palette className="h-4 w-4 text-muted-foreground" />
          <span
            className="h-3 w-3 rounded-full shrink-0 border border-border"
            style={{ backgroundColor: currentTenant.primary }}
          />
          <span className="hidden md:inline text-sm">
            {currentTenant.name}
          </span>
          <ChevronDown className="h-3 w-3 text-muted-foreground" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-56 bg-popover text-popover-foreground">
        <DropdownMenuLabel className="text-xs text-muted-foreground">
          White-label Theme
        </DropdownMenuLabel>
        <DropdownMenuSeparator />
        {tenants.map((t) => (
          <DropdownMenuItem
            key={t.id}
            onClick={() => setTenant(t.id as TenantId)}
            className="flex items-center gap-3 cursor-pointer"
          >
            {/* Color swatches: primary + secondary */}
            <div className="flex items-center gap-1 shrink-0">
              <span
                className="h-4 w-4 rounded-sm border border-border"
                style={{ backgroundColor: t.primary }}
              />
              <span
                className="h-4 w-4 rounded-sm border border-border"
                style={{ backgroundColor: t.secondary }}
              />
            </div>

            {/* Name + font */}
            <div className="flex flex-col flex-1 min-w-0">
              <span className="text-sm text-foreground truncate">
                {t.name}
              </span>
              <span className="text-[11px] text-muted-foreground">
                {t.font}
              </span>
            </div>

            {/* Active check */}
            {tenant === t.id && (
              <Check className="h-4 w-4 text-primary shrink-0" />
            )}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
