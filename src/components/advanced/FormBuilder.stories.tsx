import type { Meta, StoryObj } from '@storybook/react';
import { FormBuilder } from './FormBuilder';

const meta: Meta<typeof FormBuilder> = {
  title: 'Advanced/FormBuilder',
  component: FormBuilder,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component:
          'Dynamic form builder that generates form fields from a configuration object. Supports text, email, select, textarea, checkbox, and more.',
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof FormBuilder>;

export const Default: Story = {
  render: () => <FormBuilder onSubmit={(data) => console.log('Form:', data)} />,
};
