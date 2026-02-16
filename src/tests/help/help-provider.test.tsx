/**
 * HelpProvider Tests (G14 Batch 7)
 *
 * Tests for HelpProvider context and useHelp hook.
 *
 * @version 0.2.3
 */

import { describe, it, expect, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { HelpProvider, useHelp } from '../../components/help/HelpProvider';

// Helper consumer that exposes context values
function HelpConsumer() {
  const { isHelpCenterOpen, openHelpCenter, closeHelpCenter, toggleHelpCenter, currentTourActive, setCurrentTourActive } = useHelp();
  return (
    <div>
      <span data-testid="is-open">{String(isHelpCenterOpen)}</span>
      <span data-testid="tour-active">{String(currentTourActive)}</span>
      <button onClick={openHelpCenter}>Open</button>
      <button onClick={closeHelpCenter}>Close</button>
      <button onClick={toggleHelpCenter}>Toggle</button>
      <button onClick={() => setCurrentTourActive(true)}>Start Tour</button>
      <button onClick={() => setCurrentTourActive(false)}>Stop Tour</button>
    </div>
  );
}

describe('HelpProvider', () => {
  it('renders children', () => {
    render(
      <HelpProvider>
        <span>Child content</span>
      </HelpProvider>
    );
    expect(screen.getByText('Child content')).toBeInTheDocument();
  });

  it('starts with help center closed', () => {
    render(
      <HelpProvider>
        <HelpConsumer />
      </HelpProvider>
    );
    expect(screen.getByTestId('is-open').textContent).toBe('false');
  });

  it('starts with tour inactive', () => {
    render(
      <HelpProvider>
        <HelpConsumer />
      </HelpProvider>
    );
    expect(screen.getByTestId('tour-active').textContent).toBe('false');
  });

  it('openHelpCenter sets isHelpCenterOpen to true', async () => {
    const user = userEvent.setup();
    render(
      <HelpProvider>
        <HelpConsumer />
      </HelpProvider>
    );
    await user.click(screen.getByText('Open'));
    expect(screen.getByTestId('is-open').textContent).toBe('true');
  });

  it('closeHelpCenter sets isHelpCenterOpen to false', async () => {
    const user = userEvent.setup();
    render(
      <HelpProvider>
        <HelpConsumer />
      </HelpProvider>
    );
    await user.click(screen.getByText('Open'));
    expect(screen.getByTestId('is-open').textContent).toBe('true');
    await user.click(screen.getByText('Close'));
    expect(screen.getByTestId('is-open').textContent).toBe('false');
  });

  it('toggleHelpCenter toggles the state', async () => {
    const user = userEvent.setup();
    render(
      <HelpProvider>
        <HelpConsumer />
      </HelpProvider>
    );
    await user.click(screen.getByText('Toggle'));
    expect(screen.getByTestId('is-open').textContent).toBe('true');
    await user.click(screen.getByText('Toggle'));
    expect(screen.getByTestId('is-open').textContent).toBe('false');
  });

  it('setCurrentTourActive updates tour state', async () => {
    const user = userEvent.setup();
    render(
      <HelpProvider>
        <HelpConsumer />
      </HelpProvider>
    );
    await user.click(screen.getByText('Start Tour'));
    expect(screen.getByTestId('tour-active').textContent).toBe('true');
    await user.click(screen.getByText('Stop Tour'));
    expect(screen.getByTestId('tour-active').textContent).toBe('false');
  });
});

describe('useHelp', () => {
  it('throws when used outside HelpProvider', () => {
    // Suppress console.error for expected error
    const spy = vi.spyOn(console, 'error').mockImplementation(() => {});
    expect(() => render(<HelpConsumer />)).toThrow();
    spy.mockRestore();
  });
});