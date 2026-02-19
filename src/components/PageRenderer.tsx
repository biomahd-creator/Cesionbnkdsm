import { PageId } from "./types/PageId";

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
  ScrollAreaPage,
  ChartsPage,
  DateRangePickerPage,
  FileUploaderPage,
  RichTextEditorPage,
  MultiSelectPage,
  DataTablePage,
  TreeTableV2Page,
  KpiShowcasePage,
  FactoringSelectionShowcasePage,
  OperationsListPage,
  CFDashboardPage,
  GridShowcasePage,
  SidebarShowcasePage,
  LayoutShowcasePage,
  MultiStepWizardPage,
  MultiStepFormPage,
  MultiStepFormVerticalPage,
  MultiStepWizardVerticalPage,
  DataVisualizationPage,
  AdvancedFormsPage,
  HelpSystemDemoPage,
  AnimationsPage,
  AnimationSystemPage,
  IconGalleryPage,
  StatsDashboardPage,
  DataTableAdvancedPage,
  AdvancedFilterPanelPage,
  VirtualizedListPage,
  InfiniteScrollPage,
  LiquidityMeterPage,
  RiskIndicatorPage,
  ContactFormPage,
  NotificationCenterPage,
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
  AppLayoutPage,
  EditableTablePage,
  DesignTokensPage,
} from "../pages";

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
      return <InputPage />;
    case "input-file":
      return <InputFilePage />;
    case "textarea":
      return <TextareaPage />;
    case "textarea-autoresize":
      return <TextareaAutoresizePage />;
    case "select":
      return <SelectPage />;
    case "checkbox":
      return <CheckboxPage />;
    case "radio-group":
      return <RadioGroupPage />;
    case "switch":
      return <SwitchPage />;
    case "slider":
      return <SliderPage />;
    case "calendar":
      return <CalendarPage />;
    case "label":
      return <LabelPage />;
    case "date-picker":
      return <DatePickerPage />;
    case "date-range-picker":
      return <DateRangePickerPage />;
    case "combobox":
      return <ComboboxPage />;
    case "multi-select":
      return <MultiSelectPage />;
    case "form":
      return <FormPage />;
    case "input-otp":
      return <InputOTPPage />;

    // COMPONENTS > Navigation
    case "tabs":
      return <TabsPage />;
    case "breadcrumb":
      return <BreadcrumbPage />;
    case "command":
      return <CommandPage />;
    case "dropdown-menu":
      return <DropdownMenuPage />;
    case "pagination":
      return <PaginationPage />;
    case "navigation-menu":
      return <NavigationMenuPage />;
    case "context-menu":
      return <ContextMenuPage />;

    // COMPONENTS > Data Display
    case "card":
      return <CardPage />;
    case "badge":
      return <BadgePage />;
    case "table":
      return <TablePage />;
    case "avatar":
      return <AvatarPage />;
    case "separator":
      return <SeparatorPage />;
    case "hover-card":
      return <HoverCardPage />;

    // COMPONENTS > Feedback
    case "alert":
      return <AlertPage />;
    case "alert-dialog":
      return <AlertDialogPage />;
    case "dialog":
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
    case "scroll-area":
      return <ScrollAreaPage />;
    case "grid-showcase":
      return <GridShowcasePage />;
    case "layout-showcase":
      return <LayoutShowcasePage />;
    case "app-layout":
      return <AppLayoutPage />;

    // PATTERNS
    case "stats-dashboard":
      return <StatsDashboardPage />;
    case "data-table-advanced":
      return <DataTableAdvancedPage />;
    case "advanced-filter":
      return <AdvancedFilterPanelPage />;
    case "editable-table":
      return <EditableTablePage />;
    case "multi-step-wizard":
      return <MultiStepWizardPage />;
    case "multi-step-form":
      return <MultiStepFormPage />;
    case "multi-step-form-vertical":
      return <MultiStepFormVerticalPage />;
    case "multi-step-wizard-vertical":
      return <MultiStepWizardVerticalPage />;
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
    case "tree-table-v2":
      return <TreeTableV2Page />;
    case "date-range-advanced":
      return <DateRangePickerPage />;
    case "file-uploader":
      return <FileUploaderPage />;
    case "rich-text-editor":
      return <RichTextEditorPage />;
    case "virtualized-list":
      return <VirtualizedListPage />;
    case "infinite-scroll":
      return <InfiniteScrollPage />;

    // FACTORING > Components
    case "liquidity-meter-component":
      return <LiquidityMeterPage />;
    case "risk-indicator":
      return <RiskIndicatorPage />;

    // FACTORING > Pages
    case "cf-dashboard":
      return <CFDashboardPage />;
    case "factoring-selection":
      return <FactoringSelectionShowcasePage />;
    case "operations-list":
      return <OperationsListPage />;
    case "kpi-showcase":
      return <KpiShowcasePage />;

    // DESIGN SYSTEM & SPECIAL
    case "brand-layout":
      return <BrandLayoutPage />;
    case "elevation":
      return <ElevationPage />;
    case "design-tokens":
      return <DesignTokensPage />;
    case "help-system-demo":
      return <HelpSystemDemoPage />;
    case "animations":
      return <AnimationsPage />;
    case "animation-system":
      return <AnimationSystemPage />;
    case "icon-gallery":
      return <IconGalleryPage />;
    case "table-catalog":
      return <TableCatalogPage />;
    case "progress-with-range":
      return <ProgressWithRangePage />;
    case "factoring-invoice-table":
      return <FactoringInvoiceTablePage />;

    // LEGACY ALIASES (backward compat for localStorage)
    case "changelog":
      return <DSMDashboardPage />;
    case "widgets-library":
      return <WidgetsShowcasePage />;

    default:
      return <HomePage />;
  }
}