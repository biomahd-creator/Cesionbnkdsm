import type { Meta, StoryObj } from '@storybook/react';
import { LiquidityCalculator } from './LiquidityCalculator';

const meta: Meta<typeof LiquidityCalculator> = {
  title: 'Factoring/Components/LiquidityCalculator',
  component: LiquidityCalculator,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component:
          'C-Financia liquidity calculator. Inputs: invoice amount, term, payor. Calculates advance amount (up to 90%), financial cost, net disbursement, and effective rate. Min: $10M COP, Terms: 30-180 days.',
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof LiquidityCalculator>;

export const Default: Story = {
  render: () => <LiquidityCalculator />,
};
