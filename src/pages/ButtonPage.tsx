import { ComponentShowcase } from "../components/ui/component-showcase";
import { Button } from "../components/ui/button";
import { Separator } from "../components/ui/separator";
import {
  Mail, Loader2, ChevronRight, Download,
  Check, CheckCircle, Save, Send,
  AlertTriangle, Trash2, XCircle, Ban,
  Info, HelpCircle, Eye,
  ShieldAlert, Clock, Bell,
} from "lucide-react";

export function ButtonPage() {
  return (
    <ComponentShowcase
      title="Button"
      description="Displays a button or a component that looks like a button. Incluye variantes base y semánticas para cada tipo de acción."
      category="Actions"
      
      // Main Preview
      preview={
        <div className="flex flex-col gap-6">
          {/* ── Base Variants ── */}
          <div>
            <p className="text-xs text-muted-foreground mb-3">Base Variants</p>
            <div className="flex flex-wrap gap-3">
              <Button>Primary</Button>
              <Button variant="secondary">Secondary</Button>
              <Button variant="outline">Outline</Button>
              <Button variant="ghost">Ghost</Button>
              <Button variant="link">Link</Button>
            </div>
          </div>

          <Separator />

          {/* ── Semantic Solid ── */}
          <div>
            <p className="text-xs text-muted-foreground mb-3">Semantic — Solid</p>
            <div className="flex flex-wrap gap-3">
              <Button variant="success">
                <CheckCircle className="h-4 w-4" />
                Success
              </Button>
              <Button variant="destructive">
                <Trash2 className="h-4 w-4" />
                Destructive
              </Button>
              <Button variant="warning">
                <AlertTriangle className="h-4 w-4" />
                Warning
              </Button>
              <Button variant="info">
                <Info className="h-4 w-4" />
                Info
              </Button>
            </div>
          </div>

          <Separator />

          {/* ── Semantic Outline ── */}
          <div>
            <p className="text-xs text-muted-foreground mb-3">Semantic — Outline</p>
            <div className="flex flex-wrap gap-3">
              <Button variant="success-outline">
                <Check className="h-4 w-4" />
                Aprobar
              </Button>
              <Button variant="destructive-outline">
                <XCircle className="h-4 w-4" />
                Rechazar
              </Button>
              <Button variant="warning-outline">
                <Clock className="h-4 w-4" />
                Pausar
              </Button>
              <Button variant="info-outline">
                <Eye className="h-4 w-4" />
                Ver Detalle
              </Button>
            </div>
          </div>

          <Separator />

          {/* ── Semantic Ghost ── */}
          <div>
            <p className="text-xs text-muted-foreground mb-3">Semantic — Ghost</p>
            <div className="flex flex-wrap gap-3">
              <Button variant="success-ghost">
                <Save className="h-4 w-4" />
                Guardar
              </Button>
              <Button variant="destructive-ghost">
                <Ban className="h-4 w-4" />
                Cancelar
              </Button>
              <Button variant="warning-ghost">
                <ShieldAlert className="h-4 w-4" />
                Revisar
              </Button>
              <Button variant="info-ghost">
                <HelpCircle className="h-4 w-4" />
                Ayuda
              </Button>
            </div>
          </div>
        </div>
      }
      
      // Main Code
      code={`import { Button } from "@/components/ui/button";
import { CheckCircle, Trash2, AlertTriangle, Info } from "lucide-react";

export function ButtonSemanticDemo() {
  return (
    <div className="flex flex-col gap-4">
      {/* Solid */}
      <div className="flex gap-3">
        <Button variant="success"><CheckCircle /> Aprobar</Button>
        <Button variant="destructive"><Trash2 /> Eliminar</Button>
        <Button variant="warning"><AlertTriangle /> Advertencia</Button>
        <Button variant="info"><Info /> Información</Button>
      </div>
      {/* Outline */}
      <div className="flex gap-3">
        <Button variant="success-outline">Aprobar</Button>
        <Button variant="destructive-outline">Rechazar</Button>
        <Button variant="warning-outline">Pausar</Button>
        <Button variant="info-outline">Detalle</Button>
      </div>
      {/* Ghost */}
      <div className="flex gap-3">
        <Button variant="success-ghost">Guardar</Button>
        <Button variant="destructive-ghost">Cancelar</Button>
        <Button variant="warning-ghost">Revisar</Button>
        <Button variant="info-ghost">Ayuda</Button>
      </div>
    </div>
  );
}`}
      
      // Props Documentation
      props={[
        {
          name: "variant",
          type: '"default" | "secondary" | "destructive" | "outline" | "ghost" | "link" | "success" | "warning" | "info" | "destructive-outline" | "success-outline" | "warning-outline" | "info-outline" | "destructive-ghost" | "success-ghost" | "warning-ghost" | "info-ghost"',
          default: '"default"',
          description: "Estilo visual del botón. Las variantes semánticas usan colores explícitos compatibles con light/dark mode.",
        },
        {
          name: "size",
          type: '"default" | "sm" | "lg" | "icon"',
          default: '"default"',
          description: "Tamaño del botón",
        },
        {
          name: "asChild",
          type: "boolean",
          default: "false",
          description: "Merge props con el hijo directo vía Radix Slot (útil para Link, anchor, etc.)",
        },
      ]}
      
      // Examples
      examples={[
        {
          title: "Acciones de Operación (Factoring)",
          description: "Ejemplo de cómo usar las variantes semánticas en un flujo de aprobación de operaciones.",
          preview: (
            <div className="flex flex-col gap-4 p-4 border rounded-lg bg-card">
              <p className="text-sm text-muted-foreground">Operación OP-2024-001 — Cencosud S.A. — $45.200.000</p>
              <div className="flex flex-wrap gap-2">
                <Button variant="success" size="sm">
                  <Check className="h-4 w-4" />
                  Aprobar
                </Button>
                <Button variant="warning-outline" size="sm">
                  <Clock className="h-4 w-4" />
                  Solicitar Revisión
                </Button>
                <Button variant="destructive-outline" size="sm">
                  <XCircle className="h-4 w-4" />
                  Rechazar
                </Button>
                <Button variant="info-ghost" size="sm">
                  <Eye className="h-4 w-4" />
                  Ver Detalle
                </Button>
              </div>
            </div>
          ),
          code: `<div className="flex gap-2">
  <Button variant="success" size="sm">
    <Check /> Aprobar
  </Button>
  <Button variant="warning-outline" size="sm">
    <Clock /> Solicitar Revisión
  </Button>
  <Button variant="destructive-outline" size="sm">
    <XCircle /> Rechazar
  </Button>
  <Button variant="info-ghost" size="sm">
    <Eye /> Ver Detalle
  </Button>
</div>`,
        },
        {
          title: "With Icon",
          description: "Botones con iconos de Lucide React",
          preview: (
            <div className="flex flex-wrap gap-3">
              <Button>
                <Mail className="h-4 w-4" />
                Send Email
              </Button>
              <Button variant="outline">
                <Download className="h-4 w-4" />
                Download
              </Button>
              <Button variant="success">
                <Send className="h-4 w-4" />
                Enviar
              </Button>
            </div>
          ),
          code: `import { Button } from "@/components/ui/button";
import { Mail, Download, Send } from "lucide-react";

export function ButtonWithIcon() {
  return (
    <div className="flex gap-3">
      <Button><Mail /> Send Email</Button>
      <Button variant="outline"><Download /> Download</Button>
      <Button variant="success"><Send /> Enviar</Button>
    </div>
  );
}`,
        },
        {
          title: "Loading State",
          description: "Botón con estado de carga utilizando el icono Loader2",
          preview: (
            <div className="flex flex-wrap gap-3">
              <Button disabled>
                <Loader2 className="h-4 w-4 animate-spin" />
                Please wait
              </Button>
              <Button variant="success" disabled>
                <Loader2 className="h-4 w-4 animate-spin" />
                Guardando...
              </Button>
            </div>
          ),
          code: `import { Button } from "@/components/ui/button";
import { Loader2 } from "lucide-react";

export function ButtonLoading() {
  return (
    <Button disabled>
      <Loader2 className="animate-spin" />
      Please wait
    </Button>
  );
}`,
        },
        {
          title: "Sizes",
          description: "Todas las variantes semánticas en los diferentes tamaños disponibles.",
          preview: (
            <div className="flex flex-col gap-4">
              <div className="flex flex-wrap items-center gap-3">
                <Button variant="success" size="sm">Small</Button>
                <Button variant="success" size="default">Default</Button>
                <Button variant="success" size="lg">Large</Button>
                <Button variant="success" size="icon">
                  <Check className="h-4 w-4" />
                </Button>
              </div>
              <div className="flex flex-wrap items-center gap-3">
                <Button variant="destructive" size="sm">Small</Button>
                <Button variant="destructive" size="default">Default</Button>
                <Button variant="destructive" size="lg">Large</Button>
                <Button variant="destructive" size="icon">
                  <Trash2 className="h-4 w-4" />
                </Button>
              </div>
              <div className="flex flex-wrap items-center gap-3">
                <Button variant="warning" size="sm">Small</Button>
                <Button variant="warning" size="default">Default</Button>
                <Button variant="warning" size="lg">Large</Button>
                <Button variant="warning" size="icon">
                  <AlertTriangle className="h-4 w-4" />
                </Button>
              </div>
              <div className="flex flex-wrap items-center gap-3">
                <Button variant="info" size="sm">Small</Button>
                <Button variant="info" size="default">Default</Button>
                <Button variant="info" size="lg">Large</Button>
                <Button variant="info" size="icon">
                  <Info className="h-4 w-4" />
                </Button>
              </div>
            </div>
          ),
          code: `import { Button } from "@/components/ui/button";

export function ButtonSizes() {
  return (
    <div className="flex items-center gap-3">
      <Button variant="success" size="sm">Small</Button>
      <Button variant="success" size="default">Default</Button>
      <Button variant="success" size="lg">Large</Button>
      <Button variant="success" size="icon"><Check /></Button>
    </div>
  );
}`,
        },
        {
          title: "Disabled States",
          description: "Todos los botones semánticos en estado deshabilitado.",
          preview: (
            <div className="flex flex-col gap-3">
              <div className="flex flex-wrap gap-3">
                <Button variant="success" disabled>Success</Button>
                <Button variant="destructive" disabled>Destructive</Button>
                <Button variant="warning" disabled>Warning</Button>
                <Button variant="info" disabled>Info</Button>
              </div>
              <div className="flex flex-wrap gap-3">
                <Button variant="success-outline" disabled>Success</Button>
                <Button variant="destructive-outline" disabled>Destructive</Button>
                <Button variant="warning-outline" disabled>Warning</Button>
                <Button variant="info-outline" disabled>Info</Button>
              </div>
            </div>
          ),
          code: `<Button variant="success" disabled>Success</Button>
<Button variant="destructive" disabled>Destructive</Button>
<Button variant="warning" disabled>Warning</Button>
<Button variant="info" disabled>Info</Button>`,
        },
      ]}
    />
  );
}
