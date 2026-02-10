import type { Meta, StoryObj } from '@storybook/react';
import { OnboardingWizard } from './OnboardingWizard';

const meta: Meta<typeof OnboardingWizard> = {
  title: 'Patterns/OnboardingWizard',
  component: OnboardingWizard,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: 'Onboarding wizard with welcome screen, feature highlights, preference setup, and completion celebration.',
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof OnboardingWizard>;

export const Default: Story = {
  render: () => <OnboardingWizard />,
};
