import type { Meta, StoryObj } from '@storybook/react';
import { ChartShowcase } from './ChartShowcase';

const meta: Meta<typeof ChartShowcase> = {
  title: 'Advanced/ChartShowcase',
  component: ChartShowcase,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component:
          'Showcase page demonstrating all chart types available in the DSM: Line, Bar, Area, Pie, Radar, and Composed charts using Recharts.',
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof ChartShowcase>;

export const Default: Story = {
  render: () => <ChartShowcase />,
};
