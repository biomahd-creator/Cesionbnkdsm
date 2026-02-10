import type { Meta, StoryObj } from '@storybook/react';
import { OperationDetailStep2 } from './OperationDetailStep2';

const meta: Meta<typeof OperationDetailStep2> = {
  title: 'Factoring/Views/OperationDetailStep2',
  component: OperationDetailStep2,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component:
          'Operation detail step 2: confirmation and financial summary. Shows selected invoices, excedente toggle, payor info, and "Finish" action with toast notification.',
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof OperationDetailStep2>;

export const Default: Story = {
  args: {
    onBack: () => console.log('Back'),
    onFinish: () => console.log('Finish'),
  },
  decorators: [(Story) => <div className="p-6 bg-background min-h-screen"><Story /></div>],
};
