import type { Meta, StoryObj } from '@storybook/react';
import { OperationDetailCard } from './OperationDetailCard';

const meta: Meta<typeof OperationDetailCard> = {
  title: 'Factoring/Components/OperationDetailCard',
  component: OperationDetailCard,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component:
          'Operation detail card with pie chart breakdown (reserve vs advance %), financial summary (invoice total, credit amount, financial cost, net advance), and rate/term info.',
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof OperationDetailCard>;

export const Default: Story = {
  args: {
    totalFacturas: 10000000,
    montoCredito: 9000000,
    costoFinanciero: 500000,
    totalAnticipo: 8500000,
    reservaPercentage: 10,
    anticipoPercentage: 90,
    tasaMensual: 2.5,
    plazoDias: 120,
    tasaPlazo: 60,
  },
};

export const LargeOperation: Story = {
  name: 'Large Operation',
  args: {
    totalFacturas: 500000000,
    montoCredito: 450000000,
    costoFinanciero: 22500000,
    totalAnticipo: 427500000,
    reservaPercentage: 10,
    anticipoPercentage: 90,
    tasaMensual: 1.5,
    plazoDias: 90,
    tasaPlazo: 45,
  },
};
