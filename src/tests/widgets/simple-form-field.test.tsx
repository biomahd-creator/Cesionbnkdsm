/**
 * SimpleFormField Widget Tests (G14 Batch 3)
 *
 * Tests for SimpleFormField rendering, error, and helper states.
 *
 * @version 0.2.3
 */

import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { SimpleFormField } from '../../components/widgets/FormField';

describe('SimpleFormField', () => {
  // --- Basic rendering ---

  it('renders label and input', () => {
    render(<SimpleFormField label="Email" id="email" />);
    expect(screen.getByText('Email')).toBeInTheDocument();
    expect(screen.getByRole('textbox')).toBeInTheDocument();
  });

  it('renders with placeholder', () => {
    render(
      <SimpleFormField label="Name" id="name" placeholder="Enter name" />
    );
    expect(screen.getByPlaceholderText('Enter name')).toBeInTheDocument();
  });

  it('renders with correct input type', () => {
    render(<SimpleFormField label="Password" id="pass" type="password" />);
    // password inputs don't have textbox role
    const input = document.getElementById('pass');
    expect(input).toHaveAttribute('type', 'password');
  });

  // --- Required state ---

  it('shows required asterisk when required', () => {
    render(<SimpleFormField label="Name" id="name" required />);
    expect(screen.getByText('*')).toBeInTheDocument();
  });

  it('shows required badge when required', () => {
    render(<SimpleFormField label="Name" id="name" required />);
    expect(screen.getByText('Requerido')).toBeInTheDocument();
  });

  it('does not show required indicator when not required', () => {
    render(<SimpleFormField label="Name" id="name" />);
    expect(screen.queryByText('*')).not.toBeInTheDocument();
    expect(screen.queryByText('Requerido')).not.toBeInTheDocument();
  });

  // --- Error state ---

  it('shows error message when error is provided', () => {
    render(
      <SimpleFormField label="Email" id="email" error="Invalid email" />
    );
    expect(screen.getByText('Invalid email')).toBeInTheDocument();
  });

  it('applies error styling to input', () => {
    render(
      <SimpleFormField label="Email" id="email" error="Required" />
    );
    const input = document.getElementById('email');
    expect(input?.className).toContain('border-destructive');
  });

  // --- Helper text ---

  it('shows helper text when provided', () => {
    render(
      <SimpleFormField label="Name" id="name" helperText="Enter your full name" />
    );
    expect(screen.getByText('Enter your full name')).toBeInTheDocument();
  });

  it('does not show helper text when error is present', () => {
    render(
      <SimpleFormField
        label="Name"
        id="name"
        helperText="Enter your full name"
        error="Required"
      />
    );
    expect(screen.queryByText('Enter your full name')).not.toBeInTheDocument();
    expect(screen.getByText('Required')).toBeInTheDocument();
  });

  // --- ID binding ---

  it('associates label with input via htmlFor', () => {
    render(<SimpleFormField label="Username" id="username" />);
    const label = screen.getByText('Username');
    expect(label).toHaveAttribute('for', 'username');
  });
});
