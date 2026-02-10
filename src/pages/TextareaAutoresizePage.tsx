import { ComponentShowcase } from "../components/ui/component-showcase";
import { TextareaAutoresize } from "../components/ui/textarea-autoresize";
import { useState } from "react";

const code = `import { TextareaAutoresize } from "@/components/ui/textarea-autoresize";
import { useState } from "react";

export function TextareaAutoresizeDemo() {
  const [comment, setComment] = useState("");

  return (
    <TextareaAutoresize
      value={comment}
      onChange={(e) => setComment(e.target.value)}
      placeholder="Escribe tu comentario..."
      minRows={3}
      maxRows={10}
    />
  );
}`;

export function TextareaAutoresizePage() {
  const [value1, setValue1] = useState("");
  const [value2, setValue2] = useState("Este es un texto inicial.\nOcupa varias líneas.\nPuedes editar y agregar más.");
  const [value3, setValue3] = useState("");

  return (
    <ComponentShowcase
      title="Textarea Autoresize"
      description="Textarea que se ajusta automáticamente en altura según el contenido. Auto-ajuste en tiempo real, control de altura mínima/máxima con minRows/maxRows, scrollbar automático, y misma API que textarea estándar."
      category="Forms"
      preview={
        <div className="w-full max-w-md space-y-2">
          <label className="text-foreground font-medium">Escribe un comentario</label>
          <TextareaAutoresize
            value={value1}
            onChange={(e) => setValue1(e.target.value)}
            placeholder="El textarea crecerá automáticamente mientras escribes..."
            minRows={3}
            maxRows={8}
          />
          <p className="text-muted-foreground text-xs">Caracteres: {value1.length}</p>
        </div>
      }
      code={code}
      props={[
        { name: "minRows", type: "number", default: "3", description: "Número mínimo de filas visibles" },
        { name: "maxRows", type: "number", default: "10", description: "Número máximo de filas antes de scroll" },
        { name: "value", type: "string", description: "Valor controlado del textarea" },
        { name: "onChange", type: "(e) => void", description: "Callback cuando cambia el valor" },
        { name: "placeholder", type: "string", description: "Texto de placeholder" },
        { name: "disabled", type: "boolean", default: "false", description: "Deshabilita el textarea" },
        { name: "className", type: "string", description: "Clases CSS adicionales" },
        { name: "...props", type: "TextareaHTMLAttributes", description: "Todas las props HTML de textarea" },
      ]}
      examples={[
        {
          title: "Con contenido inicial",
          description: "Textarea que ya tiene contenido y se ajusta automáticamente.",
          preview: (
            <div className="w-full max-w-md">
              <TextareaAutoresize
                value={value2}
                onChange={(e) => setValue2(e.target.value)}
                minRows={2}
                maxRows={6}
              />
            </div>
          ),
          code: `<TextareaAutoresize
  value={initialContent}
  onChange={(e) => setValue(e.target.value)}
  minRows={2}
  maxRows={6}
/>`,
        },
        {
          title: "Altura restringida",
          description: "Control de altura con 2 filas mínimo y 5 máximo.",
          preview: (
            <div className="w-full max-w-md">
              <TextareaAutoresize
                value={value3}
                onChange={(e) => setValue3(e.target.value)}
                placeholder="Este textarea tiene 2 filas mínimo y 5 máximo..."
                minRows={2}
                maxRows={5}
              />
            </div>
          ),
          code: `<TextareaAutoresize
  placeholder="2 filas mínimo, 5 máximo..."
  minRows={2}
  maxRows={5}
/>`,
        },
        {
          title: "Deshabilitado",
          description: "Estado deshabilitado del componente.",
          preview: (
            <div className="w-full max-w-md">
              <TextareaAutoresize
                value="Este textarea está deshabilitado y no se puede editar."
                disabled
                minRows={3}
              />
            </div>
          ),
          code: `<TextareaAutoresize
  value="Contenido fijo"
  disabled
  minRows={3}
/>`,
        },
      ]}
    />
  );
}
