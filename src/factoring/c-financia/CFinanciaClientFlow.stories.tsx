import type { Meta, StoryObj } from '@storybook/react';
import { CFinanciaClientFlow } from './CFinanciaClientFlow';

const meta: Meta<typeof CFinanciaClientFlow> = {
  title: 'Factoring/C-Financia/CFinanciaClientFlow',
  component: CFinanciaClientFlow,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component:
          'Client-facing C-Financia flow with navbar, KPI cards, invoice table with tabs (elegibles/pendientes/no-elegibles/descartadas), invoice loading modal, and FactoringKpiCardGroup integration.',
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof CFinanciaClientFlow>;

export const Default: Story = {
  render: () => <CFinanciaClientFlow />,
};
