import type { Meta, StoryObj } from '@storybook/react';
import { DatePickerWithRange } from './date-range-picker';

const meta: Meta<typeof DatePickerWithRange> = {
  title: 'UI/DateRangePicker',
  component: DatePickerWithRange,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof DatePickerWithRange>;

export const Default: Story = {
  render: () => (
    <div className="p-10">
      <DatePickerWithRange className="w-[300px]" />
    </div>
  ),
};
