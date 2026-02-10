import type { Meta, StoryObj } from '@storybook/react';
import { ColorBox } from './ColorBox';

const meta: Meta<typeof ColorBox> = {
  title: 'Widgets/DSM/ColorBox',
  component: ColorBox,
  tags: ['autodocs'],
  argTypes: {
    size: { control: 'select', options: ['sm', 'md', 'lg', 'xl'] },
    color: { control: 'select', options: ['primary', 'secondary', 'success', 'warning', 'danger', 'info', '#84cc16', '#1C2D3A'] },
  },
  parameters: {
    docs: {
      description: {
        component: 'Color display box using Tailwind classes mapped from hex/token names. Used in brand guidelines and DSM documentation.',
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof ColorBox>;

export const Primary: Story = {
  args: { color: 'primary', size: 'lg' },
};

export const Secondary: Story = {
  args: { color: 'secondary', size: 'lg' },
};

export const AllSizes: Story = {
  name: 'Size Comparison',
  render: () => (
    <div className="flex items-end gap-3">
      <ColorBox color="primary" size="sm" />
      <ColorBox color="primary" size="md" />
      <ColorBox color="primary" size="lg" />
      <ColorBox color="primary" size="xl" />
    </div>
  ),
};

export const SemanticColors: Story = {
  name: 'Semantic Colors',
  render: () => (
    <div className="flex gap-3">
      <div className="text-center space-y-1">
        <ColorBox color="success" size="lg" />
        <p className="text-xs text-muted-foreground">Success</p>
      </div>
      <div className="text-center space-y-1">
        <ColorBox color="warning" size="lg" />
        <p className="text-xs text-muted-foreground">Warning</p>
      </div>
      <div className="text-center space-y-1">
        <ColorBox color="danger" size="lg" />
        <p className="text-xs text-muted-foreground">Danger</p>
      </div>
      <div className="text-center space-y-1">
        <ColorBox color="info" size="lg" />
        <p className="text-xs text-muted-foreground">Info</p>
      </div>
    </div>
  ),
};
