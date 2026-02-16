/**
 * PageId — Source of truth for all DSM page identifiers.
 *
 * Each PageId MUST have:
 *   1. A case in PageRenderer.tsx (switch statement)
 *   2. An import of the component in PageRenderer.tsx
 *   3. An item in some navigation section (DSMSidebarNav.tsx)
 *
 * DO NOT remove a PageId without searching ALL references.
 */
export type PageId =
  // Home
  | "home" | "dsm-dashboard"

  // ── PRIMITIVES ──
  // Actions
  | "button" | "toggle" | "toggle-group" | "split-button" | "fab"
  // Forms
  | "input" | "input-new" | "input-file" | "select" | "select-new" | "checkbox" | "checkbox-new"
  | "radio-group" | "switch" | "slider" | "textarea" | "textarea-new" | "textarea-autoresize"
  | "calendar" | "calendar-new" | "form" | "form-new" | "input-otp" | "input-otp-new" | "label"
  | "combobox" | "combobox-new" | "multi-select" | "date-picker" | "date-picker-new" | "date-range-picker"
  // Navigation
  | "tabs" | "tabs-new" | "breadcrumb" | "command" | "dropdown-menu" | "menubar"
  | "navigation-menu" | "pagination" | "context-menu"
  // Data Display
  | "card" | "card-new" | "table" | "table-new" | "badge" | "badge-new" | "avatar" | "hover-card" | "separator"
  // Feedback
  | "alert" | "alert-new" | "alert-dialog" | "dialog" | "dialog-new" | "toast" | "tooltip" | "progress" | "progress-with-range"
  | "skeleton" | "sheet" | "drawer" | "popover" | "empty-state" | "error-boundary" | "bottom-sheet" | "loading-states"
  // Layout
  | "accordion" | "carousel" | "collapsible" | "resizable" | "scroll-area" | "sidebar-showcase" | "grid-showcase"
  | "layout-showcase" | "app-layout"

  // ── PATTERNS ──
  | "invoice-generator" | "editable-table" | "invoice-upload"
  | "stats-dashboard" | "quick-action" | "data-table-advanced" | "advanced-filter"
  | "approval-timeline" | "multi-step-wizard" | "multi-step-form"
  | "multi-step-form-vertical" | "multi-step-wizard-vertical"
  | "activity-feed" | "user-profile" | "comment-thread"
  | "search-results" | "notification-center"
  | "contact-form"

  // ── ADVANCED ──
  | "charts" | "rating" | "date-range-advanced"
  | "file-uploader" | "rich-text-editor" | "timeline" | "data-table" | "tree-table"
  | "tree-table-v2"
  | "export-data"
  | "data-visualization" | "advanced-forms" | "business-components"
  | "virtualized-list"
  | "infinite-scroll" | "masonry-grid" | "transfer-list"
  | "table-catalog"

  // ── FACTORING ──
  // Components
  | "liquidity-meter-component" | "risk-indicator" | "rate-display" | "invoice-card"
  | "payor-card" | "collection-timeline" | "doc-verification"
  | "factoring-invoice-table"
  // Pages
  | "factoring-selection" | "factoring-dashboard" | "operations-list" | "approval-flow"
  | "kpi-showcase" | "kpi-dashboard-advanced" | "kpi-standard"
  | "liquidity-calculator" | "onboarding" | "cf-dashboard" | "admin-portal"

  // ── DESIGN SYSTEM & SPECIAL ──
  | "brand-layout" | "elevation"
  | "help-system-demo" | "animations" | "animation-system" | "icon-gallery"
  | "audit-log"
  | "npm-consumer-test"

  // ── LEGACY ALIASES (backward compat for localStorage) ──
  | "changelog" | "button-new"
  | "widgets-library" | "widget-stat-card" | "widget-search-bar"
  | "widget-filter-bar" | "widget-navigation" | "widget-timeline";