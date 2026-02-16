/**
 * Resizable Component Tests (G14 Batch 5)
 *
 * Tests for ResizablePanelGroup, ResizablePanel, ResizableHandle.
 * react-resizable-panels needs layout geometry in jsdom, so
 * we test basic rendering and data-slot attributes.
 *
 * @version 0.2.3
 */

import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import {
  ResizablePanelGroup,
  ResizablePanel,
  ResizableHandle,
} from '../../components/ui/resizable';

describe('Resizable', () => {
  it('renders panel group with data-slot', () => {
    const { container } = render(
      <ResizablePanelGroup direction="horizontal">
        <ResizablePanel>Panel 1</ResizablePanel>
        <ResizableHandle />
        <ResizablePanel>Panel 2</ResizablePanel>
      </ResizablePanelGroup>
    );
    expect(container.querySelector('[data-slot="resizable-panel-group"]')).toBeTruthy();
  });

  it('renders panels with content', () => {
    render(
      <ResizablePanelGroup direction="horizontal">
        <ResizablePanel>Left side</ResizablePanel>
        <ResizableHandle />
        <ResizablePanel>Right side</ResizablePanel>
      </ResizablePanelGroup>
    );
    expect(screen.getByText('Left side')).toBeInTheDocument();
    expect(screen.getByText('Right side')).toBeInTheDocument();
  });

  it('renders handle with data-slot', () => {
    const { container } = render(
      <ResizablePanelGroup direction="horizontal">
        <ResizablePanel>A</ResizablePanel>
        <ResizableHandle />
        <ResizablePanel>B</ResizablePanel>
      </ResizablePanelGroup>
    );
    expect(container.querySelector('[data-slot="resizable-handle"]')).toBeTruthy();
  });

  it('renders handle with grip icon when withHandle', () => {
    const { container } = render(
      <ResizablePanelGroup direction="horizontal">
        <ResizablePanel>A</ResizablePanel>
        <ResizableHandle withHandle />
        <ResizablePanel>B</ResizablePanel>
      </ResizablePanelGroup>
    );
    const handle = container.querySelector('[data-slot="resizable-handle"]');
    const svg = handle?.querySelector('svg');
    expect(svg).toBeTruthy();
  });

  it('does not render grip icon without withHandle', () => {
    const { container } = render(
      <ResizablePanelGroup direction="horizontal">
        <ResizablePanel>A</ResizablePanel>
        <ResizableHandle />
        <ResizablePanel>B</ResizablePanel>
      </ResizablePanelGroup>
    );
    const handle = container.querySelector('[data-slot="resizable-handle"]');
    const svg = handle?.querySelector('svg');
    expect(svg).toBeNull();
  });

  it('renders vertical layout', () => {
    const { container } = render(
      <ResizablePanelGroup direction="vertical">
        <ResizablePanel>Top</ResizablePanel>
        <ResizableHandle />
        <ResizablePanel>Bottom</ResizablePanel>
      </ResizablePanelGroup>
    );
    expect(screen.getByText('Top')).toBeInTheDocument();
    expect(screen.getByText('Bottom')).toBeInTheDocument();
  });

  it('merges custom className on panel group', () => {
    const { container } = render(
      <ResizablePanelGroup direction="horizontal" className="min-h-[200px]">
        <ResizablePanel>A</ResizablePanel>
        <ResizableHandle />
        <ResizablePanel>B</ResizablePanel>
      </ResizablePanelGroup>
    );
    const group = container.querySelector('[data-slot="resizable-panel-group"]');
    expect(group?.className).toContain('min-h-[200px]');
  });
});
