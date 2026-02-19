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
  | "input" | "input-file" | "select" | "checkbox"
  | "radio-group" | "switch" | "slider" | "textarea" | "textarea-autoresize"
  | "calendar" | "form" | "input-otp" | "label"
  | "combobox" | "multi-select" | "date-picker" | "date-range-picker"
  // Navigation
  | "tabs" | "breadcrumb" | "command" | "dropdown-menu"
  | "navigation-menu" | "pagination" | "context-menu"
  // Data Display
  | "card" | "table" | "badge" | "avatar" | "hover-card" | "separator"
  // Feedback
  | "alert" | "alert-dialog" | "dialog" | "toast" | "tooltip" | "progress" | "progress-with-range"
  | "skeleton" | "sheet" | "drawer" | "popover" | "empty-state" | "error-boundary" | "bottom-sheet" | "loading-states"
  // Layout
  | "accordion" | "scroll-area" | "sidebar-showcase" | "grid-showcase"
  | "layout-showcase" | "app-layout"

  // ── PATTERNS ──
  | "editable-table"
  | "stats-dashboard" | "data-table-advanced" | "advanced-filter"
  | "multi-step-wizard" | "multi-step-form"
  | "multi-step-form-vertical" | "multi-step-wizard-vertical"
  | "notification-center"
  | "contact-form"

  // ── ADVANCED ──
  | "charts" | "date-range-advanced"
  | "file-uploader" | "rich-text-editor" | "data-table"
  | "tree-table-v2"
  | "data-visualization" | "advanced-forms"
  | "virtualized-list"
  | "infinite-scroll"
  | "table-catalog"

  // ── FACTORING ──
  // Components
  | "liquidity-meter-component" | "risk-indicator"
  | "factoring-invoice-table"
  // Pages
  | "factoring-selection" | "operations-list"
  | "kpi-showcase"
  | "cf-dashboard"

  // ── DESIGN SYSTEM & SPECIAL ──
  | "brand-layout" | "elevation"
  | "design-tokens"
  | "help-system-demo" | "animations" | "animation-system" | "icon-gallery"

  // ── WIDGETS SHOWCASE ──
  | "widgets-library"

  // ── LEGACY ALIASES (backward compat for localStorage) ──
  | "changelog";