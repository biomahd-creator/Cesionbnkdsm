/**
 * Select Component Tests (G14 Batch 2)
 *
 * Tests for Select, SelectTrigger, SelectContent, SelectItem, etc.
 * Portal-based: dropdown renders into document.body when open.
 *
 * Note: Radix Select uses popper positioning which has limitations
 * in jsdom (no layout engine). Tests focus on rendering, data-slots,
 * and basic interaction.
 *
 * @version 0.2.3
 */

import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import {
  Select,
  SelectTrigger,
  SelectContent,
  SelectItem,
  SelectValue,
  SelectGroup,
  SelectLabel,
  SelectSeparator,
} from '../../components/ui/select';

describe('Select', () => {
  // --- Trigger ---

  it('renders the trigger', () => {
    render(
      <Select>
        <SelectTrigger data-testid="trigger">
          <SelectValue placeholder="Pick one" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="a">Option A</SelectItem>
        </SelectContent>
      </Select>
    );
    expect(screen.getByTestId('trigger')).toBeInTheDocument();
  });

  it('trigger has data-slot', () => {
    render(
      <Select>
        <SelectTrigger data-testid="trigger">
          <SelectValue placeholder="Pick" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="a">A</SelectItem>
        </SelectContent>
      </Select>
    );
    expect(screen.getByTestId('trigger')).toHaveAttribute(
      'data-slot',
      'select-trigger'
    );
  });

  it('shows placeholder text', () => {
    render(
      <Select>
        <SelectTrigger>
          <SelectValue placeholder="Select a fruit" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="apple">Apple</SelectItem>
        </SelectContent>
      </Select>
    );
    expect(screen.getByText('Select a fruit')).toBeInTheDocument();
  });

  // --- Trigger sizes ---

  it('supports default size', () => {
    render(
      <Select>
        <SelectTrigger data-testid="trigger" size="default">
          <SelectValue placeholder="Pick" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="a">A</SelectItem>
        </SelectContent>
      </Select>
    );
    expect(screen.getByTestId('trigger')).toHaveAttribute(
      'data-size',
      'default'
    );
  });

  it('supports sm size', () => {
    render(
      <Select>
        <SelectTrigger data-testid="trigger" size="sm">
          <SelectValue placeholder="Pick" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="a">A</SelectItem>
        </SelectContent>
      </Select>
    );
    expect(screen.getByTestId('trigger')).toHaveAttribute('data-size', 'sm');
  });

  // --- Open/Close ---

  it('does not show items when closed', () => {
    render(
      <Select>
        <SelectTrigger>
          <SelectValue placeholder="Pick" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="a">Option A</SelectItem>
        </SelectContent>
      </Select>
    );
    expect(screen.queryByText('Option A')).not.toBeInTheDocument();
  });

  it('has combobox role on trigger', () => {
    render(
      <Select>
        <SelectTrigger>
          <SelectValue placeholder="Pick" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="a">A</SelectItem>
        </SelectContent>
      </Select>
    );
    expect(screen.getByRole('combobox')).toBeInTheDocument();
  });

  // --- Controlled value ---

  it('shows selected value', () => {
    render(
      <Select defaultValue="banana">
        <SelectTrigger>
          <SelectValue />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="apple">Apple</SelectItem>
          <SelectItem value="banana">Banana</SelectItem>
        </SelectContent>
      </Select>
    );
    expect(screen.getByText('Banana')).toBeInTheDocument();
  });

  // --- Custom className ---

  it('merges custom className on trigger', () => {
    render(
      <Select>
        <SelectTrigger className="w-64" data-testid="trigger">
          <SelectValue placeholder="Pick" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="a">A</SelectItem>
        </SelectContent>
      </Select>
    );
    expect(screen.getByTestId('trigger').className).toContain('w-64');
  });

  // --- Disabled ---

  it('supports disabled state', () => {
    render(
      <Select disabled>
        <SelectTrigger data-testid="trigger">
          <SelectValue placeholder="Pick" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="a">A</SelectItem>
        </SelectContent>
      </Select>
    );
    expect(screen.getByTestId('trigger')).toBeDisabled();
  });
});
