/**
 * Switch Component Tests (G2+)
 *
 * Tests for the Switch component.
 * Validates rendering, toggle interaction, disabled state, and a11y.
 *
 * @version 0.2.3
 */

import { describe, it, expect, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Switch } from '../../components/ui/switch';

describe('Switch', () => {
  // --- Rendering ---

  it('renders with default props', () => {
    render(<Switch aria-label="Dark mode" />);
    const switchEl = screen.getByRole('switch');
    expect(switchEl).toBeInTheDocument();
    expect(switchEl).toHaveAttribute('data-slot', 'switch');
  });

  it('renders as unchecked by default', () => {
    render(<Switch aria-label="Dark mode" />);
    const switchEl = screen.getByRole('switch');
    expect(switchEl).toHaveAttribute('data-state', 'unchecked');
  });

  it('renders as checked when checked={true}', () => {
    render(<Switch checked={true} aria-label="Dark mode" />);
    const switchEl = screen.getByRole('switch');
    expect(switchEl).toHaveAttribute('data-state', 'checked');
  });

  // --- Interaction ---

  it('toggles on click', async () => {
    const user = userEvent.setup();
    const onCheckedChange = vi.fn();
    render(<Switch aria-label="Dark mode" onCheckedChange={onCheckedChange} />);

    await user.click(screen.getByRole('switch'));
    expect(onCheckedChange).toHaveBeenCalledWith(true);
  });

  it('toggles off when already checked', async () => {
    const user = userEvent.setup();
    const onCheckedChange = vi.fn();
    render(
      <Switch checked={true} aria-label="Dark mode" onCheckedChange={onCheckedChange} />
    );

    await user.click(screen.getByRole('switch'));
    expect(onCheckedChange).toHaveBeenCalledWith(false);
  });

  // --- Disabled ---

  it('applies disabled attribute', () => {
    render(<Switch disabled aria-label="Dark mode" />);
    const switchEl = screen.getByRole('switch');
    expect(switchEl).toBeDisabled();
  });

  it('does not toggle when disabled', async () => {
    const user = userEvent.setup();
    const onCheckedChange = vi.fn();
    render(
      <Switch disabled aria-label="Dark mode" onCheckedChange={onCheckedChange} />
    );

    await user.click(screen.getByRole('switch'));
    expect(onCheckedChange).not.toHaveBeenCalled();
  });

  // --- Accessibility ---

  it('supports aria-label', () => {
    render(<Switch aria-label="Enable notifications" />);
    const switchEl = screen.getByRole('switch', { name: /enable notifications/i });
    expect(switchEl).toBeInTheDocument();
  });

  // --- Custom className ---

  it('merges custom className', () => {
    render(<Switch className="my-switch-class" aria-label="Test" />);
    const switchEl = screen.getByRole('switch');
    expect(switchEl.className).toContain('my-switch-class');
  });

  // --- Thumb ---

  it('renders the thumb element', () => {
    render(<Switch aria-label="Toggle" />);
    const switchEl = screen.getByRole('switch');
    const thumb = switchEl.querySelector('[data-slot="switch-thumb"]');
    expect(thumb).toBeInTheDocument();
  });
});
