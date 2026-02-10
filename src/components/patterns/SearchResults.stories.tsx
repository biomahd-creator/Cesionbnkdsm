import type { Meta, StoryObj } from '@storybook/react';
import { SearchResults, type SearchResultItem } from './SearchResults';

const meta: Meta<typeof SearchResults> = {
  title: 'Patterns/SearchResults',
  component: SearchResults,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component:
          'Search results panel with type-specific icons (invoice, client, payor, operation), subtitle, metadata, and status. Uses ScrollArea for long result lists.',
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof SearchResults>;

const results: SearchResultItem[] = [
  { id: '1', type: 'invoice', title: 'FAC-001', subtitle: 'Grupo Exito S.A.', metadata: '$45,200,000 COP', status: 'Aprobada' },
  { id: '2', type: 'invoice', title: 'FAC-002', subtitle: 'Ecopetrol S.A.', metadata: '$23,100,000 COP', status: 'Pendiente' },
  { id: '3', type: 'payor', title: 'Grupo Exito S.A.', subtitle: 'NIT: 900.123.456-7', metadata: 'Sector Retail' },
  { id: '4', type: 'operation', title: 'OP-2024-0847', subtitle: 'Factoring con recurso', metadata: '12 facturas', status: 'En Proceso' },
  { id: '5', type: 'client', title: 'Maria Gonzalez', subtitle: 'Ejecutiva de Factoring', metadata: 'CESIONBNK' },
];

export const Default: Story = {
  args: {
    results,
    query: 'Exito',
    onSelect: (item) => console.log('Selected:', item),
    className: 'max-w-md',
  },
};

export const Loading: Story = {
  args: {
    results: [],
    query: 'buscando...',
    isLoading: true,
    onSelect: () => {},
    className: 'max-w-md',
  },
};

export const NoResults: Story = {
  args: {
    results: [],
    query: 'xyz123',
    onSelect: () => {},
    className: 'max-w-md',
  },
};
