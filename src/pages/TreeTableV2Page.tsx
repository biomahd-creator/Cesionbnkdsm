import { ComponentShowcase } from "../components/ui/component-showcase";
import { Badge } from "../components/ui/badge";
import {
  TreeTableV2,
  type OperacionFactoring,
  type BatchAction,
} from "../components/advanced/TreeTableV2";
import { toast } from "sonner@2.0.3";

/* ═══════════════════════════════════════════
   SAMPLE DATA — Operaciones de Factoring
   ═══════════════════════════════════════════ */

const operaciones: OperacionFactoring[] = [
  {
    id: "OP-4635",
    fechaOperacion: "08/02/2026",
    cliente: { nombre: "Industrias Haceb S.A.", nit: "890.900.118-1" },
    facturas: [
      { id: "fac-4635-1", numero: "FAC-10231", pagador: { nombre: "Almacenes Exito S.A.", nit: "890.900.608-9" }, valor: 185000000, valorDesembolso: 175750000, fechaVencimiento: "15/03/2026", estado: "vigente" },
      { id: "fac-4635-2", numero: "FAC-10232", pagador: { nombre: "Almacenes Exito S.A.", nit: "890.900.608-9" }, valor: 92500000, valorDesembolso: 87875000, fechaVencimiento: "22/03/2026", estado: "vigente" },
      { id: "fac-4635-3", numero: "FAC-10233", pagador: { nombre: "Falabella de Colombia S.A.", nit: "900.017.447-8" }, valor: 67800000, valorDesembolso: 64410000, fechaVencimiento: "10/04/2026", estado: "vigente" },
    ],
    valorFacturas: 345300000,
    valorDesembolso: 328035000,
    estado: "pendiente",
  },
  {
    id: "OP-4612",
    fechaOperacion: "05/02/2026",
    cliente: { nombre: "Cementos Argos S.A.", nit: "890.100.251-0" },
    facturas: [
      { id: "fac-4612-1", numero: "FAC-8890", pagador: { nombre: "Constructora Conconcreto S.A.", nit: "890.900.227-1" }, valor: 420000000, valorDesembolso: 399000000, fechaVencimiento: "28/02/2026", estado: "pagada" },
      { id: "fac-4612-2", numero: "FAC-8891", pagador: { nombre: "Constructora Conconcreto S.A.", nit: "890.900.227-1" }, valor: 315000000, valorDesembolso: 299250000, fechaVencimiento: "15/03/2026", estado: "vigente" },
    ],
    valorFacturas: 735000000,
    valorDesembolso: 698250000,
    estado: "aprobada",
  },
  {
    id: "OP-4598",
    fechaOperacion: "01/02/2026",
    cliente: { nombre: "Grupo Nutresa S.A.", nit: "890.900.050-5" },
    facturas: [
      { id: "fac-4598-1", numero: "FAC-7745", pagador: { nombre: "Olimpica S.A.", nit: "890.101.815-9" }, valor: 156000000, valorDesembolso: 148200000, fechaVencimiento: "20/02/2026", estado: "pagada" },
      { id: "fac-4598-2", numero: "FAC-7746", pagador: { nombre: "Grupo Exito S.A.", nit: "890.900.608-9" }, valor: 203000000, valorDesembolso: 192850000, fechaVencimiento: "25/02/2026", estado: "pagada" },
      { id: "fac-4598-3", numero: "FAC-7747", pagador: { nombre: "D1 SAS", nit: "900.480.569-0" }, valor: 98500000, valorDesembolso: 93575000, fechaVencimiento: "10/03/2026", estado: "vigente" },
      { id: "fac-4598-4", numero: "FAC-7748", pagador: { nombre: "Jumbo Colombia S.A.", nit: "860.000.150-8" }, valor: 142000000, valorDesembolso: 134900000, fechaVencimiento: "18/03/2026", estado: "vigente" },
    ],
    valorFacturas: 599500000,
    valorDesembolso: 569525000,
    estado: "desembolsada",
  },
  {
    id: "OP-4580",
    fechaOperacion: "28/01/2026",
    cliente: { nombre: "Postobón S.A.", nit: "890.903.939-5" },
    facturas: [
      { id: "fac-4580-1", numero: "FAC-6612", pagador: { nombre: "Bavaria S.A.", nit: "860.005.224-6" }, valor: 89000000, valorDesembolso: 84550000, fechaVencimiento: "15/02/2026", estado: "vencida" },
      { id: "fac-4580-2", numero: "FAC-6613", pagador: { nombre: "Bavaria S.A.", nit: "860.005.224-6" }, valor: 112000000, valorDesembolso: 106400000, fechaVencimiento: "20/02/2026", estado: "vencida" },
    ],
    valorFacturas: 201000000,
    valorDesembolso: 190950000,
    estado: "cancelada",
  },
  {
    id: "OP-4571",
    fechaOperacion: "25/01/2026",
    cliente: { nombre: "Colombina S.A.", nit: "890.301.884-2" },
    facturas: [
      { id: "fac-4571-1", numero: "FAC-5503", pagador: { nombre: "Almacenes Exito S.A.", nit: "890.900.608-9" }, valor: 78500000, valorDesembolso: 74575000, fechaVencimiento: "28/02/2026", estado: "vigente" },
    ],
    valorFacturas: 78500000,
    valorDesembolso: 74575000,
    estado: "aprobada",
  },
];

function formatPesos(val: number): string {
  return "$" + val.toLocaleString("es-CO", { minimumFractionDigits: 0, maximumFractionDigits: 0 });
}

export function TreeTableV2Page() {
  const handleBatchAction = (action: BatchAction, selectedIds: Set<string>) => {
    const count = selectedIds.size;
    const labels: Record<BatchAction, string> = { approve: "Approve", export: "Export", cancel: "Cancel" };
    toast.success(`${labels[action]} ${count} item${count !== 1 ? "s" : ""}`, {
      description: `IDs: ${Array.from(selectedIds).slice(0, 4).join(", ")}${count > 4 ? "..." : ""}`,
    });
  };

  const handleVer = (op: OperacionFactoring) => {
    toast.info(`View operation ${op.id}`, {
      description: `${op.cliente.nombre} — ${op.facturas.length} invoices for ${formatPesos(op.valorFacturas)}`,
    });
  };

  return (
    <ComponentShowcase
      title="Factoring Operations (Tree Table V2)"
      description="3-level hierarchical table: Operation (client) → Payor → Invoices. Each operation shows client info, payors, amounts, status, and direct actions. Expanding reveals payors grouped by NIT, and expanding each payor shows its invoices with status badges. Supports batch selection, search, sorting, and Excel export."
      category="Advanced"
      preview={
        <TreeTableV2
          data={operaciones}
          title="Factoring Portfolio"
          description={`${operaciones.length} operations - ${operaciones.reduce((s, o) => s + o.facturas.length, 0)} invoices - ${formatPesos(operaciones.reduce((s, o) => s + o.valorFacturas, 0))} total`}
          onSelectionChange={(ids) => console.log("Selection:", Array.from(ids))}
          onBatchAction={handleBatchAction}
          onVerOperacion={handleVer}
          onCancelarOperacion={(op) => toast.warning(`Cancel operation ${op.id}`)}
          onDescargarExcel={(op) => toast.success(`Download Excel — ${op.id}`)}
        />
      }
      code={`import { TreeTableV2, OperacionFactoring, BatchAction } from "@/components/advanced/TreeTableV2";

const operaciones: OperacionFactoring[] = [
  {
    id: "OP-4635",
    fechaOperacion: "08/02/2026",
    cliente: { nombre: "Industrias Haceb S.A.", nit: "890.900.118-1" },
    facturas: [
      {
        id: "fac-1",
        numero: "FAC-10231",
        pagador: { nombre: "Almacenes Exito S.A.", nit: "890.900.608-9" },
        valor: 185000000,
        valorDesembolso: 175750000,
        fechaVencimiento: "15/03/2026",
        estado: "vigente",
      },
    ],
    valorFacturas: 185000000,
    valorDesembolso: 175750000,
    estado: "pendiente",
  },
];

<TreeTableV2
  data={operaciones}
  title="Portfolio"
  onBatchAction={(action, ids) => console.log(action, ids)}
  onVerOperacion={(op) => console.log("View:", op)}
  onDescargarExcel={(op) => console.log("Export:", op)}
/>`}
      props={[
        {
          name: "data",
          type: "OperacionFactoring[]",
          description: "Array of factoring operations with nested invoices.",
          required: true,
        },
        {
          name: "title",
          type: "string",
          description: "Title shown in the table header.",
        },
        {
          name: "description",
          type: "string",
          description: "Description shown under the title.",
        },
        {
          name: "onSelectionChange",
          type: "(ids: Set<string>) => void",
          description: "Callback when selection changes.",
        },
        {
          name: "onBatchAction",
          type: "(action: BatchAction, ids: Set<string>) => void",
          description: "Callback for batch actions (approve, export, cancel).",
        },
        {
          name: "onVerOperacion",
          type: "(op: OperacionFactoring) => void",
          description: "Callback when 'View' action is clicked.",
        },
        {
          name: "onCancelarOperacion",
          type: "(op: OperacionFactoring) => void",
          description: "Callback when 'Cancel' action is clicked.",
        },
        {
          name: "onDescargarExcel",
          type: "(op: OperacionFactoring) => void",
          description: "Callback when 'Download Excel' action is clicked.",
        },
      ]}
      examples={[
        {
          title: "Key Features",
          description: "Built-in capabilities of the Factoring Tree Table V2.",
          preview: (
            <div className="grid md:grid-cols-3 gap-4">
              <div className="p-4 border rounded-lg space-y-2">
                <h4 className="font-medium">3-Level Hierarchy</h4>
                <p className="text-sm text-muted-foreground">Operation → Payor → Invoice with expand/collapse at each level.</p>
              </div>
              <div className="p-4 border rounded-lg space-y-2">
                <h4 className="font-medium">Batch Operations</h4>
                <p className="text-sm text-muted-foreground">Select multiple operations for approve, export, or cancel actions.</p>
              </div>
              <div className="p-4 border rounded-lg space-y-2">
                <h4 className="font-medium">Search & Sort</h4>
                <p className="text-sm text-muted-foreground">Filter by ID, client, payor, or NIT. Sort by column headers.</p>
              </div>
              <div className="p-4 border rounded-lg space-y-2">
                <h4 className="font-medium">Status Badges</h4>
                <p className="text-sm text-muted-foreground">Color-coded badges: pendiente, aprobada, desembolsada, cancelada, vigente, pagada, vencida.</p>
              </div>
              <div className="p-4 border rounded-lg space-y-2">
                <h4 className="font-medium">Currency Formatting</h4>
                <p className="text-sm text-muted-foreground">Colombian Peso (COP) formatting with locale-aware number display.</p>
              </div>
              <div className="p-4 border rounded-lg space-y-2">
                <h4 className="font-medium">Action Menu</h4>
                <p className="text-sm text-muted-foreground">Per-row dropdown with View, Cancel, and Download Excel options.</p>
              </div>
            </div>
          ),
          code: `// BatchAction type: "approve" | "export" | "cancel"
// OperacionFactoring includes: id, fechaOperacion, cliente, facturas[], estado`,
        },
      ]}
    />
  );
}
