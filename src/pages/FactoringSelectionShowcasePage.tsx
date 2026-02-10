import { Card, CardContent, CardHeader, CardTitle } from "../components/ui/card";
import { Badge } from "../components/ui/badge";
import { Separator } from "../components/ui/separator";
import { Alert, AlertDescription, AlertTitle } from "../components/ui/alert";
import { AlertCircle, Sparkles, CheckCircle2, Info, BookOpen, Layers } from "lucide-react";
import { FactoringSelectionPage } from "../components/patterns/factoring/FactoringSelectionPage";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../components/ui/accordion";

export function FactoringSelectionShowcasePage() {
  return (
    <div className="space-y-6 pb-8">
      {/* Header Compacto */}
      <div className="flex items-center justify-between">
        <div>
          <div className="flex items-center gap-3 mb-1">
            <h1 className="text-3xl font-semibold">Factoring Selection</h1>
            <Badge variant="default" className="bg-primary text-primary-foreground hover:bg-primary/90">
              Production Ready
            </Badge>
          </div>
          <p className="text-muted-foreground text-sm max-w-2xl">
            Flujo completo de selección de facturas con validación de cupos, cálculo de adelantos en tiempo real y KPIs interactivos.
          </p>
        </div>
      </div>

      <Separator />

      {/* DEMO PRINCIPAL - Primer lugar */}
      <div className="rounded-xl border bg-background shadow-sm overflow-hidden">
        {/* Browser header removed */}
        <div className="p-6">
            <FactoringSelectionPage />
        </div>
      </div>

      {/* Documentación Técnica - Colapsada */}
      <div className="mt-8 pt-4 border-t">
        <Accordion type="single" collapsible className="w-full border rounded-lg bg-card">
          <AccordionItem value="technical-docs" className="border-b-0">
            <AccordionTrigger className="px-6 py-4 hover:no-underline hover:bg-muted/50 transition-colors">
              <div className="flex items-center gap-3 text-muted-foreground group-hover:text-foreground transition-colors">
                <div className="p-2 bg-primary/10 rounded-md text-primary">
                    <BookOpen className="h-4 w-4" />
                </div>
                <div className="text-left">
                    <div className="font-semibold text-foreground">Documentación Técnica y Detalles de Implementación</div>
                    <div className="text-xs font-normal opacity-80">
                        Click para ver características, optimizaciones de rendimiento y guía de integración
                    </div>
                </div>
              </div>
            </AccordionTrigger>
            <AccordionContent className="px-6 pb-6 pt-2">
              <div className="space-y-8 mt-4">
                
                {/* Features Overview */}
                <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-4">
                        <h3 className="font-semibold text-lg flex items-center gap-2">
                            <CheckCircle2 className="h-5 w-5 text-primary" />
                            Características Clave
                        </h3>
                        <ul className="space-y-2 text-sm text-muted-foreground">
                            <li className="flex gap-2">
                                <span className="text-primary">•</span>
                                <span><strong>KPIs Interactivos:</strong> Tabs filtrables para navegar por estados de facturas.</span>
                            </li>
                            <li className="flex gap-2">
                                <span className="text-primary">•</span>
                                <span><strong>Smart Selection:</strong> Algoritmo que maximiza el uso del cupo priorizando facturas grandes.</span>
                            </li>
                            <li className="flex gap-2">
                                <span className="text-primary">•</span>
                                <span><strong>Validación Real-time:</strong> Bloqueo visual inmediato si se excede el cupo disponible.</span>
                            </li>
                            <li className="flex gap-2">
                                <span className="text-primary">•</span>
                                <span><strong>Master-Detail:</strong> Acordeones por pagador para manejar grandes volúmenes de datos.</span>
                            </li>
                        </ul>
                    </div>

                    <div className="space-y-4">
                        <h3 className="font-semibold text-lg flex items-center gap-2">
                            <Sparkles className="h-5 w-5 text-primary" />
                            Optimizaciones de Rendimiento
                        </h3>
                        <ul className="space-y-2 text-sm text-muted-foreground">
                            <li className="flex gap-2">
                                <span className="text-primary">•</span>
                                <span><strong>Virtualización:</strong> Listas optimizadas para manejar 500+ facturas sin lag.</span>
                            </li>
                            <li className="flex gap-2">
                                <span className="text-primary">•</span>
                                <span><strong>Cálculos Memorizados:</strong> Uso intensivo de <code>useMemo</code> para totales globales.</span>
                            </li>
                            <li className="flex gap-2">
                                <span className="text-primary">•</span>
                                <span><strong>Filtros Locales:</strong> Búsqueda y ordenamiento instantáneo en el cliente.</span>
                            </li>
                        </ul>
                    </div>
                </div>

                <Separator />

                {/* Technical Implementation */}
                <div className="grid md:grid-cols-2 gap-6">
                    <Card>
                        <CardHeader>
                        <CardTitle className="text-base">Lógica de Negocio</CardTitle>
                        </CardHeader>
                        <CardContent className="space-y-4 text-sm">
                            <div>
                                <strong className="block mb-1">Cálculo de Adelanto Neto:</strong>
                                <code className="bg-muted px-2 py-1 rounded block w-full text-xs">
                                    Neto = Σ(Monto) - Σ(Monto * Tasa%)
                                </code>
                                <p className="text-muted-foreground text-xs mt-1">Se aplica tasa individual por pagador.</p>
                            </div>
                            <div>
                                <strong className="block mb-1">Validación de Cupo:</strong>
                                <p className="text-muted-foreground">
                                    Se impide la selección si <code>(Seleccionado + Nuevo) &gt; Disponible</code>.
                                    Se muestra alerta visual y barra de progreso roja.
                                </p>
                            </div>
                        </CardContent>
                    </Card>

                    <Card>
                        <CardHeader>
                        <CardTitle className="text-base">Guía de Integración</CardTitle>
                        </CardHeader>
                        <CardContent className="space-y-4">
                            <div className="bg-slate-950 text-slate-50 p-3 rounded-md overflow-x-auto">
                                <pre className="text-xs">
                                    <code>{`import { FactoringSelectionPage } from 
  "@/components/patterns/factoring/FactoringSelectionPage";

// Renderizar como página completa
return <FactoringSelectionPage />;`}</code>
                                </pre>
                            </div>
                            <Alert>
                                <Info className="h-4 w-4" />
                                <AlertDescription className="text-xs">
                                    El componente gestiona su propio estado interno. Para producción, conectar con React Query o Context para la persistencia de datos.
                                </AlertDescription>
                            </Alert>
                        </CardContent>
                    </Card>
                </div>
              </div>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </div>
  );
}