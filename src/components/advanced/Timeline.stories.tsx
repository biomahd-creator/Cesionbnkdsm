import type { Meta, StoryObj } from '@storybook/react';
import {
  Timeline, TimelineItem, TimelineConnector, TimelineIcon,
  TimelineContent, TimelineHeader, TimelineTitle, TimelineDescription, TimelineTime,
} from './Timeline';
import { Badge } from '../ui/badge';
import { CheckCircle, Clock, FileText, Upload, UserCheck, AlertTriangle, Zap } from 'lucide-react';

const meta: Meta<typeof Timeline> = {
  title: 'Advanced/Timeline',
  component: Timeline,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component:
          'Composable Timeline with sub-components: Item, Connector, Icon, Content, Header, Title, Description, Time. Ideal for audit logs, activity feeds, and process tracking.',
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof Timeline>;

export const Default: Story = {
  render: () => (
    <Timeline className="max-w-lg">
      <TimelineItem>
        <TimelineConnector />
        <TimelineIcon className="bg-green-100 border-green-300 dark:bg-green-500/20 dark:border-green-500/40">
          <CheckCircle className="h-5 w-5 text-green-600 dark:text-green-400" />
        </TimelineIcon>
        <TimelineContent>
          <TimelineHeader>
            <TimelineTitle>Operacion aprobada</TimelineTitle>
            <TimelineTime>Hace 2 horas</TimelineTime>
          </TimelineHeader>
          <TimelineDescription>
            La operacion fue aprobada por Juan Perez. Se procedera al desembolso.
          </TimelineDescription>
        </TimelineContent>
      </TimelineItem>

      <TimelineItem>
        <TimelineConnector />
        <TimelineIcon className="bg-blue-100 border-blue-300 dark:bg-blue-500/20 dark:border-blue-500/40">
          <FileText className="h-5 w-5 text-blue-600 dark:text-blue-400" />
        </TimelineIcon>
        <TimelineContent>
          <TimelineHeader>
            <TimelineTitle>Documentos verificados</TimelineTitle>
            <TimelineTime>Hace 5 horas</TimelineTime>
          </TimelineHeader>
          <TimelineDescription>
            Se verificaron 12 facturas y todos los documentos de soporte.
          </TimelineDescription>
        </TimelineContent>
      </TimelineItem>

      <TimelineItem>
        <TimelineIcon className="bg-amber-100 border-amber-300 dark:bg-amber-500/20 dark:border-amber-500/40">
          <Upload className="h-5 w-5 text-amber-600 dark:text-amber-400" />
        </TimelineIcon>
        <TimelineContent>
          <TimelineHeader>
            <TimelineTitle>Facturas cargadas</TimelineTitle>
            <TimelineTime>Ayer</TimelineTime>
          </TimelineHeader>
          <TimelineDescription>
            Se importaron 12 facturas desde el archivo CSV por Maria Gonzalez.
          </TimelineDescription>
        </TimelineContent>
      </TimelineItem>
    </Timeline>
  ),
};

export const WithBadges: Story = {
  name: 'With Status Badges',
  render: () => (
    <Timeline className="max-w-lg">
      <TimelineItem>
        <TimelineConnector />
        <TimelineIcon className="bg-green-100 border-green-300">
          <CheckCircle className="h-5 w-5 text-green-600" />
        </TimelineIcon>
        <TimelineContent>
          <TimelineHeader>
            <TimelineTitle>Desembolso completado</TimelineTitle>
            <Badge variant="success-soft-outline">Completado</Badge>
          </TimelineHeader>
          <TimelineDescription>
            Se desembolsaron $234,500,000 COP a la cuenta principal.
          </TimelineDescription>
          <TimelineTime>08 Feb 2026, 14:30</TimelineTime>
        </TimelineContent>
      </TimelineItem>

      <TimelineItem>
        <TimelineConnector />
        <TimelineIcon>
          <Zap className="h-5 w-5 text-blue-600" />
        </TimelineIcon>
        <TimelineContent>
          <TimelineHeader>
            <TimelineTitle>En proceso de transferencia</TimelineTitle>
            <Badge variant="info-soft-outline">En Proceso</Badge>
          </TimelineHeader>
          <TimelineDescription>Transferencia bancaria iniciada.</TimelineDescription>
          <TimelineTime>08 Feb 2026, 10:15</TimelineTime>
        </TimelineContent>
      </TimelineItem>

      <TimelineItem>
        <TimelineIcon>
          <Clock className="h-5 w-5 text-muted-foreground" />
        </TimelineIcon>
        <TimelineContent>
          <TimelineHeader>
            <TimelineTitle>Operacion creada</TimelineTitle>
            <Badge variant="neutral">Inicio</Badge>
          </TimelineHeader>
          <TimelineDescription>
            Operacion #OP-2024-0847 creada por Admin.
          </TimelineDescription>
          <TimelineTime>07 Feb 2026, 09:00</TimelineTime>
        </TimelineContent>
      </TimelineItem>
    </Timeline>
  ),
};

export const FactoringAuditLog: Story = {
  name: 'Real World: Factoring Audit Log',
  render: () => (
    <Timeline className="max-w-2xl">
      {[
        { icon: CheckCircle, color: 'green', title: 'Desembolso realizado', desc: '$234,500,000 COP transferidos a cuenta Bancolombia ****4523', user: 'Sistema', time: '08 Feb 2026, 16:45', badge: { label: 'Desembolso', variant: 'success-soft-outline' as const } },
        { icon: UserCheck, color: 'green', title: 'Aprobacion final', desc: 'Operacion aprobada por el comite de credito. Sin observaciones.', user: 'Carlos Ramirez', time: '08 Feb 2026, 14:30', badge: { label: 'Aprobado', variant: 'success-soft-outline' as const } },
        { icon: AlertTriangle, color: 'amber', title: 'Observacion de compliance', desc: 'Se requirio verificacion adicional del pagador. Resuelta satisfactoriamente.', user: 'Ana Torres', time: '08 Feb 2026, 11:20', badge: { label: 'Observacion', variant: 'warning-soft-outline' as const } },
        { icon: FileText, color: 'blue', title: 'Documentos validados', desc: '12 facturas y 3 documentos de soporte verificados exitosamente.', user: 'Maria Gonzalez', time: '07 Feb 2026, 16:00', badge: { label: 'Validado', variant: 'info-soft-outline' as const } },
        { icon: Upload, color: 'blue', title: 'Facturas cargadas', desc: 'Se importaron 12 facturas desde archivo CSV (total: $234,500,000 COP).', user: 'Maria Gonzalez', time: '07 Feb 2026, 10:30', badge: { label: 'Carga', variant: 'info-soft-outline' as const } },
        { icon: Clock, color: 'gray', title: 'Operacion creada', desc: 'Operacion #OP-2024-0847 — Factoring con recurso — Grupo Exito S.A.', user: 'Admin', time: '07 Feb 2026, 09:00', badge: { label: 'Creacion', variant: 'neutral' as const } },
      ].map((item, i, arr) => (
        <TimelineItem key={i}>
          {i < arr.length - 1 && <TimelineConnector />}
          <TimelineIcon>
            <item.icon className={`h-5 w-5 text-${item.color}-600 dark:text-${item.color}-400`} />
          </TimelineIcon>
          <TimelineContent>
            <TimelineHeader>
              <TimelineTitle>{item.title}</TimelineTitle>
              <Badge variant={item.badge.variant}>{item.badge.label}</Badge>
            </TimelineHeader>
            <TimelineDescription>{item.desc}</TimelineDescription>
            <div className="flex items-center gap-2 mt-1">
              <TimelineTime>{item.time}</TimelineTime>
              <span className="text-xs text-muted-foreground">— {item.user}</span>
            </div>
          </TimelineContent>
        </TimelineItem>
      ))}
    </Timeline>
  ),
};
