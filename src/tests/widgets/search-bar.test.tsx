/**
 * SearchBar Widget Tests (G14 Batch 3)
 *
 * Tests for SearchBar rendering and placeholder behavior.
 *
 * @version 0.2.3
 */

import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { SearchBar } from '../../components/widgets/SearchBar';

describe('SearchBar', () => {
  // --- Rendering ---

  it('renders input with default placeholder', () => {
    render(<SearchBar />);
    expect(screen.getByPlaceholderText('Search...')).toBeInTheDocument();
  });

  it('renders input with custom placeholder', () => {
    render(<SearchBar placeholder="Find invoices..." />);
    expect(screen.getByPlaceholderText('Find invoices...')).toBeInTheDocument();
  });

  it('renders search button', () => {
    render(<SearchBar />);
    const button = screen.getByRole('button');
    expect(button).toBeInTheDocument();
  });

  it('renders search icon inside button', () => {
    const { container } = render(<SearchBar />);
    const svg = container.querySelector('button svg');
    expect(svg).toBeTruthy();
  });

  // --- Input behavior ---

  it('allows typing in the search input', async () => {
    const user = userEvent.setup();
    render(<SearchBar />);
    const input = screen.getByPlaceholderText('Search...');
    await user.type(input, 'test query');
    expect(input).toHaveValue('test query');
  });

  it('has search type on input', () => {
    render(<SearchBar />);
    const input = screen.getByPlaceholderText('Search...');
    expect(input).toHaveAttribute('type', 'search');
  });

  // --- Layout ---

  it('renders input and button in a flex container', () => {
    const { container } = render(<SearchBar />);
    const wrapper = container.firstChild as HTMLElement;
    expect(wrapper.className).toContain('flex');
  });

  // --- Input has flex-1 class ---

  it('renders input with flex-1 for expansion', () => {
    const { container } = render(<SearchBar />);
    const input = container.querySelector('input');
    expect(input?.className).toContain('flex-1');
  });

  // --- Button is icon-only ---

  it('renders search button as icon size', () => {
    render(<SearchBar />);
    const button = screen.getByRole('button');
    // Icon button should not have visible text
    expect(button.textContent?.trim()).toBe('');
  });

  // --- Clear input ---

  it('clears the search input', async () => {
    const user = userEvent.setup();
    render(<SearchBar />);
    const input = screen.getByPlaceholderText('Search...');
    await user.type(input, 'hello');
    expect(input).toHaveValue('hello');
    await user.clear(input);
    expect(input).toHaveValue('');
  });

  // --- Button clickable ---

  it('search button is clickable without error', async () => {
    const user = userEvent.setup();
    render(<SearchBar />);
    const button = screen.getByRole('button');
    await user.click(button);
    expect(button).toBeInTheDocument();
  });

  // --- Gap between elements ---

  it('has gap class on wrapper', () => {
    const { container } = render(<SearchBar />);
    const wrapper = container.firstChild as HTMLElement;
    expect(wrapper.className).toContain('gap-2');
  });
});
