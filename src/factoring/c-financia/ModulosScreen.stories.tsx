import type { Meta, StoryObj } from '@storybook/react';
import { ModulosScreen } from './ModulosScreen';

const meta: Meta<typeof ModulosScreen> = {
  title: 'Factoring/C-Financia/ModulosScreen',
  component: ModulosScreen,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component:
          'Module selection screen for C-Financia. Displays available modules (Factoring, Radian, Vinculaciones) as selectable cards with icons.',
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof ModulosScreen>;

export const Default: Story = {
  args: {
    onSelectModule: (mod: string) => console.log('Selected:', mod),
    onLogout: () => console.log('Logout'),
  },
};
