import type { Meta, StoryObj } from '@storybook/react';
import { InputFile } from './input-file';
import { Label } from './label';

const meta: Meta<typeof InputFile> = {
  title: 'UI/InputFile',
  component: InputFile,
  tags: ['autodocs'],
  argTypes: {
    maxFiles: { control: { type: 'number', min: 1, max: 20 } },
    showPreview: { control: 'boolean' },
    accept: { control: 'text' },
    disabled: { control: 'boolean' },
  },
  parameters: {
    docs: {
      description: {
        component:
          'Drag-and-drop file input with preview list. Supports single/multi file, file type restrictions via `accept`, and removable file items.',
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof InputFile>;

export const Default: Story = {
  args: { maxFiles: 1, showPreview: true },
};

export const MultipleFiles: Story = {
  name: 'Multiple Files (up to 5)',
  args: { maxFiles: 5, showPreview: true },
};

export const NoPreview: Story = {
  name: 'Without Preview',
  args: { maxFiles: 1, showPreview: false },
};

export const PdfOnly: Story = {
  name: 'PDF Only',
  render: () => (
    <div className="max-w-md space-y-1.5">
      <Label>Documento PDF</Label>
      <InputFile maxFiles={1} accept=".pdf,application/pdf" showPreview />
      <p className="text-muted-foreground text-xs">Solo archivos PDF (max 10MB)</p>
    </div>
  ),
};

export const ImagesOnly: Story = {
  name: 'Images Only',
  render: () => (
    <div className="max-w-md space-y-1.5">
      <Label>Imagen</Label>
      <InputFile maxFiles={3} accept="image/*" showPreview />
      <p className="text-muted-foreground text-xs">JPG, PNG o WebP (max 3 archivos)</p>
    </div>
  ),
};

export const SpreadsheetOnly: Story = {
  name: 'Spreadsheet Only (Excel/CSV)',
  render: () => (
    <div className="max-w-md space-y-1.5">
      <Label>Archivo de facturas</Label>
      <InputFile maxFiles={1} accept=".csv,.xlsx,.xls" showPreview />
      <p className="text-muted-foreground text-xs">Archivos CSV o Excel con el formato requerido</p>
    </div>
  ),
};

/* ════════════════════════════════════════════
   REAL-WORLD: Factoring Invoice Upload
   ════════════════════════════════════════════ */

export const FactoringInvoiceUpload: Story = {
  name: 'Real World: Factoring Upload',
  render: () => (
    <div className="rounded-lg border p-6 max-w-lg space-y-4">
      <div>
        <h3 className="text-base font-medium">Cargar facturas</h3>
        <p className="text-sm text-muted-foreground mt-1">
          Sube el archivo CSV o Excel con las facturas a descontar. El formato debe
          incluir: CUFE, NIT pagador, valor, fecha emision y fecha vencimiento.
        </p>
      </div>
      <InputFile
        maxFiles={1}
        accept=".csv,.xlsx,.xls"
        showPreview
        onFilesChange={(files) => console.log('Files:', files)}
      />
    </div>
  ),
};

export const FactoringDocumentSupport: Story = {
  name: 'Real World: Supporting Documents',
  render: () => (
    <div className="rounded-lg border p-6 max-w-lg space-y-4">
      <div>
        <h3 className="text-base font-medium">Documentos de soporte</h3>
        <p className="text-sm text-muted-foreground mt-1">
          Adjunta los documentos de soporte: pagare, carta de endoso, certificado de camara
          de comercio. Maximo 10 archivos.
        </p>
      </div>
      <InputFile
        maxFiles={10}
        accept=".pdf,.jpg,.jpeg,.png"
        showPreview
        onFilesChange={(files) => console.log('Files:', files)}
      />
    </div>
  ),
};
