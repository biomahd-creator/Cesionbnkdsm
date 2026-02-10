import { ComponentShowcase } from "../components/ui/component-showcase";
import { TransferList } from "../components/advanced/TransferList";

const transferListCode = `import { TransferList } from "@/components/advanced/TransferList";

export function TransferListDemo() {
  const items = [
    { id: "1", label: "Factura INV-001" },
    { id: "2", label: "Factura INV-002" },
    { id: "3", label: "Factura INV-003" },
    { id: "4", label: "Factura INV-004", disabled: true },
    { id: "5", label: "Factura INV-005" },
  ];

  return <TransferList items={items} />;
}`;

export function TransferListPage() {
  const items = [
    { id: "1", label: "Factura INV-001" },
    { id: "2", label: "Factura INV-002" },
    { id: "3", label: "Factura INV-003" },
    { id: "4", label: "Factura INV-004", disabled: true },
    { id: "5", label: "Factura INV-005" },
  ];

  return (
    <ComponentShowcase
      title="Transfer List"
      description="Mueve elementos entre dos listas (Origen y Destino)."
      category="Advanced"
      preview={<TransferList items={items} />}
      code={transferListCode}
    />
  );
}
