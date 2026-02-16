/**
 * InputOTP Component Tests (G14 Batch 3)
 *
 * Tests for InputOTP, InputOTPGroup, InputOTPSlot, InputOTPSeparator.
 * OTP input has limited testability in jsdom, so we test the
 * structural subcomponents.
 *
 * @version 0.2.3
 */

import { describe, it, expect } from 'vitest';
import { render } from '@testing-library/react';
import {
  InputOTPGroup,
  InputOTPSlot,
  InputOTPSeparator,
} from '../../components/ui/input-otp';

describe('InputOTP', () => {
  // --- InputOTPGroup ---

  describe('InputOTPGroup', () => {
    it('renders with data-slot', () => {
      const { container } = render(
        <InputOTPGroup>
          <div>Slot</div>
        </InputOTPGroup>
      );
      const el = container.querySelector('[data-slot="input-otp-group"]');
      expect(el).toBeTruthy();
    });

    it('renders children', () => {
      const { container } = render(
        <InputOTPGroup>
          <span>A</span>
          <span>B</span>
        </InputOTPGroup>
      );
      expect(container.textContent).toContain('A');
      expect(container.textContent).toContain('B');
    });

    it('merges custom className', () => {
      const { container } = render(
        <InputOTPGroup className="gap-2">
          <div>Slot</div>
        </InputOTPGroup>
      );
      const el = container.querySelector('[data-slot="input-otp-group"]');
      expect(el?.className).toContain('gap-2');
    });
  });

  // --- InputOTPSlot ---

  describe('InputOTPSlot', () => {
    it('renders with data-slot', () => {
      const { container } = render(<InputOTPSlot index={0} />);
      const el = container.querySelector('[data-slot="input-otp-slot"]');
      expect(el).toBeTruthy();
    });

    it('renders empty slot when no context', () => {
      const { container } = render(<InputOTPSlot index={0} />);
      const slot = container.querySelector('[data-slot="input-otp-slot"]');
      expect(slot).toBeTruthy();
      // Without OTPInputContext, char is undefined
      expect(slot?.textContent).toBe('');
    });

    it('merges custom className', () => {
      const { container } = render(
        <InputOTPSlot index={0} className="w-12 h-12" />
      );
      const el = container.querySelector('[data-slot="input-otp-slot"]');
      expect(el?.className).toContain('w-12');
    });
  });

  // --- InputOTPSeparator ---

  describe('InputOTPSeparator', () => {
    it('renders with data-slot', () => {
      const { container } = render(<InputOTPSeparator />);
      const el = container.querySelector('[data-slot="input-otp-separator"]');
      expect(el).toBeTruthy();
    });

    it('has separator role', () => {
      const { container } = render(<InputOTPSeparator />);
      const el = container.querySelector('[role="separator"]');
      expect(el).toBeTruthy();
    });

    it('renders minus icon', () => {
      const { container } = render(<InputOTPSeparator />);
      const svg = container.querySelector('svg');
      expect(svg).toBeTruthy();
    });
  });
});
