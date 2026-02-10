import type { Meta, StoryObj } from '@storybook/react';
import { FunnelChart, type FunnelStage } from './FunnelChart';

const meta: Meta<typeof FunnelChart> = {
  title: 'Advanced/FunnelChart',
  component: FunnelChart,
  tags: ['autodocs'],
  argTypes: {
    showPercentages: { control: 'boolean' },
    showDropoff: { control: 'boolean' },
    height: { control: { type: 'range', min: 200, max: 600, step: 50 } },
  },
  parameters: {
    docs: {
      description: {
        component:
          'Funnel chart for visualizing conversion/process stages. Shows drop-off rates between stages, overall conversion rate, and summary stats. Uses CSS custom properties for dynamic sizing.',
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof FunnelChart>;

const salesFunnel: FunnelStage[] = [
  { name: 'Visitas', value: 10000, description: 'Total de visitantes al sitio' },
  { name: 'Registros', value: 3500, description: 'Usuarios que se registraron' },
  { name: 'Leads', value: 1200, description: 'Leads calificados' },
  { name: 'Propuestas', value: 450, description: 'Propuestas enviadas' },
  { name: 'Cerrados', value: 120, description: 'Negocios cerrados' },
];

const factoringFunnel: FunnelStage[] = [
  { name: 'Facturas Recibidas', value: 500, description: 'Total facturas cargadas al sistema' },
  { name: 'Validacion DIAN', value: 420, description: 'Facturas con CUFE valido' },
  { name: 'Verificacion Pagador', value: 380, description: 'Pagador con cupo disponible' },
  { name: 'Aprobacion Comite', value: 310, description: 'Aprobadas por comite de credito' },
  { name: 'Desembolsadas', value: 295, description: 'Desembolso completado' },
];

export const Default: Story = {
  args: {
    data: salesFunnel,
    title: 'Sales Funnel',
    description: 'Conversion pipeline Q1 2026',
  },
};

export const WithoutCard: Story = {
  name: 'Standalone (No Card)',
  args: { data: salesFunnel },
};

export const HideDropoff: Story = {
  name: 'Without Drop-off',
  args: {
    data: salesFunnel,
    showDropoff: false,
    title: 'Pipeline',
    description: 'Sin indicadores de drop-off',
  },
};

export const FactoringPipeline: Story = {
  name: 'Real World: Factoring Pipeline',
  args: {
    data: factoringFunnel,
    title: 'Pipeline de Factoring',
    description: 'Flujo de facturas — Febrero 2026',
  },
};
