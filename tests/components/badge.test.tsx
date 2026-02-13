/**
 * Badge Component Tests (G2)
 *
 * Tests for the Badge component variants and rendering.
 *
 * @version 0.1.0
 */

import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { Badge } from '../../components/ui/badge';

describe('Badge', () => {
  it('renders with default variant', () => {
    render(<Badge>Active</Badge>);
    const badge = screen.getByText('Active');
    expect(badge).toBeInTheDocument();
    expect(badge).toHaveAttribute('data-slot', 'badge');
    expect(badge.className).toContain('bg-primary');
  });

  it('renders destructive variant', () => {
    render(<Badge variant="destructive">Error</Badge>);
    const badge = screen.getByText('Error');
    expect(badge.className).toContain('bg-red-600');
  });

  it('renders success variant', () => {
    render(<Badge variant="success">Approved</Badge>);
    const badge = screen.getByText('Approved');
    expect(badge.className).toContain('bg-green-600');
  });

  it('renders warning variant', () => {
    render(<Badge variant="warning">Pending</Badge>);
    const badge = screen.getByText('Pending');
    expect(badge.className).toContain('bg-amber-500');
  });

  it('renders info variant', () => {
    render(<Badge variant="info">New</Badge>);
    const badge = screen.getByText('New');
    expect(badge.className).toContain('bg-blue-600');
  });

  it('renders outline variant', () => {
    render(<Badge variant="outline">Draft</Badge>);
    const badge = screen.getByText('Draft');
    expect(badge.className).toContain('text-foreground');
  });

  it('renders secondary variant', () => {
    render(<Badge variant="secondary">Tag</Badge>);
    const badge = screen.getByText('Tag');
    expect(badge.className).toContain('bg-secondary');
  });

  it('renders soft variants', () => {
    render(<Badge variant="success-soft">Soft Success</Badge>);
    const badge = screen.getByText('Soft Success');
    expect(badge.className).toContain('bg-green-100');
  });

  it('renders soft-outline variants', () => {
    render(<Badge variant="warning-soft-outline">Soft Outline</Badge>);
    const badge = screen.getByText('Soft Outline');
    expect(badge.className).toContain('bg-amber-100');
    expect(badge.className).toContain('border-amber-300');
  });

  it('merges custom className', () => {
    render(<Badge className="ml-2">Custom</Badge>);
    const badge = screen.getByText('Custom');
    expect(badge.className).toContain('ml-2');
  });

  it('renders as a span by default', () => {
    render(<Badge>Span Badge</Badge>);
    const badge = screen.getByText('Span Badge');
    expect(badge.tagName).toBe('SPAN');
  });
});
