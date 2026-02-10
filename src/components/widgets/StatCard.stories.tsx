import type { Meta, StoryObj } from '@storybook/react';
import { StatCard } from './StatCard';
import { DollarSign, FileText, Users, TrendingUp } from 'lucide-react';

const meta: Meta<typeof StatCard> = {
  title: 'Widgets/StatCard',
  component: StatCard,
  tags: ['autodocs'],
  argTypes: {
    trend: { control: 'select', options: ['up', 'down'] },
  },
  parameters: {
    docs: {
      description: {
        component: 'Simple stat card with title, value, change badge, and trend icon. Uses Card layout with compact header.',
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof StatCard>;

export const Default: Story = {
  args: { title: 'Ingresos', value: '$1,234M', change: '+12.5%', trend: 'up', icon: DollarSign },
};

export const TrendDown: Story = {
  args: { title: 'Costos', value: '$450K', change: '-3.2%', trend: 'down', icon: TrendingUp },
};

export const NoChange: Story = {
  name: 'Without Change',
  args: { title: 'Clientes Activos', value: '156', icon: Users },
};

export const Grid: Story = {
  name: 'Stats Grid',
  render: () => (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
      <StatCard title="Ingresos" value="$1,234M" change="+12.5%" trend="up" icon={DollarSign} />
      <StatCard title="Facturas" value="2,345" change="+8.2%" trend="up" icon={FileText} />
      <StatCard title="Clientes" value="156" change="-2.1%" trend="down" icon={Users} />
      <StatCard title="Crecimiento" value="23.5%" change="+2.4%" trend="up" icon={TrendingUp} />
    </div>
  ),
};
