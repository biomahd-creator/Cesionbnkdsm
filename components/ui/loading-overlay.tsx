import { Loader2 } from "lucide-react";
import { useLoading } from "../providers/LoadingProvider";

/**
 * LOADING OVERLAY
 * Global loading overlay that covers the entire screen
 * Pure CSS animations — no Motion dependency
 */

interface LoadingOverlayProps {
  message?: string;
  variant?: "spinner" | "dots" | "bar";
}

export function LoadingOverlay({ 
  message = "Loading...", 
  variant = "spinner" 
}: LoadingOverlayProps) {
  const { loadingState } = useLoading();

  if (!loadingState.isLoading || loadingState.type !== "overlay") {
    return null;
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-background/80 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="flex flex-col items-center gap-4 rounded-lg bg-card p-8 shadow-lg border animate-in zoom-in-95 duration-300">
        {variant === "spinner" && (
          <Loader2 className="h-12 w-12 animate-spin text-primary" />
        )}
        {variant === "dots" && <LoadingDots />}
        {variant === "bar" && <LoadingBar />}
        
        {(loadingState.message || message) && (
          <p className="text-sm text-muted-foreground">
            {loadingState.message || message}
          </p>
        )}
      </div>
    </div>
  );
}

/**
 * LOADING DOTS
 * Three-dot animation (CSS keyframes)
 */
function LoadingDots() {
  return (
    <div className="flex gap-2">
      {[0, 1, 2].map((i) => (
        <div
          key={i}
          className="h-3 w-3 rounded-full bg-primary animate-pulse"
          style={{ animationDelay: `${i * 150}ms` }}
        />
      ))}
    </div>
  );
}

/**
 * LOADING BAR
 * Indeterminate progress bar (CSS animation)
 */
function LoadingBar() {
  return (
    <div className="relative h-2 w-64 overflow-hidden rounded-full bg-muted">
      <div
        className="absolute inset-y-0 left-0 w-1/3 bg-primary rounded-full"
        style={{
          animation: "loading-bar 1.5s ease-in-out infinite",
        }}
      />
      <style>{`
        @keyframes loading-bar {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(400%); }
        }
      `}</style>
    </div>
  );
}

/**
 * INLINE LOADING SPINNER
 * Small spinner for inline use
 */
interface InlineSpinnerProps {
  size?: "sm" | "md" | "lg";
  className?: string;
}

export function InlineSpinner({ size = "md", className = "" }: InlineSpinnerProps) {
  const sizeMap = {
    sm: "h-4 w-4",
    md: "h-6 w-6",
    lg: "h-8 w-8",
  };

  return (
    <Loader2 className={`animate-spin text-muted-foreground ${sizeMap[size]} ${className}`} />
  );
}

/**
 * BUTTON LOADING STATE
 * Loading state for buttons (spinner + text)
 */
interface ButtonLoadingProps {
  isLoading: boolean;
  loadingText?: string;
  children: React.ReactNode;
}

export function ButtonLoading({ isLoading, loadingText = "Loading...", children }: ButtonLoadingProps) {
  return (
    <span className="inline-flex items-center">
      {isLoading ? (
        <>
          <Loader2 className="mr-2 h-4 w-4 animate-spin" />
          {loadingText}
        </>
      ) : (
        children
      )}
    </span>
  );
}
