/**
 * Menubar Component Tests (G14 Batch 5)
 *
 * @version 0.2.3
 */

import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import {
  Menubar,
  MenubarMenu,
  MenubarTrigger,
  MenubarContent,
  MenubarItem,
  MenubarSeparator,
  MenubarShortcut,
  MenubarLabel,
} from '../../components/ui/menubar';

describe('Menubar', () => {
  it('renders with data-slot', () => {
    const { container } = render(
      <Menubar>
        <MenubarMenu>
          <MenubarTrigger>File</MenubarTrigger>
        </MenubarMenu>
      </Menubar>
    );
    expect(container.querySelector('[data-slot="menubar"]')).toBeTruthy();
  });

  it('renders trigger with data-slot', () => {
    const { container } = render(
      <Menubar>
        <MenubarMenu>
          <MenubarTrigger>File</MenubarTrigger>
        </MenubarMenu>
      </Menubar>
    );
    expect(container.querySelector('[data-slot="menubar-trigger"]')).toBeTruthy();
  });

  it('renders trigger text', () => {
    render(
      <Menubar>
        <MenubarMenu>
          <MenubarTrigger>File</MenubarTrigger>
        </MenubarMenu>
      </Menubar>
    );
    expect(screen.getByText('File')).toBeInTheDocument();
  });

  it('renders multiple triggers', () => {
    render(
      <Menubar>
        <MenubarMenu>
          <MenubarTrigger>File</MenubarTrigger>
        </MenubarMenu>
        <MenubarMenu>
          <MenubarTrigger>Edit</MenubarTrigger>
        </MenubarMenu>
        <MenubarMenu>
          <MenubarTrigger>View</MenubarTrigger>
        </MenubarMenu>
      </Menubar>
    );
    expect(screen.getByText('File')).toBeInTheDocument();
    expect(screen.getByText('Edit')).toBeInTheDocument();
    expect(screen.getByText('View')).toBeInTheDocument();
  });

  it('merges custom className on Menubar', () => {
    const { container } = render(
      <Menubar className="w-full">
        <MenubarMenu>
          <MenubarTrigger>File</MenubarTrigger>
        </MenubarMenu>
      </Menubar>
    );
    const bar = container.querySelector('[data-slot="menubar"]');
    expect(bar?.className).toContain('w-full');
  });

  it('renders shortcut with data-slot', () => {
    // MenubarShortcut is a pure span, doesn't need context
    const { container } = render(<MenubarShortcut>⌘S</MenubarShortcut>);
    const shortcut = container.querySelector('[data-slot="menubar-shortcut"]');
    expect(shortcut).toBeTruthy();
    expect(shortcut?.textContent).toBe('⌘S');
  });

  it('opens menu on trigger click and shows items', async () => {
    const user = userEvent.setup();
    render(
      <Menubar>
        <MenubarMenu>
          <MenubarTrigger>File</MenubarTrigger>
          <MenubarContent>
            <MenubarItem>New</MenubarItem>
            <MenubarItem>Open</MenubarItem>
          </MenubarContent>
        </MenubarMenu>
      </Menubar>
    );
    await user.click(screen.getByText('File'));
    expect(screen.getByText('New')).toBeInTheDocument();
    expect(screen.getByText('Open')).toBeInTheDocument();
  });
});
