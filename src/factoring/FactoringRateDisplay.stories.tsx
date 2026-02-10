import type { Meta, StoryObj } from '@storybook/react';
import { FactoringRateDisplay } from './FactoringRateDisplay';
import { TooltipProvider } from '../components/ui/tooltip';

const meta: Meta<typeof FactoringRateDisplay> = {
  title: 'Factoring/FactoringRateDisplay',
  component: FactoringRateDisplay,
  tags: ['autodocs'],
  decorators: [(Story) => <TooltipProvider><Story /></TooltipProvider>],
  parameters: {
    docs: {
      description: {
        component:
          'Rate display panel showing total monthly rate (MV), effective annual rate (EA), individual rate components breakdown, and trend indicator.',
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof FactoringRateDisplay>;

export const Default: Story = {
  args: {
    totalRate: 1.85,
    annualRate: 24.58,
    trend: 'down',
    components: [
      { label: 'Tasa base', value: 1.2, description: 'Tasa base del mercado IBR + spread' },
      { label: 'Prima de riesgo', value: 0.35, description: 'Basado en scoring del pagador' },
      { label: 'Comision operativa', value: 0.15, description: 'Costos operativos de la cesion' },
      { label: 'Seguro', value: 0.15, description: 'Prima del seguro de credito' },
    ],
  },
};

export const TrendUp: Story = {
  name: 'Trend Up',
  args: {
    totalRate: 2.10,
    annualRate: 28.32,
    trend: 'up',
    components: [
      { label: 'Tasa base', value: 1.4 },
      { label: 'Prima de riesgo', value: 0.5 },
      { label: 'Comision', value: 0.2 },
    ],
  },
};

export const Stable: Story = {
  args: {
    totalRate: 1.50,
    annualRate: 19.56,
    trend: 'stable',
    components: [
      { label: 'Tasa base', value: 1.0 },
      { label: 'Prima de riesgo', value: 0.3 },
      { label: 'Comision', value: 0.2 },
    ],
    className: 'max-w-sm',
  },
};
