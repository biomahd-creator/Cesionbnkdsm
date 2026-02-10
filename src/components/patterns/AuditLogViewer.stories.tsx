import type { Meta, StoryObj } from '@storybook/react';
import { AuditLogViewer } from './AuditLogViewer';

const meta: Meta<typeof AuditLogViewer> = {
  title: 'Patterns/AuditLogViewer',
  component: AuditLogViewer,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component:
          'Audit log viewer with filterable, searchable log entries. Shows user, action, timestamp, and details. Supports category filters and date range.',
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof AuditLogViewer>;

export const Default: Story = {
  render: () => <AuditLogViewer />,
};
