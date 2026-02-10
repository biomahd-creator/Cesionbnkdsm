import React from "react";
import { Badge } from "../../ui/badge";
import { Separator } from "../../ui/separator";
import { ScrollArea } from "../../ui/scroll-area";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetDescription,
} from "../../ui/sheet";
import {
  CheckCircle2,
  XCircle,
  AlertCircle,
  HelpCircle,
  ShieldCheck,
  ShieldAlert,
  ShieldX,
  FileCheck2,
  FileClock,
  FileX,
  FileWarning,
  Landmark,
  Scale,
  CircleDot,
} from "lucide-react";

// ── Types ──────────────────────────────────────────────────
export type EndorsabilityStatus = "endorsable" | "not-endorsable" | "possible" | "not-determinable";

export type CreditLimitStatus =
  | "no-info"
  | "requested"
  | "in-process"
  | "approved"
  | "rejected"
  | "annulled"
  | "conditional"
  | "not-applicable";

export type CreditLimitCondition =
  | "none"
  | "risk-aggravation"
  | "no-available-limit"
  | "restricted"
  | "annulled-conditional"
  | "approved-risk-denied-policy"
  | "denied-risk-approved-policy";

export type EligibilityStatus = "pending" | "eligible" | "not-eligible";

export type DianValidationStatus = "pending" | "success" | "pending-events" | "rejected";

export interface ValidationCriterion {
  rule: string;
  passed: boolean;
  detail: string;
}

export interface InvoiceValidation {
  endorsability: EndorsabilityStatus;
  creditLimitStatus: CreditLimitStatus;
  creditLimitCondition: CreditLimitCondition;
  eligibility: EligibilityStatus;
  dianValidation: DianValidationStatus;
  negotiationCriteria: ValidationCriterion[];
  radianCriteria: ValidationCriterion[];
}

// ── Config maps ────────────────────────────────────────────
const endorsabilityConfig: Record<EndorsabilityStatus, { label: string; color: string; icon: React.ElementType; description: string }> = {
  endorsable: {
    label: "Endosable",
    color: "text-green-600 dark:text-green-400",
    icon: CheckCircle2,
    description: "La factura cumple todos los criterios y está habilitada para ser endosada sin restricciones.",
  },
  "not-endorsable": {
    label: "No Endosable",
    color: "text-red-600 dark:text-red-400",
    icon: XCircle,
    description: "La factura no puede ser endosada. Tiene restricciones DIAN, inconsistencias o ya está comprometida.",
  },
  possible: {
    label: "Posible Endoso",
    color: "text-amber-600 dark:text-amber-400",
    icon: AlertCircle,
    description: "Podría ser endosada, pero requiere validaciones adicionales o presenta condiciones que deben revisarse.",
  },
  "not-determinable": {
    label: "No Determinable",
    color: "text-slate-500 dark:text-slate-400",
    icon: HelpCircle,
    description: "No es posible establecer si es endosable debido a información incompleta o falta de validaciones.",
  },
};

const creditLimitStatusConfig: Record<CreditLimitStatus, { label: string; color: string; icon: React.ElementType }> = {
  "no-info": { label: "Sin Información", color: "text-slate-500 dark:text-slate-400", icon: HelpCircle },
  requested: { label: "Solicitado", color: "text-blue-600 dark:text-blue-400", icon: FileClock },
  "in-process": { label: "En Trámite", color: "text-amber-600 dark:text-amber-400", icon: FileClock },
  approved: { label: "Aprobado", color: "text-green-600 dark:text-green-400", icon: ShieldCheck },
  rejected: { label: "Rechazado", color: "text-red-600 dark:text-red-400", icon: ShieldX },
  annulled: { label: "Anulado", color: "text-red-600 dark:text-red-400", icon: XCircle },
  conditional: { label: "Condicional", color: "text-amber-600 dark:text-amber-400", icon: ShieldAlert },
  "not-applicable": { label: "No Aplica", color: "text-slate-500 dark:text-slate-400", icon: CircleDot },
};

const creditConditionConfig: Record<CreditLimitCondition, { label: string; color: string }> = {
  none: { label: "Ninguna condición", color: "text-green-600 dark:text-green-400" },
  "risk-aggravation": { label: "Agravamiento de riesgo", color: "text-red-600 dark:text-red-400" },
  "no-available-limit": { label: "Sin cupo disponible", color: "text-red-600 dark:text-red-400" },
  restricted: { label: "Restringido", color: "text-amber-600 dark:text-amber-400" },
  "annulled-conditional": { label: "Anulado condicional", color: "text-red-600 dark:text-red-400" },
  "approved-risk-denied-policy": { label: "Aprobado en Riesgos / Negado en Pólizas", color: "text-red-600 dark:text-red-400" },
  "denied-risk-approved-policy": { label: "Negado en Riesgos / Aprobado en Pólizas", color: "text-red-600 dark:text-red-400" },
};

const eligibilityConfig: Record<EligibilityStatus, { label: string; color: string; icon: React.ElementType }> = {
  pending: { label: "Pendiente", color: "text-amber-600 dark:text-amber-400", icon: FileClock },
  eligible: { label: "Elegible", color: "text-green-600 dark:text-green-400", icon: FileCheck2 },
  "not-eligible": { label: "No Elegible", color: "text-red-600 dark:text-red-400", icon: FileX },
};

const dianConfig: Record<DianValidationStatus, { label: string; color: string; icon: React.ElementType }> = {
  pending: { label: "Pendiente", color: "text-amber-600 dark:text-amber-400", icon: FileClock },
  success: { label: "Exitosa", color: "text-green-600 dark:text-green-400", icon: CheckCircle2 },
  "pending-events": { label: "Pendiente de Eventos", color: "text-amber-600 dark:text-amber-400", icon: FileWarning },
  rejected: { label: "Rechazada", color: "text-red-600 dark:text-red-400", icon: XCircle },
};

// ── Helper: Semaphore dot ──────────────────────────────────
function SemaphoreDot({ status }: { status: "pass" | "warn" | "fail" | "unknown" }) {
  const colors = {
    pass: "bg-green-500",
    warn: "bg-amber-500",
    fail: "bg-red-500",
    unknown: "bg-slate-400",
  };
  return <span className={`inline-block h-2.5 w-2.5 rounded-full shrink-0 ${colors[status]}`} />;
}

function getSemaphoreStatus(val: string): "pass" | "warn" | "fail" | "unknown" {
  const passValues = ["endorsable", "approved", "none", "eligible", "success", "not-applicable"];
  const warnValues = ["possible", "in-process", "requested", "conditional", "restricted", "pending", "pending-events"];
  const failValues = ["not-endorsable", "rejected", "annulled", "not-eligible", "no-available-limit", "risk-aggravation", "annulled-conditional", "approved-risk-denied-policy", "denied-risk-approved-policy", "no-info"];
  if (passValues.includes(val)) return "pass";
  if (warnValues.includes(val)) return "warn";
  if (failValues.includes(val)) return "fail";
  return "unknown";
}

// ── Compact Badge for Row ──────────────────────────────────
export function InvoiceValidationBadges({ validation }: { validation: InvoiceValidation }) {
  const endorsConfig = endorsabilityConfig[validation.endorsability];
  const EndorsIcon = endorsConfig.icon;

  const eligConfig = eligibilityConfig[validation.eligibility];
  const EligIcon = eligConfig.icon;

  const dConfig = dianConfig[validation.dianValidation];
  const DianIcon = dConfig.icon;

  return (
    <div className="flex items-center gap-1">
      <span className="inline-flex" title={`Endosabilidad: ${endorsConfig.label}`}>
        <Badge
          variant="outline"
          className={`px-1.5 py-0 gap-0.5 ${endorsConfig.color} border-current/30`}
        >
          <EndorsIcon className="h-3 w-3" />
          <span className="text-[10px] hidden xl:inline">{endorsConfig.label}</span>
        </Badge>
      </span>
      <span className="inline-flex" title={`Elegibilidad: ${eligConfig.label}`}>
        <Badge
          variant="outline"
          className={`px-1.5 py-0 gap-0.5 ${eligConfig.color} border-current/30`}
        >
          <EligIcon className="h-3 w-3" />
          <span className="text-[10px] hidden xl:inline">{eligConfig.label}</span>
        </Badge>
      </span>
      <span className="inline-flex" title={`DIAN: ${dConfig.label}`}>
        <Badge
          variant="outline"
          className={`px-1.5 py-0 gap-0.5 ${dConfig.color} border-current/30`}
        >
          <DianIcon className="h-3 w-3" />
          <span className="text-[10px] hidden xl:inline">{dConfig.label}</span>
        </Badge>
      </span>
    </div>
  );
}

// ── Section component ──────────────────────────────────────
function ValidationSection({
  title,
  icon: Icon,
  semaphore,
  children,
}: {
  title: string;
  icon: React.ElementType;
  semaphore: "pass" | "warn" | "fail" | "unknown";
  children: React.ReactNode;
}) {
  return (
    <div className="space-y-2">
      <div className="flex items-center gap-2">
        <SemaphoreDot status={semaphore} />
        <Icon className="h-4 w-4 text-muted-foreground" />
        <span className="text-sm font-medium text-foreground">{title}</span>
      </div>
      <div className="ml-6 space-y-1.5">{children}</div>
    </div>
  );
}

// ── Criteria list ──────────────────────────────────────────
function CriteriaList({ criteria }: { criteria: ValidationCriterion[] }) {
  if (criteria.length === 0) {
    return <p className="text-xs text-muted-foreground italic">Sin criterios registrados.</p>;
  }
  return (
    <div className="space-y-1">
      {criteria.map((c, i) => (
        <div key={i} className="flex items-start gap-2">
          {c.passed ? (
            <CheckCircle2 className="h-3.5 w-3.5 text-green-600 dark:text-green-400 mt-0.5 shrink-0" />
          ) : (
            <XCircle className="h-3.5 w-3.5 text-red-600 dark:text-red-400 mt-0.5 shrink-0" />
          )}
          <div>
            <p className="text-xs text-foreground">{c.rule}</p>
            <p className="text-[11px] text-muted-foreground">{c.detail}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

// ── Main Panel Component ───────────────────────────────────
interface InvoiceValidationPanelProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  invoiceNumber: string;
  invoiceId: string;
  amount: number;
  formatCurrency: (amount: number) => string;
  validation: InvoiceValidation;
}

export function InvoiceValidationPanel({
  open,
  onOpenChange,
  invoiceNumber,
  invoiceId,
  amount,
  formatCurrency,
  validation,
}: InvoiceValidationPanelProps) {
  const endorsCfg = endorsabilityConfig[validation.endorsability];
  const EndorsIcon = endorsCfg.icon;

  const creditCfg = creditLimitStatusConfig[validation.creditLimitStatus];
  const CreditIcon = creditCfg.icon;

  const conditionCfg = creditConditionConfig[validation.creditLimitCondition];

  const eligCfg = eligibilityConfig[validation.eligibility];
  const EligIcon = eligCfg.icon;

  const dianCfg = dianConfig[validation.dianValidation];
  const DianIcon = dianCfg.icon;

  // Overall health score
  const dimensions = [
    validation.endorsability,
    validation.creditLimitStatus,
    validation.creditLimitCondition,
    validation.eligibility,
    validation.dianValidation,
  ];
  const passCount = dimensions.filter(d => getSemaphoreStatus(d) === "pass").length;
  const failCount = dimensions.filter(d => getSemaphoreStatus(d) === "fail").length;
  const overallStatus: "pass" | "warn" | "fail" =
    failCount > 0 ? "fail" : passCount === dimensions.length ? "pass" : "warn";

  const overallLabel = {
    pass: "Todas las validaciones aprobadas",
    warn: "Validaciones con observaciones",
    fail: "Validaciones con bloqueos",
  };
  const overallBadgeVariant = {
    pass: "success-soft-outline" as const,
    warn: "warning-soft-outline" as const,
    fail: "destructive-soft-outline" as const,
  };

  return (
    <Sheet open={open} onOpenChange={onOpenChange}>
      <SheetContent side="right" className="w-full sm:max-w-lg p-0">
        <SheetHeader className="px-6 pt-6 pb-4 border-b">
          <div className="flex items-center gap-3">
            <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center">
              <Scale className="h-5 w-5 text-primary" />
            </div>
            <div className="flex-1 min-w-0">
              <SheetTitle className="text-base">{invoiceNumber}</SheetTitle>
              <SheetDescription className="text-xs">
                {invoiceId} &middot; {formatCurrency(amount)}
              </SheetDescription>
            </div>
          </div>
          <div className="mt-3">
            <Badge variant={overallBadgeVariant[overallStatus]} className="gap-1.5">
              <SemaphoreDot status={overallStatus} />
              {overallLabel[overallStatus]}
            </Badge>
          </div>
        </SheetHeader>

        <ScrollArea className="flex-1 h-[calc(100vh-180px)]">
          <div className="px-6 py-5 space-y-5">
            {/* 1. Endorsability */}
            <ValidationSection
              title="Endosabilidad"
              icon={FileCheck2}
              semaphore={getSemaphoreStatus(validation.endorsability)}
            >
              <div className="flex items-center gap-2">
                <EndorsIcon className={`h-4 w-4 ${endorsCfg.color}`} />
                <span className={`text-sm font-medium ${endorsCfg.color}`}>{endorsCfg.label}</span>
              </div>
              <p className="text-xs text-muted-foreground">{endorsCfg.description}</p>
            </ValidationSection>

            <Separator />

            {/* 2. Credit Limit Status */}
            <ValidationSection
              title="Estado del Cupo"
              icon={Landmark}
              semaphore={getSemaphoreStatus(validation.creditLimitStatus)}
            >
              <div className="flex items-center gap-2">
                <CreditIcon className={`h-4 w-4 ${creditCfg.color}`} />
                <span className={`text-sm font-medium ${creditCfg.color}`}>{creditCfg.label}</span>
              </div>
            </ValidationSection>

            <Separator />

            {/* 3. Credit Limit Conditions */}
            <ValidationSection
              title="Condiciones del Cupo"
              icon={ShieldAlert}
              semaphore={getSemaphoreStatus(validation.creditLimitCondition)}
            >
              <div className="flex items-center gap-2">
                <span className={`text-sm ${conditionCfg.color}`}>{conditionCfg.label}</span>
              </div>
            </ValidationSection>

            <Separator />

            {/* 4. Eligibility */}
            <ValidationSection
              title="Elegibilidad"
              icon={FileCheck2}
              semaphore={getSemaphoreStatus(validation.eligibility)}
            >
              <div className="flex items-center gap-2">
                <EligIcon className={`h-4 w-4 ${eligCfg.color}`} />
                <span className={`text-sm font-medium ${eligCfg.color}`}>{eligCfg.label}</span>
              </div>
            </ValidationSection>

            <Separator />

            {/* 5. Negotiation Policy Criteria */}
            <ValidationSection
              title="Criterios de Negociación"
              icon={Scale}
              semaphore={
                validation.negotiationCriteria.length === 0
                  ? "unknown"
                  : validation.negotiationCriteria.every(c => c.passed)
                  ? "pass"
                  : validation.negotiationCriteria.some(c => !c.passed)
                  ? "fail"
                  : "warn"
              }
            >
              <CriteriaList criteria={validation.negotiationCriteria} />
            </ValidationSection>

            <Separator />

            {/* 6. DIAN Validation */}
            <ValidationSection
              title="Validación DIAN"
              icon={Landmark}
              semaphore={getSemaphoreStatus(validation.dianValidation)}
            >
              <div className="flex items-center gap-2">
                <DianIcon className={`h-4 w-4 ${dianCfg.color}`} />
                <span className={`text-sm font-medium ${dianCfg.color}`}>{dianCfg.label}</span>
              </div>
            </ValidationSection>

            <Separator />

            {/* 7. RADIAN Criteria */}
            <ValidationSection
              title="Criterios RADIAN"
              icon={ShieldCheck}
              semaphore={
                validation.radianCriteria.length === 0
                  ? "unknown"
                  : validation.radianCriteria.every(c => c.passed)
                  ? "pass"
                  : validation.radianCriteria.some(c => !c.passed)
                  ? "fail"
                  : "warn"
              }
            >
              <CriteriaList criteria={validation.radianCriteria} />
            </ValidationSection>
          </div>
        </ScrollArea>
      </SheetContent>
    </Sheet>
  );
}