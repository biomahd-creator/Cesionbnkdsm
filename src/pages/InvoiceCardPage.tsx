import { ComponentShowcase } from "../components/ui/component-showcase";
import { InvoiceCard } from "../components/factoring/InvoiceCard";

const invoiceCardCode = `import { InvoiceCard } from "@/factoring/InvoiceCard";

export function InvoiceCardDemo() {
  return (
    <div className="space-y-4 max-w-md">
      <InvoiceCard 
        invoice={{
          id: "1",
          number: "FV-9921",
          clientName: "Northern Logistics & Transport SAS",
          amount: 45000000,
          dueDate: "15 Oct 2024",
          issueDate: "15 Aug 2024",
          status: "pending",
          probability: 85
        }}
      />
      <InvoiceCard 
        invoice={{
          id: "2",
          number: "FV-9922",
          clientName: "Food Distributors Inc.",
          amount: 12500000,
          dueDate: "01 Sep 2024",
          issueDate: "01 Aug 2024",
          status: "overdue"
        }}
      />
    </div>
  );
}`;

export function InvoiceCardPage() {
  return (
    <ComponentShowcase
      title="Invoice Card"
      description="Invoice summary card with status and payment probability."
      category="Business Component"
      preview={
        <div className="space-y-4 w-full max-w-md">
          <InvoiceCard 
            invoice={{
              id: "1",
              number: "FV-9921",
              clientName: "Northern Logistics & Transport SAS",
              amount: 45000000,
              dueDate: "15 Oct 2024",
              issueDate: "15 Aug 2024",
              status: "pending",
              probability: 85
            }}
          />
          <InvoiceCard 
            invoice={{
              id: "2",
              number: "FV-9922",
              clientName: "Food Distributors Inc.",
              amount: 12500000,
              dueDate: "01 Sep 2024",
              issueDate: "01 Aug 2024",
              status: "overdue"
            }}
          />
        </div>
      }
      code={invoiceCardCode}
      props={[
        { name: "invoice", type: "InvoiceData", description: "Invoice data: id, invoiceNumber, clientName, amount, dueDate, issueDate, status ('pending'|'approved'|'rejected'|'paid'|'overdue'), probability.", required: true },
        { name: "className", type: "string", description: "Additional classes for the card." },
        { name: "onAction", type: "(action: string) => void", description: "Callback when selecting a contextual menu action (view details, approve, reject, etc.)." },
      ]}
      examples={[
        {
          title: "Approved Invoice",
          description: "Card with approved status and high probability.",
          preview: (
            <div className="w-full max-w-md">
              <InvoiceCard
                invoice={{
                  id: "3",
                  number: "FV-9923",
                  clientName: "Pacific Construction Co.",
                  amount: 78500000,
                  dueDate: "20 Nov 2024",
                  issueDate: "20 Sep 2024",
                  status: "approved",
                  probability: 95,
                }}
              />
            </div>
          ),
          code: `<InvoiceCard
  invoice={{
    id: "3",
    number: "FV-9923",
    clientName: "Pacific Construction Co.",
    amount: 78500000,
    dueDate: "20 Nov 2024",
    issueDate: "20 Sep 2024",
    status: "approved",
    probability: 95,
  }}
  onAction={(action) => console.log(action)}
/>`,
        },
        {
          title: "Paid Invoice",
          description: "Card with completed payment status.",
          preview: (
            <div className="w-full max-w-md">
              <InvoiceCard
                invoice={{
                  id: "4",
                  number: "FV-9900",
                  clientName: "Valley Foods SA",
                  amount: 22000000,
                  dueDate: "01 Oct 2024",
                  issueDate: "01 Aug 2024",
                  status: "paid",
                }}
              />
            </div>
          ),
          code: `<InvoiceCard
  invoice={{
    id: "4",
    number: "FV-9900",
    clientName: "Valley Foods SA",
    amount: 22000000,
    dueDate: "01 Oct 2024",
    issueDate: "01 Aug 2024",
    status: "paid",
  }}
/>`,
        },
      ]}
    />
  );
}