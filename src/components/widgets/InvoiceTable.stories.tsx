import type { Meta, StoryObj } from '@storybook/react';
import { InvoiceTable } from './InvoiceTable';

const meta: Meta<typeof InvoiceTable> = {
  title: 'Widgets/InvoiceTable',
  component: InvoiceTable,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: 'Simple invoice table with status badges, amount formatting, and row action dropdown (Ver, Editar, Eliminar). Uses mock data internally.',
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof InvoiceTable>;

export const Default: Story = {
  render: () => <InvoiceTable />,
};
