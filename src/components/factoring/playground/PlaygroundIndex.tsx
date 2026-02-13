import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../../ui/card";
import { Button } from "../../ui/button";
import { FileText, ArrowLeft } from "lucide-react";
import { useState } from "react";
import { FactoringNewOperationScreen } from "./FactoringNewOperationScreen";

interface PlaygroundIndexProps {
  onBack?: () => void;
}

export function PlaygroundIndex({ onBack }: PlaygroundIndexProps) {
  const [activeScreen, setActiveScreen] = useState<string | null>(null);

  // Si hay una pantalla activa, renderizarla
  // Wrapped in <div> so PlaygroundIndex has its own DOM root (Cause 7 fix)
  if (activeScreen === "new-operation") {
    return (
      <div className="min-h-screen w-full">
        <FactoringNewOperationScreen />
      </div>
    );
  }

  // Vista principal del Playground
  return (
    <div className="min-h-screen bg-muted/10 p-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          {onBack && (
            <Button
              variant="ghost"
              onClick={onBack}
              className="mb-4 text-muted-foreground hover:text-foreground"
            >
              <ArrowLeft className="h-4 w-4 mr-2" />
              Volver
            </Button>
          )}
          <h1 className="text-3xl font-bold text-foreground mb-2">Playground</h1>
          <p className="text-muted-foreground">
            Área de desarrollo y pruebas de nuevas funcionalidades
          </p>
        </div>

        {/* Grid de Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* New Operation Screen Card */}
          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <div className="flex items-center gap-2 mb-2">
                <FileText className="h-5 w-5 text-primary" />
                <CardTitle>New Operation Screen</CardTitle>
              </div>
              <CardDescription>
                Pantalla de creación de nueva operación de factoring
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Button 
                onClick={() => setActiveScreen("new-operation")}
                className="w-full"
              >
                Ver Pantalla
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}