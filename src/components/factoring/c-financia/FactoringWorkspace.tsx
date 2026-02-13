// Causa 18: Movido de /factoring/c-financia/ a /components/factoring/c-financia/
import { useState } from "react";
import { toast } from "sonner@2.0.3";
import { CFinanciaNavbar } from "./CFinanciaNavbar";
import { OperationsList } from "../OperationsList";
import { FactoringNewOperation } from "../views/FactoringNewOperation";
import { PageTransition } from "../../ui/page-transition";
import { useScrollToTop } from "../../../hooks/usePageTransition";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "../../ui/breadcrumb";
import { Home } from "lucide-react";

interface FactoringWorkspaceProps {
  onLogout?: () => void;
}

export function FactoringWorkspace({ onLogout }: FactoringWorkspaceProps) {
  useScrollToTop();
  const [showNewOperation, setShowNewOperation] = useState(false);

  // Causa 12: UN SOLO return con ternary — sin early returns.
  return (
    <div className="min-h-screen w-full">
      {showNewOperation ? (
        <FactoringNewOperation 
          onBack={() => setShowNewOperation(false)}
          onStartOperation={() => toast.success("Operación iniciada")}
        />
      ) : (
        <div className="min-h-screen bg-muted/30">
          {/* Navbar Completo */}
          <CFinanciaNavbar variant="full" onLogout={onLogout} />
          
          {/* Breadcrumbs */}
          <div className="px-8 py-3 pt-[90px]">
            <Breadcrumb>
              <BreadcrumbList>
                <BreadcrumbItem>
                  <BreadcrumbLink href="#" onClick={(e: React.MouseEvent) => e.preventDefault()} className="flex items-center gap-2">
                    <Home className="h-4 w-4" />
                    Inicio
                  </BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator />
                <BreadcrumbItem>
                  <BreadcrumbLink href="#" onClick={(e: React.MouseEvent) => e.preventDefault()}>
                    Factoring
                  </BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator />
                <BreadcrumbItem>
                  <BreadcrumbPage>Mis Operaciones</BreadcrumbPage>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>
          </div>
          
          {/* Main Content */}
          <main className="p-8">
            <PageTransition variant="fade">
              <OperationsList onNewOperation={() => setShowNewOperation(true)} />
            </PageTransition>
          </main>
        </div>
      )}
    </div>
  );
}