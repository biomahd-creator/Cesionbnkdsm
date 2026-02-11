import React, { useState, Suspense, useEffect } from "react";
import { SidebarProvider, SidebarInset } from "../ui/sidebar";
import { FactoringSidebar } from "./FactoringSidebar";
import { FactoringHeader } from "./FactoringHeader";
import { FactoringViewRenderer } from "./FactoringViewRenderer";
import type { View, UserRole } from "./FactoringViewRenderer";
import { Loader2 } from "lucide-react";
import { useLoading } from "../providers/LoadingProvider";

// ═══════════════════════════════════════════════════════════════════
// Causa 17: Fullscreen flows ahora son lazy imports.
// CFinanciaFlow → FactoringWorkspace → OperationsList (1700+ líneas)
// CFinanciaClientFlow (~900+ líneas)
// Estos imports estáticos forzaban a FGCmp2 a procesar TODA la
// cadena de dependencias al cargar FactoringApp, incluso cuando
// la vista activa era RadianAdminDashboard. Al convertirlos a lazy,
// el grafo de módulos inicial solo incluye los componentes livianos
// que SÍ están instrumentados en /components/.
// ═══════════════════════════════════════════════════════════════════

// Causa 18: Lazy imports apuntan a /components/factoring/c-financia/
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

export function FactoringApp({ onExit }: FactoringLayoutProps) {
  const [userRole, setUserRole] = useState<UserRole>("admin");
  // Persist currentView in localStorage to survive Figma Make reloads
  // BUT never restore fullscreen views — always default to sidebar layout
  const [currentView, setCurrentView] = useState<View>(() => {
    const saved = localStorage.getItem("factoring-current-view");
    const fullscreenViews: View[] = ["c-financia", "c-financia-cliente"];
    if (saved && !fullscreenViews.includes(saved as View)) {
      return saved as View;
    }
    return "radian-dashboard";
  });
  const { hideLoading } = useLoading();

  // Asegurar que el loading overlay esté oculto al montar
  useEffect(() => {
    hideLoading();
  }, [hideLoading]);

  // Save currentView to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem("factoring-current-view", currentView);
  }, [currentView]);

  const handleLogout = () => {
    setUserRole(null);
  };

  // Wrapper seguro para onExit que requiere confirmación y previene llamadas accidentales
  const handleExitSafely = React.useCallback(() => {
    // Solo ejecutar si realmente queremos salir
    if (window.confirm("¿Estás seguro de que quieres volver al DSM?")) {
      onExit();
    }
  }, [onExit]);

  const isFullscreenView = currentView === "c-financia" || currentView === "c-financia-cliente";

  // Fullscreen views se renderizan FUERA del SidebarProvider
  // con lazy loading para no contaminar el grafo inicial.
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
    <div className="min-h-screen w-full bg-background">
      <SidebarProvider
        defaultOpen={true}
      >
        <FactoringSidebar
          currentView={currentView}
          userRole={userRole}
          setCurrentView={setCurrentView}
          onLogout={handleLogout}
          onExit={handleExitSafely}
        />
        <SidebarInset>
          <FactoringHeader
            currentView={currentView}
            userRole={userRole}
            setUserRole={setUserRole}
            setCurrentView={setCurrentView}
            onLogout={handleLogout}
            onExit={handleExitSafely}
          />
          <main className="flex-1 bg-muted/30">
            <FactoringViewRenderer
              currentView={currentView}
              userRole={userRole}
              setCurrentView={setCurrentView}
              onExit={handleExitSafely}
            />
          </main>
        </SidebarInset>
      </SidebarProvider>
    </div>
  );
}