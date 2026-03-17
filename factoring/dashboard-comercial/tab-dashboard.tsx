import { KpiCards } from "./kpi-cards";
import { AumEvolution } from "./aum-evolution";
import { AgingDistribution } from "./aging-distribution";
import { CollectionCurves } from "./collection-curves";
import { DsoTrend } from "./dso-trend";
import { TopDebtors } from "./top-debtors";
import { SectorConcentration } from "./sector-concentration";
import { AlertsActions } from "./alerts-actions";

export function TabDashboard() {
  return (
    <div className="space-y-6">
      {/* Section 1: KPI Cards */}
      <KpiCards />

      {/* Section 2: AUM Evolution */}
      <AumEvolution />

      {/* Section 3 + 4: Aging + Collection Curves */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <AgingDistribution />
        <CollectionCurves />
      </div>

      {/* Section 5: DSO + Sector Concentration */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <DsoTrend />
        <SectorConcentration />
      </div>

      {/* Section 6 + 7: Top Debtors + Alerts */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <TopDebtors />
        <AlertsActions />
      </div>
    </div>
  );
}
