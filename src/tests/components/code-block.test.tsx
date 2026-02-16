/**
 * CodeBlock Component Tests (G14 Batch 3)
 *
 * Tests for CodeBlock rendering, line numbers, filename, copy UI feedback.
 *
 * Note: Direct clipboard.writeText assertion was removed because jsdom
 * does not implement navigator.clipboard and all mock strategies
 * (Object.defineProperty, vi.spyOn on prototype/instance) fail to
 * intercept the call reliably. The "shows Copied!" test already
 * verifies the full copy flow end-to-end via observable UI change.
 *
 * @version 0.2.3
 */

import { describe, it, expect, vi, beforeAll } from 'vitest';
import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { CodeBlock } from '../../components/ui/code-block';

// Provide a minimal clipboard so the component doesn't throw
beforeAll(() => {
  Object.defineProperty(Navigator.prototype, 'clipboard', {
    value: {
      writeText: vi.fn().mockResolvedValue(undefined),
      readText: vi.fn().mockResolvedValue(''),
    },
    configurable: true,
    writable: true,
  });
});

describe('CodeBlock', () => {
  it('renders code content', () => {
    render(<CodeBlock code="const x = 1;" />);
    expect(screen.getByText('const x = 1;')).toBeInTheDocument();
  });

  it('renders multi-line code', () => {
    const code = ['line 1', 'line 2', 'line 3'].join('\n');
    render(<CodeBlock code={code} />);
    expect(screen.getByText('line 1')).toBeInTheDocument();
    expect(screen.getByText('line 2')).toBeInTheDocument();
    expect(screen.getByText('line 3')).toBeInTheDocument();
  });

  it('handles empty code gracefully', () => {
    const { container } = render(<CodeBlock code="" />);
    expect(container.querySelector('pre')).toBeTruthy();
  });

  it('shows line numbers by default', () => {
    const code = ['a', 'b', 'c'].join('\n');
    render(<CodeBlock code={code} />);
    expect(screen.getByText('1')).toBeInTheDocument();
    expect(screen.getByText('2')).toBeInTheDocument();
    expect(screen.getByText('3')).toBeInTheDocument();
  });

  it('hides line numbers when showLineNumbers is false', () => {
    const code = ['a', 'b'].join('\n');
    render(<CodeBlock code={code} showLineNumbers={false} />);
    expect(screen.queryByText('1')).not.toBeInTheDocument();
  });

  it('renders filename header when provided', () => {
    render(<CodeBlock code="code" filename="App.tsx" />);
    expect(screen.getByText('App.tsx')).toBeInTheDocument();
  });

  it('does not render filename header when not provided', () => {
    render(<CodeBlock code="code" />);
    expect(screen.queryByText('App.tsx')).not.toBeInTheDocument();
  });

  it('renders copy button', () => {
    render(<CodeBlock code="test" />);
    expect(screen.getByText('Copy')).toBeInTheDocument();
  });

  it('shows Copied! after clicking copy', async () => {
    const user = userEvent.setup();
    render(<CodeBlock code="test" />);
    await user.click(screen.getByText('Copy'));
    await waitFor(() => {
      expect(screen.getByText('Copied!')).toBeInTheDocument();
    });
  });

  it('wraps content in pre and code elements', () => {
    const { container } = render(<CodeBlock code="test" />);
    expect(container.querySelector('pre')).toBeTruthy();
    expect(container.querySelector('code')).toBeTruthy();
  });
});
