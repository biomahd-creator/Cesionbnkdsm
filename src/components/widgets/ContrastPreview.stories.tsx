import type { Meta, StoryObj } from '@storybook/react';
import { ContrastPreview } from './ContrastPreview';

const meta: Meta<typeof ContrastPreview> = {
  title: 'Widgets/DSM/ContrastPreview',
  component: ContrastPreview,
  tags: ['autodocs'],
  argTypes: {
    status: { control: 'select', options: ['AAA', 'AA', 'Fail'] },
    size: { control: 'select', options: ['sm', 'md', 'lg'] },
  },
  parameters: {
    docs: {
      description: {
        component: 'WCAG contrast ratio preview showing foreground text on background color with AAA/AA/Fail status badge.',
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof ContrastPreview>;

export const PassAAA: Story = {
  args: { foreground: 'primary-foreground', background: 'primary', ratio: '12.5:1', status: 'AAA', size: 'md' },
};

export const PassAA: Story = {
  args: { foreground: 'primary-foreground', background: 'secondary', ratio: '4.8:1', status: 'AA', size: 'md' },
};

export const Fail: Story = {
  args: { foreground: 'primary', background: 'primary', ratio: '1.2:1', status: 'Fail', size: 'md' },
};

export const ContrastMatrix: Story = {
  name: 'Contrast Matrix',
  render: () => (
    <div className="space-y-3">
      <ContrastPreview foreground="primary-foreground" background="primary" ratio="12.5:1" status="AAA" />
      <ContrastPreview foreground="secondary-foreground" background="secondary" ratio="8.2:1" status="AAA" />
      <ContrastPreview foreground="primary" background="primary" ratio="1.2:1" status="Fail" />
    </div>
  ),
};
