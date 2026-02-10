import type { Meta, StoryObj } from '@storybook/react';
import { OperationsList } from './OperationsList';

const meta: Meta<typeof OperationsList> = {
  title: 'Factoring/Components/OperationsList',
  component: OperationsList,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: 'Operations list/table with status filtering, search, and action buttons. Shows operation details inline.',
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof OperationsList>;

export const Default: Story = {
  render: () => <OperationsList />,
};
