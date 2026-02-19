// Causa 18: Movido de /factoring/c-financia/ a /components/factoring/c-financia/
import { useState, useEffect } from "react";
import { ArrowLeft } from "lucide-react";
import { Button } from "../../ui/button";
import { CFinanciaNavbar } from "./CFinanciaNavbar";
import { ModulosScreen } from "./ModulosScreen";
import { FactoringWorkspace } from "./FactoringWorkspace";
import { LoginScreen } from "./LoginScreen";
import { RadianAdminDashboard } from "../views/RadianAdminDashboard";

// ═══════════════════════════════════════════════════════════════════
// Causa 12 fix: CFinanciaViewRenderer extraído como componente
// con un SOLO return y switch en vez de early returns cascados.
// Mismo patrón que FactoringViewRenderer y PageRenderer del DSM.
// ═══════════════════════════════════════════════════════════════════

interface CFinanciaViewRendererProps {
  view: "login" | "modules" | "workspace";
  selectedModule: string | null;
  onLogin: () => void;
  onSelectModule: (moduleName: string) => void;
  onBackToModules: () => void;
  onExit?: () => void;
}

function CFinanciaViewRenderer({
  view,
  selectedModule,
  onLogin,
  onSelectModule,
  onBackToModules,
  onExit,
}: CFinanciaViewRendererProps) {
  switch (view) {
    case "login":
      return (
        <div className="min-h-screen w-full">
          <LoginScreen onLogin={onLogin} />
        </div>
      );

    case "modules":
      return (
        <div className="min-h-screen w-full">
          <ModulosScreen onSelectModule={onSelectModule} onLogout={onExit} />
        </div>
      );

    case "workspace":
      if (selectedModule === "factoring") {
        return (
          <div className="min-h-screen w-full">
            <FactoringWorkspace onLogout={onExit} />
          </div>
        );
      }

      if (selectedModule === "radian") {
        return (
          <div className="min-h-screen bg-background">
            <CFinanciaNavbar variant="full" onLogout={onExit} />
            <div className="pt-[80px]">
              <RadianAdminDashboard onBack={onBackToModules} />
            </div>
          </div>
        );
      }

      // Otros módulos - Placeholder
      return (
        <div className="min-h-screen bg-background">
          <CFinanciaNavbar variant="full" onLogout={onExit} />
          <div className="pt-[80px] p-8">
            <h1 className="text-2xl font-bold text-[var(--color-cfinancia-navy)]">Workspace: {selectedModule}</h1>
            <p className="mt-4 text-muted-foreground">
                Aquí se cargará el módulo seleccionado.
            </p>
            <button 
                onClick={onBackToModules}
                className="mt-4 px-4 py-2 bg-muted rounded hover:bg-muted/80 transition-colors"
            >
                Volver a Módulos
            </button>
          </div>
        </div>
      );

    default:
      return <div className="min-h-screen bg-background" />;
  }
}

export function CFinanciaFlow({ onExit }: { onExit?: () => void }) {
  // Always start at login when entering C-Financia Admin flow
  const [view, setView] = useState<"login" | "modules" | "workspace">("login");
  
  // Always reset selectedModule on fresh mount
  const [selectedModule, setSelectedModule] = useState<string | null>(null);

  // Clear any stale localStorage on mount
  useEffect(() => {
    localStorage.removeItem('cfinancia-flow-view');
    localStorage.removeItem('cfinancia-flow-module');
  }, []);

  const handleLogin = () => {
    setView("modules");
  };

  const handleSelectModule = (moduleName: string) => {
    setSelectedModule(moduleName);
    setView("workspace");
  };

  const handleBackToModules = () => {
    setView("modules");
  };

  // Causa 12: UN SOLO return — sin early returns.
  // CFinanciaFlow delega el render condicional a CFinanciaViewRenderer.
  return (
    <div className="min-h-screen w-full">
      <CFinanciaViewRenderer
        view={view}
        selectedModule={selectedModule}
        onLogin={handleLogin}
        onSelectModule={handleSelectModule}
        onBackToModules={handleBackToModules}
        onExit={onExit}
      />
    </div>
  );
}