import type { Meta, StoryObj } from '@storybook/react';
import { Toggle } from './toggle';
import { Bold, Italic, Underline } from 'lucide-react';

const meta: Meta<typeof Toggle> = {
  title: 'UI/Toggle',
  component: Toggle,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Toggle>;

export const Default: Story = {
  render: () => (
    <Toggle aria-label="Toggle italic">
      <Bold className="h-4 w-4" />
    </Toggle>
  ),
};

export const WithText: Story = {
  render: () => (
    <Toggle variant="outline" aria-label="Toggle italic">
      <Italic className="mr-2 h-4 w-4" />
      Italic
    </Toggle>
  ),
};
