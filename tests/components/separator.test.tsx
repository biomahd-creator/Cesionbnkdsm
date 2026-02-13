/**
 * Separator Component Tests (G2)
 *
 * Tests for the Separator component.
 * Validates orientation variants, decorative prop, and accessibility.
 *
 * @version 0.1.1
 */

import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { Separator } from '../../components/ui/separator';

describe('Separator', () => {
  it('renders with default props', () => {
    render(<Separator data-testid="sep" />);
    const sep = screen.getByTestId('sep');
    expect(sep).toBeInTheDocument();
    expect(sep).toHaveAttribute('data-slot', 'separator-root');
  });

  it('defaults to horizontal orientation', () => {
    render(<Separator data-testid="sep" />);
    const sep = screen.getByTestId('sep');
    expect(sep).toHaveAttribute('data-orientation', 'horizontal');
  });

  it('supports vertical orientation', () => {
    render(<Separator orientation="vertical" data-testid="sep" />);
    const sep = screen.getByTestId('sep');
    expect(sep).toHaveAttribute('data-orientation', 'vertical');
  });

  it('is decorative by default (role=none)', () => {
    render(<Separator data-testid="sep" />);
    const sep = screen.getByTestId('sep');
    expect(sep).toHaveAttribute('role', 'none');
  });

  it('has role=separator when not decorative', () => {
    render(<Separator decorative={false} data-testid="sep" />);
    const sep = screen.getByTestId('sep');
    expect(sep).toHaveAttribute('role', 'separator');
  });

  it('applies bg-border class', () => {
    render(<Separator data-testid="sep" />);
    const sep = screen.getByTestId('sep');
    expect(sep.className).toContain('bg-border');
  });

  it('merges custom className', () => {
    render(<Separator data-testid="sep" className="my-4" />);
    const sep = screen.getByTestId('sep');
    expect(sep.className).toContain('my-4');
  });
});
