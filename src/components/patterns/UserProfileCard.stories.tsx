import type { Meta, StoryObj } from '@storybook/react';
import { UserProfileCard, type UserProfile } from './UserProfileCard';

const meta: Meta<typeof UserProfileCard> = {
  title: 'Patterns/UserProfileCard',
  component: UserProfileCard,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component:
          'User profile card with avatar, status indicator, contact info, tags, and stats. Supports active/inactive/pending statuses.',
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof UserProfileCard>;

const activeUser: UserProfile = {
  name: 'Maria Gonzalez',
  role: 'Ejecutiva de Factoring',
  initials: 'MG',
  email: 'maria.gonzalez@cesionbnk.co',
  phone: '+57 300 123 4567',
  location: 'Bogota, Colombia',
  joinDate: 'Enero 2023',
  company: 'CESIONBNK',
  status: 'active',
  tags: ['Factoring', 'Comite Credito', 'Admin'],
  stats: [
    { label: 'Operaciones', value: '145' },
    { label: 'Aprobadas', value: '132' },
    { label: 'Tasa Aprob.', value: '91%' },
  ],
};

const pendingUser: UserProfile = {
  name: 'Carlos Ramirez',
  role: 'Analista Junior',
  initials: 'CR',
  email: 'carlos.ramirez@cesionbnk.co',
  status: 'pending',
  company: 'CESIONBNK',
  tags: ['Nuevo'],
};

const inactiveUser: UserProfile = {
  name: 'Pedro Silva',
  role: 'Ex-Consultor',
  initials: 'PS',
  email: 'pedro.silva@external.co',
  status: 'inactive',
  joinDate: 'Marzo 2022',
};

export const Active: Story = {
  args: {
    user: activeUser,
    className: 'max-w-sm',
    onEdit: () => console.log('Edit'),
    onMessage: () => console.log('Message'),
  },
};

export const Pending: Story = {
  args: { user: pendingUser, className: 'max-w-sm' },
};

export const Inactive: Story = {
  args: { user: inactiveUser, className: 'max-w-sm' },
};

export const AllStatuses: Story = {
  name: 'All Status Cards',
  render: () => (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      <UserProfileCard user={activeUser} />
      <UserProfileCard user={pendingUser} />
      <UserProfileCard user={inactiveUser} />
    </div>
  ),
};
