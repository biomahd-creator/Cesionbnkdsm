import type { Meta, StoryObj } from '@storybook/react';
import { Combobox } from './Combobox';
import { Label } from '../ui/label';

const meta: Meta<typeof Combobox> = {
  title: 'Advanced/Combobox',
  component: Combobox,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component:
          'Searchable single-select combobox built on Command + Popover. For multi-select, use `MultiSelect` from `/ui/`.',
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof Combobox>;

const payorOptions = [
  { value: 'exito', label: 'Grupo Exito S.A.' },
  { value: 'ecopetrol', label: 'Ecopetrol S.A.' },
  { value: 'bancolombia', label: 'Bancolombia S.A.' },
  { value: 'nutresa', label: 'Nutresa S.A.' },
  { value: 'isa', label: 'ISA S.A.' },
  { value: 'argos', label: 'Cementos Argos S.A.' },
  { value: 'sura', label: 'Grupo Sura S.A.' },
  { value: 'avianca', label: 'Avianca Holdings' },
];

export const Default: Story = {
  render: () => (
    <div className="w-full max-w-sm">
      <Combobox
        options={payorOptions}
        placeholder="Seleccionar pagador..."
        onChange={(val) => console.log('Selected:', val)}
      />
    </div>
  ),
};

export const WithLabel: Story = {
  render: () => (
    <div className="w-full max-w-sm space-y-1.5">
      <Label>Pagador</Label>
      <Combobox
        options={payorOptions}
        placeholder="Buscar pagador..."
        emptyText="No se encontro el pagador."
      />
    </div>
  ),
};

export const WithPreselectedValue: Story = {
  name: 'Pre-selected',
  render: () => (
    <div className="w-full max-w-sm space-y-1.5">
      <Label>Moneda</Label>
      <Combobox
        options={[
          { value: 'cop', label: 'COP — Peso Colombiano' },
          { value: 'usd', label: 'USD — Dolar Americano' },
          { value: 'eur', label: 'EUR — Euro' },
        ]}
        value="cop"
        placeholder="Seleccionar moneda..."
      />
    </div>
  ),
};

export const CustomEmptyText: Story = {
  name: 'Custom Empty Message',
  render: () => (
    <div className="w-full max-w-sm">
      <Combobox
        options={[]}
        placeholder="Buscar operacion..."
        emptyText="No hay operaciones disponibles en este momento."
      />
    </div>
  ),
};
