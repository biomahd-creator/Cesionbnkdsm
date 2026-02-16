/**
 * ThemeProvider Tests (G2)
 *
 * Tests for the core ThemeProvider and useTheme hook.
 * Validates theme toggling, config management, and error boundaries.
 *
 * @version 0.1.0
 */

import { describe, it, expect, beforeEach, vi } from 'vitest';
import { render, screen, act } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { ThemeProvider, useTheme } from '../../components/providers/ThemeProvider';

// Helper component to test useTheme hook
function ThemeConsumer() {
  const { theme, toggleTheme, config, updateConfig, resetToDefaults, exportConfig, importConfig } = useTheme();

  return (
    <div>
      <span data-testid="current-theme">{theme}</span>
      <span data-testid="primary-color">{config.primary}</span>
      <span data-testid="radius">{config.radius}</span>
      <span data-testid="logo-url">{config.logoUrl || 'none'}</span>
      <button onClick={toggleTheme}>Toggle Theme</button>
      <button onClick={resetToDefaults}>Reset</button>
      <button onClick={() => updateConfig({ primary: '#ff0000' })}>Update Primary</button>
      <button onClick={() => importConfig('{"primary":"#abcdef"}')}>Import Valid</button>
      <button onClick={() => importConfig('not-json')}>Import Invalid</button>
      <button onClick={() => {
        const json = exportConfig();
        document.title = json; // Quick way to expose export result
      }}>Export</button>
    </div>
  );
}

describe('ThemeProvider', () => {
  beforeEach(() => {
    // Clear localStorage before each test
    localStorage.clear();
    // Remove dark class
    document.documentElement.classList.remove('dark');
    // Clear inline styles
    document.documentElement.removeAttribute('style');
  });

  it('provides default light theme', () => {
    render(
      <ThemeProvider>
        <ThemeConsumer />
      </ThemeProvider>
    );

    expect(screen.getByTestId('current-theme').textContent).toBe('light');
  });

  it('provides default CESIONBNK primary color', () => {
    render(
      <ThemeProvider>
        <ThemeConsumer />
      </ThemeProvider>
    );

    expect(screen.getByTestId('primary-color').textContent).toBe('#00c951');
  });

  it('toggles between light and dark', async () => {
    const user = userEvent.setup();

    render(
      <ThemeProvider>
        <ThemeConsumer />
      </ThemeProvider>
    );

    expect(screen.getByTestId('current-theme').textContent).toBe('light');

    await user.click(screen.getByText('Toggle Theme'));
    expect(screen.getByTestId('current-theme').textContent).toBe('dark');

    await user.click(screen.getByText('Toggle Theme'));
    expect(screen.getByTestId('current-theme').textContent).toBe('light');
  });

  it('persists theme to localStorage', async () => {
    const user = userEvent.setup();

    render(
      <ThemeProvider>
        <ThemeConsumer />
      </ThemeProvider>
    );

    await user.click(screen.getByText('Toggle Theme'));
    expect(localStorage.getItem('theme')).toBe('dark');
  });

  it('restores theme from localStorage', () => {
    localStorage.setItem('theme', 'dark');

    render(
      <ThemeProvider>
        <ThemeConsumer />
      </ThemeProvider>
    );

    expect(screen.getByTestId('current-theme').textContent).toBe('dark');
  });

  it('exports config as JSON', async () => {
    const user = userEvent.setup();

    render(
      <ThemeProvider>
        <ThemeConsumer />
      </ThemeProvider>
    );

    await user.click(screen.getByText('Export'));
    const exported = JSON.parse(document.title);
    expect(exported.primary).toBe('#00c951');
    expect(exported.radius).toBe('0.625rem');
  });

  it('resets config to defaults', async () => {
    const user = userEvent.setup();

    // Pre-set a modified config
    localStorage.setItem('theme-config', JSON.stringify({
      primary: '#ff0000',
      primaryForeground: '#ffffff',
      secondary: '#1C2D3A',
      secondaryForeground: '#ffffff',
      chart1: '#FF6B6B',
      chart2: '#4ECDC4',
      chart3: '#45B7D1',
      chart4: '#FFA07A',
      chart5: '#98D8C8',
      destructive: '#ef4444',
      accent: '#f4f4f5',
      muted: '#f4f4f5',
      link: '#0E7490',
      linkHover: '#00c951',
      linkVisited: '#164E63',
      success: '#22C55E',
      warning: '#F59E0B',
      info: '#06B6D4',
      focusRing: '#00c951',
      selection: '#00c951',
      inputBackgroundLight: '#ffffff',
      inputBackgroundDark: '#334155',
      inputBorderLight: '#e4e4e7',
      inputBorderDark: '#334155',
      inputBorderWidth: '1px',
      radius: '0.625rem',
      fontSize: '16px',
      fontWeightLight: '300',
      fontWeightNormal: '400',
      fontWeightMedium: '500',
      fontWeightSemibold: '600',
      fontWeightBold: '700',
      logoUrl: '',
    }));

    render(
      <ThemeProvider>
        <ThemeConsumer />
      </ThemeProvider>
    );

    // Color should be the modified one
    expect(screen.getByTestId('primary-color').textContent).toBe('#ff0000');

    await user.click(screen.getByText('Reset'));
    expect(screen.getByTestId('primary-color').textContent).toBe('#00c951');
  });

  it('updateConfig updates a single property', async () => {
    const user = userEvent.setup();

    render(
      <ThemeProvider>
        <ThemeConsumer />
      </ThemeProvider>
    );

    expect(screen.getByTestId('primary-color').textContent).toBe('#00c951');
    await user.click(screen.getByText('Update Primary'));
    expect(screen.getByTestId('primary-color').textContent).toBe('#ff0000');
  });

  it('importConfig updates config from valid JSON', async () => {
    const user = userEvent.setup();

    render(
      <ThemeProvider>
        <ThemeConsumer />
      </ThemeProvider>
    );

    await user.click(screen.getByText('Import Valid'));
    expect(screen.getByTestId('primary-color').textContent).toBe('#abcdef');
  });

  it('importConfig handles invalid JSON gracefully', async () => {
    const user = userEvent.setup();
    const consoleSpy = vi.spyOn(console, 'error').mockImplementation(() => {});

    render(
      <ThemeProvider>
        <ThemeConsumer />
      </ThemeProvider>
    );

    await user.click(screen.getByText('Import Invalid'));
    // Should not crash, primary should remain the default
    expect(screen.getByTestId('primary-color').textContent).toBe('#00c951');
    expect(consoleSpy).toHaveBeenCalledWith('Invalid JSON configuration', expect.any(Error));
    consoleSpy.mockRestore();
  });

  it('adds dark class to documentElement in dark mode', async () => {
    const user = userEvent.setup();

    render(
      <ThemeProvider>
        <ThemeConsumer />
      </ThemeProvider>
    );

    await user.click(screen.getByText('Toggle Theme'));
    expect(document.documentElement.classList.contains('dark')).toBe(true);
  });

  it('removes dark class from documentElement in light mode', async () => {
    const user = userEvent.setup();
    localStorage.setItem('theme', 'dark');

    render(
      <ThemeProvider>
        <ThemeConsumer />
      </ThemeProvider>
    );

    expect(document.documentElement.classList.contains('dark')).toBe(true);
    await user.click(screen.getByText('Toggle Theme'));
    expect(document.documentElement.classList.contains('dark')).toBe(false);
  });
});

describe('useTheme outside provider', () => {
  it('throws error when used outside ThemeProvider', () => {
    // Suppress console.error for this test
    const originalError = console.error;
    console.error = () => {};

    expect(() => {
      render(<ThemeConsumer />);
    }).toThrow('useTheme must be used within ThemeProvider');

    console.error = originalError;
  });
});