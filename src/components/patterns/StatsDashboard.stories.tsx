import type { Meta, StoryObj } from '@storybook/react';
import { StatsDashboard } from './StatsDashboard';

const meta: Meta<typeof StatsDashboard> = {
  title: 'Patterns/StatsDashboard',
  component: StatsDashboard,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component:
          'Stats dashboard pattern combining KPI cards, charts, and tables in a responsive grid layout. Demonstrates typical factoring dashboard composition.',
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof StatsDashboard>;

export const Default: Story = {
  render: () => <StatsDashboard />,
};
