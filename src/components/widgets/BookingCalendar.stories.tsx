import type { Meta, StoryObj } from '@storybook/react';
import { BookingCalendar } from './BookingCalendar';

const meta: Meta<typeof BookingCalendar> = {
  title: 'Widgets/BookingCalendar',
  component: BookingCalendar,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: 'Booking calendar with date picker, time slot selection, service type, and confirmation. Shows available/unavailable slots. 3-step flow.',
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof BookingCalendar>;

export const Default: Story = {
  render: () => <BookingCalendar />,
};
