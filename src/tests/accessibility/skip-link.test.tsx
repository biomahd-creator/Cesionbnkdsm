/**
 * SkipLink Accessibility Component Tests (G14 Batch 7)
 *
 * Tests for SkipLink rendering.
 *
 * @version 0.2.3
 */

import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { SkipLink } from '../../components/accessibility/SkipLink';

describe('SkipLink', () => {
  it('renders a link element', () => {
    render(<SkipLink />);
    const link = screen.getByText('Saltar al contenido principal');
    expect(link).toBeInTheDocument();
    expect(link.tagName).toBe('A');
  });

  it('has href pointing to #main-content', () => {
    render(<SkipLink />);
    const link = screen.getByText('Saltar al contenido principal');
    expect(link.getAttribute('href')).toBe('#main-content');
  });

  it('has sr-only class for screen reader visibility', () => {
    render(<SkipLink />);
    const link = screen.getByText('Saltar al contenido principal');
    expect(link.className).toContain('sr-only');
  });

  it('has focus:not-sr-only class for keyboard navigation', () => {
    render(<SkipLink />);
    const link = screen.getByText('Saltar al contenido principal');
    expect(link.className).toContain('focus:not-sr-only');
  });

  it('has fixed positioning', () => {
    render(<SkipLink />);
    const link = screen.getByText('Saltar al contenido principal');
    expect(link.className).toContain('fixed');
  });
});
