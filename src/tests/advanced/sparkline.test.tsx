/**
 * Sparkline Advanced Component Tests (G14 Batch 7)
 *
 * Smoke tests for Sparkline rendering.
 * Sparkline uses recharts LineChart (renders via SafeChartContainer).
 * We test the surrounding metadata (title, value, trend).
 *
 * @version 0.2.3
 */

import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { Sparkline, type SparklineData } from '../../components/advanced/Sparkline';

const mockData: SparklineData[] = [
  { value: 10 },
  { value: 20 },
  { value: 15 },
  { value: 30 },
  { value: 25 },
];

describe('Sparkline', () => {
  // --- Basic rendering ---

  it('renders without crashing', () => {
    const { container } = render(<Sparkline data={mockData} />);
    expect(container.firstChild).toBeTruthy();
  });

  // --- With title and value ---

  it('renders title when provided', () => {
    render(<Sparkline data={mockData} title="Revenue" value="$12,500" />);
    expect(screen.getByText('Revenue')).toBeInTheDocument();
  });

  it('renders value when provided', () => {
    render(<Sparkline data={mockData} title="Revenue" value="$12,500" />);
    expect(screen.getByText('$12,500')).toBeInTheDocument();
  });

  it('renders numeric value', () => {
    render(<Sparkline data={mockData} value={42} />);
    expect(screen.getByText('42')).toBeInTheDocument();
  });

  // --- Trend / Change ---

  it('renders positive change with +', () => {
    render(<Sparkline data={mockData} title="Sales" value="100" change={12.5} />);
    expect(screen.getByText('+12.5%')).toBeInTheDocument();
  });

  it('renders negative change', () => {
    render(<Sparkline data={mockData} title="Sales" value="100" change={-5.2} />);
    expect(screen.getByText('-5.2%')).toBeInTheDocument();
  });

  it('renders zero change', () => {
    render(<Sparkline data={mockData} title="Sales" value="100" change={0} />);
    expect(screen.getByText('0%')).toBeInTheDocument();
  });

  it('renders custom changeLabel', () => {
    render(
      <Sparkline data={mockData} title="Sales" value="100" change={5} changeLabel="vs last month" />
    );
    expect(screen.getByText('vs last month')).toBeInTheDocument();
  });

  it('renders default changeLabel', () => {
    render(<Sparkline data={mockData} title="Sales" value="100" change={5} />);
    expect(screen.getByText('vs last period')).toBeInTheDocument();
  });

  // --- showTrend ---

  it('hides trend when showTrend is false', () => {
    render(<Sparkline data={mockData} title="Sales" value="100" change={5} showTrend={false} />);
    expect(screen.queryByText('+5%')).not.toBeInTheDocument();
  });

  // --- Card wrapper ---

  it('renders inside Card when title provided', () => {
    const { container } = render(<Sparkline data={mockData} title="Metric" />);
    expect(container.querySelector('[data-slot="card"]')).toBeTruthy();
  });

  it('renders without Card when no title or value', () => {
    const { container } = render(<Sparkline data={mockData} />);
    expect(container.querySelector('[data-slot="card"]')).toBeNull();
  });
});
