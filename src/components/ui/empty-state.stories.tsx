import type { Meta, StoryObj } from '@storybook/react';
import { EmptyState } from './empty-state';
import {
  FileSearch, ShoppingCart, Inbox, FileX, BarChart3,
  Receipt, Users, FolderOpen,
} from 'lucide-react';

const meta: Meta<typeof EmptyState> = {
  title: 'UI/EmptyState',
  component: EmptyState,
  tags: ['autodocs'],
  argTypes: {
    title: { control: 'text' },
    description: { control: 'text' },
    icon: { control: false },
  },
  parameters: {
    docs: {
      description: {
        component:
          'Empty state placeholder with icon, title, description, and optional CTA button. Uses dashed border and centered layout with fade-in animation.',
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof EmptyState>;

export const Default: Story = {
  args: {
    title: 'No se encontraron archivos',
    description: 'Aun no has subido ningun archivo. Comienza subiendo tu primer documento.',
    action: {
      label: 'Subir Archivo',
      onClick: () => alert('Upload clicked'),
    },
  },
};

export const SearchNoResults: Story = {
  args: {
    icon: FileSearch,
    title: 'Sin resultados',
    description: 'No encontramos resultados para tu busqueda. Intenta con otros terminos.',
  },
};

export const EmptyInbox: Story = {
  args: {
    icon: Inbox,
    title: 'Bandeja vacia',
    description: 'No tienes notificaciones pendientes en este momento.',
  },
};

export const NoData: Story = {
  args: {
    icon: BarChart3,
    title: 'Sin datos disponibles',
    description: 'No hay datos suficientes para generar el reporte. Selecciona un rango de fechas diferente.',
    action: {
      label: 'Cambiar Filtros',
      onClick: () => console.log('change filters'),
    },
  },
};

/* ════════════════════════════════════════════
   REAL-WORLD: Factoring Empty States
   ════════════════════════════════════════════ */

export const FactoringNoInvoices: Story = {
  name: 'Factoring: Sin Facturas',
  args: {
    icon: Receipt,
    title: 'No hay facturas cargadas',
    description: 'Aun no se han cargado facturas para esta operacion. Usa el boton para importar facturas desde el sistema.',
    action: {
      label: 'Cargar Facturas',
      onClick: () => console.log('load invoices'),
    },
  },
};

export const FactoringNoOperations: Story = {
  name: 'Factoring: Sin Operaciones',
  args: {
    icon: FolderOpen,
    title: 'Sin operaciones activas',
    description: 'No tienes operaciones de factoring en proceso. Crea una nueva operacion para comenzar.',
    action: {
      label: 'Nueva Operacion',
      onClick: () => console.log('new operation'),
    },
  },
};

export const FactoringNoPayors: Story = {
  name: 'Factoring: Sin Pagadores',
  args: {
    icon: Users,
    title: 'Sin pagadores registrados',
    description: 'No se han encontrado pagadores asociados a tu cuenta. Contacta a tu ejecutivo para configurar los pagadores.',
  },
};

export const FactoringDocumentError: Story = {
  name: 'Factoring: Error de Documentos',
  args: {
    icon: FileX,
    title: 'Documentos no disponibles',
    description: 'No se pudieron cargar los documentos de soporte. Verifica tu conexion e intenta nuevamente.',
    action: {
      label: 'Reintentar',
      onClick: () => console.log('retry'),
    },
  },
};
