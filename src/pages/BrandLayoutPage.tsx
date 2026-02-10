import { Card } from "../components/ui/card";
import { Badge } from "../components/ui/badge";
import { Separator } from "../components/ui/separator";
import { Logo } from "../components/Logo";
import { Palette, Ruler, Grid3x3, Type } from "lucide-react";
import { useState } from "react";
import { ColorSwatch } from "../components/widgets/ColorSwatch";
import { GridSystemPreview } from "../components/widgets/GridSystemPreview";
import { SpacingPreview } from "../components/widgets/SpacingPreview";

export function BrandLayoutPage() {
  const [copiedColor, setCopiedColor] = useState<string | null>(null);

  const copyToClipboard = (text: string, id: string) => {
    navigator.clipboard.writeText(text);
    setCopiedColor(id);
    setTimeout(() => setCopiedColor(null), 2000);
  };

  const colors = [
    {
      id: "primary",
      name: "Primary",
      hex: "#84cc16",
      rgb: "rgb(132, 204, 22)",
      usage: "CTAs, estados activos, focus rings",
      contrast: "WCAG AAA (7.2:1 sobre secondary)",
    },
    {
      id: "secondary",
      name: "Secondary",
      hex: "#1C2D3A",
      rgb: "rgb(28, 45, 58)",
      usage: "Texto principal, fondos, elementos oscuros",
      contrast: "WCAG AAA (14.9:1 sobre blanco)",
    },
  ];

  const spacing = [
    { name: "xs", value: "4px", multiplier: "1×" },
    { name: "sm", value: "8px", multiplier: "2×" },
    { name: "md", value: "12px", multiplier: "3×" },
    { name: "base", value: "16px", multiplier: "4×" },
    { name: "lg", value: "24px", multiplier: "6×" },
    { name: "xl", value: "32px", multiplier: "8×" },
    { name: "2xl", value: "48px", multiplier: "12×" },
    { name: "3xl", value: "64px", multiplier: "16×" },
  ];

  const gridExamples = [
    { device: "Desktop", columns: 12, gutter: "24px", margin: "48px" },
    { device: "Tablet", columns: 6, gutter: "16px", margin: "32px" },
    { device: "Mobile", columns: 4, gutter: "16px", margin: "16px" },
  ];

  return (
    <div className="space-y-8">
      {/* Header */}
      <div>
        <div className="flex items-center gap-3 mb-2">
          <Palette className="h-8 w-8 text-primary" />
          <h1 className="text-2xl font-medium">Brand & Layout Guidelines</h1>
        </div>
        <p className="text-muted-foreground">
          Sistema de diseño completo: marca, colores, tipografía y grid system
        </p>
      </div>

      <Separator />

      {/* BRAND GUIDELINES */}
      <section>
        <div className="flex items-center gap-3 mb-6">
          <Palette className="h-6 w-6 text-primary" />
          <h2 className="text-3xl font-semibold">Brand Guidelines</h2>
          <Badge variant="secondary">Identidad Visual</Badge>
        </div>

        {/* Logo Showcase */}
        <Card className="p-8 mb-6">
          <h3 className="text-xl font-semibold mb-6">Logo</h3>
          
          {/* Logo for Light Backgrounds */}
          <div className="mb-8">
            <h4 className="font-medium text-sm mb-4 text-muted-foreground">Para fondos claros</h4>
            <div className="space-y-8">
              {/* Extra Large */}
              <div className="flex items-center gap-8 p-6 bg-muted/50 rounded-lg">
                <div className="flex-shrink-0 w-32">
                  <p className="text-sm font-medium mb-1">Extra Large</p>
                  <p className="text-xs text-muted-foreground">h-12 (48px)</p>
                </div>
                <Logo size="xl" variant="light" />
              </div>

              {/* Large */}
              <div className="flex items-center gap-8 p-6 bg-muted/50 rounded-lg">
                <div className="flex-shrink-0 w-32">
                  <p className="text-sm font-medium mb-1">Large</p>
                  <p className="text-xs text-muted-foreground">h-10 (40px)</p>
                </div>
                <Logo size="lg" variant="light" />
              </div>

              {/* Medium */}
              <div className="flex items-center gap-8 p-6 bg-muted/50 rounded-lg">
                <div className="flex-shrink-0 w-32">
                  <p className="text-sm font-medium mb-1">Medium</p>
                  <p className="text-xs text-muted-foreground">h-8 (32px)</p>
                </div>
                <Logo size="md" variant="light" />
              </div>

              {/* Small */}
              <div className="flex items-center gap-8 p-6 bg-muted/50 rounded-lg">
                <div className="flex-shrink-0 w-32">
                  <p className="text-sm font-medium mb-1">Small</p>
                  <p className="text-xs text-muted-foreground">h-6 (24px)</p>
                </div>
                <Logo size="sm" variant="light" />
              </div>
            </div>
          </div>

          <Separator className="my-8" />

          {/* Logo for Dark Backgrounds */}
          <div>
            <h4 className="font-medium text-sm mb-4 text-muted-foreground">Para fondos oscuros</h4>
            <div className="space-y-8">
              {/* Extra Large */}
              <div className="flex items-center gap-8 p-6 bg-secondary rounded-lg">
                <div className="flex-shrink-0 w-32">
                  <p className="text-sm font-medium mb-1 text-white">Extra Large</p>
                  <p className="text-xs text-white/60">h-12 (48px)</p>
                </div>
                <Logo size="xl" variant="dark" />
              </div>

              {/* Large */}
              <div className="flex items-center gap-8 p-6 bg-secondary rounded-lg">
                <div className="flex-shrink-0 w-32">
                  <p className="text-sm font-medium mb-1 text-white">Large</p>
                  <p className="text-xs text-white/60">h-10 (40px)</p>
                </div>
                <Logo size="lg" variant="dark" />
              </div>

              {/* Medium */}
              <div className="flex items-center gap-8 p-6 bg-secondary rounded-lg">
                <div className="flex-shrink-0 w-32">
                  <p className="text-sm font-medium mb-1 text-white">Medium</p>
                  <p className="text-xs text-white/60">h-8 (32px)</p>
                </div>
                <Logo size="md" variant="dark" />
              </div>

              {/* Small */}
              <div className="flex items-center gap-8 p-6 bg-secondary rounded-lg">
                <div className="flex-shrink-0 w-32">
                  <p className="text-sm font-medium mb-1 text-white">Small</p>
                  <p className="text-xs text-white/60">h-6 (24px)</p>
                </div>
                <Logo size="sm" variant="dark" />
              </div>
            </div>
          </div>

          {/* Logo Usage Guidelines */}
          <div className="mt-8 p-4 bg-primary/10 border border-primary/20 rounded-lg">
            <h4 className="font-semibold mb-3 flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-primary" />
              Logo Usage Guidelines
            </h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li className="flex items-start gap-2">
                <span className="text-primary mt-1">•</span>
                <span><strong>Minimum size:</strong> 24px height (h-6) para garantizar legibilidad</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary mt-1">•</span>
                <span><strong>Clear space:</strong> Mantener espacio equivalente a la altura del logo alrededor</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary mt-1">•</span>
                <span><strong>Backgrounds:</strong> Usar variante "light" para fondos claros y "dark" para fondos oscuros</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary mt-1">•</span>
                <span><strong>No modificar:</strong> No estirar, rotar o cambiar proporciones del logo</span>
              </li>
            </ul>
          </div>
        </Card>

        {/* Color Palette */}
        <Card className="p-8">
          <h3 className="text-xl font-semibold mb-6">Color Palette</h3>
          
          <div className="grid md:grid-cols-2 gap-6">
            {colors.map((color) => (
              <ColorSwatch
                key={color.id}
                id={color.id}
                name={color.name}
                hex={color.hex}
                rgb={color.rgb}
                usage={color.usage}
                isPrimary={color.id === "primary"}
                copiedColor={copiedColor}
                onCopy={copyToClipboard}
              />
            ))}
          </div>
        </Card>

        {/* Typography */}
        <Card className="p-8 mt-6">
          <div className="flex items-center gap-3 mb-6">
            <Type className="h-5 w-5 text-primary" />
            <h3 className="text-xl font-semibold">Typography</h3>
          </div>

          <div className="space-y-6">
            {/* Font Family */}
            <div className="p-4 bg-muted/50 rounded-lg border-2 border-primary/20">
              <p className="text-sm text-muted-foreground mb-2">Font Family (Única permitida)</p>
              <p className="text-2xl font-semibold">Satoshi</p>
              <p className="text-sm text-muted-foreground mt-2">
                ⚠️ IMPORTANTE: Satoshi es la ÚNICA fuente permitida en todo el sistema
              </p>
              <p className="text-xs text-muted-foreground mt-1">
                Variable font · Weights: 300-700 · Letter-spacing: 0.025em
              </p>
            </div>

            {/* Font Weights Available */}
            <div className="p-4 bg-muted/50 rounded-lg">
              <p className="text-sm font-medium mb-4">Font Weights (Satoshi)</p>
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="font-light text-lg">Light (300)</span>
                  <span className="text-xs text-muted-foreground">font-light</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="font-normal text-lg">Normal (400)</span>
                  <span className="text-xs text-muted-foreground">font-normal</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="font-medium text-lg">Medium (500)</span>
                  <span className="text-xs text-muted-foreground">font-medium</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="font-semibold text-lg">Semibold (600)</span>
                  <span className="text-xs text-muted-foreground">font-semibold</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="font-bold text-lg">Bold (700)</span>
                  <span className="text-xs text-muted-foreground">font-bold</span>
                </div>
              </div>
            </div>

            {/* Type Scale */}
            <div>
              <p className="text-sm font-medium mb-4">Type Scale (Satoshi en todos los tamaños)</p>
              <div className="space-y-4">
                <div className="p-4 border border-border rounded-lg">
                  <p className="text-5xl font-semibold mb-2">Heading 1</p>
                  <p className="text-xs text-muted-foreground">
                    text-5xl · font-semibold · 48px · Satoshi
                  </p>
                </div>
                <div className="p-4 border border-border rounded-lg">
                  <p className="text-3xl font-semibold mb-2">Heading 2</p>
                  <p className="text-xs text-muted-foreground">
                    text-3xl · font-semibold · 30px · Satoshi
                  </p>
                </div>
                <div className="p-4 border border-border rounded-lg">
                  <p className="text-xl font-semibold mb-2">Heading 3</p>
                  <p className="text-xs text-muted-foreground">
                    text-xl · font-semibold · 20px · Satoshi
                  </p>
                </div>
                <div className="p-4 border border-border rounded-lg">
                  <p className="text-base mb-2">Body Text</p>
                  <p className="text-xs text-muted-foreground">
                    text-base · font-normal · 16px · Satoshi
                  </p>
                </div>
                <div className="p-4 border border-border rounded-lg">
                  <p className="text-sm mb-2">Small Text</p>
                  <p className="text-xs text-muted-foreground">
                    text-sm · font-normal · 14px · Satoshi
                  </p>
                </div>
                <div className="p-4 border border-border rounded-lg">
                  <p className="text-xs mb-2">Caption</p>
                  <p className="text-xs text-muted-foreground">
                    text-xs · font-medium · 12px · Satoshi
                  </p>
                </div>
              </div>
            </div>

            {/* Typography Rules */}
            <div className="p-4 bg-destructive/10 border border-destructive/20 rounded-lg">
              <h4 className="font-semibold mb-3 flex items-center gap-2 text-destructive">
                <span className="h-2 w-2 rounded-full bg-destructive" />
                Reglas de Tipografía (CRÍTICO)
              </h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex items-start gap-2">
                  <span className="text-destructive mt-1">✗</span>
                  <span><strong>PROHIBIDO:</strong> Usar cualquier fuente que no sea Satoshi</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-destructive mt-1">✗</span>
                  <span><strong>PROHIBIDO:</strong> Importar otras fuentes (Inter, Roboto, Arial, etc.)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">✓</span>
                  <span><strong>CORRECTO:</strong> Satoshi se aplica automáticamente desde globals.css</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">✓</span>
                  <span><strong>CORRECTO:</strong> font-family: 'Satoshi', sans-serif</span>
                </li>
              </ul>
            </div>
          </div>
        </Card>
      </section>

      <Separator className="my-12" />

      {/* LAYOUT SYSTEM */}
      <section>
        <div className="flex items-center gap-3 mb-6">
          <Grid3x3 className="h-6 w-6 text-primary" />
          <h2 className="text-3xl font-semibold">Layout System</h2>
          <Badge variant="secondary">Grid & Spacing</Badge>
        </div>

        {/* Grid System */}
        <Card className="p-8 mb-6">
          <h3 className="text-xl font-semibold mb-6">Responsive Grid System</h3>

          <div className="space-y-8">
            {gridExamples.map((grid) => (
              <GridSystemPreview
                key={grid.device}
                device={grid.device}
                columns={grid.columns}
                gutter={grid.gutter}
                margin={grid.margin}
              />
            ))}
          </div>

          {/* Grid Guidelines */}
          <div className="mt-8 p-4 bg-primary/10 border border-primary/20 rounded-lg">
            <h4 className="font-semibold mb-3 flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-primary" />
              Grid Usage Guidelines
            </h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li className="flex items-start gap-2">
                <span className="text-primary mt-1">•</span>
                <span><strong>Desktop (1280px+):</strong> 12 columnas para máxima flexibilidad</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary mt-1">•</span>
                <span><strong>Tablet (768px - 1279px):</strong> 6 columnas para layouts medianos</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary mt-1">•</span>
                <span><strong>Mobile (hasta 767px):</strong> 4 columnas para contenido compacto</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary mt-1">•</span>
                <span><strong>Gutters:</strong> Espacio entre columnas (16-24px según dispositivo)</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary mt-1">•</span>
                <span><strong>Margins:</strong> Espacio exterior del grid (16-48px según dispositivo)</span>
              </li>
            </ul>
          </div>
        </Card>

        {/* Spacing System */}
        <Card className="p-8">
          <div className="flex items-center gap-3 mb-6">
            <Ruler className="h-5 w-5 text-primary" />
            <h3 className="text-xl font-semibold">Spacing System</h3>
          </div>

          <p className="text-sm text-muted-foreground mb-6">
            Sistema de espaciado basado en múltiplos de 4px para consistencia visual
          </p>

          <div className="space-y-3">
            {spacing.map((space) => (
              <SpacingPreview
                key={space.name}
                name={space.name}
                value={space.value}
                multiplier={space.multiplier}
              />
            ))}
          </div>

          {/* Spacing Usage Examples */}
          <div className="mt-8 grid md:grid-cols-2 gap-6">
            <div className="p-4 bg-muted/50 rounded-lg">
              <h4 className="font-semibold mb-3 text-sm">Component Spacing</h4>
              <ul className="space-y-2 text-xs text-muted-foreground">
                <li className="flex items-center gap-2">
                  <span className="font-mono bg-background px-2 py-1 rounded">gap-2</span>
                  <span>Entre elementos pequeños (8px)</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="font-mono bg-background px-2 py-1 rounded">gap-4</span>
                  <span>Entre elementos relacionados (16px)</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="font-mono bg-background px-2 py-1 rounded">gap-6</span>
                  <span>Entre secciones (24px)</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="font-mono bg-background px-2 py-1 rounded">gap-8</span>
                  <span>Entre bloques principales (32px)</span>
                </li>
              </ul>
            </div>

            <div className="p-4 bg-muted/50 rounded-lg">
              <h4 className="font-semibold mb-3 text-sm">Padding Guidelines</h4>
              <ul className="space-y-2 text-xs text-muted-foreground">
                <li className="flex items-center gap-2">
                  <span className="font-mono bg-background px-2 py-1 rounded">p-4</span>
                  <span>Cards mínimo (16px)</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="font-mono bg-background px-2 py-1 rounded">p-6</span>
                  <span>Cards estándar (24px)</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="font-mono bg-background px-2 py-1 rounded">p-8</span>
                  <span>Cards destacadas (32px)</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="font-mono bg-background px-2 py-1 rounded">p-12</span>
                  <span>Secciones principales (48px)</span>
                </li>
              </ul>
            </div>
          </div>
        </Card>
      </section>
    </div>
  );
}