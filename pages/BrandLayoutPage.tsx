import { ComponentShowcase } from "../components/ui/component-showcase";
import { Card } from "../components/ui/card";
import { Badge } from "../components/ui/badge";
import { Separator } from "../components/ui/separator";
import { Logo } from "../components/Logo";
import { useState } from "react";
import { ColorSwatch } from "../components/widgets/ColorSwatch";
import { GridSystemPreview } from "../components/widgets/GridSystemPreview";
import { SpacingPreview } from "../components/widgets/SpacingPreview";

function BrandLayoutContent() {
  const [copiedColor, setCopiedColor] = useState<string | null>(null);

  const copyToClipboard = (text: string, id: string) => {
    navigator.clipboard.writeText(text);
    setCopiedColor(id);
    setTimeout(() => setCopiedColor(null), 2000);
  };

  const colors = [
    { id: "primary", name: "Primary", hex: "#84cc16", rgb: "rgb(132, 204, 22)", usage: "CTAs, active states, focus rings", contrast: "WCAG AAA (7.2:1 over secondary)" },
    { id: "secondary", name: "Secondary", hex: "#1C2D3A", rgb: "rgb(28, 45, 58)", usage: "Main text, backgrounds, dark elements", contrast: "WCAG AAA (14.9:1 over white)" },
  ];

  const spacing = [
    { name: "xs", value: "4px", multiplier: "1x" },
    { name: "sm", value: "8px", multiplier: "2x" },
    { name: "md", value: "12px", multiplier: "3x" },
    { name: "base", value: "16px", multiplier: "4x" },
    { name: "lg", value: "24px", multiplier: "6x" },
    { name: "xl", value: "32px", multiplier: "8x" },
    { name: "2xl", value: "48px", multiplier: "12x" },
    { name: "3xl", value: "64px", multiplier: "16x" },
  ];

  return (
    <div className="space-y-8">
      {/* Logo Showcase */}
      <Card className="p-8">
        <h3 className="font-medium mb-6">Logo</h3>
        <div className="mb-8">
          <h4 className="font-medium text-sm mb-4 text-muted-foreground">Light Backgrounds</h4>
          <div className="space-y-4">
            {(["xl", "lg", "md", "sm"] as const).map((size) => (
              <div key={size} className="flex items-center gap-8 p-4 bg-muted/50 rounded-lg">
                <div className="flex-shrink-0 w-24"><p className="text-xs text-muted-foreground">{size.toUpperCase()}</p></div>
                <Logo size={size} variant="light" />
              </div>
            ))}
          </div>
        </div>
        <Separator className="my-6" />
        <div>
          <h4 className="font-medium text-sm mb-4 text-muted-foreground">Dark Backgrounds</h4>
          <div className="space-y-4">
            {(["xl", "lg", "md", "sm"] as const).map((size) => (
              <div key={size} className="flex items-center gap-8 p-4 bg-secondary rounded-lg">
                <div className="flex-shrink-0 w-24"><p className="text-xs text-white/60">{size.toUpperCase()}</p></div>
                <Logo size={size} variant="dark" />
              </div>
            ))}
          </div>
        </div>
      </Card>

      {/* Color Palette */}
      <Card className="p-8">
        <h3 className="font-medium mb-6">Color Palette</h3>
        <div className="grid md:grid-cols-2 gap-6">
          {colors.map((color) => (
            <ColorSwatch key={color.id} id={color.id} name={color.name} hex={color.hex} rgb={color.rgb} usage={color.usage} isPrimary={color.id === "primary"} copiedColor={copiedColor} onCopy={copyToClipboard} />
          ))}
        </div>
      </Card>

      {/* Typography */}
      <Card className="p-8">
        <h3 className="font-medium mb-6">Typography — Satoshi</h3>
        <div className="space-y-6">
          <div className="p-4 bg-muted/50 rounded-lg border-2 border-primary/20">
            <p className="text-2xl font-semibold">Satoshi</p>
            <p className="text-xs text-muted-foreground mt-1">Variable font - Weights: 300-700 - Only permitted font</p>
          </div>
          <div className="space-y-3">
            {[["text-5xl font-semibold", "Heading 1", "48px"], ["text-3xl font-semibold", "Heading 2", "30px"], ["text-xl font-semibold", "Heading 3", "20px"], ["text-base", "Body Text", "16px"], ["text-sm", "Small Text", "14px"], ["text-xs", "Caption", "12px"]].map(([cls, label, size]) => (
              <div key={label} className="p-3 border rounded-lg flex items-center justify-between">
                <p className={cls}>{label}</p>
                <p className="text-xs text-muted-foreground">{size}</p>
              </div>
            ))}
          </div>
        </div>
      </Card>

      {/* Grid System */}
      <Card className="p-8">
        <h3 className="font-medium mb-6">Responsive Grid System</h3>
        <div className="space-y-6">
          {[{ device: "Desktop", columns: 12, gutter: "24px", margin: "48px" }, { device: "Tablet", columns: 6, gutter: "16px", margin: "32px" }, { device: "Mobile", columns: 4, gutter: "16px", margin: "16px" }].map((g) => (
            <GridSystemPreview key={g.device} device={g.device} columns={g.columns} gutter={g.gutter} margin={g.margin} />
          ))}
        </div>
      </Card>

      {/* Spacing System */}
      <Card className="p-8">
        <h3 className="font-medium mb-6">Spacing System (4px base)</h3>
        <div className="space-y-3">
          {spacing.map((s) => (<SpacingPreview key={s.name} name={s.name} value={s.value} multiplier={s.multiplier} />))}
        </div>
      </Card>
    </div>
  );
}

export function BrandLayoutPage() {
  return (
    <ComponentShowcase
      title="Brand & Layout Guidelines"
      description="Complete design system reference: CESIONBNK brand identity (Logo with light/dark variants at 4 sizes), color palette (Primary Green #84cc16 + Secondary Navy #1C2D3A with WCAG AAA contrast), typography (Satoshi exclusive, 300-700 weights, 6 scale levels), responsive grid system (12/6/4 columns for desktop/tablet/mobile), and spacing system (4px base unit with 8 levels)."
      category="Design System"
      preview={<BrandLayoutContent />}
      code={`import { Logo } from "@/components/Logo";
import { ColorSwatch } from "@/components/widgets/ColorSwatch";
import { GridSystemPreview } from "@/components/widgets/GridSystemPreview";
import { SpacingPreview } from "@/components/widgets/SpacingPreview";

// Logo with variants
<Logo size="xl" variant="light" />  // xl, lg, md, sm
<Logo size="md" variant="dark" />   // For dark backgrounds

// Colors: Primary #84cc16, Secondary #1C2D3A
// Font: Satoshi (exclusive) — font-family: 'Satoshi', sans-serif
// Grid: 12 cols desktop, 6 tablet, 4 mobile
// Spacing: 4px base unit (xs=4, sm=8, md=12, base=16, lg=24, xl=32, 2xl=48, 3xl=64)`}
      props={[
        { name: "Logo size", type: "'xl' | 'lg' | 'md' | 'sm'", description: "Logo height: xl=48px, lg=40px, md=32px, sm=24px." },
        { name: "Logo variant", type: "'light' | 'dark'", description: "Use 'light' for light backgrounds, 'dark' for dark backgrounds." },
        { name: "ColorSwatch", type: "Component", description: "Color display with hex, rgb, usage, and click-to-copy." },
        { name: "GridSystemPreview", type: "Component", description: "Visual grid preview with device, columns, gutter, margin." },
        { name: "SpacingPreview", type: "Component", description: "Spacing scale display with name, value, and multiplier." },
      ]}
    />
  );
}
