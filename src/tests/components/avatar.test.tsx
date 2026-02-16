/**
 * Avatar Component Tests (G2+)
 *
 * Tests for Avatar, AvatarImage, and AvatarFallback.
 * Validates rendering, data-slot, composition, and className merge.
 *
 * @version 0.2.3
 */

import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { Avatar, AvatarImage, AvatarFallback } from '../../components/ui/avatar';

describe('Avatar', () => {
  // --- Rendering ---

  it('renders the root element', () => {
    const { container } = render(
      <Avatar>
        <AvatarFallback>JD</AvatarFallback>
      </Avatar>
    );
    const root = container.firstChild as HTMLElement;
    expect(root).toHaveAttribute('data-slot', 'avatar');
  });

  it('renders as a span', () => {
    const { container } = render(
      <Avatar>
        <AvatarFallback>JD</AvatarFallback>
      </Avatar>
    );
    const root = container.firstChild as HTMLElement;
    expect(root.tagName).toBe('SPAN');
  });

  // --- Fallback ---

  it('renders fallback text', () => {
    render(
      <Avatar>
        <AvatarFallback>AB</AvatarFallback>
      </Avatar>
    );
    expect(screen.getByText('AB')).toBeInTheDocument();
  });

  it('fallback has data-slot attribute', () => {
    render(
      <Avatar>
        <AvatarFallback data-testid="fallback">JD</AvatarFallback>
      </Avatar>
    );
    const fallback = screen.getByTestId('fallback');
    expect(fallback).toHaveAttribute('data-slot', 'avatar-fallback');
  });

  // --- Image ---

  it('renders AvatarImage with src', () => {
    // In jsdom, images never actually load, so Radix UI's AvatarImage
    // won't render the <img> element (it waits for onLoad).
    // Instead, we verify the component mounts without errors and
    // that the fallback is displayed as expected behavior in jsdom.
    const { container } = render(
      <Avatar>
        <AvatarImage src="https://example.com/photo.jpg" alt="User" />
        <AvatarFallback>JD</AvatarFallback>
      </Avatar>
    );
    // Avatar root should still render
    expect(container.firstChild).toHaveAttribute('data-slot', 'avatar');
    // Fallback shown because image can't load in jsdom
    expect(screen.getByText('JD')).toBeInTheDocument();
  });

  // --- Custom className ---

  it('merges custom className on Avatar', () => {
    const { container } = render(
      <Avatar className="size-16">
        <AvatarFallback>AB</AvatarFallback>
      </Avatar>
    );
    const root = container.firstChild as HTMLElement;
    expect(root.className).toContain('size-16');
    // Default class preserved
    expect(root.className).toContain('rounded-full');
  });

  it('merges custom className on AvatarFallback', () => {
    render(
      <Avatar>
        <AvatarFallback className="bg-primary" data-testid="fallback">
          AB
        </AvatarFallback>
      </Avatar>
    );
    const fallback = screen.getByTestId('fallback');
    expect(fallback.className).toContain('bg-primary');
  });

  // --- Composition ---

  it('supports multiple children composition', () => {
    render(
      <Avatar data-testid="avatar">
        <AvatarImage src="/photo.jpg" alt="User photo" />
        <AvatarFallback>UP</AvatarFallback>
      </Avatar>
    );
    const avatar = screen.getByTestId('avatar');
    expect(avatar.children.length).toBeGreaterThanOrEqual(1);
  });
});