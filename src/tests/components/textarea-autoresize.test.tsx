/**
 * TextareaAutoresize Component Tests (G14 Batch 3)
 *
 * Tests for TextareaAutoresize rendering and behavior.
 *
 * @version 0.2.3
 */

import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { TextareaAutoresize } from '../../components/ui/textarea-autoresize';

describe('TextareaAutoresize', () => {
  // --- Rendering ---

  it('renders a textarea', () => {
    render(<TextareaAutoresize />);
    expect(screen.getByRole('textbox')).toBeInTheDocument();
  });

  it('renders with data-slot', () => {
    const { container } = render(<TextareaAutoresize />);
    const el = container.querySelector('[data-slot="textarea"]');
    expect(el).toBeTruthy();
  });

  it('renders with placeholder', () => {
    render(<TextareaAutoresize placeholder="Type here..." />);
    expect(screen.getByPlaceholderText('Type here...')).toBeInTheDocument();
  });

  // --- Typing ---

  it('allows typing text', async () => {
    const user = userEvent.setup();
    render(<TextareaAutoresize />);
    const textarea = screen.getByRole('textbox');
    await user.type(textarea, 'Hello world');
    expect(textarea).toHaveValue('Hello world');
  });

  it('has resize-none class', () => {
    const { container } = render(<TextareaAutoresize />);
    const textarea = container.querySelector('textarea');
    expect(textarea?.className).toContain('resize-none');
  });

  // --- Custom className ---

  it('merges custom className', () => {
    const { container } = render(<TextareaAutoresize className="min-h-32" />);
    const textarea = container.querySelector('textarea');
    expect(textarea?.className).toContain('min-h-32');
  });

  // --- Default value ---

  it('renders with defaultValue', () => {
    render(<TextareaAutoresize defaultValue="Initial text" />);
    expect(screen.getByRole('textbox')).toHaveValue('Initial text');
  });

  // --- Disabled ---

  it('can be disabled', () => {
    render(<TextareaAutoresize disabled />);
    expect(screen.getByRole('textbox')).toBeDisabled();
  });
});
