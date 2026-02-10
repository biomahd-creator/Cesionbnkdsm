import type { Meta, StoryObj } from '@storybook/react';
import { ClientDashboard } from './ClientDashboard';

const meta: Meta<typeof ClientDashboard> = {
  title: 'Factoring/Views/ClientDashboard',
  component: ClientDashboard,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component:
          'Client-facing dashboard with welcome banner (available cupo), active operations stats, recent activity, and "New Request" CTA.',
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof ClientDashboard>;

export const Default: Story = {
  args: { onNewRequest: () => console.log('New request') },
  decorators: [(Story) => <div className="p-6 bg-background min-h-screen"><Story /></div>],
};
