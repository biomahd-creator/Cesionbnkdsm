import type { Meta, StoryObj } from '@storybook/react';
import { ErrorBoundary } from './error-boundary';
import { Button } from './button';
import { useState } from 'react';

const meta: Meta<typeof ErrorBoundary> = {
  title: 'UI/ErrorBoundary',
  component: ErrorBoundary,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof ErrorBoundary>;

// Componente que falla a propósito
const BuggyComponent = () => {
  throw new Error("I crashed!");
};

// Wrapper para controlar el crash
const ErrorSimulator = () => {
  const [shouldCrash, setShouldCrash] = useState(false);

  if (shouldCrash) {
    return <BuggyComponent />;
  }

  return (
    <div className="p-4 border rounded bg-green-50 text-green-800">
      <h3 className="font-bold">Everything is fine</h3>
      <p className="mb-4">Click the button below to crash this component.</p>
      <Button variant="destructive" onClick={() => setShouldCrash(true)}>
        Throw Error
      </Button>
    </div>
  );
};

export const Default: Story = {
  render: () => (
    <ErrorBoundary onReset={() => console.log("Reset clicked")}>
      <ErrorSimulator />
    </ErrorBoundary>
  ),
};

export const CustomFallback: Story = {
  render: () => (
    <ErrorBoundary 
      fallback={
        <div className="p-10 bg-orange-100 text-orange-800 text-center rounded">
          <h1 className="text-4xl mb-4">🔥</h1>
          <p className="font-bold">This is a custom error fallback!</p>
          <Button className="mt-4" onClick={() => window.location.reload()}>Reload</Button>
        </div>
      }
    >
      <ErrorSimulator />
    </ErrorBoundary>
  ),
};
