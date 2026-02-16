/**
 * PageLayout Components Tests (G14 Batch 3)
 *
 * Tests for PageLayout, SplitLayout, StackLayout, SectionLayout.
 *
 * @version 0.2.3
 */

import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import {
  PageLayout,
  SplitLayout,
  StackLayout,
  SectionLayout,
} from '../../components/ui/page-layout';

describe('PageLayout', () => {
  it('renders children', () => {
    render(<PageLayout>Page content</PageLayout>);
    expect(screen.getByText('Page content')).toBeInTheDocument();
  });

  it('applies constrained variant by default', () => {
    const { container } = render(<PageLayout>Content</PageLayout>);
    const el = container.firstChild as HTMLElement;
    expect(el.className).toContain('max-w-7xl');
  });

  it('applies full variant', () => {
    const { container } = render(<PageLayout variant="full">Content</PageLayout>);
    const el = container.firstChild as HTMLElement;
    expect(el.className).toContain('w-full');
    expect(el.className).not.toContain('max-w-7xl');
  });

  it('applies narrow variant', () => {
    const { container } = render(<PageLayout variant="narrow">Content</PageLayout>);
    const el = container.firstChild as HTMLElement;
    expect(el.className).toContain('max-w-3xl');
  });

  it('applies prose variant', () => {
    const { container } = render(<PageLayout variant="prose">Content</PageLayout>);
    const el = container.firstChild as HTMLElement;
    expect(el.className).toContain('max-w-prose');
  });

  it('applies padding', () => {
    const { container } = render(<PageLayout padding="md">Content</PageLayout>);
    const el = container.firstChild as HTMLElement;
    expect(el.className).toContain('px-6');
  });

  it('centers by default', () => {
    const { container } = render(<PageLayout>Content</PageLayout>);
    const el = container.firstChild as HTMLElement;
    expect(el.className).toContain('mx-auto');
  });

  it('disables centering', () => {
    const { container } = render(<PageLayout centered={false}>Content</PageLayout>);
    const el = container.firstChild as HTMLElement;
    expect(el.className).not.toContain('mx-auto');
  });

  it('merges custom className', () => {
    const { container } = render(<PageLayout className="bg-red-500">Content</PageLayout>);
    const el = container.firstChild as HTMLElement;
    expect(el.className).toContain('bg-red-500');
  });
});

describe('SplitLayout', () => {
  it('renders two panels', () => {
    render(
      <SplitLayout>
        {[<div key="l">Left</div>, <div key="r">Right</div>]}
      </SplitLayout>
    );
    expect(screen.getByText('Left')).toBeInTheDocument();
    expect(screen.getByText('Right')).toBeInTheDocument();
  });

  it('uses grid layout', () => {
    const { container } = render(
      <SplitLayout>
        {[<div key="l">Left</div>, <div key="r">Right</div>]}
      </SplitLayout>
    );
    const el = container.firstChild as HTMLElement;
    expect(el.className).toContain('grid');
  });

  it('applies gap', () => {
    const { container } = render(
      <SplitLayout gap="lg">
        {[<div key="l">L</div>, <div key="r">R</div>]}
      </SplitLayout>
    );
    const el = container.firstChild as HTMLElement;
    expect(el.className).toContain('gap-8');
  });

  it('merges custom className', () => {
    const { container } = render(
      <SplitLayout className="my-split">
        {[<div key="l">L</div>, <div key="r">R</div>]}
      </SplitLayout>
    );
    const el = container.firstChild as HTMLElement;
    expect(el.className).toContain('my-split');
  });
});

describe('StackLayout', () => {
  it('renders children', () => {
    render(
      <StackLayout>
        <div>Section 1</div>
        <div>Section 2</div>
      </StackLayout>
    );
    expect(screen.getByText('Section 1')).toBeInTheDocument();
    expect(screen.getByText('Section 2')).toBeInTheDocument();
  });

  it('uses flex column', () => {
    const { container } = render(
      <StackLayout><div>A</div></StackLayout>
    );
    const el = container.firstChild as HTMLElement;
    expect(el.className).toContain('flex');
    expect(el.className).toContain('flex-col');
  });

  it('applies default gap', () => {
    const { container } = render(
      <StackLayout><div>A</div></StackLayout>
    );
    const el = container.firstChild as HTMLElement;
    expect(el.className).toContain('gap-6');
  });

  it('applies spacious gap', () => {
    const { container } = render(
      <StackLayout gap="spacious"><div>A</div></StackLayout>
    );
    const el = container.firstChild as HTMLElement;
    expect(el.className).toContain('gap-12');
  });

  it('applies dividers', () => {
    const { container } = render(
      <StackLayout dividers><div>A</div></StackLayout>
    );
    const el = container.firstChild as HTMLElement;
    expect(el.className).toContain('divide-y');
  });
});

describe('SectionLayout', () => {
  it('renders children', () => {
    render(
      <SectionLayout>
        <div>Section content</div>
      </SectionLayout>
    );
    expect(screen.getByText('Section content')).toBeInTheDocument();
  });

  it('renders title', () => {
    render(
      <SectionLayout title="My Section">
        <div>Content</div>
      </SectionLayout>
    );
    expect(screen.getByText('My Section')).toBeInTheDocument();
  });

  it('renders description', () => {
    render(
      <SectionLayout title="Title" description="A description">
        <div>Content</div>
      </SectionLayout>
    );
    expect(screen.getByText('A description')).toBeInTheDocument();
  });

  it('renders action slot', () => {
    render(
      <SectionLayout title="Title" action={<button>Action</button>}>
        <div>Content</div>
      </SectionLayout>
    );
    expect(screen.getByText('Action')).toBeInTheDocument();
  });

  it('renders as a section element', () => {
    const { container } = render(
      <SectionLayout><div>Content</div></SectionLayout>
    );
    expect(container.querySelector('section')).toBeTruthy();
  });
});
