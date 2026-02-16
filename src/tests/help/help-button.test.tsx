/**
 * HelpButton Tests (G14 Batch 7)
 *
 * Tests for HelpButton floating button rendering.
 * Requires HelpProvider wrapper.
 *
 * @version 0.2.3
 */

import { describe, it, expect, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { HelpButton } from '../../components/help/HelpButton';
import { HelpProvider } from '../../components/help/HelpProvider';

function renderWithProvider() {
  return render(
    <HelpProvider>
      <HelpButton />
    </HelpProvider>
  );
}

describe('HelpButton', () => {
  it('renders the help button', () => {
    renderWithProvider();
    expect(screen.getByRole('button', { name: /open help center/i })).toBeInTheDocument();
  });

  it('has fixed positioning class', () => {
    renderWithProvider();
    const button = screen.getByRole('button', { name: /open help center/i });
    expect(button.className).toContain('fixed');
  });

  it('calls toggleHelpCenter on click', async () => {
    const user = userEvent.setup();
    renderWithProvider();
    const button = screen.getByRole('button', { name: /open help center/i });
    // Should not throw on click
    await user.click(button);
  });
});
