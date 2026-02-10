import type { Meta, StoryObj } from '@storybook/react';
import { MasonryGrid } from './MasonryGrid';
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';

const meta: Meta<typeof MasonryGrid> = {
  title: 'Advanced/MasonryGrid',
  component: MasonryGrid,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component:
          'Responsive Masonry grid layout using react-responsive-masonry. Auto-adjusts columns based on viewport breakpoints (350→1, 750→2, 900→3 by default). Great for dashboards and card layouts.',
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof MasonryGrid>;

const cardData = [
  { title: 'Facturas Aprobadas', content: '145 facturas por $2,345M COP' },
  { title: 'Operaciones en Proceso', content: '12 operaciones activas con 3 pagadores. Plazo promedio: 45 dias. Tasa promedio: 1.2% mensual.' },
  { title: 'Cupo Disponible', content: '$75M COP' },
  { title: 'Tasa Promedio', content: '1.2% mensual para operaciones con recurso. Spread: 0.3%.' },
  { title: 'Pagadores Activos', content: '7 pagadores con cupo vigente' },
  { title: 'Documentos Pendientes', content: '3 pagares y 1 carta de endoso por firmar. Fecha limite: 15 Feb 2026.' },
];

export const Default: Story = {
  render: () => (
    <MasonryGrid>
      {cardData.map((item, i) => (
        <Card key={i}>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm">{item.title}</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground">{item.content}</p>
          </CardContent>
        </Card>
      ))}
    </MasonryGrid>
  ),
};

export const TwoColumnBreakpoints: Story = {
  name: 'Custom Breakpoints (max 2 cols)',
  render: () => (
    <MasonryGrid columnsCountBreakPoints={{ 350: 1, 600: 2 }}>
      {cardData.map((item, i) => (
        <Card key={i}>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm">{item.title}</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground">{item.content}</p>
          </CardContent>
        </Card>
      ))}
    </MasonryGrid>
  ),
};

export const CustomGutter: Story = {
  name: 'Tight Gutter (8px)',
  render: () => (
    <MasonryGrid gutter="8px">
      {cardData.map((item, i) => (
        <Card key={i}>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm">{item.title}</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground">{item.content}</p>
          </CardContent>
        </Card>
      ))}
    </MasonryGrid>
  ),
};
