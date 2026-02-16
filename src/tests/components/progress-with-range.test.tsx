/**
 * ProgressWithRange Component Tests (G14 Batch 3)
 *
 * Tests for ProgressWithRange rendering and labels.
 * Note: The Progress component destructures `value` for the indicator
 * transform style but does NOT forward it to Radix Root, so there is
 * no aria-valuenow / data-value attribute — we verify via transform.
 *
 * @version 0.2.3
 */

import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { ProgressWithRange } from '../../components/ui/progress-with-range';

describe('ProgressWithRange', () => {
  const baseProps = {
    value: 75,
    from: '27 Nov',
    to: '27 Dec',
  };

  // --- Rendering ---

  it('renders from label', () => {
    render(<ProgressWithRange {...baseProps} />);
    expect(screen.getByText('27 Nov')).toBeInTheDocument();
  });

  it('renders to label', () => {
    render(<ProgressWithRange {...baseProps} />);
    expect(screen.getByText('27 Dec')).toBeInTheDocument();
  });

  it('renders arrow icon between labels', () => {
    const { container } = render(<ProgressWithRange {...baseProps} />);
    const svg = container.querySelector('svg');
    expect(svg).toBeTruthy();
  });

  it('renders progress bar', () => {
    render(<ProgressWithRange {...baseProps} />);
    expect(screen.getByRole('progressbar')).toBeInTheDocument();
  });

  // --- Value (verified via indicator transform) ---

  it('passes value to progress bar', () => {
    const { container } = render(<ProgressWithRange {...baseProps} value={50} />);
    const indicator = container.querySelector('[data-slot="progress-indicator"]');
    expect(indicator).toBeTruthy();
    // transform = translateX(-${100 - 50}%) = translateX(-50%)
    expect((indicator as HTMLElement).style.transform).toBe('translateX(-50%)');
  });

  it('renders with 0% value', () => {
    const { container } = render(<ProgressWithRange value={0} from="Start" to="End" />);
    const indicator = container.querySelector('[data-slot="progress-indicator"]');
    expect(indicator).toBeTruthy();
    // transform = translateX(-${100 - 0}%) = translateX(-100%)
    expect((indicator as HTMLElement).style.transform).toBe('translateX(-100%)');
  });

  it('renders with 100% value', () => {
    const { container } = render(<ProgressWithRange value={100} from="Start" to="End" />);
    const indicator = container.querySelector('[data-slot="progress-indicator"]');
    expect(indicator).toBeTruthy();
    // transform = translateX(-${100 - 100}%) = translateX(-0%) or translateX(0%)
    const transform = (indicator as HTMLElement).style.transform;
    expect(transform).toMatch(/translateX\(-?0%\)/);
  });

  // --- Custom className ---

  it('merges custom className', () => {
    const { container } = render(
      <ProgressWithRange {...baseProps} className="my-progress" />
    );
    const wrapper = container.firstChild as HTMLElement;
    expect(wrapper.className).toContain('my-progress');
  });

  it('passes barClassName to progress', () => {
    const { container } = render(
      <ProgressWithRange {...baseProps} barClassName="h-4" />
    );
    const progress = container.querySelector('[data-slot="progress"]');
    expect(progress?.className).toContain('h-4');
  });
});
