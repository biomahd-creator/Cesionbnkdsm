/**
 * DatePickerWithPresets Advanced Component Tests (G14 Batch 8)
 *
 * Tests for DatePickerWithPresets with preset options and calendar.
 *
 * @version 0.2.3
 */

import { describe, it, expect, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { DatePickerWithPresets } from '../../components/advanced/DatePickerWithPresets';

describe('DatePickerWithPresets', () => {
  // --- Rendering ---

  it('renders the trigger button with placeholder', () => {
    render(<DatePickerWithPresets />);
    expect(screen.getByText('Select date')).toBeInTheDocument();
  });

  it('renders a button element', () => {
    render(<DatePickerWithPresets />);
    const button = screen.getByRole('button');
    expect(button).toBeInTheDocument();
  });

  it('renders calendar icon SVG', () => {
    const { container } = render(<DatePickerWithPresets />);
    const svg = container.querySelector('svg');
    expect(svg).toBeInTheDocument();
  });

  // --- Open popover ---

  it('opens popover when button is clicked', async () => {
    const user = userEvent.setup();
    render(<DatePickerWithPresets />);
    await user.click(screen.getByText('Select date'));
    // Should show the preset select
    expect(screen.getByText('Select...')).toBeInTheDocument();
  });

  it('shows calendar when popover is open', async () => {
    const user = userEvent.setup();
    render(<DatePickerWithPresets />);
    await user.click(screen.getByText('Select date'));
    // Calendar should show day buttons
    const dayButtons = screen.getAllByRole('gridcell');
    expect(dayButtons.length).toBeGreaterThanOrEqual(28);
  });

  // --- Initial value ---

  it('shows formatted date when value is provided', () => {
    const date = new Date(2026, 0, 15); // Jan 15, 2026
    render(<DatePickerWithPresets value={date} />);
    expect(screen.getByText(/January 15/)).toBeInTheDocument();
  });

  // --- Callback ---

  it('calls onChange when a date is selected from calendar', async () => {
    const user = userEvent.setup();
    const handleChange = vi.fn();
    render(<DatePickerWithPresets onChange={handleChange} />);
    await user.click(screen.getByText('Select date'));
    // Click on a day in the calendar
    const dayButtons = screen.getAllByRole('gridcell');
    const clickableDay = dayButtons.find(btn => !btn.getAttribute('disabled') && btn.textContent === '15');
    if (clickableDay) {
      await user.click(clickableDay);
      expect(handleChange).toHaveBeenCalled();
    }
  });

  // --- Trigger button width ---

  it('trigger button has full width class', () => {
    const { container } = render(<DatePickerWithPresets />);
    const button = container.querySelector('button');
    expect(button?.className).toContain('w-full');
  });
});
