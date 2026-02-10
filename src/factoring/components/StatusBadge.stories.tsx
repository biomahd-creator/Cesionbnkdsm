import type { Meta, StoryObj } from '@storybook/react';
import { StatusBadge } from './StatusBadge';

const meta: Meta<typeof StatusBadge> = {
  title: 'Factoring/Components/StatusBadge',
  component: StatusBadge,
  tags: ['autodocs'],
  argTypes: {
    status: {
      control: 'select',
      options: ['paid', 'pending', 'overdue', 'Aprobada', 'Pendiente', 'Rechazada', 'urgente', 'completado'],
    },
    variant: { control: 'select', options: ['outline', 'default'] },
  },
  parameters: {
    docs: {
      description: {
        component:
          'Domain-specific status badge with pre-configured color mappings for payment states (paid/pending/overdue) and operation states (Aprobada/Pendiente/Rechazada/urgente/completado). Exports helper functions: getStatusColor, getStatusIconBg, getStatusTextColor.',
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof StatusBadge>;

export const Paid: Story = { args: { status: 'paid' } };
export const Pending: Story = { args: { status: 'pending' } };
export const Overdue: Story = { args: { status: 'overdue' } };
export const Aprobada: Story = { args: { status: 'Aprobada' } };
export const PendienteEs: Story = { name: 'Pendiente', args: { status: 'Pendiente' } };
export const Rechazada: Story = { args: { status: 'Rechazada' } };
export const Urgente: Story = { args: { status: 'urgente' } };
export const Completado: Story = { args: { status: 'completado' } };

export const AllStatuses: Story = {
  name: 'All Statuses',
  render: () => (
    <div className="flex flex-wrap gap-3">
      {['paid', 'pending', 'overdue', 'Aprobada', 'Pendiente', 'Rechazada', 'urgente', 'completado'].map((s) => (
        <StatusBadge key={s} status={s} />
      ))}
    </div>
  ),
};
