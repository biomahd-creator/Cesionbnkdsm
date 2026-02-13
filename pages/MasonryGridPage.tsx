import { ComponentShowcase } from "../components/ui/component-showcase";
import { MasonryGrid } from "../components/advanced/MasonryGrid";

const masonryCode = `import { MasonryGrid } from "@/components/advanced/MasonryGrid";

export function MasonryDemo() {
  return (
    <MasonryGrid gutter="16px">
      {Array.from({ length: 8 }).map((_, i) => (
        <div 
          key={i} 
          className="bg-muted/30 rounded-lg border p-4 flex items-center justify-center"
          style={{ height: \`\${Math.floor(Math.random() * 200) + 100}px\` }}
        >
          Card {i + 1}
        </div>
      ))}
    </MasonryGrid>
  );
}`;

export function MasonryGridPage() {
  return (
    <ComponentShowcase
      title="Masonry Grid"
      description="Pinterest-style grid that optimizes vertical space."
      category="Advanced"
      preview={
        <MasonryGrid gutter="16px">
          {Array.from({ length: 8 }).map((_, i) => (
            <div 
              key={i} 
              className="bg-muted/30 rounded-lg border p-4 flex items-center justify-center w-full"
              style={{ height: `${Math.floor(Math.random() * 200) + 100}px` }}
            >
              Card {i + 1}
            </div>
          ))}
        </MasonryGrid>
      }
      code={masonryCode}
      props={[
        { name: "children", type: "ReactNode", description: "Child elements distributed in the masonry grid.", required: true },
        { name: "columnsCountBreakPoints", type: "{ [breakpoint: number]: columns }", default: "{ 350: 1, 750: 2, 900: 3 }", description: "Map of breakpoints (px) to number of columns. Automatically responsive." },
        { name: "gutter", type: "string", default: "\"1rem\"", description: "Space between grid items (CSS value)." },
      ]}
      examples={[
        {
          title: "Fixed 2 Columns",
          description: "Masonry grid with 2 columns and wide gutter.",
          preview: (
            <MasonryGrid columnsCountBreakPoints={{ 350: 1, 750: 2 }} gutter="24px">
              {[120, 180, 100, 160, 140, 200].map((h, i) => (
                <div
                  key={i}
                  className="bg-primary/10 rounded-lg border border-primary/20 p-4 flex items-center justify-center w-full"
                  style={{ height: `${h}px` }}
                >
                  Item {i + 1}
                </div>
              ))}
            </MasonryGrid>
          ),
          code: `<MasonryGrid
  columnsCountBreakPoints={{ 350: 1, 750: 2 }}
  gutter="24px"
>
  {items.map((item) => (
    <Card key={item.id} style={{ height: item.height }}>
      {item.content}
    </Card>
  ))}
</MasonryGrid>`,
        },
        {
          title: "4 Responsive Columns",
          description: "Grid with breakpoints for 1→2→3→4 columns.",
          preview: (
            <MasonryGrid columnsCountBreakPoints={{ 350: 1, 600: 2, 800: 3, 1100: 4 }} gutter="12px">
              {[90, 130, 70, 110, 100, 150, 80, 120].map((h, i) => (
                <div
                  key={i}
                  className="bg-muted/50 rounded-md border p-3 flex items-center justify-center w-full text-sm"
                  style={{ height: `${h}px` }}
                >
                  {i + 1}
                </div>
              ))}
            </MasonryGrid>
          ),
          code: `<MasonryGrid
  columnsCountBreakPoints={{ 350: 1, 600: 2, 800: 3, 1100: 4 }}
  gutter="12px"
>
  {cards.map((card) => (
    <div key={card.id} style={{ height: card.height }}>
      {card.content}
    </div>
  ))}
</MasonryGrid>`,
        },
      ]}
    />
  );
}