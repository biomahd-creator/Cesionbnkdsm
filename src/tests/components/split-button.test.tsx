/**
 * SplitButton Component Tests (G14 Batch 3)
 *
 * Tests for SplitButton main action and dropdown.
 *
 * @version 0.2.3
 */

import { describe, it, expect, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { SplitButton } from '../../components/ui/split-button';

describe('SplitButton', () => {
  const baseProps = {
    label: 'Save',
    onMainAction: vi.fn(),
    actions: [
      { label: 'Save as Draft', onClick: vi.fn() },
      { label: 'Save and Close', onClick: vi.fn() },
    ],
  };

  // --- Rendering ---

  it('renders main button with label', () => {
    render(<SplitButton {...baseProps} />);
    expect(screen.getByText('Save')).toBeInTheDocument();
  });

  it('renders two buttons (main + dropdown trigger)', () => {
    render(<SplitButton {...baseProps} />);
    const buttons = screen.getAllByRole('button');
    expect(buttons.length).toBe(2);
  });

  // --- Main action ---

  it('calls onMainAction when main button is clicked', async () => {
    const user = userEvent.setup();
    const handleMain = vi.fn();
    render(<SplitButton {...baseProps} onMainAction={handleMain} />);
    await user.click(screen.getByText('Save'));
    expect(handleMain).toHaveBeenCalledOnce();
  });

  // --- Dropdown ---

  it('shows dropdown actions when chevron is clicked', async () => {
    const user = userEvent.setup();
    render(<SplitButton {...baseProps} />);
    const buttons = screen.getAllByRole('button');
    // Second button is the dropdown trigger
    await user.click(buttons[1]);
    expect(screen.getByText('Save as Draft')).toBeInTheDocument();
    expect(screen.getByText('Save and Close')).toBeInTheDocument();
  });

  // --- Variant ---

  it('renders with outline variant', () => {
    const { container } = render(
      <SplitButton {...baseProps} variant="outline" />
    );
    expect(container.firstChild).toBeTruthy();
  });

  // --- Custom className ---

  it('merges custom className on wrapper', () => {
    const { container } = render(
      <SplitButton {...baseProps} className="my-class" />
    );
    const wrapper = container.firstChild as HTMLElement;
    expect(wrapper.className).toContain('my-class');
  });

  // --- Structure ---

  it('renders chevron icon in dropdown trigger', () => {
    const { container } = render(<SplitButton {...baseProps} />);
    const svg = container.querySelectorAll('svg');
    expect(svg.length).toBeGreaterThanOrEqual(1);
  });
});
