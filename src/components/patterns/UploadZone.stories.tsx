import type { Meta, StoryObj } from '@storybook/react';
import { UploadZone } from './UploadZone';

const meta: Meta<typeof UploadZone> = {
  title: 'Patterns/UploadZone',
  component: UploadZone,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: 'Upload zone pattern with drag-and-drop area, file validation, progress tracking, and success/error states.',
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof UploadZone>;

export const Default: Story = {
  render: () => <UploadZone />,
};
