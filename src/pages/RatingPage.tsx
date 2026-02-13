import { ComponentShowcase } from "../components/ui/component-showcase";
import { Rating } from "../components/advanced/RatingComponent";

export function RatingPage() {
  return (
    <ComponentShowcase
      title="Rating"
      description="Interactive star rating component with different sizes and states. Use it for customer feedback, risk evaluation scores, and quality assessments in factoring workflows."
      category="Advanced"
      preview={
        <div className="flex flex-col gap-6">
          <div className="flex items-center gap-4">
            <span className="text-sm w-24">Interactive:</span>
            <Rating value={0} />
          </div>
          <div className="flex items-center gap-4">
            <span className="text-sm w-24">Preset (4/5):</span>
            <Rating value={4} />
          </div>
          <div className="flex items-center gap-4">
            <span className="text-sm w-24">Read only:</span>
            <Rating value={5} readonly />
          </div>
        </div>
      }
      code={`import { Rating } from "@/components/advanced/RatingComponent";

// Interactive
<Rating value={0} onChange={(v) => console.log(v)} />

// Preset value
<Rating value={4} />

// Read-only
<Rating value={5} readonly />`}
      props={[
        {
          name: "value",
          type: "number",
          default: "0",
          description: "Current rating value (0-5).",
        },
        {
          name: "onChange",
          type: "(value: number) => void",
          description: "Callback when the user selects a star.",
        },
        {
          name: "size",
          type: '"sm" | "md" | "lg"',
          default: '"md"',
          description: "Size of the star icons.",
        },
        {
          name: "readonly",
          type: "boolean",
          default: "false",
          description: "When true, the rating is display-only and not interactive.",
        },
      ]}
      examples={[
        {
          title: "Sizes",
          description: "Available size variants for different contexts.",
          preview: (
            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <span className="text-sm w-20">Small:</span>
                <Rating size="sm" value={4} readonly />
              </div>
              <div className="flex items-center gap-4">
                <span className="text-sm w-20">Medium:</span>
                <Rating size="md" value={3} readonly />
              </div>
              <div className="flex items-center gap-4">
                <span className="text-sm w-20">Large:</span>
                <Rating size="lg" value={5} readonly />
              </div>
            </div>
          ),
          code: `<Rating size="sm" value={4} readonly />
<Rating size="md" value={3} readonly />
<Rating size="lg" value={5} readonly />`,
        },
        {
          title: "Use Cases",
          description: "Common factoring-domain use cases with read-only ratings.",
          preview: (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="p-4 border rounded-lg">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm font-medium">Service Quality</span>
                  <Rating value={5} readonly size="sm" />
                </div>
                <p className="text-xs text-muted-foreground">Customer rating for the process</p>
              </div>
              <div className="p-4 border rounded-lg">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm font-medium">Risk Level</span>
                  <Rating value={2} readonly size="sm" />
                </div>
                <p className="text-xs text-muted-foreground">Credit risk evaluation</p>
              </div>
            </div>
          ),
          code: `<Rating value={5} readonly size="sm" />  // Service Quality
<Rating value={2} readonly size="sm" />  // Risk Level`,
        },
      ]}
    />
  );
}
