import type { Meta, StoryObj } from '@storybook/react';
import { ExportData, type ExportColumn } from './ExportData';

const meta: Meta<typeof ExportData> = {
  title: 'Advanced/ExportData',
  component: ExportData,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component:
          'Export data utility with CSV/Excel support. Opens a configuration dialog for filename, column selection, and options. Includes preview dialog showing first 5 rows.',
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof ExportData>;

const sampleData = [
  { cufe: 'CUFE-001', pagador: 'Grupo Exito S.A.', nit: '900.123.456-7', monto: 45200000, estado: 'Aprobada', fecha: '2024-03-15' },
  { cufe: 'CUFE-002', pagador: 'Ecopetrol S.A.', nit: '860.002.789-0', monto: 23100000, estado: 'Pendiente', fecha: '2024-03-22' },
  { cufe: 'CUFE-003', pagador: 'Bancolombia S.A.', nit: '890.903.938-8', monto: 67800000, estado: 'En Proceso', fecha: '2024-04-01' },
  { cufe: 'CUFE-004', pagador: 'Nutresa S.A.', nit: '890.900.148-5', monto: 12500000, estado: 'Rechazada', fecha: '2024-02-28' },
  { cufe: 'CUFE-005', pagador: 'ISA S.A.', nit: '860.016.610-3', monto: 8900000, estado: 'Aprobada', fecha: '2024-03-10' },
  { cufe: 'CUFE-006', pagador: 'Argos S.A.', nit: '890.100.251-1', monto: 34700000, estado: 'Pendiente', fecha: '2024-04-05' },
];

const availableColumns: ExportColumn[] = [
  { key: 'cufe', label: 'CUFE' },
  { key: 'pagador', label: 'Pagador' },
  { key: 'nit', label: 'NIT' },
  { key: 'monto', label: 'Monto', format: (v) => `$${Number(v).toLocaleString('es-CO')}` },
  { key: 'estado', label: 'Estado' },
  { key: 'fecha', label: 'Fecha' },
];

export const Default: Story = {
  render: () => (
    <ExportData
      data={sampleData}
      defaultFilename="facturas_operacion"
      availableColumns={availableColumns}
      onExport={(format, config) => console.log('Export:', format, config)}
    />
  ),
};

export const WithoutColumns: Story = {
  name: 'Auto-detect Columns',
  render: () => (
    <ExportData
      data={sampleData}
      defaultFilename="export_auto"
      onExport={(format) => console.log('Export format:', format)}
    />
  ),
};
