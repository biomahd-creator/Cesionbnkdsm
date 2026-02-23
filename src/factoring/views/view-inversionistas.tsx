/**
 * view-inversionistas.tsx — Gestión de Inversionistas
 * Vista standalone dentro del AdminLayout de Factoring.
 * Diferente del TabInversionistas (resumen en Dashboard):
 * aquí cada fondo tiene detalle completo + movimientos + alertas.
 */
import { useState } from "react";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "../../components/ui/card";
import { Badge } from "../../components/ui/badge";
import { Button } from "../../components/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../../components/ui/table";
import {
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  LineChart,
  Line,
} from "recharts";
import {
  TrendingUp,
  Wallet,
  DollarSign,
  FileText,
  ArrowUpRight,
  ArrowDownRight,
  ChevronDown,
  ChevronUp,
  RefreshCw,
  Download,
} from "lucide-react";
import {
  inversionistas,
  inversionistaTotal,
  formatCurrency,
  formatCurrencyFull,
} from "../dashboard-comercial/mock-data";

// ── Mock: movimientos por fondo ────────────────────────────────────────────

const movimientosPorFondo: Record<string, {
  fecha: string; tipo: "Colocación" | "Recaudo" | "Ingreso"; monto: number;
}[]> = {
  Stellar: [
    { fecha: "15 Feb 2026", tipo: "Colocación", monto: -1_200_000 },
    { fecha: "12 Feb 2026", tipo: "Recaudo", monto: 980_000 },
    { fecha: "08 Feb 2026", tipo: "Ingreso", monto: 145_000 },
    { fecha: "05 Feb 2026", tipo: "Colocación", monto: -2_100_000 },
    { fecha: "01 Feb 2026", tipo: "Recaudo", monto: 2_400_000 },
  ],
  Ership: [
    { fecha: "14 Feb 2026", tipo: "Colocación", monto: -890_000 },
    { fecha: "11 Feb 2026", tipo: "Recaudo", monto: 750_000 },
    { fecha: "07 Feb 2026", tipo: "Ingreso", monto: 112_000 },
    { fecha: "03 Feb 2026", tipo: "Colocación", monto: -1_500_000 },
    { fecha: "01 Feb 2026", tipo: "Recaudo", monto: 1_800_000 },
  ],
  Sanders: [
    { fecha: "13 Feb 2026", tipo: "Colocación", monto: -600_000 },
    { fecha: "10 Feb 2026", tipo: "Recaudo", monto: 540_000 },
    { fecha: "06 Feb 2026", tipo: "Ingreso", monto: 78_000 },
    { fecha: "02 Feb 2026", tipo: "Colocación", monto: -1_000_000 },
    { fecha: "01 Feb 2026", tipo: "Recaudo", monto: 1_200_000 },
  ],
};

const rendimientoHistorico = [
  { month: "Ago 25", Stellar: 18.2, Ership: 17.8, Sanders: 18.6 },
  { month: "Sep 25", Stellar: 18.4, Ership: 18.0, Sanders: 18.9 },
  { month: "Oct 25", Stellar: 18.7, Ership: 18.2, Sanders: 19.0 },
  { month: "Nov 25", Stellar: 18.8, Ership: 18.3, Sanders: 19.1 },
  { month: "Dic 25", Stellar: 18.6, Ership: 18.4, Sanders: 18.8 },
  { month: "Ene 26", Stellar: 18.9, Ership: 18.5, Sanders: 19.1 },
];

const FOND_COLORS = ["#3b82f6", "#6366f1", "#8b5cf6"];

function KpiCard({ icon: Icon, label, value, sub, trend }: {
  icon: React.ElementType; label: string; value: string;
  sub?: string; trend?: "up" | "down" | "neutral";
}) {
  return (
    <Card>
      <CardContent className="p-5 flex items-start gap-4">
        <div className="size-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
          <Icon className="size-5 text-primary" />
        </div>
        <div className="flex-1 min-w-0">
          <p className="text-xs text-muted-foreground">{label}</p>
          <p className="text-xl mt-0.5">{value}</p>
          {sub && (
            <p className={`text-xs mt-0.5 flex items-center gap-1 ${
              trend === "up" ? "text-emerald-600" : trend === "down" ? "text-red-500" : "text-muted-foreground"
            }`}>
              {trend === "up" && <ArrowUpRight className="size-3" />}
              {trend === "down" && <ArrowDownRight className="size-3" />}
              {sub}
            </p>
          )}
        </div>
      </CardContent>
    </Card>
  );
}

function FundRow({ inv, color, index }: {
  inv: typeof inversionistas[0]; color: string; index: number;
}) {
  const [open, setOpen] = useState(false);
  const utilizacion = ((1 - inv.disponible / inv.fiu) * 100).toFixed(0);
  const movimientos = movimientosPorFondo[inv.nombre] ?? [];

  return (
    <>
      <TableRow className="cursor-pointer hover:bg-muted/50 transition-colors" onClick={() => setOpen(!open)}>
        <TableCell><div className="flex items-center gap-2"><span className="size-3 rounded-full shrink-0" style={{ backgroundColor: color }} /><span className="font-medium">{inv.nombre}</span></div></TableCell>
        <TableCell className="text-right">{formatCurrency(inv.fiu)}</TableCell>
        <TableCell className="text-right text-emerald-600">{formatCurrency(inv.disponible)}</TableCell>
        <TableCell className="text-right">{formatCurrency(inv.fiu - inv.disponible)}</TableCell>
        <TableCell className="text-right"><div className="flex items-center justify-end gap-2"><div className="w-16 h-1.5 rounded-full bg-muted overflow-hidden"><div className="h-full rounded-full" style={{ width: `${utilizacion}%`, backgroundColor: color }} /></div><span className="text-xs w-8 text-right">{utilizacion}%</span></div></TableCell>
        <TableCell className="text-right"><span className="text-emerald-600">{inv.rendimiento}%</span></TableCell>
        <TableCell className="text-right text-muted-foreground text-xs">{inv.facturas} fact / {inv.operaciones} ops</TableCell>
        <TableCell><Button variant="ghost" size="sm" className="p-1 h-auto" onClick={(e) => { e.stopPropagation(); setOpen(!open); }}>{open ? <ChevronUp className="size-4" /> : <ChevronDown className="size-4" />}</Button></TableCell>
      </TableRow>
      {open && (
        <TableRow>
          <TableCell colSpan={8} className="p-0">
            <div className="bg-muted/30 border-t border-border px-6 py-4">
              <p className="text-xs text-muted-foreground mb-3">Últimos movimientos — {inv.nombre}</p>
              <div className="space-y-2">
                {movimientos.map((m, i) => (
                  <div key={i} className="flex items-center justify-between text-sm py-1.5 border-b border-border last:border-0">
                    <div className="flex items-center gap-3">
                      <Badge variant={m.tipo === "Colocación" ? "destructive" : m.tipo === "Ingreso" ? "secondary" : "outline"} className="text-[10px] h-5">{m.tipo}</Badge>
                      <span className="text-muted-foreground text-xs">{m.fecha}</span>
                    </div>
                    <span className={m.monto < 0 ? "text-red-500" : "text-emerald-600"}>{m.monto < 0 ? "-" : "+"}{formatCurrencyFull(Math.abs(m.monto))}</span>
                  </div>
                ))}
              </div>
            </div>
          </TableCell>
        </TableRow>
      )}
    </>
  );
}

export function ViewInversionistas() {
  const total = inversionistaTotal;
  const utilizacionTotal = ((1 - total.disponible / total.fiu) * 100).toFixed(0);
  const barData = inversionistas.map((inv) => ({ nombre: inv.nombre, disponible: inv.disponible, colocado: inv.fiu - inv.disponible, recaudo: inv.recaudoMes }));

  return (
    <div className="min-h-full">
      <main className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-8 py-6 space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
          <div><h1>Gestión de Inversionistas</h1><p className="text-sm text-muted-foreground">3 fondos activos — Fondos bajo administración e indicadores de rendimiento</p></div>
          <div className="flex items-center gap-2"><Button variant="outline" size="sm" className="gap-2 h-8 text-xs"><Download className="size-3.5" /> Exportar</Button><Button variant="ghost" size="icon" className="size-8"><RefreshCw className="size-3.5" /></Button></div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <KpiCard icon={DollarSign} label="FIU Total" value={formatCurrency(total.fiu)} sub="Fondos bajo administración" />
          <KpiCard icon={Wallet} label="Disponible" value={formatCurrency(total.disponible)} sub={`${(100 - Number(utilizacionTotal)).toFixed(0)}% sin colocar`} trend="neutral" />
          <KpiCard icon={TrendingUp} label="Rendimiento Promedio" value="18.8%" sub="+0.4% vs. mes anterior" trend="up" />
          <KpiCard icon={FileText} label="Recaudo del Mes" value={formatCurrency(total.recaudoMes)} sub={`${total.facturas} facturas · ${total.operaciones} operaciones`} />
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <Card><CardHeader className="pb-2"><CardTitle>Colocado vs. Disponible por Fondo</CardTitle><CardDescription>Distribución de capital en Enero 2026</CardDescription></CardHeader><CardContent><ResponsiveContainer width="100%" height={220}><BarChart data={barData} margin={{ top: 0, right: 8, left: 0, bottom: 0 }}><CartesianGrid strokeDasharray="3 3" stroke="var(--color-border)" vertical={false} /><XAxis dataKey="nombre" tick={{ fill: "var(--color-muted-foreground)", fontSize: 12 }} axisLine={false} tickLine={false} /><YAxis tick={{ fill: "var(--color-muted-foreground)", fontSize: 11 }} axisLine={false} tickLine={false} tickFormatter={(v) => formatCurrency(v)} width={60} /><Tooltip content={({ active, payload, label }) => { if (!active || !payload?.length) return null; return (<div className="bg-popover border border-border rounded-lg shadow-lg p-3 text-sm"><p className="font-medium mb-1.5">{label}</p>{payload.map((entry: any) => (<div key={entry.dataKey} className="flex items-center gap-2 text-xs"><span className="size-2.5 rounded-full" style={{ backgroundColor: entry.color }} /><span className="text-muted-foreground">{entry.name}:</span><span>{formatCurrencyFull(entry.value)}</span></div>))}</div>); }} /><Legend wrapperStyle={{ fontSize: 12 }} iconType="circle" iconSize={8} /><Bar dataKey="colocado" name="Colocado" fill="#3b82f6" stackId="a" radius={[0, 0, 0, 0]} /><Bar dataKey="disponible" name="Disponible" fill="#bfdbfe" stackId="a" radius={[4, 4, 0, 0]} /></BarChart></ResponsiveContainer></CardContent></Card>
          <Card><CardHeader className="pb-2"><CardTitle>Evolución del Rendimiento</CardTitle><CardDescription>TIR mensual por fondo (% E.A.)</CardDescription></CardHeader><CardContent><ResponsiveContainer width="100%" height={220}><LineChart data={rendimientoHistorico} margin={{ top: 0, right: 8, left: 0, bottom: 0 }}><CartesianGrid strokeDasharray="3 3" stroke="var(--color-border)" vertical={false} /><XAxis dataKey="month" tick={{ fill: "var(--color-muted-foreground)", fontSize: 12 }} axisLine={false} tickLine={false} /><YAxis domain={[17, 20]} tick={{ fill: "var(--color-muted-foreground)", fontSize: 11 }} axisLine={false} tickLine={false} tickFormatter={(v) => `${v}%`} width={40} /><Tooltip content={({ active, payload, label }) => { if (!active || !payload?.length) return null; return (<div className="bg-popover border border-border rounded-lg shadow-lg p-3 text-sm"><p className="text-muted-foreground text-xs mb-1.5">{label}</p>{payload.map((entry: any) => (<div key={entry.dataKey} className="flex items-center gap-2 text-xs"><span className="size-2.5 rounded-full" style={{ backgroundColor: entry.color }} /><span>{entry.name}: <span className="text-emerald-600">{entry.value}%</span></span></div>))}</div>); }} /><Legend wrapperStyle={{ fontSize: 12 }} iconType="circle" iconSize={8} />{inversionistas.map((inv, i) => (<Line key={inv.nombre} type="monotone" dataKey={inv.nombre} stroke={FOND_COLORS[i]} strokeWidth={2} dot={{ r: 3, fill: FOND_COLORS[i] }} activeDot={{ r: 4 }} />))}</LineChart></ResponsiveContainer></CardContent></Card>
        </div>
        <Card><CardHeader className="pb-3"><div className="flex items-center justify-between"><div><CardTitle>Fondos bajo Administración</CardTitle><CardDescription>Haz clic en una fila para ver los últimos movimientos</CardDescription></div><Badge variant="secondary">{inversionistas.length} fondos activos</Badge></div></CardHeader><CardContent className="p-0"><Table><TableHeader><TableRow><TableHead>Fondo</TableHead><TableHead className="text-right">FIU</TableHead><TableHead className="text-right">Disponible</TableHead><TableHead className="text-right">Colocado</TableHead><TableHead className="text-right">Utilización</TableHead><TableHead className="text-right">Rendimiento</TableHead><TableHead className="text-right">Operaciones</TableHead><TableHead /></TableRow></TableHeader><TableBody>{inversionistas.map((inv, i) => (<FundRow key={inv.nombre} inv={inv} color={FOND_COLORS[i]} index={i} />))}<TableRow className="bg-muted/30 font-medium"><TableCell>Total</TableCell><TableCell className="text-right">{formatCurrency(total.fiu)}</TableCell><TableCell className="text-right text-emerald-600">{formatCurrency(total.disponible)}</TableCell><TableCell className="text-right">{formatCurrency(total.fiu - total.disponible)}</TableCell><TableCell className="text-right"><div className="flex items-center justify-end gap-2"><div className="w-16 h-1.5 rounded-full bg-muted overflow-hidden"><div className="h-full rounded-full bg-primary" style={{ width: `${utilizacionTotal}%` }} /></div><span className="text-xs w-8 text-right">{utilizacionTotal}%</span></div></TableCell><TableCell className="text-right text-emerald-600">18.8%</TableCell><TableCell className="text-right text-muted-foreground text-xs">{total.facturas} fact / {total.operaciones} ops</TableCell><TableCell /></TableRow></TableBody></Table></CardContent></Card>
      </main>
    </div>
  );
}
