import type { Meta, StoryObj } from '@storybook/react';
import { CodeBlock } from './code-block';

const meta: Meta<typeof CodeBlock> = {
  title: 'UI/CodeBlock',
  component: CodeBlock,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof CodeBlock>;

const sampleCode = `import React from 'react';

function HelloWorld() {
  return (
    <div className="p-4 bg-card rounded shadow">
      <h1 className="text-2xl font-bold">Hello World!</h1>
      <p className="mt-2 text-muted-foreground">This is a code block.</p>
    </div>
  );
}`;

export const Default: Story = {
  args: {
    code: sampleCode,
    language: 'tsx',
    filename: 'HelloWorld.tsx',
    showLineNumbers: true,
  },
};

export const WithoutFilename: Story = {
  args: {
    code: 'npm install @biomahd-creator/financio-design-system',
    language: 'bash',
    showLineNumbers: false,
  },
};