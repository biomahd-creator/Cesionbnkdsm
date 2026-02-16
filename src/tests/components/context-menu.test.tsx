/**
 * ContextMenu Component Tests (G14 Batch 5)
 *
 * Tests static subcomponents (Shortcut, Separator, Label).
 * ContextMenu requires right-click which jsdom doesn't fully support,
 * so we test the pure HTML wrappers directly.
 *
 * @version 0.2.3
 */

import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import {
  ContextMenu,
  ContextMenuTrigger,
  ContextMenuShortcut,
} from '../../components/ui/context-menu';

describe('ContextMenu', () => {
  // --- ContextMenuShortcut (pure span) ---

  it('renders shortcut with data-slot', () => {
    const { container } = render(<ContextMenuShortcut>⌘C</ContextMenuShortcut>);
    const shortcut = container.querySelector('[data-slot="context-menu-shortcut"]');
    expect(shortcut).toBeTruthy();
    expect(shortcut?.textContent).toBe('⌘C');
  });

  it('merges className on shortcut', () => {
    const { container } = render(
      <ContextMenuShortcut className="text-primary">⌘V</ContextMenuShortcut>
    );
    const shortcut = container.querySelector('[data-slot="context-menu-shortcut"]');
    expect(shortcut?.className).toContain('text-primary');
  });

  // --- ContextMenu + Trigger (basic render) ---

  it('renders trigger with data-slot', () => {
    const { container } = render(
      <ContextMenu>
        <ContextMenuTrigger>Right click me</ContextMenuTrigger>
      </ContextMenu>
    );
    const trigger = container.querySelector('[data-slot="context-menu-trigger"]');
    expect(trigger).toBeTruthy();
  });

  it('renders trigger children', () => {
    render(
      <ContextMenu>
        <ContextMenuTrigger>Right click here</ContextMenuTrigger>
      </ContextMenu>
    );
    expect(screen.getByText('Right click here')).toBeInTheDocument();
  });

  it('renders shortcut with tracking-widest class', () => {
    const { container } = render(<ContextMenuShortcut>Del</ContextMenuShortcut>);
    const shortcut = container.querySelector('[data-slot="context-menu-shortcut"]');
    expect(shortcut?.className).toContain('tracking-widest');
  });
});
