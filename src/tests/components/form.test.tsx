/**
 * Form Component Tests (G14 Batch 7)
 *
 * Tests for Form, FormField, FormItem, FormLabel, FormControl,
 * FormDescription, and FormMessage components.
 * Requires react-hook-form wrapper to test field context.
 *
 * @version 0.2.3
 */

import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { useForm } from 'react-hook-form@7.55.0';
import {
  Form,
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormDescription,
  FormMessage,
} from '../../components/ui/form';
import { Input } from '../../components/ui/input';

// Helper component that renders a full form
function TestForm({
  defaultValues = { username: '' },
  showDescription = true,
  showMessage = false,
  errorMessage,
}: {
  defaultValues?: { username: string };
  showDescription?: boolean;
  showMessage?: boolean;
  errorMessage?: string;
}) {
  const form = useForm({
    defaultValues,
  });

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(() => {})}>
        <FormField
          control={form.control}
          name="username"
          rules={errorMessage ? { required: errorMessage } : undefined}
          render={({ field }) => (
            <FormItem>
              <FormLabel>Username</FormLabel>
              <FormControl>
                <Input placeholder="Enter username" {...field} />
              </FormControl>
              {showDescription && (
                <FormDescription>Your public display name.</FormDescription>
              )}
              <FormMessage />
            </FormItem>
          )}
        />
        <button type="submit">Submit</button>
      </form>
    </Form>
  );
}

describe('Form', () => {
  // --- Basic rendering ---

  it('renders FormLabel', () => {
    render(<TestForm />);
    expect(screen.getByText('Username')).toBeInTheDocument();
  });

  it('renders FormControl with Input', () => {
    render(<TestForm />);
    expect(screen.getByPlaceholderText('Enter username')).toBeInTheDocument();
  });

  it('renders FormDescription', () => {
    render(<TestForm />);
    expect(screen.getByText('Your public display name.')).toBeInTheDocument();
  });

  it('hides FormDescription when not provided', () => {
    render(<TestForm showDescription={false} />);
    expect(screen.queryByText('Your public display name.')).not.toBeInTheDocument();
  });

  // --- Data slots ---

  it('FormItem has data-slot="form-item"', () => {
    const { container } = render(<TestForm />);
    expect(container.querySelector('[data-slot="form-item"]')).toBeTruthy();
  });

  it('FormLabel has data-slot="form-label"', () => {
    const { container } = render(<TestForm />);
    expect(container.querySelector('[data-slot="form-label"]')).toBeTruthy();
  });

  it('FormControl has data-slot="form-control"', () => {
    const { container } = render(<TestForm />);
    expect(container.querySelector('[data-slot="form-control"]')).toBeTruthy();
  });

  it('FormDescription has data-slot="form-description"', () => {
    const { container } = render(<TestForm />);
    expect(container.querySelector('[data-slot="form-description"]')).toBeTruthy();
  });

  // --- Aria attributes ---

  it('associates label with input via htmlFor', () => {
    render(<TestForm />);
    const label = screen.getByText('Username');
    const input = screen.getByPlaceholderText('Enter username');
    const htmlFor = label.getAttribute('for');
    expect(htmlFor).toBeTruthy();
    expect(input.id).toBe(htmlFor);
  });

  it('sets aria-describedby on control', () => {
    render(<TestForm />);
    const input = screen.getByPlaceholderText('Enter username');
    expect(input.getAttribute('aria-describedby')).toBeTruthy();
  });

  // --- Error state ---

  it('shows error message on submit with required rule', async () => {
    const user = userEvent.setup();
    render(<TestForm errorMessage="Username is required" />);
    await user.click(screen.getByText('Submit'));
    expect(await screen.findByText('Username is required')).toBeInTheDocument();
  });

  it('FormMessage renders nothing when no error', () => {
    const { container } = render(<TestForm />);
    expect(container.querySelector('[data-slot="form-message"]')).toBeNull();
  });

  // --- Input interaction ---

  it('allows typing in the input', async () => {
    const user = userEvent.setup();
    render(<TestForm />);
    const input = screen.getByPlaceholderText('Enter username') as HTMLInputElement;
    await user.type(input, 'johndoe');
    expect(input.value).toBe('johndoe');
  });

  it('renders with default value', () => {
    render(<TestForm defaultValues={{ username: 'preset' }} />);
    const input = screen.getByPlaceholderText('Enter username') as HTMLInputElement;
    expect(input.value).toBe('preset');
  });
});
