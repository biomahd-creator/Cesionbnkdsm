import type { Meta, StoryObj } from '@storybook/react';
import { DatePickerWithPresets } from './DatePickerWithPresets';
import { Label } from '../ui/label';

const meta: Meta<typeof DatePickerWithPresets> = {
  title: 'Advanced/DatePickerWithPresets',
  component: DatePickerWithPresets,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component:
          'Date picker with quick preset buttons (Hoy, Manana, En una semana, En un mes) + full calendar. Locale: Spanish (es). Built on Calendar + Popover + Select.',
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof DatePickerWithPresets>;

export const Default: Story = {
  render: () => (
    <div className="w-full max-w-sm">
      <DatePickerWithPresets onChange={(date) => console.log('Selected:', date)} />
    </div>
  ),
};

export const WithLabel: Story = {
  render: () => (
    <div className="w-full max-w-sm space-y-1.5">
      <Label>Fecha de vencimiento</Label>
      <DatePickerWithPresets onChange={(date) => console.log('Due date:', date)} />
    </div>
  ),
};

export const WithPreselectedDate: Story = {
  name: 'Pre-selected Date',
  render: () => (
    <div className="w-full max-w-sm space-y-1.5">
      <Label>Fecha de emision</Label>
      <DatePickerWithPresets
        value={new Date()}
        onChange={(date) => console.log('Emission:', date)}
      />
    </div>
  ),
};

export const FactoringDueDatePicker: Story = {
  name: 'Real World: Factoring Due Date',
  render: () => (
    <div className="flex gap-4 items-end max-w-lg">
      <div className="flex-1 space-y-1.5">
        <Label>Fecha desde</Label>
        <DatePickerWithPresets onChange={(d) => console.log('From:', d)} />
      </div>
      <div className="flex-1 space-y-1.5">
        <Label>Fecha hasta</Label>
        <DatePickerWithPresets onChange={(d) => console.log('To:', d)} />
      </div>
    </div>
  ),
};
