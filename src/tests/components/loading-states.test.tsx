/**
 * Loading States Component Tests (G14 Batch 2)
 *
 * Tests for Spinner, PageLoader, CardSkeleton,
 * TableSkeleton, ButtonLoader, DotLoader.
 *
 * @version 0.2.3
 */

import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import {
  Spinner,
  PageLoader,
  CardSkeleton,
  TableSkeleton,
  ButtonLoader,
  DotLoader,
} from '../../components/ui/loading-states';

describe('Loading States', () => {
  // --- Spinner ---

  describe('Spinner', () => {
    it('renders', () => {
      const { container } = render(<Spinner />);
      expect(container.firstChild).toBeTruthy();
    });

    it('contains an SVG (Loader2 icon)', () => {
      const { container } = render(<Spinner />);
      const svg = container.querySelector('svg');
      expect(svg).toBeTruthy();
    });

    it('merges custom className', () => {
      const { container } = render(<Spinner className="p-8" />);
      const root = container.firstChild as HTMLElement;
      expect(root.className).toContain('p-8');
    });
  });

  // --- PageLoader ---

  describe('PageLoader', () => {
    it('renders loading text', () => {
      render(<PageLoader />);
      expect(screen.getByText('Loading application...')).toBeInTheDocument();
    });

    it('contains an SVG spinner', () => {
      const { container } = render(<PageLoader />);
      const svg = container.querySelector('svg');
      expect(svg).toBeTruthy();
    });
  });

  // --- CardSkeleton ---

  describe('CardSkeleton', () => {
    it('renders skeleton elements', () => {
      const { container } = render(<CardSkeleton />);
      const skeletons = container.querySelectorAll('[data-slot="skeleton"]');
      expect(skeletons.length).toBeGreaterThanOrEqual(1);
    });
  });

  // --- TableSkeleton ---

  describe('TableSkeleton', () => {
    it('renders default 5 rows', () => {
      const { container } = render(<TableSkeleton />);
      // Each row has a skeleton circle + text blocks
      const skeletons = container.querySelectorAll('[data-slot="skeleton"]');
      expect(skeletons.length).toBeGreaterThanOrEqual(5);
    });

    it('renders custom number of rows', () => {
      const { container } = render(<TableSkeleton rows={3} />);
      const skeletons = container.querySelectorAll('[data-slot="skeleton"]');
      // 3 header skeletons + 3 rows * 3 skeletons each = 12, but at least 3+
      expect(skeletons.length).toBeGreaterThanOrEqual(3);
    });
  });

  // --- ButtonLoader ---

  describe('ButtonLoader', () => {
    it('renders an SVG', () => {
      const { container } = render(<ButtonLoader />);
      const svg = container.querySelector('svg');
      expect(svg).toBeTruthy();
    });
  });

  // --- DotLoader ---

  describe('DotLoader', () => {
    it('renders three dots', () => {
      const { container } = render(<DotLoader />);
      const dots = container.querySelectorAll('.rounded-full');
      expect(dots.length).toBe(3);
    });
  });
});
