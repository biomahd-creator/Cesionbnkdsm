import { ComponentShowcase } from "../components/ui/component-showcase";
import { PayorCard } from "../components/factoring/PayorCard";

const payorCardCode = `import { PayorCard } from "@/factoring/PayorCard";

export function PayorCardDemo() {
  return (
    <PayorCard 
      payor={{
        id: "p1",
        name: "Almacenes Éxito S.A.",
        nit: "890.900.608-9",
        sector: "Retail",
        creditLimit: 5000000000,
        usedCredit: 1200000000,
        riskScore: 92,
        paymentBehavior: "excellent"
      }}
    />
  );
}`;

export function PayorCardPage() {
  return (
    <ComponentShowcase
      title="Payor Card"
      description="Payor information card with credit limit and risk score."
      category="Business Component"
      preview={
        <div className="w-full max-w-md">
          <PayorCard 
            payor={{
              id: "p1",
              name: "Almacenes Éxito S.A.",
              nit: "890.900.608-9",
              sector: "Retail",
              creditLimit: 5000000000,
              usedCredit: 1200000000,
              riskScore: 92,
              paymentBehavior: "excellent"
            }}
          />
        </div>
      }
      code={payorCardCode}
    />
  );
}