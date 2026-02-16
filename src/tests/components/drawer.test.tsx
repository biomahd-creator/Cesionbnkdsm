/**
 * Drawer Component Tests (G14 Batch 3)
 *
 * Tests for Drawer subcomponents (Header, Footer).
 * DrawerTitle and DrawerDescription wrap Radix Dialog primitives
 * that require Dialog context (via vaul), so we only test
 * the pure HTML wrapper components.
 *
 * @version 0.2.3
 */

import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import {
  Drawer,
  DrawerTrigger,
  DrawerHeader,
  DrawerFooter,
} from '../../components/ui/drawer';

describe('Drawer', () => {
  // --- DrawerHeader ---

  describe('DrawerHeader', () => {
    it('renders with data-slot', () => {
      const { container } = render(
        <DrawerHeader>Header content</DrawerHeader>
      );
      const el = container.querySelector('[data-slot="drawer-header"]');
      expect(el).toBeTruthy();
    });

    it('renders children', () => {
      render(<DrawerHeader>My Header</DrawerHeader>);
      expect(screen.getByText('My Header')).toBeInTheDocument();
    });

    it('merges custom className', () => {
      const { container } = render(
        <DrawerHeader className="custom-class">Content</DrawerHeader>
      );
      const el = container.querySelector('[data-slot="drawer-header"]');
      expect(el?.className).toContain('custom-class');
      expect(el?.className).toContain('flex');
    });
  });

  // --- DrawerFooter ---

  describe('DrawerFooter', () => {
    it('renders with data-slot', () => {
      const { container } = render(
        <DrawerFooter>Footer content</DrawerFooter>
      );
      const el = container.querySelector('[data-slot="drawer-footer"]');
      expect(el).toBeTruthy();
    });

    it('renders children', () => {
      render(<DrawerFooter>My Footer</DrawerFooter>);
      expect(screen.getByText('My Footer')).toBeInTheDocument();
    });

    it('merges custom className', () => {
      const { container } = render(
        <DrawerFooter className="mt-8">Content</DrawerFooter>
      );
      const el = container.querySelector('[data-slot="drawer-footer"]');
      expect(el?.className).toContain('mt-8');
    });
  });

  // --- Drawer + Trigger (basic render) ---

  describe('Drawer root', () => {
    it('renders Drawer with trigger', () => {
      render(
        <Drawer>
          <DrawerTrigger>Open drawer</DrawerTrigger>
        </Drawer>
      );
      expect(screen.getByText('Open drawer')).toBeInTheDocument();
    });

    it('trigger has data-slot', () => {
      const { container } = render(
        <Drawer>
          <DrawerTrigger>Open</DrawerTrigger>
        </Drawer>
      );
      const trigger = container.querySelector('[data-slot="drawer-trigger"]');
      expect(trigger).toBeTruthy();
    });
  });
});
