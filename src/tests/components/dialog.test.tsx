/**
 * Dialog Component Tests (G14 Batch 2)
 *
 * Tests for Dialog and its sub-components.
 * Portal-based: content renders into document.body when open.
 *
 * @version 0.2.3
 */

import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogFooter,
  DialogTitle,
  DialogDescription,
  DialogClose,
} from '../../components/ui/dialog';

describe('Dialog', () => {
  // --- Trigger rendering ---

  it('renders the trigger button', () => {
    render(
      <Dialog>
        <DialogTrigger>Open Dialog</DialogTrigger>
        <DialogContent>
          <DialogTitle>Title</DialogTitle>
        </DialogContent>
      </Dialog>
    );
    expect(screen.getByText('Open Dialog')).toBeInTheDocument();
  });

  it('trigger has data-slot', () => {
    render(
      <Dialog>
        <DialogTrigger data-testid="trigger">Open</DialogTrigger>
        <DialogContent>
          <DialogTitle>Title</DialogTitle>
        </DialogContent>
      </Dialog>
    );
    expect(screen.getByTestId('trigger')).toHaveAttribute(
      'data-slot',
      'dialog-trigger'
    );
  });

  // --- Open/Close behavior ---

  it('does not show content when closed', () => {
    render(
      <Dialog>
        <DialogTrigger>Open</DialogTrigger>
        <DialogContent>
          <DialogTitle>Dialog Title</DialogTitle>
        </DialogContent>
      </Dialog>
    );
    expect(screen.queryByText('Dialog Title')).not.toBeInTheDocument();
  });

  it('shows content when opened via trigger', async () => {
    const user = userEvent.setup();
    render(
      <Dialog>
        <DialogTrigger>Open</DialogTrigger>
        <DialogContent>
          <DialogTitle>Dialog Title</DialogTitle>
          <DialogDescription>Some description</DialogDescription>
        </DialogContent>
      </Dialog>
    );

    await user.click(screen.getByText('Open'));
    expect(screen.getByText('Dialog Title')).toBeInTheDocument();
    expect(screen.getByText('Some description')).toBeInTheDocument();
  });

  it('shows content when defaultOpen is true', () => {
    render(
      <Dialog defaultOpen>
        <DialogTrigger>Open</DialogTrigger>
        <DialogContent>
          <DialogTitle>Visible Title</DialogTitle>
        </DialogContent>
      </Dialog>
    );
    expect(screen.getByText('Visible Title')).toBeInTheDocument();
  });

  it('renders close button with sr-only text', () => {
    render(
      <Dialog defaultOpen>
        <DialogContent>
          <DialogTitle>Title</DialogTitle>
        </DialogContent>
      </Dialog>
    );
    expect(screen.getByText('Close')).toBeInTheDocument();
  });

  // --- Sub-component data-slots ---

  it('DialogContent has data-slot', () => {
    render(
      <Dialog defaultOpen>
        <DialogContent>
          <DialogTitle>Title</DialogTitle>
        </DialogContent>
      </Dialog>
    );
    const content = document.querySelector('[data-slot="dialog-content"]');
    expect(content).toBeTruthy();
  });

  it('DialogOverlay has data-slot', () => {
    render(
      <Dialog defaultOpen>
        <DialogContent>
          <DialogTitle>Title</DialogTitle>
        </DialogContent>
      </Dialog>
    );
    const overlay = document.querySelector('[data-slot="dialog-overlay"]');
    expect(overlay).toBeTruthy();
  });

  it('DialogHeader has data-slot', () => {
    render(
      <Dialog defaultOpen>
        <DialogContent>
          <DialogHeader data-testid="header">
            <DialogTitle>Title</DialogTitle>
          </DialogHeader>
        </DialogContent>
      </Dialog>
    );
    expect(screen.getByTestId('header')).toHaveAttribute(
      'data-slot',
      'dialog-header'
    );
  });

  it('DialogFooter has data-slot', () => {
    render(
      <Dialog defaultOpen>
        <DialogContent>
          <DialogTitle>Title</DialogTitle>
          <DialogFooter data-testid="footer">
            <button>Save</button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    );
    expect(screen.getByTestId('footer')).toHaveAttribute(
      'data-slot',
      'dialog-footer'
    );
  });

  it('DialogTitle has data-slot', () => {
    render(
      <Dialog defaultOpen>
        <DialogContent>
          <DialogTitle data-testid="title">My Title</DialogTitle>
        </DialogContent>
      </Dialog>
    );
    expect(screen.getByTestId('title')).toHaveAttribute(
      'data-slot',
      'dialog-title'
    );
  });

  it('DialogDescription has data-slot', () => {
    render(
      <Dialog defaultOpen>
        <DialogContent>
          <DialogTitle>Title</DialogTitle>
          <DialogDescription data-testid="desc">Description here</DialogDescription>
        </DialogContent>
      </Dialog>
    );
    expect(screen.getByTestId('desc')).toHaveAttribute(
      'data-slot',
      'dialog-description'
    );
  });

  // --- Accessibility ---

  it('has role="dialog" on content', () => {
    render(
      <Dialog defaultOpen>
        <DialogContent>
          <DialogTitle>Title</DialogTitle>
        </DialogContent>
      </Dialog>
    );
    expect(screen.getByRole('dialog')).toBeInTheDocument();
  });
});
