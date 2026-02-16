/**
 * Table Component Tests (G14 Batch 2)
 *
 * Tests for Table, TableHeader, TableBody, TableFooter,
 * TableRow, TableHead, TableCell, TableCaption.
 * Pure HTML wrappers — no Radix dependency.
 *
 * @version 0.2.3
 */

import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import {
  Table,
  TableHeader,
  TableBody,
  TableFooter,
  TableRow,
  TableHead,
  TableCell,
  TableCaption,
} from '../../components/ui/table';

describe('Table', () => {
  // --- Rendering ---

  it('renders a table element', () => {
    render(
      <Table data-testid="table">
        <TableBody>
          <TableRow>
            <TableCell>Cell</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    );
    const table = screen.getByTestId('table');
    expect(table.tagName).toBe('TABLE');
  });

  it('wraps table in a scrollable container', () => {
    const { container } = render(
      <Table>
        <TableBody>
          <TableRow>
            <TableCell>Cell</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    );
    const wrapper = container.firstChild as HTMLElement;
    expect(wrapper).toHaveAttribute('data-slot', 'table-container');
  });

  it('has data-slot="table"', () => {
    render(
      <Table data-testid="table">
        <TableBody>
          <TableRow>
            <TableCell>Cell</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    );
    expect(screen.getByTestId('table')).toHaveAttribute('data-slot', 'table');
  });

  // --- Sub-components data-slot ---

  it('TableHeader has data-slot', () => {
    render(
      <Table>
        <TableHeader data-testid="thead">
          <TableRow>
            <TableHead>Header</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRow>
            <TableCell>Cell</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    );
    expect(screen.getByTestId('thead')).toHaveAttribute('data-slot', 'table-header');
  });

  it('TableBody has data-slot', () => {
    render(
      <Table>
        <TableBody data-testid="tbody">
          <TableRow>
            <TableCell>Cell</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    );
    expect(screen.getByTestId('tbody')).toHaveAttribute('data-slot', 'table-body');
  });

  it('TableFooter has data-slot', () => {
    render(
      <Table>
        <TableBody>
          <TableRow>
            <TableCell>Cell</TableCell>
          </TableRow>
        </TableBody>
        <TableFooter data-testid="tfoot">
          <TableRow>
            <TableCell>Footer</TableCell>
          </TableRow>
        </TableFooter>
      </Table>
    );
    expect(screen.getByTestId('tfoot')).toHaveAttribute('data-slot', 'table-footer');
  });

  it('TableRow has data-slot', () => {
    render(
      <Table>
        <TableBody>
          <TableRow data-testid="row">
            <TableCell>Cell</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    );
    expect(screen.getByTestId('row')).toHaveAttribute('data-slot', 'table-row');
  });

  it('TableHead has data-slot', () => {
    render(
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead data-testid="th">Name</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRow>
            <TableCell>Cell</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    );
    expect(screen.getByTestId('th')).toHaveAttribute('data-slot', 'table-head');
  });

  it('TableCell has data-slot', () => {
    render(
      <Table>
        <TableBody>
          <TableRow>
            <TableCell data-testid="td">Value</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    );
    expect(screen.getByTestId('td')).toHaveAttribute('data-slot', 'table-cell');
  });

  it('TableCaption has data-slot', () => {
    render(
      <Table>
        <TableCaption data-testid="caption">A list of items</TableCaption>
        <TableBody>
          <TableRow>
            <TableCell>Cell</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    );
    expect(screen.getByTestId('caption')).toHaveAttribute('data-slot', 'table-caption');
  });

  // --- Content rendering ---

  it('renders cell content', () => {
    render(
      <Table>
        <TableBody>
          <TableRow>
            <TableCell>Invoice #001</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    );
    expect(screen.getByText('Invoice #001')).toBeInTheDocument();
  });

  // --- Custom className ---

  it('merges custom className on Table', () => {
    render(
      <Table className="border-collapse" data-testid="table">
        <TableBody>
          <TableRow>
            <TableCell>Cell</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    );
    expect(screen.getByTestId('table').className).toContain('border-collapse');
  });

  it('merges custom className on TableRow', () => {
    render(
      <Table>
        <TableBody>
          <TableRow className="bg-muted" data-testid="row">
            <TableCell>Cell</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    );
    expect(screen.getByTestId('row').className).toContain('bg-muted');
  });

  // --- Full composition ---

  it('renders a complete table with header, body, and footer', () => {
    render(
      <Table>
        <TableCaption>Invoice List</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead>ID</TableHead>
            <TableHead>Amount</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRow>
            <TableCell>001</TableCell>
            <TableCell>$250.00</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>002</TableCell>
            <TableCell>$150.00</TableCell>
          </TableRow>
        </TableBody>
        <TableFooter>
          <TableRow>
            <TableCell>Total</TableCell>
            <TableCell>$400.00</TableCell>
          </TableRow>
        </TableFooter>
      </Table>
    );
    expect(screen.getByText('Invoice List')).toBeInTheDocument();
    expect(screen.getByText('ID')).toBeInTheDocument();
    expect(screen.getByText('$250.00')).toBeInTheDocument();
    expect(screen.getByText('$400.00')).toBeInTheDocument();
  });
});
