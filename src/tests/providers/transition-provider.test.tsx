/**
 * TransitionProvider Tests (G14 Batch 7)
 *
 * Tests for TransitionProvider context and useTransition hook.
 *
 * @version 0.2.3
 */

import { describe, it, expect, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { TransitionProvider, useTransition } from '../../components/providers/TransitionProvider';

function TransitionConsumer() {
  const { transitionState, startTransition, endTransition, isTransitioning } = useTransition();
  return (
    <div>
      <span data-testid="is-transitioning">{String(isTransitioning)}</span>
      <span data-testid="direction">{transitionState.direction}</span>
      <span data-testid="type">{transitionState.type}</span>
      <span data-testid="from">{transitionState.from || 'none'}</span>
      <span data-testid="to">{transitionState.to || 'none'}</span>
      <button onClick={() => startTransition('home', 'about', 'slide', 'forward')}>Start</button>
      <button onClick={() => startTransition('about', 'home')}>Start Default</button>
      <button onClick={endTransition}>End</button>
    </div>
  );
}

describe('TransitionProvider', () => {
  it('renders children', () => {
    render(
      <TransitionProvider>
        <span>Child</span>
      </TransitionProvider>
    );
    expect(screen.getByText('Child')).toBeInTheDocument();
  });

  it('starts with isTransitioning false', () => {
    render(
      <TransitionProvider>
        <TransitionConsumer />
      </TransitionProvider>
    );
    expect(screen.getByTestId('is-transitioning').textContent).toBe('false');
  });

  it('starts with default type "fade"', () => {
    render(
      <TransitionProvider>
        <TransitionConsumer />
      </TransitionProvider>
    );
    expect(screen.getByTestId('type').textContent).toBe('fade');
  });

  it('respects custom defaultType', () => {
    render(
      <TransitionProvider defaultType="scale">
        <TransitionConsumer />
      </TransitionProvider>
    );
    expect(screen.getByTestId('type').textContent).toBe('scale');
  });

  it('startTransition updates state', async () => {
    const user = userEvent.setup();
    render(
      <TransitionProvider>
        <TransitionConsumer />
      </TransitionProvider>
    );
    await user.click(screen.getByText('Start'));
    expect(screen.getByTestId('is-transitioning').textContent).toBe('true');
    expect(screen.getByTestId('direction').textContent).toBe('forward');
    expect(screen.getByTestId('type').textContent).toBe('slide');
    expect(screen.getByTestId('from').textContent).toBe('home');
    expect(screen.getByTestId('to').textContent).toBe('about');
  });

  it('startTransition uses defaults for type and direction', async () => {
    const user = userEvent.setup();
    render(
      <TransitionProvider>
        <TransitionConsumer />
      </TransitionProvider>
    );
    await user.click(screen.getByText('Start Default'));
    expect(screen.getByTestId('is-transitioning').textContent).toBe('true');
    expect(screen.getByTestId('direction').textContent).toBe('forward');
    expect(screen.getByTestId('type').textContent).toBe('fade');
  });

  it('endTransition sets isTransitioning to false', async () => {
    const user = userEvent.setup();
    render(
      <TransitionProvider>
        <TransitionConsumer />
      </TransitionProvider>
    );
    await user.click(screen.getByText('Start'));
    expect(screen.getByTestId('is-transitioning').textContent).toBe('true');
    await user.click(screen.getByText('End'));
    expect(screen.getByTestId('is-transitioning').textContent).toBe('false');
  });
});

describe('useTransition', () => {
  it('throws when used outside TransitionProvider', () => {
    const spy = vi.spyOn(console, 'error').mockImplementation(() => {});
    expect(() => render(<TransitionConsumer />)).toThrow(
      'useTransition must be used within a TransitionProvider'
    );
    spy.mockRestore();
  });
});
