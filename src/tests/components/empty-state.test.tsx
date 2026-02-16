/**
 * EmptyState Component Tests (G14 Batch 2)
 *
 * Tests for EmptyState (custom component, no Radix).
 * Validates rendering, icon, title, description, action, and children.
 *
 * @version 0.2.3
 */

import { describe, it, expect, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { EmptyState } from '../../components/ui/empty-state';
import { Inbox } from 'lucide-react';

describe('EmptyState', () => {
  const defaultProps = {
    title: 'No items found',
    description: 'Try adjusting your search or filters.',
  };

  // --- Rendering ---

  it('renders title and description', () => {
    render(<EmptyState {...defaultProps} />);
    expect(screen.getByText('No items found')).toBeInTheDocument();
    expect(
      screen.getByText('Try adjusting your search or filters.')
    ).toBeInTheDocument();
  });

  it('renders the default icon (FileQuestion)', () => {
    const { container } = render(<EmptyState {...defaultProps} />);
    // Default icon renders an SVG inside the icon container
    const svgs = container.querySelectorAll('svg');
    expect(svgs.length).toBeGreaterThanOrEqual(1);
  });

  it('renders a custom icon', () => {
    render(<EmptyState {...defaultProps} icon={Inbox} />);
    // Inbox icon should be rendered
    const { container } = render(<EmptyState {...defaultProps} icon={Inbox} />);
    const svgs = container.querySelectorAll('svg');
    expect(svgs.length).toBeGreaterThanOrEqual(1);
  });

  // --- Action button ---

  it('renders action button when provided', () => {
    const handleClick = vi.fn();
    render(
      <EmptyState
        {...defaultProps}
        action={{ label: 'Create new', onClick: handleClick }}
      />
    );
    expect(screen.getByText('Create new')).toBeInTheDocument();
  });

  it('calls action onClick when button is clicked', async () => {
    const user = userEvent.setup();
    const handleClick = vi.fn();
    render(
      <EmptyState
        {...defaultProps}
        action={{ label: 'Add item', onClick: handleClick }}
      />
    );

    await user.click(screen.getByText('Add item'));
    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  it('does not render action button when not provided', () => {
    render(<EmptyState {...defaultProps} />);
    const buttons = screen.queryAllByRole('button');
    expect(buttons.length).toBe(0);
  });

  // --- Children ---

  it('renders children', () => {
    render(
      <EmptyState {...defaultProps}>
        <p>Custom child content</p>
      </EmptyState>
    );
    expect(screen.getByText('Custom child content')).toBeInTheDocument();
  });

  // --- Custom className ---

  it('merges custom className', () => {
    const { container } = render(
      <EmptyState {...defaultProps} className="min-h-[200px]" />
    );
    const root = container.firstChild as HTMLElement;
    expect(root.className).toContain('min-h-[200px]');
  });
});
