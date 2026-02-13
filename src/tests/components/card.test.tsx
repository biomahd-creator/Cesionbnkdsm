/**
 * Card Component Tests (G2)
 *
 * Tests for the Card family of components:
 * Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter, CardAction.
 *
 * @version 0.1.1
 */

import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
  CardAction,
} from '../../components/ui/card';

describe('Card', () => {
  it('renders with default props', () => {
    render(<Card data-testid="card">Content</Card>);
    const card = screen.getByTestId('card');
    expect(card).toBeInTheDocument();
    expect(card).toHaveAttribute('data-slot', 'card');
  });

  it('renders children correctly', () => {
    render(<Card>Card body text</Card>);
    expect(screen.getByText('Card body text')).toBeInTheDocument();
  });

  it('applies default styling classes', () => {
    render(<Card data-testid="card">Styled</Card>);
    const card = screen.getByTestId('card');
    expect(card.className).toContain('bg-card');
    expect(card.className).toContain('rounded-xl');
    expect(card.className).toContain('border');
  });

  it('merges custom className', () => {
    render(<Card data-testid="card" className="my-custom">Custom</Card>);
    const card = screen.getByTestId('card');
    expect(card.className).toContain('my-custom');
  });

  it('renders as a div element', () => {
    render(<Card data-testid="card">Div Card</Card>);
    const card = screen.getByTestId('card');
    expect(card.tagName).toBe('DIV');
  });
});

describe('CardHeader', () => {
  it('renders with data-slot attribute', () => {
    render(<CardHeader data-testid="header">Header</CardHeader>);
    const header = screen.getByTestId('header');
    expect(header).toHaveAttribute('data-slot', 'card-header');
  });

  it('renders children', () => {
    render(<CardHeader>My Header</CardHeader>);
    expect(screen.getByText('My Header')).toBeInTheDocument();
  });

  it('applies grid layout classes', () => {
    render(<CardHeader data-testid="header">Header</CardHeader>);
    const header = screen.getByTestId('header');
    expect(header.className).toContain('grid');
  });
});

describe('CardTitle', () => {
  it('renders with data-slot attribute', () => {
    render(<CardTitle data-testid="title">Title</CardTitle>);
    const title = screen.getByTestId('title');
    expect(title).toHaveAttribute('data-slot', 'card-title');
  });

  it('renders as an h4 element', () => {
    render(<CardTitle data-testid="title">Heading</CardTitle>);
    const title = screen.getByTestId('title');
    expect(title.tagName).toBe('H4');
  });

  it('renders children text', () => {
    render(<CardTitle>Operations Summary</CardTitle>);
    expect(screen.getByText('Operations Summary')).toBeInTheDocument();
  });
});

describe('CardDescription', () => {
  it('renders with data-slot attribute', () => {
    render(<CardDescription data-testid="desc">Description</CardDescription>);
    const desc = screen.getByTestId('desc');
    expect(desc).toHaveAttribute('data-slot', 'card-description');
  });

  it('renders as a p element', () => {
    render(<CardDescription data-testid="desc">Paragraph</CardDescription>);
    const desc = screen.getByTestId('desc');
    expect(desc.tagName).toBe('P');
  });

  it('applies muted foreground styling', () => {
    render(<CardDescription data-testid="desc">Muted text</CardDescription>);
    const desc = screen.getByTestId('desc');
    expect(desc.className).toContain('text-muted-foreground');
  });
});

describe('CardContent', () => {
  it('renders with data-slot attribute', () => {
    render(<CardContent data-testid="content">Body</CardContent>);
    const content = screen.getByTestId('content');
    expect(content).toHaveAttribute('data-slot', 'card-content');
  });

  it('renders children', () => {
    render(<CardContent>Content area</CardContent>);
    expect(screen.getByText('Content area')).toBeInTheDocument();
  });

  it('merges custom className', () => {
    render(<CardContent data-testid="content" className="p-8">Padded</CardContent>);
    const content = screen.getByTestId('content');
    expect(content.className).toContain('p-8');
  });
});

describe('CardFooter', () => {
  it('renders with data-slot attribute', () => {
    render(<CardFooter data-testid="footer">Footer</CardFooter>);
    const footer = screen.getByTestId('footer');
    expect(footer).toHaveAttribute('data-slot', 'card-footer');
  });

  it('applies flex layout', () => {
    render(<CardFooter data-testid="footer">Flex footer</CardFooter>);
    const footer = screen.getByTestId('footer');
    expect(footer.className).toContain('flex');
    expect(footer.className).toContain('items-center');
  });

  it('renders children', () => {
    render(<CardFooter>Footer actions</CardFooter>);
    expect(screen.getByText('Footer actions')).toBeInTheDocument();
  });
});

describe('CardAction', () => {
  it('renders with data-slot attribute', () => {
    render(<CardAction data-testid="action">Action</CardAction>);
    const action = screen.getByTestId('action');
    expect(action).toHaveAttribute('data-slot', 'card-action');
  });

  it('renders children', () => {
    render(<CardAction>Action content</CardAction>);
    expect(screen.getByText('Action content')).toBeInTheDocument();
  });
});

describe('Card composition', () => {
  it('renders a full card with all sub-components', () => {
    render(
      <Card data-testid="full-card">
        <CardHeader>
          <CardTitle>Operations</CardTitle>
          <CardDescription>Manage your factoring operations</CardDescription>
          <CardAction>
            <button>Edit</button>
          </CardAction>
        </CardHeader>
        <CardContent>
          <p>Card body content here</p>
        </CardContent>
        <CardFooter>
          <button>Submit</button>
        </CardFooter>
      </Card>
    );

    expect(screen.getByTestId('full-card')).toBeInTheDocument();
    expect(screen.getByText('Operations')).toBeInTheDocument();
    expect(screen.getByText('Manage your factoring operations')).toBeInTheDocument();
    expect(screen.getByText('Edit')).toBeInTheDocument();
    expect(screen.getByText('Card body content here')).toBeInTheDocument();
    expect(screen.getByText('Submit')).toBeInTheDocument();
  });
});
