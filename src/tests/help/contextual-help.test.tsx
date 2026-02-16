/**
 * ContextualHelp Tests (G14 Batch 7)
 *
 * Tests for ContextualHelp tooltip-only, popover-only, and combined modes.
 * Note: Tooltip content renders via Radix portal, so we test trigger buttons
 * and popover content on click.
 *
 * @version 0.2.3
 */

import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { ContextualHelp } from '../../components/help/ContextualHelp';

describe('ContextualHelp', () => {
  // --- Tooltip only ---

  it('renders tooltip-only button with correct aria-label', () => {
    render(<ContextualHelp quickHelp="Quick tip" tooltipOnly />);
    expect(screen.getByRole('button', { name: /help information/i })).toBeInTheDocument();
  });

  // --- Popover only ---

  it('renders popover-only button with correct aria-label', () => {
    render(<ContextualHelp detailedHelp="Detailed explanation" popoverOnly />);
    expect(screen.getByRole('button', { name: /show detailed help/i })).toBeInTheDocument();
  });

  it('shows detailed help on popover click', async () => {
    const user = userEvent.setup();
    render(<ContextualHelp detailedHelp="Detailed explanation" popoverOnly />);
    await user.click(screen.getByRole('button', { name: /show detailed help/i }));
    expect(screen.getByText('Detailed explanation')).toBeInTheDocument();
  });

  it('shows title in popover when provided', async () => {
    const user = userEvent.setup();
    render(<ContextualHelp detailedHelp="Some help text" title="Help Title" popoverOnly />);
    await user.click(screen.getByRole('button', { name: /show detailed help/i }));
    expect(screen.getByText('Help Title')).toBeInTheDocument();
    expect(screen.getByText('Some help text')).toBeInTheDocument();
  });

  // --- Combined mode (default) ---

  it('renders both tooltip and popover buttons in combined mode', () => {
    render(<ContextualHelp quickHelp="Quick" detailedHelp="Detailed" />);
    expect(screen.getByRole('button', { name: /quick help/i })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /show detailed help/i })).toBeInTheDocument();
  });

  it('shows popover content on click in combined mode', async () => {
    const user = userEvent.setup();
    render(<ContextualHelp quickHelp="Quick" detailedHelp="Detailed content here" />);
    await user.click(screen.getByRole('button', { name: /show detailed help/i }));
    expect(screen.getByText('Detailed content here')).toBeInTheDocument();
  });

  // --- Edge cases ---

  it('renders nothing visible when no props provided', () => {
    const { container } = render(<ContextualHelp />);
    // No tooltip or popover triggers should be rendered
    expect(container.querySelector('button')).toBeNull();
  });

  it('renders only popover when only detailedHelp and no tooltipOnly flag', () => {
    render(<ContextualHelp detailedHelp="Only detail" />);
    // Should render the popover trigger in combined mode
    expect(screen.getByRole('button', { name: /show detailed help/i })).toBeInTheDocument();
  });
});
