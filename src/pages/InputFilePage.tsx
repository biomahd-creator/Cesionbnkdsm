import { ComponentShowcase } from "../components/ui/component-showcase";
import { InputFile } from "../components/ui/input-file";
import { useState } from "react";

const code = `import { InputFile } from "@/components/ui/input-file";
import { useState } from "react";

export function InputFileDemo() {
  const [files, setFiles] = useState<File[]>([]);

  return (
    <InputFile
      onFilesChange={setFiles}
      maxFiles={3}
      accept="image/*,.pdf"
      placeholder="Selecciona imágenes o PDFs"
    />
  );
}`;

export function InputFilePage() {
  const [files1, setFiles1] = useState<File[]>([]);
  const [files2, setFiles2] = useState<File[]>([]);
  const [files3, setFiles3] = useState<File[]>([]);

  return (
    <ComponentShowcase
      title="Input File"
      description="Componente para carga de archivos con drag & drop, preview de archivos seleccionados y soporte para múltiples archivos. Incluye navegación por teclado, restricción de tipos y eliminación individual."
      category="Forms"
      preview={
        <div className="w-full max-w-md space-y-2">
          <label className="text-foreground font-medium">Archivo único</label>
          <InputFile
            onFilesChange={setFiles1}
            maxFiles={1}
            accept="image/*"
          />
        </div>
      }
      code={code}
      props={[
        { name: "onFilesChange", type: "(files: File[]) => void", description: "Callback cuando cambian los archivos" },
        { name: "maxFiles", type: "number", default: "1", description: "Número máximo de archivos permitidos" },
        { name: "showPreview", type: "boolean", default: "true", description: "Mostrar lista de archivos seleccionados" },
        { name: "accept", type: "string", description: "Tipos de archivo permitidos (ej: .pdf, image/*)" },
        { name: "disabled", type: "boolean", default: "false", description: "Deshabilita el input" },
        { name: "className", type: "string", description: "Clases CSS adicionales" },
      ]}
      examples={[
        {
          title: "Múltiples archivos",
          description: "Permite seleccionar múltiples archivos con un máximo definido.",
          preview: (
            <div className="w-full max-w-md">
              <InputFile
                onFilesChange={setFiles2}
                maxFiles={5}
                placeholder="Selecciona hasta 5 archivos"
              />
            </div>
          ),
          code: `<InputFile
  onFilesChange={setFiles}
  maxFiles={5}
  placeholder="Selecciona hasta 5 archivos"
/>`,
        },
        {
          title: "Sin preview",
          description: "Input de archivo sin mostrar la lista de archivos seleccionados.",
          preview: (
            <div className="w-full max-w-md">
              <InputFile
                onFilesChange={setFiles3}
                showPreview={false}
              />
            </div>
          ),
          code: `<InputFile
  onFilesChange={setFiles}
  showPreview={false}
/>`,
        },
        {
          title: "Solo PDFs",
          description: "Input restringido a tipos de archivo específicos.",
          preview: (
            <div className="w-full max-w-md">
              <InputFile
                accept=".pdf,application/pdf"
                placeholder="Selecciona archivos PDF"
              />
            </div>
          ),
          code: `<InputFile
  accept=".pdf,application/pdf"
  placeholder="Selecciona archivos PDF"
/>`,
        },
        {
          title: "Deshabilitado",
          description: "Estado deshabilitado del componente.",
          preview: (
            <div className="w-full max-w-md">
              <InputFile
                disabled
                placeholder="Input deshabilitado"
              />
            </div>
          ),
          code: `<InputFile disabled placeholder="Input deshabilitado" />`,
        },
      ]}
    />
  );
}
