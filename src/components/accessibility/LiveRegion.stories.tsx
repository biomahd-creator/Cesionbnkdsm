import type { Meta, StoryObj } from '@storybook/react';
import { LiveRegion } from './LiveRegion';
import { useState } from 'react';
import { Button } from '../ui/button';

const meta: Meta<typeof LiveRegion> = {
  title: 'Accessibility/LiveRegion',
  component: LiveRegion,
  tags: ['autodocs'],
  argTypes: {
    politeness: { control: 'select', options: ['polite', 'assertive'] },
    clearDelay: { control: { type: 'number', min: 1000, max: 10000, step: 500 } },
  },
  parameters: {
    docs: {
      description: {
        component:
          'ARIA live region for screen reader announcements. `polite` waits for idle, `assertive` interrupts immediately. Message auto-clears after configurable delay. Visually hidden (sr-only).',
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof LiveRegion>;

export const Polite: Story = {
  args: { message: 'Se cargaron 12 facturas exitosamente.', politeness: 'polite', clearDelay: 3000 },
};

export const Assertive: Story = {
  args: { message: 'Error: No se pudo guardar la operacion.', politeness: 'assertive', clearDelay: 5000 },
};

export const Interactive: Story = {
  name: 'Interactive Demo',
  render: () => {
    const [message, setMessage] = useState('');
    const announcements = [
      'Factura FAC-001 aprobada exitosamente.',
      'Se seleccionaron 5 facturas.',
      'Operacion guardada como borrador.',
      'Error: Cupo insuficiente para esta operacion.',
    ];
    return (
      <div className="space-y-4 max-w-md">
        <p className="text-sm text-muted-foreground">
          El LiveRegion es invisible (sr-only). Los lectores de pantalla anunciaran el mensaje.
          Abre DevTools y busca el elemento con <code>role="status"</code>.
        </p>
        <div className="flex flex-wrap gap-2">
          {announcements.map((msg, i) => (
            <Button key={i} size="sm" variant="outline" onClick={() => setMessage(msg)}>
              Anunciar {i + 1}
            </Button>
          ))}
        </div>
        <LiveRegion message={message} politeness="polite" />
        {message && (
          <p className="text-xs text-muted-foreground bg-muted p-2 rounded">
            Ultimo anuncio: "{message}"
          </p>
        )}
      </div>
    );
  },
};
