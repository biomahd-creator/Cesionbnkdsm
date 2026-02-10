import type { Meta, StoryObj } from '@storybook/react';
import { Button } from './button';
import {
  Dialog, DialogContent, DialogDescription, DialogFooter,
  DialogHeader, DialogTitle, DialogTrigger,
} from './dialog';
import { Input } from './input';
import { Label } from './label';
import { Alert, AlertDescription } from './alert';
import { AlertTriangle } from 'lucide-react';

const meta: Meta<typeof Dialog> = {
  title: 'UI/Dialog',
  component: Dialog,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component:
          'Dialog (modal) built on Radix UI Dialog. Includes `aria-describedby={undefined}` fix for Radix warning. Use for confirmations, forms, and focused tasks.',
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof Dialog>;

export const Default: Story = {
  render: () => (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline">Editar Perfil</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Editar perfil</DialogTitle>
          <DialogDescription>
            Modifica tus datos aqui. Haz clic en guardar cuando termines.
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="dlg-name" className="text-right">Nombre</Label>
            <Input id="dlg-name" defaultValue="Maria Gonzalez" className="col-span-3" />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="dlg-email" className="text-right">Email</Label>
            <Input id="dlg-email" defaultValue="maria@cesionbnk.co" className="col-span-3" />
          </div>
        </div>
        <DialogFooter>
          <Button type="submit">Guardar cambios</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  ),
};

export const Confirmation: Story = {
  name: 'Confirmation Dialog',
  render: () => (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="destructive-outline">Eliminar Operacion</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[400px]">
        <DialogHeader>
          <DialogTitle>Confirmar eliminacion</DialogTitle>
          <DialogDescription>
            Esta accion no se puede deshacer. Se eliminara permanentemente la operacion
            y todos los datos asociados.
          </DialogDescription>
        </DialogHeader>
        <DialogFooter className="gap-2 sm:gap-0">
          <Button variant="outline">Cancelar</Button>
          <Button variant="destructive">Eliminar</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  ),
};

export const WithAlert: Story = {
  name: 'With Inline Alert',
  render: () => (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="warning-outline">Descartar Facturas</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[480px]">
        <DialogHeader>
          <DialogTitle>Descartar facturas seleccionadas</DialogTitle>
          <DialogDescription>
            Se descartaran 3 facturas de la operacion OP-2024-0847.
          </DialogDescription>
        </DialogHeader>
        <Alert variant="warning" className="my-2">
          <AlertTriangle className="h-4 w-4" />
          <AlertDescription>
            Las facturas descartadas no podran incluirse nuevamente en esta operacion.
            Debera crear una nueva operacion si desea procesarlas.
          </AlertDescription>
        </Alert>
        <div className="space-y-1.5">
          <Label>Motivo del descarte</Label>
          <Input placeholder="Ej: Documentacion incompleta, factura duplicada..." />
        </div>
        <DialogFooter className="gap-2 sm:gap-0">
          <Button variant="outline">Cancelar</Button>
          <Button variant="warning">Descartar</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  ),
};

export const LargeContent: Story = {
  name: 'Large Content (Scrollable)',
  render: () => (
    <Dialog>
      <DialogTrigger asChild>
        <Button>Ver Terminos</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[600px] max-h-[80vh]">
        <DialogHeader>
          <DialogTitle>Terminos y Condiciones</DialogTitle>
          <DialogDescription>
            Revision de los terminos del contrato de factoring.
          </DialogDescription>
        </DialogHeader>
        <div className="overflow-y-auto max-h-[50vh] pr-2 space-y-4 text-sm text-muted-foreground">
          {Array.from({ length: 8 }, (_, i) => (
            <div key={i}>
              <h4 className="font-medium text-foreground mb-1">
                Clausula {i + 1}. Disposicion General
              </h4>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor
                incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla.
              </p>
            </div>
          ))}
        </div>
        <DialogFooter>
          <Button variant="outline">Rechazar</Button>
          <Button>Aceptar Terminos</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  ),
};

/* ════════════════════════════════════════════
   REAL-WORLD: Factoring Approval
   ════════════════════════════════════════════ */

export const FactoringApproval: Story = {
  name: 'Real World: Factoring Approval',
  render: () => (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="success">Aprobar Operacion</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[500px]">
        <DialogHeader>
          <DialogTitle>Aprobar Operacion #OP-2024-0847</DialogTitle>
          <DialogDescription>
            Confirma la aprobacion de la operacion de factoring. Se procedera al desembolso.
          </DialogDescription>
        </DialogHeader>
        <div className="space-y-3 py-2">
          <div className="grid grid-cols-2 gap-3 text-sm rounded-lg bg-muted/50 p-3">
            <div>
              <span className="text-muted-foreground">Pagador</span>
              <p>Grupo Exito S.A.</p>
            </div>
            <div>
              <span className="text-muted-foreground">Monto</span>
              <p>$234,500,000 COP</p>
            </div>
            <div>
              <span className="text-muted-foreground">Facturas</span>
              <p>12 facturas</p>
            </div>
            <div>
              <span className="text-muted-foreground">Tasa</span>
              <p>1.2% mensual</p>
            </div>
          </div>
          <div className="space-y-1.5">
            <Label>Observaciones (opcional)</Label>
            <Input placeholder="Notas adicionales para el registro..." />
          </div>
        </div>
        <DialogFooter className="gap-2 sm:gap-0">
          <Button variant="outline">Cancelar</Button>
          <Button variant="success">Confirmar Aprobacion</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  ),
};
