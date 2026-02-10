import type { Meta, StoryObj } from '@storybook/react';
import { CFDashboard } from './CFDashboard';

const meta: Meta<typeof CFDashboard> = {
  title: 'Factoring/Components/CFDashboard',
  component: CFDashboard,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component:
          'C-Financia branded dashboard with KPI cards, line/bar charts (Recharts + SafeChartContainer), progress indicators, and financial metrics. Designed for the C-Financia product theme.',
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof CFDashboard>;

export const Default: Story = {
  render: () => <div className="p-6 bg-background"><CFDashboard /></div>,
};
