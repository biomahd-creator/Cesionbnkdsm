import type { Meta, StoryObj } from '@storybook/react';
import { TreeTable, type TreeNode } from './TreeTable';

const meta: Meta<typeof TreeTable> = {
  title: 'Advanced/TreeTable',
  component: TreeTable,
  tags: ['autodocs'],
  argTypes: {
    showCheckboxes: { control: 'boolean' },
    enableLazyLoad: { control: 'boolean' },
    itemsPerPage: { control: { type: 'number', min: 3, max: 50 } },
  },
  parameters: {
    docs: {
      description: {
        component:
          'Hierarchical tree table with expandable rows (Client → Project → Invoice). Supports checkboxes, lazy loading, pagination per node, and row actions. Uses MasterDataGrid wrapper.',
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof TreeTable>;

const treeData: TreeNode[] = [
  {
    id: 'c1',
    name: 'Grupo Exito S.A.',
    type: 'client',
    amount: 234500000,
    children: [
      {
        id: 'p1',
        name: 'Operacion OP-2024-0847',
        type: 'project',
        amount: 134500000,
        status: 'approved',
        children: [
          { id: 'i1', name: 'FAC-001', type: 'invoice', amount: 45200000, status: 'paid', date: '2024-03-15' },
          { id: 'i2', name: 'FAC-002', type: 'invoice', amount: 23100000, status: 'approved', date: '2024-03-22' },
          { id: 'i3', name: 'FAC-003', type: 'invoice', amount: 67800000, status: 'pending', date: '2024-04-01' },
        ],
      },
      {
        id: 'p2',
        name: 'Operacion OP-2024-0912',
        type: 'project',
        amount: 100000000,
        status: 'pending',
        children: [
          { id: 'i4', name: 'FAC-004', type: 'invoice', amount: 50000000, status: 'pending', date: '2024-04-10' },
          { id: 'i5', name: 'FAC-005', type: 'invoice', amount: 50000000, status: 'pending', date: '2024-04-15' },
        ],
      },
    ],
  },
  {
    id: 'c2',
    name: 'Ecopetrol S.A.',
    type: 'client',
    amount: 89000000,
    children: [
      {
        id: 'p3',
        name: 'Operacion OP-2024-0850',
        type: 'project',
        amount: 89000000,
        status: 'approved',
        children: [
          { id: 'i6', name: 'FAC-006', type: 'invoice', amount: 34000000, status: 'paid', date: '2024-03-10' },
          { id: 'i7', name: 'FAC-007', type: 'invoice', amount: 55000000, status: 'approved', date: '2024-03-20' },
        ],
      },
    ],
  },
];

export const Default: Story = {
  args: {
    data: treeData,
    title: 'Portafolio de Factoring',
    description: 'Estructura jerarquica: Cliente → Operacion → Factura',
    onRowClick: (node) => console.log('Clicked:', node),
  },
};

export const WithCheckboxes: Story = {
  args: {
    data: treeData,
    showCheckboxes: true,
    title: 'Seleccion Multiple',
    description: 'Selecciona facturas para operaciones en lote',
  },
};

export const WithoutTitle: Story = {
  name: 'Standalone (No Header)',
  args: {
    data: treeData,
  },
};
