import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarGroup,
  SidebarGroupLabel,
} from "../ui/sidebar";
import { Badge } from "../ui/badge";
import { 
  LayoutDashboard, 
  FileText, 
  UserCheck, 
  Beaker, 
  LogOut 
} from "lucide-react";
import { Button } from "../ui/button";
import type { View, UserRole } from "./FactoringViewRenderer";

// ═══════════════════════════════════════════════════════════════════
// Causa 15: FactoringSidebar usa el sistema Shadcn Sidebar
// EXACTAMENTE igual que SidebarNew del DSM, para que FGCmp2
// tenga la misma estructura DOM (spacer + fixed + inner).
// ═══════════════════════════════════════════════════════════════════

interface FactoringSidebarProps {
  currentView: View;
  userRole: UserRole;
  setCurrentView: (v: View) => void;
  onLogout: () => void;
  onExit: () => void;
}

export function FactoringSidebar({ currentView, userRole, setCurrentView, onLogout, onExit }: FactoringSidebarProps) {
  return (
    <Sidebar>
      {/* Header */}
      <SidebarHeader className="h-[64px] flex-row items-center gap-3 border-b border-sidebar-border px-4">
        <div className="w-8 h-8 rounded bg-primary flex items-center justify-center shrink-0">
          <span className="font-bold text-primary-foreground">F</span>
        </div>
        <div>
          <span className="font-bold text-lg tracking-wide block leading-none text-sidebar-foreground">FINANCIO</span>
          <span className="text-xs text-muted-foreground uppercase">
            {userRole === "admin" ? "Admin Console" : "Empresas"}
          </span>
        </div>
      </SidebarHeader>

      {/* Navigation */}
      <SidebarContent className="py-4">
        <SidebarGroup>
          <SidebarGroupLabel className="text-muted-foreground">Módulos</SidebarGroupLabel>
          <SidebarMenu>
            <SidebarMenuItem>
              <SidebarMenuButton
                isActive={["radian-dashboard", "client-dashboard"].includes(currentView)}
                onClick={() => setCurrentView(userRole === "admin" ? "radian-dashboard" : "client-dashboard")}
              >
                <LayoutDashboard className="h-4 w-4" />
                <span>Dashboard</span>
              </SidebarMenuButton>
            </SidebarMenuItem>
          </SidebarMenu>
        </SidebarGroup>

        {userRole === "admin" && (
          <SidebarGroup>
            <SidebarGroupLabel className="text-muted-foreground">Desarrollo</SidebarGroupLabel>
            <SidebarMenu>
              <SidebarMenuItem>
                <SidebarMenuButton
                  isActive={currentView === "vinculacion"}
                  onClick={() => setCurrentView("vinculacion")}
                >
                  <UserCheck className="h-4 w-4" />
                  <span>Vinculación</span>
                </SidebarMenuButton>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarMenuButton
                  isActive={currentView === "playground"}
                  onClick={() => setCurrentView("playground")}
                >
                  <Beaker className="h-4 w-4" />
                  <span>Playground</span>
                  <Badge className="ml-auto bg-primary text-primary-foreground text-[10px] px-1.5 py-0">DEV</Badge>
                </SidebarMenuButton>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarMenuButton
                  isActive={currentView === "c-financia"}
                  onClick={() => setCurrentView("c-financia")}
                >
                  <FileText className="h-4 w-4" />
                  <span>C-Financia Admin</span>
                  <Badge className="ml-auto bg-primary text-primary-foreground text-[10px] px-1.5 py-0">NEW</Badge>
                </SidebarMenuButton>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarMenuButton
                  isActive={currentView === "c-financia-cliente"}
                  onClick={() => setCurrentView("c-financia-cliente")}
                >
                  <FileText className="h-4 w-4" />
                  <span>C-Financia Cliente</span>
                  <Badge className="ml-auto bg-primary text-primary-foreground text-[10px] px-1.5 py-0">NEW</Badge>
                </SidebarMenuButton>
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarGroup>
        )}
      </SidebarContent>

      {/* Footer */}
      <SidebarFooter className="border-t border-sidebar-border">
        <Button 
          variant="ghost" 
          className="w-full justify-start gap-3 text-muted-foreground hover:text-foreground hover:bg-muted"
          onClick={onLogout}
        >
          <LogOut className="h-4 w-4" />
          Cerrar Sesión
        </Button>
        <Button 
          variant="ghost" 
          className="w-full justify-start gap-3 text-muted-foreground hover:text-foreground hover:bg-muted"
          onClick={(e) => {
            e.stopPropagation();
            onExit();
          }}
        >
          <LogOut className="h-4 w-4" />
          Salir al DSM
        </Button>
      </SidebarFooter>
    </Sidebar>
  );
}