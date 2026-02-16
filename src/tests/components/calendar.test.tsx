/**
 * Calendar Component Tests (G14 Batch 6)
 *
 * Tests for Calendar wrapper around react-day-picker.
 * Note: react-day-picker v8 class names vary by minor version,
 * so we test via data-slot and generic DOM queries.
 * Without a selection mode, days may not render as role="button",
 * so we query <td> cells directly.
 *
 * @version 0.2.3
 */

import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { Calendar } from '../../components/ui/calendar';

describe('Calendar', () => {
  it('renders with data-slot', () => {
    const { container } = render(<Calendar />);
    expect(container.querySelector('[data-slot="calendar"]')).toBeTruthy();
  });

  it('renders navigation buttons', () => {
    render(<Calendar />);
    const buttons = screen.getAllByRole('button');
    expect(buttons.length).toBeGreaterThanOrEqual(2);
  });

  it('renders day cells in grid', () => {
    const { container } = render(<Calendar />);
    // DayPicker renders days inside <td> elements within a table
    const cells = container.querySelectorAll('td');
    // A month always renders at least 28 day cells (4 weeks × 7 days)
    expect(cells.length).toBeGreaterThanOrEqual(28);
  });

  it('renders weekday header row', () => {
    const { container } = render(<Calendar />);
    // DayPicker always renders a thead with day abbreviations
    const thead = container.querySelector('thead');
    expect(thead).toBeTruthy();
  });

  it('renders without crashing in range mode', () => {
    const { container } = render(<Calendar mode="range" />);
    expect(container.querySelector('[data-slot="calendar"]')).toBeTruthy();
  });
});
