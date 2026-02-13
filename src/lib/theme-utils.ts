/**
 * THEME UTILITIES - Global Dynamic Color System
 * 
 * This file contains centralized utilities for obtaining colors
 * from the Theme Customizer. All components should import these
 * functions instead of creating their own implementations.
 * 
 * USAGE:
 * import { getThemeColor, getChartColors } from '@/lib/theme-utils';
 * 
 * const primaryColor = getThemeColor('--primary');
 * const chartColors = getChartColors();
 */

/**
 * Gets the value of a CSS variable from the current theme
 * @param variable - CSS variable name (e.g.: '--primary', '--chart-1')
 * @returns String with the value in the correct format (hsl, hex, rgb)
 */
export function getThemeColor(variable: string): string {
  if (typeof window === 'undefined') {
    return '#000000'; // SSR fallback
  }

  const value = getComputedStyle(document.documentElement)
    .getPropertyValue(variable)
    .trim();

  // If no value, return fallback
  if (!value) return '#000000';

  // If already in CSS function format (hsl, rgb, etc), return as-is
  if (value.includes('(')) return value;

  // If numeric HSL values (e.g.: "76 96% 62%"), wrap in hsl()
  if (value.includes('%') || value.match(/^\d+\s+\d+%\s+\d+%/)) {
    return `hsl(${value})`;
  }

  // If hex or any other format, return as-is
  return value;
}

/**
 * Gets all main brand colors from the theme
 * @returns Object with the theme's main colors
 */
export function getBrandColors() {
  return {
    primary: getThemeColor('--primary'),
    secondary: getThemeColor('--secondary'),
    destructive: getThemeColor('--destructive'),
    warning: getThemeColor('--warning'),
    success: getThemeColor('--success'),
    info: getThemeColor('--info'),
    accent: getThemeColor('--accent'),
  };
}

/**
 * Gets all chart colors (Recharts)
 * @returns Array with the 5 chart colors
 */
export function getChartColors(): string[] {
  return [
    getThemeColor('--chart-1'),
    getThemeColor('--chart-2'),
    getThemeColor('--chart-3'),
    getThemeColor('--chart-4'),
    getThemeColor('--chart-5'),
  ];
}

/**
 * Gets an indexed object with all chart colors
 * @returns Object with chart1-chart5
 */
export function getChartColorsMap() {
  return {
    chart1: getThemeColor('--chart-1'),
    chart2: getThemeColor('--chart-2'),
    chart3: getThemeColor('--chart-3'),
    chart4: getThemeColor('--chart-4'),
    chart5: getThemeColor('--chart-5'),
  };
}

/**
 * Gets UI colors (text, borders, backgrounds)
 * @returns Object with common UI colors
 */
export function getUIColors() {
  return {
    foreground: getThemeColor('--foreground'),
    background: getThemeColor('--background'),
    muted: getThemeColor('--muted'),
    mutedForeground: getThemeColor('--muted-foreground'),
    border: getThemeColor('--border'),
    input: getThemeColor('--input'),
    ring: getThemeColor('--ring'),
  };
}

/**
 * Gets link and navigation colors
 * @returns Object with link colors
 */
export function getLinkColors() {
  return {
    link: getThemeColor('--link-color'),
    linkHover: getThemeColor('--link-hover'),
    linkVisited: getThemeColor('--link-visited'),
  };
}

/**
 * Gets all theme colors in a single object.
 * Useful for passing all colors at once to a component.
 * @returns Complete object with all theme colors
 */
export function getAllThemeColors() {
  return {
    ...getBrandColors(),
    ...getChartColorsMap(),
    ...getUIColors(),
    ...getLinkColors(),
    focusRing: getThemeColor('--focus-ring'),
    selection: getThemeColor('--selection'),
  };
}

/**
 * Custom hook for using theme colors in React components.
 * Useful if you need the component to re-render when the theme changes.
 */
export function useThemeColors() {
  // For now returns colors directly
  // In the future this can be extended with a change listener
  return getAllThemeColors();
}
