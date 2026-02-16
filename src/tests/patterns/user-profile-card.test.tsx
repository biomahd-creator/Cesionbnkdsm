/**
 * UserProfileCard Pattern Tests (G14 Batch 2)
 *
 * Tests for UserProfileCard pattern component.
 * Validates rendering of user data, optional fields, actions, and stats.
 *
 * @version 0.2.3
 */

import { describe, it, expect, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import {
  UserProfileCard,
  type UserProfile,
} from '../../components/patterns/UserProfileCard';

const baseUser: UserProfile = {
  name: 'María García',
  role: 'Senior Analyst',
  initials: 'MG',
  email: 'maria@example.com',
  status: 'active',
};

const fullUser: UserProfile = {
  ...baseUser,
  phone: '+57 300 123 4567',
  location: 'Bogotá, Colombia',
  joinDate: 'Jan 2024',
  company: 'CESIONBNK',
  tags: ['VIP', 'Enterprise', 'Priority'],
  stats: [
    { label: 'Operations', value: '42' },
    { label: 'Volume', value: '$1.2M' },
    { label: 'Rating', value: '4.8' },
  ],
};

describe('UserProfileCard', () => {
  // --- Basic rendering ---

  it('renders user name', () => {
    render(<UserProfileCard user={baseUser} />);
    expect(screen.getByText('María García')).toBeInTheDocument();
  });

  it('renders user role', () => {
    render(<UserProfileCard user={baseUser} />);
    expect(screen.getByText('Senior Analyst')).toBeInTheDocument();
  });

  it('renders user email', () => {
    render(<UserProfileCard user={baseUser} />);
    expect(screen.getByText('maria@example.com')).toBeInTheDocument();
  });

  it('renders avatar fallback with initials', () => {
    render(<UserProfileCard user={baseUser} />);
    expect(screen.getByText('MG')).toBeInTheDocument();
  });

  // --- Optional fields ---

  it('renders phone when provided', () => {
    render(<UserProfileCard user={fullUser} />);
    expect(screen.getByText('+57 300 123 4567')).toBeInTheDocument();
  });

  it('does not render phone when not provided', () => {
    render(<UserProfileCard user={baseUser} />);
    expect(screen.queryByText('+57 300 123 4567')).not.toBeInTheDocument();
  });

  it('renders location when provided', () => {
    render(<UserProfileCard user={fullUser} />);
    expect(screen.getByText('Bogotá, Colombia')).toBeInTheDocument();
  });

  it('renders company when provided', () => {
    render(<UserProfileCard user={fullUser} />);
    expect(screen.getByText('CESIONBNK')).toBeInTheDocument();
  });

  it('renders join date when provided', () => {
    render(<UserProfileCard user={fullUser} />);
    expect(screen.getByText(/Jan 2024/)).toBeInTheDocument();
  });

  // --- Tags ---

  it('renders tags when provided', () => {
    render(<UserProfileCard user={fullUser} />);
    expect(screen.getByText('VIP')).toBeInTheDocument();
    expect(screen.getByText('Enterprise')).toBeInTheDocument();
    expect(screen.getByText('Priority')).toBeInTheDocument();
  });

  it('does not render tags section when not provided', () => {
    render(<UserProfileCard user={baseUser} />);
    expect(screen.queryByText('VIP')).not.toBeInTheDocument();
  });

  // --- Stats ---

  it('renders stats when provided', () => {
    render(<UserProfileCard user={fullUser} />);
    expect(screen.getByText('42')).toBeInTheDocument();
    expect(screen.getByText('$1.2M')).toBeInTheDocument();
    expect(screen.getByText('4.8')).toBeInTheDocument();
    expect(screen.getByText('Operations')).toBeInTheDocument();
  });

  // --- Action buttons ---

  it('renders edit button when onEdit is provided', () => {
    const onEdit = vi.fn();
    render(<UserProfileCard user={baseUser} onEdit={onEdit} />);
    expect(screen.getByText('Editar')).toBeInTheDocument();
  });

  it('calls onEdit when edit button clicked', async () => {
    const user = userEvent.setup();
    const onEdit = vi.fn();
    render(<UserProfileCard user={baseUser} onEdit={onEdit} />);

    await user.click(screen.getByText('Editar'));
    expect(onEdit).toHaveBeenCalledTimes(1);
  });

  it('renders message button when onMessage is provided', () => {
    const onMessage = vi.fn();
    render(<UserProfileCard user={baseUser} onMessage={onMessage} />);
    expect(screen.getByText('Mensaje')).toBeInTheDocument();
  });

  it('calls onMessage when message button clicked', async () => {
    const user = userEvent.setup();
    const onMessage = vi.fn();
    render(<UserProfileCard user={baseUser} onMessage={onMessage} />);

    await user.click(screen.getByText('Mensaje'));
    expect(onMessage).toHaveBeenCalledTimes(1);
  });

  it('does not render action buttons when callbacks not provided', () => {
    render(<UserProfileCard user={baseUser} />);
    expect(screen.queryByText('Editar')).not.toBeInTheDocument();
    expect(screen.queryByText('Mensaje')).not.toBeInTheDocument();
  });

  // --- Custom className ---

  it('merges custom className', () => {
    const { container } = render(
      <UserProfileCard user={baseUser} className="max-w-md" />
    );
    // The root card should have the class
    const card = container.firstChild as HTMLElement;
    expect(card.className).toContain('max-w-md');
  });
});
