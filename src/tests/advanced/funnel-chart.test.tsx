/**
 * FunnelChart Advanced Component Tests (G14 Batch 7)
 *
 * Tests for FunnelChart rendering, percentages, drop-off, and summary stats.
 * FunnelChart uses pure CSS bars (no recharts), fully testable in jsdom.
 *
 * @version 0.2.3
 */

import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { FunnelChart, type FunnelStage } from '../../components/advanced/FunnelChart';

const mockData: FunnelStage[] = [
  { name: 'Leads', value: 1000, description: 'Initial contacts' },
  { name: 'Qualified', value: 600 },
  { name: 'Proposals', value: 300 },
  { name: 'Closed', value: 100 },
];

describe('FunnelChart', () => {
  // --- Rendering ---

  it('renders all stage names', () => {
    render(<FunnelChart data={mockData} />);
    expect(screen.getByText('Leads')).toBeInTheDocument();
    expect(screen.getByText('Qualified')).toBeInTheDocument();
    expect(screen.getByText('Proposals')).toBeInTheDocument();
    expect(screen.getByText('Closed')).toBeInTheDocument();
  });

  it('renders stage values', () => {
    render(<FunnelChart data={mockData} />);
    // Values are formatted with toLocaleString()
    expect(screen.getByText(/1,000/)).toBeInTheDocument();
    expect(screen.getByText(/600/)).toBeInTheDocument();
    expect(screen.getByText(/300/)).toBeInTheDocument();
  });

  it('renders conversion percentages by default', () => {
    render(<FunnelChart data={mockData} />);
    // 1000/1000 = 100.0%, 600/1000 = 60.0%, etc.
    expect(screen.getByText(/100\.0%/)).toBeInTheDocument();
    expect(screen.getByText(/60\.0%/)).toBeInTheDocument();
    expect(screen.getByText(/30\.0%/)).toBeInTheDocument();
    expect(screen.getByText(/10\.0%/)).toBeInTheDocument();
  });

  it('hides percentages when showPercentages is false', () => {
    render(<FunnelChart data={mockData} showPercentages={false} />);
    expect(screen.queryByText(/100\.0%/)).not.toBeInTheDocument();
  });

  // --- Drop-off ---

  it('renders drop-off rates by default', () => {
    render(<FunnelChart data={mockData} />);
    // Between Leads (1000) and Qualified (600): 40.0% drop-off
    expect(screen.getByText(/40\.0% drop-off/)).toBeInTheDocument();
    // Between Qualified (600) and Proposals (300): 50.0%
    expect(screen.getByText(/50\.0% drop-off/)).toBeInTheDocument();
  });

  it('shows "lost" count in drop-off', () => {
    render(<FunnelChart data={mockData} />);
    // Between Leads and Qualified: 400 lost
    expect(screen.getByText(/400 lost/)).toBeInTheDocument();
    // Between Qualified and Proposals: 300 lost
    expect(screen.getByText(/300 lost/)).toBeInTheDocument();
  });

  it('hides drop-off when showDropoff is false', () => {
    render(<FunnelChart data={mockData} showDropoff={false} />);
    expect(screen.queryByText(/drop-off/)).not.toBeInTheDocument();
  });

  // --- Summary Stats ---

  it('renders Total Started', () => {
    render(<FunnelChart data={mockData} />);
    expect(screen.getByText('Total Started')).toBeInTheDocument();
  });

  it('renders Completed', () => {
    render(<FunnelChart data={mockData} />);
    expect(screen.getByText('Completed')).toBeInTheDocument();
  });

  it('renders Conversion Rate', () => {
    render(<FunnelChart data={mockData} />);
    expect(screen.getByText('Conversion Rate')).toBeInTheDocument();
  });

  it('renders Total Drop-off', () => {
    render(<FunnelChart data={mockData} />);
    expect(screen.getByText('Total Drop-off')).toBeInTheDocument();
  });

  // --- Title & Description ---

  it('renders title when provided', () => {
    render(<FunnelChart data={mockData} title="Sales Funnel" />);
    expect(screen.getByText('Sales Funnel')).toBeInTheDocument();
  });

  it('renders description when provided', () => {
    render(<FunnelChart data={mockData} title="Sales Funnel" description="Q1 2024" />);
    expect(screen.getByText('Q1 2024')).toBeInTheDocument();
  });

  it('renders stages badge', () => {
    render(<FunnelChart data={mockData} title="Sales Funnel" />);
    expect(screen.getByText('4 stages')).toBeInTheDocument();
  });

  // --- Empty state ---

  it('renders empty div for empty data', () => {
    const { container } = render(<FunnelChart data={[]} />);
    const emptyDiv = container.querySelector('.min-h-\\[100px\\]');
    expect(emptyDiv).toBeTruthy();
  });

  // --- Without title wraps in bare content ---

  it('renders without Card wrapper when no title', () => {
    const { container } = render(<FunnelChart data={mockData} />);
    // No CardHeader or CardTitle
    expect(container.querySelector('[data-slot="card"]')).toBeNull();
  });

  it('renders with Card wrapper when title provided', () => {
    const { container } = render(<FunnelChart data={mockData} title="My Funnel" />);
    expect(container.querySelector('[data-slot="card"]')).toBeTruthy();
  });
});
