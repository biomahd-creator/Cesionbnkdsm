/**
 * Accordion Component Tests (G2+)
 *
 * Tests for Accordion, AccordionItem, AccordionTrigger, and AccordionContent.
 * Validates rendering, expand/collapse, data-slot, and a11y.
 *
 * @version 0.2.3
 */

import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from '../../components/ui/accordion';

function renderAccordion(type: 'single' | 'multiple' = 'single') {
  return render(
    <Accordion type={type} collapsible={type === 'single' ? true : undefined}>
      <AccordionItem value="item-1">
        <AccordionTrigger>Section 1</AccordionTrigger>
        <AccordionContent>Content for section 1</AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-2">
        <AccordionTrigger>Section 2</AccordionTrigger>
        <AccordionContent>Content for section 2</AccordionContent>
      </AccordionItem>
    </Accordion>
  );
}

describe('Accordion', () => {
  // --- Rendering ---

  it('renders all triggers', () => {
    renderAccordion();
    expect(screen.getByRole('button', { name: 'Section 1' })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: 'Section 2' })).toBeInTheDocument();
  });

  it('renders data-slot on trigger', () => {
    renderAccordion();
    const trigger = screen.getByRole('button', { name: 'Section 1' });
    expect(trigger).toHaveAttribute('data-slot', 'accordion-trigger');
  });

  it('all items are collapsed by default', () => {
    renderAccordion();
    const trigger1 = screen.getByRole('button', { name: 'Section 1' });
    const trigger2 = screen.getByRole('button', { name: 'Section 2' });
    expect(trigger1).toHaveAttribute('data-state', 'closed');
    expect(trigger2).toHaveAttribute('data-state', 'closed');
  });

  // --- Expand/Collapse ---

  it('expands item on click', async () => {
    const user = userEvent.setup();
    renderAccordion();

    const trigger = screen.getByRole('button', { name: 'Section 1' });
    await user.click(trigger);

    expect(trigger).toHaveAttribute('data-state', 'open');
    expect(screen.getByText('Content for section 1')).toBeVisible();
  });

  it('collapses item on second click (collapsible)', async () => {
    const user = userEvent.setup();
    renderAccordion();

    const trigger = screen.getByRole('button', { name: 'Section 1' });
    await user.click(trigger);
    expect(trigger).toHaveAttribute('data-state', 'open');

    await user.click(trigger);
    expect(trigger).toHaveAttribute('data-state', 'closed');
  });

  it('single type: opening one item closes another', async () => {
    const user = userEvent.setup();
    renderAccordion('single');

    const trigger1 = screen.getByRole('button', { name: 'Section 1' });
    const trigger2 = screen.getByRole('button', { name: 'Section 2' });

    await user.click(trigger1);
    expect(trigger1).toHaveAttribute('data-state', 'open');

    await user.click(trigger2);
    expect(trigger2).toHaveAttribute('data-state', 'open');
    expect(trigger1).toHaveAttribute('data-state', 'closed');
  });

  // --- Multiple type ---

  it('multiple type: allows multiple items open', async () => {
    const user = userEvent.setup();
    renderAccordion('multiple');

    const trigger1 = screen.getByRole('button', { name: 'Section 1' });
    const trigger2 = screen.getByRole('button', { name: 'Section 2' });

    await user.click(trigger1);
    await user.click(trigger2);

    expect(trigger1).toHaveAttribute('data-state', 'open');
    expect(trigger2).toHaveAttribute('data-state', 'open');
  });

  // --- Accessibility ---

  it('triggers have aria-expanded', () => {
    renderAccordion();
    const trigger = screen.getByRole('button', { name: 'Section 1' });
    expect(trigger).toHaveAttribute('aria-expanded', 'false');
  });

  it('aria-expanded updates on open', async () => {
    const user = userEvent.setup();
    renderAccordion();

    const trigger = screen.getByRole('button', { name: 'Section 1' });
    await user.click(trigger);
    expect(trigger).toHaveAttribute('aria-expanded', 'true');
  });

  // --- Custom className ---

  it('merges custom className on AccordionItem', () => {
    render(
      <Accordion type="single" collapsible>
        <AccordionItem value="test" className="my-item">
          <AccordionTrigger>Test</AccordionTrigger>
          <AccordionContent>Content</AccordionContent>
        </AccordionItem>
      </Accordion>
    );
    const item = document.querySelector('[data-slot="accordion-item"]');
    expect(item?.className).toContain('my-item');
  });
});
