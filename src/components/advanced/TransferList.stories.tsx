import type { Meta, StoryObj } from '@storybook/react';
import { TransferList, type TransferItem } from './TransferList';

const meta: Meta<typeof TransferList> = {
  title: 'Advanced/TransferList',
  component: TransferList,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component:
          'Dual-list transfer component for moving items between "available" and "selected" lists. Supports select-all, select-checked, and individual toggle. Uses Card + ScrollArea + Checkbox.',
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof TransferList>;

const columnItems: TransferItem[] = [
  { id: 'cufe', label: 'CUFE' },
  { id: 'nit', label: 'NIT Pagador' },
  { id: 'razon', label: 'Razon Social' },
  { id: 'monto', label: 'Monto' },
  { id: 'fecha_emision', label: 'Fecha Emision' },
  { id: 'fecha_vencimiento', label: 'Fecha Vencimiento' },
  { id: 'estado', label: 'Estado' },
  { id: 'tasa', label: 'Tasa Descuento' },
  { id: 'descuento', label: 'Valor Descuento' },
  { id: 'neto', label: 'Valor Neto' },
];

const userItems: TransferItem[] = [
  { id: 'u1', label: 'Maria Gonzalez' },
  { id: 'u2', label: 'Carlos Ramirez' },
  { id: 'u3', label: 'Ana Torres' },
  { id: 'u4', label: 'Juan Perez' },
  { id: 'u5', label: 'Laura Martinez' },
  { id: 'u6', label: 'Pedro Silva', disabled: true },
  { id: 'u7', label: 'Sofia Herrera' },
];

export const Default: Story = {
  args: {
    items: columnItems,
    leftTitle: 'Disponibles',
    rightTitle: 'Seleccionados',
    initialRightIds: ['cufe', 'nit', 'monto', 'estado'],
    onChange: (ids) => console.log('Selected:', ids),
  },
};

export const EmptyRight: Story = {
  name: 'Empty Selection',
  args: {
    items: columnItems,
    leftTitle: 'Columnas disponibles',
    rightTitle: 'Columnas visibles',
    initialRightIds: [],
  },
};

export const WithDisabledItems: Story = {
  name: 'With Disabled Items',
  args: {
    items: userItems,
    leftTitle: 'Usuarios disponibles',
    rightTitle: 'Asignados',
    initialRightIds: ['u1', 'u2'],
  },
};

export const FactoringColumnSelector: Story = {
  name: 'Real World: Factoring Column Selector',
  render: () => (
    <div className="space-y-3">
      <div>
        <h3 className="text-base font-medium">Configurar columnas de exportacion</h3>
        <p className="text-sm text-muted-foreground">Selecciona las columnas que deseas incluir en el archivo exportado.</p>
      </div>
      <TransferList
        items={columnItems}
        leftTitle="Disponibles"
        rightTitle="Incluidas en exportacion"
        initialRightIds={['cufe', 'nit', 'razon', 'monto', 'estado']}
        onChange={(ids) => console.log('Export columns:', ids)}
      />
    </div>
  ),
};
