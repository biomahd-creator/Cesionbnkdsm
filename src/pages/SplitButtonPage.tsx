import { ComponentShowcase } from "../components/ui/component-showcase";
import { SplitButton } from "../components/ui/split-button";

const code = `import { SplitButton } from "@/components/ui/split-button";

export function SplitButtonDemo() {
  return (
    <SplitButton 
      label="Guardar"
      onMainAction={() => alert('Guardado')}
      actions={[
        { label: "Guardar como borrador", onClick: () => {} },
        { label: "Guardar y enviar", onClick: () => {} },
      ]}
    />
  );
}`;

export function SplitButtonPage() {
  return (
    <ComponentShowcase
      title="Split Button"
      description="Botón con acción principal y menú desplegable de acciones secundarias."
      category="UI Pattern"
      preview={
        <div className="h-[200px] flex items-center justify-center">
          <SplitButton 
            label="Guardar"
            onMainAction={() => alert('Guardado')}
            actions={[
              { label: "Guardar como borrador", onClick: () => {} },
              { label: "Guardar y enviar", onClick: () => {} },
            ]}
          />
        </div>
      }
      code={code}
    />
  );
}
