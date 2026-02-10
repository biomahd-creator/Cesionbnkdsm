import type { Meta, StoryObj } from '@storybook/react';
import { ApprovalTimeline } from './ApprovalTimeline';

const meta: Meta<typeof ApprovalTimeline> = {
  title: 'Patterns/ApprovalTimeline',
  component: ApprovalTimeline,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component:
          'Approval workflow timeline showing the sequence of approval steps with status indicators, assignees, and timestamps.',
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof ApprovalTimeline>;

export const Default: Story = {
  render: () => <ApprovalTimeline />,
};
