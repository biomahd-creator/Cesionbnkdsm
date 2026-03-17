// ============================================
// MOCK DATA — Factoring Portfolio Dashboard
// Colombian retail debtors, ~$21M AUM
// ============================================

// KPI summary
export const kpiData = {
  totalAUM: 21_340_000,
  aumChange: 8.2,
  activeClients: 47,
  clientsChange: 3,
  avgDaysToCollect: 38,
  daysTarget: 35,
  collectionEfficiency: 94.6,
  efficiencyChange: 1.2,
  dilutionRate: 3.1,
  dilutionChange: -0.4,
  yieldActual: 18.7,
  yieldExpected: 19.2,
};

// AUM Evolution (monthly)
export const aumEvolutionData = [
  { month: "Ago 2025", aum: 15_200_000, purchases: 4_800_000, collections: 3_900_000 },
  { month: "Sep 2025", aum: 16_100_000, purchases: 5_200_000, collections: 4_300_000 },
  { month: "Oct 2025", aum: 17_500_000, purchases: 5_800_000, collections: 4_400_000 },
  { month: "Nov 2025", aum: 18_800_000, purchases: 6_100_000, collections: 4_800_000 },
  { month: "Dic 2025", aum: 19_600_000, purchases: 5_900_000, collections: 5_100_000 },
  { month: "Ene 2026", aum: 21_340_000, purchases: 6_500_000, collections: 4_760_000 },
];

// Aging distribution buckets
export const agingBuckets = [
  { bucket: "Vigente", range: "0 días", amount: 12_804_000, percentage: 60, color: "#22c55e" },
  { bucket: "1-30 días", range: "1-30 días", amount: 4_694_800, percentage: 22, color: "#eab308" },
  { bucket: "31-60 días", range: "31-60 días", amount: 2_347_400, percentage: 11, color: "#f97316" },
  { bucket: "61-90 días", range: "61-90 días", amount: 1_067_000, percentage: 5, color: "#ef4444" },
  { bucket: "90+ días", range: "90+ días", amount: 426_800, percentage: 2, color: "#991b1b" },
];

// Drill-down invoices per aging bucket
export interface Invoice {
  id: string;
  client: string;
  debtor: string;
  amount: number;
  dueDate: string;
  daysOutstanding: number;
  risk: "low" | "medium" | "high" | "critical";
}

export const agingInvoices: Record<string, Invoice[]> = {
  Vigente: [
    { id: "INV-2026-0412", client: "Alpina S.A.", debtor: "Grupo Éxito", amount: 1_850_000, dueDate: "2026-02-28", daysOutstanding: 0, risk: "low" },
    { id: "INV-2026-0398", client: "Nutresa S.A.", debtor: "Cencosud Colombia", amount: 1_420_000, dueDate: "2026-03-05", daysOutstanding: 0, risk: "low" },
    { id: "INV-2026-0405", client: "Colombina S.A.", debtor: "Olímpica S.A.", amount: 980_000, dueDate: "2026-02-25", daysOutstanding: 0, risk: "low" },
    { id: "INV-2026-0410", client: "Postobón S.A.", debtor: "Alkosto S.A.", amount: 1_650_000, dueDate: "2026-03-10", daysOutstanding: 0, risk: "low" },
    { id: "INV-2026-0415", client: "Mondelez Colombia", debtor: "Grupo Éxito", amount: 2_100_000, dueDate: "2026-03-15", daysOutstanding: 0, risk: "low" },
    { id: "INV-2026-0420", client: "Bimbo de Colombia", debtor: "D1 (Koba)", amount: 1_340_000, dueDate: "2026-03-01", daysOutstanding: 0, risk: "low" },
    { id: "INV-2026-0422", client: "Alquería S.A.", debtor: "Ara (Jerónimo Martins)", amount: 890_000, dueDate: "2026-02-20", daysOutstanding: 0, risk: "low" },
    { id: "INV-2026-0425", client: "Quala S.A.", debtor: "La 14 S.A.", amount: 760_000, dueDate: "2026-03-08", daysOutstanding: 0, risk: "low" },
  ],
  "1-30 días": [
    { id: "INV-2026-0301", client: "Alpina S.A.", debtor: "Cencosud Colombia", amount: 890_000, dueDate: "2026-01-28", daysOutstanding: 15, risk: "low" },
    { id: "INV-2026-0288", client: "Colombina S.A.", debtor: "Grupo Éxito", amount: 1_120_000, dueDate: "2026-01-20", daysOutstanding: 23, risk: "medium" },
    { id: "INV-2026-0295", client: "Nutresa S.A.", debtor: "Olímpica S.A.", amount: 680_000, dueDate: "2026-01-25", daysOutstanding: 18, risk: "low" },
    { id: "INV-2026-0310", client: "Postobón S.A.", debtor: "Alkosto S.A.", amount: 950_000, dueDate: "2026-01-15", daysOutstanding: 28, risk: "medium" },
    { id: "INV-2026-0312", client: "Mondelez Colombia", debtor: "D1 (Koba)", amount: 540_000, dueDate: "2026-01-22", daysOutstanding: 21, risk: "low" },
    { id: "INV-2026-0315", client: "Bimbo de Colombia", debtor: "Ara (Jerónimo Martins)", amount: 514_800, dueDate: "2026-01-18", daysOutstanding: 25, risk: "medium" },
  ],
  "31-60 días": [
    { id: "INV-2025-0245", client: "Nutresa S.A.", debtor: "Grupo Éxito", amount: 780_000, dueDate: "2025-12-28", daysOutstanding: 46, risk: "high" },
    { id: "INV-2025-0250", client: "Alpina S.A.", debtor: "Olímpica S.A.", amount: 620_000, dueDate: "2026-01-02", daysOutstanding: 41, risk: "high" },
    { id: "INV-2025-0258", client: "Colombina S.A.", debtor: "Cencosud Colombia", amount: 450_000, dueDate: "2025-12-20", daysOutstanding: 54, risk: "high" },
    { id: "INV-2025-0262", client: "Quala S.A.", debtor: "Alkosto S.A.", amount: 497_400, dueDate: "2025-12-25", daysOutstanding: 49, risk: "high" },
  ],
  "61-90 días": [
    { id: "INV-2025-0198", client: "Postobón S.A.", debtor: "La 14 S.A.", amount: 420_000, dueDate: "2025-11-20", daysOutstanding: 84, risk: "critical" },
    { id: "INV-2025-0205", client: "Alquería S.A.", debtor: "Olímpica S.A.", amount: 340_000, dueDate: "2025-11-25", daysOutstanding: 79, risk: "critical" },
    { id: "INV-2025-0210", client: "Bimbo de Colombia", debtor: "Cencosud Colombia", amount: 307_000, dueDate: "2025-12-01", daysOutstanding: 73, risk: "high" },
  ],
  "90+ días": [
    { id: "INV-2025-0150", client: "Colombina S.A.", debtor: "La 14 S.A.", amount: 215_000, dueDate: "2025-10-15", daysOutstanding: 120, risk: "critical" },
    { id: "INV-2025-0162", client: "Quala S.A.", debtor: "Olímpica S.A.", amount: 211_800, dueDate: "2025-10-28", daysOutstanding: 107, risk: "critical" },
  ],
};

// Collection curves (vintage analysis) — % collected by day
export const collectionCurvesData = [
  { day: 0, oct2025: 0, nov2025: 0, dic2025: 0, ene2026: 0 },
  { day: 10, oct2025: 18, nov2025: 15, dic2025: 20, ene2026: 22 },
  { day: 20, oct2025: 42, nov2025: 38, dic2025: 45, ene2026: 48 },
  { day: 30, oct2025: 65, nov2025: 60, dic2025: 68, ene2026: 70 },
  { day: 40, oct2025: 80, nov2025: 75, dic2025: 82, ene2026: null },
  { day: 50, oct2025: 89, nov2025: 84, dic2025: 91, ene2026: null },
  { day: 60, oct2025: 94, nov2025: 90, dic2025: null, ene2026: null },
  { day: 70, oct2025: 97, nov2025: 94, dic2025: null, ene2026: null },
  { day: 80, oct2025: 98, nov2025: 96, dic2025: null, ene2026: null },
  { day: 90, oct2025: 99, nov2025: 97, dic2025: null, ene2026: null },
];

// DSO trend (monthly)
export const dsoTrendData = [
  { month: "Ago 2025", dso: 42, target: 35 },
  { month: "Sep 2025", dso: 41, target: 35 },
  { month: "Oct 2025", dso: 39, target: 35 },
  { month: "Nov 2025", dso: 40, target: 35 },
  { month: "Dic 2025", dso: 37, target: 35 },
  { month: "Ene 2026", dso: 38, target: 35 },
];

// Top debtors — concentration & risk
export interface Debtor {
  name: string;
  exposure: number;
  limit: number;
  utilizationPct: number;
  avgDaysToCollect: number;
  status: "on_track" | "watch" | "at_risk";
  sector: string;
}

export const topDebtors: Debtor[] = [
  { name: "Grupo Éxito", exposure: 5_750_000, limit: 7_000_000, utilizationPct: 82, avgDaysToCollect: 32, status: "on_track", sector: "Retail" },
  { name: "Cencosud Colombia", exposure: 3_460_000, limit: 4_000_000, utilizationPct: 87, avgDaysToCollect: 36, status: "watch", sector: "Retail" },
  { name: "Olímpica S.A.", exposure: 2_890_000, limit: 3_500_000, utilizationPct: 83, avgDaysToCollect: 42, status: "watch", sector: "Retail" },
  { name: "Alkosto S.A.", exposure: 2_650_000, limit: 3_000_000, utilizationPct: 88, avgDaysToCollect: 35, status: "on_track", sector: "Retail" },
  { name: "D1 (Koba)", exposure: 2_100_000, limit: 2_500_000, utilizationPct: 84, avgDaysToCollect: 28, status: "on_track", sector: "Hard Discount" },
  { name: "Ara (Jerónimo Martins)", exposure: 1_680_000, limit: 2_000_000, utilizationPct: 84, avgDaysToCollect: 30, status: "on_track", sector: "Hard Discount" },
  { name: "La 14 S.A.", exposure: 1_540_000, limit: 1_800_000, utilizationPct: 86, avgDaysToCollect: 55, status: "at_risk", sector: "Retail" },
  { name: "Jumbo (Cencosud)", exposure: 1_270_000, limit: 2_000_000, utilizationPct: 64, avgDaysToCollect: 34, status: "on_track", sector: "Retail" },
];

// Sector concentration (for treemap-like view)
export const sectorConcentration = [
  { sector: "Retail", amount: 15_910_000, percentage: 74.6 },
  { sector: "Hard Discount", amount: 3_780_000, percentage: 17.7 },
  { sector: "Otros", amount: 1_650_000, percentage: 7.7 },
];

// Alerts
export interface Alert {
  id: string;
  type: "critical" | "warning" | "info";
  title: string;
  description: string;
  timestamp: string;
  actionLabel?: string;
}

export const alerts: Alert[] = [
  {
    id: "ALT-001",
    type: "critical",
    title: "Límite de concentración superado",
    description: "Cencosud Colombia alcanzó 87% de utilización del límite ($3.46M / $4M). Considere reducir nuevas compras.",
    timestamp: "Hace 2 horas",
    actionLabel: "Revisar exposición",
  },
  {
    id: "ALT-002",
    type: "critical",
    title: "Facturas vencidas 90+ días",
    description: "2 facturas por $426,800 de La 14 S.A. y Olímpica superan 90 días. Iniciar proceso de cobro jurídico.",
    timestamp: "Hace 4 horas",
    actionLabel: "Ver facturas",
  },
  {
    id: "ALT-003",
    type: "warning",
    title: "Incremento en dilución — Olímpica",
    description: "La tasa de dilución de Olímpica subió de 2.1% a 4.8% en el último mes. Posibles notas crédito o devoluciones.",
    timestamp: "Hace 1 día",
    actionLabel: "Analizar dilución",
  },
  {
    id: "ALT-004",
    type: "warning",
    title: "DSO por encima del target",
    description: "El DSO promedio del portafolio es 38 días vs. target de 35 días. Revisar política de cobranza.",
    timestamp: "Hace 1 día",
  },
  {
    id: "ALT-005",
    type: "info",
    title: "Nuevo cliente aprobado",
    description: "Carvajal Empaques S.A. aprobado con límite de $1.5M. Deudores principales: Grupo Éxito, Alkosto.",
    timestamp: "Hace 2 días",
  },
  {
    id: "ALT-006",
    type: "info",
    title: "Rendimiento por encima del esperado",
    description: "El yield actual (18.7%) está dentro del 97.4% del yield esperado (19.2%). Portafolio saludable.",
    timestamp: "Hace 3 días",
  },
];

// Utility — format currency
export function formatCurrency(value: number): string {
  if (value >= 1_000_000) {
    return `$${(value / 1_000_000).toFixed(1)}M`;
  }
  if (value >= 1_000) {
    return `$${(value / 1_000).toFixed(0)}K`;
  }
  return `$${value.toLocaleString()}`;
}

export function formatCurrencyFull(value: number): string {
  return `$${value.toLocaleString("es-CO")}`;
}

// ============================================
// ORIGINACIÓN TAB DATA
// ============================================

export const originacionKpis = {
  totalOperacionesVigentes: 65_000_000,
  facturasVigentes: 45,
  operacionesVigentes: 16,
  operaciones30_60: 3_100_000,
  pct30_60: 3,
  facturas30_60: 8,
  ops30_60: 3,
  operaciones60plus: 1_100_000,
  pct60plus: 0.2,
  facturas60plus: 2,
  ops60plus: 1,
  totalCartera: 65_000_000,
  montoCobrarSemana: 5_000_000,
  facturasACobrar: 16,
  vencidas: 2_400_000,
  facturasVencidas: 15,
  disponible: 58_000_000,
  disponibleMax: 65_400_000,
};

export const colocacionMensualData = [
  { month: "Ago 25", credito: 3_200_000, recaudado: 2_800_000, porRecaudar: 400_000 },
  { month: "Sep 25", credito: 4_500_000, recaudado: 3_900_000, porRecaudar: 600_000 },
  { month: "Oct 25", credito: 5_800_000, recaudado: 5_100_000, porRecaudar: 700_000 },
  { month: "Nov 25", credito: 6_200_000, recaudado: 5_400_000, porRecaudar: 800_000 },
  { month: "Dic 25", credito: 7_100_000, recaudado: 6_300_000, porRecaudar: 800_000 },
  { month: "Ene 26", credito: 8_500_000, recaudado: 6_800_000, porRecaudar: 1_700_000 },
];

export const forecastRecaudosData = [
  { month: "Dic 25", proyectado: 340_000, real: 290_000 },
  { month: "Ene 26", proyectado: 6_150_000, real: 5_400_000 },
  { month: "Feb 26", proyectado: 13_600_000, real: 10_800_000 },
  { month: "Mar 26", proyectado: 13_300_000, real: 12_000_000 },
  { month: "Abr 26", proyectado: 15_100_000, real: null },
  { month: "May 26", proyectado: 20_700_000, real: null },
];

// ============================================
// CARTERA TAB DATA
// ============================================

export interface CarteraGroup {
  cliente: string;
  pagador: string;
  facturas: number;
  monto: number;
  diasPromedio: number;
}

export const carteraPorVencer: CarteraGroup[] = [
  { cliente: "Alpina S.A.", pagador: "Grupo Éxito", facturas: 3, monto: 4_200_000, diasPromedio: 0 },
  { cliente: "Nutresa S.A.", pagador: "Cencosud Colombia", facturas: 2, monto: 2_800_000, diasPromedio: 0 },
  { cliente: "Colombina S.A.", pagador: "Olímpica S.A.", facturas: 2, monto: 1_950_000, diasPromedio: 0 },
  { cliente: "Postobón S.A.", pagador: "Alkosto S.A.", facturas: 3, monto: 3_100_000, diasPromedio: 0 },
  { cliente: "Mondelez Colombia", pagador: "D1 (Koba)", facturas: 1, monto: 1_500_000, diasPromedio: 0 },
  { cliente: "Bimbo de Colombia", pagador: "Grupo Éxito", facturas: 2, monto: 2_250_000, diasPromedio: 0 },
];

export const carteraVencida30: CarteraGroup[] = [
  { cliente: "Alpina S.A.", pagador: "Cencosud Colombia", facturas: 2, monto: 890_000, diasPromedio: 15 },
  { cliente: "Colombina S.A.", pagador: "Grupo Éxito", facturas: 1, monto: 1_120_000, diasPromedio: 23 },
  { cliente: "Nutresa S.A.", pagador: "Olímpica S.A.", facturas: 1, monto: 680_000, diasPromedio: 18 },
  { cliente: "Postobón S.A.", pagador: "Alkosto S.A.", facturas: 2, monto: 950_000, diasPromedio: 28 },
  { cliente: "Mondelez Colombia", pagador: "D1 (Koba)", facturas: 1, monto: 540_000, diasPromedio: 21 },
];

export const carteraVencida31_60: CarteraGroup[] = [
  { cliente: "Nutresa S.A.", pagador: "Grupo Éxito", facturas: 1, monto: 780_000, diasPromedio: 46 },
  { cliente: "Alpina S.A.", pagador: "Olímpica S.A.", facturas: 1, monto: 620_000, diasPromedio: 41 },
  { cliente: "Colombina S.A.", pagador: "Cencosud Colombia", facturas: 1, monto: 450_000, diasPromedio: 54 },
  { cliente: "Quala S.A.", pagador: "Alkosto S.A.", facturas: 1, monto: 497_400, diasPromedio: 49 },
];

export const carteraVencida60plus: CarteraGroup[] = [
  { cliente: "Postobón S.A.", pagador: "La 14 S.A.", facturas: 1, monto: 420_000, diasPromedio: 84 },
  { cliente: "Alquería S.A.", pagador: "Olímpica S.A.", facturas: 1, monto: 340_000, diasPromedio: 79 },
  { cliente: "Colombina S.A.", pagador: "La 14 S.A.", facturas: 1, monto: 215_000, diasPromedio: 120 },
  { cliente: "Quala S.A.", pagador: "Olímpica S.A.", facturas: 1, monto: 211_800, diasPromedio: 107 },
];

// ============================================
// INVERSIONISTAS TAB DATA
// ============================================

export interface Inversionista {
  nombre: string;
  color: string;
  fiu: number;
  disponible: number;
  recaudoMes: number;
  facturas: number;
  operaciones: number;
  rendimiento: number;
}

export const inversionistaTotal = {
  fiu: 65_000_000,
  disponible: 20_000_000,
  recaudoMes: 14_000_000,
  facturas: 45,
  operaciones: 16,
};

export const inversionistas: Inversionista[] = [
  {
    nombre: "Stellar",
    color: "#6b7280",
    fiu: 28_000_000,
    disponible: 8_500_000,
    recaudoMes: 6_200_000,
    facturas: 20,
    operaciones: 7,
    rendimiento: 18.9,
  },
  {
    nombre: "Ership",
    color: "#4b5563",
    fiu: 22_000_000,
    disponible: 7_000_000,
    recaudoMes: 4_800_000,
    facturas: 15,
    operaciones: 5,
    rendimiento: 18.5,
  },
  {
    nombre: "Sanders",
    color: "#374151",
    fiu: 15_000_000,
    disponible: 4_500_000,
    recaudoMes: 3_000_000,
    facturas: 10,
    operaciones: 4,
    rendimiento: 19.1,
  },
];

// ============================================
// TESORERÍA TAB DATA
// ============================================

export const tesoreriaData = {
  interesesCausadosCorrientes: 1_850_000,
  interesesCausadosCorrientesPct: 2.8,
  interesesEnMora: 420_000,
  interesesEnMoraPct: 0.6,
  interesesEnMoraDias30: 310_000,
  interesesEnMoraDias60: 78_000,
  interesesEnMoraDias90: 32_000,
  interesesCobrados: 3_200_000,
  interesesCobradosPct: 4.9,
  ingresoRealMes: 3_200_000,
  ingresoProyectado: 3_450_000,
  cumplimientoPct: 92.8,
};

export const tesoreriaEvolucion = [
  { month: "Ago 25", causados: 1_200_000, cobrados: 1_050_000, mora: 150_000 },
  { month: "Sep 25", causados: 1_350_000, cobrados: 1_200_000, mora: 200_000 },
  { month: "Oct 25", causados: 1_500_000, cobrados: 1_380_000, mora: 280_000 },
  { month: "Nov 25", causados: 1_680_000, cobrados: 1_520_000, mora: 340_000 },
  { month: "Dic 25", causados: 1_780_000, cobrados: 1_650_000, mora: 390_000 },
  { month: "Ene 26", causados: 1_850_000, cobrados: 1_700_000, mora: 420_000 },
];
