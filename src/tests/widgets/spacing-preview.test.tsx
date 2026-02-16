/**
 * SpacingPreview Widget Tests (G14 Batch 5)
 *
 * @version 0.2.3
 */

import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { SpacingPreview } from '../../components/widgets/SpacingPreview';

describe('SpacingPreview', () => {
  const baseProps = {
    name: 'spacing-4',
    value: '16px',
    multiplier: '4×',
  };

  it('renders name', () => {
    render(<SpacingPreview {...baseProps} />);
    expect(screen.getByText('spacing-4')).toBeInTheDocument();
  });

  it('renders value', () => {
    render(<SpacingPreview {...baseProps} />);
    expect(screen.getByText('16px')).toBeInTheDocument();
  });

  it('renders multiplier', () => {
    render(<SpacingPreview {...baseProps} />);
    expect(screen.getByText('4× base')).toBeInTheDocument();
  });

  it('applies known spacing width class', () => {
    const { container } = render(<SpacingPreview {...baseProps} />);
    const bar = container.querySelector('.bg-primary');
    expect(bar?.className).toContain('w-4');
  });

  it('applies different width for 32px', () => {
    const { container } = render(
      <SpacingPreview name="spacing-8" value="32px" multiplier="8×" />
    );
    const bar = container.querySelector('.bg-primary');
    expect(bar?.className).toContain('w-8');
  });

  it('falls back to w-4 for unknown values', () => {
    const { container } = render(
      <SpacingPreview name="custom" value="100px" multiplier="25×" />
    );
    const bar = container.querySelector('.bg-primary');
    expect(bar?.className).toContain('w-4');
  });

  it('has border and rounded container', () => {
    const { container } = render(<SpacingPreview {...baseProps} />);
    const wrapper = container.firstChild as HTMLElement;
    expect(wrapper.className).toContain('border');
    expect(wrapper.className).toContain('rounded-lg');
  });
});
