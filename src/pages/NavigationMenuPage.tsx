import { ComponentShowcase } from "../components/ui/component-showcase";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "../components/ui/navigation-menu";
import { cn } from "../lib/utils";
import * as React from "react";

const components: { title: string; href: string; description: string }[] = [
  {
    title: "Alert Dialog",
    href: "#",
    description: "Modal dialog para confirmaciones importantes.",
  },
  {
    title: "Hover Card",
    href: "#",
    description: "Preview de contenido al hacer hover sobre un elemento.",
  },
  {
    title: "Progress",
    href: "#",
    description: "Barra de progreso para indicar estado de carga.",
  },
  {
    title: "Scroll Area",
    href: "#",
    description: "Área con scroll personalizado y estilizado.",
  },
  {
    title: "Tabs",
    href: "#",
    description: "Organiza contenido en pestañas navegables.",
  },
  {
    title: "Tooltip",
    href: "#",
    description: "Popup con información adicional sobre un elemento.",
  },
];

export function NavigationMenuPage() {
  return (
    <ComponentShowcase
      title="Navigation Menu"
      description="Colección de links para navegación de sitios web. Construye menús complejos con NavigationMenu, NavigationMenuList e items con contenido expandible."
      category="Navigation"
      
      // Main Preview
      preview={
        <NavigationMenu>
          <NavigationMenuList>
            <NavigationMenuItem>
              <NavigationMenuTrigger>Getting started</NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
                  <li className="row-span-3">
                    <NavigationMenuLink asChild>
                      <a
                        className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                        href="#"
                        onClick={(e: React.MouseEvent) => e.preventDefault()}
                      >
                        <div className="mb-2 mt-4 text-lg font-medium">
                          shadcn/ui
                        </div>
                        <p className="text-sm leading-tight text-muted-foreground">
                          Beautifully designed components built with Radix UI and Tailwind CSS.
                        </p>
                      </a>
                    </NavigationMenuLink>
                  </li>
                  <ListItem href="#" title="Introduction">
                    Re-usable components built using Radix UI and Tailwind CSS.
                  </ListItem>
                  <ListItem href="#" title="Installation">
                    How to install dependencies and structure your app.
                  </ListItem>
                  <ListItem href="#" title="Typography">
                    Styles for headings, paragraphs, lists...etc
                  </ListItem>
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuTrigger>Components</NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                  {components.map((component) => (
                    <ListItem
                      key={component.title}
                      title={component.title}
                      href={component.href}
                    >
                      {component.description}
                    </ListItem>
                  ))}
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink className={navigationMenuTriggerStyle()} href="#">
                Documentation
              </NavigationMenuLink>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
      }
      
      // Main Code
      code={`import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu"

export function NavigationMenuDemo() {
  return (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Item One</NavigationMenuTrigger>
          <NavigationMenuContent>
            <NavigationMenuLink>Link</NavigationMenuLink>
          </NavigationMenuContent>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  )
}`}
      
      // Props Documentation
      props={[
        { name: "children", type: "ReactNode", description: "NavigationMenuList y sus items.", required: true },
        { name: "className", type: "string", description: "Clases adicionales para el contenedor raíz." },
        { name: "viewport", type: "boolean", default: "true", description: "Muestra el viewport animado para el contenido desplegable." },
        { name: "defaultValue", type: "string", description: "Valor del item activo por defecto." },
        { name: "value", type: "string", description: "Valor controlado del item activo." },
        { name: "onValueChange", type: "(value: string) => void", description: "Callback al cambiar el item activo." },
        { name: "delayDuration", type: "number", default: "200", description: "Delay en ms antes de abrir un menú al hacer hover." },
        { name: "dir", type: "\"ltr\" | \"rtl\"", description: "Dirección de lectura." },
      ]}
      
      // Examples
      examples={[
        {
          title: "Simple Links",
          description: "Basic navigation links without dropdowns.",
          preview: (
            <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <NavigationMenuLink className={navigationMenuTriggerStyle()} href="#">
                    Home
                  </NavigationMenuLink>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <NavigationMenuLink className={navigationMenuTriggerStyle()} href="#">
                    About
                  </NavigationMenuLink>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <NavigationMenuLink className={navigationMenuTriggerStyle()} href="#">
                    Contact
                  </NavigationMenuLink>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
          ),
          code: `<NavigationMenu>
  <NavigationMenuList>
    <NavigationMenuItem>
      <NavigationMenuLink>Home</NavigationMenuLink>
    </NavigationMenuItem>
    {/* ... */}
  </NavigationMenuList>
</NavigationMenu>`
        }
      ]}
    />
  );
}

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";