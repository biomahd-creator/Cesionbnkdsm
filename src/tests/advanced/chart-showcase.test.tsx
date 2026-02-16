/**
 * ChartShowcase Advanced Component Tests (G14 Batch 7)
 *
 * Smoke tests for ChartShowcase rendering.
 * ChartShowcase uses Tabs with Line/Bar/Pie chart tabs.
 * recharts doesn't render SVG in jsdom, but we test the tab structure.
 *
 * @version 0.2.3
 */

import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { ChartShowcase } from '../../components/advanced/ChartShowcase';

describe('ChartShowcase', () => {
  it('renders without crashing', () => {
    const { container } = render(<ChartShowcase />);
    expect(container.firstChild).toBeTruthy();
  });

  it('renders Line tab trigger', () => {
    render(<ChartShowcase />);
    const lineElements = screen.getAllByText('Line');
    expect(lineElements.length).toBeGreaterThanOrEqual(1);
  });

  it('renders Bar tab trigger', () => {
    render(<ChartShowcase />);
    const barElements = screen.getAllByText('Bar');
    expect(barElements.length).toBeGreaterThanOrEqual(1);
  });

  it('renders Pie tab trigger', () => {
    render(<ChartShowcase />);
    const pieElements = screen.getAllByText('Pie');
    expect(pieElements.length).toBeGreaterThanOrEqual(1);
  });

  it('renders Line Chart card title by default', () => {
    render(<ChartShowcase />);
    expect(screen.getByText('Line Chart Example')).toBeInTheDocument();
  });

  it('renders Line chart description', () => {
    render(<ChartShowcase />);
    expect(screen.getByText('Simple line chart visualization')).toBeInTheDocument();
  });

  // --- Tab switching ---

  it('switches to Bar tab on click', async () => {
    const user = userEvent.setup();
    render(<ChartShowcase />);
    const barTabs = screen.getAllByText('Bar');
    await user.click(barTabs[0]);
    expect(screen.getByText('Bar Chart Example')).toBeInTheDocument();
  });

  it('switches to Pie tab on click', async () => {
    const user = userEvent.setup();
    render(<ChartShowcase />);
    const pieTabs = screen.getAllByText('Pie');
    await user.click(pieTabs[0]);
    expect(screen.getByText('Pie Chart Example')).toBeInTheDocument();
  });

  it('switches back to Line tab', async () => {
    const user = userEvent.setup();
    render(<ChartShowcase />);
    const barTabs = screen.getAllByText('Bar');
    await user.click(barTabs[0]);
    expect(screen.getByText('Bar Chart Example')).toBeInTheDocument();
    const lineTabs = screen.getAllByText('Line');
    await user.click(lineTabs[0]);
    expect(screen.getByText('Line Chart Example')).toBeInTheDocument();
  });

  it('renders chart container with data-slot', () => {
    const { container } = render(<ChartShowcase />);
    // Check for chart container or card content
    const chart = container.querySelector('[data-slot="chart"]') || container.querySelector('[data-slot="card-content"]');
    expect(chart).toBeTruthy();
  });

  it('renders tabs component', () => {
    const { container } = render(<ChartShowcase />);
    const tabs = container.querySelector('[data-slot="tabs"]');
    expect(tabs).toBeTruthy();
  });
});