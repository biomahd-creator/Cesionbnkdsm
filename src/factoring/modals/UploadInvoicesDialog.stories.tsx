import type { Meta, StoryObj } from '@storybook/react';
import { UploadInvoicesDialog } from './UploadInvoicesDialog';
import { useState } from 'react';
import { Button } from '../../components/ui/button';

const meta: Meta<typeof UploadInvoicesDialog> = {
  title: 'Factoring/Modals/UploadInvoicesDialog',
  component: UploadInvoicesDialog,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component:
          'Dialog for uploading invoices with tabs: file upload (drag & drop for CSV/Excel) and CUFE code paste. Controlled component with open/onOpenChange.',
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof UploadInvoicesDialog>;

export const Default: Story = {
  render: () => {
    const [open, setOpen] = useState(false);
    return (
      <>
        <Button onClick={() => setOpen(true)}>Abrir Upload Dialog</Button>
        <UploadInvoicesDialog open={open} onOpenChange={setOpen} />
      </>
    );
  },
};

export const OpenByDefault: Story = {
  name: 'Open by Default',
  args: { open: true, onOpenChange: () => {} },
};
