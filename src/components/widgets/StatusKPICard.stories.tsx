import type { Meta, StoryObj } from '@storybook/react';
import { StatusKPICard } from './StatusKPICard';

const meta: Meta<typeof StatusKPICard> = {
  title: 'Widgets/StatusKPICard',
  component: StatusKPICard,
  tags: ['autodocs'],
  argTypes: {
    variant: { control: 'select', options: ['default', 'negotiation', 'disbursed', 'warning', 'error'] },
    state: { control: 'select', options: ['normal', 'hover', 'active'] },
  },
  parameters: {
    docs: {
      description: {
        component:
          'Status-aware KPI card with 5 variants (default, negotiation, disbursed, warning, error) and 3 states (normal, hover, active). Used in FactoringSelectionPage.',
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof StatusKPICard>;

export const Default: Story = {
  args: { title: 'Total Operaciones', subtitle: 'Todas las operaciones', amount: '$2,345M', count: 48 },
};

export const Negotiation: Story = {
  args: { title: 'En Negociacion', subtitle: 'Pendientes de aprobacion', amount: '$456M', count: 12, variant: 'negotiation' },
};

export const Disbursed: Story = {
  args: { title: 'Desembolsadas', subtitle: 'Operaciones completadas', amount: '$1,890M', count: 36, variant: 'disbursed' },
};

export const Warning: Story = {
  args: { title: 'Requieren Atencion', subtitle: 'Cerca de vencimiento', amount: '$120M', count: 5, variant: 'warning' },
};

export const Error: Story = {
  args: { title: 'Rechazadas', subtitle: 'Operaciones rechazadas', amount: '$45M', count: 3, variant: 'error' },
};

export const ActiveState: Story = {
  name: 'Active State',
  args: { title: 'En Negociacion', subtitle: 'Seleccionado', amount: '$456M', count: 12, variant: 'negotiation', state: 'active' },
};

export const AllVariants: Story = {
  name: 'All Variants Grid',
  render: () => (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
      <StatusKPICard title="Total" subtitle="Todas" amount="$2,345M" count={48} />
      <StatusKPICard title="Negociacion" subtitle="Pendientes" amount="$456M" count={12} variant="negotiation" />
      <StatusKPICard title="Desembolsadas" subtitle="Completadas" amount="$1,890M" count={36} variant="disbursed" />
      <StatusKPICard title="Atencion" subtitle="Vencimiento" amount="$120M" count={5} variant="warning" />
      <StatusKPICard title="Rechazadas" subtitle="Rechazadas" amount="$45M" count={3} variant="error" />
    </div>
  ),
};
