/**
 * useIsMobile Hook Tests (G14 Batch 3)
 *
 * Tests for the useIsMobile responsive hook.
 *
 * @version 0.2.3
 */

import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest';
import { renderHook, act } from '@testing-library/react';
import { useIsMobile } from '../../components/ui/use-mobile';

describe('useIsMobile', () => {
  let listeners: Array<(e: { matches: boolean }) => void> = [];
  let matchMediaMock: ReturnType<typeof vi.fn>;

  beforeEach(() => {
    listeners = [];
    matchMediaMock = vi.fn().mockImplementation((query: string) => ({
      matches: false,
      media: query,
      onchange: null,
      addEventListener: vi.fn((_, handler) => {
        listeners.push(handler);
      }),
      removeEventListener: vi.fn((_, handler) => {
        listeners = listeners.filter((l) => l !== handler);
      }),
      addListener: vi.fn(),
      removeListener: vi.fn(),
      dispatchEvent: vi.fn(),
    }));
    Object.defineProperty(window, 'matchMedia', {
      writable: true,
      value: matchMediaMock,
    });
  });

  afterEach(() => {
    vi.restoreAllMocks();
  });

  it('returns false for desktop width', () => {
    Object.defineProperty(window, 'innerWidth', {
      writable: true,
      value: 1024,
    });
    const { result } = renderHook(() => useIsMobile());
    expect(result.current).toBe(false);
  });

  it('returns true for mobile width', () => {
    Object.defineProperty(window, 'innerWidth', {
      writable: true,
      value: 500,
    });
    const { result } = renderHook(() => useIsMobile());
    expect(result.current).toBe(true);
  });

  it('returns false at exactly 768px (breakpoint)', () => {
    Object.defineProperty(window, 'innerWidth', {
      writable: true,
      value: 768,
    });
    const { result } = renderHook(() => useIsMobile());
    expect(result.current).toBe(false);
  });

  it('returns true at 767px', () => {
    Object.defineProperty(window, 'innerWidth', {
      writable: true,
      value: 767,
    });
    const { result } = renderHook(() => useIsMobile());
    expect(result.current).toBe(true);
  });

  it('calls matchMedia with correct query', () => {
    Object.defineProperty(window, 'innerWidth', {
      writable: true,
      value: 1024,
    });
    renderHook(() => useIsMobile());
    expect(matchMediaMock).toHaveBeenCalledWith('(max-width: 767px)');
  });

  it('responds to window resize via matchMedia listener', () => {
    Object.defineProperty(window, 'innerWidth', {
      writable: true,
      value: 1024,
    });
    const { result } = renderHook(() => useIsMobile());
    expect(result.current).toBe(false);

    // Simulate resize to mobile
    act(() => {
      Object.defineProperty(window, 'innerWidth', {
        writable: true,
        value: 500,
      });
      listeners.forEach((l) => l({ matches: true }));
    });
    expect(result.current).toBe(true);
  });
});
