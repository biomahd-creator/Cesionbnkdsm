/**
 * Utility Functions Tests (G2)
 *
 * Tests for the `cn` class merging utility.
 *
 * @version 0.1.1
 */

import { describe, it, expect } from 'vitest';
import { cn } from '../../components/ui/utils';

describe('cn (class name merger)', () => {
  it('merges multiple class strings', () => {
    const result = cn('px-4', 'py-2');
    expect(result).toContain('px-4');
    expect(result).toContain('py-2');
  });

  it('handles undefined and null values', () => {
    const result = cn('px-4', undefined, null, 'py-2');
    expect(result).toContain('px-4');
    expect(result).toContain('py-2');
  });

  it('handles empty string', () => {
    const result = cn('', 'px-4');
    expect(result).toContain('px-4');
  });

  it('handles boolean conditions', () => {
    const isActive = true;
    const result = cn('base', isActive && 'active');
    expect(result).toContain('base');
    expect(result).toContain('active');
  });

  it('handles false boolean conditions', () => {
    const isActive = false;
    const result = cn('base', isActive && 'active');
    expect(result).toContain('base');
    expect(result).not.toContain('active');
  });

  it('merges Tailwind conflicting classes (last wins)', () => {
    const result = cn('px-4', 'px-8');
    expect(result).toContain('px-8');
    expect(result).not.toContain('px-4');
  });

  it('does not merge non-conflicting classes', () => {
    const result = cn('px-4', 'py-2', 'mx-auto');
    expect(result).toContain('px-4');
    expect(result).toContain('py-2');
    expect(result).toContain('mx-auto');
  });

  it('handles array inputs', () => {
    const result = cn(['px-4', 'py-2']);
    expect(result).toContain('px-4');
    expect(result).toContain('py-2');
  });

  it('returns empty string for no arguments', () => {
    const result = cn();
    expect(result).toBe('');
  });

  it('handles object syntax', () => {
    const result = cn({ 'bg-primary': true, 'text-white': false });
    expect(result).toContain('bg-primary');
    expect(result).not.toContain('text-white');
  });
});
