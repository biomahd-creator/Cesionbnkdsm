import { ComponentShowcase } from "../components/ui/component-showcase";
import { CollectionTimeline } from "../factoring/CollectionTimeline";

const collectionTimelineCode = `import { CollectionTimeline } from "@/factoring/CollectionTimeline";

export function CollectionTimelineDemo() {
  const events = [
    { id: "1", type: "email", title: "Recordatorio enviado", date: "Hoy", status: "completed" },
    { id: "2", type: "call", title: "Llamada a tesorería", date: "Ayer", description: "Compromiso de pago para el viernes", status: "completed", user: "Ana" },
    { id: "3", type: "payment", title: "Pago parcial recibido", date: "Hace 3 días", status: "completed" },
    { id: "4", type: "system", title: "Factura radicada", date: "Hace 10 días" },
  ];

  return <CollectionTimeline events={events} />;
}`;

export function CollectionTimelinePage() {
  const events = [
    { id: "1", type: "email", title: "Recordatorio enviado", date: "Hoy", status: "completed" },
    { id: "2", type: "call", title: "Llamada a tesorería", date: "Ayer", description: "Compromiso de pago para el viernes", status: "completed", user: "Ana" },
    { id: "3", type: "payment", title: "Pago parcial recibido", date: "Hace 3 días", status: "completed" },
    { id: "4", type: "system", title: "Factura radicada", date: "Hace 10 días" },
  ];

  return (
    <ComponentShowcase
      title="Collection Timeline"
      description="Línea de tiempo para seguimiento de gestión de cobranza."
      category="Business Component"
      preview={
        <div className="w-full max-w-md border rounded-lg p-4 bg-background">
          <CollectionTimeline events={events} />
        </div>
      }
      code={collectionTimelineCode}
      props={[
        { name: "events", type: "TimelineEvent[]", description: "Array de eventos de cobranza. Cada evento: id, type ('email'|'call'|'payment'|'dispute'|'system'), title, description, date, user, status ('completed'|'pending'|'failed').", required: true },
        { name: "className", type: "string", description: "Clases adicionales para el contenedor." },
      ]}
      examples={[
        {
          title: "Gestión con disputa",
          description: "Timeline que incluye un evento de disputa y pago fallido.",
          preview: (
            <div className="w-full max-w-md border rounded-lg p-4 bg-background">
              <CollectionTimeline
                events={[
                  { id: "1", type: "email", title: "Primer aviso de cobro", date: "Hace 15 días", status: "completed" },
                  { id: "2", type: "call", title: "Llamada de seguimiento", date: "Hace 10 días", description: "Cliente indica desacuerdo con monto", status: "completed", user: "Carlos" },
                  { id: "3", type: "dispute", title: "Disputa abierta", date: "Hace 7 días", description: "Diferencia en cantidades facturadas", status: "pending" },
                  { id: "4", type: "payment", title: "Pago rechazado por banco", date: "Hace 3 días", status: "failed" },
                ]}
              />
            </div>
          ),
          code: `<CollectionTimeline
  events={[
    { id: "1", type: "email", title: "Primer aviso", date: "Hace 15 días", status: "completed" },
    { id: "2", type: "call", title: "Seguimiento", date: "Hace 10 días", status: "completed", user: "Carlos" },
    { id: "3", type: "dispute", title: "Disputa abierta", date: "Hace 7 días", status: "pending" },
    { id: "4", type: "payment", title: "Pago rechazado", date: "Hace 3 días", status: "failed" },
  ]}
/>`,
        },
      ]}
    />
  );
}