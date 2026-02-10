import type { Meta, StoryObj } from '@storybook/react';
import { LoadingOverlay, ButtonLoading, InlineSpinner } from './loading-overlay';
import { Button } from './button';
import { LoadingProvider, useLoading } from '../providers/LoadingProvider';
import React from 'react';

const meta: Meta<typeof LoadingOverlay> = {
  title: 'UI/LoadingOverlay',
  component: LoadingOverlay,
  tags: ['autodocs'],
  decorators: [
    (Story) => (
      <LoadingProvider>
        <Story />
      </LoadingProvider>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof LoadingOverlay>;

// Componente auxiliar para disparar el loading
const LoadingDemo = ({ variant }: { variant: 'spinner' | 'dots' | 'bar' }) => {
  const { showLoading, hideLoading } = useLoading();

  const handleLoad = () => {
    showLoading({ message: 'Processing your request...', type: 'overlay' });
    setTimeout(() => {
      hideLoading();
    }, 3000);
  };

  return (
    <div className="space-y-4">
      <Button onClick={handleLoad}>Show {variant} Overlay (3s)</Button>
      <LoadingOverlay variant={variant} />
    </div>
  );
};

export const SpinnerVariant: Story = {
  render: () => <LoadingDemo variant="spinner" />,
};

export const DotsVariant: Story = {
  render: () => <LoadingDemo variant="dots" />,
};

export const BarVariant: Story = {
  render: () => <LoadingDemo variant="bar" />,
};

export const ButtonStates: Story = {
  render: () => {
    const [isLoading, setIsLoading] = React.useState(false);
    return (
      <div className="flex gap-4">
        <Button onClick={() => setIsLoading(!isLoading)}>
          <ButtonLoading isLoading={isLoading} loadingText="Saving...">
            Save Changes
          </ButtonLoading>
        </Button>
        
        <div className="flex items-center gap-2 border p-2 rounded">
          <span>Sync Status:</span>
          <InlineSpinner size="sm" />
        </div>
      </div>
    );
  },
};
