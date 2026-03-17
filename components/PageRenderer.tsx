import { Suspense, lazy, ComponentType, memo } from "react";
import { PageId } from "./types/PageId";
import { Button } from "./ui/button";
import { AlertTriangle, RefreshCw } from "lucide-react";

/**
 * PageRenderer — Dynamic page loader with React.lazy
 * Loads showcase pages on-demand to reduce initial bundle size
 */

// Simple loading fallback - no skeleton
function PageLoading() {
  return null;
}

/**
 * CacheBustError — Smart error component that detects cache issues
 */
function CacheBustError({ error }: { error: Error }) {
  const isCacheError = error.message.includes("Failed to fetch dynamically imported module") ||
                       error.message.includes("/src/");
  
  const handleClearCache = () => {
    // Attempt to clear service workers
    if ('serviceWorker' in navigator) {
      navigator.serviceWorker.getRegistrations().then(registrations => {
        registrations.forEach(registration => registration.unregister());
      });
    }
    
    // Force hard reload
    window.location.reload();
  };

  if (isCacheError) {
    return (
      <div className="flex flex-col items-center justify-center gap-6 p-12 max-w-2xl mx-auto">
        <div className="flex items-center gap-3 text-warning">
          <AlertTriangle className="size-8" />
          <h1 className="text-2xl font-semibold">Browser Cache Issue Detected</h1>
        </div>
        
        <div className="space-y-4 text-center">
          <p className="text-muted-foreground">
            Your browser is trying to load files from an old location (<code className="bg-muted px-2 py-0.5 rounded text-sm">/src/pages/</code>).
            This project uses a flat root structure without <code className="bg-muted px-2 py-0.5 rounded text-sm">/src/</code>.
          </p>
          
          <div className="bg-muted/50 border border-border rounded-lg p-6 space-y-3 text-left">
            <p className="font-medium text-foreground">Quick Fix:</p>
            <ol className="list-decimal list-inside space-y-2 text-sm text-muted-foreground">
              <li>Click the button below to force a cache refresh</li>
              <li>Or manually: Press <kbd className="px-2 py-1 bg-background border border-border rounded text-xs">Ctrl + Shift + R</kbd> (Windows/Linux) or <kbd className="px-2 py-1 bg-background border border-border rounded text-xs">Cmd + Shift + R</kbd> (Mac)</li>
              <li>If that doesn't work: Open DevTools → Application → Clear storage → Clear site data</li>
            </ol>
          </div>
          
          <Button 
            onClick={handleClearCache}
            className="gap-2"
            size="lg"
          >
            <RefreshCw className="size-4" />
            Clear Cache & Reload
          </Button>
        </div>
        
        <details className="text-xs text-muted-foreground w-full">
          <summary className="cursor-pointer hover:text-foreground">Technical Details</summary>
          <pre className="mt-2 p-3 bg-muted rounded text-left overflow-x-auto">
            {error.message}
          </pre>
        </details>
      </div>
    );
  }

  // Generic error for non-cache issues
  return (
    <div className="flex flex-col gap-4 p-8">
      <h1 className="text-2xl font-bold text-destructive">Failed to load page</h1>
      <p className="text-muted-foreground">{error.message}</p>
    </div>
  );
}

/**
 * lazyNamed — Lazy loader with named export support
 */
function lazyNamed<T extends ComponentType<any>>(
  factory: () => Promise<{ [key: string]: T }>,
  exportName?: string
) {
  return lazy(() => factory().then((mod) => {
    // If export name specified, use it
    if (exportName && mod[exportName]) {
      return { default: mod[exportName] };
    }
    
    // Find exports ending with "Page" (prefer XxxPage over XxxPageContent)
    const pageExports = Object.keys(mod).filter(
      (k) => k !== "default" && k.endsWith("Page") && typeof mod[k] === "function"
    );
    
    // Prefer XxxPage over XxxPageContent
    const mainExport = pageExports.find((k) => !k.endsWith("Content")) || pageExports[0];
    
    if (mainExport) {
      return { default: mod[mainExport] };
    }
    
    // Fallback: find any function export
    const key = Object.keys(mod).find((k) => k !== "default" && typeof mod[k] === "function");
    if (key) {
      return { default: mod[key] };
    }
    
    // Last resort: use default export
    return mod as any;
  }).catch((error) => {
    console.error("Failed to load page:", error);
    // Return a fallback error component
    return {
      default: () => <CacheBustError error={error} />
    };
  }));
}

// --- Lazy page map ---
const PAGE_MAP: Record<string, ReturnType<typeof lazyNamed>> = {
  // HOME
  home: lazyNamed(() => import("../pages/HomePage")),
  "dsm-dashboard": lazyNamed(() => import("../pages/DSMDashboardPage")),

  // COMPONENTS > Actions
  button: lazyNamed(() => import("../pages/ButtonPage")),
  toggle: lazyNamed(() => import("../pages/TogglePage")),
  "toggle-group": lazyNamed(() => import("../pages/ToggleGroupPage")),
  "split-button": lazyNamed(() => import("../pages/SplitButtonPage")),
  fab: lazyNamed(() => import("../pages/FabPage")),

  // COMPONENTS > Forms
  input: lazyNamed(() => import("../pages/InputPage")),
  "input-file": lazyNamed(() => import("../pages/InputFilePage")),
  textarea: lazyNamed(() => import("../pages/TextareaPage")),
  "textarea-autoresize": lazyNamed(() => import("../pages/TextareaAutoresizePage")),
  select: lazyNamed(() => import("../pages/SelectPage")),
  checkbox: lazyNamed(() => import("../pages/CheckboxPage")),
  "radio-group": lazyNamed(() => import("../pages/RadioGroupPage")),
  switch: lazyNamed(() => import("../pages/SwitchPage")),
  slider: lazyNamed(() => import("../pages/SliderPage")),
  calendar: lazyNamed(() => import("../pages/CalendarPage")),
  label: lazyNamed(() => import("../pages/LabelPage")),
  "date-picker": lazyNamed(() => import("../pages/DatePickerPage")),
  "date-range-picker": lazyNamed(() => import("../pages/DateRangePickerPage")),
  combobox: lazyNamed(() => import("../pages/ComboboxPage")),
  "multi-select": lazyNamed(() => import("../pages/MultiSelectPage")),
  form: lazyNamed(() => import("../pages/FormPage")),
  "input-otp": lazyNamed(() => import("../pages/InputOTPPage")),

  // COMPONENTS > Navigation
  tabs: lazyNamed(() => import("../pages/TabsPage")),
  breadcrumb: lazyNamed(() => import("../pages/BreadcrumbPage")),
  command: lazyNamed(() => import("../pages/CommandPage")),
  "dropdown-menu": lazyNamed(() => import("../pages/DropdownMenuPage")),
  pagination: lazyNamed(() => import("../pages/PaginationPage")),
  "navigation-menu": lazyNamed(() => import("../pages/NavigationMenuPage")),
  "context-menu": lazyNamed(() => import("../pages/ContextMenuPage")),
  menubar: lazyNamed(() => import("../pages/MenubarPage")),

  // COMPONENTS > Data Display
  card: lazyNamed(() => import("../pages/CardPage")),
  badge: lazyNamed(() => import("../pages/BadgePage")),
  table: lazyNamed(() => import("../pages/TablePage")),
  avatar: lazyNamed(() => import("../pages/AvatarPage")),
  separator: lazyNamed(() => import("../pages/SeparatorPage")),
  "hover-card": lazyNamed(() => import("../pages/HoverCardPage")),

  // COMPONENTS > Feedback
  alert: lazyNamed(() => import("../pages/AlertPage")),
  "alert-dialog": lazyNamed(() => import("../pages/AlertDialogPage")),
  dialog: lazyNamed(() => import("../pages/DialogPage")),
  tooltip: lazyNamed(() => import("../pages/TooltipPage")),
  progress: lazyNamed(() => import("../pages/ProgressPage")),
  skeleton: lazyNamed(() => import("../pages/SkeletonPage")),
  popover: lazyNamed(() => import("../pages/PopoverPage")),
  sheet: lazyNamed(() => import("../pages/SheetPage")),
  toast: lazyNamed(() => import("../pages/ToastPage")),
  drawer: lazyNamed(() => import("../pages/DrawerPage")),
  "empty-state": lazyNamed(() => import("../pages/EmptyStatePage")),
  "error-boundary": lazyNamed(() => import("../pages/ErrorBoundaryPage")),
  "bottom-sheet": lazyNamed(() => import("../pages/BottomSheetPage")),
  "loading-states": lazyNamed(() => import("../pages/LoadingStatesPage")),

  // COMPONENTS > Layout
  "sidebar-showcase": lazyNamed(() => import("../pages/SidebarShowcasePage")),
  accordion: lazyNamed(() => import("../pages/AccordionPage")),
  "scroll-area": lazyNamed(() => import("../pages/ScrollAreaPage")),
  "grid-showcase": lazyNamed(() => import("../pages/GridShowcasePage")),
  "layout-showcase": lazyNamed(() => import("../pages/LayoutShowcasePage")),
  "app-layout": lazyNamed(() => import("../pages/AppLayoutPage")),
  carousel: lazyNamed(() => import("../pages/CarouselPage")),
  collapsible: lazyNamed(() => import("../pages/CollapsiblePage")),

  // PATTERNS
  "stats-dashboard": lazyNamed(() => import("../pages/StatsDashboardPage")),
  "data-table-advanced": lazyNamed(() => import("../pages/DataTableAdvancedPage")),
  "advanced-filter": lazyNamed(() => import("../pages/AdvancedFilterPanelPage")),
  "editable-table": lazyNamed(() => import("../pages/EditableTablePage")),
  "multi-step-wizard": lazyNamed(() => import("../pages/MultiStepWizardPage")),
  "multi-step-form": lazyNamed(() => import("../pages/MultiStepFormPage")),
  "multi-step-form-vertical": lazyNamed(() => import("../pages/MultiStepFormVerticalPage")),
  "multi-step-wizard-vertical": lazyNamed(() => import("../pages/MultiStepWizardVerticalPage")),
  "notification-center": lazyNamed(() => import("../pages/NotificationCenterPage")),
  "contact-form": lazyNamed(() => import("../pages/ContactFormPage")),
  "factoring-status-cards": lazyNamed(() => import("../pages/FactoringStatusCardsPage")),

  // ADVANCED
  charts: lazyNamed(() => import("../pages/ChartsPage")),
  "data-visualization": lazyNamed(() => import("../pages/DataVisualizationPage")),
  "advanced-forms": lazyNamed(() => import("../pages/AdvancedFormsPage")),
  "data-table": lazyNamed(() => import("../pages/DataTablePage")),
  "tree-table-v2": lazyNamed(() => import("../pages/TreeTableV2Page")),
  "file-uploader": lazyNamed(() => import("../pages/FileUploaderPage")),
  "virtualized-list": lazyNamed(() => import("../pages/VirtualizedListPage")),
  "infinite-scroll": lazyNamed(() => import("../pages/InfiniteScrollPage")),

  // FACTORING > Components
  "liquidity-meter-component": lazyNamed(() => import("../pages/LiquidityMeterPage")),
  "risk-indicator": lazyNamed(() => import("../pages/RiskIndicatorPage")),

  // FACTORING > Pages
  "cf-dashboard": lazyNamed(() => import("../pages/CFDashboardPage")),
  "factoring-selection": lazyNamed(() => import("../pages/FactoringSelectionShowcasePage")),
  "operations-list": lazyNamed(() => import("../pages/OperationsListPage")),
  "kpi-showcase": lazyNamed(() => import("../pages/KpiShowcasePage")),

  // DESIGN SYSTEM & SPECIAL
  "brand-layout": lazyNamed(() => import("../pages/BrandLayoutPage")),
  "design-tokens": lazyNamed(() => import("../pages/DesignTokensPage")),
  "help-system-demo": lazyNamed(() => import("../pages/HelpSystemDemoPage")),
  animations: lazyNamed(() => import("../pages/AnimationsPage")),
  "animation-system": lazyNamed(() => import("../pages/AnimationSystemPage")),
  "icon-gallery": lazyNamed(() => import("../pages/IconGalleryPage")),
  "table-catalog": lazyNamed(() => import("../pages/TableCatalogPage")),
  "progress-with-range": lazyNamed(() => import("../pages/ProgressWithRangePage")),
  "factoring-invoice-table": lazyNamed(() => import("../pages/FactoringInvoiceTablePage")),
  "dsm-visual-audit": lazyNamed(() => import("../pages/DSMVisualAuditPage")),
  "widgets-library": lazyNamed(() => import("../pages/WidgetsShowcasePage")),
};

// Legacy aliases
PAGE_MAP["changelog"] = PAGE_MAP["dsm-dashboard"];

interface PageRendererProps {
  pageId: PageId;
}

function PageRendererComponent({ pageId }: PageRendererProps) {
  const LazyPage = PAGE_MAP[pageId] || PAGE_MAP["home"];

  return (
    <Suspense fallback={<PageLoading />}>
      <LazyPage />
    </Suspense>
  );
}

// Memoize to prevent re-render when only theme changes (not pageId)
export const PageRenderer = memo(PageRendererComponent);