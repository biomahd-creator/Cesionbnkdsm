/**
 * Chart Component Tests (G14 Batch 7)
 *
 * Tests for ChartContainer, ChartStyle, and utility functions.
 * ChartContainer wraps recharts in SafeChartContainer with config context.
 *
 * @version 0.2.3
 */

import { describe, it, expect, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import React from 'react';
import {
  ChartContainer,
  ChartStyle,
  type ChartConfig,
} from '../../components/ui/chart';
import { BarChart, Bar } from 'recharts';

const testConfig: ChartConfig = {
  revenue: {
    label: 'Revenue',
    color: '#00c951',
  },
  expenses: {
    label: 'Expenses',
    color: '#ef4444',
  },
};

const themeConfig: ChartConfig = {
  sales: {
    label: 'Sales',
    theme: {
      light: '#3b82f6',
      dark: '#60a5fa',
    },
  },
};

const sampleData = [
  { month: 'Jan', revenue: 100 },
  { month: 'Feb', revenue: 200 },
];

describe('ChartContainer', () => {
  it('renders without crashing', () => {
    const { container } = render(
      <ChartContainer config={testConfig}>
        <BarChart data={sampleData}>
          <Bar dataKey="revenue" />
        </BarChart>
      </ChartContainer>
    );
    expect(container.firstChild).toBeTruthy();
  });

  it('renders with data-slot="chart"', () => {
    const { container } = render(
      <ChartContainer config={testConfig}>
        <BarChart data={sampleData}>
          <Bar dataKey="revenue" />
        </BarChart>
      </ChartContainer>
    );
    expect(container.querySelector('[data-slot="chart"]')).toBeTruthy();
  });

  it('generates data-chart attribute', () => {
    const { container } = render(
      <ChartContainer config={testConfig}>
        <BarChart data={sampleData}>
          <Bar dataKey="revenue" />
        </BarChart>
      </ChartContainer>
    );
    const chart = container.querySelector('[data-chart]');
    expect(chart).toBeTruthy();
    expect(chart?.getAttribute('data-chart')).toContain('chart-');
  });

  it('uses custom id for data-chart', () => {
    const { container } = render(
      <ChartContainer config={testConfig} id="my-chart">
        <BarChart data={sampleData}>
          <Bar dataKey="revenue" />
        </BarChart>
      </ChartContainer>
    );
    const chart = container.querySelector('[data-chart]');
    expect(chart?.getAttribute('data-chart')).toBe('chart-my-chart');
  });

  it('merges custom className', () => {
    const { container } = render(
      <ChartContainer config={testConfig} className="my-class">
        <BarChart data={sampleData}>
          <Bar dataKey="revenue" />
        </BarChart>
      </ChartContainer>
    );
    const chart = container.querySelector('[data-slot="chart"]') as HTMLElement;
    expect(chart.className).toContain('my-class');
  });

  it('sets min-height style', () => {
    const { container } = render(
      <ChartContainer config={testConfig}>
        <BarChart data={sampleData}>
          <Bar dataKey="revenue" />
        </BarChart>
      </ChartContainer>
    );
    const chart = container.querySelector('[data-slot="chart"]') as HTMLElement;
    expect(chart.style.minHeight).toBe('350px');
  });
});

describe('ChartStyle', () => {
  it('renders style tag with color variables', () => {
    const { container } = render(<ChartStyle id="test" config={testConfig} />);
    const style = container.querySelector('style');
    expect(style).toBeTruthy();
    expect(style?.innerHTML).toContain('--color-revenue');
    expect(style?.innerHTML).toContain('#00c951');
  });

  it('renders theme-based colors', () => {
    const { container } = render(<ChartStyle id="test" config={themeConfig} />);
    const style = container.querySelector('style');
    expect(style).toBeTruthy();
    expect(style?.innerHTML).toContain('--color-sales');
    expect(style?.innerHTML).toContain('#3b82f6');
  });

  it('returns null when no color config', () => {
    const emptyConfig: ChartConfig = {
      item: { label: 'No Color' },
    };
    const { container } = render(<ChartStyle id="test" config={emptyConfig} />);
    const style = container.querySelector('style');
    expect(style).toBeNull();
  });
});
