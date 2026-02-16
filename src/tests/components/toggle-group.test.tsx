/**
 * ToggleGroup Component Tests (G14 Batch 2)
 *
 * Tests for ToggleGroup and ToggleGroupItem.
 * Validates rendering, data-slot, selection, and variant/size propagation.
 *
 * @version 0.2.3
 */

import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { ToggleGroup, ToggleGroupItem } from '../../components/ui/toggle-group';

describe('ToggleGroup', () => {
  // --- Rendering ---

  it('renders with data-slot', () => {
    const { container } = render(
      <ToggleGroup type="single">
        <ToggleGroupItem value="a">A</ToggleGroupItem>
      </ToggleGroup>
    );
    const root = container.firstChild as HTMLElement;
    expect(root).toHaveAttribute('data-slot', 'toggle-group');
  });

  it('renders all items', () => {
    render(
      <ToggleGroup type="single">
        <ToggleGroupItem value="bold">Bold</ToggleGroupItem>
        <ToggleGroupItem value="italic">Italic</ToggleGroupItem>
        <ToggleGroupItem value="underline">Underline</ToggleGroupItem>
      </ToggleGroup>
    );
    expect(screen.getByText('Bold')).toBeInTheDocument();
    expect(screen.getByText('Italic')).toBeInTheDocument();
    expect(screen.getByText('Underline')).toBeInTheDocument();
  });

  it('items have data-slot', () => {
    render(
      <ToggleGroup type="single">
        <ToggleGroupItem value="a" data-testid="item">A</ToggleGroupItem>
      </ToggleGroup>
    );
    expect(screen.getByTestId('item')).toHaveAttribute(
      'data-slot',
      'toggle-group-item'
    );
  });

  // --- Single selection ---

  it('selects an item on click (single mode)', async () => {
    const user = userEvent.setup();
    render(
      <ToggleGroup type="single">
        <ToggleGroupItem value="a" data-testid="a">A</ToggleGroupItem>
        <ToggleGroupItem value="b" data-testid="b">B</ToggleGroupItem>
      </ToggleGroup>
    );

    const itemA = screen.getByTestId('a');
    await user.click(itemA);
    expect(itemA).toHaveAttribute('data-state', 'on');
  });

  it('deselects previous item when another is selected (single mode)', async () => {
    const user = userEvent.setup();
    render(
      <ToggleGroup type="single">
        <ToggleGroupItem value="a" data-testid="a">A</ToggleGroupItem>
        <ToggleGroupItem value="b" data-testid="b">B</ToggleGroupItem>
      </ToggleGroup>
    );

    await user.click(screen.getByTestId('a'));
    await user.click(screen.getByTestId('b'));

    expect(screen.getByTestId('a')).toHaveAttribute('data-state', 'off');
    expect(screen.getByTestId('b')).toHaveAttribute('data-state', 'on');
  });

  // --- Multiple selection ---

  it('allows multiple selections (multiple mode)', async () => {
    const user = userEvent.setup();
    render(
      <ToggleGroup type="multiple">
        <ToggleGroupItem value="bold" data-testid="bold">B</ToggleGroupItem>
        <ToggleGroupItem value="italic" data-testid="italic">I</ToggleGroupItem>
      </ToggleGroup>
    );

    await user.click(screen.getByTestId('bold'));
    await user.click(screen.getByTestId('italic'));

    expect(screen.getByTestId('bold')).toHaveAttribute('data-state', 'on');
    expect(screen.getByTestId('italic')).toHaveAttribute('data-state', 'on');
  });

  // --- Variant propagation ---

  it('passes variant to data attribute', () => {
    const { container } = render(
      <ToggleGroup type="single" variant="outline">
        <ToggleGroupItem value="a">A</ToggleGroupItem>
      </ToggleGroup>
    );
    const root = container.firstChild as HTMLElement;
    expect(root).toHaveAttribute('data-variant', 'outline');
  });

  it('passes size to data attribute', () => {
    const { container } = render(
      <ToggleGroup type="single" size="sm">
        <ToggleGroupItem value="a">A</ToggleGroupItem>
      </ToggleGroup>
    );
    const root = container.firstChild as HTMLElement;
    expect(root).toHaveAttribute('data-size', 'sm');
  });

  // --- Custom className ---

  it('merges custom className on ToggleGroup', () => {
    const { container } = render(
      <ToggleGroup type="single" className="gap-2">
        <ToggleGroupItem value="a">A</ToggleGroupItem>
      </ToggleGroup>
    );
    const root = container.firstChild as HTMLElement;
    expect(root.className).toContain('gap-2');
  });

  // --- Disabled item ---

  it('disabled items cannot be selected', async () => {
    const user = userEvent.setup();
    render(
      <ToggleGroup type="single">
        <ToggleGroupItem value="a" disabled data-testid="disabled">
          A
        </ToggleGroupItem>
      </ToggleGroup>
    );

    await user.click(screen.getByTestId('disabled'));
    expect(screen.getByTestId('disabled')).toHaveAttribute('data-state', 'off');
  });
});
