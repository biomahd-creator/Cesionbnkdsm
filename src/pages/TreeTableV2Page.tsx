import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../components/ui/card";
import { Badge } from "../components/ui/badge";
import {
  TreeTableV2,
  type OperacionFactoring,
  type BatchAction,
} from "../components/advanced/TreeTableV2";
import { Separator } from "../components/ui/separator";
import { toast } from "sonner@2.0.3";

/* ═══════════════════════════════════════════
   SAMPLE DATA — Operaciones de Factoring
   ═══════════════════════════════════════════ */

const operaciones: OperacionFactoring[] = [
  {
    id: "OP-4635",
    fechaOperacion: "08/02/2026",
    cliente: { nombre: "Industrias Haceb S.A.", nit: "890.900.118-1" },
    facturas: [
      {
        id: "fac-4635-1",
        numero: "FAC-10231",
        pagador: { nombre: "Almacenes Exito S.A.", nit: "890.900.608-9" },
        valor: 185000000,
        valorDesembolso: 175750000,
        fechaVencimiento: "15/03/2026",
        estado: "vigente",
      },
      {
        id: "fac-4635-2",
        numero: "FAC-10232",
        pagador: { nombre: "Almacenes Exito S.A.", nit: "890.900.608-9" },
        valor: 92500000,
        valorDesembolso: 87875000,
        fechaVencimiento: "22/03/2026",
        estado: "vigente",
      },
      {
        id: "fac-4635-3",
        numero: "FAC-10233",
        pagador: { nombre: "Falabella de Colombia S.A.", nit: "900.017.447-8" },
        valor: 67800000,
        valorDesembolso: 64410000,
        fechaVencimiento: "10/04/2026",
        estado: "vigente",
      },
    ],
    valorFacturas: 345300000,
    valorDesembolso: 328035000,
    estado: "pendiente",
  },
  {
    id: "OP-4612",
    fechaOperacion: "05/02/2026",
    cliente: { nombre: "Cementos Argos S.A.", nit: "890.100.251-0" },
    facturas: [
      {
        id: "fac-4612-1",
        numero: "FAC-8890",
        pagador: { nombre: "Constructora Conconcreto S.A.", nit: "890.900.227-1" },
        valor: 420000000,
        valorDesembolso: 399000000,
        fechaVencimiento: "28/02/2026",
        estado: "pagada",
      },
      {
        id: "fac-4612-2",
        numero: "FAC-8891",
        pagador: { nombre: "Constructora Conconcreto S.A.", nit: "890.900.227-1" },
        valor: 315000000,
        valorDesembolso: 299250000,
        fechaVencimiento: "15/03/2026",
        estado: "vigente",
      },
    ],
    valorFacturas: 735000000,
    valorDesembolso: 698250000,
    estado: "aprobada",
  },
  {
    id: "OP-4598",
    fechaOperacion: "01/02/2026",
    cliente: { nombre: "Grupo Nutresa S.A.", nit: "890.900.050-5" },
    facturas: [
      {
        id: "fac-4598-1",
        numero: "FAC-7745",
        pagador: { nombre: "Olimpica S.A.", nit: "890.101.815-9" },
        valor: 156000000,
        valorDesembolso: 148200000,
        fechaVencimiento: "20/02/2026",
        estado: "pagada",
      },
      {
        id: "fac-4598-2",
        numero: "FAC-7746",
        pagador: { nombre: "Grupo Exito S.A.", nit: "890.900.608-9" },
        valor: 203000000,
        valorDesembolso: 192850000,
        fechaVencimiento: "25/02/2026",
        estado: "pagada",
      },
      {
        id: "fac-4598-3",
        numero: "FAC-7747",
        pagador: { nombre: "D1 SAS", nit: "900.480.569-0" },
        valor: 98500000,
        valorDesembolso: 93575000,
        fechaVencimiento: "10/03/2026",
        estado: "vigente",
      },
      {
        id: "fac-4598-4",
        numero: "FAC-7748",
        pagador: { nombre: "Jumbo Colombia S.A.", nit: "860.000.150-8" },
        valor: 142000000,
        valorDesembolso: 134900000,
        fechaVencimiento: "18/03/2026",
        estado: "vigente",
      },
    ],
    valorFacturas: 599500000,
    valorDesembolso: 569525000,
    estado: "desembolsada",
  },
  {
    id: "OP-4580",
    fechaOperacion: "28/01/2026",
    cliente: { nombre: "Postobón S.A.", nit: "890.903.939-5" },
    facturas: [
      {
        id: "fac-4580-1",
        numero: "FAC-6612",
        pagador: { nombre: "Bavaria S.A.", nit: "860.005.224-6" },
        valor: 89000000,
        valorDesembolso: 84550000,
        fechaVencimiento: "15/02/2026",
        estado: "vencida",
      },
      {
        id: "fac-4580-2",
        numero: "FAC-6613",
        pagador: { nombre: "Bavaria S.A.", nit: "860.005.224-6" },
        valor: 112000000,
        valorDesembolso: 106400000,
        fechaVencimiento: "20/02/2026",
        estado: "vencida",
      },
    ],
    valorFacturas: 201000000,
    valorDesembolso: 190950000,
    estado: "cancelada",
  },
  {
    id: "OP-4571",
    fechaOperacion: "25/01/2026",
    cliente: { nombre: "Colombina S.A.", nit: "890.301.884-2" },
    facturas: [
      {
        id: "fac-4571-1",
        numero: "FAC-5503",
        pagador: { nombre: "Almacenes Exito S.A.", nit: "890.900.608-9" },
        valor: 78500000,
        valorDesembolso: 74575000,
        fechaVencimiento: "28/02/2026",
        estado: "vigente",
      },
    ],
    valorFacturas: 78500000,
    valorDesembolso: 74575000,
    estado: "aprobada",
  },
  {
    id: "OP-4563",
    fechaOperacion: "22/01/2026",
    cliente: { nombre: "Alpina Productos Alimenticios S.A.", nit: "860.025.900-2" },
    facturas: [
      {
        id: "fac-4563-1",
        numero: "FAC-4401",
        pagador: { nombre: "Grupo Exito S.A.", nit: "890.900.608-9" },
        valor: 234000000,
        valorDesembolso: 222300000,
        fechaVencimiento: "15/02/2026",
        estado: "pagada",
      },
      {
        id: "fac-4563-2",
        numero: "FAC-4402",
        pagador: { nombre: "Carulla Vivero S.A.", nit: "860.000.126-0" },
        valor: 167000000,
        valorDesembolso: 158650000,
        fechaVencimiento: "22/02/2026",
        estado: "pagada",
      },
      {
        id: "fac-4563-3",
        numero: "FAC-4403",
        pagador: { nombre: "Olimpica S.A.", nit: "890.101.815-9" },
        valor: 98000000,
        valorDesembolso: 93100000,
        fechaVencimiento: "01/03/2026",
        estado: "pagada",
      },
    ],
    valorFacturas: 499000000,
    valorDesembolso: 474050000,
    estado: "desembolsada",
  },
  {
    id: "OP-4550",
    fechaOperacion: "18/01/2026",
    cliente: { nombre: "Corona Industrial S.A.", nit: "860.007.874-5" },
    facturas: [
      {
        id: "fac-4550-1",
        numero: "FAC-3318",
        pagador: { nombre: "Homecenter Sodimac S.A.", nit: "900.059.741-0" },
        valor: 312000000,
        valorDesembolso: 296400000,
        fechaVencimiento: "20/02/2026",
        estado: "vigente",
      },
      {
        id: "fac-4550-2",
        numero: "FAC-3319",
        pagador: { nombre: "Easy Colombia S.A.S.", nit: "900.137.459-3" },
        valor: 145000000,
        valorDesembolso: 137750000,
        fechaVencimiento: "05/03/2026",
        estado: "vigente",
      },
    ],
    valorFacturas: 457000000,
    valorDesembolso: 434150000,
    estado: "pendiente",
  },
];

/* ═══════════════════════════════════════════
   PAGE
   ═══════════════════════════════════════════ */

export function TreeTableV2Page() {
  const handleBatchAction = (action: BatchAction, selectedIds: Set<string>) => {
    const count = selectedIds.size;
    const labels: Record<BatchAction, string> = {
      approve: "Aprobar",
      export: "Exportar",
      cancel: "Cancelar",
    };
    toast.success(`${labels[action]} ${count} elemento${count !== 1 ? "s" : ""}`, {
      description: `IDs: ${Array.from(selectedIds).slice(0, 4).join(", ")}${count > 4 ? "..." : ""}`,
    });
  };

  const handleVer = (op: OperacionFactoring) => {
    toast.info(`Ver operacion ${op.id}`, {
      description: `${op.cliente.nombre} — ${op.facturas.length} facturas por ${formatPesos(op.valorFacturas)}`,
    });
  };

  const handleCancelar = (op: OperacionFactoring) => {
    toast.warning(`Cancelar operacion ${op.id}`, {
      description: `Se cancelara la operacion de ${op.cliente.nombre}`,
    });
  };

  const handleDescargar = (op: OperacionFactoring) => {
    toast.success(`Descargando Excel — ${op.id}`, {
      description: `${op.facturas.length} facturas incluidas`,
    });
  };

  return (
    <div className="space-y-8 pb-8">
      {/* Header */}
      <div>
        <div className="flex items-center gap-3 mb-2">
          <h1 className="text-2xl font-medium">Operaciones de Factoring</h1>
          <Badge variant="info-soft-outline">V2</Badge>
        </div>
        <p className="text-muted-foreground max-w-2xl">
          Tabla de operaciones con estructura de 3 niveles: Operacion (cliente) → Pagador → Facturas.
          Cada operacion muestra cliente, pagadores, valores, estado y acciones directas.
          Al expandir se muestran los pagadores, y al expandir cada pagador se ven sus facturas con estado.
        </p>
      </div>

      <Separator />

      {/* Main Demo */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            Operaciones Activas
            <Badge variant="secondary">{operaciones.length} operaciones</Badge>
          </CardTitle>
          <CardDescription>
            Selecciona operaciones para acciones batch. Click en los headers para ordenar.
            Usa la busqueda para filtrar por ID, cliente, pagador o NIT.
          </CardDescription>
        </CardHeader>
        <CardContent className="p-4 pt-0">
          <TreeTableV2
            data={operaciones}
            title="Portafolio de Factoring"
            description={`${operaciones.length} operaciones • ${operaciones.reduce((s, o) => s + o.facturas.length, 0)} facturas • ${formatPesos(operaciones.reduce((s, o) => s + o.valorFacturas, 0))} en cartera`}
            onSelectionChange={(ids) => console.log("Seleccion:", Array.from(ids))}
            onBatchAction={handleBatchAction}
            onVerOperacion={handleVer}
            onCancelarOperacion={handleCancelar}
            onDescargarExcel={handleDescargar}
          />
        </CardContent>
      </Card>
    </div>
  );
}

function formatPesos(val: number): string {
  return "$" + val.toLocaleString("es-CO", { minimumFractionDigits: 0, maximumFractionDigits: 0 });
}