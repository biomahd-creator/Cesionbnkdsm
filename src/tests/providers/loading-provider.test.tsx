/**
 * LoadingProvider Tests (G14 Batch 7)
 *
 * Tests for LoadingProvider context and useLoading hook.
 *
 * @version 0.2.3
 */

import { describe, it, expect, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { LoadingProvider, useLoading } from '../../components/providers/LoadingProvider';

function LoadingConsumer() {
  const { isLoading, loadingState, showLoading, hideLoading } = useLoading();
  return (
    <div>
      <span data-testid="is-loading">{String(isLoading)}</span>
      <span data-testid="message">{loadingState.message || 'none'}</span>
      <span data-testid="type">{loadingState.type || 'none'}</span>
      <button onClick={() => showLoading('Loading data...', 'spinner')}>Show</button>
      <button onClick={() => showLoading()}>Show Default</button>
      <button onClick={hideLoading}>Hide</button>
    </div>
  );
}

describe('LoadingProvider', () => {
  it('renders children', () => {
    render(
      <LoadingProvider>
        <span>Child</span>
      </LoadingProvider>
    );
    expect(screen.getByText('Child')).toBeInTheDocument();
  });

  it('starts with isLoading false', () => {
    render(
      <LoadingProvider>
        <LoadingConsumer />
      </LoadingProvider>
    );
    expect(screen.getByTestId('is-loading').textContent).toBe('false');
  });

  it('starts with overlay type', () => {
    render(
      <LoadingProvider>
        <LoadingConsumer />
      </LoadingProvider>
    );
    expect(screen.getByTestId('type').textContent).toBe('overlay');
  });

  it('showLoading sets isLoading to true with message', async () => {
    const user = userEvent.setup();
    render(
      <LoadingProvider>
        <LoadingConsumer />
      </LoadingProvider>
    );
    await user.click(screen.getByText('Show'));
    expect(screen.getByTestId('is-loading').textContent).toBe('true');
    expect(screen.getByTestId('message').textContent).toBe('Loading data...');
    expect(screen.getByTestId('type').textContent).toBe('spinner');
  });

  it('showLoading works without message (defaults)', async () => {
    const user = userEvent.setup();
    render(
      <LoadingProvider>
        <LoadingConsumer />
      </LoadingProvider>
    );
    await user.click(screen.getByText('Show Default'));
    expect(screen.getByTestId('is-loading').textContent).toBe('true');
    expect(screen.getByTestId('type').textContent).toBe('overlay');
  });

  it('hideLoading resets state', async () => {
    const user = userEvent.setup();
    render(
      <LoadingProvider>
        <LoadingConsumer />
      </LoadingProvider>
    );
    await user.click(screen.getByText('Show'));
    expect(screen.getByTestId('is-loading').textContent).toBe('true');
    await user.click(screen.getByText('Hide'));
    expect(screen.getByTestId('is-loading').textContent).toBe('false');
    expect(screen.getByTestId('message').textContent).toBe('none');
  });
});

describe('useLoading', () => {
  it('throws when used outside LoadingProvider', () => {
    const spy = vi.spyOn(console, 'error').mockImplementation(() => {});
    expect(() => render(<LoadingConsumer />)).toThrow(
      'useLoading must be used within a LoadingProvider'
    );
    spy.mockRestore();
  });
});
