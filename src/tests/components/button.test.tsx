/**
 * Button Component Tests (G2)
 *
 * Tests for the foundational Button component.
 * Validates rendering, variants, sizes, accessibility, and asChild behavior.
 *
 * @version 0.1.0
 */

import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Button } from '../../components/ui/button';

describe('Button', () => {
  // --- Rendering ---

  it('renders with default props', () => {
    render(<Button>Click me</Button>);
    const button = screen.getByRole('button', { name: /click me/i });
    expect(button).toBeInTheDocument();
    expect(button).toHaveAttribute('data-slot', 'button');
  });

  it('renders children correctly', () => {
    render(<Button>Submit Form</Button>);
    expect(screen.getByText('Submit Form')).toBeInTheDocument();
  });

  // --- Variants ---

  it('applies default variant classes', () => {
    render(<Button>Default</Button>);
    const button = screen.getByRole('button');
    expect(button.className).toContain('bg-primary');
  });

  it('applies destructive variant', () => {
    render(<Button variant="destructive">Delete</Button>);
    const button = screen.getByRole('button');
    expect(button.className).toContain('bg-destructive');
  });

  it('applies outline variant', () => {
    render(<Button variant="outline">Cancel</Button>);
    const button = screen.getByRole('button');
    expect(button.className).toContain('border');
    expect(button.className).toContain('bg-background');
  });

  it('applies ghost variant', () => {
    render(<Button variant="ghost">Ghost</Button>);
    const button = screen.getByRole('button');
    expect(button.className).toContain('hover:bg-accent');
  });

  it('applies secondary variant', () => {
    render(<Button variant="secondary">Secondary</Button>);
    const button = screen.getByRole('button');
    expect(button.className).toContain('bg-secondary');
  });

  it('applies link variant', () => {
    render(<Button variant="link">Link</Button>);
    const button = screen.getByRole('button');
    expect(button.className).toContain('underline-offset-4');
  });

  // --- Semantic Variants ---

  it('applies success variant', () => {
    render(<Button variant="success">Approve</Button>);
    const button = screen.getByRole('button');
    expect(button.className).toContain('bg-green-600');
  });

  it('applies warning variant', () => {
    render(<Button variant="warning">Caution</Button>);
    const button = screen.getByRole('button');
    expect(button.className).toContain('bg-amber-500');
  });

  it('applies info variant', () => {
    render(<Button variant="info">Info</Button>);
    const button = screen.getByRole('button');
    expect(button.className).toContain('bg-blue-600');
  });

  // --- Sizes ---

  it('applies default size', () => {
    render(<Button>Default Size</Button>);
    const button = screen.getByRole('button');
    expect(button.className).toContain('h-9');
  });

  it('applies small size', () => {
    render(<Button size="sm">Small</Button>);
    const button = screen.getByRole('button');
    expect(button.className).toContain('h-8');
  });

  it('applies large size', () => {
    render(<Button size="lg">Large</Button>);
    const button = screen.getByRole('button');
    expect(button.className).toContain('h-10');
  });

  it('applies icon size', () => {
    render(<Button size="icon">X</Button>);
    const button = screen.getByRole('button');
    expect(button.className).toContain('size-9');
  });

  // --- Interaction ---

  it('handles click events', async () => {
    const user = userEvent.setup();
    let clicked = false;
    render(<Button onClick={() => { clicked = true; }}>Click</Button>);

    await user.click(screen.getByRole('button'));
    expect(clicked).toBe(true);
  });

  it('does not fire click when disabled', async () => {
    const user = userEvent.setup();
    let clicked = false;
    render(<Button disabled onClick={() => { clicked = true; }}>Disabled</Button>);

    await user.click(screen.getByRole('button'));
    expect(clicked).toBe(false);
  });

  // --- Accessibility ---

  it('applies disabled attribute', () => {
    render(<Button disabled>Disabled</Button>);
    const button = screen.getByRole('button');
    expect(button).toBeDisabled();
  });

  it('supports aria-label', () => {
    render(<Button aria-label="Close dialog">X</Button>);
    const button = screen.getByRole('button', { name: /close dialog/i });
    expect(button).toBeInTheDocument();
  });

  it('supports type attribute', () => {
    render(<Button type="submit">Submit</Button>);
    const button = screen.getByRole('button');
    expect(button).toHaveAttribute('type', 'submit');
  });

  // --- Custom className ---

  it('merges custom className', () => {
    render(<Button className="my-custom-class">Custom</Button>);
    const button = screen.getByRole('button');
    expect(button.className).toContain('my-custom-class');
  });

  // --- Ref forwarding ---

  it('forwards ref', () => {
    const ref = { current: null as HTMLButtonElement | null };
    render(<Button ref={ref}>Ref Test</Button>);
    expect(ref.current).toBeInstanceOf(HTMLButtonElement);
  });
});
