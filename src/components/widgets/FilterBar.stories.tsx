import type { Meta, StoryObj } from '@storybook/react';
import { FilterBar } from './FilterBar';

const meta: Meta<typeof FilterBar> = {
  title: 'Widgets/FilterBar',
  component: FilterBar,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: 'Search + filter bar with SearchBar, status select, filter/download icon buttons, and active filter chips. Responsive layout.',
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof FilterBar>;

export const Default: Story = {
  render: () => <FilterBar />,
};
