/**
 * GridShowcase Component Tests (G14 Batch 4)
 *
 * @version 0.2.3
 */

import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { GridShowcase } from '../../components/ui/grid-showcase';

describe('GridShowcase', () => {
  it('renders children', () => {
    render(
      <GridShowcase>
        <div>Item 1</div>
        <div>Item 2</div>
      </GridShowcase>
    );
    expect(screen.getByText('Item 1')).toBeInTheDocument();
    expect(screen.getByText('Item 2')).toBeInTheDocument();
  });

  it('renders title when provided', () => {
    render(
      <GridShowcase title="My Grid">
        <div>Content</div>
      </GridShowcase>
    );
    expect(screen.getByText('My Grid')).toBeInTheDocument();
  });

  it('renders description when provided', () => {
    render(
      <GridShowcase title="Grid" description="A description">
        <div>Content</div>
      </GridShowcase>
    );
    expect(screen.getByText('A description')).toBeInTheDocument();
  });

  it('does not render header when no title/description', () => {
    const { container } = render(
      <GridShowcase>
        <div>Content</div>
      </GridShowcase>
    );
    expect(container.querySelector('h3')).toBeNull();
  });

  it('applies grid class', () => {
    const { container } = render(
      <GridShowcase>
        <div>Item</div>
      </GridShowcase>
    );
    const gridDiv = container.querySelector('.grid');
    expect(gridDiv).toBeTruthy();
  });

  it('applies default md gap', () => {
    const { container } = render(
      <GridShowcase>
        <div>Item</div>
      </GridShowcase>
    );
    const gridDiv = container.querySelector('.grid');
    expect(gridDiv?.className).toContain('gap-6');
  });

  it('applies custom gap', () => {
    const { container } = render(
      <GridShowcase gap="lg">
        <div>Item</div>
      </GridShowcase>
    );
    const gridDiv = container.querySelector('.grid');
    expect(gridDiv?.className).toContain('gap-8');
  });

  it('merges custom className', () => {
    const { container } = render(
      <GridShowcase className="bg-muted">
        <div>Item</div>
      </GridShowcase>
    );
    const wrapper = container.firstChild as HTMLElement;
    expect(wrapper.className).toContain('bg-muted');
  });
});
