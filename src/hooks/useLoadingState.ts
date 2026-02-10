import { useState, useCallback, useEffect, useRef } from "react";
import { useLoading } from "../components/providers/LoadingProvider";
import { LOADING_DELAYS } from "../lib/animation-config";

/**
 * HOOK: useLoadingState
 * Maneja estados de carga locales con soporte para delays y cleanup
 * 
 * @example
 * const { isLoading, startLoading, stopLoading } = useLoadingState();
 */

interface UseLoadingStateOptions {
  delay?: number; // Delay antes de mostrar el loading (evita flashes)
  minDuration?: number; // Duración mínima del loading (evita parpadeos)
  onStart?: () => void;
  onEnd?: () => void;
}

export function useLoadingState(options: UseLoadingStateOptions = {}) {
  const { delay = LOADING_DELAYS.short, minDuration = 500, onStart, onEnd } = options;
  const [isLoading, setIsLoading] = useState(false);
  const [showLoading, setShowLoading] = useState(false);
  
  const startTimeRef = useRef<number | null>(null);
  const delayTimerRef = useRef<NodeJS.Timeout | null>(null);
  const minDurationTimerRef = useRef<NodeJS.Timeout | null>(null);

  const startLoading = useCallback(() => {
    setIsLoading(true);
    onStart?.();

    // Si hay delay, esperar antes de mostrar
    if (delay > 0) {
      delayTimerRef.current = setTimeout(() => {
        setShowLoading(true);
        startTimeRef.current = Date.now();
      }, delay);
    } else {
      setShowLoading(true);
      startTimeRef.current = Date.now();
    }
  }, [delay, onStart]);

  const stopLoading = useCallback(() => {
    // Si aún está en el delay, cancelar
    if (delayTimerRef.current) {
      clearTimeout(delayTimerRef.current);
      delayTimerRef.current = null;
      setIsLoading(false);
      onEnd?.();
      return;
    }

    // Calcular tiempo transcurrido
    const elapsed = startTimeRef.current ? Date.now() - startTimeRef.current : minDuration;
    const remaining = Math.max(0, minDuration - elapsed);

    // Esperar la duración mínima
    minDurationTimerRef.current = setTimeout(() => {
      setShowLoading(false);
      setIsLoading(false);
      startTimeRef.current = null;
      onEnd?.();
    }, remaining);
  }, [minDuration, onEnd]);

  // Cleanup on unmount
  useEffect(() => {
    return () => {
      if (delayTimerRef.current) clearTimeout(delayTimerRef.current);
      if (minDurationTimerRef.current) clearTimeout(minDurationTimerRef.current);
    };
  }, []);

  return {
    isLoading,
    showLoading,
    startLoading,
    stopLoading,
  };
}

/**
 * HOOK: useGlobalLoading
 * Usa el LoadingProvider global
 */
export function useGlobalLoading() {
  const { showLoading, hideLoading, isLoading } = useLoading();

  const startGlobalLoading = useCallback((message?: string) => {
    showLoading(message, "overlay");
  }, [showLoading]);

  const stopGlobalLoading = useCallback(() => {
    hideLoading();
  }, [hideLoading]);

  return {
    isGlobalLoading: isLoading,
    startGlobalLoading,
    stopGlobalLoading,
  };
}

/**
 * HOOK: useAsyncOperation
 * Ejecuta una operación async con loading automático
 * 
 * @example
 * const { execute, isLoading } = useAsyncOperation();
 * await execute(async () => {
 *   await fetchData();
 * });
 */
export function useAsyncOperation<T = void>(options: UseLoadingStateOptions = {}) {
  const { isLoading, startLoading, stopLoading } = useLoadingState(options);
  const [error, setError] = useState<Error | null>(null);
  const [data, setData] = useState<T | null>(null);

  const execute = useCallback(
    async (operation: () => Promise<T>) => {
      try {
        setError(null);
        startLoading();
        const result = await operation();
        setData(result);
        return result;
      } catch (err) {
        const error = err instanceof Error ? err : new Error("Unknown error");
        setError(error);
        throw error;
      } finally {
        stopLoading();
      }
    },
    [startLoading, stopLoading]
  );

  const reset = useCallback(() => {
    setError(null);
    setData(null);
  }, []);

  return {
    execute,
    isLoading,
    error,
    data,
    reset,
  };
}
