import type { Meta, StoryObj } from '@storybook/react';
import { Checkbox } from './checkbox';
import { Label } from './label';

const meta: Meta<typeof Checkbox> = {
  title: 'UI/Checkbox',
  component: Checkbox,
  tags: ['autodocs'],
  argTypes: {
    disabled: { control: 'boolean' },
    defaultChecked: { control: 'boolean' },
  },
  parameters: {
    docs: {
      description: {
        component:
          'Checkbox built on Radix UI Checkbox. Uses DSM primary color for checked state and ring token for focus.',
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof Checkbox>;

export const Default: Story = {
  render: () => (
    <div className="flex items-center space-x-2">
      <Checkbox id="cb-terms" />
      <Label htmlFor="cb-terms">Acepto los terminos y condiciones</Label>
    </div>
  ),
};

export const Checked: Story = {
  render: () => (
    <div className="flex items-center space-x-2">
      <Checkbox id="cb-checked" defaultChecked />
      <Label htmlFor="cb-checked">Opcion seleccionada</Label>
    </div>
  ),
};

export const Disabled: Story = {
  render: () => (
    <div className="space-y-3">
      <div className="flex items-center space-x-2">
        <Checkbox id="cb-dis-unchecked" disabled />
        <Label htmlFor="cb-dis-unchecked" className="opacity-50">Deshabilitado (sin seleccionar)</Label>
      </div>
      <div className="flex items-center space-x-2">
        <Checkbox id="cb-dis-checked" disabled defaultChecked />
        <Label htmlFor="cb-dis-checked" className="opacity-50">Deshabilitado (seleccionado)</Label>
      </div>
    </div>
  ),
};

export const CheckboxGroup: Story = {
  name: 'Group (Multiple Options)',
  render: () => (
    <fieldset className="space-y-3">
      <legend className="text-sm font-medium mb-2">Documentos requeridos</legend>
      {[
        { id: 'pagare', label: 'Pagare firmado', checked: true },
        { id: 'endoso', label: 'Carta de endoso', checked: true },
        { id: 'camara', label: 'Certificado de Camara de Comercio', checked: false },
        { id: 'rut', label: 'RUT actualizado', checked: false },
        { id: 'estados', label: 'Estados financieros', checked: false },
      ].map((item) => (
        <div key={item.id} className="flex items-center space-x-2">
          <Checkbox id={`cb-${item.id}`} defaultChecked={item.checked} />
          <Label htmlFor={`cb-${item.id}`}>{item.label}</Label>
        </div>
      ))}
    </fieldset>
  ),
};

export const WithDescription: Story = {
  name: 'With Description',
  render: () => (
    <div className="space-y-4">
      {[
        { id: 'notifications', label: 'Notificaciones', desc: 'Recibir alertas sobre operaciones y vencimientos.' },
        { id: 'reports', label: 'Reportes automaticos', desc: 'Generar y enviar reportes mensuales por email.' },
        { id: 'two-factor', label: 'Autenticacion 2FA', desc: 'Agregar una capa adicional de seguridad a tu cuenta.' },
      ].map((item) => (
        <div key={item.id} className="flex space-x-3">
          <Checkbox id={`cb-${item.id}`} className="mt-1" />
          <div className="space-y-0.5">
            <Label htmlFor={`cb-${item.id}`}>{item.label}</Label>
            <p className="text-sm text-muted-foreground">{item.desc}</p>
          </div>
        </div>
      ))}
    </div>
  ),
};
