/**
 * Test Setup - Global Configuration (G2)
 *
 * This file runs before every test suite.
 * It configures Testing Library matchers and any global mocks.
 *
 * @version 0.1.0
 */

import '@testing-library/jest-dom';

// Mock window.matchMedia for components that use media queries
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

// Mock ResizeObserver for components that observe size changes
class ResizeObserverMock {
  observe() {}
  unobserve() {}
  disconnect() {}
}

Object.defineProperty(window, 'ResizeObserver', {
  writable: true,
  value: ResizeObserverMock,
});

// Mock IntersectionObserver for infinite scroll / lazy loading
class IntersectionObserverMock {
  observe() {}
  unobserve() {}
  disconnect() {}
}

Object.defineProperty(window, 'IntersectionObserver', {
  writable: true,
  value: IntersectionObserverMock,
});

// Mock scrollIntoView for components that use cmdk, Radix portals, etc.
// jsdom doesn't implement scrollIntoView natively.
if (!Element.prototype.scrollIntoView) {
  Element.prototype.scrollIntoView = () => {};
}

// Mock scrollTo for window (used by some scroll-based components)
if (!window.scrollTo) {
  window.scrollTo = () => {};
}

// Mock document.execCommand for RichTextEditor and other contentEditable components.
// jsdom doesn't implement execCommand natively.
if (typeof document.execCommand !== 'function') {
  document.execCommand = () => true;
}