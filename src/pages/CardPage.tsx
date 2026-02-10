import { ComponentShowcase } from "../components/ui/component-showcase";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "../components/ui/card";
import { Button } from "../components/ui/button";
import { Badge } from "../components/ui/badge";

export function CardPage() {
  return (
    <ComponentShowcase
      title="Card"
      description="Displays a card with header, content, and footer. Importa los componentes de Card desde @/components/ui/card."
      category="Layout"
      
      preview={
        <Card className="w-[350px]">
          <CardHeader>
            <CardTitle>Card Title</CardTitle>
            <CardDescription>Card Description</CardDescription>
          </CardHeader>
          <CardContent>
            <p>Card Content</p>
          </CardContent>
          <CardFooter>
            <Button>Action</Button>
          </CardFooter>
        </Card>
      }
      
      code={`import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export function CardDemo() {
  return (
    <Card className="w-[350px]">
      <CardHeader>
        <CardTitle>Card Title</CardTitle>
        <CardDescription>Card Description</CardDescription>
      </CardHeader>
      <CardContent>
        <p>Card Content</p>
      </CardContent>
      <CardFooter>
        <Button>Action</Button>
      </CardFooter>
    </Card>
  );
}`}
      
      props={[
        {
          name: "className",
          type: "string",
          description: "Clases CSS adicionales",
        },
      ]}
      
      examples={[
        {
          title: "With Badge",
          description: "Card con badge en el header",
          preview: (
            <Card className="w-[350px]">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle>Nueva Operación</CardTitle>
                  <Badge>Activo</Badge>
                </div>
                <CardDescription>Detalles de la operación</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm">Contenido de ejemplo</p>
              </CardContent>
            </Card>
          ),
          code: `import { Card, CardHeader, CardContent, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export function CardWithBadge() {
  return (
    <Card className="w-[350px]">
      <CardHeader>
        <div className="flex items-center justify-between">
          <CardTitle>Nueva Operación</CardTitle>
          <Badge>Activo</Badge>
        </div>
        <CardDescription>Detalles de la operación</CardDescription>
      </CardHeader>
      <CardContent>
        <p className="text-sm">Contenido de ejemplo</p>
      </CardContent>
    </Card>
  );
}`,
        },
      ]}
    />
  );
}