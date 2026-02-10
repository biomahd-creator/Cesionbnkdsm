import type { Meta, StoryObj } from '@storybook/react';
import { EditableTable } from './EditableTable';

const meta: Meta<typeof EditableTable> = {
  title: 'Patterns/EditableTable',
  component: EditableTable,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: 'Table with inline-editable cells. Supports text, number, and select cell types. Add/remove rows dynamically.',
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof EditableTable>;

export const Default: Story = {
  render: () => <EditableTable />,
};
