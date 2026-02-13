/**
 * Alert Component Tests (G2)
 *
 * Tests for Alert, AlertTitle, and AlertDescription.
 * Validates all semantic variants and accessibility attributes.
 *
 * @version 0.1.1
 */

import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { Alert, AlertTitle, AlertDescription } from '../../components/ui/alert';

describe('Alert', () => {
  // --- Rendering ---

  it('renders with default variant', () => {
    render(<Alert>Default alert</Alert>);
    const alert = screen.getByRole('alert');
    expect(alert).toBeInTheDocument();
    expect(alert).toHaveAttribute('data-slot', 'alert');
  });

  it('renders children correctly', () => {
    render(<Alert>Operation completed successfully</Alert>);
    expect(screen.getByText('Operation completed successfully')).toBeInTheDocument();
  });

  it('has role="alert" for accessibility', () => {
    render(<Alert>Accessible alert</Alert>);
    const alert = screen.getByRole('alert');
    expect(alert).toBeInTheDocument();
  });

  // --- Variants ---

  it('applies default variant classes', () => {
    render(<Alert>Default</Alert>);
    const alert = screen.getByRole('alert');
    expect(alert.className).toContain('bg-card');
  });

  it('applies destructive variant', () => {
    render(<Alert variant="destructive">Error occurred</Alert>);
    const alert = screen.getByRole('alert');
    expect(alert.className).toContain('bg-red-50');
    expect(alert.className).toContain('border-red-300');
  });

  it('applies success variant', () => {
    render(<Alert variant="success">Invoice approved</Alert>);
    const alert = screen.getByRole('alert');
    expect(alert.className).toContain('bg-green-50');
    expect(alert.className).toContain('border-green-300');
  });

  it('applies warning variant', () => {
    render(<Alert variant="warning">Pending review</Alert>);
    const alert = screen.getByRole('alert');
    expect(alert.className).toContain('bg-amber-50');
    expect(alert.className).toContain('border-amber-300');
  });

  it('applies info variant', () => {
    render(<Alert variant="info">New update available</Alert>);
    const alert = screen.getByRole('alert');
    expect(alert.className).toContain('bg-blue-50');
    expect(alert.className).toContain('border-blue-300');
  });

  // --- Custom className ---

  it('merges custom className', () => {
    render(<Alert className="my-alert">Custom</Alert>);
    const alert = screen.getByRole('alert');
    expect(alert.className).toContain('my-alert');
  });
});

describe('AlertTitle', () => {
  it('renders with data-slot attribute', () => {
    render(<AlertTitle data-testid="title">Title</AlertTitle>);
    const title = screen.getByTestId('title');
    expect(title).toHaveAttribute('data-slot', 'alert-title');
  });

  it('renders children text', () => {
    render(<AlertTitle>Invoice Error</AlertTitle>);
    expect(screen.getByText('Invoice Error')).toBeInTheDocument();
  });

  it('applies font-medium tracking', () => {
    render(<AlertTitle data-testid="title">Styled</AlertTitle>);
    const title = screen.getByTestId('title');
    expect(title.className).toContain('font-medium');
    expect(title.className).toContain('tracking-tight');
  });
});

describe('AlertDescription', () => {
  it('renders with data-slot attribute', () => {
    render(<AlertDescription data-testid="desc">Description</AlertDescription>);
    const desc = screen.getByTestId('desc');
    expect(desc).toHaveAttribute('data-slot', 'alert-description');
  });

  it('renders children text', () => {
    render(<AlertDescription>The invoice has been rejected by the payor.</AlertDescription>);
    expect(screen.getByText('The invoice has been rejected by the payor.')).toBeInTheDocument();
  });
});

describe('Alert composition', () => {
  it('renders a complete alert with title and description', () => {
    render(
      <Alert variant="success">
        <AlertTitle>Operation Successful</AlertTitle>
        <AlertDescription>
          Your factoring operation has been processed.
        </AlertDescription>
      </Alert>
    );

    const alert = screen.getByRole('alert');
    expect(alert).toBeInTheDocument();
    expect(screen.getByText('Operation Successful')).toBeInTheDocument();
    expect(screen.getByText('Your factoring operation has been processed.')).toBeInTheDocument();
  });
});
