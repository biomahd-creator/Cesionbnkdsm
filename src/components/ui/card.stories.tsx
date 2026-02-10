import type { Meta, StoryObj } from '@storybook/react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from './card';
import { Button } from './button';
import { Input } from './input';
import { Label } from './label';
import { Badge } from './badge';
import { Progress } from './progress';
import { TrendingUp, DollarSign, FileText, Users, ArrowUpRight } from 'lucide-react';

const meta: Meta<typeof Card> = {
  title: 'UI/Card',
  component: Card,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component:
          'Card component with header, content, footer sub-components. Uses `bg-card` / `text-card-foreground` tokens for theme-aware backgrounds. Pairs with DSM elevation shadows.',
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof Card>;

export const Default: Story = {
  render: () => (
    <Card className="w-[350px]">
      <CardHeader>
        <CardTitle>Crear proyecto</CardTitle>
        <CardDescription>Despliega tu nuevo proyecto en un clic.</CardDescription>
      </CardHeader>
      <CardContent>
        <form>
          <div className="grid w-full items-center gap-4">
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="card-name">Nombre</Label>
              <Input id="card-name" placeholder="Nombre del proyecto" />
            </div>
          </div>
        </form>
      </CardContent>
      <CardFooter className="flex justify-between">
        <Button variant="outline">Cancelar</Button>
        <Button>Crear</Button>
      </CardFooter>
    </Card>
  ),
};

export const ContentOnly: Story = {
  name: 'Content Only',
  render: () => (
    <Card className="w-[350px]">
      <CardContent className="pt-6">
        <p className="text-sm text-muted-foreground">
          Card simple con solo contenido, sin header ni footer.
        </p>
      </CardContent>
    </Card>
  ),
};

export const WithBadge: Story = {
  name: 'Header with Badge',
  render: () => (
    <Card className="w-[350px]">
      <CardHeader>
        <div className="flex items-center justify-between">
          <CardTitle>Operacion #OP-847</CardTitle>
          <Badge variant="success-soft-outline">Aprobada</Badge>
        </div>
        <CardDescription>Factoring con recurso — Grupo Exito S.A.</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-2 gap-3 text-sm">
          <div>
            <span className="text-muted-foreground">Monto</span>
            <p>$234,500,000</p>
          </div>
          <div>
            <span className="text-muted-foreground">Facturas</span>
            <p>12</p>
          </div>
        </div>
      </CardContent>
      <CardFooter>
        <Button variant="outline" className="w-full">Ver Detalle <ArrowUpRight /></Button>
      </CardFooter>
    </Card>
  ),
};

/* ════════════════════════════════════════════
   KPI STAT CARDS
   ════════════════════════════════════════════ */

export const StatCard: Story = {
  name: 'Stat Card Pattern',
  render: () => (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
      {[
        { title: 'Ingresos', value: '$1,234M', icon: DollarSign, change: '+12.5%', color: 'text-green-600 dark:text-green-400' },
        { title: 'Facturas', value: '2,345', icon: FileText, change: '+8.2%', color: 'text-blue-600 dark:text-blue-400' },
        { title: 'Clientes', value: '156', icon: Users, change: '+3.1%', color: 'text-amber-600 dark:text-amber-400' },
        { title: 'Crecimiento', value: '23.5%', icon: TrendingUp, change: '+2.4%', color: 'text-primary' },
      ].map((stat) => (
        <Card key={stat.title}>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm text-muted-foreground">{stat.title}</CardTitle>
            <stat.icon className={`size-4 ${stat.color}`} />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-semibold">{stat.value}</div>
            <p className={`text-xs mt-1 ${stat.color}`}>
              {stat.change} vs mes anterior
            </p>
          </CardContent>
        </Card>
      ))}
    </div>
  ),
};

/* ════════════════════════════════════════════
   WITH PROGRESS
   ════════════════════════════════════════════ */

export const WithProgress: Story = {
  name: 'With Progress Bar',
  render: () => (
    <Card className="w-[350px]">
      <CardHeader>
        <CardTitle>Cupo de Factoring</CardTitle>
        <CardDescription>Grupo Exito S.A.</CardDescription>
      </CardHeader>
      <CardContent className="space-y-3">
        <div className="flex justify-between text-sm">
          <span>Utilizado</span>
          <span className="text-amber-600 dark:text-amber-400">85%</span>
        </div>
        <Progress value={85} indicatorClassName="bg-amber-500 dark:bg-amber-400" />
        <div className="flex justify-between text-xs text-muted-foreground">
          <span>$425M de $500M</span>
          <span>$75M disponible</span>
        </div>
      </CardContent>
    </Card>
  ),
};

/* ════════════════════════════════════════════
   ELEVATION VARIANTS
   ════════════════════════════════════════════ */

export const ElevationLevels: Story = {
  name: 'Elevation Shadows',
  render: () => (
    <div className="flex flex-wrap gap-6">
      {[1, 2, 3, 4].map((level) => (
        <Card
          key={level}
          className="w-[200px]"
          style={{ boxShadow: `var(--shadow-elevation-${level})` }}
        >
          <CardContent className="pt-6 text-center">
            <p className="text-sm text-muted-foreground">Elevation {level}</p>
            <p className="text-xs text-muted-foreground mt-1">shadow-elevation-{level}</p>
          </CardContent>
        </Card>
      ))}
    </div>
  ),
};
