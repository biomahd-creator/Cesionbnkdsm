import { AdminPortal } from "../components/patterns/AdminPortal";

export function AdminPortalPage() {
  return (
    <div className="p-6 space-y-6">
      <div className="space-y-2">
        <h1 className="text-3xl font-semibold">Portal Administrativo</h1>
        <p className="text-muted-foreground">
          Gestión interna de solicitudes y aprobaciones de factoring
        </p>
      </div>

      <AdminPortal />
    </div>
  );
}
