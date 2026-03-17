import { ReactNode } from "react";

/**
 * PAGE TRANSITION WRAPPER
 * Pure CSS transitions — no Motion dependency.
 * Uses Tailwind's animate-in utilities.
 */

interface PageTransitionProps {
  children: ReactNode;
  variant?: "page" | "fade" | "scale";
  className?: string;
  id?: string;
}

export function PageTransition({ 
  children, 
  variant = "page", 
  className = "",
  id,
}: PageTransitionProps) {
  const variantClasses = {
    page: "animate-in fade-in slide-in-from-bottom-2 duration-300",
    fade: "animate-in fade-in duration-200",
    scale: "animate-in fade-in zoom-in-95 duration-300",
  };

  return (
    <div id={id} className={`${variantClasses[variant]} ${className}`}>
      {children}
    </div>
  );
}

/**
 * ANIMATED PRESENCE WRAPPER
 * Simplified wrapper — just renders children directly.
 */
interface AnimatedPresenceWrapperProps {
  children: ReactNode;
  mode?: "wait" | "sync" | "popLayout";
}

export function AnimatedPresenceWrapper({ 
  children, 
}: AnimatedPresenceWrapperProps) {
  return <>{children}</>;
}

/**
 * FADE IN VIEW
 * Component that fades in (CSS animation)
 */
interface FadeInViewProps {
  children: ReactNode;
  className?: string;
  delay?: number;
}

export function FadeInView({ children, className = "", delay = 0 }: FadeInViewProps) {
  return (
    <div
      className={`animate-in fade-in slide-in-from-bottom-2 duration-300 ${className}`}
      style={delay > 0 ? { animationDelay: `${delay}s`, animationFillMode: "backwards" } : undefined}
    >
      {children}
    </div>
  );
}

/**
 * STAGGER CONTAINER
 * Container for children — stagger handled via CSS delay on children
 */
interface StaggerContainerProps {
  children: ReactNode;
  className?: string;
  staggerDelay?: number;
}

export function StaggerContainer({ 
  children, 
  className = "", 
}: StaggerContainerProps) {
  return (
    <div className={className}>
      {children}
    </div>
  );
}

/**
 * STAGGER ITEM
 * Individual item with fade-in animation
 */
interface StaggerItemProps {
  children: ReactNode;
  className?: string;
}

export function StaggerItem({ children, className = "" }: StaggerItemProps) {
  return (
    <div className={`animate-in fade-in slide-in-from-bottom-1 duration-200 ${className}`}>
      {children}
    </div>
  );
}
