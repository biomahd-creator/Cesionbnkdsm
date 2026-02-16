/**
 * FactoringKpiCardGroup Pattern Tests (G14 Batch 5)
 *
 * @version 0.2.3
 */

import { describe, it, expect, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { FactoringKpiCardGroup } from '../../components/patterns/FactoringKpiCardGroup';

const cards = [
  { id: 'approved', label: 'Approved', description: 'This month', value: '$500K', count: 10, variant: 'green' as const },
  { id: 'pending', label: 'Pending', description: 'Awaiting review', value: '$200K', count: 5, variant: 'yellow' as const },
  { id: 'rejected', label: 'Rejected', description: 'Declined', value: '$50K', count: 2, variant: 'orange' as const },
  { id: 'total', label: 'Total', description: 'All operations', value: '$750K', count: 17, variant: 'blue' as const },
];

describe('FactoringKpiCardGroup', () => {
  it('renders all cards', () => {
    render(<FactoringKpiCardGroup cards={cards} />);
    expect(screen.getByText('Approved')).toBeInTheDocument();
    expect(screen.getByText('Pending')).toBeInTheDocument();
    expect(screen.getByText('Rejected')).toBeInTheDocument();
    expect(screen.getByText('Total')).toBeInTheDocument();
  });

  it('renders card values', () => {
    render(<FactoringKpiCardGroup cards={cards} />);
    expect(screen.getByText('$500K')).toBeInTheDocument();
    expect(screen.getByText('$200K')).toBeInTheDocument();
  });

  it('renders card descriptions', () => {
    render(<FactoringKpiCardGroup cards={cards} />);
    expect(screen.getByText('This month')).toBeInTheDocument();
    expect(screen.getByText('Awaiting review')).toBeInTheDocument();
  });

  it('renders card counts', () => {
    render(<FactoringKpiCardGroup cards={cards} />);
    expect(screen.getByText('10')).toBeInTheDocument();
    expect(screen.getByText('5')).toBeInTheDocument();
  });

  it('highlights active card', () => {
    const { container } = render(
      <FactoringKpiCardGroup cards={cards} activeId="approved" />
    );
    const allCards = container.querySelectorAll('[data-slot="card"]');
    // Active card should have shadow-xl class
    expect(allCards.length).toBe(4);
    const firstCardClass = allCards[0]?.className || '';
    expect(firstCardClass).toContain('shadow-xl');
  });

  it('calls onCardClick with card id', async () => {
    const user = userEvent.setup();
    const handleClick = vi.fn();
    render(
      <FactoringKpiCardGroup cards={cards} onCardClick={handleClick} />
    );
    // Click on the card containing "Pending" text — click bubbles to Card onClick
    const pendingLabel = screen.getByText('Pending');
    await user.click(pendingLabel);
    expect(handleClick).toHaveBeenCalledWith('pending');
  });

  it('uses grid layout', () => {
    const { container } = render(<FactoringKpiCardGroup cards={cards} />);
    const grid = container.firstChild as HTMLElement;
    expect(grid.className).toContain('grid');
  });

  it('merges custom className', () => {
    const { container } = render(
      <FactoringKpiCardGroup cards={cards} className="mt-4" />
    );
    const grid = container.firstChild as HTMLElement;
    expect(grid.className).toContain('mt-4');
  });
});