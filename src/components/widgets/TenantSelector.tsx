import { useTheme, TENANTS } from "../providers/ThemeProvider";
import type { TenantId } from "../providers/ThemeProvider";
import { cn } from "../ui/utils";
import { Check, Palette } from "lucide-react";
import { useState, useRef, useEffect } from "react";

/**
 * TenantSelector — Brand Switcher
 *
 * Dropdown that lets you switch between white-label tenants.
 * Sets data-theme on <html> via ThemeProvider. No style.setProperty.
 *
 * @version 0.5.0
 */

interface TenantSelectorProps {
  variant?: "dropdown" | "inline";
  className?: string;
}

export function TenantSelector({ variant = "dropdown", className }: TenantSelectorProps) {
  const { tenant, setTenant } = useTheme();
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  const currentTenant = TENANTS.find((t) => t.id === tenant) ?? TENANTS[0];

  // Close on outside click
  useEffect(() => {
    if (!open) return;
    const handler = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, [open]);

  // Close on Escape
  useEffect(() => {
    if (!open) return;
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("keydown", handler);
    return () => document.removeEventListener("keydown", handler);
  }, [open]);

  if (variant === "inline") {
    return (
      <div className={cn("flex flex-wrap gap-2", className)}>
        {TENANTS.map((t) => (
          <button
            key={t.id}
            onClick={() => setTenant(t.id)}
            className={cn(
              "flex items-center gap-2 rounded-lg border px-3 py-2 transition-all",
              tenant === t.id
                ? "border-primary bg-primary/10 ring-2 ring-primary/30"
                : "border-border bg-card hover:border-primary/40 hover:bg-accent"
            )}
          >
            <span
              className="inline-block h-4 w-4 rounded-full border border-black/10 shrink-0"
              style={{ backgroundColor: t.primary }}
            />
            <span className="text-sm text-foreground">{t.name}</span>
            <span className="text-xs text-muted-foreground hidden sm:inline">
              {t.font}
            </span>
            {tenant === t.id && (
              <Check className="h-3.5 w-3.5 text-primary ml-auto" />
            )}
          </button>
        ))}
      </div>
    );
  }

  // Dropdown variant
  return (
    <div ref={ref} className={cn("relative", className)}>
      <button
        onClick={() => setOpen(!open)}
        className={cn(
          "flex items-center gap-2 rounded-full border border-border bg-card px-3 py-1.5",
          "hover:bg-accent transition-colors",
          "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
        )}
        aria-haspopup="listbox"
        aria-expanded={open}
        aria-label={`Current brand: ${currentTenant.name}. Click to switch.`}
      >
        <Palette className="h-4 w-4 text-muted-foreground" />
        <span
          className="inline-block h-3.5 w-3.5 rounded-full border border-black/10 shrink-0"
          style={{ backgroundColor: currentTenant.primary }}
        />
        <span className="text-sm text-foreground hidden md:inline">
          {currentTenant.name}
        </span>
      </button>

      {open && (
        <div
          role="listbox"
          aria-label="Select brand theme"
          className={cn(
            "absolute right-0 top-full z-50 mt-2 w-64 origin-top-right",
            "rounded-xl border border-border bg-popover shadow-elevation-3",
            "animate-in fade-in-0 zoom-in-95"
          )}
        >
          <div className="p-1.5">
            {TENANTS.map((t) => (
              <button
                key={t.id}
                role="option"
                aria-selected={tenant === t.id}
                onClick={() => {
                  setTenant(t.id);
                  setOpen(false);
                }}
                className={cn(
                  "flex w-full items-center gap-3 rounded-lg px-3 py-2.5 text-left transition-colors",
                  tenant === t.id
                    ? "bg-primary/10 text-foreground"
                    : "text-foreground hover:bg-accent"
                )}
              >
                {/* Color swatch */}
                <div className="flex items-center gap-1.5 shrink-0">
                  <span
                    className="inline-block h-5 w-5 rounded-full border border-black/10"
                    style={{ backgroundColor: t.primary }}
                  />
                  <span
                    className="inline-block h-5 w-5 rounded-full border border-black/10"
                    style={{ backgroundColor: t.secondary }}
                  />
                </div>

                {/* Info */}
                <div className="flex-1 min-w-0">
                  <div className="text-sm">{t.name}</div>
                  <div className="text-xs text-muted-foreground">{t.font}</div>
                </div>

                {/* Check */}
                {tenant === t.id && (
                  <Check className="h-4 w-4 text-primary shrink-0" />
                )}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
