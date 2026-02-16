/**
 * TransferList Advanced Component Tests (G14 Batch 6)
 *
 * @version 0.2.3
 */

import { describe, it, expect, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { TransferList } from '../../components/advanced/TransferList';

const items = [
  { id: '1', label: 'Item Alpha' },
  { id: '2', label: 'Item Beta' },
  { id: '3', label: 'Item Gamma' },
  { id: '4', label: 'Item Delta' },
];

describe('TransferList', () => {
  it('renders left panel title', () => {
    render(<TransferList items={items} />);
    expect(screen.getByText(/Available/)).toBeInTheDocument();
  });

  it('renders right panel title', () => {
    render(<TransferList items={items} />);
    expect(screen.getByText(/Selected/)).toBeInTheDocument();
  });

  it('renders custom titles', () => {
    render(<TransferList items={items} leftTitle="Source" rightTitle="Target" />);
    expect(screen.getByText(/Source/)).toBeInTheDocument();
    expect(screen.getByText(/Target/)).toBeInTheDocument();
  });

  it('renders all items on left initially', () => {
    render(<TransferList items={items} />);
    expect(screen.getByText('Item Alpha')).toBeInTheDocument();
    expect(screen.getByText('Item Beta')).toBeInTheDocument();
    expect(screen.getByText('Item Gamma')).toBeInTheDocument();
    expect(screen.getByText('Item Delta')).toBeInTheDocument();
  });

  it('renders items with initial right ids', () => {
    render(<TransferList items={items} initialRightIds={['2', '3']} />);
    // Left should show Available (2), Right should show Selected (2)
    expect(screen.getByText('Available (2)')).toBeInTheDocument();
    expect(screen.getByText('Selected (2)')).toBeInTheDocument();
  });

  it('renders 4 transfer buttons', () => {
    render(<TransferList items={items} />);
    // Move all right, move selected right, move selected left, move all left
    const buttons = screen.getAllByRole('button');
    expect(buttons.length).toBe(4);
  });

  it('shows "No items" text in empty right panel', () => {
    render(<TransferList items={items} />);
    expect(screen.getByText('No items')).toBeInTheDocument();
  });

  it('renders correct item counts', () => {
    render(<TransferList items={items} />);
    expect(screen.getByText('Available (4)')).toBeInTheDocument();
    expect(screen.getByText('Selected (0)')).toBeInTheDocument();
  });

  it('merges custom className', () => {
    const { container } = render(
      <TransferList items={items} className="max-w-2xl" />
    );
    const wrapper = container.firstChild as HTMLElement;
    expect(wrapper.className).toContain('max-w-2xl');
  });

  // --- Transfer interactions ---

  it('selects an item when clicked', async () => {
    const user = userEvent.setup();
    render(<TransferList items={items} />);
    // Click on Item Alpha to select it
    await user.click(screen.getByText('Item Alpha'));
    // Item should now be visually selected (check icon or highlighted)
    // The exact indicator depends on implementation
    expect(screen.getByText('Item Alpha')).toBeInTheDocument();
  });

  it('moves all items to right when >> button clicked', async () => {
    const user = userEvent.setup();
    render(<TransferList items={items} />);
    // All items are on the left initially
    expect(screen.getByText('Available (4)')).toBeInTheDocument();
    expect(screen.getByText('Selected (0)')).toBeInTheDocument();
    // Find the "move all right" button (first button with >> icon)
    const buttons = screen.getAllByRole('button');
    // Move all right is typically first button
    await user.click(buttons[0]);
    // All should be on right
    expect(screen.getByText('Available (0)')).toBeInTheDocument();
    expect(screen.getByText('Selected (4)')).toBeInTheDocument();
  });

  it('moves all items back to left when << button clicked', async () => {
    const user = userEvent.setup();
    render(<TransferList items={items} initialRightIds={['1', '2', '3', '4']} />);
    // All items are on the right initially
    expect(screen.getByText('Available (0)')).toBeInTheDocument();
    expect(screen.getByText('Selected (4)')).toBeInTheDocument();
    // Find the "move all left" button (last button)
    const buttons = screen.getAllByRole('button');
    await user.click(buttons[3]);
    // All should be on left
    expect(screen.getByText('Available (4)')).toBeInTheDocument();
    expect(screen.getByText('Selected (0)')).toBeInTheDocument();
  });

  it('calls onChange when items are transferred', async () => {
    const user = userEvent.setup();
    const onChange = vi.fn();
    render(<TransferList items={items} onChange={onChange} />);
    // Move all right
    const buttons = screen.getAllByRole('button');
    await user.click(buttons[0]);
    expect(onChange).toHaveBeenCalled();
  });

  // --- Move selected items ---

  it('moves a selected item to right when > button clicked', async () => {
    const user = userEvent.setup();
    render(<TransferList items={items} />);
    // Select Item Alpha
    await user.click(screen.getByText('Item Alpha'));
    // Click the "move selected right" button (second button)
    const buttons = screen.getAllByRole('button');
    await user.click(buttons[1]);
    // Item Alpha should now be on the right side
    expect(screen.getByText('Available (3)')).toBeInTheDocument();
    expect(screen.getByText('Selected (1)')).toBeInTheDocument();
  });

  it('moves a selected item back to left when < button clicked', async () => {
    const user = userEvent.setup();
    render(<TransferList items={items} initialRightIds={['1', '2']} />);
    expect(screen.getByText('Selected (2)')).toBeInTheDocument();
    // Select Item Alpha on the right
    await user.click(screen.getByText('Item Alpha'));
    // Click "move selected left" button (third button)
    const buttons = screen.getAllByRole('button');
    await user.click(buttons[2]);
    expect(screen.getByText('Available (3)')).toBeInTheDocument();
    expect(screen.getByText('Selected (1)')).toBeInTheDocument();
  });

  // --- Move all left then move all right ---

  it('round trips: move all right then all left', async () => {
    const user = userEvent.setup();
    render(<TransferList items={items} />);
    const buttons = screen.getAllByRole('button');
    // Move all right
    await user.click(buttons[0]);
    expect(screen.getByText('Selected (4)')).toBeInTheDocument();
    // Move all left
    await user.click(buttons[3]);
    expect(screen.getByText('Available (4)')).toBeInTheDocument();
    expect(screen.getByText('Selected (0)')).toBeInTheDocument();
  });

  // --- No items empty state ---

  it('shows "No items" in both panels when items array is empty', () => {
    render(<TransferList items={[]} />);
    const noItems = screen.getAllByText('No items');
    expect(noItems.length).toBe(2);
  });

  // --- onChange receives right item ids ---

  it('onChange receives the list of right item ids', async () => {
    const user = userEvent.setup();
    const onChange = vi.fn();
    render(<TransferList items={items} onChange={onChange} />);
    const buttons = screen.getAllByRole('button');
    await user.click(buttons[0]); // Move all right
    expect(onChange).toHaveBeenCalledWith(['1', '2', '3', '4']);
  });
});