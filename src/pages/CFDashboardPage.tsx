import { CFDashboard } from "../factoring/components/CFDashboard";

export function CFDashboardPage() {
  return (
    <div className="p-6 space-y-6">
      <div className="space-y-2">
        <h1 className="text-3xl font-semibold">Dashboard Empresarial</h1>
        <p className="text-muted-foreground">
          Gestiona tu liquidez y monitorea tus operaciones de factoring en tiempo real
        </p>
      </div>

      <CFDashboard />
    </div>
  );
}
