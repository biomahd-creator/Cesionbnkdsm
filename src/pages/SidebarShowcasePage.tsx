import React from "react";
import {
  SidebarProvider,
  Sidebar,
  SidebarContent,
  SidebarHeader,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupLabel,
  SidebarGroupContent,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
  SidebarMenuSub,
  SidebarMenuSubItem,
  SidebarMenuSubButton,
  SidebarRail,
  SidebarInset,
  SidebarTrigger,
  SidebarMenuAction,
} from "../components/ui/sidebar";
import { 
  BadgeCheck, 
  Bell, 
  BookOpen, 
  Bot, 
  ChevronRight, 
  ChevronsUpDown, 
  Command, 
  CreditCard, 
  Folder, 
  Frame, 
  LifeBuoy, 
  Map, 
  MoreHorizontal, 
  PieChart, 
  Settings2, 
  Share, 
  SquareTerminal, 
  Trash2,
  Inbox,
  Calendar,
  Search,
  PanelLeft,
  GalleryVerticalEnd,
  AudioWaveform,
  Send,
  Sparkles
} from "lucide-react";
import { Card, CardContent } from "../components/ui/card";
import { Badge } from "../components/ui/badge";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "../components/ui/collapsible";
import { Separator } from "../components/ui/separator";
import { Avatar, AvatarFallback, AvatarImage } from "../components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "../components/ui/dropdown-menu";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "../components/ui/breadcrumb";

export function SidebarShowcasePage() {
  return (
    <div className="space-y-8 w-full pb-20">
      <div>
        <div className="flex items-center gap-3 mb-2">
          <h1 className="text-2xl font-medium">Sidebar</h1>
          <Badge variant="default">New</Badge>
          <Badge variant="outline">Layout</Badge>
        </div>
        <p className="text-muted-foreground text-lg">
          Un componente de barra lateral componible, colapsable y responsivo.
        </p>
      </div>

      <Separator />

      {/* EJEMPLO 1: SIDEBAR ESTÁNDAR (LEFT) */}
      <section className="space-y-4">
        <div>
          <h2 className="text-2xl font-semibold mb-2">Sidebar Estándar</h2>
          <p className="text-muted-foreground mb-4">
            La configuración por defecto: fija a la izquierda, colapsable a icono. Incluye menú de usuario y selector de equipos.
          </p>
        </div>

        <div className="border rounded-xl overflow-hidden shadow-sm bg-background h-[500px] relative isolate">
          <SidebarProvider className="min-h-[500px]">
            <Sidebar collapsible="icon" className="absolute top-0 bottom-0 left-0 h-full border-r z-20">
              <SidebarHeader>
                <SidebarMenu>
                  <SidebarMenuItem>
                    <SidebarMenuButton size="lg" asChild>
                      <a href="#">
                        <div className="flex aspect-square size-8 items-center justify-center rounded-lg bg-sidebar-primary text-sidebar-primary-foreground">
                          <GalleryVerticalEnd className="size-4" />
                        </div>
                        <div className="grid flex-1 text-left text-sm leading-tight">
                          <span className="truncate font-semibold">Acme Inc</span>
                          <span className="truncate text-xs">Enterprise</span>
                        </div>
                        <ChevronsUpDown className="ml-auto" />
                      </a>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                </SidebarMenu>
              </SidebarHeader>
              <SidebarContent>
                <SidebarGroup>
                  <SidebarGroupLabel>Platform</SidebarGroupLabel>
                  <SidebarMenu>
                    <Collapsible defaultOpen className="group/collapsible">
                      <SidebarMenuItem>
                        <CollapsibleTrigger asChild>
                          <SidebarMenuButton tooltip="Playground">
                            <SquareTerminal />
                            <span>Playground</span>
                            <ChevronRight className="ml-auto transition-transform duration-200 group-data-[state=open]/collapsible:rotate-90" />
                          </SidebarMenuButton>
                        </CollapsibleTrigger>
                        <CollapsibleContent>
                          <SidebarMenuSub>
                            <SidebarMenuSubItem>
                              <SidebarMenuSubButton asChild><a href="#">History</a></SidebarMenuSubButton>
                            </SidebarMenuSubItem>
                            <SidebarMenuSubItem>
                              <SidebarMenuSubButton asChild><a href="#">Starred</a></SidebarMenuSubButton>
                            </SidebarMenuSubItem>
                            <SidebarMenuSubItem>
                              <SidebarMenuSubButton asChild><a href="#">Settings</a></SidebarMenuSubButton>
                            </SidebarMenuSubItem>
                          </SidebarMenuSub>
                        </CollapsibleContent>
                      </SidebarMenuItem>
                    </Collapsible>
                    <SidebarMenuItem>
                      <SidebarMenuButton tooltip="Models">
                        <Bot />
                        <span>Models</span>
                      </SidebarMenuButton>
                    </SidebarMenuItem>
                    <SidebarMenuItem>
                      <SidebarMenuButton tooltip="Documentation">
                        <BookOpen />
                        <span>Documentation</span>
                      </SidebarMenuButton>
                    </SidebarMenuItem>
                    <SidebarMenuItem>
                      <SidebarMenuButton tooltip="Settings">
                        <Settings2 />
                        <span>Settings</span>
                      </SidebarMenuButton>
                    </SidebarMenuItem>
                  </SidebarMenu>
                </SidebarGroup>
                <SidebarGroup className="group-data-[collapsible=icon]:hidden">
                  <SidebarGroupLabel>Projects</SidebarGroupLabel>
                  <SidebarMenu>
                    <SidebarMenuItem>
                      <SidebarMenuButton>
                        <Frame />
                        <span>Design Engineering</span>
                      </SidebarMenuButton>
                    </SidebarMenuItem>
                    <SidebarMenuItem>
                      <SidebarMenuButton>
                        <PieChart />
                        <span>Sales & Marketing</span>
                      </SidebarMenuButton>
                    </SidebarMenuItem>
                    <SidebarMenuItem>
                      <SidebarMenuButton>
                        <Map />
                        <span>Travel</span>
                      </SidebarMenuButton>
                    </SidebarMenuItem>
                  </SidebarMenu>
                </SidebarGroup>
              </SidebarContent>
              <SidebarFooter>
                <SidebarMenu>
                  <SidebarMenuItem>
                    <SidebarMenuButton size="lg" className="data-[state=open]:bg-sidebar-accent data-[state=open]:text-sidebar-accent-foreground">
                      <Avatar className="h-8 w-8 rounded-lg">
                        <AvatarFallback className="rounded-lg">CN</AvatarFallback>
                      </Avatar>
                      <div className="grid flex-1 text-left text-sm leading-tight">
                        <span className="truncate font-semibold">shadcn</span>
                        <span className="truncate text-xs">m@example.com</span>
                      </div>
                      <ChevronsUpDown className="ml-auto size-4" />
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                </SidebarMenu>
              </SidebarFooter>
              <SidebarRail className="hover:after:bg-border" />
            </Sidebar>
            <SidebarInset className="overflow-hidden">
              <header className="flex h-16 shrink-0 items-center gap-2 transition-[width,height] ease-linear group-has-[[data-collapsible=icon]]/sidebar-wrapper:h-12 border-b px-4">
                <div className="flex items-center gap-2">
                  <SidebarTrigger className="-ml-1" />
                  <Separator orientation="vertical" className="mr-2 h-4" />
                  <Breadcrumb>
                    <BreadcrumbList>
                      <BreadcrumbItem className="hidden md:block">
                        <BreadcrumbLink href="#">Building Your Application</BreadcrumbLink>
                      </BreadcrumbItem>
                      <BreadcrumbSeparator className="hidden md:block" />
                      <BreadcrumbItem>
                        <BreadcrumbPage>Data Fetching</BreadcrumbPage>
                      </BreadcrumbItem>
                    </BreadcrumbList>
                  </Breadcrumb>
                </div>
              </header>
              <div className="flex flex-1 flex-col gap-4 p-4 pt-0">
                <div className="grid auto-rows-min gap-4 md:grid-cols-3">
                  <div className="aspect-video rounded-xl bg-muted/50" />
                  <div className="aspect-video rounded-xl bg-muted/50" />
                  <div className="aspect-video rounded-xl bg-muted/50" />
                </div>
                <div className="min-h-[100vh] flex-1 rounded-xl bg-muted/50 md:min-h-min" />
              </div>
            </SidebarInset>
          </SidebarProvider>
        </div>
      </section>

      {/* EJEMPLO 2: SIDEBAR FLOTANTE */}
      <section className="space-y-4">
        <div>
          <h2 className="text-2xl font-semibold mb-2">Sidebar Flotante</h2>
          <p className="text-muted-foreground mb-4">
            Variante <code>floating</code> que añade margen y bordes redondeados al sidebar.
          </p>
        </div>

        <div className="border rounded-xl overflow-hidden shadow-sm bg-muted dark:bg-card h-[500px] relative isolate">
          <SidebarProvider className="min-h-[500px]">
            <Sidebar collapsible="icon" variant="floating" className="absolute top-0 bottom-0 left-0 h-full z-20">
              <SidebarHeader>
                <SidebarMenu>
                  <SidebarMenuItem>
                    <SidebarMenuButton size="lg" asChild>
                      <a href="#">
                        <div className="flex aspect-square size-8 items-center justify-center rounded-lg bg-sidebar-primary text-sidebar-primary-foreground">
                          <AudioWaveform className="size-4" />
                        </div>
                        <div className="grid flex-1 text-left text-sm leading-tight">
                          <span className="truncate font-semibold">Inc</span>
                          <span className="truncate text-xs">Startup</span>
                        </div>
                      </a>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                </SidebarMenu>
              </SidebarHeader>
              <SidebarContent>
                <SidebarGroup>
                  <SidebarMenu>
                    <SidebarMenuItem>
                      <SidebarMenuButton>
                        <Inbox />
                        <span>Inbox</span>
                        <Badge className="ml-auto">12</Badge>
                      </SidebarMenuButton>
                    </SidebarMenuItem>
                    <SidebarMenuItem>
                      <SidebarMenuButton>
                        <Calendar />
                        <span>Calendar</span>
                      </SidebarMenuButton>
                    </SidebarMenuItem>
                    <SidebarMenuItem>
                      <SidebarMenuButton>
                        <Search />
                        <span>Search</span>
                      </SidebarMenuButton>
                    </SidebarMenuItem>
                    <SidebarMenuItem>
                      <SidebarMenuButton>
                        <Settings2 />
                        <span>Settings</span>
                      </SidebarMenuButton>
                    </SidebarMenuItem>
                  </SidebarMenu>
                </SidebarGroup>
                <SidebarGroup className="mt-auto">
                   <SidebarGroupContent>
                      <SidebarMenu>
                        <SidebarMenuItem>
                          <SidebarMenuButton>
                             <LifeBuoy />
                             <span>Help</span>
                          </SidebarMenuButton>
                        </SidebarMenuItem>
                      </SidebarMenu>
                   </SidebarGroupContent>
                </SidebarGroup>
              </SidebarContent>
              <SidebarRail />
            </Sidebar>
            <SidebarInset className="bg-background rounded-tl-xl overflow-hidden m-2 border shadow-sm">
               <header className="flex h-14 items-center gap-2 px-4 border-b bg-background">
                  <SidebarTrigger />
                  <Separator orientation="vertical" className="h-4" />
                  <span className="font-medium">Floating Layout</span>
               </header>
               <div className="p-4 flex flex-col gap-4">
                 <div className="h-32 rounded-lg bg-muted border-2 border-dashed" />
                 <div className="h-32 rounded-lg bg-muted border-2 border-dashed" />
               </div>
            </SidebarInset>
          </SidebarProvider>
        </div>
      </section>

      {/* EJEMPLO 3: SIDEBAR INSET */}
      <section className="space-y-4">
        <div>
          <h2 className="text-2xl font-semibold mb-2">Sidebar Inset</h2>
          <p className="text-muted-foreground mb-4">
            Variante <code>inset</code> donde el contenido principal se "hunde" y el sidebar parece parte del fondo.
          </p>
        </div>

        <div className="border rounded-xl overflow-hidden shadow-sm bg-sidebar h-[500px] relative isolate">
          <SidebarProvider className="min-h-[500px]">
            <Sidebar collapsible="icon" variant="inset" className="absolute top-0 bottom-0 left-0 h-full z-20">
              <SidebarHeader>
                <SidebarMenu>
                  <SidebarMenuItem>
                    <SidebarMenuButton size="lg">
                      <div className="flex aspect-square size-8 items-center justify-center rounded-lg bg-sidebar-primary text-sidebar-primary-foreground">
                        <Command className="size-4" />
                      </div>
                      <div className="grid flex-1 text-left text-sm leading-tight">
                        <span className="truncate font-semibold">Acme Corp</span>
                        <span className="truncate text-xs">Inset Layout</span>
                      </div>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                </SidebarMenu>
              </SidebarHeader>
              <SidebarContent>
                 <SidebarGroup>
                    <SidebarMenu>
                       <SidebarMenuItem>
                          <SidebarMenuButton isActive>
                             <Inbox />
                             <span>Inbox</span>
                          </SidebarMenuButton>
                       </SidebarMenuItem>
                       <SidebarMenuItem>
                          <SidebarMenuButton>
                             <Send />
                             <span>Sent</span>
                          </SidebarMenuButton>
                       </SidebarMenuItem>
                       <SidebarMenuItem>
                          <SidebarMenuButton>
                             <Trash2 />
                             <span>Trash</span>
                          </SidebarMenuButton>
                       </SidebarMenuItem>
                    </SidebarMenu>
                 </SidebarGroup>
              </SidebarContent>
              <SidebarFooter>
                 <SidebarMenu>
                    <SidebarMenuItem>
                       <SidebarMenuButton>
                          <Avatar className="h-6 w-6">
                             <AvatarFallback>JD</AvatarFallback>
                          </Avatar>
                          <span>John Doe</span>
                       </SidebarMenuButton>
                    </SidebarMenuItem>
                 </SidebarMenu>
              </SidebarFooter>
              <SidebarRail />
            </Sidebar>
            <SidebarInset className="overflow-hidden bg-background">
               <header className="flex h-14 items-center gap-2 px-4 border-b">
                  <SidebarTrigger />
                  <Separator orientation="vertical" className="h-4" />
                  <span className="font-medium">App Container</span>
               </header>
               <div className="p-4 h-full bg-muted/10">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="aspect-square rounded-xl bg-muted/50 border-2 border-dashed" />
                    <div className="aspect-square rounded-xl bg-muted/50 border-2 border-dashed" />
                  </div>
               </div>
            </SidebarInset>
          </SidebarProvider>
        </div>
      </section>

      {/* EJEMPLO 4: SIDEBAR DERECHO */}
      <section className="space-y-4">
        <div>
          <h2 className="text-2xl font-semibold mb-2">Sidebar Derecho</h2>
          <p className="text-muted-foreground mb-4">
            Configuración con <code>side="right"</code> para paneles de detalles o configuraciones.
          </p>
        </div>

        <div className="border rounded-xl overflow-hidden shadow-sm bg-background h-[500px] relative isolate">
          <SidebarProvider className="min-h-[500px]">
            <SidebarInset className="overflow-hidden">
               <header className="flex h-14 items-center justify-between px-4 border-b bg-background z-10 relative">
                  <span className="font-semibold">Main Content</span>
                  <SidebarTrigger />
               </header>
               <div className="p-8 flex items-center justify-center text-muted-foreground">
                  <p>Contenido principal a la izquierda</p>
               </div>
            </SidebarInset>
            <Sidebar collapsible="icon" side="right" className="absolute top-0 bottom-0 right-0 h-full border-l z-20">
              <SidebarHeader>
                <SidebarMenu>
                  <SidebarMenuItem>
                    <SidebarMenuButton size="lg">
                      <Settings2 />
                      <div className="grid flex-1 text-left text-sm leading-tight">
                        <span className="truncate font-semibold">Properties</span>
                        <span className="truncate text-xs">Configuration</span>
                      </div>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                </SidebarMenu>
              </SidebarHeader>
              <SidebarContent>
                 <SidebarGroup>
                    <SidebarGroupLabel>Display</SidebarGroupLabel>
                    <SidebarMenu>
                       <SidebarMenuItem>
                          <SidebarMenuButton>
                             <PanelLeft />
                             <span>Layout</span>
                          </SidebarMenuButton>
                       </SidebarMenuItem>
                       <SidebarMenuItem>
                          <SidebarMenuButton>
                             <Sparkles />
                             <span>Effects</span>
                          </SidebarMenuButton>
                       </SidebarMenuItem>
                    </SidebarMenu>
                 </SidebarGroup>
              </SidebarContent>
              <SidebarRail />
            </Sidebar>
          </SidebarProvider>
        </div>
      </section>

      {/* DOCUMENTACIÓN */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Estructura del Código</h2>
        <Card>
          <CardContent className="p-6">
            <p className="text-sm text-muted-foreground mb-4">
              Para usar el Sidebar en tu aplicación, envuelve tu contenido en <code>SidebarProvider</code>.
            </p>
            <div className="bg-slate-950 text-slate-50 p-4 rounded-md overflow-x-auto text-sm font-mono">
{`<SidebarProvider>
  <Sidebar collapsible="icon">
    <SidebarHeader />
    <SidebarContent>
      <SidebarGroup />
      <SidebarMenu />
    </SidebarContent>
    <SidebarFooter />
    <SidebarRail />
  </Sidebar>
  <SidebarInset>
    <header>
      <SidebarTrigger />
    </header>
    <main />
  </SidebarInset>
</SidebarProvider>`}
            </div>
          </CardContent>
        </Card>
      </section>

      {/* PROPS */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Props</h2>
        <Card>
          <CardContent className="p-0">
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b bg-muted/50">
                    <th className="text-left p-3 font-medium">Prop</th>
                    <th className="text-left p-3 font-medium">Type</th>
                    <th className="text-left p-3 font-medium">Default</th>
                    <th className="text-left p-3 font-medium">Description</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { name: "side", type: '"left" | "right"', def: '"left"', desc: "Lado donde se posiciona el sidebar." },
                    { name: "variant", type: '"sidebar" | "floating" | "inset"', def: '"sidebar"', desc: "Estilo visual: pegado, flotante con bordes, o inset." },
                    { name: "collapsible", type: '"offcanvas" | "icon" | "none"', def: '"offcanvas"', desc: "Comportamiento al colapsar: ocultar, solo iconos, o fijo." },
                    { name: "className", type: "string", def: "—", desc: "Clases adicionales para el contenedor." },
                    { name: "children", type: "ReactNode", def: "—", desc: "SidebarHeader, SidebarContent, SidebarFooter, SidebarRail." },
                    { name: "defaultOpen", type: "boolean", def: "true", desc: "Estado inicial de apertura (SidebarProvider)." },
                    { name: "open", type: "boolean", def: "—", desc: "Estado controlado de apertura (SidebarProvider)." },
                    { name: "onOpenChange", type: "(open: boolean) => void", def: "—", desc: "Callback al cambiar apertura (SidebarProvider)." },
                  ].map((row) => (
                    <tr key={row.name} className="border-b last:border-0">
                      <td className="p-3"><code className="text-xs bg-muted px-1.5 py-0.5 rounded">{row.name}</code></td>
                      <td className="p-3 text-muted-foreground"><code className="text-xs">{row.type}</code></td>
                      <td className="p-3 text-muted-foreground"><code className="text-xs">{row.def}</code></td>
                      <td className="p-3 text-muted-foreground">{row.desc}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </CardContent>
        </Card>
      </section>
    </div>
  );
}