import { KPIShowcase } from "../components/patterns/KPIShowcase";
import { KPIShowcaseExtended } from "../components/patterns/KPIShowcaseExtended";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../components/ui/tabs";

export function KpiShowcasePage() {
  return (
    <div className="space-y-8">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold tracking-tight">KPI Showcase</h1>
        <p className="text-muted-foreground mt-2">
          Sistema completo de KPIs: Dashboard avanzado con gráficos interactivos, métricas estándar y KPI Cards de Factoring
        </p>
      </div>

      <Tabs defaultValue="advanced" className="w-full">
        <TabsList className="grid w-full max-w-lg grid-cols-2">
          <TabsTrigger value="advanced">Dashboard Avanzado</TabsTrigger>
          <TabsTrigger value="standard">Standard</TabsTrigger>
        </TabsList>

        {/* Advanced Dashboard Tab */}
        <TabsContent value="advanced" className="mt-6">
          <KPIShowcase />
        </TabsContent>

        {/* Standard KPI Tab */}
        <TabsContent value="standard" className="mt-6">
          <KPIShowcaseExtended />
        </TabsContent>
      </Tabs>
    </div>
  );
}