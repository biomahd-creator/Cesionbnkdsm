/**
 * Popover Component Tests (G14 Batch 2)
 *
 * Tests for Popover, PopoverTrigger, PopoverContent, PopoverAnchor.
 * Portal-based: content renders into document.body when open.
 *
 * @version 0.2.3
 */

import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import {
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverAnchor,
} from '../../components/ui/popover';

describe('Popover', () => {
  // --- Trigger ---

  it('renders the trigger', () => {
    render(
      <Popover>
        <PopoverTrigger>Open Popover</PopoverTrigger>
        <PopoverContent>Content</PopoverContent>
      </Popover>
    );
    expect(screen.getByText('Open Popover')).toBeInTheDocument();
  });

  it('trigger has data-slot', () => {
    render(
      <Popover>
        <PopoverTrigger data-testid="trigger">Open</PopoverTrigger>
        <PopoverContent>Content</PopoverContent>
      </Popover>
    );
    expect(screen.getByTestId('trigger')).toHaveAttribute(
      'data-slot',
      'popover-trigger'
    );
  });

  // --- Open/Close ---

  it('does not show content when closed', () => {
    render(
      <Popover>
        <PopoverTrigger>Open</PopoverTrigger>
        <PopoverContent>Hidden content</PopoverContent>
      </Popover>
    );
    expect(screen.queryByText('Hidden content')).not.toBeInTheDocument();
  });

  it('shows content when opened via trigger', async () => {
    const user = userEvent.setup();
    render(
      <Popover>
        <PopoverTrigger>Open</PopoverTrigger>
        <PopoverContent>Popover content</PopoverContent>
      </Popover>
    );

    await user.click(screen.getByText('Open'));
    expect(screen.getByText('Popover content')).toBeInTheDocument();
  });

  it('shows content when defaultOpen', () => {
    render(
      <Popover defaultOpen>
        <PopoverTrigger>Open</PopoverTrigger>
        <PopoverContent>Visible content</PopoverContent>
      </Popover>
    );
    expect(screen.getByText('Visible content')).toBeInTheDocument();
  });

  // --- Data-slots ---

  it('PopoverContent has data-slot', () => {
    render(
      <Popover defaultOpen>
        <PopoverTrigger>Open</PopoverTrigger>
        <PopoverContent>Content</PopoverContent>
      </Popover>
    );
    const content = document.querySelector('[data-slot="popover-content"]');
    expect(content).toBeTruthy();
  });

  // --- PopoverAnchor ---

  it('PopoverAnchor has data-slot', () => {
    render(
      <Popover>
        <PopoverAnchor data-testid="anchor">Anchor point</PopoverAnchor>
        <PopoverTrigger>Open</PopoverTrigger>
        <PopoverContent>Content</PopoverContent>
      </Popover>
    );
    expect(screen.getByTestId('anchor')).toHaveAttribute(
      'data-slot',
      'popover-anchor'
    );
  });

  // --- Custom className ---

  it('merges custom className on PopoverContent', () => {
    render(
      <Popover defaultOpen>
        <PopoverTrigger>Open</PopoverTrigger>
        <PopoverContent className="w-96">Content</PopoverContent>
      </Popover>
    );
    const content = document.querySelector(
      '[data-slot="popover-content"]'
    ) as HTMLElement;
    expect(content?.className).toContain('w-96');
  });

  // --- Composition ---

  it('renders complex content inside popover', async () => {
    const user = userEvent.setup();
    render(
      <Popover>
        <PopoverTrigger>Settings</PopoverTrigger>
        <PopoverContent>
          <h3>Preferences</h3>
          <label>
            Theme: <select><option>Light</option></select>
          </label>
        </PopoverContent>
      </Popover>
    );

    await user.click(screen.getByText('Settings'));
    expect(screen.getByText('Preferences')).toBeInTheDocument();
    expect(screen.getByText('Theme:')).toBeInTheDocument();
  });
});
