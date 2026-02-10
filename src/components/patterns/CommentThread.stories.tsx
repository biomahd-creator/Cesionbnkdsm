import type { Meta, StoryObj } from '@storybook/react';
import { CommentThread, type Comment } from './CommentThread';

const meta: Meta<typeof CommentThread> = {
  title: 'Patterns/CommentThread',
  component: CommentThread,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component:
          'Threaded comment system with avatars, likes, replies, and a new comment form. Supports nested reply threads. Actions: like, reply, edit, delete.',
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof CommentThread>;

const sampleComments: Comment[] = [
  {
    id: '1',
    author: { name: 'Maria Gonzalez', initials: 'MG' },
    content: 'La operacion OP-2024-0847 requiere revision adicional del pagador antes de aprobar. El cupo actual esta por debajo del minimo.',
    timestamp: 'Hace 2 horas',
    likes: 3,
    replies: [
      {
        id: '1-1',
        author: { name: 'Carlos Ramirez', initials: 'CR' },
        content: 'Ya solicite la actualizacion del cupo. Deberia estar listo manana.',
        timestamp: 'Hace 1 hora',
        likes: 1,
      },
      {
        id: '1-2',
        author: { name: 'Ana Torres', initials: 'AT' },
        content: 'Confirmo que el cupo fue actualizado. Podemos proceder.',
        timestamp: 'Hace 30 min',
        likes: 2,
      },
    ],
  },
  {
    id: '2',
    author: { name: 'Juan Perez', initials: 'JP' },
    content: 'Las tasas para este mes ya estan configuradas. Favor verificar antes de cerrar.',
    timestamp: 'Hace 5 horas',
    likes: 0,
  },
];

export const Default: Story = {
  args: {
    comments: sampleComments,
    className: 'max-w-lg',
    onAddComment: (content) => console.log('New comment:', content),
    onReply: (id, content) => console.log('Reply to', id, ':', content),
    onLike: (id) => console.log('Like:', id),
  },
};

export const EmptyThread: Story = {
  name: 'Empty (No Comments)',
  args: {
    comments: [],
    className: 'max-w-lg',
    onAddComment: (content) => console.log('New comment:', content),
  },
};
