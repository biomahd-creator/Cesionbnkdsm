/**
 * SidebarButton Component Tests (G14 Batch 4)
 *
 * @version 0.2.3
 */

import { describe, it, expect, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { SidebarButton } from '../../components/ui/sidebar-button';

describe('SidebarButton', () => {
  it('renders children', () => {
    render(<SidebarButton>Dashboard</SidebarButton>);
    expect(screen.getByText('Dashboard')).toBeInTheDocument();
  });

  it('renders as a button', () => {
    render(<SidebarButton>Click me</SidebarButton>);
    expect(screen.getByRole('button')).toBeInTheDocument();
  });

  it('renders icon when provided', () => {
    render(
      <SidebarButton icon={<span data-testid="icon" />}>
        Menu
      </SidebarButton>
    );
    expect(screen.getByTestId('icon')).toBeInTheDocument();
  });

  it('renders badge when provided', () => {
    render(
      <SidebarButton badge={<span data-testid="badge">5</span>}>
        Inbox
      </SidebarButton>
    );
    expect(screen.getByTestId('badge')).toBeInTheDocument();
  });

  it('applies active styles when isActive', () => {
    render(<SidebarButton isActive>Active</SidebarButton>);
    const button = screen.getByRole('button');
    expect(button.className).toContain('bg-primary');
  });

  it('applies inactive styles when not active', () => {
    render(<SidebarButton>Inactive</SidebarButton>);
    const button = screen.getByRole('button');
    expect(button.className).not.toContain('bg-primary');
  });

  it('calls onClick when clicked', async () => {
    const user = userEvent.setup();
    const handleClick = vi.fn();
    render(<SidebarButton onClick={handleClick}>Click</SidebarButton>);
    await user.click(screen.getByRole('button'));
    expect(handleClick).toHaveBeenCalledOnce();
  });

  it('merges custom className', () => {
    render(<SidebarButton className="mb-2">Item</SidebarButton>);
    const button = screen.getByRole('button');
    expect(button.className).toContain('mb-2');
  });
});
