import { ComponentShowcase } from "../components/ui/component-showcase";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../components/ui/card";
import { Badge } from "../components/ui/badge";

export function ElevationPage() {
  return (
    <ComponentShowcase
      title="Elevation & Shadows"
      description="System elevation styles for depth and hierarchy, with brand-tinted shadows in light mode and darker shadows in dark mode. Includes 4 elevation levels for standard depth plus 4 colored glow variants (Blue, Green, Yellow, Primary) at 4 sizes each (sm, md, lg, xl)."
      category="Design System"
      preview={
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 p-8 bg-muted/30 rounded-xl border border-dashed">
          <div className="flex flex-col gap-4 items-center">
            <div className="h-32 w-32 bg-card rounded-xl flex items-center justify-center shadow-elevation-1 transition-all hover:scale-105 duration-300">
              <span className="font-medium">Level 1</span>
            </div>
            <div className="text-center space-y-1">
              <Badge variant="outline">shadow-elevation-1</Badge>
              <p className="text-xs text-muted-foreground">Cards, listed items</p>
            </div>
          </div>
          <div className="flex flex-col gap-4 items-center">
            <div className="h-32 w-32 bg-card rounded-xl flex items-center justify-center shadow-elevation-2 transition-all hover:scale-105 duration-300">
              <span className="font-medium">Level 2</span>
            </div>
            <div className="text-center space-y-1">
              <Badge variant="outline">shadow-elevation-2</Badge>
              <p className="text-xs text-muted-foreground">Dropdowns, popovers</p>
            </div>
          </div>
          <div className="flex flex-col gap-4 items-center">
            <div className="h-32 w-32 bg-card rounded-xl flex items-center justify-center shadow-elevation-3 transition-all hover:scale-105 duration-300">
              <span className="font-medium">Level 3</span>
            </div>
            <div className="text-center space-y-1">
              <Badge variant="outline">shadow-elevation-3</Badge>
              <p className="text-xs text-muted-foreground">Modals, drawers</p>
            </div>
          </div>
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
      }
      code={`{/* Elevation levels via Tailwind utility classes */}
<div className="shadow-elevation-1">Level 1 - Cards</div>
<div className="shadow-elevation-2">Level 2 - Dropdowns</div>
<div className="shadow-elevation-3">Level 3 - Modals</div>
<div className="shadow-elevation-4">Level 4 - Alerts</div>

{/* Hover transitions */}
<Card className="shadow-elevation-1 hover:shadow-elevation-3 transition-shadow" />

{/* Colored glow shadows */}
<div className="shadow-glow-blue-md">Blue glow</div>
<div className="shadow-glow-green-lg">Green glow</div>
<div className="shadow-glow-yellow-sm">Yellow glow</div>
<div className="shadow-glow-primary-xl">Primary glow</div>`}
      props={[
        {
          name: "shadow-elevation-{1-4}",
          type: "Tailwind class",
          description: "CSS custom property shadows with 4 depth levels. Brand-tinted (#1C2D3A) in light mode.",
        },
        {
          name: "shadow-glow-{color}-{size}",
          type: "Tailwind class",
          description: "Colored glow shadows. Colors: blue, green, yellow, primary. Sizes: sm, md, lg, xl.",
        },
      ]}
      examples={[
        {
          title: "Interactive Hover Elevation",
          description: "Cards that transition between elevation levels on hover for tactile feedback.",
          preview: (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card className="shadow-elevation-1 hover:shadow-elevation-3 transition-shadow duration-300 cursor-pointer border-none">
                <CardHeader>
                  <CardTitle className="text-sm">Hover Elevation</CardTitle>
                  <CardDescription className="text-xs">elevation-1 → elevation-3</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-xs text-muted-foreground">Hover to see the card lift.</p>
                </CardContent>
              </Card>
              <Card className="shadow-elevation-2 border-none">
                <CardHeader>
                  <CardTitle className="text-sm">Static Elevation</CardTitle>
                  <CardDescription className="text-xs">Always at level 2</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-xs text-muted-foreground">Useful for highlighting featured content.</p>
                </CardContent>
              </Card>
            </div>
          ),
          code: `<Card className="shadow-elevation-1 hover:shadow-elevation-3 transition-shadow" />
<Card className="shadow-elevation-2" />`,
        },
        {
          title: "Colored Glow Shadows",
          description: "4 color variants with hover transitions for interactive feedback states.",
          preview: (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <Card className="shadow-elevation-1 hover:shadow-glow-blue-lg transition-shadow duration-300 cursor-pointer border-none">
                <CardHeader>
                  <CardTitle className="text-sm">Blue Glow</CardTitle>
                  <CardDescription className="text-xs">glow-blue-lg</CardDescription>
                </CardHeader>
              </Card>
              <Card className="shadow-elevation-1 hover:shadow-glow-green-lg transition-shadow duration-300 cursor-pointer border-none">
                <CardHeader>
                  <CardTitle className="text-sm">Green Glow</CardTitle>
                  <CardDescription className="text-xs">glow-green-lg</CardDescription>
                </CardHeader>
              </Card>
              <Card className="shadow-elevation-1 hover:shadow-glow-yellow-lg transition-shadow duration-300 cursor-pointer border-none">
                <CardHeader>
                  <CardTitle className="text-sm">Yellow Glow</CardTitle>
                  <CardDescription className="text-xs">glow-yellow-lg</CardDescription>
                </CardHeader>
              </Card>
              <Card className="shadow-elevation-1 hover:shadow-glow-primary-lg transition-shadow duration-300 cursor-pointer border-none">
                <CardHeader>
                  <CardTitle className="text-sm">Primary Glow</CardTitle>
                  <CardDescription className="text-xs">glow-primary-lg</CardDescription>
                </CardHeader>
              </Card>
            </div>
          ),
          code: `<Card className="hover:shadow-glow-blue-lg" />
<Card className="hover:shadow-glow-green-lg" />
<Card className="hover:shadow-glow-yellow-lg" />
<Card className="hover:shadow-glow-primary-lg" />`,
        },
        {
          title: "Glow Size Comparison — Primary",
          description: "The 4 size variants of the primary colored glow shadow.",
          preview: (
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
          ),
          code: `<div className="shadow-glow-primary-sm" />  // Subtle
<div className="shadow-glow-primary-md" />  // Default
<div className="shadow-glow-primary-lg" />  // Emphasis
<div className="shadow-glow-primary-xl" />  // Maximum`,
        },
      ]}
    />
  );
}
