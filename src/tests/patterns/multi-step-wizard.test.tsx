/**
 * MultiStepWizard Pattern Tests (G14 Batch 3)
 *
 * Tests for MultiStepWizard navigation and step rendering.
 *
 * @version 0.2.3
 */

import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { MultiStepWizard } from '../../components/patterns/MultiStepWizard';

describe('MultiStepWizard', () => {
  // --- Initial rendering ---

  it('renders the wizard title', () => {
    render(<MultiStepWizard />);
    expect(screen.getByText('Factoring Application')).toBeInTheDocument();
  });

  it('shows step 1 of 4 initially', () => {
    render(<MultiStepWizard />);
    expect(screen.getByText('Step 1 of 4')).toBeInTheDocument();
  });

  it('shows 25% progress initially', () => {
    render(<MultiStepWizard />);
    expect(screen.getByText('25%')).toBeInTheDocument();
  });

  it('renders all step labels', () => {
    render(<MultiStepWizard />);
    expect(screen.getByText('Basic Information')).toBeInTheDocument();
    expect(screen.getByText('Financial Details')).toBeInTheDocument();
    expect(screen.getByText('Documentation')).toBeInTheDocument();
    expect(screen.getByText('Review')).toBeInTheDocument();
  });

  // --- Step 1 content ---

  it('shows Basic Information form fields on step 1', () => {
    render(<MultiStepWizard />);
    expect(screen.getByLabelText('Company Name')).toBeInTheDocument();
    expect(screen.getByLabelText('Tax ID')).toBeInTheDocument();
    expect(screen.getByLabelText('Phone')).toBeInTheDocument();
    expect(screen.getByLabelText('Contact Email')).toBeInTheDocument();
  });

  // --- Navigation ---

  it('Previous button is disabled on first step', () => {
    render(<MultiStepWizard />);
    expect(screen.getByText('Previous')).toBeDisabled();
  });

  it('shows Next button on step 1', () => {
    render(<MultiStepWizard />);
    expect(screen.getByText('Next')).toBeInTheDocument();
  });

  it('advances to step 2 when Next is clicked', async () => {
    const user = userEvent.setup();
    render(<MultiStepWizard />);
    await user.click(screen.getByText('Next'));
    expect(screen.getByText('Step 2 of 4')).toBeInTheDocument();
    expect(screen.getByText('50%')).toBeInTheDocument();
  });

  it('goes back to step 1 when Previous is clicked on step 2', async () => {
    const user = userEvent.setup();
    render(<MultiStepWizard />);
    await user.click(screen.getByText('Next'));
    expect(screen.getByText('Step 2 of 4')).toBeInTheDocument();
    await user.click(screen.getByText('Previous'));
    expect(screen.getByText('Step 1 of 4')).toBeInTheDocument();
  });

  it('shows Submit button on last step', async () => {
    const user = userEvent.setup();
    render(<MultiStepWizard />);
    // Navigate to step 4
    await user.click(screen.getByText('Next')); // → step 2
    await user.click(screen.getByText('Next')); // → step 3
    await user.click(screen.getByText('Next')); // → step 4
    expect(screen.getByText('Submit Application')).toBeInTheDocument();
    expect(screen.queryByText('Next')).not.toBeInTheDocument();
  });

  // --- Progress ---

  it('updates progress as steps advance', async () => {
    const user = userEvent.setup();
    render(<MultiStepWizard />);
    expect(screen.getByText('25%')).toBeInTheDocument();
    await user.click(screen.getByText('Next'));
    expect(screen.getByText('50%')).toBeInTheDocument();
    await user.click(screen.getByText('Next'));
    expect(screen.getByText('75%')).toBeInTheDocument();
    await user.click(screen.getByText('Next'));
    expect(screen.getByText('100%')).toBeInTheDocument();
  });

  // --- Step 2 content ---

  it('shows Financial Details form on step 2', async () => {
    const user = userEvent.setup();
    render(<MultiStepWizard />);
    await user.click(screen.getByText('Next'));
    expect(screen.getByLabelText('Requested Amount')).toBeInTheDocument();
  });

  // --- Step 3 content ---

  it('shows Documentation content on step 3', async () => {
    const user = userEvent.setup();
    render(<MultiStepWizard />);
    await user.click(screen.getByText('Next'));
    await user.click(screen.getByText('Next'));
    expect(screen.getByText('Step 3 of 4')).toBeInTheDocument();
  });

  // --- Step 4 review ---

  it('shows Review content on step 4', async () => {
    const user = userEvent.setup();
    render(<MultiStepWizard />);
    await user.click(screen.getByText('Next'));
    await user.click(screen.getByText('Next'));
    await user.click(screen.getByText('Next'));
    expect(screen.getByText('Step 4 of 4')).toBeInTheDocument();
    expect(screen.getByText('100%')).toBeInTheDocument();
  });

  // --- Step 1 form interaction ---

  it('types into Company Name field', async () => {
    const user = userEvent.setup();
    render(<MultiStepWizard />);
    const companyInput = screen.getByLabelText('Company Name');
    await user.type(companyInput, 'Test Corp');
    expect(companyInput).toHaveValue('Test Corp');
  });

  it('types into Tax ID field', async () => {
    const user = userEvent.setup();
    render(<MultiStepWizard />);
    const taxInput = screen.getByLabelText('Tax ID');
    await user.type(taxInput, '900.123.456-7');
    expect(taxInput).toHaveValue('900.123.456-7');
  });

  // --- Full round trip ---

  it('navigates forward and backward through all steps', async () => {
    const user = userEvent.setup();
    render(<MultiStepWizard />);
    await user.click(screen.getByText('Next'));
    expect(screen.getByText('Step 2 of 4')).toBeInTheDocument();
    await user.click(screen.getByText('Next'));
    expect(screen.getByText('Step 3 of 4')).toBeInTheDocument();
    await user.click(screen.getByText('Next'));
    expect(screen.getByText('Step 4 of 4')).toBeInTheDocument();
    // Go back
    await user.click(screen.getByText('Previous'));
    expect(screen.getByText('Step 3 of 4')).toBeInTheDocument();
    await user.click(screen.getByText('Previous'));
    expect(screen.getByText('Step 2 of 4')).toBeInTheDocument();
    await user.click(screen.getByText('Previous'));
    expect(screen.getByText('Step 1 of 4')).toBeInTheDocument();
  });

  // --- Progress bar rendering ---

  it('renders a progress bar', () => {
    const { container } = render(<MultiStepWizard />);
    const progressBar = container.querySelector('[role="progressbar"]');
    expect(progressBar).toBeInTheDocument();
  });
});