/**
 * FactoringKpiCard Pattern Tests (G14 Batch 4)
 *
 * @version 0.2.3
 */

import { describe, it, expect, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { FactoringKpiCard } from '../../components/patterns/FactoringKpiCard';

describe('FactoringKpiCard', () => {
  const baseProps = {
    label: 'Total Invoices',
    description: 'Current month',
    value: '$1,250,000',
    count: 42,
  };

  it('renders label', () => {
    render(<FactoringKpiCard {...baseProps} />);
    expect(screen.getByText('Total Invoices')).toBeInTheDocument();
  });

  it('renders description', () => {
    render(<FactoringKpiCard {...baseProps} />);
    expect(screen.getByText('Current month')).toBeInTheDocument();
  });

  it('renders value', () => {
    render(<FactoringKpiCard {...baseProps} />);
    expect(screen.getByText('$1,250,000')).toBeInTheDocument();
  });

  it('renders count badge', () => {
    render(<FactoringKpiCard {...baseProps} />);
    expect(screen.getByText('42')).toBeInTheDocument();
  });

  it('renders as a card', () => {
    const { container } = render(<FactoringKpiCard {...baseProps} />);
    const card = container.querySelector('[data-slot="card"]');
    expect(card).toBeTruthy();
  });

  it('calls onClick when clicked', async () => {
    const user = userEvent.setup();
    const handleClick = vi.fn();
    render(<FactoringKpiCard {...baseProps} onClick={handleClick} />);
    await user.click(screen.getByText('Total Invoices'));
    expect(handleClick).toHaveBeenCalledOnce();
  });

  it('renders with blue variant', () => {
    const { container } = render(
      <FactoringKpiCard {...baseProps} variant="blue" isActive />
    );
    const card = container.querySelector('[data-slot="card"]');
    expect(card?.className).toContain('border-b-blue-500');
  });

  it('renders with green variant', () => {
    const { container } = render(
      <FactoringKpiCard {...baseProps} variant="green" isActive />
    );
    const card = container.querySelector('[data-slot="card"]');
    expect(card?.className).toContain('border-b-green-500');
  });

  it('applies inactive border when not active', () => {
    const { container } = render(
      <FactoringKpiCard {...baseProps} variant="blue" />
    );
    const card = container.querySelector('[data-slot="card"]');
    expect(card?.className).toContain('border-b-gray-400');
  });

  it('renders icon when provided', () => {
    render(
      <FactoringKpiCard {...baseProps} icon={<span data-testid="kpi-icon" />} />
    );
    expect(screen.getByTestId('kpi-icon')).toBeInTheDocument();
  });

  it('merges custom className', () => {
    const { container } = render(
      <FactoringKpiCard {...baseProps} className="min-h-40" />
    );
    const card = container.querySelector('[data-slot="card"]');
    expect(card?.className).toContain('min-h-40');
  });

  it('has cursor-pointer when onClick is set', () => {
    const { container } = render(
      <FactoringKpiCard {...baseProps} onClick={() => {}} />
    );
    const card = container.querySelector('[data-slot="card"]');
    expect(card?.className).toContain('cursor-pointer');
  });
});
