import type { Meta, StoryObj } from '@storybook/react';
import {
  Table, TableBody, TableCaption, TableCell,
  TableHead, TableHeader, TableRow, TableFooter,
} from './table';
import { Badge } from './badge';
import { Checkbox } from './checkbox';
import { Button } from './button';
import { MoreHorizontal, ArrowUpDown } from 'lucide-react';

const meta: Meta<typeof Table> = {
  title: 'UI/Table',
  component: Table,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component:
          'Table component with DSM convention: badges inside tables auto-adopt outline style via `table [data-slot="badge"]` CSS rule in globals.css. Use soft-outline badge variants for explicit semantic coloring.',
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof Table>;

/* ════════════════════════════════════════════
   BASIC TABLE
   ════════════════════════════════════════════ */

const basicInvoices = [
  { id: 'INV-001', status: 'Pagada', amount: '$250,000', method: 'Transferencia' },
  { id: 'INV-002', status: 'Pendiente', amount: '$150,000', method: 'Cheque' },
  { id: 'INV-003', status: 'Vencida', amount: '$350,000', method: 'Transferencia' },
  { id: 'INV-004', status: 'Pagada', amount: '$450,000', method: 'Efectivo' },
  { id: 'INV-005', status: 'Pagada', amount: '$550,000', method: 'Transferencia' },
];

export const Default: Story = {
  render: () => (
    <Table>
      <TableCaption>Lista de facturas recientes.</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead className="w-[120px]">Factura</TableHead>
          <TableHead>Estado</TableHead>
          <TableHead>Metodo</TableHead>
          <TableHead className="text-right">Monto</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {basicInvoices.map((inv) => (
          <TableRow key={inv.id}>
            <TableCell className="font-medium">{inv.id}</TableCell>
            <TableCell>{inv.status}</TableCell>
            <TableCell>{inv.method}</TableCell>
            <TableCell className="text-right">{inv.amount}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  ),
};

/* ════════════════════════════════════════════
   WITH BADGES (Soft Outline — DSM standard)
   ════════════════════════════════════════════ */

const statusMap: Record<string, { variant: any; label: string }> = {
  approved: { variant: 'success-soft-outline', label: 'Aprobada' },
  pending: { variant: 'warning-soft-outline', label: 'Pendiente' },
  rejected: { variant: 'destructive-soft-outline', label: 'Rechazada' },
  processing: { variant: 'info-soft-outline', label: 'En Proceso' },
  discarded: { variant: 'neutral', label: 'Descartada' },
};

const factoringInvoices = [
  { cufe: 'CUFE-001-2024', payor: 'Grupo Exito S.A.', amount: '$45,200,000', due: '2024-03-15', status: 'approved' },
  { cufe: 'CUFE-002-2024', payor: 'Ecopetrol S.A.', amount: '$23,100,000', due: '2024-03-22', status: 'pending' },
  { cufe: 'CUFE-003-2024', payor: 'Bancolombia S.A.', amount: '$67,800,000', due: '2024-04-01', status: 'processing' },
  { cufe: 'CUFE-004-2024', payor: 'Nutresa S.A.', amount: '$12,500,000', due: '2024-02-28', status: 'rejected' },
  { cufe: 'CUFE-005-2024', payor: 'ISA S.A.', amount: '$8,900,000', due: '2024-03-10', status: 'discarded' },
];

export const WithBadges: Story = {
  name: 'With Soft-Outline Badges',
  render: () => (
    <Table>
      <TableCaption>Facturas con badges semanticos soft-outline.</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead>CUFE</TableHead>
          <TableHead>Pagador</TableHead>
          <TableHead>Estado</TableHead>
          <TableHead>Vencimiento</TableHead>
          <TableHead className="text-right">Monto</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {factoringInvoices.map((inv) => {
          const st = statusMap[inv.status];
          return (
            <TableRow key={inv.cufe}>
              <TableCell className="font-medium">{inv.cufe}</TableCell>
              <TableCell>{inv.payor}</TableCell>
              <TableCell>
                <Badge variant={st.variant}>{st.label}</Badge>
              </TableCell>
              <TableCell>{inv.due}</TableCell>
              <TableCell className="text-right">{inv.amount}</TableCell>
            </TableRow>
          );
        })}
      </TableBody>
    </Table>
  ),
};

/* ════════════════════════════════════════════
   WITH FOOTER (totals)
   ════════════════════════════════════════════ */

export const WithFooter: Story = {
  name: 'With Footer Totals',
  render: () => (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Factura</TableHead>
          <TableHead>Pagador</TableHead>
          <TableHead className="text-right">Monto</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {factoringInvoices.slice(0, 3).map((inv) => (
          <TableRow key={inv.cufe}>
            <TableCell className="font-medium">{inv.cufe}</TableCell>
            <TableCell>{inv.payor}</TableCell>
            <TableCell className="text-right">{inv.amount}</TableCell>
          </TableRow>
        ))}
      </TableBody>
      <TableFooter>
        <TableRow>
          <TableCell colSpan={2}>Total</TableCell>
          <TableCell className="text-right font-medium">$136,100,000</TableCell>
        </TableRow>
      </TableFooter>
    </Table>
  ),
};

/* ════════════════════════════════════════════
   WITH SELECTION (checkboxes)
   ════════════════════════════════════════════ */

export const WithSelection: Story = {
  name: 'With Row Selection',
  render: () => (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead className="w-[40px]">
            <Checkbox />
          </TableHead>
          <TableHead>CUFE</TableHead>
          <TableHead>Pagador</TableHead>
          <TableHead>Estado</TableHead>
          <TableHead className="text-right">Monto</TableHead>
          <TableHead className="w-[40px]" />
        </TableRow>
      </TableHeader>
      <TableBody>
        {factoringInvoices.map((inv) => {
          const st = statusMap[inv.status];
          return (
            <TableRow key={inv.cufe}>
              <TableCell>
                <Checkbox />
              </TableCell>
              <TableCell className="font-medium">{inv.cufe}</TableCell>
              <TableCell>{inv.payor}</TableCell>
              <TableCell>
                <Badge variant={st.variant}>{st.label}</Badge>
              </TableCell>
              <TableCell className="text-right">{inv.amount}</TableCell>
              <TableCell>
                <Button variant="ghost" size="icon">
                  <MoreHorizontal className="size-4" />
                </Button>
              </TableCell>
            </TableRow>
          );
        })}
      </TableBody>
    </Table>
  ),
};

/* ════════════════════════════════════════════
   WITH SORTABLE HEADERS
   ════════════════════════════════════════════ */

export const SortableHeaders: Story = {
  name: 'With Sortable Headers',
  render: () => (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>
            <Button variant="ghost" size="sm" className="-ml-3 h-8 gap-1">
              CUFE <ArrowUpDown className="size-3" />
            </Button>
          </TableHead>
          <TableHead>
            <Button variant="ghost" size="sm" className="-ml-3 h-8 gap-1">
              Pagador <ArrowUpDown className="size-3" />
            </Button>
          </TableHead>
          <TableHead>Estado</TableHead>
          <TableHead className="text-right">
            <Button variant="ghost" size="sm" className="-mr-3 h-8 gap-1 float-right">
              Monto <ArrowUpDown className="size-3" />
            </Button>
          </TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {factoringInvoices.map((inv) => {
          const st = statusMap[inv.status];
          return (
            <TableRow key={inv.cufe}>
              <TableCell className="font-medium">{inv.cufe}</TableCell>
              <TableCell>{inv.payor}</TableCell>
              <TableCell>
                <Badge variant={st.variant}>{st.label}</Badge>
              </TableCell>
              <TableCell className="text-right">{inv.amount}</TableCell>
            </TableRow>
          );
        })}
      </TableBody>
    </Table>
  ),
};
