import type { Meta, StoryObj } from '@storybook/react';
import { RiskIndicator, type RiskLevel } from './RiskIndicator';
import { TooltipProvider } from '../components/ui/tooltip';

const meta: Meta<typeof RiskIndicator> = {
  title: 'Factoring/RiskIndicator',
  component: RiskIndicator,
  tags: ['autodocs'],
  decorators: [(Story) => <TooltipProvider><Story /></TooltipProvider>],
  argTypes: {
    level: { control: 'select', options: ['low', 'medium', 'high', 'critical'] },
    score: { control: { type: 'range', min: 0, max: 100, step: 1 } },
    showLabel: { control: 'boolean' },
    condensed: { control: 'boolean' },
  },
  parameters: {
    docs: {
      description: {
        component:
          'Risk level indicator with 4 levels: low (green), medium (amber), high (orange), critical (red). Shows icon, label, score bar, and tooltip. Supports condensed mode.',
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof RiskIndicator>;

export const Low: Story = {
  args: { level: 'low', score: 15, showLabel: true },
};

export const Medium: Story = {
  args: { level: 'medium', score: 50, showLabel: true },
};

export const High: Story = {
  args: { level: 'high', score: 75, showLabel: true },
};

export const Critical: Story = {
  args: { level: 'critical', score: 92, showLabel: true },
};

export const Condensed: Story = {
  args: { level: 'medium', score: 50, condensed: true },
};

export const AllLevels: Story = {
  name: 'All Risk Levels',
  render: () => (
    <div className="flex flex-wrap gap-6">
      <RiskIndicator level="low" score={15} showLabel />
      <RiskIndicator level="medium" score={50} showLabel />
      <RiskIndicator level="high" score={75} showLabel />
      <RiskIndicator level="critical" score={92} showLabel />
    </div>
  ),
};
