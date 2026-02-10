import type { Meta, StoryObj } from '@storybook/react';
import { QuickActionToolbar } from './QuickActionToolbar';

const meta: Meta<typeof QuickActionToolbar> = {
  title: 'Patterns/QuickActionToolbar',
  component: QuickActionToolbar,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component:
          'Menubar + command palette pattern. Provides quick access to common actions (New Invoice, Upload, Export, Reports) + keyboard shortcut Cmd+K for search. Uses Menubar + CommandDialog.',
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof QuickActionToolbar>;

export const Default: Story = {
  render: () => <QuickActionToolbar />,
};
