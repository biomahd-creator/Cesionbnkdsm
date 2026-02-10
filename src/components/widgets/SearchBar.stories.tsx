import type { Meta, StoryObj } from '@storybook/react';
import { SearchBar } from './SearchBar';

const meta: Meta<typeof SearchBar> = {
  title: 'Widgets/SearchBar',
  component: SearchBar,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: 'Search input with icon and debounced onChange. Used as building block in FilterBar and other patterns.',
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof SearchBar>;

export const Default: Story = {
  render: () => (
    <div className="max-w-md">
      <SearchBar placeholder="Buscar facturas..." />
    </div>
  ),
};
