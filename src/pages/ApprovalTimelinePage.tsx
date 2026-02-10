import { ComponentShowcase } from "../components/ui/component-showcase";
import { ApprovalTimeline } from "../components/patterns/ApprovalTimeline";

const approvalTimelineCode = `import { ApprovalTimeline } from "@/components/patterns/ApprovalTimeline";

export function ApprovalTimelineDemo() {
  return <ApprovalTimeline />;
}`;

export function ApprovalTimelinePage() {
  return (
    <ComponentShowcase
      title="Approval Timeline"
      description="Timeline visual de flujo de aprobación multi-etapa con estados (aprobado, pendiente, rechazado), iconos, badges y timestamps. Componente auto-contenido con datos de ejemplo."
      category="Business Pattern"
      preview={<ApprovalTimeline />}
      code={approvalTimelineCode}
      props={[
        { name: "(self-contained)", type: "—", description: "Componente auto-contenido. Los pasos de aprobación están definidos internamente con estados: approved, pending, rejected." },
      ]}
      examples={[
        {
          title: "Uso en detalle de operación",
          description: "Se integra dentro de una vista de detalle de operación de factoring.",
          preview: (
            <div className="text-center py-6 border rounded-lg">
              <p className="text-sm text-muted-foreground">Muestra el progreso de aprobación dentro de un Card de detalle.</p>
            </div>
          ),
          code: `import { ApprovalTimeline } from "@/components/patterns/ApprovalTimeline";

<Card>
  <CardHeader>
    <CardTitle>Operación OP-2024-051</CardTitle>
    <CardDescription>Factoring - Logística Norte</CardDescription>
  </CardHeader>
  <CardContent>
    <ApprovalTimeline />
  </CardContent>
</Card>`,
        },
      ]}
    />
  );
}