import type { Meta, StoryObj } from '@storybook/react';
import { CFinanciaNavbar } from './CFinanciaNavbar';

const meta: Meta<typeof CFinanciaNavbar> = {
  title: 'Factoring/C-Financia/CFinanciaNavbar',
  component: CFinanciaNavbar,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
    backgrounds: { default: 'DSM Dark' },
    docs: {
      description: {
        component:
          'C-Financia branded navbar with SVG logo, nav items (Factoring/Radian/Vinculaciones), dropdown menus, and user profile. Uses --cfinancia-* RGB tokens. Variants: "simple" (logo only) and "full" (logo + nav + user).',
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof CFinanciaNavbar>;

export const Full: Story = {
  args: { variant: 'full', onLogout: () => console.log('Logout') },
  decorators: [(Story) => <div className="pt-20"><Story /></div>],
};

export const Simple: Story = {
  args: { variant: 'simple' },
  decorators: [(Story) => <div className="pt-20"><Story /></div>],
};
