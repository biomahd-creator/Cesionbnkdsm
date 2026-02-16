/**
 * FilterChip Widget Tests (G14 Batch 3)
 *
 * Tests for FilterChip rendering and remove interaction.
 *
 * @version 0.2.3
 */

import { describe, it, expect, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { FilterChip } from '../../components/widgets/FilterChip';

describe('FilterChip', () => {
  // --- Rendering ---

  it('renders label and value', () => {
    render(<FilterChip label="Status" value="Active" />);
    expect(screen.getByText('Status: Active')).toBeInTheDocument();
  });

  it('renders as a Badge', () => {
    const { container } = render(<FilterChip label="Type" value="Invoice" />);
    const badge = container.querySelector('[data-slot="badge"]');
    expect(badge).toBeTruthy();
  });

  // --- Remove button ---

  it('renders remove button when onRemove is provided', () => {
    render(<FilterChip label="Date" value="Jan" onRemove={() => {}} />);
    const button = screen.getByRole('button');
    expect(button).toBeInTheDocument();
  });

  it('does not render remove button when onRemove is not provided', () => {
    render(<FilterChip label="Date" value="Jan" />);
    expect(screen.queryByRole('button')).not.toBeInTheDocument();
  });

  it('calls onRemove when remove button is clicked', async () => {
    const user = userEvent.setup();
    const handleRemove = vi.fn();
    render(<FilterChip label="Status" value="Active" onRemove={handleRemove} />);
    await user.click(screen.getByRole('button'));
    expect(handleRemove).toHaveBeenCalledOnce();
  });

  // --- Content format ---

  it('displays label and value in correct format', () => {
    render(<FilterChip label="Amount" value="$1M - $5M" />);
    expect(screen.getByText('Amount: $1M - $5M')).toBeInTheDocument();
  });
});
