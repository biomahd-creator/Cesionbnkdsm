import { ComponentShowcase } from "../components/ui/component-showcase";
import { FactoringStatusCardShowcase } from "../components/patterns/factoring/factoring-status-cards";

export function FactoringStatusCardsPage() {
  return (
    <ComponentShowcase
      title="Factoring Status Cards"
      description="Status filter cards for factoring portfolio. Each card represents an operation status (Aprobado, Desembolsado, En Cobro, Cobrado, Vencido, Rechazado). Active state shows colored bottom border (4px), colored title/icon/badge, and elevation shadow. Inactive state uses gray styles."
      category="Patterns"
      preview={<FactoringStatusCardShowcase />}
      code={`import { FactoringStatusCard } from "@/components/patterns/factoring/factoring-status-cards";

<FactoringStatusCard
  label="Aprobado"
  subtitle="Monto total"
  amount="$12.4M"
  count={8}
  icon={CheckCircle2}
  color="#6366f1"
  active={true}
  onClick={() => setActive("aprobado")}
/>`}
      props={[
        { name: "label", type: "string", description: "Status name displayed as the card title." },
        { name: "subtitle", type: "string?", description: "Secondary text above the amount." },
        { name: "amount", type: "string?", description: "Formatted monetary value." },
        { name: "count", type: "number", description: "Badge count shown top-right." },
        { name: "icon", type: "LucideIcon", description: "Status icon displayed bottom-right." },
        { name: "color", type: "string", description: "Hex color for active state (border, icon, badge, title)." },
        { name: "active", type: "boolean?", description: "Whether this card is the currently selected filter." },
        { name: "onClick", type: "() => void?", description: "Click handler for status selection." },
      ]}
      examples={[]}
    />
  );
}
