import type { Meta, StoryObj } from '@storybook/react';
import { ContactForm } from './ContactForm';

const meta: Meta<typeof ContactForm> = {
  title: 'Widgets/ContactForm',
  component: ContactForm,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: 'Professional contact form with validation, service selection, and success/error states. Includes name, email, phone, company, service type, and message fields.',
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof ContactForm>;

export const Default: Story = {
  render: () => (
    <div className="max-w-lg">
      <ContactForm onSubmit={(data) => console.log('Submit:', data)} />
    </div>
  ),
};
