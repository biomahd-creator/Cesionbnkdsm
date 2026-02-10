import React from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../components/ui/card";
import { Badge } from "../components/ui/badge";
import { Separator } from "../components/ui/separator";

export function ElevationPage() {
  return (
    <div className="space-y-8 animate-in fade-in duration-500">
      <div className="space-y-2">
        <h1 className="text-2xl font-medium tracking-tight">Elevation & Shadows</h1>
        <p className="text-lg text-muted-foreground max-w-2xl">
          System elevation styles designed for depth and hierarchy, adapted for light and dark modes.
        </p>
      </div>

      <Separator />

      <section className="space-y-6">
        <div className="space-y-2">
          <h2 className="text-2xl font-semibold">Elevation Levels</h2>
          <p className="text-muted-foreground">
            Four levels of elevation for different UI contexts. Shadows are tinted with the brand color in light mode.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 p-8 bg-muted/30 rounded-xl border border-dashed">
          {/* Level 1 */}
          <div className="flex flex-col gap-4 items-center">
            <div className="h-32 w-32 bg-card rounded-xl flex items-center justify-center shadow-elevation-1 transition-all hover:scale-105 duration-300">
              <span className="font-medium">Level 1</span>
            </div>
            <div className="text-center space-y-1">
              <Badge variant="outline">shadow-elevation-1</Badge>
              <p className="text-xs text-muted-foreground">Cards, listed items</p>
            </div>
          </div>

          {/* Level 2 */}
          <div className="flex flex-col gap-4 items-center">
            <div className="h-32 w-32 bg-card rounded-xl flex items-center justify-center shadow-elevation-2 transition-all hover:scale-105 duration-300">
              <span className="font-medium">Level 2</span>
            </div>
            <div className="text-center space-y-1">
              <Badge variant="outline">shadow-elevation-2</Badge>
              <p className="text-xs text-muted-foreground">Dropdowns, popovers</p>
            </div>
          </div>

          {/* Level 3 */}
          <div className="flex flex-col gap-4 items-center">
            <div className="h-32 w-32 bg-card rounded-xl flex items-center justify-center shadow-elevation-3 transition-all hover:scale-105 duration-300">
              <span className="font-medium">Level 3</span>
            </div>
            <div className="text-center space-y-1">
              <Badge variant="outline">shadow-elevation-3</Badge>
              <p className="text-xs text-muted-foreground">Modals, drawers</p>
            </div>
          </div>

          {/* Level 4 */}
          <div className="flex flex-col gap-4 items-center">
            <div className="h-32 w-32 bg-card rounded-xl flex items-center justify-center shadow-elevation-4 transition-all hover:scale-105 duration-300">
              <span className="font-medium">Level 4</span>
            </div>
            <div className="text-center space-y-1">
              <Badge variant="outline">shadow-elevation-4</Badge>
              <p className="text-xs text-muted-foreground">Alerts, sticky elements</p>
            </div>
          </div>
        </div>
      </section>
      
      <section className="space-y-6">
        <div className="space-y-2">
          <h2 className="text-2xl font-semibold">Interactive Examples</h2>
          <p className="text-muted-foreground">
            How elevation behaves on interaction.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card className="shadow-elevation-1 hover:shadow-elevation-3 transition-shadow duration-300 cursor-pointer border-none">
            <CardHeader>
              <CardTitle>Hover Elevation</CardTitle>
              <CardDescription>Hover over this card</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                This card starts at Level 1 and lifts to Level 3 on hover, providing a tactile feel.
              </p>
            </CardContent>
          </Card>

          <Card className="shadow-elevation-2 border-none">
            <CardHeader>
              <CardTitle>Static Elevation</CardTitle>
              <CardDescription>Always elevated</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                This card stays at Level 2, useful for highlighting featured content.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      <section className="space-y-6">
        <div className="space-y-2">
          <h2 className="text-2xl font-semibold">Color Tinting</h2>
          <p className="text-muted-foreground">
            In light mode, shadows use a subtle <span className="text-secondary font-bold">#1C2D3A</span> tint instead of pure black.
          </p>
        </div>
        
        <div className="flex gap-8 p-8 bg-card rounded-xl border items-center justify-center">
             <div className="h-24 w-24 bg-card rounded-lg shadow-elevation-3 flex items-center justify-center">
                <span className="text-xs text-muted-foreground">Tinted Shadow</span>
             </div>
        </div>
      </section>

      {/* ── Colored Glow Shadows ── */}
      <section className="space-y-6">
        <div className="space-y-2">
          <h2 className="text-2xl font-semibold">Colored Glow Shadows</h2>
          <p className="text-muted-foreground">
            Sombras con color para estados activos, hover o énfasis. Disponibles en 4 colores × 4 tamaños (sm, md, lg, xl).
          </p>
        </div>

        {/* Blue Glow */}
        <div className="space-y-3">
          <div className="flex items-center gap-2">
            <div className="h-3 w-3 rounded-full bg-[#3b82f6]" />
            <h3 className="text-lg font-medium">Blue</h3>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 p-8 bg-muted/30 rounded-xl border border-dashed">
            <div className="flex flex-col gap-4 items-center">
              <div className="h-28 w-28 bg-card rounded-xl flex items-center justify-center shadow-glow-blue-sm transition-all hover:scale-105 duration-300">
                <span className="text-xs font-medium text-muted-foreground">SM</span>
              </div>
              <Badge variant="outline" className="text-[10px]">shadow-glow-blue-sm</Badge>
            </div>
            <div className="flex flex-col gap-4 items-center">
              <div className="h-28 w-28 bg-card rounded-xl flex items-center justify-center shadow-glow-blue-md transition-all hover:scale-105 duration-300">
                <span className="text-xs font-medium text-muted-foreground">MD</span>
              </div>
              <Badge variant="outline" className="text-[10px]">shadow-glow-blue-md</Badge>
            </div>
            <div className="flex flex-col gap-4 items-center">
              <div className="h-28 w-28 bg-card rounded-xl flex items-center justify-center shadow-glow-blue-lg transition-all hover:scale-105 duration-300">
                <span className="text-xs font-medium text-muted-foreground">LG</span>
              </div>
              <Badge variant="outline" className="text-[10px]">shadow-glow-blue-lg</Badge>
            </div>
            <div className="flex flex-col gap-4 items-center">
              <div className="h-28 w-28 bg-card rounded-xl flex items-center justify-center shadow-glow-blue-xl transition-all hover:scale-105 duration-300">
                <span className="text-xs font-medium text-muted-foreground">XL</span>
              </div>
              <Badge variant="outline" className="text-[10px]">shadow-glow-blue-xl</Badge>
            </div>
          </div>
        </div>

        {/* Green Glow */}
        <div className="space-y-3">
          <div className="flex items-center gap-2">
            <div className="h-3 w-3 rounded-full bg-[#22c55e]" />
            <h3 className="text-lg font-medium">Green</h3>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 p-8 bg-muted/30 rounded-xl border border-dashed">
            <div className="flex flex-col gap-4 items-center">
              <div className="h-28 w-28 bg-card rounded-xl flex items-center justify-center shadow-glow-green-sm transition-all hover:scale-105 duration-300">
                <span className="text-xs font-medium text-muted-foreground">SM</span>
              </div>
              <Badge variant="outline" className="text-[10px]">shadow-glow-green-sm</Badge>
            </div>
            <div className="flex flex-col gap-4 items-center">
              <div className="h-28 w-28 bg-card rounded-xl flex items-center justify-center shadow-glow-green-md transition-all hover:scale-105 duration-300">
                <span className="text-xs font-medium text-muted-foreground">MD</span>
              </div>
              <Badge variant="outline" className="text-[10px]">shadow-glow-green-md</Badge>
            </div>
            <div className="flex flex-col gap-4 items-center">
              <div className="h-28 w-28 bg-card rounded-xl flex items-center justify-center shadow-glow-green-lg transition-all hover:scale-105 duration-300">
                <span className="text-xs font-medium text-muted-foreground">LG</span>
              </div>
              <Badge variant="outline" className="text-[10px]">shadow-glow-green-lg</Badge>
            </div>
            <div className="flex flex-col gap-4 items-center">
              <div className="h-28 w-28 bg-card rounded-xl flex items-center justify-center shadow-glow-green-xl transition-all hover:scale-105 duration-300">
                <span className="text-xs font-medium text-muted-foreground">XL</span>
              </div>
              <Badge variant="outline" className="text-[10px]">shadow-glow-green-xl</Badge>
            </div>
          </div>
        </div>

        {/* Yellow Glow */}
        <div className="space-y-3">
          <div className="flex items-center gap-2">
            <div className="h-3 w-3 rounded-full bg-[#eab308]" />
            <h3 className="text-lg font-medium">Yellow</h3>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 p-8 bg-muted/30 rounded-xl border border-dashed">
            <div className="flex flex-col gap-4 items-center">
              <div className="h-28 w-28 bg-card rounded-xl flex items-center justify-center shadow-glow-yellow-sm transition-all hover:scale-105 duration-300">
                <span className="text-xs font-medium text-muted-foreground">SM</span>
              </div>
              <Badge variant="outline" className="text-[10px]">shadow-glow-yellow-sm</Badge>
            </div>
            <div className="flex flex-col gap-4 items-center">
              <div className="h-28 w-28 bg-card rounded-xl flex items-center justify-center shadow-glow-yellow-md transition-all hover:scale-105 duration-300">
                <span className="text-xs font-medium text-muted-foreground">MD</span>
              </div>
              <Badge variant="outline" className="text-[10px]">shadow-glow-yellow-md</Badge>
            </div>
            <div className="flex flex-col gap-4 items-center">
              <div className="h-28 w-28 bg-card rounded-xl flex items-center justify-center shadow-glow-yellow-lg transition-all hover:scale-105 duration-300">
                <span className="text-xs font-medium text-muted-foreground">LG</span>
              </div>
              <Badge variant="outline" className="text-[10px]">shadow-glow-yellow-lg</Badge>
            </div>
            <div className="flex flex-col gap-4 items-center">
              <div className="h-28 w-28 bg-card rounded-xl flex items-center justify-center shadow-glow-yellow-xl transition-all hover:scale-105 duration-300">
                <span className="text-xs font-medium text-muted-foreground">XL</span>
              </div>
              <Badge variant="outline" className="text-[10px]">shadow-glow-yellow-xl</Badge>
            </div>
          </div>
        </div>

        {/* Primary Glow */}
        <div className="space-y-3">
          <div className="flex items-center gap-2">
            <div className="h-3 w-3 rounded-full bg-primary" />
            <h3 className="text-lg font-medium">Primary</h3>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 p-8 bg-muted/30 rounded-xl border border-dashed">
            <div className="flex flex-col gap-4 items-center">
              <div className="h-28 w-28 bg-card rounded-xl flex items-center justify-center shadow-glow-primary-sm transition-all hover:scale-105 duration-300">
                <span className="text-xs font-medium text-muted-foreground">SM</span>
              </div>
              <Badge variant="outline" className="text-[10px]">shadow-glow-primary-sm</Badge>
            </div>
            <div className="flex flex-col gap-4 items-center">
              <div className="h-28 w-28 bg-card rounded-xl flex items-center justify-center shadow-glow-primary-md transition-all hover:scale-105 duration-300">
                <span className="text-xs font-medium text-muted-foreground">MD</span>
              </div>
              <Badge variant="outline" className="text-[10px]">shadow-glow-primary-md</Badge>
            </div>
            <div className="flex flex-col gap-4 items-center">
              <div className="h-28 w-28 bg-card rounded-xl flex items-center justify-center shadow-glow-primary-lg transition-all hover:scale-105 duration-300">
                <span className="text-xs font-medium text-muted-foreground">LG</span>
              </div>
              <Badge variant="outline" className="text-[10px]">shadow-glow-primary-lg</Badge>
            </div>
            <div className="flex flex-col gap-4 items-center">
              <div className="h-28 w-28 bg-card rounded-xl flex items-center justify-center shadow-glow-primary-xl transition-all hover:scale-105 duration-300">
                <span className="text-xs font-medium text-muted-foreground">XL</span>
              </div>
              <Badge variant="outline" className="text-[10px]">shadow-glow-primary-xl</Badge>
            </div>
          </div>
        </div>
      </section>

      {/* ── Interactive Glow Examples ── */}
      <section className="space-y-6">
        <div className="space-y-2">
          <h2 className="text-2xl font-semibold">Interactive Glow</h2>
          <p className="text-muted-foreground">
            Combinaciones de hover con glow coloreado para feedback visual en interacciones.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <Card className="shadow-elevation-1 hover:shadow-glow-blue-lg transition-shadow duration-300 cursor-pointer border-none">
            <CardHeader>
              <CardTitle className="text-sm">Hover → Blue Glow</CardTitle>
              <CardDescription className="text-xs">elevation-1 → glow-blue-lg</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-xs text-muted-foreground">
                Pasa el mouse para ver el efecto de glow azul.
              </p>
            </CardContent>
          </Card>

          <Card className="shadow-elevation-1 hover:shadow-glow-green-lg transition-shadow duration-300 cursor-pointer border-none">
            <CardHeader>
              <CardTitle className="text-sm">Hover → Green Glow</CardTitle>
              <CardDescription className="text-xs">elevation-1 → glow-green-lg</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-xs text-muted-foreground">
                Pasa el mouse para ver el efecto de glow verde.
              </p>
            </CardContent>
          </Card>

          <Card className="shadow-elevation-1 hover:shadow-glow-yellow-lg transition-shadow duration-300 cursor-pointer border-none">
            <CardHeader>
              <CardTitle className="text-sm">Hover → Yellow Glow</CardTitle>
              <CardDescription className="text-xs">elevation-1 → glow-yellow-lg</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-xs text-muted-foreground">
                Pasa el mouse para ver el efecto de glow amarillo.
              </p>
            </CardContent>
          </Card>

          <Card className="shadow-elevation-1 hover:shadow-glow-primary-lg transition-shadow duration-300 cursor-pointer border-none">
            <CardHeader>
              <CardTitle className="text-sm">Hover → Primary Glow</CardTitle>
              <CardDescription className="text-xs">elevation-1 → glow-primary-lg</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-xs text-muted-foreground">
                Pasa el mouse para ver el efecto de glow primario.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
}