/**
 * Skeleton Variants Tests (G14 Batch 3)
 *
 * Tests for SkeletonTable, SkeletonCard, SkeletonCardGrid,
 * SkeletonForm, SkeletonList, SkeletonDashboard, SkeletonKpiCard.
 *
 * @version 0.2.3
 */

import { describe, it, expect } from 'vitest';
import { render } from '@testing-library/react';
import {
  SkeletonTable,
  SkeletonCard,
  SkeletonCardGrid,
  SkeletonForm,
  SkeletonList,
  SkeletonDashboard,
  SkeletonKpiCard,
  SkeletonKpiCardGroup,
  SkeletonProfile,
} from '../../components/ui/skeleton-variants';

describe('SkeletonTable', () => {
  it('renders default 5 rows and 4 columns', () => {
    const { container } = render(<SkeletonTable />);
    // header row + 5 data rows = 6 flex rows
    const rows = container.querySelectorAll('.flex.gap-4');
    expect(rows.length).toBe(6); // 1 header + 5 data
  });

  it('renders custom row/column count', () => {
    const { container } = render(<SkeletonTable rows={3} columns={2} />);
    const skeletons = container.querySelectorAll('[data-slot="skeleton"]');
    // 2 header + 3*2 data = 8 skeletons
    expect(skeletons.length).toBe(8);
  });

  it('hides header when showHeader is false', () => {
    const { container } = render(<SkeletonTable rows={2} columns={3} showHeader={false} />);
    const skeletons = container.querySelectorAll('[data-slot="skeleton"]');
    // 2*3 = 6 (no header)
    expect(skeletons.length).toBe(6);
  });
});

describe('SkeletonCard', () => {
  it('renders with default lines', () => {
    const { container } = render(<SkeletonCard />);
    const card = container.querySelector('[data-slot="card"]');
    expect(card).toBeTruthy();
  });

  it('renders image placeholder when hasImage is true', () => {
    const { container } = render(<SkeletonCard hasImage />);
    const skeletons = container.querySelectorAll('[data-slot="skeleton"]');
    // 2 header + 1 image + 3 lines = 6
    expect(skeletons.length).toBe(6);
  });

  it('renders without image by default', () => {
    const { container } = render(<SkeletonCard />);
    const skeletons = container.querySelectorAll('[data-slot="skeleton"]');
    // 2 header + 3 lines = 5
    expect(skeletons.length).toBe(5);
  });

  it('renders custom number of lines', () => {
    const { container } = render(<SkeletonCard lines={5} />);
    const content = container.querySelector('[data-slot="card-content"]');
    const skeletons = content?.querySelectorAll('[data-slot="skeleton"]');
    expect(skeletons?.length).toBe(5);
  });
});

describe('SkeletonCardGrid', () => {
  it('renders default 6 cards', () => {
    const { container } = render(<SkeletonCardGrid />);
    const cards = container.querySelectorAll('[data-slot="card"]');
    expect(cards.length).toBe(6);
  });

  it('renders custom count', () => {
    const { container } = render(<SkeletonCardGrid count={3} />);
    const cards = container.querySelectorAll('[data-slot="card"]');
    expect(cards.length).toBe(3);
  });
});

describe('SkeletonForm', () => {
  it('renders default 4 fields with submit button', () => {
    const { container } = render(<SkeletonForm />);
    const skeletons = container.querySelectorAll('[data-slot="skeleton"]');
    // 4 fields × 2 (label+input) + 1 submit = 9
    expect(skeletons.length).toBe(9);
  });

  it('hides submit button when hasSubmitButton is false', () => {
    const { container } = render(<SkeletonForm hasSubmitButton={false} />);
    const skeletons = container.querySelectorAll('[data-slot="skeleton"]');
    // 4 fields × 2 = 8
    expect(skeletons.length).toBe(8);
  });

  it('renders custom number of fields', () => {
    const { container } = render(<SkeletonForm fields={2} hasSubmitButton={false} />);
    const skeletons = container.querySelectorAll('[data-slot="skeleton"]');
    expect(skeletons.length).toBe(4);
  });
});

describe('SkeletonList', () => {
  it('renders default 5 items', () => {
    const { container } = render(<SkeletonList />);
    const items = container.querySelectorAll('.border.rounded-lg');
    expect(items.length).toBe(5);
  });

  it('renders simple variant with 1 text skeleton per item', () => {
    const { container } = render(<SkeletonList items={2} variant="simple" />);
    // 2 items × (1 avatar + 1 text) = 4 skeletons
    const skeletons = container.querySelectorAll('[data-slot="skeleton"]');
    expect(skeletons.length).toBe(4);
  });

  it('renders detailed variant with 2 text skeletons per item', () => {
    const { container } = render(<SkeletonList items={2} variant="detailed" />);
    // 2 items × (1 avatar + 2 text) = 6 skeletons
    const skeletons = container.querySelectorAll('[data-slot="skeleton"]');
    expect(skeletons.length).toBe(6);
  });
});

describe('SkeletonDashboard', () => {
  it('renders without errors', () => {
    const { container } = render(<SkeletonDashboard />);
    expect(container.firstChild).toBeTruthy();
  });

  it('renders stat cards section', () => {
    const { container } = render(<SkeletonDashboard />);
    const cards = container.querySelectorAll('[data-slot="card"]');
    // 4 stat cards + 1 chart card + 1 table card = 6
    expect(cards.length).toBe(6);
  });
});

describe('SkeletonKpiCard', () => {
  it('renders a card', () => {
    const { container } = render(<SkeletonKpiCard />);
    const card = container.querySelector('[data-slot="card"]');
    expect(card).toBeTruthy();
  });
});

describe('SkeletonKpiCardGroup', () => {
  it('renders default 4 KPI cards', () => {
    const { container } = render(<SkeletonKpiCardGroup />);
    const cards = container.querySelectorAll('[data-slot="card"]');
    expect(cards.length).toBe(4);
  });

  it('renders custom count', () => {
    const { container } = render(<SkeletonKpiCardGroup count={2} />);
    const cards = container.querySelectorAll('[data-slot="card"]');
    expect(cards.length).toBe(2);
  });
});

describe('SkeletonProfile', () => {
  it('renders without errors', () => {
    const { container } = render(<SkeletonProfile />);
    expect(container.firstChild).toBeTruthy();
  });

  it('renders avatar skeleton', () => {
    const { container } = render(<SkeletonProfile />);
    const avatar = container.querySelector('.rounded-full');
    expect(avatar).toBeTruthy();
  });
});
