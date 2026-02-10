import type { Meta, StoryObj } from '@storybook/react';
import { InvoiceCard, type InvoiceData } from './InvoiceCard';

const meta: Meta<typeof InvoiceCard> = {
  title: 'Factoring/InvoiceCard',
  component: InvoiceCard,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component:
          'Invoice card for factoring with status badge, amount, dates, probability progress bar, and action dropdown. Statuses: pending, approved, rejected, paid, overdue.',
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof InvoiceCard>;

const baseInvoice: InvoiceData = {
  id: '1',
  number: 'FAC-2024-001',
  clientName: 'Grupo Exito S.A.',
  amount: 45200000,
  dueDate: '2024-04-15',
  issueDate: '2024-01-15',
  status: 'pending',
  probability: 85,
};

export const Pending: Story = {
  args: {
    invoice: baseInvoice,
    onAction: (action) => console.log('Action:', action),
  },
};

export const Approved: Story = {
  args: {
    invoice: { ...baseInvoice, id: '2', status: 'approved', probability: 100 },
  },
};

export const Rejected: Story = {
  args: {
    invoice: { ...baseInvoice, id: '3', number: 'FAC-2024-003', status: 'rejected', probability: 0 },
  },
};

export const Paid: Story = {
  args: {
    invoice: { ...baseInvoice, id: '4', number: 'FAC-2024-004', status: 'paid', probability: 100 },
  },
};

export const Overdue: Story = {
  args: {
    invoice: { ...baseInvoice, id: '5', number: 'FAC-2024-005', status: 'overdue', dueDate: '2024-01-01', probability: 30 },
  },
};

export const AllStatuses: Story = {
  name: 'All Statuses Grid',
  render: () => (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      <InvoiceCard invoice={{ ...baseInvoice, id: '1', status: 'pending', probability: 85 }} />
      <InvoiceCard invoice={{ ...baseInvoice, id: '2', number: 'FAC-002', status: 'approved', probability: 100 }} />
      <InvoiceCard invoice={{ ...baseInvoice, id: '3', number: 'FAC-003', status: 'rejected', probability: 0 }} />
      <InvoiceCard invoice={{ ...baseInvoice, id: '4', number: 'FAC-004', status: 'paid', probability: 100 }} />
      <InvoiceCard invoice={{ ...baseInvoice, id: '5', number: 'FAC-005', status: 'overdue', dueDate: '2024-01-01', probability: 30 }} />
    </div>
  ),
};
