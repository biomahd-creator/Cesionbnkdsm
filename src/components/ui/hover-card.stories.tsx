import type { Meta, StoryObj } from '@storybook/react';
import { Avatar, AvatarFallback, AvatarImage } from './avatar';
import { Button } from './button';
import { HoverCard, HoverCardContent, HoverCardTrigger } from './hover-card';
import { CalendarDays } from 'lucide-react';

const meta: Meta<typeof HoverCard> = {
  title: 'UI/HoverCard',
  component: HoverCard,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof HoverCard>;

export const Default: Story = {
  render: () => (
    <HoverCard>
      <HoverCardTrigger asChild>
        <Button variant="link">@cesionbnk</Button>
      </HoverCardTrigger>
      <HoverCardContent className="w-80">
        <div className="flex justify-between space-x-4">
          <Avatar>
            <AvatarFallback>CB</AvatarFallback>
          </Avatar>
          <div className="space-y-1">
            <h4 className="text-sm font-semibold">@cesionbnk</h4>
            <p className="text-sm">
              Plataforma financiera de Factoring — creada y mantenida por C-Financia.
            </p>
            <div className="flex items-center pt-2">
              <CalendarDays className="mr-2 h-4 w-4 opacity-70" />
              <span className="text-xs text-muted-foreground">
                Joined January 2025
              </span>
            </div>
          </div>
        </div>
      </HoverCardContent>
    </HoverCard>
  ),
};