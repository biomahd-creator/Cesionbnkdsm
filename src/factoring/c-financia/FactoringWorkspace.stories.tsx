import type { Meta, StoryObj } from '@storybook/react';
import { FactoringWorkspace } from './FactoringWorkspace';

const meta: Meta<typeof FactoringWorkspace> = {
  title: 'Factoring/C-Financia/FactoringWorkspace',
  component: FactoringWorkspace,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component:
          'Main factoring workspace view with CFinanciaNavbar, breadcrumbs, OperationsList, and navigation to FactoringNewOperation. Full-page layout.',
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof FactoringWorkspace>;

export const Default: Story = {
  args: { onLogout: () => console.log('Logout') },
};
