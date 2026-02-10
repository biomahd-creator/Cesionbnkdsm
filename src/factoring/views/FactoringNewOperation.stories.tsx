import type { Meta, StoryObj } from '@storybook/react';
import { FactoringNewOperation } from './FactoringNewOperation';

const meta: Meta<typeof FactoringNewOperation> = {
  title: 'Factoring/Views/FactoringNewOperation',
  component: FactoringNewOperation,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component:
          'New factoring operation page with upload, search, filter bar, invoice table, tab navigation, and action toolbar. Full page view.',
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof FactoringNewOperation>;

export const Default: Story = {
  args: {
    onBack: () => console.log('Back'),
    onStartOperation: () => console.log('Start operation'),
  },
  decorators: [(Story) => <div className="bg-background min-h-screen"><Story /></div>],
};
