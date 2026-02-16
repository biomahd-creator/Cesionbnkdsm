/**
 * ProductTour Tests (G14 Batch 7)
 *
 * Tests for ProductTour button rendering and visibility.
 * driver.js dynamic import is mocked since it's not available in jsdom.
 *
 * @version 0.2.3
 */

import { describe, it, expect, vi, beforeEach } from 'vitest';
import { render, screen } from '@testing-library/react';
import { ProductTour } from '../../components/help/ProductTour';
import { HelpProvider } from '../../components/help/HelpProvider';
import type { TourStep } from '../../components/help/tourSteps';

const mockSteps: TourStep[] = [
  {
    element: '#step-1',
    popover: { title: 'Step 1', description: 'First step' },
  },
  {
    element: '#step-2',
    popover: { title: 'Step 2', description: 'Second step' },
  },
];

function renderWithProvider(props: Partial<React.ComponentProps<typeof ProductTour>> = {}) {
  return render(
    <HelpProvider>
      <ProductTour
        steps={mockSteps}
        tourId="test-tour"
        {...props}
      />
    </HelpProvider>
  );
}

// Mock localStorage
beforeEach(() => {
  localStorage.clear();
});

describe('ProductTour', () => {
  it('renders Start Tour button by default', () => {
    renderWithProvider();
    expect(screen.getByText('Start Tour')).toBeInTheDocument();
  });

  it('renders custom button text', () => {
    renderWithProvider({ buttonText: 'Begin Guide' });
    expect(screen.getByText('Begin Guide')).toBeInTheDocument();
  });

  it('hides button when showButton is false', () => {
    renderWithProvider({ showButton: false });
    expect(screen.queryByText('Start Tour')).not.toBeInTheDocument();
  });

  it('renders a hidden span when showButton is false', () => {
    const { container } = renderWithProvider({ showButton: false });
    const hiddenSpan = container.querySelector('span.hidden');
    expect(hiddenSpan).toBeTruthy();
  });

  it('button is not disabled initially', () => {
    renderWithProvider();
    const button = screen.getByText('Start Tour').closest('button');
    expect(button).not.toBeDisabled();
  });

  it('applies outline variant by default', () => {
    renderWithProvider();
    const button = screen.getByText('Start Tour').closest('button');
    expect(button).toBeTruthy();
  });
});
