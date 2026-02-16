/**
 * HelpCenter Tests (G14 Batch 7)
 *
 * Tests for HelpCenter Sheet with FAQ, Guides, and Videos tabs.
 * Sheet content is rendered via Radix portal.
 *
 * @version 0.2.3
 */

import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { HelpCenter } from '../../components/help/HelpCenter';

describe('HelpCenter', () => {
  // --- Trigger ---

  it('renders header trigger with Help text', () => {
    render(<HelpCenter />);
    expect(screen.getByText('Help')).toBeInTheDocument();
  });

  it('renders sidebar trigger with Help Center text', () => {
    render(<HelpCenter variant="sidebar" />);
    expect(screen.getByText('Help Center')).toBeInTheDocument();
  });

  // --- Sheet content ---

  it('opens sheet on trigger click', async () => {
    const user = userEvent.setup();
    render(<HelpCenter />);
    await user.click(screen.getByText('Help'));
    // Sheet title
    expect(screen.getByText('Help Center')).toBeInTheDocument();
    // Search placeholder
    expect(screen.getByPlaceholderText('Search for help...')).toBeInTheDocument();
  });

  it('renders FAQs tab by default', async () => {
    const user = userEvent.setup();
    render(<HelpCenter />);
    await user.click(screen.getByText('Help'));
    expect(screen.getByText('FAQs')).toBeInTheDocument();
    expect(screen.getByText('Getting Started')).toBeInTheDocument();
  });

  it('renders FAQ categories', async () => {
    const user = userEvent.setup();
    render(<HelpCenter />);
    await user.click(screen.getByText('Help'));
    expect(screen.getByText('Getting Started')).toBeInTheDocument();
    expect(screen.getByText('Factoring Operations')).toBeInTheDocument();
    expect(screen.getByText('Account & Security')).toBeInTheDocument();
  });

  it('renders FAQ questions', async () => {
    const user = userEvent.setup();
    render(<HelpCenter />);
    await user.click(screen.getByText('Help'));
    expect(screen.getByText('How do I register my company for factoring?')).toBeInTheDocument();
    expect(screen.getByText('What documents are required for registration?')).toBeInTheDocument();
  });

  it('renders Guides tab', async () => {
    const user = userEvent.setup();
    render(<HelpCenter />);
    await user.click(screen.getByText('Help'));
    expect(screen.getByText('Guides')).toBeInTheDocument();
  });

  it('renders Videos tab', async () => {
    const user = userEvent.setup();
    render(<HelpCenter />);
    await user.click(screen.getByText('Help'));
    expect(screen.getByText('Videos')).toBeInTheDocument();
  });

  it('renders contact support section', async () => {
    const user = userEvent.setup();
    render(<HelpCenter />);
    await user.click(screen.getByText('Help'));
    expect(screen.getByText('Still need help?')).toBeInTheDocument();
    expect(screen.getByText('Contact Support')).toBeInTheDocument();
    expect(screen.getByText('Email Us')).toBeInTheDocument();
  });

  // --- Search ---

  it('has search input', async () => {
    const user = userEvent.setup();
    render(<HelpCenter />);
    await user.click(screen.getByText('Help'));
    const searchInput = screen.getByPlaceholderText('Search for help...');
    expect(searchInput).toBeInTheDocument();
  });

  it('filters FAQs when searching', async () => {
    const user = userEvent.setup();
    render(<HelpCenter />);
    await user.click(screen.getByText('Help'));
    const searchInput = screen.getByPlaceholderText('Search for help...');
    await user.type(searchInput, 'documents');
    // Should find the documents question
    expect(screen.getByText('What documents are required for registration?')).toBeInTheDocument();
    // Should NOT show unrelated questions
    expect(screen.queryByText('Is my data secure?')).not.toBeInTheDocument();
  });

  it('shows no results message for unmatched search', async () => {
    const user = userEvent.setup();
    render(<HelpCenter />);
    await user.click(screen.getByText('Help'));
    const searchInput = screen.getByPlaceholderText('Search for help...');
    await user.type(searchInput, 'xyznonexistent');
    expect(screen.getByText(/No results found for/)).toBeInTheDocument();
  });

  // --- Tab switching ---

  it('switches to Guides tab on click', async () => {
    const user = userEvent.setup();
    render(<HelpCenter />);
    await user.click(screen.getByText('Help'));
    await user.click(screen.getByText('Guides'));
    // Guides tab content should appear
    expect(screen.getByText('Quick Start Guide')).toBeInTheDocument();
  });

  it('switches to Videos tab on click', async () => {
    const user = userEvent.setup();
    render(<HelpCenter />);
    await user.click(screen.getByText('Help'));
    await user.click(screen.getByText('Videos'));
    // Videos tab content should appear
    expect(screen.getByText('Platform Overview')).toBeInTheDocument();
  });

  it('switches back to FAQs tab', async () => {
    const user = userEvent.setup();
    render(<HelpCenter />);
    await user.click(screen.getByText('Help'));
    await user.click(screen.getByText('Guides'));
    await user.click(screen.getByText('FAQs'));
    expect(screen.getByText('Getting Started')).toBeInTheDocument();
  });

  // --- FAQ accordion expand ---

  it('expands FAQ question to show answer', async () => {
    const user = userEvent.setup();
    render(<HelpCenter />);
    await user.click(screen.getByText('Help'));
    // Click on a FAQ question
    await user.click(screen.getByText('How do I register my company for factoring?'));
    // Answer should be visible
    expect(screen.getByText(/navigate to the 'Onboarding' section/)).toBeInTheDocument();
  });

  // --- Sidebar variant ---

  it('sidebar variant opens sheet on click', async () => {
    const user = userEvent.setup();
    render(<HelpCenter variant="sidebar" />);
    await user.click(screen.getByText('Help Center'));
    expect(screen.getByPlaceholderText('Search for help...')).toBeInTheDocument();
  });
});