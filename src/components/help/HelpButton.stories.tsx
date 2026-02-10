import type { Meta, StoryObj } from '@storybook/react';
import { HelpButton } from './HelpButton';
import { HelpProvider } from './HelpProvider';

const meta: Meta<typeof HelpButton> = {
  title: 'Help/HelpButton',
  component: HelpButton,
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
        component: 'Floating help button fixed at bottom-right (like Intercom/Zendesk). Toggles HelpCenter open/close. Requires HelpProvider context.',
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof HelpButton>;

export const Default: Story = {
  render: () => (
    <div className="h-[200px] relative">
      <p className="text-sm text-muted-foreground">El boton flotante aparece abajo a la derecha.</p>
      <HelpButton />
    </div>
  ),
};
