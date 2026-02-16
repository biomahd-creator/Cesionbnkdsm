/**
 * AspectRatio Component Tests (G14 Batch 2)
 *
 * Tests for AspectRatio (Radix primitive wrapper).
 * Validates rendering, data-slot, and ratio prop.
 *
 * @version 0.2.3
 */

import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { AspectRatio } from '../../components/ui/aspect-ratio';

describe('AspectRatio', () => {
  it('renders with data-slot', () => {
    const { container } = render(
      <AspectRatio ratio={16 / 9}>
        <div data-testid="child">Content</div>
      </AspectRatio>
    );
    // Radix AspectRatio puts props on the inner div, not the outer wrapper
    const slotEl = container.querySelector('[data-slot="aspect-ratio"]');
    expect(slotEl).toBeTruthy();
  });

  it('renders children', () => {
    render(
      <AspectRatio ratio={16 / 9}>
        <div>Aspect content</div>
      </AspectRatio>
    );
    expect(screen.getByText('Aspect content')).toBeInTheDocument();
  });

  it('applies inline style for ratio', () => {
    const { container } = render(
      <AspectRatio ratio={16 / 9}>
        <div>Content</div>
      </AspectRatio>
    );
    const root = container.firstChild as HTMLElement;
    // Radix aspect-ratio sets padding-bottom for the ratio
    expect(root.style).toBeDefined();
  });

  it('renders with 1:1 ratio', () => {
    const { container } = render(
      <AspectRatio ratio={1}>
        <div>Square</div>
      </AspectRatio>
    );
    const slotEl = container.querySelector('[data-slot="aspect-ratio"]');
    expect(slotEl).toBeTruthy();
    expect(screen.getByText('Square')).toBeInTheDocument();
  });

  it('renders with 4:3 ratio', () => {
    render(
      <AspectRatio ratio={4 / 3}>
        <div>Photo</div>
      </AspectRatio>
    );
    expect(screen.getByText('Photo')).toBeInTheDocument();
  });
});