import type { Meta, StoryObj } from '@storybook/react';
import { KPIShowcaseExtended } from './KPIShowcaseExtended';

const meta: Meta<typeof KPIShowcaseExtended> = {
  title: 'Patterns/KPIShowcaseExtended',
  component: KPIShowcaseExtended,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: 'Extended KPI showcase with additional card variants, progress indicators, and comparison metrics.',
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof KPIShowcaseExtended>;

export const Default: Story = {
  render: () => <KPIShowcaseExtended />,
};
