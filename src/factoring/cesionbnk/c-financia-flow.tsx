/**
 * CFinanciaFlow — Admin flow (fullscreen, tenant-aware)
 * No longer uses CfAppShell — relies on semantic tokens from globals.css / ThemeProvider.
 */
import { useState, useEffect } from "react";
import { CFinanciaNavbar } from "./c-financia-navbar";
import { ModulosScreen } from "./modulos-screen";
import { FactoringWorkspace } from "./factoring-workspace";
import { LoginScreen } from "./login-screen";
import { RadianAdminDashboard } from "../views/radian-admin-dashboard";

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
      return <LoginScreen onLogin={onLogin} />;

    case "modules":
      return <ModulosScreen onSelectModule={onSelectModule} onLogout={onExit} />;

    case "workspace":
      if (selectedModule === "factoring") {
        return <FactoringWorkspace onLogout={onExit} />;
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

      // Other modules — placeholder
      return (
        <div className="min-h-screen bg-background">
          <CFinanciaNavbar variant="full" onLogout={onExit} />
          <div className="pt-[80px] p-8">
            <h1 className="text-2xl font-bold text-foreground">Workspace: {selectedModule}</h1>
            <p className="mt-4 text-muted-foreground">
              Aquí se cargará el módulo seleccionado.
            </p>
            <button
              onClick={onBackToModules}
              className="mt-4 px-4 py-2 bg-muted rounded-[var(--radius)] hover:bg-muted/80 transition-colors text-foreground"
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
  const [view, setView] = useState<"login" | "modules" | "workspace">("login");
  const [selectedModule, setSelectedModule] = useState<string | null>(null);

  useEffect(() => {
    localStorage.removeItem("cfinancia-flow-view");
    localStorage.removeItem("cfinancia-flow-module");
  }, []);

  const handleLogin = () => setView("modules");
  const handleSelectModule = (moduleName: string) => {
    setSelectedModule(moduleName);
    setView("workspace");
  };
  const handleBackToModules = () => setView("modules");

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