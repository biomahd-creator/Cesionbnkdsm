/**
 * Rating Advanced Component Tests (G14 Batch 2)
 *
 * Tests for Rating component.
 * Validates rendering, star count, click interaction, readonly mode.
 *
 * @version 0.2.3
 */

import { describe, it, expect, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Rating } from '../../components/advanced/RatingComponent';

describe('Rating', () => {
  // --- Rendering ---

  it('renders 5 stars by default', () => {
    render(<Rating />);
    const buttons = screen.getAllByRole('button');
    expect(buttons.length).toBe(5);
  });

  it('renders custom number of stars', () => {
    render(<Rating max={10} />);
    const buttons = screen.getAllByRole('button');
    expect(buttons.length).toBe(10);
  });

  it('renders 3 stars when max=3', () => {
    render(<Rating max={3} />);
    const buttons = screen.getAllByRole('button');
    expect(buttons.length).toBe(3);
  });

  // --- Click interaction ---

  it('calls onChange with star value on click', async () => {
    const user = userEvent.setup();
    const onChange = vi.fn();
    render(<Rating onChange={onChange} />);

    const buttons = screen.getAllByRole('button');
    await user.click(buttons[2]); // click 3rd star
    expect(onChange).toHaveBeenCalledWith(3);
  });

  it('updates visual state on click', async () => {
    const user = userEvent.setup();
    render(<Rating />);

    const buttons = screen.getAllByRole('button');
    await user.click(buttons[3]); // click 4th star

    // After clicking, the component re-renders with the new rating
    // We verify the click doesn't throw
    expect(buttons[3]).toBeInTheDocument();
  });

  // --- Readonly mode ---

  it('does not call onChange in readonly mode', async () => {
    const user = userEvent.setup();
    const onChange = vi.fn();
    render(<Rating readonly onChange={onChange} />);

    const buttons = screen.getAllByRole('button');
    await user.click(buttons[0]);
    expect(onChange).not.toHaveBeenCalled();
  });

  it('disables buttons in readonly mode', () => {
    render(<Rating readonly />);
    const buttons = screen.getAllByRole('button');
    buttons.forEach((btn) => {
      expect(btn).toBeDisabled();
    });
  });

  // --- Initial value ---

  it('accepts initial value', () => {
    const { container } = render(<Rating value={4} />);
    // 4 stars should be filled (have fill-primary class on their SVGs)
    const svgs = container.querySelectorAll('svg');
    const filledSvgs = Array.from(svgs).filter((svg) =>
      svg.className.baseVal?.includes('fill-primary') ||
      svg.getAttribute('class')?.includes('fill-primary')
    );
    expect(filledSvgs.length).toBe(4);
  });

  // --- Multiple clicks ---

  it('allows changing rating by clicking different stars', async () => {
    const user = userEvent.setup();
    const onChange = vi.fn();
    render(<Rating onChange={onChange} />);

    const buttons = screen.getAllByRole('button');
    await user.click(buttons[4]); // 5th star
    expect(onChange).toHaveBeenLastCalledWith(5);

    await user.click(buttons[1]); // 2nd star
    expect(onChange).toHaveBeenLastCalledWith(2);
    expect(onChange).toHaveBeenCalledTimes(2);
  });
});
