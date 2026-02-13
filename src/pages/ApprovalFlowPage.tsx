import { ComponentShowcase } from "../components/ui/component-showcase";
import { ApprovalFlowWizard } from "../components/patterns/ApprovalFlowWizard";
import { Badge } from "../components/ui/badge";
import { CheckCircle } from "lucide-react";

export function ApprovalFlowPage() {
  return (
    <ComponentShowcase
      title="Approval Flow Wizard"
      description="5-step guided wizard that integrates invoice selection, credit limit validation, factoring calculator, and confirmation into a single multi-step flow. Uses CupoValidator, FactoringCalculator, and custom selection UI with conditional validation per step, progress tracking, and back/forward navigation."
      category="Patterns"
      preview={<ApprovalFlowWizard />}
      code={`import { ApprovalFlowWizard } from "@/components/patterns/ApprovalFlowWizard";

<ApprovalFlowWizard />`}
      props={[
        {
          name: "(pattern)",
          type: "—",
          description: "Self-contained wizard pattern. Integrates CupoValidator (Step 2), FactoringCalculator (Step 3), and summary review (Step 4) with built-in state management.",
        },
      ]}
      examples={[
        {
          title: "Wizard Steps",
          description: "The 5 steps of the approval flow wizard and their integrated components.",
          preview: (
            <div className="space-y-3">
              {[
                { step: 1, title: "Invoice Selection", desc: "Multi-select invoices with total calculation", tags: ["Multi-select", "Total calculation"] },
                { step: 2, title: "Credit Limit Validation", desc: "CupoValidator verifies total against available limit", tags: ["CupoValidator", "Real-time validation"] },
                { step: 3, title: "Terms & Calculation", desc: "FactoringCalculator for rate, term, and payout", tags: ["FactoringCalculator", "CEA calculated"] },
                { step: 4, title: "Review & Confirmation", desc: "Summary of invoices, terms, and final calculations", tags: ["Summary view", "Confirmation required"] },
              ].map((s) => (
                <div key={s.step} className="flex items-start gap-4 p-3 rounded-lg border bg-muted/20">
                  <div className="h-8 w-8 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <span className="text-primary font-medium text-sm">{s.step}</span>
                  </div>
                  <div className="flex-1">
                    <h4 className="font-medium text-sm">{s.title}</h4>
                    <p className="text-xs text-muted-foreground">{s.desc}</p>
                    <div className="flex gap-1 mt-1">
                      {s.tags.map((t) => <Badge key={t} variant="outline" className="text-[10px] px-1.5 py-0">{t}</Badge>)}
                    </div>
                  </div>
                </div>
              ))}
              <div className="flex items-start gap-4 p-3 rounded-lg border bg-green-500/10 border-green-500/20">
                <div className="h-8 w-8 rounded-full bg-green-500/20 flex items-center justify-center flex-shrink-0">
                  <CheckCircle className="h-4 w-4 text-green-600 dark:text-green-400" />
                </div>
                <div className="flex-1">
                  <h4 className="font-medium text-sm text-green-700 dark:text-green-400">Success Confirmation</h4>
                  <p className="text-xs text-muted-foreground">Operation created with unique ID — allows new operation or view details</p>
                </div>
              </div>
            </div>
          ),
          code: `// Steps flow: Selection → Validation → Calculation → Review → Success`,
        },
        {
          title: "Use Cases",
          description: "Typical scenarios for the Approval Flow Wizard.",
          preview: (
            <div className="grid gap-3 md:grid-cols-2">
              <div className="p-3 rounded-lg border bg-muted/20">
                <h4 className="font-medium text-sm mb-1 text-green-600 dark:text-green-400">New Operation (Client)</h4>
                <p className="text-xs text-muted-foreground">Client selects invoices, system validates credit limit, calculates terms, and creates operation in a guided flow.</p>
              </div>
              <div className="p-3 rounded-lg border bg-muted/20">
                <h4 className="font-medium text-sm mb-1 text-blue-600 dark:text-blue-400">Pre-Approval (Executive)</h4>
                <p className="text-xs text-muted-foreground">Executive pre-approves operations verifying limits and calculating terms before sending to client.</p>
              </div>
              <div className="p-3 rounded-lg border bg-muted/20">
                <h4 className="font-medium text-sm mb-1 text-purple-600 dark:text-purple-400">Scenario Simulation</h4>
                <p className="text-xs text-muted-foreground">Simulate different invoice + term combinations without creating real operations.</p>
              </div>
              <div className="p-3 rounded-lg border bg-muted/20">
                <h4 className="font-medium text-sm mb-1 text-orange-600 dark:text-orange-400">User Onboarding</h4>
                <p className="text-xs text-muted-foreground">Step-by-step training with clear instructions and validations at each step.</p>
              </div>
            </div>
          ),
          code: `// Integrates: CupoValidator, FactoringCalculator, custom selection UI`,
        },
      ]}
    />
  );
}
