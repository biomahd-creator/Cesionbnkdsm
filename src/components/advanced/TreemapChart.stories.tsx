import type { Meta, StoryObj } from '@storybook/react';
import { TreemapChart, type TreemapData } from './TreemapChart';

const meta: Meta<typeof TreemapChart> = {
  title: 'Advanced/TreemapChart',
  component: TreemapChart,
  tags: ['autodocs'],
  argTypes: {
    height: { control: { type: 'range', min: 200, max: 600, step: 50 } },
  },
  parameters: {
    docs: {
      description: {
        component:
          'Treemap chart using Recharts for visualizing hierarchical/proportional data. Rectangles sized by value. Auto-colored from palette.',
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof TreemapChart>;

const portfolioData: TreemapData[] = [
  { name: 'Grupo Exito', size: 45200000 },
  { name: 'Ecopetrol', size: 67800000 },
  { name: 'Bancolombia', size: 23100000 },
  { name: 'Nutresa', size: 34700000 },
  { name: 'ISA', size: 19800000 },
  { name: 'Argos', size: 12500000 },
  { name: 'Sura', size: 8900000 },
];

export const Default: Story = {
  args: {
    data: portfolioData,
    title: 'Portafolio por Pagador',
    description: 'Distribucion del volumen de factoring por pagador',
    height: 350,
  },
};

export const Standalone: Story = {
  name: 'Standalone (No Card)',
  args: { data: portfolioData, height: 300 },
};
