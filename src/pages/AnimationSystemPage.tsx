import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../components/ui/card";
import { Badge } from "../components/ui/badge";
import { Button } from "../components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../components/ui/tabs";
import { 
  Box, 
  Code, 
  Palette,
  Loader2,
  CheckCircle,
  AlertCircle,
  Zap
} from "lucide-react";
import { useState } from "react";
import { PageTransition, FadeInView, StaggerContainer, StaggerItem } from "../components/ui/page-transition";
import { InlineSpinner, ButtonLoading } from "../components/ui/loading-overlay";
import { 
  SkeletonTable, 
  SkeletonCard, 
  SkeletonCardGrid,
  SkeletonForm,
  SkeletonList,
  SkeletonKpiCard,
  SkeletonKpiCardGroup,
  SkeletonDashboard
} from "../components/ui/skeleton-variants";
import { useLoadingState, useAsyncOperation, useGlobalLoading } from "../hooks/useLoadingState";
import { useScrollToTop } from "../hooks/usePageTransition";
import { CodeBlock } from "../components/ui/code-block";

/**
 * AnimationSystemContent
 * Contenido reutilizable del sistema de animaciones (sin header ni PageTransition wrapper).
 * Usado tanto por AnimationSystemPage como por la vista consolidada en AnimationsPage.
 */
export function AnimationSystemContent() {
  const [showSkeletons, setShowSkeletons] = useState<string | null>(null);
  const { isLoading: buttonLoading, startLoading, stopLoading } = useLoadingState({
    delay: 0,
    minDuration: 1500,
  });
  const { execute, isLoading: asyncLoading, data, error } = useAsyncOperation();
  const { startGlobalLoading, stopGlobalLoading, isGlobalLoading } = useGlobalLoading();

  const handleButtonLoading = () => {
    startLoading();
    setTimeout(stopLoading, 2000);
  };

  const handleAsyncOperation = () => {
    execute(async () => {
      await new Promise(resolve => setTimeout(resolve, 2000));
      return { message: "¡Datos cargados exitosamente!" };
    });
  };

  const handleGlobalLoading = () => {
    startGlobalLoading("Procesando operación...");
    setTimeout(stopGlobalLoading, 2000);
  };

  const toggleSkeleton = (type: string) => {
    setShowSkeletons(showSkeletons === type ? null : type);
    if (showSkeletons !== type) {
      setTimeout(() => setShowSkeletons(null), 3000);
    }
  };

  return (
    <Tabs defaultValue="components" className="w-full">
      <TabsList className="grid w-full grid-cols-4 max-w-lg">
        <TabsTrigger value="components">Components</TabsTrigger>
        <TabsTrigger value="hooks">Hooks</TabsTrigger>
        <TabsTrigger value="skeletons">Skeletons</TabsTrigger>
        <TabsTrigger value="css">CSS Utilities</TabsTrigger>
      </TabsList>

      {/* COMPONENTS TAB */}
      <TabsContent value="components" className="space-y-6">
        {/* PageTransition */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Box className="h-5 w-5 text-primary" />
              PageTransition
            </CardTitle>
            <CardDescription>
              Wrapper para páginas con animación automática de entrada/salida
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-4">
              <div>
                <h4 className="text-sm font-semibold mb-2">Variant: "page" (default)</h4>
                <PageTransition variant="page" className="p-4 border rounded-lg bg-primary/5">
                  <p className="text-sm">Fade + slight slide (mejor para páginas completas)</p>
                </PageTransition>
              </div>

              <div>
                <h4 className="text-sm font-semibold mb-2">Variant: "fade"</h4>
                <PageTransition variant="fade" className="p-4 border rounded-lg bg-chart-2/10">
                  <p className="text-sm">Solo fade in/out</p>
                </PageTransition>
              </div>

              <div>
                <h4 className="text-sm font-semibold mb-2">Variant: "scale"</h4>
                <PageTransition variant="scale" className="p-4 border rounded-lg bg-chart-3/10">
                  <p className="text-sm">Fade + scale (mejor para modals)</p>
                </PageTransition>
              </div>
            </div>

            <CodeBlock
              language="tsx"
              code={`import { PageTransition } from '@/components/ui/page-transition';

function MyPage() {
  return (
    <PageTransition variant="page">
      <h1>Mi Página</h1>
      <p>Contenido con animación automática</p>
    </PageTransition>
  );
}`}
            />
          </CardContent>
        </Card>

        {/* FadeInView */}
        <Card>
          <CardHeader>
            <CardTitle>FadeInView</CardTitle>
            <CardDescription>
              Componente que anima cuando entra al viewport (scroll)
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-4">
              <FadeInView>
                <Card className="p-4 bg-primary/5">
                  <p className="text-sm">Aparece con fade al hacer scroll</p>
                </Card>
              </FadeInView>

              <FadeInView delay={0.2}>
                <Card className="p-4 bg-chart-2/10">
                  <p className="text-sm">Con delay de 0.2s</p>
                </Card>
              </FadeInView>
            </div>

            <CodeBlock
              language="tsx"
              code={`import { FadeInView } from '@/components/ui/page-transition';

<FadeInView delay={0.2}>
  <Card>Aparece cuando haces scroll</Card>
</FadeInView>`}
            />
          </CardContent>
        </Card>

        {/* StaggerContainer */}
        <Card>
          <CardHeader>
            <CardTitle>StaggerContainer + StaggerItem</CardTitle>
            <CardDescription>
              Para animar listas con efecto stagger (secuencial)
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <StaggerContainer className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
                <StaggerItem key={i}>
                  <Card className="p-4 text-center bg-muted">
                    <p className="font-semibold">Item {i}</p>
                  </Card>
                </StaggerItem>
              ))}
            </StaggerContainer>

            <CodeBlock
              language="tsx"
              code={`import { StaggerContainer, StaggerItem } from '@/components/ui/page-transition';

<StaggerContainer>
  {items.map(item => (
    <StaggerItem key={item.id}>
      <Card>{item.name}</Card>
    </StaggerItem>
  ))}
</StaggerContainer>`}
            />
          </CardContent>
        </Card>

        {/* InlineSpinner */}
        <Card>
          <CardHeader>
            <CardTitle>InlineSpinner</CardTitle>
            <CardDescription>Spinner pequeño para usar inline</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2">
                <InlineSpinner size="sm" />
                <span className="text-sm">Small</span>
              </div>
              <div className="flex items-center gap-2">
                <InlineSpinner size="md" />
                <span className="text-sm">Medium</span>
              </div>
              <div className="flex items-center gap-2">
                <InlineSpinner size="lg" />
                <span className="text-sm">Large</span>
              </div>
            </div>

            <CodeBlock
              language="tsx"
              code={`import { InlineSpinner } from '@/components/ui/loading-overlay';

<InlineSpinner size="md" />`}
            />
          </CardContent>
        </Card>

        {/* ButtonLoading */}
        <Card>
          <CardHeader>
            <CardTitle>ButtonLoading</CardTitle>
            <CardDescription>Loading state para botones</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <Button onClick={handleButtonLoading} disabled={buttonLoading}>
              <ButtonLoading isLoading={buttonLoading} loadingText="Enviando...">
                Enviar Formulario
              </ButtonLoading>
            </Button>

            <CodeBlock
              language="tsx"
              code={`import { ButtonLoading } from '@/components/ui/loading-overlay';

<Button onClick={handleSubmit} disabled={isLoading}>
  <ButtonLoading isLoading={isLoading} loadingText="Enviando...">
    Enviar
  </ButtonLoading>
</Button>`}
            />
          </CardContent>
        </Card>
      </TabsContent>

      {/* HOOKS TAB */}
      <TabsContent value="hooks" className="space-y-6">
        {/* useLoadingState */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Code className="h-5 w-5 text-primary" />
              useLoadingState
            </CardTitle>
            <CardDescription>
              Hook para loading states locales con delays y duración mínima
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="p-4 border rounded-lg bg-muted/20">
              <p className="text-sm mb-4">
                <strong>Características:</strong>
              </p>
              <ul className="text-sm space-y-1 text-muted-foreground">
                <li>• <strong>delay</strong>: No mostrar si termina antes de Xms (evita flashes)</li>
                <li>• <strong>minDuration</strong>: Mostrar mínimo Xms (evita parpadeos)</li>
                <li>• <strong>onStart/onEnd</strong>: Callbacks opcionales</li>
              </ul>
            </div>

            <div className="space-y-2">
              <Button onClick={handleButtonLoading} disabled={buttonLoading}>
                {buttonLoading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
                Test Loading (1.5s mínimo)
              </Button>
              <p className="text-xs text-muted-foreground">
                Con delay de 300ms y duración mínima de 1500ms
              </p>
            </div>

            <CodeBlock
              language="tsx"
              code={`import { useLoadingState } from '@/hooks/useLoadingState';

function MyComponent() {
  const { isLoading, showLoading, startLoading, stopLoading } = useLoadingState({
    delay: 300,        // No mostrar si termina antes de 300ms
    minDuration: 500,  // Mostrar mínimo 500ms
  });

  const handleSubmit = async () => {
    startLoading();
    try {
      await api.submit();
    } finally {
      stopLoading();
    }
  };
}`}
            />
          </CardContent>
        </Card>

        {/* useAsyncOperation */}
        <Card>
          <CardHeader>
            <CardTitle>useAsyncOperation</CardTitle>
            <CardDescription>
              Loading automático para operaciones async con manejo de errores
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-4">
              <Button onClick={handleAsyncOperation} disabled={asyncLoading}>
                {asyncLoading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
                Cargar Datos
              </Button>

              {data && (
                <Card className="p-4 bg-green-500/10 border-green-500/20">
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-600" />
                    <p className="text-sm font-medium">{data.message}</p>
                  </div>
                </Card>
              )}

              {error && (
                <Card className="p-4 bg-destructive/10 border-destructive/20">
                  <div className="flex items-center gap-2">
                    <AlertCircle className="h-4 w-4 text-destructive" />
                    <p className="text-sm font-medium">{error.message}</p>
                  </div>
                </Card>
              )}
            </div>

            <CodeBlock
              language="tsx"
              code={`import { useAsyncOperation } from '@/hooks/useLoadingState';

function DataFetcher() {
  const { execute, isLoading, data, error } = useAsyncOperation();

  const fetchData = () => {
    execute(async () => {
      const response = await fetch('/api/data');
      return response.json();
    });
  };

  return (
    <>
      <Button onClick={fetchData} disabled={isLoading}>
        Cargar Datos
      </Button>
      {data && <div>{JSON.stringify(data)}</div>}
      {error && <p>Error: {error.message}</p>}
    </>
  );
}`}
            />
          </CardContent>
        </Card>

        {/* useGlobalLoading */}
        <Card>
          <CardHeader>
            <CardTitle>useGlobalLoading</CardTitle>
            <CardDescription>
              Loading global que cubre toda la pantalla (LoadingOverlay)
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <Button onClick={handleGlobalLoading} disabled={isGlobalLoading}>
              {isGlobalLoading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
              Mostrar Loading Global
            </Button>

            <CodeBlock
              language="tsx"
              code={`import { useGlobalLoading } from '@/hooks/useLoadingState';

function MyComponent() {
  const { startGlobalLoading, stopGlobalLoading } = useGlobalLoading();

  const handleBigOperation = async () => {
    startGlobalLoading("Procesando datos...");
    try {
      await bigOperation();
    } finally {
      stopGlobalLoading();
    }
  };
}`}
            />
          </CardContent>
        </Card>

        {/* useScrollToTop */}
        <Card>
          <CardHeader>
            <CardTitle>useScrollToTop</CardTitle>
            <CardDescription>
              Scroll automático al inicio al montar el componente
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-sm text-muted-foreground">
              Esta página usa <code className="px-1.5 py-0.5 rounded bg-muted text-xs">useScrollToTop()</code> automáticamente.
              Cada vez que la cargas, hace scroll al inicio.
            </p>

            <CodeBlock
              language="tsx"
              code={`import { useScrollToTop } from '@/hooks/usePageTransition';

function MyPage() {
  useScrollToTop(); // Scroll to top on mount
  
  return <div>Content</div>;
}`}
            />
          </CardContent>
        </Card>
      </TabsContent>

      {/* SKELETONS TAB */}
      <TabsContent value="skeletons" className="space-y-6">
        {/* SkeletonTable */}
        <Card>
          <CardHeader>
            <CardTitle>SkeletonTable</CardTitle>
            <CardDescription>Skeleton para tablas de datos</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <Button 
              variant="outline" 
              size="sm"
              onClick={() => toggleSkeleton('table')}
            >
              {showSkeletons === 'table' ? 'Ocultar' : 'Mostrar'} Preview
            </Button>

            {showSkeletons === 'table' && (
              <div className="fade-in">
                <SkeletonTable rows={5} columns={4} showHeader />
              </div>
            )}

            <CodeBlock
              language="tsx"
              code={`import { SkeletonTable } from '@/components/ui/skeleton-variants';

<SkeletonTable rows={5} columns={4} showHeader />`}
            />
          </CardContent>
        </Card>

        {/* SkeletonCard */}
        <Card>
          <CardHeader>
            <CardTitle>SkeletonCard & SkeletonCardGrid</CardTitle>
            <CardDescription>Skeleton para cards individuales o grids</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <Button 
              variant="outline" 
              size="sm"
              onClick={() => toggleSkeleton('cards')}
            >
              {showSkeletons === 'cards' ? 'Ocultar' : 'Mostrar'} Preview
            </Button>

            {showSkeletons === 'cards' && (
              <div className="fade-in">
                <SkeletonCardGrid count={6} columns={3} />
              </div>
            )}

            <CodeBlock
              language="tsx"
              code={`import { SkeletonCard, SkeletonCardGrid } from '@/components/ui/skeleton-variants';

// Single card
<SkeletonCard hasImage lines={3} />

// Grid of cards
<SkeletonCardGrid count={6} columns={3} />`}
            />
          </CardContent>
        </Card>

        {/* SkeletonForm */}
        <Card>
          <CardHeader>
            <CardTitle>SkeletonForm</CardTitle>
            <CardDescription>Skeleton para formularios</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <Button 
              variant="outline" 
              size="sm"
              onClick={() => toggleSkeleton('form')}
            >
              {showSkeletons === 'form' ? 'Ocultar' : 'Mostrar'} Preview
            </Button>

            {showSkeletons === 'form' && (
              <div className="fade-in">
                <SkeletonForm fields={4} hasSubmitButton />
              </div>
            )}

            <CodeBlock
              language="tsx"
              code={`import { SkeletonForm } from '@/components/ui/skeleton-variants';

<SkeletonForm fields={4} hasSubmitButton />`}
            />
          </CardContent>
        </Card>

        {/* SkeletonList */}
        <Card>
          <CardHeader>
            <CardTitle>SkeletonList</CardTitle>
            <CardDescription>Skeleton para listas</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <Button 
              variant="outline" 
              size="sm"
              onClick={() => toggleSkeleton('list')}
            >
              {showSkeletons === 'list' ? 'Ocultar' : 'Mostrar'} Preview
            </Button>

            {showSkeletons === 'list' && (
              <div className="fade-in">
                <SkeletonList items={5} variant="detailed" />
              </div>
            )}

            <CodeBlock
              language="tsx"
              code={`import { SkeletonList } from '@/components/ui/skeleton-variants';

<SkeletonList items={5} variant="detailed" />`}
            />
          </CardContent>
        </Card>

        {/* SkeletonKpiCard */}
        <Card>
          <CardHeader>
            <CardTitle>SkeletonKpiCard (Factoring)</CardTitle>
            <CardDescription>Skeleton para KPI cards específicos del sistema</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <Button 
              variant="outline" 
              size="sm"
              onClick={() => toggleSkeleton('kpi')}
            >
              {showSkeletons === 'kpi' ? 'Ocultar' : 'Mostrar'} Preview
            </Button>

            {showSkeletons === 'kpi' && (
              <div className="fade-in">
                <SkeletonKpiCardGroup count={4} />
              </div>
            )}

            <CodeBlock
              language="tsx"
              code={`import { SkeletonKpiCard, SkeletonKpiCardGroup } from '@/components/ui/skeleton-variants';

// Single KPI card
<SkeletonKpiCard />

// Group of KPI cards
<SkeletonKpiCardGroup count={4} />`}
            />
          </CardContent>
        </Card>

        {/* SkeletonDashboard */}
        <Card>
          <CardHeader>
            <CardTitle>SkeletonDashboard</CardTitle>
            <CardDescription>Skeleton completo para dashboards</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <Button 
              variant="outline" 
              size="sm"
              onClick={() => toggleSkeleton('dashboard')}
            >
              {showSkeletons === 'dashboard' ? 'Ocultar' : 'Mostrar'} Preview
            </Button>

            {showSkeletons === 'dashboard' && (
              <div className="fade-in">
                <SkeletonDashboard />
              </div>
            )}

            <CodeBlock
              language="tsx"
              code={`import { SkeletonDashboard } from '@/components/ui/skeleton-variants';

<SkeletonDashboard />`}
            />
          </CardContent>
        </Card>
      </TabsContent>

      {/* CSS UTILITIES TAB */}
      <TabsContent value="css" className="space-y-6">
        {/* Hover Effects */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Palette className="h-5 w-5 text-primary" />
              Hover Effects
            </CardTitle>
            <CardDescription>
              Clases CSS para efectos hover consistentes
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <Card className="hover-lift cursor-pointer p-6 text-center">
                <p className="text-sm font-medium">hover-lift</p>
                <p className="text-xs text-muted-foreground mt-1">Eleva + sombra</p>
              </Card>

              <Card className="hover-scale cursor-pointer p-6 text-center">
                <p className="text-sm font-medium">hover-scale</p>
                <p className="text-xs text-muted-foreground mt-1">Scale 1.02</p>
              </Card>

              <Card className="hover-glow cursor-pointer p-6 text-center">
                <p className="text-sm font-medium">hover-glow</p>
                <p className="text-xs text-muted-foreground mt-1">Ring around</p>
              </Card>

              <Card className="hover-brightness cursor-pointer p-6 text-center">
                <p className="text-sm font-medium">hover-brightness</p>
                <p className="text-xs text-muted-foreground mt-1">Brightness 1.1</p>
              </Card>
            </div>

            <CodeBlock
              language="tsx"
              code={`// Aplicar directamente como className
<Card className="hover-lift">...</Card>
<Card className="hover-scale">...</Card>
<Button className="hover-glow">...</Button>
<img className="hover-brightness" />`}
            />
          </CardContent>
        </Card>

        {/* Focus States */}
        <Card>
          <CardHeader>
            <CardTitle>Focus States</CardTitle>
            <CardDescription>Clases para focus visible (accesibilidad)</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-4">
              <div>
                <p className="text-sm font-medium mb-2">focus-ring (outline)</p>
                <input 
                  type="text" 
                  placeholder="Tab para enfocar"
                  className="focus-ring px-4 py-2 border rounded-lg w-full"
                />
              </div>

              <div>
                <p className="text-sm font-medium mb-2">focus-ring-inset</p>
                <button className="focus-ring-inset px-4 py-2 bg-primary text-primary-foreground rounded-lg">
                  Botón con focus inset
                </button>
              </div>
            </div>

            <CodeBlock
              language="tsx"
              code={`<input className="focus-ring" />
<button className="focus-ring-inset">...</button>`}
            />
          </CardContent>
        </Card>

        {/* Animation Classes */}
        <Card>
          <CardHeader>
            <CardTitle>Animation Classes</CardTitle>
            <CardDescription>Clases CSS para animaciones simples</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              <Card className="fade-in p-4 text-center bg-primary/5">
                <p className="text-sm font-medium">fade-in</p>
              </Card>

              <Card className="slide-in-right p-4 text-center bg-chart-2/10">
                <p className="text-sm font-medium">slide-in-right</p>
              </Card>

              <Card className="zoom-in p-4 text-center bg-chart-3/10">
                <p className="text-sm font-medium">zoom-in</p>
              </Card>
            </div>

            <CodeBlock
              language="tsx"
              code={`<div className="fade-in">...</div>
<div className="slide-in-right">...</div>
<div className="zoom-in">...</div>`}
            />
          </CardContent>
        </Card>
      </TabsContent>
    </Tabs>
  );
}

/**
 * AnimationSystemPage
 * Documentación completa del sistema de animaciones:
 * - Components (PageTransition, LoadingOverlay, Skeleton variants)
 * - Hooks (useLoadingState, usePageTransition)
 * - CSS Utilities (hover effects, transitions)
 */
export function AnimationSystemPage() {
  useScrollToTop();

  return (
    <PageTransition variant="page">
      <div className="space-y-8 w-full pb-16">
        {/* Header */}
        <div>
          <div className="flex items-center gap-3 mb-3">
            <Zap className="h-8 w-8 text-primary" />
            <h1 className="mb-0">Animation System</h1>
            <Badge variant="outline" className="gap-1">
              <Code className="h-3 w-3" />
              Global System
            </Badge>
          </div>
          <p className="text-lg text-muted-foreground max-w-3xl">
            Sistema global de animaciones, transiciones, loading states y skeleton loaders.
            Arquitectura en capas con <strong>Providers</strong>, <strong>Hooks</strong> y <strong>Components</strong> reutilizables.
          </p>
        </div>

        <AnimationSystemContent />
      </div>
    </PageTransition>
  );
}