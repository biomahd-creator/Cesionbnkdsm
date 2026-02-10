import type { Meta, StoryObj } from '@storybook/react';
import { CollectionTimeline, type TimelineEvent } from './CollectionTimeline';

const meta: Meta<typeof CollectionTimeline> = {
  title: 'Factoring/CollectionTimeline',
  component: CollectionTimeline,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component:
          'Collection/cobro timeline with event types (email, call, payment, dispute, system), status indicators, and user attribution. Uses ScrollArea.',
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof CollectionTimeline>;

const events: TimelineEvent[] = [
  { id: '1', type: 'payment', title: 'Pago recibido', description: 'Pago parcial de $120,000,000 COP', date: '08 Feb 2026, 14:30', user: 'Sistema', status: 'completed' },
  { id: '2', type: 'call', title: 'Llamada de seguimiento', description: 'Se contacto al pagador para confirmar fecha de pago del saldo.', date: '07 Feb 2026, 10:00', user: 'Carlos Ramirez', status: 'completed' },
  { id: '3', type: 'email', title: 'Recordatorio enviado', description: 'Correo de recordatorio de pago enviado al pagador.', date: '05 Feb 2026, 09:00', user: 'Sistema', status: 'completed' },
  { id: '4', type: 'dispute', title: 'Disputa recibida', description: 'El pagador reporta discrepancia en factura FAC-003.', date: '03 Feb 2026, 16:45', user: 'Ana Torres', status: 'pending' },
  { id: '5', type: 'system', title: 'Alerta de vencimiento', description: 'La factura FAC-002 vence en 5 dias.', date: '01 Feb 2026, 08:00', user: 'Sistema', status: 'pending' },
];

export const Default: Story = {
  args: { events, className: 'max-w-lg' },
};

export const FewEvents: Story = {
  name: 'Few Events',
  args: { events: events.slice(0, 2), className: 'max-w-lg' },
};
