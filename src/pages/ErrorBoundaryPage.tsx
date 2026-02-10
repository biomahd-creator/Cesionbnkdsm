import React, { useState, useCallback } from "react";
import { ComponentShowcase } from "../components/ui/component-showcase";
import { ErrorBoundary } from "../components/ui/error-boundary";
import { Button } from "../components/ui/button";
import { AlertTriangle } from "lucide-react";

const code = `import { ErrorBoundary } from "@/components/ui/error-boundary";

export function ErrorBoundaryDemo() {
  return (
    <ErrorBoundary>
      <MyComponentThatMightError />
    </ErrorBoundary>
  );
}`;

/**
 * Instead of throwing during render (which causes React to log errors
 * even when caught by ErrorBoundary), we simulate an error state
 * without actually throwing. This avoids the error flooding the console.
 */
function ErrorBoundaryDemo() {
  const [hasError, setHasError] = useState(false);

  if (hasError) {
    return (
      <div className="flex min-h-[200px] flex-col items-center justify-center rounded-lg border border-red-200 bg-red-50 p-8 text-center dark:border-red-900 dark:bg-red-900/10">
        <div className="mb-4 rounded-full bg-red-100 p-3 dark:bg-red-900/50">
          <AlertTriangle className="h-10 w-10 text-red-600 dark:text-red-400" />
        </div>
        <h2 className="mb-2 text-xl font-semibold text-red-900 dark:text-red-300">
          Algo salió mal
        </h2>
        <p className="mb-6 max-w-md text-sm text-red-800 dark:text-red-400">
          ¡Boom! Este error fue atrapado por el ErrorBoundary.
        </p>
        <Button
          onClick={() => setHasError(false)}
          className="bg-red-600 hover:bg-red-700 text-white border-none"
        >
          Intentar de nuevo
        </Button>
      </div>
    );
  }

  return (
    <div className="text-center space-y-4">
      <p className="text-muted-foreground">Este componente funciona correctamente.</p>
      <Button variant="destructive" onClick={() => setHasError(true)}>
        Simular Error
      </Button>
    </div>
  );
}

export function ErrorBoundaryPage() {
  return (
    <ComponentShowcase
      title="Error Boundary"
      description="Captura errores de renderizado y muestra una UI de fallback amigable."
      category="Utility"
      preview={
        <div className="w-full p-4 border rounded-lg">
          <ErrorBoundary>
            <ErrorBoundaryDemo />
          </ErrorBoundary>
        </div>
      }
      code={code}
      props={[
        { name: "children", type: "ReactNode", description: "Componentes hijos que serán envueltos por el boundary." },
        { name: "fallback", type: "ReactNode", description: "UI personalizada de error. Si no se provee, usa el fallback por defecto con ícono y botón de reintentar." },
        { name: "onReset", type: "() => void", description: "Callback ejecutado al hacer click en 'Intentar de nuevo'. Útil para limpiar estado." },
      ]}
      examples={[
        {
          title: "Fallback personalizado",
          description: "ErrorBoundary con UI de error customizada.",
          preview: (
            <div className="w-full p-4 border rounded-lg">
              <div className="text-center py-8 space-y-2">
                <p className="text-sm text-muted-foreground">El fallback personalizado reemplaza la UI por defecto del ErrorBoundary.</p>
              </div>
            </div>
          ),
          code: `<ErrorBoundary
  fallback={
    <div className="text-center py-8">
      <h3>Ocurrió un error inesperado</h3>
      <p>Contacta soporte si el problema persiste.</p>
    </div>
  }
  onReset={() => window.location.reload()}
>
  <MyComponent />
</ErrorBoundary>`,
        },
        {
          title: "Con callback onReset",
          description: "Limpia estado externo al reintentar.",
          preview: (
            <div className="w-full p-4 border rounded-lg">
              <div className="text-center py-8 space-y-2">
                <p className="text-sm text-muted-foreground">onReset se ejecuta al presionar "Intentar de nuevo" para limpiar estado corrupto.</p>
              </div>
            </div>
          ),
          code: `const [data, setData] = useState(null);

<ErrorBoundary onReset={() => setData(null)}>
  <DataVisualization data={data} />
</ErrorBoundary>`,
        },
      ]}
    />
  );
}