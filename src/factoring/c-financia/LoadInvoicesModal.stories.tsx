import type { Meta, StoryObj } from '@storybook/react';
import { LoadInvoicesModal } from './LoadInvoicesModal';
import { Button } from '../../components/ui/button';

const meta: Meta<typeof LoadInvoicesModal> = {
  title: 'Factoring/C-Financia/LoadInvoicesModal',
  component: LoadInvoicesModal,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component:
          'Modal dialog for loading invoices into the factoring system. Supports file upload (CSV/Excel) and CUFE code paste via tabs.',
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof LoadInvoicesModal>;

export const Default: Story = {
  render: () => (
    <LoadInvoicesModal>
      <Button>Cargar Facturas</Button>
    </LoadInvoicesModal>
  ),
};
