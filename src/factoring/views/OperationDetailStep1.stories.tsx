import type { Meta, StoryObj } from '@storybook/react';
import { OperationDetailStep1 } from './OperationDetailStep1';

const meta: Meta<typeof OperationDetailStep1> = {
  title: 'Factoring/Views/OperationDetailStep1',
  component: OperationDetailStep1,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component:
          'Operation detail step 1: invoice selection with toggle buttons, search, checkbox table, upload, and "Next Step" navigation.',
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof OperationDetailStep1>;

export const Default: Story = {
  args: {
    onBack: () => console.log('Back'),
    onNext: () => console.log('Next'),
  },
  decorators: [(Story) => <div className="p-6 bg-background min-h-screen"><Story /></div>],
};
