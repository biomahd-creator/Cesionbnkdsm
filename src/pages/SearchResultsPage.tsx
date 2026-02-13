import { ComponentShowcase } from "../components/ui/component-showcase";
import { SearchResults } from "../components/patterns/SearchResults";

const code = `import { SearchResults } from "@/components/patterns/SearchResults";

export function SearchResultsDemo() {
  return (
    <SearchResults 
      query="Invoice"
      onSelect={() => {}}
      results={[
        { id: "1", type: "invoice", title: "Invoice #12345", subtitle: "Client ABC", status: "Pending" },
        { id: "2", type: "client", title: "Factoring Corp SAS", subtitle: "NIT 900.123.456" },
        { id: "3", type: "operation", title: "Operation OP-998", subtitle: "2 days ago", status: "Approved" },
      ]}
    />
  );
}`;

export function SearchResultsPage() {
  return (
    <ComponentShowcase
      title="Search Results"
      description="Categorized search results list."
      category="Business Pattern"
      preview={
        <SearchResults 
          query="Invoice"
          onSelect={() => {}}
          results={[
            { id: "1", type: "invoice", title: "Invoice #12345", subtitle: "Client ABC", status: "Pending" },
            { id: "2", type: "client", title: "Factoring Corp SAS", subtitle: "NIT 900.123.456" },
            { id: "3", type: "operation", title: "Operation OP-998", subtitle: "2 days ago", status: "Approved" },
          ]}
        />
      }
      code={code}
    />
  );
}