import type { Meta, StoryObj } from '@storybook/react';
import { FactoringDashboard } from './FactoringDashboard';

const meta: Meta<typeof FactoringDashboard> = {
  title: 'Factoring/Components/FactoringDashboard',
  component: FactoringDashboard,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component:
          'Factoring analytics dashboard with KPI cards (trending), monthly line chart, bar chart, and progress indicators. Uses SafeChartContainer + Recharts.',
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof FactoringDashboard>;

export const Default: Story = {
  render: () => <div className="p-6 bg-background"><FactoringDashboard /></div>,
};
