import type { Meta, StoryObj } from '@storybook/react';
import { BottomSheet } from './bottom-sheet';
import { Button } from './button';
import { Input } from './input';
import { Label } from './label';
import { Badge } from './badge';
import React from 'react';

const meta: Meta<typeof BottomSheet> = {
  title: 'UI/BottomSheet',
  component: BottomSheet,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component:
          'Bottom sheet (drawer) built on Vaul. Great for mobile-first interactions. Includes trigger, optional title/description, content area, and footer with close button.',
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof BottomSheet>;

export const Default: Story = {
  render: () => {
    const [open, setOpen] = React.useState(false);
    return (
      <BottomSheet
        open={open}
        onOpenChange={setOpen}
        trigger={<Button variant="outline">Abrir Configuracion</Button>}
        title="Editar Perfil"
        description="Modifica tus datos. Haz clic en guardar cuando termines."
        footer={<Button onClick={() => setOpen(false)}>Guardar cambios</Button>}
      >
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="bs-name" className="text-right">Nombre</Label>
            <Input id="bs-name" defaultValue="Maria Gonzalez" className="col-span-3" />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="bs-email" className="text-right">Email</Label>
            <Input id="bs-email" defaultValue="maria@cesionbnk.co" className="col-span-3" />
          </div>
        </div>
      </BottomSheet>
    );
  },
};

export const WithoutTitle: Story = {
  name: 'Content Only (No Title)',
  render: () => {
    const [open, setOpen] = React.useState(false);
    return (
      <BottomSheet
        open={open}
        onOpenChange={setOpen}
        trigger={<Button>Ver Resumen</Button>}
      >
        <div className="space-y-3 py-2">
          <div className="flex justify-between">
            <span className="text-muted-foreground">Total facturas</span>
            <span>12</span>
          </div>
          <div className="flex justify-between">
            <span className="text-muted-foreground">Monto total</span>
            <span>$234,500,000</span>
          </div>
          <div className="flex justify-between">
            <span className="text-muted-foreground">Estado</span>
            <Badge variant="success-soft-outline">Aprobada</Badge>
          </div>
        </div>
      </BottomSheet>
    );
  },
};

export const WithCustomFooter: Story = {
  name: 'With Action Footer',
  render: () => {
    const [open, setOpen] = React.useState(false);
    return (
      <BottomSheet
        open={open}
        onOpenChange={setOpen}
        trigger={<Button variant="destructive-outline">Descartar Facturas</Button>}
        title="Confirmar Descarte"
        description="Selecciona las facturas que deseas descartar de esta operacion."
        footer={
          <div className="flex gap-2 w-full">
            <Button variant="outline" className="flex-1" onClick={() => setOpen(false)}>
              Cancelar
            </Button>
            <Button variant="destructive" className="flex-1" onClick={() => setOpen(false)}>
              Descartar Seleccionadas
            </Button>
          </div>
        }
      >
        <div className="space-y-2 py-2">
          {['FAC-001 — $12,500,000', 'FAC-002 — $8,300,000', 'FAC-003 — $45,200,000'].map(
            (item) => (
              <label key={item} className="flex items-center gap-3 rounded-md border p-3 cursor-pointer hover:bg-muted/50">
                <input type="checkbox" className="rounded" />
                <span className="text-sm">{item}</span>
              </label>
            )
          )}
        </div>
      </BottomSheet>
    );
  },
};
