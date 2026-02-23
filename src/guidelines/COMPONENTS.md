# COMPONENTS INVENTORY

Este documento es la fuente de verdad sobre el catálogo de componentes disponibles en el sistema.

## 1. UI PRIMITIVES (`/components/ui`)
Componentes base construidos sobre Radix UI y Tailwind CSS. Siguen los principios de Shadcn UI.
**Estado**: Estable y Documentado.

| Componente | Descripción |
|---|---|
| `Accordion` | Lista de elementos colapsables. |
| `Alert` | Mensajes de feedback visual (Success, Error, Warning). |
| `AlertDialog` | Modal que requiere acción del usuario. |
| `AspectRatio` | Contenedor que mantiene una relación de aspecto. |
| `Avatar` | Imagen de perfil con fallback. |
| `Badge` | Etiqueta pequeña para estados o categorías. |
| `BottomSheet` | Panel deslizable desde abajo (Mobile). |
| `Breadcrumb` | Navegación jerárquica. |
| `Button` | Elemento interactivo principal. |
| `Calendar` | Selector de fechas visual. |
| `Card` | Contenedor base con header, content y footer. |
| `Carousel` | Carrusel de contenido interactivo. Soporta orientación horizontal/vertical, loop, multi-item y control programático via `setApi`. |
| `Chart` | Gráficos basados en Recharts. |
| `Checkbox` | Selección binaria. |
| `Collapsible` | Contenido expandible simple. Más ligero que Accordion; ideal para un único toggle independiente. |
| `Command` | Menú de comandos tipo Spotlight. |
| `ContextMenu` | Menú contextual (click derecho). |
| `DateRangePicker` | Selector de rango de fechas (UI Standard). |
| `Dialog` | Modal estándar. |
| `Drawer` | Panel lateral o inferior. |
| `DropdownMenu` | Menú desplegable. |
| `EmptyState` | Placeholder para contenido vacío. |
| `ErrorBoundary` | Captura de errores en runtime. |
| `FloatingActionButton` | Botón flotante para acciones principales. |
| `Form` | Wrappers para React Hook Form. |
| `HoverCard` | Preview de contenido al hacer hover. |
| `Input` | Campo de texto básico. |
| `InputFile` | Selector de archivos. |
| `InputOTP` | Campo para códigos de un solo uso. |
| `Label` | Etiqueta accesible para inputs. |
| `LoadingOverlay` | Overlay de carga global. |
| `LoadingStates` | Variantes de estados de carga. |
| `Menubar` | Barra de menú horizontal para apps de escritorio. Soporta submenús anidados, shortcuts, checkboxes, radio items y variante destructive. |
| `MultiSelect` | Selector múltiple con tags (UI Standard). |
| `NavigationMenu` | Menú de navegación principal. |
| `Pagination` | Navegación entre páginas de datos. |
| `Popover` | Contenido flotante activado por click. |
| `Progress` | Barra de progreso lineal. |
| `ProgressWithRange` | Barra de progreso con etiquetas de rango inicio → fin (fechas, vigencias). |
| `RadioGroup` | Selección única entre opciones. |
| `Resizable` | Paneles redimensionables lado a lado. Exporta `ResizablePanelGroup`, `ResizablePanel`, `ResizableHandle`. Basado en `react-resizable-panels`. Archivo: `resizable.tsx`. |
| `ScrollArea` | Contenedor con scroll personalizado. |
| `Select` | Dropdown nativo estilizado. |
| `Separator` | Divisor visual. |
| `Sheet` | Panel lateral deslizante. |
| `Sidebar` | Layout de navegación lateral. |
| `Skeleton` | Placeholders de carga animados. |
| `Slider` | Selector de rango numérico. |
| `Sonner` | Sistema de notificaciones (Toasts). |
| `SplitButton` | Botón con acción principal y menú desplegable (`label`, `actions`, `onMainAction`). |
| `Switch` | Toggle on/off. |
| `Table` | Tablas básicas estilizadas. |
| `Tabs` | Navegación por pestañas. |
| `Textarea` | Campo de texto multilínea. |
| `TextareaAutoresize` | Textarea que crece con el contenido. |
| `Toggle` | Botón de estado binario. |
| `ToggleGroup` | Grupo de botones toggle. |
| `Tooltip` | Ayuda visual al hacer hover. |

## 2. ADVANCED COMPONENTS (`/components/advanced`)
Componentes complejos de lógica específica o visualización avanzada.

| Componente | Descripción |
|---|---|
| `ChartShowcase` | Galería de gráficos de ejemplo. |
| `Combobox` | Select con búsqueda (Autocomplete). |
| `ConditionalForm` | Formularios con lógica condicional. |
| `DataTable` | Tabla avanzada con filtros, ordenamiento y paginación (TanStack Table). |
| `DatePickerWithPresets` | Selector de fechas con rangos predefinidos. |
| ~~`ExportData`~~ | *(Eliminado en v0.3.0)* |
| `FileUploader` | Zona de carga de archivos drag & drop. |
| `FormBuilder` | Constructor visual de formularios. |
| `FunnelChart` | Gráfico de embudo. |
| `GaugeChart` | Gráfico de medidor/velocímetro. |
| `Heatmap` | Mapa de calor. |
| `InfiniteScroll` | Lista con carga infinita. |
| ~~`InvoiceGenerator`~~ | *(Eliminado en v0.3.0)* |
| ~~`MasonryGrid`~~ | *(Eliminado en v0.3.0)* |
| `MasterDataGrid` | Grid de datos maestro con edición masiva. |
| `MultiColumnForm` | Layout de formulario en múltiples columnas. |
| ~~`RatingComponent`~~ | *(Eliminado en v0.3.0)* |
| `RichTextEditor` | Editor de texto enriquecido (WYSIWYG). |
| `Sparkline` | Mini gráficos de línea. |
| `StepIndicator` | Indicador de pasos para wizards. |
| ~~`Timeline`~~ | *(Eliminado en v0.3.0)* |
| ~~`TransferList`~~ | *(Eliminado en v0.3.0)* |
| `TreeTable` | Tabla jerárquica de operaciones (3 niveles: Operación → Pagador → Factura). Archivo: `tree-table.tsx`. Renombrado desde `tree-table-v2` (R4). |
| ~~`TreeTableV2`~~ | *(Renombrado a `TreeTable` en v0.3.1 — R4 compliance)* |
| `TreemapChart` | Gráfico de mapa de árbol. |
| `VirtualizedList` | Lista de alto rendimiento para miles de items. |

## 3. BUSINESS PATTERNS (`/components/patterns`)
Soluciones completas para flujos de negocio comunes.

| Componente | Archivo | Descripción |
|---|---|---|
| ~~`ActivityFeed`~~ | *(Eliminado en v0.3.0)* | |
| ~~`AdminPortal`~~ | *(Eliminado en v0.3.0)* | |
| `AdvancedFilterPanel` | `advanced-filter-panel.tsx` | Panel lateral de filtros complejos. |
| ~~`ApprovalFlowWizard`~~ | *(Eliminado en v0.3.0)* | |
| ~~`ApprovalTimeline`~~ | *(Eliminado en v0.3.0)* | |
| `AppLayout` | `app-layout.tsx` | Layout de aplicación con sidebar colapsable, header sticky y footer. |
| ~~`CommentThread`~~ | *(Eliminado en v0.3.0)* | |
| ~~`CupoValidator`~~ | *(Orphan, eliminado en v0.3.0)* | |
| `DataTableAdvanced` | `data-table-advanced.tsx` | Implementación específica de DataTable. |
| `EditableTable` | `editable-table.tsx` | Tabla con edición en línea (Excel-like). |
| ~~`FactoringCalculator`~~ | *(Orphan, eliminado en v0.3.0)* | |
| ~~`FactoringKpiCard`~~ | *(Movido a `factoring/components/` en v0.3.1)* | |
| ~~`FactoringKpiCardGroup`~~ | *(Movido a `factoring/components/` en v0.3.1)* | |
| `KPIShowcase` | `kpi-showcase.tsx` | Grid de tarjetas de indicadores clave. |
| `KPIShowcaseExtended` | `kpi-showcase-extended.tsx` | Grid de KPIs extendido con variantes avanzadas. |
| `MultiStepWizard` | `multi-step-wizard.tsx` | Asistente paso a paso genérico. |
| `NotificationCenter` | `notification-center.tsx` | Centro de notificaciones desplegable. |
| ~~`OnboardingWizard`~~ | *(Orphan, eliminado en v0.3.0)* | |
| ~~`QuickActionToolbar`~~ | *(Eliminado en v0.3.0)* | |
| `ReportsConsultation` | `reports-consultation.tsx` | Consulta y filtrado de reportes con paginación. |
| ~~`SearchResults`~~ | *(Eliminado en v0.3.0)* | |
| `StatsDashboard` | `stats-dashboard.tsx` | Dashboard de estadísticas generales. |
| ~~`UploadZone`~~ | *(Orphan, eliminado en v0.3.0)* | |
| ~~`UserProfileCard`~~ | *(Eliminado en v0.3.0)* | |

### 3.1 FACTORING PATTERNS (`/components/patterns/factoring`)
Componentes de flujo específicos de la app CESIONBNK.

| Componente | Archivo | Descripción |
|---|---|---|
| `FactoringSelectionPage` | `factoring-selection-page.tsx` | Flujo de selección de facturas con tabs: elegibles, pendientes, no elegibles, descartadas. |
| `FactoringInvoiceTable` | `factoring-invoice-table.tsx` | Tabla de facturas con validación bulk y descarte. |
| `InvoiceValidationPanel` | `invoice-validation-panel.tsx` | Panel lateral de validación de facturas. |
| `OperationSummary` | `operation-summary.tsx` | Resumen de operacin de factoring. |

## 4. WIDGETS (`/components/widgets`)
Piezas de UI especializadas, a menudo compuestas de primitivos.

| Componente | Archivo | Descripción |
|---|---|---|
| `ActionButton` | `action-button.tsx` | Botón con estados de carga/éxito integrados. |
| `ApprovalTimelineItem` | `approval-timeline-item.tsx` | Item de timeline para flujos de aprobación. |
| `ColorSwatch` | `color-swatch.tsx` | Muestra individual de color con label y valor hex. |
| `ContactForm` | `contact-form.tsx` | Formulario de contacto completo con validación. |
| `FilterBar` | `filter-bar.tsx` | Barra horizontal de filtros simples. |
| `FilterChip` | `filter-chip.tsx` | Chip individual de filtro. |
| `GridSystemPreview` | `grid-system-preview.tsx` | Visualizador de grid layout. |
| `InvoiceTable` | `invoice-table.tsx` | Tabla específica de facturas. |
| `NavigationBar` | `navigation-bar.tsx` | Barra de navegación secundaria. |
| `SearchBar` | `search-bar.tsx` | Barra de búsqueda expandible. |
| `SimpleFormField` | `simple-form-field.tsx` | Wrapper de campo de formulario (Legacy). |
| `SpacingPreview` | `spacing-preview.tsx` | Visualizador de tokens de espaciado. |
| `StatCard`        | `stat-card.tsx`        | Tarjeta simple de estadística. Props: `title`, `value`, `change`, `trend: "up" | "down"`, `icon`. |
| `StatsGrid`       | `stats-grid.tsx`       | Grid de StatCards. |
| `StatusKPICard`   | `status-kpi-card.tsx`  | KPI interactivo con variantes de color y estados visuales. Props: `title`, `subtitle`, `amount?`, `count?`, `variant: "negotiation" \| "disbursed" \| "default" \| "warning" \| "error"`, `state: "active" \| "hover" \| "normal"`, `onViewClick?`. El `state="active"` aplica `ring-1` + background coloreado; `state="normal"` muestra borde base con hover suave. Usado en `KPIShowcaseExtended` para filtrado interactivo de operaciones. |
| `TenantSelector`  | `tenant-selector.tsx`  | *(Legacy — sin uso en producción desde v0.7.0. Queda como widget de showcase.)* |

---

## 5. FACTORING APP COMPONENTS (`/factoring/components`)
Componentes de dominio exclusivos de la app CESIONBNK. No forman parte del DSM genérico.

| Componente | Archivo | Descripción |
|---|---|---|
| `CFDashboard` | `cf-dashboard.tsx` | Dashboard principal de C-Financia. |
| `FactoringKpiCard` | `factoring-kpi-card.tsx` | Tarjeta KPI con variantes de color (green, blue, yellow, orange, lime, purple). Antes en `patterns/`. |
| `FactoringKpiCardGroup` | `factoring-kpi-card-group.tsx` | Grupo de FactoringKpiCards con selección activa. Antes en `patterns/`. |

### 5.1 FACTORING VIEWS (`/factoring/views`)
Vistas standalone renderizadas dentro del `AdminLayout` vía `FactoringViewRenderer`.

| Componente | Archivo | View Key | Descripción |
|---|---|---|---|
| `FactoringNewOperation` | `factoring-new-operation.tsx` | `nueva-operacion` | Flujo de nueva operación: endosatario, negociación, info bancaria + FactoringSelectionPage. Prop `showNav?: boolean` para uso dentro del AdminLayout. |
| `RadianAdminDashboard` | `radian-admin-dashboard.tsx` | `radian` | Dashboard RADIAN con 3 tabs: Operaciones, Mandatos, Títulos Valor. |
| `ViewInversionistas` | `view-inversionistas.tsx` | `inversionistas` | Gestión de fondos: KPIs, gráficas de colocado vs. disponible, evolución TIR, tabla expandible con movimientos. *(v0.4.2)* |
| `ViewPerfilCliente` | `view-perfil-cliente.tsx` | `perfil-cliente` | Perfil corporativo de cliente: límites de crédito, operaciones activas, deudores, historial mensual, resumen de riesgo. Selector de cliente. *(v0.4.2)* |
| `ViewSettings` | `view-settings.tsx` | `settings` | Configuración en 4 tabs: Cuenta, Empresa, Notificaciones, Seguridad. *(v0.4.2)* |

### 5.2 FACTORING CESIONBNK (`/factoring/cesionbnk`)
Componentes del flujo CESIONBNK (login, módulos, workspace, navegación, carga de facturas).

| Componente | Archivo | Descripción |
|---|---|---|
| `CFinanciaFlow` | `c-financia-flow.tsx` | Orquestador principal del flujo CESIONBNK: login → módulos → workspace/radian. |
| `CFinanciaClientFlow` | `c-financia-client-flow.tsx` | Flujo del cliente: operaciones activas, detalle, carga de facturas. |
| `CFinanciaNavbar` | `c-financia-navbar.tsx` | Navbar específico de CESIONBNK con logo, usuario y toggle dark mode. |
| `FactoringWorkspace` | `factoring-workspace.tsx` | Workspace post-login: nueva operación y lista de operaciones. |
| `LoadInvoicesModal` | `load-invoices-modal.tsx` | Modal de carga de facturas (tenant-aware). Consumido por `CFinanciaClientFlow`. |
| `LoginScreen` | `login-screen.tsx` | Pantalla de login de CESIONBNK. |
| `ModulosScreen` | `modulos-screen.tsx` | Selector de módulos post-login (C-Financia, RADIAN, etc.). |

### 5.3 FACTORING MODALS (`/factoring/modals`)

| Componente | Archivo | Descripción |
|---|---|---|
| ~~`UploadInvoicesDialog`~~ | ~~`upload-invoices-dialog.tsx`~~ | **Deleted (v0.5.2)** — Was orphan with 0 consumers. Overlapped with `cesionbnk/load-invoices-modal.tsx`. |

### 5.4 FACTORING ROOT (`/factoring/`)
Componentes standalone de factoring renderizados desde showcase pages o FactoringApp.

| Componente | Archivo | Descripción |
|---|---|---|
| `FactoringApp` | `FactoringApp.tsx` | Entry point de la app Factoring con AdminLayout y sidebar. |
| `FactoringViewRenderer` | `factoring-view-renderer.tsx` | Switch de vistas: welcome, vinculación, c-financia, dashboard-comercial, etc. |
| `LiquidityMeter` | `liquidity-meter.tsx` | Medidor de liquidez visual (showcase + app). |
| `RiskIndicator` | `risk-indicator.tsx` | Indicador de riesgo con semáforo visual (showcase + app). |
| `OperationsList` | `operations-list.tsx` | Lista de operaciones de factoring con filtros y estados (showcase + app). |

### 5.5 DASHBOARD COMERCIAL (`/factoring/dashboard-comercial`)
Portfolio Cockpit integrado en la app Factoring. Contiene 5 tabs (Dashboard, Originación, Cartera, Inversionistas, Tesorería) con gráficas recharts y datos mock.

| Componente | Archivo | Descripción |
|---|---|---|
| `DashboardComercial` | `dashboard-comercial.tsx` | Orquestador principal: 5 tabs con FactoringKpiCardGroup como selector. Lazy-loaded desde `FactoringViewRenderer`. |
| `TabDashboard` | `tab-dashboard.tsx` | Tab principal: KPIs, AUM evolution, aging distribution, collection curves, DSO trend, top debtors, sector concentration, alerts. |
| `TabOriginacion` | `tab-originacion.tsx` | Tab de originación: pipeline de operaciones, conversion funnel, métricas de originación. |
| `TabCartera` | `tab-cartera.tsx` | Tab de cartera: aging buckets, tabla de facturas con drill-down, métricas de cobranza. |
| `TabInversionistas` | `tab-inversionistas.tsx` | Tab de inversionistas: fondos disponibles, colocación, rendimientos. |
| `TabTesoreria` | `tab-tesoreria.tsx` | Tab de tesorería: flujo de caja, posición de liquidez, proyecciones. |
| `KpiCards` | `kpi-cards.tsx` | Grid de tarjetas KPI del dashboard con datos formateados. |
| `AumEvolution` | `aum-evolution.tsx` | Gráfica recharts: evolución de AUM (Assets Under Management) mensual. |
| `AgingDistribution` | `aging-distribution.tsx` | Gráfica recharts: distribución de aging buckets con tabla drill-down de facturas. |
| `CollectionCurves` | `collection-curves.tsx` | Gráfica recharts: curvas de recaudo históricas vs. proyectadas. |
| `DsoTrend` | `dso-trend.tsx` | Gráfica recharts: tendencia de DSO (Days Sales Outstanding). |
| `TopDebtors` | `top-debtors.tsx` | Tabla de los principales deudores con exposición y calificación. |
| `SectorConcentration` | `sector-concentration.tsx` | Gráfica recharts: concentración de cartera por sector económico. |
| `AlertsActions` | `alerts-actions.tsx` | Panel de alertas y acciones pendientes del portfolio. |
| *(data)* | `mock-data.ts` | Datos mock centralizados: KPIs, AUM, aging, collection curves, DSO, debtors, sectores, alertas. Exports: `kpiData`, `aumEvolutionData`, `agingBuckets`, `agingInvoices`, `collectionCurvesData`, `dsoTrendData`, `topDebtors`, `sectorConcentration`, `formatCurrency`, etc. |

---

## Mantenimiento
- Para agregar un componente nuevo, ubícalo en la carpeta correspondiente según su complejidad.
- Actualiza este archivo al crear nuevos componentes.
- Evita la duplicidad: revisa si existe un componente similar en `/ui` antes de crear uno en `/widgets`.