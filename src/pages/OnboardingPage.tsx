import { OnboardingWizard } from "../components/patterns/OnboardingWizard";

export function OnboardingPage() {
  return (
    <div className="p-6 space-y-6">
      <div className="space-y-2 text-center max-w-2xl mx-auto">
        <h1 className="text-3xl font-semibold">Registro de Empresa</h1>
        <p className="text-muted-foreground">
          Completa tu registro en 5 pasos y comienza a obtener liquidez inmediata de tus facturas
        </p>
      </div>

      <OnboardingWizard />
    </div>
  );
}
