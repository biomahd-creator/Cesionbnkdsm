/**
 * Slider Component Tests (G14 Batch 2)
 *
 * Tests for Slider (Radix UI primitive wrapper).
 * Validates rendering, data-slot, default values, and disabled state.
 *
 * @version 0.2.3
 */

import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { Slider } from '../../components/ui/slider';

describe('Slider', () => {
  // --- Rendering ---

  it('renders with data-slot', () => {
    const { container } = render(<Slider defaultValue={[50]} />);
    const root = container.firstChild as HTMLElement;
    expect(root).toHaveAttribute('data-slot', 'slider');
  });

  it('renders as a span (Radix root element)', () => {
    const { container } = render(<Slider defaultValue={[50]} />);
    const root = container.firstChild as HTMLElement;
    expect(root.tagName).toBe('SPAN');
  });

  // --- Track and thumb ---

  it('renders the track', () => {
    const { container } = render(<Slider defaultValue={[50]} />);
    const track = container.querySelector('[data-slot="slider-track"]');
    expect(track).toBeTruthy();
  });

  it('renders the range', () => {
    const { container } = render(<Slider defaultValue={[50]} />);
    const range = container.querySelector('[data-slot="slider-range"]');
    expect(range).toBeTruthy();
  });

  it('renders a thumb for single value', () => {
    const { container } = render(<Slider defaultValue={[50]} />);
    const thumbs = container.querySelectorAll('[data-slot="slider-thumb"]');
    expect(thumbs.length).toBe(1);
  });

  it('renders two thumbs for range value', () => {
    const { container } = render(<Slider defaultValue={[25, 75]} />);
    const thumbs = container.querySelectorAll('[data-slot="slider-thumb"]');
    expect(thumbs.length).toBe(2);
  });

  // --- Accessibility ---

  it('has role="slider" on thumbs', () => {
    render(<Slider defaultValue={[50]} />);
    const sliders = screen.getAllByRole('slider');
    expect(sliders.length).toBe(1);
  });

  it('sets aria-valuemin and aria-valuemax', () => {
    render(<Slider defaultValue={[50]} min={0} max={100} />);
    const slider = screen.getByRole('slider');
    expect(slider).toHaveAttribute('aria-valuemin', '0');
    expect(slider).toHaveAttribute('aria-valuemax', '100');
  });

  it('sets aria-valuenow', () => {
    render(<Slider defaultValue={[30]} min={0} max={100} />);
    const slider = screen.getByRole('slider');
    expect(slider).toHaveAttribute('aria-valuenow', '30');
  });

  // --- Disabled ---

  it('supports disabled state', () => {
    const { container } = render(<Slider defaultValue={[50]} disabled />);
    const root = container.firstChild as HTMLElement;
    expect(root).toHaveAttribute('data-disabled', '');
  });

  // --- Custom className ---

  it('merges custom className', () => {
    const { container } = render(
      <Slider defaultValue={[50]} className="w-64" />
    );
    const root = container.firstChild as HTMLElement;
    expect(root.className).toContain('w-64');
  });
});
