/**
 * TreemapChart Advanced Component Tests (G14 Batch 7)
 *
 * Smoke tests for TreemapChart rendering.
 * TreemapChart uses recharts Treemap wrapped in SafeChartContainer.
 * We test title/description Card wrapper and basic rendering.
 *
 * @version 0.2.3
 */

import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { TreemapChart, type TreemapData } from '../../components/advanced/TreemapChart';

const mockData: TreemapData[] = [
  { name: 'Technology', size: 400 },
  { name: 'Finance', size: 300 },
  { name: 'Healthcare', size: 200 },
  { name: 'Energy', size: 100 },
];

describe('TreemapChart', () => {
  it('renders without crashing', () => {
    const { container } = render(<TreemapChart data={mockData} />);
    expect(container.firstChild).toBeTruthy();
  });

  it('renders title when provided', () => {
    render(<TreemapChart data={mockData} title="Market Share" />);
    expect(screen.getByText('Market Share')).toBeInTheDocument();
  });

  it('renders description when provided', () => {
    render(<TreemapChart data={mockData} title="Market" description="By sector" />);
    expect(screen.getByText('By sector')).toBeInTheDocument();
  });

  it('renders inside Card when title provided', () => {
    const { container } = render(<TreemapChart data={mockData} title="Chart" />);
    expect(container.querySelector('[data-slot="card"]')).toBeTruthy();
  });

  it('renders without Card when no title', () => {
    const { container } = render(<TreemapChart data={mockData} />);
    expect(container.querySelector('[data-slot="card"]')).toBeNull();
  });

  it('renders with empty data array', () => {
    const { container } = render(<TreemapChart data={[]} />);
    expect(container.firstChild).toBeTruthy();
  });
});
