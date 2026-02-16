/**
 * Theme Utils Tests (G2+)
 *
 * Tests for theme utility functions: getThemeColor, getBrandColors,
 * getChartColors, getChartColorsMap, getUIColors, getLinkColors, getAllThemeColors.
 *
 * @version 0.2.3
 */

import { describe, it, expect, beforeEach, vi } from 'vitest';
import {
  getThemeColor,
  getBrandColors,
  getChartColors,
  getChartColorsMap,
  getUIColors,
  getLinkColors,
  getAllThemeColors,
} from '../../lib/theme-utils';

describe('theme-utils', () => {
  // Mock getComputedStyle for all tests
  let cssVars: Record<string, string>;

  beforeEach(() => {
    cssVars = {};
    vi.spyOn(window, 'getComputedStyle').mockReturnValue({
      getPropertyValue: (prop: string) => cssVars[prop] || '',
    } as CSSStyleDeclaration);
  });

  // --- getThemeColor ---

  describe('getThemeColor', () => {
    it('returns the CSS variable value', () => {
      cssVars['--primary'] = '#00c951';
      expect(getThemeColor('--primary')).toBe('#00c951');
    });

    it('returns fallback for empty value', () => {
      expect(getThemeColor('--nonexistent')).toBe('#000000');
    });

    it('returns hsl() wrapped value for HSL numbers', () => {
      cssVars['--primary'] = '76 96% 62%';
      expect(getThemeColor('--primary')).toBe('hsl(76 96% 62%)');
    });

    it('returns css function values as-is', () => {
      cssVars['--primary'] = 'hsl(76, 96%, 62%)';
      expect(getThemeColor('--primary')).toBe('hsl(76, 96%, 62%)');
    });

    it('returns rgb function values as-is', () => {
      cssVars['--primary'] = 'rgb(0, 201, 81)';
      expect(getThemeColor('--primary')).toBe('rgb(0, 201, 81)');
    });

    it('returns hex values as-is', () => {
      cssVars['--primary'] = '#ff0000';
      expect(getThemeColor('--primary')).toBe('#ff0000');
    });
  });

  // --- getBrandColors ---

  describe('getBrandColors', () => {
    it('returns all brand color keys', () => {
      const colors = getBrandColors();
      expect(colors).toHaveProperty('primary');
      expect(colors).toHaveProperty('secondary');
      expect(colors).toHaveProperty('destructive');
      expect(colors).toHaveProperty('warning');
      expect(colors).toHaveProperty('success');
      expect(colors).toHaveProperty('info');
      expect(colors).toHaveProperty('accent');
    });

    it('reads from CSS variables', () => {
      cssVars['--primary'] = '#00c951';
      cssVars['--secondary'] = '#1C2D3A';
      const colors = getBrandColors();
      expect(colors.primary).toBe('#00c951');
      expect(colors.secondary).toBe('#1C2D3A');
    });
  });

  // --- getChartColors ---

  describe('getChartColors', () => {
    it('returns an array of 5 colors', () => {
      const colors = getChartColors();
      expect(colors).toHaveLength(5);
    });

    it('reads chart CSS variables', () => {
      cssVars['--chart-1'] = '#aaa';
      cssVars['--chart-2'] = '#bbb';
      const colors = getChartColors();
      expect(colors[0]).toBe('#aaa');
      expect(colors[1]).toBe('#bbb');
    });
  });

  // --- getChartColorsMap ---

  describe('getChartColorsMap', () => {
    it('returns object with chart1-chart5 keys', () => {
      const map = getChartColorsMap();
      expect(map).toHaveProperty('chart1');
      expect(map).toHaveProperty('chart2');
      expect(map).toHaveProperty('chart3');
      expect(map).toHaveProperty('chart4');
      expect(map).toHaveProperty('chart5');
    });
  });

  // --- getUIColors ---

  describe('getUIColors', () => {
    it('returns all UI color keys', () => {
      const colors = getUIColors();
      expect(colors).toHaveProperty('foreground');
      expect(colors).toHaveProperty('background');
      expect(colors).toHaveProperty('muted');
      expect(colors).toHaveProperty('mutedForeground');
      expect(colors).toHaveProperty('border');
      expect(colors).toHaveProperty('input');
      expect(colors).toHaveProperty('ring');
    });
  });

  // --- getLinkColors ---

  describe('getLinkColors', () => {
    it('returns link color keys', () => {
      const colors = getLinkColors();
      expect(colors).toHaveProperty('link');
      expect(colors).toHaveProperty('linkHover');
      expect(colors).toHaveProperty('linkVisited');
    });
  });

  // --- getAllThemeColors ---

  describe('getAllThemeColors', () => {
    it('includes brand, chart, UI, and link colors', () => {
      const all = getAllThemeColors();
      // Brand
      expect(all).toHaveProperty('primary');
      // Chart
      expect(all).toHaveProperty('chart1');
      // UI
      expect(all).toHaveProperty('foreground');
      // Link
      expect(all).toHaveProperty('link');
      // Extra
      expect(all).toHaveProperty('focusRing');
      expect(all).toHaveProperty('selection');
    });
  });
});
