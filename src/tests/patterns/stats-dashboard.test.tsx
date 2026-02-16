/**
 * StatsDashboard Pattern Tests (G14 Batch 8)
 *
 * Tests for StatsDashboard rendering: stat cards, values, trends, progress bars.
 *
 * @version 0.2.3
 */

import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { StatsDashboard } from '../../components/patterns/StatsDashboard';

describe('StatsDashboard', () => {
  // --- Rendering ---

  it('renders without crashing', () => {
    const { container } = render(<StatsDashboard />);
    expect(container.firstChild).toBeTruthy();
  });

  it('renders all 4 stat card titles', () => {
    render(<StatsDashboard />);
    expect(screen.getByText('Active Portfolio')).toBeInTheDocument();
    expect(screen.getByText('Invoices Processed')).toBeInTheDocument();
    expect(screen.getByText('Approval Rate')).toBeInTheDocument();
    expect(screen.getByText('Average Time')).toBeInTheDocument();
  });

  it('renders stat values', () => {
    render(<StatsDashboard />);
    expect(screen.getByText('$45,231,890')).toBeInTheDocument();
    expect(screen.getByText('1,234')).toBeInTheDocument();
    expect(screen.getByText('94.2%')).toBeInTheDocument();
    expect(screen.getByText('2.4 days')).toBeInTheDocument();
  });

  it('renders stat subtitles', () => {
    render(<StatsDashboard />);
    expect(screen.getByText('vs last month')).toBeInTheDocument();
    expect(screen.getByText('this month')).toBeInTheDocument();
    expect(screen.getByText('monthly average')).toBeInTheDocument();
    expect(screen.getByText('processing time')).toBeInTheDocument();
  });

  // --- Trends ---

  it('renders trend change percentages', () => {
    render(<StatsDashboard />);
    expect(screen.getByText('+20.1%')).toBeInTheDocument();
    expect(screen.getByText('+12.5%')).toBeInTheDocument();
    expect(screen.getByText('+2.3%')).toBeInTheDocument();
    expect(screen.getByText('-15.8%')).toBeInTheDocument();
  });

  it('renders progress badges', () => {
    render(<StatsDashboard />);
    expect(screen.getByText('75%')).toBeInTheDocument();
    expect(screen.getByText('82%')).toBeInTheDocument();
    expect(screen.getByText('94%')).toBeInTheDocument();
    expect(screen.getByText('68%')).toBeInTheDocument();
  });

  // --- Progress bars ---

  it('renders 4 progress bars', () => {
    const { container } = render(<StatsDashboard />);
    const progressBars = container.querySelectorAll('[role="progressbar"]');
    expect(progressBars.length).toBe(4);
  });

  // --- Icons ---

  it('renders SVG icons for each card', () => {
    const { container } = render(<StatsDashboard />);
    const svgs = container.querySelectorAll('svg');
    // 4 stat icons + 4 trend icons = 8
    expect(svgs.length).toBeGreaterThanOrEqual(8);
  });

  // --- Card structure ---

  it('renders 4 card elements', () => {
    const { container } = render(<StatsDashboard />);
    const cards = container.querySelectorAll('[data-slot="card"]');
    expect(cards.length).toBe(4);
  });

  // --- Grid layout ---

  it('uses grid layout', () => {
    const { container } = render(<StatsDashboard />);
    const grid = container.firstChild as HTMLElement;
    expect(grid.className).toContain('grid');
  });

  // --- Separators ---

  it('renders separators inside cards', () => {
    const { container } = render(<StatsDashboard />);
    const separators = container.querySelectorAll('[data-slot="separator-root"]');
    expect(separators.length).toBe(4);
  });
});
