import { useState } from "react";
import { ComponentShowcase } from "../components/ui/component-showcase";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../components/ui/tabs";
import {
  FactoringInvoiceTable,
  type FactoringInvoice,
  type InvoiceCategory,
} from "../components/patterns/factoring/FactoringInvoiceTable";

// ── Mock Data ────────────────────────────────────────────────────────
const MOCK_INVOICES: FactoringInvoice[] = [
  {
    id: "INV-001",
    number: "FAC-2026-0101",
    invoiceValue: "$12,500,000",
    advanceValue: "$10,625,000",
    lastEvent: "Validacion OK",
    state: "Aprobada",
    observations: "Documentacion completa y verificada",
    validFrom: "15 Ene 2026",
    validTo: "15 Mar 2026",
    daysToExpire: 35,
    progress: 45,
    reviewStatus: "En Revision",
    rejectionReason: "",
    discardReason: "",
    discardDate: "",
    reviewer: "Carlos Mendez",
    category: "elegibles",
  },
  {
    id: "INV-002",
    number: "FAC-2026-0102",
    invoiceValue: "$8,300,000",
    advanceValue: "$7,055,000",
    lastEvent: "Cedida",
    state: "Vigente",
    observations: "Sin observaciones pendientes",
    validFrom: "20 Dic 2025",
    validTo: "20 Feb 2026",
    daysToExpire: 12,
    progress: 78,
    reviewStatus: "Completada",
    rejectionReason: "",
    discardReason: "",
    discardDate: "",
    reviewer: "Maria Gonzalez",
    category: "elegibles",
  },
  {
    id: "INV-003",
    number: "FAC-2026-0103",
    invoiceValue: "$22,100,000",
    advanceValue: "$18,785,000",
    lastEvent: "Pre-aprobada",
    state: "En Proceso",
    observations: "Pendiente verificacion de pagador",
    validFrom: "01 Feb 2026",
    validTo: "01 May 2026",
    daysToExpire: 82,
    progress: 15,
    reviewStatus: "Sin Iniciar",
    rejectionReason: "",
    discardReason: "",
    discardDate: "",
    reviewer: "Ana Lopez",
    category: "elegibles",
  },
  {
    id: "INV-004",
    number: "FAC-2026-0104",
    invoiceValue: "$5,750,000",
    advanceValue: "$4,887,500",
    lastEvent: "Documentacion",
    state: "Pendiente",
    observations: "Falta certificado de deuda",
    validFrom: "10 Ene 2026",
    validTo: "10 Abr 2026",
    daysToExpire: 61,
    progress: 32,
    reviewStatus: "En Revision",
    rejectionReason: "",
    discardReason: "",
    discardDate: "",
    reviewer: "Pedro Silva",
    category: "pendientes",
  },
  {
    id: "INV-005",
    number: "FAC-2026-0105",
    invoiceValue: "$15,800,000",
    advanceValue: "$13,430,000",
    lastEvent: "Revision Legal",
    state: "En Espera",
    observations: "Requiere firma del representante legal",
    validFrom: "05 Feb 2026",
    validTo: "05 Abr 2026",
    daysToExpire: 56,
    progress: 20,
    reviewStatus: "En Revision",
    rejectionReason: "",
    discardReason: "",
    discardDate: "",
    reviewer: "Laura Torres",
    category: "pendientes",
  },
  {
    id: "INV-006",
    number: "FAC-2026-0106",
    invoiceValue: "$9,200,000",
    advanceValue: "$7,820,000",
    lastEvent: "Rechazada",
    state: "No Elegible",
    observations: "Pagador con calificacion insuficiente",
    validFrom: "01 Dic 2025",
    validTo: "01 Mar 2026",
    daysToExpire: 21,
    progress: 70,
    reviewStatus: "Completada",
    rejectionReason: "Rating Pagador < BBB",
    discardReason: "",
    discardDate: "",
    reviewer: "Carlos Mendez",
    category: "no-elegibles",
  },
  {
    id: "INV-007",
    number: "FAC-2026-0107",
    invoiceValue: "$3,400,000",
    advanceValue: "$2,890,000",
    lastEvent: "Rechazada",
    state: "No Elegible",
    observations: "Factura vencida al momento de la cesion",
    validFrom: "15 Oct 2025",
    validTo: "15 Dic 2025",
    daysToExpire: 0,
    progress: 100,
    reviewStatus: "Completada",
    rejectionReason: "Vencimiento anterior",
    discardReason: "",
    discardDate: "",
    reviewer: "Maria Gonzalez",
    category: "no-elegibles",
  },
  {
    id: "INV-008",
    number: "FAC-2026-0108",
    invoiceValue: "$7,600,000",
    advanceValue: "$6,460,000",
    lastEvent: "Descartada",
    state: "Descartada",
    observations: "El cliente solicito retirar la factura",
    validFrom: "20 Ene 2026",
    validTo: "20 Mar 2026",
    daysToExpire: 40,
    progress: 38,
    reviewStatus: "Completada",
    rejectionReason: "",
    discardReason: "Solicitud del cliente",
    discardDate: "05 Feb 2026",
    reviewer: "Ana Lopez",
    category: "descartadas",
  },
  {
    id: "INV-009",
    number: "FAC-2026-0109",
    invoiceValue: "$18,900,000",
    advanceValue: "$16,065,000",
    lastEvent: "Descartada",
    state: "Descartada",
    observations: "Duplicado detectado en sistema",
    validFrom: "01 Feb 2026",
    validTo: "01 May 2026",
    daysToExpire: 82,
    progress: 10,
    reviewStatus: "Completada",
    rejectionReason: "",
    discardReason: "Factura duplicada",
    discardDate: "03 Feb 2026",
    reviewer: "Pedro Silva",
    category: "descartadas",
  },
];

// ── Interactive Demo Wrapper ─────────────────────────────────────────
function InvoiceTableDemo() {
  const [activeTab, setActiveTab] = useState<InvoiceCategory>("elegibles");
  const [selectedInvoices, setSelectedInvoices] = useState<string[]>([]);

  const handleToggle = (id: string) => {
    setSelectedInvoices((prev) =>
      prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id]
    );
  };

  const handleSelectAll = (ids: string[]) => setSelectedInvoices(ids);
  const handleDeselectAll = () => setSelectedInvoices([]);

  return (
    <div className="space-y-4 w-full">
      <Tabs
        value={activeTab}
        onValueChange={(v) => {
          setActiveTab(v as InvoiceCategory);
          setSelectedInvoices([]);
        }}
      >
        <TabsList className="grid w-full grid-cols-4 max-w-lg">
          <TabsTrigger value="elegibles">Elegibles</TabsTrigger>
          <TabsTrigger value="pendientes">Pendientes</TabsTrigger>
          <TabsTrigger value="no-elegibles">No Elegibles</TabsTrigger>
          <TabsTrigger value="descartadas">Descartadas</TabsTrigger>
        </TabsList>

        <TabsContent value={activeTab} className="mt-4">
          <FactoringInvoiceTable
            invoices={MOCK_INVOICES}
            activeTab={activeTab}
            selectedInvoices={selectedInvoices}
            onToggleInvoice={handleToggle}
            onSelectAll={handleSelectAll}
            onDeselectAll={() => handleDeselectAll()}
            onDiscard={(ids) => {
              setSelectedInvoices((prev) => prev.filter((x) => !ids.includes(x)));
            }}
            itemsPerPage={5}
          />
        </TabsContent>
      </Tabs>
    </div>
  );
}

// ── Page Export ───────────────────────────────────────────────────────
export function FactoringInvoiceTablePage() {
  return (
    <ComponentShowcase
      title="Factoring Invoice Table"
      description="Tabla reutilizable del modulo Factoring con columnas dinamicas segun tab, seleccion con checkbox, badges semanticos Soft Outline, celdas de vigencia con ProgressWithRange, busqueda, paginacion y empty state."
      category="Patterns > Factoring"

      // Main Preview
      preview={<InvoiceTableDemo />}

      // Main Code
      code={`import { FactoringInvoiceTable } from "@/components/patterns/factoring/FactoringInvoiceTable"
import type { FactoringInvoice, InvoiceCategory } from "@/components/patterns/factoring/FactoringInvoiceTable"

const [activeTab, setActiveTab] = useState<InvoiceCategory>("elegibles");
const [selectedInvoices, setSelectedInvoices] = useState<string[]>([]);

<FactoringInvoiceTable
  invoices={invoices}
  activeTab={activeTab}
  selectedInvoices={selectedInvoices}
  onToggleInvoice={(id) => toggle(id)}
  onSelectAll={(ids) => setSelectedInvoices(ids)}
  onDeselectAll={() => setSelectedInvoices([])}
  onDiscard={(ids) => handleDiscard(ids)}
  itemsPerPage={10}
/>`}

      // Props Documentation
      props={[
        {
          name: "invoices",
          type: "FactoringInvoice[]",
          description: "Array de facturas a mostrar. Cada objeto contiene: id, number, invoiceValue, advanceValue, lastEvent, state, observations, validFrom, validTo, daysToExpire, progress, reviewStatus, rejectionReason, discardReason, discardDate, reviewer, category.",
        },
        {
          name: "activeTab",
          type: "InvoiceCategory",
          description: "Tab activo que determina las columnas visibles. Valores: 'elegibles' | 'pendientes' | 'no-elegibles' | 'descartadas'.",
        },
        {
          name: "selectedInvoices",
          type: "string[]",
          description: "IDs de las facturas actualmente seleccionadas.",
        },
        {
          name: "onToggleInvoice",
          type: "(id: string) => void",
          description: "Callback para toggle de seleccion de una factura individual.",
        },
        {
          name: "onSelectAll",
          type: "(ids: string[]) => void",
          description: "Callback para seleccionar todas las facturas visibles.",
        },
        {
          name: "onSelectAllEligible",
          type: "(ids: string[]) => void",
          description: "Callback para seleccionar solo las facturas elegibles.",
        },
        {
          name: "onDeselectAll",
          type: "(ids: string[]) => void",
          description: "Callback para deseleccionar todas las facturas.",
        },
        {
          name: "onDiscard",
          type: "(ids: string[]) => void",
          description: "Callback para descartar las facturas seleccionadas.",
        },
        {
          name: "filterByCategory",
          type: "boolean",
          description: "Si true, filtra internamente por activeTab. Default: true.",
        },
        {
          name: "itemsPerPage",
          type: "number",
          description: "Items por pagina. Default: 10.",
        },
        {
          name: "showToolbar",
          type: "boolean",
          description: "Muestra/oculta la barra de herramientas. Default: true.",
        },
        {
          name: "searchValue",
          type: "string",
          description: "Valor de busqueda controlado externamente.",
        },
        {
          name: "onSearchChange",
          type: "(value: string) => void",
          description: "Handler de cambio de busqueda controlado.",
        },
        {
          name: "className",
          type: "string",
          description: "Clase CSS adicional para la Card contenedora.",
        },
        {
          name: "emptyMessage",
          type: "string",
          description: "Mensaje personalizado para empty state. Default: 'No hay facturas en esta categoria'.",
        },
      ]}

      // Examples
      examples={[
        {
          title: "Interactive Demo",
          description: "Tabla completa con tabs de categoria, seleccion, busqueda y paginacion. Navega entre tabs para ver las columnas dinamicas.",
          preview: <InvoiceTableDemo />,
          code: `<Tabs value={activeTab} onValueChange={setActiveTab}>
  <TabsList className="grid w-full grid-cols-4 max-w-lg">
    <TabsTrigger value="elegibles">Elegibles</TabsTrigger>
    <TabsTrigger value="pendientes">Pendientes</TabsTrigger>
    <TabsTrigger value="no-elegibles">No Elegibles</TabsTrigger>
    <TabsTrigger value="descartadas">Descartadas</TabsTrigger>
  </TabsList>
  <TabsContent value={activeTab}>
    <FactoringInvoiceTable
      invoices={invoices}
      activeTab={activeTab}
      selectedInvoices={selectedInvoices}
      onToggleInvoice={handleToggle}
      onSelectAll={handleSelectAll}
      onDeselectAll={handleDeselectAll}
      itemsPerPage={5}
    />
  </TabsContent>
</Tabs>`,
        },
      ]}
    />
  );
}
