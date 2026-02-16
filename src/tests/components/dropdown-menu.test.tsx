/**
 * DropdownMenu Component Tests (G14 Batch 2)
 *
 * Tests for DropdownMenu and its sub-components.
 * Portal-based: content renders into document.body when open.
 *
 * @version 0.2.3
 */

import { describe, it, expect, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuGroup,
} from '../../components/ui/dropdown-menu';

describe('DropdownMenu', () => {
  // --- Trigger ---

  it('renders the trigger', () => {
    render(
      <DropdownMenu>
        <DropdownMenuTrigger>Actions</DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuItem>Edit</DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    );
    expect(screen.getByText('Actions')).toBeInTheDocument();
  });

  it('trigger has data-slot', () => {
    render(
      <DropdownMenu>
        <DropdownMenuTrigger data-testid="trigger">Menu</DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuItem>Item</DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    );
    expect(screen.getByTestId('trigger')).toHaveAttribute(
      'data-slot',
      'dropdown-menu-trigger'
    );
  });

  // --- Open/Close ---

  it('does not show content when closed', () => {
    render(
      <DropdownMenu>
        <DropdownMenuTrigger>Menu</DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuItem>Edit</DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    );
    expect(screen.queryByText('Edit')).not.toBeInTheDocument();
  });

  it('shows content when opened', async () => {
    const user = userEvent.setup();
    render(
      <DropdownMenu>
        <DropdownMenuTrigger>Menu</DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuItem>Edit</DropdownMenuItem>
          <DropdownMenuItem>Delete</DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    );

    await user.click(screen.getByText('Menu'));
    expect(screen.getByText('Edit')).toBeInTheDocument();
    expect(screen.getByText('Delete')).toBeInTheDocument();
  });

  it('shows content when defaultOpen', () => {
    render(
      <DropdownMenu defaultOpen>
        <DropdownMenuTrigger>Menu</DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuItem>Visible Item</DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    );
    expect(screen.getByText('Visible Item')).toBeInTheDocument();
  });

  // --- Data-slots ---

  it('DropdownMenuContent has data-slot', () => {
    render(
      <DropdownMenu defaultOpen>
        <DropdownMenuTrigger>Menu</DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuItem>Item</DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    );
    const content = document.querySelector(
      '[data-slot="dropdown-menu-content"]'
    );
    expect(content).toBeTruthy();
  });

  it('DropdownMenuItem has data-slot', () => {
    render(
      <DropdownMenu defaultOpen>
        <DropdownMenuTrigger>Menu</DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuItem data-testid="item">Edit</DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    );
    expect(screen.getByTestId('item')).toHaveAttribute(
      'data-slot',
      'dropdown-menu-item'
    );
  });

  it('DropdownMenuLabel has data-slot', () => {
    render(
      <DropdownMenu defaultOpen>
        <DropdownMenuTrigger>Menu</DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuLabel data-testid="label">Actions</DropdownMenuLabel>
          <DropdownMenuItem>Edit</DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    );
    expect(screen.getByTestId('label')).toHaveAttribute(
      'data-slot',
      'dropdown-menu-label'
    );
  });

  it('DropdownMenuSeparator has data-slot', () => {
    render(
      <DropdownMenu defaultOpen>
        <DropdownMenuTrigger>Menu</DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuItem>Edit</DropdownMenuItem>
          <DropdownMenuSeparator data-testid="sep" />
          <DropdownMenuItem>Delete</DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    );
    expect(screen.getByTestId('sep')).toHaveAttribute(
      'data-slot',
      'dropdown-menu-separator'
    );
  });

  it('DropdownMenuShortcut has data-slot', () => {
    render(
      <DropdownMenu defaultOpen>
        <DropdownMenuTrigger>Menu</DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuItem>
            Edit
            <DropdownMenuShortcut data-testid="shortcut">
              ⌘E
            </DropdownMenuShortcut>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    );
    expect(screen.getByTestId('shortcut')).toHaveAttribute(
      'data-slot',
      'dropdown-menu-shortcut'
    );
  });

  // --- Variants ---

  it('supports destructive variant', () => {
    render(
      <DropdownMenu defaultOpen>
        <DropdownMenuTrigger>Menu</DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuItem variant="destructive" data-testid="delete">
            Delete
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    );
    expect(screen.getByTestId('delete')).toHaveAttribute(
      'data-variant',
      'destructive'
    );
  });

  // --- Accessibility ---

  it('has role="menu" on content', () => {
    render(
      <DropdownMenu defaultOpen>
        <DropdownMenuTrigger>Menu</DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuItem>Item</DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    );
    expect(screen.getByRole('menu')).toBeInTheDocument();
  });

  it('menu items have role="menuitem"', () => {
    render(
      <DropdownMenu defaultOpen>
        <DropdownMenuTrigger>Menu</DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuItem>Edit</DropdownMenuItem>
          <DropdownMenuItem>Copy</DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    );
    const items = screen.getAllByRole('menuitem');
    expect(items.length).toBe(2);
  });
});
