/**
 * SearchResults Pattern Tests (G14 Batch 2)
 *
 * Tests for SearchResults component.
 * Validates loading state, empty state, results rendering, and selection.
 *
 * @version 0.2.3
 */

import { describe, it, expect, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import {
  SearchResults,
  type SearchResultItem,
} from '../../components/patterns/SearchResults';

const mockResults: SearchResultItem[] = [
  {
    id: '1',
    type: 'invoice',
    title: 'Invoice #001',
    subtitle: 'Acme Corp',
    status: 'Paid',
    metadata: '$5,000',
  },
  {
    id: '2',
    type: 'client',
    title: 'John Doe',
    subtitle: 'Premium Client',
    metadata: 'Since 2024',
  },
  {
    id: '3',
    type: 'payor',
    title: 'Global Industries',
    subtitle: 'Payor entity',
  },
];

describe('SearchResults', () => {
  // --- Loading state ---

  it('shows loading skeleton when isLoading', () => {
    const { container } = render(
      <SearchResults
        results={[]}
        query="test"
        isLoading
        onSelect={() => {}}
      />
    );
    const pulseElements = container.querySelectorAll('.animate-pulse');
    expect(pulseElements.length).toBeGreaterThanOrEqual(1);
  });

  // --- Empty state ---

  it('shows "no results" when query exists but results empty', () => {
    render(
      <SearchResults
        results={[]}
        query="xyz"
        onSelect={() => {}}
      />
    );
    expect(
      screen.getByText(/No results found for "xyz"/)
    ).toBeInTheDocument();
  });

  it('shows placeholder when no query', () => {
    render(
      <SearchResults
        results={[]}
        query=""
        onSelect={() => {}}
      />
    );
    expect(screen.getByText('Enter a search term...')).toBeInTheDocument();
  });

  // --- Results rendering ---

  it('renders result items', () => {
    render(
      <SearchResults
        results={mockResults}
        query="test"
        onSelect={() => {}}
      />
    );
    expect(screen.getByText('Invoice #001')).toBeInTheDocument();
    expect(screen.getByText('John Doe')).toBeInTheDocument();
    expect(screen.getByText('Global Industries')).toBeInTheDocument();
  });

  it('shows result count', () => {
    render(
      <SearchResults
        results={mockResults}
        query="test"
        onSelect={() => {}}
      />
    );
    expect(screen.getByText('Results (3)')).toBeInTheDocument();
  });

  it('renders subtitles', () => {
    render(
      <SearchResults
        results={mockResults}
        query="test"
        onSelect={() => {}}
      />
    );
    expect(screen.getByText('Acme Corp')).toBeInTheDocument();
    expect(screen.getByText('Premium Client')).toBeInTheDocument();
  });

  it('renders status badge when present', () => {
    render(
      <SearchResults
        results={mockResults}
        query="test"
        onSelect={() => {}}
      />
    );
    expect(screen.getByText('Paid')).toBeInTheDocument();
  });

  it('renders metadata when present', () => {
    render(
      <SearchResults
        results={mockResults}
        query="test"
        onSelect={() => {}}
      />
    );
    expect(screen.getByText('$5,000')).toBeInTheDocument();
    expect(screen.getByText('Since 2024')).toBeInTheDocument();
  });

  // --- Selection ---

  it('calls onSelect when a result is clicked', async () => {
    const user = userEvent.setup();
    const onSelect = vi.fn();
    render(
      <SearchResults
        results={mockResults}
        query="test"
        onSelect={onSelect}
      />
    );

    await user.click(screen.getByText('Invoice #001'));
    expect(onSelect).toHaveBeenCalledTimes(1);
    expect(onSelect).toHaveBeenCalledWith(mockResults[0]);
  });

  // --- Custom className ---

  it('accepts custom className', () => {
    const { container } = render(
      <SearchResults
        results={mockResults}
        query="test"
        onSelect={() => {}}
        className="max-h-[600px]"
      />
    );
    // className is applied to ScrollArea
    const scrollArea = container.querySelector('[data-slot="scroll-area"]');
    expect(scrollArea?.className).toContain('max-h-[600px]');
  });
});
