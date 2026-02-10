import React, { useState } from "react";
import { ComponentShowcase } from "../components/ui/component-showcase";
import { Button } from "../components/ui/button";
import { 
  Spinner, 
  PageLoader, 
  CardSkeleton, 
  TableSkeleton, 
  ButtonLoader, 
  DotLoader 
} from "../components/ui/loading-states";

const code = `import { Spinner, ButtonLoader, DotLoader, CardSkeleton, TableSkeleton } from "@/components/ui/loading-states";

export function LoadingStatesDemo() {
  return (
    <>
      <Spinner />
      <Button disabled><ButtonLoader /> Loading</Button>
      <DotLoader />
      <CardSkeleton />
      <TableSkeleton rows={3} />
    </>
  );
}`;

export function LoadingStatesPage() {
  const [showPageLoader, setShowPageLoader] = useState(false);

  return (
    <ComponentShowcase
      title="Loading States"
      description="Colección de indicadores de carga y skeletons."
      category="UI Pattern"
      preview={
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full">
          <div className="flex items-center gap-4 border p-4 rounded">
            <Spinner />
            <span>Spinner Simple</span>
          </div>
          <div className="border p-4 rounded">
            <Button onClick={() => setShowPageLoader(true)}>Probar Page Loader (3s)</Button>
            {showPageLoader && (() => {
              setTimeout(() => setShowPageLoader(false), 3000);
              return <PageLoader />;
            })()}
          </div>
          <div className="border p-4 rounded">
            <Button disabled><ButtonLoader /> Procesando</Button>
          </div>
          <div className="border p-4 rounded">
            <DotLoader />
          </div>
          <div className="md:col-span-2 border p-4 rounded space-y-4">
             <p className="text-sm font-medium text-muted-foreground">Skeletons</p>
             <CardSkeleton />
             <TableSkeleton rows={2} />
          </div>
        </div>
      }
      code={code}
      props={[
        { name: "Spinner.className", type: "string", description: "Clases adicionales para el contenedor del spinner." },
        { name: "PageLoader", type: "—", description: "Overlay de pantalla completa con spinner y texto 'Cargando'. Sin props." },
        { name: "CardSkeleton", type: "—", description: "Skeleton con forma de card (título + contenido + footer). Sin props." },
        { name: "TableSkeleton.rows", type: "number", default: "5", description: "Número de filas skeleton a mostrar en la tabla." },
        { name: "ButtonLoader", type: "—", description: "Spinner inline para colocar dentro de un Button disabled. Sin props." },
        { name: "DotLoader", type: "—", description: "Tres puntos animados con bounce. Sin props." },
      ]}
      examples={[
        {
          title: "Botón con estado de carga",
          description: "ButtonLoader dentro de un Button disabled simula procesamiento.",
          preview: (
            <div className="flex gap-4 items-center">
              <Button disabled><ButtonLoader /> Guardando...</Button>
              <Button disabled variant="outline"><ButtonLoader /> Enviando</Button>
              <Button disabled variant="secondary"><ButtonLoader /> Procesando</Button>
            </div>
          ),
          code: `<Button disabled>
  <ButtonLoader /> Guardando...
</Button>

<Button disabled variant="outline">
  <ButtonLoader /> Enviando
</Button>`,
        },
        {
          title: "Skeleton de tabla",
          description: "TableSkeleton con diferente número de filas.",
          preview: (
            <div className="space-y-6 w-full">
              <TableSkeleton rows={3} />
            </div>
          ),
          code: `{/* 3 filas */}
<TableSkeleton rows={3} />

{/* 8 filas para tablas largas */}
<TableSkeleton rows={8} />`,
        },
        {
          title: "DotLoader inline",
          description: "Indicador de carga con tres puntos animados.",
          preview: (
            <div className="flex items-center gap-2 border rounded-lg p-4">
              <span className="text-sm text-muted-foreground">Cargando datos</span>
              <DotLoader />
            </div>
          ),
          code: `<div className="flex items-center gap-2">
  <span>Cargando datos</span>
  <DotLoader />
</div>`,
        },
      ]}
    />
  );
}