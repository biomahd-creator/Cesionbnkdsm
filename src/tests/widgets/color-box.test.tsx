/**
 * ColorBox Widget Tests (G14 Batch 4)
 *
 * @version 0.2.3
 */

import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { ColorBox } from '../../components/widgets/ColorBox';

describe('ColorBox', () => {
  it('renders a span element', () => {
    const { container } = render(<ColorBox color="primary" />);
    const span = container.querySelector('span');
    expect(span).toBeTruthy();
  });

  it('applies known color class for primary', () => {
    const { container } = render(<ColorBox color="primary" />);
    const span = container.querySelector('span');
    expect(span?.className).toContain('bg-primary');
  });

  it('applies known color class for secondary', () => {
    const { container } = render(<ColorBox color="secondary" />);
    const span = container.querySelector('span');
    expect(span?.className).toContain('bg-secondary');
  });

  it('applies success color class', () => {
    const { container } = render(<ColorBox color="success" />);
    const span = container.querySelector('span');
    expect(span?.className).toContain('bg-green-500');
  });

  it('applies default md size', () => {
    const { container } = render(<ColorBox color="primary" />);
    const span = container.querySelector('span');
    expect(span?.className).toContain('h-12');
    expect(span?.className).toContain('w-12');
  });

  it('applies sm size', () => {
    const { container } = render(<ColorBox color="primary" size="sm" />);
    const span = container.querySelector('span');
    expect(span?.className).toContain('h-6');
    expect(span?.className).toContain('w-6');
  });

  it('applies xl size', () => {
    const { container } = render(<ColorBox color="primary" size="xl" />);
    const span = container.querySelector('span');
    expect(span?.className).toContain('h-20');
    expect(span?.className).toContain('w-20');
  });

  it('renders children', () => {
    render(<ColorBox color="primary">A</ColorBox>);
    expect(screen.getByText('A')).toBeInTheDocument();
  });

  it('has rounded border class', () => {
    const { container } = render(<ColorBox color="primary" />);
    const span = container.querySelector('span');
    expect(span?.className).toContain('rounded');
    expect(span?.className).toContain('border');
  });

  it('merges custom className', () => {
    const { container } = render(<ColorBox color="primary" className="opacity-50" />);
    const span = container.querySelector('span');
    expect(span?.className).toContain('opacity-50');
  });
});
