/**
 * FactoringWorkspace — Factoring Operations Workspace (Tenant-aware)
 * Uses semantic design tokens so it adapts to the active tenant theme.
 */
import { useState } from "react";
import { toast } from "sonner@2.0.3";
import { CFinanciaNavbar } from "./c-financia-navbar";
import { OperationsList } from "../operations-list";
import { FactoringNewOperation } from "../views/factoring-new-operation";
import { PageTransition } from "../../components/ui/page-transition";
import { useScrollToTop } from "../../hooks/usePageTransition";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "../../components/ui/breadcrumb";
import { Home } from "lucide-react";

interface FactoringWorkspaceProps {
  onLogout?: () => void;
}

export function FactoringWorkspace({ onLogout }: FactoringWorkspaceProps) {
  useScrollToTop();
  const [showNewOperation, setShowNewOperation] = useState(false);

  return (
    <div className="min-h-screen w-full relative">
      {showNewOperation ? (
        <FactoringNewOperation
          onBack={() => setShowNewOperation(false)}
          onStartOperation={() => toast.success("Operación iniciada")}
        />
      ) : (
        <div className="min-h-screen relative overflow-hidden bg-background">
          {/* Subtle decorative gradient */}
          <div
            className="absolute top-[-15%] right-[-10%] w-[500px] h-[500px] rounded-full opacity-5 blur-[120px] pointer-events-none"
            style={{ background: "radial-gradient(circle, var(--primary) 0%, transparent 70%)" }}
          />
          

          {/* Navbar */}
          <CFinanciaNavbar variant="full" onLogout={onLogout} />

          {/* Breadcrumbs */}
          <div className="relative z-10 px-8 py-3 pt-[90px]">
            <Breadcrumb>
              <BreadcrumbList>
                <BreadcrumbItem>
                  <BreadcrumbLink
                    href="#"
                    onClick={(e: React.MouseEvent) => e.preventDefault()}
                    className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
                  >
                    <Home className="h-4 w-4" />
                    Inicio
                  </BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator />
                <BreadcrumbItem>
                  <BreadcrumbLink
                    href="#"
                    onClick={(e: React.MouseEvent) => e.preventDefault()}
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    Factoring
                  </BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator />
                <BreadcrumbItem>
                  <BreadcrumbPage className="text-foreground">Mis Operaciones</BreadcrumbPage>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>
          </div>

          {/* Main Content */}
          <main className="relative z-10 p-8">
            <PageTransition variant="fade">
              <OperationsList onNewOperation={() => setShowNewOperation(true)} />
            </PageTransition>
          </main>
        </div>
      )}
    </div>
  );
}