/**
 * FloatingActionButton Component Tests (G14 Batch 3)
 *
 * Tests for FAB rendering, positions, and tooltip.
 *
 * @version 0.2.3
 */

import { describe, it, expect, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { FloatingActionButton } from '../../components/ui/floating-action-button';
import { Plus, Edit } from 'lucide-react';

describe('FloatingActionButton', () => {
  // --- Rendering ---

  it('renders a button', () => {
    render(<FloatingActionButton />);
    expect(screen.getByRole('button')).toBeInTheDocument();
  });

  it('renders with default Plus icon', () => {
    const { container } = render(<FloatingActionButton />);
    const svg = container.querySelector('svg');
    expect(svg).toBeTruthy();
  });

  it('renders with custom icon', () => {
    const { container } = render(<FloatingActionButton icon={Edit} />);
    const svg = container.querySelector('svg');
    expect(svg).toBeTruthy();
  });

  // --- Positions ---

  it('renders at bottom-right by default', () => {
    render(<FloatingActionButton />);
    const button = screen.getByRole('button');
    expect(button.className).toContain('bottom-6');
    expect(button.className).toContain('right-6');
  });

  it('renders at bottom-left', () => {
    render(<FloatingActionButton position="bottom-left" />);
    const button = screen.getByRole('button');
    expect(button.className).toContain('bottom-6');
    expect(button.className).toContain('left-6');
  });

  it('renders at top-right', () => {
    render(<FloatingActionButton position="top-right" />);
    const button = screen.getByRole('button');
    expect(button.className).toContain('top-6');
    expect(button.className).toContain('right-6');
  });

  it('renders at top-left', () => {
    render(<FloatingActionButton position="top-left" />);
    const button = screen.getByRole('button');
    expect(button.className).toContain('top-6');
    expect(button.className).toContain('left-6');
  });

  // --- Click handler ---

  it('calls onClick when clicked', async () => {
    const user = userEvent.setup();
    const handleClick = vi.fn();
    render(<FloatingActionButton onClick={handleClick} />);
    await user.click(screen.getByRole('button'));
    expect(handleClick).toHaveBeenCalledOnce();
  });

  // --- Tooltip ---

  it('renders without tooltip when no label', () => {
    const { container } = render(<FloatingActionButton />);
    // No tooltip provider wrapper
    const tooltipTrigger = container.querySelector('[data-slot="tooltip-trigger"]');
    expect(tooltipTrigger).toBeNull();
  });

  it('wraps in tooltip when label is provided', () => {
    const { container } = render(<FloatingActionButton label="Add new" />);
    const tooltipTrigger = container.querySelector('[data-slot="tooltip-trigger"]');
    expect(tooltipTrigger).toBeTruthy();
  });

  // --- Style ---

  it('has rounded-full class', () => {
    render(<FloatingActionButton />);
    const button = screen.getByRole('button');
    expect(button.className).toContain('rounded-full');
  });

  it('merges custom className', () => {
    render(<FloatingActionButton className="bg-red-500" />);
    const button = screen.getByRole('button');
    expect(button.className).toContain('bg-red-500');
  });
});
