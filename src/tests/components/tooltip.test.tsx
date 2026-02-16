/**
 * Tooltip Component Tests (G14 Batch 2)
 *
 * Tests for Tooltip, TooltipTrigger, TooltipContent.
 * Portal-based: content renders into document.body on hover.
 *
 * Note: Tooltip visibility depends on pointer/focus events
 * which behave differently in jsdom. We test structure and
 * basic rendering rather than hover behavior.
 *
 * @version 0.2.3
 */

import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import {
  Tooltip,
  TooltipTrigger,
  TooltipContent,
  TooltipProvider,
} from '../../components/ui/tooltip';

describe('Tooltip', () => {
  // --- Trigger ---

  it('renders the trigger', () => {
    render(
      <Tooltip>
        <TooltipTrigger>Hover me</TooltipTrigger>
        <TooltipContent>Tooltip text</TooltipContent>
      </Tooltip>
    );
    expect(screen.getByText('Hover me')).toBeInTheDocument();
  });

  it('trigger has data-slot', () => {
    render(
      <Tooltip>
        <TooltipTrigger data-testid="trigger">Hover</TooltipTrigger>
        <TooltipContent>Tip</TooltipContent>
      </Tooltip>
    );
    expect(screen.getByTestId('trigger')).toHaveAttribute(
      'data-slot',
      'tooltip-trigger'
    );
  });

  // --- Content visibility ---

  it('does not show tooltip content initially', () => {
    render(
      <Tooltip>
        <TooltipTrigger>Hover me</TooltipTrigger>
        <TooltipContent>Hidden tip</TooltipContent>
      </Tooltip>
    );
    expect(screen.queryByText('Hidden tip')).not.toBeInTheDocument();
  });

  it('shows tooltip content when defaultOpen', () => {
    render(
      <Tooltip defaultOpen>
        <TooltipTrigger>Hover me</TooltipTrigger>
        <TooltipContent>Visible tip</TooltipContent>
      </Tooltip>
    );
    // Radix renders tooltip text twice (visible + hidden role="tooltip" span),
    // so we use getAllByText and verify at least one exists
    const elements = screen.getAllByText('Visible tip');
    expect(elements.length).toBeGreaterThanOrEqual(1);
  });

  // --- Data-slots ---

  it('TooltipContent has data-slot when visible', () => {
    render(
      <Tooltip defaultOpen>
        <TooltipTrigger>Hover me</TooltipTrigger>
        <TooltipContent>Tip text</TooltipContent>
      </Tooltip>
    );
    const content = document.querySelector('[data-slot="tooltip-content"]');
    expect(content).toBeTruthy();
  });

  // --- Provider ---

  it('TooltipProvider renders children', () => {
    render(
      <TooltipProvider>
        <span>Wrapped child</span>
      </TooltipProvider>
    );
    expect(screen.getByText('Wrapped child')).toBeInTheDocument();
  });

  // --- Focus-based tooltip ---

  it('shows tooltip on focus', async () => {
    const user = userEvent.setup();
    render(
      <Tooltip>
        <TooltipTrigger asChild>
          <button>Focus me</button>
        </TooltipTrigger>
        <TooltipContent>Focus tip</TooltipContent>
      </Tooltip>
    );

    await user.tab();
    // After focusing, tooltip should become visible.
    // Radix renders text twice (visible + hidden role="tooltip" span)
    const elements = screen.getAllByText('Focus tip');
    expect(elements.length).toBeGreaterThanOrEqual(1);
  });

  // --- Composition ---

  it('renders with custom trigger element via asChild', () => {
    render(
      <Tooltip>
        <TooltipTrigger asChild>
          <button data-testid="btn">Action</button>
        </TooltipTrigger>
        <TooltipContent>Tooltip for action</TooltipContent>
      </Tooltip>
    );
    expect(screen.getByTestId('btn').tagName).toBe('BUTTON');
  });
});