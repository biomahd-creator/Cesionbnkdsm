import type { Meta, StoryObj } from '@storybook/react';
import { SpacingPreview } from './SpacingPreview';

const meta: Meta<typeof SpacingPreview> = {
  title: 'Widgets/DSM/SpacingPreview',
  component: SpacingPreview,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: 'Spacing scale visualization showing token name, pixel value, and Tailwind multiplier with visual bar.',
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof SpacingPreview>;

export const Default: Story = {
  args: { name: 'space-4', value: '16px', multiplier: '4x' },
};

export const SpacingScale: Story = {
  name: 'Full Spacing Scale',
  render: () => (
    <div className="space-y-3 max-w-md">
      <SpacingPreview name="space-1" value="4px" multiplier="1x" />
      <SpacingPreview name="space-2" value="8px" multiplier="2x" />
      <SpacingPreview name="space-3" value="12px" multiplier="3x" />
      <SpacingPreview name="space-4" value="16px" multiplier="4x" />
      <SpacingPreview name="space-6" value="24px" multiplier="6x" />
      <SpacingPreview name="space-8" value="32px" multiplier="8x" />
      <SpacingPreview name="space-12" value="48px" multiplier="12x" />
      <SpacingPreview name="space-16" value="64px" multiplier="16x" />
    </div>
  ),
};
