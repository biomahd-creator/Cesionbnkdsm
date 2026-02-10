import type { Meta, StoryObj } from '@storybook/react';
import { MultiColumnForm } from './MultiColumnForm';

const meta: Meta<typeof MultiColumnForm> = {
  title: 'Advanced/MultiColumnForm',
  component: MultiColumnForm,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component:
          'Responsive multi-column form with sections (Personal, Address, Company, Additional). Auto-collapses to single column on mobile. Uses Card layout with Separator between sections.',
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof MultiColumnForm>;

export const Default: Story = {
  render: () => <MultiColumnForm onSubmit={(data) => console.log('Form data:', data)} />,
};
