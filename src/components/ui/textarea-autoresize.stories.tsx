import type { Meta, StoryObj } from '@storybook/react';
import { TextareaAutoresize } from './textarea-autoresize';
import { Label } from './label';

const meta: Meta<typeof TextareaAutoresize> = {
  title: 'UI/TextareaAutoresize',
  component: TextareaAutoresize,
  tags: ['autodocs'],
  argTypes: {
    minRows: { control: { type: 'number', min: 1, max: 20 } },
    maxRows: { control: { type: 'number', min: 1, max: 30 } },
    placeholder: { control: 'text' },
    disabled: { control: 'boolean' },
  },
  parameters: {
    docs: {
      description: {
        component:
          'Auto-resizing textarea that grows/shrinks based on content. Configurable `minRows` and `maxRows`. Scrollbar appears when content exceeds maxRows.',
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof TextareaAutoresize>;

export const Default: Story = {
  render: () => (
    <div className="grid w-full gap-1.5 max-w-sm">
      <Label htmlFor="message">Mensaje</Label>
      <TextareaAutoresize
        id="message"
        placeholder="Escribe tu mensaje aqui. Crecera automaticamente..."
        minRows={3}
        maxRows={8}
      />
    </div>
  ),
};

export const MinimalStart: Story = {
  name: 'Minimal Start (1 row)',
  render: () => (
    <div className="grid w-full gap-1.5 max-w-sm">
      <Label>Comentario rapido</Label>
      <TextareaAutoresize
        placeholder="Empieza con 1 linea, crece hasta 5..."
        minRows={1}
        maxRows={5}
      />
    </div>
  ),
};

export const LargeArea: Story = {
  name: 'Large (5-15 rows)',
  render: () => (
    <div className="grid w-full gap-1.5 max-w-lg">
      <Label>Descripcion detallada</Label>
      <TextareaAutoresize
        placeholder="Area grande para contenido extenso..."
        minRows={5}
        maxRows={15}
      />
    </div>
  ),
};

export const Disabled: Story = {
  render: () => (
    <div className="grid w-full gap-1.5 max-w-sm">
      <Label>Notas (solo lectura)</Label>
      <TextareaAutoresize
        defaultValue="Este contenido no se puede editar. Es una nota del sistema sobre la operacion #OP-2024-0847."
        disabled
        minRows={2}
        maxRows={5}
      />
    </div>
  ),
};

export const WithPrefill: Story = {
  name: 'With Pre-filled Content',
  render: () => (
    <div className="grid w-full gap-1.5 max-w-md">
      <Label>Observaciones de la operacion</Label>
      <TextareaAutoresize
        defaultValue={`Operacion de factoring aprobada con las siguientes condiciones:\n\n1. Tasa de descuento: 1.2% mensual\n2. Plazo promedio: 45 dias\n3. Total facturas: 12 por $234,500,000 COP\n4. Pagador: Grupo Exito S.A.\n\nPendiente verificacion documental del pagare.`}
        minRows={3}
        maxRows={12}
      />
    </div>
  ),
};

export const InvalidState: Story = {
  name: 'Invalid (aria-invalid)',
  render: () => (
    <div className="grid w-full gap-1.5 max-w-sm">
      <Label>Justificacion</Label>
      <TextareaAutoresize
        placeholder="Explique la razon del descarte..."
        aria-invalid="true"
        minRows={2}
        maxRows={6}
      />
      <p className="text-sm text-red-600 dark:text-red-400">
        La justificacion es obligatoria para descartar facturas.
      </p>
    </div>
  ),
};
