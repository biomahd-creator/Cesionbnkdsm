import type { Meta, StoryObj } from '@storybook/react';
import { SimpleFormField } from './FormField';

const meta: Meta<typeof SimpleFormField> = {
  title: 'Widgets/SimpleFormField',
  component: SimpleFormField,
  tags: ['autodocs'],
  argTypes: {
    type: { control: 'select', options: ['text', 'email', 'number', 'password', 'tel'] },
    required: { control: 'boolean' },
  },
  parameters: {
    docs: {
      description: {
        component: 'Form field with label, required badge, input, error state, and helper text. Building block for forms.',
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof SimpleFormField>;

export const Default: Story = {
  args: { label: 'Nombre', id: 'name', placeholder: 'Ingrese su nombre' },
};

export const Required: Story = {
  args: { label: 'Email', id: 'email', type: 'email', placeholder: 'correo@empresa.co', required: true },
};

export const WithError: Story = {
  args: { label: 'NIT', id: 'nit', placeholder: '900.123.456-7', required: true, error: 'NIT invalido. Formato: XXX.XXX.XXX-X' },
};

export const WithHelper: Story = {
  args: { label: 'Monto', id: 'amount', type: 'number', placeholder: '0', helperText: 'Ingrese el monto en COP sin puntos ni comas.' },
};

export const FormExample: Story = {
  name: 'Form Layout',
  render: () => (
    <div className="space-y-4 max-w-md">
      <SimpleFormField label="Razon Social" id="company" required placeholder="Nombre de la empresa" />
      <SimpleFormField label="NIT" id="nit" required placeholder="900.123.456-7" />
      <SimpleFormField label="Email Contacto" id="email" type="email" placeholder="contacto@empresa.co" required />
      <SimpleFormField label="Telefono" id="phone" type="tel" placeholder="+57 300 000 0000" helperText="Incluya indicativo del pais." />
    </div>
  ),
};
