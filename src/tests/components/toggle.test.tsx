/**
 * Toggle Component Tests (G2+)
 *
 * Tests for the Toggle component.
 * Validates rendering, variants, sizes, pressed state, disabled, and a11y.
 *
 * @version 0.2.3
 */

import { describe, it, expect, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Toggle } from '../../components/ui/toggle';

describe('Toggle', () => {
  // --- Rendering ---

  it('renders with default props', () => {
    render(<Toggle aria-label="Bold">B</Toggle>);
    const toggle = screen.getByRole('button');
    expect(toggle).toBeInTheDocument();
    expect(toggle).toHaveAttribute('data-slot', 'toggle');
  });

  it('renders children correctly', () => {
    render(<Toggle aria-label="Bold">Bold Text</Toggle>);
    expect(screen.getByText('Bold Text')).toBeInTheDocument();
  });

  // --- Variants ---

  it('applies default variant', () => {
    render(<Toggle aria-label="Toggle">T</Toggle>);
    const toggle = screen.getByRole('button');
    expect(toggle.className).toContain('bg-transparent');
  });

  it('applies outline variant', () => {
    render(<Toggle variant="outline" aria-label="Toggle">T</Toggle>);
    const toggle = screen.getByRole('button');
    expect(toggle.className).toContain('border');
  });

  // --- Sizes ---

  it('applies default size', () => {
    render(<Toggle aria-label="Toggle">T</Toggle>);
    const toggle = screen.getByRole('button');
    expect(toggle.className).toContain('h-9');
  });

  it('applies small size', () => {
    render(<Toggle size="sm" aria-label="Toggle">T</Toggle>);
    const toggle = screen.getByRole('button');
    expect(toggle.className).toContain('h-8');
  });

  it('applies large size', () => {
    render(<Toggle size="lg" aria-label="Toggle">T</Toggle>);
    const toggle = screen.getByRole('button');
    expect(toggle.className).toContain('h-10');
  });

  // --- Pressed state ---

  it('renders as unpressed by default', () => {
    render(<Toggle aria-label="Toggle">T</Toggle>);
    const toggle = screen.getByRole('button');
    expect(toggle).toHaveAttribute('data-state', 'off');
  });

  it('renders as pressed when pressed={true}', () => {
    render(<Toggle pressed={true} aria-label="Toggle">T</Toggle>);
    const toggle = screen.getByRole('button');
    expect(toggle).toHaveAttribute('data-state', 'on');
    expect(toggle).toHaveAttribute('aria-pressed', 'true');
  });

  // --- Interaction ---

  it('calls onPressedChange on click', async () => {
    const user = userEvent.setup();
    const onPressedChange = vi.fn();
    render(
      <Toggle aria-label="Toggle" onPressedChange={onPressedChange}>T</Toggle>
    );

    await user.click(screen.getByRole('button'));
    expect(onPressedChange).toHaveBeenCalledWith(true);
  });

  // --- Disabled ---

  it('applies disabled attribute', () => {
    render(<Toggle disabled aria-label="Toggle">T</Toggle>);
    const toggle = screen.getByRole('button');
    expect(toggle).toBeDisabled();
  });

  // --- Custom className ---

  it('merges custom className', () => {
    render(<Toggle className="my-toggle" aria-label="Toggle">T</Toggle>);
    const toggle = screen.getByRole('button');
    expect(toggle.className).toContain('my-toggle');
  });

  // --- Ref forwarding ---

  it('forwards ref', () => {
    const ref = { current: null as HTMLButtonElement | null };
    render(<Toggle ref={ref} aria-label="Toggle">T</Toggle>);
    expect(ref.current).toBeInstanceOf(HTMLButtonElement);
  });

  // --- displayName ---

  it('has displayName set', () => {
    expect(Toggle.displayName).toBeDefined();
  });
});
