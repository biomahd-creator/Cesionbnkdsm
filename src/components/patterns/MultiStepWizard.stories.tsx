import type { Meta, StoryObj } from '@storybook/react';
import { MultiStepWizard } from './MultiStepWizard';

const meta: Meta<typeof MultiStepWizard> = {
  title: 'Patterns/MultiStepWizard',
  component: MultiStepWizard,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: 'Generic multi-step wizard with step indicator, form sections, validation, and navigation (previous/next/submit).',
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof MultiStepWizard>;

export const Default: Story = {
  render: () => <MultiStepWizard />,
};
