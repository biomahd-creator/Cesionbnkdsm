import type { Meta, StoryObj } from '@storybook/react';
import { RadianDashboard } from './RadianDashboard';

const meta: Meta<typeof RadianDashboard> = {
  title: 'Factoring/Views/RadianDashboard',
  component: RadianDashboard,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component:
          'Radian events dashboard with tabs (Titulos Valor/Mandatos/Eventos), data tables with search and filters, and action buttons.',
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof RadianDashboard>;

export const Default: Story = {
  render: () => <div className="p-6 bg-background min-h-screen"><RadianDashboard /></div>,
};
