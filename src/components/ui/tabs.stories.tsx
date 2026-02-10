import type { Meta, StoryObj } from '@storybook/react';
import { Button } from './button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from './card';
import { Input } from './input';
import { Label } from './label';
import { Badge } from './badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './tabs';

const meta: Meta<typeof Tabs> = {
  title: 'UI/Tabs',
  component: Tabs,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component:
          'Tabs built on Radix UI Tabs. DSM convention: all `TabsList` use constrained pattern `grid w-full grid-cols-N max-w-lg` (or `max-w-xl` for 5+ columns).',
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof Tabs>;

export const Default: Story = {
  name: 'Two Tabs',
  render: () => (
    <Tabs defaultValue="account" className="w-full max-w-lg">
      <TabsList className="grid w-full grid-cols-2 max-w-lg">
        <TabsTrigger value="account">Cuenta</TabsTrigger>
        <TabsTrigger value="password">Contrasena</TabsTrigger>
      </TabsList>
      <TabsContent value="account">
        <Card>
          <CardHeader>
            <CardTitle>Cuenta</CardTitle>
            <CardDescription>Modifica los datos de tu cuenta.</CardDescription>
          </CardHeader>
          <CardContent className="space-y-2">
            <div className="space-y-1">
              <Label htmlFor="tab-name">Nombre</Label>
              <Input id="tab-name" defaultValue="Maria Gonzalez" />
            </div>
            <div className="space-y-1">
              <Label htmlFor="tab-user">Usuario</Label>
              <Input id="tab-user" defaultValue="@mgonzalez" />
            </div>
          </CardContent>
          <CardFooter>
            <Button>Guardar</Button>
          </CardFooter>
        </Card>
      </TabsContent>
      <TabsContent value="password">
        <Card>
          <CardHeader>
            <CardTitle>Contrasena</CardTitle>
            <CardDescription>Cambia tu contrasena. Se cerrara tu sesion despues.</CardDescription>
          </CardHeader>
          <CardContent className="space-y-2">
            <div className="space-y-1">
              <Label htmlFor="tab-current">Actual</Label>
              <Input id="tab-current" type="password" />
            </div>
            <div className="space-y-1">
              <Label htmlFor="tab-new">Nueva</Label>
              <Input id="tab-new" type="password" />
            </div>
          </CardContent>
          <CardFooter>
            <Button>Guardar contrasena</Button>
          </CardFooter>
        </Card>
      </TabsContent>
    </Tabs>
  ),
};

export const ThreeColumns: Story = {
  name: 'Three Columns (Constrained)',
  render: () => (
    <Tabs defaultValue="general" className="w-full max-w-lg">
      <TabsList className="grid w-full grid-cols-3 max-w-lg">
        <TabsTrigger value="general">General</TabsTrigger>
        <TabsTrigger value="seguridad">Seguridad</TabsTrigger>
        <TabsTrigger value="avanzado">Avanzado</TabsTrigger>
      </TabsList>
      <TabsContent value="general" className="mt-4">
        <p className="text-sm text-muted-foreground">Configuracion general de la cuenta.</p>
      </TabsContent>
      <TabsContent value="seguridad" className="mt-4">
        <p className="text-sm text-muted-foreground">Opciones de seguridad y autenticacion.</p>
      </TabsContent>
      <TabsContent value="avanzado" className="mt-4">
        <p className="text-sm text-muted-foreground">Configuraciones avanzadas del sistema.</p>
      </TabsContent>
    </Tabs>
  ),
};

export const FiveColumnsWide: Story = {
  name: 'Five Columns (max-w-xl)',
  render: () => (
    <Tabs defaultValue="resumen" className="w-full">
      <TabsList className="grid w-full grid-cols-5 max-w-xl">
        <TabsTrigger value="resumen">Resumen</TabsTrigger>
        <TabsTrigger value="facturas">Facturas</TabsTrigger>
        <TabsTrigger value="pagadores">Pagadores</TabsTrigger>
        <TabsTrigger value="tasas">Tasas</TabsTrigger>
        <TabsTrigger value="docs">Docs</TabsTrigger>
      </TabsList>
      <TabsContent value="resumen" className="mt-4">
        <p className="text-sm text-muted-foreground">Vista resumen de la operacion.</p>
      </TabsContent>
      <TabsContent value="facturas" className="mt-4">
        <p className="text-sm text-muted-foreground">Tabla de facturas cargadas.</p>
      </TabsContent>
      <TabsContent value="pagadores" className="mt-4">
        <p className="text-sm text-muted-foreground">Lista de pagadores asociados.</p>
      </TabsContent>
      <TabsContent value="tasas" className="mt-4">
        <p className="text-sm text-muted-foreground">Tasas de descuento vigentes.</p>
      </TabsContent>
      <TabsContent value="docs" className="mt-4">
        <p className="text-sm text-muted-foreground">Documentos de soporte.</p>
      </TabsContent>
    </Tabs>
  ),
};

/* ════════════════════════════════════════════
   WITH BADGES (count indicators)
   ════════════════════════════════════════════ */

export const WithBadges: Story = {
  name: 'With Count Badges',
  render: () => (
    <Tabs defaultValue="pending" className="w-full max-w-lg">
      <TabsList className="grid w-full grid-cols-3 max-w-lg">
        <TabsTrigger value="pending" className="gap-1.5">
          Pendientes <Badge variant="warning-soft" className="text-[10px] px-1.5 py-0">12</Badge>
        </TabsTrigger>
        <TabsTrigger value="approved" className="gap-1.5">
          Aprobadas <Badge variant="success-soft" className="text-[10px] px-1.5 py-0">45</Badge>
        </TabsTrigger>
        <TabsTrigger value="rejected" className="gap-1.5">
          Rechazadas <Badge variant="destructive-soft" className="text-[10px] px-1.5 py-0">3</Badge>
        </TabsTrigger>
      </TabsList>
      <TabsContent value="pending" className="mt-4">
        <p className="text-sm text-muted-foreground">12 facturas pendientes de revision.</p>
      </TabsContent>
      <TabsContent value="approved" className="mt-4">
        <p className="text-sm text-muted-foreground">45 facturas aprobadas para descuento.</p>
      </TabsContent>
      <TabsContent value="rejected" className="mt-4">
        <p className="text-sm text-muted-foreground">3 facturas rechazadas por validacion.</p>
      </TabsContent>
    </Tabs>
  ),
};

/* ════════════════════════════════════════════
   REAL-WORLD: Factoring Operation Detail
   ════════════════════════════════════════════ */

export const FactoringOperationTabs: Story = {
  name: 'Real World: Factoring Operation',
  render: () => (
    <Tabs defaultValue="summary" className="w-full">
      <TabsList className="grid w-full grid-cols-4 max-w-lg">
        <TabsTrigger value="summary">Resumen</TabsTrigger>
        <TabsTrigger value="invoices">Facturas</TabsTrigger>
        <TabsTrigger value="rates">Tasas</TabsTrigger>
        <TabsTrigger value="documents">Documentos</TabsTrigger>
      </TabsList>
      <TabsContent value="summary" className="mt-4">
        <Card>
          <CardHeader>
            <CardTitle>Operacion #OP-2024-0847</CardTitle>
            <CardDescription>Factoring con recurso — Grupo Exito S.A.</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 gap-4 text-sm">
              <div>
                <span className="text-muted-foreground">Monto Total</span>
                <p>$234,500,000 COP</p>
              </div>
              <div>
                <span className="text-muted-foreground">Estado</span>
                <div className="mt-1"><Badge variant="info-soft-outline">En Proceso</Badge></div>
              </div>
              <div>
                <span className="text-muted-foreground">Facturas</span>
                <p>12</p>
              </div>
              <div>
                <span className="text-muted-foreground">Plazo Promedio</span>
                <p>45 dias</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </TabsContent>
      <TabsContent value="invoices" className="mt-4">
        <p className="text-sm text-muted-foreground">Tabla de facturas de la operacion.</p>
      </TabsContent>
      <TabsContent value="rates" className="mt-4">
        <p className="text-sm text-muted-foreground">Configuracion de tasas de descuento.</p>
      </TabsContent>
      <TabsContent value="documents" className="mt-4">
        <p className="text-sm text-muted-foreground">Documentos de soporte adjuntos.</p>
      </TabsContent>
    </Tabs>
  ),
};
