/**
 * Type Declarations for Versioned Imports
 *
 * Figma Make uses versioned import specifiers (e.g., "package@1.0.0")
 * which Vite resolves at runtime. TypeScript needs these declarations
 * to understand these module paths.
 *
 * Each declaration maps "package@version" → "package" types.
 *
 * @version 0.2.3
 */

// ─── Radix UI Primitives ───────────────────────────────────────────

declare module "@radix-ui/react-accordion@1.2.3" {
  export * from "@radix-ui/react-accordion";
}

declare module "@radix-ui/react-alert-dialog@1.1.6" {
  export * from "@radix-ui/react-alert-dialog";
}

declare module "@radix-ui/react-aspect-ratio@1.1.2" {
  export * from "@radix-ui/react-aspect-ratio";
}

declare module "@radix-ui/react-avatar@1.1.3" {
  export * from "@radix-ui/react-avatar";
}

declare module "@radix-ui/react-checkbox@1.1.4" {
  export * from "@radix-ui/react-checkbox";
}

declare module "@radix-ui/react-collapsible@1.1.3" {
  export * from "@radix-ui/react-collapsible";
}

declare module "@radix-ui/react-context-menu@2.2.6" {
  export * from "@radix-ui/react-context-menu";
}

declare module "@radix-ui/react-dialog@1.1.6" {
  export * from "@radix-ui/react-dialog";
}

declare module "@radix-ui/react-dropdown-menu@2.1.6" {
  export * from "@radix-ui/react-dropdown-menu";
}

declare module "@radix-ui/react-hover-card@1.1.6" {
  export * from "@radix-ui/react-hover-card";
}

declare module "@radix-ui/react-label@2.1.2" {
  export * from "@radix-ui/react-label";
}

declare module "@radix-ui/react-menubar@1.1.6" {
  export * from "@radix-ui/react-menubar";
}

declare module "@radix-ui/react-navigation-menu@1.2.5" {
  export * from "@radix-ui/react-navigation-menu";
}

declare module "@radix-ui/react-popover@1.1.6" {
  export * from "@radix-ui/react-popover";
}

declare module "@radix-ui/react-progress@1.1.2" {
  export * from "@radix-ui/react-progress";
}

declare module "@radix-ui/react-radio-group@1.2.3" {
  export * from "@radix-ui/react-radio-group";
}

declare module "@radix-ui/react-scroll-area@1.2.3" {
  export * from "@radix-ui/react-scroll-area";
}

declare module "@radix-ui/react-select@2.1.6" {
  export * from "@radix-ui/react-select";
}

declare module "@radix-ui/react-separator@1.1.2" {
  export * from "@radix-ui/react-separator";
}

declare module "@radix-ui/react-slider@1.2.3" {
  export * from "@radix-ui/react-slider";
}

declare module "@radix-ui/react-slot@1.1.2" {
  export * from "@radix-ui/react-slot";
}

declare module "@radix-ui/react-switch@1.1.3" {
  export * from "@radix-ui/react-switch";
}

declare module "@radix-ui/react-tabs@1.1.3" {
  export * from "@radix-ui/react-tabs";
}

declare module "@radix-ui/react-toggle@1.1.2" {
  export * from "@radix-ui/react-toggle";
}

declare module "@radix-ui/react-toggle-group@1.1.2" {
  export * from "@radix-ui/react-toggle-group";
}

declare module "@radix-ui/react-tooltip@1.1.8" {
  export * from "@radix-ui/react-tooltip";
}

// ─── UI Libraries ──────────────────────────────────────────────────

declare module "lucide-react@0.487.0" {
  export * from "lucide-react";
}

declare module "class-variance-authority@0.7.1" {
  export * from "class-variance-authority";
}

declare module "react-day-picker@8.10.1" {
  export * from "react-day-picker";
}

declare module "embla-carousel-react@8.6.0" {
  export * from "embla-carousel-react";
  export { default } from "embla-carousel-react";
}

declare module "cmdk@1.1.1" {
  export * from "cmdk";
}

declare module "vaul@1.1.2" {
  export * from "vaul";
}

declare module "sonner@2.0.3" {
  export * from "sonner";
}

declare module "input-otp@1.4.2" {
  export * from "input-otp";
}

declare module "react-hook-form@7.55.0" {
  export * from "react-hook-form";
}

declare module "react-resizable-panels@2.1.7" {
  export * from "react-resizable-panels";
}

// ─── Animation ─────────────────────────────────────────────────────

/**
 * motion v11+ (Framer Motion successor) ships its own types for motion/react.
 * This declaration ensures TypeScript resolves the subpath correctly even if
 * the installed version's package.json "exports" aren't picked up by moduleResolution: bundler.
 */
declare module "motion/react" {
  import type { ComponentType, ReactNode } from "react";

  export interface MotionProps {
    initial?: any;
    animate?: any;
    exit?: any;
    transition?: any;
    variants?: any;
    whileHover?: any;
    whileTap?: any;
    whileInView?: any;
    whileFocus?: any;
    whileDrag?: any;
    drag?: boolean | "x" | "y";
    dragConstraints?: any;
    layout?: boolean | "position" | "size";
    layoutId?: string;
    style?: any;
    className?: string;
    children?: ReactNode;
    key?: string | number;
    onClick?: (e: any) => void;
    onAnimationComplete?: (definition: any) => void;
    [key: string]: any;
  }

  export const motion: {
    [K in keyof JSX.IntrinsicElements]: ComponentType<
      JSX.IntrinsicElements[K] & MotionProps
    >;
  };

  export const AnimatePresence: ComponentType<{
    children?: ReactNode;
    mode?: "sync" | "wait" | "popLayout";
    initial?: boolean;
    onExitComplete?: () => void;
    custom?: any;
  }>;

  export function useAnimation(): any;
  export function useMotionValue(initial: number): any;
  export function useTransform(value: any, input: number[], output: any[]): any;
  export function useSpring(value: any, config?: any): any;
  export function useInView(ref: any, options?: any): boolean;
  export function useScroll(options?: any): any;
}

// ─── Missing Module Declarations ───────────────────────────────────

declare module "@tanstack/react-table" {
  export type ColumnDef<TData, TValue = unknown> = {
    id?: string;
    accessorKey?: keyof TData | string;
    accessorFn?: (row: TData) => TValue;
    header?: any;
    cell?: any;
    footer?: any;
    enableSorting?: boolean;
    enableHiding?: boolean;
    enableColumnFilter?: boolean;
    filterFn?: any;
    size?: number;
    minSize?: number;
    maxSize?: number;
    meta?: any;
    columns?: ColumnDef<TData, any>[];
    [key: string]: any;
  };

  export type SortingState = { id: string; desc: boolean }[];
  export type ColumnFiltersState = { id: string; value: any }[];
  export type VisibilityState = Record<string, boolean>;
  export type RowSelectionState = Record<string, boolean>;
  export type ExpandedState = Record<string, boolean> | true;
  export type PaginationState = { pageIndex: number; pageSize: number };

  export interface Table<TData> {
    getHeaderGroups: () => any[];
    getRowModel: () => { rows: Row<TData>[] };
    getFilteredSelectedRowModel: () => { rows: Row<TData>[] };
    getFilteredRowModel: () => { rows: Row<TData>[] };
    getColumn: (id: string) => Column<TData, any> | undefined;
    getCanPreviousPage: () => boolean;
    getCanNextPage: () => boolean;
    getPageCount: () => number;
    getState: () => any;
    previousPage: () => void;
    nextPage: () => void;
    setPageIndex: (index: number) => void;
    setPageSize: (size: number) => void;
    getToggleAllPageRowsSelectedHandler: () => any;
    getIsAllPageRowsSelected: () => boolean;
    getIsSomePageRowsSelected: () => boolean;
    getAllColumns: () => Column<TData, any>[];
    toggleAllRowsSelected: (value?: boolean) => void;
    resetSorting: () => void;
    resetColumnFilters: () => void;
    resetColumnVisibility: () => void;
    [key: string]: any;
  }

  export interface Row<TData> {
    id: string;
    original: TData;
    index: number;
    getValue: (columnId: string) => any;
    getIsSelected: () => boolean;
    getToggleSelectedHandler: () => any;
    getVisibleCells: () => Cell<TData, any>[];
    getIsExpanded: () => boolean;
    toggleExpanded: () => void;
    subRows: Row<TData>[];
    depth: number;
    [key: string]: any;
  }

  export interface Column<TData, TValue = unknown> {
    id: string;
    getFilterValue: () => any;
    setFilterValue: (value: any) => void;
    getCanSort: () => boolean;
    getIsSorted: () => false | "asc" | "desc";
    toggleSorting: (desc?: boolean, multi?: boolean) => void;
    getToggleVisibilityHandler: () => any;
    getIsVisible: () => boolean;
    toggleVisibility: (value?: boolean) => void;
    columnDef: ColumnDef<TData, TValue>;
    [key: string]: any;
  }

  export interface Cell<TData, TValue = unknown> {
    id: string;
    column: Column<TData, TValue>;
    row: Row<TData>;
    getValue: () => TValue;
    getContext: () => any;
    [key: string]: any;
  }

  export function useReactTable<TData>(options: any): Table<TData>;
  export function getCoreRowModel(): any;
  export function getSortedRowModel(): any;
  export function getFilteredRowModel(): any;
  export function getPaginationRowModel(): any;
  export function getExpandedRowModel(): any;
  export function flexRender(component: any, props: any): any;
}

declare module "@hookform/resolvers/zod" {
  export function zodResolver(schema: any): any;
}

// ─── Drag & Drop ───────────────────────────────────────────────────

declare module "react-dnd" {
  export function DndProvider(props: any): any;
  export function useDrag(spec: any): any[];
  export function useDrop(spec: any): any[];
}

declare module "react-dnd-html5-backend" {
  export const HTML5Backend: any;
}

// ─── Masonry Grid ──────────────────────────────────────────────────

declare module "react-responsive-masonry" {
  import { ComponentType, ReactNode } from "react";
  interface MasonryProps {
    columnsCount?: number;
    gutter?: string;
    children?: ReactNode;
    [key: string]: any;
  }
  interface ResponsiveMasonryProps {
    columnsCountBreakPoints?: Record<number, number>;
    children?: ReactNode;
    [key: string]: any;
  }
  const Masonry: ComponentType<MasonryProps>;
  export const ResponsiveMasonry: ComponentType<ResponsiveMasonryProps>;
  export default Masonry;
}

// ─── Excel Export ──────────────────────────────────────────────────

declare module "xlsx" {
  export function utils_json_to_sheet(data: any[]): any;
  export function utils_book_new(): any;
  export function utils_book_append_sheet(wb: any, ws: any, name: string): void;
  export function writeFile(wb: any, filename: string): void;
  export const utils: {
    json_to_sheet: (data: any[]) => any;
    book_new: () => any;
    book_append_sheet: (wb: any, ws: any, name: string) => void;
  };
  export function write(wb: any, opts: any): any;
}

// ─── Tour / Driver.js ──────────────────────────────────────────────

declare module "driver.js" {
  export function driver(config: any): any;
}

declare module "driver.js/dist/driver.css" {
  const content: string;
  export default content;
}