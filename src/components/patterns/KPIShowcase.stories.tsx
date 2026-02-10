import type { Meta, StoryObj } from '@storybook/react';
import { KPIShowcase } from './KPIShowcase';

const meta: Meta<typeof KPIShowcase> = {
  title: 'Patterns/KPIShowcase',
  component: KPIShowcase,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: 'Showcase of KPI card patterns with multiple layout options, stat cards, and trend indicators.',
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof KPIShowcase>;

export const Default: Story = {
  render: () => <KPIShowcase />,
};
