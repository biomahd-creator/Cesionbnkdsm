import type { Meta, StoryObj } from '@storybook/react';
import { LoginScreen } from './LoginScreen';

const meta: Meta<typeof LoginScreen> = {
  title: 'Factoring/C-Financia/LoginScreen',
  component: LoginScreen,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component:
          'C-Financia login screen with gradient background, CESIONBNK logo, and login form. Pre-filled with test credentials.',
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof LoginScreen>;

export const Default: Story = {
  args: { onLogin: () => console.log('Login') },
};
