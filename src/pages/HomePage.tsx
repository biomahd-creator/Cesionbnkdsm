import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../components/ui/card";
import { Badge } from "../components/ui/badge";
import { Progress } from "../components/ui/progress";
import { Separator } from "../components/ui/separator";
import { 
  CheckCircle2, 
  Package, 
  Palette, 
  Layers, 
  Accessibility, 
  Code2,
  Zap,
  Shield,
  Sparkles,
  Users,
  TrendingUp,
  Activity,
  Grid3x3,
  Scale
} from "lucide-react";
import { Logo } from "../components/Logo";

export function HomePage() {
  const stats = [
    { label: "Componentes Totales", value: "125+", icon: Package, color: "text-primary" },
    { label: "DSM Migration", value: "100%", icon: Sparkles, color: "text-green-500" },
    { label: "Componentes Oficiales", value: "48", icon: CheckCircle2, color: "text-success" },
    { label: "Compliance WCAG AA", value: "98%", icon: Accessibility, color: "text-warning" },
  ];

  const features = [
    {
      icon: Palette,
      title: "Design Tokens",
      description: "Sistema de diseño basado en tokens CSS con colores corporativos #00c951 (Verde Lima) y #1C2D3A (Azul Oscuro)",
      badge: "Activo"
    },
    {
      icon: Accessibility,
      title: "WCAG 2.1 AA Compliant",
      description: "98% de cumplimiento con ratios de contraste optimizados para accesibilidad",
      badge: "Verificado"
    },
    {
      icon: Layers,
      title: "Atomic Design",
      description: "Arquitectura jerárquica con Atoms, Molecules, Organisms, Templates y Pages",
      badge: "Implementado"
    },
    {
      icon: Code2,
      title: "shadcn/ui Base",
      description: "Construido sobre componentes oficiales de shadcn/ui con Radix UI primitives",
      badge: "Estable"
    },
    {
      icon: Zap,
      title: "Reactivos y Dinámicos",
      description: "Theme Customizer en tiempo real con soporte para modo claro/oscuro",
      badge: "Live"
    },
    {
      icon: Shield,
      title: "Tipografía Satoshi",
      description: "Sistema tipográfico único con escalas predefinidas y pesos consistentes",
      badge: "Sistema"
    },
  ];

  const techStack = [
    { name: "React 18", version: "18.x" },
    { name: "TypeScript", version: "5.x" },
    { name: "Tailwind CSS", version: "4.0" },
    { name: "shadcn/ui", version: "Latest" },
    { name: "Radix UI", version: "Latest" },
    { name: "Recharts", version: "2.x" },
  ];

  const progress = {
    components: 100, // 48/48 componentes oficiales shadcn/ui
    patterns: 100, // 21/21 patterns completos
    business: 100, // 15/15 business components
    advanced: 100, // 25/25 advanced components
    accessibility: 98, // WCAG compliance
  };

  return (
    <div className="space-y-8 pb-16">
      {/* Hero Section */}
      <div className="relative overflow-hidden rounded-lg bg-gradient-to-br from-primary/10 via-primary/5 to-transparent p-8 md:p-12 elevation-2">
        <div className="relative z-10">
          <div className="flex items-center gap-4 mb-4">
            <Logo size="lg" variant="light" />
            <Badge variant="default" className="text-xs px-3 py-1">
              v1.0.0
            </Badge>
            <Badge className="text-xs px-3 py-1 bg-green-500 hover:bg-green-600 gap-1">
              <Sparkles className="h-3 w-3" />
              DSM 100%
            </Badge>
          </div>
          <h1 className="mb-4">
            Design System Manager
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mb-6 font-light">
            Sistema de diseño completo para aplicaciones de Factoring, construido con React, 
            Tailwind CSS y shadcn/ui. Enfocado en accesibilidad, consistencia y escalabilidad.
          </p>
          <div className="flex flex-wrap gap-3">
            <Badge variant="outline" className="gap-2">
              <Activity className="h-3 w-3" />
              Última actualización: Enero 2026
            </Badge>
            <Badge variant="outline" className="gap-2">
              <Users className="h-3 w-3" />
              Metodología Atomic Design
            </Badge>
            <Badge variant="outline" className="gap-2">
              <TrendingUp className="h-3 w-3" />
              125+ Componentes
            </Badge>
          </div>
        </div>
        
        {/* Background decoration */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl -z-0" />
        <div className="absolute bottom-0 left-0 w-48 h-48 bg-secondary/5 rounded-full blur-3xl -z-0" />
      </div>

      {/* Stats Grid */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {stats.map((stat, index) => (
          <Card key={index} className="elevation-1 hover:elevation-2 transition-shadow">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm">{stat.label}</CardTitle>
              <stat.icon className={`h-4 w-4 ${stat.color}`} />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-semibold">{stat.value}</div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Progress Section */}
      <Card className="elevation-1 col-span-6">
        <CardHeader>
          <div className="flex items-center gap-2">
            <Sparkles className="h-5 w-5 text-primary" />
            <CardTitle>Estado de Implementación</CardTitle>
          </div>
          <CardDescription>
            Progreso actual del desarrollo del Design System
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="space-y-2">
            <div className="flex items-center justify-between text-sm">
              <span className="text-muted-foreground">Componentes Oficiales shadcn/ui</span>
              <span className="font-semibold">{progress.components}%</span>
            </div>
            <Progress value={progress.components} className="h-2" />
            <p className="text-xs text-muted-foreground">48/48 componentes implementados</p>
          </div>

          <div className="space-y-2">
            <div className="flex items-center justify-between text-sm">
              <span className="text-muted-foreground">Patterns Compuestos</span>
              <span className="font-semibold">{progress.patterns}%</span>
            </div>
            <Progress value={progress.patterns} className="h-2" />
            <p className="text-xs text-muted-foreground">21/21 patterns de UX completos</p>
          </div>

          <div className="space-y-2">
            <div className="flex items-center justify-between text-sm">
              <span className="text-muted-foreground">Componentes de Negocio</span>
              <span className="font-semibold">{progress.business}%</span>
            </div>
            <Progress value={progress.business} className="h-2" />
            <p className="text-xs text-muted-foreground">15/15 componentes de negocio implementados</p>
          </div>

          <div className="space-y-2">
            <div className="flex items-center justify-between text-sm">
              <span className="text-muted-foreground">Componentes Avanzados</span>
              <span className="font-semibold">{progress.advanced}%</span>
            </div>
            <Progress value={progress.advanced} className="h-2" />
            <p className="text-xs text-muted-foreground">25/25 componentes avanzados implementados</p>
          </div>

          <div className="space-y-2">
            <div className="flex items-center justify-between text-sm">
              <span className="text-muted-foreground">Accesibilidad WCAG 2.1 AA</span>
              <span className="font-semibold">{progress.accessibility}%</span>
            </div>
            <Progress value={progress.accessibility} className="h-2" />
            <p className="text-xs text-muted-foreground">Ratios de contraste optimizados</p>
          </div>
        </CardContent>
      </Card>

      {/* Features Grid */}
      <div>
        <div className="mb-6">
          <h2 className="mb-2">Características Principales</h2>
          <p className="text-muted-foreground">
            Fundamentos y pilares del Design System
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => (
            <Card key={index} className="elevation-1 hover:elevation-2 transition-shadow">
              <CardHeader>
                <div className="flex items-center justify-between mb-2">
                  <div className="p-2 rounded-lg bg-primary/10">
                    <feature.icon className="h-5 w-5 text-primary" />
                  </div>
                  <Badge variant="secondary" className="text-xs">
                    {feature.badge}
                  </Badge>
                </div>
                <CardTitle className="text-lg">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      <Separator />

      {/* Tech Stack */}
      <div className="grid gap-6 md:grid-cols-2">
        <Card className="elevation-1">
          <CardHeader>
            <div className="flex items-center gap-2">
              <Code2 className="h-5 w-5 text-chart-2" />
              <CardTitle>Stack Tecnológico</CardTitle>
            </div>
            <CardDescription>Librerías y frameworks utilizados</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {techStack.map((tech, index) => (
                <div key={index} className="flex items-center justify-between">
                  <span className="text-sm font-medium">{tech.name}</span>
                  <Badge variant="outline" className="text-xs">
                    {tech.version}
                  </Badge>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card className="elevation-1">
          <CardHeader>
            <div className="flex items-center gap-2">
              <Shield className="h-5 w-5 text-success" />
              <CardTitle>Heurísticas WCAG</CardTitle>
            </div>
            <CardDescription>Cumplimiento de estándares de accesibilidad</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-start gap-3">
              <CheckCircle2 className="h-5 w-5 text-success mt-0.5" />
              <div>
                <p className="text-sm font-medium">Contraste de Color</p>
                <p className="text-xs text-muted-foreground">
                  Ratios superiores a 4.5:1 para texto normal y 3:1 para texto grande
                </p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <CheckCircle2 className="h-5 w-5 text-success mt-0.5" />
              <div>
                <p className="text-sm font-medium">Navegación por Teclado</p>
                <p className="text-xs text-muted-foreground">
                  Todos los componentes interactivos son accesibles vía Tab/Enter/Escape
                </p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <CheckCircle2 className="h-5 w-5 text-success mt-0.5" />
              <div>
                <p className="text-sm font-medium">Screen Readers</p>
                <p className="text-xs text-muted-foreground">
                  ARIA labels y roles semánticos en todos los componentes
                </p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <CheckCircle2 className="h-5 w-5 text-success mt-0.5" />
              <div>
                <p className="text-sm font-medium">Focus Visible</p>
                <p className="text-xs text-muted-foreground">
                  Ring de enfoque (#00c951) claramente visible en modo claro y oscuro
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Footer Note */}
      <Card className="bg-muted/30 elevation-1">
        <CardContent className="pt-6">
          <div className="flex items-start gap-4">
            <div className="p-2 rounded-lg bg-warning/10">
              <Activity className="h-5 w-5 text-warning" />
            </div>
            <div className="flex-1">
              <h3 className="font-semibold mb-2">🧪 PRUEBA NO DESTRUCTIVA - Nueva estructura /pages</h3>
              <p className="text-sm text-muted-foreground mb-3">
                Este archivo está ubicado en <code>/pages/HomePage.tsx</code> (raíz) en lugar de 
                <code>/components/pages/HomePage.tsx</code>. Esta es una prueba de concepto para validar 
                la nueva arquitectura antes de realizar la migración completa.
              </p>
              <p className="text-xs text-muted-foreground">
                <strong>Imports actualizados:</strong> Ahora usa rutas relativas desde /pages hacia /components
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
