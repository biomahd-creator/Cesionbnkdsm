/**
 * ContrastPreview Widget Tests (G14 Batch 6)
 *
 * @version 0.2.3
 */

import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { ContrastPreview } from '../../components/widgets/ContrastPreview';

describe('ContrastPreview', () => {
  const baseProps = {
    foreground: '#000000',
    background: '#ffffff',
  };

  it('renders example text', () => {
    render(<ContrastPreview {...baseProps} />);
    expect(screen.getByText('Texto de ejemplo')).toBeInTheDocument();
  });

  it('renders ratio when provided', () => {
    render(<ContrastPreview {...baseProps} ratio="21:1" />);
    expect(screen.getByText('Ratio: 21:1')).toBeInTheDocument();
  });

  it('renders AAA status with green color', () => {
    render(<ContrastPreview {...baseProps} status="AAA" />);
    const status = screen.getByText('AAA');
    expect(status).toBeInTheDocument();
    expect(status.className).toContain('text-green-600');
  });

  it('renders AA status with yellow color', () => {
    render(<ContrastPreview {...baseProps} status="AA" />);
    const status = screen.getByText('AA');
    expect(status.className).toContain('text-yellow-600');
  });

  it('renders Fail status with red color', () => {
    render(<ContrastPreview {...baseProps} status="Fail" />);
    const status = screen.getByText('Fail');
    expect(status.className).toContain('text-red-600');
  });

  it('does not render ratio/status section when neither provided', () => {
    const { container } = render(<ContrastPreview {...baseProps} />);
    expect(container.querySelector('.flex.items-center.justify-between')).toBeNull();
  });

  it('applies sm size class', () => {
    const { container } = render(<ContrastPreview {...baseProps} size="sm" />);
    const preview = container.querySelector('.rounded-lg.border');
    expect(preview?.className).toContain('h-12');
  });

  it('applies lg size class', () => {
    const { container } = render(<ContrastPreview {...baseProps} size="lg" />);
    const preview = container.querySelector('.rounded-lg.border');
    expect(preview?.className).toContain('h-20');
  });

  it('merges custom className', () => {
    const { container } = render(
      <ContrastPreview {...baseProps} className="w-64" />
    );
    const wrapper = container.firstChild as HTMLElement;
    expect(wrapper.className).toContain('w-64');
  });
});
