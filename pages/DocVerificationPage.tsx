import { ComponentShowcase } from "../components/ui/component-showcase";
import { DocumentVerificationStatus } from "../components/factoring/DocumentVerificationStatus";

const docVerificationCode = `import { DocumentVerificationStatus } from "@/components/factoring/DocumentVerificationStatus";

export function DocVerificationDemo() {
  const documents = [
    { id: "1", name: "Chamber of Commerce", status: "verified" as const, timestamp: "Verified today" },
    { id: "2", name: "Tax ID", status: "verified" as const, timestamp: "Verified yesterday" },
    { id: "3", name: "Financial Statements", status: "pending" as const, message: "Under analyst review" },
    { id: "4", name: "Shareholder Structure", status: "missing" as const, required: true },
    { id: "5", name: "Bank Reference", status: "rejected" as const, message: "Illegible document" },
  ];

  return <DocumentVerificationStatus 
    documents={documents}
    onUpload={(id) => alert(\`Upload clicked for \${id}\`)}
  />;
}`;

export function DocVerificationPage() {
  const documents = [
    { id: "1", name: "Chamber of Commerce", status: "verified" as const, timestamp: "Verified today" },
    { id: "2", name: "Tax ID", status: "verified" as const, timestamp: "Verified yesterday" },
    { id: "3", name: "Financial Statements", status: "pending" as const, message: "Under analyst review" },
    { id: "4", name: "Shareholder Structure", status: "missing" as const, required: true },
    { id: "5", name: "Bank Reference", status: "rejected" as const, message: "Illegible document" },
  ];

  return (
    <ComponentShowcase
      title="Document Verification"
      description="Document status list with upload actions."
      category="Business Component"
      preview={
        <div className="w-full max-w-md border rounded-lg p-4 bg-background">
          <DocumentVerificationStatus 
            documents={documents}
            onUpload={(id) => alert(`Upload clicked for ${id}`)}
          />
        </div>
      }
      code={docVerificationCode}
      props={[
        { name: "documents", type: "DocumentItem[]", description: "Array of documents. Each one: id, name, status ('verified'|'pending'|'rejected'|'missing'|'processing'), timestamp, message, required.", required: true },
        { name: "className", type: "string", description: "Additional classes for the container." },
        { name: "onUpload", type: "(docId: string) => void", description: "Callback when clicking upload/re-upload a document." },
      ]}
      examples={[
        {
          title: "All verified",
          description: "Complete and approved documentation.",
          preview: (
            <div className="w-full max-w-md border rounded-lg p-4 bg-background">
              <DocumentVerificationStatus
                documents={[
                  { id: "1", name: "Chamber of Commerce", status: "verified" as const, timestamp: "Verified today" },
                  { id: "2", name: "Tax ID", status: "verified" as const, timestamp: "Verified yesterday" },
                  { id: "3", name: "Financial Statements", status: "verified" as const, timestamp: "Verified 2 days ago" },
                ]}
              />
            </div>
          ),
          code: `<DocumentVerificationStatus
  documents={[
    { id: "1", name: "Chamber of Commerce", status: "verified" as const, timestamp: "Verified today" },
    { id: "2", name: "Tax ID", status: "verified" as const, timestamp: "Verified yesterday" },
    { id: "3", name: "Financial Statements", status: "verified" as const, timestamp: "2 days ago" },
  ]}
/>`,
        },
        {
          title: "Processing",
          description: "Documents being analyzed by the system.",
          preview: (
            <div className="w-full max-w-md border rounded-lg p-4 bg-background">
              <DocumentVerificationStatus
                documents={[
                  { id: "1", name: "Signed Promissory Note", status: "processing" as const, message: "Validating digital signature..." },
                  { id: "2", name: "Endorsement Letter", status: "processing" as const, message: "Verifying authenticity..." },
                  { id: "3", name: "Electronic Invoice", status: "verified" as const, timestamp: "Verified" },
                ]}
              />
            </div>
          ),
          code: `<DocumentVerificationStatus
  documents={[
    { id: "1", name: "Signed Promissory Note", status: "processing" as const, message: "Validating digital signature..." },
    { id: "2", name: "Endorsement Letter", status: "processing" as const, message: "Verifying authenticity..." },
    { id: "3", name: "Electronic Invoice", status: "verified" as const, timestamp: "Verified" },
  ]}
  onUpload={(id) => handleUpload(id)}
/>`,
        },
      ]}
    />
  );
}