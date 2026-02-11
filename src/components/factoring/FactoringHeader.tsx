import { 
  LogOut, 
  BookOpen, 
  ChevronDown, 
  Users, 
  Settings, 
  Building2,
} from "lucide-react";
import { Button } from "../ui/button";
import { 
  DropdownMenu, 
  DropdownMenuContent, 
  DropdownMenuItem, 
  DropdownMenuLabel, 
  DropdownMenuSeparator, 
  DropdownMenuTrigger 
} from "../ui/dropdown-menu";
import { Avatar, AvatarFallback } from "../ui/avatar";
import { SidebarTrigger } from "../ui/sidebar";
import type { View, UserRole } from "./FactoringViewRenderer";

// ═══════════════════════════════════════════════════════════════════
// Causa 15: FactoringHeader usa SidebarTrigger de Shadcn
// en vez de Sheet manual, igual que el header del DSM.
// ═══════════════════════════════════════════════════════════════════

interface FactoringHeaderProps {
  currentView: View;
  userRole: UserRole;
  setUserRole: (role: UserRole) => void;
  setCurrentView: (v: View) => void;
  onLogout: () => void;
  onExit: () => void;
}

export function FactoringHeader({
  currentView,
  userRole,
  setUserRole,
  setCurrentView,
  onLogout,
  onExit,
}: FactoringHeaderProps) {
  return (
    <header className="h-[64px] bg-background text-foreground flex items-center justify-between px-6 sticky top-0 z-40 border-b border-border shadow-sm">
      <div className="flex items-center gap-2">
        {/* Mobile sidebar trigger — usa el sistema Shadcn en vez de Sheet manual */}
        <SidebarTrigger className="md:hidden text-foreground" />

        <span className="font-medium text-muted-foreground">C-FINANCIA</span>
        <span className="text-border">/</span>
        <span className="font-semibold text-foreground capitalize">
          {currentView === "welcome" ? "Inicio" : currentView.replace("-", " ")}
        </span>
      </div>

      <div className="flex items-center gap-4">
        <Button variant="ghost" className="text-muted-foreground hover:text-foreground hover:bg-muted hidden md:flex gap-2">
          <BookOpen className="h-4 w-4" />
          Instructivos
        </Button>

        <div className="h-6 w-px bg-border mx-1 hidden md:block" />

        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="flex items-center gap-3 pl-2 pr-1 h-auto py-1 hover:bg-muted text-foreground">
              <Avatar className="h-9 w-9 border-2 border-primary">
                <AvatarFallback className="bg-primary/10 text-primary">SP</AvatarFallback>
              </Avatar>
              <div className="hidden md:flex flex-col items-start text-xs">
                <span className="font-medium text-foreground">soporte.cfinancia</span>
                <span className="text-primary capitalize">
                  {userRole === "admin" ? "Administrador" : "Cliente"}
                </span>
              </div>
              <ChevronDown className="h-3 w-3 text-muted-foreground" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" className="w-56 bg-popover text-popover-foreground">
            <DropdownMenuLabel>Mi Cuenta</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem onClick={() => setUserRole(userRole === "admin" ? "client" : "admin")}>
              <Users className="mr-2 h-4 w-4" />
              <span>Cambiar Rol ({userRole === "admin" ? "Cliente" : "Admin"})</span>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <Settings className="mr-2 h-4 w-4" />
              <span>Administración</span>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <Building2 className="mr-2 h-4 w-4" />
              <span>Cambiar Empresa</span>
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem onClick={onLogout} className="text-red-600">
              <LogOut className="mr-2 h-4 w-4" />
              <span>Cerrar Sesión</span>
            </DropdownMenuItem>
            <DropdownMenuItem 
              onClick={(e) => {
                e.stopPropagation();
                onExit();
              }} 
              className="text-muted-foreground"
            >
              <LogOut className="mr-2 h-4 w-4" />
              <span>Volver al DSM</span>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </header>
  );
}