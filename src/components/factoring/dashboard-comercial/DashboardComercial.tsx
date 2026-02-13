/**
 * DashboardComercial
 * ─────────────────────
 * Portfolio Cockpit integrado dentro de la app Factoring.
 * Se renderiza DENTRO del AdminLayout (sin header propio).
 * Contiene 5 tabs: Dashboard, Originación, Cartera, Inversionistas, Tesorería.
 * Usa FactoringKpiCardGroup del DSM como sistema de tabs.
 */
import { useState } from "react";
import {
  LayoutDashboard,
  TrendingUp,
  Briefcase,
  Users,
  Landmark,
  Calendar,
  RefreshCw,
} from "lucide-react";
import { Button } from "../../ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../../ui/select";
import { FactoringKpiCardGroup } from "../../patterns/FactoringKpiCardGroup";
import { kpiData, formatCurrency } from "./mock-data";
import { TabDashboard } from "./tab-dashboard";
import { TabOriginacion } from "./tab-originacion";
import { TabCartera } from "./tab-cartera";
import { TabInversionistas } from "./tab-inversionistas";
import { TabTesoreria } from "./tab-tesoreria";

type TabKey = "dashboard" | "originacion" | "cartera" | "inversionistas" | "tesoreria";

const TAB_KPI_CARDS = [
  {
    id: "dashboard" as TabKey,
    label: "Dashboard",
    description: "Vista general del portafolio",
    value: formatCurrency(kpiData.totalAUM),
    count: kpiData.activeClients,
    variant: "green" as const,
    icon: <LayoutDashboard />,
  },
  {
    id: "originacion" as TabKey,
    label: "Originación",
    description: "Generación de ingresos",
    value: `+${kpiData.aumChange}%`,
    count: kpiData.clientsChange,
    variant: "lime" as const,
    icon: <TrendingUp />,
  },
  {
    id: "cartera" as TabKey,
    label: "Cartera",
    description: "Recaudo de operaciones",
    value: `${kpiData.avgDaysToCollect}d`,
    count: Math.round(kpiData.dilutionRate * 10),
    variant: "orange" as const,
    icon: <Briefcase />,
  },
  {
    id: "inversionistas" as TabKey,
    label: "Inversionistas",
    description: "Fondos de inversionistas",
    value: `${kpiData.yieldActual}%`,
    count: 12,
    variant: "blue" as const,
    icon: <Users />,
  },
  {
    id: "tesoreria" as TabKey,
    label: "Tesorería",
    description: "Intereses e ingreso real",
    value: `${kpiData.collectionEfficiency}%`,
    count: 8,
    variant: "purple" as const,
    icon: <Landmark />,
  },
];

function TabContent({ activeTab }: { activeTab: TabKey }) {
  switch (activeTab) {
    case "dashboard":
      return <TabDashboard />;
    case "originacion":
      return <TabOriginacion />;
    case "cartera":
      return <TabCartera />;
    case "inversionistas":
      return <TabInversionistas />;
    case "tesoreria":
      return <TabTesoreria />;
    default:
      return <TabDashboard />;
  }
}

export function DashboardComercial() {
  const [activeTab, setActiveTab] = useState<TabKey>("dashboard");
  const [lastRefresh] = useState(() => {
    const now = new Date();
    return now.toLocaleTimeString("es-CO", {
      hour: "2-digit",
      minute: "2-digit",
    });
  });

  return (
    <div className="min-h-full">
      {/* Main content */}
      <main className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-8 py-6 space-y-6">
        {/* Page header */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
          <div>
            <h1>Dashboard del Portafolio</h1>
            <p className="text-sm text-muted-foreground">
              Monitoreo en tiempo real — Factoring Colombia
            </p>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-[10px] text-muted-foreground hidden sm:inline">
              Actualizado: {lastRefresh}
            </span>
            <Button variant="ghost" size="icon" className="size-8">
              <RefreshCw className="size-3.5" />
            </Button>
            <Select defaultValue="ene2026">
              <SelectTrigger className="w-[150px] h-8 text-xs">
                <Calendar className="size-3 mr-1.5" />
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="ene2026">Enero 2026</SelectItem>
                <SelectItem value="dic2025">Diciembre 2025</SelectItem>
                <SelectItem value="nov2025">Noviembre 2025</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        {/* KPI Tab Navigation — DSM FactoringKpiCardGroup */}
        <FactoringKpiCardGroup
          cards={TAB_KPI_CARDS}
          activeId={activeTab}
          onCardClick={(id) => setActiveTab(id as TabKey)}
          className="grid-cols-2 lg:grid-cols-5"
        />

        {/* Active tab content */}
        <TabContent activeTab={activeTab} />

        {/* Footer */}
        <footer className="border-t border-border pt-4 pb-8">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 text-[10px] text-muted-foreground">
            <span>
              Financio Portfolio Cockpit v1.0 — Datos de ejemplo
            </span>
            <span>
              Frecuencia de actualización: Diaria | Última carga: 12 Feb 2026, {lastRefresh}
            </span>
          </div>
        </footer>
      </main>
    </div>
  );
}