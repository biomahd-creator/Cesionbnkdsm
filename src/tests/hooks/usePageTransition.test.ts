/**
 * usePageTransition Hook Tests (G14 Batch 2)
 *
 * Tests for usePageTransition, usePageEnter, useScrollToTop.
 * Requires TransitionProvider wrapper.
 *
 * @version 0.2.3
 */

import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest';
import { renderHook, act } from '@testing-library/react';
import { createElement, type ReactNode } from 'react';
import { TransitionProvider } from '../../components/providers/TransitionProvider';
import {
  usePageTransition,
  usePageEnter,
  useScrollToTop,
} from '../../hooks/usePageTransition';

// Wrapper that provides TransitionProvider
function wrapper({ children }: { children: ReactNode }) {
  return createElement(TransitionProvider, null, children);
}

describe('usePageTransition', () => {
  beforeEach(() => {
    vi.useFakeTimers();
  });

  afterEach(() => {
    vi.useRealTimers();
  });

  it('returns triggerPageChange and isTransitioning', () => {
    const { result } = renderHook(() => usePageTransition(), { wrapper });
    expect(result.current.triggerPageChange).toBeDefined();
    expect(typeof result.current.triggerPageChange).toBe('function');
    expect(result.current.isTransitioning).toBe(false);
  });

  it('starts transitioning on triggerPageChange', () => {
    const { result } = renderHook(() => usePageTransition(), { wrapper });

    act(() => {
      result.current.triggerPageChange('home', 'dashboard');
    });

    expect(result.current.isTransitioning).toBe(true);
  });

  it('stops transitioning after duration', () => {
    const { result } = renderHook(
      () => usePageTransition({ duration: 300 }),
      { wrapper }
    );

    act(() => {
      result.current.triggerPageChange('home', 'dashboard');
    });

    expect(result.current.isTransitioning).toBe(true);

    act(() => {
      vi.advanceTimersByTime(300);
    });

    expect(result.current.isTransitioning).toBe(false);
  });

  it('calls onTransitionStart callback', () => {
    const onStart = vi.fn();
    const { result } = renderHook(
      () => usePageTransition({ onTransitionStart: onStart }),
      { wrapper }
    );

    act(() => {
      result.current.triggerPageChange('a', 'b');
    });

    expect(onStart).toHaveBeenCalledTimes(1);
  });

  it('calls onTransitionEnd callback after duration', () => {
    const onEnd = vi.fn();
    const { result } = renderHook(
      () => usePageTransition({ onTransitionEnd: onEnd, duration: 200 }),
      { wrapper }
    );

    act(() => {
      result.current.triggerPageChange('a', 'b');
    });

    expect(onEnd).not.toHaveBeenCalled();

    act(() => {
      vi.advanceTimersByTime(200);
    });

    expect(onEnd).toHaveBeenCalledTimes(1);
  });

  it('accepts transition type and direction', () => {
    const { result } = renderHook(() => usePageTransition(), { wrapper });

    act(() => {
      result.current.triggerPageChange('a', 'b', 'slide', 'backward');
    });

    expect(result.current.isTransitioning).toBe(true);
  });

  it('uses default duration of 300ms', () => {
    const onEnd = vi.fn();
    const { result } = renderHook(
      () => usePageTransition({ onTransitionEnd: onEnd }),
      { wrapper }
    );

    act(() => {
      result.current.triggerPageChange('a', 'b');
    });

    act(() => {
      vi.advanceTimersByTime(299);
    });
    expect(onEnd).not.toHaveBeenCalled();

    act(() => {
      vi.advanceTimersByTime(1);
    });
    expect(onEnd).toHaveBeenCalledTimes(1);
  });
});

describe('usePageEnter', () => {
  it('calls callback on mount', () => {
    const callback = vi.fn();
    renderHook(() => usePageEnter(callback));
    expect(callback).toHaveBeenCalledTimes(1);
  });

  it('sets live region text for screen readers', () => {
    // Create a live region element
    const liveRegion = document.createElement('div');
    liveRegion.id = 'live-region-polite';
    document.body.appendChild(liveRegion);

    const callback = vi.fn();
    renderHook(() => usePageEnter(callback, 'Dashboard'));

    expect(liveRegion.textContent).toBe('Navigated to Dashboard');

    // Cleanup
    document.body.removeChild(liveRegion);
  });
});

describe('useScrollToTop', () => {
  it('calls window.scrollTo on mount', () => {
    const scrollToSpy = vi.spyOn(window, 'scrollTo').mockImplementation(() => {});
    renderHook(() => useScrollToTop());

    expect(scrollToSpy).toHaveBeenCalledWith({
      top: 0,
      left: 0,
      behavior: 'smooth',
    });

    scrollToSpy.mockRestore();
  });

  it('uses auto behavior when smooth=false', () => {
    const scrollToSpy = vi.spyOn(window, 'scrollTo').mockImplementation(() => {});
    renderHook(() => useScrollToTop(false));

    expect(scrollToSpy).toHaveBeenCalledWith({
      top: 0,
      left: 0,
      behavior: 'auto',
    });

    scrollToSpy.mockRestore();
  });
});
