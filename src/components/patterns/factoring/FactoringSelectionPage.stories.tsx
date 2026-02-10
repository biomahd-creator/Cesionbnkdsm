import type { Meta, StoryObj } from '@storybook/react';
import { FactoringSelectionPage } from './FactoringSelectionPage';

const meta: Meta<typeof FactoringSelectionPage> = {
  title: 'Patterns/Factoring/FactoringSelectionPage',
  component: FactoringSelectionPage,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component:
          'Full factoring selection page. Combines KPI card group, tabbed invoice tables (elegibles/pendientes/no-elegibles/descartadas), accordion for bulk actions, progress summary, and operation confirmation wizard with animated transitions.',
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof FactoringSelectionPage>;

export const Default: Story = {
  render: () => <FactoringSelectionPage />,
};
