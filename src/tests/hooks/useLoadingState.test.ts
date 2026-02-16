/**
 * useLoadingState Hook Tests (G2+)
 *
 * Tests for the useLoadingState hook.
 * Validates start/stop loading, delay behavior, and cleanup.
 *
 * @version 0.2.3
 */

import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest';
import { renderHook, act } from '@testing-library/react';
import { useLoadingState } from '../../hooks/useLoadingState';

describe('useLoadingState', () => {
  beforeEach(() => {
    vi.useFakeTimers();
  });

  afterEach(() => {
    vi.useRealTimers();
  });

  // --- Initial state ---

  it('starts with isLoading=false', () => {
    const { result } = renderHook(() => useLoadingState());
    expect(result.current.isLoading).toBe(false);
    expect(result.current.showLoading).toBe(false);
  });

  // --- startLoading ---

  it('sets isLoading=true on startLoading', () => {
    const { result } = renderHook(() => useLoadingState());

    act(() => {
      result.current.startLoading();
    });

    expect(result.current.isLoading).toBe(true);
  });

  it('delays showLoading when delay > 0', () => {
    const { result } = renderHook(() =>
      useLoadingState({ delay: 200 })
    );

    act(() => {
      result.current.startLoading();
    });

    // isLoading is true immediately
    expect(result.current.isLoading).toBe(true);
    // But showLoading is still false (delay hasn't elapsed)
    expect(result.current.showLoading).toBe(false);

    // Advance past the delay
    act(() => {
      vi.advanceTimersByTime(200);
    });

    expect(result.current.showLoading).toBe(true);
  });

  it('shows immediately when delay=0', () => {
    const { result } = renderHook(() =>
      useLoadingState({ delay: 0 })
    );

    act(() => {
      result.current.startLoading();
    });

    expect(result.current.isLoading).toBe(true);
    expect(result.current.showLoading).toBe(true);
  });

  // --- stopLoading ---

  it('stops loading and resets state', () => {
    const { result } = renderHook(() =>
      useLoadingState({ delay: 0, minDuration: 0 })
    );

    act(() => {
      result.current.startLoading();
    });

    expect(result.current.isLoading).toBe(true);

    act(() => {
      result.current.stopLoading();
    });

    // With minDuration=0, setTimeout(fn, 0) still needs to fire
    act(() => {
      vi.advanceTimersByTime(0);
    });

    expect(result.current.isLoading).toBe(false);
    expect(result.current.showLoading).toBe(false);
  });

  it('cancels delay if stopped before delay fires', () => {
    const onEnd = vi.fn();
    const { result } = renderHook(() =>
      useLoadingState({ delay: 500, onEnd })
    );

    act(() => {
      result.current.startLoading();
    });

    // Stop before the delay fires
    act(() => {
      vi.advanceTimersByTime(100);
      result.current.stopLoading();
    });

    expect(result.current.isLoading).toBe(false);
    expect(onEnd).toHaveBeenCalled();
  });

  // --- Callbacks ---

  it('calls onStart callback', () => {
    const onStart = vi.fn();
    const { result } = renderHook(() =>
      useLoadingState({ onStart })
    );

    act(() => {
      result.current.startLoading();
    });

    expect(onStart).toHaveBeenCalledTimes(1);
  });

  it('calls onEnd callback after stopLoading', () => {
    const onEnd = vi.fn();
    const { result } = renderHook(() =>
      useLoadingState({ delay: 0, minDuration: 0, onEnd })
    );

    act(() => {
      result.current.startLoading();
    });

    act(() => {
      result.current.stopLoading();
    });

    act(() => {
      vi.advanceTimersByTime(0);
    });

    expect(onEnd).toHaveBeenCalledTimes(1);
  });

  // --- Cleanup ---

  it('cleans up timers on unmount', () => {
    const { result, unmount } = renderHook(() =>
      useLoadingState({ delay: 500 })
    );

    act(() => {
      result.current.startLoading();
    });

    // Unmount before timers fire — should not throw
    expect(() => unmount()).not.toThrow();
  });
});
