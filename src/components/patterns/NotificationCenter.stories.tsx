import type { Meta, StoryObj } from '@storybook/react';
import { NotificationCenter } from './NotificationCenter';

const meta: Meta<typeof NotificationCenter> = {
  title: 'Patterns/NotificationCenter',
  component: NotificationCenter,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component:
          'Notification center popover with tabs (Todas/Aprobaciones/Alertas/Sistema), read/unread states, mark-as-read, and delete. Bell icon with unread count badge.',
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof NotificationCenter>;

export const Default: Story = {
  render: () => <NotificationCenter />,
};
