import type { Meta, StoryObj } from '@storybook/react';
import { ColorPresetButton } from './ColorPresetButton';
import { useState } from 'react';

const meta: Meta<typeof ColorPresetButton> = {
  title: 'Widgets/DSM/ColorPresetButton',
  component: ColorPresetButton,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: 'Selectable color preset button. Maps hex values to Tailwind classes. Shows selection ring when active. DSM exception: uses hardcoded hex-to-class mapping.',
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof ColorPresetButton>;

export const Default: Story = {
  args: { color: '#84cc16', isSelected: false, onClick: () => {} },
};

export const Selected: Story = {
  args: { color: '#84cc16', isSelected: true, onClick: () => {} },
};

export const Palette: Story = {
  name: 'Color Palette Picker',
  render: () => {
    const [selected, setSelected] = useState('#84cc16');
    const colors = ['#84cc16', '#1C2D3A', '#ef4444', '#f59e0b', '#10b981', '#3b82f6', '#8b5cf6', '#ec4899', '#000000', '#6b7280'];
    return (
      <div className="flex flex-wrap gap-2">
        {colors.map((c) => (
          <ColorPresetButton key={c} color={c} isSelected={selected === c} onClick={() => setSelected(c)} />
        ))}
      </div>
    );
  },
};
