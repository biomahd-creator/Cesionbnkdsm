import { ComponentShowcase } from "../components/ui/component-showcase";
import { Button } from "../components/ui/button";
import { Separator } from "../components/ui/separator";
import {
  Mail, Loader2, ChevronRight, Download,
  Check, CheckCircle, Save, Send,
  AlertTriangle, Trash2, XCircle, Ban,
  Info, HelpCircle, Eye,
  ShieldAlert, Clock, Bell,
  Plus, ArrowRight, Heart,
  Pencil, Settings, Search, Star, MoreHorizontal,
} from "lucide-react";

export function ButtonPage() {
  return (
    <ComponentShowcase
      title="Button"
      description="Displays a button or a component that looks like a button. Includes base and semantic variants for each action type."
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
                Approve
              </Button>
              <Button variant="destructive-outline">
                <XCircle className="h-4 w-4" />
                Reject
              </Button>
              <Button variant="warning-outline">
                <Clock className="h-4 w-4" />
                Pause
              </Button>
              <Button variant="info-outline">
                <Eye className="h-4 w-4" />
                View Detail
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
                Save
              </Button>
              <Button variant="destructive-ghost">
                <Ban className="h-4 w-4" />
                Cancel
              </Button>
              <Button variant="warning-ghost">
                <ShieldAlert className="h-4 w-4" />
                Review
              </Button>
              <Button variant="info-ghost">
                <HelpCircle className="h-4 w-4" />
                Help
              </Button>
            </div>
          </div>

          <Separator />

          {/* ── Pill Shape ── */}
          <div>
            <p className="text-xs text-muted-foreground mb-3">Pill Shape — Rounded</p>
            <div className="flex flex-col gap-4">
              <div className="flex flex-wrap gap-3">
                <Button shape="pill">Primary</Button>
                <Button variant="secondary" shape="pill">Secondary</Button>
                <Button variant="outline" shape="pill">Outline</Button>
                <Button variant="ghost" shape="pill">Ghost</Button>
              </div>
              <div className="flex flex-wrap gap-3">
                <Button variant="success" shape="pill">
                  <CheckCircle className="h-4 w-4" />
                  Approve
                </Button>
                <Button variant="destructive" shape="pill">
                  <Trash2 className="h-4 w-4" />
                  Delete
                </Button>
                <Button variant="warning" shape="pill">
                  <AlertTriangle className="h-4 w-4" />
                  Warning
                </Button>
                <Button variant="info" shape="pill">
                  <Info className="h-4 w-4" />
                  Info
                </Button>
              </div>
              <div className="flex flex-wrap gap-3">
                <Button variant="success-outline" shape="pill">
                  <Check className="h-4 w-4" />
                  Approve
                </Button>
                <Button variant="destructive-outline" shape="pill">
                  <XCircle className="h-4 w-4" />
                  Reject
                </Button>
                <Button variant="warning-outline" shape="pill">
                  <Clock className="h-4 w-4" />
                  Pause
                </Button>
                <Button variant="info-outline" shape="pill">
                  <Eye className="h-4 w-4" />
                  Detail
                </Button>
              </div>
              <div className="flex flex-wrap items-center gap-3">
                <Button shape="pill" size="sm">Small Pill</Button>
                <Button shape="pill" size="default">Default Pill</Button>
                <Button shape="pill" size="lg">Large Pill</Button>
                <Button shape="pill" size="icon">
                  <Plus className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>

          <Separator />

          {/* ── Icon Buttons ── */}
          <div>
            <p className="text-xs text-muted-foreground mb-3">Icon Buttons — Square</p>
            <div className="flex flex-col gap-4">
              {/* Base variants */}
              <div className="flex flex-wrap items-center gap-3">
                <Button size="icon-sm"><Search /></Button>
                <Button size="icon"><Search /></Button>
                <Button size="icon-lg"><Search /></Button>
                <Button variant="secondary" size="icon-sm"><Settings /></Button>
                <Button variant="secondary" size="icon"><Settings /></Button>
                <Button variant="secondary" size="icon-lg"><Settings /></Button>
                <Button variant="outline" size="icon-sm"><Pencil /></Button>
                <Button variant="outline" size="icon"><Pencil /></Button>
                <Button variant="outline" size="icon-lg"><Pencil /></Button>
                <Button variant="ghost" size="icon-sm"><MoreHorizontal /></Button>
                <Button variant="ghost" size="icon"><MoreHorizontal /></Button>
                <Button variant="ghost" size="icon-lg"><MoreHorizontal /></Button>
              </div>
              {/* Semantic solid */}
              <div className="flex flex-wrap items-center gap-3">
                <Button variant="success" size="icon-sm"><Check /></Button>
                <Button variant="success" size="icon"><Check /></Button>
                <Button variant="success" size="icon-lg"><Check /></Button>
                <Button variant="destructive" size="icon-sm"><Trash2 /></Button>
                <Button variant="destructive" size="icon"><Trash2 /></Button>
                <Button variant="destructive" size="icon-lg"><Trash2 /></Button>
                <Button variant="warning" size="icon-sm"><AlertTriangle /></Button>
                <Button variant="warning" size="icon"><AlertTriangle /></Button>
                <Button variant="warning" size="icon-lg"><AlertTriangle /></Button>
                <Button variant="info" size="icon-sm"><Info /></Button>
                <Button variant="info" size="icon"><Info /></Button>
                <Button variant="info" size="icon-lg"><Info /></Button>
              </div>
              {/* Semantic outline */}
              <div className="flex flex-wrap items-center gap-3">
                <Button variant="success-outline" size="icon-sm"><Check /></Button>
                <Button variant="success-outline" size="icon"><Check /></Button>
                <Button variant="success-outline" size="icon-lg"><Check /></Button>
                <Button variant="destructive-outline" size="icon-sm"><XCircle /></Button>
                <Button variant="destructive-outline" size="icon"><XCircle /></Button>
                <Button variant="destructive-outline" size="icon-lg"><XCircle /></Button>
                <Button variant="warning-outline" size="icon-sm"><Clock /></Button>
                <Button variant="warning-outline" size="icon"><Clock /></Button>
                <Button variant="warning-outline" size="icon-lg"><Clock /></Button>
                <Button variant="info-outline" size="icon-sm"><Eye /></Button>
                <Button variant="info-outline" size="icon"><Eye /></Button>
                <Button variant="info-outline" size="icon-lg"><Eye /></Button>
              </div>
              {/* Semantic ghost */}
              <div className="flex flex-wrap items-center gap-3">
                <Button variant="success-ghost" size="icon-sm"><Save /></Button>
                <Button variant="success-ghost" size="icon"><Save /></Button>
                <Button variant="success-ghost" size="icon-lg"><Save /></Button>
                <Button variant="destructive-ghost" size="icon-sm"><Ban /></Button>
                <Button variant="destructive-ghost" size="icon"><Ban /></Button>
                <Button variant="destructive-ghost" size="icon-lg"><Ban /></Button>
                <Button variant="warning-ghost" size="icon-sm"><ShieldAlert /></Button>
                <Button variant="warning-ghost" size="icon"><ShieldAlert /></Button>
                <Button variant="warning-ghost" size="icon-lg"><ShieldAlert /></Button>
                <Button variant="info-ghost" size="icon-sm"><HelpCircle /></Button>
                <Button variant="info-ghost" size="icon"><HelpCircle /></Button>
                <Button variant="info-ghost" size="icon-lg"><HelpCircle /></Button>
              </div>
            </div>
          </div>

          <Separator />

          {/* ── Icon Buttons Round ── */}
          <div>
            <p className="text-xs text-muted-foreground mb-3">Icon Buttons — Round (shape="pill")</p>
            <div className="flex flex-col gap-4">
              {/* Base variants round */}
              <div className="flex flex-wrap items-center gap-3">
                <Button size="icon-sm" shape="pill"><Search /></Button>
                <Button size="icon" shape="pill"><Search /></Button>
                <Button size="icon-lg" shape="pill"><Search /></Button>
                <Button variant="secondary" size="icon-sm" shape="pill"><Settings /></Button>
                <Button variant="secondary" size="icon" shape="pill"><Settings /></Button>
                <Button variant="secondary" size="icon-lg" shape="pill"><Settings /></Button>
                <Button variant="outline" size="icon-sm" shape="pill"><Pencil /></Button>
                <Button variant="outline" size="icon" shape="pill"><Pencil /></Button>
                <Button variant="outline" size="icon-lg" shape="pill"><Pencil /></Button>
                <Button variant="ghost" size="icon-sm" shape="pill"><MoreHorizontal /></Button>
                <Button variant="ghost" size="icon" shape="pill"><MoreHorizontal /></Button>
                <Button variant="ghost" size="icon-lg" shape="pill"><MoreHorizontal /></Button>
              </div>
              {/* Semantic solid round */}
              <div className="flex flex-wrap items-center gap-3">
                <Button variant="success" size="icon-sm" shape="pill"><Check /></Button>
                <Button variant="success" size="icon" shape="pill"><Check /></Button>
                <Button variant="success" size="icon-lg" shape="pill"><Check /></Button>
                <Button variant="destructive" size="icon-sm" shape="pill"><Trash2 /></Button>
                <Button variant="destructive" size="icon" shape="pill"><Trash2 /></Button>
                <Button variant="destructive" size="icon-lg" shape="pill"><Trash2 /></Button>
                <Button variant="warning" size="icon-sm" shape="pill"><AlertTriangle /></Button>
                <Button variant="warning" size="icon" shape="pill"><AlertTriangle /></Button>
                <Button variant="warning" size="icon-lg" shape="pill"><AlertTriangle /></Button>
                <Button variant="info" size="icon-sm" shape="pill"><Info /></Button>
                <Button variant="info" size="icon" shape="pill"><Info /></Button>
                <Button variant="info" size="icon-lg" shape="pill"><Info /></Button>
              </div>
              {/* Semantic outline round */}
              <div className="flex flex-wrap items-center gap-3">
                <Button variant="success-outline" size="icon-sm" shape="pill"><Check /></Button>
                <Button variant="success-outline" size="icon" shape="pill"><Check /></Button>
                <Button variant="success-outline" size="icon-lg" shape="pill"><Check /></Button>
                <Button variant="destructive-outline" size="icon-sm" shape="pill"><XCircle /></Button>
                <Button variant="destructive-outline" size="icon" shape="pill"><XCircle /></Button>
                <Button variant="destructive-outline" size="icon-lg" shape="pill"><XCircle /></Button>
                <Button variant="warning-outline" size="icon-sm" shape="pill"><Clock /></Button>
                <Button variant="warning-outline" size="icon" shape="pill"><Clock /></Button>
                <Button variant="warning-outline" size="icon-lg" shape="pill"><Clock /></Button>
                <Button variant="info-outline" size="icon-sm" shape="pill"><Eye /></Button>
                <Button variant="info-outline" size="icon" shape="pill"><Eye /></Button>
                <Button variant="info-outline" size="icon-lg" shape="pill"><Eye /></Button>
              </div>
              {/* Semantic ghost round */}
              <div className="flex flex-wrap items-center gap-3">
                <Button variant="success-ghost" size="icon-sm" shape="pill"><Save /></Button>
                <Button variant="success-ghost" size="icon" shape="pill"><Save /></Button>
                <Button variant="success-ghost" size="icon-lg" shape="pill"><Save /></Button>
                <Button variant="destructive-ghost" size="icon-sm" shape="pill"><Ban /></Button>
                <Button variant="destructive-ghost" size="icon" shape="pill"><Ban /></Button>
                <Button variant="destructive-ghost" size="icon-lg" shape="pill"><Ban /></Button>
                <Button variant="warning-ghost" size="icon-sm" shape="pill"><ShieldAlert /></Button>
                <Button variant="warning-ghost" size="icon" shape="pill"><ShieldAlert /></Button>
                <Button variant="warning-ghost" size="icon-lg" shape="pill"><ShieldAlert /></Button>
                <Button variant="info-ghost" size="icon-sm" shape="pill"><HelpCircle /></Button>
                <Button variant="info-ghost" size="icon" shape="pill"><HelpCircle /></Button>
                <Button variant="info-ghost" size="icon-lg" shape="pill"><HelpCircle /></Button>
              </div>
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
        <Button variant="success"><CheckCircle /> Approve</Button>
        <Button variant="destructive"><Trash2 /> Delete</Button>
        <Button variant="warning"><AlertTriangle /> Warning</Button>
        <Button variant="info"><Info /> Information</Button>
      </div>
      {/* Outline */}
      <div className="flex gap-3">
        <Button variant="success-outline">Approve</Button>
        <Button variant="destructive-outline">Reject</Button>
        <Button variant="warning-outline">Pause</Button>
        <Button variant="info-outline">Detail</Button>
      </div>
      {/* Ghost */}
      <div className="flex gap-3">
        <Button variant="success-ghost">Save</Button>
        <Button variant="destructive-ghost">Cancel</Button>
        <Button variant="warning-ghost">Review</Button>
        <Button variant="info-ghost">Help</Button>
      </div>
      {/* Pill Shape */}
      <div className="flex gap-3">
        <Button shape="pill">Primary Pill</Button>
        <Button variant="success" shape="pill">Success Pill</Button>
        <Button variant="destructive-outline" shape="pill">Reject Pill</Button>
        <Button variant="info-ghost" shape="pill">Info Pill</Button>
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
          description: "Visual style of the button. Semantic variants use explicit colors compatible with light/dark mode.",
        },
        {
          name: "size",
          type: '"default" | "sm" | "lg" | "icon" | "icon-sm" | "icon-lg"',
          default: '"default"',
          description: "Button size. icon, icon-sm and icon-lg produce square/circular buttons for icon-only usage (36px / 28px / 44px respectively).",
        },
        {
          name: "shape",
          type: '"default" | "pill"',
          default: '"default"',
          description: "Border radius shape. 'default' uses rounded-md, 'pill' uses rounded-full for a fully rounded button. Combinable with any variant and size.",
        },
        {
          name: "asChild",
          type: "boolean",
          default: "false",
          description: "Merge props with direct child via Radix Slot (useful for Link, anchor, etc.)",
        },
      ]}
      
      // Examples
      examples={[
        {
          title: "Operation Actions (Factoring)",
          description: "Example of using semantic variants in an operation approval flow.",
          preview: (
            <div className="flex flex-col gap-4 p-4 border rounded-lg bg-card">
              <p className="text-sm text-muted-foreground">Operation OP-2024-001 — Cencosud S.A. — $45,200,000</p>
              <div className="flex flex-wrap gap-2">
                <Button variant="success" size="sm">
                  <Check className="h-4 w-4" />
                  Approve
                </Button>
                <Button variant="warning-outline" size="sm">
                  <Clock className="h-4 w-4" />
                  Request Review
                </Button>
                <Button variant="destructive-outline" size="sm">
                  <XCircle className="h-4 w-4" />
                  Reject
                </Button>
                <Button variant="info-ghost" size="sm">
                  <Eye className="h-4 w-4" />
                  View Detail
                </Button>
              </div>
            </div>
          ),
          code: `<div className="flex gap-2">
  <Button variant="success" size="sm">
    <Check /> Approve
  </Button>
  <Button variant="warning-outline" size="sm">
    <Clock /> Request Review
  </Button>
  <Button variant="destructive-outline" size="sm">
    <XCircle /> Reject
  </Button>
  <Button variant="info-ghost" size="sm">
    <Eye /> View Detail
  </Button>
</div>`,
        },
        {
          title: "With Icon",
          description: "Buttons with Lucide React icons",
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
                Send
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
      <Button variant="success"><Send /> Send</Button>
    </div>
  );
}`,
        },
        {
          title: "Loading State",
          description: "Button with loading state using the Loader2 icon",
          preview: (
            <div className="flex flex-wrap gap-3">
              <Button disabled>
                <Loader2 className="h-4 w-4 animate-spin" />
                Please wait
              </Button>
              <Button variant="success" disabled>
                <Loader2 className="h-4 w-4 animate-spin" />
                Saving...
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
          description: "All semantic variants in the different available sizes.",
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
          description: "All semantic buttons in disabled state.",
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
        {
          title: "Icon Buttons",
          description: "Square and circular icon-only buttons across all sizes and semantic variants.",
          preview: (
            <div className="flex flex-col gap-4">
              <div>
                <p className="text-xs text-muted-foreground mb-2">Square — sizes icon-sm / icon / icon-lg</p>
                <div className="flex flex-wrap items-center gap-2">
                  <Button size="icon-sm"><Search /></Button>
                  <Button size="icon"><Search /></Button>
                  <Button size="icon-lg"><Search /></Button>
                  <Button variant="outline" size="icon-sm"><Pencil /></Button>
                  <Button variant="outline" size="icon"><Pencil /></Button>
                  <Button variant="outline" size="icon-lg"><Pencil /></Button>
                  <Button variant="ghost" size="icon-sm"><MoreHorizontal /></Button>
                  <Button variant="ghost" size="icon"><MoreHorizontal /></Button>
                  <Button variant="ghost" size="icon-lg"><MoreHorizontal /></Button>
                </div>
              </div>
              <div>
                <p className="text-xs text-muted-foreground mb-2">Round (shape="pill") — semantic variants</p>
                <div className="flex flex-wrap items-center gap-2">
                  <Button variant="success" size="icon" shape="pill"><Check /></Button>
                  <Button variant="destructive" size="icon" shape="pill"><Trash2 /></Button>
                  <Button variant="warning" size="icon" shape="pill"><AlertTriangle /></Button>
                  <Button variant="info" size="icon" shape="pill"><Info /></Button>
                  <Button variant="info" size="icon-lg" shape="pill"><Info /></Button>
                  <Button variant="success-outline" size="icon" shape="pill"><Check /></Button>
                  <Button variant="destructive-outline" size="icon" shape="pill"><XCircle /></Button>
                  <Button variant="warning-ghost" size="icon" shape="pill"><ShieldAlert /></Button>
                  <Button variant="info-ghost" size="icon" shape="pill"><HelpCircle /></Button>
                </div>
              </div>
            </div>
          ),
          code: `import { Button } from "@/components/ui/button";
import { Search, Pencil, MoreHorizontal, Check, Trash2 } from "lucide-react";

export function IconButtonsDemo() {
  return (
    <div className="flex flex-col gap-4">
      {/* Square — 3 sizes */}
      <div className="flex items-center gap-2">
        <Button size="icon-sm"><Search /></Button>
        <Button size="icon"><Search /></Button>
        <Button size="icon-lg"><Search /></Button>
      </div>
      {/* Square outline */}
      <div className="flex items-center gap-2">
        <Button variant="outline" size="icon-sm"><Pencil /></Button>
        <Button variant="outline" size="icon"><Pencil /></Button>
        <Button variant="outline" size="icon-lg"><Pencil /></Button>
      </div>
      {/* Round — shape="pill" */}
      <div className="flex items-center gap-2">
        <Button variant="success" size="icon" shape="pill"><Check /></Button>
        <Button variant="destructive" size="icon" shape="pill"><Trash2 /></Button>
      </div>
    </div>
  );
}`,
        },
      ]}
    />
  );
}