import type { Meta, StoryObj } from '@storybook/react';
import { Alert, AlertDescription, AlertTitle } from './alert';
import { Terminal, AlertCircle, CheckCircle, AlertTriangle, Info, ShieldAlert } from 'lucide-react';

const meta: Meta<typeof Alert> = {
  title: 'UI/Alert',
  component: Alert,
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['default', 'destructive', 'success', 'warning', 'info'],
      description: 'Semantic alert variant. Uses tinted background + colored border in both modes.',
    },
  },
  parameters: {
    docs: {
      description: {
        component:
          'Alert component with **5 semantic variants**. Each variant uses explicit Tailwind colors with `dark:` overrides. Includes `AlertTitle` and `AlertDescription` sub-components with automatic grid layout when an SVG icon is present.',
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof Alert>;

/* ════════════════════════════════════════════
   INDIVIDUAL VARIANTS
   ════════════════════════════════════════════ */

export const Default: Story = {
  render: () => (
    <Alert>
      <Terminal className="h-4 w-4" />
      <AlertTitle>Aviso</AlertTitle>
      <AlertDescription>
        Puedes agregar componentes a tu aplicacion usando el CLI.
      </AlertDescription>
    </Alert>
  ),
};

export const Destructive: Story = {
  render: () => (
    <Alert variant="destructive">
      <AlertCircle className="h-4 w-4" />
      <AlertTitle>Error</AlertTitle>
      <AlertDescription>
        Tu sesion ha expirado. Por favor inicia sesion nuevamente.
      </AlertDescription>
    </Alert>
  ),
};

export const Success: Story = {
  render: () => (
    <Alert variant="success">
      <CheckCircle className="h-4 w-4" />
      <AlertTitle>Operacion exitosa</AlertTitle>
      <AlertDescription>
        La operacion de factoring ha sido aprobada y procesada correctamente.
      </AlertDescription>
    </Alert>
  ),
};

export const Warning: Story = {
  render: () => (
    <Alert variant="warning">
      <AlertTriangle className="h-4 w-4" />
      <AlertTitle>Atencion</AlertTitle>
      <AlertDescription>
        El cupo disponible esta por debajo del 20%. Considere solicitar una ampliacion.
      </AlertDescription>
    </Alert>
  ),
};

export const InfoVariant: Story = {
  name: 'Info',
  render: () => (
    <Alert variant="info">
      <Info className="h-4 w-4" />
      <AlertTitle>Informacion</AlertTitle>
      <AlertDescription>
        Las tasas de descuento se actualizaran automaticamente el primer dia habil del mes.
      </AlertDescription>
    </Alert>
  ),
};

/* ════════════════════════════════════════════
   WITHOUT ICON
   ════════════════════════════════════════════ */

export const WithoutIcon: Story = {
  name: 'Without Icon',
  render: () => (
    <Alert variant="info">
      <AlertTitle>Sin icono</AlertTitle>
      <AlertDescription>
        El alert ajusta su grid automaticamente cuando no se proporciona un icono SVG.
      </AlertDescription>
    </Alert>
  ),
};

/* ════════════════════════════════════════════
   DESCRIPTION ONLY (no title)
   ════════════════════════════════════════════ */

export const DescriptionOnly: Story = {
  name: 'Description Only',
  render: () => (
    <Alert variant="warning">
      <AlertTriangle className="h-4 w-4" />
      <AlertDescription>
        Esta accion no se puede deshacer.
      </AlertDescription>
    </Alert>
  ),
};

/* ════════════════════════════════════════════
   SHOWCASE: All Variants
   ════════════════════════════════════════════ */

export const AllVariantsShowcase: Story = {
  name: 'All Variants Showcase',
  render: () => (
    <div className="space-y-4 max-w-2xl">
      <Alert>
        <Terminal className="h-4 w-4" />
        <AlertTitle>Default</AlertTitle>
        <AlertDescription>
          Mensaje informativo general sin connotacion semantica.
        </AlertDescription>
      </Alert>

      <Alert variant="destructive">
        <ShieldAlert className="h-4 w-4" />
        <AlertTitle>Destructive / Error</AlertTitle>
        <AlertDescription>
          Ha ocurrido un error al procesar la solicitud. Intente nuevamente.
        </AlertDescription>
      </Alert>

      <Alert variant="success">
        <CheckCircle className="h-4 w-4" />
        <AlertTitle>Success</AlertTitle>
        <AlertDescription>
          La operacion fue completada exitosamente.
        </AlertDescription>
      </Alert>

      <Alert variant="warning">
        <AlertTriangle className="h-4 w-4" />
        <AlertTitle>Warning</AlertTitle>
        <AlertDescription>
          Algunos documentos requieren revision antes de continuar.
        </AlertDescription>
      </Alert>

      <Alert variant="info">
        <Info className="h-4 w-4" />
        <AlertTitle>Info</AlertTitle>
        <AlertDescription>
          El proceso de verificacion puede tomar hasta 24 horas habiles.
        </AlertDescription>
      </Alert>
    </div>
  ),
};

/* ════════════════════════════════════════════
   REAL-WORLD: Factoring Notifications
   ════════════════════════════════════════════ */

export const FactoringNotifications: Story = {
  name: 'Real World: Factoring Alerts',
  render: () => (
    <div className="space-y-3 max-w-2xl">
      <Alert variant="success">
        <CheckCircle className="h-4 w-4" />
        <AlertTitle>Operacion #OP-2024-0847 aprobada</AlertTitle>
        <AlertDescription>
          Se han desembolsado $45,200,000 COP a la cuenta principal. El comprobante esta disponible para descarga.
        </AlertDescription>
      </Alert>

      <Alert variant="warning">
        <AlertTriangle className="h-4 w-4" />
        <AlertTitle>Cupo proximo a limite</AlertTitle>
        <AlertDescription>
          Su cupo de factoring tiene un 15% de disponibilidad ($12,500,000 COP restantes). Contacte a su ejecutivo para solicitar ampliacion.
        </AlertDescription>
      </Alert>

      <Alert variant="info">
        <Info className="h-4 w-4" />
        <AlertTitle>Nuevas tasas vigentes</AlertTitle>
        <AlertDescription>
          Las tasas de descuento han sido actualizadas para febrero 2026. Revise el modulo de tasas para ver los nuevos valores.
        </AlertDescription>
      </Alert>
    </div>
  ),
};
