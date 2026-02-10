import { ComponentShowcase } from "../components/ui/component-showcase";
import { RiskIndicator } from "../factoring/RiskIndicator";
import { Separator } from "../components/ui/separator";

const riskIndicatorCode = `import { RiskIndicator } from "@/factoring/RiskIndicator";

export function RiskIndicatorDemo() {
  return (
    <div className="flex flex-wrap gap-4">
      <RiskIndicator level="low" score={95} />
      <RiskIndicator level="medium" score={60} />
      <RiskIndicator level="high" score={40} />
      <RiskIndicator level="critical" score={15} />
      
      <div className="flex gap-2">
        <RiskIndicator level="low" condensed />
        <RiskIndicator level="medium" condensed />
        <RiskIndicator level="high" condensed />
      </div>
    </div>
  );
}`;

export function RiskIndicatorPage() {
  return (
    <ComponentShowcase
      title="Risk Indicator"
      description="Indicador visual de nivel de riesgo con score numérico y variantes condensadas. Compatible con light y dark mode."
      category="Business Component"
      preview={
        <div className="flex flex-col gap-6">
          {/* Full indicators with score */}
          <div>
            <p className="text-xs text-muted-foreground mb-3">Con Score</p>
            <div className="flex flex-wrap gap-3">
              <RiskIndicator level="low" score={95} />
              <RiskIndicator level="medium" score={60} />
              <RiskIndicator level="high" score={40} />
              <RiskIndicator level="critical" score={15} />
            </div>
          </div>
          <Separator />
          {/* Label only, no score */}
          <div>
            <p className="text-xs text-muted-foreground mb-3">Solo Label</p>
            <div className="flex flex-wrap gap-3">
              <RiskIndicator level="low" />
              <RiskIndicator level="medium" />
              <RiskIndicator level="high" />
              <RiskIndicator level="critical" />
            </div>
          </div>
          <Separator />
          {/* Condensed (icon only with tooltip) */}
          <div>
            <p className="text-xs text-muted-foreground mb-3">Condensado</p>
            <div className="flex gap-2">
              <RiskIndicator level="low" condensed score={95} />
              <RiskIndicator level="medium" condensed score={60} />
              <RiskIndicator level="high" condensed score={40} />
              <RiskIndicator level="critical" condensed score={15} />
            </div>
          </div>
        </div>
      }
      code={riskIndicatorCode}
      props={[
        { name: "level", type: '"low" | "medium" | "high" | "critical"', description: "Nivel de riesgo que determina color e icono.", required: true },
        { name: "score", type: "number (0-100)", description: "Score numérico opcional. Muestra barra de progreso." },
        { name: "showLabel", type: "boolean", default: "true", description: "Mostrar/ocultar el label de texto." },
        { name: "condensed", type: "boolean", default: "false", description: "Modo compacto: solo icono circular con tooltip." },
        { name: "className", type: "string", description: "Clases CSS adicionales." },
      ]}
    />
  );
}