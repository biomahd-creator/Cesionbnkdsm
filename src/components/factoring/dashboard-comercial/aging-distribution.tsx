import { useState } from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  ResponsiveContainer,
  Cell,
  Tooltip,
} from "recharts";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "../../ui/card";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
} from "../../ui/dialog";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../../ui/table";
import { Badge } from "../../ui/badge";
import { Button } from "../../ui/button";
import { ScrollArea } from "../../ui/scroll-area";
import { Download, Mail, ArrowUpDown } from "lucide-react";
import {
  agingBuckets,
  agingInvoices,
  formatCurrency,
  formatCurrencyFull,
  type Invoice,
} from "./mock-data";

function CustomTooltip({ active, payload }: any) {
  if (!active || !payload?.length) return null;
  const d = payload[0].payload;
  return (
    <div className="bg-popover border border-border rounded-lg shadow-lg p-3 text-sm">
      <p className="text-foreground mb-1">{d.bucket}</p>
      <p className="text-muted-foreground text-xs">
        {formatCurrencyFull(d.amount)} ({d.percentage}%)
      </p>
    </div>
  );
}

function RiskBadge({ risk }: { risk: Invoice["risk"] }) {
  const map = {
    low: { label: "Bajo", className: "bg-emerald-100 text-emerald-700 border-emerald-200" },
    medium: { label: "Medio", className: "bg-yellow-100 text-yellow-700 border-yellow-200" },
    high: { label: "Alto", className: "bg-orange-100 text-orange-700 border-orange-200" },
    critical: { label: "Crítico", className: "bg-red-100 text-red-700 border-red-200" },
  };
  const config = map[risk];
  return (
    <Badge variant="outline" className={config.className}>
      {config.label}
    </Badge>
  );
}

type SortKey = "amount" | "daysOutstanding";
type SortDir = "asc" | "desc";

export function AgingDistribution() {
  const [selectedBucket, setSelectedBucket] = useState<string | null>(null);
  const [sortKey, setSortKey] = useState<SortKey>("amount");
  const [sortDir, setSortDir] = useState<SortDir>("desc");

  const invoices = selectedBucket ? agingInvoices[selectedBucket] || [] : [];
  const bucketMeta = agingBuckets.find((b) => b.bucket === selectedBucket);
  const totalAmount = invoices.reduce((s, i) => s + i.amount, 0);
  const avgInvoiceSize = invoices.length > 0 ? totalAmount / invoices.length : 0;
  const pctPortfolio = bucketMeta?.percentage ?? 0;

  const sorted = [...invoices].sort((a, b) => {
    const diff = a[sortKey] - b[sortKey];
    return sortDir === "asc" ? diff : -diff;
  });

  function toggleSort(key: SortKey) {
    if (sortKey === key) {
      setSortDir(sortDir === "asc" ? "desc" : "asc");
    } else {
      setSortKey(key);
      setSortDir("desc");
    }
  }

  function handleBarClick(data: any) {
    if (data?.activePayload?.[0]?.payload) {
      setSelectedBucket(data.activePayload[0].payload.bucket);
    }
  }

  return (
    <>
      <Card>
        <CardHeader>
          <CardTitle>Distribución por Antigüedad</CardTitle>
          <CardDescription>
            Haz clic en una barra o etiqueta para ver el detalle de facturas
          </CardDescription>
        </CardHeader>
        <CardContent>
          {/* Chart */}
          <ResponsiveContainer width="100%" height={220}>
            <BarChart
              data={agingBuckets}
              layout="vertical"
              margin={{ top: 0, right: 10, left: 0, bottom: 0 }}
              onClick={handleBarClick}
              style={{ cursor: "pointer" }}
            >
              <CartesianGrid strokeDasharray="3 3" stroke="var(--color-border)" horizontal={false} />
              <XAxis
                type="number"
                tick={{ fill: "var(--color-muted-foreground)", fontSize: 12 }}
                axisLine={false}
                tickLine={false}
                tickFormatter={(v) => formatCurrency(v)}
              />
              <YAxis
                type="category"
                dataKey="bucket"
                tick={{ fill: "var(--color-muted-foreground)", fontSize: 12 }}
                axisLine={false}
                tickLine={false}
                width={90}
              />
              <Tooltip content={<CustomTooltip />} cursor={{ fill: "var(--color-muted)", opacity: 0.3 }} />
              <Bar dataKey="amount" radius={[0, 4, 4, 0]} barSize={28}>
                {agingBuckets.map((entry) => (
                  <Cell key={entry.bucket} fill={entry.color} />
                ))}
              </Bar>
            </BarChart>
          </ResponsiveContainer>

          {/* Percentage labels */}
          <div className="flex flex-wrap gap-3 mt-4">
            {agingBuckets.map((b) => (
              <button
                key={b.bucket}
                onClick={() => setSelectedBucket(b.bucket)}
                className="flex items-center gap-2 px-3 py-1.5 rounded-lg border border-border hover:bg-muted transition-colors cursor-pointer"
              >
                <span
                  className="size-2.5 rounded-full shrink-0"
                  style={{ backgroundColor: b.color }}
                />
                <span className="text-xs text-foreground">{b.bucket}</span>
                <span className="text-xs text-muted-foreground">{b.percentage}%</span>
              </button>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Drill-down Dialog */}
      <Dialog open={!!selectedBucket} onOpenChange={() => setSelectedBucket(null)}>
        <DialogContent className="sm:max-w-3xl max-h-[85vh]">
          <DialogHeader>
            <div className="flex items-center gap-2">
              {bucketMeta && (
                <span
                  className="size-3 rounded-full shrink-0"
                  style={{ backgroundColor: bucketMeta.color }}
                />
              )}
              <DialogTitle>{selectedBucket}</DialogTitle>
            </div>
            <DialogDescription>
              {invoices.length} facturas — Exposición total: {formatCurrencyFull(totalAmount)}
            </DialogDescription>
          </DialogHeader>

          {/* Summary cards */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            <div className="rounded-lg border border-border p-3">
              <p className="text-xs text-muted-foreground">Monto Total</p>
              <p className="text-lg mt-0.5">{formatCurrencyFull(totalAmount)}</p>
            </div>
            <div className="rounded-lg border border-border p-3">
              <p className="text-xs text-muted-foreground">N.º Facturas</p>
              <p className="text-lg mt-0.5">{invoices.length}</p>
            </div>
            <div className="rounded-lg border border-border p-3">
              <p className="text-xs text-muted-foreground">Ticket Promedio</p>
              <p className="text-lg mt-0.5">{formatCurrency(avgInvoiceSize)}</p>
            </div>
            <div className="rounded-lg border border-border p-3">
              <p className="text-xs text-muted-foreground">% del Portafolio</p>
              <p className="text-lg mt-0.5">{pctPortfolio}%</p>
            </div>
          </div>

          {/* Table */}
          <ScrollArea className="h-[320px] border border-border rounded-lg">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Factura</TableHead>
                  <TableHead>Cliente</TableHead>
                  <TableHead>Deudor</TableHead>
                  <TableHead>
                    <button
                      className="flex items-center gap-1 cursor-pointer hover:text-foreground"
                      onClick={() => toggleSort("amount")}
                    >
                      Monto <ArrowUpDown className="size-3" />
                    </button>
                  </TableHead>
                  <TableHead>Vencimiento</TableHead>
                  <TableHead>
                    <button
                      className="flex items-center gap-1 cursor-pointer hover:text-foreground"
                      onClick={() => toggleSort("daysOutstanding")}
                    >
                      Días <ArrowUpDown className="size-3" />
                    </button>
                  </TableHead>
                  <TableHead>Riesgo</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {sorted.map((inv) => (
                  <TableRow key={inv.id}>
                    <TableCell className="text-primary">{inv.id}</TableCell>
                    <TableCell>{inv.client}</TableCell>
                    <TableCell>{inv.debtor}</TableCell>
                    <TableCell>{formatCurrencyFull(inv.amount)}</TableCell>
                    <TableCell>{inv.dueDate}</TableCell>
                    <TableCell>
                      <span
                        className={
                          inv.daysOutstanding > 60
                            ? "text-red-500"
                            : inv.daysOutstanding > 30
                              ? "text-orange-500"
                              : "text-foreground"
                        }
                      >
                        {inv.daysOutstanding}
                      </span>
                    </TableCell>
                    <TableCell>
                      <RiskBadge risk={inv.risk} />
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </ScrollArea>

          <DialogFooter>
            <Button variant="outline" size="sm">
              <Download className="size-3.5 mr-1.5" />
              Exportar CSV
            </Button>
            <Button size="sm">
              <Mail className="size-3.5 mr-1.5" />
              Enviar Aviso de Cobro
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </>
  );
}
