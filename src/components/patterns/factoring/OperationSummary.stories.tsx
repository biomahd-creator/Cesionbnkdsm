import type { Meta, StoryObj } from '@storybook/react';
import { OperationSummary } from './OperationSummary';

const meta: Meta<typeof OperationSummary> = {
  title: 'Patterns/Factoring/OperationSummary',
  component: OperationSummary,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component:
          'Operation summary page showing processed documents with status indicators (success/error), operation details (client, amount, rate), and back navigation.',
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof OperationSummary>;

export const Default: Story = {
  args: {
    onBack: () => console.log('Back'),
    operationData: {
      operationId: 'OP-2024-0847',
      clientName: 'Grupo Exito S.A.',
      clientRut: '900.123.456-7',
      invoiceCount: 12,
      totalAmount: 234500000,
      netAdvance: 228700000,
      rate: 1.2,
    },
  },
};

export const WithoutData: Story = {
  name: 'Default Mock Data',
  args: {
    onBack: () => console.log('Back'),
  },
};
