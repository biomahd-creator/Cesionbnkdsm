import { ComponentShowcase } from "../components/ui/component-showcase";
import { InvoiceGenerator, InvoiceData } from "../components/advanced/InvoiceGenerator";

// Example: Factoring service invoice
const factoringData: Partial<InvoiceData> = {
  invoiceNumber: "FACT-2024-001",
  clientName: "Global Corp S.A.",
  clientAddress: "Av. Apoquindo 3000, Office 1205, Las Condes, Santiago",
  clientTaxId: "76.987.654-3",
  clientPhone: "+56 2 2987 6543",
  clientEmail: "finance@corpglobal.cl",
  items: [
    {
      id: "1",
      description: "Factoring Service - Invoice advances for January 2024",
      quantity: 1,
      unitPrice: 2500000,
      total: 2500000,
    },
    {
      id: "2",
      description: "Portfolio management commission",
      quantity: 1,
      unitPrice: 350000,
      total: 350000,
    },
  ],
  notes: "This invoice corresponds to the factoring service provided during the indicated period.",
};

export function InvoiceGeneratorPage() {
  return (
    <ComponentShowcase
      title="Invoice Generator"
      description="Professional invoice generator with interactive form, real-time preview, automatic calculations (subtotal, taxes, discounts), dynamic line items, multi-currency support (CLP, USD, EUR), and PDF export. Use it for factoring services, consulting, and any invoicing workflow."
      category="Advanced"
      preview={
        <InvoiceGenerator
          initialData={factoringData}
          onGenerate={(data) => {
            console.log("Invoice generated:", data);
          }}
        />
      }
      code={`import { InvoiceGenerator, InvoiceData } from "@/components/advanced/InvoiceGenerator";

const initialData: Partial<InvoiceData> = {
  invoiceNumber: "INV-2024-001",
  clientName: "Global Corp S.A.",
  clientTaxId: "76.987.654-3",
  items: [
    {
      id: "1",
      description: "Factoring service",
      quantity: 1,
      unitPrice: 2500000,
      total: 2500000,
    },
  ],
};

<InvoiceGenerator
  initialData={initialData}
  onGenerate={(invoiceData) => {
    console.log("Invoice:", invoiceData);
  }}
/>`}
      props={[
        {
          name: "initialData",
          type: "Partial<InvoiceData>",
          description: "Pre-filled data for the invoice form (client info, items, notes, etc.).",
        },
        {
          name: "showPreview",
          type: "boolean",
          default: "true",
          description: "Whether to show the real-time preview panel alongside the form.",
        },
        {
          name: "onGenerate",
          type: "(data: InvoiceData) => void",
          description: "Callback invoked when the invoice is generated/exported.",
        },
      ]}
      examples={[
        {
          title: "Empty Invoice (Interactive)",
          description: "Start from scratch — fill in the form to create a custom invoice with real-time preview and PDF export.",
          preview: (
            <InvoiceGenerator
              onGenerate={(data) => {
                console.log("New invoice:", data);
              }}
            />
          ),
          code: `<InvoiceGenerator
  onGenerate={(data) => saveInvoice(data)}
/>`,
        },
        {
          title: "Invoice Anatomy",
          description: "The six sections that compose a professional invoice.",
          preview: (
            <div className="grid md:grid-cols-3 gap-4">
              <div className="p-4 border rounded-lg space-y-2">
                <h4 className="font-medium">Header</h4>
                <p className="text-sm text-muted-foreground">
                  Company logo, contact info, invoice number and dates.
                </p>
              </div>
              <div className="p-4 border rounded-lg space-y-2">
                <h4 className="font-medium">Client</h4>
                <p className="text-sm text-muted-foreground">
                  Name, address, tax ID, phone and billing email.
                </p>
              </div>
              <div className="p-4 border rounded-lg space-y-2">
                <h4 className="font-medium">Line Items</h4>
                <p className="text-sm text-muted-foreground">
                  Description, quantity, unit price, and line total.
                </p>
              </div>
              <div className="p-4 border rounded-lg space-y-2">
                <h4 className="font-medium">Calculations</h4>
                <p className="text-sm text-muted-foreground">
                  Subtotal, tax (VAT), discounts, and final total.
                </p>
              </div>
              <div className="p-4 border rounded-lg space-y-2">
                <h4 className="font-medium">Notes</h4>
                <p className="text-sm text-muted-foreground">
                  Additional info, special instructions, or payment details.
                </p>
              </div>
              <div className="p-4 border rounded-lg space-y-2">
                <h4 className="font-medium">Terms</h4>
                <p className="text-sm text-muted-foreground">
                  Payment conditions, deadlines, and return policies.
                </p>
              </div>
            </div>
          ),
          code: `// InvoiceData type includes all sections:
// invoiceNumber, clientName, clientAddress, clientTaxId,
// items[], discount, notes, terms, taxRate, currency`,
        },
      ]}
    />
  );
}