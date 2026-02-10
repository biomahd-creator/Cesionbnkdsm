import type { Meta, StoryObj } from '@storybook/react';
import { ToggleButtonGroup } from './toggle-button-group';
import React from 'react';
import { LayoutGrid, List, Table2, BarChart3, PieChart, TrendingUp } from 'lucide-react';

const meta: Meta<typeof ToggleButtonGroup> = {
  title: 'UI/ToggleButtonGroup',
  component: ToggleButtonGroup,
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['default', 'primary'],
      description: 'Visual variant',
    },
  },
  parameters: {
    docs: {
      description: {
        component:
          'Segmented toggle group with check icon on active item. Two visual variants: `default` and `primary`. Commonly used in toolbars and view switchers.',
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof ToggleButtonGroup>;

export const Default: Story = {
  render: () => {
    const [value, setValue] = React.useState('grid');
    return (
      <ToggleButtonGroup
        value={value}
        onChange={setValue}
        options={[
          { value: 'grid', label: 'Grid' },
          { value: 'list', label: 'List' },
          { value: 'table', label: 'Table' },
        ]}
        className="max-w-xs"
      />
    );
  },
};

export const PrimaryVariant: Story = {
  name: 'Primary Variant',
  render: () => {
    const [value, setValue] = React.useState('all');
    return (
      <ToggleButtonGroup
        value={value}
        onChange={setValue}
        variant="primary"
        options={[
          { value: 'all', label: 'Todas' },
          { value: 'pending', label: 'Pendientes' },
          { value: 'approved', label: 'Aprobadas' },
          { value: 'rejected', label: 'Rechazadas' },
        ]}
        className="max-w-md"
      />
    );
  },
};

export const WithIcons: Story = {
  name: 'With Icons',
  render: () => {
    const [value, setValue] = React.useState('grid');
    return (
      <ToggleButtonGroup
        value={value}
        onChange={setValue}
        options={[
          { value: 'grid', label: 'Grid', icon: <LayoutGrid className="h-3.5 w-3.5" /> },
          { value: 'list', label: 'List', icon: <List className="h-3.5 w-3.5" /> },
          { value: 'table', label: 'Table', icon: <Table2 className="h-3.5 w-3.5" /> },
        ]}
        className="max-w-xs"
      />
    );
  },
};

export const ChartTypeSwitch: Story = {
  name: 'Chart Type Switcher',
  render: () => {
    const [value, setValue] = React.useState('bar');
    return (
      <ToggleButtonGroup
        value={value}
        onChange={setValue}
        variant="primary"
        options={[
          { value: 'bar', label: 'Barras', icon: <BarChart3 className="h-3.5 w-3.5" /> },
          { value: 'pie', label: 'Torta', icon: <PieChart className="h-3.5 w-3.5" /> },
          { value: 'line', label: 'Línea', icon: <TrendingUp className="h-3.5 w-3.5" /> },
        ]}
        className="max-w-sm"
      />
    );
  },
};
