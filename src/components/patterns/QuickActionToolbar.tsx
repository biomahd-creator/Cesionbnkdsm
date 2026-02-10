import { useState } from "react";
import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarSeparator,
  MenubarShortcut,
  MenubarTrigger,
} from "../ui/menubar";
import {
  Command,
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
} from "../ui/command";
import { Button } from "../ui/button";
import {
  TooltipProvider,
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "../ui/tooltip";
import {
  FileText,
  Upload,
  Download,
  Search,
  Filter,
  RefreshCw,
  Settings,
  HelpCircle,
  Plus,
  BarChart3,
  Users,
  Bell,
} from "lucide-react";

export function QuickActionToolbar() {
  const [commandOpen, setCommandOpen] = useState(false);

  return (
    <div className="space-y-4">
      {/* Main Menubar */}
      <Menubar>
        <MenubarMenu>
          <MenubarTrigger>Archivo</MenubarTrigger>
          <MenubarContent>
            <MenubarItem>
              Nueva Factura <MenubarShortcut>⌘N</MenubarShortcut>
            </MenubarItem>
            <MenubarItem>
              Abrir <MenubarShortcut>⌘O</MenubarShortcut>
            </MenubarItem>
            <MenubarSeparator />
            <MenubarItem>
              Importar <MenubarShortcut>⌘I</MenubarShortcut>
            </MenubarItem>
            <MenubarItem>
              Exportar <MenubarShortcut>⌘E</MenubarShortcut>
            </MenubarItem>
            <MenubarSeparator />
            <MenubarItem>
              Guardar <MenubarShortcut>⌘S</MenubarShortcut>
            </MenubarItem>
            <MenubarItem>Guardar como...</MenubarItem>
          </MenubarContent>
        </MenubarMenu>

        <MenubarMenu>
          <MenubarTrigger>Editar</MenubarTrigger>
          <MenubarContent>
            <MenubarItem>
              Deshacer <MenubarShortcut>⌘Z</MenubarShortcut>
            </MenubarItem>
            <MenubarItem>
              Rehacer <MenubarShortcut>⇧⌘Z</MenubarShortcut>
            </MenubarItem>
            <MenubarSeparator />
            <MenubarItem>
              Cortar <MenubarShortcut>⌘X</MenubarShortcut>
            </MenubarItem>
            <MenubarItem>
              Copiar <MenubarShortcut>⌘C</MenubarShortcut>
            </MenubarItem>
            <MenubarItem>
              Pegar <MenubarShortcut>⌘V</MenubarShortcut>
            </MenubarItem>
          </MenubarContent>
        </MenubarMenu>

        <MenubarMenu>
          <MenubarTrigger>Operaciones</MenubarTrigger>
          <MenubarContent>
            <MenubarItem>Aprobar Seleccionadas</MenubarItem>
            <MenubarItem>Rechazar Seleccionadas</MenubarItem>
            <MenubarSeparator />
            <MenubarItem>Asignar Analista</MenubarItem>
            <MenubarItem>Cambiar Estado</MenubarItem>
            <MenubarSeparator />
            <MenubarItem>Enviar Notificación</MenubarItem>
          </MenubarContent>
        </MenubarMenu>

        <MenubarMenu>
          <MenubarTrigger>Reportes</MenubarTrigger>
          <MenubarContent>
            <MenubarItem>Dashboard Ejecutivo</MenubarItem>
            <MenubarItem>Análisis de Cartera</MenubarItem>
            <MenubarSeparator />
            <MenubarItem>Reporte de Aprobaciones</MenubarItem>
            <MenubarItem>Reporte de Cobranza</MenubarItem>
            <MenubarSeparator />
            <MenubarItem>Exportar a Excel</MenubarItem>
            <MenubarItem>Exportar a PDF</MenubarItem>
          </MenubarContent>
        </MenubarMenu>

        <MenubarMenu>
          <MenubarTrigger>Ayuda</MenubarTrigger>
          <MenubarContent>
            <MenubarItem>Documentación</MenubarItem>
            <MenubarItem>Tutorial</MenubarItem>
            <MenubarSeparator />
            <MenubarItem>Soporte</MenubarItem>
            <MenubarItem>Reportar un problema</MenubarItem>
            <MenubarSeparator />
            <MenubarItem>Acerca de</MenubarItem>
          </MenubarContent>
        </MenubarMenu>
      </Menubar>

      {/* Quick Actions Toolbar */}
      <div className="flex items-center gap-2 p-2 border rounded-lg bg-muted/50">
        <TooltipProvider>
          {/* Quick Action Buttons */}
          <Tooltip>
            <TooltipTrigger asChild>
              <Button variant="ghost" size="icon">
                <Plus className="h-4 w-4" />
              </Button>
            </TooltipTrigger>
            <TooltipContent>
              <p>Nueva Factura (⌘N)</p>
            </TooltipContent>
          </Tooltip>

          <Tooltip>
            <TooltipTrigger asChild>
              <Button variant="ghost" size="icon">
                <Upload className="h-4 w-4" />
              </Button>
            </TooltipTrigger>
            <TooltipContent>
              <p>Importar (⌘I)</p>
            </TooltipContent>
          </Tooltip>

          <Tooltip>
            <TooltipTrigger asChild>
              <Button variant="ghost" size="icon">
                <Download className="h-4 w-4" />
              </Button>
            </TooltipTrigger>
            <TooltipContent>
              <p>Exportar (⌘E)</p>
            </TooltipContent>
          </Tooltip>

          <div className="h-6 w-px bg-border mx-1" />

          <Tooltip>
            <TooltipTrigger asChild>
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setCommandOpen(true)}
              >
                <Search className="h-4 w-4" />
              </Button>
            </TooltipTrigger>
            <TooltipContent>
              <p>Búsqueda Rápida (⌘K)</p>
            </TooltipContent>
          </Tooltip>

          <Tooltip>
            <TooltipTrigger asChild>
              <Button variant="ghost" size="icon">
                <Filter className="h-4 w-4" />
              </Button>
            </TooltipTrigger>
            <TooltipContent>
              <p>Filtros</p>
            </TooltipContent>
          </Tooltip>

          <Tooltip>
            <TooltipTrigger asChild>
              <Button variant="ghost" size="icon">
                <RefreshCw className="h-4 w-4" />
              </Button>
            </TooltipTrigger>
            <TooltipContent>
              <p>Actualizar (F5)</p>
            </TooltipContent>
          </Tooltip>

          <div className="h-6 w-px bg-border mx-1" />

          <Tooltip>
            <TooltipTrigger asChild>
              <Button variant="ghost" size="icon">
                <BarChart3 className="h-4 w-4" />
              </Button>
            </TooltipTrigger>
            <TooltipContent>
              <p>Dashboard</p>
            </TooltipContent>
          </Tooltip>

          <Tooltip>
            <TooltipTrigger asChild>
              <Button variant="ghost" size="icon">
                <Users className="h-4 w-4" />
              </Button>
            </TooltipTrigger>
            <TooltipContent>
              <p>Clientes</p>
            </TooltipContent>
          </Tooltip>

          <Tooltip>
            <TooltipTrigger asChild>
              <Button variant="ghost" size="icon">
                <FileText className="h-4 w-4" />
              </Button>
            </TooltipTrigger>
            <TooltipContent>
              <p>Facturas</p>
            </TooltipContent>
          </Tooltip>

          <div className="flex-1" />

          <Tooltip>
            <TooltipTrigger asChild>
              <Button variant="ghost" size="icon">
                <Bell className="h-4 w-4" />
              </Button>
            </TooltipTrigger>
            <TooltipContent>
              <p>Notificaciones</p>
            </TooltipContent>
          </Tooltip>

          <Tooltip>
            <TooltipTrigger asChild>
              <Button variant="ghost" size="icon">
                <HelpCircle className="h-4 w-4" />
              </Button>
            </TooltipTrigger>
            <TooltipContent>
              <p>Ayuda (F1)</p>
            </TooltipContent>
          </Tooltip>

          <Tooltip>
            <TooltipTrigger asChild>
              <Button variant="ghost" size="icon">
                <Settings className="h-4 w-4" />
              </Button>
            </TooltipTrigger>
            <TooltipContent>
              <p>Configuración</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
      </div>

      {/* Command Dialog for Quick Search */}
      <CommandDialog open={commandOpen} onOpenChange={setCommandOpen}>
        <CommandInput placeholder="Buscar acciones, facturas, clientes..." />
        <CommandList>
          <CommandEmpty>No se encontraron resultados.</CommandEmpty>
          <CommandGroup heading="Acciones Rápidas">
            <CommandItem>
              <Plus className="mr-2 h-4 w-4" />
              <span>Nueva Factura</span>
            </CommandItem>
            <CommandItem>
              <Upload className="mr-2 h-4 w-4" />
              <span>Importar Documentos</span>
            </CommandItem>
            <CommandItem>
              <Download className="mr-2 h-4 w-4" />
              <span>Exportar Reporte</span>
            </CommandItem>
          </CommandGroup>
          <CommandSeparator />
          <CommandGroup heading="Navegación">
            <CommandItem>
              <BarChart3 className="mr-2 h-4 w-4" />
              <span>Dashboard</span>
            </CommandItem>
            <CommandItem>
              <FileText className="mr-2 h-4 w-4" />
              <span>Gestión de Facturas</span>
            </CommandItem>
            <CommandItem>
              <Users className="mr-2 h-4 w-4" />
              <span>Gestión de Clientes</span>
            </CommandItem>
          </CommandGroup>
          <CommandSeparator />
          <CommandGroup heading="Configuración">
            <CommandItem>
              <Settings className="mr-2 h-4 w-4" />
              <span>Preferencias</span>
            </CommandItem>
            <CommandItem>
              <HelpCircle className="mr-2 h-4 w-4" />
              <span>Centro de Ayuda</span>
            </CommandItem>
          </CommandGroup>
        </CommandList>
      </CommandDialog>
    </div>
  );
}
