import type { Meta, StoryObj } from '@storybook/react';
import { VirtualizedList } from './VirtualizedList';
import { Badge } from '../ui/badge';

const meta: Meta<typeof VirtualizedList> = {
  title: 'Advanced/VirtualizedList',
  component: VirtualizedList,
  tags: ['autodocs'],
  argTypes: {
    height: { control: { type: 'range', min: 200, max: 600, step: 50 } },
    itemHeight: { control: { type: 'range', min: 30, max: 100, step: 5 } },
  },
  parameters: {
    docs: {
      description: {
        component:
          'Virtualized list that only renders visible items + buffer. Handles large datasets (10K+ items) without performance issues. Uses absolute positioning with translateY.',
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof VirtualizedList>;

interface InvoiceItem {
  id: string;
  payor: string;
  amount: number;
  status: string;
}

const generateItems = (count: number): InvoiceItem[] =>
  Array.from({ length: count }, (_, i) => ({
    id: `FAC-${String(i + 1).padStart(5, '0')}`,
    payor: ['Grupo Exito', 'Ecopetrol', 'Bancolombia', 'Nutresa', 'ISA'][i % 5],
    amount: Math.floor(Math.random() * 90000000) + 10000000,
    status: ['Aprobada', 'Pendiente', 'En Proceso', 'Rechazada'][i % 4],
  }));

const statusVariants: Record<string, any> = {
  Aprobada: 'success-soft-outline',
  Pendiente: 'warning-soft-outline',
  'En Proceso': 'info-soft-outline',
  Rechazada: 'destructive-soft-outline',
};

export const Default: Story = {
  render: () => {
    const items = generateItems(1000);
    return (
      <div className="border rounded-lg max-w-lg">
        <div className="p-3 border-b bg-muted/30">
          <p className="text-sm text-muted-foreground">{items.length} items (virtualized)</p>
        </div>
        <VirtualizedList
          items={items}
          height={400}
          itemHeight={50}
          renderItem={(item, index, style) => (
            <div
              style={style}
              className={`flex items-center justify-between px-4 border-b ${index % 2 === 0 ? 'bg-background' : 'bg-muted/20'}`}
            >
              <div className="flex items-center gap-3">
                <span className="text-sm font-medium w-24">{item.id}</span>
                <span className="text-sm text-muted-foreground">{item.payor}</span>
              </div>
              <div className="flex items-center gap-3">
                <Badge variant={statusVariants[item.status]}>{item.status}</Badge>
                <span className="text-sm w-28 text-right">${item.amount.toLocaleString('es-CO')}</span>
              </div>
            </div>
          )}
        />
      </div>
    );
  },
};

export const TenThousandItems: Story = {
  name: '10,000 Items',
  render: () => {
    const items = generateItems(10000);
    return (
      <div className="border rounded-lg max-w-md">
        <div className="p-3 border-b bg-muted/30">
          <p className="text-sm font-medium">{items.length.toLocaleString()} facturas</p>
          <p className="text-xs text-muted-foreground">Solo se renderizan las filas visibles</p>
        </div>
        <VirtualizedList
          items={items}
          height={350}
          itemHeight={40}
          renderItem={(item, index, style) => (
            <div style={style} className="flex items-center justify-between px-4 border-b text-sm">
              <span className="font-medium">{item.id}</span>
              <span className="text-muted-foreground">{item.payor}</span>
              <span>${(item.amount / 1000000).toFixed(1)}M</span>
            </div>
          )}
        />
      </div>
    );
  },
};
