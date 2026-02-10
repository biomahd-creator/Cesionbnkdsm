import type { Meta, StoryObj } from '@storybook/react';
import { ConditionalForm } from './ConditionalForm';

const meta: Meta<typeof ConditionalForm> = {
  title: 'Advanced/ConditionalForm',
  component: ConditionalForm,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component:
          'Smart form with conditional logic that shows/hides fields dynamically based on user answers. Sections appear progressively as the user fills in data (user type → business details → contact).',
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof ConditionalForm>;

export const Default: Story = {
  render: () => <ConditionalForm onSubmit={(data) => console.log('Form data:', data)} />,
};
