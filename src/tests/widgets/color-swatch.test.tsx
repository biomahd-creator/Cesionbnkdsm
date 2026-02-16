/**
 * ColorSwatch Widget Tests (G14 Batch 3)
 *
 * Tests for ColorSwatch rendering and copy interaction.
 *
 * @version 0.2.3
 */

import { describe, it, expect, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { ColorSwatch } from '../../components/widgets/ColorSwatch';

describe('ColorSwatch', () => {
  const baseProps = {
    id: 'primary',
    name: 'Primary Green',
    hex: '#00c951',
    rgb: '0, 201, 81',
    usage: 'Buttons, links, accents',
    copiedColor: null,
    onCopy: vi.fn(),
  };

  // --- Rendering ---

  it('renders color name', () => {
    render(<ColorSwatch {...baseProps} />);
    expect(screen.getByText('Primary Green')).toBeInTheDocument();
  });

  it('renders hex value', () => {
    render(<ColorSwatch {...baseProps} />);
    expect(screen.getByText('#00c951')).toBeInTheDocument();
  });

  it('renders rgb value', () => {
    render(<ColorSwatch {...baseProps} />);
    expect(screen.getByText('0, 201, 81')).toBeInTheDocument();
  });

  it('renders usage description', () => {
    render(<ColorSwatch {...baseProps} />);
    expect(screen.getByText('Buttons, links, accents')).toBeInTheDocument();
  });

  it('renders HEX and RGB labels', () => {
    render(<ColorSwatch {...baseProps} />);
    expect(screen.getByText('HEX')).toBeInTheDocument();
    expect(screen.getByText('RGB')).toBeInTheDocument();
  });

  it('renders Usage label', () => {
    render(<ColorSwatch {...baseProps} />);
    expect(screen.getByText('Usage')).toBeInTheDocument();
  });

  // --- Copy buttons ---

  it('renders copy buttons for hex and rgb', () => {
    render(<ColorSwatch {...baseProps} />);
    const buttons = screen.getAllByRole('button');
    expect(buttons.length).toBe(2); // HEX copy + RGB copy
  });

  it('calls onCopy with hex value when hex copy is clicked', async () => {
    const user = userEvent.setup();
    const handleCopy = vi.fn();
    render(<ColorSwatch {...baseProps} onCopy={handleCopy} />);
    const buttons = screen.getAllByRole('button');
    await user.click(buttons[0]); // first button = HEX copy
    expect(handleCopy).toHaveBeenCalledWith('#00c951', 'primary-hex');
  });

  it('calls onCopy with rgb value when rgb copy is clicked', async () => {
    const user = userEvent.setup();
    const handleCopy = vi.fn();
    render(<ColorSwatch {...baseProps} onCopy={handleCopy} />);
    const buttons = screen.getAllByRole('button');
    await user.click(buttons[1]); // second button = RGB copy
    expect(handleCopy).toHaveBeenCalledWith('0, 201, 81', 'primary-rgb');
  });

  // --- Copied state ---

  it('shows check icon when hex is copied', () => {
    const { container } = render(
      <ColorSwatch {...baseProps} copiedColor="primary-hex" />
    );
    // When copied, a Check icon should appear (different SVG)
    const buttons = screen.getAllByRole('button');
    expect(buttons[0]).toBeTruthy();
  });

  // --- Primary vs Secondary ---

  it('renders with primary styling when isPrimary is true', () => {
    const { container } = render(
      <ColorSwatch {...baseProps} isPrimary={true} />
    );
    const colorBox = container.querySelector('.bg-primary');
    expect(colorBox).toBeTruthy();
  });

  it('renders with secondary styling when isPrimary is false', () => {
    const { container } = render(
      <ColorSwatch {...baseProps} isPrimary={false} />
    );
    const colorBox = container.querySelector('.bg-secondary');
    expect(colorBox).toBeTruthy();
  });
});
