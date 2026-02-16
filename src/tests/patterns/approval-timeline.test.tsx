/**
 * ApprovalTimeline Pattern Tests (G14)
 *
 * Tests for ApprovalTimeline rendering with timeline events,
 * status badges, user info, and timestamps.
 *
 * @version 0.2.3
 */

import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { ApprovalTimeline } from '../../components/patterns/ApprovalTimeline';

describe('ApprovalTimeline', () => {
  // --- Title ---

  it('renders the card title', () => {
    render(<ApprovalTimeline />);
    expect(screen.getByText('Approval Timeline — INV-001')).toBeInTheDocument();
  });

  // --- Timeline events ---

  it('renders all event actions', () => {
    render(<ApprovalTimeline />);
    expect(screen.getByText('Invoice created')).toBeInTheDocument();
    expect(screen.getByText('Documentation verified')).toBeInTheDocument();
    expect(screen.getByText('Credit analysis')).toBeInTheDocument();
    expect(screen.getByText('Approval pending')).toBeInTheDocument();
    expect(screen.getByText('Disbursement scheduled')).toBeInTheDocument();
  });

  // --- User names ---

  it('renders user names', () => {
    render(<ApprovalTimeline />);
    expect(screen.getByText('John Smith')).toBeInTheDocument();
    expect(screen.getByText('Maria Garcia')).toBeInTheDocument();
    expect(screen.getByText('Carlos Rodriguez')).toBeInTheDocument();
    expect(screen.getByText('Ana Martinez')).toBeInTheDocument();
    expect(screen.getByText('System')).toBeInTheDocument();
  });

  // --- Roles ---

  it('renders user roles', () => {
    render(<ApprovalTimeline />);
    expect(screen.getByText('Financial Analyst')).toBeInTheDocument();
    expect(screen.getByText('Supervisor')).toBeInTheDocument();
    expect(screen.getByText('Risk Analyst')).toBeInTheDocument();
    expect(screen.getByText('Commercial Manager')).toBeInTheDocument();
    expect(screen.getByText('Automated')).toBeInTheDocument();
  });

  // --- Status badges ---

  it('renders Completed badges', () => {
    render(<ApprovalTimeline />);
    const completedBadges = screen.getAllByText('Completed');
    expect(completedBadges.length).toBe(3);
  });

  it('renders Pending badge', () => {
    render(<ApprovalTimeline />);
    const pendingBadges = screen.getAllByText('Pending');
    expect(pendingBadges.length).toBeGreaterThanOrEqual(1);
  });

  it('renders Waiting badge', () => {
    render(<ApprovalTimeline />);
    expect(screen.getByText('Waiting')).toBeInTheDocument();
  });

  // --- Comments ---

  it('renders event comments', () => {
    render(<ApprovalTimeline />);
    expect(screen.getByText('Invoice entered into the system for review')).toBeInTheDocument();
    expect(screen.getByText('All documents are complete and valid')).toBeInTheDocument();
    expect(screen.getByText('Credit score approved: 850/1000')).toBeInTheDocument();
    expect(screen.getByText('Final review before approval')).toBeInTheDocument();
    expect(screen.getByText('Will execute after final approval')).toBeInTheDocument();
  });

  // --- Timestamps ---

  it('renders timestamps', () => {
    render(<ApprovalTimeline />);
    expect(screen.getByText('Jan 15, 2024, 10:30 AM')).toBeInTheDocument();
    expect(screen.getByText('Jan 16, 2024, 09:45 AM')).toBeInTheDocument();
  });

  // --- Avatar initials ---

  it('renders avatar initials', () => {
    render(<ApprovalTimeline />);
    expect(screen.getByText('JS')).toBeInTheDocument();
    expect(screen.getByText('MG')).toBeInTheDocument();
    expect(screen.getByText('CR')).toBeInTheDocument();
    expect(screen.getByText('AM')).toBeInTheDocument();
    expect(screen.getByText('S')).toBeInTheDocument();
  });

  // --- Icons ---

  it('renders status icons (SVGs)', () => {
    const { container } = render(<ApprovalTimeline />);
    const svgs = container.querySelectorAll('svg');
    expect(svgs.length).toBeGreaterThanOrEqual(5);
  });

  // --- Card structure ---

  it('renders within a card', () => {
    const { container } = render(<ApprovalTimeline />);
    const card = container.querySelector('[data-slot="card"]');
    expect(card).toBeTruthy();
  });
});