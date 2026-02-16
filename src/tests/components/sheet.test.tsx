/**
 * Sheet Component Tests (G14 Batch 2)
 *
 * Tests for Sheet (side panel dialog).
 * Portal-based: content renders into document.body when open.
 *
 * @version 0.2.3
 */

import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import {
  Sheet,
  SheetTrigger,
  SheetContent,
  SheetHeader,
  SheetFooter,
  SheetTitle,
  SheetDescription,
  SheetClose,
} from '../../components/ui/sheet';

describe('Sheet', () => {
  // --- Trigger ---

  it('renders the trigger', () => {
    render(
      <Sheet>
        <SheetTrigger>Open Sheet</SheetTrigger>
        <SheetContent>
          <SheetTitle>Panel</SheetTitle>
        </SheetContent>
      </Sheet>
    );
    expect(screen.getByText('Open Sheet')).toBeInTheDocument();
  });

  it('trigger has data-slot', () => {
    render(
      <Sheet>
        <SheetTrigger data-testid="trigger">Open</SheetTrigger>
        <SheetContent>
          <SheetTitle>Title</SheetTitle>
        </SheetContent>
      </Sheet>
    );
    expect(screen.getByTestId('trigger')).toHaveAttribute(
      'data-slot',
      'sheet-trigger'
    );
  });

  // --- Open/Close ---

  it('does not show content when closed', () => {
    render(
      <Sheet>
        <SheetTrigger>Open</SheetTrigger>
        <SheetContent>
          <SheetTitle>Sheet Title</SheetTitle>
        </SheetContent>
      </Sheet>
    );
    expect(screen.queryByText('Sheet Title')).not.toBeInTheDocument();
  });

  it('shows content when opened', async () => {
    const user = userEvent.setup();
    render(
      <Sheet>
        <SheetTrigger>Open</SheetTrigger>
        <SheetContent>
          <SheetTitle>Sheet Title</SheetTitle>
          <SheetDescription>Some description</SheetDescription>
        </SheetContent>
      </Sheet>
    );

    await user.click(screen.getByText('Open'));
    expect(screen.getByText('Sheet Title')).toBeInTheDocument();
    expect(screen.getByText('Some description')).toBeInTheDocument();
  });

  it('shows content when defaultOpen is true', () => {
    render(
      <Sheet defaultOpen>
        <SheetContent>
          <SheetTitle>Visible Panel</SheetTitle>
        </SheetContent>
      </Sheet>
    );
    expect(screen.getByText('Visible Panel')).toBeInTheDocument();
  });

  it('renders close button', () => {
    render(
      <Sheet defaultOpen>
        <SheetContent>
          <SheetTitle>Title</SheetTitle>
        </SheetContent>
      </Sheet>
    );
    expect(screen.getByText('Close')).toBeInTheDocument();
  });

  // --- Data-slots ---

  it('SheetContent has data-slot', () => {
    render(
      <Sheet defaultOpen>
        <SheetContent>
          <SheetTitle>Title</SheetTitle>
        </SheetContent>
      </Sheet>
    );
    const content = document.querySelector('[data-slot="sheet-content"]');
    expect(content).toBeTruthy();
  });

  it('SheetOverlay has data-slot', () => {
    render(
      <Sheet defaultOpen>
        <SheetContent>
          <SheetTitle>Title</SheetTitle>
        </SheetContent>
      </Sheet>
    );
    const overlay = document.querySelector('[data-slot="sheet-overlay"]');
    expect(overlay).toBeTruthy();
  });

  it('SheetHeader has data-slot', () => {
    render(
      <Sheet defaultOpen>
        <SheetContent>
          <SheetHeader data-testid="header">
            <SheetTitle>Title</SheetTitle>
          </SheetHeader>
        </SheetContent>
      </Sheet>
    );
    expect(screen.getByTestId('header')).toHaveAttribute(
      'data-slot',
      'sheet-header'
    );
  });

  it('SheetFooter has data-slot', () => {
    render(
      <Sheet defaultOpen>
        <SheetContent>
          <SheetTitle>Title</SheetTitle>
          <SheetFooter data-testid="footer">
            <button>Save</button>
          </SheetFooter>
        </SheetContent>
      </Sheet>
    );
    expect(screen.getByTestId('footer')).toHaveAttribute(
      'data-slot',
      'sheet-footer'
    );
  });

  it('SheetTitle has data-slot', () => {
    render(
      <Sheet defaultOpen>
        <SheetContent>
          <SheetTitle data-testid="title">Panel Title</SheetTitle>
        </SheetContent>
      </Sheet>
    );
    expect(screen.getByTestId('title')).toHaveAttribute(
      'data-slot',
      'sheet-title'
    );
  });

  it('SheetDescription has data-slot', () => {
    render(
      <Sheet defaultOpen>
        <SheetContent>
          <SheetTitle>Title</SheetTitle>
          <SheetDescription data-testid="desc">Desc</SheetDescription>
        </SheetContent>
      </Sheet>
    );
    expect(screen.getByTestId('desc')).toHaveAttribute(
      'data-slot',
      'sheet-description'
    );
  });

  // --- Accessibility ---

  it('has role="dialog"', () => {
    render(
      <Sheet defaultOpen>
        <SheetContent>
          <SheetTitle>Title</SheetTitle>
        </SheetContent>
      </Sheet>
    );
    expect(screen.getByRole('dialog')).toBeInTheDocument();
  });
});
