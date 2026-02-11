import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../components/ui/card";
import { Badge } from "../components/ui/badge";
import { Separator } from "../components/ui/separator";
import { OperationsList } from "../components/factoring/OperationsList";
import { FileText, Info, CheckCircle } from "lucide-react";
import { Alert, AlertDescription } from "../components/ui/alert";
import { PageTransition } from "../components/ui/page-transition";
import { useScrollToTop } from "../hooks/usePageTransition";

export function OperationsListPage() {
  useScrollToTop();

  return (
    <PageTransition variant="page">
      <div className="space-y-8">
        {/* Header */}
        <div>
          <div className="flex items-center gap-3 mb-2">
            <h2 className="text-2xl font-medium">Operations List</h2>
            <Badge variant="default" className="bg-blue-500 hover:bg-blue-600">
              <FileText className="h-3 w-3 mr-1" />
              Business Pattern
            </Badge>
          </div>
          <p className="text-muted-foreground">
            Tabla completa de operaciones de factoring con filtros, búsqueda, paginación y acciones por fila.
          </p>
        </div>

        <Separator />

        {/* Información del Pattern */}
        <Alert className="border-primary/50 bg-primary/5">
          <Info className="h-4 w-4 text-primary" />
          <AlertDescription className="text-sm">
            <strong className="text-primary">Data Table Pattern</strong> - Tabla avanzada con filtros en tiempo real, 
            búsqueda, paginación y dropdown de acciones. Estados visuales con badges de color.
          </AlertDescription>
        </Alert>

        {/* Componentes utilizados */}
        <Card className="elevation-1 hover-lift">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <CheckCircle className="h-5 w-5 text-primary" />
              Componentes Integrados
            </CardTitle>
            <CardDescription>
              Este componente utiliza múltiples elementos de shadcn/ui
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid gap-4 md:grid-cols-3">
              <div className="p-4 rounded-lg border bg-card">
                <h4 className="font-semibold mb-2">Core Components</h4>
                <ul className="text-sm space-y-1 text-muted-foreground">
                  <li>• Card (container principal)</li>
                  <li>• Input (búsqueda)</li>
                  <li>• Select (filtro de estado)</li>
                  <li>• Button (acciones)</li>
                </ul>
              </div>

              <div className="p-4 rounded-lg border bg-card">
                <h4 className="font-semibold mb-2">Display & Feedback</h4>
                <ul className="text-sm space-y-1 text-muted-foreground">
                  <li>• Badge (estados, plazo)</li>
                  <li>• DropdownMenu (acciones por fila)</li>
                  <li>• Table (nativa HTML + Tailwind)</li>
                  <li>• Alert (empty state)</li>
                </ul>
              </div>

              <div className="p-4 rounded-lg border bg-card">
                <h4 className="font-semibold mb-2">Features</h4>
                <ul className="text-sm space-y-1 text-muted-foreground">
                  <li>• Búsqueda en tiempo real</li>
                  <li>• Filtros por estado</li>
                  <li>• Paginación completa</li>
                  <li>• Acciones condicionales</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Preview del componente */}
        <Card className="elevation-2">
          <CardHeader>
            <CardTitle>Live Preview</CardTitle>
            <CardDescription>
              Tabla interactiva con 8 operaciones mock y todas las funcionalidades implementadas
            </CardDescription>
          </CardHeader>
          <CardContent>
            <OperationsList />
          </CardContent>
        </Card>

        {/* Features detalladas */}
        <div className="grid gap-6 md:grid-cols-2">
          <Card className="elevation-1">
            <CardHeader>
              <CardTitle>Funcionalidades Principales</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="flex items-start gap-3">
                <div className="h-6 w-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <span className="text-primary text-xs">1</span>
                </div>
                <div>
                  <p className="font-medium">Búsqueda en Tiempo Real</p>
                  <p className="text-sm text-muted-foreground">
                    Filtra por ID de operación, nombre de cliente o RUT mientras escribes.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="h-6 w-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <span className="text-primary text-xs">2</span>
                </div>
                <div>
                  <p className="font-medium">Filtros por Estado</p>
                  <p className="text-sm text-muted-foreground">
                    Select dropdown con 6 estados: Creada, En Proceso, Negociada, Endosada, Liquidada, Rechazada.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="h-6 w-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <span className="text-primary text-xs">3</span>
                </div>
                <div>
                  <p className="font-medium">Paginación Completa</p>
                  <p className="text-sm text-muted-foreground">
                    5 items por página con botones de navegación y contador de resultados.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="h-6 w-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <span className="text-primary text-xs">4</span>
                </div>
                <div>
                  <p className="font-medium">Acciones Condicionales</p>
                  <p className="text-sm text-muted-foreground">
                    Dropdown menu con acciones específicas según el estado de la operación.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="h-6 w-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <span className="text-primary text-xs">5</span>
                </div>
                <div>
                  <p className="font-medium">Stats Cards Dinámicas</p>
                  <p className="text-sm text-muted-foreground">
                    4 cards con estadísticas calculadas automáticamente desde los datos.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="elevation-1">
            <CardHeader>
              <CardTitle>Estados y Acciones</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="p-4 rounded-lg border bg-muted/20">
                <h4 className="font-semibold mb-2 text-blue-600 dark:text-blue-400 flex items-center gap-2">
                  <FileText className="h-4 w-4" />
                  Creada
                </h4>
                <p className="text-sm text-muted-foreground mb-2">
                  Operación registrada en el sistema. 
                </p>
                <p className="text-xs text-muted-foreground">
                  Acciones: Ver, Editar, Descargar PDF
                </p>
              </div>

              <div className="p-4 rounded-lg border bg-muted/20">
                <h4 className="font-semibold mb-2 text-yellow-600 dark:text-yellow-400 flex items-center gap-2">
                  <CheckCircle className="h-4 w-4" />
                  En Proceso
                </h4>
                <p className="text-sm text-muted-foreground mb-2">
                  En revisión y análisis de riesgo.
                </p>
                <p className="text-xs text-muted-foreground">
                  Acciones: Ver, Editar, Aprobar, Rechazar, Descargar PDF
                </p>
              </div>

              <div className="p-4 rounded-lg border bg-muted/20">
                <h4 className="font-semibold mb-2 text-purple-600 dark:text-purple-400 flex items-center gap-2">
                  <CheckCircle className="h-4 w-4" />
                  Negociada
                </h4>
                <p className="text-sm text-muted-foreground mb-2">
                  Términos acordados, pendiente de endoso.
                </p>
                <p className="text-xs text-muted-foreground">
                  Acciones: Ver, Editar, Endosar, Descargar PDF
                </p>
              </div>

              <div className="p-4 rounded-lg border bg-muted/20">
                <h4 className="font-semibold mb-2 text-green-600 dark:text-green-400 flex items-center gap-2">
                  <CheckCircle className="h-4 w-4" />
                  Endosada / Liquidada
                </h4>
                <p className="text-sm text-muted-foreground mb-2">
                  Completada y pagada.
                </p>
                <p className="text-xs text-muted-foreground">
                  Acciones: Ver, Descargar PDF (solo consulta)
                </p>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Características técnicas */}
        <Card className="elevation-1">
          <CardHeader>
            <CardTitle>Características Técnicas</CardTitle>
            <CardDescription>Implementación y consideraciones</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid gap-6 md:grid-cols-3">
              <div>
                <h4 className="font-semibold mb-3 text-primary">Performance</h4>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>✅ Filtrado en tiempo real (sin delays)</li>
                  <li>✅ Búsqueda optimizada (case-insensitive)</li>
                  <li>✅ Paginación con itemsPerPage configurable</li>
                  <li>✅ Re-render mínimo con React hooks</li>
                </ul>
              </div>

              <div>
                <h4 className="font-semibold mb-3 text-primary">UX/UI</h4>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>✅ Estados visuales con iconos y colores</li>
                  <li>✅ Hover effects en filas</li>
                  <li>✅ Empty state cuando no hay resultados</li>
                  <li>✅ Responsive (scroll horizontal en mobile)</li>
                </ul>
              </div>

              <div>
                <h4 className="font-semibold mb-3 text-primary">Extensibilidad</h4>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>✅ Mock data fácil de reemplazar con API</li>
                  <li>✅ Handlers de acciones configurables</li>
                  <li>✅ TypeScript types para Operation</li>
                  <li>✅ Props para personalización futura</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Casos de uso */}
        <Card className="elevation-1">
          <CardHeader>
            <CardTitle>Casos de Uso</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid gap-4 md:grid-cols-2">
              <div className="p-4 rounded-lg border bg-muted/20">
                <h4 className="font-semibold mb-2 text-green-600 dark:text-green-400">
                  Vista de Administrador
                </h4>
                <p className="text-sm text-muted-foreground">
                  Gestión completa de operaciones: aprobar, rechazar, endosar. Filtros para 
                  priorizar operaciones "En Proceso" que requieren acción inmediata.
                </p>
              </div>

              <div className="p-4 rounded-lg border bg-muted/20">
                <h4 className="font-semibold mb-2 text-blue-600 dark:text-blue-400">
                  Vista de Ejecutivo
                </h4>
                <p className="text-sm text-muted-foreground">
                  Seguimiento de operaciones asignadas. Búsqueda por cliente para atención 
                  personalizada. Descarga de PDFs para envío al cliente.
                </p>
              </div>

              <div className="p-4 rounded-lg border bg-muted/20">
                <h4 className="font-semibold mb-2 text-purple-600 dark:text-purple-400">
                  Vista de Cliente
                </h4>
                <p className="text-sm text-muted-foreground">
                  Consulta de operaciones propias (filtrado por cliente). Ver estado en 
                  tiempo real y descargar documentos. Solo acciones de lectura.
                </p>
              </div>

              <div className="p-4 rounded-lg border bg-muted/20">
                <h4 className="font-semibold mb-2 text-orange-600 dark:text-orange-400">
                  Reportes y Auditoría
                </h4>
                <p className="text-sm text-muted-foreground">
                  Export completo de datos filtrados. Búsqueda por ID para auditoría. 
                  Stats cards para métricas rápidas de gestión.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </PageTransition>
  );
}