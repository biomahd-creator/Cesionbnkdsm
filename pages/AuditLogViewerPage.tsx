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
      description="Complete audit log visualization system with filters, search, and statistics."
      category="Business Component"
      preview={
        <div className="w-full border rounded-lg p-6 bg-card">
          <AuditLogViewer />
        </div>
      }
      code={auditLogCode}
      props={[
        { name: "logs", type: "AuditLogEntry[]", description: "Array of log entries. Each entry: id, timestamp, user, action, resource, status ('success'|'warning'|'error'), ipAddress, details.", default: "mockLogs" },
        { name: "onExport", type: "() => void", description: "Callback when clicking the export logs button." },
        { name: "onFilterChange", type: "(filter: string) => void", description: "Callback when changing the status filter." },
      ]}
      examples={[
        {
          title: "API Integration",
          description: "Load logs from an endpoint and enable export.",
          preview: (
            <div className="text-center py-6 border rounded-lg">
              <p className="text-sm text-muted-foreground">Integrate with your REST API for real-time logs.</p>
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