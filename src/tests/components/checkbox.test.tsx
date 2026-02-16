/**
 * Checkbox Component Tests (G2+)
 *
 * Tests for the Checkbox component.
 * Validates rendering, checked/unchecked/indeterminate states, disabled, and a11y.
 *
 * @version 0.2.3
 */

import { describe, it, expect, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Checkbox } from '../../components/ui/checkbox';

describe('Checkbox', () => {
  // --- Rendering ---

  it('renders with default props', () => {
    render(<Checkbox aria-label="Accept terms" />);
    const checkbox = screen.getByRole('checkbox');
    expect(checkbox).toBeInTheDocument();
    expect(checkbox).toHaveAttribute('data-slot', 'checkbox');
  });

  it('renders as unchecked by default', () => {
    render(<Checkbox aria-label="Accept terms" />);
    const checkbox = screen.getByRole('checkbox');
    expect(checkbox).toHaveAttribute('data-state', 'unchecked');
  });

  // --- Checked state ---

  it('renders as checked when checked={true}', () => {
    render(<Checkbox checked={true} aria-label="Accept terms" />);
    const checkbox = screen.getByRole('checkbox');
    expect(checkbox).toHaveAttribute('data-state', 'checked');
  });

  it('renders as indeterminate when checked="indeterminate"', () => {
    render(<Checkbox checked="indeterminate" aria-label="Accept terms" />);
    const checkbox = screen.getByRole('checkbox');
    expect(checkbox).toHaveAttribute('data-state', 'indeterminate');
  });

  // --- Interaction ---

  it('toggles on click', async () => {
    const user = userEvent.setup();
    const onCheckedChange = vi.fn();
    render(
      <Checkbox aria-label="Accept terms" onCheckedChange={onCheckedChange} />
    );

    await user.click(screen.getByRole('checkbox'));
    expect(onCheckedChange).toHaveBeenCalledWith(true);
  });

  // --- Disabled ---

  it('applies disabled attribute', () => {
    render(<Checkbox disabled aria-label="Accept terms" />);
    const checkbox = screen.getByRole('checkbox');
    expect(checkbox).toBeDisabled();
  });

  it('does not toggle when disabled', async () => {
    const user = userEvent.setup();
    const onCheckedChange = vi.fn();
    render(
      <Checkbox disabled aria-label="Accept terms" onCheckedChange={onCheckedChange} />
    );

    await user.click(screen.getByRole('checkbox'));
    expect(onCheckedChange).not.toHaveBeenCalled();
  });

  // --- Accessibility ---

  it('supports aria-label', () => {
    render(<Checkbox aria-label="Enable notifications" />);
    const checkbox = screen.getByRole('checkbox', { name: /enable notifications/i });
    expect(checkbox).toBeInTheDocument();
  });

  it('supports aria-invalid', () => {
    render(<Checkbox aria-invalid="true" aria-label="Required field" />);
    const checkbox = screen.getByRole('checkbox');
    expect(checkbox).toHaveAttribute('aria-invalid', 'true');
  });

  // --- Custom className ---

  it('merges custom className', () => {
    render(<Checkbox className="my-checkbox-class" aria-label="Test" />);
    const checkbox = screen.getByRole('checkbox');
    expect(checkbox.className).toContain('my-checkbox-class');
  });
});
