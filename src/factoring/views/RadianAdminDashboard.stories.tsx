import type { Meta, StoryObj } from '@storybook/react';
import { RadianAdminDashboard } from './RadianAdminDashboard';

const meta: Meta<typeof RadianAdminDashboard> = {
  title: 'Factoring/Views/RadianAdminDashboard',
  component: RadianAdminDashboard,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component:
          'Radian admin dashboard with back navigation, administrative data tables, search, and management actions.',
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof RadianAdminDashboard>;

export const Default: Story = {
  args: { onBack: () => console.log('Back') },
  decorators: [(Story) => <div className="p-6 bg-background min-h-screen"><Story /></div>],
};
