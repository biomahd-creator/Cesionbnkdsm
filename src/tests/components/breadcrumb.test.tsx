/**
 * Breadcrumb Component Tests (G2+)
 *
 * Tests for Breadcrumb, BreadcrumbList, BreadcrumbItem, BreadcrumbLink,
 * BreadcrumbPage, BreadcrumbSeparator, and BreadcrumbEllipsis.
 * Validates rendering, data-slot, a11y, and composition.
 *
 * @version 0.2.3
 */

import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import {
  Breadcrumb,
  BreadcrumbList,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbPage,
  BreadcrumbSeparator,
  BreadcrumbEllipsis,
} from '../../components/ui/breadcrumb';

function renderBreadcrumb() {
  return render(
    <Breadcrumb>
      <BreadcrumbList>
        <BreadcrumbItem>
          <BreadcrumbLink href="/">Home</BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbSeparator />
        <BreadcrumbItem>
          <BreadcrumbLink href="/products">Products</BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbSeparator />
        <BreadcrumbItem>
          <BreadcrumbPage>Current Page</BreadcrumbPage>
        </BreadcrumbItem>
      </BreadcrumbList>
    </Breadcrumb>
  );
}

describe('Breadcrumb', () => {
  // --- Rendering ---

  it('renders the nav element', () => {
    renderBreadcrumb();
    const nav = screen.getByRole('navigation');
    expect(nav).toBeInTheDocument();
    expect(nav).toHaveAttribute('data-slot', 'breadcrumb');
  });

  it('has aria-label "breadcrumb"', () => {
    renderBreadcrumb();
    const nav = screen.getByRole('navigation', { name: /breadcrumb/i });
    expect(nav).toBeInTheDocument();
  });

  // --- BreadcrumbList ---

  it('renders the ordered list', () => {
    renderBreadcrumb();
    const list = screen.getByRole('list');
    expect(list).toBeInTheDocument();
    expect(list).toHaveAttribute('data-slot', 'breadcrumb-list');
  });

  // --- BreadcrumbLink ---

  it('renders links with href', () => {
    renderBreadcrumb();
    const homeLink = screen.getByRole('link', { name: 'Home' });
    expect(homeLink).toHaveAttribute('href', '/');
    expect(homeLink).toHaveAttribute('data-slot', 'breadcrumb-link');
  });

  it('renders multiple links', () => {
    renderBreadcrumb();
    const links = screen.getAllByRole('link');
    // Home + Products + Current Page (BreadcrumbPage has role="link")
    expect(links.length).toBeGreaterThanOrEqual(2);
  });

  // --- BreadcrumbPage ---

  it('renders the current page', () => {
    renderBreadcrumb();
    const page = screen.getByText('Current Page');
    expect(page).toBeInTheDocument();
    expect(page).toHaveAttribute('data-slot', 'breadcrumb-page');
    expect(page).toHaveAttribute('aria-current', 'page');
    expect(page).toHaveAttribute('aria-disabled', 'true');
  });

  // --- BreadcrumbSeparator ---

  it('renders separators', () => {
    renderBreadcrumb();
    const separators = document.querySelectorAll('[data-slot="breadcrumb-separator"]');
    expect(separators).toHaveLength(2);
  });

  it('separators are hidden from assistive tech', () => {
    renderBreadcrumb();
    const separators = document.querySelectorAll('[data-slot="breadcrumb-separator"]');
    separators.forEach((sep) => {
      expect(sep).toHaveAttribute('aria-hidden', 'true');
      expect(sep).toHaveAttribute('role', 'presentation');
    });
  });

  // --- BreadcrumbEllipsis ---

  it('renders ellipsis', () => {
    render(
      <Breadcrumb>
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbEllipsis data-testid="ellipsis" />
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>
    );
    const ellipsis = screen.getByTestId('ellipsis');
    expect(ellipsis).toBeInTheDocument();
    expect(ellipsis).toHaveAttribute('data-slot', 'breadcrumb-ellipsis');
    expect(ellipsis).toHaveAttribute('aria-hidden', 'true');
  });

  it('ellipsis has sr-only "More" text', () => {
    render(
      <Breadcrumb>
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbEllipsis />
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>
    );
    expect(screen.getByText('More')).toBeInTheDocument();
  });

  // --- Custom className ---

  it('merges custom className on BreadcrumbList', () => {
    render(
      <Breadcrumb>
        <BreadcrumbList className="my-list">
          <BreadcrumbItem>
            <BreadcrumbPage>Page</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>
    );
    const list = screen.getByRole('list');
    expect(list.className).toContain('my-list');
  });
});
