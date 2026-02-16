/**
 * GaugeChart Advanced Component Tests (G14 Batch 7)
 *
 * Smoke tests for GaugeChart rendering.
 * GaugeChart uses recharts PieChart which doesn't render SVG in jsdom,
 * but we can test the surrounding markup (title, badge, percentage, label).
 *
 * @version 0.2.3
 */

import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { GaugeChart } from '../../components/advanced/GaugeChart';

describe('GaugeChart', () => {
  // --- Rendering ---

  it('renders without crashing', () => {
    const { container } = render(<GaugeChart value={75} />);
    expect(container.firstChild).toBeTruthy();
  });

  it('renders percentage text', () => {
    render(<GaugeChart value={75} />);
    expect(screen.getByText('75%')).toBeInTheDocument();
  });

  it('renders 0% for value 0', () => {
    render(<GaugeChart value={0} />);
    expect(screen.getByText('0%')).toBeInTheDocument();
  });

  it('renders 100% for value >= max', () => {
    render(<GaugeChart value={150} max={100} />);
    expect(screen.getByText('100%')).toBeInTheDocument();
  });

  it('hides percentage when showPercentage is false', () => {
    render(<GaugeChart value={50} showPercentage={false} />);
    expect(screen.queryByText('50%')).not.toBeInTheDocument();
  });

  // --- Label ---

  it('renders label when provided', () => {
    render(<GaugeChart value={60} label="Performance" />);
    expect(screen.getByText('Performance')).toBeInTheDocument();
  });

  it('hides label when showLabel is false', () => {
    render(<GaugeChart value={60} label="Performance" showLabel={false} />);
    expect(screen.queryByText('Performance')).not.toBeInTheDocument();
  });

  // --- Title & Description ---

  it('renders title when provided', () => {
    render(<GaugeChart value={80} title="CPU Usage" />);
    expect(screen.getByText('CPU Usage')).toBeInTheDocument();
  });

  it('renders description when provided', () => {
    render(<GaugeChart value={80} title="CPU" description="Current utilization" />);
    expect(screen.getByText('Current utilization')).toBeInTheDocument();
  });

  // --- Status badge ---

  it('renders Low status for low values', () => {
    render(<GaugeChart value={20} title="Score" />);
    expect(screen.getByText('Low')).toBeInTheDocument();
  });

  it('renders Medium status for medium values', () => {
    render(<GaugeChart value={50} title="Score" />);
    expect(screen.getByText('Medium')).toBeInTheDocument();
  });

  it('renders High status for high values', () => {
    render(<GaugeChart value={90} title="Score" />);
    expect(screen.getByText('High')).toBeInTheDocument();
  });

  // --- Custom max ---

  it('calculates percentage based on custom max', () => {
    // value=50, max=200 → 25%
    render(<GaugeChart value={50} max={200} />);
    expect(screen.getByText('25%')).toBeInTheDocument();
  });
});
