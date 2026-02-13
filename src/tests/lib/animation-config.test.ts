/**
 * Animation Config Tests (G2)
 *
 * Tests for the centralized animation configuration module.
 * Validates exported constants, utility functions, and reduced motion support.
 *
 * @version 0.1.1
 */

import { describe, it, expect, vi, beforeEach } from 'vitest';
import {
  ANIMATION_DURATION,
  EASING,
  LOADING_DELAYS,
  fadeVariants,
  fadeScaleVariants,
  pageTransitionVariants,
  staggerContainerVariants,
  staggerItemVariants,
  transitionConfig,
  shouldReduceMotion,
  getTransition,
  getVariants,
} from '../../lib/animation-config';

describe('ANIMATION_DURATION', () => {
  it('has all expected duration keys', () => {
    expect(ANIMATION_DURATION.instant).toBe(0);
    expect(ANIMATION_DURATION.fast).toBe(0.15);
    expect(ANIMATION_DURATION.normal).toBe(0.3);
    expect(ANIMATION_DURATION.slow).toBe(0.5);
    expect(ANIMATION_DURATION.slower).toBe(0.8);
  });

  it('durations are in ascending order', () => {
    expect(ANIMATION_DURATION.instant).toBeLessThan(ANIMATION_DURATION.fast);
    expect(ANIMATION_DURATION.fast).toBeLessThan(ANIMATION_DURATION.normal);
    expect(ANIMATION_DURATION.normal).toBeLessThan(ANIMATION_DURATION.slow);
    expect(ANIMATION_DURATION.slow).toBeLessThan(ANIMATION_DURATION.slower);
  });
});

describe('EASING', () => {
  it('has standard easing curves', () => {
    expect(EASING.linear).toEqual([0, 0, 1, 1]);
    expect(EASING.easeIn).toBeDefined();
    expect(EASING.easeOut).toBeDefined();
    expect(EASING.easeInOut).toBeDefined();
  });

  it('has custom easing curves', () => {
    expect(EASING.smooth).toBeDefined();
    expect(EASING.snappy).toBeDefined();
    expect(EASING.bounce).toBeDefined();
  });

  it('all easing curves are arrays of 4 numbers', () => {
    Object.values(EASING).forEach((curve) => {
      expect(Array.isArray(curve)).toBe(true);
      expect(curve).toHaveLength(4);
      curve.forEach((v) => expect(typeof v).toBe('number'));
    });
  });
});

describe('LOADING_DELAYS', () => {
  it('has all expected delay keys', () => {
    expect(LOADING_DELAYS.immediate).toBe(0);
    expect(LOADING_DELAYS.short).toBe(300);
    expect(LOADING_DELAYS.normal).toBe(500);
    expect(LOADING_DELAYS.long).toBe(1000);
  });
});

describe('Motion Variants', () => {
  it('fadeVariants has initial, animate, exit', () => {
    expect(fadeVariants.initial).toEqual({ opacity: 0 });
    expect(fadeVariants.animate).toEqual({ opacity: 1 });
    expect(fadeVariants.exit).toEqual({ opacity: 0 });
  });

  it('fadeScaleVariants includes scale', () => {
    expect(fadeScaleVariants.initial).toHaveProperty('scale', 0.95);
    expect(fadeScaleVariants.animate).toHaveProperty('scale', 1);
  });

  it('pageTransitionVariants has y offset', () => {
    expect(pageTransitionVariants.initial).toHaveProperty('y', 20);
    expect(pageTransitionVariants.animate).toHaveProperty('y', 0);
    expect(pageTransitionVariants.exit).toHaveProperty('y', -20);
  });

  it('staggerContainerVariants has staggerChildren', () => {
    expect(staggerContainerVariants.animate.transition.staggerChildren).toBe(0.05);
  });

  it('staggerItemVariants has initial and animate', () => {
    expect(staggerItemVariants.initial).toHaveProperty('opacity', 0);
    expect(staggerItemVariants.animate).toHaveProperty('opacity', 1);
  });
});

describe('transitionConfig', () => {
  it('has fast, normal, slow, spring, bounce configs', () => {
    expect(transitionConfig.fast).toBeDefined();
    expect(transitionConfig.normal).toBeDefined();
    expect(transitionConfig.slow).toBeDefined();
    expect(transitionConfig.spring).toBeDefined();
    expect(transitionConfig.bounce).toBeDefined();
  });

  it('spring config uses spring type', () => {
    expect(transitionConfig.spring.type).toBe('spring');
  });

  it('bounce config uses spring type', () => {
    expect(transitionConfig.bounce.type).toBe('spring');
  });
});

describe('shouldReduceMotion', () => {
  beforeEach(() => {
    // Reset matchMedia mock to default (no reduced motion)
    Object.defineProperty(window, 'matchMedia', {
      writable: true,
      value: (query: string) => ({
        matches: false,
        media: query,
        onchange: null,
        addListener: () => {},
        removeListener: () => {},
        addEventListener: () => {},
        removeEventListener: () => {},
        dispatchEvent: () => false,
      }),
    });
  });

  it('returns false when no reduced motion preference', () => {
    expect(shouldReduceMotion()).toBe(false);
  });

  it('returns true when reduced motion is preferred', () => {
    Object.defineProperty(window, 'matchMedia', {
      writable: true,
      value: (query: string) => ({
        matches: query === '(prefers-reduced-motion: reduce)',
        media: query,
        onchange: null,
        addListener: () => {},
        removeListener: () => {},
        addEventListener: () => {},
        removeEventListener: () => {},
        dispatchEvent: () => false,
      }),
    });

    expect(shouldReduceMotion()).toBe(true);
  });
});

describe('getTransition', () => {
  beforeEach(() => {
    Object.defineProperty(window, 'matchMedia', {
      writable: true,
      value: (query: string) => ({
        matches: false,
        media: query,
        onchange: null,
        addListener: () => {},
        removeListener: () => {},
        addEventListener: () => {},
        removeEventListener: () => {},
        dispatchEvent: () => false,
      }),
    });
  });

  it('returns full transition when motion is not reduced', () => {
    const transition = getTransition('normal');
    expect(transition).toEqual(transitionConfig.normal);
  });

  it('returns near-instant transition when motion is reduced', () => {
    Object.defineProperty(window, 'matchMedia', {
      writable: true,
      value: (query: string) => ({
        matches: query === '(prefers-reduced-motion: reduce)',
        media: query,
        onchange: null,
        addListener: () => {},
        removeListener: () => {},
        addEventListener: () => {},
        removeEventListener: () => {},
        dispatchEvent: () => false,
      }),
    });

    const transition = getTransition('normal');
    expect(transition).toEqual({ duration: 0.01 });
  });
});

describe('getVariants', () => {
  beforeEach(() => {
    Object.defineProperty(window, 'matchMedia', {
      writable: true,
      value: (query: string) => ({
        matches: false,
        media: query,
        onchange: null,
        addListener: () => {},
        removeListener: () => {},
        addEventListener: () => {},
        removeEventListener: () => {},
        dispatchEvent: () => false,
      }),
    });
  });

  it('returns original variants when motion is not reduced', () => {
    const variants = getVariants(fadeVariants);
    expect(variants).toEqual(fadeVariants);
  });

  it('returns static variants when motion is reduced', () => {
    Object.defineProperty(window, 'matchMedia', {
      writable: true,
      value: (query: string) => ({
        matches: query === '(prefers-reduced-motion: reduce)',
        media: query,
        onchange: null,
        addListener: () => {},
        removeListener: () => {},
        addEventListener: () => {},
        removeEventListener: () => {},
        dispatchEvent: () => false,
      }),
    });

    const variants = getVariants(fadeVariants);
    // All states should be the animate state (final state)
    expect(variants.initial).toEqual(fadeVariants.animate);
    expect(variants.animate).toEqual(fadeVariants.animate);
    expect(variants.exit).toEqual(fadeVariants.animate);
  });
});
