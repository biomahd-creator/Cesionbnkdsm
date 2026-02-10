import type { Meta, StoryObj } from '@storybook/react';
import { CupoValidator } from './CupoValidator';

const meta: Meta<typeof CupoValidator> = {
  title: 'Patterns/CupoValidator',
  component: CupoValidator,
  tags: ['autodocs'],
  argTypes: {
    cupoTotal: { control: { type: 'number', min: 100000, max: 10000000, step: 50000 } },
    cupoUtilizado: { control: { type: 'number', min: 0, max: 10000000, step: 50000 } },
  },
  parameters: {
    docs: {
      description: {
        component:
          'Cupo (credit limit) validator for factoring operations. Shows current usage via progress bar, allows entering a requested amount, and validates against available cupo with animated feedback.',
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof CupoValidator>;

export const Default: Story = {
  args: {
    cupoTotal: 500000,
    cupoUtilizado: 328000,
    onValidate: (monto, isValid) => console.log('Validate:', monto, isValid),
  },
};

export const HighUtilization: Story = {
  name: 'High Utilization (90%)',
  args: {
    cupoTotal: 500000,
    cupoUtilizado: 450000,
  },
};

export const LowUtilization: Story = {
  name: 'Low Utilization (20%)',
  args: {
    cupoTotal: 1000000,
    cupoUtilizado: 200000,
  },
};

export const FullCupo: Story = {
  name: 'Full (100%)',
  args: {
    cupoTotal: 500000,
    cupoUtilizado: 500000,
  },
};
