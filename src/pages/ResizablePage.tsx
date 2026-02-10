import { ComponentShowcase } from "../components/ui/component-showcase";
import { ResizablePanelGroup, ResizablePanel, ResizableHandle } from "../components/ui/resizable";

export function ResizablePage() {
  return (
    <ComponentShowcase
      title="Resizable"
      description="Accessible resizable panel groups and layouts with keyboard support."
      category="Layout"
      
      // Main Preview
      preview={
        <ResizablePanelGroup direction="horizontal" className="min-h-[200px] rounded-lg border w-full max-w-md">
          <ResizablePanel defaultSize={25} minSize={15}>
            <div className="flex h-full items-center justify-center p-6">
              <span className="font-semibold">One</span>
            </div>
          </ResizablePanel>
          <ResizableHandle withHandle />
          <ResizablePanel defaultSize={75}>
            <div className="flex h-full items-center justify-center p-6">
              <span className="font-semibold">Two</span>
            </div>
          </ResizablePanel>
        </ResizablePanelGroup>
      }
      
      // Main Code
      code={`import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/components/ui/resizable"

export function ResizableDemo() {
  return (
    <ResizablePanelGroup direction="horizontal">
      <ResizablePanel>One</ResizablePanel>
      <ResizableHandle />
      <ResizablePanel>Two</ResizablePanel>
    </ResizablePanelGroup>
  )
}`}
      
      // Props Documentation
      props={[
        {
          name: "direction",
          type: '"horizontal" | "vertical"',
          default: '"horizontal"',
          description: "Layout direction.",
        }
      ]}
      
      // Examples
      examples={[
        {
          title: "Vertical Layout",
          description: "Resizable panels stacked vertically.",
          preview: (
            <ResizablePanelGroup direction="vertical" className="min-h-[200px] rounded-lg border w-full max-w-md">
              <ResizablePanel defaultSize={25}>
                <div className="flex h-full items-center justify-center p-6">
                  <span className="font-semibold">Header</span>
                </div>
              </ResizablePanel>
              <ResizableHandle withHandle />
              <ResizablePanel defaultSize={75}>
                <div className="flex h-full items-center justify-center p-6">
                  <span className="font-semibold">Content</span>
                </div>
              </ResizablePanel>
            </ResizablePanelGroup>
          ),
          code: `<ResizablePanelGroup direction="vertical">
  <ResizablePanel>Header</ResizablePanel>
  <ResizableHandle />
  <ResizablePanel>Content</ResizablePanel>
</ResizablePanelGroup>`
        },
        {
          title: "Complex Layout",
          description: "Nested resizable panels.",
          preview: (
            <ResizablePanelGroup direction="horizontal" className="min-h-[200px] rounded-lg border w-full max-w-md">
              <ResizablePanel defaultSize={20}>
                <div className="flex h-full items-center justify-center p-6">
                  <span className="font-semibold">Sidebar</span>
                </div>
              </ResizablePanel>
              <ResizableHandle withHandle />
              <ResizablePanel defaultSize={50}>
                <ResizablePanelGroup direction="vertical">
                  <ResizablePanel defaultSize={50}>
                    <div className="flex h-full items-center justify-center p-6">
                      <span className="font-semibold">One</span>
                    </div>
                  </ResizablePanel>
                  <ResizableHandle withHandle />
                  <ResizablePanel defaultSize={50}>
                    <div className="flex h-full items-center justify-center p-6">
                      <span className="font-semibold">Two</span>
                    </div>
                  </ResizablePanel>
                </ResizablePanelGroup>
              </ResizablePanel>
              <ResizableHandle withHandle />
              <ResizablePanel defaultSize={30}>
                <div className="flex h-full items-center justify-center p-6">
                  <span className="font-semibold">Three</span>
                </div>
              </ResizablePanel>
            </ResizablePanelGroup>
          ),
          code: `<ResizablePanelGroup direction="horizontal">
  <ResizablePanel>Sidebar</ResizablePanel>
  <ResizableHandle />
  <ResizablePanel>
    <ResizablePanelGroup direction="vertical">
      <ResizablePanel>One</ResizablePanel>
      <ResizableHandle />
      <ResizablePanel>Two</ResizablePanel>
    </ResizablePanelGroup>
  </ResizablePanel>
  <ResizableHandle />
  <ResizablePanel>Three</ResizablePanel>
</ResizablePanelGroup>`
        }
      ]}
    />
  );
}
