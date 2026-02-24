/**
 * view-perfil-cliente.tsx — Perfil de Cliente
 * Vista standalone dentro del AdminLayout de Factoring.
 * Muestra el perfil completo de un cliente: info corporativa,
 * límites de crédito, operaciones activas, deudores y riesgo.
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
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../../components/ui/select";
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
  PieChart,
  Pie,
  Cell,
  Tooltip,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
} from "recharts";
import {
  Building2,
  Phone,
  Mail,
  MapPin,
  User,
  TrendingUp,
  AlertTriangle,
  CheckCircle,
  FileText,
  Clock,
  Download,
  Edit,
} from "lucide-react";
import { formatCurrency, formatCurrencyFull } from "../dashboard-comercial/mock-data";

// ── Mock data de clientes ─────────────────────────────────────────────────

const clientes = [
  {
    id: "alpina",
    nombre: "Alpina S.A.",
    nit: "860.037.024-1",
    sector: "Alimentos y Bebidas",
    ciudad: "Bogotá D.C.",
    telefono: "+57 (1) 742-0000",
    email: "factoring@alpina.com.co",
    contacto: "Valentina Ríos",
    cargo: "Directora Financiera",
    estadoCliente: "Activo",
    fechaVinculacion: "Mar 2024",
    comercialAsignado: "Santiago Mora",
    limiteAprobado: 8_000_000,
    limiteUtilizado: 6_690_000,
    tasaNegociada: 18.5,
    plazoMaximo: 90,
    score: 82,
    scoreLabel: "Bajo Riesgo",
    operacionesActivas: [
      { id: "OP-2026-048", pagador: "Grupo Éxito", facturas: 2, monto: 1_850_000, vencimiento: "28 Feb 2026", dias: 6, estado: "Vigente" },
      { id: "OP-2026-039", pagador: "Cencosud Colombia", facturas: 1, monto: 890_000, vencimiento: "05 Ene 2026", dias: 15, estado: "Vencida 1-30d" },
      { id: "OP-2025-218", pagador: "Olímpica S.A.", facturas: 1, monto: 620_000, vencimiento: "02 Ene 2026", dias: 41, estado: "Vencida 31-60d" },
      { id: "OP-2025-204", pagador: "Alkosto S.A.", facturas: 1, monto: 3_330_000, vencimiento: "15 Mar 2026", dias: 21, estado: "Vigente" },
    ],
    deudores: [
      { nombre: "Grupo Éxito", monto: 1_850_000, pct: 28 },
      { nombre: "Alkosto S.A.", monto: 3_330_000, pct: 50 },
      { nombre: "Cencosud Colombia", monto: 890_000, pct: 13 },
      { nombre: "Olímpica S.A.", monto: 620_000, pct: 9 },
    ],
    historialMensual: [
      { month: "Ago 25", compras: 2_100_000, recaudo: 1_900_000 },
      { month: "Sep 25", compras: 2_800_000, recaudo: 2_600_000 },
      { month: "Oct 25", compras: 3_200_000, recaudo: 2_900_000 },
      { month: "Nov 25", compras: 2_950_000, recaudo: 2_750_000 },
      { month: "Dic 25", compras: 3_500_000, recaudo: 3_200_000 },
      { month: "Ene 26", compras: 4_200_000, recaudo: 3_100_000 },
    ],
  },
  {
    id: "nutresa",
    nombre: "Nutresa S.A.",
    nit: "890.900.608-3",
    sector: "Alimentos Procesados",
    ciudad: "Medellín",
    telefono: "+57 (4) 519-7300",
    email: "tesoreria@gruponutresa.com",
    contacto: "Carlos Gómez",
    cargo: "Gerente de Tesorería",
    estadoCliente: "Activo",
    fechaVinculacion: "Jun 2024",
    comercialAsignado: "Luisa Fernanda Castro",
    limiteAprobado: 6_000_000,
    limiteUtilizado: 4_260_000,
    tasaNegociada: 17.9,
    plazoMaximo: 60,
    score: 88,
    scoreLabel: "Muy Bajo Riesgo",
    operacionesActivas: [
      { id: "OP-2026-051", pagador: "Cencosud Colombia", facturas: 1, monto: 1_420_000, vencimiento: "05 Mar 2026", dias: 11, estado: "Vigente" },
      { id: "OP-2026-041", pagador: "Olímpica S.A.", facturas: 1, monto: 680_000, vencimiento: "25 Ene 2026", dias: 18, estado: "Vencida 1-30d" },
      { id: "OP-2025-212", pagador: "Grupo Éxito", facturas: 1, monto: 780_000, vencimiento: "28 Dic 2025", dias: 46, estado: "Vencida 31-60d" },
      { id: "OP-2025-198", pagador: "Alkosto S.A.", facturas: 2, monto: 1_380_000, vencimiento: "20 Mar 2026", dias: 26, estado: "Vigente" },
    ],
    deudores: [
      { nombre: "Cencosud Colombia", monto: 1_420_000, pct: 33 },
      { nombre: "Alkosto S.A.", monto: 1_380_000, pct: 32 },
      { nombre: "Grupo Éxito", monto: 780_000, pct: 18 },
      { nombre: "Olímpica S.A.", monto: 680_000, pct: 16 },
    ],
    historialMensual: [
      { month: "Ago 25", compras: 1_800_000, recaudo: 1_650_000 },
      { month: "Sep 25", compras: 2_200_000, recaudo: 2_050_000 },
      { month: "Oct 25", compras: 2_600_000, recaudo: 2_350_000 },
      { month: "Nov 25", compras: 2_400_000, recaudo: 2_280_000 },
      { month: "Dic 25", compras: 2_900_000, recaudo: 2_700_000 },
      { month: "Ene 26", compras: 3_500_000, recaudo: 2_800_000 },
    ],
  },
  {
    id: "postobón",
    nombre: "Postobón S.A.",
    nit: "890.300.443-5",
    sector: "Bebidas",
    ciudad: "Bogotá D.C.",
    telefono: "+57 (1) 745-7000",
    email: "finanzas@postobon.com.co",
    contacto: "Andrés Reyes",
    cargo: "VP Financiero",
    estadoCliente: "Activo",
    fechaVinculacion: "Ene 2025",
    comercialAsignado: "Santiago Mora",
    limiteAprobado: 5_000_000,
    limiteUtilizado: 2_320_000,
    tasaNegociada: 18.2,
    plazoMaximo: 75,
    score: 74,
    scoreLabel: "Riesgo Moderado",
    operacionesActivas: [
      { id: "OP-2026-044", pagador: "Alkosto S.A.", facturas: 2, monto: 950_000, vencimiento: "15 Ene 2026", dias: 28, estado: "Vencida 1-30d" },
      { id: "OP-2025-200", pagador: "La 14 S.A.", facturas: 1, monto: 420_000, vencimiento: "20 Nov 2025", dias: 84, estado: "Vencida 61-90d" },
      { id: "OP-2026-055", pagador: "Grupo Éxito", facturas: 1, monto: 950_000, vencimiento: "10 Mar 2026", dias: 16, estado: "Vigente" },
    ],
    deudores: [
      { nombre: "Grupo Éxito", monto: 950_000, pct: 41 },
      { nombre: "Alkosto S.A.", monto: 950_000, pct: 41 },
      { nombre: "La 14 S.A.", monto: 420_000, pct: 18 },
    ],
    historialMensual: [
      { month: "Ago 25", compras: 1_200_000, recaudo: 1_100_000 },
      { month: "Sep 25", compras: 1_500_000, recaudo: 1_350_000 },
      { month: "Oct 25", compras: 1_800_000, recaudo: 1_620_000 },
      { month: "Nov 25", compras: 1_600_000, recaudo: 1_400_000 },
      { month: "Dic 25", compras: 1_900_000, recaudo: 1_700_000 },
      { month: "Ene 26", compras: 2_200_000, recaudo: 1_800_000 },
    ],
  },
];

const DEBTOR_COLORS = ["#3b82f6", "#6366f1", "#8b5cf6", "#ec4899"];

const estadoBadge = (estado: string) => {
  if (estado === "Vigente") return <Badge variant="success-soft-outline" className="text-[10px]">Vigente</Badge>;
  if (estado === "Vencida 1-30d") return <Badge variant="warning-soft-outline" className="text-[10px]">Venc. 1-30d</Badge>;
  if (estado === "Vencida 31-60d") return <Badge variant="warning-soft-outline" className="text-[10px]">Venc. 31-60d</Badge>;
  return <Badge variant="destructive-soft-outline" className="text-[10px]">Venc. 61-90d</Badge>;
};

// ── Vista principal ────────────────────────────────────────────────────────

export function ViewPerfilCliente() {
  const [selectedId, setSelectedId] = useState("alpina");
  const cliente = clientes.find((c) => c.id === selectedId) ?? clientes[0];

  const utilizacionPct = ((cliente.limiteUtilizado / cliente.limiteAprobado) * 100).toFixed(0);
  const scoreColor =
    cliente.score >= 80 ? "text-emerald-600" :
    cliente.score >= 65 ? "text-yellow-600" : "text-red-500";

  return (
    <div className="min-h-full">
      <main className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-8 py-6 space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
          <div><h1>Perfil de Cliente</h1><p className="text-sm text-muted-foreground">Información corporativa, límites y operaciones vigentes</p></div>
          <div className="flex items-center gap-2">
            <Select value={selectedId} onValueChange={setSelectedId}><SelectTrigger className="w-[200px] h-8 text-xs"><SelectValue /></SelectTrigger><SelectContent>{clientes.map((c) => (<SelectItem key={c.id} value={c.id}>{c.nombre}</SelectItem>))}</SelectContent></Select>
            <Button variant="outline" size="sm" className="gap-2 h-8 text-xs"><Download className="size-3.5" /> Exportar</Button>
            <Button variant="outline" size="sm" className="gap-2 h-8 text-xs"><Edit className="size-3.5" /> Editar</Button>
          </div>
        </div>

        <Card><CardContent className="p-6"><div className="flex flex-col md:flex-row gap-6">
          <div className="flex items-start gap-4">
            <div className="size-14 rounded-xl bg-primary/10 flex items-center justify-center shrink-0"><Building2 className="size-7 text-primary" /></div>
            <div>
              <div className="flex items-center gap-2 flex-wrap"><h2 className="text-xl">{cliente.nombre}</h2><Badge variant={cliente.estadoCliente === "Activo" ? "default" : "secondary"} className="text-xs">{cliente.estadoCliente}</Badge></div>
              <p className="text-sm text-muted-foreground mt-0.5">NIT {cliente.nit}</p>
              <div className="flex flex-wrap items-center gap-x-4 gap-y-1 mt-2">
                <span className="flex items-center gap-1 text-xs text-muted-foreground"><MapPin className="size-3" /> {cliente.ciudad}</span>
                <span className="flex items-center gap-1 text-xs text-muted-foreground"><Building2 className="size-3" /> {cliente.sector}</span>
                <span className="flex items-center gap-1 text-xs text-muted-foreground"><Clock className="size-3" /> Vinculado desde {cliente.fechaVinculacion}</span>
              </div>
            </div>
          </div>
          <div className="h-px md:h-auto md:w-px bg-border" />
          <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div><p className="text-xs text-muted-foreground mb-1">Contacto Principal</p><p className="text-sm font-medium">{cliente.contacto}</p><p className="text-xs text-muted-foreground">{cliente.cargo}</p></div>
            <div><p className="text-xs text-muted-foreground mb-1">Datos de Contacto</p><div className="flex items-center gap-1.5 text-xs"><Phone className="size-3 text-muted-foreground" /> {cliente.telefono}</div><div className="flex items-center gap-1.5 text-xs mt-0.5"><Mail className="size-3 text-muted-foreground" /> {cliente.email}</div></div>
            <div><p className="text-xs text-muted-foreground mb-1">Comercial Asignado</p><div className="flex items-center gap-1.5 text-xs"><User className="size-3 text-muted-foreground" /> {cliente.comercialAsignado}</div></div>
            <div><p className="text-xs text-muted-foreground mb-1">Score de Riesgo</p><div className="flex items-center gap-2"><span className={`text-lg ${scoreColor}`}>{cliente.score}</span><span className={`text-xs ${scoreColor}`}>{cliente.scoreLabel}</span></div></div>
          </div>
        </div></CardContent></Card>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <Card><CardContent className="p-5"><p className="text-xs text-muted-foreground">Límite Aprobado</p><p className="text-xl mt-1">{formatCurrency(cliente.limiteAprobado)}</p><p className="text-xs text-muted-foreground mt-0.5">Cupo total autorizado</p></CardContent></Card>
          <Card><CardContent className="p-5"><p className="text-xs text-muted-foreground">Utilización</p><p className="text-xl mt-1">{formatCurrency(cliente.limiteUtilizado)}</p><div className="mt-2 flex items-center gap-2"><div className="flex-1 h-1.5 rounded-full bg-muted overflow-hidden"><div className={`h-full rounded-full ${Number(utilizacionPct) > 85 ? "bg-red-500" : Number(utilizacionPct) > 70 ? "bg-yellow-500" : "bg-primary"}`} style={{ width: `${utilizacionPct}%` }} /></div><span className="text-xs text-muted-foreground">{utilizacionPct}%</span></div></CardContent></Card>
          <Card><CardContent className="p-5"><p className="text-xs text-muted-foreground">Tasa Negociada</p><p className="text-xl mt-1 text-emerald-600">{cliente.tasaNegociada}%</p><p className="text-xs text-muted-foreground mt-0.5">Nominal Mensual Vencida</p></CardContent></Card>
          <Card><CardContent className="p-5"><p className="text-xs text-muted-foreground">Plazo Máximo</p><p className="text-xl mt-1">{cliente.plazoMaximo} días</p><p className="text-xs text-muted-foreground mt-0.5">Por operación</p></CardContent></Card>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <Card className="lg:col-span-2"><CardHeader className="pb-3"><div className="flex items-center justify-between"><div><CardTitle>Operaciones Activas</CardTitle><CardDescription>{cliente.operacionesActivas.length} operaciones vigentes o con mora</CardDescription></div></div></CardHeader><CardContent className="p-0"><Table><TableHeader><TableRow><TableHead>ID Operación</TableHead><TableHead>Pagador</TableHead><TableHead className="text-right">Monto</TableHead><TableHead>Vencimiento</TableHead><TableHead>Estado</TableHead></TableRow></TableHeader><TableBody>{cliente.operacionesActivas.map((op) => (<TableRow key={op.id}><TableCell className="tabular-nums text-xs">{op.id}</TableCell><TableCell className="text-sm">{op.pagador}</TableCell><TableCell className="text-right text-sm">{formatCurrency(op.monto)}</TableCell><TableCell className="text-xs text-muted-foreground">{op.vencimiento}</TableCell><TableCell>{estadoBadge(op.estado)}</TableCell></TableRow>))}</TableBody></Table></CardContent></Card>

          <Card><CardHeader className="pb-2"><CardTitle>Concentración de Deudores</CardTitle><CardDescription>Por monto operativo</CardDescription></CardHeader><CardContent>
            <div className="flex justify-center"><PieChart width={160} height={160}><Pie data={cliente.deudores} cx="50%" cy="50%" innerRadius={45} outerRadius={70} dataKey="monto" nameKey="nombre" strokeWidth={2} stroke="var(--color-card)">{cliente.deudores.map((_, i) => (<Cell key={`cell-${i}`} fill={DEBTOR_COLORS[i % DEBTOR_COLORS.length]} />))}</Pie><Tooltip content={({ active, payload }) => { if (!active || !payload?.length) return null; const d = payload[0].payload; return (<div className="bg-popover border border-border rounded-lg shadow-lg p-3 text-sm"><p className="text-foreground mb-1">{d.nombre}</p><p className="text-muted-foreground text-xs">{formatCurrencyFull(d.monto)}</p></div>); }} /></PieChart></div>
            <div className="space-y-2 mt-3">{cliente.deudores.map((d, i) => (<div key={d.nombre} className="flex items-center gap-2 text-xs"><span className="size-2.5 rounded-full shrink-0" style={{ backgroundColor: DEBTOR_COLORS[i % DEBTOR_COLORS.length] }} /><span className="flex-1 min-w-0 truncate text-muted-foreground">{d.nombre}</span><span className="font-medium">{d.pct}%</span></div>))}</div>
            {cliente.deudores[0]?.pct > 40 && (<div className="mt-3 flex items-start gap-2 rounded-md bg-yellow-50 dark:bg-yellow-950/30 border border-yellow-200 dark:border-yellow-800 p-2.5"><AlertTriangle className="size-3.5 text-yellow-600 shrink-0 mt-0.5" /><p className="text-xs text-yellow-700 dark:text-yellow-400">Alta concentración en {cliente.deudores[0].nombre} ({cliente.deudores[0].pct}%)</p></div>)}
          </CardContent></Card>
        </div>

        <Card><CardHeader className="pb-2"><CardTitle>Historial Mensual de Compras y Recaudo</CardTitle><CardDescription>Últimos 6 meses — {cliente.nombre}</CardDescription></CardHeader><CardContent>
          <ResponsiveContainer width="100%" height={200}><BarChart data={cliente.historialMensual} margin={{ top: 0, right: 8, left: 0, bottom: 0 }}><CartesianGrid strokeDasharray="3 3" stroke="var(--color-border)" vertical={false} /><XAxis dataKey="month" tick={{ fill: "var(--color-muted-foreground)", fontSize: 12 }} axisLine={false} tickLine={false} /><YAxis tick={{ fill: "var(--color-muted-foreground)", fontSize: 11 }} axisLine={false} tickLine={false} tickFormatter={(v) => formatCurrency(v)} width={60} /><Tooltip content={({ active, payload, label }) => { if (!active || !payload?.length) return null; return (<div className="bg-popover border border-border rounded-lg shadow-lg p-3 text-sm"><p className="text-muted-foreground text-xs mb-1.5">{label}</p>{payload.map((entry: any) => (<div key={entry.dataKey} className="flex items-center gap-2 text-xs"><span className="size-2.5 rounded-full" style={{ backgroundColor: entry.color }} /><span className="text-muted-foreground">{entry.name}:</span><span>{formatCurrencyFull(entry.value)}</span></div>))}</div>); }} /><Bar dataKey="compras" name="Compras" fill="var(--color-primary)" radius={[4, 4, 0, 0]} barSize={20} /><Bar dataKey="recaudo" name="Recaudo" fill="#bfdbfe" radius={[4, 4, 0, 0]} barSize={20} /></BarChart></ResponsiveContainer>
          <div className="flex items-center gap-4 mt-2 justify-center">
            <div className="flex items-center gap-1.5 text-xs text-muted-foreground"><span className="size-2.5 rounded-full bg-primary" /> Compras</div>
            <div className="flex items-center gap-1.5 text-xs text-muted-foreground"><span className="size-2.5 rounded-full bg-blue-200" /> Recaudo</div>
            {cliente.historialMensual.at(-1)!.recaudo < cliente.historialMensual.at(-1)!.compras && (<div className="flex items-center gap-1.5 text-xs text-yellow-600"><AlertTriangle className="size-3" /> Brecha de recaudo en el último mes</div>)}
          </div>
        </CardContent></Card>

        <Card><CardHeader className="pb-3"><CardTitle>Resumen de Riesgo</CardTitle></CardHeader><CardContent><div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {[
            { label: "Facturas Vencidas", value: cliente.operacionesActivas.filter((o) => o.estado !== "Vigente").length, total: cliente.operacionesActivas.length, icon: AlertTriangle, color: "text-yellow-600", ok: cliente.operacionesActivas.filter((o) => o.estado !== "Vigente").length === 0 },
            { label: "Utilización del Cupo", value: `${utilizacionPct}%`, total: null, icon: TrendingUp, color: Number(utilizacionPct) > 85 ? "text-red-500" : "text-emerald-600", ok: Number(utilizacionPct) <= 85 },
            { label: "Score de Riesgo", value: `${cliente.score}/100`, total: null, icon: CheckCircle, color: scoreColor, ok: cliente.score >= 70 },
          ].map((item) => (
            <div key={item.label} className={`flex items-center gap-3 rounded-lg border p-4 ${item.ok ? "border-border" : "border-yellow-300 dark:border-yellow-800 bg-yellow-50 dark:bg-yellow-950/20"}`}>
              <item.icon className={`size-5 shrink-0 ${item.color}`} />
              <div><p className="text-xs text-muted-foreground">{item.label}</p><p className={`text-sm font-medium ${item.color}`}>{typeof item.value === "number" && item.total !== null ? `${item.value} de ${item.total}` : item.value}</p></div>
            </div>
          ))}
        </div></CardContent></Card>
      </main>
    </div>
  );
}