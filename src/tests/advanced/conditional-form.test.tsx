/**
 * ConditionalForm Advanced Component Tests (G14 Batch 4)
 *
 * @version 0.2.3
 */

import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { ConditionalForm } from '../../components/advanced/ConditionalForm';

describe('ConditionalForm', () => {
  // --- Initial state ---

  it('renders title', () => {
    render(<ConditionalForm />);
    expect(screen.getByText('Conditional Form Example')).toBeInTheDocument();
  });

  it('renders description', () => {
    render(<ConditionalForm />);
    expect(screen.getByText('Fields appear/disappear based on your selections')).toBeInTheDocument();
  });

  it('shows user type selection initially', () => {
    render(<ConditionalForm />);
    expect(screen.getByLabelText('Individual')).toBeInTheDocument();
    expect(screen.getByLabelText('Business')).toBeInTheDocument();
  });

  it('shows helper text when no user type selected', () => {
    render(<ConditionalForm />);
    expect(screen.getByText('Select your user type to continue')).toBeInTheDocument();
  });

  it('does not show common fields initially', () => {
    render(<ConditionalForm />);
    expect(screen.queryByLabelText(/Full Name/)).not.toBeInTheDocument();
    expect(screen.queryByLabelText(/Email/)).not.toBeInTheDocument();
  });

  // --- Individual selection ---

  it('shows common fields after selecting Individual', async () => {
    const user = userEvent.setup();
    render(<ConditionalForm />);
    await user.click(screen.getByLabelText('Individual'));
    expect(screen.getByLabelText(/Full Name/)).toBeInTheDocument();
    expect(screen.getByLabelText(/Email/)).toBeInTheDocument();
    expect(screen.getByLabelText(/Phone/)).toBeInTheDocument();
    expect(screen.getByLabelText(/Message/)).toBeInTheDocument();
  });

  it('shows submit button after selection', async () => {
    const user = userEvent.setup();
    render(<ConditionalForm />);
    await user.click(screen.getByLabelText('Individual'));
    expect(screen.getByText('Submit Form')).toBeInTheDocument();
  });

  // --- Business selection ---

  it('shows business fields after selecting Business', async () => {
    const user = userEvent.setup();
    render(<ConditionalForm />);
    await user.click(screen.getByLabelText('Business'));
    expect(screen.getByText('Business Information')).toBeInTheDocument();
    expect(screen.getByLabelText(/Company Name/)).toBeInTheDocument();
  });

  it('hides helper text after selection', async () => {
    const user = userEvent.setup();
    render(<ConditionalForm />);
    await user.click(screen.getByLabelText('Individual'));
    expect(screen.queryByText('Select your user type to continue')).not.toBeInTheDocument();
  });

  // --- Reset ---

  it('shows Reset button after selection', async () => {
    const user = userEvent.setup();
    render(<ConditionalForm />);
    await user.click(screen.getByLabelText('Individual'));
    expect(screen.getByText('Reset')).toBeInTheDocument();
  });

  // --- Reset interaction ---

  it('resets form when Reset is clicked', async () => {
    const user = userEvent.setup();
    render(<ConditionalForm />);
    await user.click(screen.getByLabelText('Individual'));
    expect(screen.getByLabelText(/Full Name/)).toBeInTheDocument();
    await user.click(screen.getByText('Reset'));
    // Should go back to initial state
    expect(screen.queryByLabelText(/Full Name/)).not.toBeInTheDocument();
    expect(screen.getByText('Select your user type to continue')).toBeInTheDocument();
  });

  // --- Switching user type ---

  it('switches from Individual to Business', async () => {
    const user = userEvent.setup();
    render(<ConditionalForm />);
    await user.click(screen.getByLabelText('Individual'));
    expect(screen.getByLabelText(/Full Name/)).toBeInTheDocument();
    await user.click(screen.getByLabelText('Business'));
    expect(screen.getByText('Business Information')).toBeInTheDocument();
    expect(screen.getByLabelText(/Company Name/)).toBeInTheDocument();
  });

  // --- Form submission ---

  it('shows success state after submitting', async () => {
    const user = userEvent.setup();
    render(<ConditionalForm />);
    await user.click(screen.getByLabelText('Individual'));
    await user.type(screen.getByLabelText(/Full Name/), 'John Doe');
    await user.type(screen.getByLabelText(/Email/), 'john@test.com');
    await user.click(screen.getByText('Submit Form'));
    expect(screen.getByText(/submitted successfully/i)).toBeInTheDocument();
  });

  // --- Business-specific fields ---

  it('shows Company Name field for Business', async () => {
    const user = userEvent.setup();
    render(<ConditionalForm />);
    await user.click(screen.getByLabelText('Business'));
    expect(screen.getByLabelText(/Company Name/)).toBeInTheDocument();
  });

  it('can type in Company Name', async () => {
    const user = userEvent.setup();
    render(<ConditionalForm />);
    await user.click(screen.getByLabelText('Business'));
    const companyInput = screen.getByLabelText(/Company Name/);
    await user.type(companyInput, 'Acme Corp');
    expect(companyInput).toHaveValue('Acme Corp');
  });

  // --- Individual-specific typing ---

  it('can type in Full Name field', async () => {
    const user = userEvent.setup();
    render(<ConditionalForm />);
    await user.click(screen.getByLabelText('Individual'));
    const nameInput = screen.getByLabelText(/Full Name/);
    await user.type(nameInput, 'Alice');
    expect(nameInput).toHaveValue('Alice');
  });

  it('can type in Email field', async () => {
    const user = userEvent.setup();
    render(<ConditionalForm />);
    await user.click(screen.getByLabelText('Individual'));
    const emailInput = screen.getByLabelText(/Email/);
    await user.type(emailInput, 'alice@test.com');
    expect(emailInput).toHaveValue('alice@test.com');
  });

  it('can type in Phone field', async () => {
    const user = userEvent.setup();
    render(<ConditionalForm />);
    await user.click(screen.getByLabelText('Individual'));
    const phoneInput = screen.getByLabelText(/Phone/);
    await user.type(phoneInput, '1234567890');
    expect(phoneInput).toHaveValue('1234567890');
  });

  it('can type in Message field', async () => {
    const user = userEvent.setup();
    render(<ConditionalForm />);
    await user.click(screen.getByLabelText('Individual'));
    const messageInput = screen.getByLabelText(/Message/);
    await user.type(messageInput, 'Hello world');
    expect(messageInput).toHaveValue('Hello world');
  });
});