import type { Meta, StoryObj } from '@storybook/react';
import { NavigationBar } from './NavigationBar';

const meta: Meta<typeof NavigationBar> = {
  title: 'Widgets/NavigationBar',
  component: NavigationBar,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: 'Top navigation bar with CFinancia logo, navigation links (Dashboard, Factoring, Clientes, Reportes), and user dropdown menu.',
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof NavigationBar>;

export const Default: Story = {
  render: () => <NavigationBar />,
};
