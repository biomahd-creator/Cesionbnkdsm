import type { Meta, StoryObj } from '@storybook/react';
import { AdminPortal } from './AdminPortal';

const meta: Meta<typeof AdminPortal> = {
  title: 'Patterns/AdminPortal',
  component: AdminPortal,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: 'Admin portal layout with navigation sidebar, stats overview, and management panels.',
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof AdminPortal>;

export const Default: Story = {
  render: () => <AdminPortal />,
};
