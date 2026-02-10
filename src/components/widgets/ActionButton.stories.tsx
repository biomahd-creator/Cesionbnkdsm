import type { Meta, StoryObj } from '@storybook/react';
import { ActionButton } from './ActionButton';
import { Trash2, Edit, Download, Eye, Copy, Plus } from 'lucide-react';

const meta: Meta<typeof ActionButton> = {
  title: 'Widgets/ActionButton',
  component: ActionButton,
  tags: ['autodocs'],
  argTypes: {
    variant: { control: 'select', options: ['default', 'outline', 'ghost', 'destructive'] },
  },
  parameters: {
    docs: {
      description: {
        component: 'Icon button with tooltip. Wraps Button + Tooltip for common quick actions. Variants: default, outline, ghost, destructive.',
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof ActionButton>;

export const Default: Story = {
  args: { icon: Edit, label: 'Editar', variant: 'ghost' },
};

export const Destructive: Story = {
  args: { icon: Trash2, label: 'Eliminar', variant: 'destructive' },
};

export const ActionRow: Story = {
  name: 'Action Row (Multiple)',
  render: () => (
    <div className="flex items-center gap-1">
      <ActionButton icon={Eye} label="Ver detalle" />
      <ActionButton icon={Edit} label="Editar" />
      <ActionButton icon={Copy} label="Duplicar" />
      <ActionButton icon={Download} label="Descargar" />
      <ActionButton icon={Trash2} label="Eliminar" variant="destructive" />
    </div>
  ),
};
