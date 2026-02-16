/**
 * Collapsible Component Tests (G14 Batch 2)
 *
 * Tests for Collapsible, CollapsibleTrigger, CollapsibleContent.
 * Validates open/close toggling and data-slot attributes.
 *
 * @version 0.2.3
 */

import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import {
  Collapsible,
  CollapsibleTrigger,
  CollapsibleContent,
} from '../../components/ui/collapsible';

describe('Collapsible', () => {
  // --- Rendering ---

  it('renders the root element with data-slot', () => {
    const { container } = render(
      <Collapsible>
        <CollapsibleTrigger>Toggle</CollapsibleTrigger>
        <CollapsibleContent>Content</CollapsibleContent>
      </Collapsible>
    );
    const root = container.firstChild as HTMLElement;
    expect(root).toHaveAttribute('data-slot', 'collapsible');
  });

  it('renders the trigger', () => {
    render(
      <Collapsible>
        <CollapsibleTrigger>Toggle me</CollapsibleTrigger>
        <CollapsibleContent>Hidden content</CollapsibleContent>
      </Collapsible>
    );
    expect(screen.getByText('Toggle me')).toBeInTheDocument();
  });

  it('trigger has data-slot', () => {
    render(
      <Collapsible>
        <CollapsibleTrigger data-testid="trigger">Toggle</CollapsibleTrigger>
        <CollapsibleContent>Content</CollapsibleContent>
      </Collapsible>
    );
    expect(screen.getByTestId('trigger')).toHaveAttribute(
      'data-slot',
      'collapsible-trigger'
    );
  });

  // --- Open/Close behavior ---

  it('hides content by default', () => {
    render(
      <Collapsible>
        <CollapsibleTrigger>Toggle</CollapsibleTrigger>
        <CollapsibleContent>Hidden content</CollapsibleContent>
      </Collapsible>
    );
    expect(screen.queryByText('Hidden content')).not.toBeInTheDocument();
  });

  it('shows content when defaultOpen is true', () => {
    render(
      <Collapsible defaultOpen>
        <CollapsibleTrigger>Toggle</CollapsibleTrigger>
        <CollapsibleContent>Visible content</CollapsibleContent>
      </Collapsible>
    );
    expect(screen.getByText('Visible content')).toBeInTheDocument();
  });

  it('toggles content on trigger click', async () => {
    const user = userEvent.setup();
    render(
      <Collapsible>
        <CollapsibleTrigger>Toggle</CollapsibleTrigger>
        <CollapsibleContent>Toggle content</CollapsibleContent>
      </Collapsible>
    );

    expect(screen.queryByText('Toggle content')).not.toBeInTheDocument();

    await user.click(screen.getByText('Toggle'));
    expect(screen.getByText('Toggle content')).toBeInTheDocument();

    await user.click(screen.getByText('Toggle'));
    expect(screen.queryByText('Toggle content')).not.toBeInTheDocument();
  });

  // --- Disabled ---

  it('does not toggle when disabled', async () => {
    const user = userEvent.setup();
    render(
      <Collapsible disabled>
        <CollapsibleTrigger>Toggle</CollapsibleTrigger>
        <CollapsibleContent>Content</CollapsibleContent>
      </Collapsible>
    );

    await user.click(screen.getByText('Toggle'));
    expect(screen.queryByText('Content')).not.toBeInTheDocument();
  });

  // --- Content data-slot ---

  it('content has data-slot when visible', () => {
    render(
      <Collapsible defaultOpen>
        <CollapsibleTrigger>Toggle</CollapsibleTrigger>
        <CollapsibleContent data-testid="content">
          Some content
        </CollapsibleContent>
      </Collapsible>
    );
    expect(screen.getByTestId('content')).toHaveAttribute(
      'data-slot',
      'collapsible-content'
    );
  });
});
