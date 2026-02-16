/**
 * StatsGrid Widget Tests (G14 Batch 4)
 *
 * @version 0.2.3
 */

import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { StatsGrid } from '../../components/widgets/StatsGrid';

describe('StatsGrid', () => {
  it('renders without errors', () => {
    const { container } = render(<StatsGrid />);
    expect(container.firstChild).toBeTruthy();
  });

  it('renders all 4 stat cards', () => {
    render(<StatsGrid />);
    expect(screen.getByText('Active Portfolio')).toBeInTheDocument();
    expect(screen.getByText('Invoices Processed')).toBeInTheDocument();
    expect(screen.getByText('Approval Rate')).toBeInTheDocument();
    expect(screen.getByText('Average Time')).toBeInTheDocument();
  });

  it('renders stat values', () => {
    render(<StatsGrid />);
    expect(screen.getByText('$45,231,890')).toBeInTheDocument();
    expect(screen.getByText('1,234')).toBeInTheDocument();
    expect(screen.getByText('94.2%')).toBeInTheDocument();
    expect(screen.getByText('2.4 days')).toBeInTheDocument();
  });

  it('renders trend percentages', () => {
    render(<StatsGrid />);
    expect(screen.getByText('+20.1%')).toBeInTheDocument();
    expect(screen.getByText('+12.5%')).toBeInTheDocument();
    expect(screen.getByText('+2.3%')).toBeInTheDocument();
    expect(screen.getByText('-15.8%')).toBeInTheDocument();
  });

  it('uses grid layout', () => {
    const { container } = render(<StatsGrid />);
    const grid = container.firstChild as HTMLElement;
    expect(grid.className).toContain('grid');
  });
});
