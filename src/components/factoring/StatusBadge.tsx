import { Badge } from "../ui/badge";
import { cn } from "../../lib/utils";

/**
 * StatusBadge — Factoring domain status → Badge variant
 * ───────────────────────────────────────────────────────
 * Single source of truth for all factoring status mappings.
 * Any new business status should be added here first.
 *
 * Semantic guide:
 *   neutral-soft-outline  → Initial / Draft / Discarded / Archived (no color weight)
 *   warning-soft-outline  → In-progress / Pending / Overdue / Expiring (needs attention)
 *   info-soft-outline     → Transitional / Active flow step (informational)
 *   secondary-soft-outline→ Brand-flow step (Negotiated / Endorsed — CESIONBNK acting)
 *   success-soft-outline  → Completed / Approved / Active / Paid (positive terminal)
 *   destructive-soft-outline → Rejected / Cancelled / Not eligible (negative terminal)
 *   purple-soft-outline   → Special / Premium / Regulatory (placeholder — awaiting brand colors)
 */

type BadgeVariant =
  | "neutral-soft-outline"
  | "warning-soft-outline"
  | "info-soft-outline"
  | "secondary-soft-outline"
  | "success-soft-outline"
  | "destructive-soft-outline"
  | "purple-soft-outline"
  | "neutral-soft"
  | "default";

const statusVariantMap: Record<string, BadgeVariant> = {
  // ── Operación lifecycle (OperationsList) ──────────────────────────
  Creada:       "neutral-soft-outline",    // Initial draft state
  "En Proceso": "warning-soft-outline",    // Under review
  Negociada:    "secondary-soft-outline",  // Brand flow: CESIONBNK negotiating
  Endosada:     "secondary-soft-outline",  // Brand flow: endorsed/transferred
  Liquidada:    "success-soft-outline",    // Terminal: completed + paid out
  Rechazada:    "destructive-soft-outline",// Terminal: rejected

  // ── Factura lifecycle (TreeTable, OperationsList) ──────────────────
  pendiente:    "warning-soft-outline",    // Awaiting action
  aprobada:     "success-soft-outline",    // Approved
  desembolsada: "info-soft-outline",       // Disbursed — informational step
  cancelada:    "destructive-soft-outline",// Cancelled
  vigente:      "success-soft-outline",    // Active/valid
  vencida:      "destructive-soft-outline",// Overdue — financial risk
  pagada:       "info-soft-outline",       // Paid — informational terminal

  // ── Invoice eligibility (FactoringSelectionPage, InvoiceValidationPanel) ──
  elegible:       "success-soft-outline",
  "not-eligible": "neutral-soft-outline",  // Factual state, not an error
  discarded:      "neutral-soft-outline",  // Discarded — closed, no color weight
  Descartada:     "neutral-soft-outline",

  // ── Generic payment states (StatusBadge DSM usage) ──────────────────
  paid:      "success-soft-outline",
  pending:   "warning-soft-outline",
  overdue:   "destructive-soft-outline",

  // ── Misc ─────────────────────────────────────────────────────────────
  Aprobada:   "success-soft-outline",
  Pendiente:  "warning-soft-outline",
  Vigente:    "success-soft-outline",
  Vencida:    "destructive-soft-outline",
  Pagada:     "info-soft-outline",
  urgente:    "destructive-soft-outline",
  completado: "success-soft-outline",
  activo:     "success-soft-outline",
  inactivo:   "neutral-soft-outline",
  bloqueado:  "destructive-soft-outline",
  archivado:  "neutral-soft-outline",
  draft:      "neutral-soft-outline",
  "En Revision": "warning-soft-outline",
  "No Elegible": "neutral-soft-outline",
  Endosable:     "success-soft-outline",
};

interface StatusBadgeProps {
  status: string;
  className?: string;
}

export function StatusBadge({ status, className }: StatusBadgeProps) {
  const variant: BadgeVariant = statusVariantMap[status] ?? "neutral-soft-outline";
  return (
    <Badge variant={variant} className={cn(className)}>
      {status}
    </Badge>
  );
}

/** Returns the correct Badge variant for a given status string. */
export function getStatusVariant(status: string): BadgeVariant {
  return statusVariantMap[status] ?? "neutral-soft-outline";
}

// ── Legacy helpers (kept for backwards compatibility) ─────────────────

const colorMap: Record<string, string> = {
  paid:       "text-green-700 border-green-300 bg-green-100",
  pending:    "text-amber-700 border-amber-300 bg-amber-100",
  overdue:    "text-red-700 border-red-300 bg-red-100",
  Aprobada:   "text-green-700 border-green-300 bg-green-100",
  Pendiente:  "text-amber-700 border-amber-300 bg-amber-100",
  Rechazada:  "text-red-700 border-red-300 bg-red-100",
  urgente:    "text-red-700 border-red-300 bg-red-100",
  completado: "text-green-700 border-green-300 bg-green-100",
  Creada:     "text-slate-600 border-slate-300 bg-slate-100",
  Descartada: "text-slate-600 border-slate-300 bg-slate-100",
  vigente:    "text-green-700 border-green-300 bg-green-100",
  vencida:    "text-red-700 border-red-300 bg-red-100",
  pagada:     "text-blue-700 border-blue-300 bg-blue-100",
};

export function getStatusColor(status: string): string {
  return colorMap[status] ?? colorMap["Pendiente"];
}

export function getStatusIconBg(status: string): string {
  const bgMap: Record<string, string> = {
    paid: "bg-green-100", pending: "bg-amber-100", overdue: "bg-red-100",
    Aprobada: "bg-green-100", Pendiente: "bg-amber-100", Rechazada: "bg-red-100",
    urgente: "bg-red-100", completado: "bg-green-100",
    Creada: "bg-slate-100", Descartada: "bg-slate-100",
    vigente: "bg-green-100", vencida: "bg-red-100", pagada: "bg-blue-100",
  };
  return bgMap[status] ?? bgMap["Pendiente"];
}

export function getStatusTextColor(status: string): string {
  const textMap: Record<string, string> = {
    paid: "text-green-700", pending: "text-amber-700", overdue: "text-red-700",
    Aprobada: "text-green-700", Pendiente: "text-amber-700", Rechazada: "text-red-700",
    urgente: "text-red-700", completado: "text-green-700",
    Creada: "text-slate-600", Descartada: "text-slate-600",
    vigente: "text-green-700", vencida: "text-red-700", pagada: "text-blue-700",
  };
  return textMap[status] ?? textMap["Pendiente"];
}
