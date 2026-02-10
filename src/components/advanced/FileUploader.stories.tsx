import type { Meta, StoryObj } from '@storybook/react';
import { FileUploader } from './FileUploader';

const meta: Meta<typeof FileUploader> = {
  title: 'Advanced/FileUploader',
  component: FileUploader,
  tags: ['autodocs'],
  argTypes: {
    maxFiles: { control: { type: 'number', min: 1, max: 20 } },
    maxSize: { control: { type: 'number', min: 1048576, max: 52428800, step: 1048576 } },
  },
  parameters: {
    docs: {
      description: {
        component:
          'Advanced file uploader with drag-and-drop, progress simulation, file previews (images), type detection icons, and error handling. Supports file type and size validation.',
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof FileUploader>;

export const Default: Story = {
  args: {
    maxFiles: 5,
    maxSize: 5 * 1024 * 1024,
    accept: ['image/*', 'application/pdf'],
    onUpload: (files) => console.log('Uploaded:', files),
  },
};

export const SingleFile: Story = {
  name: 'Single File Only',
  args: {
    maxFiles: 1,
    accept: ['application/pdf'],
    onUpload: (files) => console.log('Uploaded:', files),
  },
};

export const ImagesOnly: Story = {
  name: 'Images Only (10MB limit)',
  args: {
    maxFiles: 10,
    maxSize: 10 * 1024 * 1024,
    accept: ['image/*'],
  },
};

export const FactoringDocUpload: Story = {
  name: 'Real World: Factoring Documents',
  render: () => (
    <div className="space-y-3 max-w-lg">
      <div>
        <h3 className="text-base font-medium">Documentos de Soporte</h3>
        <p className="text-sm text-muted-foreground mt-1">
          Sube pagare, carta de endoso, y certificados. Max 10 archivos, 10MB c/u.
        </p>
      </div>
      <FileUploader
        maxFiles={10}
        maxSize={10 * 1024 * 1024}
        accept={['application/pdf', 'image/*', '.doc', '.docx']}
        onUpload={(files) => console.log('Docs:', files)}
      />
    </div>
  ),
};
