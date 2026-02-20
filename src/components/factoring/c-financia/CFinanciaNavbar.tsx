/**
 * CFinanciaNavbar
 * ─────────────────────
 * REFACTOR FINAL (Point-and-Click Fix):
 * Se han eliminado los sub-componentes (NavItem, NavItemWithDropdown) y se ha
 * implementado un renderizado directo en el componente principal.
 * Esto asegura que cada botón de navegación sea identificable por el inspector.
 *
 * v1.1.0 — Logo now uses shared tenant-aware <Logo> component (variant="dark").
 */
import React from "react";
import { TrendingUp, FileText, Users, User, ChevronDown } from "lucide-react";
import { cn } from "../../../lib/utils";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "../../ui/dropdown-menu";
import { Logo } from "../../Logo";

interface CFinanciaNavbarProps {
  onLogout?: () => void;
  variant?: "simple" | "full";
}

export function CFinanciaNavbar({ onLogout, variant = "full" }: CFinanciaNavbarProps) {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 h-[64px] bg-secondary shadow-lg px-6 flex items-center justify-between">
      <div className="flex items-center gap-10">
        {/* Left: Logo — tenant-aware, dark variant (bg-secondary is always dark) */}
        <div className="flex-shrink-0 h-[34px] flex items-center">
          <Logo size="md" variant="dark" />
        </div>

        {/* Navigation Items rendered directly */}
        {variant === "full" && (
          <div className="flex items-center gap-1">
            {/* Factoring Nav Item */}
            <button
              className={cn(
                "flex items-center gap-2 px-4 py-2 rounded-full transition-all duration-200 min-h-[36px]",
                "bg-primary text-primary-foreground"
              )}
            >
              <TrendingUp className="w-4 h-4 text-primary-foreground" />
              <span className="text-sm font-medium leading-none tracking-wide">Factoring</span>
            </button>

            {/* Radian Dropdown Nav Item */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <button
                  className={cn(
                    "flex items-center gap-2 px-4 py-2 rounded-full transition-all duration-200 min-h-[36px]",
                    "bg-transparent text-white hover:bg-white/10"
                  )}
                >
                  <FileText className="w-4 h-4 text-white" />
                  <span className="text-sm font-medium leading-none tracking-wide">Radian</span>
                  <ChevronDown className="w-3 h-3 text-white" />
                </button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="start" className="w-48 bg-secondary border-white/10 text-white">
                <DropdownMenuItem
                  className="focus:bg-white/10 focus:text-white cursor-pointer"
                  onClick={() => console.log("Eventos Radian clicked")}
                >
                  Eventos Radian
                </DropdownMenuItem>
                <DropdownMenuItem
                  className="focus:bg-white/10 focus:text-white cursor-pointer"
                  onClick={() => console.log("Mandatos clicked")}
                >
                  Mandatos
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            {/* Vinculaciones Nav Item */}
            <button
              className={cn(
                "flex items-center gap-2 px-4 py-2 rounded-full transition-all duration-200 min-h-[36px]",
                "bg-transparent text-white hover:bg-white/10"
              )}
            >
              <Users className="w-4 h-4 text-white" />
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
              <button className="flex items-center gap-3 hover:bg-white/5 p-1 pr-2 rounded-lg transition-colors outline-none group">
                <div className="w-8 h-8 rounded-full border border-primary flex items-center justify-center text-primary group-hover:bg-primary/10">
                  <User className="w-5 h-5" />
                </div>
                <div className="flex flex-col items-start text-right">
                  <span className="text-white text-xs font-medium tracking-wide">
                    soporte.cfinancia
                  </span>
                  <span className="text-primary text-[10px] font-bold tracking-wider">
                    CFINANCIA
                  </span>
                </div>
                <ChevronDown className="w-3 h-3 text-white/50" />
              </button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-48 bg-secondary border-white/10 text-white">
              <DropdownMenuItem className="focus:bg-white/10 focus:text-white cursor-pointer">
                Perfil
              </DropdownMenuItem>
              <DropdownMenuItem className="focus:bg-white/10 focus:text-white cursor-pointer">
                Configuración
              </DropdownMenuItem>
              <DropdownMenuItem
                onClick={onLogout}
                className="focus:bg-white/10 focus:text-destructive text-destructive cursor-pointer"
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
