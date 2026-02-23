/**
 * CFinanciaNavbar — Factoring Navbar (Tenant-aware)
 * Uses semantic design tokens so it adapts to the active tenant theme.
 */
import React from "react";
import { TrendingUp, FileText, Users, User, ChevronDown } from "lucide-react";
import { cn } from "../../lib/utils";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "../../components/ui/dropdown-menu";
import { Logo } from "../../components/Logo";
import { useTheme } from "../../components/providers/ThemeProvider";

interface CFinanciaNavbarProps {
  onLogout?: () => void;
  variant?: "simple" | "full";
}

export function CFinanciaNavbar({ onLogout, variant = "full" }: CFinanciaNavbarProps) {
  const { tenant, tenants } = useTheme();
  const tenantInfo = tenants.find((t) => t.id === tenant);
  const tenantName = tenantInfo?.name ?? "CESIONBNK";
  const tenantSlug = tenantName.toLowerCase().replace(/\s+/g, "");

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50 h-[64px] px-6 flex items-center justify-between",
        "bg-background/80 backdrop-blur-xl",
        "border-b border-border"
      )}
    >
      <div className="flex items-center gap-10">
        {/* Left: Logo */}
        <div className="flex-shrink-0 h-[34px] flex items-center">
          <Logo size="md" variant="auto" />
        </div>

        {/* Navigation Items */}
        {variant === "full" && (
          <div className="flex items-center gap-1">
            {/* Factoring — Active */}
            <button
              className={cn(
                "flex items-center gap-2 px-4 py-2 rounded-full transition-all duration-300 min-h-[36px]",
                "bg-primary text-primary-foreground",
                "shadow-sm",
                "hover:shadow-md hover:scale-[1.03]"
              )}
            >
              <TrendingUp className="w-4 h-4" />
              <span className="text-sm font-medium leading-none tracking-wide">Factoring</span>
            </button>

            {/* Radian Dropdown */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <button
                  className={cn(
                    "flex items-center gap-2 px-4 py-2 rounded-full transition-all duration-300 min-h-[36px]",
                    "bg-transparent text-muted-foreground hover:bg-muted hover:text-foreground"
                  )}
                >
                  <FileText className="w-4 h-4" />
                  <span className="text-sm font-medium leading-none tracking-wide">Radian</span>
                  <ChevronDown className="w-3 h-3" />
                </button>
              </DropdownMenuTrigger>
              <DropdownMenuContent
                align="start"
                className="w-48 bg-popover border-border text-popover-foreground backdrop-blur-xl"
              >
                <DropdownMenuItem className="cursor-pointer">
                  Eventos Radian
                </DropdownMenuItem>
                <DropdownMenuItem className="cursor-pointer">
                  Mandatos
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            {/* Vinculaciones */}
            <button
              className={cn(
                "flex items-center gap-2 px-4 py-2 rounded-full transition-all duration-300 min-h-[36px]",
                "bg-transparent text-muted-foreground hover:bg-muted hover:text-foreground"
              )}
            >
              <Users className="w-4 h-4" />
              <span className="text-sm font-medium leading-none tracking-wide">Vinculaciones</span>
            </button>
          </div>
        )}
      </div>

      {/* Right: User Profile */}
      {variant === "full" && (
        <div className="flex items-center gap-3">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <button className="flex items-center gap-3 hover:bg-muted p-1 pr-2 rounded-xl transition-all duration-200 outline-none group">
                <div className="w-8 h-8 rounded-full border border-primary/30 flex items-center justify-center text-primary group-hover:border-primary/60 group-hover:bg-primary/5 transition-all duration-200">
                  <User className="w-4 h-4" />
                </div>
                <div className="flex flex-col items-start">
                  <span className="text-foreground text-xs font-medium tracking-wide">
                    soporte.{tenantSlug}
                  </span>
                  <span className="text-primary text-[10px] font-bold tracking-wider uppercase">
                    {tenantName}
                  </span>
                </div>
                <ChevronDown className="w-3 h-3 text-muted-foreground" />
              </button>
            </DropdownMenuTrigger>
            <DropdownMenuContent
              align="end"
              className="w-48 bg-popover border-border text-popover-foreground backdrop-blur-xl"
            >
              <DropdownMenuItem className="cursor-pointer">
                Perfil
              </DropdownMenuItem>
              <DropdownMenuItem className="cursor-pointer">
                Configuración
              </DropdownMenuItem>
              <DropdownMenuItem
                onClick={onLogout}
                className="text-destructive focus:text-destructive cursor-pointer"
              >
                Cerrar Sesión
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      )}
    </nav>
  );
}