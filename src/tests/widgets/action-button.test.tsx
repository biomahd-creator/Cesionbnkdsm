/**
 * ActionButton Widget Tests (G14 Batch 4)
 *
 * @version 0.2.3
 */

import { describe, it, expect, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { ActionButton } from '../../components/widgets/ActionButton';
import { Edit, Trash2, Copy } from 'lucide-react';

describe('ActionButton', () => {
  it('renders a button', () => {
    render(<ActionButton icon={Edit} label="Edit" />);
    expect(screen.getByRole('button')).toBeInTheDocument();
  });

  it('renders icon', () => {
    const { container } = render(<ActionButton icon={Edit} label="Edit" />);
    const svg = container.querySelector('svg');
    expect(svg).toBeTruthy();
  });

  it('calls onClick when clicked', async () => {
    const user = userEvent.setup();
    const handleClick = vi.fn();
    render(<ActionButton icon={Edit} label="Edit" onClick={handleClick} />);
    await user.click(screen.getByRole('button'));
    expect(handleClick).toHaveBeenCalledOnce();
  });

  it('wraps in tooltip', () => {
    const { container } = render(<ActionButton icon={Trash2} label="Delete" />);
    const trigger = container.querySelector('[data-slot="tooltip-trigger"]');
    expect(trigger).toBeTruthy();
  });

  it('renders with different variants', () => {
    const { container } = render(
      <ActionButton icon={Copy} label="Copy" variant="outline" />
    );
    expect(container.firstChild).toBeTruthy();
  });

  it('renders with destructive variant', () => {
    render(<ActionButton icon={Trash2} label="Delete" variant="destructive" />);
    const button = screen.getByRole('button');
    expect(button).toBeInTheDocument();
  });
});
