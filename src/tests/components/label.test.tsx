/**
 * Label Component Tests (G2)
 *
 * Tests for the Label component.
 * Validates rendering, accessibility, and styling.
 *
 * @version 0.1.1
 */

import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { Label } from '../../components/ui/label';

describe('Label', () => {
  it('renders with default props', () => {
    render(<Label data-testid="label">Email</Label>);
    const label = screen.getByTestId('label');
    expect(label).toBeInTheDocument();
    expect(label).toHaveAttribute('data-slot', 'label');
  });

  it('renders children text', () => {
    render(<Label>Invoice Number</Label>);
    expect(screen.getByText('Invoice Number')).toBeInTheDocument();
  });

  it('applies flex layout classes', () => {
    render(<Label data-testid="label">Flex label</Label>);
    const label = screen.getByTestId('label');
    expect(label.className).toContain('flex');
    expect(label.className).toContain('items-center');
  });

  it('supports htmlFor attribute', () => {
    render(<Label htmlFor="invoice-input">Invoice</Label>);
    const label = screen.getByText('Invoice');
    expect(label).toHaveAttribute('for', 'invoice-input');
  });

  it('merges custom className', () => {
    render(<Label data-testid="label" className="mb-2">Custom</Label>);
    const label = screen.getByTestId('label');
    expect(label.className).toContain('mb-2');
  });

  it('associates with an input via htmlFor', () => {
    render(
      <div>
        <Label htmlFor="amount">Amount</Label>
        <input id="amount" type="number" />
      </div>
    );

    const input = screen.getByLabelText('Amount');
    expect(input).toBeInTheDocument();
    expect(input).toHaveAttribute('type', 'number');
  });
});
