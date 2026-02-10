import type { Meta, StoryObj } from '@storybook/react';
import { Sparkline, type SparklineData } from './Sparkline';

const meta: Meta<typeof Sparkline> = {
  title: 'Advanced/Sparkline',
  component: Sparkline,
  tags: ['autodocs'],
  argTypes: {
    height: { control: { type: 'range', min: 30, max: 120, step: 10 } },
    showTrend: { control: 'boolean' },
    color: { control: 'color' },
  },
  parameters: {
    docs: {
      description: {
        component:
          'Minimal trend line chart using Recharts. No axes or labels — just the data line. Can be standalone or wrapped in a Card with title, value, and change indicator.',
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof Sparkline>;

const upTrend: SparklineData[] = [
  { value: 10 }, { value: 15 }, { value: 12 }, { value: 18 },
  { value: 22 }, { value: 20 }, { value: 25 }, { value: 30 },
  { value: 28 }, { value: 35 },
];

const downTrend: SparklineData[] = [
  { value: 35 }, { value: 30 }, { value: 32 }, { value: 28 },
  { value: 25 }, { value: 20 }, { value: 22 }, { value: 18 },
  { value: 15 }, { value: 10 },
];

const flatTrend: SparklineData[] = [
  { value: 20 }, { value: 22 }, { value: 19 }, { value: 21 },
  { value: 20 }, { value: 23 }, { value: 21 }, { value: 20 },
  { value: 22 }, { value: 21 },
];

export const Default: Story = {
  args: {
    data: upTrend,
    title: 'Ingresos',
    value: '$1,234M',
    change: 12.5,
    changeLabel: 'vs mes anterior',
  },
};

export const Negative: Story = {
  args: {
    data: downTrend,
    title: 'Costos Operativos',
    value: '$450K',
    change: -8.3,
    changeLabel: 'vs mes anterior',
    color: '#ef4444',
  },
};

export const Flat: Story = {
  args: {
    data: flatTrend,
    title: 'Tasa Promedio',
    value: '1.2%',
    change: 0,
  },
};

export const Standalone: Story = {
  name: 'Standalone (No Card)',
  render: () => (
    <div className="w-[200px]">
      <Sparkline data={upTrend} height={40} />
    </div>
  ),
};

export const SparklineDashboard: Story = {
  name: 'Dashboard Grid',
  render: () => (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      <Sparkline data={upTrend} title="Volumen Operaciones" value="$2,345M" change={15.2} />
      <Sparkline data={downTrend} title="Tasa Mora" value="2.1%" change={-0.5} color="#ef4444" />
      <Sparkline data={flatTrend} title="Tasa Descuento" value="1.2%" change={0} color="#3b82f6" />
    </div>
  ),
};
