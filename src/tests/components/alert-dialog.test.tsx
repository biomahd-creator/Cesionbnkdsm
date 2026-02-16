/**
 * AlertDialog Component Tests (G14 Batch 2)
 *
 * Tests for AlertDialog and its sub-components.
 * Portal-based with role="alertdialog".
 *
 * @version 0.2.3
 */

import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import {
  AlertDialog,
  AlertDialogTrigger,
  AlertDialogContent,
  AlertDialogHeader,
  AlertDialogFooter,
  AlertDialogTitle,
  AlertDialogDescription,
  AlertDialogAction,
  AlertDialogCancel,
} from '../../components/ui/alert-dialog';

describe('AlertDialog', () => {
  // --- Trigger ---

  it('renders the trigger', () => {
    render(
      <AlertDialog>
        <AlertDialogTrigger>Delete</AlertDialogTrigger>
        <AlertDialogContent>
          <AlertDialogTitle>Are you sure?</AlertDialogTitle>
          <AlertDialogDescription>This cannot be undone.</AlertDialogDescription>
          <AlertDialogFooter>
            <AlertDialogCancel>Cancel</AlertDialogCancel>
            <AlertDialogAction>Confirm</AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    );
    expect(screen.getByText('Delete')).toBeInTheDocument();
  });

  it('trigger has data-slot', () => {
    render(
      <AlertDialog>
        <AlertDialogTrigger data-testid="trigger">Open</AlertDialogTrigger>
        <AlertDialogContent>
          <AlertDialogTitle>Title</AlertDialogTitle>
          <AlertDialogDescription>Desc</AlertDialogDescription>
          <AlertDialogAction>OK</AlertDialogAction>
        </AlertDialogContent>
      </AlertDialog>
    );
    expect(screen.getByTestId('trigger')).toHaveAttribute(
      'data-slot',
      'alert-dialog-trigger'
    );
  });

  // --- Open/Close ---

  it('does not show content when closed', () => {
    render(
      <AlertDialog>
        <AlertDialogTrigger>Open</AlertDialogTrigger>
        <AlertDialogContent>
          <AlertDialogTitle>Confirm</AlertDialogTitle>
          <AlertDialogDescription>Are you sure?</AlertDialogDescription>
          <AlertDialogAction>Yes</AlertDialogAction>
        </AlertDialogContent>
      </AlertDialog>
    );
    expect(screen.queryByText('Confirm')).not.toBeInTheDocument();
  });

  it('shows content when opened', async () => {
    const user = userEvent.setup();
    render(
      <AlertDialog>
        <AlertDialogTrigger>Open</AlertDialogTrigger>
        <AlertDialogContent>
          <AlertDialogTitle>Confirm Action</AlertDialogTitle>
          <AlertDialogDescription>This is permanent.</AlertDialogDescription>
          <AlertDialogFooter>
            <AlertDialogCancel>Cancel</AlertDialogCancel>
            <AlertDialogAction>Continue</AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    );

    await user.click(screen.getByText('Open'));
    expect(screen.getByText('Confirm Action')).toBeInTheDocument();
    expect(screen.getByText('This is permanent.')).toBeInTheDocument();
    expect(screen.getByText('Cancel')).toBeInTheDocument();
    expect(screen.getByText('Continue')).toBeInTheDocument();
  });

  it('shows content when defaultOpen', () => {
    render(
      <AlertDialog defaultOpen>
        <AlertDialogContent>
          <AlertDialogTitle>Visible Title</AlertDialogTitle>
          <AlertDialogDescription>Visible desc</AlertDialogDescription>
          <AlertDialogAction>OK</AlertDialogAction>
        </AlertDialogContent>
      </AlertDialog>
    );
    expect(screen.getByText('Visible Title')).toBeInTheDocument();
  });

  // --- Data-slots ---

  it('AlertDialogContent has data-slot', () => {
    render(
      <AlertDialog defaultOpen>
        <AlertDialogContent>
          <AlertDialogTitle>Title</AlertDialogTitle>
          <AlertDialogDescription>Desc</AlertDialogDescription>
          <AlertDialogAction>OK</AlertDialogAction>
        </AlertDialogContent>
      </AlertDialog>
    );
    expect(document.querySelector('[data-slot="alert-dialog-content"]')).toBeTruthy();
  });

  it('AlertDialogOverlay has data-slot', () => {
    render(
      <AlertDialog defaultOpen>
        <AlertDialogContent>
          <AlertDialogTitle>Title</AlertDialogTitle>
          <AlertDialogDescription>Desc</AlertDialogDescription>
          <AlertDialogAction>OK</AlertDialogAction>
        </AlertDialogContent>
      </AlertDialog>
    );
    expect(document.querySelector('[data-slot="alert-dialog-overlay"]')).toBeTruthy();
  });

  it('AlertDialogHeader has data-slot', () => {
    render(
      <AlertDialog defaultOpen>
        <AlertDialogContent>
          <AlertDialogHeader data-testid="header">
            <AlertDialogTitle>Title</AlertDialogTitle>
          </AlertDialogHeader>
          <AlertDialogDescription>Desc</AlertDialogDescription>
          <AlertDialogAction>OK</AlertDialogAction>
        </AlertDialogContent>
      </AlertDialog>
    );
    expect(screen.getByTestId('header')).toHaveAttribute(
      'data-slot',
      'alert-dialog-header'
    );
  });

  it('AlertDialogFooter has data-slot', () => {
    render(
      <AlertDialog defaultOpen>
        <AlertDialogContent>
          <AlertDialogTitle>Title</AlertDialogTitle>
          <AlertDialogDescription>Desc</AlertDialogDescription>
          <AlertDialogFooter data-testid="footer">
            <AlertDialogAction>OK</AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    );
    expect(screen.getByTestId('footer')).toHaveAttribute(
      'data-slot',
      'alert-dialog-footer'
    );
  });

  it('AlertDialogTitle has data-slot', () => {
    render(
      <AlertDialog defaultOpen>
        <AlertDialogContent>
          <AlertDialogTitle data-testid="title">Title</AlertDialogTitle>
          <AlertDialogDescription>Desc</AlertDialogDescription>
          <AlertDialogAction>OK</AlertDialogAction>
        </AlertDialogContent>
      </AlertDialog>
    );
    expect(screen.getByTestId('title')).toHaveAttribute(
      'data-slot',
      'alert-dialog-title'
    );
  });

  it('AlertDialogDescription has data-slot', () => {
    render(
      <AlertDialog defaultOpen>
        <AlertDialogContent>
          <AlertDialogTitle>Title</AlertDialogTitle>
          <AlertDialogDescription data-testid="desc">Desc</AlertDialogDescription>
          <AlertDialogAction>OK</AlertDialogAction>
        </AlertDialogContent>
      </AlertDialog>
    );
    expect(screen.getByTestId('desc')).toHaveAttribute(
      'data-slot',
      'alert-dialog-description'
    );
  });

  // --- Accessibility ---

  it('has role="alertdialog"', () => {
    render(
      <AlertDialog defaultOpen>
        <AlertDialogContent>
          <AlertDialogTitle>Title</AlertDialogTitle>
          <AlertDialogDescription>Desc</AlertDialogDescription>
          <AlertDialogAction>OK</AlertDialogAction>
        </AlertDialogContent>
      </AlertDialog>
    );
    expect(screen.getByRole('alertdialog')).toBeInTheDocument();
  });
});
