import type { Meta, StoryObj } from '@storybook/react';
import { PlaygroundIndex } from './PlaygroundIndex';

const meta: Meta<typeof PlaygroundIndex> = {
  title: 'Factoring/Playground/PlaygroundIndex',
  component: PlaygroundIndex,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component:
          'Playground index page for testing factoring screens. Provides navigation to experimental views like FactoringNewOperationScreen.',
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof PlaygroundIndex>;

export const Default: Story = {
  args: { onBack: () => console.log('Back') },
};
