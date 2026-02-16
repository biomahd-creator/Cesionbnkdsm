/**
 * ActivityFeed Pattern Tests (G14 Batch 3)
 *
 * Tests for ActivityFeed rendering and item composition.
 *
 * @version 0.2.3
 */

import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { ActivityFeed, ActivityItem } from '../../components/patterns/ActivityFeed';

const mockItems: ActivityItem[] = [
  {
    id: '1',
    user: { name: 'John Doe', initials: 'JD' },
    action: 'approved',
    target: 'Invoice INV-001',
    timestamp: '5 minutes ago',
    description: 'Approved after review',
  },
  {
    id: '2',
    user: { name: 'Jane Smith', initials: 'JS' },
    action: 'created',
    target: 'Invoice INV-002',
    timestamp: '1 hour ago',
  },
  {
    id: '3',
    user: { name: 'Bob Wilson', initials: 'BW' },
    action: 'commented on',
    timestamp: '2 hours ago',
  },
];

describe('ActivityFeed', () => {
  // --- Rendering ---

  it('renders the header', () => {
    render(<ActivityFeed items={mockItems} />);
    expect(screen.getByText('Actividad Reciente')).toBeInTheDocument();
  });

  it('renders all activity items', () => {
    render(<ActivityFeed items={mockItems} />);
    expect(screen.getByText('John Doe')).toBeInTheDocument();
    expect(screen.getByText('Jane Smith')).toBeInTheDocument();
    expect(screen.getByText('Bob Wilson')).toBeInTheDocument();
  });

  it('renders actions', () => {
    render(<ActivityFeed items={mockItems} />);
    expect(screen.getByText('approved')).toBeInTheDocument();
    expect(screen.getByText('created')).toBeInTheDocument();
  });

  it('renders targets when provided', () => {
    render(<ActivityFeed items={mockItems} />);
    expect(screen.getByText('Invoice INV-001')).toBeInTheDocument();
    expect(screen.getByText('Invoice INV-002')).toBeInTheDocument();
  });

  it('renders timestamps', () => {
    render(<ActivityFeed items={mockItems} />);
    expect(screen.getByText('5 minutes ago')).toBeInTheDocument();
    expect(screen.getByText('1 hour ago')).toBeInTheDocument();
    expect(screen.getByText('2 hours ago')).toBeInTheDocument();
  });

  it('renders description when provided', () => {
    render(<ActivityFeed items={mockItems} />);
    expect(screen.getByText('Approved after review')).toBeInTheDocument();
  });

  // --- Avatar ---

  it('renders user initials in avatars', () => {
    render(<ActivityFeed items={mockItems} />);
    expect(screen.getByText('JD')).toBeInTheDocument();
    expect(screen.getByText('JS')).toBeInTheDocument();
    expect(screen.getByText('BW')).toBeInTheDocument();
  });

  // --- Empty state ---

  it('renders with empty items array', () => {
    const { container } = render(<ActivityFeed items={[]} />);
    expect(screen.getByText('Actividad Reciente')).toBeInTheDocument();
    expect(container.firstChild).toBeTruthy();
  });

  // --- Custom className ---

  it('merges custom className', () => {
    const { container } = render(
      <ActivityFeed items={mockItems} className="my-feed" />
    );
    const wrapper = container.firstChild as HTMLElement;
    expect(wrapper.className).toContain('my-feed');
  });
});
