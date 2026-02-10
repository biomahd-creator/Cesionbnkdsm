import { ComponentShowcase } from "../components/ui/component-showcase";
import { DocumentVerificationStatus } from "../factoring/DocumentVerificationStatus";

const docVerificationCode = `import { DocumentVerificationStatus } from "@/factoring/DocumentVerificationStatus";

export function DocVerificationDemo() {
  const documents = [
    { id: "1", name: "Cámara de Comercio", status: "verified", timestamp: "Verificado hoy" },
    { id: "2", name: "RUT", status: "verified", timestamp: "Verificado ayer" },
    { id: "3", name: "Estados Financieros", status: "pending", message: "En revisión por analista" },
    { id: "4", name: "Composición Accionaria", status: "missing", required: true },
    { id: "5", name: "Referencia Bancaria", status: "rejected", message: "Documento ilegible" },
  ];

  return <DocumentVerificationStatus 
    documents={documents}
    onUpload={(id) => alert(\`Upload clicked for \${id}\`)}
  />;
}`;

export function DocVerificationPage() {
  const documents = [
    { id: "1", name: "Cámara de Comercio", status: "verified", timestamp: "Verificado hoy" },
    { id: "2", name: "RUT", status: "verified", timestamp: "Verificado ayer" },
    { id: "3", name: "Estados Financieros", status: "pending", message: "En revisión por analista" },
    { id: "4", name: "Composición Accionaria", status: "missing", required: true },
    { id: "5", name: "Referencia Bancaria", status: "rejected", message: "Documento ilegible" },
  ];

  return (
    <ComponentShowcase
      title="Document Verification"
      description="Lista de estado de documentos con acciones de carga."
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
        { name: "documents", type: "DocumentItem[]", description: "Array de documentos. Cada uno: id, name, status ('verified'|'pending'|'rejected'|'missing'|'processing'), timestamp, message, required.", required: true },
        { name: "className", type: "string", description: "Clases adicionales para el contenedor." },
        { name: "onUpload", type: "(docId: string) => void", description: "Callback al clickear subir/resubir un documento." },
      ]}
      examples={[
        {
          title: "Todos verificados",
          description: "Documentación completa y aprobada.",
          preview: (
            <div className="w-full max-w-md border rounded-lg p-4 bg-background">
              <DocumentVerificationStatus
                documents={[
                  { id: "1", name: "Cámara de Comercio", status: "verified", timestamp: "Verificado hoy" },
                  { id: "2", name: "RUT", status: "verified", timestamp: "Verificado ayer" },
                  { id: "3", name: "Estados Financieros", status: "verified", timestamp: "Verificado hace 2 días" },
                ]}
              />
            </div>
          ),
          code: `<DocumentVerificationStatus
  documents={[
    { id: "1", name: "Cámara de Comercio", status: "verified", timestamp: "Verificado hoy" },
    { id: "2", name: "RUT", status: "verified", timestamp: "Verificado ayer" },
    { id: "3", name: "Estados Financieros", status: "verified", timestamp: "Hace 2 días" },
  ]}
/>`,
        },
        {
          title: "En procesamiento",
          description: "Documentos siendo analizados por el sistema.",
          preview: (
            <div className="w-full max-w-md border rounded-lg p-4 bg-background">
              <DocumentVerificationStatus
                documents={[
                  { id: "1", name: "Pagaré firmado", status: "processing", message: "Validando firma digital..." },
                  { id: "2", name: "Carta de endoso", status: "processing", message: "Verificando autenticidad..." },
                  { id: "3", name: "Factura electrónica", status: "verified", timestamp: "Verificado" },
                ]}
              />
            </div>
          ),
          code: `<DocumentVerificationStatus
  documents={[
    { id: "1", name: "Pagaré firmado", status: "processing", message: "Validando firma digital..." },
    { id: "2", name: "Carta de endoso", status: "processing", message: "Verificando autenticidad..." },
    { id: "3", name: "Factura electrónica", status: "verified", timestamp: "Verificado" },
  ]}
  onUpload={(id) => handleUpload(id)}
/>`,
        },
      ]}
    />
  );
}