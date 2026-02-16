/**
 * Command Component Tests (G14 Batch 3)
 *
 * Tests for Command, CommandInput, CommandList, CommandItem,
 * CommandEmpty, CommandGroup, CommandShortcut, CommandSeparator.
 *
 * Note: cmdk calls scrollIntoView internally which jsdom doesn't
 * support, so we mock it globally.
 *
 * @version 0.2.3
 */

import { describe, it, expect, beforeAll } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import {
  Command,
  CommandInput,
  CommandList,
  CommandItem,
  CommandEmpty,
  CommandGroup,
  CommandShortcut,
  CommandSeparator,
} from '../../components/ui/command';

// cmdk internally calls scrollIntoView which jsdom doesn't implement
beforeAll(() => {
  Element.prototype.scrollIntoView = () => {};
});

describe('Command', () => {
  // --- Command root ---

  it('renders with data-slot', () => {
    const { container } = render(
      <Command>
        <CommandList>
          <CommandItem>Item</CommandItem>
        </CommandList>
      </Command>
    );
    const el = container.querySelector('[data-slot="command"]');
    expect(el).toBeTruthy();
  });

  it('renders children', () => {
    render(
      <Command>
        <CommandList>
          <CommandItem>Test Item</CommandItem>
        </CommandList>
      </Command>
    );
    expect(screen.getByText('Test Item')).toBeInTheDocument();
  });

  it('merges custom className', () => {
    const { container } = render(
      <Command className="h-96">
        <CommandList>
          <CommandItem>Item</CommandItem>
        </CommandList>
      </Command>
    );
    const el = container.querySelector('[data-slot="command"]');
    expect(el?.className).toContain('h-96');
  });

  // --- CommandInput ---

  it('renders input with data-slot', () => {
    const { container } = render(
      <Command>
        <CommandInput placeholder="Search..." />
        <CommandList />
      </Command>
    );
    const input = container.querySelector('[data-slot="command-input"]');
    expect(input).toBeTruthy();
  });

  it('renders input with placeholder', () => {
    render(
      <Command>
        <CommandInput placeholder="Type a command..." />
        <CommandList />
      </Command>
    );
    expect(screen.getByPlaceholderText('Type a command...')).toBeInTheDocument();
  });

  it('renders search icon in input wrapper', () => {
    const { container } = render(
      <Command>
        <CommandInput placeholder="Search..." />
        <CommandList />
      </Command>
    );
    const wrapper = container.querySelector('[data-slot="command-input-wrapper"]');
    expect(wrapper).toBeTruthy();
    const svg = wrapper?.querySelector('svg');
    expect(svg).toBeTruthy();
  });

  // --- CommandList ---

  it('renders list with data-slot', () => {
    const { container } = render(
      <Command>
        <CommandList>
          <CommandItem>Item</CommandItem>
        </CommandList>
      </Command>
    );
    const list = container.querySelector('[data-slot="command-list"]');
    expect(list).toBeTruthy();
  });

  // --- CommandItem ---

  it('renders items', () => {
    render(
      <Command>
        <CommandList>
          <CommandItem>First</CommandItem>
          <CommandItem>Second</CommandItem>
        </CommandList>
      </Command>
    );
    expect(screen.getByText('First')).toBeInTheDocument();
    expect(screen.getByText('Second')).toBeInTheDocument();
  });

  it('renders item with data-slot', () => {
    const { container } = render(
      <Command>
        <CommandList>
          <CommandItem>Item</CommandItem>
        </CommandList>
      </Command>
    );
    const item = container.querySelector('[data-slot="command-item"]');
    expect(item).toBeTruthy();
  });

  // --- CommandEmpty ---

  it('renders empty state when no items match', () => {
    render(
      <Command>
        <CommandInput placeholder="Search..." />
        <CommandList>
          <CommandEmpty>No results found.</CommandEmpty>
        </CommandList>
      </Command>
    );
    // CommandEmpty renders when cmdk has no matching items
    const el = document.querySelector('[data-slot="command-empty"]');
    expect(el).toBeTruthy();
  });

  // --- CommandGroup ---

  it('renders group with data-slot', () => {
    const { container } = render(
      <Command>
        <CommandList>
          <CommandGroup heading="Suggestions">
            <CommandItem>Calendar</CommandItem>
          </CommandGroup>
        </CommandList>
      </Command>
    );
    const group = container.querySelector('[data-slot="command-group"]');
    expect(group).toBeTruthy();
  });

  it('renders group heading', () => {
    render(
      <Command>
        <CommandList>
          <CommandGroup heading="Actions">
            <CommandItem>Run</CommandItem>
          </CommandGroup>
        </CommandList>
      </Command>
    );
    expect(screen.getByText('Actions')).toBeInTheDocument();
  });

  // --- CommandShortcut ---

  it('renders shortcut with data-slot', () => {
    const { container } = render(
      <Command>
        <CommandList>
          <CommandItem>
            Save
            <CommandShortcut>Ctrl+S</CommandShortcut>
          </CommandItem>
        </CommandList>
      </Command>
    );
    const shortcut = container.querySelector('[data-slot="command-shortcut"]');
    expect(shortcut).toBeTruthy();
    expect(shortcut?.textContent).toBe('Ctrl+S');
  });

  // --- CommandSeparator ---

  it('renders separator with data-slot', () => {
    const { container } = render(
      <Command>
        <CommandList>
          <CommandItem>Item 1</CommandItem>
          <CommandSeparator />
          <CommandItem>Item 2</CommandItem>
        </CommandList>
      </Command>
    );
    const sep = container.querySelector('[data-slot="command-separator"]');
    expect(sep).toBeTruthy();
  });

  // --- Filtering ---

  it('filters items based on input', async () => {
    const user = userEvent.setup();
    render(
      <Command>
        <CommandInput placeholder="Search..." />
        <CommandList>
          <CommandItem>Apple</CommandItem>
          <CommandItem>Banana</CommandItem>
          <CommandItem>Cherry</CommandItem>
        </CommandList>
      </Command>
    );

    const input = screen.getByPlaceholderText('Search...');
    await user.type(input, 'Ban');

    // Banana should still be visible
    expect(screen.getByText('Banana')).toBeInTheDocument();
    // Apple and Cherry should be filtered out
    expect(screen.queryByText('Apple')).not.toBeInTheDocument();
    expect(screen.queryByText('Cherry')).not.toBeInTheDocument();
  });
});
