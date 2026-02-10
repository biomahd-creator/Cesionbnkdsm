import type { Meta, StoryObj } from '@storybook/react';
import { DataTableAdvanced } from './DataTableAdvanced';

const meta: Meta<typeof DataTableAdvanced> = {
  title: 'Patterns/DataTableAdvanced',
  component: DataTableAdvanced,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: 'Advanced data table pattern with inline editing, bulk actions, column reordering, and export capabilities.',
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof DataTableAdvanced>;

export const Default: Story = {
  render: () => <DataTableAdvanced />,
};
