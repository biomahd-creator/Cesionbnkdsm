import { useState } from "react";
import { Card } from "../components/ui/card";
import { Label } from "../components/ui/label";
import { Input } from "../components/ui/input";
import { Button } from "../components/ui/button";
import { Separator } from "../components/ui/separator";
import { Badge } from "../components/ui/badge";
import { ContextualHelp } from "../components/help/ContextualHelp";
import { ProductTour } from "../components/help/ProductTour";
import { vinculacionTourSteps } from "../components/help/tourSteps";
import { BookOpen, Code, Lightbulb } from "lucide-react";

/**
 * Demo page showing how to integrate the Help System
 * into your application components
 */
export function HelpSystemDemoPage() {
  const [companyName, setCompanyName] = useState("");
  const [taxId, setTaxId] = useState("");
  const [email, setEmail] = useState("");

  return (
    <div className="space-y-8">
      {/* Header */}
      <div>
        <div className="flex items-center justify-between mb-2">
          <h1 className="text-3xl font-semibold text-secondary">
            Help System Integration Demo
          </h1>
          <Badge variant="secondary" className="text-xs">
            NEW
          </Badge>
        </div>
        <p className="text-sm text-muted-foreground max-w-3xl">
          This page demonstrates the three help systems: Contextual Help (tooltips + popovers),
          Help Center (documentation panel), and Product Tour (guided walkthrough).
        </p>
      </div>

      <Separator />

      {/* Product Tour Demo */}
      <Card className="p-6">
        <div className="flex items-start justify-between mb-6">
          <div>
            <h2 className="text-xl font-semibold text-secondary mb-2">
              Product Tour System
            </h2>
            <p className="text-sm text-muted-foreground">
              Guide users through your application with step-by-step interactive tours
            </p>
          </div>
          <ProductTour
            steps={vinculacionTourSteps}
            tourId="demo-tour"
            showButton={true}
            buttonText="Start Demo Tour"
            buttonVariant="default"
          />
        </div>

        <div className="bg-muted/30 rounded-lg p-4 space-y-3">
          <div className="flex items-start gap-3">
            <Lightbulb className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
            <div className="space-y-2 text-sm">
              <p className="font-medium text-foreground">
                How Product Tours Work
              </p>
              <ul className="list-disc list-inside text-muted-foreground space-y-1">
                <li>Automatically shows on first visit (configurable)</li>
                <li>Users can restart the tour anytime via button</li>
                <li>Dark overlay highlights current step</li>
                <li>Integrates with your design system tokens</li>
                <li>Mobile responsive</li>
              </ul>
            </div>
          </div>
        </div>
      </Card>

      {/* Contextual Help Demo */}
      <Card className="p-6">
        <div className="mb-6">
          <h2 className="text-xl font-semibold text-secondary mb-2">
            Contextual Help System
          </h2>
          <p className="text-sm text-muted-foreground">
            Inline help directly where users need it - tooltips for quick hints and popovers for detailed explanations
          </p>
        </div>

        <div className="space-y-6">
          {/* Example 1: Both Tooltip and Popover */}
          <div id="tour-step-nit">
            <div className="flex items-center gap-2 mb-2">
              <Label htmlFor="tax-id">Company Tax ID (NIT)</Label>
              <ContextualHelp
                quickHelp="Enter without verification digit"
                detailedHelp="The Tax Identification Number (NIT) is a unique identifier assigned to your company by the tax authority. Enter only the numbers without the verification digit. Example: If your NIT is 900123456-7, enter only 900123456."
                title="About Tax ID (NIT)"
              />
            </div>
            <Input
              id="tax-id"
              placeholder="900123456"
              value={taxId}
              onChange={(e) => setTaxId(e.target.value)}
            />
            <p className="text-xs text-muted-foreground mt-1">
              9 digits without verification digit
            </p>
          </div>

          {/* Example 2: Tooltip Only */}
          <div id="tour-step-company-name">
            <div className="flex items-center gap-2 mb-2">
              <Label htmlFor="company-name">Company Name</Label>
              <ContextualHelp
                quickHelp="Enter the legal name exactly as it appears on official documents"
                tooltipOnly={true}
              />
            </div>
            <Input
              id="company-name"
              placeholder="Acme Corporation S.A.S."
              value={companyName}
              onChange={(e) => setCompanyName(e.target.value)}
            />
          </div>

          {/* Example 3: Popover Only */}
          <div>
            <div className="flex items-center gap-2 mb-2">
              <Label htmlFor="email">Contact Email</Label>
              <ContextualHelp
                detailedHelp="This email will be used for all official communications regarding your factoring operations. Make sure it's an email you check regularly. You can update this email later in Settings."
                title="Contact Email"
                popoverOnly={true}
              />
            </div>
            <Input
              id="email"
              type="email"
              placeholder="contact@company.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
        </div>

        <Separator className="my-6" />

        <div className="bg-muted/30 rounded-lg p-4 space-y-3">
          <div className="flex items-start gap-3">
            <Code className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
            <div className="space-y-2 text-sm">
              <p className="font-medium text-foreground">
                Usage Example
              </p>
              <pre className="bg-background border border-border rounded p-3 overflow-x-auto text-xs">
{`<ContextualHelp
  quickHelp="Brief hint shown on hover"
  detailedHelp="Detailed explanation..."
  title="Optional Title"
/>`}
              </pre>
            </div>
          </div>
        </div>
      </Card>

      {/* Help Center Demo */}
      <Card className="p-6">
        <div className="mb-6">
          <h2 className="text-xl font-semibold text-secondary mb-2">
            Help Center System
          </h2>
          <p className="text-sm text-muted-foreground">
            Comprehensive documentation accessible from the header (look for the "Help" button)
          </p>
        </div>

        <div className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="border border-border rounded-lg p-4">
              <h3 className="font-semibold text-sm text-foreground mb-2">
                📚 FAQs
              </h3>
              <p className="text-xs text-muted-foreground">
                Searchable frequently asked questions organized by category
              </p>
            </div>

            <div className="border border-border rounded-lg p-4">
              <h3 className="font-semibold text-sm text-foreground mb-2">
                📖 Guides
              </h3>
              <p className="text-xs text-muted-foreground">
                Step-by-step guides and documentation articles
              </p>
            </div>

            <div className="border border-border rounded-lg p-4">
              <h3 className="font-semibold text-sm text-foreground mb-2">
                🎥 Videos
              </h3>
              <p className="text-xs text-muted-foreground">
                Video tutorials for visual learners
              </p>
            </div>
          </div>

          <div className="bg-primary/10 border border-primary/20 rounded-lg p-4">
            <p className="text-sm text-foreground">
              <span className="font-semibold">Try it now:</span> Click the "Help" button in the header to open the Help Center
            </p>
          </div>
        </div>
      </Card>

      {/* Implementation Guide */}
      <Card className="p-6">
        <div className="mb-6">
          <div className="flex items-center gap-2 mb-2">
            <BookOpen className="h-5 w-5 text-primary" />
            <h2 className="text-xl font-semibold text-secondary">
              Implementation Guide
            </h2>
          </div>
          <p className="text-sm text-muted-foreground">
            How to integrate these help systems into your components
          </p>
        </div>

        <div className="space-y-6">
          <div>
            <h3 className="font-semibold text-sm text-foreground mb-3">
              1. Import the Components
            </h3>
            <pre className="bg-muted rounded-lg p-4 overflow-x-auto text-xs">
{`import { ContextualHelp } from "../help/ContextualHelp";
import { ProductTour } from "../help/ProductTour";
import { vinculacionTourSteps } from "../help/tourSteps";`}
            </pre>
          </div>

          <div>
            <h3 className="font-semibold text-sm text-foreground mb-3">
              2. Add Contextual Help to Form Fields
            </h3>
            <pre className="bg-muted rounded-lg p-4 overflow-x-auto text-xs">
{`<div className="flex items-center gap-2">
  <Label>Field Name</Label>
  <ContextualHelp
    quickHelp="Quick hint"
    detailedHelp="Detailed explanation..."
    title="Help Title"
  />
</div>
<Input ... />`}
            </pre>
          </div>

          <div>
            <h3 className="font-semibold text-sm text-foreground mb-3">
              3. Add Product Tour Button
            </h3>
            <pre className="bg-muted rounded-lg p-4 overflow-x-auto text-xs">
{`<ProductTour
  steps={vinculacionTourSteps}
  tourId="my-unique-tour"
  autoStart={false}
  showButton={true}
  buttonText="Start Tour"
/>`}
            </pre>
          </div>

          <div>
            <h3 className="font-semibold text-sm text-foreground mb-3">
              4. Add Tour Step IDs to Elements
            </h3>
            <pre className="bg-muted rounded-lg p-4 overflow-x-auto text-xs">
{`<div id="tour-step-nit">
  <Label>Company NIT</Label>
  <Input ... />
</div>`}
            </pre>
          </div>
        </div>
      </Card>

      {/* Benefits */}
      <Card className="p-6 bg-gradient-to-br from-primary/5 to-primary/10 border-primary/20">
        <h2 className="text-xl font-semibold text-secondary mb-4">
          Benefits of the Help System
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="flex items-start gap-3">
            <div className="bg-primary text-white rounded-full w-6 h-6 flex items-center justify-center flex-shrink-0 text-xs font-bold">
              ✓
            </div>
            <div>
              <p className="font-semibold text-sm text-foreground">
                Reduced Support Tickets
              </p>
              <p className="text-xs text-muted-foreground">
                Users find answers themselves
              </p>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <div className="bg-primary text-white rounded-full w-6 h-6 flex items-center justify-center flex-shrink-0 text-xs font-bold">
              ✓
            </div>
            <div>
              <p className="font-semibold text-sm text-foreground">
                Better User Experience
              </p>
              <p className="text-xs text-muted-foreground">
                Help exactly where needed
              </p>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <div className="bg-primary text-white rounded-full w-6 h-6 flex items-center justify-center flex-shrink-0 text-xs font-bold">
              ✓
            </div>
            <div>
              <p className="font-semibold text-sm text-foreground">
                Faster Onboarding
              </p>
              <p className="text-xs text-muted-foreground">
                Guided tours reduce learning curve
              </p>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <div className="bg-primary text-white rounded-full w-6 h-6 flex items-center justify-center flex-shrink-0 text-xs font-bold">
              ✓
            </div>
            <div>
              <p className="font-semibold text-sm text-foreground">
                Accessible Design
              </p>
              <p className="text-xs text-muted-foreground">
                WCAG AA compliant help system
              </p>
            </div>
          </div>
        </div>
      </Card>

      {/* Installation Note */}
      <div className="bg-muted/30 border border-border rounded-lg p-4">
        <p className="text-sm text-foreground mb-2">
          <span className="font-semibold">📦 Installation Required:</span>
        </p>
        <p className="text-xs text-muted-foreground mb-3">
          The Product Tour requires the driver.js library. Install it with:
        </p>
        <pre className="bg-background border border-border rounded p-2 text-xs">
          npm install driver.js
        </pre>
      </div>
    </div>
  );
}
