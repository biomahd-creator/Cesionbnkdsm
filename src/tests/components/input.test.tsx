/**
 * Input Component Tests (G2)
 *
 * Tests for the Input component.
 * Validates rendering, types, disabled state, ref forwarding, and a11y.
 *
 * @version 0.1.1
 */

import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Input } from '../../components/ui/input';

describe('Input', () => {
  // --- Rendering ---

  it('renders with default props', () => {
    render(<Input data-testid="input" />);
    const input = screen.getByTestId('input');
    expect(input).toBeInTheDocument();
    expect(input).toHaveAttribute('data-slot', 'input');
  });

  it('renders as an input element', () => {
    render(<Input data-testid="input" />);
    const input = screen.getByTestId('input');
    expect(input.tagName).toBe('INPUT');
  });

  // --- Types ---

  it('defaults to text type when no type specified', () => {
    render(<Input data-testid="input" />);
    const input = screen.getByTestId('input');
    // Default type for input is 'text' if not specified
    expect(input).not.toHaveAttribute('type', 'password');
  });

  it('applies text type', () => {
    render(<Input type="text" data-testid="input" />);
    const input = screen.getByTestId('input');
    expect(input).toHaveAttribute('type', 'text');
  });

  it('applies password type', () => {
    render(<Input type="password" data-testid="input" />);
    const input = screen.getByTestId('input');
    expect(input).toHaveAttribute('type', 'password');
  });

  it('applies email type', () => {
    render(<Input type="email" data-testid="input" />);
    const input = screen.getByTestId('input');
    expect(input).toHaveAttribute('type', 'email');
  });

  it('applies number type', () => {
    render(<Input type="number" data-testid="input" />);
    const input = screen.getByTestId('input');
    expect(input).toHaveAttribute('type', 'number');
  });

  it('applies file type', () => {
    render(<Input type="file" data-testid="input" />);
    const input = screen.getByTestId('input');
    expect(input).toHaveAttribute('type', 'file');
  });

  // --- Interaction ---

  it('accepts user input', async () => {
    const user = userEvent.setup();
    render(<Input data-testid="input" />);
    const input = screen.getByTestId('input');

    await user.type(input, 'Hello CESIONBNK');
    expect(input).toHaveValue('Hello CESIONBNK');
  });

  it('supports controlled value', () => {
    render(<Input data-testid="input" value="controlled" readOnly />);
    const input = screen.getByTestId('input');
    expect(input).toHaveValue('controlled');
  });

  it('handles onChange events', async () => {
    const user = userEvent.setup();
    let value = '';
    render(
      <Input
        data-testid="input"
        onChange={(e) => { value = e.target.value; }}
      />
    );

    await user.type(screen.getByTestId('input'), 'A');
    expect(value).toBe('A');
  });

  // --- Disabled ---

  it('applies disabled attribute', () => {
    render(<Input disabled data-testid="input" />);
    const input = screen.getByTestId('input');
    expect(input).toBeDisabled();
  });

  it('does not accept input when disabled', async () => {
    const user = userEvent.setup();
    render(<Input disabled data-testid="input" />);
    const input = screen.getByTestId('input');

    await user.type(input, 'test');
    expect(input).toHaveValue('');
  });

  // --- Placeholder ---

  it('shows placeholder text', () => {
    render(<Input placeholder="Enter amount..." data-testid="input" />);
    const input = screen.getByTestId('input');
    expect(input).toHaveAttribute('placeholder', 'Enter amount...');
  });

  // --- Accessibility ---

  it('supports aria-label', () => {
    render(<Input aria-label="Invoice number" data-testid="input" />);
    const input = screen.getByRole('textbox', { name: /invoice number/i });
    expect(input).toBeInTheDocument();
  });

  it('supports aria-invalid', () => {
    render(<Input aria-invalid="true" data-testid="input" />);
    const input = screen.getByTestId('input');
    expect(input).toHaveAttribute('aria-invalid', 'true');
  });

  it('supports required attribute', () => {
    render(<Input required data-testid="input" />);
    const input = screen.getByTestId('input');
    expect(input).toBeRequired();
  });

  // --- Custom className ---

  it('merges custom className', () => {
    render(<Input className="my-input-class" data-testid="input" />);
    const input = screen.getByTestId('input');
    expect(input.className).toContain('my-input-class');
  });

  // --- Ref forwarding ---

  it('forwards ref', () => {
    const ref = { current: null as HTMLInputElement | null };
    render(<Input ref={ref} />);
    expect(ref.current).toBeInstanceOf(HTMLInputElement);
  });

  // --- displayName ---

  it('has displayName set', () => {
    expect(Input.displayName).toBe('Input');
  });
});
