import type { Meta, StoryObj } from '@storybook/react';
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectSeparator, SelectTrigger, SelectValue } from './select';
import { Label } from './label';

const meta: Meta<typeof Select> = {
  title: 'UI/Select',
  component: Select,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component:
          'Select component built on Radix UI Select. Supports groups, labels, separators, and disabled items. Uses DSM input tokens for border/background.',
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof Select>;

export const Default: Story = {
  render: () => (
    <Select>
      <SelectTrigger className="w-[220px]">
        <SelectValue placeholder="Selecciona una opcion" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>Tipo de Operacion</SelectLabel>
          <SelectItem value="factoring">Factoring</SelectItem>
          <SelectItem value="confirming">Confirming</SelectItem>
          <SelectItem value="leasing">Leasing</SelectItem>
          <SelectItem value="forfaiting">Forfaiting</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  ),
};

export const WithLabel: Story = {
  render: () => (
    <div className="grid w-full max-w-sm gap-1.5">
      <Label>Moneda</Label>
      <Select defaultValue="cop">
        <SelectTrigger>
          <SelectValue />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="cop">COP — Peso Colombiano</SelectItem>
          <SelectItem value="usd">USD — Dolar Americano</SelectItem>
          <SelectItem value="eur">EUR — Euro</SelectItem>
        </SelectContent>
      </Select>
    </div>
  ),
};

export const Disabled: Story = {
  render: () => (
    <Select disabled>
      <SelectTrigger className="w-[220px]">
        <SelectValue placeholder="Deshabilitado" />
      </SelectTrigger>
    </Select>
  ),
};

export const WithGroups: Story = {
  name: 'With Groups & Separators',
  render: () => (
    <Select>
      <SelectTrigger className="w-[280px]">
        <SelectValue placeholder="Selecciona pagador" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>Sector Financiero</SelectLabel>
          <SelectItem value="bancolombia">Bancolombia S.A.</SelectItem>
          <SelectItem value="davivienda">Davivienda S.A.</SelectItem>
          <SelectItem value="bbva">BBVA Colombia</SelectItem>
        </SelectGroup>
        <SelectSeparator />
        <SelectGroup>
          <SelectLabel>Sector Industrial</SelectLabel>
          <SelectItem value="exito">Grupo Exito S.A.</SelectItem>
          <SelectItem value="nutresa">Nutresa S.A.</SelectItem>
          <SelectItem value="argos">Cementos Argos S.A.</SelectItem>
        </SelectGroup>
        <SelectSeparator />
        <SelectGroup>
          <SelectLabel>Sector Energetico</SelectLabel>
          <SelectItem value="ecopetrol">Ecopetrol S.A.</SelectItem>
          <SelectItem value="isa">ISA S.A.</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  ),
};

export const WithDisabledItems: Story = {
  name: 'With Disabled Items',
  render: () => (
    <Select>
      <SelectTrigger className="w-[250px]">
        <SelectValue placeholder="Selecciona tasa" />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="1.0">1.0% mensual</SelectItem>
        <SelectItem value="1.2">1.2% mensual</SelectItem>
        <SelectItem value="1.5">1.5% mensual</SelectItem>
        <SelectItem value="2.0" disabled>2.0% mensual (no disponible)</SelectItem>
      </SelectContent>
    </Select>
  ),
};

/* ════════════════════════════════════════════
   REAL-WORLD: Factoring Filters
   ════════════════════════════════════════════ */

export const FactoringFilters: Story = {
  name: 'Real World: Factoring Filters',
  render: () => (
    <div className="flex gap-3 items-end flex-wrap">
      <div className="space-y-1.5">
        <Label>Estado</Label>
        <Select>
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Todos" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">Todos</SelectItem>
            <SelectItem value="approved">Aprobadas</SelectItem>
            <SelectItem value="pending">Pendientes</SelectItem>
            <SelectItem value="rejected">Rechazadas</SelectItem>
            <SelectItem value="processing">En Proceso</SelectItem>
          </SelectContent>
        </Select>
      </div>
      <div className="space-y-1.5">
        <Label>Pagador</Label>
        <Select>
          <SelectTrigger className="w-[200px]">
            <SelectValue placeholder="Todos" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">Todos</SelectItem>
            <SelectItem value="exito">Grupo Exito</SelectItem>
            <SelectItem value="ecopetrol">Ecopetrol</SelectItem>
            <SelectItem value="bancolombia">Bancolombia</SelectItem>
          </SelectContent>
        </Select>
      </div>
      <div className="space-y-1.5">
        <Label>Periodo</Label>
        <Select defaultValue="month">
          <SelectTrigger className="w-[160px]">
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="week">Ultima semana</SelectItem>
            <SelectItem value="month">Ultimo mes</SelectItem>
            <SelectItem value="quarter">Ultimo trimestre</SelectItem>
            <SelectItem value="year">Ultimo ano</SelectItem>
          </SelectContent>
        </Select>
      </div>
    </div>
  ),
};
