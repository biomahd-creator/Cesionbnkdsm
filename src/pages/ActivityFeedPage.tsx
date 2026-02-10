import { ComponentShowcase } from "../components/ui/component-showcase";
import { ActivityFeed } from "../components/patterns/ActivityFeed";

const code = `import { ActivityFeed } from "@/components/patterns/ActivityFeed";

export function ActivityFeedDemo() {
  return (
    <ActivityFeed 
      items={[
        { id: "1", user: { name: "Ana García", initials: "AG" }, action: "creó la factura", target: "INV-001", timestamp: "Hace 5 min" },
        { id: "2", user: { name: "Carlos Ruiz", initials: "CR" }, action: "comentó en", target: "Reporte Mensual", timestamp: "Hace 1 hora", description: "Excelente trabajo con los gráficos." },
        { id: "3", user: { name: "Sistema", initials: "SYS" }, action: "actualizó el estado de", target: "Pago #452", timestamp: "Hace 2 horas" },
      ]}
    />
  );
}`;

export function ActivityFeedPage() {
  return (
    <ComponentShowcase
      title="Activity Feed"
      description="Línea de tiempo de actividad de usuarios y sistema."
      category="Business Pattern"
      preview={
        <ActivityFeed 
          items={[
            { id: "1", user: { name: "Ana García", initials: "AG" }, action: "creó la factura", target: "INV-001", timestamp: "Hace 5 min" },
            { id: "2", user: { name: "Carlos Ruiz", initials: "CR" }, action: "comentó en", target: "Reporte Mensual", timestamp: "Hace 1 hora", description: "Excelente trabajo con los gráficos." },
            { id: "3", user: { name: "Sistema", initials: "SYS" }, action: "actualizó el estado de", target: "Pago #452", timestamp: "Hace 2 horas" },
          ]}
        />
      }
      code={code}
      props={[
        { name: "items", type: "ActivityItem[]", description: "Array de actividades. Cada item tiene: user (name, avatar, initials), action, target, timestamp, description.", required: true },
        { name: "className", type: "string", description: "Clases adicionales para el contenedor raíz." },
      ]}
      examples={[
        {
          title: "Feed con descripciones",
          description: "Actividades con texto adicional de detalle.",
          preview: (
            <ActivityFeed
              items={[
                { id: "1", user: { name: "María López", initials: "ML" }, action: "aprobó", target: "Operación OP-2024-051", timestamp: "Hace 10 min", description: "Aprobación final del comité de riesgo." },
                { id: "2", user: { name: "Roberto Méndez", initials: "RM" }, action: "rechazó", target: "Factura FV-8810", timestamp: "Hace 30 min", description: "Documentación incompleta. Se requiere cámara de comercio." },
              ]}
            />
          ),
          code: `<ActivityFeed
  items={[
    {
      id: "1",
      user: { name: "María López", initials: "ML" },
      action: "aprobó",
      target: "Operación OP-2024-051",
      timestamp: "Hace 10 min",
      description: "Aprobación final del comité de riesgo."
    },
    {
      id: "2",
      user: { name: "Roberto Méndez", initials: "RM" },
      action: "rechazó",
      target: "Factura FV-8810",
      timestamp: "Hace 30 min",
      description: "Documentación incompleta."
    },
  ]}
/>`,
        },
        {
          title: "Feed de sistema",
          description: "Solo eventos automáticos del sistema.",
          preview: (
            <ActivityFeed
              items={[
                { id: "1", user: { name: "Sistema", initials: "SYS" }, action: "generó reporte de", target: "Cartera Enero 2026", timestamp: "Hace 1 hora" },
                { id: "2", user: { name: "Cron Job", initials: "CJ" }, action: "ejecutó conciliación para", target: "Banco Nacional", timestamp: "Hace 4 horas" },
                { id: "3", user: { name: "Sistema", initials: "SYS" }, action: "envió recordatorio a", target: "5 clientes con mora", timestamp: "Ayer" },
              ]}
            />
          ),
          code: `<ActivityFeed
  items={[
    { id: "1", user: { name: "Sistema", initials: "SYS" }, action: "generó reporte de", target: "Cartera Enero", timestamp: "Hace 1 hora" },
    { id: "2", user: { name: "Cron Job", initials: "CJ" }, action: "ejecutó conciliación para", target: "Banco Nacional", timestamp: "Hace 4 horas" },
  ]}
/>`,
        },
      ]}
    />
  );
}