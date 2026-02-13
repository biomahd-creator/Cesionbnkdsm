/**
 * DSMSidebarNav — Sidebar navigation for the DSM Showcase
 *
 * Renders 120+ component pages organized in collapsible sections
 * using LayoutSidebar* sub-components from the DSM itself.
 * Search functionality filters across all items.
 */
import { useState } from "react";
import {
  MousePointerClick,
  FormInput,
  Compass,
  Grid3x3,
  MessageSquare,
  LayoutGrid,
  Layers,
  Sparkles,
  Palette,
  Home,
  Search,
  X,
  Paintbrush,
  Scale,
  Zap,
  Clapperboard,
  ImageIcon,
  BookOpen,
  Box,
  Briefcase,
  type LucideIcon,
} from "lucide-react";
import {
  LayoutSidebarNav,
  LayoutSidebarGroup,
  LayoutSidebarCollapsibleGroup,
  LayoutSidebarItem,
  useAdminLayout,
} from "./patterns/AppLayout";
import type { PageId } from "./types/PageId";

interface DSMSidebarNavProps {
  activePage: PageId;
  onPageChange: (page: PageId) => void;
}

interface MenuItem {
  id: PageId;
  label: string;
}

interface MenuSection {
  id: string;
  label: string;
  icon: LucideIcon;
  count: number;
  items: MenuItem[];
}

export function DSMSidebarNav({ activePage, onPageChange }: DSMSidebarNavProps) {
  const [searchQuery, setSearchQuery] = useState("");
  const { sidebarCollapsed, closeMobileSidebar } = useAdminLayout();

  const navigate = (page: PageId) => {
    onPageChange(page);
    closeMobileSidebar();
  };

  // ═══════════════════════════════════════════════════
  // 1. COMPONENTS (UI Primitives)
  // ═══════════════════════════════════════════════════
  const componentSections: MenuSection[] = [
    {
      id: "actions",
      label: "Actions",
      icon: MousePointerClick,
      count: 5,
      items: [
        { id: "button", label: "Button" },
        { id: "toggle", label: "Toggle" },
        { id: "toggle-group", label: "Toggle Group" },
        { id: "split-button", label: "Split Button" },
        { id: "fab", label: "Floating Action Button" },
      ],
    },
    {
      id: "forms",
      label: "Forms",
      icon: FormInput,
      count: 17,
      items: [
        { id: "input-new", label: "Input" },
        { id: "input-file", label: "Input File" },
        { id: "textarea-new", label: "Textarea" },
        { id: "textarea-autoresize", label: "Textarea Autoresize" },
        { id: "select-new", label: "Select" },
        { id: "checkbox-new", label: "Checkbox" },
        { id: "radio-group", label: "Radio Group" },
        { id: "switch", label: "Switch" },
        { id: "slider", label: "Slider" },
        { id: "calendar-new", label: "Calendar" },
        { id: "date-picker-new", label: "Date Picker" },
        { id: "date-range-picker", label: "Date Range Picker" },
        { id: "combobox-new", label: "Combobox" },
        { id: "multi-select", label: "Multi Select" },
        { id: "form-new", label: "Form" },
        { id: "input-otp-new", label: "Input OTP" },
        { id: "label", label: "Label" },
      ],
    },
    {
      id: "navigation",
      label: "Navigation",
      icon: Compass,
      count: 8,
      items: [
        { id: "tabs-new", label: "Tabs" },
        { id: "breadcrumb", label: "Breadcrumb" },
        { id: "command", label: "Command" },
        { id: "dropdown-menu", label: "Dropdown Menu" },
        { id: "menubar", label: "Menubar" },
        { id: "navigation-menu", label: "Navigation Menu" },
        { id: "pagination", label: "Pagination" },
        { id: "context-menu", label: "Context Menu" },
      ],
    },
    {
      id: "data-display",
      label: "Data Display",
      icon: Grid3x3,
      count: 6,
      items: [
        { id: "card-new", label: "Card" },
        { id: "table-new", label: "Table" },
        { id: "badge-new", label: "Badge" },
        { id: "avatar", label: "Avatar" },
        { id: "hover-card", label: "Hover Card" },
        { id: "separator", label: "Separator" },
      ],
    },
    {
      id: "feedback",
      label: "Feedback",
      icon: MessageSquare,
      count: 15,
      items: [
        { id: "alert-new", label: "Alert" },
        { id: "alert-dialog", label: "Alert Dialog" },
        { id: "dialog-new", label: "Dialog" },
        { id: "toast", label: "Toast (Sonner)" },
        { id: "tooltip", label: "Tooltip" },
        { id: "progress", label: "Progress" },
        { id: "progress-with-range", label: "Progress with Range" },
        { id: "skeleton", label: "Skeleton" },
        { id: "sheet", label: "Sheet" },
        { id: "drawer", label: "Drawer" },
        { id: "popover", label: "Popover" },
        { id: "empty-state", label: "Empty State" },
        { id: "error-boundary", label: "Error Boundary" },
        { id: "bottom-sheet", label: "Bottom Sheet" },
        { id: "loading-states", label: "Loading States" },
      ],
    },
    {
      id: "layout",
      label: "Layout",
      icon: LayoutGrid,
      count: 9,
      items: [
        { id: "accordion", label: "Accordion" },
        { id: "carousel", label: "Carousel" },
        { id: "collapsible", label: "Collapsible" },
        { id: "resizable", label: "Resizable" },
        { id: "scroll-area", label: "Scroll Area" },
        { id: "sidebar-showcase", label: "Sidebar" },
        { id: "grid-showcase", label: "Grid Showcase" },
        { id: "layout-showcase", label: "Layout Showcase" },
        { id: "app-layout", label: "App Layout" },
      ],
    },
  ];

  // ═══════════════════════════════════════════════════
  // 2. PATTERNS & ADVANCED
  // ═══════════════════════════════════════════════════
  const patternSections: MenuSection[] = [
    {
      id: "patterns",
      label: "Patterns",
      icon: Layers,
      count: 18,
      items: [
        { id: "stats-dashboard", label: "Stats Dashboard" },
        { id: "data-table-advanced", label: "Data Table Advanced" },
        { id: "advanced-filter", label: "Advanced Filter Panel" },
        { id: "editable-table", label: "Editable Table" },
        { id: "invoice-generator", label: "Invoice Generator" },
        { id: "invoice-upload", label: "Invoice Upload" },
        { id: "quick-action", label: "Quick Action Toolbar" },
        { id: "approval-timeline", label: "Approval Timeline" },
        { id: "multi-step-wizard", label: "Multi-Step Wizard" },
        { id: "multi-step-form", label: "Multi-Step Form" },
        { id: "multi-step-form-vertical", label: "Multi-Step Form Vertical" },
        { id: "multi-step-wizard-vertical", label: "Multi-Step Wizard Vertical" },
        { id: "activity-feed", label: "Activity Feed" },
        { id: "comment-thread", label: "Comment Thread" },
        { id: "search-results", label: "Search Results" },
        { id: "user-profile", label: "User Profile" },
        { id: "notification-center", label: "Notification Center" },
        { id: "contact-form", label: "Contact Form" },
      ],
    },
    {
      id: "advanced",
      label: "Advanced",
      icon: Sparkles,
      count: 18,
      items: [
        { id: "charts", label: "Charts" },
        { id: "data-visualization", label: "Data Visualization" },
        { id: "advanced-forms", label: "Advanced Forms" },
        { id: "business-components", label: "Business Components" },
        { id: "data-table", label: "Data Table" },
        { id: "tree-table", label: "Tree Table" },
        { id: "tree-table-v2", label: "Tree Table v2" },
        { id: "export-data", label: "Export Data" },
        { id: "rating", label: "Rating" },
        { id: "date-range-advanced", label: "Date Range" },
        { id: "file-uploader", label: "File Uploader" },
        { id: "rich-text-editor", label: "Rich Text Editor" },
        { id: "timeline", label: "Timeline" },
        { id: "virtualized-list", label: "Virtualized List" },
        { id: "infinite-scroll", label: "Infinite Scroll" },
        { id: "masonry-grid", label: "Masonry Grid" },
        { id: "transfer-list", label: "Transfer List" },
        { id: "table-catalog", label: "Table Catalog" },
      ],
    },
  ];

  // ═══════════════════════════════════════════════════
  // 3. FACTORING
  // ═══════════════════════════════════════════════════
  const factoringSections: MenuSection[] = [
    {
      id: "factoring-components",
      label: "Factoring Components",
      icon: Box,
      count: 8,
      items: [
        { id: "liquidity-meter-component", label: "Liquidity Meter" },
        { id: "risk-indicator", label: "Risk Indicator" },
        { id: "rate-display", label: "Rate Display" },
        { id: "invoice-card", label: "Invoice Card" },
        { id: "payor-card", label: "Payor Card" },
        { id: "collection-timeline", label: "Collection Timeline" },
        { id: "doc-verification", label: "Doc Verification" },
        { id: "factoring-invoice-table", label: "Invoice Table" },
      ],
    },
    {
      id: "factoring-pages",
      label: "Factoring Pages",
      icon: Briefcase,
      count: 9,
      items: [
        { id: "cf-dashboard", label: "Main Dashboard" },
        { id: "admin-portal", label: "Admin Portal" },
        { id: "factoring-dashboard", label: "Factoring Dashboard" },
        { id: "operations-list", label: "Operations List" },
        { id: "factoring-selection", label: "Invoice Selection" },
        { id: "approval-flow", label: "Approval Flow" },
        { id: "kpi-showcase", label: "KPI Showcase" },
        { id: "liquidity-calculator", label: "Liquidity Calculator" },
        { id: "onboarding", label: "Onboarding" },
      ],
    },
  ];

  // ═══════════════════════════════════════════════════
  // 4. STANDALONE PAGES
  // ═══════════════════════════════════════════════════
  const designSystemPages: MenuItem[] = [
    { id: "brand-layout", label: "Brand Layout" },
    { id: "elevation", label: "Elevation & Shadows" },
  ];

  const resourcePages: { id: PageId; label: string; icon: LucideIcon }[] = [
    { id: "help-system-demo", label: "Help System", icon: Zap },
    { id: "animations", label: "Animations", icon: Clapperboard },
    { id: "animation-system", label: "Animation System", icon: Clapperboard },
    { id: "icon-gallery", label: "Icon Gallery", icon: ImageIcon },
    { id: "audit-log", label: "Audit Log Viewer", icon: BookOpen },
  ];

  // ═══════════════════════════════════════════════════
  // SEARCH
  // ═══════════════════════════════════════════════════
  const allSections = [
    ...componentSections,
    ...patternSections,
    ...factoringSections,
  ];

  const allItems = [
    ...allSections.flatMap((section) =>
      section.items.map((item) => ({
        ...item,
        section: section.label,
        sectionIcon: section.icon,
      }))
    ),
    ...designSystemPages.map((item) => ({
      ...item,
      section: "Design System",
      sectionIcon: Palette,
    })),
    ...resourcePages.map((item) => ({
      ...item,
      section: "Resources",
      sectionIcon: Sparkles,
    })),
  ];

  const searchResults = searchQuery
    ? allItems.filter((item) =>
        item.label.toLowerCase().includes(searchQuery.toLowerCase())
      )
    : [];

  const isSectionActive = (items: MenuItem[]) =>
    items.some((item) => item.id === activePage);

  // ═══════════════════════════════════════════════════
  // RENDER
  // ═══════════════════════════════════════════════════

  // Helper: render a list of collapsible sections
  const renderSections = (sections: MenuSection[]) =>
    sections.map((section) => (
      <LayoutSidebarCollapsibleGroup
        key={section.id}
        label={section.label}
        icon={section.icon}
        count={section.count}
        defaultOpen={isSectionActive(section.items)}
        collapsed={sidebarCollapsed}
      >
        {section.items.map((item) => (
          <LayoutSidebarItem
            key={item.id}
            label={item.label}
            active={activePage === item.id}
            onClick={() => navigate(item.id)}
            className="py-1.5 px-2 text-xs"
          />
        ))}
      </LayoutSidebarCollapsibleGroup>
    ));

  return (
    <LayoutSidebarNav className="gap-1 no-scrollbar">
      {/* Home */}
      <LayoutSidebarItem
        icon={Home}
        label="Home"
        active={activePage === "home"}
        onClick={() => navigate("home")}
        collapsed={sidebarCollapsed}
      />

      {/* Search (hidden when sidebar collapsed) */}
      {!sidebarCollapsed && (
        <div className="px-0 pb-2">
          <div className="relative group/search">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground/50 transition-colors group-focus-within/search:text-primary" />
            <input
              type="text"
              placeholder="Search components..."
              className="w-full rounded-[var(--radius)] bg-sidebar-accent/20 border border-sidebar-border/50 pl-9 pr-8 py-2 text-sm text-sidebar-foreground placeholder:text-sidebar-foreground/40 focus:outline-none focus:ring-1 focus:ring-primary/50 focus:bg-sidebar-accent/30 focus:border-primary/50 transition-all"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery("")}
                className="absolute right-2 top-2.5 text-sidebar-foreground/50 hover:text-sidebar-foreground p-0.5 hover:bg-sidebar-accent/50 rounded-sm transition-colors"
              >
                <X className="h-3.5 w-3.5" />
              </button>
            )}
          </div>
        </div>
      )}

      {searchQuery ? (
        /* ── Search Results ── */
        <LayoutSidebarGroup label={`Results (${searchResults.length})`}>
          {searchResults.length > 0 ? (
            searchResults.map((item) => (
              <LayoutSidebarItem
                key={item.id}
                icon={item.sectionIcon}
                label={item.label}
                active={activePage === item.id}
                onClick={() => navigate(item.id)}
              />
            ))
          ) : (
            <div className="px-4 py-8 flex flex-col items-center text-center gap-2">
              <div className="h-10 w-10 rounded-full bg-sidebar-accent/20 flex items-center justify-center text-sidebar-foreground/30">
                <Search className="h-5 w-5" />
              </div>
              <p className="text-sm text-sidebar-foreground/60">
                No results for &ldquo;{searchQuery}&rdquo;
              </p>
            </div>
          )}
        </LayoutSidebarGroup>
      ) : (
        <>
          {/* DSM Dashboard */}
          <LayoutSidebarItem
            icon={Sparkles}
            label="DSM Dashboard"
            active={activePage === "dsm-dashboard"}
            onClick={() => navigate("dsm-dashboard")}
            collapsed={sidebarCollapsed}
          />

          {/* Components */}
          <LayoutSidebarGroup label={sidebarCollapsed ? undefined : "Components"}>
            {renderSections(componentSections)}
          </LayoutSidebarGroup>

          {/* Patterns & Advanced */}
          <LayoutSidebarGroup label={sidebarCollapsed ? undefined : "Patterns & Advanced"}>
            {renderSections(patternSections)}
          </LayoutSidebarGroup>

          {/* Factoring */}
          <LayoutSidebarGroup label={sidebarCollapsed ? undefined : "Factoring"}>
            {renderSections(factoringSections)}
          </LayoutSidebarGroup>

          {/* Design System standalone */}
          <LayoutSidebarGroup label={sidebarCollapsed ? undefined : "Design System"}>
            {designSystemPages.map((page) => (
              <LayoutSidebarItem
                key={page.id}
                icon={page.id === "brand-layout" ? Paintbrush : Scale}
                label={page.label}
                active={activePage === page.id}
                onClick={() => navigate(page.id)}
                collapsed={sidebarCollapsed}
              />
            ))}
          </LayoutSidebarGroup>

          {/* Resources */}
          <LayoutSidebarGroup label={sidebarCollapsed ? undefined : "Resources"}>
            {resourcePages.map((page) => (
              <LayoutSidebarItem
                key={page.id}
                icon={page.icon}
                label={page.label}
                active={activePage === page.id}
                onClick={() => navigate(page.id)}
                collapsed={sidebarCollapsed}
              />
            ))}
          </LayoutSidebarGroup>
        </>
      )}
    </LayoutSidebarNav>
  );
}