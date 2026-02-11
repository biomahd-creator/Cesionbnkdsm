import type { Meta, StoryObj } from '@storybook/react';
import { FactoringKpiCardGroup } from './FactoringKpiCardGroup';
import { useState } from 'react';
import { FileText, CheckCircle, Clock, XCircle, DollarSign } from 'lucide-react';

const meta: Meta<typeof FactoringKpiCardGroup> = {
  title: 'Patterns/FactoringKpiCardGroup',
  component: FactoringKpiCardGroup,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component:
          'Grid layout of FactoringKpiCard instances with active state management. variantMap remaps legacy variants (orange→yellow, lime→green, purple→yellow). Responsive: 1col mobile, 2col tablet, 4col desktop.',
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof FactoringKpiCardGroup>;

const kpiCards = [
  { id: 'total', label: 'Total Facturas', description: 'Facturas cargadas', value: '$234.5M', count: 48, variant: 'blue' as const, icon: <FileText /> },
  { id: 'approved', label: 'Aprobadas', description: 'Listas para desembolso', value: '$156.2M', count: 32, variant: 'green' as const, icon: <CheckCircle /> },
  { id: 'pending', label: 'Pendientes', description: 'En proceso de revision', value: '$45.3M', count: 8, variant: 'orange' as const, icon: <Clock /> },
  { id: 'discarded', label: 'Descartadas', description: 'Excluidas del proceso', value: '$8.9M', count: 5, variant: 'default' as const, icon: <XCircle /> },
];

export const Default: Story = {
  args: { cards: kpiCards },
};

export const WithActiveCard: Story = {
  name: 'With Active Card',
  args: { cards: kpiCards, activeId: 'approved' },
};

export const Interactive: Story = {
  name: 'Interactive (Clickable)',
  render: () => {
    const [active, setActive] = useState('total');
    const interactiveCards = kpiCards.map((c) => ({
      ...c,
      onAction: () => setActive(c.id),
    }));
    return (
      <div className="space-y-4">
        <FactoringKpiCardGroup cards={interactiveCards} activeId={active} onCardClick={setActive} />
        <p className="text-sm text-muted-foreground text-center">
          Filtro activo: <strong>{kpiCards.find((c) => c.id === active)?.label}</strong>
        </p>
      </div>
    );
  },
};