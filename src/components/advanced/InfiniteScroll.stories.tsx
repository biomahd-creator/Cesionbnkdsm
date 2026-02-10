import type { Meta, StoryObj } from '@storybook/react';
import { InfiniteScroll } from './InfiniteScroll';
import { useState, useCallback } from 'react';
import { Card, CardContent } from '../ui/card';

const meta: Meta<typeof InfiniteScroll> = {
  title: 'Advanced/InfiniteScroll',
  component: InfiniteScroll,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component:
          'Infinite scroll container using IntersectionObserver. Automatically calls `loadMore` when the sentinel element enters the viewport. Shows a spinner while loading.',
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof InfiniteScroll>;

export const Default: Story = {
  render: () => {
    const [items, setItems] = useState(Array.from({ length: 20 }, (_, i) => `Factura #FAC-${String(i + 1).padStart(4, '0')}`));
    const [isLoading, setIsLoading] = useState(false);
    const [hasMore, setHasMore] = useState(true);

    const loadMore = useCallback(async () => {
      setIsLoading(true);
      await new Promise((r) => setTimeout(r, 1000));
      const currentLen = items.length;
      if (currentLen >= 60) {
        setHasMore(false);
      } else {
        setItems((prev) => [
          ...prev,
          ...Array.from({ length: 10 }, (_, i) => `Factura #FAC-${String(currentLen + i + 1).padStart(4, '0')}`),
        ]);
      }
      setIsLoading(false);
    }, [items.length]);

    return (
      <div className="max-w-md border rounded-lg h-[400px] overflow-auto">
        <InfiniteScroll loadMore={loadMore} hasMore={hasMore} isLoading={isLoading}>
          <div className="space-y-2 p-4">
            {items.map((item) => (
              <Card key={item}>
                <CardContent className="p-3">
                  <p className="text-sm">{item}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </InfiniteScroll>
        {!hasMore && (
          <p className="text-center text-sm text-muted-foreground py-4">
            No hay mas facturas.
          </p>
        )}
      </div>
    );
  },
};
