import type { Meta, StoryObj } from '@storybook/react';
import { Switch } from './switch';
import { Label } from './label';

const meta: Meta<typeof Switch> = {
  title: 'UI/Switch',
  component: Switch,
  tags: ['autodocs'],
  argTypes: {
    disabled: { control: 'boolean' },
    defaultChecked: { control: 'boolean' },
  },
  parameters: {
    docs: {
      description: {
        component:
          'Toggle switch built on Radix UI Switch. Uses `--switch-background` token for off state and primary color for on state.',
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof Switch>;

export const Default: Story = {
  render: () => (
    <div className="flex items-center space-x-2">
      <Switch id="sw-mode" />
      <Label htmlFor="sw-mode">Modo avanzado</Label>
    </div>
  ),
};

export const Checked: Story = {
  render: () => (
    <div className="flex items-center space-x-2">
      <Switch id="sw-checked" defaultChecked />
      <Label htmlFor="sw-checked">Notificaciones activas</Label>
    </div>
  ),
};

export const Disabled: Story = {
  render: () => (
    <div className="space-y-3">
      <div className="flex items-center space-x-2">
        <Switch id="sw-dis-off" disabled />
        <Label htmlFor="sw-dis-off" className="opacity-50">Deshabilitado (off)</Label>
      </div>
      <div className="flex items-center space-x-2">
        <Switch id="sw-dis-on" disabled defaultChecked />
        <Label htmlFor="sw-dis-on" className="opacity-50">Deshabilitado (on)</Label>
      </div>
    </div>
  ),
};

export const SettingsPanel: Story = {
  name: 'Settings Panel Pattern',
  render: () => (
    <div className="max-w-md space-y-0 divide-y rounded-lg border">
      {[
        { id: 'notif', label: 'Notificaciones', desc: 'Recibir alertas de operaciones.', on: true },
        { id: 'email', label: 'Emails automaticos', desc: 'Enviar resumen diario por correo.', on: false },
        { id: '2fa', label: 'Autenticacion 2FA', desc: 'Verificacion en dos pasos.', on: true },
        { id: 'dark', label: 'Modo oscuro', desc: 'Cambiar apariencia del sistema.', on: false },
        { id: 'auto-save', label: 'Autoguardado', desc: 'Guardar borradores automaticamente.', on: true },
      ].map((item) => (
        <div key={item.id} className="flex items-center justify-between p-4">
          <div className="space-y-0.5">
            <Label htmlFor={`sw-${item.id}`}>{item.label}</Label>
            <p className="text-sm text-muted-foreground">{item.desc}</p>
          </div>
          <Switch id={`sw-${item.id}`} defaultChecked={item.on} />
        </div>
      ))}
    </div>
  ),
};
