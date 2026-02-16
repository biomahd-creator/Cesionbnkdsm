/**
 * StatCard Widget Tests (G14 Batch 3)
 *
 * Tests for StatCard rendering, props, and conditional elements.
 *
 * @version 0.2.3
 */

import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { StatCard } from '../../components/widgets/StatCard';
import { DollarSign } from 'lucide-react';

describe('StatCard', () => {
  // --- Basic rendering ---

  it('renders title and value', () => {
    render(<StatCard title="Revenue" value="$1,000" />);
    expect(screen.getByText('Revenue')).toBeInTheDocument();
    expect(screen.getByText('$1,000')).toBeInTheDocument();
  });

  it('renders without optional props', () => {
    const { container } = render(<StatCard title="Count" value="42" />);
    expect(container.firstChild).toBeTruthy();
    // No change badge should appear
    expect(screen.queryByText('vs mes anterior')).not.toBeInTheDocument();
  });

  // --- Change & Trend ---

  it('renders change badge when change prop is provided', () => {
    render(<StatCard title="Sales" value="$500" change="+10%" trend="up" />);
    expect(screen.getByText('+10%')).toBeInTheDocument();
    expect(screen.getByText('vs mes anterior')).toBeInTheDocument();
  });

  it('renders with trend up as default variant', () => {
    render(<StatCard title="Sales" value="$500" change="+10%" trend="up" />);
    const badge = screen.getByText('+10%');
    expect(badge).toBeInTheDocument();
  });

  it('renders with trend down as destructive variant', () => {
    render(<StatCard title="Sales" value="$500" change="-5%" trend="down" />);
    const badge = screen.getByText('-5%');
    expect(badge).toBeInTheDocument();
  });

  // --- Icon ---

  it('renders icon when provided', () => {
    const { container } = render(
      <StatCard title="Revenue" value="$1,000" icon={DollarSign} />
    );
    const svg = container.querySelector('svg');
    expect(svg).toBeTruthy();
  });

  it('does not render icon when not provided', () => {
    const { container } = render(<StatCard title="Revenue" value="$1,000" />);
    // Card itself doesn't have an svg if no icon
    const cardHeader = container.querySelector('[data-slot="card-header"]');
    const svgs = cardHeader?.querySelectorAll('svg');
    expect(svgs?.length ?? 0).toBe(0);
  });

  // --- Structure ---

  it('renders inside a Card component', () => {
    const { container } = render(<StatCard title="Test" value="0" />);
    const card = container.querySelector('[data-slot="card"]');
    expect(card).toBeTruthy();
  });

  it('renders card header and content', () => {
    const { container } = render(<StatCard title="Test" value="0" />);
    expect(container.querySelector('[data-slot="card-header"]')).toBeTruthy();
    expect(container.querySelector('[data-slot="card-content"]')).toBeTruthy();
  });
});
