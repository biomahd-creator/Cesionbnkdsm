import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "../../ui/card";
import { Badge } from "../../ui/badge";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../../ui/table";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../../ui/accordion";
import { ArrowUpDown, Clock, AlertTriangle } from "lucide-react";
import {
  carteraPorVencer,
  carteraVencida30,
  carteraVencida31_60,
  carteraVencida60plus,
  formatCurrency,
  formatCurrencyFull,
  type CarteraGroup,
} from "./mock-data";

function CarteraGroupTable({
  data,
  showDias,
}: {
  data: CarteraGroup[];
  showDias: boolean;
}) {
  const [sortKey, setSortKey] = useState<"monto" | "diasPromedio">("monto");
  const [sortDir, setSortDir] = useState<"asc" | "desc">("desc");

  const sorted = [...data].sort((a, b) => {
    const diff = a[sortKey] - b[sortKey];
    return sortDir === "asc" ? diff : -diff;
  });

  const totalMonto = data.reduce((s, d) => s + d.monto, 0);
  const totalFacturas = data.reduce((s, d) => s + d.facturas, 0);

  function toggleSort(key: "monto" | "diasPromedio") {
    if (sortKey === key) {
      setSortDir(sortDir === "asc" ? "desc" : "asc");
    } else {
      setSortKey(key);
      setSortDir("desc");
    }
  }

  return (
    <div>
      <div className="flex items-center gap-4 mb-3 text-xs text-muted-foreground">
        <span>
          Total: <span className="text-foreground">{formatCurrencyFull(totalMonto)}</span>
        </span>
        <span>
          Facturas: <span className="text-foreground">{totalFacturas}</span>
        </span>
        <span>
          Pares cliente-pagador: <span className="text-foreground">{data.length}</span>
        </span>
      </div>
      <div className="border border-border rounded-lg overflow-hidden">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Cliente (Emisor)</TableHead>
              <TableHead>Pagador</TableHead>
              <TableHead className="text-center">Facturas</TableHead>
              <TableHead>
                <button
                  className="flex items-center gap-1 cursor-pointer hover:text-foreground"
                  onClick={() => toggleSort("monto")}
                >
                  Monto <ArrowUpDown className="size-3" />
                </button>
              </TableHead>
              {showDias && (
                <TableHead>
                  <button
                    className="flex items-center gap-1 cursor-pointer hover:text-foreground"
                    onClick={() => toggleSort("diasPromedio")}
                  >
                    Días Prom. <ArrowUpDown className="size-3" />
                  </button>
                </TableHead>
              )}
              <TableHead className="text-right">% Bucket</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {sorted.map((row) => (
              <TableRow key={`${row.cliente}-${row.pagador}`}>
                <TableCell>{row.cliente}</TableCell>
                <TableCell>{row.pagador}</TableCell>
                <TableCell className="text-center">{row.facturas}</TableCell>
                <TableCell>{formatCurrencyFull(row.monto)}</TableCell>
                {showDias && (
                  <TableCell>
                    <span
                      className={
                        row.diasPromedio > 60
                          ? "text-red-500"
                          : row.diasPromedio > 30
                            ? "text-orange-500"
                            : "text-foreground"
                      }
                    >
                      {row.diasPromedio}d
                    </span>
                  </TableCell>
                )}
                <TableCell className="text-right">
                  {totalMonto > 0 ? ((row.monto / totalMonto) * 100).toFixed(1) : 0}%
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}

// Aging summary bar
const agingSummary = [
  {
    label: "Por Vencer",
    amount: carteraPorVencer.reduce((s, d) => s + d.monto, 0),
    count: carteraPorVencer.reduce((s, d) => s + d.facturas, 0),
    color: "#22c55e",
  },
  {
    label: "<30 días",
    amount: carteraVencida30.reduce((s, d) => s + d.monto, 0),
    count: carteraVencida30.reduce((s, d) => s + d.facturas, 0),
    color: "#eab308",
  },
  {
    label: "31-60 días",
    amount: carteraVencida31_60.reduce((s, d) => s + d.monto, 0),
    count: carteraVencida31_60.reduce((s, d) => s + d.facturas, 0),
    color: "#f97316",
  },
  {
    label: "+60 días",
    amount: carteraVencida60plus.reduce((s, d) => s + d.monto, 0),
    count: carteraVencida60plus.reduce((s, d) => s + d.facturas, 0),
    color: "#ef4444",
  },
];

const totalCartera = agingSummary.reduce((s, d) => s + d.amount, 0);

export function TabCartera() {
  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center gap-3">
        <span className="inline-flex items-center px-4 py-1.5 rounded-full bg-red-600 text-white text-sm">
          Cartera
        </span>
        <span className="text-sm text-muted-foreground">
          ¿Cómo voy en el recaudo de las operaciones?
        </span>
      </div>

      {/* Aging summary */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {agingSummary.map((bucket) => (
          <Card key={bucket.label} className="gap-0 p-4">
            <CardContent className="p-0">
              <div className="flex items-center gap-2 mb-1">
                <span
                  className="size-3 rounded-full shrink-0"
                  style={{ backgroundColor: bucket.color }}
                />
                <span className="text-xs text-muted-foreground">{bucket.label}</span>
              </div>
              <span className="text-2xl tracking-tight">{formatCurrency(bucket.amount)}</span>
              <p className="text-xs text-muted-foreground mt-1">
                {bucket.count} facturas — {((bucket.amount / totalCartera) * 100).toFixed(0)}% del total
              </p>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Visual aging bar */}
      <Card>
        <CardHeader>
          <CardTitle>Distribución de Cartera</CardTitle>
          <CardDescription>
            Resumen visual por antigüedad — Total: {formatCurrencyFull(totalCartera)}
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex h-8 rounded-lg overflow-hidden">
            {agingSummary.map((bucket) => {
              const pct = (bucket.amount / totalCartera) * 100;
              return (
                <div
                  key={bucket.label}
                  className="flex items-center justify-center text-white text-xs transition-all"
                  style={{ width: `${pct}%`, backgroundColor: bucket.color }}
                  title={`${bucket.label}: ${formatCurrency(bucket.amount)}`}
                >
                  {pct >= 8 && `${pct.toFixed(0)}%`}
                </div>
              );
            })}
          </div>
          <div className="flex flex-wrap gap-4 mt-3">
            {agingSummary.map((bucket) => (
              <div key={bucket.label} className="flex items-center gap-2">
                <span
                  className="size-2.5 rounded-full shrink-0"
                  style={{ backgroundColor: bucket.color }}
                />
                <span className="text-xs text-muted-foreground">
                  {bucket.label}: {formatCurrency(bucket.amount)}
                </span>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Accordion sections */}
      <Accordion type="multiple" defaultValue={["por-vencer", "vencida-30"]} className="space-y-3">
        {/* 1. Por vencer este mes */}
        <AccordionItem value="por-vencer" className="border border-border rounded-lg px-4">
          <AccordionTrigger className="py-3">
            <div className="flex items-center gap-3">
              <Clock className="size-4 text-emerald-500" />
              <span className="text-sm">1. Por vencer este mes</span>
              <Badge variant="outline" className="bg-emerald-100 text-emerald-700 border-emerald-200 text-[10px]">
                {formatCurrency(carteraPorVencer.reduce((s, d) => s + d.monto, 0))}
              </Badge>
              <span className="text-xs text-muted-foreground">
                — Me dice aprox cuánto debo esperar recaudar
              </span>
            </div>
          </AccordionTrigger>
          <AccordionContent>
            <CarteraGroupTable data={carteraPorVencer} showDias={false} />
          </AccordionContent>
        </AccordionItem>

        {/* 2. Vencido <30 días */}
        <AccordionItem value="vencida-30" className="border border-border rounded-lg px-4">
          <AccordionTrigger className="py-3">
            <div className="flex items-center gap-3">
              <AlertTriangle className="size-4 text-yellow-500" />
              <span className="text-sm">2. Vencido &lt;30 días</span>
              <Badge variant="outline" className="bg-yellow-100 text-yellow-700 border-yellow-200 text-[10px]">
                {formatCurrency(carteraVencida30.reduce((s, d) => s + d.monto, 0))}
              </Badge>
              <span className="text-xs text-muted-foreground">
                — Agrupado por cliente + pagador
              </span>
            </div>
          </AccordionTrigger>
          <AccordionContent>
            <CarteraGroupTable data={carteraVencida30} showDias={true} />
          </AccordionContent>
        </AccordionItem>

        {/* 3. 31-60 días */}
        <AccordionItem value="vencida-31-60" className="border border-border rounded-lg px-4">
          <AccordionTrigger className="py-3">
            <div className="flex items-center gap-3">
              <AlertTriangle className="size-4 text-orange-500" />
              <span className="text-sm">3. Vencido 31-60 días</span>
              <Badge variant="outline" className="bg-orange-100 text-orange-700 border-orange-200 text-[10px]">
                {formatCurrency(carteraVencida31_60.reduce((s, d) => s + d.monto, 0))}
              </Badge>
              <span className="text-xs text-muted-foreground">
                — Agrupado por cliente y pagador
              </span>
            </div>
          </AccordionTrigger>
          <AccordionContent>
            <CarteraGroupTable data={carteraVencida31_60} showDias={true} />
          </AccordionContent>
        </AccordionItem>

        {/* 4. +60 días */}
        <AccordionItem value="vencida-60plus" className="border border-border rounded-lg px-4">
          <AccordionTrigger className="py-3">
            <div className="flex items-center gap-3">
              <AlertTriangle className="size-4 text-red-500" />
              <span className="text-sm">4. Vencido +60 días</span>
              <Badge variant="outline" className="bg-red-100 text-red-700 border-red-200 text-[10px]">
                {formatCurrency(carteraVencida60plus.reduce((s, d) => s + d.monto, 0))}
              </Badge>
              <span className="text-xs text-muted-foreground">
                — Requiere gestión prioritaria
              </span>
            </div>
          </AccordionTrigger>
          <AccordionContent>
            <CarteraGroupTable data={carteraVencida60plus} showDias={true} />
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
}
