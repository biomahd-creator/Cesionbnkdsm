import { ComponentShowcase } from "../components/ui/component-showcase";
import { OnboardingWizard } from "../components/patterns/OnboardingWizard";

export function OnboardingPage() {
  return (
    <ComponentShowcase
      title="Onboarding Wizard"
      description="5-step company registration wizard for the factoring platform. Guides users through company info, legal documents, bank details, representative data, and final confirmation. Includes step validation, progress indicators, and form persistence."
      category="Patterns"
      preview={<OnboardingWizard />}
      code={`import { OnboardingWizard } from "@/components/patterns/OnboardingWizard";

<OnboardingWizard />`}
      props={[
        {
          name: "(pattern)",
          type: "—",
          description: "Self-contained multi-step wizard. Manages its own step state, form data, and validation. No external props required.",
        },
      ]}
    />
  );
}
