/**
 * Tabs Component Tests (G2+)
 *
 * Tests for Tabs, TabsList, TabsTrigger, and TabsContent.
 * Validates rendering, tab switching, data-slot, disabled, and a11y.
 *
 * @version 0.2.3
 */

import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '../../components/ui/tabs';

function renderTabs() {
  return render(
    <Tabs defaultValue="tab1">
      <TabsList>
        <TabsTrigger value="tab1">Tab 1</TabsTrigger>
        <TabsTrigger value="tab2">Tab 2</TabsTrigger>
        <TabsTrigger value="tab3" disabled>Tab 3</TabsTrigger>
      </TabsList>
      <TabsContent value="tab1">Content 1</TabsContent>
      <TabsContent value="tab2">Content 2</TabsContent>
      <TabsContent value="tab3">Content 3</TabsContent>
    </Tabs>
  );
}

describe('Tabs', () => {
  // --- Rendering ---

  it('renders all tab triggers', () => {
    renderTabs();
    expect(screen.getByRole('tab', { name: 'Tab 1' })).toBeInTheDocument();
    expect(screen.getByRole('tab', { name: 'Tab 2' })).toBeInTheDocument();
    expect(screen.getByRole('tab', { name: 'Tab 3' })).toBeInTheDocument();
  });

  it('renders the tablist', () => {
    renderTabs();
    const tablist = screen.getByRole('tablist');
    expect(tablist).toBeInTheDocument();
    expect(tablist).toHaveAttribute('data-slot', 'tabs-list');
  });

  it('renders data-slot on triggers', () => {
    renderTabs();
    const trigger = screen.getByRole('tab', { name: 'Tab 1' });
    expect(trigger).toHaveAttribute('data-slot', 'tabs-trigger');
  });

  // --- Default selection ---

  it('shows the default tab content', () => {
    renderTabs();
    expect(screen.getByText('Content 1')).toBeInTheDocument();
  });

  it('marks the default tab as active', () => {
    renderTabs();
    const tab1 = screen.getByRole('tab', { name: 'Tab 1' });
    expect(tab1).toHaveAttribute('data-state', 'active');
    expect(tab1).toHaveAttribute('aria-selected', 'true');
  });

  it('marks non-default tabs as inactive', () => {
    renderTabs();
    const tab2 = screen.getByRole('tab', { name: 'Tab 2' });
    expect(tab2).toHaveAttribute('data-state', 'inactive');
  });

  // --- Tab switching ---

  it('switches content on tab click', async () => {
    const user = userEvent.setup();
    renderTabs();

    await user.click(screen.getByRole('tab', { name: 'Tab 2' }));

    expect(screen.getByText('Content 2')).toBeInTheDocument();
    expect(screen.getByRole('tab', { name: 'Tab 2' })).toHaveAttribute('data-state', 'active');
  });

  // --- Disabled ---

  it('marks disabled tab correctly', () => {
    renderTabs();
    const tab3 = screen.getByRole('tab', { name: 'Tab 3' });
    expect(tab3).toBeDisabled();
  });

  // --- Custom className ---

  it('merges custom className on TabsList', () => {
    render(
      <Tabs defaultValue="a">
        <TabsList className="my-tabslist">
          <TabsTrigger value="a">A</TabsTrigger>
        </TabsList>
        <TabsContent value="a">Content</TabsContent>
      </Tabs>
    );
    const tablist = screen.getByRole('tablist');
    expect(tablist.className).toContain('my-tabslist');
  });

  it('merges custom className on TabsTrigger', () => {
    render(
      <Tabs defaultValue="a">
        <TabsList>
          <TabsTrigger value="a" className="my-trigger">A</TabsTrigger>
        </TabsList>
        <TabsContent value="a">Content</TabsContent>
      </Tabs>
    );
    const trigger = screen.getByRole('tab', { name: 'A' });
    expect(trigger.className).toContain('my-trigger');
  });

  it('merges custom className on TabsContent', () => {
    render(
      <Tabs defaultValue="a">
        <TabsList>
          <TabsTrigger value="a">A</TabsTrigger>
        </TabsList>
        <TabsContent value="a" className="my-content">
          Content
        </TabsContent>
      </Tabs>
    );
    const content = screen.getByRole('tabpanel');
    expect(content.className).toContain('my-content');
  });
});
