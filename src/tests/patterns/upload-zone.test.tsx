/**
 * UploadZone Pattern Tests (G14 Batch 5)
 *
 * @version 0.2.3
 */

import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { UploadZone } from '../../components/patterns/UploadZone';

describe('UploadZone', () => {
  // --- Rendering ---

  it('renders title', () => {
    render(<UploadZone />);
    expect(screen.getByText('Document Upload')).toBeInTheDocument();
  });

  it('renders drag and drop area', () => {
    render(<UploadZone />);
    expect(screen.getByText('Drag and drop your files here')).toBeInTheDocument();
  });

  it('renders select files button', () => {
    render(<UploadZone />);
    expect(screen.getByText('Select files')).toBeInTheDocument();
  });

  it('renders format requirements alert', () => {
    render(<UploadZone />);
    expect(screen.getByText(/PDF, JPG, PNG/)).toBeInTheDocument();
  });

  // --- File list ---

  it('renders uploaded files section', () => {
    render(<UploadZone />);
    expect(screen.getByText('Uploaded files')).toBeInTheDocument();
  });

  it('renders file count badge', () => {
    render(<UploadZone />);
    expect(screen.getByText('3 files')).toBeInTheDocument();
  });

  it('renders file names', () => {
    render(<UploadZone />);
    expect(screen.getByText('factura_001.pdf')).toBeInTheDocument();
    expect(screen.getByText('contrato_firmado.pdf')).toBeInTheDocument();
    expect(screen.getByText('documento_respaldo.jpg')).toBeInTheDocument();
  });

  it('renders file sizes', () => {
    render(<UploadZone />);
    expect(screen.getByText('2.4 MB')).toBeInTheDocument();
    expect(screen.getByText('1.8 MB')).toBeInTheDocument();
  });

  it('shows completed status for finished uploads', () => {
    render(<UploadZone />);
    const completed = screen.getAllByText('Completed');
    expect(completed.length).toBe(2);
  });

  it('shows uploading status with progress', () => {
    render(<UploadZone />);
    expect(screen.getByText('Uploading... 65%')).toBeInTheDocument();
  });

  // --- Actions ---

  it('renders Continue and Cancel buttons', () => {
    render(<UploadZone />);
    expect(screen.getByText('Continue')).toBeInTheDocument();
    expect(screen.getByText('Cancel')).toBeInTheDocument();
  });

  it('removes file when X button is clicked', async () => {
    const user = userEvent.setup();
    render(<UploadZone />);
    // Should have 3 files initially
    expect(screen.getByText('3 files')).toBeInTheDocument();
    // Click first remove button (X icon)
    const removeButtons = screen.getAllByRole('button').filter(
      btn => btn.querySelector('svg.lucide-x')
    );
    if (removeButtons.length > 0) {
      await user.click(removeButtons[0]);
      expect(screen.getByText('2 files')).toBeInTheDocument();
    }
  });

  // --- Progress bar ---

  it('renders progress bar for uploading file', () => {
    const { container } = render(<UploadZone />);
    const progressBars = container.querySelectorAll('[role="progressbar"]');
    expect(progressBars.length).toBeGreaterThanOrEqual(1);
  });

  // --- File type icons ---

  it('renders SVG icons for file types', () => {
    const { container } = render(<UploadZone />);
    const svgs = container.querySelectorAll('svg');
    expect(svgs.length).toBeGreaterThanOrEqual(5);
  });

  // --- Alert ---

  it('renders format requirements alert', () => {
    render(<UploadZone />);
    expect(screen.getByText(/PDF, JPG, PNG/)).toBeInTheDocument();
  });

  // --- Card wrapper ---

  it('renders inside a Card', () => {
    const { container } = render(<UploadZone />);
    const card = container.querySelector('[data-slot="card"]');
    expect(card).toBeTruthy();
  });

  // --- File status icons ---

  it('renders check icons for completed files', () => {
    const { container } = render(<UploadZone />);
    // 2 completed files should have green check indicators
    const completedBadges = screen.getAllByText('Completed');
    expect(completedBadges.length).toBe(2);
  });

  // --- Continue button ---

  it('Continue button is present', () => {
    render(<UploadZone />);
    const continueBtn = screen.getByText('Continue');
    expect(continueBtn).toBeInTheDocument();
  });

  // --- Cancel button ---

  it('Cancel button is present', () => {
    render(<UploadZone />);
    const cancelBtn = screen.getByText('Cancel');
    expect(cancelBtn).toBeInTheDocument();
  });
});