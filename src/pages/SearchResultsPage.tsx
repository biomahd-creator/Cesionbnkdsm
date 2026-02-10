import { ComponentShowcase } from "../components/ui/component-showcase";
import { SearchResults } from "../components/patterns/SearchResults";

const code = `import { SearchResults } from "@/components/patterns/SearchResults";

export function SearchResultsDemo() {
  return (
    <SearchResults 
      query="Factura"
      onSelect={() => {}}
      results={[
        { id: "1", type: "invoice", title: "Factura #12345", subtitle: "Cliente ABC", status: "Pendiente" },
        { id: "2", type: "client", title: "Empresa Factoring SAS", subtitle: "NIT 900.123.456" },
        { id: "3", type: "operation", title: "Operación OP-998", subtitle: "Hace 2 días", status: "Aprobada" },
      ]}
    />
  );
}`;

export function SearchResultsPage() {
  return (
    <ComponentShowcase
      title="Search Results"
      description="Lista de resultados de búsqueda categorizados."
      category="Business Pattern"
      preview={
        <SearchResults 
          query="Factura"
          onSelect={() => {}}
          results={[
            { id: "1", type: "invoice", title: "Factura #12345", subtitle: "Cliente ABC", status: "Pendiente" },
            { id: "2", type: "client", title: "Empresa Factoring SAS", subtitle: "NIT 900.123.456" },
            { id: "3", type: "operation", title: "Operación OP-998", subtitle: "Hace 2 días", status: "Aprobada" },
          ]}
        />
      }
      code={code}
    />
  );
}
