import { ComponentShowcase } from "../components/ui/component-showcase";
import { QuickActionToolbar } from "../components/patterns/QuickActionToolbar";

const quickActionCode = `import { QuickActionToolbar } from "@/components/patterns/QuickActionToolbar";

export function QuickActionToolbarDemo() {
  return <QuickActionToolbar />;
}`;

export function QuickActionToolbarPage() {
  return (
    <ComponentShowcase
      title="Quick Action Toolbar"
      description="Barra de herramientas para acciones rápidas y atajos de teclado."
      category="Business Pattern"
      preview={<QuickActionToolbar />}
      code={quickActionCode}
    />
  );
}
