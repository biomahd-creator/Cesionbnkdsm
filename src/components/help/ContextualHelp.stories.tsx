import type { Meta, StoryObj } from '@storybook/react';
import { ContextualHelp } from './ContextualHelp';
import { Label } from '../ui/label';
import { Input } from '../ui/input';

const meta: Meta<typeof ContextualHelp> = {
  title: 'Help/ContextualHelp',
  component: ContextualHelp,
  tags: ['autodocs'],
  argTypes: {
    iconSize: { control: 'select', options: ['sm', 'md', 'lg'] },
    tooltipOnly: { control: 'boolean' },
    popoverOnly: { control: 'boolean' },
  },
  parameters: {
    docs: {
      description: {
        component:
          'Inline contextual help with two modes: tooltip (quick help on hover) and popover (detailed help on click). Can use both simultaneously, tooltip-only, or popover-only.',
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof ContextualHelp>;

export const Default: Story = {
  args: {
    quickHelp: 'El CUFE es el Codigo Unico de Facturacion Electronica asignado por la DIAN.',
    detailedHelp: 'El CUFE (Codigo Unico de Facturacion Electronica) es un identificador unico asignado por la DIAN a cada factura electronica en Colombia. Se compone de 96 caracteres alfanumericos y es necesario para la validacion de facturas en operaciones de factoring.',
    title: 'Que es el CUFE?',
  },
};

export const TooltipOnly: Story = {
  name: 'Tooltip Only',
  args: {
    quickHelp: 'Ingrese el NIT sin puntos ni guiones.',
    tooltipOnly: true,
  },
};

export const PopoverOnly: Story = {
  name: 'Popover Only',
  args: {
    detailedHelp: 'La tasa de descuento es el porcentaje mensual aplicado al valor de la factura para calcular la comision de factoring. Se expresa en terminos mensuales y varia segun el perfil de riesgo del pagador.',
    title: 'Tasa de Descuento',
    popoverOnly: true,
  },
};

export const InFormField: Story = {
  name: 'In Form Field',
  render: () => (
    <div className="space-y-4 max-w-sm">
      <div className="space-y-1.5">
        <div className="flex items-center gap-1.5">
          <Label htmlFor="cufe">CUFE</Label>
          <ContextualHelp
            quickHelp="Codigo Unico de Facturacion Electronica"
            detailedHelp="El CUFE se encuentra en el XML de la factura electronica o en el portal de la DIAN. Tiene 96 caracteres alfanumericos."
            title="CUFE"
          />
        </div>
        <Input id="cufe" placeholder="Ingrese el CUFE de la factura" />
      </div>
      <div className="space-y-1.5">
        <div className="flex items-center gap-1.5">
          <Label htmlFor="rate">Tasa mensual (%)</Label>
          <ContextualHelp
            quickHelp="Tasa de descuento mensual"
            tooltipOnly
          />
        </div>
        <Input id="rate" type="number" placeholder="1.5" />
      </div>
    </div>
  ),
};
