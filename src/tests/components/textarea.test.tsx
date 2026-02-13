/**
 * Textarea Component Tests (G2)
 *
 * Tests for the Textarea component.
 * Validates rendering, interaction, disabled state, ref forwarding.
 *
 * @version 0.1.1
 */

import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Textarea } from '../../components/ui/textarea';

describe('Textarea', () => {
  // --- Rendering ---

  it('renders with default props', () => {
    render(<Textarea data-testid="textarea" />);
    const textarea = screen.getByTestId('textarea');
    expect(textarea).toBeInTheDocument();
    expect(textarea).toHaveAttribute('data-slot', 'textarea');
  });

  it('renders as a textarea element', () => {
    render(<Textarea data-testid="textarea" />);
    const textarea = screen.getByTestId('textarea');
    expect(textarea.tagName).toBe('TEXTAREA');
  });

  // --- Interaction ---

  it('accepts user input', async () => {
    const user = userEvent.setup();
    render(<Textarea data-testid="textarea" />);
    const textarea = screen.getByTestId('textarea');

    await user.type(textarea, 'Invoice notes here');
    expect(textarea).toHaveValue('Invoice notes here');
  });

  it('supports controlled value', () => {
    render(<Textarea data-testid="textarea" value="controlled value" readOnly />);
    const textarea = screen.getByTestId('textarea');
    expect(textarea).toHaveValue('controlled value');
  });

  it('handles onChange events', async () => {
    const user = userEvent.setup();
    let value = '';
    render(
      <Textarea
        data-testid="textarea"
        onChange={(e) => { value = e.target.value; }}
      />
    );

    await user.type(screen.getByTestId('textarea'), 'X');
    expect(value).toBe('X');
  });

  // --- Disabled ---

  it('applies disabled attribute', () => {
    render(<Textarea disabled data-testid="textarea" />);
    const textarea = screen.getByTestId('textarea');
    expect(textarea).toBeDisabled();
  });

  // --- Placeholder ---

  it('shows placeholder text', () => {
    render(<Textarea placeholder="Enter comments..." data-testid="textarea" />);
    const textarea = screen.getByTestId('textarea');
    expect(textarea).toHaveAttribute('placeholder', 'Enter comments...');
  });

  // --- Accessibility ---

  it('supports aria-label', () => {
    render(<Textarea aria-label="Operation notes" />);
    const textarea = screen.getByRole('textbox', { name: /operation notes/i });
    expect(textarea).toBeInTheDocument();
  });

  it('supports aria-invalid', () => {
    render(<Textarea aria-invalid="true" data-testid="textarea" />);
    const textarea = screen.getByTestId('textarea');
    expect(textarea).toHaveAttribute('aria-invalid', 'true');
  });

  // --- Custom className ---

  it('merges custom className', () => {
    render(<Textarea className="min-h-32" data-testid="textarea" />);
    const textarea = screen.getByTestId('textarea');
    expect(textarea.className).toContain('min-h-32');
  });

  // --- Ref forwarding ---

  it('forwards ref', () => {
    const ref = { current: null as HTMLTextAreaElement | null };
    render(<Textarea ref={ref} />);
    expect(ref.current).toBeInstanceOf(HTMLTextAreaElement);
  });

  // --- displayName ---

  it('has displayName set', () => {
    expect(Textarea.displayName).toBe('Textarea');
  });
});
