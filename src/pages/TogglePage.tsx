import { ComponentShowcase } from "../components/ui/component-showcase";
import { Toggle } from "../components/ui/toggle";
import { Bold, Italic, Underline, AlignLeft, AlignCenter, AlignRight, Strikethrough, Code, List, ListOrdered, Quote } from "lucide-react";

export function TogglePage() {
  return (
    <ComponentShowcase
      title="Toggle"
      description="A two-state button that can be either on or off."
      category="Actions"
      
      // Main Preview
      preview={
        <div className="flex flex-wrap gap-4">
          <Toggle aria-label="Toggle default">
            <Italic className="h-4 w-4" />
          </Toggle>
          <Toggle variant="outline" aria-label="Toggle outline">
            <Bold className="h-4 w-4" />
          </Toggle>
          <Toggle defaultPressed aria-label="Toggle pressed">
            <Underline className="h-4 w-4" />
          </Toggle>
          <Toggle disabled aria-label="Toggle disabled">
            <Strikethrough className="h-4 w-4" />
          </Toggle>
        </div>
      }
      
      // Main Code
      code={`import { Toggle } from "@/components/ui/toggle";
import { Italic, Bold, Underline } from "lucide-react";

export function ToggleDemo() {
  return (
    <div className="flex gap-4">
      <Toggle aria-label="Toggle italic">
        <Italic className="h-4 w-4" />
      </Toggle>
      <Toggle variant="outline" aria-label="Toggle bold">
        <Bold className="h-4 w-4" />
      </Toggle>
      <Toggle defaultPressed aria-label="Toggle underline">
        <Underline className="h-4 w-4" />
      </Toggle>
    </div>
  );
}`}
      
      // Props Documentation
      props={[
        {
          name: "variant",
          type: '"default" | "outline"',
          default: '"default"',
          description: "Estilo visual del toggle",
        },
        {
          name: "size",
          type: '"default" | "sm" | "lg"',
          default: '"default"',
          description: "Tamaño del toggle",
        },
        {
          name: "defaultPressed",
          type: "boolean",
          default: "false",
          description: "Estado inicial del toggle (no controlado)",
        },
        {
          name: "pressed",
          type: "boolean",
          description: "Estado controlado del toggle",
        },
        {
          name: "onPressedChange",
          type: "(pressed: boolean) => void",
          description: "Callback cuando cambia el estado",
        },
        {
          name: "disabled",
          type: "boolean",
          default: "false",
          description: "Deshabilita el toggle",
        },
        {
          name: "aria-label",
          type: "string",
          description: "Etiqueta accesible (requerida)",
          required: true,
        },
        {
          name: "className",
          type: "string",
          description: "Clases CSS adicionales",
        },
      ]}
      
      // Examples
      examples={[
        {
          title: "Text Formatting Toolbar",
          description: "Barra de herramientas común para editores de texto",
          preview: (
            <div className="flex gap-2">
              <Toggle aria-label="Toggle bold">
                <Bold className="h-4 w-4" />
              </Toggle>
              <Toggle aria-label="Toggle italic">
                <Italic className="h-4 w-4" />
              </Toggle>
              <Toggle aria-label="Toggle underline">
                <Underline className="h-4 w-4" />
              </Toggle>
              <Toggle aria-label="Toggle strikethrough">
                <Strikethrough className="h-4 w-4" />
              </Toggle>
              <Toggle aria-label="Toggle code">
                <Code className="h-4 w-4" />
              </Toggle>
            </div>
          ),
          code: `import { Toggle } from "@/components/ui/toggle";
import { Bold, Italic, Underline, Strikethrough, Code } from "lucide-react";

export function TextFormattingToolbar() {
  return (
    <div className="flex gap-2">
      <Toggle aria-label="Toggle bold">
        <Bold className="h-4 w-4" />
      </Toggle>
      <Toggle aria-label="Toggle italic">
        <Italic className="h-4 w-4" />
      </Toggle>
      <Toggle aria-label="Toggle underline">
        <Underline className="h-4 w-4" />
      </Toggle>
      <Toggle aria-label="Toggle strikethrough">
        <Strikethrough className="h-4 w-4" />
      </Toggle>
      <Toggle aria-label="Toggle code">
        <Code className="h-4 w-4" />
      </Toggle>
    </div>
  );
}`,
        },
        {
          title: "Outline Variants",
          description: "Toggle con variante outline en todos los tamaños",
          preview: (
            <div className="flex flex-col gap-4">
              <div className="flex items-center gap-4">
                <Toggle variant="outline" size="sm" aria-label="Small outline">
                  <Italic className="h-4 w-4" />
                </Toggle>
                <Toggle variant="outline" aria-label="Default outline">
                  <Bold className="h-4 w-4" />
                </Toggle>
                <Toggle variant="outline" size="lg" aria-label="Large outline">
                  <Underline className="h-5 w-5" />
                </Toggle>
              </div>
              <div className="flex gap-4">
                <Toggle variant="outline" aria-label="Outline with text">
                  <Italic className="mr-2 h-4 w-4" />
                  Italic
                </Toggle>
                <Toggle variant="outline" defaultPressed aria-label="Outline pressed">
                  <Bold className="mr-2 h-4 w-4" />
                  Bold
                </Toggle>
                <Toggle variant="outline" disabled aria-label="Outline disabled">
                  <Underline className="h-4 w-4" />
                </Toggle>
              </div>
            </div>
          ),
          code: `import { Toggle } from "@/components/ui/toggle";
import { Italic, Bold, Underline } from "lucide-react";

export function OutlineToggles() {
  return (
    <div className="flex flex-col gap-4">
      {/* Tamaños */}
      <div className="flex gap-4">
        <Toggle variant="outline" size="sm">
          <Italic className="h-4 w-4" />
        </Toggle>
        <Toggle variant="outline">
          <Bold className="h-4 w-4" />
        </Toggle>
        <Toggle variant="outline" size="lg">
          <Underline className="h-5 w-5" />
        </Toggle>
      </div>
      
      {/* Con texto y estados */}
      <div className="flex gap-4">
        <Toggle variant="outline">
          <Italic className="mr-2 h-4 w-4" />
          Italic
        </Toggle>
        <Toggle variant="outline" defaultPressed>
          <Bold className="mr-2 h-4 w-4" />
          Bold
        </Toggle>
      </div>
    </div>
  );
}`,
        },
        {
          title: "Sizes",
          description: "Diferentes tamaños disponibles para el toggle",
          preview: (
            <div className="flex items-center gap-4">
              <Toggle size="sm" aria-label="Small toggle">
                <Bold className="h-4 w-4" />
              </Toggle>
              <Toggle size="default" aria-label="Default toggle">
                <Bold className="h-4 w-4" />
              </Toggle>
              <Toggle size="lg" aria-label="Large toggle">
                <Bold className="h-5 w-5" />
              </Toggle>
            </div>
          ),
          code: `import { Toggle } from "@/components/ui/toggle";
import { Bold } from "lucide-react";

export function ToggleSizes() {
  return (
    <div className="flex items-center gap-4">
      <Toggle size="sm" aria-label="Small">
        <Bold className="h-4 w-4" />
      </Toggle>
      <Toggle size="default" aria-label="Default">
        <Bold className="h-4 w-4" />
      </Toggle>
      <Toggle size="lg" aria-label="Large">
        <Bold className="h-5 w-5" />
      </Toggle>
    </div>
  );
}`,
        },
        {
          title: "With Text",
          description: "Toggle con texto e icono combinados",
          preview: (
            <div className="flex flex-wrap gap-4">
              <Toggle aria-label="Toggle italic">
                <Italic className="mr-2 h-4 w-4" />
                Italic
              </Toggle>
              <Toggle variant="outline" aria-label="Toggle bold">
                <Bold className="mr-2 h-4 w-4" />
                Bold
              </Toggle>
              <Toggle aria-label="Toggle underline">
                <Underline className="mr-2 h-4 w-4" />
                Underline
              </Toggle>
            </div>
          ),
          code: `import { Toggle } from "@/components/ui/toggle";
import { Italic, Bold, Underline } from "lucide-react";

export function ToggleWithText() {
  return (
    <div className="flex gap-4">
      <Toggle aria-label="Toggle italic">
        <Italic className="mr-2 h-4 w-4" />
        Italic
      </Toggle>
      <Toggle variant="outline" aria-label="Toggle bold">
        <Bold className="mr-2 h-4 w-4" />
        Bold
      </Toggle>
      <Toggle aria-label="Toggle underline">
        <Underline className="mr-2 h-4 w-4" />
        Underline
      </Toggle>
    </div>
  );
}`,
        },
        {
          title: "Alignment Controls",
          description: "Toggle para controles de alineación de texto",
          preview: (
            <div className="flex gap-2">
              <Toggle aria-label="Align left" defaultPressed>
                <AlignLeft className="h-4 w-4" />
              </Toggle>
              <Toggle aria-label="Align center">
                <AlignCenter className="h-4 w-4" />
              </Toggle>
              <Toggle aria-label="Align right">
                <AlignRight className="h-4 w-4" />
              </Toggle>
            </div>
          ),
          code: `import { Toggle } from "@/components/ui/toggle";
import { AlignLeft, AlignCenter, AlignRight } from "lucide-react";

export function AlignmentControls() {
  return (
    <div className="flex gap-2">
      <Toggle aria-label="Align left" defaultPressed>
        <AlignLeft className="h-4 w-4" />
      </Toggle>
      <Toggle aria-label="Align center">
        <AlignCenter className="h-4 w-4" />
      </Toggle>
      <Toggle aria-label="Align right">
        <AlignRight className="h-4 w-4" />
      </Toggle>
    </div>
  );
}`,
        },
        {
          title: "List Controls",
          description: "Toggle para controles de listas",
          preview: (
            <div className="flex gap-2">
              <Toggle variant="outline" aria-label="Unordered list">
                <List className="h-4 w-4" />
              </Toggle>
              <Toggle variant="outline" aria-label="Ordered list">
                <ListOrdered className="h-4 w-4" />
              </Toggle>
              <Toggle variant="outline" aria-label="Quote">
                <Quote className="h-4 w-4" />
              </Toggle>
            </div>
          ),
          code: `import { Toggle } from "@/components/ui/toggle";
import { List, ListOrdered, Quote } from "lucide-react";

export function ListControls() {
  return (
    <div className="flex gap-2">
      <Toggle variant="outline" aria-label="Unordered list">
        <List className="h-4 w-4" />
      </Toggle>
      <Toggle variant="outline" aria-label="Ordered list">
        <ListOrdered className="h-4 w-4" />
      </Toggle>
      <Toggle variant="outline" aria-label="Quote">
        <Quote className="h-4 w-4" />
      </Toggle>
    </div>
  );
}`,
        },
        {
          title: "Disabled States",
          description: "Toggle en estados deshabilitados",
          preview: (
            <div className="flex flex-wrap gap-4">
              <Toggle disabled aria-label="Disabled off">
                <Bold className="h-4 w-4" />
              </Toggle>
              <Toggle disabled defaultPressed aria-label="Disabled pressed">
                <Italic className="h-4 w-4" />
              </Toggle>
              <Toggle variant="outline" disabled aria-label="Outline disabled">
                <Underline className="h-4 w-4" />
              </Toggle>
              <Toggle variant="outline" disabled defaultPressed aria-label="Outline disabled pressed">
                <Strikethrough className="h-4 w-4" />
              </Toggle>
            </div>
          ),
          code: `import { Toggle } from "@/components/ui/toggle";
import { Bold, Italic, Underline, Strikethrough } from "lucide-react";

export function DisabledToggles() {
  return (
    <div className="flex gap-4">
      <Toggle disabled aria-label="Disabled">
        <Bold className="h-4 w-4" />
      </Toggle>
      <Toggle disabled defaultPressed aria-label="Disabled pressed">
        <Italic className="h-4 w-4" />
      </Toggle>
      <Toggle variant="outline" disabled aria-label="Outline disabled">
        <Underline className="h-4 w-4" />
      </Toggle>
    </div>
  );
}`,
        },
        {
          title: "Controlled State",
          description: "Toggle con estado controlado usando React state",
          preview: (
            <div className="flex flex-col gap-4">
              <Toggle aria-label="Toggle bold">
                <Bold className="mr-2 h-4 w-4" />
                Bold
              </Toggle>
              <p className="text-muted-foreground">
                Usa la prop <code className="text-xs bg-muted px-1 py-0.5 rounded">pressed</code> y{" "}
                <code className="text-xs bg-muted px-1 py-0.5 rounded">onPressedChange</code> para controlar el estado
              </p>
            </div>
          ),
          code: `import { Toggle } from "@/components/ui/toggle";
import { Bold } from "lucide-react";
import { useState } from "react";

export function ControlledToggle() {
  const [pressed, setPressed] = useState(false);

  return (
    <div className="flex flex-col gap-4">
      <Toggle
        pressed={pressed}
        onPressedChange={setPressed}
        aria-label="Toggle bold"
      >
        <Bold className="mr-2 h-4 w-4" />
        Bold
      </Toggle>
      
      <p className="text-sm text-muted-foreground">
        State: {pressed ? "Pressed" : "Not pressed"}
      </p>
    </div>
  );
}`,
        },
      ]}
    />
  );
}
