/**
 * Skeleton Component Tests (G2+)
 *
 * Tests for the Skeleton component.
 * Validates rendering, data-slot, className merge, and animation class.
 *
 * @version 0.2.3
 */

import { describe, it, expect } from 'vitest';
import { render } from '@testing-library/react';
import { Skeleton } from '../../components/ui/skeleton';

describe('Skeleton', () => {
  // --- Rendering ---

  it('renders as a div', () => {
    const { container } = render(<Skeleton />);
    const el = container.firstChild as HTMLElement;
    expect(el.tagName).toBe('DIV');
  });

  it('has data-slot attribute', () => {
    const { container } = render(<Skeleton />);
    const el = container.firstChild as HTMLElement;
    expect(el).toHaveAttribute('data-slot', 'skeleton');
  });

  // --- Default classes ---

  it('applies animate-pulse class', () => {
    const { container } = render(<Skeleton />);
    const el = container.firstChild as HTMLElement;
    expect(el.className).toContain('animate-pulse');
  });

  it('applies rounded-md class', () => {
    const { container } = render(<Skeleton />);
    const el = container.firstChild as HTMLElement;
    expect(el.className).toContain('rounded-md');
  });

  it('applies bg-accent class', () => {
    const { container } = render(<Skeleton />);
    const el = container.firstChild as HTMLElement;
    expect(el.className).toContain('bg-accent');
  });

  // --- Custom className ---

  it('merges custom className', () => {
    const { container } = render(<Skeleton className="h-10 w-full" />);
    const el = container.firstChild as HTMLElement;
    expect(el.className).toContain('h-10');
    expect(el.className).toContain('w-full');
    expect(el.className).toContain('animate-pulse');
  });

  // --- Props forwarding ---

  it('forwards data attributes', () => {
    const { container } = render(<Skeleton data-testid="skel" />);
    const el = container.firstChild as HTMLElement;
    expect(el).toHaveAttribute('data-testid', 'skel');
  });

  it('forwards aria-hidden', () => {
    const { container } = render(<Skeleton aria-hidden="true" />);
    const el = container.firstChild as HTMLElement;
    expect(el).toHaveAttribute('aria-hidden', 'true');
  });
});
