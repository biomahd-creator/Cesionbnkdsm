import React from "react";
import { TrendingUp, FileText, Users, User, ChevronDown } from "lucide-react";
import { cn } from "../../lib/utils";
import { Button } from "../../components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "../../components/ui/dropdown-menu";
import svgPaths from "../../imports/svg-r8l6shtkw1";

function CFinanciaLogo() {
  return (
    <div className="w-[180px] h-[34px]">
      <svg className="block w-full h-full" fill="none" viewBox="0 0 180 34.2844">
        <g id="Logo">
          {/* Logo SVG paths - Estos son assets estáticos de Figma, mantener colores originales */}
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
  );
}

interface NavItemProps {
  icon: React.ElementType;
  label: string;
  isActive?: boolean;
  onClick?: () => void;
}

function NavItem({ icon: Icon, label, isActive, onClick }: NavItemProps) {
  return (
    <button
      onClick={onClick}
      className={cn(
        "flex items-center gap-2 px-4 py-2 rounded-full transition-all duration-200 min-h-[36px]",
        isActive
          ? "bg-[rgb(var(--cfinancia-accent))] text-foreground"
          : "bg-transparent text-white hover:bg-white/10"
      )}
    >
      <Icon className={cn("w-4 h-4", isActive ? "text-foreground" : "text-white")} />
      <span className="text-sm font-medium leading-none tracking-wide">{label}</span>
    </button>
  );
}

interface NavItemWithDropdownProps {
  icon: React.ElementType;
  label: string;
  isActive?: boolean;
  items: { label: string; onClick: () => void }[];
}

function NavItemWithDropdown({ icon: Icon, label, isActive, items }: NavItemWithDropdownProps) {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <button
          className={cn(
            "flex items-center gap-2 px-4 py-2 rounded-full transition-all duration-200 min-h-[36px]",
            isActive
              ? "bg-[rgb(var(--cfinancia-accent))] text-foreground"
              : "bg-transparent text-white hover:bg-white/10"
          )}
        >
          <Icon className={cn("w-4 h-4", isActive ? "text-foreground" : "text-white")} />
          <span className="text-sm font-medium leading-none tracking-wide">{label}</span>
          <ChevronDown className={cn("w-3 h-3", isActive ? "text-foreground" : "text-white")} />
        </button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="start" className="w-48 bg-[rgb(var(--cfinancia-navy))] border-white/10 text-white">
        {items.map((item, index) => (
          <DropdownMenuItem 
            key={index}
            onClick={item.onClick}
            className="focus:bg-white/10 focus:text-white cursor-pointer"
          >
            {item.label}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

interface CFinanciaNavbarProps {
  onLogout?: () => void;
  variant?: "simple" | "full";
}

export function CFinanciaNavbar({ onLogout, variant = "full" }: CFinanciaNavbarProps) {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 h-[64px] bg-[rgb(var(--cfinancia-navy))] shadow-lg px-6 flex items-center justify-between">
      <div className="flex items-center gap-10">
        {/* Left: Logo */}
        <div className="flex-shrink-0">
          <CFinanciaLogo />
        </div>

        {/* Navigation Group - Only show in full variant */}
        {variant === "full" && (
          <div className="flex items-center gap-1">
            <NavItem icon={TrendingUp} label="Factoring" isActive={true} />
            <NavItemWithDropdown 
              icon={FileText} 
              label="Radian" 
              isActive={false}
              items={[
                { label: "Eventos Radian", onClick: () => console.log("Eventos Radian clicked") },
                { label: "Mandatos", onClick: () => console.log("Mandatos clicked") },
              ]}
            />
            <NavItem icon={Users} label="Vinculaciones" isActive={false} />
          </div>
        )}
      </div>

      {/* Right: User Profile - Only show in full variant */}
      {variant === "full" && (
        <div className="flex items-center gap-3">
          <DropdownMenu>
              <DropdownMenuTrigger asChild>
                  <button className="flex items-center gap-3 hover:bg-white/5 p-1 pr-2 rounded-lg transition-colors outline-none">
                      <div className="w-8 h-8 rounded-full border border-primary flex items-center justify-center text-primary">
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