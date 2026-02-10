import type { Meta, StoryObj } from '@storybook/react';
import { GridSystemPreview } from './GridSystemPreview';

const meta: Meta<typeof GridSystemPreview> = {
  title: 'Widgets/DSM/GridSystemPreview',
  component: GridSystemPreview,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: 'Grid system visualization showing columns, gutters, and margins for responsive breakpoints.',
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof GridSystemPreview>;

export const Desktop: Story = {
  args: { device: 'Desktop', columns: 12, gutter: '24px', margin: '32px' },
};

export const Tablet: Story = {
  args: { device: 'Tablet', columns: 8, gutter: '16px', margin: '24px' },
};

export const Mobile: Story = {
  args: { device: 'Mobile', columns: 4, gutter: '16px', margin: '16px' },
};

export const AllBreakpoints: Story = {
  name: 'All Breakpoints',
  render: () => (
    <div className="space-y-6">
      <GridSystemPreview device="Desktop (1280px+)" columns={12} gutter="24px" margin="32px" />
      <GridSystemPreview device="Tablet (768px)" columns={8} gutter="16px" margin="24px" />
      <GridSystemPreview device="Mobile (375px)" columns={4} gutter="16px" margin="16px" />
    </div>
  ),
};
