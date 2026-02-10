import type { Meta, StoryObj } from '@storybook/react';
import { RichTextEditor } from './RichTextEditor';

const meta: Meta<typeof RichTextEditor> = {
  title: 'Advanced/RichTextEditor',
  component: RichTextEditor,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component:
          'Rich text editor with toolbar (bold, italic, headings, lists, links). Outputs HTML. Built on contentEditable with custom toolbar controls.',
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof RichTextEditor>;

export const Default: Story = {
  render: () => (
    <div className="max-w-2xl">
      <RichTextEditor onChange={(html) => console.log('Content:', html)} />
    </div>
  ),
};
