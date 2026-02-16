/**
 * InfiniteScroll Advanced Component Tests (G14 Batch 6)
 *
 * Note: IntersectionObserver is not supported in jsdom,
 * so we mock it and test basic rendering + loading state.
 *
 * @version 0.2.3
 */

import { describe, it, expect, vi, beforeAll } from 'vitest';
import { render, screen } from '@testing-library/react';
import { InfiniteScroll } from '../../components/advanced/InfiniteScroll';

// Mock IntersectionObserver
beforeAll(() => {
  global.IntersectionObserver = vi.fn().mockImplementation(() => ({
    observe: vi.fn(),
    unobserve: vi.fn(),
    disconnect: vi.fn(),
  }));
});

describe('InfiniteScroll', () => {
  it('renders children', () => {
    render(
      <InfiniteScroll loadMore={async () => {}} hasMore>
        <div>Item 1</div>
        <div>Item 2</div>
      </InfiniteScroll>
    );
    expect(screen.getByText('Item 1')).toBeInTheDocument();
    expect(screen.getByText('Item 2')).toBeInTheDocument();
  });

  it('shows loading spinner when isLoading', () => {
    const { container } = render(
      <InfiniteScroll loadMore={async () => {}} hasMore isLoading>
        <div>Content</div>
      </InfiniteScroll>
    );
    const spinner = container.querySelector('.animate-spin');
    expect(spinner).toBeTruthy();
  });

  it('does not show spinner when not loading', () => {
    const { container } = render(
      <InfiniteScroll loadMore={async () => {}} hasMore isLoading={false}>
        <div>Content</div>
      </InfiniteScroll>
    );
    const spinner = container.querySelector('.animate-spin');
    expect(spinner).toBeNull();
  });

  it('renders sentinel div for observer', () => {
    const { container } = render(
      <InfiniteScroll loadMore={async () => {}} hasMore>
        <div>Content</div>
      </InfiniteScroll>
    );
    // The sentinel is a h-4 w-full div
    const sentinel = container.querySelector('.h-4.w-full');
    expect(sentinel).toBeTruthy();
  });

  it('creates IntersectionObserver', () => {
    render(
      <InfiniteScroll loadMore={async () => {}} hasMore>
        <div>Content</div>
      </InfiniteScroll>
    );
    expect(global.IntersectionObserver).toHaveBeenCalled();
  });
});
