import type { Meta, StoryObj } from '@storybook/react';
import { Button } from './button';
import {
  Mail, Loader2, Download, Trash2, Check, Plus, Save,
  AlertTriangle, Info, ArrowRight, ChevronRight, Settings,
} from 'lucide-react';

const meta: Meta<typeof Button> = {
  title: 'UI/Button',
  component: Button,
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: [
        'default', 'destructive', 'outline', 'secondary', 'ghost', 'link',
        'success', 'warning', 'info',
        'destructive-outline', 'success-outline', 'warning-outline', 'info-outline',
        'destructive-ghost', 'success-ghost', 'warning-ghost', 'info-ghost',
      ],
      description: 'Visual variant. 18 variants: 6 base + 3 semantic solid + 4 semantic outline + 4 semantic ghost.',
    },
    size: {
      control: 'select',
      options: ['default', 'sm', 'lg', 'icon'],
      description: 'Button size preset.',
    },
    disabled: {
      control: 'boolean',
    },
    asChild: {
      control: 'boolean',
      description: 'Render as child element using Radix Slot.',
    },
  },
  parameters: {
    docs: {
      description: {
        component:
          'Button component with **18 variants** (6 base + 12 semantic) and **4 sizes**. Semantic variants follow the DSM pattern: explicit Tailwind colors with `dark:` prefixes instead of CSS token overrides.',
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof Button>;

/* ════════════════════════════════════════════
   BASE VARIANTS
   ════════════════════════════════════════════ */

export const Default: Story = {
  args: { children: 'Button' },
};

export const Secondary: Story = {
  args: { variant: 'secondary', children: 'Secondary' },
};

export const Destructive: Story = {
  args: { variant: 'destructive', children: 'Destructive' },
};

export const Outline: Story = {
  args: { variant: 'outline', children: 'Outline' },
};

export const Ghost: Story = {
  args: { variant: 'ghost', children: 'Ghost' },
};

export const Link: Story = {
  args: { variant: 'link', children: 'Link' },
};

/* ════════════════════════════════════════════
   SEMANTIC SOLID
   ════════════════════════════════════════════ */

export const Success: Story = {
  args: { variant: 'success', children: 'Aprobar' },
};

export const Warning: Story = {
  args: { variant: 'warning', children: 'Revisar' },
};

export const InfoVariant: Story = {
  name: 'Info',
  args: { variant: 'info', children: 'Informar' },
};

/* ════════════════════════════════════════════
   SEMANTIC OUTLINE
   ════════════════════════════════════════════ */

export const DestructiveOutline: Story = {
  args: { variant: 'destructive-outline', children: 'Eliminar' },
};

export const SuccessOutline: Story = {
  args: { variant: 'success-outline', children: 'Confirmar' },
};

export const WarningOutline: Story = {
  args: { variant: 'warning-outline', children: 'Advertencia' },
};

export const InfoOutline: Story = {
  args: { variant: 'info-outline', children: 'Detalles' },
};

/* ════════════════════════════════════════════
   SEMANTIC GHOST
   ════════════════════════════════════════════ */

export const DestructiveGhost: Story = {
  args: { variant: 'destructive-ghost', children: 'Eliminar' },
};

export const SuccessGhost: Story = {
  args: { variant: 'success-ghost', children: 'Aprobar' },
};

export const WarningGhost: Story = {
  args: { variant: 'warning-ghost', children: 'Revisar' },
};

export const InfoGhost: Story = {
  args: { variant: 'info-ghost', children: 'Informar' },
};

/* ════════════════════════════════════════════
   SIZES
   ════════════════════════════════════════════ */

export const SizeSmall: Story = {
  name: 'Size: Small',
  args: { size: 'sm', children: 'Small' },
};

export const SizeDefault: Story = {
  name: 'Size: Default',
  args: { size: 'default', children: 'Default' },
};

export const SizeLarge: Story = {
  name: 'Size: Large',
  args: { size: 'lg', children: 'Large' },
};

export const SizeIcon: Story = {
  name: 'Size: Icon',
  args: { size: 'icon', children: <Settings /> },
};

/* ════════════════════════════════════════════
   WITH ICONS
   ════════════════════════════════════════════ */

export const WithIconLeft: Story = {
  name: 'With Icon (Left)',
  render: () => (
    <div className="flex flex-wrap gap-2">
      <Button><Mail /> Login with Email</Button>
      <Button variant="destructive"><Trash2 /> Eliminar</Button>
      <Button variant="success"><Check /> Aprobar</Button>
      <Button variant="outline"><Download /> Exportar</Button>
    </div>
  ),
};

export const WithIconRight: Story = {
  name: 'With Icon (Right)',
  render: () => (
    <div className="flex flex-wrap gap-2">
      <Button>Siguiente <ArrowRight /></Button>
      <Button variant="outline">Ver mas <ChevronRight /></Button>
    </div>
  ),
};

export const IconOnly: Story = {
  name: 'Icon Only (all sizes)',
  render: () => (
    <div className="flex items-center gap-2">
      <Button size="icon" variant="outline"><Settings /></Button>
      <Button size="icon" variant="default"><Plus /></Button>
      <Button size="icon" variant="destructive"><Trash2 /></Button>
      <Button size="icon" variant="ghost"><Info /></Button>
    </div>
  ),
};

/* ════════════════════════════════════════════
   STATES
   ════════════════════════════════════════════ */

export const Disabled: Story = {
  args: { children: 'Disabled', disabled: true },
};

export const Loading: Story = {
  render: () => (
    <div className="flex flex-wrap gap-2">
      <Button disabled>
        <Loader2 className="animate-spin" /> Procesando...
      </Button>
      <Button variant="secondary" disabled>
        <Loader2 className="animate-spin" /> Guardando...
      </Button>
      <Button variant="success" disabled>
        <Loader2 className="animate-spin" /> Aprobando...
      </Button>
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
          <Button variant="default">Default</Button>
          <Button variant="secondary">Secondary</Button>
          <Button variant="destructive">Destructive</Button>
          <Button variant="outline">Outline</Button>
          <Button variant="ghost">Ghost</Button>
          <Button variant="link">Link</Button>
        </div>
      </div>

      {/* Semantic Solid */}
      <div>
        <p className="text-muted-foreground mb-2 text-sm">Semantic Solid</p>
        <div className="flex flex-wrap gap-2">
          <Button variant="success"><Check /> Aprobar</Button>
          <Button variant="warning"><AlertTriangle /> Revisar</Button>
          <Button variant="info"><Info /> Informar</Button>
        </div>
      </div>

      {/* Semantic Outline */}
      <div>
        <p className="text-muted-foreground mb-2 text-sm">Semantic Outline</p>
        <div className="flex flex-wrap gap-2">
          <Button variant="destructive-outline"><Trash2 /> Eliminar</Button>
          <Button variant="success-outline"><Check /> Confirmar</Button>
          <Button variant="warning-outline"><AlertTriangle /> Advertir</Button>
          <Button variant="info-outline"><Info /> Detalles</Button>
        </div>
      </div>

      {/* Semantic Ghost */}
      <div>
        <p className="text-muted-foreground mb-2 text-sm">Semantic Ghost</p>
        <div className="flex flex-wrap gap-2">
          <Button variant="destructive-ghost"><Trash2 /> Eliminar</Button>
          <Button variant="success-ghost"><Check /> Aprobar</Button>
          <Button variant="warning-ghost"><AlertTriangle /> Revisar</Button>
          <Button variant="info-ghost"><Info /> Informar</Button>
        </div>
      </div>

      {/* Sizes */}
      <div>
        <p className="text-muted-foreground mb-2 text-sm">Sizes</p>
        <div className="flex flex-wrap items-center gap-2">
          <Button size="sm">Small</Button>
          <Button size="default">Default</Button>
          <Button size="lg">Large</Button>
          <Button size="icon"><Plus /></Button>
        </div>
      </div>
    </div>
  ),
};

/* ════════════════════════════════════════════
   REAL-WORLD: Factoring Action Bar
   ════════════════════════════════════════════ */

export const FactoringActionBar: Story = {
  name: 'Real World: Factoring Action Bar',
  render: () => (
    <div className="flex items-center gap-2 rounded-lg border p-4">
      <Button variant="success"><Check /> Aprobar Operacion</Button>
      <Button variant="warning-outline"><AlertTriangle /> Solicitar Revision</Button>
      <Button variant="destructive-ghost"><Trash2 /> Descartar</Button>
      <div className="flex-1" />
      <Button variant="outline"><Save /> Guardar Borrador</Button>
      <Button variant="info"><Download /> Exportar</Button>
    </div>
  ),
};
