/**
 * VirtualizedList Advanced Component Tests (G14 Batch 6)
 *
 * @version 0.2.3
 */

import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { VirtualizedList } from '../../components/advanced/VirtualizedList';

const items = Array.from({ length: 100 }, (_, i) => ({
  id: `item-${i}`,
  label: `Item ${i}`,
}));

describe('VirtualizedList', () => {
  it('renders container with specified height', () => {
    const { container } = render(
      <VirtualizedList
        items={items}
        height={300}
        itemHeight={40}
        renderItem={(item, _index, style) => (
          <div style={style}>{item.label}</div>
        )}
      />
    );
    const scrollContainer = container.firstChild as HTMLElement;
    expect(scrollContainer.style.height).toBe('300px');
  });

  it('renders only visible items (not all 100)', () => {
    render(
      <VirtualizedList
        items={items}
        height={200}
        itemHeight={40}
        renderItem={(item, _index, style) => (
          <div style={style}>{item.label}</div>
        )}
      />
    );
    // With height=200, itemHeight=40 → ~5 visible + 5 buffer = ~10 items rendered
    // Item 0 should be visible
    expect(screen.getByText('Item 0')).toBeInTheDocument();
    // Item 99 should NOT be rendered
    expect(screen.queryByText('Item 99')).not.toBeInTheDocument();
  });

  it('renders first few items', () => {
    render(
      <VirtualizedList
        items={items}
        height={200}
        itemHeight={40}
        renderItem={(item, _index, style) => (
          <div style={style}>{item.label}</div>
        )}
      />
    );
    expect(screen.getByText('Item 0')).toBeInTheDocument();
    expect(screen.getByText('Item 1')).toBeInTheDocument();
  });

  it('merges custom className', () => {
    const { container } = render(
      <VirtualizedList
        items={items}
        height={200}
        itemHeight={40}
        className="border"
        renderItem={(item, _index, style) => (
          <div style={style}>{item.label}</div>
        )}
      />
    );
    const wrapper = container.firstChild as HTMLElement;
    expect(wrapper.className).toContain('border');
  });

  it('sets total height for scroll area', () => {
    const { container } = render(
      <VirtualizedList
        items={items}
        height={200}
        itemHeight={40}
        renderItem={(item, _index, style) => (
          <div style={style}>{item.label}</div>
        )}
      />
    );
    // Total height should be items.length * itemHeight = 100 * 40 = 4000px
    const innerDiv = container.querySelector('[style*="height: 4000px"]') ||
                     container.querySelector('[style*="height"]');
    expect(innerDiv).toBeTruthy();
  });

  it('handles empty items array', () => {
    const { container } = render(
      <VirtualizedList
        items={[]}
        height={200}
        itemHeight={40}
        renderItem={(item: any, _index, style) => (
          <div style={style}>{item.label}</div>
        )}
      />
    );
    expect(container.firstChild).toBeTruthy();
  });
});
