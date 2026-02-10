import type { Meta, StoryObj } from '@storybook/react';
import { Rating } from './RatingComponent';
import { Label } from '../ui/label';

const meta: Meta<typeof Rating> = {
  title: 'Advanced/Rating',
  component: Rating,
  tags: ['autodocs'],
  argTypes: {
    value: { control: { type: 'number', min: 0, max: 10 } },
    max: { control: { type: 'number', min: 1, max: 10 } },
    size: { control: 'select', options: ['sm', 'md', 'lg'] },
    readonly: { control: 'boolean' },
  },
  parameters: {
    docs: {
      description: {
        component:
          'Star rating component with 3 sizes (sm, md, lg). Interactive by default, set `readonly` for display-only. Uses DSM primary color for filled stars.',
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof Rating>;

export const Default: Story = {
  args: { value: 3, max: 5, size: 'md' },
};

export const Small: Story = {
  args: { value: 4, max: 5, size: 'sm' },
};

export const Large: Story = {
  args: { value: 2, max: 5, size: 'lg' },
};

export const ReadOnly: Story = {
  args: { value: 4, max: 5, readonly: true },
};

export const TenStars: Story = {
  name: '10-Star Scale',
  args: { value: 7, max: 10, size: 'sm' },
};

export const AllSizes: Story = {
  name: 'Size Comparison',
  render: () => (
    <div className="space-y-4">
      <div className="flex items-center gap-3">
        <Label className="w-12">SM</Label>
        <Rating value={4} size="sm" readonly />
      </div>
      <div className="flex items-center gap-3">
        <Label className="w-12">MD</Label>
        <Rating value={4} size="md" readonly />
      </div>
      <div className="flex items-center gap-3">
        <Label className="w-12">LG</Label>
        <Rating value={4} size="lg" readonly />
      </div>
    </div>
  ),
};

export const WithLabel: Story = {
  name: 'With Label & Value',
  render: () => (
    <div className="space-y-1.5">
      <Label>Calificacion del servicio</Label>
      <div className="flex items-center gap-2">
        <Rating value={4} max={5} />
        <span className="text-sm text-muted-foreground">4 / 5</span>
      </div>
    </div>
  ),
};
