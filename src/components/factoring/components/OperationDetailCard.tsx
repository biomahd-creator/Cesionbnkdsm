import React from "react";
import { Card } from "../../ui/card";
import { PieChart, Pie, Cell } from "recharts";
import { cn } from "../../../lib/utils";

interface OperationDetailCardProps {
  totalFacturas: number;
  currency?: string;
  montoCredito: number;
  costoFinanciero: number;
  totalAnticipo: number;
  reservaPercentage: number;
  anticipoPercentage: number;
  tasaMensual: number;
  plazoDias: number;
  tasaPlazo: number;
}

export function OperationDetailCard({
  totalFacturas = 10000000,
  currency = "MXN",
  montoCredito = 9000000,
  costoFinanciero = 500000,
  totalAnticipo = 8500000,
  reservaPercentage = 10,
  anticipoPercentage = 90,
  tasaMensual = 2.5,
  plazoDias = 120,
  tasaPlazo = 60,
}: Partial<OperationDetailCardProps>) {
  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat("es-MX", {
      style: "currency",
      currency: "MXN",
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(amount);
  };

  // Usando colores del DSM como CSS custom properties
  const chartData = [
    { name: "Anticipo", value: anticipoPercentage, colorVar: "success" },
    { name: "Reserva", value: reservaPercentage, colorVar: "warning" },
  ];

  return (
    <Card className="w-full max-w-[476px] h-auto min-h-[101px] bg-card shadow-sm border-none overflow-hidden flex flex-row items-stretch p-0 select-none">
      
      {/* Chart Section - Left fixed width */}
      <div className="relative w-[100px] flex-shrink-0 flex items-center justify-center pl-2">
        <div className="relative w-[73px] h-[73px] min-w-[73px] min-h-[73px]">
           {/* Chart with DSM colors */}
           <PieChart width={73} height={73}>
               <Pie
                 data={chartData}
                 cx="50%"
                 cy="50%"
                 innerRadius={26}
                 outerRadius={32}
                 startAngle={90}
                 endAngle={-270}
                 dataKey="value"
                 stroke="none"
                 cornerRadius={3}
                 paddingAngle={4}
               >
                 {chartData.map((entry, index) => (
                   <Cell 
                     key={`cell-${index}`} 
                     fill={entry.colorVar === "success" ? "var(--success)" : "var(--warning)"} 
                   />
                 ))}
               </Pie>
                <Pie 
                   data={[{value: 1}]} 
                   cx="50%" cy="50%" 
                   innerRadius={26} outerRadius={32} 
                   startAngle={80} endAngle={60} 
                   fill="var(--destructive)"
                   stroke="none" 
                   dataKey="value"
                 />
             </PieChart>
            
            {/* Days Text - Using DSM typography */}
            <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none text-center">
              <span className="font-bold text-xs leading-none text-foreground tracking-tighter block w-full text-center">
                {plazoDias} Días
              </span>
            </div>
        </div>
      </div>

      {/* Content Section - Flex Col for Header + Grid */}
      <div className="flex-1 flex flex-col py-3 pr-4 pl-1 justify-center">
        
        {/* Header */}
        <div className="mb-2">
           <span className="text-xs font-bold text-muted-foreground tracking-tight block">
             Detalle de la Operacin
           </span>
        </div>

        {/* Data Grid */}
        <div className="grid grid-cols-[1.4fr_1fr] gap-x-2 gap-y-2">
          
          {/* Row 1 */}
          <div className="flex flex-col justify-start">
             <span className="text-[0.625rem] text-muted-foreground leading-none mb-0.5">Total Facturas</span>
             <div className="flex items-baseline gap-1">
                <span className="text-[0.625rem] font-bold text-muted-foreground leading-none">{formatCurrency(totalFacturas)}</span>
                <span className="text-[0.4rem] text-muted-foreground font-bold leading-none">{currency}</span>
             </div>
          </div>

          <div className="flex items-center gap-2">
             <div className="w-2 h-2 rounded-full bg-warning shrink-0" />
             <div className="flex flex-col justify-center">
                <span className="text-[0.625rem] text-muted-foreground leading-none mb-0.5">Reserva</span>
                <span className="text-[0.625rem] font-bold text-muted-foreground leading-none">{reservaPercentage}%</span>
             </div>
          </div>

          {/* Row 2 */}
          <div className="flex flex-col justify-start">
             <span className="text-[0.625rem] text-muted-foreground leading-none mb-0.5">Monto de Credito</span>
             <span className="text-[0.625rem] font-bold text-muted-foreground leading-none">{formatCurrency(montoCredito)}</span>
          </div>

          <div className="flex items-center gap-2">
             <div className="w-2 h-2 rounded-full bg-success shrink-0" />
             <div className="flex flex-col justify-center">
                <span className="text-[0.625rem] text-muted-foreground leading-none mb-0.5">Anticipo</span>
                <span className="text-[0.625rem] font-bold text-muted-foreground leading-none">{anticipoPercentage}%</span>
             </div>
          </div>

          {/* Row 3 */}
          <div className="flex flex-col justify-start">
             <span className="text-[0.625rem] text-muted-foreground leading-none mb-0.5">Costo Financiero</span>
             <span className="text-[0.625rem] font-bold text-muted-foreground leading-none">{formatCurrency(costoFinanciero)}</span>
          </div>

          <div className="flex items-center gap-2">
             <div className="w-2 h-2 rounded-full bg-destructive shrink-0" />
             <div className="flex flex-col justify-center">
                <span className="text-[0.625rem] text-muted-foreground leading-none mb-0.5">Tasa/Mes</span>
                <div className="flex gap-2 items-baseline">
                  <span className="text-[0.625rem] font-bold text-muted-foreground leading-none">{tasaMensual}%</span>
                  <span className="text-[0.625rem] text-muted-foreground leading-none opacity-80">{tasaPlazo} Dias</span>
                </div>
             </div>
          </div>
        
        </div>

        {/* Separator & Total Anticipo */}
        <div className="relative mt-2 pt-2">
           <div className="absolute top-0 left-0 w-[60%] h-px bg-border" />
           <div className="flex flex-col justify-center">
             <span className="text-[0.625rem] text-muted-foreground leading-none mb-0.5">Total Anticipo</span>
             <span className="text-[0.625rem] font-bold text-muted-foreground leading-none">{formatCurrency(totalAnticipo)}</span>
           </div>
        </div>

      </div>

    </Card>
  );
}
