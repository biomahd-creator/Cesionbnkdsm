import { ComponentShowcase } from "../components/ui/component-showcase";
import { NotificationCenter } from "../components/patterns/NotificationCenter";

const notificationCenterCode = `import { NotificationCenter } from "@/components/patterns/NotificationCenter";

export function NotificationCenterDemo() {
  return (
    <div className="flex justify-center p-8">
      <NotificationCenter />
    </div>
  );
}`;

export function NotificationCenterPage() {
  return (
    <ComponentShowcase
      title="Notification Center"
      description="Centro de notificaciones centralizado con sistema de filtrado, marcado de lectura y acciones en tiempo real."
      category="Business Pattern"
      preview={
        <div className="w-full max-w-4xl border rounded-lg p-6 bg-card min-h-[400px] flex items-center justify-center bg-muted/20">
          <div className="text-center space-y-4">
             <p className="text-sm text-muted-foreground mb-4">Click en la campana para ver las notificaciones</p>
             <NotificationCenter />
          </div>
        </div>
      }
      code={notificationCenterCode}
    />
  );
}