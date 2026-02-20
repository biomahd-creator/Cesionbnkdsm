import { useState, useEffect } from "react";
import { PageId } from "./components/types/PageId";
import { PageRenderer } from "./components/PageRenderer";
import { DSMSidebarNav } from "./components/DSMSidebarNav";
import { Button } from "./components/ui/button";
import { Logo } from "./components/Logo";
import { Moon, Sun, ArrowRight, LayoutTemplate } from "lucide-react";
import { SkipLink } from "./components/accessibility/SkipLink";
import { ThemeProvider, useTheme } from "./components/providers/ThemeProvider";
import { Toaster } from "./components/ui/sonner";
import { FactoringApp } from "./components/factoring/FactoringApp";
import { HelpProvider } from "./components/help/HelpProvider";
import { HelpCenter } from "./components/help/HelpCenter";
import { LoadingProvider } from "./components/providers/LoadingProvider";
import { TransitionProvider } from "./components/providers/TransitionProvider";
import { LoadingOverlay } from "./components/ui/loading-overlay";
import { TenantSelector } from "./components/widgets/TenantSelector";
import {
  AdminLayout,
  LayoutHeader,
  LayoutFooter,
} from "./components/patterns/AppLayout";
import "./styles/tour.css";

/**
 * App.tsx - Main Entry Point
 *
 * ARCHITECTURE:
 * - Two modes: DSM (Design System Manager) and Factoring
 * - Providers: Theme, Help, Loading, Transition
 * - Layout: AdminLayout del DSM (eat your own dog food)
 * - Accessibility: WCAG 2.1 AA compliant
 * - English only
 */

type AppMode = "dsm" | "factoring";

/**
 * Lookup: PageId → human-readable label
 * Source of truth: mirrors DSMSidebarNav labels.
 */
const PAGE_LABELS: Partial<Record<string, string>> = {
  home: "Home", "dsm-dashboard": "DSM Dashboard",
  button: "Button", toggle: "Toggle", "toggle-group": "Toggle Group",
  "split-button": "Split Button", fab: "Floating Action Button",
  input: "Input", "input-file": "Input File",
  textarea: "Textarea", "textarea-autoresize": "Textarea Autoresize",
  select: "Select", checkbox: "Checkbox",
  "radio-group": "Radio Group", switch: "Switch", slider: "Slider",
  calendar: "Calendar",
  "date-picker": "Date Picker",
  "date-range-picker": "Date Range Picker", combobox: "Combobox",
  "multi-select": "Multi Select", form: "Form",
  "input-otp": "Input OTP", label: "Label",
  tabs: "Tabs", breadcrumb: "Breadcrumb", command: "Command",
  "dropdown-menu": "Dropdown Menu",
  "navigation-menu": "Navigation Menu", pagination: "Pagination", "context-menu": "Context Menu",
  card: "Card", table: "Table",
  badge: "Badge", avatar: "Avatar", "hover-card": "Hover Card", separator: "Separator",
  alert: "Alert", "alert-dialog": "Alert Dialog",
  dialog: "Dialog", toast: "Toast (Sonner)", tooltip: "Tooltip",
  progress: "Progress", "progress-with-range": "Progress with Range",
  skeleton: "Skeleton", sheet: "Sheet", drawer: "Drawer", popover: "Popover",
  "empty-state": "Empty State", "error-boundary": "Error Boundary",
  "bottom-sheet": "Bottom Sheet", "loading-states": "Loading States",
  accordion: "Accordion", "scroll-area": "Scroll Area", "sidebar-showcase": "Sidebar",
  "grid-showcase": "Grid Showcase", "layout-showcase": "Layout Showcase", "app-layout": "App Layout",
  "stats-dashboard": "Stats Dashboard", "data-table-advanced": "Data Table Advanced",
  "advanced-filter": "Advanced Filter Panel", "editable-table": "Editable Table",
  "multi-step-wizard": "Multi-Step Wizard", "multi-step-form": "Multi-Step Form",
  "multi-step-form-vertical": "Multi-Step Form Vertical", "multi-step-wizard-vertical": "Multi-Step Wizard Vertical",
  "notification-center": "Notification Center", "contact-form": "Contact Form",
  charts: "Charts", "data-visualization": "Data Visualization",
  "advanced-forms": "Advanced Forms",
  "data-table": "Data Table", "tree-table-v2": "Tree Table",
  "date-range-advanced": "Date Range",
  "file-uploader": "File Uploader", "rich-text-editor": "Rich Text Editor",
  "virtualized-list": "Virtualized List",
  "infinite-scroll": "Infinite Scroll", "table-catalog": "Table Catalog",
  "liquidity-meter-component": "Liquidity Meter", "risk-indicator": "Risk Indicator",
  "factoring-invoice-table": "Invoice Table",
  "cf-dashboard": "Main Dashboard",
  "operations-list": "Operations List",
  "factoring-selection": "Invoice Selection",
  "kpi-showcase": "KPI Showcase",
  "brand-layout": "Brand Layout", elevation: "Elevation & Shadows",
  "design-tokens": "Design Tokens",
  "help-system-demo": "Help System", animations: "Animations", "animation-system": "Animation System",
  "icon-gallery": "Icon Gallery",
  "widgets-library": "UI Widgets",
};

function AppContent() {
  const { theme, toggleTheme } = useTheme();
  const [activePage, setActivePage] = useState<PageId>(() => {
    const saved = localStorage.getItem("dsm-active-page");
    return (saved as PageId) || "home";
  });
  const [appMode, setAppMode] = useState<AppMode>(() => {
    const saved = localStorage.getItem("app-mode");
    return (saved as AppMode) || "dsm";
  });

  useEffect(() => {
    localStorage.setItem("dsm-active-page", activePage);
  }, [activePage]);

  useEffect(() => {
    localStorage.setItem("app-mode", appMode);
  }, [appMode]);

  // Listen for custom navigation events from child components
  useEffect(() => {
    const handler = (e: Event) => {
      const pageId = (e as CustomEvent<PageId>).detail;
      if (pageId) setActivePage(pageId);
    };
    window.addEventListener("dsm-navigate", handler);
    return () => window.removeEventListener("dsm-navigate", handler);
  }, []);

  // Sync dark mode class
  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  return (
    <div className="min-h-screen w-full">
      {appMode === "factoring" ? (
        <FactoringApp key="factoring-app" onExit={() => setAppMode("dsm")} />
      ) : (
        <>
          {/* Accessibility: Skip Link */}
          <SkipLink />

          {/* Accessibility: Live Regions */}
          <div
            id="live-region-polite"
            role="status"
            aria-live="polite"
            aria-atomic="true"
            className="sr-only"
          />
          <div
            id="live-region-assertive"
            role="alert"
            aria-live="assertive"
            aria-atomic="true"
            className="sr-only"
          />

          <AdminLayout
            stickyHeader
            collapsible
            sidebarWidth={260}
            sidebarCollapsedWidth={56}
            sidebarHeader={
              <Logo size="md" variant="auto" className="flex-shrink-0" />
            }
            header={
              <LayoutHeader
                logo={
                  <div className="flex items-center gap-4 pl-10 md:pl-0">
                    <div className="hidden md:block">
                      <h1 className="font-semibold text-foreground">
                        CESIONBNK Design System
                      </h1>
                      <p className="text-xs text-muted-foreground">
                        Design System Manager
                      </p>
                    </div>
                  </div>
                }
                actions={
                  <div className="flex items-center gap-2">
                    {/* Page ID indicator — for auditing */}
                    {activePage !== "home" && (
                      <div className="hidden sm:flex items-center gap-1.5 rounded-md border border-border bg-muted/60 px-2.5 py-1 text-xs text-muted-foreground select-text">
                        <span className="text-foreground font-medium">
                          {PAGE_LABELS[activePage] ?? activePage}
                        </span>
                        <span className="text-muted-foreground/40">·</span>
                        <code className="font-mono text-[11px] text-primary/80 bg-primary/8 px-1 py-0.5 rounded">
                          {activePage}
                        </code>
                      </div>
                    )}

                    {/* Help System */}
                    <HelpCenter variant="header" />

                    {/* Tenant/Brand Selector */}
                    <TenantSelector />

                    {/* Go to Factoring */}
                    <Button
                      variant="outline"
                      className="flex gap-2 border-primary bg-primary/10 text-foreground hover:bg-primary hover:text-primary-foreground"
                      onClick={() => setAppMode("factoring")}
                    >
                      <LayoutTemplate className="h-4 w-4" />
                      <span className="hidden md:inline">Go to Factoring</span>
                      <ArrowRight className="h-3 w-3 opacity-50 hidden md:block" />
                    </Button>

                    {/* Toggle Theme */}
                    <Button
                      variant="outline"
                      size="icon"
                      onClick={toggleTheme}
                      className="rounded-full"
                      aria-label={
                        theme === "dark"
                          ? "Switch to Light Mode"
                          : "Switch to Dark Mode"
                      }
                    >
                      {theme === "dark" ? (
                        <Sun className="h-5 w-5" />
                      ) : (
                        <Moon className="h-5 w-5" />
                      )}
                    </Button>
                  </div>
                }
              />
            }
            sidebar={
              <DSMSidebarNav
                activePage={activePage}
                onPageChange={setActivePage}
              />
            }
            footer={
              <LayoutFooter
                left={
                  <div className="flex items-center gap-3">
                    <Logo size="sm" variant="auto" />
                    <span>Built with React, Tailwind CSS v4 & Atomic Design</span>
                  </div>
                }
                right={
                  <div className="flex items-center gap-2 text-xs">
                    <span>94 Showcase Pages</span>
                    <span>·</span>
                    <span>WCAG 2.1 AA</span>
                    <span>·</span>
                    <span>Atomic Design</span>
                  </div>
                }
              />
            }
            bodyClassName="flex flex-col gap-4 p-4 pt-0 md:p-8 md:pt-6"
          >
            <div id="main-content" role="main" tabIndex={-1}>
              <PageRenderer pageId={activePage} />
            </div>
          </AdminLayout>
        </>
      )}
    </div>
  );
}

export default function App() {
  return (
    <ThemeProvider>
      <HelpProvider>
        <LoadingProvider>
          <TransitionProvider>
            <div className="relative min-h-screen">
              <Toaster />
              <AppContent />
              <LoadingOverlay />
            </div>
          </TransitionProvider>
        </LoadingProvider>
      </HelpProvider>
    </ThemeProvider>
  );
}