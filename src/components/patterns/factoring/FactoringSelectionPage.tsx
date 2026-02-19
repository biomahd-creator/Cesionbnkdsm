import { useState, useMemo, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Card, CardContent, CardHeader, CardTitle } from "../../ui/card";
import { Badge } from "../../ui/badge";
import { Button } from "../../ui/button";
import { Checkbox } from "../../ui/checkbox";
import { Separator } from "../../ui/separator";
import { Alert, AlertDescription } from "../../ui/alert";
import { Input } from "../../ui/input";
import { Textarea } from "../../ui/textarea";
import { Label } from "../../ui/label";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "../../ui/dialog";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../../ui/accordion";
import { Progress } from "../../ui/progress";
import { ScrollArea } from "../../ui/scroll-area";
import { StatusKPICard } from "../../widgets/StatusKPICard";
import { FactoringKpiCardGroup } from "../FactoringKpiCardGroup";
import { OperationSummary } from "./OperationSummary";
import {
  Upload,
  TrendingUp,
  AlertCircle,
  CheckCircle2,
  XCircle,
  FileX,
  ChevronRight,
  Info,
  X,
  Trash2,
  Search,
  ArrowUpDown,
  ArrowUp,
  ArrowDown,
  Eye,
  Mail,
  Clock,
  DollarSign,
  FileCheck2,
} from "lucide-react";
import {
  InvoiceValidationPanel,
  InvoiceValidationBadges,
} from "./InvoiceValidationPanel";
import type { InvoiceValidation } from "./InvoiceValidationPanel";
import { UploadInvoicesDialog } from "../../factoring/modals/UploadInvoicesDialog";

// Types
interface Invoice {
  id: string;
  invoiceNumber: string;
  amount: number;
  issueDate: string;
  dueDate: string;
  status: "eligible" | "pending" | "not-eligible" | "discarded";
  debtorId: string;
  validation: InvoiceValidation;
}

interface Debtor {
  id: string;
  name: string;
  rut: string;
  availableLimit: number;
  rate: number; // Tasa de descuento %
  invoices: Invoice[];
}

interface FactoringSelectionPageProps {
  onOperationSummaryChange?: (isShowing: boolean) => void;
}

// Validation mock data generators
function makeValidation(status: Invoice["status"], seed: number = 0): InvoiceValidation {
  if (status === "eligible") {
    return {
      endorsability: "endorsable",
      creditLimitStatus: "approved",
      creditLimitCondition: "none",
      eligibility: "eligible",
      dianValidation: "success",
      negotiationCriteria: [
        { rule: "Monto mínimo requerido", passed: true, detail: "Valor factura supera el mínimo de $100.000." },
        { rule: "Monto máximo permitido", passed: true, detail: "Valor factura dentro del máximo de $50.000.000." },
        { rule: "Plazo de vencimiento", passed: true, detail: "Faltan más de 15 días para vencimiento." },
        { rule: "Aceptación tácita (Evento 34)", passed: true, detail: "Ya es endosable. Aceptación tácita registrada." },
      ],
      radianCriteria: [
        { rule: "Tenedor legítimo", passed: true, detail: "El NIT registrado es el tenedor legal de la factura." },
        { rule: "Forma de pago crédito", passed: true, detail: "La factura tiene forma de pago a crédito." },
        { rule: "Eventos registrados", passed: true, detail: "Todos los eventos requeridos están registrados en RADIAN." },
      ],
    };
  }
  if (status === "pending") {
    const variants: InvoiceValidation[] = [
      {
        endorsability: "possible",
        creditLimitStatus: "conditional",
        creditLimitCondition: "restricted",
        eligibility: "pending",
        dianValidation: "pending",
        negotiationCriteria: [
          { rule: "Monto mínimo requerido", passed: true, detail: "Valor factura supera el mínimo." },
          { rule: "Aceptación (Evento 33/34)", passed: false, detail: "No cumple con Aceptación (33) o Aceptación Tácita (34)." },
          { rule: "3 días hábiles post-evento 32", passed: false, detail: "La factura será endosable desde 2024-02-20 (3 días hábiles después del evento 32)." },
        ],
        radianCriteria: [
          { rule: "Tenedor legítimo", passed: true, detail: "El NIT registrado es el tenedor legal." },
          { rule: "Eventos registrados", passed: false, detail: "La factura no cuenta con todos los eventos requeridos." },
        ],
      },
      {
        endorsability: "possible",
        creditLimitStatus: "in-process",
        creditLimitCondition: "none",
        eligibility: "pending",
        dianValidation: "pending-events",
        negotiationCriteria: [
          { rule: "Monto mínimo requerido", passed: true, detail: "Valor factura supera el mínimo." },
          { rule: "Plazo de vencimiento", passed: true, detail: "Plazo dentro del rango permitido." },
          { rule: "Evento mínimo requerido", passed: false, detail: "No cumple con el evento 33 requerido por políticas." },
        ],
        radianCriteria: [
          { rule: "Tenedor legítimo", passed: true, detail: "El NIT es el tenedor legal." },
          { rule: "Forma de pago crédito", passed: true, detail: "Forma de pago a crédito." },
          { rule: "Último evento", passed: false, detail: "Último evento registrado es limitado. La factura tiene restricciones." },
        ],
      },
    ];
    return variants[seed % variants.length];
  }
  if (status === "not-eligible") {
    const variants: InvoiceValidation[] = [
      {
        endorsability: "not-endorsable",
        creditLimitStatus: "rejected",
        creditLimitCondition: "risk-aggravation",
        eligibility: "not-eligible",
        dianValidation: "rejected",
        negotiationCriteria: [
          { rule: "Monto mínimo requerido", passed: true, detail: "Valor factura supera el mínimo." },
          { rule: "Fecha vencimiento", passed: false, detail: "Fecha vencimiento: 2024-01-05 (ya vencida)." },
          { rule: "Mora del pagador", passed: false, detail: "El pagador tiene facturas con más de 60 días de mora." },
        ],
        radianCriteria: [
          { rule: "Factura rechazada por DIAN", passed: false, detail: "La factura fue reportada con inconsistencias y la DIAN la rechazó." },
        ],
      },
      {
        endorsability: "not-endorsable",
        creditLimitStatus: "annulled",
        creditLimitCondition: "annulled-conditional",
        eligibility: "not-eligible",
        dianValidation: "rejected",
        negotiationCriteria: [
          { rule: "Monto máximo permitido", passed: false, detail: "Valor factura: $8.500.000, Máximo permitido: $5.000.000." },
          { rule: "Emisión vs Aprobación", passed: false, detail: "Emisión 2024-01-01 < Aprob. cupo 2024-02-15." },
        ],
        radianCriteria: [
          { rule: "Factura protestada", passed: false, detail: "La factura fue protestada por pago. Indica riesgo." },
          { rule: "Forma de pago", passed: false, detail: "La factura con forma de pago 'Contado' no es negociable." },
        ],
      },
    ];
    return variants[seed % variants.length];
  }
  // discarded
  return {
    endorsability: "not-determinable",
    creditLimitStatus: "no-info",
    creditLimitCondition: "none",
    eligibility: "not-eligible",
    dianValidation: "pending",
    negotiationCriteria: [
      { rule: "No se encontraron políticas", passed: false, detail: "No existe una regla de negociación configurada para esta factura." },
    ],
    radianCriteria: [],
  };
}

// Raw mock data (validation is auto-generated below)
type RawInvoice = Omit<Invoice, "validation">;
type RawDebtor = Omit<Debtor, "invoices"> & { invoices: RawInvoice[] };
const rawDebtors: RawDebtor[] = [
  {
    id: "D001",
    name: "Corporación Global S.A.",
    rut: "76.987.654-3",
    availableLimit: 5000000,
    rate: 2.5,
    invoices: [
      {
        id: "INV-001",
        invoiceNumber: "F-2024-1001",
        amount: 1200000,
        issueDate: "2024-01-15",
        dueDate: "2024-02-15",
        status: "eligible",
        debtorId: "D001",
      },
      {
        id: "INV-002",
        invoiceNumber: "F-2024-1002",
        amount: 850000,
        issueDate: "2024-01-18",
        dueDate: "2024-02-18",
        status: "eligible",
        debtorId: "D001",
      },
      {
        id: "INV-003",
        invoiceNumber: "F-2024-1003",
        amount: 2100000,
        issueDate: "2024-01-20",
        dueDate: "2024-02-20",
        status: "eligible",
        debtorId: "D001",
      },
      {
        id: "INV-004",
        invoiceNumber: "F-2024-1004",
        amount: 450000,
        issueDate: "2024-01-22",
        dueDate: "2024-02-22",
        status: "pending",
        debtorId: "D001",
      },
      {
        id: "INV-005",
        invoiceNumber: "F-2024-1005",
        amount: 1500000,
        issueDate: "2024-01-25",
        dueDate: "2024-02-25",
        status: "eligible",
        debtorId: "D001",
      },
      {
        id: "INV-050",
        invoiceNumber: "F-2024-1006",
        amount: 680000,
        issueDate: "2024-01-28",
        dueDate: "2024-02-28",
        status: "pending",
        debtorId: "D001",
      },
      {
        id: "INV-051",
        invoiceNumber: "F-2024-1007",
        amount: 920000,
        issueDate: "2024-01-30",
        dueDate: "2024-03-01",
        status: "pending",
        debtorId: "D001",
      },
    ],
  },
  {
    id: "D002",
    name: "Innovatech Solutions SpA",
    rut: "77.123.456-8",
    availableLimit: 3500000,
    rate: 3.0,
    invoices: [
      {
        id: "INV-006",
        invoiceNumber: "F-2024-2001",
        amount: 980000,
        issueDate: "2024-01-10",
        dueDate: "2024-02-10",
        status: "eligible",
        debtorId: "D002",
      },
      {
        id: "INV-007",
        invoiceNumber: "F-2024-2002",
        amount: 1250000,
        issueDate: "2024-01-12",
        dueDate: "2024-02-12",
        status: "eligible",
        debtorId: "D002",
      },
      {
        id: "INV-008",
        invoiceNumber: "F-2024-2003",
        amount: 750000,
        issueDate: "2024-01-14",
        dueDate: "2024-02-14",
        status: "not-eligible",
        debtorId: "D002",
      },
      {
        id: "INV-009",
        invoiceNumber: "F-2024-2004",
        amount: 1100000,
        issueDate: "2024-01-16",
        dueDate: "2024-02-16",
        status: "eligible",
        debtorId: "D002",
      },
      {
        id: "INV-052",
        invoiceNumber: "F-2024-2005",
        amount: 540000,
        issueDate: "2024-01-20",
        dueDate: "2024-02-20",
        status: "pending",
        debtorId: "D002",
      },
      {
        id: "INV-053",
        invoiceNumber: "F-2024-2006",
        amount: 870000,
        issueDate: "2024-01-23",
        dueDate: "2024-02-23",
        status: "pending",
        debtorId: "D002",
      },
      {
        id: "INV-054",
        invoiceNumber: "F-2024-2007",
        amount: 1320000,
        issueDate: "2024-01-26",
        dueDate: "2024-02-26",
        status: "pending",
        debtorId: "D002",
      },
    ],
  },
  {
    id: "D003",
    name: "Distribuidora Nacional Ltda.",
    rut: "78.234.567-9",
    availableLimit: 4200000,
    rate: 2.8,
    invoices: [
      {
        id: "INV-010",
        invoiceNumber: "F-2024-3001",
        amount: 1600000,
        issueDate: "2024-01-08",
        dueDate: "2024-02-08",
        status: "eligible",
        debtorId: "D003",
      },
      {
        id: "INV-011",
        invoiceNumber: "F-2024-3002",
        amount: 890000,
        issueDate: "2024-01-11",
        dueDate: "2024-02-11",
        status: "eligible",
        debtorId: "D003",
      },
      {
        id: "INV-012",
        invoiceNumber: "F-2024-3003",
        amount: 1350000,
        issueDate: "2024-01-13",
        dueDate: "2024-02-13",
        status: "eligible",
        debtorId: "D003",
      },
      {
        id: "INV-013",
        invoiceNumber: "F-2024-3004",
        amount: 520000,
        issueDate: "2024-01-17",
        dueDate: "2024-02-17",
        status: "discarded",
        debtorId: "D003",
      },
      {
        id: "INV-014",
        invoiceNumber: "F-2024-3005",
        amount: 700000,
        issueDate: "2024-01-19",
        dueDate: "2024-02-19",
        status: "eligible",
        debtorId: "D003",
      },
      {
        id: "INV-055",
        invoiceNumber: "F-2024-3006",
        amount: 460000,
        issueDate: "2024-01-21",
        dueDate: "2024-02-21",
        status: "pending",
        debtorId: "D003",
      },
      {
        id: "INV-056",
        invoiceNumber: "F-2024-3007",
        amount: 1150000,
        issueDate: "2024-01-24",
        dueDate: "2024-02-24",
        status: "pending",
        debtorId: "D003",
      },
    ],
  },
  {
    id: "D004",
    name: "Comercializadora del Sur S.A.",
    rut: "79.456.789-1",
    availableLimit: 8500000,
    rate: 2.6,
    invoices: [
      {
        id: "INV-015",
        invoiceNumber: "F-2024-4001",
        amount: 1850000,
        issueDate: "2024-01-05",
        dueDate: "2024-02-05",
        status: "eligible",
        debtorId: "D004",
      },
      {
        id: "INV-016",
        invoiceNumber: "F-2024-4002",
        amount: 950000,
        issueDate: "2024-01-06",
        dueDate: "2024-02-06",
        status: "eligible",
        debtorId: "D004",
      },
      {
        id: "INV-017",
        invoiceNumber: "F-2024-4003",
        amount: 1240000,
        issueDate: "2024-01-07",
        dueDate: "2024-02-07",
        status: "eligible",
        debtorId: "D004",
      },
      {
        id: "INV-018",
        invoiceNumber: "F-2024-4004",
        amount: 780000,
        issueDate: "2024-01-08",
        dueDate: "2024-02-08",
        status: "pending",
        debtorId: "D004",
      },
      {
        id: "INV-019",
        invoiceNumber: "F-2024-4005",
        amount: 2100000,
        issueDate: "2024-01-09",
        dueDate: "2024-02-09",
        status: "eligible",
        debtorId: "D004",
      },
      {
        id: "INV-020",
        invoiceNumber: "F-2024-4006",
        amount: 560000,
        issueDate: "2024-01-10",
        dueDate: "2024-02-10",
        status: "eligible",
        debtorId: "D004",
      },
      {
        id: "INV-021",
        invoiceNumber: "F-2024-4007",
        amount: 1320000,
        issueDate: "2024-01-11",
        dueDate: "2024-02-11",
        status: "eligible",
        debtorId: "D004",
      },
      {
        id: "INV-022",
        invoiceNumber: "F-2024-4008",
        amount: 890000,
        issueDate: "2024-01-12",
        dueDate: "2024-02-12",
        status: "not-eligible",
        debtorId: "D004",
      },
      {
        id: "INV-023",
        invoiceNumber: "F-2024-4009",
        amount: 1650000,
        issueDate: "2024-01-13",
        dueDate: "2024-02-13",
        status: "eligible",
        debtorId: "D004",
      },
      {
        id: "INV-024",
        invoiceNumber: "F-2024-4010",
        amount: 420000,
        issueDate: "2024-01-14",
        dueDate: "2024-02-14",
        status: "eligible",
        debtorId: "D004",
      },
      {
        id: "INV-025",
        invoiceNumber: "F-2024-4011",
        amount: 975000,
        issueDate: "2024-01-15",
        dueDate: "2024-02-15",
        status: "eligible",
        debtorId: "D004",
      },
      {
        id: "INV-026",
        invoiceNumber: "F-2024-4012",
        amount: 1180000,
        issueDate: "2024-01-16",
        dueDate: "2024-02-16",
        status: "pending",
        debtorId: "D004",
      },
      {
        id: "INV-027",
        invoiceNumber: "F-2024-4013",
        amount: 640000,
        issueDate: "2024-01-17",
        dueDate: "2024-02-17",
        status: "eligible",
        debtorId: "D004",
      },
      {
        id: "INV-028",
        invoiceNumber: "F-2024-4014",
        amount: 1895000,
        issueDate: "2024-01-18",
        dueDate: "2024-02-18",
        status: "eligible",
        debtorId: "D004",
      },
      {
        id: "INV-029",
        invoiceNumber: "F-2024-4015",
        amount: 530000,
        issueDate: "2024-01-19",
        dueDate: "2024-02-19",
        status: "eligible",
        debtorId: "D004",
      },
      {
        id: "INV-030",
        invoiceNumber: "F-2024-4016",
        amount: 1410000,
        issueDate: "2024-01-20",
        dueDate: "2024-02-20",
        status: "discarded",
        debtorId: "D004",
      },
      {
        id: "INV-031",
        invoiceNumber: "F-2024-4017",
        amount: 825000,
        issueDate: "2024-01-21",
        dueDate: "2024-02-21",
        status: "eligible",
        debtorId: "D004",
      },
      {
        id: "INV-032",
        invoiceNumber: "F-2024-4018",
        amount: 1190000,
        issueDate: "2024-01-22",
        dueDate: "2024-02-22",
        status: "eligible",
        debtorId: "D004",
      },
      {
        id: "INV-033",
        invoiceNumber: "F-2024-4019",
        amount: 685000,
        issueDate: "2024-01-23",
        dueDate: "2024-02-23",
        status: "not-eligible",
        debtorId: "D004",
      },
      {
        id: "INV-034",
        invoiceNumber: "F-2024-4020",
        amount: 1560000,
        issueDate: "2024-01-24",
        dueDate: "2024-02-24",
        status: "eligible",
        debtorId: "D004",
      },
      {
        id: "INV-035",
        invoiceNumber: "F-2024-4021",
        amount: 720000,
        issueDate: "2024-01-25",
        dueDate: "2024-02-25",
        status: "eligible",
        debtorId: "D004",
      },
      {
        id: "INV-036",
        invoiceNumber: "F-2024-4022",
        amount: 1025000,
        issueDate: "2024-01-26",
        dueDate: "2024-02-26",
        status: "pending",
        debtorId: "D004",
      },
      {
        id: "INV-037",
        invoiceNumber: "F-2024-4023",
        amount: 895000,
        issueDate: "2024-01-27",
        dueDate: "2024-02-27",
        status: "eligible",
        debtorId: "D004",
      },
      {
        id: "INV-038",
        invoiceNumber: "F-2024-4024",
        amount: 1475000,
        issueDate: "2024-01-28",
        dueDate: "2024-02-28",
        status: "eligible",
        debtorId: "D004",
      },
      {
        id: "INV-039",
        invoiceNumber: "F-2024-4025",
        amount: 615000,
        issueDate: "2024-01-29",
        dueDate: "2024-03-01",
        status: "eligible",
        debtorId: "D004",
      },
      {
        id: "INV-040",
        invoiceNumber: "F-2024-4026",
        amount: 1280000,
        issueDate: "2024-01-30",
        dueDate: "2024-03-02",
        status: "discarded",
        debtorId: "D004",
      },
      {
        id: "INV-041",
        invoiceNumber: "F-2024-4027",
        amount: 765000,
        issueDate: "2024-01-31",
        dueDate: "2024-03-03",
        status: "eligible",
        debtorId: "D004",
      },
      {
        id: "INV-042",
        invoiceNumber: "F-2024-4028",
        amount: 1390000,
        issueDate: "2024-02-01",
        dueDate: "2024-03-04",
        status: "eligible",
        debtorId: "D004",
      },
      {
        id: "INV-043",
        invoiceNumber: "F-2024-4029",
        amount: 840000,
        issueDate: "2024-02-02",
        dueDate: "2024-03-05",
        status: "not-eligible",
        debtorId: "D004",
      },
      {
        id: "INV-044",
        invoiceNumber: "F-2024-4030",
        amount: 1520000,
        issueDate: "2024-02-03",
        dueDate: "2024-03-06",
        status: "eligible",
        debtorId: "D004",
      },
      {
        id: "INV-045",
        invoiceNumber: "F-2024-4031",
        amount: 695000,
        issueDate: "2024-02-04",
        dueDate: "2024-03-07",
        status: "eligible",
        debtorId: "D004",
      },
      {
        id: "INV-046",
        invoiceNumber: "F-2024-4032",
        amount: 1155000,
        issueDate: "2024-02-05",
        dueDate: "2024-03-08",
        status: "pending",
        debtorId: "D004",
      },
      {
        id: "INV-047",
        invoiceNumber: "F-2024-4033",
        amount: 985000,
        issueDate: "2024-02-06",
        dueDate: "2024-03-09",
        status: "eligible",
        debtorId: "D004",
      },
    ],
  },
];

// Auto-generate validation data for each invoice based on its status
const mockDebtors: Debtor[] = rawDebtors.map(debtor => ({
  ...debtor,
  invoices: debtor.invoices.map((inv, idx) => ({
    ...inv,
    validation: makeValidation(inv.status, idx),
  })),
}));

export function FactoringSelectionPage({ onOperationSummaryChange }: FactoringSelectionPageProps = {}) {
  const [debtors, setDebtors] = useState<Debtor[]>(mockDebtors);
  const [selectedInvoices, setSelectedInvoices] = useState<Set<string>>(new Set());
  const [showUploadDialog, setShowUploadDialog] = useState(false);
  const [showConfirmDialog, setShowConfirmDialog] = useState(false);
  const [showNotificationDialog, setShowNotificationDialog] = useState(false);
  const [showConfirmation, setShowConfirmation] = useState(false); // Estado de confirmación exitosa
  const [showOperationSummary, setShowOperationSummary] = useState(false); // Estado para pantalla de resumen
  const [expandedDebtors, setExpandedDebtors] = useState<string[]>([]);
  
  // Notification dialog states
  const [notificationEmail, setNotificationEmail] = useState("usuario@empresa.com");
  const [additionalEmails, setAdditionalEmails] = useState("");
  const [notifyClient, setNotifyClient] = useState(true);
  
  // Filters and sorting per debtor
  const [debtorFilters, setDebtorFilters] = useState<Record<string, string>>({});
  const [debtorSorting, setDebtorSorting] = useState<Record<string, { field: string; direction: "asc" | "desc" }>>({});
  
  // Design/Figma capture mode
  const [designMode, setDesignMode] = useState(false);
  
  // Invoice detail panel state
  const [detailInvoice, setDetailInvoice] = useState<Invoice | null>(null);
  
  // KPI Filter State
  const [activeKpiFilter, setActiveKpiFilter] = useState<"negotiation" | "approved" | "disbursed" | "finalized" | null>(null);
  const [hoveredKpi, setHoveredKpi] = useState<string | null>(null);
  
  // Notify parent when operation summary state changes
  useEffect(() => {
    onOperationSummaryChange?.(showOperationSummary);
  }, [showOperationSummary, onOperationSummaryChange]);
  
  // Toggle design mode - expand all and select some invoices for demo
  const toggleDesignMode = () => {
    if (!designMode) {
      // Enter design mode: expand all debtors
      setExpandedDebtors(debtors.map((d) => d.id));
      
      // Select some invoices for visual demo (first eligible from each debtor)
      const demoSelection = new Set<string>();
      debtors.forEach((debtor) => {
        const firstEligible = debtor.invoices.find((inv) => inv.status === "eligible");
        if (firstEligible) {
          demoSelection.add(firstEligible.id);
        }
      });
      setSelectedInvoices(demoSelection);
    } else {
      // Exit design mode: collapse all and clear selection
      setExpandedDebtors([]);
      setSelectedInvoices(new Set());
    }
    setDesignMode(!designMode);
  };

  // Calculate KPIs
  const kpis = useMemo(() => {
    const allInvoices = debtors.flatMap((d) => d.invoices);
    
    // Count by status
    const eligible = allInvoices.filter((i) => i.status === "eligible");
    const pending = allInvoices.filter((i) => i.status === "pending");
    const notEligible = allInvoices.filter((i) => i.status === "not-eligible");
    const discarded = allInvoices.filter((i) => i.status === "discarded");
    
    // Amount totals
    const eligibleAmount = eligible.reduce((sum, inv) => sum + inv.amount, 0);
    const pendingAmount = pending.reduce((sum, inv) => sum + inv.amount, 0);
    const notEligibleAmount = notEligible.reduce((sum, inv) => sum + inv.amount, 0);
    const discardedAmount = discarded.reduce((sum, inv) => sum + inv.amount, 0);
    
    // Business metrics
    const totalAvailableLimit = debtors.reduce((sum, d) => sum + d.availableLimit, 0);
    const averageRate = debtors.reduce((sum, d) => sum + d.rate, 0) / debtors.length;
    
    return {
      total: allInvoices.length,
      eligible: { count: eligible.length, amount: eligibleAmount },
      pending: { count: pending.length, amount: pendingAmount },
      notEligible: { count: notEligible.length, amount: notEligibleAmount },
      discarded: { count: discarded.length, amount: discardedAmount },
      totalAvailableLimit,
      averageRate,
    };
  }, [debtors]);

  // Deselect all invoices from a debtor
  const deselectAllForDebtor = (debtor: Debtor) => {
    const newSelection = new Set(selectedInvoices);
    debtor.invoices.forEach((inv) => newSelection.delete(inv.id));
    setSelectedInvoices(newSelection);
  };

  // Select all eligible invoices from a debtor (no limit check)
  const selectAllEligibleForDebtor = (debtor: Debtor) => {
    const newSelection = new Set(selectedInvoices);
    debtor.invoices
      .filter((inv) => inv.status === "eligible")
      .forEach((inv) => newSelection.add(inv.id));
    setSelectedInvoices(newSelection);
  };

  // Deselect all invoices globally
  const deselectAllGlobal = () => {
    setSelectedInvoices(new Set());
  };

  // Discard an invoice (change status to "discarded")
  const discardInvoice = (invoiceId: string) => {
    setDebtors((prevDebtors) =>
      prevDebtors.map((debtor) => ({
        ...debtor,
        invoices: debtor.invoices.map((inv) =>
          inv.id === invoiceId ? { ...inv, status: "discarded" as const } : inv
        ),
      }))
    );

    // Also remove from selection if selected
    const newSelection = new Set(selectedInvoices);
    newSelection.delete(invoiceId);
    setSelectedInvoices(newSelection);
  };

  // Filter and sort invoices for a debtor
  const getFilteredAndSortedInvoices = (debtor: Debtor) => {
    let invoices = [...debtor.invoices];

    // Apply filter
    const filter = debtorFilters[debtor.id] || "";
    if (filter) {
      const lowerFilter = filter.toLowerCase();
      invoices = invoices.filter(
        (inv) =>
          inv.invoiceNumber.toLowerCase().includes(lowerFilter) ||
          inv.id.toLowerCase().includes(lowerFilter) ||
          inv.amount.toString().includes(lowerFilter)
      );
    }

    // Apply sorting
    const sorting = debtorSorting[debtor.id];
    if (sorting) {
      invoices.sort((a, b) => {
        let aVal: any = a[sorting.field as keyof Invoice];
        let bVal: any = b[sorting.field as keyof Invoice];

        if (sorting.field === "amount") {
          aVal = Number(aVal);
          bVal = Number(bVal);
        }

        if (aVal < bVal) return sorting.direction === "asc" ? -1 : 1;
        if (aVal > bVal) return sorting.direction === "asc" ? 1 : -1;
        return 0;
      });
    }

    // Apply KPI filter
    if (activeKpiFilter === "negotiation") {
      invoices = invoices.filter(inv => inv.status === "pending");
    } else if (activeKpiFilter === "approved") {
      invoices = invoices.filter(inv => inv.status === "eligible");
    } else if (activeKpiFilter === "disbursed" || activeKpiFilter === "finalized") {
      // Mock filters for demo purposes since we don't have these statuses in mock data
      // For "disbursed" and "finalized", we show empty list or could show discarded as proxy
      invoices = []; 
    }

    return invoices;
  };

  // Toggle sorting
  const toggleSort = (debtorId: string, field: string) => {
    setDebtorSorting((prev) => {
      const current = prev[debtorId];
      if (current?.field === field) {
        return {
          ...prev,
          [debtorId]: {
            field,
            direction: current.direction === "asc" ? "desc" : "asc",
          },
        };
      }
      return {
        ...prev,
        [debtorId]: { field, direction: "desc" },
      };
    });
  };

  // Toggle invoice selection with limit validation
  const toggleInvoice = (invoice: Invoice, debtor: Debtor) => {
    const newSelection = new Set(selectedInvoices);

    if (newSelection.has(invoice.id)) {
      // Deselect
      newSelection.delete(invoice.id);
    } else {
      // Check if adding this invoice exceeds debtor's limit
      const debtorTotal = calculateDebtorTotal(debtor.id, newSelection);
      if (debtorTotal + invoice.amount <= debtor.availableLimit) {
        newSelection.add(invoice.id);
      } else {
        // Show visual feedback (handled in UI)
        return;
      }
    }

    setSelectedInvoices(newSelection);
  };

  // Calculate total selected for a debtor
  const calculateDebtorTotal = (debtorId: string, selection: Set<string> = selectedInvoices) => {
    const debtor = debtors.find((d) => d.id === debtorId);
    if (!debtor) return 0;

    return debtor.invoices
      .filter((inv) => selection.has(inv.id))
      .reduce((sum, inv) => sum + inv.amount, 0);
  };

  // Calculate global totals
  const globalTotals = useMemo(() => {
    const selectedInvoicesList = debtors
      .flatMap((d) => d.invoices)
      .filter((inv) => selectedInvoices.has(inv.id));

    const totalNominal = selectedInvoicesList.reduce((sum, inv) => sum + inv.amount, 0);

    // Calculate net advance (apply rates per debtor)
    let netAdvance = 0;
    for (const debtor of debtors) {
      const debtorInvoices = debtor.invoices.filter((inv) => selectedInvoices.has(inv.id));
      const debtorTotal = debtorInvoices.reduce((sum, inv) => sum + inv.amount, 0);
      const discount = debtorTotal * (debtor.rate / 100);
      netAdvance += debtorTotal - discount;
    }

    // Calculate max possible
    const maxPossible = debtors.reduce((sum, d) => {
      const eligibleTotal = d.invoices
        .filter((inv) => inv.status === "eligible")
        .reduce((s, inv) => s + inv.amount, 0);
      return sum + Math.min(eligibleTotal, d.availableLimit);
    }, 0);

    const remaining = maxPossible - totalNominal;

    return {
      totalNominal,
      netAdvance,
      maxPossible,
      remaining,
      count: selectedInvoicesList.length,
    };
  }, [selectedInvoices, debtors]);

  // Format currency
  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat("es-CL", {
      style: "currency",
      currency: "CLP",
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(amount);
  };

  // Get status badge
  const getStatusBadge = (status: Invoice["status"]) => {
    const config = {
      eligible: { label: "Elegible", variant: "success-soft-outline" as const, icon: CheckCircle2 },
      pending: { label: "Pendiente", variant: "warning-soft-outline" as const, icon: AlertCircle },
      "not-eligible": { label: "No Elegible", variant: "neutral-soft-outline" as const, icon: XCircle },
      discarded: { label: "Descartada", variant: "neutral-soft-outline" as const, icon: FileX },
    };

    const { label, variant, icon: Icon } = config[status];

    return (
      <Badge variant={variant} className="gap-1">
        <Icon className="h-3 w-3" />
        {label}
      </Badge>
    );
  };

  return (
    <div>
      {/* Mostrar Resumen de Operación si el estado está activo */}
      {showOperationSummary ? (
        <OperationSummary 
          onBack={() => setShowOperationSummary(false)}
          operationData={{
            operationId: "OP-2025-156",
            clientName: "Distribuidora XYZ S.A.",
            clientRut: "76.123.456-7",
            invoiceCount: globalTotals.count,
            totalAmount: globalTotals.totalNominal,
            netAdvance: globalTotals.netAdvance,
            rate: 2.5,
          }}
        />
      ) : (
        <div>
          {/* Header */}
          <div className="space-y-6 mb-8">
            <div className="flex items-start justify-between">
              <div>
              </div>
            </div>

        {/* KPIs */}
        <div className="space-y-4">
          <FactoringKpiCardGroup
            cards={[
              {
                id: "negotiation",
                label: "En Negociación",
                description: "Pendientes de confirmación",
                value: formatCurrency(kpis.pending.amount),
                count: kpis.pending.count,
                variant: "yellow",
                onAction: () => setActiveKpiFilter(activeKpiFilter === "negotiation" ? null : "negotiation"),
                icon: <Clock />,
              },
              {
                id: "approved",
                label: "Aprobadas",
                description: "Listas para desembolso",
                value: formatCurrency(kpis.eligible.amount),
                count: kpis.eligible.count,
                variant: "lime",
                onAction: () => setActiveKpiFilter(activeKpiFilter === "approved" ? null : "approved"),
                icon: <CheckCircle2 />,
              },
              {
                id: "disbursed",
                label: "Desembolsadas",
                description: "En tránsito a tu cuenta",
                value: "$ 890,500",
                count: 45,
                variant: "orange",
                onAction: () => setActiveKpiFilter(activeKpiFilter === "disbursed" ? null : "disbursed"),
                icon: <DollarSign />,
              },
              {
                id: "finalized",
                label: "Finalizadas",
                description: "Pagadas por el deudor",
                value: "$ 2,150,000",
                count: 128,
                variant: "darkgray",
                onAction: () => setActiveKpiFilter(activeKpiFilter === "finalized" ? null : "finalized"),
                icon: <FileCheck2 />,
              },
            ]}
            activeId={activeKpiFilter ?? undefined}
            onCardClick={(id) => setActiveKpiFilter(activeKpiFilter === id ? null : id as typeof activeKpiFilter)}
          />

          {activeKpiFilter && (
            <div className="mb-4 animate-in fade-in slide-in-from-top-2">
              <div className="space-y-6">
                <div className="flex items-center gap-3">
                    <h3 className="text-xl font-semibold tracking-tight">
                        {activeKpiFilter === "negotiation" && "Facturas en Negociación"}
                        {activeKpiFilter === "approved" && "Facturas Aprobadas"}
                        {activeKpiFilter === "disbursed" && "Facturas Desembolsadas"}
                        {activeKpiFilter === "finalized" && "Facturas Finalizadas"}
                    </h3>
                    <Badge variant="outline" className="font-normal text-muted-foreground">
                        Simulación Global
                    </Badge>
                </div>

                {/* Global Configuration Card */}
                <div className="rounded-xl border bg-card text-card-foreground shadow-sm overflow-hidden">
                    <div className="p-5 flex flex-col lg:flex-row gap-6 items-start lg:items-center justify-between">
                        {/* Simulation Inputs */}
                        <div className="flex-1 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-5 w-full">
                            <div className="space-y-2">
                                <label className="text-xs font-medium text-muted-foreground uppercase tracking-wider">Fecha Pago Est.</label>
                                <Input type="date" className="h-9 bg-background/50 focus:bg-background transition-colors" />
                            </div>
                            <div className="space-y-2">
                                <label className="text-xs font-medium text-muted-foreground uppercase tracking-wider">% Financiamiento</label>
                                <div className="relative">
                                    <Input type="number" className="h-9 bg-background/50 focus:bg-background pr-7 transition-colors" placeholder="100" defaultValue="100" />
                                    <span className="absolute right-3 top-2.5 text-xs text-muted-foreground font-medium">%</span>
                                </div>
                            </div>
                            <div className="space-y-2">
                                <label className="text-xs font-medium text-muted-foreground uppercase tracking-wider">Tasa Descuento</label>
                                <div className="relative">
                                    <Input type="number" className="h-9 bg-background/50 focus:bg-background pr-7 transition-colors" placeholder="1.5" defaultValue="1.5" />
                                    <span className="absolute right-3 top-2.5 text-xs text-muted-foreground font-medium">%</span>
                                </div>
                            </div>
                            <div className="space-y-2">
                                <label className="text-xs font-medium text-muted-foreground uppercase tracking-wider">Comisión Base</label>
                                <div className="relative">
                                    <Input type="number" className="h-9 bg-background/50 focus:bg-background pr-7 transition-colors" placeholder="0.5" defaultValue="0.5" />
                                    <span className="absolute right-3 top-2.5 text-xs text-muted-foreground font-medium">%</span>
                                </div>
                            </div>
                        </div>

                        {/* Divider */}
                        <div className="hidden lg:block w-px h-12 bg-border/60 mx-2"></div>

                        {/* Live Summary Receipt */}
                        <div className="flex items-center gap-6 min-w-max bg-muted/40 p-3 rounded-lg border border-border/40">
                            <div className="space-y-1">
                                <p className="text-[10px] uppercase tracking-wider text-muted-foreground font-medium">Facturas</p>
                                <p className="text-lg font-semibold leading-none">{globalTotals.count}</p>
                            </div>
                            <div className="space-y-1">
                                <p className="text-[10px] uppercase tracking-wider text-muted-foreground font-medium">Valor Facturas</p>
                                <p className="text-lg font-semibold leading-none">{formatCurrency(globalTotals.totalNominal)}</p>
                            </div>
                            <div className="pl-6 border-l border-border/40 space-y-1">
                                <p className="text-[10px] uppercase tracking-wider text-primary font-bold">Valor Adelanto</p>
                                <p className="text-xl font-bold text-primary leading-none tracking-tight">{formatCurrency(globalTotals.netAdvance)}</p>
                            </div>
                        </div>
                    </div>
                    {/* Optional Footer/Hint */}
                    <div className="bg-muted/20 px-5 py-2 border-t border-border/40 flex items-center gap-2">
                        <Info className="h-3.5 w-3.5 text-muted-foreground" />
                        <p className="text-xs text-muted-foreground">
                            Los valores modificados aquí se aplicarán a todas las facturas seleccionadas para calcular el desembolso estimado.
                        </p>
                    </div>
                </div>
              </div>
            </div>
          )}

          {/* Controls Bar */}
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 pt-2">
            <div className="relative w-full md:w-72">
               <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
               <Input 
                 placeholder="Buscar por pagador, factura..." 
                 className="pl-9 bg-card"
               />
            </div>
            
            <div className="flex items-center gap-2 w-full md:w-auto">
               <Button 
                 variant="outline" 
                 className="bg-card"
                 onClick={() => {
                    const newSelection = new Set(selectedInvoices);
                    debtors.forEach(d => {
                        d.invoices.forEach(i => {
                            if (i.status === 'eligible') newSelection.add(i.id);
                        });
                    });
                    setSelectedInvoices(newSelection);
                 }}
               >
                 <CheckCircle2 className="mr-2 h-4 w-4 text-primary" />
                 Seleccionar Todas Elegibles
               </Button>

               {selectedInvoices.size > 0 && (
                 <Button 
                   variant="outline" 
                   className="bg-card text-destructive hover:bg-destructive/10 hover:border-destructive/30"
                   onClick={() => setSelectedInvoices(new Set())}
                 >
                   <X className="mr-2 h-4 w-4" />
                   Deseleccionar Todas
                 </Button>
               )}
               
               <Button variant="outline" className="bg-card">
                 <ArrowDown className="mr-2 h-4 w-4" />
                 Descargar Reporte
               </Button>

               <Button 
                 className="bg-primary text-primary-foreground hover:bg-primary/90"
                 onClick={() => setShowUploadDialog(true)}
               >
                 <Upload className="mr-2 h-4 w-4" />
                 Cargar Facturas
               </Button>
            </div>
          </div>
        </div>
      </div>

      <Separator className="mb-6" />

      {/* Debtors List */}
      <div className="space-y-4">
        <h2 className="text-xl font-semibold">Pagadores ({debtors.length})</h2>

        <Accordion
          type="multiple"
          value={expandedDebtors}
          onValueChange={setExpandedDebtors}
          className="space-y-3"
        >
          {debtors.map((debtor) => {
            const eligibleInvoices = debtor.invoices.filter((i) => i.status === "eligible");
            const eligibleTotal = eligibleInvoices.reduce((sum, inv) => sum + inv.amount, 0);
            const selectedTotal = calculateDebtorTotal(debtor.id);
            const selectedCount = debtor.invoices.filter((inv) => selectedInvoices.has(inv.id)).length;
            const limitProgress = (selectedTotal / debtor.availableLimit) * 100;
            const isLimitReached = selectedTotal >= debtor.availableLimit;
            
            // Invoice counts by status
            const totalInvoices = debtor.invoices.length;

            // New computed metrics
            const totalInvoiceValue = debtor.invoices.reduce((sum, inv) => sum + inv.amount, 0);
            const advanceValue = eligibleTotal * (1 - debtor.rate / 100);

            // Date computations
            const allIssueDates = debtor.invoices.map(inv => new Date(inv.issueDate).getTime());
            const allDueDates = debtor.invoices.map(inv => new Date(inv.dueDate).getTime());
            const earliestIssue = new Date(Math.min(...allIssueDates));
            const latestDue = new Date(Math.max(...allDueDates));
            const lastEventDate = new Date(Math.max(...allIssueDates, ...allDueDates));

            // Timeline progress (how far we are between earliest issue and latest due)
            const now = Date.now();
            const totalSpan = latestDue.getTime() - earliestIssue.getTime();
            const elapsed = now - earliestIssue.getTime();
            const timelineProgress = totalSpan > 0 ? Math.min(Math.max((elapsed / totalSpan) * 100, 0), 100) : 0;

            return (
              <AccordionItem
                key={debtor.id}
                value={debtor.id}
                className="border rounded-lg overflow-hidden"
              >
                <AccordionTrigger className="px-6 hover:no-underline hover:bg-muted/50">
                  <div className="flex flex-col gap-3 w-full py-1">
                    {/* Row 1: Name + Status */}
                    <div className="flex items-center justify-between w-full">
                      <div className="flex items-center gap-3">
                        <div className="font-semibold">{debtor.name}</div>
                        <Badge className="bg-green-100 text-green-700 hover:bg-green-100 font-normal border-none text-xs rounded px-2">
                          {selectedCount}/{totalInvoices} seleccionadas
                        </Badge>
                      </div>
                      <Badge 
                        variant={isLimitReached ? "destructive" : "secondary"} 
                        className={`shrink-0 ${!isLimitReached ? "bg-green-100 text-green-700 hover:bg-green-100" : ""}`}
                      >
                        {isLimitReached ? "Cupo Lleno" : "Disponible"}
                      </Badge>
                    </div>

                    {/* Row 2: Metrics Grid */}
                    <div className="grid grid-cols-3 lg:grid-cols-6 gap-4 items-end w-full">
                      {/* Valor Factura */}
                      <div className="text-left">
                        <div className="text-xs text-muted-foreground mb-0.5">Valor Factura</div>
                        <div className="text-sm font-semibold text-foreground">
                          {formatCurrency(totalInvoiceValue)}
                        </div>
                      </div>

                      {/* Valor Adelanto */}
                      <div className="text-left">
                        <div className="text-xs text-muted-foreground mb-0.5">Valor Adelanto</div>
                        <div className="text-sm font-semibold text-green-600 dark:text-green-400">
                          {formatCurrency(advanceValue)}
                        </div>
                      </div>

                      {/* Cupo Disponible */}
                      <div className="flex flex-col items-start">
                        <div className="text-xs text-muted-foreground mb-0.5">Cupo Disponible</div>
                        <div className="text-sm font-semibold text-foreground mb-1">
                          {formatCurrency(debtor.availableLimit)}
                        </div>
                        <Progress 
                          value={Math.min(limitProgress, 100)} 
                          className="h-1.5 w-24 bg-muted" 
                          indicatorClassName={isLimitReached ? "bg-destructive" : "bg-green-500"}
                        />
                      </div>

                      {/* Monto Elegible */}
                      <div className="text-left">
                        <div className="text-xs text-muted-foreground mb-0.5">Monto Elegible</div>
                        <div className="text-sm font-semibold text-green-600 dark:text-green-400">
                          {formatCurrency(eligibleTotal)}
                        </div>
                      </div>

                      {/* Tasa */}
                      <div className="text-left">
                        <div className="text-xs text-muted-foreground mb-0.5">Tasa N.M.V.</div>
                        <div className="text-sm font-semibold text-green-600 dark:text-green-400">{debtor.rate} %</div>
                      </div>

                      {/* Ultimo Evento */}
                      <div className="text-left">
                        <div className="text-xs text-muted-foreground mb-0.5">Último Evento</div>
                        <div className="text-sm font-semibold text-foreground">
                          {lastEventDate.toISOString().split("T")[0]}
                        </div>
                      </div>


                    </div>
                  </div>
                </AccordionTrigger>

                <AccordionContent className="px-6 pb-6 pt-4">
                  {/* Limit Progress */}
                  <div className="mb-4 p-4 bg-muted/50 rounded-lg space-y-2">
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-muted-foreground">
                        Seleccionado: {formatCurrency(selectedTotal)}
                      </span>
                      <span className={isLimitReached ? "text-destructive font-semibold" : ""}>
                        {limitProgress.toFixed(1)}% del cupo
                      </span>
                    </div>
                    <Progress value={Math.min(limitProgress, 100)} className="h-2" />
                    {isLimitReached && (
                      <Alert variant="destructive" className="mt-2">
                        <AlertCircle className="h-4 w-4" />
                        <AlertDescription className="text-xs">
                          Límite de cupo alcanzado. Deselecciona facturas para agregar otras.
                        </AlertDescription>
                      </Alert>
                    )}
                  </div>

                  {/* Quick Actions */}
                  <div className="mb-4 space-y-3">
                    {/* Search and Sort */}
                    <div className="flex gap-2 items-center w-full md:w-auto flex-1">
                      <div className="relative flex-1 max-w-sm">
                        <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                        <Input
                          placeholder="Buscar por número, ID o monto..."
                          value={debtorFilters[debtor.id] || ""}
                          onChange={(e) =>
                            setDebtorFilters((prev) => ({
                              ...prev,
                              [debtor.id]: e.target.value,
                            }))
                          }
                          className="pl-9"
                        />
                      </div>
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => toggleSort(debtor.id, "amount")}
                        className="gap-2 whitespace-nowrap"
                      >
                        {debtorSorting[debtor.id]?.field === "amount" ? (
                          debtorSorting[debtor.id]?.direction === "asc" ? (
                            <ArrowUp className="h-4 w-4" />
                          ) : (
                            <ArrowDown className="h-4 w-4" />
                          )
                        ) : (
                          <ArrowUpDown className="h-4 w-4" />
                        )}
                        Monto
                      </Button>
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => toggleSort(debtor.id, "dueDate")}
                        className="gap-2 whitespace-nowrap"
                      >
                        {debtorSorting[debtor.id]?.field === "dueDate" ? (
                          debtorSorting[debtor.id]?.direction === "asc" ? (
                            <ArrowUp className="h-4 w-4" />
                          ) : (
                            <ArrowDown className="h-4 w-4" />
                          )
                        ) : (
                          <ArrowUpDown className="h-4 w-4" />
                        )}
                        Vencimiento
                      </Button>
                    </div>

                    {/* Action Buttons */}
                    <div className="flex gap-2 flex-wrap justify-end shrink-0">
                      <Button
                        onClick={() => {
                            const filteredInvoices = getFilteredAndSortedInvoices(debtor);
                            const newSelection = new Set(selectedInvoices);
                            filteredInvoices.forEach((inv) => {
                                if (inv.status === "eligible") newSelection.add(inv.id);
                            });
                            setSelectedInvoices(newSelection);
                        }}
                        variant="outline"
                        size="sm"
                        className="gap-2"
                        disabled={activeKpiFilter === "disbursed" || activeKpiFilter === "finalized"}
                      >
                        <CheckCircle2 className="h-4 w-4" />
                        Seleccionar Todas
                      </Button>
                      {selectedCount > 0 && (
                        <Button
                          onClick={() => deselectAllForDebtor(debtor)}
                          variant="outline"
                          size="sm"
                          className="gap-2"
                        >
                          <X className="h-4 w-4" />
                          Deseleccionar Todas
                        </Button>
                      )}
                    </div>
                  </div>

                  {/* Invoices List */}
                  <ScrollArea className="h-[400px] border rounded-lg">
                    <div className="p-4 space-y-2">
                      {(() => {
                        let filteredInvoices = getFilteredAndSortedInvoices(debtor);
                        const isMockView = activeKpiFilter === "disbursed" || activeKpiFilter === "finalized";
                        
                        // Generar datos mock para vistas sin datos reales
                        if (isMockView && filteredInvoices.length === 0) {
                            const seed = debtor.id.charCodeAt(debtor.id.length - 1);
                            const count = (seed % 3) + 2;
                            filteredInvoices = Array.from({ length: count }).map((_, i) => ({
                                id: `MOCK-${activeKpiFilter}-${debtor.id}-${i}`,
                                invoiceNumber: `F-${activeKpiFilter === 'disbursed' ? '2023' : '2022'}-${1000 + i * seed}`,
                                amount: (i + 1) * 350000 + (seed * 50000),
                                issueDate: activeKpiFilter === 'disbursed' ? "2024-01-15" : "2023-11-10",
                                dueDate: activeKpiFilter === 'disbursed' ? "2024-02-15" : "2023-12-10",
                                status: "eligible" as const, 
                                debtorId: debtor.id,
                                validation: makeValidation("eligible", i),
                            }));
                        }

                        const selectedFilteredCount = filteredInvoices.filter((i) => selectedInvoices.has(i.id)).length;

                        if (debtor.invoices.length === 0) {
                          return (
                            <div className="text-center py-8 text-muted-foreground">
                              No hay facturas disponibles
                            </div>
                          );
                        }

                        if (filteredInvoices.length === 0) {
                          return (
                            <div className="text-center py-8 text-muted-foreground">
                              No se encontraron facturas con el criterio de búsqueda
                            </div>
                          );
                        }

                        return (
                          <>
                            {/* Counter */}
                            <div className="sticky top-0 bg-background z-10 pb-2 mb-2 border-b">
                              <div className="text-sm text-muted-foreground">
                                Mostrando <strong>{filteredInvoices.length}</strong> facturas
                                {selectedFilteredCount > 0 && (
                                  <> • <strong className="text-primary">{selectedFilteredCount} seleccionadas</strong></>
                                )}
                              </div>
                            </div>

                            {filteredInvoices.map((invoice) => {
                          const isSelected = selectedInvoices.has(invoice.id);
                          const isDisabled = invoice.status !== "eligible";
                          const wouldExceedLimit =
                            !isSelected &&
                            selectedTotal + invoice.amount > debtor.availableLimit;

                          return (
                            <div
                              key={invoice.id}
                              className={`flex items-center gap-4 p-3 border rounded-lg ${
                                isSelected
                                  ? "bg-primary/5 border-primary"
                                  : isDisabled && !isMockView
                                  ? "bg-muted/50 opacity-60"
                                  : wouldExceedLimit
                                  ? "border-destructive/50"
                                  : ""
                              }`}
                            >
                              <Checkbox
                                id={invoice.id}
                                checked={isSelected}
                                disabled={isDisabled || isMockView}
                                onCheckedChange={() => toggleInvoice(invoice, debtor)}
                                className={isMockView ? "opacity-50" : ""}
                              />

                              <div className="flex-1 flex flex-wrap items-center gap-4">
                                {/* Invoice ID */}
                                <div className="min-w-[120px]">
                                  <div className="text-sm font-semibold">
                                    {invoice.invoiceNumber}
                                  </div>
                                  <div className="text-xs text-muted-foreground">
                                    {invoice.id}
                                  </div>
                                </div>

                                {/* Valor Factura */}
                                <div className="text-right min-w-[100px]">
                                  <div className="text-sm font-semibold">
                                    {formatCurrency(invoice.amount)}
                                  </div>
                                  <div className="text-xs text-muted-foreground">Valor Factura</div>
                                </div>

                                {/* Valor Adelanto */}
                                <div className="text-right min-w-[100px]">
                                  <div className="text-sm font-semibold text-green-600 dark:text-green-400">
                                    {formatCurrency(invoice.amount * (1 - debtor.rate / 100))}
                                  </div>
                                  <div className="text-xs text-muted-foreground">Valor Adelanto</div>
                                </div>

                                {/* Emisión → Vencimiento */}
                                <div className="flex flex-col gap-1 flex-1 min-w-[140px]">
                                  <div className="text-xs text-muted-foreground">Emisión → Vencimiento</div>
                                  {(() => {
                                    const issueMs = new Date(invoice.issueDate).getTime();
                                    const dueMs = new Date(invoice.dueDate).getTime();
                                    const nowMs = Date.now();
                                    const total = dueMs - issueMs;
                                    const elapsed = nowMs - issueMs;
                                    const invProgress = total > 0 ? Math.max(0, Math.min(100, (elapsed / total) * 100)) : 0;
                                    return (
                                      <div className="flex items-center gap-1.5 w-full">
                                        <span className="text-[10px] text-muted-foreground whitespace-nowrap">
                                          {new Date(invoice.issueDate).toLocaleDateString("es-CL", { day: "2-digit", month: "short" })}
                                        </span>
                                        <Progress
                                          value={invProgress}
                                          className="h-1.5 flex-1 min-w-8 bg-muted"
                                          indicatorClassName="bg-blue-500"
                                        />
                                        <span className="text-[10px] text-muted-foreground whitespace-nowrap">
                                          {new Date(invoice.dueDate).toLocaleDateString("es-CL", { day: "2-digit", month: "short" })}
                                        </span>
                                      </div>
                                    );
                                  })()}
                                </div>

                                {/* Validation Badges */}
                                <div className="flex items-center shrink-0">
                                  <InvoiceValidationBadges validation={invoice.validation} />
                                </div>

                                {/* Actions */}
                                <div className="flex items-center justify-end gap-1 shrink-0 ml-auto">
                                  {activeKpiFilter === "disbursed" ? (
                                    <Badge variant="info-soft-outline" className="gap-1">
                                        <TrendingUp className="h-3 w-3" /> Desembolsada
                                    </Badge>
                                  ) : activeKpiFilter === "finalized" ? (
                                    <Badge variant="success-soft-outline" className="gap-1">
                                        <CheckCircle2 className="h-3 w-3" /> Finalizada
                                    </Badge>
                                  ) : (
                                    getStatusBadge(invoice.status)
                                  )}

                                  <Button
                                    onClick={() => setDetailInvoice(invoice)}
                                    variant="ghost"
                                    size="sm"
                                    className="h-8 w-8 p-0"
                                    title="Ver validaciones"
                                  >
                                    <Eye className="h-4 w-4 text-muted-foreground hover:text-primary" />
                                  </Button>
                                  
                                  {invoice.status === "eligible" && !isMockView && (
                                    <Button
                                      onClick={() => discardInvoice(invoice.id)}
                                      variant="ghost"
                                      size="sm"
                                      className="h-8 w-8 p-0"
                                      title="Descartar factura"
                                    >
                                      <Trash2 className="h-4 w-4 text-muted-foreground hover:text-destructive" />
                                    </Button>
                                  )}
                                </div>
                              </div>

                              {wouldExceedLimit && !isDisabled && !isMockView && (
                                <AlertCircle className="h-4 w-4 text-destructive" />
                              )}
                            </div>
                          );
                        })}
                          </>
                        );
                      })()}
                    </div>
                  </ScrollArea>
                </AccordionContent>
              </AccordionItem>
            );
          })}
        </Accordion>
      </div>

      {/* Sticky Footer Summary Bar - ANIMATED */}
      <AnimatePresence>
        {globalTotals.count > 0 && (
          <motion.div
            initial={{ y: 50, opacity: 0, scale: 0.95 }}
            animate={{ y: 0, opacity: 1, scale: 1 }}
            exit={{ y: 50, opacity: 0, scale: 0.95 }}
            transition={{ type: "spring", stiffness: 300, damping: 25 }}
            className="fixed bottom-6 right-6 z-50"
          >
            <Card className="w-[380px] shadow-2xl border-primary/20 bg-background overflow-hidden">
               <div className="p-5 space-y-5">
                  <div className="flex items-center justify-between">
                     <div className="flex items-center gap-2">
                        <Badge variant="outline" className="border-primary/50 text-primary bg-primary/5">
                           <CheckCircle2 className="h-3 w-3 mr-1.5" />
                           {globalTotals.count} {globalTotals.count === 1 ? "factura" : "facturas"}
                        </Badge>
                        <Badge variant="outline" className="border-primary/50 text-primary bg-primary/5">
                           <Info className="h-3 w-3 mr-1.5" />
                           {debtors.filter(d => d.invoices.some(i => selectedInvoices.has(i.id))).length} {debtors.filter(d => d.invoices.some(i => selectedInvoices.has(i.id))).length === 1 ? "pagador" : "pagadores"}
                        </Badge>
                     </div>
                     <Button 
                        variant="ghost" 
                        size="sm" 
                        onClick={deselectAllGlobal}
                        className="h-8 text-xs text-muted-foreground hover:text-destructive hover:bg-destructive/10"
                     >
                        Limpiar selección
                     </Button>
                  </div>

                  <div className="space-y-1">
                     <div className="flex justify-between items-center text-sm text-muted-foreground">
                        <span>Monto Nominal</span>
                        <span>{formatCurrency(globalTotals.totalNominal)}</span>
                     </div>
                     <div className="flex justify-between items-end pt-2 border-t border-border/50">
                        <div className="text-sm font-medium text-primary flex flex-col">
                           <span>A Recibir (Aprox)</span>
                           <span className="text-[10px] text-muted-foreground font-normal">Luego de descuentos</span>
                        </div>
                        <motion.div 
                           key={globalTotals.netAdvance}
                           className="text-2xl font-bold text-primary tracking-tight"
                        >
                           {formatCurrency(globalTotals.netAdvance)}
                        </motion.div>
                     </div>
                  </div>

                  {globalTotals.remaining > 0 && (
                     <div className="bg-primary/5 border border-primary/20 rounded-md p-2 flex items-start gap-2">
                        <TrendingUp className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                        <p className="text-xs text-muted-foreground">
                           Estás a <span className="font-semibold text-primary">{formatCurrency(globalTotals.remaining)}</span> de tu cupo máximo.
                        </p>
                     </div>
                  )}

                  <Button 
                     onClick={() => setShowNotificationDialog(true)}
                     className="w-full shadow-lg shadow-primary/20" 
                     size="lg"
                  >
                     Confirmar Operación
                     <ChevronRight className="h-4 w-4 ml-1" />
                  </Button>
                  
                  <Button 
                     onClick={() => setShowConfirmDialog(true)}
                     variant="outline"
                     className="w-full" 
                     size="lg"
                  >
                     <Eye className="h-4 w-4 mr-2" />
                     Ver detalle
                  </Button>
               </div>
            </Card>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Upload Dialog */}
      <UploadInvoicesDialog open={showUploadDialog} onOpenChange={setShowUploadDialog} />

      {/* Notification Dialog */}
      <Dialog open={showNotificationDialog} onOpenChange={(open: boolean) => {
        setShowNotificationDialog(open);
        if (!open) setShowConfirmation(false); // Reset confirmation state when dialog closes
      }}>
        <DialogContent className="max-w-md">
          {!showConfirmation ? (
            <>
              <DialogHeader>
                <DialogTitle className="flex items-center gap-2">
                  <Mail className="h-5 w-5 text-primary" />
                  Notificación de Operación
                </DialogTitle>
                <DialogDescription>
                  Configura los correos electrónicos para notificar sobre esta operación
                </DialogDescription>
              </DialogHeader>

              <div className="space-y-4">
                {/* Email Principal */}
                <div className="space-y-2">
                  <Label htmlFor="mainEmail">Correo registrado</Label>
                  <Input 
                    id="mainEmail"
                    type="email"
                    value={notificationEmail}
                    disabled
                    className="bg-muted"
                  />
                  <p className="text-xs text-muted-foreground">
                    Este es tu correo principal registrado
                  </p>
                </div>

                {/* Additional Emails */}
                <div className="space-y-2">
                  <Label htmlFor="additionalEmails">Correos adicionales (opcional)</Label>
                  <Textarea 
                    id="additionalEmails"
                    placeholder="ejemplo@empresa.com, otro@empresa.com"
                    value={additionalEmails}
                    onChange={(e) => setAdditionalEmails(e.target.value)}
                    rows={3}
                    className="resize-none"
                  />
                  <p className="text-xs text-muted-foreground">
                    Separa múltiples correos con comas
                  </p>
                </div>

                {/* Notify Client Toggle */}
                <div className="flex items-center justify-between p-4 border rounded-lg bg-muted/30">
                  <div className="space-y-0.5">
                    <Label htmlFor="notifyClient" className="text-sm font-medium">
                      Notificar al cliente
                    </Label>
                    <p className="text-xs text-muted-foreground">
                      El cliente recibirá un email con los detalles
                    </p>
                  </div>
                  <div className="flex rounded-md border p-1 bg-background">
                    <Button 
                      size="sm" 
                      variant="ghost" 
                      className={`h-8 px-3 text-xs ${notifyClient ? "bg-primary text-primary-foreground hover:bg-primary/90" : "text-muted-foreground hover:bg-muted"}`}
                      onClick={() => setNotifyClient(true)}
                    >
                      {notifyClient && <CheckCircle2 className="h-3 w-3 mr-1" />}
                      Sí
                    </Button>
                    <Button 
                      size="sm" 
                      variant="ghost" 
                      className={`h-8 px-3 text-xs ${!notifyClient ? "bg-primary text-primary-foreground hover:bg-primary/90" : "text-muted-foreground hover:bg-muted"}`}
                      onClick={() => setNotifyClient(false)}
                    >
                      {!notifyClient && <CheckCircle2 className="h-3 w-3 mr-1" />}
                      No
                    </Button>
                  </div>
                </div>

                {/* Summary Alert */}
                <Alert>
                  <Info className="h-4 w-4" />
                  <AlertDescription className="text-xs">
                    Se enviará una notificación a {notificationEmail}
                    {additionalEmails && ` y a ${additionalEmails.split(',').length} correo(s) adicional(es)`}
                    {notifyClient && ". El cliente también será notificado"}.
                  </AlertDescription>
                </Alert>
              </div>

              <DialogFooter>
                <Button variant="outline" onClick={() => setShowNotificationDialog(false)}>
                  Cancelar
                </Button>
                <Button
                  onClick={() => {
                    // Mostrar confirmación
                    setShowConfirmation(true);
                    // Here: Submit to backend with notification preferences
                    console.log("Operación confirmada con notificaciones", {
                      invoices: Array.from(selectedInvoices),
                      totals: globalTotals,
                      notifications: {
                        mainEmail: notificationEmail,
                        additionalEmails: additionalEmails.split(',').map(e => e.trim()).filter(e => e),
                        notifyClient,
                      }
                    });
                  }}
                >
                  <Mail className="h-4 w-4 mr-2" />
                  Confirmar y Enviar
                </Button>
              </DialogFooter>
            </>
          ) : (
            <>
              {/* Vista de confirmación exitosa */}
              <div className="py-6">
                <div className="flex flex-col items-center gap-4 text-center">
                  <div className="rounded-full bg-green-100 dark:bg-green-950 p-3">
                    <CheckCircle2 className="h-12 w-12 text-green-600 dark:text-green-400" />
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-xl font-semibold">¡Operación Enviada!</h3>
                    <p className="text-sm text-muted-foreground max-w-sm">
                      La operación ha sido enviada exitosamente. Se han notificado a los correos configurados.
                    </p>
                  </div>
                  <div className="w-full pt-4 border-t">
                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Facturas procesadas:</span>
                        <span className="font-medium">{globalTotals.count}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Monto total:</span>
                        <span className="font-medium">{formatCurrency(globalTotals.totalNominal)}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <DialogFooter className="gap-2 sm:gap-0">
                <Button 
                  variant="outline" 
                  onClick={() => {
                    setShowConfirmation(false);
                    setShowNotificationDialog(false);
                  }}
                  className="flex-1"
                >
                  Volver
                </Button>
                <Button 
                  onClick={() => {
                    setShowConfirmation(false);
                    setShowNotificationDialog(false);
                    setShowOperationSummary(true);
                  }}
                  className="flex-1"
                >
                  <Eye className="h-4 w-4 mr-2" />
                  Ver Resumen
                </Button>
              </DialogFooter>
            </>
          )}
        </DialogContent>
      </Dialog>

      {/* Confirmation Dialog */}
      <Dialog open={showConfirmDialog} onOpenChange={setShowConfirmDialog}>
        <DialogContent className="max-w-2xl">
          <DialogHeader>
            <DialogTitle>Confirmación de Operación de Factoring</DialogTitle>
            <DialogDescription>
              Revisa los términos y condiciones antes de confirmar
            </DialogDescription>
          </DialogHeader>

          <div className="space-y-4">
            {/* Summary */}
            <Card>
              <CardHeader>
                <CardTitle className="text-base">Resumen de la Operación</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Facturas seleccionadas:</span>
                  <span className="font-semibold">{globalTotals.count}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Monto total nominal:</span>
                  <span className="font-semibold">
                    {formatCurrency(globalTotals.totalNominal)}
                  </span>
                </div>
                <Separator />
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Descuentos por tasa:</span>
                  <span className="text-destructive">
                    -{formatCurrency(globalTotals.totalNominal - globalTotals.netAdvance)}
                  </span>
                </div>
                <div className="flex justify-between text-lg">
                  <span className="font-semibold">Adelanto neto a recibir:</span>
                  <span className="font-semibold text-primary">
                    {formatCurrency(globalTotals.netAdvance)}
                  </span>
                </div>
              </CardContent>
            </Card>

            {/* Breakdown by Debtor */}
            <Card>
              <CardHeader>
                <CardTitle className="text-base">Desglose por Pagador</CardTitle>
              </CardHeader>
              <CardContent>
                <ScrollArea className="h-[200px]">
                  <div className="space-y-3">
                    {debtors
                      .filter((d) => calculateDebtorTotal(d.id) > 0)
                      .map((debtor) => {
                        const total = calculateDebtorTotal(debtor.id);
                        const count = debtor.invoices.filter((inv) =>
                          selectedInvoices.has(inv.id)
                        ).length;
                        const discount = total * (debtor.rate / 100);
                        const net = total - discount;

                        return (
                          <div key={debtor.id} className="p-3 border rounded-lg space-y-2">
                            <div className="flex justify-between items-center">
                              <div>
                                <div className="font-semibold">{debtor.name}</div>
                                <div className="text-xs text-muted-foreground">
                                  {count} facturas • Tasa {debtor.rate}%
                                </div>
                              </div>
                              <Badge>{formatCurrency(net)}</Badge>
                            </div>
                          </div>
                        );
                      })}
                  </div>
                </ScrollArea>
              </CardContent>
            </Card>

            {/* Terms */}
            <Alert>
              <AlertCircle className="h-4 w-4" />
              <AlertDescription className="text-xs space-y-2">
                <p className="font-semibold">Términos y Condiciones:</p>
                <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                  <li>El adelanto se depositará en tu cuenta en 24-48 horas hábiles</li>
                  <li>Las tasas aplicadas son las vigentes al momento de la operación</li>
                  <li>Te harás responsable de la validez de las facturas cedidas</li>
                  <li>Los pagadores serán notificados de la cesión de facturas</li>
                </ul>
              </AlertDescription>
            </Alert>
          </div>

          <DialogFooter>
            <Button variant="outline" onClick={() => setShowConfirmDialog(false)}>
              Cancelar
            </Button>
            <Button
              onClick={() => {
                setShowConfirmDialog(false);
                // Here: Submit to backend
                console.log("Operación confirmada", {
                  invoices: Array.from(selectedInvoices),
                  totals: globalTotals,
                });
              }}
            >
              Confirmar y Procesar
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      {/* Invoice Validation Detail Panel */}
      <InvoiceValidationPanel
        open={!!detailInvoice}
        onOpenChange={(open) => { if (!open) setDetailInvoice(null); }}
        invoiceNumber={detailInvoice?.invoiceNumber ?? ""}
        invoiceId={detailInvoice?.id ?? ""}
        amount={detailInvoice?.amount ?? 0}
        formatCurrency={formatCurrency}
        validation={detailInvoice?.validation ?? {
          endorsability: "not-determinable",
          creditLimitStatus: "no-info",
          creditLimitCondition: "none",
          eligibility: "pending",
          dianValidation: "pending",
          negotiationCriteria: [],
          radianCriteria: [],
        }}
      />
        </div>
      )}
    </div>
  );
}
