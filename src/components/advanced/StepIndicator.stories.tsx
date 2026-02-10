import type { Meta, StoryObj } from '@storybook/react';
import { StepIndicator, type Step } from './StepIndicator';
import { useState } from 'react';
import { Button } from '../ui/button';
import { FileText, Users, Calculator, CheckCircle, Upload } from 'lucide-react';

const meta: Meta<typeof StepIndicator> = {
  title: 'Advanced/StepIndicator',
  component: StepIndicator,
  tags: ['autodocs'],
  argTypes: {
    currentStep: { control: { type: 'number', min: 0, max: 5 } },
    orientation: { control: 'select', options: ['horizontal', 'vertical'] },
    variant: { control: 'select', options: ['default', 'compact', 'minimal'] },
    showProgress: { control: 'boolean' },
    showLabels: { control: 'boolean' },
    clickable: { control: 'boolean' },
  },
  parameters: {
    docs: {
      description: {
        component:
          'Multi-step progress indicator with 3 variants (default, compact, minimal) and 2 orientations (horizontal, vertical). Supports clickable navigation to completed steps.',
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof StepIndicator>;

const basicSteps: Step[] = [
  { id: 'info', title: 'Informacion', description: 'Datos basicos de la operacion' },
  { id: 'docs', title: 'Documentos', description: 'Carga de documentos de soporte' },
  { id: 'review', title: 'Revision', description: 'Validacion de datos' },
  { id: 'approval', title: 'Aprobacion', description: 'Aprobacion final' },
];

const factoringSteps: Step[] = [
  { id: 'upload', title: 'Cargar Facturas', icon: <Upload />, description: 'Importar archivo CSV/Excel' },
  { id: 'validate', title: 'Validacion', icon: <FileText />, description: 'Verificar CUFE y datos' },
  { id: 'payor', title: 'Pagador', icon: <Users />, description: 'Confirmar datos del pagador' },
  { id: 'rates', title: 'Tasas', icon: <Calculator />, description: 'Configurar descuento' },
  { id: 'approve', title: 'Aprobar', icon: <CheckCircle />, description: 'Aprobacion y desembolso' },
];

export const Default: Story = {
  args: { steps: basicSteps, currentStep: 1 },
};

export const Compact: Story = {
  args: { steps: basicSteps, currentStep: 2, variant: 'compact' },
};

export const Minimal: Story = {
  args: { steps: basicSteps, currentStep: 1, variant: 'minimal', className: 'max-w-md' },
};

export const Vertical: Story = {
  args: { steps: basicSteps, currentStep: 2, orientation: 'vertical', className: 'max-w-md' },
};

export const WithIcons: Story = {
  name: 'With Custom Icons',
  args: { steps: factoringSteps, currentStep: 2 },
};

export const Clickable: Story = {
  name: 'Clickable Navigation',
  render: () => {
    const [step, setStep] = useState(2);
    return (
      <div className="space-y-6 max-w-2xl">
        <StepIndicator
          steps={basicSteps}
          currentStep={step}
          clickable
          onStepClick={setStep}
        />
        <div className="flex gap-2 justify-center">
          <Button variant="outline" size="sm" onClick={() => setStep(Math.max(0, step - 1))} disabled={step === 0}>
            Anterior
          </Button>
          <Button size="sm" onClick={() => setStep(Math.min(basicSteps.length - 1, step + 1))} disabled={step === basicSteps.length - 1}>
            Siguiente
          </Button>
        </div>
        <p className="text-center text-sm text-muted-foreground">
          Paso {step + 1}: {basicSteps[step].title} — {basicSteps[step].description}
        </p>
      </div>
    );
  },
};

export const AllCompleted: Story = {
  name: 'All Steps Completed',
  args: { steps: basicSteps, currentStep: 3 },
};

export const FirstStep: Story = {
  name: 'First Step',
  args: { steps: basicSteps, currentStep: 0 },
};

export const FactoringWizard: Story = {
  name: 'Real World: Factoring Wizard',
  render: () => {
    const [step, setStep] = useState(0);
    return (
      <div className="space-y-6">
        <StepIndicator
          steps={factoringSteps}
          currentStep={step}
          clickable
          onStepClick={setStep}
        />
        <div className="rounded-lg border p-6 text-center">
          <p className="text-muted-foreground text-sm">
            Contenido del paso: <strong>{factoringSteps[step].title}</strong>
          </p>
          <p className="text-xs text-muted-foreground mt-1">{factoringSteps[step].description}</p>
        </div>
        <div className="flex gap-2 justify-end">
          <Button variant="outline" onClick={() => setStep(Math.max(0, step - 1))} disabled={step === 0}>
            Anterior
          </Button>
          <Button variant={step === factoringSteps.length - 1 ? 'success' : 'default'} onClick={() => setStep(Math.min(factoringSteps.length - 1, step + 1))}>
            {step === factoringSteps.length - 1 ? 'Aprobar Operacion' : 'Siguiente'}
          </Button>
        </div>
      </div>
    );
  },
};
