import type { Meta, StoryObj } from '@storybook/react';
import { FloatingActionButton } from './floating-action-button';
import { MessageCircle, Plus, Upload, HelpCircle, Pencil } from 'lucide-react';

const meta: Meta<typeof FloatingActionButton> = {
  title: 'UI/FloatingActionButton',
  component: FloatingActionButton,
  tags: ['autodocs'],
  argTypes: {
    position: {
      control: 'select',
      options: ['bottom-right', 'bottom-left', 'top-right', 'top-left'],
    },
    label: { control: 'text' },
    variant: {
      control: 'select',
      options: ['default', 'secondary', 'destructive', 'outline', 'success', 'info'],
    },
  },
  parameters: {
    docs: {
      description: {
        component:
          'Floating Action Button (FAB) with 4 fixed positions. Uses Button internally so all variants are inherited. Optional tooltip via the `label` prop.',
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof FloatingActionButton>;

export const Default: Story = {
  render: () => (
    <div className="relative h-[300px] w-full border bg-muted/20 rounded-lg overflow-hidden">
      <div className="p-4">
        <p className="text-muted-foreground text-sm">FAB posicionado en bottom-right (por defecto)</p>
      </div>
      <FloatingActionButton
        className="absolute"
        onClick={() => alert('FAB clicked')}
        label="Crear Nuevo"
      />
    </div>
  ),
};

export const AllPositions: Story = {
  name: 'All Positions',
  render: () => (
    <div className="relative h-[400px] w-full border bg-muted/20 rounded-lg overflow-hidden">
      <div className="flex items-center justify-center h-full">
        <p className="text-muted-foreground text-sm">4 posiciones disponibles</p>
      </div>
      <FloatingActionButton position="top-left" icon={HelpCircle} className="absolute" variant="info" label="Ayuda" />
      <FloatingActionButton position="top-right" icon={Pencil} className="absolute" variant="secondary" label="Editar" />
      <FloatingActionButton position="bottom-left" icon={MessageCircle} className="absolute" variant="outline" label="Chat" />
      <FloatingActionButton position="bottom-right" icon={Plus} className="absolute" label="Crear" />
    </div>
  ),
};

export const CustomIcons: Story = {
  name: 'Custom Icons',
  render: () => (
    <div className="flex gap-4">
      <div className="relative h-[200px] w-[200px] border bg-muted/20 rounded-lg overflow-hidden">
        <FloatingActionButton icon={Plus} className="absolute" label="Nuevo" />
      </div>
      <div className="relative h-[200px] w-[200px] border bg-muted/20 rounded-lg overflow-hidden">
        <FloatingActionButton icon={Upload} className="absolute" variant="secondary" label="Subir" />
      </div>
      <div className="relative h-[200px] w-[200px] border bg-muted/20 rounded-lg overflow-hidden">
        <FloatingActionButton icon={MessageCircle} className="absolute" variant="info" label="Chat" />
      </div>
    </div>
  ),
};

export const WithoutTooltip: Story = {
  name: 'Without Tooltip',
  render: () => (
    <div className="relative h-[200px] w-full border bg-muted/20 rounded-lg overflow-hidden">
      <FloatingActionButton className="absolute" onClick={() => {}} />
    </div>
  ),
};
