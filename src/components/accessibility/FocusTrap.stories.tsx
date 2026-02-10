import type { Meta, StoryObj } from '@storybook/react';
import { FocusTrap } from './FocusTrap';
import { useState } from 'react';
import { Button } from '../ui/button';
import { Input } from '../ui/input';
import { Label } from '../ui/label';
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';

const meta: Meta<typeof FocusTrap> = {
  title: 'Accessibility/FocusTrap',
  component: FocusTrap,
  tags: ['autodocs'],
  argTypes: {
    active: { control: 'boolean' },
  },
  parameters: {
    docs: {
      description: {
        component:
          'Focus trap container that keeps Tab/Shift+Tab cycling within its children. Supports Escape key to deactivate. Essential for modals, dialogs, and drawers.',
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof FocusTrap>;

export const Default: Story = {
  render: () => {
    const [active, setActive] = useState(false);
    return (
      <div className="space-y-4">
        <Button onClick={() => setActive(true)}>Activar Focus Trap</Button>
        {active && (
          <Card className="border-primary ring-2 ring-primary/20">
            <CardHeader>
              <CardTitle className="text-sm">Focus Trap Activo</CardTitle>
            </CardHeader>
            <CardContent>
              <FocusTrap active={active} onEscape={() => setActive(false)}>
                <div className="space-y-3">
                  <div className="space-y-1.5">
                    <Label htmlFor="trap-name">Nombre</Label>
                    <Input id="trap-name" placeholder="Tab navega dentro del trap" />
                  </div>
                  <div className="space-y-1.5">
                    <Label htmlFor="trap-email">Email</Label>
                    <Input id="trap-email" type="email" placeholder="email@empresa.co" />
                  </div>
                  <div className="flex gap-2">
                    <Button size="sm">Guardar</Button>
                    <Button size="sm" variant="outline" onClick={() => setActive(false)}>
                      Cancelar (Esc)
                    </Button>
                  </div>
                </div>
              </FocusTrap>
            </CardContent>
          </Card>
        )}
        {!active && (
          <p className="text-sm text-muted-foreground">
            El focus trap no esta activo. Haz clic en el boton para activarlo.
          </p>
        )}
      </div>
    );
  },
};
