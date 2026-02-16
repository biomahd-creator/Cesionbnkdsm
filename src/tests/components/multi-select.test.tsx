/**
 * MultiSelect Component Tests (G14 Batch 5)
 *
 * MultiSelect uses Popover + Command (portal). We test
 * trigger rendering and initial state.
 *
 * @version 0.2.3
 */

import { describe, it, expect, vi, beforeAll } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { MultiSelect } from '../../components/ui/multi-select';

// cmdk calls scrollIntoView
beforeAll(() => {
  Element.prototype.scrollIntoView = Element.prototype.scrollIntoView || (() => {});
});

const options = [
  { label: 'React', value: 'react' },
  { label: 'Vue', value: 'vue' },
  { label: 'Angular', value: 'angular' },
  { label: 'Svelte', value: 'svelte' },
];

describe('MultiSelect', () => {
  it('renders placeholder when nothing selected', () => {
    render(<MultiSelect options={options} selected={[]} onChange={() => {}} />);
    expect(screen.getByText('Select options...')).toBeInTheDocument();
  });

  it('renders custom placeholder', () => {
    render(
      <MultiSelect options={options} selected={[]} onChange={() => {}} placeholder="Pick..." />
    );
    expect(screen.getByText('Pick...')).toBeInTheDocument();
  });

  it('shows selected badges', () => {
    render(
      <MultiSelect options={options} selected={['react', 'vue']} onChange={() => {}} />
    );
    expect(screen.getByText('React')).toBeInTheDocument();
    expect(screen.getByText('Vue')).toBeInTheDocument();
  });

  it('does not show placeholder when items are selected', () => {
    render(
      <MultiSelect options={options} selected={['react']} onChange={() => {}} />
    );
    expect(screen.queryByText('Select options...')).not.toBeInTheDocument();
  });

  it('renders remove buttons for selected items', () => {
    render(
      <MultiSelect options={options} selected={['react']} onChange={() => {}} />
    );
    expect(screen.getByText('Remove React')).toBeInTheDocument();
  });

  it('calls onChange when remove button is clicked', async () => {
    const user = userEvent.setup();
    const handleChange = vi.fn();
    render(
      <MultiSelect options={options} selected={['react', 'vue']} onChange={handleChange} />
    );
    // Click the remove button for React (sr-only text "Remove React")
    const removeBtn = screen.getByText('Remove React').closest('button')!;
    await user.click(removeBtn);
    expect(handleChange).toHaveBeenCalledWith(['vue']);
  });

  it('renders chevron icon', () => {
    const { container } = render(
      <MultiSelect options={options} selected={[]} onChange={() => {}} />
    );
    const svg = container.querySelector('svg');
    expect(svg).toBeTruthy();
  });

  it('applies disabled styling', () => {
    const { container } = render(
      <MultiSelect options={options} selected={[]} onChange={() => {}} disabled />
    );
    // The parent wrapper should contain opacity-50 or pointer-events-none for disabled state
    const disabledEl = container.querySelector('.opacity-50') ||
                       container.querySelector('.pointer-events-none');
    expect(disabledEl).toBeTruthy();
  });
});