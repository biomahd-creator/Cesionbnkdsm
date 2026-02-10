import React, { Suspense } from "react";
import { LayoutDashboard, FileText, Loader2 } from "lucide-react";
import { Button } from "../ui/button";

// ═══════════════════════════════════════════════════════════════════
// Causa 17: Imports estáticos SOLO para vistas livianas.
// Las vistas pesadas (CFinanciaFlow → OperationsList 1700+ líneas,
// CFinanciaClientFlow 900+ líneas, PlaygroundIndex) se cargan
// con React.lazy para que NO entren en el grafo de módulos inicial.
// Esto evita que FGCmp2 procese archivos problemáticos al cargar
// la app Factoring, restaurando point-and-click para la vista
// por defecto (RadianAdminDashboard).
// ═══════════════════════════════════════════════════════════════════

// Vistas livianas — import estático (en /components/, instrumentables)
import { ClientDashboard } from "./views/ClientDashboard";
import { RadianAdminDashboard } from "./views/RadianAdminDashboard";
import { MultiStepFormPage } from "../../pages/MultiStepFormPage";

// Vistas pesadas — lazy import (NO entran en el grafo inicial)
const PlaygroundIndexLazy = React.lazy(() =>
  import("../../factoring/playground/PlaygroundIndex").then((m) => ({
    default: m.PlaygroundIndex,
  }))
);

const CFinanciaFlowLazy = React.lazy(() =>
  import("../../factoring/c-financia/CFinanciaFlow").then((m) => ({
    default: m.CFinanciaFlow,
  }))
);

const CFinanciaClientFlowLazy = React.lazy(() =>
  import("../../factoring/c-financia/CFinanciaClientFlow").then((m) => ({
    default: m.CFinanciaClientFlow,
  }))
);

export type View = "welcome" | "radian-dashboard" | "client-dashboard" | "vinculacion" | "playground" | "c-financia" | "c-financia-cliente";
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

    case "radian-dashboard":
      return (
        <div className="w-full">
          <RadianAdminDashboard />
        </div>
      );
    
    case "client-dashboard":
      return (
        <div className="w-full">
          <ClientDashboard />
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

    case "playground":
      return (
        <div className="w-full">
          <Suspense fallback={<LazyFallback />}>
            <PlaygroundIndexLazy onBack={() => setCurrentView("welcome")} />
          </Suspense>
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
