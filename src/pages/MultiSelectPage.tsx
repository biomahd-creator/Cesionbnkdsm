import { ComponentShowcase } from "../components/ui/component-showcase";
import { MultiSelect, MultiSelectOption } from "../components/ui/multi-select";
import { useState } from "react";

const frameworks: MultiSelectOption[] = [
  { label: "React", value: "react" },
  { label: "Vue", value: "vue" },
  { label: "Angular", value: "angular" },
  { label: "Svelte", value: "svelte" },
  { label: "Next.js", value: "nextjs" },
  { label: "Nuxt.js", value: "nuxtjs" },
  { label: "Remix", value: "remix" },
  { label: "Astro", value: "astro" },
];

const countries: MultiSelectOption[] = [
  { label: "España", value: "es" },
  { label: "México", value: "mx" },
  { label: "Argentina", value: "ar" },
  { label: "Colombia", value: "co" },
  { label: "Chile", value: "cl" },
  { label: "Perú", value: "pe" },
];

const departments: MultiSelectOption[] = [
  { label: "Desarrollo", value: "dev" },
  { label: "Diseño", value: "design" },
  { label: "Marketing", value: "marketing" },
  { label: "Ventas", value: "sales" },
  { label: "Recursos Humanos", value: "hr" },
];

const code = `import { MultiSelect, MultiSelectOption } from "@/components/ui/multi-select";
import { useState } from "react";

const options: MultiSelectOption[] = [
  { label: "React", value: "react" },
  { label: "Vue", value: "vue" },
  { label: "Angular", value: "angular" },
];

export function MultiSelectDemo() {
  const [selected, setSelected] = useState<string[]>([]);

  return (
    <MultiSelect
      options={options}
      selected={selected}
      onChange={setSelected}
      placeholder="Selecciona uno o más..."
    />
  );
}`;

export function MultiSelectPage() {
  const [selected1, setSelected1] = useState<string[]>([]);
  const [selected2, setSelected2] = useState<string[]>(["react", "nextjs"]);
  const [selected3, setSelected3] = useState<string[]>([]);
  const [selected4, setSelected4] = useState<string[]>([]);

  return (
    <ComponentShowcase
      title="Multi Select"
      description="Componente de selección múltiple con búsqueda integrada, badges para elementos seleccionados y soporte completo de teclado. Ideal para formularios con opciones múltiples."
      category="Forms"
      preview={
        <div className="w-full max-w-md space-y-2">
          <label className="text-foreground font-medium">Selecciona frameworks</label>
          <MultiSelect
            options={frameworks}
            selected={selected1}
            onChange={setSelected1}
            placeholder="Selecciona uno o más frameworks..."
          />
          {selected1.length > 0 && (
            <p className="text-muted-foreground text-sm">
              Seleccionados: {selected1.join(", ")}
            </p>
          )}
        </div>
      }
      code={code}
      props={[
        { name: "options", type: "MultiSelectOption[]", description: "Array de opciones disponibles", required: true },
        { name: "selected", type: "string[]", description: "Array de valores seleccionados", required: true },
        { name: "onChange", type: "(selected: string[]) => void", description: "Callback cuando cambia la selección", required: true },
        { name: "placeholder", type: "string", default: '"Selecciona opciones..."', description: "Texto cuando no hay selección" },
        { name: "disabled", type: "boolean", default: "false", description: "Deshabilita el componente" },
        { name: "className", type: "string", description: "Clases CSS adicionales" },
      ]}
      examples={[
        {
          title: "Con valores por defecto",
          description: "Multi Select con opciones preseleccionadas.",
          preview: (
            <div className="w-full max-w-md">
              <MultiSelect
                options={frameworks}
                selected={selected2}
                onChange={setSelected2}
                placeholder="Selecciona frameworks..."
              />
            </div>
          ),
          code: `<MultiSelect
  options={frameworks}
  selected={["react", "nextjs"]}
  onChange={setSelected}
/>`,
        },
        {
          title: "Países",
          description: "Multi Select con diferentes conjuntos de opciones.",
          preview: (
            <div className="w-full max-w-md">
              <MultiSelect
                options={countries}
                selected={selected3}
                onChange={setSelected3}
                placeholder="Selecciona países..."
              />
            </div>
          ),
          code: `<MultiSelect
  options={countries}
  selected={selected}
  onChange={setSelected}
  placeholder="Selecciona países..."
/>`,
        },
        {
          title: "Departamentos",
          description: "Multi Select integrado en un formulario.",
          preview: (
            <div className="w-full max-w-md">
              <MultiSelect
                options={departments}
                selected={selected4}
                onChange={setSelected4}
                placeholder="Selecciona departamentos..."
              />
            </div>
          ),
          code: `<MultiSelect
  options={departments}
  selected={selected}
  onChange={setSelected}
/>`,
        },
        {
          title: "Deshabilitado",
          description: "Estado deshabilitado del componente.",
          preview: (
            <div className="w-full max-w-md">
              <MultiSelect
                options={frameworks}
                selected={["react", "vue"]}
                onChange={() => {}}
                disabled
                placeholder="Multi Select deshabilitado"
              />
            </div>
          ),
          code: `<MultiSelect
  options={frameworks}
  selected={["react", "vue"]}
  onChange={() => {}}
  disabled
/>`,
        },
      ]}
    />
  );
}
