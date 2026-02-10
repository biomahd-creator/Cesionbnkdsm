import type { Meta, StoryObj } from '@storybook/react';
import { PayorCard, type PayorData } from './PayorCard';

const meta: Meta<typeof PayorCard> = {
  title: 'Factoring/PayorCard',
  component: PayorCard,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component:
          'Payor (pagador) card showing company info, NIT, sector, credit limit usage (progress bar), risk score, and payment behavior indicator.',
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof PayorCard>;

const exito: PayorData = {
  id: '1', name: 'Grupo Exito S.A.', nit: '900.123.456-7', sector: 'Retail',
  creditLimit: 500000000, usedCredit: 328000000, riskScore: 22, paymentBehavior: 'excellent',
};
const ecopetrol: PayorData = {
  id: '2', name: 'Ecopetrol S.A.', nit: '860.002.789-0', sector: 'Energia',
  creditLimit: 1000000000, usedCredit: 850000000, riskScore: 45, paymentBehavior: 'good',
};
const startup: PayorData = {
  id: '3', name: 'TechCo S.A.S.', nit: '901.456.789-0', sector: 'Tecnologia',
  creditLimit: 50000000, usedCredit: 48000000, riskScore: 78, paymentBehavior: 'poor',
};

export const Excellent: Story = {
  args: { payor: exito, onViewDetails: () => console.log('View Exito') },
};

export const Good: Story = {
  args: { payor: ecopetrol },
};

export const Poor: Story = {
  args: { payor: startup },
};

export const Grid: Story = {
  name: 'Payor Grid',
  render: () => (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      <PayorCard payor={exito} />
      <PayorCard payor={ecopetrol} />
      <PayorCard payor={startup} />
    </div>
  ),
};
