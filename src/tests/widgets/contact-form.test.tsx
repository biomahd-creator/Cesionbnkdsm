/**
 * ContactForm Widget Tests (G14 Batch 4)
 *
 * @version 0.2.3
 */

import { describe, it, expect, vi } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { ContactForm } from '../../components/widgets/ContactForm';

describe('ContactForm', () => {
  // --- Rendering ---

  it('renders form title', () => {
    render(<ContactForm />);
    expect(screen.getByText('Contact Form')).toBeInTheDocument();
  });

  it('renders form description', () => {
    render(<ContactForm />);
    expect(screen.getByText('Fill out the form and we will get in touch with you')).toBeInTheDocument();
  });

  it('renders name field', () => {
    render(<ContactForm />);
    expect(screen.getByLabelText(/Full name/)).toBeInTheDocument();
  });

  it('renders email field', () => {
    render(<ContactForm />);
    expect(screen.getByLabelText(/Email/)).toBeInTheDocument();
  });

  it('renders phone field', () => {
    render(<ContactForm />);
    expect(screen.getByLabelText(/Phone/)).toBeInTheDocument();
  });

  it('renders message field', () => {
    render(<ContactForm />);
    expect(screen.getByLabelText(/Message/)).toBeInTheDocument();
  });

  it('renders submit button with default text', () => {
    render(<ContactForm />);
    expect(screen.getByText('Send Message')).toBeInTheDocument();
  });

  it('renders custom submit button text', () => {
    render(<ContactForm submitButtonText="Submit Now" />);
    expect(screen.getByText('Submit Now')).toBeInTheDocument();
  });

  it('renders response badge', () => {
    render(<ContactForm />);
    expect(screen.getByText('Response in 24h')).toBeInTheDocument();
  });

  // --- Company field ---

  it('renders company field by default', () => {
    render(<ContactForm />);
    expect(screen.getByLabelText(/Company/)).toBeInTheDocument();
  });

  it('hides company field when showCompany is false', () => {
    render(<ContactForm showCompany={false} />);
    expect(screen.queryByLabelText(/Company/)).not.toBeInTheDocument();
  });

  // --- Subject field ---

  it('renders subject field by default', () => {
    render(<ContactForm />);
    expect(screen.getByText('Subject *')).toBeInTheDocument();
  });

  it('hides subject field when showSubject is false', () => {
    render(<ContactForm showSubject={false} />);
    expect(screen.queryByText('Subject *')).not.toBeInTheDocument();
  });

  // --- Validation ---

  it('shows validation errors on empty submit', async () => {
    const user = userEvent.setup();
    render(<ContactForm />);
    await user.click(screen.getByText('Send Message'));
    expect(screen.getByText('Name is required')).toBeInTheDocument();
    expect(screen.getByText('Email is required')).toBeInTheDocument();
    expect(screen.getByText('Message is required')).toBeInTheDocument();
  });

  it('shows email format error', async () => {
    const user = userEvent.setup();
    render(<ContactForm />);
    // jsdom sanitizes type="email" inputs — "invalid-email" becomes "".
    // Use a value valid per HTML spec but invalid per our regex (requires dot after @).
    await user.type(screen.getByPlaceholderText('John Doe'), 'John');
    await user.type(screen.getByPlaceholderText('john@company.com'), 'user@domain');
    await user.click(screen.getByText('Send Message'));
    expect(screen.getByText('Invalid email')).toBeInTheDocument();
  });

  it('shows message length error', async () => {
    const user = userEvent.setup();
    render(<ContactForm />);
    await user.type(screen.getByLabelText(/Full name/), 'John');
    await user.type(screen.getByLabelText(/Email/), 'john@test.com');
    await user.type(screen.getByLabelText(/Message/), 'Short');
    await user.click(screen.getByText('Send Message'));
    expect(screen.getByText('Message must be at least 10 characters')).toBeInTheDocument();
  });

  // --- Accept terms validation ---

  it('shows terms error when not accepted', async () => {
    const user = userEvent.setup();
    render(<ContactForm />);
    await user.type(screen.getByLabelText(/Full name/), 'John Doe');
    await user.type(screen.getByLabelText(/Email/), 'john@test.com');
    await user.type(screen.getByLabelText(/Message/), 'This is a valid test message');
    await user.click(screen.getByText('Send Message'));
    expect(screen.getByText('You must accept the terms and conditions')).toBeInTheDocument();
  });

  // --- Successful submission ---

  it('shows success state after valid submission', async () => {
    vi.useFakeTimers({ shouldAdvanceTime: true });
    const user = userEvent.setup({ advanceTimers: vi.advanceTimersByTime });
    const handleSubmit = vi.fn();
    render(<ContactForm onSubmit={handleSubmit} />);
    await user.type(screen.getByLabelText(/Full name/), 'John Doe');
    await user.type(screen.getByLabelText(/Email/), 'john@test.com');
    await user.type(screen.getByLabelText(/Message/), 'This is a valid test message');
    // Accept terms checkbox
    const checkbox = screen.getByRole('checkbox');
    await user.click(checkbox);
    await user.click(screen.getByText('Send Message'));
    // Wait for simulated API call (1500ms)
    await vi.advanceTimersByTimeAsync(1500);
    // Success state should show
    expect(await screen.findByText(/Message Sent/i)).toBeInTheDocument();
    expect(handleSubmit).toHaveBeenCalledTimes(1);
    vi.useRealTimers();
  });

  // --- Clearing errors on typing ---

  it('clears validation error when user starts typing', async () => {
    const user = userEvent.setup();
    render(<ContactForm />);
    // Submit empty form to trigger errors
    await user.click(screen.getByText('Send Message'));
    expect(screen.getByText('Name is required')).toBeInTheDocument();
    // Start typing in the name field
    await user.type(screen.getByLabelText(/Full name/), 'J');
    // Error should be cleared
    expect(screen.queryByText('Name is required')).not.toBeInTheDocument();
  });

  // --- Phone field typing ---

  it('types into phone field', async () => {
    const user = userEvent.setup();
    render(<ContactForm />);
    const phoneInput = screen.getByLabelText(/Phone/);
    await user.type(phoneInput, '555-1234');
    expect(phoneInput).toHaveValue('555-1234');
  });

  // --- Card structure ---

  it('renders inside a Card component', () => {
    const { container } = render(<ContactForm />);
    const card = container.querySelector('[data-slot="card"]');
    expect(card).toBeTruthy();
  });
});