import type { Meta, StoryObj } from '@storybook/react';
import { FactoringKpiCard } from './FactoringKpiCard';
import { FileText, DollarSign, CheckCircle, XCircle, Clock } from 'lucide-react';

const meta: Meta<typeof FactoringKpiCard> = {
  title: 'Patterns/FactoringKpiCard',
  component: FactoringKpiCard,
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['default', 'blue', 'yellow', 'green', 'purple'],
    },
    isActive: { control: 'boolean' },
  },
  parameters: {
    docs: {
      description: {
        component:
          'KPI card for the Factoring module. Features colored bottom border, count badge, and hover/active states. Variants: default (gray), blue, yellow, green, purple. Uses hex colors (not tokens) per DSM exception.',
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof FactoringKpiCard>;

export const Default: Story = {
  args: {
    label: 'Facturas Descartadas',
    description: 'Excluidas del proceso',
    value: '$8.9M',
    count: 5,
    variant: 'default',
    icon: <XCircle />,
  },
};

export const Blue: Story = {
  args: {
    label: 'Total Facturas',
    description: 'Todas las facturas cargadas',
    value: '$234.5M',
    count: 48,
    variant: 'blue',
    icon: <FileText />,
  },
};

export const Green: Story = {
  args: {
    label: 'Facturas Aprobadas',
    description: 'Listas para desembolso',
    value: '$156.2M',
    count: 32,
    variant: 'green',
    icon: <CheckCircle />,
  },
};

export const Yellow: Story = {
  args: {
    label: 'Facturas Pendientes',
    description: 'En proceso de revision',
    value: '$45.3M',
    count: 8,
    variant: 'yellow',
    icon: <Clock />,
  },
};

export const Purple: Story = {
  args: {
    label: 'Monto Desembolsado',
    description: 'Total desembolsado este mes',
    value: '$1,234M',
    count: 145,
    variant: 'purple',
    icon: <DollarSign />,
  },
};

export const Active: Story = {
  name: 'Active State',
  args: {
    label: 'Total Facturas',
    description: 'Todas las facturas cargadas',
    value: '$234.5M',
    count: 48,
    variant: 'blue',
    isActive: true,
    icon: <FileText />,
  },
};

export const AllVariants: Story = {
  name: 'All Variants Showcase',
  render: () => (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-5">
      <FactoringKpiCard label="Total" description="Todas las facturas" value="$234M" count={48} variant="blue" icon={<FileText />} />
      <FactoringKpiCard label="Aprobadas" description="Listas para desembolso" value="$156M" count={32} variant="green" icon={<CheckCircle />} />
      <FactoringKpiCard label="Pendientes" description="En revision" value="$45M" count={8} variant="yellow" icon={<Clock />} />
      <FactoringKpiCard label="Desembolsado" description="Este mes" value="$1,234M" count={145} variant="purple" icon={<DollarSign />} />
      <FactoringKpiCard label="Descartadas" description="Excluidas" value="$8.9M" count={5} variant="default" icon={<XCircle />} />
    </div>
  ),
};
