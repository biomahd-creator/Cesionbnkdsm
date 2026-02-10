import type { Meta, StoryObj } from '@storybook/react';
import { ActivityFeed, type ActivityItem } from './ActivityFeed';

const meta: Meta<typeof ActivityFeed> = {
  title: 'Patterns/ActivityFeed',
  component: ActivityFeed,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component:
          'Activity feed with avatar, action description, and timestamp. Uses ScrollArea for long lists. Timeline connector between items.',
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof ActivityFeed>;

const feedItems: ActivityItem[] = [
  { id: '1', user: { name: 'Maria Gonzalez', initials: 'MG' }, action: 'aprobo la operacion', target: '#OP-2024-0847', timestamp: 'Hace 5 min', description: 'Aprobacion final del comite de credito.' },
  { id: '2', user: { name: 'Carlos Ramirez', initials: 'CR' }, action: 'agrego un comentario en', target: 'FAC-003', timestamp: 'Hace 15 min', description: 'Se requiere verificacion adicional del pagador.' },
  { id: '3', user: { name: 'Ana Torres', initials: 'AT' }, action: 'cargo 12 facturas en', target: '#OP-2024-0847', timestamp: 'Hace 1 hora' },
  { id: '4', user: { name: 'Juan Perez', initials: 'JP' }, action: 'rechazo la factura', target: 'FAC-004', timestamp: 'Hace 2 horas', description: 'Factura vencida — fuera del plazo maximo.' },
  { id: '5', user: { name: 'Sistema', initials: 'SY' }, action: 'actualizo las tasas de descuento', timestamp: 'Hace 3 horas' },
  { id: '6', user: { name: 'Laura Martinez', initials: 'LM' }, action: 'creo la operacion', target: '#OP-2024-0847', timestamp: 'Ayer' },
];

export const Default: Story = {
  args: { items: feedItems, className: 'max-w-md' },
};

export const FewItems: Story = {
  name: 'Few Items',
  args: { items: feedItems.slice(0, 3), className: 'max-w-md' },
};
