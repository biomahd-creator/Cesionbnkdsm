/**
 * FilterBar Widget Tests (G14 Batch 4)
 *
 * @version 0.2.3
 */

import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { FilterBar } from '../../components/widgets/FilterBar';
import userEvent from '@testing-library/user-event';

describe('FilterBar', () => {
  it('renders without errors', () => {
    const { container } = render(<FilterBar />);
    expect(container.firstChild).toBeTruthy();
  });

  it('renders search bar', () => {
    render(<FilterBar />);
    expect(screen.getByPlaceholderText('Search by client or invoice number...')).toBeInTheDocument();
  });

  it('renders active filters section', () => {
    render(<FilterBar />);
    expect(screen.getByText('Active filters:')).toBeInTheDocument();
  });

  it('renders filter chips', () => {
    render(<FilterBar />);
    // FilterChip renders "label: value" format
    expect(screen.getByText('Status: Approved')).toBeInTheDocument();
    expect(screen.getByText('Date: January 2024')).toBeInTheDocument();
    expect(screen.getByText('Amount: $1M - $5M')).toBeInTheDocument();
  });

  it('renders clear all button', () => {
    render(<FilterBar />);
    expect(screen.getByText('Clear all')).toBeInTheDocument();
  });

  it('renders filter and download icon buttons', () => {
    const buttons = render(<FilterBar />);
    // At minimum: filter icon btn + download icon btn + clear all + select trigger
    const allButtons = screen.getAllByRole('button');
    expect(allButtons.length).toBeGreaterThanOrEqual(4);
  });

  // --- Search interaction ---

  it('allows typing in the search bar', async () => {
    const user = userEvent.setup();
    render(<FilterBar />);
    const input = screen.getByPlaceholderText('Search by client or invoice number...');
    await user.type(input, 'Acme');
    expect(input).toHaveValue('Acme');
  });

  // --- Filter chip removal ---

  it('renders removable filter chips with X buttons', () => {
    const { container } = render(<FilterBar />);
    // Each FilterChip with onRemove renders a button inside the badge
    const chipButtons = container.querySelectorAll('[data-slot="badge"] button');
    expect(chipButtons.length).toBe(3);
  });

  // --- Clear all button ---

  it('renders Clear all as a clickable button', async () => {
    const user = userEvent.setup();
    render(<FilterBar />);
    const clearAll = screen.getByText('Clear all');
    expect(clearAll).toBeInTheDocument();
    // Should be clickable without throwing
    await user.click(clearAll);
    expect(clearAll).toBeInTheDocument();
  });

  // --- SVG icons ---

  it('renders SVG icons for toolbar buttons', () => {
    const { container } = render(<FilterBar />);
    const svgs = container.querySelectorAll('svg');
    expect(svgs.length).toBeGreaterThanOrEqual(3);
  });

  // --- Card wrapper ---

  it('renders inside a bordered container', () => {
    const { container } = render(<FilterBar />);
    const wrapper = container.firstChild as HTMLElement;
    expect(wrapper).toBeTruthy();
  });
});