/**
 * ComponentShowcase Component Tests (G14 Batch 6)
 *
 * @version 0.2.3
 */

import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { ComponentShowcase } from '../../components/ui/component-showcase';

describe('ComponentShowcase', () => {
  const baseProps = {
    title: 'Button',
    description: 'A clickable button component',
    preview: <button>Click me</button>,
    code: '<Button>Click me</Button>',
  };

  it('renders title', () => {
    render(<ComponentShowcase {...baseProps} />);
    expect(screen.getByText('Button')).toBeInTheDocument();
  });

  it('renders description', () => {
    render(<ComponentShowcase {...baseProps} />);
    expect(screen.getByText('A clickable button component')).toBeInTheDocument();
  });

  it('renders category badge when provided', () => {
    render(<ComponentShowcase {...baseProps} category="UI" />);
    expect(screen.getByText('UI')).toBeInTheDocument();
  });

  it('does not render category badge when not provided', () => {
    render(<ComponentShowcase {...baseProps} />);
    expect(screen.queryByText('UI')).not.toBeInTheDocument();
  });

  it('renders preview content', () => {
    render(<ComponentShowcase {...baseProps} />);
    expect(screen.getByText('Click me')).toBeInTheDocument();
  });

  it('renders Preview and Code tabs', () => {
    render(<ComponentShowcase {...baseProps} />);
    const tabs = screen.getAllByText('Preview');
    expect(tabs.length).toBeGreaterThanOrEqual(1);
    expect(screen.getByText('Code')).toBeInTheDocument();
  });

  it('renders separator', () => {
    const { container } = render(<ComponentShowcase {...baseProps} />);
    // Separator component uses data-slot="separator-root"
    const sep = container.querySelector('[data-slot="separator-root"]') ||
                container.querySelector('[role="separator"]');
    expect(sep).toBeTruthy();
  });
});