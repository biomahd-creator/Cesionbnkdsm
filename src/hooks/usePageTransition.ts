import { useEffect, useCallback } from "react";
import { useTransition } from "../components/providers/TransitionProvider";

/**
 * HOOK: usePageTransition
 * Facilita el manejo de transiciones entre páginas
 * 
 * @example
 * const { triggerPageChange } = usePageTransition();
 * triggerPageChange("home", "dashboard", "slide");
 */

interface UsePageTransitionOptions {
  onTransitionStart?: () => void;
  onTransitionEnd?: () => void;
  duration?: number; // en ms
}

export function usePageTransition(options: UsePageTransitionOptions = {}) {
  const { startTransition, endTransition, isTransitioning } = useTransition();
  const { onTransitionStart, onTransitionEnd, duration = 300 } = options;

  const triggerPageChange = useCallback(
    (
      from: string,
      to: string,
      type: "fade" | "slide" | "scale" | "none" = "fade",
      direction: "forward" | "backward" | "none" = "forward"
    ) => {
      // Callback de inicio
      onTransitionStart?.();

      // Iniciar transición
      startTransition(from, to, type, direction);

      // Finalizar transición después del duration
      setTimeout(() => {
        endTransition();
        onTransitionEnd?.();
      }, duration);
    },
    [startTransition, endTransition, onTransitionStart, onTransitionEnd, duration]
  );

  return {
    triggerPageChange,
    isTransitioning,
  };
}

/**
 * HOOK: usePageEnter
 * Ejecuta una función cuando la página entra (se monta)
 * Útil para analytics, scroll to top, etc.
 */
export function usePageEnter(callback: () => void, pageName?: string) {
  useEffect(() => {
    callback();
    
    // Announce page change for screen readers
    if (pageName) {
      const liveRegion = document.getElementById("live-region-polite");
      if (liveRegion) {
        liveRegion.textContent = `Navegaste a ${pageName}`;
      }
    }
  }, [callback, pageName]);
}

/**
 * HOOK: useScrollToTop
 * Scroll automático al inicio al montar el componente
 */
export function useScrollToTop(smooth = true) {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: smooth ? "smooth" : "auto",
    });
  }, [smooth]);
}
