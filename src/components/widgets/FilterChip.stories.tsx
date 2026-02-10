import type { Meta, StoryObj } from '@storybook/react';
import { FilterChip } from './FilterChip';

const meta: Meta<typeof FilterChip> = {
  title: 'Widgets/FilterChip',
  component: FilterChip,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: 'Removable filter chip using Badge + X button. Shows label:value pair. Used in FilterBar for active filter display.',
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof FilterChip>;

export const Default: Story = {
  args: { label: 'Estado', value: 'Aprobada', onRemove: () => console.log('Remove') },
};

export const WithoutRemove: Story = {
  name: 'Read-only (No Remove)',
  args: { label: 'Pagador', value: 'Grupo Exito' },
};

export const MultipleChips: Story = {
  name: 'Multiple Active Filters',
  render: () => (
    <div className="flex flex-wrap gap-2">
      <FilterChip label="Estado" value="Aprobada" onRemove={() => {}} />
      <FilterChip label="Pagador" value="Ecopetrol" onRemove={() => {}} />
      <FilterChip label="Monto" value="> $50M" onRemove={() => {}} />
      <FilterChip label="Fecha" value="Feb 2026" onRemove={() => {}} />
    </div>
  ),
};
