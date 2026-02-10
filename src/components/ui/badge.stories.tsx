import type { Meta, StoryObj } from '@storybook/react';
import { Badge } from './badge';
import { Check, AlertTriangle, Info, ShieldAlert, Clock, Star, Zap } from 'lucide-react';

const meta: Meta<typeof Badge> = {
  title: 'UI/Badge',
  component: Badge,
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: [
        'default', 'secondary', 'outline', 'neutral',
        'destructive', 'success', 'warning', 'info',
        'destructive-outline', 'success-outline', 'warning-outline', 'info-outline',
        'destructive-soft', 'success-soft', 'warning-soft', 'info-soft',
        'destructive-soft-outline', 'success-soft-outline', 'warning-soft-outline', 'info-soft-outline',
      ],
      description: 'Visual variant of the badge. 20 variants organized in 5 groups.',
    },
    children: {
      control: 'text',
      description: 'Badge content (text, icons, or both)',
    },
    asChild: {
      control: 'boolean',
      description: 'Render as child element using Radix Slot',
    },
  },
  parameters: {
    docs: {
      description: {
        component:
          'Badge component with **20 variants** organized in 5 visual groups: Base (4), Semantic Solid (4), Semantic Outline (4), Semantic Soft (4), and Semantic Soft-Outline (4). Inside tables, badges automatically adopt outline styling via `[data-slot="badge"]` CSS rule.',
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof Badge>;

/* ════════════════════════════════════════════
   BASE VARIANTS
   ════════════════════════════════════════════ */

export const Default: Story = {
  args: { children: 'Default', variant: 'default' },
};

export const Secondary: Story = {
  args: { children: 'Secondary', variant: 'secondary' },
};

export const Outline: Story = {
  args: { children: 'Outline', variant: 'outline' },
};

export const Neutral: Story = {
  args: { children: 'Neutral', variant: 'neutral' },
};

/* ════════════════════════════════════════════
   SEMANTIC SOLID
   ════════════════════════════════════════════ */

export const Destructive: Story = {
  args: { children: 'Destructive', variant: 'destructive' },
};

export const Success: Story = {
  args: { children: 'Success', variant: 'success' },
};

export const Warning: Story = {
  args: { children: 'Warning', variant: 'warning' },
};

export const Info: Story = {
  args: { children: 'Info', variant: 'info' },
};

/* ════════════════════════════════════════════
   SEMANTIC OUTLINE
   ════════════════════════════════════════════ */

export const DestructiveOutline: Story = {
  args: { children: 'Destructive', variant: 'destructive-outline' },
};

export const SuccessOutline: Story = {
  args: { children: 'Success', variant: 'success-outline' },
};

export const WarningOutline: Story = {
  args: { children: 'Warning', variant: 'warning-outline' },
};

export const InfoOutline: Story = {
  args: { children: 'Info', variant: 'info-outline' },
};

/* ════════════════════════════════════════════
   SEMANTIC SOFT
   ════════════════════════════════════════════ */

export const DestructiveSoft: Story = {
  args: { children: 'Destructive', variant: 'destructive-soft' },
};

export const SuccessSoft: Story = {
  args: { children: 'Success', variant: 'success-soft' },
};

export const WarningSoft: Story = {
  args: { children: 'Warning', variant: 'warning-soft' },
};

export const InfoSoft: Story = {
  args: { children: 'Info', variant: 'info-soft' },
};

/* ════════════════════════════════════════════
   SEMANTIC SOFT-OUTLINE  (recommended for tables)
   ════════════════════════════════════════════ */

export const DestructiveSoftOutline: Story = {
  args: { children: 'Destructive', variant: 'destructive-soft-outline' },
};

export const SuccessSoftOutline: Story = {
  args: { children: 'Success', variant: 'success-soft-outline' },
};

export const WarningSoftOutline: Story = {
  args: { children: 'Warning', variant: 'warning-soft-outline' },
};

export const InfoSoftOutline: Story = {
  args: { children: 'Info', variant: 'info-soft-outline' },
};

/* ════════════════════════════════════════════
   WITH ICONS
   ════════════════════════════════════════════ */

export const WithIcon: Story = {
  name: 'With Icon',
  render: () => (
    <div className="flex flex-wrap gap-2">
      <Badge variant="success"><Check /> Aprobado</Badge>
      <Badge variant="warning"><AlertTriangle /> Pendiente</Badge>
      <Badge variant="destructive"><ShieldAlert /> Rechazado</Badge>
      <Badge variant="info"><Info /> En Proceso</Badge>
      <Badge variant="default"><Star /> Destacado</Badge>
      <Badge variant="neutral"><Clock /> En espera</Badge>
    </div>
  ),
};

export const WithIconSoftOutline: Story = {
  name: 'With Icon (Soft Outline)',
  render: () => (
    <div className="flex flex-wrap gap-2">
      <Badge variant="success-soft-outline"><Check /> Aprobado</Badge>
      <Badge variant="warning-soft-outline"><AlertTriangle /> Pendiente</Badge>
      <Badge variant="destructive-soft-outline"><ShieldAlert /> Rechazado</Badge>
      <Badge variant="info-soft-outline"><Info /> En Proceso</Badge>
    </div>
  ),
};

/* ════════════════════════════════════════════
   SHOWCASE: All Variant Groups
   ════════════════════════════════════════════ */

export const AllVariantsShowcase: Story = {
  name: 'All Variants Showcase',
  render: () => (
    <div className="space-y-6">
      {/* Base */}
      <div>
        <p className="text-muted-foreground mb-2 text-sm">Base Variants</p>
        <div className="flex flex-wrap gap-2">
          <Badge variant="default">Default</Badge>
          <Badge variant="secondary">Secondary</Badge>
          <Badge variant="outline">Outline</Badge>
          <Badge variant="neutral">Neutral</Badge>
        </div>
      </div>

      {/* Semantic Solid */}
      <div>
        <p className="text-muted-foreground mb-2 text-sm">Semantic Solid</p>
        <div className="flex flex-wrap gap-2">
          <Badge variant="destructive">Destructive</Badge>
          <Badge variant="success">Success</Badge>
          <Badge variant="warning">Warning</Badge>
          <Badge variant="info">Info</Badge>
        </div>
      </div>

      {/* Semantic Outline */}
      <div>
        <p className="text-muted-foreground mb-2 text-sm">Semantic Outline</p>
        <div className="flex flex-wrap gap-2">
          <Badge variant="destructive-outline">Destructive</Badge>
          <Badge variant="success-outline">Success</Badge>
          <Badge variant="warning-outline">Warning</Badge>
          <Badge variant="info-outline">Info</Badge>
        </div>
      </div>

      {/* Semantic Soft */}
      <div>
        <p className="text-muted-foreground mb-2 text-sm">Semantic Soft</p>
        <div className="flex flex-wrap gap-2">
          <Badge variant="destructive-soft">Destructive</Badge>
          <Badge variant="success-soft">Success</Badge>
          <Badge variant="warning-soft">Warning</Badge>
          <Badge variant="info-soft">Info</Badge>
        </div>
      </div>

      {/* Semantic Soft-Outline */}
      <div>
        <p className="text-muted-foreground mb-2 text-sm">Semantic Soft-Outline (Factoring Tables)</p>
        <div className="flex flex-wrap gap-2">
          <Badge variant="destructive-soft-outline">Destructive</Badge>
          <Badge variant="success-soft-outline">Success</Badge>
          <Badge variant="warning-soft-outline">Warning</Badge>
          <Badge variant="info-soft-outline">Info</Badge>
        </div>
      </div>
    </div>
  ),
};

/* ════════════════════════════════════════════
   REAL-WORLD: Factoring Status Badges
   ════════════════════════════════════════════ */

export const FactoringStatusBadges: Story = {
  name: 'Real World: Factoring Statuses',
  render: () => (
    <div className="space-y-4">
      <p className="text-muted-foreground text-sm">
        Badges as they appear in the Factoring module invoice tables.
      </p>
      <div className="flex flex-wrap gap-2">
        <Badge variant="success-soft-outline"><Check /> Aprobada</Badge>
        <Badge variant="warning-soft-outline"><Clock /> En Validacion</Badge>
        <Badge variant="info-soft-outline"><Zap /> En Proceso</Badge>
        <Badge variant="destructive-soft-outline"><ShieldAlert /> Rechazada</Badge>
        <Badge variant="neutral">Descartada</Badge>
      </div>
    </div>
  ),
};

/* ════════════════════════════════════════════
   AS LINK
   ════════════════════════════════════════════ */

export const AsLink: Story = {
  name: 'As Link (asChild)',
  render: () => (
    <div className="flex gap-2">
      <Badge asChild variant="default">
        <a href="#">Clickable</a>
      </Badge>
      <Badge asChild variant="info-outline">
        <a href="#">Ver detalles</a>
      </Badge>
      <Badge asChild variant="success-soft">
        <a href="#">Ir a operacion</a>
      </Badge>
    </div>
  ),
};
