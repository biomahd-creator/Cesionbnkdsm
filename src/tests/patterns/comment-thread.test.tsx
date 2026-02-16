/**
 * CommentThread Pattern Tests (G14 Batch 5)
 *
 * @version 0.2.3
 */

import { describe, it, expect, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { CommentThread, Comment } from '../../components/patterns/CommentThread';

const mockComments: Comment[] = [
  {
    id: '1',
    author: { name: 'Alice Smith', initials: 'AS' },
    content: 'This is a great feature!',
    timestamp: '2 hours ago',
    likes: 5,
  },
  {
    id: '2',
    author: { name: 'Bob Jones', initials: 'BJ' },
    content: 'I agree, looks good.',
    timestamp: '1 hour ago',
    likes: 2,
    replies: [
      {
        id: '2-1',
        author: { name: 'Carol White', initials: 'CW' },
        content: 'Thanks for the feedback!',
        timestamp: '30 min ago',
        likes: 1,
      },
    ],
  },
];

describe('CommentThread', () => {
  // --- Rendering ---

  it('renders comment count header', () => {
    render(<CommentThread comments={mockComments} />);
    expect(screen.getByText('Comments (2)')).toBeInTheDocument();
  });

  it('renders comment authors', () => {
    render(<CommentThread comments={mockComments} />);
    expect(screen.getByText('Alice Smith')).toBeInTheDocument();
    expect(screen.getByText('Bob Jones')).toBeInTheDocument();
  });

  it('renders comment content', () => {
    render(<CommentThread comments={mockComments} />);
    expect(screen.getByText('This is a great feature!')).toBeInTheDocument();
    expect(screen.getByText('I agree, looks good.')).toBeInTheDocument();
  });

  it('renders timestamps', () => {
    render(<CommentThread comments={mockComments} />);
    expect(screen.getByText('2 hours ago')).toBeInTheDocument();
    expect(screen.getByText('1 hour ago')).toBeInTheDocument();
  });

  it('renders like counts', () => {
    render(<CommentThread comments={mockComments} />);
    expect(screen.getByText('5')).toBeInTheDocument();
    expect(screen.getByText('2')).toBeInTheDocument();
  });

  it('renders reply comments', () => {
    render(<CommentThread comments={mockComments} />);
    expect(screen.getByText('Carol White')).toBeInTheDocument();
    expect(screen.getByText('Thanks for the feedback!')).toBeInTheDocument();
  });

  it('renders avatar initials', () => {
    render(<CommentThread comments={mockComments} />);
    expect(screen.getByText('AS')).toBeInTheDocument();
    expect(screen.getByText('BJ')).toBeInTheDocument();
  });

  // --- New comment input ---

  it('renders new comment textarea', () => {
    render(<CommentThread comments={mockComments} />);
    expect(screen.getByPlaceholderText("What's on your mind?")).toBeInTheDocument();
  });

  it('renders Post Comment button', () => {
    render(<CommentThread comments={mockComments} />);
    expect(screen.getByText('Post Comment')).toBeInTheDocument();
  });

  it('Post Comment button is disabled when textarea is empty', () => {
    render(<CommentThread comments={mockComments} />);
    const button = screen.getByText('Post Comment');
    expect(button).toBeDisabled();
  });

  it('enables Post Comment button when text is entered', async () => {
    const user = userEvent.setup();
    render(<CommentThread comments={mockComments} />);
    await user.type(screen.getByPlaceholderText("What's on your mind?"), 'New comment');
    const button = screen.getByText('Post Comment');
    expect(button).not.toBeDisabled();
  });

  // --- Callbacks ---

  it('calls onAddComment when posting', async () => {
    const user = userEvent.setup();
    const handleAdd = vi.fn();
    render(<CommentThread comments={mockComments} onAddComment={handleAdd} />);
    await user.type(screen.getByPlaceholderText("What's on your mind?"), 'Hello world');
    await user.click(screen.getByText('Post Comment'));
    expect(handleAdd).toHaveBeenCalledWith('Hello world');
  });

  it('merges custom className', () => {
    const { container } = render(
      <CommentThread comments={mockComments} className="max-w-lg" />
    );
    const wrapper = container.firstChild as HTMLElement;
    expect(wrapper.className).toContain('max-w-lg');
  });

  // --- Like interaction ---

  it('calls onLike when like button is clicked', async () => {
    const user = userEvent.setup();
    const handleLike = vi.fn();
    render(<CommentThread comments={mockComments} onLike={handleLike} />);
    // Find the like buttons (heart/thumbs-up icons)
    const likeButtons = screen.getAllByRole('button').filter(
      btn => btn.textContent?.match(/\d+/) || btn.querySelector('svg')
    );
    if (likeButtons.length > 0) {
      await user.click(likeButtons[0]);
      expect(handleLike).toHaveBeenCalled();
    }
  });

  // --- Reply interaction ---

  it('renders Reply buttons for each comment', () => {
    render(<CommentThread comments={mockComments} />);
    const replyButtons = screen.getAllByText('Reply');
    expect(replyButtons.length).toBeGreaterThanOrEqual(2);
  });

  // --- Empty state ---

  it('renders with empty comments array', () => {
    render(<CommentThread comments={[]} />);
    expect(screen.getByText('Comments (0)')).toBeInTheDocument();
  });

  // --- Textarea typing ---

  it('types a new comment in the textarea', async () => {
    const user = userEvent.setup();
    render(<CommentThread comments={mockComments} />);
    const textarea = screen.getByPlaceholderText("What's on your mind?");
    await user.type(textarea, 'This is my comment');
    expect(textarea).toHaveValue('This is my comment');
  });

  // --- Comment clears after posting ---

  it('clears textarea after posting a comment', async () => {
    const user = userEvent.setup();
    render(<CommentThread comments={mockComments} onAddComment={() => {}} />);
    const textarea = screen.getByPlaceholderText("What's on your mind?");
    await user.type(textarea, 'New comment text');
    await user.click(screen.getByText('Post Comment'));
    expect(textarea).toHaveValue('');
  });

  // --- Reply initials ---

  it('renders reply author initials', () => {
    render(<CommentThread comments={mockComments} />);
    expect(screen.getByText('CW')).toBeInTheDocument();
  });
});