/**
 * HoverCard Component Tests (G14 Batch 2)
 *
 * Tests for HoverCard, HoverCardTrigger, HoverCardContent.
 * Portal-based: content renders on hover via portal.
 *
 * Note: jsdom has limited hover support. We test structure
 * and defaultOpen behavior.
 *
 * @version 0.2.3
 */

import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import {
  HoverCard,
  HoverCardTrigger,
  HoverCardContent,
} from '../../components/ui/hover-card';

describe('HoverCard', () => {
  // --- Trigger ---

  it('renders the trigger', () => {
    render(
      <HoverCard>
        <HoverCardTrigger>Hover me</HoverCardTrigger>
        <HoverCardContent>Card content</HoverCardContent>
      </HoverCard>
    );
    expect(screen.getByText('Hover me')).toBeInTheDocument();
  });

  it('trigger has data-slot', () => {
    render(
      <HoverCard>
        <HoverCardTrigger data-testid="trigger">Hover</HoverCardTrigger>
        <HoverCardContent>Content</HoverCardContent>
      </HoverCard>
    );
    expect(screen.getByTestId('trigger')).toHaveAttribute(
      'data-slot',
      'hover-card-trigger'
    );
  });

  // --- Content visibility ---

  it('does not show content by default', () => {
    render(
      <HoverCard>
        <HoverCardTrigger>Hover me</HoverCardTrigger>
        <HoverCardContent>Hidden content</HoverCardContent>
      </HoverCard>
    );
    expect(screen.queryByText('Hidden content')).not.toBeInTheDocument();
  });

  it('shows content when defaultOpen', () => {
    render(
      <HoverCard defaultOpen>
        <HoverCardTrigger>Hover me</HoverCardTrigger>
        <HoverCardContent>Visible content</HoverCardContent>
      </HoverCard>
    );
    expect(screen.getByText('Visible content')).toBeInTheDocument();
  });

  // --- Data-slots ---

  it('HoverCardContent has data-slot when visible', () => {
    render(
      <HoverCard defaultOpen>
        <HoverCardTrigger>Hover me</HoverCardTrigger>
        <HoverCardContent>Content</HoverCardContent>
      </HoverCard>
    );
    const content = document.querySelector(
      '[data-slot="hover-card-content"]'
    );
    expect(content).toBeTruthy();
  });

  // --- Custom className ---

  it('merges custom className on content', () => {
    render(
      <HoverCard defaultOpen>
        <HoverCardTrigger>Hover me</HoverCardTrigger>
        <HoverCardContent className="w-96">Content</HoverCardContent>
      </HoverCard>
    );
    const content = document.querySelector(
      '[data-slot="hover-card-content"]'
    ) as HTMLElement;
    expect(content?.className).toContain('w-96');
  });

  // --- Composition ---

  it('renders complex content', () => {
    render(
      <HoverCard defaultOpen>
        <HoverCardTrigger>@user</HoverCardTrigger>
        <HoverCardContent>
          <div>
            <h4>User Name</h4>
            <p>Bio text here</p>
          </div>
        </HoverCardContent>
      </HoverCard>
    );
    expect(screen.getByText('User Name')).toBeInTheDocument();
    expect(screen.getByText('Bio text here')).toBeInTheDocument();
  });
});
