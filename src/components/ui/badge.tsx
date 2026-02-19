import * as React from "react";
import { Slot } from "@radix-ui/react-slot@1.1.2";
import { cva, type VariantProps } from "class-variance-authority@0.7.1";

import { cn } from "./utils";

const badgeVariants = cva(
  "inline-flex items-center justify-center rounded-md border px-2 py-0.5 text-xs font-medium w-fit whitespace-nowrap shrink-0 [&>svg]:size-3 gap-1 [&>svg]:pointer-events-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive transition-[color,box-shadow] overflow-hidden",
  {
    variants: {
      variant: {
        /* ── Base Variants ── */
        default:
          "border-transparent bg-primary text-primary-foreground [a&]:hover:bg-primary/90",
        secondary:
          "border-transparent bg-secondary text-secondary-foreground [a&]:hover:bg-secondary/90",
        outline:
          "text-foreground [a&]:hover:bg-accent [a&]:hover:text-accent-foreground",
        neutral:
          "border-transparent bg-muted text-muted-foreground [a&]:hover:bg-muted/90",

        /* ── Semantic Solid ── */
        destructive:
          "border-transparent bg-red-600 text-white [a&]:hover:bg-red-700 dark:bg-red-600 dark:text-white dark:[a&]:hover:bg-red-700",
        success:
          "border-transparent bg-green-600 text-white [a&]:hover:bg-green-700 dark:bg-green-600 dark:text-white dark:[a&]:hover:bg-green-700",
        warning:
          "border-transparent bg-amber-500 text-white [a&]:hover:bg-amber-600 dark:bg-amber-500 dark:text-white dark:[a&]:hover:bg-amber-600",
        info:
          "border-transparent bg-blue-600 text-white [a&]:hover:bg-blue-700 dark:bg-blue-600 dark:text-white dark:[a&]:hover:bg-blue-700",

        /* ── Semantic Outline ── */
        "destructive-outline":
          "border-red-300 bg-transparent text-red-700 [a&]:hover:bg-red-50 dark:border-red-500/30 dark:text-red-400 dark:[a&]:hover:bg-red-500/10",
        "success-outline":
          "border-green-300 bg-transparent text-green-700 [a&]:hover:bg-green-50 dark:border-green-500/30 dark:text-green-400 dark:[a&]:hover:bg-green-500/10",
        "warning-outline":
          "border-amber-300 bg-transparent text-amber-700 [a&]:hover:bg-amber-50 dark:border-amber-500/30 dark:text-amber-400 dark:[a&]:hover:bg-amber-500/10",
        "info-outline":
          "border-blue-300 bg-transparent text-blue-700 [a&]:hover:bg-blue-50 dark:border-blue-500/30 dark:text-blue-400 dark:[a&]:hover:bg-blue-500/10",

        /* ── Semantic Soft (tinted bg + colored text) ── */
        "destructive-soft":
          "border-transparent bg-red-100 text-red-700 [a&]:hover:bg-red-200 dark:bg-red-500/15 dark:text-red-400 dark:[a&]:hover:bg-red-500/25",
        "success-soft":
          "border-transparent bg-green-100 text-green-700 [a&]:hover:bg-green-200 dark:bg-green-500/15 dark:text-green-400 dark:[a&]:hover:bg-green-500/25",
        "warning-soft":
          "border-transparent bg-amber-100 text-amber-700 [a&]:hover:bg-amber-200 dark:bg-amber-500/15 dark:text-amber-400 dark:[a&]:hover:bg-amber-500/25",
        "info-soft":
          "border-transparent bg-blue-100 text-blue-700 [a&]:hover:bg-blue-200 dark:bg-blue-500/15 dark:text-blue-400 dark:[a&]:hover:bg-blue-500/25",

        /* ── Semantic Soft-Outline (tinted bg + colored border + colored text) ── */
        "destructive-soft-outline":
          "border-red-300 bg-red-100 text-red-700 [a&]:hover:bg-red-200 dark:border-red-500/40 dark:bg-red-500/15 dark:text-red-400 dark:[a&]:hover:bg-red-500/25",
        "success-soft-outline":
          "border-green-300 bg-green-100 text-green-700 [a&]:hover:bg-green-200 dark:border-green-500/40 dark:bg-green-500/15 dark:text-green-400 dark:[a&]:hover:bg-green-500/25",
        "warning-soft-outline":
          "border-amber-300 bg-amber-100 text-amber-700 [a&]:hover:bg-amber-200 dark:border-amber-500/40 dark:bg-amber-500/15 dark:text-amber-400 dark:[a&]:hover:bg-amber-500/25",
        "info-soft-outline":
          "border-blue-300 bg-blue-100 text-blue-700 [a&]:hover:bg-blue-200 dark:border-blue-500/40 dark:bg-blue-500/15 dark:text-blue-400 dark:[a&]:hover:bg-blue-500/25",

        /* ── Neutral (slate — draft, created, discarded, inactive, archived) ── */
        "neutral-soft":
          "border-transparent bg-slate-100 text-slate-600 [a&]:hover:bg-slate-200 dark:bg-slate-700/40 dark:text-slate-300 dark:[a&]:hover:bg-slate-700/60",
        "neutral-soft-outline":
          "border-slate-300 bg-slate-100 text-slate-600 [a&]:hover:bg-slate-200 dark:border-slate-600/50 dark:bg-slate-700/40 dark:text-slate-300 dark:[a&]:hover:bg-slate-700/60",

        /* ── Secondary (navy brand — endorsed, negotiated, brand-flow states) ── */
        "secondary-soft":
          "border-transparent bg-secondary/10 text-secondary [a&]:hover:bg-secondary/20 dark:bg-secondary/25 dark:text-slate-300 dark:[a&]:hover:bg-secondary/35",
        "secondary-soft-outline":
          "border-secondary/30 bg-secondary/10 text-secondary [a&]:hover:bg-secondary/20 dark:border-secondary/50 dark:bg-secondary/25 dark:text-slate-300 dark:[a&]:hover:bg-secondary/35",

        /* ── Purple (special / premium — placeholder hasta paleta brand) ── */
        "purple-soft-outline":
          "border-purple-300 bg-purple-100 text-purple-700 [a&]:hover:bg-purple-200 dark:border-purple-500/40 dark:bg-purple-500/15 dark:text-purple-400 dark:[a&]:hover:bg-purple-500/25",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  },
);

function Badge({
  className,
  variant,
  asChild = false,
  ...props
}: React.ComponentProps<"span"> &
  VariantProps<typeof badgeVariants> & { asChild?: boolean }) {
  const Comp = asChild ? Slot : "span";

  return (
    <Comp
      data-slot="badge"
      className={cn(badgeVariants({ variant }), className)}
      {...props}
    />
  );
}

export { Badge, badgeVariants };