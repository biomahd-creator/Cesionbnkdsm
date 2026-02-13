/**
 * Progress Component Tests (G2)
 *
 * Tests for the Progress component.
 * Validates value rendering, accessibility, and custom styling.
 *
 * @version 0.1.1
 */

import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { Progress } from '../../components/ui/progress';

describe('Progress', () => {
  it('renders with default props', () => {
    render(<Progress data-testid="progress" />);
    const progress = screen.getByTestId('progress');
    expect(progress).toBeInTheDocument();
    expect(progress).toHaveAttribute('data-slot', 'progress');
  });

  it('has role=progressbar', () => {
    render(<Progress />);
    const progress = screen.getByRole('progressbar');
    expect(progress).toBeInTheDocument();
  });

  it('applies primary background to track', () => {
    render(<Progress data-testid="progress" />);
    const progress = screen.getByTestId('progress');
    expect(progress.className).toContain('bg-primary/20');
  });

  it('renders the indicator with translateX based on value', () => {
    render(<Progress value={75} data-testid="progress" />);
    const progress = screen.getByTestId('progress');
    const indicator = progress.querySelector('[data-slot="progress-indicator"]');
    expect(indicator).toBeInTheDocument();
    expect(indicator).toHaveStyle({ transform: 'translateX(-25%)' });
  });

  it('renders 0% progress correctly', () => {
    render(<Progress value={0} data-testid="progress" />);
    const progress = screen.getByTestId('progress');
    const indicator = progress.querySelector('[data-slot="progress-indicator"]');
    expect(indicator).toHaveStyle({ transform: 'translateX(-100%)' });
  });

  it('renders 100% progress correctly', () => {
    render(<Progress value={100} data-testid="progress" />);
    const progress = screen.getByTestId('progress');
    const indicator = progress.querySelector('[data-slot="progress-indicator"]');
    expect(indicator).toHaveStyle({ transform: 'translateX(-0%)' });
  });

  it('handles undefined value as 0', () => {
    render(<Progress data-testid="progress" />);
    const progress = screen.getByTestId('progress');
    const indicator = progress.querySelector('[data-slot="progress-indicator"]');
    expect(indicator).toHaveStyle({ transform: 'translateX(-100%)' });
  });

  it('applies indicator custom className', () => {
    render(<Progress indicatorClassName="bg-green-500" data-testid="progress" value={50} />);
    const progress = screen.getByTestId('progress');
    const indicator = progress.querySelector('[data-slot="progress-indicator"]');
    expect(indicator?.className).toContain('bg-green-500');
  });

  it('merges custom className on track', () => {
    render(<Progress className="h-4" data-testid="progress" />);
    const progress = screen.getByTestId('progress');
    expect(progress.className).toContain('h-4');
  });

  it('applies rounded-full for pill shape', () => {
    render(<Progress data-testid="progress" />);
    const progress = screen.getByTestId('progress');
    expect(progress.className).toContain('rounded-full');
  });
});
