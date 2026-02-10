import type { Meta, StoryObj } from '@storybook/react';
import { Spinner, PageLoader, CardSkeleton, TableSkeleton, ButtonLoader, DotLoader } from './loading-states';
import { Button } from './button';

const meta: Meta = {
  title: 'UI/Loading States',
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component:
          'Collection of loading state components: spinners, page loaders, skeleton patterns, and dot loaders. These use the DSM primary color for consistency.',
      },
    },
  },
};

export default meta;
type Story = StoryObj;

export const SpinnerDefault: Story = {
  name: 'Spinner',
  render: () => <Spinner />,
};

export const DotLoaderDefault: Story = {
  name: 'Dot Loader',
  render: () => <DotLoader />,
};

export const ButtonWithLoader: Story = {
  name: 'Button with Loader',
  render: () => (
    <Button disabled>
      <ButtonLoader />
      Procesando...
    </Button>
  ),
};

export const CardSkeletonDefault: Story = {
  name: 'Card Skeleton',
  render: () => (
    <div className="max-w-sm">
      <CardSkeleton />
    </div>
  ),
};

export const TableSkeletonDefault: Story = {
  name: 'Table Skeleton',
  render: () => (
    <div className="max-w-2xl">
      <TableSkeleton rows={4} />
    </div>
  ),
};

export const PageLoaderDefault: Story = {
  name: 'Page Loader (overlay)',
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        story: 'Full-screen overlay loader with backdrop blur. Fixed positioning — shown here in a constrained container for demo purposes.',
      },
    },
  },
  render: () => (
    <div className="relative h-[400px] w-full border rounded-lg overflow-hidden">
      <div className="p-8 space-y-4">
        <div className="h-8 w-48 bg-muted rounded" />
        <div className="h-4 w-96 bg-muted rounded" />
        <div className="h-64 w-full bg-muted rounded" />
      </div>
      <div className="absolute inset-0 z-50 flex items-center justify-center bg-background/80 backdrop-blur-sm">
        <div className="flex flex-col items-center gap-4">
          <Spinner />
          <p className="text-sm text-muted-foreground animate-pulse">
            Cargando aplicación...
          </p>
        </div>
      </div>
    </div>
  ),
};

export const AllLoadingStates: Story = {
  name: 'All Loading States',
  render: () => (
    <div className="space-y-8">
      <div>
        <p className="text-sm text-muted-foreground mb-2">Spinner</p>
        <Spinner />
      </div>
      <div>
        <p className="text-sm text-muted-foreground mb-2">Dot Loader</p>
        <DotLoader />
      </div>
      <div>
        <p className="text-sm text-muted-foreground mb-2">Button Loader</p>
        <div className="flex gap-2">
          <Button disabled>
            <ButtonLoader />
            Guardando...
          </Button>
          <Button variant="outline" disabled>
            <ButtonLoader />
            Cargando...
          </Button>
        </div>
      </div>
      <div>
        <p className="text-sm text-muted-foreground mb-2">Card Skeleton</p>
        <div className="max-w-sm">
          <CardSkeleton />
        </div>
      </div>
    </div>
  ),
};
