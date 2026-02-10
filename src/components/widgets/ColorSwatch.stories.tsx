import type { Meta, StoryObj } from '@storybook/react';
import { ColorSwatch } from './ColorSwatch';
import { useState } from 'react';

const meta: Meta<typeof ColorSwatch> = {
  title: 'Widgets/DSM/ColorSwatch',
  component: ColorSwatch,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: 'Color swatch card showing color name, HEX, RGB, and usage description. Includes copy-to-clipboard buttons for HEX and RGB values.',
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof ColorSwatch>;

export const Primary: Story = {
  render: () => {
    const [copied, setCopied] = useState<string | null>(null);
    const handleCopy = (text: string, id: string) => {
      navigator.clipboard?.writeText(text);
      setCopied(id);
      setTimeout(() => setCopied(null), 2000);
    };
    return (
      <div className="max-w-xs">
        <ColorSwatch
          id="primary"
          name="Primary Green"
          hex="#84cc16"
          rgb="132, 204, 22"
          usage="Botones primarios, enlaces, acentos"
          isPrimary
          copiedColor={copied}
          onCopy={handleCopy}
        />
      </div>
    );
  },
};

export const Secondary: Story = {
  render: () => {
    const [copied, setCopied] = useState<string | null>(null);
    const handleCopy = (text: string, id: string) => {
      navigator.clipboard?.writeText(text);
      setCopied(id);
      setTimeout(() => setCopied(null), 2000);
    };
    return (
      <div className="max-w-xs">
        <ColorSwatch
          id="secondary"
          name="Dark Blue"
          hex="#1C2D3A"
          rgb="28, 45, 58"
          usage="Fondos, texto principal, headers"
          copiedColor={copied}
          onCopy={handleCopy}
        />
      </div>
    );
  },
};

export const BrandPalette: Story = {
  name: 'Brand Palette',
  render: () => {
    const [copied, setCopied] = useState<string | null>(null);
    const handleCopy = (text: string, id: string) => {
      navigator.clipboard?.writeText(text);
      setCopied(id);
      setTimeout(() => setCopied(null), 2000);
    };
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <ColorSwatch id="primary" name="Primary Green" hex="#84cc16" rgb="132, 204, 22" usage="Botones primarios, enlaces, acentos" isPrimary copiedColor={copied} onCopy={handleCopy} />
        <ColorSwatch id="secondary" name="Dark Blue" hex="#1C2D3A" rgb="28, 45, 58" usage="Fondos, texto principal, headers" copiedColor={copied} onCopy={handleCopy} />
      </div>
    );
  },
};
