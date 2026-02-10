import type { Meta, StoryObj } from '@storybook/react';
import { ProductTour } from './ProductTour';
import { HelpProvider } from './HelpProvider';
import type { TourStep } from './tourSteps';

const meta: Meta<typeof ProductTour> = {
  title: 'Help/ProductTour',
  component: ProductTour,
  tags: ['autodocs'],
  decorators: [
    (Story) => (
      <HelpProvider>
        <Story />
      </HelpProvider>
    ),
  ],
  parameters: {
    docs: {
      description: {
        component:
          'Product tour using driver.js (dynamically imported). Supports auto-start on first visit, manual trigger button, and step-by-step guided walkthroughs. Tour completion saved in localStorage.',
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof ProductTour>;

const demoSteps: TourStep[] = [
  { element: '#tour-step-1', title: 'Dashboard', description: 'Aqui puedes ver un resumen de todas tus operaciones de factoring.' },
  { element: '#tour-step-2', title: 'Facturas', description: 'Carga y gestiona tus facturas desde esta seccion.' },
  { element: '#tour-step-3', title: 'Reportes', description: 'Genera reportes detallados de tus operaciones.' },
];

export const Default: Story = {
  render: () => (
    <div className="space-y-4">
      <div className="flex gap-4">
        <div id="tour-step-1" className="p-4 border rounded">Dashboard</div>
        <div id="tour-step-2" className="p-4 border rounded">Facturas</div>
        <div id="tour-step-3" className="p-4 border rounded">Reportes</div>
      </div>
      <ProductTour
        steps={demoSteps}
        tourId="storybook-demo"
        showButton
        buttonText="Iniciar Tour"
      />
    </div>
  ),
};
