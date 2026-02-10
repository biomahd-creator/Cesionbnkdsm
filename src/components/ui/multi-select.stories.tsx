import type { Meta, StoryObj } from '@storybook/react';
import { MultiSelect, type MultiSelectOption } from './multi-select';
import { useState } from 'react';
import { Label } from './label';

const sampleOptions: MultiSelectOption[] = [
  { label: 'Aprobada', value: 'approved' },
  { label: 'Pendiente', value: 'pending' },
  { label: 'En Proceso', value: 'processing' },
  { label: 'Rechazada', value: 'rejected' },
  { label: 'Descartada', value: 'discarded' },
  { label: 'En Validacion', value: 'validating' },
];

const payorOptions: MultiSelectOption[] = [
  { label: 'Grupo Exito S.A.', value: 'exito' },
  { label: 'Ecopetrol S.A.', value: 'ecopetrol' },
  { label: 'Bancolombia S.A.', value: 'bancolombia' },
  { label: 'Nutresa S.A.', value: 'nutresa' },
  { label: 'ISA S.A.', value: 'isa' },
  { label: 'Cementos Argos S.A.', value: 'argos' },
  { label: 'Grupo Sura S.A.', value: 'sura' },
];

const meta: Meta<typeof MultiSelect> = {
  title: 'UI/MultiSelect',
  component: MultiSelect,
  tags: ['autodocs'],
  argTypes: {
    placeholder: { control: 'text' },
    disabled: { control: 'boolean' },
  },
  parameters: {
    docs: {
      description: {
        component:
          'Multi-select combo box built on Command + Popover. Selected items appear as removable Badges. Uses the `secondary` badge variant.',
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof MultiSelect>;

export const Default: Story = {
  render: () => {
    const [selected, setSelected] = useState<string[]>([]);
    return (
      <div className="w-full max-w-sm">
        <MultiSelect
          options={sampleOptions}
          selected={selected}
          onChange={setSelected}
          placeholder="Filtrar por estado..."
        />
      </div>
    );
  },
};

export const WithPreselected: Story = {
  name: 'With Pre-selected Values',
  render: () => {
    const [selected, setSelected] = useState(['approved', 'pending']);
    return (
      <div className="w-full max-w-sm">
        <Label className="mb-1.5 block">Estado de facturas</Label>
        <MultiSelect
          options={sampleOptions}
          selected={selected}
          onChange={setSelected}
          placeholder="Filtrar por estado..."
        />
        <p className="text-muted-foreground text-sm mt-1.5">
          {selected.length} seleccionados
        </p>
      </div>
    );
  },
};

export const DisabledState: Story = {
  name: 'Disabled',
  render: () => {
    const [selected] = useState(['approved']);
    return (
      <div className="w-full max-w-sm">
        <MultiSelect
          options={sampleOptions}
          selected={selected}
          onChange={() => {}}
          placeholder="Filtrar..."
          disabled
        />
      </div>
    );
  },
};

export const ManyOptions: Story = {
  name: 'Many Options (Scrollable)',
  render: () => {
    const [selected, setSelected] = useState<string[]>([]);
    return (
      <div className="w-full max-w-sm">
        <Label className="mb-1.5 block">Pagadores</Label>
        <MultiSelect
          options={payorOptions}
          selected={selected}
          onChange={setSelected}
          placeholder="Selecciona pagadores..."
        />
      </div>
    );
  },
};

export const FactoringFilterBar: Story = {
  name: 'Real World: Factoring Filter Bar',
  render: () => {
    const [statuses, setStatuses] = useState<string[]>([]);
    const [payors, setPayors] = useState<string[]>([]);
    return (
      <div className="flex gap-4 items-end max-w-2xl">
        <div className="flex-1 space-y-1.5">
          <Label>Estado</Label>
          <MultiSelect
            options={sampleOptions}
            selected={statuses}
            onChange={setStatuses}
            placeholder="Todos los estados..."
          />
        </div>
        <div className="flex-1 space-y-1.5">
          <Label>Pagador</Label>
          <MultiSelect
            options={payorOptions}
            selected={payors}
            onChange={setPayors}
            placeholder="Todos los pagadores..."
          />
        </div>
      </div>
    );
  },
};
