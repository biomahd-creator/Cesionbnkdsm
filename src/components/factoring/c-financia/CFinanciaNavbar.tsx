/**
 * CFinanciaNavbar
 * ─────────────────────
 * REFACTOR FINAL (Point-and-Click Fix):
 * Se han eliminado los sub-componentes (NavItem, NavItemWithDropdown) y se ha
 * implementado un renderizado directo en el componente principal.
 * Esto asegura que cada botón de navegación sea identificable por el inspector.
 */
import React from "react";
import { TrendingUp, FileText, Users, User, ChevronDown } from "lucide-react";
import { cn } from "../../../lib/utils";
import { Button } from "../../ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "../../ui/dropdown-menu";
import svgPaths from "../../../imports/svg-r8l6shtkw1";

interface CFinanciaNavbarProps {
  onLogout?: () => void;
  variant?: "simple" | "full";
}

export function CFinanciaNavbar({ onLogout, variant = "full" }: CFinanciaNavbarProps) {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 h-[64px] bg-[rgb(var(--cfinancia-navy))] shadow-lg px-6 flex items-center justify-between">
      <div className="flex items-center gap-10">
        {/* Left: Logo rendered directly */}
        <div className="flex-shrink-0">
          <div className="w-[180px] h-[34px]">
            <svg className="block w-full h-full" fill="none" viewBox="0 0 180 34.2844">
              <g id="Logo">
                <path d={svgPaths.p336ebef0} fill="#DEFB49" id="Vector" />
                <path d={svgPaths.pa9f4d00} fill="#43F977" id="Vector_2" />
                <path d={svgPaths.pe00f180} fill="#1C2D3A" id="Vector_3" />
                <path d={svgPaths.p4826800} fill="white" id="Vector_4" />
                <path d={svgPaths.p37d0bd00} fill="white" id="Vector_5" />
                <path d={svgPaths.p1d381300} fill="#DEFB49" id="Vector_6" />
                <path d={svgPaths.p1169ec00} fill="white" id="Vector_7" />
                <path d={svgPaths.p32bbce00} fill="white" id="Vector_8" />
                <path d={svgPaths.p2c19dd00} fill="white" id="Vector_9" />
                <path d={svgPaths.p27d17a00} fill="white" id="Vector_10" />
                <path d={svgPaths.p1a894980} fill="white" id="Vector_11" />
                <g id="Group">
                  <path d={svgPaths.p881ca00} fill="white" id="Vector_12" />
                  <path d={svgPaths.p1fe13f80} fill="white" id="Vector_13" />
                </g>
              </g>
            </svg>
          </div>
        </div>

        {/* Navigation Items rendered directly */}
        {variant === "full" && (
          <div className="flex items-center gap-1">
            {/* Factoring Nav Item */}
            <button
              className={cn(
                "flex items-center gap-2 px-4 py-2 rounded-full transition-all duration-200 min-h-[36px]",
                "bg-[rgb(var(--cfinancia-accent))] text-foreground"
              )}
            >
              <TrendingUp className="w-4 h-4 text-foreground" />
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
              <DropdownMenuContent align="start" className="w-48 bg-[rgb(var(--cfinancia-navy))] border-white/10 text-white">
                <DropdownMenuItem className="focus:bg-white/10 focus:text-white cursor-pointer" onClick={() => console.log("Eventos Radian clicked")}>
                  Eventos Radian
                </DropdownMenuItem>
                <DropdownMenuItem className="focus:bg-white/10 focus:text-white cursor-pointer" onClick={() => console.log("Mandatos clicked")}>
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
            <DropdownMenuContent align="end" className="w-48 bg-[rgb(var(--cfinancia-navy))] border-white/10 text-white">
              <DropdownMenuItem className="focus:bg-white/10 focus:text-white cursor-pointer">
                Perfil
              </DropdownMenuItem>
              <DropdownMenuItem className="focus:bg-white/10 focus:text-white cursor-pointer">
                Configuración
              </DropdownMenuItem>
              <DropdownMenuItem onClick={onLogout} className="focus:bg-white/10 focus:text-destructive text-destructive cursor-pointer">
                Cerrar Sesión
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      )}
    </nav>
  );
}
