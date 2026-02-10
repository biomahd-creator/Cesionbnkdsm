import type { Meta, StoryObj } from '@storybook/react';
import { AdvancedFilterPanel } from './AdvancedFilterPanel';

const meta: Meta<typeof AdvancedFilterPanel> = {
  title: 'Patterns/AdvancedFilterPanel',
  component: AdvancedFilterPanel,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component:
          'Side sheet filter panel with status checkboxes, client type, amount range, date pickers, and active filter badges. Opens from a trigger button. Reset + Apply actions.',
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof AdvancedFilterPanel>;

export const Default: Story = {
  render: () => <AdvancedFilterPanel />,
};
