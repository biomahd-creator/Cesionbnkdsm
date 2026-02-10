import type { Meta, StoryObj } from '@storybook/react';
import { GaugeChart } from './GaugeChart';

const meta: Meta<typeof GaugeChart> = {
  title: 'Advanced/GaugeChart',
  component: GaugeChart,
  tags: ['autodocs'],
  argTypes: {
    value: { control: { type: 'range', min: 0, max: 100, step: 1 } },
    max: { control: { type: 'number', min: 1, max: 1000 } },
    size: { control: { type: 'range', min: 100, max: 400, step: 20 } },
    showPercentage: { control: 'boolean' },
    showLabel: { control: 'boolean' },
    title: { control: 'text' },
    label: { control: 'text' },
  },
  parameters: {
    docs: {
      description: {
        component:
          'Gauge/speedometer chart using Recharts PieChart with half-circle rendering. Auto-colors based on thresholds (low=red, medium=amber, high=green). Optionally wrapped in a Card.',
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof GaugeChart>;

export const Default: Story = {
  args: { value: 72, title: 'Performance', description: 'Rendimiento del sistema', label: 'Score' },
};

export const Low: Story = {
  args: { value: 20, title: 'Bajo', label: 'Critical' },
};

export const Medium: Story = {
  args: { value: 55, title: 'Medio', label: 'Needs attention' },
};

export const High: Story = {
  args: { value: 90, title: 'Alto', label: 'Excellent' },
};

export const Standalone: Story = {
  name: 'Standalone (No Card)',
  args: { value: 65, label: 'Usage', size: 200 },
};

export const CustomSize: Story = {
  name: 'Custom Size (300px)',
  args: { value: 78, title: 'KPI Score', size: 300, label: 'Points' },
};

export const GaugeDashboard: Story = {
  name: 'Dashboard Grid',
  render: () => (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      <GaugeChart value={85} title="Cupo Utilizado" label="Disponibilidad" size={180} />
      <GaugeChart value={45} title="Tasa de Aprobacion" label="Operaciones" size={180} />
      <GaugeChart value={92} title="Cumplimiento" label="Documentos" size={180} />
    </div>
  ),
};
