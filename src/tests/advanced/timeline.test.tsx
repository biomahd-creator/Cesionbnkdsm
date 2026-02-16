/**
 * Timeline Advanced Component Tests (G14 Batch 2)
 *
 * Tests for Timeline, TimelineItem, TimelineIcon,
 * TimelineContent, TimelineHeader, TimelineTitle,
 * TimelineDescription, TimelineTime, TimelineConnector.
 *
 * Pure HTML wrappers with forwardRef.
 *
 * @version 0.2.3
 */

import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import {
  Timeline,
  TimelineItem,
  TimelineIcon,
  TimelineContent,
  TimelineHeader,
  TimelineTitle,
  TimelineDescription,
  TimelineTime,
  TimelineConnector,
} from '../../components/advanced/Timeline';

describe('Timeline', () => {
  // --- Rendering ---

  it('renders the timeline container', () => {
    const { container } = render(
      <Timeline data-testid="timeline">
        <TimelineItem>
          <TimelineIcon />
          <TimelineContent>
            <TimelineTitle>Event</TimelineTitle>
          </TimelineContent>
        </TimelineItem>
      </Timeline>
    );
    expect(screen.getByTestId('timeline')).toBeInTheDocument();
  });

  it('renders timeline items', () => {
    render(
      <Timeline>
        <TimelineItem data-testid="item-1">
          <TimelineIcon />
          <TimelineContent>
            <TimelineTitle>First Event</TimelineTitle>
          </TimelineContent>
        </TimelineItem>
        <TimelineItem data-testid="item-2">
          <TimelineIcon />
          <TimelineContent>
            <TimelineTitle>Second Event</TimelineTitle>
          </TimelineContent>
        </TimelineItem>
      </Timeline>
    );
    expect(screen.getByTestId('item-1')).toBeInTheDocument();
    expect(screen.getByTestId('item-2')).toBeInTheDocument();
  });

  // --- Sub-component rendering ---

  it('renders TimelineTitle', () => {
    render(
      <Timeline>
        <TimelineItem>
          <TimelineIcon />
          <TimelineContent>
            <TimelineTitle>Account Created</TimelineTitle>
          </TimelineContent>
        </TimelineItem>
      </Timeline>
    );
    expect(screen.getByText('Account Created')).toBeInTheDocument();
  });

  it('renders TimelineDescription', () => {
    render(
      <Timeline>
        <TimelineItem>
          <TimelineIcon />
          <TimelineContent>
            <TimelineTitle>Event</TimelineTitle>
            <TimelineDescription>Details about the event</TimelineDescription>
          </TimelineContent>
        </TimelineItem>
      </Timeline>
    );
    expect(screen.getByText('Details about the event')).toBeInTheDocument();
  });

  it('renders TimelineTime', () => {
    render(
      <Timeline>
        <TimelineItem>
          <TimelineIcon />
          <TimelineContent>
            <TimelineHeader>
              <TimelineTitle>Event</TimelineTitle>
              <TimelineTime>2 hours ago</TimelineTime>
            </TimelineHeader>
          </TimelineContent>
        </TimelineItem>
      </Timeline>
    );
    expect(screen.getByText('2 hours ago')).toBeInTheDocument();
  });

  it('renders TimelineConnector', () => {
    const { container } = render(
      <Timeline>
        <TimelineItem>
          <TimelineConnector data-testid="connector" />
          <TimelineIcon />
          <TimelineContent>
            <TimelineTitle>Event</TimelineTitle>
          </TimelineContent>
        </TimelineItem>
      </Timeline>
    );
    expect(screen.getByTestId('connector')).toBeInTheDocument();
  });

  // --- Custom className ---

  it('merges className on Timeline', () => {
    const { container } = render(
      <Timeline className="gap-4" data-testid="timeline">
        <TimelineItem>
          <TimelineIcon />
          <TimelineContent>
            <TimelineTitle>Event</TimelineTitle>
          </TimelineContent>
        </TimelineItem>
      </Timeline>
    );
    expect(screen.getByTestId('timeline').className).toContain('gap-4');
  });

  it('merges className on TimelineItem', () => {
    render(
      <Timeline>
        <TimelineItem className="border-l" data-testid="item">
          <TimelineIcon />
          <TimelineContent>
            <TimelineTitle>Event</TimelineTitle>
          </TimelineContent>
        </TimelineItem>
      </Timeline>
    );
    expect(screen.getByTestId('item').className).toContain('border-l');
  });

  // --- Ref forwarding ---

  it('forwards ref on Timeline', () => {
    const ref = { current: null } as React.RefObject<HTMLDivElement>;
    render(
      <Timeline ref={ref}>
        <TimelineItem>
          <TimelineIcon />
          <TimelineContent>
            <TimelineTitle>Event</TimelineTitle>
          </TimelineContent>
        </TimelineItem>
      </Timeline>
    );
    expect(ref.current).toBeInstanceOf(HTMLDivElement);
  });

  // --- Full composition ---

  it('renders a complete timeline', () => {
    render(
      <Timeline>
        <TimelineItem>
          <TimelineConnector />
          <TimelineIcon>🔵</TimelineIcon>
          <TimelineContent>
            <TimelineHeader>
              <TimelineTitle>Invoice Created</TimelineTitle>
              <TimelineTime>Jan 15, 2026</TimelineTime>
            </TimelineHeader>
            <TimelineDescription>Invoice #001 was created</TimelineDescription>
          </TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineIcon>✅</TimelineIcon>
          <TimelineContent>
            <TimelineHeader>
              <TimelineTitle>Payment Received</TimelineTitle>
              <TimelineTime>Jan 20, 2026</TimelineTime>
            </TimelineHeader>
            <TimelineDescription>Full payment processed</TimelineDescription>
          </TimelineContent>
        </TimelineItem>
      </Timeline>
    );
    expect(screen.getByText('Invoice Created')).toBeInTheDocument();
    expect(screen.getByText('Payment Received')).toBeInTheDocument();
    expect(screen.getByText('Jan 15, 2026')).toBeInTheDocument();
    expect(screen.getByText('Full payment processed')).toBeInTheDocument();
  });
});
