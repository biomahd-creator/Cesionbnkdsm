import type { Meta, StoryObj } from '@storybook/react';
import { SkipLink } from './SkipLink';

const meta: Meta<typeof SkipLink> = {
  title: 'Accessibility/SkipLink',
  component: SkipLink,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component:
          'Skip-to-main-content link that is visually hidden until focused (Tab key). Jumps to `#main-content`. Uses `sr-only` + `focus:not-sr-only` pattern. Required for WCAG 2.4.1.',
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof SkipLink>;

export const Default: Story = {
  render: () => (
    <div className="space-y-4">
      <p className="text-sm text-muted-foreground">
        Presiona <kbd className="px-1.5 py-0.5 border rounded text-xs font-mono">Tab</kbd> para ver el SkipLink.
      </p>
      <SkipLink />
      <div id="main-content" className="p-4 border rounded">
        <p className="text-sm">Contenido principal (target del skip link)</p>
      </div>
    </div>
  ),
};
