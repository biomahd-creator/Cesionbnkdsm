import type { Meta, StoryObj } from '@storybook/react';
import { FactoringInvoiceTable, type FactoringInvoice, type InvoiceCategory } from './FactoringInvoiceTable';
import { useState } from 'react';

const meta: Meta<typeof FactoringInvoiceTable> = {
  title: 'Patterns/Factoring/FactoringInvoiceTable',
  component: FactoringInvoiceTable,
  tags: ['autodocs'],
  argTypes: {
    activeTab: {
      control: 'select',
      options: ['elegibles', 'pendientes', 'no-elegibles', 'descartadas'],
    },
    itemsPerPage: { control: { type: 'number', min: 5, max: 50 } },
  },
  parameters: {
    docs: {
      description: {
        component:
          'Core factoring invoice table with dynamic columns per tab (elegibles/pendientes/no-elegibles/descartadas). Features: checkbox selection, progress-with-range (vigencia), soft-outline status badges, search, pagination, bulk actions, and empty state.',
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof FactoringInvoiceTable>;

const mockInvoices: FactoringInvoice[] = [
  { id: '1', number: 'FAC-001', invoiceValue: '$45,200,000', advanceValue: '$42,800,000', lastEvent: 'Verificacion DIAN', state: 'Vigente', observations: 'Sin observaciones', validFrom: '2024-01-15', validTo: '2024-04-15', daysToExpire: 45, progress: 65, reviewStatus: 'Aprobada', rejectionReason: '', discardReason: '', discardDate: '', reviewer: 'Maria G.', category: 'elegibles' },
  { id: '2', number: 'FAC-002', invoiceValue: '$23,100,000', advanceValue: '$21,800,000', lastEvent: 'Validacion NIT', state: 'Vigente', observations: 'Pagador verificado', validFrom: '2024-02-01', validTo: '2024-05-01', daysToExpire: 60, progress: 45, reviewStatus: 'Aprobada', rejectionReason: '', discardReason: '', discardDate: '', reviewer: 'Carlos R.', category: 'elegibles' },
  { id: '3', number: 'FAC-003', invoiceValue: '$67,800,000', advanceValue: '$64,200,000', lastEvent: 'Revision compliance', state: 'Vigente', observations: 'Requiere revision adicional del cupo', validFrom: '2024-01-20', validTo: '2024-03-20', daysToExpire: 15, progress: 85, reviewStatus: 'En Revision', rejectionReason: '', discardReason: '', discardDate: '', reviewer: 'Ana T.', category: 'pendientes' },
  { id: '4', number: 'FAC-004', invoiceValue: '$12,500,000', advanceValue: '$11,800,000', lastEvent: 'Rechazo automatico', state: 'Vencida', observations: 'Factura vencida', validFrom: '2023-10-01', validTo: '2024-01-01', daysToExpire: -30, progress: 100, reviewStatus: 'Rechazada', rejectionReason: 'Plazo vencido — supera 90 dias', discardReason: '', discardDate: '', reviewer: 'Sistema', category: 'no-elegibles' },
  { id: '5', number: 'FAC-005', invoiceValue: '$8,900,000', advanceValue: '$8,400,000', lastEvent: 'Descarte manual', state: 'Descartada', observations: 'Duplicado de FAC-001', validFrom: '2024-01-15', validTo: '2024-04-15', daysToExpire: 45, progress: 65, reviewStatus: 'N/A', rejectionReason: '', discardReason: 'Factura duplicada', discardDate: '2024-02-05', reviewer: 'Maria G.', category: 'descartadas' },
  { id: '6', number: 'FAC-006', invoiceValue: '$34,700,000', advanceValue: '$32,900,000', lastEvent: 'Verificacion DIAN', state: 'Vigente', observations: '', validFrom: '2024-02-10', validTo: '2024-05-10', daysToExpire: 70, progress: 30, reviewStatus: 'Aprobada', rejectionReason: '', discardReason: '', discardDate: '', reviewer: 'Juan P.', category: 'elegibles' },
];

export const Elegibles: Story = {
  name: 'Tab: Elegibles',
  render: () => {
    const [selected, setSelected] = useState<string[]>([]);
    return (
      <FactoringInvoiceTable
        invoices={mockInvoices}
        activeTab="elegibles"
        selectedInvoices={selected}
        onToggleInvoice={(id) => setSelected((prev) => prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id])}
        onSelectAll={(ids) => setSelected(ids)}
        onDeselectAll={() => setSelected([])}
        onDiscard={(ids) => console.log('Discard:', ids)}
      />
    );
  },
};

export const Pendientes: Story = {
  name: 'Tab: Pendientes',
  render: () => {
    const [selected, setSelected] = useState<string[]>([]);
    return (
      <FactoringInvoiceTable
        invoices={mockInvoices}
        activeTab="pendientes"
        selectedInvoices={selected}
        onToggleInvoice={(id) => setSelected((prev) => prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id])}
      />
    );
  },
};

export const NoElegibles: Story = {
  name: 'Tab: No Elegibles',
  render: () => (
    <FactoringInvoiceTable
      invoices={mockInvoices}
      activeTab="no-elegibles"
      selectedInvoices={[]}
      onToggleInvoice={() => {}}
    />
  ),
};

export const Descartadas: Story = {
  name: 'Tab: Descartadas',
  render: () => (
    <FactoringInvoiceTable
      invoices={mockInvoices}
      activeTab="descartadas"
      selectedInvoices={[]}
      onToggleInvoice={() => {}}
    />
  ),
};

export const EmptyState: Story = {
  name: 'Empty (No Invoices)',
  render: () => (
    <FactoringInvoiceTable
      invoices={[]}
      activeTab="elegibles"
      selectedInvoices={[]}
      onToggleInvoice={() => {}}
    />
  ),
};
