/**
 * ErrorBoundary Component Tests (G14 Batch 2)
 *
 * Tests for ErrorBoundary (class component).
 * Validates error catching, fallback rendering, and reset behavior.
 *
 * @version 0.2.3
 */

import React from 'react';
import { describe, it, expect, vi, beforeEach } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { ErrorBoundary } from '../../components/ui/error-boundary';

// Component that throws on render
function ThrowingComponent({ shouldThrow }: { shouldThrow: boolean }) {
  if (shouldThrow) {
    throw new Error('Test error message');
  }
  return <div>Normal content</div>;
}

describe('ErrorBoundary', () => {
  // Suppress console.error for intentional errors during tests
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  let consoleErrorSpy: any;

  beforeEach(() => {
    consoleErrorSpy = vi.spyOn(console, 'error').mockImplementation(() => {});
  });

  // --- Normal rendering ---

  it('renders children when no error', () => {
    render(
      <ErrorBoundary>
        <div>Child content</div>
      </ErrorBoundary>
    );
    expect(screen.getByText('Child content')).toBeInTheDocument();
  });

  // --- Error catching ---

  it('catches errors and shows default fallback', () => {
    render(
      <ErrorBoundary>
        <ThrowingComponent shouldThrow />
      </ErrorBoundary>
    );
    expect(screen.getByText('Something went wrong')).toBeInTheDocument();
    expect(screen.getByText('Test error message')).toBeInTheDocument();
  });

  it('shows custom fallback when provided', () => {
    render(
      <ErrorBoundary fallback={<div>Custom error UI</div>}>
        <ThrowingComponent shouldThrow />
      </ErrorBoundary>
    );
    expect(screen.getByText('Custom error UI')).toBeInTheDocument();
    expect(screen.queryByText('Something went wrong')).not.toBeInTheDocument();
  });

  it('shows generic message when error has no message', () => {
    const ThrowsGenericError = (): React.ReactElement => {
      throw new Error();
    };
    render(
      <ErrorBoundary>
        <ThrowsGenericError />
      </ErrorBoundary>
    );
    expect(screen.getByText('Something went wrong')).toBeInTheDocument();
  });

  // --- Action buttons ---

  it('renders "Try again" button', () => {
    render(
      <ErrorBoundary>
        <ThrowingComponent shouldThrow />
      </ErrorBoundary>
    );
    expect(screen.getByText('Try again')).toBeInTheDocument();
  });

  it('renders "Reload page" button', () => {
    render(
      <ErrorBoundary>
        <ThrowingComponent shouldThrow />
      </ErrorBoundary>
    );
    expect(screen.getByText('Reload page')).toBeInTheDocument();
  });

  it('calls onReset when "Try again" is clicked', async () => {
    const user = userEvent.setup();
    const onReset = vi.fn();
    render(
      <ErrorBoundary onReset={onReset}>
        <ThrowingComponent shouldThrow />
      </ErrorBoundary>
    );

    await user.click(screen.getByText('Try again'));
    expect(onReset).toHaveBeenCalledTimes(1);
  });

  // --- Console error logging ---

  it('logs error to console.error', () => {
    render(
      <ErrorBoundary>
        <ThrowingComponent shouldThrow />
      </ErrorBoundary>
    );
    expect(consoleErrorSpy).toHaveBeenCalled();
  });
});