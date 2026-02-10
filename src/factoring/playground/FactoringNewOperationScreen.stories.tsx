import type { Meta, StoryObj } from '@storybook/react';
import { FactoringNewOperationScreen } from './FactoringNewOperationScreen';

const meta: Meta<typeof FactoringNewOperationScreen> = {
  title: 'Factoring/Playground/FactoringNewOperationScreen',
  component: FactoringNewOperationScreen,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component:
          'Playground version of the new operation screen. Features invoice table with checkboxes, search, avatar badges, progress bars, and bulk selection actions.',
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof FactoringNewOperationScreen>;

export const Default: Story = {
  args: { onBack: () => console.log('Back') },
};
