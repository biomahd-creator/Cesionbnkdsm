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
| `Carousel` | Carrusel de contenido interactivo. |
| `Chart` | Gráficos basados en Recharts. |
| `Checkbox` | Selección binaria. |
| `Collapsible` | Contenido expandible simple. |
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
| `Menubar` | Menú horizontal de aplicación. |
| `MultiSelect` | Selector múltiple con tags (UI Standard). |
| `NavigationMenu` | Menú de navegación principal. |
| `Pagination` | Navegación entre páginas de datos. |
| `Popover` | Contenido flotante activado por click. |
| `Progress` | Barra de progreso lineal. |
| `ProgressWithRange` | Barra de progreso con etiquetas de rango inicio → fin (fechas, vigencias). |
| `RadioGroup` | Selección única entre opciones. |
| `Resizable` | Paneles redimensionables. |
| `ScrollArea` | Contenedor con scroll personalizado. |
| `Select` | Dropdown nativo estilizado. |
| `Separator` | Divisor visual. |
| `Sheet` | Panel lateral deslizante. |
| `Sidebar` | Layout de navegación lateral. |
| `Skeleton` | Placeholders de carga animados. |
| `Slider` | Selector de rango numérico. |
| `Sonner` | Sistema de notificaciones (Toasts). |
| `SplitButton` | Botón con acción principal y menú desplegable. |
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
| `ExportData` | Utilidad para exportar CSV/Excel. |
| `FileUploader` | Zona de carga de archivos drag & drop. |
| `FormBuilder` | Constructor visual de formularios. |
| `FunnelChart` | Gráfico de embudo. |
| `GaugeChart` | Gráfico de medidor/velocímetro. |
| `Heatmap` | Mapa de calor. |
| `InfiniteScroll` | Lista con carga infinita. |
| `InvoiceGenerator` | Generador de facturas PDF/Vista. |
| `MasonryGrid` | Grid estilo Pinterest. |
| `MultiColumnForm` | Layout de formulario en múltiples columnas. |
| `RatingComponent` | Input de calificación (estrellas). |
| `RichTextEditor` | Editor de texto enriquecido (WYSIWYG). |
| `Sparkline` | Mini gráficos de línea. |
| `StepIndicator` | Indicador de pasos para wizards. |
| `Timeline` | Línea de tiempo vertical. |
| `TransferList` | Lista de transferencia doble. |
| `TreeTable` | Tabla jerárquica (árbol). |
| `TreemapChart` | Gráfico de mapa de árbol. |
| `VirtualizedList` | Lista de alto rendimiento para miles de items. |

## 3. BUSINESS PATTERNS (`/components/patterns`)
Soluciones completas para flujos de negocio comunes.

| Componente | Descripción |
|---|---|
| `ActivityFeed` | Feed de actividad reciente. |
| `AdminPortal` | Layout para paneles de administración. |
| `AdvancedFilterPanel` | Panel lateral de filtros complejos. |
| `ApprovalFlowWizard` | Wizard para procesos de aprobación. |
| `ApprovalTimeline` | Línea de tiempo de estados de aprobación. |
| `CommentThread` | Sistema de comentarios anidados. |
| `DataTableAdvanced` | Implementación específica de DataTable. |
| `EditableTable` | Tabla con edición en línea (Excel-like). |
| `KPIShowcase` | Grid de tarjetas de indicadores clave. |
| `KpiCard` | Tarjeta individual de KPI. |
| `MasterDataGrid` | Grid de datos maestro con edición masiva. |
| `MultiStepWizard` | Asistente paso a paso genérico. |
| `NotificationCenter` | Centro de notificaciones desplegable. |
| `OnboardingWizard` | Flujo de bienvenida para usuarios. |
| `QuickActionToolbar` | Barra de acciones rápidas contextuales. |
| `SearchResults` | Página de resultados de búsqueda. |
| `StatsDashboard` | Dashboard de estadísticas generales. |
| `UploadZone` | Zona de carga especializada. |
| `UserProfileCard` | Tarjeta de perfil de usuario detallada. |

## 4. WIDGETS (`/components/widgets`)
Piezas de UI especializadas, a menudo compuestas de primitivos.

| Componente | Descripción |
|---|---|
| `ActionButton` | Botón con estados de carga/éxito integrados. |
| `AuditLogViewer` | Visor de logs de auditoría. |
| `ColorPresetButton` | Botón para seleccionar presets de color. |
| `ColorSwatch` | Muestra de color estática. |
| `ContactForm` | Widget de formulario de contacto. |
| `ContrastPreview` | Herramienta de accesibilidad para contraste. |
| `FilterBar` | Barra horizontal de filtros simples. |
| `FilterChip` | Chip individual de filtro. |
| `FormField` | Wrapper de campo de formulario (Legacy). |
| `GridSystemPreview` | Visualizador de grid layout. |
| `InvoiceTable` | Tabla específica de facturas. |
| `NavigationBar` | Barra de navegación secundaria. |
| `SearchBar` | Barra de búsqueda expandible. |
| `SpacingPreview` | Visualizador de tokens de espaciado. |
| `StatCard` | Tarjeta simple de estadística. |
| `StatsGrid` | Grid de StatCards. |
| `StatusKPICard` | KPI con indicador de estado (semáforo). |
| `TimelineItem` | Item individual para timelines. |

## Mantenimiento
- Para agregar un componente nuevo, ubícalo en la carpeta correspondiente según su complejidad.
- Actualiza este archivo al crear nuevos componentes.
- Evita la duplicidad: revisa si existe un componente similar en `/ui` antes de crear uno en `/widgets`.

## 5. THEMING & PROVIDERS (`/components/`)
Componentes de infraestructura para temas, idiomas y estado global.

| Componente | Descripción |
|---|---|
| `ThemeProvider` | Provider de contexto para tema (light/dark), estilo visual (8 temas CSS), y configuración de colores. |
| `ThemeStyleSelector` | Popover selector de estilo visual global. Controla `data-theme` en `<html>`. |
| `LanguageProvider` | Provider i18n (ES/EN). |
| `LanguageSelector` | Dropdown selector de idioma. |
| `LoadingProvider` | Provider de estados de carga globales. |
| `TransitionProvider` | Provider de transiciones de página. |

### Temas CSS disponibles (`/styles/themes/`)

| Archivo | ID | Estilo |
|---|---|---|
| `theme-premium.css` | `premium` | Linear/Vercel — zinc, bordes sutiles |
| `theme-glass.css` | `glass` | Apple/Figma — glassmorphism, blur |
| `theme-minimal.css` | `minimal` | Notion/Stripe — stone, ultra limpio |
| `theme-tailwindpro.css` | `tailwindpro` | Tailwind UI — slate, ring focus |
| `theme-heroui.css` | `heroui` | HeroUI/NextUI — rounded, soft shadows |
| `theme-soft.css` | `soft` | Pastel — warm stone, cozy |
| `theme-highcontrast.css` | `highcontrast` | WCAG AAA — bordes gruesos, zero transparency |