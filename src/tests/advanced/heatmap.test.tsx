/**
 * Heatmap Advanced Component Tests (G14 Batch 7)
 *
 * Tests for Heatmap rendering, data display, legends, and empty state.
 * Heatmap uses pure CSS (no recharts), so it's fully testable in jsdom.
 *
 * @version 0.2.3
 */

import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { Heatmap, type HeatmapCell } from '../../components/advanced/Heatmap';

const rows = ['Mon', 'Tue', 'Wed'];
const columns = ['9am', '10am', '11am'];

const mockData: HeatmapCell[] = [
  { row: 'Mon', col: '9am', value: 10 },
  { row: 'Mon', col: '10am', value: 50 },
  { row: 'Mon', col: '11am', value: 90 },
  { row: 'Tue', col: '9am', value: 30 },
  { row: 'Tue', col: '10am', value: 70 },
  { row: 'Tue', col: '11am', value: 40 },
  { row: 'Wed', col: '9am', value: 20 },
  { row: 'Wed', col: '10am', value: 60 },
  { row: 'Wed', col: '11am', value: 80 },
];

describe('Heatmap', () => {
  // --- Rendering ---

  it('renders row labels', () => {
    render(<Heatmap data={mockData} rows={rows} columns={columns} />);
    expect(screen.getByText('Mon')).toBeInTheDocument();
    expect(screen.getByText('Tue')).toBeInTheDocument();
    expect(screen.getByText('Wed')).toBeInTheDocument();
  });

  it('renders column headers', () => {
    render(<Heatmap data={mockData} rows={rows} columns={columns} />);
    expect(screen.getByText('9am')).toBeInTheDocument();
    expect(screen.getByText('10am')).toBeInTheDocument();
    expect(screen.getByText('11am')).toBeInTheDocument();
  });

  it('renders cell values by default', () => {
    render(<Heatmap data={mockData} rows={rows} columns={columns} />);
    expect(screen.getByText('10')).toBeInTheDocument();
    expect(screen.getByText('90')).toBeInTheDocument();
    expect(screen.getByText('50')).toBeInTheDocument();
  });

  it('hides cell values when showValues is false', () => {
    render(<Heatmap data={mockData} rows={rows} columns={columns} showValues={false} />);
    expect(screen.queryByText('10')).not.toBeInTheDocument();
    expect(screen.queryByText('90')).not.toBeInTheDocument();
  });

  it('hides labels when showLabels is false', () => {
    render(<Heatmap data={mockData} rows={rows} columns={columns} showLabels={false} />);
    expect(screen.queryByText('Mon')).not.toBeInTheDocument();
    expect(screen.queryByText('9am')).not.toBeInTheDocument();
  });

  // --- Title & Description ---

  it('renders title when provided', () => {
    render(<Heatmap data={mockData} rows={rows} columns={columns} title="Activity" />);
    expect(screen.getByText('Activity')).toBeInTheDocument();
  });

  it('renders description when provided', () => {
    render(<Heatmap data={mockData} rows={rows} columns={columns} title="Activity" description="Weekly overview" />);
    expect(screen.getByText('Weekly overview')).toBeInTheDocument();
  });

  it('renders data points badge', () => {
    render(<Heatmap data={mockData} rows={rows} columns={columns} title="Activity" />);
    expect(screen.getByText('9 data points')).toBeInTheDocument();
  });

  // --- Legend ---

  it('renders min and max legend values', () => {
    render(<Heatmap data={mockData} rows={rows} columns={columns} />);
    expect(screen.getByText('Min: 10')).toBeInTheDocument();
    expect(screen.getByText('Max: 90')).toBeInTheDocument();
  });

  it('respects custom min/max', () => {
    render(<Heatmap data={mockData} rows={rows} columns={columns} min={0} max={100} />);
    expect(screen.getByText('Min: 0')).toBeInTheDocument();
    expect(screen.getByText('Max: 100')).toBeInTheDocument();
  });

  // --- Empty state ---

  it('shows empty message when data is empty', () => {
    render(<Heatmap data={[]} rows={rows} columns={columns} />);
    expect(screen.getByText('No data available for the heatmap')).toBeInTheDocument();
  });

  it('shows empty message when rows is empty', () => {
    render(<Heatmap data={mockData} rows={[]} columns={columns} />);
    expect(screen.getByText('No data available for the heatmap')).toBeInTheDocument();
  });

  it('shows empty message when columns is empty', () => {
    render(<Heatmap data={mockData} rows={rows} columns={[]} />);
    expect(screen.getByText('No data available for the heatmap')).toBeInTheDocument();
  });

  // --- Table structure ---

  it('renders correct number of data cells', () => {
    const { container } = render(<Heatmap data={mockData} rows={rows} columns={columns} />);
    // 3 rows x 3 cols = 9 data cells (td with data-heat-bg)
    const dataCells = container.querySelectorAll('td[data-heat-bg]');
    expect(dataCells.length).toBe(9);
  });

  it('renders a table element', () => {
    const { container } = render(<Heatmap data={mockData} rows={rows} columns={columns} />);
    expect(container.querySelector('table')).toBeTruthy();
  });
});
