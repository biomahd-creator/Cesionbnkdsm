import type { Meta, StoryObj } from '@storybook/react';
import { Heatmap, type HeatmapCell } from './Heatmap';

const meta: Meta<typeof Heatmap> = {
  title: 'Advanced/Heatmap',
  component: Heatmap,
  tags: ['autodocs'],
  argTypes: {
    showValues: { control: 'boolean' },
    showLabels: { control: 'boolean' },
    cellSize: { control: { type: 'range', min: 30, max: 100, step: 5 } },
  },
  parameters: {
    docs: {
      description: {
        component:
          'Matrix heatmap for visualizing patterns in 2D data. Color scale with 3 levels (low, medium, high). Uses CSS custom properties for dynamic cell colors. Shows legend with min/max.',
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof Heatmap>;

const days = ['Lun', 'Mar', 'Mie', 'Jue', 'Vie'];
const hours = ['9AM', '10AM', '11AM', '12PM', '2PM', '3PM', '4PM', '5PM'];

const activityData: HeatmapCell[] = days.flatMap((day) =>
  hours.map((hour) => ({
    row: day,
    col: hour,
    value: Math.floor(Math.random() * 50) + 1,
  }))
);

const months = ['Ene', 'Feb', 'Mar', 'Abr', 'May', 'Jun'];
const payors = ['Exito', 'Ecopetrol', 'Bancolombia', 'Nutresa', 'ISA'];

const operationsData: HeatmapCell[] = payors.flatMap((payor) =>
  months.map((month) => ({
    row: payor,
    col: month,
    value: Math.floor(Math.random() * 30) + 1,
    label: `${payor} - ${month}: ${Math.floor(Math.random() * 30) + 1} operaciones`,
  }))
);

export const Default: Story = {
  args: {
    data: activityData,
    rows: days,
    columns: hours,
    title: 'Actividad por Hora',
    description: 'Operaciones procesadas por dia y hora',
  },
};

export const Standalone: Story = {
  name: 'Standalone (No Card)',
  args: {
    data: activityData,
    rows: days,
    columns: hours,
  },
};

export const CustomColors: Story = {
  name: 'Custom Color Scale (Green)',
  args: {
    data: activityData,
    rows: days,
    columns: hours,
    title: 'Performance',
    colorScale: {
      low: '#dcfce7',
      medium: '#22c55e',
      high: '#15803d',
    },
  },
};

export const SmallCells: Story = {
  name: 'Small Cells (40px)',
  args: {
    data: activityData,
    rows: days,
    columns: hours,
    cellSize: 40,
    title: 'Compacto',
  },
};

export const FactoringOperationsByPayor: Story = {
  name: 'Real World: Factoring Operations by Payor',
  args: {
    data: operationsData,
    rows: payors,
    columns: months,
    title: 'Operaciones por Pagador',
    description: 'Cantidad de operaciones de factoring por pagador y mes — H1 2026',
    cellSize: 70,
  },
};
