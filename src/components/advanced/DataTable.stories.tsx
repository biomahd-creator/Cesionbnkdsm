import type { Meta, StoryObj } from '@storybook/react';
import { DataTable } from './DataTable';
import { ColumnDef } from '@tanstack/react-table';
import { Badge } from '../ui/badge';
import { Button } from '../ui/button';
import { ArrowUpDown, MoreHorizontal } from 'lucide-react';

const meta: Meta<typeof DataTable> = {
  title: 'Advanced/DataTable',
  component: DataTable,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component:
          'Full-featured data table using TanStack Table. Includes sorting, filtering, column visibility, row selection, and pagination. Wraps MasterDataGrid for toolbar/footer.',
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof DataTable>;

interface Invoice {
  cufe: string;
  pagador: string;
  monto: number;
  estado: string;
  fecha: string;
}

const invoiceData: Invoice[] = [
  { cufe: 'CUFE-001', pagador: 'Grupo Exito S.A.', monto: 45200000, estado: 'Aprobada', fecha: '2024-03-15' },
  { cufe: 'CUFE-002', pagador: 'Ecopetrol S.A.', monto: 23100000, estado: 'Pendiente', fecha: '2024-03-22' },
  { cufe: 'CUFE-003', pagador: 'Bancolombia S.A.', monto: 67800000, estado: 'En Proceso', fecha: '2024-04-01' },
  { cufe: 'CUFE-004', pagador: 'Nutresa S.A.', monto: 12500000, estado: 'Rechazada', fecha: '2024-02-28' },
  { cufe: 'CUFE-005', pagador: 'ISA S.A.', monto: 8900000, estado: 'Aprobada', fecha: '2024-03-10' },
  { cufe: 'CUFE-006', pagador: 'Argos S.A.', monto: 34700000, estado: 'Pendiente', fecha: '2024-04-05' },
  { cufe: 'CUFE-007', pagador: 'Grupo Sura S.A.', monto: 19800000, estado: 'Aprobada', fecha: '2024-03-18' },
  { cufe: 'CUFE-008', pagador: 'Avianca S.A.', monto: 56300000, estado: 'En Proceso', fecha: '2024-04-10' },
];

const statusVariantMap: Record<string, any> = {
  Aprobada: 'success-soft-outline',
  Pendiente: 'warning-soft-outline',
  'En Proceso': 'info-soft-outline',
  Rechazada: 'destructive-soft-outline',
};

const columns: ColumnDef<Invoice>[] = [
  {
    accessorKey: 'cufe',
    header: ({ column }) => (
      <Button variant="ghost" size="sm" className="-ml-3 h-8" onClick={() => column.toggleSorting()}>
        CUFE <ArrowUpDown className="ml-1 size-3" />
      </Button>
    ),
    cell: ({ row }) => <span className="font-medium">{row.getValue('cufe')}</span>,
  },
  {
    accessorKey: 'pagador',
    header: 'Pagador',
  },
  {
    accessorKey: 'monto',
    header: ({ column }) => (
      <Button variant="ghost" size="sm" className="-ml-3 h-8" onClick={() => column.toggleSorting()}>
        Monto <ArrowUpDown className="ml-1 size-3" />
      </Button>
    ),
    cell: ({ row }) => {
      const monto = row.getValue('monto') as number;
      return <span className="text-right block">${monto.toLocaleString('es-CO')}</span>;
    },
  },
  {
    accessorKey: 'estado',
    header: 'Estado',
    cell: ({ row }) => {
      const estado = row.getValue('estado') as string;
      return <Badge variant={statusVariantMap[estado] || 'neutral'}>{estado}</Badge>;
    },
  },
  {
    accessorKey: 'fecha',
    header: 'Fecha',
  },
];

export const Default: Story = {
  render: () => (
    <DataTable
      columns={columns}
      data={invoiceData}
      searchKey="pagador"
      searchPlaceholder="Buscar por pagador..."
      title="Facturas"
      description="Lista de facturas de la operacion"
    />
  ),
};

export const WithoutSearch: Story = {
  name: 'Without Search',
  render: () => (
    <DataTable columns={columns} data={invoiceData} title="Facturas" />
  ),
};

export const EmptyState: Story = {
  name: 'Empty Data',
  render: () => (
    <DataTable
      columns={columns}
      data={[]}
      searchKey="pagador"
      title="Facturas"
      description="No hay facturas cargadas"
    />
  ),
};
