import { AuditLogViewer } from "../components/patterns/AuditLogViewer";
import { ContactForm } from "../components/widgets/ContactForm";
import { BookingCalendar } from "../components/widgets/BookingCalendar";
import { Badge } from "../components/ui/badge";
import { Separator } from "../components/ui/separator";

/**
 * BusinessComponentsPage - Showcase de componentes widgets de alta prioridad
 * 
 * Componentes implementados:
 * 1. Audit Log Viewer - Sistema de auditoría y tracking
 * 2. Contact Form - Formulario de contacto profesional
 * 3. Booking Calendar - Sistema de agendamiento de citas
 * 
 * Ubicación: /pages/BusinessComponentsPage.tsx
 * Estado: ✅ Completado - 4/4 componentes de alta prioridad
 */

export function BusinessComponentsPage() {
  return (
    <div className="space-y-12">
      {/* Page Header */}
      <div className="space-y-4">
        <div className="flex items-center gap-3">
          <h1 className="font-bold">Widgets Components</h1>
          <Badge className="bg-green-500 hover:bg-green-600 text-white">
            ALTA PRIORIDAD
          </Badge>
        </div>
        <p className="text-muted-foreground">
          Componentes empresariales esenciales para aplicaciones profesionales.
          Incluye sistemas de auditoría, formularios de contacto y reservas.
        </p>
      </div>

      <Separator />

      {/* 1. Audit Log Viewer */}
      <section className="space-y-6">
        <div>
          <div className="flex items-center gap-3 mb-2">
            <h2 className="font-bold">Audit Log Viewer</h2>
            <Badge variant="secondary">Data Management</Badge>
          </div>
          <p className="text-muted-foreground">
            Sistema completo de visualización de logs de auditoría con filtros,
            búsqueda y estadísticas. Ideal para compliance y debugging.
          </p>
        </div>

        <div className="rounded-lg border bg-card p-6">
          <AuditLogViewer />
        </div>

        <div className="space-y-3">
          <h3 className="font-semibold">Características principales:</h3>
          <ul className="list-disc list-inside space-y-2 text-sm text-muted-foreground">
            <li>Tabla con filas alternadas (striped) sin bordes</li>
            <li>Filtrado por estado (Success, Warning, Error)</li>
            <li>Búsqueda en tiempo real por usuario, acción o recurso</li>
            <li>Tarjetas de resumen con contadores por estado</li>
            <li>Iconos contextuales para cada tipo de acción</li>
            <li>Timestamps precisos e información de IP</li>
            <li>Exportación de datos (placeholder)</li>
          </ul>
        </div>
      </section>

      <Separator />

      {/* 2. Contact Form */}
      <section className="space-y-6">
        <div>
          <div className="flex items-center gap-3 mb-2">
            <h2 className="font-bold">Contact Form</h2>
            <Badge variant="secondary">Lead Generation</Badge>
          </div>
          <p className="text-muted-foreground">
            Formulario de contacto profesional con validación completa,
            campos personalizables y estados de éxito/error.
          </p>
        </div>

        <div className="rounded-lg border bg-card p-6 flex justify-center">
          <ContactForm />
        </div>

        <div className="space-y-3">
          <h3 className="font-semibold">Características principales:</h3>
          <ul className="list-disc list-inside space-y-2 text-sm text-muted-foreground">
            <li>Validación en tiempo real de campos requeridos</li>
            <li>Validación de formato de email</li>
            <li>Campos configurables (empresa, asunto, teléfono)</li>
            <li>Select con opciones predefinidas de asunto</li>
            <li>Checkbox de términos y condiciones</li>
            <li>Estados de carga (submitting) con feedback visual</li>
            <li>Pantalla de éxito con auto-reset</li>
            <li>Mensajes de error específicos por campo</li>
            <li>Diseño responsive en dos columnas</li>
            <li>Badge de tiempo de respuesta (24h)</li>
          </ul>
        </div>
      </section>

      <Separator />

      {/* 3. Booking Calendar */}
      <section className="space-y-6">
        <div>
          <div className="flex items-center gap-3 mb-2">
            <h2 className="font-bold">Booking Calendar</h2>
            <Badge variant="secondary">Scheduling</Badge>
          </div>
          <p className="text-muted-foreground">
            Sistema completo de agendamiento de citas con calendario interactivo,
            selección de horarios y confirmación visual.
          </p>
        </div>

        <div className="rounded-lg border bg-card p-6">
          <BookingCalendar />
        </div>

        <div className="space-y-3">
          <h3 className="font-semibold">Características principales:</h3>
          <ul className="list-disc list-inside space-y-2 text-sm text-muted-foreground">
            <li>Calendario interactivo con shadcn/ui Calendar</li>
            <li>Bloqueo automático de fines de semana y fechas pasadas</li>
            <li>Grid de horarios disponibles con estados (disponible/ocupado)</li>
            <li>Select de servicios con duración visible</li>
            <li>Tarjeta de resumen con todos los detalles</li>
            <li>Flujo de 3 pasos: fecha → hora → confirmación</li>
            <li>Pantalla de confirmación exitosa con auto-reset</li>
            <li>Layout responsive en dos columnas</li>
            <li>Badges de progreso (Paso X/3)</li>
            <li>Formato de fecha localizado en español</li>
          </ul>
        </div>
      </section>

      <Separator />

      {/* Implementation Notes */}
      <section className="bg-primary/5 rounded-lg p-6 space-y-4">
        <h3 className="font-semibold">📋 Notas de Implementación</h3>
        <div className="space-y-3 text-sm">
          <p>
            <strong>Ubicación:</strong> Todos los componentes están en{" "}
            <code className="bg-muted px-2 py-1 rounded">/components/widgets/</code>
          </p>
          <p>
            <strong>Imports necesarios:</strong>
          </p>
          <ul className="list-disc list-inside space-y-1 text-muted-foreground ml-4">
            <li>
              <code className="bg-muted px-2 py-1 rounded">
                import {"{ AuditLogViewer }"} from "./components/patterns/AuditLogViewer"
              </code>
            </li>
            <li>
              <code className="bg-muted px-2 py-1 rounded">
                import {"{ ContactForm }"} from "./components/widgets/ContactForm"
              </code>
            </li>
            <li>
              <code className="bg-muted px-2 py-1 rounded">
                import {"{ BookingCalendar }"} from "./components/widgets/BookingCalendar"
              </code>
            </li>
          </ul>
          <p>
            <strong>Compatibilidad:</strong> Todos los componentes usan únicamente
            componentes oficiales de shadcn/ui y siguen los estándares de Guidelines.md
            (tipografía Satoshi, tokens de color, sin estilos inline).
          </p>
          <p>
            <strong>Estado:</strong> ✅ Fase 1 completada - 3 componentes de ALTA PRIORIDAD
            implementados y documentados.
          </p>
        </div>
      </section>
    </div>
  );
}