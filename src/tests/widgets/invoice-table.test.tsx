/**
 * InvoiceTable Widget Tests (G14 Batch 3)
 *
 * Tests for InvoiceTable rendering with mock data.
 *
 * @version 0.2.3
 */

import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { InvoiceTable } from '../../components/widgets/InvoiceTable';

describe('InvoiceTable', () => {
  // --- Structure ---

  it('renders a table', () => {
    render(<InvoiceTable />);
    expect(screen.getByRole('table')).toBeInTheDocument();
  });

  it('renders table headers', () => {
    render(<InvoiceTable />);
    expect(screen.getByText('Invoice #')).toBeInTheDocument();
    expect(screen.getByText('Client')).toBeInTheDocument();
    expect(screen.getByText('Amount')).toBeInTheDocument();
    expect(screen.getByText('Date')).toBeInTheDocument();
    expect(screen.getByText('Status')).toBeInTheDocument();
    expect(screen.getByText('Actions')).toBeInTheDocument();
  });

  // --- Data rows ---

  it('renders all invoice rows', () => {
    render(<InvoiceTable />);
    expect(screen.getByText('INV-001')).toBeInTheDocument();
    expect(screen.getByText('INV-002')).toBeInTheDocument();
    expect(screen.getByText('INV-003')).toBeInTheDocument();
  });

  it('renders client names', () => {
    render(<InvoiceTable />);
    expect(screen.getByText('Empresa ABC S.A.')).toBeInTheDocument();
    expect(screen.getByText('Comercial XYZ Ltda.')).toBeInTheDocument();
    expect(screen.getByText('Industrias DEF S.A.')).toBeInTheDocument();
  });

  it('renders formatted amounts', () => {
    render(<InvoiceTable />);
    expect(screen.getByText('$2,500,000')).toBeInTheDocument();
    expect(screen.getByText('$1,800,000')).toBeInTheDocument();
    expect(screen.getByText('$3,200,000')).toBeInTheDocument();
  });

  it('renders dates', () => {
    render(<InvoiceTable />);
    expect(screen.getByText('2024-01-15')).toBeInTheDocument();
    expect(screen.getByText('2024-01-18')).toBeInTheDocument();
    expect(screen.getByText('2024-01-20')).toBeInTheDocument();
  });

  // --- Status badges ---

  it('renders status badges', () => {
    render(<InvoiceTable />);
    expect(screen.getByText('Approved')).toBeInTheDocument();
    expect(screen.getByText('Pending')).toBeInTheDocument();
    expect(screen.getByText('Rejected')).toBeInTheDocument();
  });

  // --- Actions ---

  it('renders action buttons for each row', () => {
    render(<InvoiceTable />);
    const actionButtons = screen.getAllByRole('button');
    // 3 rows × 1 action button each
    expect(actionButtons.length).toBe(3);
  });

  // --- Wrapper ---

  it('wraps table in a bordered container', () => {
    const { container } = render(<InvoiceTable />);
    const wrapper = container.firstChild as HTMLElement;
    expect(wrapper.className).toContain('border');
    expect(wrapper.className).toContain('rounded-lg');
  });
});
