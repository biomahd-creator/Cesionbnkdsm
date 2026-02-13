import { ComponentShowcase } from "../components/ui/component-showcase";
import { SplitButton } from "../components/ui/split-button";

const code = `import { SplitButton } from "@/components/ui/split-button";

export function SplitButtonDemo() {
  return (
    <SplitButton 
      label="Save"
      onMainAction={() => alert('Saved')}
      actions={[
        { label: "Save as draft", onClick: () => {} },
        { label: "Save and send", onClick: () => {} },
      ]}
    />
  );
}`;

export function SplitButtonPage() {
  return (
    <ComponentShowcase
      title="Split Button"
      description="Button with a primary action and a dropdown menu for secondary actions."
      category="UI Pattern"
      preview={
        <div className="h-[200px] flex items-center justify-center">
          <SplitButton 
            label="Save"
            onMainAction={() => alert('Saved')}
            actions={[
              { label: "Save as draft", onClick: () => {} },
              { label: "Save and send", onClick: () => {} },
            ]}
          />
        </div>
      }
      code={code}
    />
  );
}