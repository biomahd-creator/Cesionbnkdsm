import { PageId } from "./SidebarNew";
// CRITICAL: Este archivo mapea TODOS los PageIds a sus componentes
// CADA CASO requiere:
//    1. Import del componente (arriba)
//    2. Case en el switch (abajo)
//    3. PageId existente en SidebarNew.tsx
// NO eliminar imports/casos sin verificar referencias

import {
  HomePage,
  DSMDashboardPage,
  ButtonPage,
  TogglePage,
  ToggleGroupPage,
  BrandLayoutPage,
  DatePickerPage,
  ComboboxPage,
  FormPage,
  InputOTPPage,
  AlertDialogPage,
  ToastPage,
  DrawerPage,
  HoverCardPage,
  ResizablePage,
  MenubarPage,
  NavigationMenuPage,
  ContextMenuPage,
  InputPage,
  InputFilePage,
  TextareaPage,
  TextareaAutoresizePage,
  SelectPage,
  CheckboxPage,
  RadioGroupPage,
  SwitchPage,
  SliderPage,
  CalendarPage,
  LabelPage,
  CardPage,
  BadgePage,
  TablePage,
  AvatarPage,
  SeparatorPage,
  TabsPage,
  BreadcrumbPage,
  CommandPage,
  DropdownMenuPage,
  PaginationPage,
  AlertPage,
  DialogPage,
  TooltipPage,
  ProgressPage,
  SkeletonPage,
  PopoverPage,
  SheetPage,
  AccordionPage,
  CarouselPage,
  CollapsiblePage,
  ScrollAreaPage,
  ChartsPage,
  RatingPage,
  DateRangePickerPage,
  FileUploaderPage,
  RichTextEditorPage,
  MultiSelectPage,
  TimelinePage,
  DataTablePage,
  TreeTablePage,
  TreeTableV2Page,
  ExportDataPage,
  InvoiceGeneratorPage,
  InvoiceUploadPage,
  KpiShowcasePage,
  FactoringSelectionShowcasePage,
  FactoringDashboardPage,
  OperationsListPage,
  ApprovalFlowPage,
  LiquidityCalculatorPage,
  OnboardingPage,
  CFDashboardPage,
  AdminPortalPage,
  GridShowcasePage,
  SidebarShowcasePage,
  LayoutShowcasePage,
  MultiStepWizardPage,
  MultiStepFormPage,
  MultiStepFormVerticalPage,
  MultiStepWizardVerticalPage,
  BusinessComponentsPage,
  DataVisualizationPage,
  AdvancedFormsPage,
  HelpSystemDemoPage,
  AnimationsPage,
  AnimationSystemPage,
  IconGalleryPage,
  StatsDashboardPage,
  QuickActionToolbarPage,
  DataTableAdvancedPage,
  AdvancedFilterPanelPage,
  ApprovalTimelinePage,
  VirtualizedListPage,
  InfiniteScrollPage,
  MasonryGridPage,
  TransferListPage,
  LiquidityMeterPage,
  RiskIndicatorPage,
  RateDisplayPage,
  InvoiceCardPage,
  PayorCardPage,
  CollectionTimelinePage,
  DocVerificationPage,
  AuditLogViewerPage,
  ContactFormPage,
  NotificationCenterPage,
  ActivityFeedPage,
  UserProfilePage,
  CommentThreadPage,
  SearchResultsPage,
  LoadingStatesPage,
  EmptyStatePage,
  ErrorBoundaryPage,
  BottomSheetPage,
  FabPage,
  SplitButtonPage,
  WidgetsShowcasePage,
  ElevationPage,
  TableCatalogPage,
  ProgressWithRangePage,
  FactoringInvoiceTablePage,
} from "../pages";

import { EditableTable } from "./patterns/EditableTable";

interface PageRendererProps {
  pageId: PageId;
}

export function PageRenderer({ pageId }: PageRendererProps) {
  switch (pageId) {
    // HOME
    case "home":
      return <HomePage />;
    case "dsm-dashboard":
      return <DSMDashboardPage />;
      
    // COMPONENTS > Actions
    case "button":
    case "button-new":
      return <ButtonPage />;
    case "toggle":
      return <TogglePage />;
    case "toggle-group":
      return <ToggleGroupPage />;
    case "split-button":
      return <SplitButtonPage />;
    case "fab":
      return <FabPage />;

    // COMPONENTS > Forms
    case "input":
    case "input-new":
      return <InputPage />;
    case "input-file":
      return <InputFilePage />;
    case "textarea":
    case "textarea-new":
      return <TextareaPage />;
    case "textarea-autoresize":
      return <TextareaAutoresizePage />;
    case "select":
    case "select-new":
      return <SelectPage />;
    case "checkbox":
    case "checkbox-new":
      return <CheckboxPage />;
    case "radio-group":
      return <RadioGroupPage />;
    case "switch":
      return <SwitchPage />;
    case "slider":
      return <SliderPage />;
    case "calendar":
    case "calendar-new":
      return <CalendarPage />;
    case "label":
      return <LabelPage />;
    case "date-picker":
    case "date-picker-new":
      return <DatePickerPage />;
    case "date-range-picker":
      return <DateRangePickerPage />;
    case "combobox":
    case "combobox-new":
      return <ComboboxPage />;
    case "multi-select":
      return <MultiSelectPage />;
    case "form":
    case "form-new":
      return <FormPage />;
    case "input-otp":
    case "input-otp-new":
      return <InputOTPPage />;

    // COMPONENTS > Navigation
    case "tabs":
    case "tabs-new":
      return <TabsPage />;
    case "breadcrumb":
      return <BreadcrumbPage />;
    case "command":
      return <CommandPage />;
    case "dropdown-menu":
      return <DropdownMenuPage />;
    case "pagination":
      return <PaginationPage />;
    case "menubar":
      return <MenubarPage />;
    case "navigation-menu":
      return <NavigationMenuPage />;
    case "context-menu":
      return <ContextMenuPage />;

    // COMPONENTS > Data Display
    case "card":
    case "card-new":
      return <CardPage />;
    case "badge":
    case "badge-new":
      return <BadgePage />;
    case "table":
    case "table-new":
      return <TablePage />;
    case "avatar":
      return <AvatarPage />;
    case "separator":
      return <SeparatorPage />;
    case "hover-card":
      return <HoverCardPage />;

    // COMPONENTS > Feedback
    case "alert":
    case "alert-new":
      return <AlertPage />;
    case "alert-dialog":
      return <AlertDialogPage />;
    case "dialog":
    case "dialog-new":
      return <DialogPage />;
    case "tooltip":
      return <TooltipPage />;
    case "progress":
      return <ProgressPage />;
    case "skeleton":
      return <SkeletonPage />;
    case "popover":
      return <PopoverPage />;
    case "sheet":
      return <SheetPage />;
    case "toast":
      return <ToastPage />;
    case "drawer":
      return <DrawerPage />;
    case "empty-state":
      return <EmptyStatePage />;
    case "error-boundary":
      return <ErrorBoundaryPage />;
    case "bottom-sheet":
      return <BottomSheetPage />;
    case "loading-states":
      return <LoadingStatesPage />;

    // COMPONENTS > Layout
    case "sidebar-showcase":
      return <SidebarShowcasePage />;
    case "accordion":
      return <AccordionPage />;
    case "carousel":
      return <CarouselPage />;
    case "collapsible":
      return <CollapsiblePage />;
    case "scroll-area":
      return <ScrollAreaPage />;
    case "resizable":
      return <ResizablePage />;
    case "grid-showcase":
      return <GridShowcasePage />;
    case "layout-showcase":
      return <LayoutShowcasePage />;

    // PATTERNS
    case "stats-dashboard":
      return <StatsDashboardPage />;
    case "data-table-advanced":
      return <DataTableAdvancedPage />;
    case "advanced-filter":
      return <AdvancedFilterPanelPage />;
    case "editable-table":
      return <EditableTable />;
    case "invoice-generator":
      return <InvoiceGeneratorPage />;
    case "invoice-upload":
      return <InvoiceUploadPage />;
    case "quick-action":
      return <QuickActionToolbarPage />;
    case "approval-timeline":
      return <ApprovalTimelinePage />;
    case "multi-step-wizard":
      return <MultiStepWizardPage />;
    case "multi-step-form":
      return <MultiStepFormPage />;
    case "multi-step-form-vertical":
      return <MultiStepFormVerticalPage />;
    case "multi-step-wizard-vertical":
      return <MultiStepWizardVerticalPage />;
    case "activity-feed":
      return <ActivityFeedPage />;
    case "comment-thread":
      return <CommentThreadPage />;
    case "search-results":
      return <SearchResultsPage />;
    case "user-profile":
      return <UserProfilePage />;
    case "notification-center":
      return <NotificationCenterPage />;
    case "contact-form":
      return <ContactFormPage />;

    // ADVANCED
    case "charts":
      return <ChartsPage />;
    case "data-visualization":
      return <DataVisualizationPage />;
    case "advanced-forms":
      return <AdvancedFormsPage />;
    case "data-table":
      return <DataTablePage />;
    case "tree-table":
      return <TreeTablePage />;
    case "tree-table-v2":
      return <TreeTableV2Page />;
    case "export-data":
      return <ExportDataPage />;
    case "rating":
      return <RatingPage />;
    case "date-range-advanced":
      return <DateRangePickerPage />;
    case "file-uploader":
      return <FileUploaderPage />;
    case "rich-text-editor":
      return <RichTextEditorPage />;
    case "timeline":
      return <TimelinePage />;
    case "virtualized-list":
      return <VirtualizedListPage />;
    case "infinite-scroll":
      return <InfiniteScrollPage />;
    case "masonry-grid":
      return <MasonryGridPage />;
    case "transfer-list":
      return <TransferListPage />;
    case "business-components":
      return <BusinessComponentsPage />;

    // FACTORING > Components
    case "liquidity-meter-component":
      return <LiquidityMeterPage />;
    case "risk-indicator":
      return <RiskIndicatorPage />;
    case "rate-display":
      return <RateDisplayPage />;
    case "invoice-card":
      return <InvoiceCardPage />;
    case "payor-card":
      return <PayorCardPage />;
    case "collection-timeline":
      return <CollectionTimelinePage />;
    case "doc-verification":
      return <DocVerificationPage />;

    // FACTORING > Pages
    case "cf-dashboard":
      return <CFDashboardPage />;
    case "admin-portal":
      return <AdminPortalPage />;
    case "factoring-dashboard":
      return <FactoringDashboardPage />;
    case "operations-list":
      return <OperationsListPage />;
    case "factoring-selection":
      return <FactoringSelectionShowcasePage />;
    case "approval-flow":
      return <ApprovalFlowPage />;
    case "kpi-showcase":
    case "kpi-dashboard-advanced":
    case "kpi-standard":
      return <KpiShowcasePage />;
    case "liquidity-calculator":
      return <LiquidityCalculatorPage />;
    case "onboarding":
      return <OnboardingPage />;

    // DESIGN SYSTEM & SPECIAL
    case "brand-layout":
      return <BrandLayoutPage />;
    case "elevation":
      return <ElevationPage />;
    case "help-system-demo":
      return <HelpSystemDemoPage />;
    case "animations":
      return <AnimationsPage />;
    case "animation-system":
      return <AnimationSystemPage />;
    case "icon-gallery":
      return <IconGalleryPage />;
    case "audit-log":
      return <AuditLogViewerPage />;
    case "table-catalog":
      return <TableCatalogPage />;
    case "progress-with-range":
      return <ProgressWithRangePage />;
    case "factoring-invoice-table":
      return <FactoringInvoiceTablePage />;

    // LEGACY ALIASES (backward compat)
    case "changelog":
      return <DSMDashboardPage />;
    case "widgets-library":
    case "widget-stat-card":
    case "widget-search-bar":
    case "widget-filter-bar":
    case "widget-navigation":
    case "widget-timeline":
      return <WidgetsShowcasePage />;

    default:
      return <HomePage />;
  }
}