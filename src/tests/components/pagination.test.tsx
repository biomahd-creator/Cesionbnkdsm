/**
 * Pagination Component Tests (G2+)
 *
 * Tests for Pagination, PaginationContent, PaginationItem, PaginationLink,
 * PaginationPrevious, PaginationNext, and PaginationEllipsis.
 * Validates rendering, data-slot, a11y, active state, and composition.
 *
 * @version 0.2.3
 */

import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationPrevious,
  PaginationNext,
  PaginationEllipsis,
} from '../../components/ui/pagination';

function renderPagination() {
  return render(
    <Pagination>
      <PaginationContent>
        <PaginationItem>
          <PaginationPrevious href="#" />
        </PaginationItem>
        <PaginationItem>
          <PaginationLink href="#" isActive>1</PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationLink href="#">2</PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationLink href="#">3</PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationEllipsis />
        </PaginationItem>
        <PaginationItem>
          <PaginationNext href="#" />
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  );
}

describe('Pagination', () => {
  // --- Rendering ---

  it('renders the nav element', () => {
    renderPagination();
    const nav = screen.getByRole('navigation');
    expect(nav).toBeInTheDocument();
    expect(nav).toHaveAttribute('data-slot', 'pagination');
  });

  it('has aria-label "pagination"', () => {
    renderPagination();
    const nav = screen.getByRole('navigation', { name: /pagination/i });
    expect(nav).toBeInTheDocument();
  });

  // --- PaginationContent ---

  it('renders the list', () => {
    renderPagination();
    const list = screen.getByRole('list');
    expect(list).toBeInTheDocument();
    expect(list).toHaveAttribute('data-slot', 'pagination-content');
  });

  // --- PaginationLink ---

  it('renders page links', () => {
    renderPagination();
    expect(screen.getByText('1')).toBeInTheDocument();
    expect(screen.getByText('2')).toBeInTheDocument();
    expect(screen.getByText('3')).toBeInTheDocument();
  });

  it('active link has aria-current="page"', () => {
    renderPagination();
    const activeLink = screen.getByText('1').closest('a');
    expect(activeLink).toHaveAttribute('aria-current', 'page');
    expect(activeLink).toHaveAttribute('data-active', 'true');
  });

  it('non-active links do not have aria-current', () => {
    renderPagination();
    const link2 = screen.getByText('2').closest('a');
    expect(link2).not.toHaveAttribute('aria-current');
  });

  it('links have data-slot', () => {
    renderPagination();
    const link = screen.getByText('1').closest('a');
    expect(link).toHaveAttribute('data-slot', 'pagination-link');
  });

  // --- PaginationPrevious ---

  it('renders previous button', () => {
    renderPagination();
    const prev = screen.getByLabelText('Go to previous page');
    expect(prev).toBeInTheDocument();
  });

  // --- PaginationNext ---

  it('renders next button', () => {
    renderPagination();
    const next = screen.getByLabelText('Go to next page');
    expect(next).toBeInTheDocument();
  });

  // --- PaginationEllipsis ---

  it('renders ellipsis', () => {
    renderPagination();
    const ellipsis = document.querySelector('[data-slot="pagination-ellipsis"]');
    expect(ellipsis).toBeInTheDocument();
    expect(ellipsis).toHaveAttribute('aria-hidden');
  });

  it('ellipsis has sr-only "More pages" text', () => {
    renderPagination();
    expect(screen.getByText('More pages')).toBeInTheDocument();
  });

  // --- Custom className ---

  it('merges custom className on Pagination', () => {
    render(
      <Pagination className="my-pagination">
        <PaginationContent>
          <PaginationItem>
            <PaginationLink href="#">1</PaginationLink>
          </PaginationItem>
        </PaginationContent>
      </Pagination>
    );
    const nav = screen.getByRole('navigation');
    expect(nav.className).toContain('my-pagination');
  });
});
