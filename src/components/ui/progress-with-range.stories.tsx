import type { Meta, StoryObj } from '@storybook/react';
import { ProgressWithRange } from './progress-with-range';

const meta: Meta<typeof ProgressWithRange> = {
  title: 'UI/ProgressWithRange',
  component: ProgressWithRange,
  tags: ['autodocs'],
  argTypes: {
    value: {
      control: { type: 'range', min: 0, max: 100, step: 1 },
      description: 'Progress value (0–100)',
    },
    from: { control: 'text', description: 'Start label (e.g. date)' },
    to: { control: 'text', description: 'End label (e.g. date)' },
  },
  parameters: {
    docs: {
      description: {
        component:
          'Progress bar with start/end range labels. Extracted from Factoring module for date-range vigencia periods. Composes the base `Progress` component internally.',
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof ProgressWithRange>;

export const Default: Story = {
  args: {
    value: 75,
    from: '27 Nov 2025',
    to: '27 Dic 2025',
  },
  decorators: [(Story) => <div className="w-full max-w-sm"><Story /></div>],
};

export const Empty: Story = {
  args: {
    value: 0,
    from: '01 Ene 2026',
    to: '31 Mar 2026',
  },
  decorators: [(Story) => <div className="w-full max-w-sm"><Story /></div>],
};

export const Half: Story = {
  args: {
    value: 50,
    from: '15 Sep 2025',
    to: '15 Mar 2026',
  },
  decorators: [(Story) => <div className="w-full max-w-sm"><Story /></div>],
};

export const Complete: Story = {
  args: {
    value: 100,
    from: '01 Oct 2025',
    to: '01 Nov 2025',
  },
  decorators: [(Story) => <div className="w-full max-w-sm"><Story /></div>],
};

export const CustomHeight: Story = {
  name: 'Custom Bar Height',
  args: {
    value: 60,
    from: '01 Feb 2026',
    to: '28 Feb 2026',
    barClassName: 'h-3',
  },
  decorators: [(Story) => <div className="w-full max-w-sm"><Story /></div>],
};

export const MultipleTimelines: Story = {
  name: 'Multiple Vigencias',
  render: () => (
    <div className="space-y-6 w-full max-w-md">
      <div>
        <p className="text-sm mb-1">Operación FO-001</p>
        <ProgressWithRange value={90} from="27 Nov" to="27 Dic" />
      </div>
      <div>
        <p className="text-sm mb-1">Operación FO-002</p>
        <ProgressWithRange value={45} from="15 Dic" to="15 Ene" />
      </div>
      <div>
        <p className="text-sm mb-1">Operación FO-003</p>
        <ProgressWithRange value={10} from="01 Ene" to="01 Abr" />
      </div>
    </div>
  ),
};
