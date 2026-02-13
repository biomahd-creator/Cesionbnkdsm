import { AuditLogViewer } from "../components/patterns/AuditLogViewer";
import { ContactForm } from "../components/widgets/ContactForm";
import { BookingCalendar } from "../components/widgets/BookingCalendar";
import { Badge } from "../components/ui/badge";
import { Separator } from "../components/ui/separator";
import { ComponentShowcase } from "../components/ui/component-showcase";

/**
 * BusinessComponentsPage - Showcase of high-priority widget components
 * 
 * Implemented components:
 * 1. Audit Log Viewer - Audit and tracking system
 * 2. Contact Form - Professional contact form
 * 3. Booking Calendar - Appointment scheduling system
 * 
 * Location: /pages/BusinessComponentsPage.tsx
 * Status: ✅ Completed - 4/4 high priority components
 */

function BusinessComponentsDemo() {
  return (
    <div className="space-y-12">
      {/* Page Header */}
      <div className="space-y-4">
        <div className="flex items-center gap-3">
          <h1 className="font-bold">Widgets Components</h1>
          <Badge className="bg-green-500 hover:bg-green-600 text-white">
            HIGH PRIORITY
          </Badge>
        </div>
        <p className="text-muted-foreground">
          Essential business components for professional applications.
          Includes audit systems, contact forms, and booking calendars.
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
            Complete audit log visualization system with filters,
            search, and statistics. Ideal for compliance and debugging.
          </p>
        </div>

        <div className="rounded-lg border bg-card p-6">
          <AuditLogViewer />
        </div>

        <div className="space-y-3">
          <h3 className="font-semibold">Key Features:</h3>
          <ul className="list-disc list-inside space-y-2 text-sm text-muted-foreground">
            <li>Table with alternating (striped) rows without borders</li>
            <li>Filter by status (Success, Warning, Error)</li>
            <li>Real-time search by user, action, or resource</li>
            <li>Summary cards with counters by status</li>
            <li>Contextual icons for each action type</li>
            <li>Precise timestamps and IP information</li>
            <li>Data export (placeholder)</li>
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
            Professional contact form with complete validation,
            customizable fields, and success/error states.
          </p>
        </div>

        <div className="rounded-lg border bg-card p-6 flex justify-center">
          <ContactForm />
        </div>

        <div className="space-y-3">
          <h3 className="font-semibold">Key Features:</h3>
          <ul className="list-disc list-inside space-y-2 text-sm text-muted-foreground">
            <li>Real-time validation of required fields</li>
            <li>Email format validation</li>
            <li>Configurable fields (company, subject, phone)</li>
            <li>Select with predefined subject options</li>
            <li>Terms and conditions checkbox</li>
            <li>Loading states (submitting) with visual feedback</li>
            <li>Success screen with auto-reset</li>
            <li>Field-specific error messages</li>
            <li>Responsive two-column design</li>
            <li>Response time badge (24h)</li>
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
            Complete appointment scheduling system with interactive calendar,
            time slot selection, and visual confirmation.
          </p>
        </div>

        <div className="rounded-lg border bg-card p-6">
          <BookingCalendar />
        </div>

        <div className="space-y-3">
          <h3 className="font-semibold">Key Features:</h3>
          <ul className="list-disc list-inside space-y-2 text-sm text-muted-foreground">
            <li>Interactive calendar with shadcn/ui Calendar</li>
            <li>Automatic blocking of weekends and past dates</li>
            <li>Available time slot grid with states (available/busy)</li>
            <li>Service select with visible duration</li>
            <li>Summary card with all details</li>
            <li>3-step flow: date → time → confirmation</li>
            <li>Successful confirmation screen with auto-reset</li>
            <li>Responsive two-column layout</li>
            <li>Progress badges (Step X/3)</li>
            <li>Localized date format</li>
          </ul>
        </div>
      </section>

      <Separator />

      {/* Implementation Notes */}
      <section className="bg-primary/5 rounded-lg p-6 space-y-4">
        <h3 className="font-semibold">📋 Implementation Notes</h3>
        <div className="space-y-3 text-sm">
          <p>
            <strong>Location:</strong> All components are in{" "}
            <code className="bg-muted px-2 py-1 rounded">/components/widgets/</code>
          </p>
          <p>
            <strong>Required Imports:</strong>
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
            <strong>Compatibility:</strong> All components use only
            official shadcn/ui components and follow the Guidelines.md standards
            (Satoshi typography, color tokens, no inline styles).
          </p>
          <p>
            <strong>Status:</strong> ✅ Phase 1 completed - 3 HIGH PRIORITY components
            implemented and documented.
          </p>
        </div>
      </section>
    </div>
  );
}

export function BusinessComponentsPage() {
  return (
    <ComponentShowcase
      title="Business Components"
      description="High-priority business widgets: Audit Log Viewer for activity tracking, Contact Form for professional inquiries, and Booking Calendar for appointment scheduling."
      category="Patterns"
      preview={<BusinessComponentsDemo />}
      code={`import { AuditLogViewer } from "@/components/patterns/AuditLogViewer";
import { ContactForm } from "@/components/widgets/ContactForm";
import { BookingCalendar } from "@/components/widgets/BookingCalendar";

<AuditLogViewer />
<ContactForm />
<BookingCalendar />`}
      props={[
        { name: "(aggregation)", type: "—", description: "Showcases 3 self-contained business components." },
      ]}
      examples={[]}
    />
  );
}