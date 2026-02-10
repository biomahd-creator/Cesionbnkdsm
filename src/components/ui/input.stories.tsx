import type { Meta, StoryObj } from '@storybook/react';
import { Input } from './input';
import { Label } from './label';
import { Search, Mail, Lock, DollarSign, Calendar, Eye, EyeOff } from 'lucide-react';
import { useState } from 'react';

const meta: Meta<typeof Input> = {
  title: 'UI/Input',
  component: Input,
  tags: ['autodocs'],
  argTypes: {
    type: {
      control: 'select',
      options: ['text', 'email', 'password', 'number', 'search', 'tel', 'url', 'date', 'file'],
    },
    placeholder: { control: 'text' },
    disabled: { control: 'boolean' },
  },
  parameters: {
    docs: {
      description: {
        component:
          'Input component with DSM token-driven borders (`--input-border`, `--input-border-width`, `--input-background`). Supports focus ring, aria-invalid states, and file input styling.',
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof Input>;

/* ════════════════════════════════════════════
   BASIC
   ════════════════════════════════════════════ */

export const Default: Story = {
  args: { type: 'text', placeholder: 'Escribe algo...' },
};

export const WithLabel: Story = {
  render: () => (
    <div className="grid w-full max-w-sm items-center gap-1.5">
      <Label htmlFor="email">Email</Label>
      <Input type="email" id="email" placeholder="nombre@empresa.com" />
    </div>
  ),
};

export const Disabled: Story = {
  args: { disabled: true, placeholder: 'Input deshabilitado', value: 'No editable' },
};

export const FileInput: Story = {
  name: 'File',
  args: { type: 'file' },
};

/* ════════════════════════════════════════════
   INPUT TYPES
   ════════════════════════════════════════════ */

export const TypesShowcase: Story = {
  name: 'All Input Types',
  render: () => (
    <div className="grid w-full max-w-sm gap-4">
      <div className="space-y-1.5">
        <Label>Text</Label>
        <Input type="text" placeholder="Nombre completo" />
      </div>
      <div className="space-y-1.5">
        <Label>Email</Label>
        <Input type="email" placeholder="correo@empresa.com" />
      </div>
      <div className="space-y-1.5">
        <Label>Password</Label>
        <Input type="password" placeholder="Contrasena" />
      </div>
      <div className="space-y-1.5">
        <Label>Number</Label>
        <Input type="number" placeholder="0" />
      </div>
      <div className="space-y-1.5">
        <Label>Date</Label>
        <Input type="date" />
      </div>
      <div className="space-y-1.5">
        <Label>Search</Label>
        <Input type="search" placeholder="Buscar..." />
      </div>
      <div className="space-y-1.5">
        <Label>Tel</Label>
        <Input type="tel" placeholder="+57 300 123 4567" />
      </div>
    </div>
  ),
};

/* ════════════════════════════════════════════
   STATES
   ════════════════════════════════════════════ */

export const InvalidState: Story = {
  name: 'Invalid (aria-invalid)',
  render: () => (
    <div className="grid w-full max-w-sm gap-1.5">
      <Label htmlFor="invalid-email">Email</Label>
      <Input
        type="email"
        id="invalid-email"
        placeholder="correo@empresa.com"
        aria-invalid="true"
        defaultValue="correo-invalido"
      />
      <p className="text-sm text-red-600 dark:text-red-400">
        Por favor ingresa un email valido.
      </p>
    </div>
  ),
};

export const WithHelperText: Story = {
  name: 'With Helper Text',
  render: () => (
    <div className="grid w-full max-w-sm gap-1.5">
      <Label htmlFor="nit">NIT</Label>
      <Input type="text" id="nit" placeholder="900.123.456-7" />
      <p className="text-sm text-muted-foreground">
        Numero de Identificacion Tributaria con digito de verificacion.
      </p>
    </div>
  ),
};

/* ════════════════════════════════════════════
   WITH ICONS (wrapper pattern)
   ════════════════════════════════════════════ */

export const WithIconLeft: Story = {
  name: 'With Icon (Left)',
  render: () => (
    <div className="space-y-3 max-w-sm">
      <div className="relative">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 size-4 text-muted-foreground" />
        <Input className="pl-9" placeholder="Buscar facturas..." />
      </div>
      <div className="relative">
        <Mail className="absolute left-3 top-1/2 -translate-y-1/2 size-4 text-muted-foreground" />
        <Input className="pl-9" type="email" placeholder="correo@empresa.com" />
      </div>
      <div className="relative">
        <DollarSign className="absolute left-3 top-1/2 -translate-y-1/2 size-4 text-muted-foreground" />
        <Input className="pl-9" type="number" placeholder="0.00" />
      </div>
    </div>
  ),
};

export const PasswordToggle: Story = {
  name: 'Password with Toggle',
  render: () => {
    const [show, setShow] = useState(false);
    return (
      <div className="relative max-w-sm">
        <Lock className="absolute left-3 top-1/2 -translate-y-1/2 size-4 text-muted-foreground" />
        <Input
          className="pl-9 pr-10"
          type={show ? 'text' : 'password'}
          placeholder="Contrasena"
          defaultValue="mi-password"
        />
        <button
          type="button"
          className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
          onClick={() => setShow(!show)}
        >
          {show ? <EyeOff className="size-4" /> : <Eye className="size-4" />}
        </button>
      </div>
    );
  },
};

/* ════════════════════════════════════════════
   REAL-WORLD: Factoring Search
   ════════════════════════════════════════════ */

export const FactoringSearch: Story = {
  name: 'Real World: Factoring Invoice Search',
  render: () => (
    <div className="flex items-center gap-2 max-w-lg">
      <div className="relative flex-1">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 size-4 text-muted-foreground" />
        <Input className="pl-9" placeholder="Buscar por CUFE, NIT o razon social..." />
      </div>
      <div className="relative w-40">
        <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 size-4 text-muted-foreground" />
        <Input className="pl-9" type="date" />
      </div>
    </div>
  ),
};
