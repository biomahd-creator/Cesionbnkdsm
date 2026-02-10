import type { Meta, StoryObj } from '@storybook/react';
import { CFinanciaFlow } from './CFinanciaFlow';

const meta: Meta<typeof CFinanciaFlow> = {
  title: 'Factoring/C-Financia/CFinanciaFlow',
  component: CFinanciaFlow,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component:
          'Complete C-Financia application flow: Login -> Module Selection -> Workspace. Orchestrates LoginScreen, ModulosScreen, FactoringWorkspace, and RadianAdminDashboard.',
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof CFinanciaFlow>;

export const Default: Story = {
  args: { onExit: () => console.log('Exit flow') },
};
