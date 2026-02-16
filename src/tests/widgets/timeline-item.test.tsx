/**
 * ApprovalTimelineItem Widget Tests (G14 Batch 3)
 *
 * Tests for ApprovalTimelineItem rendering and composition.
 *
 * @version 0.2.3
 */

import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { ApprovalTimelineItem } from '../../components/widgets/TimelineItem';
import { CheckCircle, Clock } from 'lucide-react';

describe('ApprovalTimelineItem', () => {
  const baseProps = {
    icon: CheckCircle,
    iconColor: 'text-green-600',
    title: 'Approved by Manager',
    user: 'John Doe',
    role: 'Risk Manager',
    timestamp: '2024-01-15 10:30 AM',
    status: 'Approved',
  };

  // --- Rendering ---

  it('renders title', () => {
    render(<ApprovalTimelineItem {...baseProps} />);
    expect(screen.getByText('Approved by Manager')).toBeInTheDocument();
  });

  it('renders user name', () => {
    render(<ApprovalTimelineItem {...baseProps} />);
    expect(screen.getByText('John Doe')).toBeInTheDocument();
  });

  it('renders role', () => {
    render(<ApprovalTimelineItem {...baseProps} />);
    expect(screen.getByText('Risk Manager')).toBeInTheDocument();
  });

  it('renders timestamp', () => {
    render(<ApprovalTimelineItem {...baseProps} />);
    expect(screen.getByText('2024-01-15 10:30 AM')).toBeInTheDocument();
  });

  it('renders status badge', () => {
    render(<ApprovalTimelineItem {...baseProps} />);
    expect(screen.getByText('Approved')).toBeInTheDocument();
  });

  // --- Icon ---

  it('renders the provided icon', () => {
    const { container } = render(<ApprovalTimelineItem {...baseProps} />);
    const svg = container.querySelector('svg');
    expect(svg).toBeTruthy();
  });

  it('applies icon color class', () => {
    const { container } = render(<ApprovalTimelineItem {...baseProps} />);
    const iconWrapper = container.querySelector('.text-green-600');
    expect(iconWrapper).toBeTruthy();
  });

  // --- Avatar ---

  it('renders avatar with initials', () => {
    render(<ApprovalTimelineItem {...baseProps} />);
    expect(screen.getByText('JD')).toBeInTheDocument();
  });

  it('renders avatar with single name initials', () => {
    render(<ApprovalTimelineItem {...baseProps} user="Alice" />);
    expect(screen.getByText('A')).toBeInTheDocument();
  });

  // --- Status variant ---

  it('renders with default status variant', () => {
    const { container } = render(<ApprovalTimelineItem {...baseProps} />);
    const badge = container.querySelector('[data-slot="badge"]');
    expect(badge).toBeTruthy();
  });

  it('renders with destructive status variant', () => {
    render(
      <ApprovalTimelineItem
        {...baseProps}
        status="Rejected"
        statusVariant="destructive"
      />
    );
    expect(screen.getByText('Rejected')).toBeInTheDocument();
  });

  // --- Different icon ---

  it('renders with a different icon', () => {
    const { container } = render(
      <ApprovalTimelineItem {...baseProps} icon={Clock} iconColor="text-amber-600" />
    );
    const iconWrapper = container.querySelector('.text-amber-600');
    expect(iconWrapper).toBeTruthy();
  });
});
