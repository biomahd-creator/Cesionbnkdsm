import { ComponentShowcase } from "../components/ui/component-showcase";
import { AuditLogViewer } from "../components/patterns/AuditLogViewer";

const auditLogCode = `import { AuditLogViewer } from "@/components/patterns/AuditLogViewer";

export function AuditLogDemo() {
  return <AuditLogViewer />;
}`;

export function AuditLogViewerPage() {
  return (
    <ComponentShowcase
      title="Audit Log Viewer"
      description="Sistema completo de visualización de logs de auditoría con filtros, búsqueda y estadísticas."
      category="Business Component"
      preview={
        <div className="w-full border rounded-lg p-6 bg-card">
          <AuditLogViewer />
        </div>
      }
      code={auditLogCode}
      props={[
        { name: "logs", type: "AuditLogEntry[]", description: "Array de entradas de log. Cada entry: id, timestamp, user, action, resource, status ('success'|'warning'|'error'), ipAddress, details.", default: "mockLogs" },
        { name: "onExport", type: "() => void", description: "Callback al clickear el botón de exportar logs." },
        { name: "onFilterChange", type: "(filter: string) => void", description: "Callback al cambiar el filtro de estado." },
      ]}
      examples={[
        {
          title: "Integración con API",
          description: "Carga logs desde un endpoint y permite exportar.",
          preview: (
            <div className="text-center py-6 border rounded-lg">
              <p className="text-sm text-muted-foreground">Integra con tu API REST para logs en tiempo real.</p>
            </div>
          ),
          code: `const [logs, setLogs] = useState([]);

useEffect(() => {
  fetch("/api/audit-logs")
    .then(res => res.json())
    .then(setLogs);
}, []);

<AuditLogViewer
  logs={logs}
  onExport={() => downloadCSV(logs)}
  onFilterChange={(status) => refetchLogs({ status })}
/>`,
        },
      ]}
    />
  );
}