import type { Meta, StoryObj } from '@storybook/react';
import { SplitButton } from './split-button';

const meta: Meta<typeof SplitButton> = {
  title: 'UI/SplitButton',
  component: SplitButton,
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['default', 'secondary', 'destructive', 'outline', 'success', 'warning', 'info'],
    },
    label: { control: 'text' },
  },
  parameters: {
    docs: {
      description: {
        component:
          'Split button with primary action + dropdown for secondary actions. Inherits all Button variants. Uses DropdownMenu internally.',
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof SplitButton>;

export const Default: Story = {
  args: {
    label: 'Guardar',
    onMainAction: () => alert('Guardado'),
    actions: [
      { label: 'Guardar y Cerrar', onClick: () => alert('Guardar y Cerrar') },
      { label: 'Guardar y Nuevo', onClick: () => alert('Guardar y Nuevo') },
      { label: 'Guardar como Borrador', onClick: () => alert('Borrador') },
    ],
  },
};

export const Destructive: Story = {
  args: {
    label: 'Eliminar',
    variant: 'destructive',
    onMainAction: () => alert('Eliminado'),
    actions: [
      { label: 'Eliminar y Archivar', onClick: () => alert('Archivado') },
      { label: 'Eliminar Permanente', onClick: () => alert('Permanente') },
    ],
  },
};

export const SuccessVariant: Story = {
  name: 'Success',
  args: {
    label: 'Aprobar',
    variant: 'success',
    onMainAction: () => alert('Aprobado'),
    actions: [
      { label: 'Aprobar y Notificar', onClick: () => alert('Notificado') },
      { label: 'Aprobar con Observaciones', onClick: () => alert('Con obs') },
    ],
  },
};

export const SecondaryVariant: Story = {
  name: 'Secondary',
  args: {
    label: 'Exportar',
    variant: 'secondary',
    onMainAction: () => alert('Exportar PDF'),
    actions: [
      { label: 'Exportar CSV', onClick: () => alert('CSV') },
      { label: 'Exportar Excel', onClick: () => alert('Excel') },
      { label: 'Imprimir', onClick: () => alert('Imprimir') },
    ],
  },
};

export const WithDisabledActions: Story = {
  name: 'With Disabled Actions',
  args: {
    label: 'Procesar',
    onMainAction: () => alert('Procesar'),
    actions: [
      { label: 'Procesar Todo', onClick: () => alert('Todo') },
      { label: 'Procesar Seleccion', onClick: () => alert('Seleccion'), disabled: true },
      { label: 'Programar Proceso', onClick: () => alert('Programar') },
    ],
  },
};

/* ════════════════════════════════════════════
   VARIANTS SHOWCASE
   ════════════════════════════════════════════ */

export const VariantsShowcase: Story = {
  name: 'All Variants',
  render: () => {
    const actions = [
      { label: 'Accion A', onClick: () => {} },
      { label: 'Accion B', onClick: () => {} },
    ];
    return (
      <div className="flex flex-wrap gap-4">
        <SplitButton label="Default" variant="default" onMainAction={() => {}} actions={actions} />
        <SplitButton label="Secondary" variant="secondary" onMainAction={() => {}} actions={actions} />
        <SplitButton label="Destructive" variant="destructive" onMainAction={() => {}} actions={actions} />
        <SplitButton label="Outline" variant="outline" onMainAction={() => {}} actions={actions} />
        <SplitButton label="Success" variant="success" onMainAction={() => {}} actions={actions} />
        <SplitButton label="Warning" variant="warning" onMainAction={() => {}} actions={actions} />
        <SplitButton label="Info" variant="info" onMainAction={() => {}} actions={actions} />
      </div>
    );
  },
};
