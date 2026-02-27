/**
 * OperationConfirmDialog
 * ──────────────────────
 * Capa: Patterns > Factoring
 *
 * Modal de confirmación de operación de factoring.
 * Muestra notificación a pagadores, términos y condiciones,
 * y el resumen final de la operación.
 */
import { useState, useMemo } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
} from "../../ui/dialog";
import { Button } from "../../ui/button";
import { Textarea } from "../../ui/textarea";
import { Separator } from "../../ui/separator";
import { cn } from "../../ui/utils";
import { Info, CheckCircle2, ChevronRight, ChevronDown } from "lucide-react";

// ── Types ────────────────────────────────────────────────────────────

export interface ConfirmInvoice {
  id: string;
  payor: string;
  amount: number;
  advanceRate: number;
  number: string;
}

export interface ConfirmMetrics {
  totalAmount: number;
  netAdvance: number;
  exceeded: boolean;
}

export interface OperationConfirmDialogProps {
  open: boolean;
  onClose: () => void;
  onConfirm: () => void;
  selectedInvoices: ConfirmInvoice[];
  metrics: ConfirmMetrics;
  uniquePayors: number;
  onDeselectAll: () => void;
}

// ── Helpers ──────────────────────────────────────────────────────────

function formatCLP(value: number): string {
  return new Intl.NumberFormat("es-CL", {
    style: "currency",
    currency: "CLP",
    maximumFractionDigits: 0,
  }).format(value);
}

// Mock email por pagador
function getPayorEmails(name: string) {
  const mockEmails: Record<string, { registro: string; pagaduria: string }> = {
    "Comercial Andina S.A.": { registro: "andina@correo.com", pagaduria: "pagos@andina.com" },
    "Distribuidora Central Ltda.": { registro: "central@correo.com", pagaduria: "pagos@central.com" },
    "Importadora del Sur S.A.S.": { registro: "sur@correo.com", pagaduria: "pagos@delsur.com" },
  };
  return mockEmails[name] ?? { registro: "correo@dominio.com", pagaduria: "correo@dominio.com" };
}

// ── Sub-components ───────────────────────────────────────────────────

interface PayorGroupProps {
  name: string;
  invoiceCount: number;
  avgRate: number;
  totalAdvance: number;
  isFirst: boolean;
  additionalEmails: string;
  onAdditionalEmailsChange: (v: string) => void;
  notifyClient: boolean;
  onNotifyClientChange: (v: boolean) => void;
}

function PayorGroup({
  name,
  invoiceCount,
  avgRate,
  totalAdvance,
  isFirst,
  additionalEmails,
  onAdditionalEmailsChange,
  notifyClient,
  onNotifyClientChange,
}: PayorGroupProps) {
  const emails = getPayorEmails(name);
  const [emailsOpen, setEmailsOpen] = useState(false);

  return (
    <div
      className={cn(
        "rounded-lg border overflow-hidden",
        isFirst ? "border-primary" : "border-border"
      )}
    >
      {/* Company header */}
      <div className="flex items-center justify-between gap-4 px-3 py-3">
        <div className="shrink-0 min-w-0">
          <p className="text-sm font-semibold text-foreground truncate">{name}</p>
          <p className="text-xs text-muted-foreground mt-0.5">
            {invoiceCount} factura{invoiceCount !== 1 ? "s" : ""} • Tasa {(avgRate * 100).toFixed(1)}%
          </p>
        </div>
        <div className="flex flex-col gap-0.5 flex-1 min-w-0">
          <p className="text-xs text-muted-foreground truncate">
            Correo registrado: {emails.registro}
          </p>
          <p className="text-xs text-muted-foreground truncate">
            Correo pagaduría: {emails.pagaduria}
          </p>
        </div>
        <div className="rounded-lg bg-primary px-2.5 py-1 shrink-0">
          <span className="text-xs text-primary-foreground font-medium">
            {formatCLP(totalAdvance)}
          </span>
        </div>
      </div>

      {/* Per-company controls */}
      <div className="border-t border-border bg-muted/20 px-3 py-2.5 flex flex-col gap-2.5">

        {/* Additional emails accordion */}
        <div className="rounded-md border border-border overflow-hidden">
          <button
            type="button"
            onClick={() => setEmailsOpen((prev) => !prev)}
            className="w-full flex items-center justify-between px-3 py-2 bg-muted/30 hover:bg-muted/50 transition-colors"
          >
            <span className="text-xs font-medium text-foreground">
              Correos adicionales (opcional)
            </span>
            <ChevronDown
              className={cn(
                "h-3.5 w-3.5 text-muted-foreground transition-transform duration-200",
                emailsOpen && "rotate-180"
              )}
            />
          </button>
          <div
            className={cn(
              "grid transition-all duration-200",
              emailsOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
            )}
          >
            <div className="overflow-hidden">
              <div className="px-3 py-2.5 flex flex-col gap-1.5 bg-background">
                <Textarea
                  placeholder="ejemplo@empresa.com, otro@empresa.com"
                  value={additionalEmails}
                  onChange={(e) => onAdditionalEmailsChange(e.target.value)}
                  className="h-14 resize-none bg-background text-xs"
                />
                <p className="text-[11px] text-muted-foreground">
                  Separa múltiples correos con comas
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Notify client toggle */}
        <div className="flex items-center justify-between gap-3">
          <div>
            <p className="text-xs font-medium text-foreground">Notificar al cliente</p>
            <p className="text-[11px] text-muted-foreground mt-0.5">
              Recibirá un email con los detalles
            </p>
          </div>
          <div className="flex rounded-md border border-border bg-background p-0.5 gap-0.5 shrink-0">
            <button
              onClick={() => onNotifyClientChange(true)}
              className={cn(
                "flex items-center gap-1 px-2.5 h-6 rounded text-[11px] font-medium transition-colors",
                notifyClient
                  ? "bg-primary text-primary-foreground"
                  : "text-muted-foreground hover:text-foreground"
              )}
            >
              {notifyClient && <CheckCircle2 className="h-3 w-3" />}
              Sí
            </button>
            <button
              onClick={() => onNotifyClientChange(false)}
              className={cn(
                "px-2.5 h-6 rounded text-[11px] font-medium transition-colors",
                !notifyClient
                  ? "bg-primary text-primary-foreground"
                  : "text-muted-foreground hover:text-foreground"
              )}
            >
              No
            </button>
          </div>
        </div>

        {/* Per-company info alert */}
        <div className="flex items-start gap-2 rounded-md border border-border bg-card px-3 py-2">
          <Info className="h-3.5 w-3.5 text-muted-foreground shrink-0 mt-0.5" />
          <p className="text-[11px] text-muted-foreground">
            Se notificará a {emails.registro} sobre la cesión de facturas de {name}.
          </p>
        </div>

      </div>
    </div>
  );
}

// ── Main Component ────────────────────────────────────────────────────

export function OperationConfirmDialog({
  open,
  onClose,
  onConfirm,
  selectedInvoices,
  metrics,
  uniquePayors,
  onDeselectAll,
}: OperationConfirmDialogProps) {
  // Per-company state for additional emails and notification toggle
  const [perCompanyEmails, setPerCompanyEmails] = useState<Record<string, string>>({});
  const [perCompanyNotify, setPerCompanyNotify] = useState<Record<string, boolean>>({});

  // Agrupar facturas por pagador
  const payorGroups = useMemo(() => {
    const groups: Record<
      string,
      { invoices: ConfirmInvoice[]; totalAdvance: number; totalRate: number }
    > = {};

    selectedInvoices.forEach((inv) => {
      if (!groups[inv.payor]) {
        groups[inv.payor] = { invoices: [], totalAdvance: 0, totalRate: 0 };
      }
      groups[inv.payor].invoices.push(inv);
      groups[inv.payor].totalAdvance += inv.amount * inv.advanceRate;
      groups[inv.payor].totalRate += inv.advanceRate;
    });

    return Object.entries(groups).map(([name, group], index) => ({
      name,
      invoiceCount: group.invoices.length,
      avgRate: group.totalRate / group.invoices.length,
      totalAdvance: group.totalAdvance,
      isFirst: index === 0,
    }));
  }, [selectedInvoices]);

  const TERMS = [
    "El adelanto se depositará en tu cuenta en 24-48 horas hábiles",
    "Las tasas aplicadas son las vigentes al momento de la operación",
    "Te harás responsable de la validez de las facturas cedidas",
    "Los pagadores serán notificados de la cesión de facturas",
  ];

  return (
    <Dialog open={open} onOpenChange={(o) => !o && onClose()}>
      <DialogContent
        className="p-0 gap-0 overflow-hidden !max-w-[95vw] !w-[1800px]"
        style={{ maxWidth: "95vw", width: "1800px" }}
      >

        {/* Header */}
        <DialogHeader className="px-6 py-5 border-b border-border">
          <DialogTitle>Confirmación de Operación de Factoring</DialogTitle>
          <DialogDescription>
            Revisa los términos y condiciones antes de confirmar
          </DialogDescription>
        </DialogHeader>

        {/* Body */}
        <div className="flex gap-5 p-6 max-h-[72vh] overflow-y-auto">

          {/* ── Columna izquierda ── */}
          <div className="flex-[1.55] flex flex-col gap-4 min-w-0">

            {/* Card Notificacion Pagadores */}
            <div className="rounded-xl border border-border bg-card overflow-hidden">
              <div className="px-6 pt-6 pb-4">
                <h3 className="text-base font-semibold text-foreground">
                  Notificacion Pagadores
                </h3>
              </div>

              <div className="px-4 pb-4 flex flex-col gap-3">

                {/* Filas de pagadores */}
                {payorGroups.map((payor) => (
                  <PayorGroup key={payor.name} {...payor}
                    additionalEmails={perCompanyEmails[payor.name] ?? ""}
                    onAdditionalEmailsChange={(v) =>
                      setPerCompanyEmails((prev) => ({ ...prev, [payor.name]: v }))
                    }
                    notifyClient={perCompanyNotify[payor.name] ?? true}
                    onNotifyClientChange={(v) =>
                      setPerCompanyNotify((prev) => ({ ...prev, [payor.name]: v }))
                    }
                  />
                ))}

              </div>
            </div>

            {/* Términos y Condiciones */}
            <div className="flex items-start gap-3 rounded-lg border border-border bg-card px-4 py-3">
              <Info className="h-4 w-4 text-muted-foreground shrink-0 mt-0.5" />
              <div className="flex flex-col gap-1">
                <p className="text-xs font-semibold text-muted-foreground">
                  Términos y Condiciones:
                </p>
                {TERMS.map((term) => (
                  <p key={term} className="text-xs text-muted-foreground">
                    {term}
                  </p>
                ))}
              </div>
            </div>

          </div>

          {/* ── Columna derecha: resumen de operación ── */}
          <div className="flex-1 min-w-0">
            <div className="rounded-xl border border-border bg-card p-5 flex flex-col gap-5">

              {/* Descripción de la operación */}
              <div className="flex flex-col gap-2">
                <p className="text-xs text-muted-foreground">
                  Se realizará la siguiente operación:
                </p>
                <p className="text-sm font-semibold text-foreground">
                  Endoso en Propiedad con Responsabilidad
                </p>
                <p className="text-xs text-muted-foreground">
                  Sobre {selectedInvoices.length} facturas
                </p>
                <p className="text-xs text-muted-foreground">Por un total de</p>
                <p className="text-[22px] font-semibold text-foreground tracking-tight">
                  {formatCLP(metrics.totalAmount)}
                </p>
                <p className="text-xs text-muted-foreground">
                  En nuevo legítimo tenedor será
                </p>
                <div>
                  <p className="text-sm font-bold text-foreground">CESIONBNK S.A.S.</p>
                  <p className="text-xs text-muted-foreground">NIT: 9001298003-1</p>
                </div>
              </div>

              <Separator />

              {/* Mini resumen con badges */}
              <div className="flex flex-col gap-4">

                {/* Badges + Limpiar selección */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    {/* Badge facturas */}
                    <div className="flex items-center gap-1.5 bg-primary rounded-lg px-2.5 h-[22px]">
                      <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                        <path
                          d="M6 11C8.76142 11 11 8.76142 11 6C11 3.23858 8.76142 1 6 1C3.23858 1 1 3.23858 1 6C1 8.76142 3.23858 11 6 11Z"
                          stroke="white"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M4.5 6L5.5 7L7.5 5"
                          stroke="white"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                      <span className="text-xs text-primary-foreground">
                        {selectedInvoices.length} facturas
                      </span>
                    </div>
                    {/* Badge pagadores */}
                    <div className="flex items-center gap-1.5 bg-primary rounded-lg px-2.5 h-[22px]">
                      <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                        <path
                          d="M6 11C8.76142 11 11 8.76142 11 6C11 3.23858 8.76142 1 6 1C3.23858 1 1 3.23858 1 6C1 8.76142 3.23858 11 6 11Z"
                          stroke="white"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path d="M6 8V6" stroke="white" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M6 4H6.005" stroke="white" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                      <span className="text-xs text-primary-foreground">
                        {uniquePayors} pagadores
                      </span>
                    </div>
                  </div>
                  <button
                    onClick={onDeselectAll}
                    className="text-xs text-primary hover:opacity-80 transition-opacity"
                  >
                    Limpiar selección
                  </button>
                </div>

                {/* Montos */}
                <div className="flex flex-col gap-1">
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-muted-foreground">Monto Nominal</span>
                    <span className="text-sm text-muted-foreground">
                      {formatCLP(metrics.totalAmount)}
                    </span>
                  </div>
                  <Separator className="my-1" />
                  <div className="flex items-end justify-between">
                    <div>
                      <p className="text-sm text-muted-foreground">A Recibir (Aprox)</p>
                      <p className="text-xs text-muted-foreground">Luego de descuentos</p>
                    </div>
                    <span className="text-[22px] font-semibold text-primary tracking-tight">
                      {formatCLP(metrics.netAdvance)}
                    </span>
                  </div>
                </div>

                {/* Botón Confirmar Operación */}
                <button
                  onClick={onConfirm}
                  className="w-full h-10 rounded-lg bg-primary text-primary-foreground flex items-center justify-center relative hover:opacity-90 transition-opacity"
                >
                  <span className="text-sm font-medium">Confirmar Operación</span>
                  <ChevronRight className="absolute right-3 h-4 w-4" />
                </button>

              </div>
            </div>
          </div>

        </div>

        {/* Footer */}
        <DialogFooter className="px-6 py-4 border-t border-border bg-muted/30">
          <Button variant="outline" size="sm" onClick={onClose}>
            Cancelar
          </Button>
          <Button size="sm" onClick={onConfirm}>
            Confirmar y Procesar
          </Button>
        </DialogFooter>

      </DialogContent>
    </Dialog>
  );
}