import type { Meta, StoryObj } from '@storybook/react';
import {
  SkeletonTable,
  SkeletonCard,
  SkeletonCardGrid,
  SkeletonForm,
  SkeletonList,
  SkeletonDashboard,
  SkeletonKpiCard,
  SkeletonKpiCardGroup,
  SkeletonProfile,
} from './skeleton-variants';

const meta: Meta = {
  title: 'UI/Skeleton Variants',
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component:
          'Pre-built skeleton patterns for common layouts: tables, cards, forms, lists, dashboards, KPI cards, and profiles. These are ready-to-use loading placeholders that match the DSM layout patterns.',
      },
    },
  },
};

export default meta;
type Story = StoryObj;

export const Table: Story = {
  render: () => <SkeletonTable rows={5} columns={4} />,
};

export const TableNoHeader: Story = {
  name: 'Table (no header)',
  render: () => <SkeletonTable rows={3} columns={3} showHeader={false} />,
};

export const CardDefault: Story = {
  name: 'Card',
  render: () => (
    <div className="max-w-sm">
      <SkeletonCard />
    </div>
  ),
};

export const CardWithImage: Story = {
  name: 'Card with Image',
  render: () => (
    <div className="max-w-sm">
      <SkeletonCard hasImage lines={2} />
    </div>
  ),
};

export const CardGrid: Story = {
  name: 'Card Grid (3 cols)',
  render: () => <SkeletonCardGrid count={6} columns={3} />,
};

export const FormSkeleton: Story = {
  name: 'Form',
  render: () => (
    <div className="max-w-md">
      <SkeletonForm fields={4} />
    </div>
  ),
};

export const ListSimple: Story = {
  name: 'List (simple)',
  render: () => (
    <div className="max-w-lg">
      <SkeletonList items={4} variant="simple" />
    </div>
  ),
};

export const ListDetailed: Story = {
  name: 'List (detailed)',
  render: () => (
    <div className="max-w-lg">
      <SkeletonList items={4} variant="detailed" />
    </div>
  ),
};

export const KpiCard: Story = {
  name: 'KPI Card',
  render: () => (
    <div className="max-w-xs">
      <SkeletonKpiCard />
    </div>
  ),
};

export const KpiCardGroupSkeleton: Story = {
  name: 'KPI Card Group (4)',
  render: () => <SkeletonKpiCardGroup count={4} />,
};

export const Profile: Story = {
  name: 'Profile',
  render: () => (
    <div className="max-w-lg">
      <SkeletonProfile />
    </div>
  ),
};

export const Dashboard: Story = {
  name: 'Full Dashboard',
  render: () => <SkeletonDashboard />,
};
