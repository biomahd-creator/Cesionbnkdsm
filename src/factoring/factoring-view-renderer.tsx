import React, { Suspense } from "react";
import { LayoutDashboard, FileText, Loader2 } from "lucide-react";
import { Button } from "../components/ui/button";

import { MultiStepFormPage } from "../pages/MultiStepFormPage";
import { ViewInversionistas } from "./views/view-inversionistas";
import { ViewPerfilCliente } from "./views/view-perfil-cliente";
import { ViewSettings } from "./views/view-settings";
import { FactoringNewOperation } from "./views/factoring-new-operation";
import { RadianAdminDashboard } from "./views/radian-admin-dashboard";

const CFinanciaFlowLazy = React.lazy(() =>
  import("./cesionbnk/c-financia-flow").then((m) => ({
    default: m.CFinanciaFlow,
  }))
);

const CFinanciaClientFlowLazy = React.lazy(() =>
  import("./cesionbnk/c-financia-client-flow").then((m) => ({
    default: m.CFinanciaClientFlow,
  }))
);

const DashboardComercialLazy = React.lazy(() =>
  import("./dashboard-comercial/dashboard-comercial").then((m) => ({
    default: m.DashboardComercial,
  }))
);

export type View =
  | "welcome"
  | "vinculacion"
  | "c-financia"
  | "c-financia-cliente"
  | "dashboard-comercial"
  | "inversionistas"
  | "perfil-cliente"
  | "settings"
  | "nueva-operacion"
  | "radian";
export type UserRole = "admin" | "client" | null;

interface FactoringViewRendererProps {
  currentView: View;
  userRole: UserRole;
  setCurrentView: (v: View) => void;
  onExit: () => void;
}

function LazyFallback() {
  return (
    <div className="flex items-center justify-center h-[60vh]">
      <Loader2 className="h-8 w-8 animate-spin text-primary" />
    </div>
  );
}

export function FactoringViewRenderer({ currentView, userRole, setCurrentView, onExit }: FactoringViewRendererProps) {
  switch (currentView) {
    case "welcome":
      return (
        <div className="flex flex-col items-center justify-center h-full text-muted-foreground p-8">
          <div className="w-16 h-16 bg-muted rounded-full flex items-center justify-center mb-4">
            <LayoutDashboard className="h-8 w-8 text-muted-foreground" />
          </div>
          <h2 className="text-2xl font-semibold text-foreground">Bienvenido a Financio</h2>
          <p className="mt-2 text-center max-w-md">
            Seleccione una opción del menú lateral para comenzar.
          </p>
        </div>
      );

    case "vinculacion":
      return (
        <div className="space-y-8 p-8">
           <div className="flex items-center gap-6">
              <Button variant="ghost" onClick={() => setCurrentView("welcome")}>← Volver</Button>
              <h2 className="text-2xl font-bold text-secondary">Proceso de Vinculación</h2>
           </div>
           <MultiStepFormPage />
        </div>
      );

    case "c-financia":
      return (
        <div className="w-full">
          <Suspense fallback={<LazyFallback />}>
            <CFinanciaFlowLazy />
          </Suspense>
        </div>
      );

    case "c-financia-cliente":
      return (
        <div className="w-full">
          <Suspense fallback={<LazyFallback />}>
            <CFinanciaClientFlowLazy />
          </Suspense>
        </div>
      );

    case "dashboard-comercial":
      return (
        <div className="w-full">
          <Suspense fallback={<LazyFallback />}>
            <DashboardComercialLazy />
          </Suspense>
        </div>
      );

    case "inversionistas":
      return <ViewInversionistas />;

    case "perfil-cliente":
      return <ViewPerfilCliente />;

    case "settings":
      return <ViewSettings />;

    case "nueva-operacion":
      return (
        <FactoringNewOperation
          showNav={false}
          onBack={() => setCurrentView("welcome")}
          onStartOperation={() => setCurrentView("welcome")}
        />
      );

    case "radian":
      return (
        <div className="p-4">
          <RadianAdminDashboard onBack={() => setCurrentView("welcome")} />
        </div>
      );

    default:
      return (
        <div className="flex flex-col items-center justify-center h-[60vh] text-muted-foreground">
          <FileText className="h-16 w-16 mb-4 text-muted" />
          <h2 className="text-xl font-semibold">Sección en construcción</h2>
          <p className="text-muted-foreground">La vista {currentView} estará disponible pronto.</p>
          <Button variant="outline" className="mt-4" onClick={() => setCurrentView("welcome")}>
            Volver al Inicio
          </Button>
        </div>
      );
  }
}
