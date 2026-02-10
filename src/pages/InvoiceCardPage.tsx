import { ComponentShowcase } from "../components/ui/component-showcase";
import { InvoiceCard } from "../factoring/InvoiceCard";

const invoiceCardCode = `import { InvoiceCard } from "@/factoring/InvoiceCard";

export function InvoiceCardDemo() {
  return (
    <div className="space-y-4 max-w-md">
      <InvoiceCard 
        invoice={{
          id: "1",
          number: "FV-9921",
          clientName: "Logística y Transportes del Norte SAS",
          amount: 45000000,
          dueDate: "15 Oct 2024",
          issueDate: "15 Ago 2024",
          status: "pending",
          probability: 85
        }}
      />
      <InvoiceCard 
        invoice={{
          id: "2",
          number: "FV-9922",
          clientName: "Distribuidora de Alimentos",
          amount: 12500000,
          dueDate: "01 Sep 2024",
          issueDate: "01 Ago 2024",
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
      description="Tarjeta de resumen de factura con estado y probabilidad de pago."
      category="Business Component"
      preview={
        <div className="space-y-4 w-full max-w-md">
          <InvoiceCard 
            invoice={{
              id: "1",
              number: "FV-9921",
              clientName: "Logística y Transportes del Norte SAS",
              amount: 45000000,
              dueDate: "15 Oct 2024",
              issueDate: "15 Ago 2024",
              status: "pending",
              probability: 85
            }}
          />
          <InvoiceCard 
            invoice={{
              id: "2",
              number: "FV-9922",
              clientName: "Distribuidora de Alimentos",
              amount: 12500000,
              dueDate: "01 Sep 2024",
              issueDate: "01 Ago 2024",
              status: "overdue"
            }}
          />
        </div>
      }
      code={invoiceCardCode}
      props={[
        { name: "invoice", type: "InvoiceData", description: "Datos de la factura: id, invoiceNumber, clientName, amount, dueDate, issueDate, status ('pending'|'approved'|'rejected'|'paid'|'overdue'), probability.", required: true },
        { name: "className", type: "string", description: "Clases adicionales para la card." },
        { name: "onAction", type: "(action: string) => void", description: "Callback al seleccionar una acción del menú contextual (ver detalles, aprobar, rechazar, etc.)." },
      ]}
      examples={[
        {
          title: "Factura aprobada",
          description: "Card con estado aprobado y alta probabilidad.",
          preview: (
            <div className="w-full max-w-md">
              <InvoiceCard
                invoice={{
                  id: "3",
                  number: "FV-9923",
                  clientName: "Construcciones del Pacífico",
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
    clientName: "Construcciones del Pacífico",
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
          title: "Factura pagada",
          description: "Card con estado de pago completado.",
          preview: (
            <div className="w-full max-w-md">
              <InvoiceCard
                invoice={{
                  id: "4",
                  number: "FV-9900",
                  clientName: "Alimentos del Valle SA",
                  amount: 22000000,
                  dueDate: "01 Oct 2024",
                  issueDate: "01 Ago 2024",
                  status: "paid",
                }}
              />
            </div>
          ),
          code: `<InvoiceCard
  invoice={{
    id: "4",
    number: "FV-9900",
    clientName: "Alimentos del Valle SA",
    amount: 22000000,
    dueDate: "01 Oct 2024",
    issueDate: "01 Ago 2024",
    status: "paid",
  }}
/>`,
        },
      ]}
    />
  );
}