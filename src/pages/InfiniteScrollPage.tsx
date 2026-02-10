import { useState } from "react";
import { ComponentShowcase } from "../components/ui/component-showcase";
import { InfiniteScroll } from "../components/advanced/InfiniteScroll";

const infiniteScrollCode = `import { useState } from "react";
import { InfiniteScroll } from "@/components/advanced/InfiniteScroll";

export function InfiniteScrollDemo() {
  const [items, setItems] = useState(Array.from({ length: 20 }, (_, i) => i));
  const [isLoading, setIsLoading] = useState(false);

  const loadMore = async () => {
    if (isLoading) return;
    setIsLoading(true);
    await new Promise(resolve => setTimeout(resolve, 1000));
    setItems(prev => [...prev, ...Array.from({ length: 10 }, (_, i) => prev.length + i)]);
    setIsLoading(false);
  };

  return (
    <div className="h-[300px] overflow-auto border rounded-md p-4">
      <InfiniteScroll
        loadMore={loadMore}
        hasMore={items.length < 100}
        isLoading={isLoading}
      >
        {items.map((item) => (
          <div key={item} className="p-4 border-b mb-2 bg-muted/20 rounded">
            Item #{item}
          </div>
        ))}
      </InfiniteScroll>
    </div>
  );
}`;

export function InfiniteScrollPage() {
  const [items, setItems] = useState(Array.from({ length: 20 }, (_, i) => i));
  const [isLoading, setIsLoading] = useState(false);

  const loadMore = async () => {
    if (isLoading) return;
    setIsLoading(true);
    await new Promise(resolve => setTimeout(resolve, 1000));
    setItems(prev => [...prev, ...Array.from({ length: 10 }, (_, i) => prev.length + i)]);
    setIsLoading(false);
  };

  return (
    <ComponentShowcase
      title="Infinite Scroll"
      description="Carga automática de contenido al hacer scroll."
      category="Advanced"
      preview={
        <div className="h-[300px] overflow-auto border rounded-md p-4 min-w-[320px]">
          <InfiniteScroll
            loadMore={loadMore}
            hasMore={items.length < 100}
            isLoading={isLoading}
          >
            {items.map((item) => (
              <div key={item} className="p-4 border-b mb-2 bg-muted/20 rounded">
                Item #{item}
              </div>
            ))}
          </InfiniteScroll>
        </div>
      }
      code={infiniteScrollCode}
      props={[
        { name: "loadMore", type: "() => Promise<void>", description: "Función async que carga más datos cuando el usuario llega al final del scroll.", required: true },
        { name: "hasMore", type: "boolean", description: "Indica si hay más datos por cargar. Cuando es false, deja de observar el scroll.", required: true },
        { name: "isLoading", type: "boolean", default: "false", description: "Estado de carga. Muestra spinner mientras carga." },
        { name: "children", type: "ReactNode", description: "Contenido scrolleable (lista de items).", required: true },
        { name: "threshold", type: "number", default: "1.0", description: "Umbral de intersección (0 a 1) para disparar la carga. 1.0 = completamente visible." },
      ]}
      examples={[
        {
          title: "Carga anticipada (threshold 0.5)",
          description: "Carga datos cuando el sentinel está 50% visible.",
          preview: (
            <div className="text-center py-6 border rounded-lg">
              <p className="text-sm text-muted-foreground">Threshold bajo pre-carga antes de llegar al final.</p>
            </div>
          ),
          code: `<InfiniteScroll
  loadMore={fetchNextPage}
  hasMore={hasNextPage}
  isLoading={isFetching}
  threshold={0.5}
>
  {invoices.map((inv) => (
    <InvoiceCard key={inv.id} invoice={inv} />
  ))}
</InfiniteScroll>`,
        },
        {
          title: "Con mensaje de fin",
          description: "Muestra texto cuando no hay más datos.",
          preview: (
            <div className="text-center py-6 border rounded-lg">
              <p className="text-sm text-muted-foreground">Cuando hasMore=false, el observer se desconecta.</p>
            </div>
          ),
          code: `<div className="h-[400px] overflow-auto">
  <InfiniteScroll
    loadMore={loadMore}
    hasMore={hasMore}
    isLoading={loading}
  >
    {items.map((item) => (
      <ItemRow key={item.id} {...item} />
    ))}
  </InfiniteScroll>
  {!hasMore && (
    <p className="text-center text-muted-foreground py-4">
      No hay más resultados
    </p>
  )}
</div>`,
        },
      ]}
    />
  );
}