import type { Meta, StoryObj } from '@storybook/react';
import { InvoiceGenerator } from './InvoiceGenerator';

const meta: Meta<typeof InvoiceGenerator> = {
  title: 'Advanced/InvoiceGenerator',
  component: InvoiceGenerator,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component:
          'Invoice generator with line items, totals calculation, and PDF-ready layout. Editable fields for company info, client, dates, and items.',
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof InvoiceGenerator>;

export const Default: Story = {
  render: () => <InvoiceGenerator />,
};
