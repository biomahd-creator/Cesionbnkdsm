import type { Meta, StoryObj } from "@storybook/react";
import { TreeTableV2, type OperacionFactoring } from "./TreeTableV2";

const meta: Meta<typeof TreeTableV2> = {
  title: "Advanced/TreeTableV2",
  component: TreeTableV2,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component:
          "TreeTable V2 — Tabla de Operaciones de Factoring con 3 niveles (Operacion → Pagador → Facturas). " +
          "Columnas: Checkbox, ID, Fecha Op., Cliente (NIT), Pagadores (nombre/badge), Facturas (badge), " +
          "Valor Facturas, Valor Desembolso, Estado (badges Soft-Outline), Acciones (Ver, Cancelar, Descargar Excel). " +
          "Incluye busqueda, sorting por headers, filtro de estado, seleccion cascada tridireccional y acciones batch.",
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof TreeTableV2>;

const sampleData: OperacionFactoring[] = [
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
        pagador: { nombre: "Falabella de Colombia S.A.", nit: "900.017.447-8" },
        valor: 67800000,
        valorDesembolso: 64410000,
        fechaVencimiento: "10/04/2026",
        estado: "vigente",
      },
    ],
    valorFacturas: 252800000,
    valorDesembolso: 240160000,
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
    ],
    valorFacturas: 420000000,
    valorDesembolso: 399000000,
    estado: "desembolsada",
  },
];

export const Default: Story = {
  args: {
    data: sampleData,
    title: "Portafolio de Factoring",
    description: "Operaciones activas del modulo de factoring",
  },
};

export const WithCallbacks: Story = {
  name: "Full Interactive",
  args: {
    data: sampleData,
    title: "Operaciones con Acciones",
    description: "Seleccion, busqueda, sorting y acciones batch",
    onSelectionChange: (ids) => console.log("Selected:", Array.from(ids)),
    onBatchAction: (action, ids) => console.log(`Batch: ${action}`, Array.from(ids)),
    onVerOperacion: (op) => console.log("Ver:", op.id),
    onCancelarOperacion: (op) => console.log("Cancelar:", op.id),
    onDescargarExcel: (op) => console.log("Descargar:", op.id),
  },
};