import type { Meta, StoryObj } from '@storybook/react';
import { HelpCenter } from './HelpCenter';
import { HelpProvider } from './HelpProvider';

const meta: Meta<typeof HelpCenter> = {
  title: 'Help/HelpCenter',
  component: HelpCenter,
  tags: ['autodocs'],
  decorators: [
    (Story) => (
      <HelpProvider>
        <Story />
      </HelpProvider>
    ),
  ],
  parameters: {
    docs: {
      description: {
        component:
          'Full help center in a side Sheet with tabs: Getting Started, FAQ, Tutorials, and Contact. Includes search, accordion FAQ, and resource cards. Requires HelpProvider context.',
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof HelpCenter>;

export const AsButton: Story = {
  name: 'Header Button (Default)',
  args: { variant: 'header' },
};

export const AsSidebarLink: Story = {
  name: 'Sidebar Link',
  args: { variant: 'sidebar' },
};
