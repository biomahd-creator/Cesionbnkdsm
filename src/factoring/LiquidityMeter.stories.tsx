import type { Meta, StoryObj } from '@storybook/react';
import { LiquidityMeter } from './LiquidityMeter';

const meta: Meta<typeof LiquidityMeter> = {
  title: 'Factoring/LiquidityMeter',
  component: LiquidityMeter,
  tags: ['autodocs'],
  argTypes: {
    value: { control: { type: 'range', min: 0, max: 100, step: 1 } },
  },
  parameters: {
    docs: {
      description: {
        component:
          'SVG semi-circle gauge for liquidity index. Color: green (>=70), yellow (>=40), red (<40). Optionally shows formatted COP amount.',
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof LiquidityMeter>;

export const High: Story = {
  args: { value: 85, label: 'Indice de Liquidez', amount: 1250000000 },
};

export const Medium: Story = {
  args: { value: 55, label: 'Indice de Liquidez', amount: 450000000 },
};

export const Low: Story = {
  args: { value: 25, label: 'Indice de Liquidez', amount: 80000000 },
};

export const AllLevels: Story = {
  name: 'All Levels',
  render: () => (
    <div className="flex flex-wrap gap-8 items-end">
      <LiquidityMeter value={85} amount={1250000000} />
      <LiquidityMeter value={55} amount={450000000} />
      <LiquidityMeter value={25} amount={80000000} />
    </div>
  ),
};
