import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../components/ui/card";
import { Badge } from "../components/ui/badge";
import { Separator } from "../components/ui/separator";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../components/ui/tabs";
import { CodeBlock } from "../components/ui/code-block";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../components/ui/table";
import { Button } from "../components/ui/button";
import {
  Layers,
  ArrowRight,
  Search,
  Filter,
  SlidersHorizontal,
  Download,
  RefreshCw,
  ChevronRight,
  Edit,
  TreePine,
  ListFilter,
  ScrollText,
  Zap,
  Infinity,
  LayoutGrid,
  TableProperties,
  Eye,
  CheckSquare,
  FileText,
  Info,
  ExternalLink,
} from "lucide-react";
import { Alert, AlertDescription } from "../components/ui/alert";

// ============================================================
// TABLE CATALOG — Catálogo completo de variaciones de tabla DSM
// ============================================================

interface TableVariation {
  id: string;
  name: string;
  layer: "ui" | "advanced" | "patterns" | "patterns/factoring";
  path: string;
  pageId: string | null;
  usesMasterDataGrid: boolean | null;
  description: string;
  bestFor: string[];
  features: string[];
  icon: React.ElementType;
  layerColor: string;
  imports: string;
  usageCode: string;
}

const tableVariations: TableVariation[] = [
  {
    id: "table-primitive",
    name: "Table",
    layer: "ui",
    path: "/components/ui/table.tsx",
    pageId: "table-new",
    usesMasterDataGrid: null,
    description:
      "Primitivo base de Shadcn UI. Envuelve <table> con estilos consistentes. Sin lógica de estado, filtrado o paginación. Base para todos los demás componentes de tabla.",
    bestFor: [
      "Tablas estáticas simples",
      "Datos de solo lectura sin interacción",
      "Base para componer tablas custom",
    ],
    features: [
      "Table, TableHeader, TableBody, TableRow, TableHead, TableCell, TableCaption, TableFooter",
      "Estilos consistentes con el DSM",
      "Responsive con overflow-x-auto",
    ],
    icon: TableProperties,
    layerColor: "bg-slate-100 text-slate-700 dark:bg-slate-800 dark:text-slate-300",
    imports: `import {
  Table, TableBody, TableCell,
  TableHead, TableHeader, TableRow,
} from "@/components/ui/table";`,
    usageCode: `<Table>
  <TableHeader>
    <TableRow>
      <TableHead>Factura</TableHead>
      <TableHead>Monto</TableHead>
      <TableHead>Estado</TableHead>
    </TableRow>
  </TableHeader>
  <TableBody>
    <TableRow>
      <TableCell>INV-001</TableCell>
      <TableCell>$2,500,000</TableCell>
      <TableCell><Badge>Aprobada</Badge></TableCell>
    </TableRow>
  </TableBody>
</Table>`,
  },
  {
    id: "master-data-grid",
    name: "MasterDataGrid",
    layer: "advanced",
    path: "/components/advanced/MasterDataGrid.tsx",
    pageId: null,
    usesMasterDataGrid: true,
    description:
      "Contenedor maestro reutilizable. Provee header con título, barra de búsqueda, filtros con Select, ordenamiento, toggle de visibilidad de columnas (Popover), botones de acción (refresh, exportar, reportes) y paginación completa con selector de page-size. Recibe la tabla como children.",
    bestFor: [
      "Tablas con muchas columnas (toggle de visibilidad)",
      "Necesidad de toolbar estándar con search + filtros + acciones",
      "Contenedor base para DataTable, TreeTable, EditableTable, etc.",
    ],
    features: [
      "Search input con icono",
      "Filtros dinámicos (Select con border-dashed)",
      "Ordenamiento por columna (fecha)",
      "Popover de visibilidad de columnas",
      "Botones: Refresh, Export, Consultar Reportes",
      "Paginación con page numbers + ellipsis + page-size selector",
      "Header con título, descripción y acciones custom",
      "Toolbar extensible vía toolbarActions slot",
    ],
    icon: LayoutGrid,
    layerColor: "bg-blue-100 text-blue-700 dark:bg-blue-900 dark:text-blue-300",
    imports: `import { MasterDataGrid } from "@/components/advanced/MasterDataGrid";`,
    usageCode: `<MasterDataGrid
  title="Facturas"
  description="Listado de facturas pendientes"
  searchQuery={search}
  onSearchChange={setSearch}
  searchPlaceholder="Buscar factura..."
  filterOptions={[
    { label: "Estado", value: statusFilter, options: [...] }
  ]}
  onFilterChange={handleFilterChange}
  columns={columnDefs}
  onColumnVisibilityChange={handleColumnToggle}
  showExport
  onExport={handleExport}
  currentPage={page}
  totalPages={10}
  totalItems={100}
  itemsPerPage={10}
  onPageChange={setPage}
  pageSizeOptions={[10, 25, 50]}
  onPageSizeChange={setPageSize}
>
  <Table>
    {/* Tu tabla aquí */}
  </Table>
</MasterDataGrid>`,
  },
  {
    id: "data-table",
    name: "DataTable",
    layer: "advanced",
    path: "/components/advanced/DataTable.tsx",
    pageId: "data-table",
    usesMasterDataGrid: true,
    description:
      "Integración completa con TanStack React Table. Define columnas declarativamente con ColumnDef[], sorting automático, filtrado, visibilidad de columnas, selección de filas y paginación. Compone sobre MasterDataGrid para la UI del contenedor.",
    bestFor: [
      "Tablas con datos estructurados complejos",
      "Necesidad de sorting multi-columna declarativo",
      "Selección de filas (checkbox)",
      "Columnas definidas por configuración (ColumnDef[])",
    ],
    features: [
      "TanStack React Table (sorting, filtering, pagination, row selection)",
      "ColumnDef[] declarativo",
      "Sorting interactivo por columna",
      "Filtrado por columna clave (searchKey)",
      "Visibilidad de columnas (DropdownMenu)",
      "Row selection con checkbox",
      "Paginación automática",
    ],
    icon: ListFilter,
    layerColor: "bg-blue-100 text-blue-700 dark:bg-blue-900 dark:text-blue-300",
    imports: `import { DataTable } from "@/components/advanced/DataTable";
import { ColumnDef } from "@tanstack/react-table";`,
    usageCode: `const columns: ColumnDef<Invoice>[] = [
  { accessorKey: "id", header: "ID" },
  { accessorKey: "client", header: "Cliente" },
  { accessorKey: "amount", header: "Monto",
    cell: ({ row }) => formatCurrency(row.getValue("amount"))
  },
];

<DataTable
  columns={columns}
  data={invoices}
  searchKey="client"
  searchPlaceholder="Buscar cliente..."
  title="Facturas"
  description="50 registros"
/>`,
  },
  {
    id: "tree-table-v2",
    name: "TreeTable V2",
    layer: "advanced",
    path: "/components/advanced/TreeTableV2.tsx",
    pageId: "tree-table-v2",
    usesMasterDataGrid: true,
    description:
      "Variante avanzada del TreeTable con badges Soft-Outline del DSM, seleccion multiple en cascada (padre auto-selecciona hijos), checkbox indeterminate, propagacion bottom-up (hijos completos auto-check padre), select-all en header y barra de resumen de seleccion.",
    bestFor: [
      "Operaciones batch sobre jerarquias completas",
      "Seleccion de facturas por cliente/proyecto en bloque",
      "Tablas con badges semanticos Soft-Outline",
    ],
    features: [
      "Badges Soft-Outline: warning, success, info, destructive",
      "Seleccion cascada: padre → todos los descendientes",
      "Checkbox indeterminate en seleccion parcial",
      "Propagacion bottom-up: hijos completos → padre auto-check",
      "Select All en header con 3 estados",
      "Barra de resumen con contador + limpiar",
      "Callback onSelectionChange(Set<string>)",
      "Lazy load + paginacion por nodo",
    ],
    icon: TreePine,
    layerColor: "bg-blue-100 text-blue-700 dark:bg-blue-900 dark:text-blue-300",
    imports: `import { TreeTableV2, TreeNodeV2 } from "@/components/advanced/TreeTableV2";`,
    usageCode: `const data: TreeNodeV2[] = [
  {
    id: "client-1",
    name: "Corporacion Global S.A.",
    type: "client",
    children: [
      {
        id: "project-1",
        name: "Proyecto Expansion",
        type: "project",
        children: [
          { id: "inv-1", name: "F-001", type: "invoice",
            amount: 150000, status: "paid", date: "15/01/2026" }
        ]
      }
    ]
  }
];

<TreeTableV2
  data={data}
  showCheckboxes
  onSelectionChange={(ids) => console.log(ids)}
  title="Portafolio V2"
/>`,
  },
  {
    id: "data-table-advanced",
    name: "DataTableAdvanced",
    layer: "patterns",
    path: "/components/patterns/DataTableAdvanced.tsx",
    pageId: "data-table-advanced",
    usesMasterDataGrid: true,
    description:
      "Pattern auto-contenido de tabla de facturas con búsqueda, filtros por estado, ordenamiento y acciones contextuales por fila (DropdownMenu). Incluye datos mock. Ideal como referencia de implementación.",
    bestFor: [
      "Referencia/demo de cómo componer MasterDataGrid + Table",
      "Tabla CRUD con acciones por fila",
      "Prototipado rápido con datos mock",
    ],
    features: [
      "Búsqueda por cliente/ID",
      "Filtro por estado (Select)",
      "Acciones por fila: Ver, Editar, Duplicar, Eliminar",
      "Formato de moneda CLP",
      "Badges de estado semánticos",
      "Datos mock incluidos",
    ],
    icon: FileText,
    layerColor: "bg-purple-100 text-purple-700 dark:bg-purple-900 dark:text-purple-300",
    imports: `import { DataTableAdvanced } from "@/components/patterns/DataTableAdvanced";`,
    usageCode: `// Auto-contenido, sin props requeridas
<DataTableAdvanced />`,
  },
  {
    id: "editable-table",
    name: "EditableTable",
    layer: "patterns",
    path: "/components/patterns/EditableTable.tsx",
    pageId: "editable-table",
    usesMasterDataGrid: true,
    description:
      "Tabla con edición inline directa en las celdas. Inputs de texto, números, fechas (DatePicker), selects de estado, y checkboxes de prioridad. Ideal para flujos donde el usuario edita múltiples registros sin abrir modales.",
    bestFor: [
      "Edición masiva de registros",
      "Formularios tipo spreadsheet",
      "Flujos donde abrir un modal por registro es ineficiente",
    ],
    features: [
      "Input inline para texto y números",
      "DatePicker inline para fechas",
      "Select inline para estados",
      "Checkbox de prioridad",
      "Validación visual (bordes rojos en error)",
      "Resumen automático (total, promedios)",
    ],
    icon: Edit,
    layerColor: "bg-purple-100 text-purple-700 dark:bg-purple-900 dark:text-purple-300",
    imports: `import { EditableTable } from "@/components/patterns/EditableTable";`,
    usageCode: `// Auto-contenido con datos mock
<EditableTable />`,
  },
  {
    id: "audit-log-viewer",
    name: "AuditLogViewer",
    layer: "patterns",
    path: "/components/patterns/AuditLogViewer.tsx",
    pageId: "audit-log",
    usesMasterDataGrid: true,
    description:
      "Visor de logs de auditoría con filtrado por tipo de evento, búsqueda, badges de acción (CREATE, UPDATE, DELETE, READ), badges de status (success, warning, error), timestamps, IP y detalles expandibles.",
    bestFor: [
      "Compliance y tracking de acciones",
      "Debugging y soporte técnico",
      "Historial de cambios de un recurso",
    ],
    features: [
      "Filtrado por tipo de acción",
      "Búsqueda por usuario/recurso",
      "Badges de acción con iconos",
      "Status: success/warning/error",
      "Timestamp y dirección IP",
      "Datos mock de ejemplo",
    ],
    icon: ScrollText,
    layerColor: "bg-purple-100 text-purple-700 dark:bg-purple-900 dark:text-purple-300",
    imports: `import { AuditLogViewer } from "@/components/patterns/AuditLogViewer";`,
    usageCode: `// Auto-contenido con datos mock
<AuditLogViewer />`,
  },
  {
    id: "factoring-selection",
    name: "FactoringSelectionPage",
    layer: "patterns/factoring",
    path: "/components/patterns/factoring/FactoringSelectionPage.tsx",
    pageId: "factoring-selection",
    usesMasterDataGrid: false,
    description:
      "Tabla de selección de facturas por deudor con Accordion. Agrupa facturas por deudor, permite selección individual y masiva, calcula KPIs en tiempo real, y guía al usuario en un flujo multi-paso (Seleccionar → Revisar → Confirmar). Patrón propio sin MasterDataGrid.",
    bestFor: [
      "Selección de facturas agrupadas por deudor/pagador",
      "Flujos de operación de factoring",
      "KPIs dinámicos que cambian con la selección",
    ],
    features: [
      "Accordion por deudor",
      "Selección individual y bulk",
      "KPI Cards dinámicos (monto, tasa, descuento)",
      "Progress bar de completitud",
      "Flujo multi-paso",
      "Badges de elegibilidad",
      "Sorting por monto/fecha",
    ],
    icon: CheckSquare,
    layerColor: "bg-amber-100 text-amber-700 dark:bg-amber-900 dark:text-amber-300",
    imports: `import { FactoringSelectionPage } from "@/components/patterns/factoring/FactoringSelectionPage";`,
    usageCode: `<FactoringSelectionPage />`,
  },
  {
    id: "virtualized-list",
    name: "VirtualizedList",
    layer: "advanced",
    path: "/components/advanced/VirtualizedList.tsx",
    pageId: "virtualized-list",
    usesMasterDataGrid: null,
    description:
      "Lista virtualizada que solo renderiza los items visibles en el viewport. Usa scroll position + item height fijo para calcular qué elementos mostrar. Ideal para listas de 1,000+ elementos sin impacto en rendimiento.",
    bestFor: [
      "Listas con 1,000+ elementos",
      "Performance crítica (mobile, dispositivos limitados)",
      "Listas de selección con muchas opciones",
    ],
    features: [
      "Render solo de items visibles + buffer",
      "Item height fijo (configurable)",
      "Scroll nativo",
      "Genérico: renderItem callback",
      "Sin dependencias externas",
    ],
    icon: Zap,
    layerColor: "bg-blue-100 text-blue-700 dark:bg-blue-900 dark:text-blue-300",
    imports: `import { VirtualizedList } from "@/components/advanced/VirtualizedList";`,
    usageCode: `<VirtualizedList
  items={bigDataset}
  height={400}
  itemHeight={48}
  renderItem={(item, index, style) => (
    <div style={style} key={item.id}>
      {item.name}
    </div>
  )}
/>`,
  },
  {
    id: "infinite-scroll",
    name: "InfiniteScroll",
    layer: "advanced",
    path: "/components/advanced/InfiniteScroll.tsx",
    pageId: "infinite-scroll",
    usesMasterDataGrid: null,
    description:
      "Wrapper que detecta cuando el usuario llega al final del scroll y dispara la carga de más datos. Usa IntersectionObserver. Composable con cualquier tabla o lista.",
    bestFor: [
      "APIs paginadas (cursor-based / offset)",
      "Feeds de actividad",
      "Listas que crecen bajo demanda",
    ],
    features: [
      "IntersectionObserver nativo",
      "Loading spinner integrado (Loader2)",
      "Threshold configurable",
      "Composable con Table, VirtualizedList, etc.",
    ],
    icon: Infinity,
    layerColor: "bg-blue-100 text-blue-700 dark:bg-blue-900 dark:text-blue-300",
    imports: `import { InfiniteScroll } from "@/components/advanced/InfiniteScroll";`,
    usageCode: `<InfiniteScroll
  loadMore={fetchNextPage}
  hasMore={hasNextPage}
  isLoading={isFetching}
>
  <Table>
    {/* rows crecen incrementalmente */}
  </Table>
</InfiniteScroll>`,
  },
  {
    id: "advanced-filter-panel",
    name: "AdvancedFilterPanel",
    layer: "patterns",
    path: "/components/patterns/AdvancedFilterPanel.tsx",
    pageId: "advanced-filter",
    usesMasterDataGrid: null,
    description:
      "Panel lateral (Sheet) para filtros complejos: rangos de fecha (DatePicker), checkboxes múltiples, selects, y badges de filtros activos. Se compone JUNTO a una tabla, no la contiene. Complemento ideal para MasterDataGrid cuando los filtros inline no son suficientes.",
    bestFor: [
      "Filtros complejos que no caben en la toolbar",
      "Rangos de fecha + múltiples criterios",
      "Complemento de MasterDataGrid o DataTable",
    ],
    features: [
      "Sheet lateral (slide-in)",
      "DatePicker para rango de fechas",
      "Checkbox groups (estados, tipos)",
      "Select de ordenamiento",
      "Badges de filtros activos",
      "Botón de limpiar filtros",
    ],
    icon: Filter,
    layerColor: "bg-purple-100 text-purple-700 dark:bg-purple-900 dark:text-purple-300",
    imports: `import { AdvancedFilterPanel } from "@/components/patterns/AdvancedFilterPanel";`,
    usageCode: `{/* Junto a tu tabla */}
<div className="flex gap-4">
  <AdvancedFilterPanel />
  <MasterDataGrid ...>
    <Table>...</Table>
  </MasterDataGrid>
</div>`,
  },
];

// ─── Composability Map ───
const composabilityData = [
  { from: "Table", to: "MasterDataGrid", relation: "children", desc: "Table se pasa como children a MasterDataGrid" },
  { from: "MasterDataGrid", to: "DataTable", relation: "compone", desc: "DataTable usa MasterDataGrid como contenedor" },
  { from: "MasterDataGrid", to: "TreeTable", relation: "compone", desc: "TreeTable usa MasterDataGrid como contenedor" },
  { from: "MasterDataGrid", to: "EditableTable", relation: "compone", desc: "EditableTable usa MasterDataGrid como contenedor" },
  { from: "MasterDataGrid", to: "DataTableAdvanced", relation: "compone", desc: "DataTableAdvanced usa MasterDataGrid como contenedor" },
  { from: "MasterDataGrid", to: "AuditLogViewer", relation: "compone", desc: "AuditLogViewer usa MasterDataGrid como contenedor" },
  { from: "AdvancedFilterPanel", to: "MasterDataGrid", relation: "complementa", desc: "Panel lateral para filtros que no caben en toolbar" },
  { from: "InfiniteScroll", to: "Table", relation: "envuelve", desc: "Wrapper de scroll infinito para cualquier tabla" },
  { from: "VirtualizedList", to: "—", relation: "standalone", desc: "Lista independiente, no compone con Table directamente" },
];

function LayerBadge({ layer }: { layer: string }) {
  const colors: Record<string, string> = {
    "ui": "bg-slate-100 text-slate-700 border-slate-300 dark:bg-slate-800 dark:text-slate-300 dark:border-slate-600",
    "advanced": "bg-blue-100 text-blue-700 border-blue-300 dark:bg-blue-900 dark:text-blue-300 dark:border-blue-600",
    "patterns": "bg-purple-100 text-purple-700 border-purple-300 dark:bg-purple-900 dark:text-purple-300 dark:border-purple-600",
    "patterns/factoring": "bg-amber-100 text-amber-700 border-amber-300 dark:bg-amber-900 dark:text-amber-300 dark:border-amber-600",
  };
  return (
    <Badge variant="outline" className={`text-[10px] px-1.5 py-0 ${colors[layer] || ""}`}>
      {layer}
    </Badge>
  );
}

function VariationCard({ variation, onNavigate }: { variation: TableVariation; onNavigate: (pageId: string) => void }) {
  const Icon = variation.icon;
  
  return (
    <Card className="overflow-hidden hover:shadow-md transition-shadow">
      <CardHeader className="pb-3">
        <div className="flex items-start justify-between gap-2">
          <div className="flex items-center gap-3">
            <div className={`h-10 w-10 rounded-lg flex items-center justify-center ${variation.layerColor}`}>
              <Icon className="h-5 w-5" />
            </div>
            <div>
              <CardTitle className="text-base">{variation.name}</CardTitle>
              <div className="flex items-center gap-2 mt-1">
                <LayerBadge layer={variation.layer} />
                {variation.usesMasterDataGrid === true && (
                  <Badge variant="outline" className="text-[10px] px-1.5 py-0 bg-green-50 text-green-700 border-green-300 dark:bg-green-900 dark:text-green-300 dark:border-green-600">
                    usa MasterDataGrid
                  </Badge>
                )}
                {variation.usesMasterDataGrid === false && (
                  <Badge variant="outline" className="text-[10px] px-1.5 py-0 bg-orange-50 text-orange-700 border-orange-300 dark:bg-orange-900 dark:text-orange-300 dark:border-orange-600">
                    patrón propio
                  </Badge>
                )}
              </div>
            </div>
          </div>
          {variation.pageId && (
            <Button
              variant="ghost"
              size="sm"
              className="h-8 px-2 text-muted-foreground hover:text-foreground"
              onClick={() => onNavigate(variation.pageId!)}
            >
              <Eye className="h-3.5 w-3.5 mr-1" />
              Ver
            </Button>
          )}
        </div>
      </CardHeader>
      <CardContent className="space-y-4">
        <p className="text-sm text-muted-foreground">{variation.description}</p>
        
        <div>
          <p className="text-xs font-medium text-foreground/80 mb-1.5">Mejor para:</p>
          <ul className="space-y-1">
            {variation.bestFor.map((item, i) => (
              <li key={i} className="text-xs text-muted-foreground flex items-start gap-1.5">
                <ChevronRight className="h-3 w-3 mt-0.5 shrink-0 text-primary" />
                {item}
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="text-xs font-medium text-foreground/80 mb-1.5">Features:</p>
          <div className="flex flex-wrap gap-1">
            {variation.features.slice(0, 5).map((feat, i) => (
              <Badge key={i} variant="secondary" className="text-[10px] px-1.5 py-0 font-normal">
                {feat}
              </Badge>
            ))}
            {variation.features.length > 5 && (
              <Badge variant="outline" className="text-[10px] px-1.5 py-0 font-normal">
                +{variation.features.length - 5} more
              </Badge>
            )}
          </div>
        </div>

        <Separator />
        
        <div className="text-xs text-muted-foreground font-mono bg-muted/40 rounded-md px-3 py-2">
          {variation.path}
        </div>
      </CardContent>
    </Card>
  );
}

export function TableCatalogPage() {
  const [activeTab, setActiveTab] = useState("catalog");
  const [selectedVariation, setSelectedVariation] = useState<string | null>(null);

  const handleNavigate = (pageId: string) => {
    window.dispatchEvent(new CustomEvent("dsm-navigate", { detail: pageId }));
  };

  const selectedVar = tableVariations.find((v) => v.id === selectedVariation);

  // Stats
  const totalVariations = tableVariations.length;
  const useMDG = tableVariations.filter((v) => v.usesMasterDataGrid === true).length;
  const layerCounts = {
    ui: tableVariations.filter((v) => v.layer === "ui").length,
    advanced: tableVariations.filter((v) => v.layer === "advanced").length,
    patterns: tableVariations.filter((v) => v.layer === "patterns" || v.layer === "patterns/factoring").length,
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <div className="flex items-center gap-3 mb-2">
          <h2 className="text-4xl font-semibold">Table Catalog</h2>
          <Badge variant="outline" className="text-xs">
            DSM Reference
          </Badge>
        </div>
        <p className="text-muted-foreground">
          Catálogo completo de las {totalVariations} variaciones de tabla disponibles en el DSM.
          Incluye primitivos, componentes avanzados y business patterns.
        </p>
      </div>

      <Separator />

      {/* KPI Strip */}
      <div className="grid grid-cols-2 md:grid-cols-5 gap-3">
        <Card className="bg-muted/30">
          <CardContent className="p-4 text-center">
            <p className="text-2xl font-semibold">{totalVariations}</p>
            <p className="text-xs text-muted-foreground mt-1">Variaciones totales</p>
          </CardContent>
        </Card>
        <Card className="bg-muted/30">
          <CardContent className="p-4 text-center">
            <p className="text-2xl font-semibold">{useMDG}</p>
            <p className="text-xs text-muted-foreground mt-1">Usan MasterDataGrid</p>
          </CardContent>
        </Card>
        <Card className="bg-muted/30">
          <CardContent className="p-4 text-center">
            <p className="text-2xl font-semibold">{layerCounts.ui}</p>
            <p className="text-xs text-muted-foreground mt-1">Capa UI</p>
          </CardContent>
        </Card>
        <Card className="bg-muted/30">
          <CardContent className="p-4 text-center">
            <p className="text-2xl font-semibold">{layerCounts.advanced}</p>
            <p className="text-xs text-muted-foreground mt-1">Capa Advanced</p>
          </CardContent>
        </Card>
        <Card className="bg-muted/30">
          <CardContent className="p-4 text-center">
            <p className="text-2xl font-semibold">{layerCounts.patterns}</p>
            <p className="text-xs text-muted-foreground mt-1">Capa Patterns</p>
          </CardContent>
        </Card>
      </div>

      {/* Main Content */}
      <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-4">
        <TabsList className="grid w-full grid-cols-4 max-w-lg">
          <TabsTrigger value="catalog">Catálogo Visual</TabsTrigger>
          <TabsTrigger value="comparison">Tabla Comparativa</TabsTrigger>
          <TabsTrigger value="composability">Composabilidad</TabsTrigger>
          <TabsTrigger value="usage">Guía de Uso</TabsTrigger>
        </TabsList>

        {/* ─── TAB 1: CATÁLOGO VISUAL ─── */}
        <TabsContent value="catalog" className="space-y-6">
          {/* By Layer */}
          {[
            { layer: "ui", title: "UI Primitives", desc: "Componentes base de Shadcn UI" },
            { layer: "advanced", title: "Advanced", desc: "Componentes con lógica compleja" },
            { layer: "patterns", title: "Patterns", desc: "Business patterns compuestos", includeFactoring: true },
          ].map((group) => {
            const items = tableVariations.filter((v) =>
              group.includeFactoring
                ? v.layer === group.layer || v.layer === `${group.layer}/factoring`
                : v.layer === group.layer
            );
            if (items.length === 0) return null;
            return (
              <div key={group.layer} className="space-y-3">
                <div className="flex items-center gap-2">
                  <h3 className="text-lg font-semibold">{group.title}</h3>
                  <Badge variant="outline" className="text-xs">{items.length}</Badge>
                  <span className="text-sm text-muted-foreground">— {group.desc}</span>
                </div>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                  {items.map((v) => (
                    <VariationCard key={v.id} variation={v} onNavigate={handleNavigate} />
                  ))}
                </div>
              </div>
            );
          })}
        </TabsContent>

        {/* ─── TAB 2: TABLA COMPARATIVA ─── */}
        <TabsContent value="comparison" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Comparativa de Features</CardTitle>
              <CardDescription>
                Referencia rápida para elegir la variación correcta
              </CardDescription>
            </CardHeader>
            <CardContent className="p-0">
              <div className="overflow-x-auto">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead className="w-[180px] font-medium">Componente</TableHead>
                      <TableHead className="font-medium">Capa</TableHead>
                      <TableHead className="text-center font-medium">Search</TableHead>
                      <TableHead className="text-center font-medium">Filtros</TableHead>
                      <TableHead className="text-center font-medium">Sort</TableHead>
                      <TableHead className="text-center font-medium">Col Visibility</TableHead>
                      <TableHead className="text-center font-medium">Pagination</TableHead>
                      <TableHead className="text-center font-medium">Row Select</TableHead>
                      <TableHead className="text-center font-medium">Inline Edit</TableHead>
                      <TableHead className="text-center font-medium">Hierarchy</TableHead>
                      <TableHead className="text-center font-medium">Virtual</TableHead>
                      <TableHead className="text-center font-medium">MasterDataGrid</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {[
                      { name: "Table", layer: "ui", search: false, filters: false, sort: false, colVis: false, pagination: false, rowSelect: false, edit: false, hierarchy: false, virtual: false, mdg: "—" },
                      { name: "MasterDataGrid", layer: "advanced", search: true, filters: true, sort: true, colVis: true, pagination: true, rowSelect: false, edit: false, hierarchy: false, virtual: false, mdg: "es él" },
                      { name: "DataTable", layer: "advanced", search: true, filters: true, sort: true, colVis: true, pagination: true, rowSelect: true, edit: false, hierarchy: false, virtual: false, mdg: "sí" },
                      { name: "TreeTable", layer: "advanced", search: true, filters: true, sort: false, colVis: false, pagination: true, rowSelect: true, edit: false, hierarchy: true, virtual: false, mdg: "sí" },
                      { name: "DataTableAdvanced", layer: "patterns", search: true, filters: true, sort: true, colVis: false, pagination: true, rowSelect: false, edit: false, hierarchy: false, virtual: false, mdg: "sí" },
                      { name: "EditableTable", layer: "patterns", search: true, filters: true, sort: false, colVis: false, pagination: true, rowSelect: false, edit: true, hierarchy: false, virtual: false, mdg: "sí" },
                      { name: "AuditLogViewer", layer: "patterns", search: true, filters: true, sort: false, colVis: false, pagination: true, rowSelect: false, edit: false, hierarchy: false, virtual: false, mdg: "sí" },
                      { name: "FactoringSelection", layer: "patterns", search: true, filters: false, sort: true, colVis: false, pagination: false, rowSelect: true, edit: false, hierarchy: true, virtual: false, mdg: "no" },
                      { name: "VirtualizedList", layer: "advanced", search: false, filters: false, sort: false, colVis: false, pagination: false, rowSelect: false, edit: false, hierarchy: false, virtual: true, mdg: "—" },
                      { name: "InfiniteScroll", layer: "advanced", search: false, filters: false, sort: false, colVis: false, pagination: false, rowSelect: false, edit: false, hierarchy: false, virtual: false, mdg: "—" },
                      { name: "AdvancedFilterPanel", layer: "patterns", search: false, filters: true, sort: true, colVis: false, pagination: false, rowSelect: false, edit: false, hierarchy: false, virtual: false, mdg: "—" },
                    ].map((row) => (
                      <TableRow key={row.name}>
                        <TableCell className="font-medium text-sm">{row.name}</TableCell>
                        <TableCell><LayerBadge layer={row.layer} /></TableCell>
                        {[row.search, row.filters, row.sort, row.colVis, row.pagination, row.rowSelect, row.edit, row.hierarchy, row.virtual].map((val, i) => (
                          <TableCell key={i} className="text-center">
                            {val ? (
                              <span className="text-green-600 dark:text-green-400">&#10003;</span>
                            ) : (
                              <span className="text-muted-foreground/30">—</span>
                            )}
                          </TableCell>
                        ))}
                        <TableCell className="text-center text-xs text-muted-foreground">{row.mdg}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* ─── TAB 3: COMPOSABILIDAD ─── */}
        <TabsContent value="composability" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Árbol de Composabilidad</CardTitle>
              <CardDescription>
                Cómo se componen los componentes de tabla entre sí
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              {/* Visual Tree */}
              <div className="bg-muted/30 rounded-lg p-6 space-y-2 font-mono text-sm">
                <div className="text-muted-foreground">{"// Árbol de dependencia"}</div>
                <div className="space-y-1">
                  <div className="flex items-center gap-2">
                    <Badge variant="outline" className="text-[10px] bg-slate-100 dark:bg-slate-800">ui</Badge>
                    <span className="font-semibold">Table</span>
                    <span className="text-muted-foreground text-xs">← primitivo base</span>
                  </div>
                  <div className="ml-4 border-l-2 border-muted-foreground/20 pl-4 space-y-1">
                    <div className="flex items-center gap-2">
                      <Badge variant="outline" className="text-[10px] bg-blue-100 dark:bg-blue-900">advanced</Badge>
                      <span className="font-semibold">MasterDataGrid</span>
                      <span className="text-muted-foreground text-xs">← contenedor master (recibe Table como children)</span>
                    </div>
                    <div className="ml-4 border-l-2 border-muted-foreground/20 pl-4 space-y-1">
                      <div className="flex items-center gap-2">
                        <Badge variant="outline" className="text-[10px] bg-blue-100 dark:bg-blue-900">advanced</Badge>
                        <span>DataTable</span>
                        <span className="text-muted-foreground text-xs">+ TanStack React Table</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Badge variant="outline" className="text-[10px] bg-blue-100 dark:bg-blue-900">advanced</Badge>
                        <span>TreeTable</span>
                        <span className="text-muted-foreground text-xs">+ expand/collapse jerárquico</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Badge variant="outline" className="text-[10px] bg-purple-100 dark:bg-purple-900">patterns</Badge>
                        <span>DataTableAdvanced</span>
                        <span className="text-muted-foreground text-xs">+ acciones por fila</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Badge variant="outline" className="text-[10px] bg-purple-100 dark:bg-purple-900">patterns</Badge>
                        <span>EditableTable</span>
                        <span className="text-muted-foreground text-xs">+ edición inline</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Badge variant="outline" className="text-[10px] bg-purple-100 dark:bg-purple-900">patterns</Badge>
                        <span>AuditLogViewer</span>
                        <span className="text-muted-foreground text-xs">+ log de auditoría</span>
                      </div>
                    </div>
                  </div>
                  <div className="ml-4 border-l-2 border-muted-foreground/20 pl-4 space-y-1 mt-2">
                    <div className="flex items-center gap-2">
                      <Badge variant="outline" className="text-[10px] bg-amber-100 dark:bg-amber-900">factoring</Badge>
                      <span className="font-semibold">FactoringSelectionPage</span>
                      <span className="text-muted-foreground text-xs">← patrón propio (Accordion + Table)</span>
                    </div>
                  </div>
                  <div className="mt-3 pt-3 border-t border-dashed border-muted-foreground/20 space-y-1">
                    <div className="text-muted-foreground text-xs mb-1">{"// Componentes complementarios (composables)"}</div>
                    <div className="flex items-center gap-2">
                      <Badge variant="outline" className="text-[10px] bg-blue-100 dark:bg-blue-900">advanced</Badge>
                      <span>VirtualizedList</span>
                      <span className="text-muted-foreground text-xs">← standalone, render virtualizado</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Badge variant="outline" className="text-[10px] bg-blue-100 dark:bg-blue-900">advanced</Badge>
                      <span>InfiniteScroll</span>
                      <span className="text-muted-foreground text-xs">← wrapper, compone con cualquier tabla</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Badge variant="outline" className="text-[10px] bg-purple-100 dark:bg-purple-900">patterns</Badge>
                      <span>AdvancedFilterPanel</span>
                      <span className="text-muted-foreground text-xs">← Sheet lateral, complemento de MasterDataGrid</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Relationship Table */}
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead className="font-medium">Desde</TableHead>
                    <TableHead className="font-medium">Relación</TableHead>
                    <TableHead className="font-medium">Hacia</TableHead>
                    <TableHead className="font-medium">Descripción</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {composabilityData.map((row, i) => (
                    <TableRow key={i}>
                      <TableCell className="font-medium text-sm">{row.from}</TableCell>
                      <TableCell>
                        <Badge variant="secondary" className="text-[10px]">{row.relation}</Badge>
                      </TableCell>
                      <TableCell className="font-medium text-sm">{row.to}</TableCell>
                      <TableCell className="text-sm text-muted-foreground">{row.desc}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </TabsContent>

        {/* ─── TAB 4: GUÍA DE USO ─── */}
        <TabsContent value="usage" className="space-y-4">
          <Alert>
            <Info className="h-4 w-4" />
            <AlertDescription>
              Esta guía te ayuda a elegir la variación de tabla correcta según tu caso de uso.
              Haz click en el nombre de un componente para ver su código de uso.
            </AlertDescription>
          </Alert>

          {/* Decision Tree */}
          <Card>
            <CardHeader>
              <CardTitle>Árbol de Decisión</CardTitle>
              <CardDescription>¿Qué tabla necesito?</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-3">
                {[
                  {
                    question: "¿Necesitas datos estáticos sin interacción?",
                    answer: "Table",
                    desc: "Usa el primitivo Table de ui/. Sin lógica, solo estilos.",
                  },
                  {
                    question: "¿Necesitas search + filtros + paginación + visibilidad de columnas?",
                    answer: "MasterDataGrid",
                    desc: "Contenedor master. Pasa tu Table como children.",
                  },
                  {
                    question: "¿Necesitas sorting declarativo con ColumnDef[] y TanStack?",
                    answer: "DataTable",
                    desc: "Define columnas como config, el componente hace el resto.",
                  },
                  {
                    question: "¿Tus datos son jerárquicos (parent → child)?",
                    answer: "TreeTable",
                    desc: "Expand/collapse con nodos. Ideal para portafolio.",
                  },
                  {
                    question: "¿Necesitas edición inline en las celdas?",
                    answer: "EditableTable",
                    desc: "Inputs, selects, datepickers directamente en la tabla.",
                  },
                  {
                    question: "¿Es un log de auditoría/historial?",
                    answer: "AuditLogViewer",
                    desc: "Badges de acción, timestamps, filtros de evento.",
                  },
                  {
                    question: "¿Selección de facturas agrupadas por deudor?",
                    answer: "FactoringSelectionPage",
                    desc: "Accordion + selección + KPIs dinámicos.",
                  },
                  {
                    question: "¿Tienes 1,000+ items y necesitas performance?",
                    answer: "VirtualizedList",
                    desc: "Solo renderiza los items visibles en viewport.",
                  },
                  {
                    question: "¿Los datos se cargan incrementalmente (API paginada)?",
                    answer: "InfiniteScroll",
                    desc: "Wrapper con IntersectionObserver. Compone con cualquier tabla.",
                  },
                  {
                    question: "¿Los filtros inline no son suficientes?",
                    answer: "AdvancedFilterPanel",
                    desc: "Panel lateral con rangos de fecha, checkboxes y más. Complemento.",
                  },
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-3 p-3 rounded-lg border bg-card hover:bg-muted/30 transition-colors">
                    <div className="h-7 w-7 rounded-full bg-primary/10 text-primary flex items-center justify-center shrink-0 text-sm font-medium">
                      {i + 1}
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-medium">{item.question}</p>
                      <p className="text-xs text-muted-foreground mt-0.5">{item.desc}</p>
                    </div>
                    <div className="shrink-0">
                      <Button
                        variant="outline"
                        size="sm"
                        className="h-7 text-xs"
                        onClick={() => setSelectedVariation(
                          tableVariations.find((v) => v.name === item.answer)?.id || null
                        )}
                      >
                        <ArrowRight className="h-3 w-3 mr-1" />
                        {item.answer}
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Code Preview for Selected Variation */}
          {selectedVar && (
            <Card>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div>
                    <CardTitle>{selectedVar.name}</CardTitle>
                    <CardDescription>{selectedVar.path}</CardDescription>
                  </div>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => setSelectedVariation(null)}
                  >
                    Cerrar
                  </Button>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <p className="text-xs font-medium text-foreground/80 mb-2">Import:</p>
                  <CodeBlock code={selectedVar.imports} language="typescript" />
                </div>
                <div>
                  <p className="text-xs font-medium text-foreground/80 mb-2">Uso:</p>
                  <CodeBlock code={selectedVar.usageCode} language="tsx" />
                </div>
              </CardContent>
            </Card>
          )}
        </TabsContent>
      </Tabs>
    </div>
  );
}