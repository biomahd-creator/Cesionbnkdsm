/**
 * Logo Component Tests (G14 Batch 7)
 *
 * Tests for Logo rendering with different sizes and variants.
 * Requires ThemeProvider wrapper.
 *
 * @version 0.2.3
 */

import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { Logo } from '../../components/Logo';
import { ThemeProvider } from '../../components/providers/ThemeProvider';

function renderWithTheme(props: any = {}) {
  return render(
    <ThemeProvider>
      <Logo {...props} />
    </ThemeProvider>
  );
}

describe('Logo', () => {
  it('renders without crashing', () => {
    const { container } = renderWithTheme();
    expect(container.firstChild).toBeTruthy();
  });

  it('renders SVG component by default (no logoUrl)', () => {
    const { container } = renderWithTheme();
    // The Capa1 SVG component renders a div with data-name="Capa_1"
    const svgWrapper = container.querySelector('[data-name]');
    expect(svgWrapper).toBeTruthy();
  });

  it('applies md size class by default', () => {
    const { container } = renderWithTheme();
    // md = "h-8 w-auto" — the outer div should have h-8
    const wrapper = container.querySelector('.h-8');
    expect(wrapper).toBeTruthy();
  });

  it('applies sm size class', () => {
    const { container } = renderWithTheme({ size: 'sm' });
    const wrapper = container.querySelector('.h-6');
    expect(wrapper).toBeTruthy();
  });

  it('applies lg size class', () => {
    const { container } = renderWithTheme({ size: 'lg' });
    const wrapper = container.querySelector('.h-10');
    expect(wrapper).toBeTruthy();
  });

  it('applies xl size class', () => {
    const { container } = renderWithTheme({ size: 'xl' });
    const wrapper = container.querySelector('.h-12');
    expect(wrapper).toBeTruthy();
  });

  it('merges custom className', () => {
    const { container } = renderWithTheme({ className: 'my-logo' });
    const wrapper = container.querySelector('.my-logo');
    expect(wrapper).toBeTruthy();
  });
});
