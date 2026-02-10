import type { Meta, StoryObj } from '@storybook/react';
import { StatsGrid } from './StatsGrid';

const meta: Meta<typeof StatsGrid> = {
  title: 'Widgets/StatsGrid',
  component: StatsGrid,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: 'Pre-composed stats grid with 4 factoring KPIs: Cartera Activa, Facturas Procesadas, Tasa de Aprobacion, Tiempo Promedio. Uses StatCard internally.',
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof StatsGrid>;

export const Default: Story = {
  render: () => <StatsGrid />,
};
