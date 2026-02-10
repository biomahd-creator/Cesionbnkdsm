import { ReactNode } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./tabs";
import { Badge } from "./badge";
import { Separator } from "./separator";
import { CodeBlock } from "./code-block";

interface ComponentShowcaseProps {
  title: string;
  description: string;
  category?: string;
  preview: ReactNode;
  code: string;
  props?: Array<{
    name: string;
    type: string;
    default?: string;
    description: string;
    required?: boolean;
  }>;
  examples?: Array<{
    title: string;
    description?: string;
    preview: ReactNode;
    code: string;
  }>;
}

export function ComponentShowcase({
  title,
  description,
  category,
  preview,
  code,
  props,
  examples,
}: ComponentShowcaseProps) {
  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <div className="flex items-center gap-3 mb-2">
          <h2 className="text-4xl font-semibold">{title}</h2>
          {category && (
            <Badge variant="outline" className="text-xs">
              {category}
            </Badge>
          )}
        </div>
        <p className="text-muted-foreground">{description}</p>
      </div>

      <Separator />

      {/* Main Preview & Code */}
      <Card>
        <CardHeader>
          <CardTitle>Preview</CardTitle>
          <CardDescription>Vista previa interactiva del componente</CardDescription>
        </CardHeader>
        <CardContent>
          <Tabs defaultValue="preview" className="w-full">
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger value="preview">Preview</TabsTrigger>
              <TabsTrigger value="code">Code</TabsTrigger>
            </TabsList>

            <TabsContent value="preview" className="space-y-4">
              <div className="flex items-center justify-center min-h-[200px] rounded-lg border bg-muted/20 p-8">
                {preview}
              </div>
            </TabsContent>

            <TabsContent value="code" className="space-y-4">
              <CodeBlock code={code} filename={`${title.toLowerCase().replace(/\s+/g, '-')}.tsx`} />
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>

      {/* Props API */}
      {props && props.length > 0 && (
        <Card>
          <CardHeader>
            <CardTitle>Props</CardTitle>
            <CardDescription>Propiedades disponibles para este componente</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-border">
                    <th className="text-left py-3 px-4 font-semibold text-sm text-foreground">Prop</th>
                    <th className="text-left py-3 px-4 font-semibold text-sm text-foreground">Type</th>
                    <th className="text-left py-3 px-4 font-semibold text-sm text-foreground">Default</th>
                    <th className="text-left py-3 px-4 font-semibold text-sm text-foreground">Description</th>
                  </tr>
                </thead>
                <tbody>
                  {props.map((prop) => (
                    <tr key={prop.name} className="border-b border-border">
                      <td className="py-3 px-4">
                        <code className="text-sm font-mono bg-secondary/10 dark:bg-secondary/20 text-foreground px-1.5 py-0.5 rounded border border-border">
                          {prop.name}
                          {prop.required && <span className="text-destructive ml-1">*</span>}
                        </code>
                      </td>
                      <td className="py-3 px-4">
                        <code className="text-sm font-mono text-muted-foreground">
                          {prop.type}
                        </code>
                      </td>
                      <td className="py-3 px-4">
                        {prop.default ? (
                          <code className="text-sm font-mono bg-secondary/10 dark:bg-secondary/20 text-foreground px-1.5 py-0.5 rounded border border-border">
                            {prop.default}
                          </code>
                        ) : (
                          <span className="text-muted-foreground">-</span>
                        )}
                      </td>
                      <td className="py-3 px-4 text-sm text-muted-foreground">
                        {prop.description}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </CardContent>
        </Card>
      )}

      {/* Examples */}
      {examples && examples.length > 0 && (
        <div className="space-y-6">
          <div>
            <h3 className="text-2xl font-semibold mb-2">Examples</h3>
            <p className="text-muted-foreground">Diferentes variaciones y casos de uso</p>
          </div>

          {examples.map((example, index) => (
            <Card key={index}>
              <CardHeader>
                <CardTitle>{example.title}</CardTitle>
                {example.description && (
                  <CardDescription>{example.description}</CardDescription>
                )}
              </CardHeader>
              <CardContent>
                <Tabs defaultValue="preview" className="w-full">
                  <TabsList className="grid w-full grid-cols-2">
                    <TabsTrigger value="preview">Preview</TabsTrigger>
                    <TabsTrigger value="code">Code</TabsTrigger>
                  </TabsList>

                  <TabsContent value="preview" className="space-y-4">
                    <div className="flex items-center justify-center min-h-[150px] rounded-lg border bg-muted/20 p-6">
                      {example.preview}
                    </div>
                  </TabsContent>

                  <TabsContent value="code" className="space-y-4">
                    <CodeBlock 
                      code={example.code} 
                      filename={`${example.title.toLowerCase().replace(/\s+/g, '-')}.tsx`} 
                    />
                  </TabsContent>
                </Tabs>
              </CardContent>
            </Card>
          ))}
        </div>
      )}
    </div>
  );
}