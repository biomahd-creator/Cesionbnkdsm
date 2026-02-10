import type { Meta, StoryObj } from '@storybook/react';
import { DocumentVerificationStatus, type DocumentItem } from './DocumentVerificationStatus';

const meta: Meta<typeof DocumentVerificationStatus> = {
  title: 'Factoring/DocumentVerificationStatus',
  component: DocumentVerificationStatus,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component:
          'Document verification checklist with progress bar. Each doc has a status (verified, pending, rejected, missing, processing) with color-coded icons and upload action for missing docs.',
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof DocumentVerificationStatus>;

const documents: DocumentItem[] = [
  { id: '1', name: 'Pagare', status: 'verified', timestamp: '08 Feb 2026, 10:00', required: true },
  { id: '2', name: 'Carta de Endoso', status: 'verified', timestamp: '08 Feb 2026, 10:05', required: true },
  { id: '3', name: 'Certificado de Existencia', status: 'pending', message: 'En revision por compliance', required: true },
  { id: '4', name: 'Balance General', status: 'processing', message: 'Procesando OCR', required: true },
  { id: '5', name: 'Declaracion de Renta', status: 'missing', required: true },
  { id: '6', name: 'Referencias Comerciales', status: 'rejected', message: 'Documento ilegible, favor reenviar', required: false },
];

export const Default: Story = {
  args: {
    documents,
    className: 'max-w-md',
    onUpload: (docId) => console.log('Upload for:', docId),
  },
};

export const AllVerified: Story = {
  name: 'All Verified',
  args: {
    documents: documents.map((d) => ({ ...d, status: 'verified' as const, timestamp: '08 Feb 2026' })),
    className: 'max-w-md',
  },
};

export const AllMissing: Story = {
  name: 'All Missing',
  args: {
    documents: documents.map((d) => ({ ...d, status: 'missing' as const })),
    className: 'max-w-md',
    onUpload: (docId) => console.log('Upload:', docId),
  },
};
