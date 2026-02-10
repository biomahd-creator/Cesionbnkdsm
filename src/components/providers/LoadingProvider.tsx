import React, { createContext, useContext, useState, useCallback, ReactNode } from "react";

/**
 * LOADING PROVIDER
 * Context global para manejar estados de carga en toda la aplicación
 * Permite mostrar/ocultar loading overlays de manera centralizada
 */

interface LoadingState {
  isLoading: boolean;
  message?: string;
  type?: "spinner" | "skeleton" | "overlay";
}

interface LoadingContextType {
  loadingState: LoadingState;
  showLoading: (message?: string, type?: LoadingState["type"]) => void;
  hideLoading: () => void;
  isLoading: boolean;
}

const LoadingContext = createContext<LoadingContextType | undefined>(undefined);

interface LoadingProviderProps {
  children: ReactNode;
}

export function LoadingProvider({ children }: LoadingProviderProps) {
  const [loadingState, setLoadingState] = useState<LoadingState>({
    isLoading: false,
    message: undefined,
    type: "overlay",
  });

  const showLoading = useCallback((message?: string, type: LoadingState["type"] = "overlay") => {
    setLoadingState({
      isLoading: true,
      message,
      type,
    });
  }, []);

  const hideLoading = useCallback(() => {
    setLoadingState({
      isLoading: false,
      message: undefined,
      type: "overlay",
    });
  }, []);

  const value: LoadingContextType = {
    loadingState,
    showLoading,
    hideLoading,
    isLoading: loadingState.isLoading,
  };

  return (
    <LoadingContext.Provider value={value}>
      {children}
    </LoadingContext.Provider>
  );
}

/**
 * Hook para usar el loading context
 */
export function useLoading() {
  const context = useContext(LoadingContext);
  if (context === undefined) {
    throw new Error("useLoading must be used within a LoadingProvider");
  }
  return context;
}
