import type { Meta, StoryObj } from '@storybook/react';
import { ApprovalTimelineItem } from './TimelineItem';
import { CheckCircle, Clock, XCircle, AlertTriangle, Send } from 'lucide-react';

const meta: Meta<typeof ApprovalTimelineItem> = {
  title: 'Widgets/ApprovalTimelineItem',
  component: ApprovalTimelineItem,
  tags: ['autodocs'],
  argTypes: {
    statusVariant: { control: 'select', options: ['default', 'secondary', 'outline', 'destructive'] },
  },
  parameters: {
    docs: {
      description: {
        component: 'Single approval timeline item with icon, title, user avatar, role, timestamp, and status badge. Building block for ApprovalTimeline pattern.',
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof ApprovalTimelineItem>;

export const Approved: Story = {
  args: {
    icon: CheckCircle,
    iconColor: 'text-green-500',
    title: 'Aprobacion Final',
    user: 'Maria Gonzalez',
    role: 'Gerente Credito',
    timestamp: '08 Feb 2026, 14:30',
    status: 'Aprobado',
    statusVariant: 'default',
  },
};

export const Pending: Story = {
  args: {
    icon: Clock,
    iconColor: 'text-amber-500',
    title: 'Revision Compliance',
    user: 'Ana Torres',
    role: 'Analista',
    timestamp: '08 Feb 2026, 10:15',
    status: 'Pendiente',
    statusVariant: 'secondary',
  },
};

export const Rejected: Story = {
  args: {
    icon: XCircle,
    iconColor: 'text-red-500',
    title: 'Rechazado por Comite',
    user: 'Carlos Ramirez',
    role: 'Director',
    timestamp: '07 Feb 2026, 16:00',
    status: 'Rechazado',
    statusVariant: 'destructive',
  },
};

export const ApprovalFlow: Story = {
  name: 'Full Approval Flow',
  render: () => (
    <div className="space-y-6 max-w-lg">
      <ApprovalTimelineItem icon={CheckCircle} iconColor="text-green-500" title="Desembolso Realizado" user="Sistema" role="Automatico" timestamp="08 Feb, 16:45" status="Completado" />
      <ApprovalTimelineItem icon={CheckCircle} iconColor="text-green-500" title="Aprobacion Final" user="Maria Gonzalez" role="Gerente" timestamp="08 Feb, 14:30" status="Aprobado" />
      <ApprovalTimelineItem icon={AlertTriangle} iconColor="text-amber-500" title="Observacion Compliance" user="Ana Torres" role="Compliance" timestamp="08 Feb, 11:20" status="Resuelto" statusVariant="secondary" />
      <ApprovalTimelineItem icon={Send} iconColor="text-blue-500" title="Enviado a Comite" user="Juan Perez" role="Ejecutivo" timestamp="07 Feb, 16:00" status="Enviado" statusVariant="outline" />
    </div>
  ),
};
