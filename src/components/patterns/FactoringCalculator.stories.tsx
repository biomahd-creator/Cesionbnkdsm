import type { Meta, StoryObj } from '@storybook/react';
import { FactoringCalculator } from './FactoringCalculator';

const meta: Meta<typeof FactoringCalculator> = {
  title: 'Patterns/FactoringCalculator',
  component: FactoringCalculator,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component:
          'Real-time factoring calculator. Inputs: invoice amount, term (days), monthly rate. Auto-calculates: commission, net amount, effective annual cost (CEA). Uses Slider for rate + term selection.',
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof FactoringCalculator>;

export const Default: Story = {
  render: () => <FactoringCalculator />,
};
