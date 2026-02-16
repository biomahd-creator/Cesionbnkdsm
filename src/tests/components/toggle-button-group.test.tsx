/**
 * ToggleButtonGroup Component Tests (G14 Batch 4)
 *
 * @version 0.2.3
 */

import { describe, it, expect, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { ToggleButtonGroup } from '../../components/ui/toggle-button-group';

const options = [
  { value: 'day', label: 'Day' },
  { value: 'week', label: 'Week' },
  { value: 'month', label: 'Month' },
];

describe('ToggleButtonGroup', () => {
  it('renders all options', () => {
    render(<ToggleButtonGroup options={options} value="day" onChange={() => {}} />);
    expect(screen.getByText('Day')).toBeInTheDocument();
    expect(screen.getByText('Week')).toBeInTheDocument();
    expect(screen.getByText('Month')).toBeInTheDocument();
  });

  it('calls onChange when option is clicked', async () => {
    const user = userEvent.setup();
    const handleChange = vi.fn();
    render(<ToggleButtonGroup options={options} value="day" onChange={handleChange} />);
    await user.click(screen.getByText('Week'));
    expect(handleChange).toHaveBeenCalledWith('week');
  });

  it('shows check icon on active option', () => {
    const { container } = render(
      <ToggleButtonGroup options={options} value="day" onChange={() => {}} />
    );
    // Check icon (svg) appears once for the active option
    const svgs = container.querySelectorAll('svg');
    expect(svgs.length).toBeGreaterThanOrEqual(1);
  });

  it('renders with primary variant', () => {
    const { container } = render(
      <ToggleButtonGroup options={options} value="day" onChange={() => {}} variant="primary" />
    );
    expect(container.firstChild).toBeTruthy();
  });

  it('merges custom className', () => {
    const { container } = render(
      <ToggleButtonGroup options={options} value="day" onChange={() => {}} className="w-64" />
    );
    const wrapper = container.firstChild as HTMLElement;
    expect(wrapper.className).toContain('w-64');
  });

  it('renders correct number of buttons', () => {
    render(<ToggleButtonGroup options={options} value="day" onChange={() => {}} />);
    const buttons = screen.getAllByRole('button');
    expect(buttons.length).toBe(3);
  });

  it('renders options with icons', () => {
    const optionsWithIcons = [
      { value: 'a', label: 'A', icon: <span data-testid="icon-a" /> },
      { value: 'b', label: 'B', icon: <span data-testid="icon-b" /> },
    ];
    render(<ToggleButtonGroup options={optionsWithIcons} value="a" onChange={() => {}} />);
    expect(screen.getByTestId('icon-a')).toBeInTheDocument();
    expect(screen.getByTestId('icon-b')).toBeInTheDocument();
  });
});
