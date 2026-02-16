/**
 * RadioGroup Component Tests (G2+)
 *
 * Tests for RadioGroup and RadioGroupItem.
 * Validates rendering, selection, data-slot, disabled, and a11y.
 *
 * @version 0.2.3
 */

import { describe, it, expect, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { RadioGroup, RadioGroupItem } from '../../components/ui/radio-group';

function renderRadioGroup(props: { disabled?: boolean; defaultValue?: string } = {}) {
  return render(
    <RadioGroup defaultValue={props.defaultValue} disabled={props.disabled}>
      <div>
        <RadioGroupItem value="option-1" id="r1" />
        <label htmlFor="r1">Option 1</label>
      </div>
      <div>
        <RadioGroupItem value="option-2" id="r2" />
        <label htmlFor="r2">Option 2</label>
      </div>
      <div>
        <RadioGroupItem value="option-3" id="r3" />
        <label htmlFor="r3">Option 3</label>
      </div>
    </RadioGroup>
  );
}

describe('RadioGroup', () => {
  // --- Rendering ---

  it('renders all radio items', () => {
    renderRadioGroup();
    const radios = screen.getAllByRole('radio');
    expect(radios).toHaveLength(3);
  });

  it('renders data-slot on group', () => {
    renderRadioGroup();
    const group = screen.getByRole('radiogroup');
    expect(group).toHaveAttribute('data-slot', 'radio-group');
  });

  it('renders data-slot on items', () => {
    renderRadioGroup();
    const radios = screen.getAllByRole('radio');
    radios.forEach((radio) => {
      expect(radio).toHaveAttribute('data-slot', 'radio-group-item');
    });
  });

  // --- Default selection ---

  it('selects default value', () => {
    renderRadioGroup({ defaultValue: 'option-2' });
    const radio2 = screen.getByLabelText('Option 2');
    expect(radio2).toHaveAttribute('data-state', 'checked');
  });

  it('none selected without default value', () => {
    renderRadioGroup();
    const radios = screen.getAllByRole('radio');
    radios.forEach((radio) => {
      expect(radio).toHaveAttribute('data-state', 'unchecked');
    });
  });

  // --- Interaction ---

  it('selects item on click', async () => {
    const user = userEvent.setup();
    renderRadioGroup();

    const radio1 = screen.getByLabelText('Option 1');
    await user.click(radio1);
    expect(radio1).toHaveAttribute('data-state', 'checked');
  });

  it('deselects previously selected item', async () => {
    const user = userEvent.setup();
    renderRadioGroup({ defaultValue: 'option-1' });

    const radio1 = screen.getByLabelText('Option 1');
    const radio2 = screen.getByLabelText('Option 2');

    expect(radio1).toHaveAttribute('data-state', 'checked');

    await user.click(radio2);
    expect(radio2).toHaveAttribute('data-state', 'checked');
    expect(radio1).toHaveAttribute('data-state', 'unchecked');
  });

  it('fires onValueChange callback', async () => {
    const user = userEvent.setup();
    const onValueChange = vi.fn();
    render(
      <RadioGroup onValueChange={onValueChange}>
        <RadioGroupItem value="a" id="ra" />
        <label htmlFor="ra">A</label>
      </RadioGroup>
    );

    await user.click(screen.getByLabelText('A'));
    expect(onValueChange).toHaveBeenCalledWith('a');
  });

  // --- Disabled ---

  it('disables all items when group is disabled', () => {
    renderRadioGroup({ disabled: true });
    const radios = screen.getAllByRole('radio');
    radios.forEach((radio) => {
      expect(radio).toBeDisabled();
    });
  });

  // --- Custom className ---

  it('merges custom className on RadioGroup', () => {
    render(
      <RadioGroup className="my-radio-group">
        <RadioGroupItem value="a" />
      </RadioGroup>
    );
    const group = screen.getByRole('radiogroup');
    expect(group.className).toContain('my-radio-group');
  });

  it('merges custom className on RadioGroupItem', () => {
    render(
      <RadioGroup>
        <RadioGroupItem value="a" className="my-radio-item" aria-label="Option A" />
      </RadioGroup>
    );
    const radio = screen.getByRole('radio');
    expect(radio.className).toContain('my-radio-item');
  });
});
