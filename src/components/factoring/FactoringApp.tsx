import React, { useState, Suspense, useEffect } from "react";
import {
  AdminLayout,
  LayoutHeader,
  LayoutSidebarNav,
  LayoutSidebarGroup,
  LayoutSidebarItem,
  useAdminLayout,
} from "../patterns/AppLayout";
import { FactoringViewRenderer } from "./FactoringViewRenderer";
import type { View, UserRole } from "./FactoringViewRenderer";
import {
  FileText,
  UserCheck,
  LogOut,
  BookOpen,
  ChevronDown,
  Users,
  Settings,
  Building2,
  Loader2,
  BarChart3,
} from "lucide-react";
import { Button } from "../ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";
import { Avatar, AvatarFallback } from "../ui/avatar";
import { useLoading } from "../providers/LoadingProvider";

// ═══════════════════════════════════════════════════════════════════
// Causa 17-18: Fullscreen flows (c-financia) are lazy imports.
// ══════════════════════════════════════════════════════════════════
const CFinanciaFlowLazy = React.lazy(() =>
  import("./c-financia/CFinanciaFlow").then((m) => ({
    default: m.CFinanciaFlow,
  }))
);

const CFinanciaClientFlowLazy = React.lazy(() =>
  import("./c-financia/CFinanciaClientFlow").then((m) => ({
    default: m.CFinanciaClientFlow,
  }))
);

interface FactoringLayoutProps {
  onExit: () => void;
}

/* ── Sidebar content — reads AdminLayout context ── */
function FactoringSidebarContent({
  currentView,
  userRole,
  setCurrentView,
}: {
  currentView: View;
  userRole: UserRole;
  setCurrentView: (v: View) => void;
}) {
  const { closeMobileSidebar } = useAdminLayout();

  const navigate = (view: View) => {
    setCurrentView(view);
    closeMobileSidebar();
  };

  return (
    <LayoutSidebarNav>
      <LayoutSidebarGroup label="Modules">
        <LayoutSidebarItem
          icon={BarChart3}
          label="Dashboard Comercial"
          active={currentView === "dashboard-comercial"}
          onClick={() => navigate("dashboard-comercial")}
        />
      </LayoutSidebarGroup>

      {userRole === "admin" && (
        <LayoutSidebarGroup label="Development">
          <LayoutSidebarItem
            icon={UserCheck}
            label="Vinculación"
            active={currentView === "vinculacion"}
            onClick={() => navigate("vinculacion")}
          />
          <LayoutSidebarItem
            icon={FileText}
            label="C-Financia Admin"
            active={currentView === "c-financia"}
            onClick={() => navigate("c-financia")}
          />
          <LayoutSidebarItem
            icon={FileText}
            label="C-Financia Cliente"
            active={currentView === "c-financia-cliente"}
            onClick={() => navigate("c-financia-cliente")}
          />
        </LayoutSidebarGroup>
      )}
    </LayoutSidebarNav>
  );
}

/* ── Header content — user menu + role switch ── */
function FactoringHeaderContent({
  currentView,
  userRole,
  setUserRole,
  onLogout,
  onExit,
}: {
  currentView: View;
  userRole: UserRole;
  setUserRole: (role: UserRole) => void;
  onLogout: () => void;
  onExit: () => void;
}) {
  return (
    <LayoutHeader
      logo={
        <div className="flex items-center gap-2 pl-10 md:pl-0">
          <span className="font-medium text-muted-foreground">C-FINANCIA</span>
          <span className="text-border">/</span>
          <span className="font-semibold text-foreground capitalize">
            {currentView === "welcome"
              ? "Inicio"
              : currentView.replace(/-/g, " ")}
          </span>
        </div>
      }
      actions={
        <div className="flex items-center gap-4">
          <Button
            variant="ghost"
            className="text-muted-foreground hover:text-foreground hover:bg-muted hidden md:flex gap-2"
          >
            <BookOpen className="h-4 w-4" />
            Instructivos
          </Button>

          <div className="h-6 w-px bg-border mx-1 hidden md:block" />

          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button
                variant="ghost"
                className="flex items-center gap-3 pl-2 pr-1 h-auto py-1 hover:bg-muted text-foreground"
              >
                <Avatar className="h-9 w-9 border-2 border-primary">
                  <AvatarFallback className="bg-primary/10 text-primary">
                    SP
                  </AvatarFallback>
                </Avatar>
                <div className="hidden md:flex flex-col items-start text-xs">
                  <span className="font-medium text-foreground">
                    soporte.cfinancia
                  </span>
                  <span className="text-primary capitalize">
                    {userRole === "admin" ? "Administrador" : "Cliente"}
                  </span>
                </div>
                <ChevronDown className="h-3 w-3 text-muted-foreground" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent
              align="end"
              className="w-56 bg-popover text-popover-foreground"
            >
              <DropdownMenuLabel>Mi Cuenta</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem
                onClick={() =>
                  setUserRole(userRole === "admin" ? "client" : "admin")
                }
              >
                <Users className="mr-2 h-4 w-4" />
                <span>
                  Cambiar Rol ({userRole === "admin" ? "Cliente" : "Admin"})
                </span>
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
              <DropdownMenuItem
                onClick={onLogout}
                className="text-red-600"
              >
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
      }
    />
  );
}

export function FactoringApp({ onExit }: FactoringLayoutProps) {
  const [userRole, setUserRole] = useState<UserRole>("admin");
  const [currentView, setCurrentView] = useState<View>(() => {
    const saved = localStorage.getItem("factoring-current-view");
    const fullscreenViews: View[] = ["c-financia", "c-financia-cliente"];
    const invalidViews = ["radian-dashboard", "client-dashboard", "operations-dashboard", "payment-tracking", "cession-flow", "playground"];
    if (saved && !fullscreenViews.includes(saved as View) && !invalidViews.includes(saved)) {
      return saved as View;
    }
    return "welcome";
  });
  const { hideLoading } = useLoading();

  useEffect(() => {
    hideLoading();
  }, [hideLoading]);

  useEffect(() => {
    localStorage.setItem("factoring-current-view", currentView);
  }, [currentView]);

  const handleLogout = () => {
    setUserRole(null);
  };

  const handleExitSafely = React.useCallback(() => {
    if (window.confirm("¿Estás seguro de que quieres volver al DSM?")) {
      onExit();
    }
  }, [onExit]);

  const isFullscreenView =
    currentView === "c-financia" || currentView === "c-financia-cliente";

  // Fullscreen views render OUTSIDE the AdminLayout
  if (isFullscreenView) {
    return (
      <div className="min-h-screen w-full">
        <Suspense
          fallback={
            <div className="flex items-center justify-center min-h-screen">
              <Loader2 className="h-8 w-8 animate-spin text-primary" />
            </div>
          }
        >
          {currentView === "c-financia" ? (
            <CFinanciaFlowLazy onExit={handleExitSafely} />
          ) : (
            <CFinanciaClientFlowLazy onExit={handleExitSafely} />
          )}
        </Suspense>
      </div>
    );
  }

  return (
    <AdminLayout
      stickyHeader
      collapsible
      sidebarWidth={240}
      sidebarCollapsedWidth={56}
      sidebarHeader={
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded bg-primary flex items-center justify-center shrink-0">
            <span className="font-bold text-primary-foreground">F</span>
          </div>
          <div>
            <span className="font-bold text-lg tracking-wide block leading-none text-sidebar-foreground">
              FINANCIO
            </span>
            <span className="text-xs text-muted-foreground uppercase">
              {userRole === "admin" ? "Admin Console" : "Empresas"}
            </span>
          </div>
        </div>
      }
      header={
        <FactoringHeaderContent
          currentView={currentView}
          userRole={userRole}
          setUserRole={setUserRole}
          onLogout={handleLogout}
          onExit={handleExitSafely}
        />
      }
      sidebar={
        <FactoringSidebarContent
          currentView={currentView}
          userRole={userRole}
          setCurrentView={setCurrentView}
        />
      }
      sidebarFooter={
        <div className="space-y-1">
          <button
            className="flex w-full items-center gap-3 rounded-[var(--radius)] px-3 py-2 text-sm text-muted-foreground hover:text-foreground hover:bg-sidebar-accent transition-colors"
            onClick={handleLogout}
          >
            <LogOut className="h-4 w-4" />
            <span>Cerrar Sesión</span>
          </button>
          <button
            className="flex w-full items-center gap-3 rounded-[var(--radius)] px-3 py-2 text-sm text-muted-foreground hover:text-foreground hover:bg-sidebar-accent transition-colors"
            onClick={(e) => {
              e.stopPropagation();
              handleExitSafely();
            }}
          >
            <LogOut className="h-4 w-4" />
            <span>Salir al DSM</span>
          </button>
        </div>
      }
      bodyClassName="flex-1 bg-muted/30"
    >
      <FactoringViewRenderer
        currentView={currentView}
        userRole={userRole}
        setCurrentView={setCurrentView}
        onExit={handleExitSafely}
      />
    </AdminLayout>
  );
}