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
      description="Quick action toolbar with keyboard shortcuts."
      category="Business Pattern"
      preview={<QuickActionToolbar />}
      code={quickActionCode}
    />
  );
}