/**
 * StatusKPICard Widget Tests (G14 Batch 3)
 *
 * Tests for StatusKPICard rendering, variants, and interactions.
 *
 * @version 0.2.3
 */

import { describe, it, expect, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { StatusKPICard } from '../../components/widgets/StatusKPICard';

describe('StatusKPICard', () => {
  const baseProps = {
    title: 'In Negotiation',
    subtitle: 'Active operations',
  };

  // --- Basic rendering ---

  it('renders title and subtitle', () => {
    render(<StatusKPICard {...baseProps} />);
    expect(screen.getByText('In Negotiation')).toBeInTheDocument();
    expect(screen.getByText('Active operations')).toBeInTheDocument();
  });

  it('renders amount when provided', () => {
    render(<StatusKPICard {...baseProps} amount="$1,500,000" />);
    expect(screen.getByText('$1,500,000')).toBeInTheDocument();
  });

  it('renders count with singular label', () => {
    render(<StatusKPICard {...baseProps} count={1} />);
    expect(screen.getByText('1 operation')).toBeInTheDocument();
  });

  it('renders count with plural label', () => {
    render(<StatusKPICard {...baseProps} count={5} />);
    expect(screen.getByText('5 operations')).toBeInTheDocument();
  });

  it('renders count of zero', () => {
    render(<StatusKPICard {...baseProps} count={0} />);
    expect(screen.getByText('0 operations')).toBeInTheDocument();
  });

  // --- Variants ---

  it('renders default variant', () => {
    const { container } = render(<StatusKPICard {...baseProps} />);
    const card = container.querySelector('[data-slot="card"]');
    expect(card).toBeTruthy();
  });

  it('renders negotiation variant', () => {
    const { container } = render(
      <StatusKPICard {...baseProps} variant="negotiation" />
    );
    expect(container.firstChild).toBeTruthy();
  });

  it('renders disbursed variant', () => {
    const { container } = render(
      <StatusKPICard {...baseProps} variant="disbursed" />
    );
    expect(container.firstChild).toBeTruthy();
  });

  it('renders warning variant', () => {
    const { container } = render(
      <StatusKPICard {...baseProps} variant="warning" />
    );
    expect(container.firstChild).toBeTruthy();
  });

  it('renders error variant', () => {
    const { container } = render(
      <StatusKPICard {...baseProps} variant="error" />
    );
    expect(container.firstChild).toBeTruthy();
  });

  // --- State ---

  it('renders with active state', () => {
    const { container } = render(
      <StatusKPICard {...baseProps} variant="negotiation" state="active" />
    );
    const card = container.querySelector('[data-slot="card"]');
    expect(card?.className).toContain('ring-1');
  });

  it('renders with normal state (no ring)', () => {
    const { container } = render(
      <StatusKPICard {...baseProps} variant="negotiation" state="normal" />
    );
    const card = container.querySelector('[data-slot="card"]');
    expect(card?.className).not.toContain('ring-1');
  });

  // --- Click handler ---

  it('calls onViewClick when card is clicked', async () => {
    const user = userEvent.setup();
    const handleClick = vi.fn();
    render(<StatusKPICard {...baseProps} onViewClick={handleClick} />);
    const card = screen.getByText('In Negotiation').closest('[data-slot="card"]');
    await user.click(card!);
    expect(handleClick).toHaveBeenCalledOnce();
  });

  // --- Custom className ---

  it('merges custom className', () => {
    const { container } = render(
      <StatusKPICard {...baseProps} className="my-custom" />
    );
    const card = container.querySelector('[data-slot="card"]');
    expect(card?.className).toContain('my-custom');
  });

  // --- Icon rendering ---

  it('renders an icon for each variant', () => {
    const { container } = render(
      <StatusKPICard {...baseProps} variant="negotiation" />
    );
    const svg = container.querySelector('svg');
    expect(svg).toBeTruthy();
  });
});
