import React, { Suspense } from "react";
import { LayoutDashboard, FileText, Loader2 } from "lucide-react";
import { Button } from "../ui/button";

// ═══════════════════════════════════════════════════════════════════
// Causa 17: Imports estáticos SOLO para vistas livianas.
// Las vistas pesadas (CFinanciaFlow → OperationsList 1700+ líneas,
// CFinanciaClientFlow 900+ líneas) se cargan
// con React.lazy para que NO entren en el grafo de módulos inicial.
// ═══════════════════════════════════════════════════════════════════

// Vistas livianas — import estático (en /components/, instrumentables)
import { MultiStepFormPage } from "../../pages/MultiStepFormPage";

// Vistas pesadas — lazy import (NO entran en el grafo inicial)
// removed: PlaygroundIndexLazy (playground deleted)

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

const DashboardComercialLazy = React.lazy(() =>
  import("./dashboard-comercial/DashboardComercial").then((m) => ({
    default: m.DashboardComercial,
  }))
);

export type View = "welcome" | "vinculacion" | "c-financia" | "c-financia-cliente" | "dashboard-comercial";
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