/**
 * GridSystemPreview Widget Tests (G14 Batch 6)
 *
 * @version 0.2.3
 */

import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { GridSystemPreview } from '../../components/widgets/GridSystemPreview';

describe('GridSystemPreview', () => {
  const baseProps = {
    device: 'Desktop',
    columns: 12,
    gutter: '24px',
    margin: '32px',
  };

  it('renders device name', () => {
    render(<GridSystemPreview {...baseProps} />);
    expect(screen.getByText('Desktop')).toBeInTheDocument();
  });

  it('renders column info', () => {
    render(<GridSystemPreview {...baseProps} />);
    expect(screen.getByText(/12 columns/)).toBeInTheDocument();
  });

  it('renders gutter info', () => {
    render(<GridSystemPreview {...baseProps} />);
    expect(screen.getByText(/Gutter 24px/)).toBeInTheDocument();
  });

  it('renders margin info', () => {
    render(<GridSystemPreview {...baseProps} />);
    expect(screen.getByText(/Margin 32px/)).toBeInTheDocument();
  });

  it('renders column count badge', () => {
    render(<GridSystemPreview {...baseProps} />);
    expect(screen.getByText('12 cols')).toBeInTheDocument();
  });

  it('renders correct number of grid cells', () => {
    render(<GridSystemPreview {...baseProps} />);
    // Each cell has a number 1-12
    expect(screen.getByText('1')).toBeInTheDocument();
    expect(screen.getByText('12')).toBeInTheDocument();
  });

  it('renders 4 cells for mobile grid', () => {
    render(
      <GridSystemPreview device="Mobile" columns={4} gutter="16px" margin="16px" />
    );
    expect(screen.getByText('4 cols')).toBeInTheDocument();
    expect(screen.getByText('4')).toBeInTheDocument();
  });
});
