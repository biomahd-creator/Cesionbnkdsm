/**
 * ColorPresetButton Widget Tests (G14 Batch 5)
 *
 * @version 0.2.3
 */

import { describe, it, expect, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { ColorPresetButton } from '../../components/widgets/ColorPresetButton';

describe('ColorPresetButton', () => {
  it('renders a button', () => {
    render(<ColorPresetButton color="#84cc16" onClick={() => {}} />);
    expect(screen.getByRole('button')).toBeInTheDocument();
  });

  it('has aria-label with color value', () => {
    render(<ColorPresetButton color="#84cc16" onClick={() => {}} />);
    expect(screen.getByLabelText('Select color #84cc16')).toBeInTheDocument();
  });

  it('applies primary bg class for known color', () => {
    render(<ColorPresetButton color="#84cc16" onClick={() => {}} />);
    const button = screen.getByRole('button');
    expect(button.className).toContain('bg-primary');
  });

  it('applies secondary bg class for known color', () => {
    render(<ColorPresetButton color="#1C2D3A" onClick={() => {}} />);
    const button = screen.getByRole('button');
    expect(button.className).toContain('bg-secondary');
  });

  it('applies selected ring styles when isSelected', () => {
    render(<ColorPresetButton color="#84cc16" isSelected onClick={() => {}} />);
    const button = screen.getByRole('button');
    expect(button.className).toContain('ring-2');
    expect(button.className).toContain('border-primary');
  });

  it('does not apply selected styles when not selected', () => {
    render(<ColorPresetButton color="#84cc16" onClick={() => {}} />);
    const button = screen.getByRole('button');
    expect(button.className).toContain('border-transparent');
  });

  it('calls onClick when clicked', async () => {
    const user = userEvent.setup();
    const handleClick = vi.fn();
    render(<ColorPresetButton color="#ef4444" onClick={handleClick} />);
    await user.click(screen.getByRole('button'));
    expect(handleClick).toHaveBeenCalledOnce();
  });

  it('has transition hover class', () => {
    render(<ColorPresetButton color="#84cc16" onClick={() => {}} />);
    const button = screen.getByRole('button');
    expect(button.className).toContain('hover:scale-110');
  });
});
