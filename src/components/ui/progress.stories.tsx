import type { Meta, StoryObj } from '@storybook/react';
import { Progress } from './progress';
import React from 'react';

const meta: Meta<typeof Progress> = {
  title: 'UI/Progress',
  component: Progress,
  tags: ['autodocs'],
  argTypes: {
    value: {
      control: { type: 'range', min: 0, max: 100, step: 1 },
      description: 'Progress value (0-100)',
    },
    indicatorClassName: {
      control: 'text',
      description: 'Custom class for the indicator bar (e.g., semantic color overrides)',
    },
  },
  parameters: {
    docs: {
      description: {
        component:
          'Progress bar built on Radix UI Progress. Default uses `bg-primary`. Override indicator color via `indicatorClassName` for semantic variants.',
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof Progress>;

export const Default: Story = {
  args: { value: 60, className: 'w-full max-w-md' },
};

export const Animated: Story = {
  name: 'Animated (Incremental)',
  render: () => {
    const [progress, setProgress] = React.useState(13);
    React.useEffect(() => {
      const timer = setTimeout(() => setProgress(66), 500);
      return () => clearTimeout(timer);
    }, []);
    return <Progress value={progress} className="w-full max-w-md" />;
  },
};

export const ZeroPercent: Story = {
  name: '0%',
  args: { value: 0, className: 'w-full max-w-md' },
};

export const FiftyPercent: Story = {
  name: '50%',
  args: { value: 50, className: 'w-full max-w-md' },
};

export const Complete: Story = {
  name: '100%',
  args: { value: 100, className: 'w-full max-w-md' },
};

/* ════════════════════════════════════════════
   SEMANTIC COLORS (via indicatorClassName)
   ════════════════════════════════════════════ */

export const SemanticColors: Story = {
  name: 'Semantic Color Variants',
  render: () => (
    <div className="space-y-4 max-w-md">
      <div className="space-y-1">
        <div className="flex justify-between text-sm">
          <span>Primary (default)</span><span>75%</span>
        </div>
        <Progress value={75} />
      </div>
      <div className="space-y-1">
        <div className="flex justify-between text-sm">
          <span className="text-green-700 dark:text-green-400">Success</span><span>90%</span>
        </div>
        <Progress value={90} indicatorClassName="bg-green-600 dark:bg-green-500" />
      </div>
      <div className="space-y-1">
        <div className="flex justify-between text-sm">
          <span className="text-amber-700 dark:text-amber-400">Warning</span><span>45%</span>
        </div>
        <Progress value={45} indicatorClassName="bg-amber-500 dark:bg-amber-400" />
      </div>
      <div className="space-y-1">
        <div className="flex justify-between text-sm">
          <span className="text-red-700 dark:text-red-400">Destructive</span><span>20%</span>
        </div>
        <Progress value={20} indicatorClassName="bg-red-600 dark:bg-red-500" />
      </div>
      <div className="space-y-1">
        <div className="flex justify-between text-sm">
          <span className="text-blue-700 dark:text-blue-400">Info</span><span>60%</span>
        </div>
        <Progress value={60} indicatorClassName="bg-blue-600 dark:bg-blue-500" />
      </div>
    </div>
  ),
};

/* ════════════════════════════════════════════
   CUSTOM HEIGHTS
   ════════════════════════════════════════════ */

export const CustomHeights: Story = {
  name: 'Custom Heights',
  render: () => (
    <div className="space-y-4 max-w-md">
      <div className="space-y-1">
        <span className="text-sm text-muted-foreground">Thin (h-1)</span>
        <Progress value={70} className="h-1" />
      </div>
      <div className="space-y-1">
        <span className="text-sm text-muted-foreground">Default (h-2)</span>
        <Progress value={70} />
      </div>
      <div className="space-y-1">
        <span className="text-sm text-muted-foreground">Medium (h-3)</span>
        <Progress value={70} className="h-3" />
      </div>
      <div className="space-y-1">
        <span className="text-sm text-muted-foreground">Thick (h-4)</span>
        <Progress value={70} className="h-4" />
      </div>
    </div>
  ),
};

/* ════════════════════════════════════════════
   REAL-WORLD: Factoring Cupo Usage
   ════════════════════════════════════════════ */

export const FactoringCupoUsage: Story = {
  name: 'Real World: Factoring Cupo',
  render: () => {
    const cupoTotal = 500_000_000;
    const cupoUsed = 425_000_000;
    const pct = Math.round((cupoUsed / cupoTotal) * 100);
    const isWarning = pct > 80;
    return (
      <div className="rounded-lg border p-4 max-w-sm space-y-2">
        <div className="flex justify-between items-baseline">
          <span className="text-sm">Cupo Utilizado</span>
          <span className={`text-sm ${isWarning ? 'text-amber-600 dark:text-amber-400' : ''}`}>
            {pct}%
          </span>
        </div>
        <Progress
          value={pct}
          indicatorClassName={isWarning ? 'bg-amber-500 dark:bg-amber-400' : undefined}
        />
        <div className="flex justify-between text-xs text-muted-foreground">
          <span>${(cupoUsed / 1_000_000).toFixed(0)}M usado</span>
          <span>${(cupoTotal / 1_000_000).toFixed(0)}M total</span>
        </div>
      </div>
    );
  },
};
