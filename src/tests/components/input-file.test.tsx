/**
 * InputFile Component Tests (G14 Batch 3)
 *
 * Tests for InputFile rendering, file selection, and preview.
 *
 * @version 0.2.3
 */

import { describe, it, expect, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { InputFile } from '../../components/ui/input-file';

describe('InputFile', () => {
  // --- Rendering ---

  it('renders upload area', () => {
    render(<InputFile />);
    expect(screen.getByText('Select a file')).toBeInTheDocument();
    expect(screen.getByText(/drag and drop/)).toBeInTheDocument();
  });

  it('shows max files text for single file', () => {
    render(<InputFile maxFiles={1} />);
    expect(screen.getByText('Maximum 1 file')).toBeInTheDocument();
  });

  it('shows max files text for multiple files', () => {
    render(<InputFile maxFiles={5} />);
    expect(screen.getByText('Maximum 5 files')).toBeInTheDocument();
  });

  it('renders upload icon', () => {
    const { container } = render(<InputFile />);
    const svg = container.querySelector('svg');
    expect(svg).toBeTruthy();
  });

  // --- File input ---

  it('has a hidden file input', () => {
    const { container } = render(<InputFile />);
    const input = container.querySelector('input[type="file"]');
    expect(input).toBeTruthy();
    expect(input?.className).toContain('hidden');
  });

  it('sets multiple attribute when maxFiles > 1', () => {
    const { container } = render(<InputFile maxFiles={3} />);
    const input = container.querySelector('input[type="file"]');
    expect(input).toHaveAttribute('multiple');
  });

  it('does not set multiple when maxFiles is 1', () => {
    const { container } = render(<InputFile maxFiles={1} />);
    const input = container.querySelector('input[type="file"]');
    expect(input).not.toHaveAttribute('multiple');
  });

  // --- File selection ---

  it('calls onFilesChange when file is selected', async () => {
    const user = userEvent.setup();
    const handleChange = vi.fn();
    const { container } = render(<InputFile onFilesChange={handleChange} />);
    const input = container.querySelector('input[type="file"]') as HTMLInputElement;

    const file = new File(['test content'], 'test.txt', { type: 'text/plain' });
    await user.upload(input, file);

    expect(handleChange).toHaveBeenCalledOnce();
    expect(handleChange).toHaveBeenCalledWith([file]);
  });

  // --- Custom className ---

  it('merges custom className on drop zone', () => {
    const { container } = render(<InputFile className="my-class" />);
    const dropZone = container.querySelector('.border-dashed');
    expect(dropZone?.className).toContain('my-class');
  });

  // --- Accept attribute ---

  it('passes accept prop to input', () => {
    const { container } = render(<InputFile accept=".pdf,.doc" />);
    const input = container.querySelector('input[type="file"]');
    expect(input).toHaveAttribute('accept', '.pdf,.doc');
  });
});
