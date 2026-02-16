/**
 * StepIndicator Advanced Component Tests (G14 Batch 2)
 *
 * Tests for StepIndicator with variants: default, compact, minimal.
 * Validates rendering, step states, click interaction, orientations.
 *
 * @version 0.2.3
 */

import { describe, it, expect, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { StepIndicator, type Step } from '../../components/advanced/StepIndicator';

const mockSteps: Step[] = [
  { id: '1', title: 'Account', description: 'Create your account' },
  { id: '2', title: 'Profile', description: 'Set up your profile' },
  { id: '3', title: 'Review', description: 'Review and confirm' },
];

describe('StepIndicator', () => {
  // --- Default variant ---

  describe('Default variant', () => {
    it('renders all step titles', () => {
      render(<StepIndicator steps={mockSteps} currentStep={0} />);
      expect(screen.getByText('Account')).toBeInTheDocument();
      expect(screen.getByText('Profile')).toBeInTheDocument();
      expect(screen.getByText('Review')).toBeInTheDocument();
    });

    it('shows step counter', () => {
      render(<StepIndicator steps={mockSteps} currentStep={0} />);
      expect(screen.getByText('Step 1 of 3')).toBeInTheDocument();
    });

    it('shows progress percentage', () => {
      render(<StepIndicator steps={mockSteps} currentStep={1} />);
      expect(screen.getByText('50%')).toBeInTheDocument();
    });

    it('shows 0% at first step', () => {
      render(<StepIndicator steps={mockSteps} currentStep={0} />);
      expect(screen.getByText('0%')).toBeInTheDocument();
    });

    it('shows 100% at last step', () => {
      render(<StepIndicator steps={mockSteps} currentStep={2} />);
      expect(screen.getByText('100%')).toBeInTheDocument();
    });

    it('hides progress when showProgress=false', () => {
      render(
        <StepIndicator steps={mockSteps} currentStep={0} showProgress={false} />
      );
      expect(screen.queryByText('Step 1 of 3')).not.toBeInTheDocument();
    });

    it('hides labels when showLabels=false', () => {
      render(
        <StepIndicator steps={mockSteps} currentStep={0} showLabels={false} />
      );
      expect(screen.queryByText('Account')).not.toBeInTheDocument();
    });
  });

  // --- Minimal variant ---

  describe('Minimal variant', () => {
    it('renders progress bar and step counter', () => {
      render(
        <StepIndicator steps={mockSteps} currentStep={1} variant="minimal" />
      );
      expect(screen.getByText('Step 2 of 3')).toBeInTheDocument();
      expect(screen.getByText('50%')).toBeInTheDocument();
    });

    it('does not render step titles', () => {
      render(
        <StepIndicator steps={mockSteps} currentStep={0} variant="minimal" />
      );
      expect(screen.queryByText('Account')).not.toBeInTheDocument();
      expect(screen.queryByText('Profile')).not.toBeInTheDocument();
    });
  });

  // --- Compact variant ---

  describe('Compact variant', () => {
    it('renders step counter', () => {
      render(
        <StepIndicator steps={mockSteps} currentStep={0} variant="compact" />
      );
      expect(screen.getByText('Step 1 of 3')).toBeInTheDocument();
    });

    it('renders circle buttons for each step', () => {
      render(
        <StepIndicator steps={mockSteps} currentStep={0} variant="compact" />
      );
      const buttons = screen.getAllByRole('button');
      expect(buttons.length).toBe(3);
    });
  });

  // --- Click interaction ---

  it('calls onStepClick when clickable and step is clicked', async () => {
    const user = userEvent.setup();
    const onStepClick = vi.fn();
    render(
      <StepIndicator
        steps={mockSteps}
        currentStep={2}
        clickable
        onStepClick={onStepClick}
      />
    );

    const buttons = screen.getAllByRole('button');
    // Click on a completed step (step 0)
    await user.click(buttons[0]);
    expect(onStepClick).toHaveBeenCalledWith(0);
  });

  it('does not fire onStepClick for future steps', async () => {
    const user = userEvent.setup();
    const onStepClick = vi.fn();
    render(
      <StepIndicator
        steps={mockSteps}
        currentStep={0}
        clickable
        onStepClick={onStepClick}
      />
    );

    const buttons = screen.getAllByRole('button');
    // Step 2 is future — should be disabled
    await user.click(buttons[2]);
    expect(onStepClick).not.toHaveBeenCalledWith(2);
  });

  // --- Vertical orientation ---

  describe('Vertical orientation', () => {
    it('renders step titles', () => {
      render(
        <StepIndicator
          steps={mockSteps}
          currentStep={1}
          orientation="vertical"
        />
      );
      expect(screen.getByText('Account')).toBeInTheDocument();
      expect(screen.getByText('Profile')).toBeInTheDocument();
      expect(screen.getByText('Review')).toBeInTheDocument();
    });

    it('renders step descriptions', () => {
      render(
        <StepIndicator
          steps={mockSteps}
          currentStep={0}
          orientation="vertical"
        />
      );
      expect(screen.getByText('Create your account')).toBeInTheDocument();
    });
  });

  // --- Custom className ---

  it('merges custom className', () => {
    const { container } = render(
      <StepIndicator
        steps={mockSteps}
        currentStep={0}
        className="my-custom-class"
      />
    );
    const root = container.firstChild as HTMLElement;
    expect(root.className).toContain('my-custom-class');
  });
});
