import { ComponentShowcase } from "../components/ui/component-showcase";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../components/ui/card";
import { Badge } from "../components/ui/badge";

export function ElevationPage() {
  return (
    <ComponentShowcase
      title="Elevation & Shadows"
      description="Standard elevation system for depth and hierarchy, with brand-tinted shadows in light mode and darker shadows in dark mode. Includes 4 elevation levels mapped to CSS custom properties."
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
<Card className="shadow-elevation-1 hover:shadow-elevation-3 transition-shadow" />`}
      props={[
        {
          name: "shadow-elevation-{1-4}",
          type: "Tailwind class",
          description: "CSS custom property shadows with 4 depth levels. Brand-tinted (#1C2D3A) in light mode, darker (rgba 0,0,0,0.3) in dark mode.",
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
          title: "Elevation Scale Comparison",
          description: "All 4 elevation levels side by side for visual reference.",
          preview: (
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 p-8 bg-muted/30 rounded-xl border border-dashed">
              <div className="flex flex-col gap-4 items-center">
                <div className="h-28 w-28 bg-card rounded-xl flex items-center justify-center shadow-elevation-1 transition-all hover:scale-105 duration-300">
                  <span className="text-xs font-medium text-muted-foreground">Level 1</span>
                </div>
                <Badge variant="outline" className="text-[10px]">shadow-elevation-1</Badge>
              </div>
              <div className="flex flex-col gap-4 items-center">
                <div className="h-28 w-28 bg-card rounded-xl flex items-center justify-center shadow-elevation-2 transition-all hover:scale-105 duration-300">
                  <span className="text-xs font-medium text-muted-foreground">Level 2</span>
                </div>
                <Badge variant="outline" className="text-[10px]">shadow-elevation-2</Badge>
              </div>
              <div className="flex flex-col gap-4 items-center">
                <div className="h-28 w-28 bg-card rounded-xl flex items-center justify-center shadow-elevation-3 transition-all hover:scale-105 duration-300">
                  <span className="text-xs font-medium text-muted-foreground">Level 3</span>
                </div>
                <Badge variant="outline" className="text-[10px]">shadow-elevation-3</Badge>
              </div>
              <div className="flex flex-col gap-4 items-center">
                <div className="h-28 w-28 bg-card rounded-xl flex items-center justify-center shadow-elevation-4 transition-all hover:scale-105 duration-300">
                  <span className="text-xs font-medium text-muted-foreground">Level 4</span>
                </div>
                <Badge variant="outline" className="text-[10px]">shadow-elevation-4</Badge>
              </div>
            </div>
          ),
          code: `<div className="shadow-elevation-1" />  // Cards, list items
<div className="shadow-elevation-2" />  // Dropdowns, popovers
<div className="shadow-elevation-3" />  // Modals, drawers
<div className="shadow-elevation-4" />  // Alerts, sticky`,
        },
      ]}
    />
  );
}
