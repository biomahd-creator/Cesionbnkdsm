import type { Meta, StoryObj } from '@storybook/react';
import { ReportsConsultation } from './ReportsConsultation';

const meta: Meta<typeof ReportsConsultation> = {
  title: 'Patterns/ReportsConsultation',
  component: ReportsConsultation,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: 'Reports consultation page with date range, report type selection, data preview, and export actions.',
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof ReportsConsultation>;

export const Default: Story = {
  render: () => <ReportsConsultation />,
};
